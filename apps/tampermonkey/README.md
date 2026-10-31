# Next.js Translation Helper - Tampermonkey Script

This Tampermonkey script adds a translation button to nextjs.org that takes you to the same page in the translated documentation on [fanyi.dev](https://fanyi.dev/nextjs).

> The original translated site, nextjs.im, is offline and the domain no longer belongs to this project. Since version 0.0.3 the button links to fanyi.dev instead; installed copies with automatic updates on pick this up from the `dev` branch.

## Features

- 🌐 Adds a globe icon (🌐) next to the "Learn" button on nextjs.org
- 🎯 Click the icon to show a dropdown menu with all available language options
- 🌍 Supports the languages fanyi.dev serves for Next.js: Simplified Chinese and Japanese
- 🚀 Preserves current page path when switching languages
- 💫 Subtle, icon-only design that integrates seamlessly with Next.js UI
- ⚡ **React-compatible**: Handles SPA navigation and re-renders automatically
- 🔄 **Smart recovery**: Re-adds button if removed by React updates
- 🐛 **Debug mode**: Optional detailed logging for troubleshooting

## Installation

### Method 1: Install Pre-built Script

1. Install [Tampermonkey](https://tampermonkey.net/) browser extension
2. Copy the contents of `dist/script.iife.js` 
3. Create a new script in Tampermonkey and paste the content
4. Save and enable the script
5. Visit [nextjs.org](https://nextjs.org) to see the translation button

### Method 2: Development Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start development server:
   ```bash
   pnpm run dev
   ```

3. Generate development script:
   ```bash
   pnpm run build:dev-script
   ```

4. Install the generated `tampermonkey.js` file in Tampermonkey
5. The script will automatically reload when you make changes

## Configuration

Edit `tampermonkey.config` to customize the script metadata:

```
// @name         Next.js Translation Helper
// @namespace    https://github.com/xiaoyu2er/nextjs-i18n-docs
// @version      0.0.1
// @description  Adds a translation button to nextjs.org with links to community-maintained translated documentation
// @author       next-i18n-docs
// @match        https://nextjs.org/*
// @grant        GM_xmlhttpRequest
// @run-at       document-end
```

### Supported Match Patterns

The script runs on:
- `https://nextjs.org/*` - All Next.js pages

### Required Permissions

- `GM_xmlhttpRequest` - For development mode script loading

## Available Languages

| Language | Flag | Native Name | URL |
|----------|------|-------------|-----|
| Simplified Chinese | 🇨🇳 | 简体中文 | https://fanyi.dev/nextjs/zh-hans |
| Japanese | 🇯🇵 | 日本語 | https://fanyi.dev/nextjs/ja |

`nextjs.org/docs/<path>` opens `fanyi.dev/nextjs/<locale>/docs/<path>`; the versioned docs `nextjs.org/docs/13|14|15/<path>` open `fanyi.dev/nextjs/<locale>/v13|v14|v15/docs/<path>`; any other page opens the docs home.

## Development Commands

```bash
# Install dependencies
pnpm install

# Development mode with auto-reload
pnpm run dev

# Build production script
pnpm run build

# Type checking
pnpm run type-check
```

## How It Works

1. **Detection**: Script waits for the "Learn" button to appear on the page
2. **Injection**: Creates a styled translation button next to the Learn button
3. **Dropdown**: Shows a dropdown with flag icons and native language names
4. **Navigation**: Clicking a language redirects to the translated documentation while preserving the current page path

## Browser Compatibility

- ✅ Chrome (with Tampermonkey)
- ✅ Firefox (with Tampermonkey) 
- ✅ Safari (with Tampermonkey)
- ✅ Edge (with Tampermonkey)

## Contributing

1. Fork the repository
2. Make your changes in `src/main.ts`
3. Test with `pnpm run dev`
4. Build with `pnpm run build`
5. Submit a pull request

## License

This project is part of the next-i18n-docs ecosystem.
