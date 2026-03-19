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

## Deployment

The project uses a microfrontend architecture with 5 Cloudflare Workers connected via [Service Bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/). Deployment is automated through [Cloudflare Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) with [Git integration](https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/).

### How it works

```
                    ┌─────────────────────┐
                    │  nextjs-docs-router  │
                    │  (Service Bindings)  │
                    └──────┬──┬──┬──┬─────┘
                           │  │  │  │
            ┌──────────────┘  │  │  └──────────────┐
            ▼                 ▼  ▼                  ▼
    ┌──────────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
    │ docs-latest  │ │ docs-v15│ │ docs-v14│ │ docs-v13│
    │ (Astro+SL)   │ │(Astro+SL│ │(Astro+SL│ │(Astro+SL│
    └──────────────┘ └─────────┘ └─────────┘ └─────────┘
```

The **Router Worker** receives all requests and forwards them to the appropriate version worker based on URL path:
- `/docs/13/*` → `nextjs-docs-v13`
- `/docs/14/*` → `nextjs-docs-v14`
- `/docs/15/*` → `nextjs-docs-v15`
- Everything else → `nextjs-docs-latest`

### Cloudflare Builds setup

Each worker has its own [Cloudflare Build](https://developers.cloudflare.com/workers/ci-cd/builds/) connected to this repo's `main` branch:

| Build project | Build command | Deploy command | Watch paths |
|---------------|---------------|----------------|-------------|
| `nextjs-docs-latest` | `bun install && bun run build:latest` | `npx wrangler deploy --config apps/web/wrangler.toml` | `apps/web/`, `packages/shared/`, `packages/const/`, `content/`, `content-astro/`, `scripts/prepare-content.ts` |
| `nextjs-docs-v13` | `bun install && VERSION=13 bun run build:v` | `npx wrangler deploy --config apps/web-v/wrangler.toml --name nextjs-docs-v13` | `apps/web-v/`, `packages/shared/`, `packages/const/`, `content/*/docs/13/`, `scripts/prepare-content.ts` |
| `nextjs-docs-v14` | `bun install && VERSION=14 bun run build:v` | `npx wrangler deploy --config apps/web-v/wrangler.toml --name nextjs-docs-v14` | `apps/web-v/`, `packages/shared/`, `packages/const/`, `content/*/docs/14/`, `scripts/prepare-content.ts` |
| `nextjs-docs-v15` | `bun install && VERSION=15 bun run build:v` | `npx wrangler deploy --config apps/web-v/wrangler.toml --name nextjs-docs-v15` | `apps/web-v/`, `packages/shared/`, `packages/const/`, `content/*/docs/15/`, `scripts/prepare-content.ts` |
| `nextjs-docs-router` | `bun install && cd apps/router && bun run generate-wrangler` | `npx wrangler deploy` | `apps/router/`, `.github/nextjs-versions.json` |

To set up from scratch:

1. **Connect the repo** — In the [Cloudflare dashboard](https://dash.cloudflare.com/), go to **Workers & Pages → Builds → Connect** and link this GitHub repo ([docs](https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/))
2. **Create 5 Build projects** — One for each worker, with the build commands above
3. **Configure branch & watch paths** — Set each project to deploy from `main`, and configure [watch paths](https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/#watch-paths) per the table above so only affected workers rebuild
4. **Set `account_id`** — Update `account_id` in each `wrangler.toml` to your Cloudflare account ID
5. **Generate router config** — Run `bun run --filter @next-i18n/router generate-wrangler` to regenerate `apps/router/wrangler.toml` with correct service bindings
6. **Custom domain** (optional) — Add a [Custom Domain](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/) to the router worker

### Manual deployment

You can also deploy manually using the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/):

```bash
# Deploy latest docs
bun run deploy:latest

# Deploy versioned docs
VERSION=13 bun run deploy:v
VERSION=14 bun run deploy:v
VERSION=15 bun run deploy:v

# Deploy router (regenerates wrangler.toml from nextjs-versions.json)
bun run deploy:router
```

> **Note**: Deploy the version workers **before** the router, since the router's Service Bindings reference them.

### Content pipeline

The build process for each Astro worker runs `scripts/prepare-content.ts` which:
1. Strips numeric prefixes from directories (`01-app` → `app`)
2. Resolves `source` references (Pages Router docs that share content with App Router)
3. Maps locale directories to Starlight's i18n structure
4. Strips MDX comments

## CI/CD Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `sync-docs.yml` | Manual / Schedule | Syncs English docs from [Next.js repo](https://github.com/vercel/next.js), creates PR |
| `translate-docs.yml` | Manual | Runs incremental translation pipeline on new/changed content |
| `submit-sitemaps.yml` | Manual | Submits sitemaps to Google Search Console |

Push to `main` triggers automatic Cloudflare Builds for all workers.

## License

ISC
