# Next.js i18n Documentation Project

This is a monorepo project designed to sync with the official Next.js documentation and translate it into multiple languages. The project uses [Fumadocs](https://fumadocs.dev/) for documentation generation and includes a custom translation toolkit.

## Features

- 📚 Complete mirror of official Next.js documentation
- 🌐 Multilingual support (currently English and Simplified Chinese)
- 🔍 Full-text search with [Orama](https://orama.com/)
- 🤖 AI-powered translation using the `@next-i18n/translate` package
- 🗺️ Automated sitemap submission to Google Search Console

## Project Structure

```
next-i18n-docs/
├── apps/
│   └── docs/         # Next.js documentation site
├── packages/
│   └── translate/    # Translation utility package
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- pnpm 9.15.0 or newer

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Run the development server
pnpm dev

# Open [http://localhost:3000](http://localhost:3000) to view the docs
```

## Translation

This project includes a custom translation utility that can translate the Next.js documentation into multiple languages. Currently, it supports:

- English (source)
- Simplified Chinese (zh-hans)
- More languages can be added in the translation configuration

Documentation content is stored in the `apps/docs/content` directory:

- `content/en/` - Original English documentation (source of truth)
- `content/zh-hans/` - Simplified Chinese translation
- Additional languages can be configured in `translation.config.mjs`

### Translate Content

```bash
# Set your OpenAI API key
export OPENAI_API_KEY=your-openai-api-key

# Run the translation process
pnpm translate
```

## Building

```bash
# Build the translation package
pnpm build:packages

# Build the documentation site
pnpm build:docs
```

## Search Index

```bash
# Update the search index
pnpm update-search-index
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Fumadocs Documentation](https://fumadocs.dev/)
- For detailed information about the translation utility, see the [translate package README](./packages/translate/README.md)

## License

ISC
