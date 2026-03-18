# TanStack Start + Fumadocs Full Migration Plan

> **REQUIRED SUB-SKILL:** Use the executing-plans skill to implement this plan task-by-task.

**Goal:** Replace the Astro + Starlight microfrontend (apps/web, apps/web-v) with TanStack Start + fumadocs (apps/web-ts, apps/web-ts-v), keeping the same Router Worker architecture.

**Architecture:** Microfrontend with 1 Router Worker + 1 Latest Worker + N Version Workers, matching the existing Astro deployment pattern:
- `apps/web-ts/` — latest version (docs + blog + learn + home), deployed as `nextjs-docs-latest`
- `apps/web-ts-v/` — versioned docs only (v13, v14, v15), single codebase with `VERSION` env, deployed as `nextjs-docs-v{N}`
- `apps/router/` — existing Router Worker (reused, bindings updated)

Reuse all existing utilities, components, remark plugins, search config, and i18n messages from `apps/docs/` verbatim.

**Tech Stack:** TanStack Start 1.166, fumadocs-core 16, fumadocs-mdx 14, fumadocs-ui 16, nitro (cloudflare-module), Tailwind CSS 4, Orama Cloud search.

---

## Deployment Architecture

```
                  ┌─────────────────┐
                  │  Router Worker   │  nextjs-docs-router
                  │  apps/router/    │  
                  └──────┬──────────┘
                         │
        ┌────────────────┼────────────────┬──────────────┐
        │                │                │              │
   /docs/app/*      /docs/15/*       /docs/14/*     /docs/13/*
   /docs/pages/*    
   /blog/*  /learn/*
        │                │                │              │
   ┌────▼────┐     ┌─────▼─────┐   ┌─────▼─────┐  ┌────▼─────┐
   │ web-ts  │     │ web-ts-v  │   │ web-ts-v  │  │ web-ts-v │
   │ latest  │     │ VERSION=15│   │ VERSION=14│  │ VERSION=13│
   └─────────┘     └───────────┘   └───────────┘  └──────────┘
```

### Content Mapping

| Worker | Content Dir | Routes |
|--------|------------|--------|
| web-ts (latest) | `content/{LOCALE}/docs/{01-app,02-pages,03-architecture,04-community}` + `blog/` + `learn/` | `/docs/app/*`, `/docs/pages/*`, `/blog/*`, `/learn/*`, `/` |
| web-ts-v VERSION=15 | `content/{LOCALE}/docs/15/` | `/docs/15/*` |
| web-ts-v VERSION=14 | `content/{LOCALE}/docs/14/` | `/docs/14/*` |
| web-ts-v VERSION=13 | `content/{LOCALE}/docs/13/` | `/docs/13/*` |

---

## Files to Copy Verbatim from apps/docs (no changes needed)

These are pure functions / pure React with no Next.js dependencies:

```
src/mdx/Image.tsx          — light/dark srcSet via Vercel blob
src/mdx/BlogImage.tsx      — simpler light/dark for blog/learn  
src/mdx/Check.tsx          — Check/Cross SVG icons
src/mdx/Video.tsx          — autoplay/loop/muted video
src/mdx/Icon.tsx           — all sidebar/nav icons
src/mdx/Identity.tsx       — passthrough wrapper (AppOnly when active)
src/mdx/Void.tsx           — null render (AppOnly when inactive)
src/lib/utils.ts           — getDocUrl, parseDocId, getDocTags, etc.
src/lib/const.ts           — RouterType type, routerTypeCookie  
src/lib/pageTree.ts        — getDocsLayoutTree, getLearnSidebarTree, getPageTreePeers
src/lib/remark-plugins/*   — all 6 remark plugins (framework-agnostic)
src/lib/orama/config.ts    — Orama Cloud endpoints for 9 locales
messages/*.json            — 9 locale UI string files
```

## Files Needing Minimal Adaptation

| File | Change |
|------|--------|
| `source.ts` | `@/.source` → `collections/server`, remove `createMDXSource` (v14 API) |
| `docs.ts` | Just import path update |
| `learn.tsx` | Remove `next-intl` type import |
| `toc.ts` / `lib/toc.ts` | No framework deps, copy as-is |
| `useRouterType.tsx` | `usePathname()` → `useLocation().pathname`, `cookies-next` → `document.cookie` |
| `docs.layout.tsx` | `usePathname` → TanStack, `useTranslations` → static messages |
| `metadata.ts` | Next.js `Metadata` → TanStack Start `head()` |
| `search-dialog.tsx` | `useLocale/usePathname` → TanStack equivalents |

---

## Phase 1: Latest Worker (apps/web-ts) — Core

### Task 1: Copy utilities and MDX components from apps/docs

**TDD scenario:** Trivial file copy — verify TypeScript compiles.

**Steps:**
1. Copy all "verbatim" files listed above into `apps/web-ts/src/`
2. Copy `messages/*.json` into `apps/web-ts/messages/`
3. Copy `src/lib/orama/` (3 files)
4. Copy `src/lib/remark-plugins/` (6 files)
5. Adapt `source.ts`: change `@/.source` → `collections/server`, keep all 3 loaders (docs, blog, learn)
6. Adapt `docs.ts`, `learn.tsx`: fix import paths only
7. Run `bunx tsc --noEmit` to verify compilation
8. Commit: `feat(web-ts): copy utilities and components from apps/docs`

### Task 2: Update source.config.ts with full schema + remark plugins

**TDD scenario:** Modifying existing config.

**Steps:**
1. Copy `source.config.ts` from `apps/docs/source.config.ts`
2. Add all 3 content sources: docs, blog, learn
3. Add remark plugins: `convertCodeMeta`, `addMdxContent`
4. Add shiki transformers: `transformerMetaHighlight`
5. Content dirs use `LOCALE` env: `content/${process.env.LOCALE || 'en'}/docs`
6. Run `LOCALE=en bunx fumadocs-mdx` to verify
7. Commit: `feat(web-ts): full source.config with all schemas and plugins`

### Task 3: Update mdx.tsx with real components

**TDD scenario:** Modifying existing.

**Steps:**
1. Import real `Image`, `Check`, `Cross`, `Video`, `Identity`, `Void` from `@/mdx/`
2. Import `Tab`, `Tabs` from `fumadocs-ui/components/tabs`
3. Create `getMDXComponents`, `getBlogMDXComponents`, `getLearnMDXComponents` matching apps/docs exactly
4. Build to verify
5. Commit: `feat(web-ts): full MDX component config`

### Task 4: Docs route with AppOnly/PagesOnly + related + categories

**TDD scenario:** New feature.

**Steps:**
1. Create `useRouterType` hook adapted for TanStack Router
2. Update `serverLoader` to match apps/docs page.tsx logic:
   - URL → page lookup via `getPage(url)` 
   - `source` reference resolution (Pages Router referencing App Router content)
   - AppOnly/PagesOnly ToC filtering via `filterCotent()` + `getToc()`
3. In `clientLoader.component()`:
   - Pass `AppOnly: isApp ? Identity : Void`, `PagesOnly: isPages ? Identity : Void`
   - Add `DocsRelated` when `page.data.related` exists
   - Add `DocsCategory` with `getPageTreePeers()` for index pages
4. Build and test locally with Chrome CDP
5. Commit: `feat(web-ts): docs route with content filtering and related links`

### Task 5: Docs layout with router/version switchers

**TDD scenario:** New feature.

**Steps:**
1. Create simple `useMessages(namespace)` hook that loads from `messages/{LOCALE}.json`
2. Create docs layout component with:
   - `RootToggle` for App/Pages Router (using `NextAppIcon`, `NextPagesIcon`)
   - `RootToggle` for version (Latest / v14 / v13 using `NextLastedVersionIcon`, `NextOldVersionIcon`)
   - `getDocsLayoutTree()` for filtered page tree
3. Build and verify switchers work
4. Commit: `feat(web-ts): docs layout with router/version switchers`

### Task 6: Blog routes + Learn routes + Home page

**TDD scenario:** New feature.

**Steps:**
1. Blog index: adapt from `apps/docs/src/app/(home)/blog/page.tsx`
2. Blog post: adapt from `apps/docs/src/app/(home)/blog/[slug]/page.tsx`
3. Learn index: adapt from `apps/docs/src/app/(home)/learn/page.tsx`
4. Learn pages: adapt from `apps/docs/src/app/learn/[...slug]/page.tsx` with `getLearnSidebarTree()` + tabs
5. Home page: adapt from `apps/docs/src/app/(home)/page.tsx` with hero + features
6. Build and verify all sections
7. Commit: `feat(web-ts): blog, learn, and home page routes`

### Task 7: Orama search integration

**Steps:**
1. Copy `search-dialog.tsx` and `search-orama.tsx`, adapt Next.js hooks
2. Register in `RootProvider` with locale-aware config from `orama/config.ts`
3. Build and verify
4. Commit: `feat(web-ts): Orama cloud search`

### Task 8: Full build + local verification

**Steps:**
1. Symlink content: `apps/web-ts/content` → `../../content`
2. Run `LOCALE=en bun run build` — verify page count
3. Test locally with `wrangler dev` from `.output/server/`
4. Verify with Chrome CDP: SPA navigation, router/version switchers, search, blog, learn
5. Commit: `feat(web-ts): full latest build verified`

---

## Phase 2: Versioned Worker (apps/web-ts-v)

### Task 9: Create apps/web-ts-v (docs-only versioned worker)

**TDD scenario:** New project scaffolding.

**Steps:**
1. Copy `apps/web-ts/` → `apps/web-ts-v/`
2. Simplify: remove blog, learn, home page routes (version workers only serve `/docs/{version}/*`)
3. Update `source.config.ts`:
   - Only `docs` collection (no blog, no learn)
   - Content dir: `content/${LOCALE}/docs/${VERSION}` (reads from version subdir)
4. Update `source.ts`: 
   - Only `docs` loader
   - `baseUrl: '/docs/' + VERSION` (e.g. `/docs/15`)
   - `url(slugs)` strips numeric prefixes
5. Update `vite.config.ts`:
   - prerender seeds from `/docs/${VERSION}/app/...`
6. Add `package.json` scripts:
   ```json
   "dev": "vite dev --port 3000",
   "build": "vite build",
   "deploy": "cd .output/server && bunx wrangler deploy --name nextjs-docs-v$VERSION"
   ```
7. Test: `VERSION=15 LOCALE=en bun run build`
8. Commit: `feat(web-ts-v): versioned docs worker template`

### Task 10: Versioned layout (simplified, no blog/learn)

**Steps:**
1. Docs layout with router switcher (App/Pages) only — no version switcher (already on specific version)
2. Version-specific `getDocsLayoutTree()` logic (same as apps/docs for v13/v14)
3. Sidebar banner shows current version number
4. Build and test with VERSION=15, VERSION=14, VERSION=13
5. Commit: `feat(web-ts-v): versioned docs layout`

### Task 11: Build and test all versions

**Steps:**
1. `VERSION=15 LOCALE=en bun run build` — verify
2. `VERSION=14 LOCALE=en bun run build` — verify
3. `VERSION=13 LOCALE=en bun run build` — verify
4. Check page counts match Astro output
5. Commit: `chore(web-ts-v): all version builds verified`

---

## Phase 3: Router Integration + Deploy

### Task 12: Update Router Worker for TanStack Start workers

**Steps:**
1. Router Worker code stays the same (path-based routing)
2. Update `generate-wrangler.ts` — binding names stay the same (`nextjs-docs-latest`, `nextjs-docs-v{N}`)
3. TanStack Start workers deployed under same names, router just routes to them
4. Test locally with `dev-all.ts` (update to use `apps/web-ts` and `apps/web-ts-v`)
5. Commit: `feat(router): update dev scripts for TanStack Start workers`

### Task 13: Deploy all workers

**Steps:**
1. Deploy latest: `cd apps/web-ts && LOCALE=en bun run build && cd .output/server && wrangler deploy --name nextjs-docs-latest`
2. Deploy v15: `cd apps/web-ts-v && VERSION=15 LOCALE=en bun run build && cd .output/server && wrangler deploy --name nextjs-docs-v15`
3. Deploy v14, v13 similarly
4. Deploy router: `cd apps/router && bun run deploy`
5. Verify all routes work on production URL
6. Commit: `feat: deploy all TanStack Start workers`

### Task 14: CI/CD updates

**Steps:**
1. Update `.github/workflows/deploy-cf.yml` to build TanStack Start instead of Astro
2. Keep matrix strategy from `nextjs-versions.json`
3. Build command: `LOCALE=en VERSION=${{ matrix.version }} bun run build`
4. Deploy command adapted for nitro output
5. Commit: `ci: update deploy workflow for TanStack Start`

---

## Key Differences from Astro Architecture

| Aspect | Astro (current) | TanStack Start (new) |
|--------|-----------------|---------------------|
| Content prep | `prepare-content.ts` strips prefixes, resolves refs | fumadocs-mdx handles natively |
| MDX components | Astro components via `remark-auto-import` | React components via `useMDXComponents()` |
| Rendering | Static HTML (zero JS) | SSR + prerender + client hydration |
| Navigation | Full page reload | SPA (client-side routing) |
| Search | N/A (pagefind disabled) | Orama Cloud (already configured) |
| i18n | Starlight built-in | `LOCALE` env + messages JSON |
| Package | `packages/shared` with symlinks | Direct imports from `@/` |
| Build tool | Astro + Starlight | Vite + Rolldown + nitro |
| CF deployment | Static assets worker | nitro cloudflare-module (SSR + static) |

## Success Criteria

1. All pages from apps/docs render identically in apps/web-ts
2. SPA navigation works between docs/blog/learn
3. Router/version switchers work correctly
4. AppOnly/PagesOnly filtering works
5. Version workers serve correct content at /docs/13/*, /docs/14/*, /docs/15/*
6. Router Worker routes correctly between workers
7. Orama search works with locale-aware tags
8. `LOCALE=en` and `LOCALE=zh-hans` builds both work
9. Build times are comparable or faster than Astro
10. All deployed to CF Workers and accessible via router
