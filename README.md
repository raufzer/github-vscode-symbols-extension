<h1 align="center">  <img src="src/img/icon-128.png" alt="Extension Icon" width="128">
<br>GitHub File Icons (VSCode Symbols Edition)</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.0.0-blue" alt="Version">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
  <img src="https://img.shields.io/badge/browser-Chrome%20%7C%20Firefox%20%7C%20Edge-blue" alt="Browsers">
</p>
A browser extension that brings **VSCode-style file and folder icons** to GitHub, GitLab, Gitea, and Gogs.

This is a fork of [homerchen19/github-file-icons](https://github.com/homerchen19/github-file-icons) with enhanced icon support using the beautiful [VSCode Symbols](https://github.com/vscode-symbols/vscode-symbols) icon set.

## Features

- **250+ VSCode-style SVG icons** for files and folders
- **Smart folder detection** - Automatic icons for common folder names (src, test, config, etc.)
- **Dark mode support** - Icons adapt to GitHub's theme
- **Lightwei# Changelog

## [2.0.0] - 2025-12-07

### Added

- Initial release
- 250+ VSCode-style file and folder icons
- Support for GitHub, GitLab, Gitea, and Gogs
- Dark mode support
- Smart folder detectionght & Fast** - Icons load on-demand for optimal performance
- **Framework-aware** - Special icons for React, Vue, Angular, Next.js, and more
- **Config file recognition** - Distinct icons for package.json, tsconfig.json, .eslintrc, etc.

## Screenshots

### Light Mode

![Light Mode Example](screenshots/light-mode.png)

### Dark Mode

![Dark Mode Example](screenshots/dark-mode.png)

## Installation

### Chrome/Edge/Brave

1. Download the latest release from [Releases](../../releases)
2. Extract the ZIP file
3. Open `chrome://extensions/`
4. Enable "Developer mode"
5. Click "Load unpacked"
6. Select the extracted folder

### Firefox

1. Download the latest Firefox release from [Releases](../../releases)
2. Open `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on"
4. Select the `.xpi` file

## Development & Testing

Want to try it before release? Here's how to run it locally:

### Prerequisites

- Node.js 16+ (if using build tools)
- Chrome, Firefox, or Edge browser

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/raufzer/github-vscode-symbols-extension.git
   cd github-vscode-symbols-extension
   ```

2. **Load in Chrome/Edge**
   - Open `chrome://extensions/`
   - Enable "Developer mode" (top right)
   - Click "Load unpacked"
   - Select the `src` folder (or root folder with manifest.json)

3. **Load in Firefox**
   - Open `about:debugging#/runtime/this-firefox`
   - Click "Load Temporary Add-on"
   - Select `manifest.json` from the extension folder

4. **Test it**
   - Navigate to any GitHub repository
   - Icons should appear next to files and folders
   - Try switching between light/dark themes

### Making Changes

- Edit files in `src/`
- Reload the extension in your browser
- Refresh the GitHub page to see changes

### Building for Distribution

*Coming soon - packaging instructions for Chrome Web Store and Firefox Add-ons*

## Icon Credits

This extension uses the amazing [VSCode Symbols](https://github.com/vscode-symbols/vscode-symbols) icon set, which provides:

- Beautiful, consistent design language
- Comprehensive file type coverage
- Official VSCode icon aesthetics
- MIT licensed icons

## Original Project

This is a fork of [github-file-icons](https://github.com/homerchen19/github-file-icons) by [@homerchen19](https://github.com/homerchen19).

## License

MIT License - see [LICENSE](LICENSE) for details

### Third-Party Licenses

- [VSCode Symbols Icons](https://github.com/vscode-symbols/vscode-symbols) - MIT License
- Original [github-file-icons](https://github.com/homerchen19/github-file-icons) - MIT License

## Show Your Support

If you find this extension useful:

- Star this repository
- Report bugs or request features
- Share with others
