# Next.js i18n Documentation Site

This is the documentation site package for the Next.js i18n Documentation Project. It renders multilingual Next.js documentation using [Fumadocs](https://fumadocs.dev/).

## Quick Start

Start the development server:

```bash
# From the root of the monorepo:
pnpm dev

# Or from this directory:
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Directory Structure

```text
docs/
├── content/           # Documentation content
│   ├── en/            # English (source)
│   └── zh-hans/       # Simplified Chinese
├── messages/          # i18n message files
│   ├── en.json
│   └── zh-hans.json
├── scripts/           # Utility scripts
└── src/               # Source code
    ├── app/           # Next.js App Router
    ├── components/    # Shared components
    ├── i18n/          # i18n configuration
    ├── lib/           # Utilities
    └── mdx/           # MDX components
```

For detailed information about features, translations, and more, please refer to the [project README](../../README.md).

## Translation

In this project, documentation content is stored in the `content` directory:

- `content/en/` - Original English documentation (source of truth)
- `content/zh-hans/` - Simplified Chinese translation
- Additional languages can be configured in `translation.config.mjs`

To update translations:

```bash
# From the root of the monorepo
pnpm translate

# Or using the translation package directly
OPENAI_API_KEY=your-api-key pnpm translate
```

## Search Index

The search functionality is powered by Orama. To update the search index:

```bash
pnpm update-search-index
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - official Next.js docs
- [Fumadocs](https://fumadocs.dev/) - documentation framework used in this project
- [Next.js i18n Documentation](https://github.com/nextjs/next.js/tree/canary/docs) - source content
