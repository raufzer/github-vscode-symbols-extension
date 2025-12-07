import { getFileIcon, getFolderIcon } from './vscode-symbols-map';

const iconCache = new Map<string, string>();
const iconStylesInjected = new Set<string>();

/**
 * Load an SVG icon from the extension's resources
 */
async function loadSvgIcon(iconPath: string): Promise<string> {
    if (iconCache.has(iconPath)) {
        return iconCache.get(iconPath)!;
    }

    try {
        const url = chrome.runtime.getURL(iconPath);
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to load icon: ${iconPath}`);
        }

        const svgContent = await response.text();
        iconCache.set(iconPath, svgContent);
        return svgContent;
    } catch (error) {
        console.error(`Error loading SVG icon ${iconPath}:`, error);
        // Return a default icon SVG
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>';
    }
}

/**
 * Create an icon element for a file
 */
export async function createFileIconElement(filename: string): Promise<HTMLElement> {
    const iconName = getFileIcon(filename);
    const iconPath = `icons/vscode-symbols/files/${iconName}.svg`;

    const svgContent = await loadSvgIcon(iconPath);

    const container = document.createElement('span');
    container.className = 'vscode-file-icon';
    container.innerHTML = svgContent;

    // Style the SVG
    const svg = container.querySelector('svg');
    if (svg) {
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.style.verticalAlign = 'text-bottom';
        svg.style.display = 'inline-block';
    }

    return container;
}

/**
 * Create an icon element for a folder
 */
export async function createFolderIconElement(folderName: string): Promise<HTMLElement> {
    const iconName = getFolderIcon(folderName);
    const iconPath = `icons/vscode-symbols/folders/${iconName}.svg`;

    const svgContent = await loadSvgIcon(iconPath);

    const container = document.createElement('span');
    container.className = 'vscode-folder-icon';
    container.innerHTML = svgContent;

    // Style the SVG
    const svg = container.querySelector('svg');
    if (svg) {
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.style.verticalAlign = 'text-bottom';
        svg.style.display = 'inline-block';
    }

    return container;
}

/**
 * Inject CSS styles for the icons
 */
export function injectIconStyles(): void {
    if (iconStylesInjected.has('base-styles')) {
        return;
    }

    const style = document.createElement('style');
    style.textContent = `
    .vscode-file-icon,
    .vscode-folder-icon {
      display: inline-flex;
      align-items: center;
      margin-right: 4px;
    }

    .vscode-file-icon svg,
    .vscode-folder-icon svg {
      fill: currentColor;
    }

    /* Dark mode adjustments */
    [data-color-mode="dark"] .vscode-file-icon svg,
    [data-color-mode="dark"] .vscode-folder-icon svg {
      filter: brightness(1.2);
    }

    /* GitHub specific adjustments */
    .octicon-file.vscode-file-icon,
    .octicon-file.vscode-folder-icon {
      margin-right: 8px;
    }
  `;

    document.head.appendChild(style);
    iconStylesInjected.add('base-styles');
}

/**
 * Preload commonly used icons for better performance
 */
export async function preloadCommonIcons(): Promise<void> {
    const commonIcons = [
        'icons/vscode-symbols/files/js.svg',
        'icons/vscode-symbols/files/ts.svg',
        'icons/vscode-symbols/files/brackets-yellow.svg', // Changed from json.svg
        'icons/vscode-symbols/files/markdown.svg',
        'icons/vscode-symbols/files/document.svg',
        'icons/vscode-symbols/folders/folder-blue.svg',
    ];

    await Promise.all(
        commonIcons.map((iconPath) => loadSvgIcon(iconPath).catch(() => { }))
    );
}