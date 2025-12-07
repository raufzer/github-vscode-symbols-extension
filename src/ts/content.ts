import domLoaded from 'dom-loaded';
import select from 'select-dom';
import mobile from 'is-mobile';
import { observe } from 'selector-observer';

import { StorageKey } from './background';
import '../css/icons.css';
import {
  createFileIconElement,
  createFolderIconElement,
  injectIconStyles,
  preloadCommonIcons,
} from './icons/svg-icon-loader';

let colorsDisabled = false;
let darkMode = false;
let siteDarkMode = false;

const enum Host {
  GitHub = 'github',
  GitLab = 'gitlab',
  Others = 'others',
}

const isGithubPage = () => /.*github.*/.test(window.location.hostname);

const isGithubTreeViewPage = () => {
  if (!isGithubPage()) return false;

  return !!document.querySelector('#repos-file-tree');
};

const isGithubFilesPage = () => {
  if (!isGithubPage()) return false;

  const pathname = window.location.pathname;
  const filesPageUrlPattern = new RegExp(/^\/.+\/.+\/pull\/\d+\/files$/);
  return pathname.match(filesPageUrlPattern) ? true : false;
};

const getSelector = (hostname: string) => {
  switch (true) {
    case /.*github.*/.test(hostname):
      // if it is a github pull request files page
      if (isGithubFilesPage()) {
        return {
          filenameSelector:
            'ul.ActionList>li[id^=file-tree-item-diff-][role=treeitem]>a>span:nth-child(2)',
          iconSelector:
            'ul.ActionList>li[id^=file-tree-item-diff-][role=treeitem]>a>span:first-child',
          host: Host.GitHub,
        };
      }

      if (isGithubTreeViewPage()) {
        return {
          filenameSelector:
            'div.PRIVATE_TreeView-item-content > span.PRIVATE_TreeView-item-content-text > span',
          iconSelector:
            'div.PRIVATE_TreeView-item-content > div.PRIVATE_TreeView-item-visual',
          host: Host.GitHub,
        };
      }

      return {
        filenameSelector:
          'tr.js-navigation-item > td.content > span, .files-list > a.list-item, div.js-navigation-item > div[role="rowheader"] > span',
        iconSelector:
          'tr.js-navigation-item > td.icon, .files-list > a.list-item, div.js-navigation-item > div[role="gridcell"]:first-child',
        host: Host.GitHub,
      };
    case /.*gitlab.*/.test(hostname):
      return {
        filenameSelector: 'tr.tree-item > td.tree-item-file-name > a > span',
        iconSelector: 'tr.tree-item > td.tree-item-file-name > i',
        host: Host.GitLab,
      };
    default:
      return {
        filenameSelector: 'tr > td.name > a',
        iconSelector: 'tr > td.name > span',
        host: Host.Others,
      };
  }
};

const { filenameSelector, iconSelector, host } = getSelector(
  window.location.hostname,
);
const isMobile = mobile();
const isGitHub = host === Host.GitHub;

const getGitHubMobileFilename = (filenameDom: HTMLElement) =>
  Array.from(filenameDom.childNodes)
    .filter((node) => node.nodeType === node.TEXT_NODE)
    .map((node) => node.nodeValue?.trim() || '')
    .join('');

/**
 * Check if an element or its children represent a folder
 */
const isFolder = (iconDom: HTMLElement, filenameDom: HTMLElement): boolean => {
  // Check the icon DOM itself first
  if (iconDom.classList.contains('octicon-file-directory')) {
    return true;
  }

  // Check for any SVG with directory class
  const directorySvg = iconDom.querySelector('svg.octicon-file-directory, svg.icon-directory');
  if (directorySvg) {
    return true;
  }

  // Check if icon is an SVG element itself
  if (iconDom.tagName === 'svg') {
    if (iconDom.classList.contains('octicon-file-directory') ||
      iconDom.classList.contains('icon-directory')) {
      return true;
    }
  }

  // Check TreeView folder indicators
  const treeViewParent = iconDom.closest('[data-tree-entry-type]');
  if (treeViewParent?.getAttribute('data-tree-entry-type') === 'tree') {
    return true;
  }

  // Check for row with tree link
  const row = iconDom.closest('[role="row"]');
  if (row) {
    const link = row.querySelector('a[href*="/tree/"]');
    if (link) {
      return true;
    }
  }

  // Check if filename has trailing slash
  const filename = filenameDom.textContent?.trim() || '';
  if (filename.endsWith('/')) {
    return true;
  }

  // Check link href for tree pattern
  const closestLink = filenameDom.closest('a') || iconDom.closest('a');
  if (closestLink?.href.includes('/tree/')) {
    return true;
  }

  // Check parent row for directory link
  const parentRow = filenameDom.closest('tr, div[role="row"]');
  if (parentRow) {
    const treeLink = parentRow.querySelector('a[href*="/tree/"]');
    if (treeLink) {
      return true;
    }
  }

  return false;
};

// Track processed icons to avoid re-processing
const processedIcons = new WeakSet<HTMLElement>();

const replaceIcon = async ({
  iconDom,
  filenameDom,
}: {
  iconDom: HTMLElement | null;
  filenameDom: HTMLElement;
}) => {
  if (!iconDom || !filenameDom) {
    return;
  }

  // Skip if already processed
  if (processedIcons.has(iconDom)) {
    return;
  }

  const filename =
    isGitHub && isMobile
      ? getGitHubMobileFilename(filenameDom)
      : filenameDom.textContent?.trim() ?? '';

  if (!filename) {
    return;
  }

  // Check if it's a folder using improved detection
  const isFolderItem = isFolder(iconDom, filenameDom);

  try {
    // Create the appropriate icon element
    const iconElement = isFolderItem
      ? await createFolderIconElement(filename.replace(/\/$/, '')) // Remove trailing slash
      : await createFileIconElement(filename);

    // Mark as processed before replacing
    processedIcons.add(iconElement);

    // Preserve GitHub-specific classes
    if (isGitHub) {
      // Copy over relevant classes from original icon
      const relevantClasses = Array.from(iconDom.classList).filter(
        cls => cls.includes('color') || cls.includes('octicon')
      );

      iconElement.classList.add('octicon-file');
      relevantClasses.forEach(cls => iconElement.classList.add(cls));

      if (darkMode) {
        iconElement.classList.add('dark');
      }
    } else {
      iconElement.style.marginRight = '3px';
    }

    // Replace the old icon with the new SVG icon
    if (iconDom.parentNode) {
      iconDom.parentNode.replaceChild(iconElement, iconDom);
    }
  } catch (error) {
    console.error(`[GitHub File Icons] Failed to replace icon for ${filename}:`, error);
  }
};

const update = async () => {
  const filenameDoms = select.all(filenameSelector);
  const iconDoms = select.all(iconSelector);

  for (let i = 0; i < filenameDoms.length; i += 1) {
    await replaceIcon({
      iconDom: iconDoms[i],
      filenameDom: filenameDoms[i],
    });
  }
};

const replaceGithubFileIcons = (
  triggerSelector: string,
  fileSelector: string,
  iconSelector = '.octicon-file',
) => {
  observe(triggerSelector, {
    add(element) {
      const filenameDom = select(fileSelector, element);
      if (filenameDom) {
        const iconDom = select(iconSelector, element);
        if (iconDom) {
          replaceIcon({ iconDom, filenameDom });
        }
      }
    },
  });
};

const init = async () => {
  console.log('[GitHub File Icons] Initializing...');

  // Inject CSS styles for SVG icons
  injectIconStyles();

  // Preload common icons for better performance
  await preloadCommonIcons();

  await domLoaded;

  if (isGitHub) {
    siteDarkMode =
      document.querySelector('html')?.getAttribute('data-color-mode') ===
      'dark';

    console.log('[GitHub File Icons] GitHub detected, dark mode:', siteDarkMode);

    if (isGithubFilesPage()) {
      replaceGithubFileIcons(
        'ul.ActionList > li[id^=file-tree-item-diff-][role=treeitem]',
        'a > span:nth-child(2)',
      );
    } else {
      // Observe all the different GitHub layouts
      replaceGithubFileIcons(
        '.js-navigation-container > .js-navigation-item',
        'div[role="rowheader"] > span',
      );

      replaceGithubFileIcons(
        '.PRIVATE_TreeView-item-content:has(span.PRIVATE_TreeView-item-content-text > span:not([class]))',
        'span.PRIVATE_TreeView-item-content-text',
      );

      // File icons
      replaceGithubFileIcons(
        '.react-directory-filename-column',
        '.react-directory-truncate',
        'svg:not(.icon-directory)',
      );

      // Folder icons - observe separately
      replaceGithubFileIcons(
        '.react-directory-filename-column',
        '.react-directory-truncate',
        'svg.icon-directory',
      );

      // Also observe the parent container for folders
      observe('[role="row"]:has(a[href*="/tree/"])', {
        add(element) {
          const filenameDom = select('.react-directory-truncate', element);
          const iconDom = select('svg', element);
          if (filenameDom && iconDom) {
            replaceIcon({ iconDom, filenameDom });
          }
        },
      });
    }
  } else {
    await update();
    document.addEventListener('pjax:end', () => update());
  }

  console.log('[GitHub File Icons] Initialization complete');
};

chrome.storage.sync.get(
  [StorageKey.ColorsDisabled, StorageKey.DarkMode],
  (result) => {
    colorsDisabled =
      result.colorsDisabled === undefined
        ? colorsDisabled
        : result.colorsDisabled;

    darkMode = result.darkMode === undefined ? darkMode : result.darkMode;

    init();
  },
);

chrome.runtime.onMessage.addListener(function (request) {
  if (request.message === 'file-icon-extension-page-update') {
    console.log('[GitHub File Icons] Page update detected, reinitializing...');
    // reinitialize after page update
    init();
  }
});
