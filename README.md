# Next.js i18n Documentation

Multilingual mirror of the official [Next.js documentation](https://nextjs.org/docs), built with [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) and deployed on [Cloudflare Workers](https://workers.cloudflare.com/).

🌐 **Live site**: [nextjs.im](https://nextjs.im)

## Features

- 📚 Complete mirror of official Next.js docs (v13 / v14 / v15 / latest)
- 🌐 9 languages: English, 简体中文, 繁體中文, 日本語, العربية, Deutsch, Español, Français, Русский
- 🔄 Incremental AST-based translation with MD5 caching (51% cross-version content dedup)
- 🏗️ Microfrontend architecture — 5 Cloudflare Workers via Service Bindings
- 🔍 Full-text search powered by [Orama](https://orama.com/)
- 📝 Blog and Learn sections synced from Next.js official site

## Architecture

```
nextjs-i18n-docs/
├── apps/
│   ├── web/           # Latest docs worker (Astro + Starlight)
│   ├── web-v/         # Versioned docs worker (v13/v14/v15)
│   ├── router/        # Router Worker (Service Bindings + redirects)
│   ├── index/         # Landing page
│   └── tampermonkey/  # Browser userscript
├── packages/
│   ├── translate/     # Incremental translation pipeline
│   ├── crawler/       # Blog & Learn content syncer
│   ├── shared/        # Shared Astro components & plugins
│   ├── const/         # Shared constants
│   └── utils/         # Shared utilities
├── content/           # Source content (all languages, all versions)
├── content-astro/     # Astro-specific content overrides
├── scripts/           # Build & sync scripts
└── .cache/            # Translation cache (JSONL, git-tracked)
```

### Cloudflare Workers

| Worker | Purpose |
|--------|---------|
| `nextjs-docs-router` | Routes requests by version prefix, handles redirects |
| `nextjs-docs-latest` | Serves latest (v16) docs |
| `nextjs-docs-v13` | Serves v13 docs |
| `nextjs-docs-v14` | Serves v14 docs |
| `nextjs-docs-v15` | Serves v15 docs |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/)
- Node.js 20+

### Installation

```bash
bun install
```

### Development

```bash
# Run all workers with router (recommended)
bun run dev:all

# Run only latest docs
bun run dev:latest

# Run only versioned docs (set VERSION env)
VERSION=15 bun run dev:v
```

### Building

```bash
# Build all packages
bun run build:packages

# Build latest docs
bun run build:latest

# Build versioned docs
VERSION=15 bun run build:v
```

### Deploying

```bash
# Deploy to Cloudflare Workers
bun run deploy:latest
VERSION=15 bun run deploy:v
bun run deploy:router
```

## Translation Pipeline

The project includes an incremental translation pipeline (`packages/translate`) that:

1. **Normalizes** MDX files (fixes JSX tag formatting for AST parsing)
2. **Parses** files into AST nodes (paragraph, heading, code, list, etc.)
3. **Caches** each node by MD5 hash in JSONL format — identical content across versions is translated once
4. **Translates** only changed nodes via LLM (OpenRouter / MiniMax / DeepSeek)
5. **Assembles** translated nodes back into valid MDX
6. **Validates** output (frontmatter, tag balance, remark parsability)

### Running Translation

```bash
# Translate all files
bun run translate

# Or use the shell script with options
bash scripts/translate.sh \
  --pattern "**/*.mdx" \
  --concurrency 10 \
  --api-type openai \
  --api-base-url "https://openrouter.ai/api/v1" \
  --api-key "$OPENROUTER_API_KEY" \
  --model "openrouter/hunter-alpha"
```

### Translation Cache

Cache files are stored in `.cache/` (git-tracked, JSONL format):
- `.cache/en.jsonl` — English source node hashes (~17K entries)
- `.cache/zh-hans.jsonl` — Chinese translation cache (~6K entries)

## Content Sync

English docs are synced from the official [Next.js repo](https://github.com/vercel/next.js):

```bash
# Sync docs locally (resolves latest versions from git tags)
bash scripts/sync-docs-local.sh

# Full sync + translate
bash scripts/sync-and-translate.sh
```

## Supported Languages

| Language | Code | Content Files |
|----------|------|---------------|
| English | `en` | 1,488 |
| 简体中文 | `zh-hans` | 1,117 |
| 繁體中文 | `zh-hant` | 1,117 |
| 日本語 | `ja` | 1,117 |
| العربية | `ar` | 1,117 |
| Deutsch | `de` | 1,117 |
| Español | `es` | 1,117 |
| Français | `fr` | 1,117 |
| Русский | `ru` | 1,117 |

## CI/CD

Deployment is handled by **Cloudflare Builds** (native Git integration):
- Push to `main` triggers automatic builds and deployments
- Sync workflow (`sync-docs.yml`) creates PRs when upstream Next.js docs change
- Translation workflow (`translate-docs.yml`) runs after sync PRs are merged

## License

ISC
