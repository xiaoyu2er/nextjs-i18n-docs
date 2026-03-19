# CLAUDE.md

Project-level guidance for AI assistants working on this codebase.

## Project Overview

Multilingual mirror of the official Next.js documentation, built with Astro + Starlight and deployed as 5 Cloudflare Workers via Service Bindings.

Live site: https://nextjs.im

## Tech Stack

- **Runtime**: Bun
- **Framework**: Astro + Starlight (static site)
- **Deployment**: Cloudflare Workers
- **Linter/Formatter**: Biome v2
- **Language**: TypeScript (strict mode)
- **Package manager**: Bun (monorepo with workspaces)

## Project Structure

```
apps/
  web/           # Latest docs (Astro + Starlight)
  web-v/         # Versioned docs v13/v14/v15 (shared Astro app, VERSION env)
  router/        # Router Worker (Service Bindings, request routing)
  tampermonkey/  # Browser userscript
packages/
  shared/        # Shared Astro components, plugins, overrides
  translate/     # Incremental AST-based translation pipeline
  crawler/       # Blog & Learn content syncer
  const/         # Shared constants (locales, versions)
  utils/         # Shared utilities
content/         # Latest docs source (all 9 languages, synced from upstream)
content-v{13,14,15}/  # Versioned docs source
scripts/         # Build & sync scripts
.cache/          # Translation cache (JSONL, git-tracked)
```

## Key Commands

```bash
bun install              # Install deps + build packages (postinstall)
bun run dev:latest       # Dev server for latest docs
bun run dev:all          # All workers with router
bun run build:latest     # Build latest docs
VERSION=15 bun run build:v  # Build versioned docs

bun run lint             # Biome lint
bun run lint:fix         # Biome lint with auto-fix
bun run format           # Biome format
bun run typecheck        # tsc for all non-Astro apps & packages
bun run test             # Run all tests
```

## Important Rules

### Do NOT modify `content/` or `content-v*/` directly
These directories are synced from the upstream Next.js repo. Any content transformations must be done in `scripts/prepare-content.ts` (build-time processing) or via remark plugins in `packages/shared/src/plugins/`.

### Content pipeline
`scripts/prepare-content.ts` runs at build time (prebuild hook) and:
1. Strips numeric prefixes from directories (`01-app` → `app`)
2. Resolves `source` references (Pages Router → App Router content sharing)
3. Maps locale directories to Starlight i18n structure
4. Strips MDX comments
5. Fixes malformed MDX syntax (e.g., heading anchors)
6. Injects sidebar metadata (order, labels) from numeric prefixes

### MDX components
Custom JSX components in MDX files (Image, Video, Check, Cross, AppOnly, PagesOnly, etc.) are auto-imported via `packages/shared/src/plugins/remark-auto-import.ts`. To add a new component:
1. Create the `.astro` component in `packages/shared/src/components/`
2. Add the component name to the `COMPONENTS` array in `remark-auto-import.ts`

### Astro apps type checking
`apps/web` and `apps/web-v` use `astro check` (not `tsc`). The `typecheck` script covers all other packages. Astro type checking requires content to be prepared first and is slow — run separately when needed.

## Code Style

- Biome v2 with strict rules (see `biome.json`)
- Single quotes, trailing commas, semicolons always
- 2-space indent, 80-char line width
- Imports auto-organized by Biome

## Commit Convention

Follows [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`

## Locales

9 languages: `en`, `zh-hans`, `zh-hant`, `ja`, `ar`, `de`, `es`, `fr`, `ru`

Locale configuration is in `packages/const/`. The `en` locale is the root (no URL prefix); all others use their code as prefix (e.g., `/zh-hans/docs/...`).
