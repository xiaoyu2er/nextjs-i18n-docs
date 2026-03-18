# TanStack Start + Fumadocs → Cloudflare Workers Migration Plan

> **REQUIRED SUB-SKILL:** Use the executing-plans skill to implement this plan task-by-task.

**Goal:** Migrate the documentation site from Astro + Starlight to TanStack Start + Fumadocs, deployed to Cloudflare Workers with the same microfrontend architecture (1 router + 1 latest + 3 versioned workers).

**Architecture:** TanStack Start as the React meta-framework, fumadocs-core for page tree/source/i18n, fumadocs-mdx/vite for build-time MDX compilation, fumadocs-ui for docs layout/components. Each worker is a standalone TanStack Start app with `@cloudflare/vite-plugin`. Prerendering enabled for full SSG output. Router Worker uses Service Bindings (same as current Astro setup).

**Tech Stack:** TanStack Start 1.166+, fumadocs-core 16.x, fumadocs-mdx 14.x (Vite plugin), fumadocs-ui 16.x, @cloudflare/vite-plugin, Vite 8, React 19, Tailwind CSS 4, bun

---

## Key Decisions & Rationale

### Why TanStack Start over Astro + Starlight?
- **fumadocs ecosystem**: Full docs UI (sidebar, ToC, search, breadcrumbs, code blocks) without custom overrides
- **React components**: Native React components in MDX (no Astro component wrappers needed)
- **fumadocs-ui**: Production-ready docs layout matching nextjs.org UX out of the box
- **Unified stack**: Same React-based stack as the content (Next.js docs documenting React)

### Why NOT the old fumadocs + Next.js approach?
- **CF Workers compatibility**: fumadocs-mdx/vite compiles MDX at build time (no `new Function()` at runtime)
- **TanStack Start + @cloudflare/vite-plugin**: First-class CF Workers support via Vite
- **Prerendering**: Full SSG output, served as static assets from CF Workers

### MDX Compilation Strategy
- fumadocs-mdx/vite plugin compiles MDX → JS modules during Vite build
- TanStack Start's prerender generates static HTML for all pages
- No runtime MDX compilation needed → CF Workers compatible
- `collections/browser` client loader handles hydration

### Microfrontend Architecture (unchanged)
```
Router Worker (nextjs-docs-router)
  ├── /docs/app/*, /docs/pages/*, /learn/*, /blog/* → LATEST (nextjs-docs-latest)
  ├── /docs/15/* → V15_DOCS (nextjs-docs-v15)
  ├── /docs/14/* → V14_DOCS (nextjs-docs-v14)
  └── /docs/13/* → V13_DOCS (nextjs-docs-v13)
```

---

## Phase 1: POC — Single-locale TanStack Start + Fumadocs on CF Workers

### Task 1: Scaffold TanStack Start app

**TDD scenario:** New feature — verify build works

**Files:**
- Create: `apps/web-ts/package.json`
- Create: `apps/web-ts/vite.config.ts`
- Create: `apps/web-ts/wrangler.jsonc`
- Create: `apps/web-ts/tsconfig.json`
- Create: `apps/web-ts/source.config.ts`
- Create: `apps/web-ts/src/router.tsx`
- Create: `apps/web-ts/src/routes/__root.tsx`
- Create: `apps/web-ts/src/routes/index.tsx`
- Create: `apps/web-ts/src/styles/app.css`

**Step 1: Create package.json**

```json
{
  "name": "@next-i18n/web-ts",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite dev --port 3000",
    "build": "vite build",
    "preview": "vite preview",
    "prepare-content": "bun run ../../scripts/prepare-content-ts.ts --target apps/web-ts",
    "deploy": "wrangler deploy"
  },
  "dependencies": {
    "@tanstack/react-router": "^1.166.0",
    "@tanstack/react-start": "^1.166.0",
    "fumadocs-core": "^16.6.0",
    "fumadocs-mdx": "^14.2.0",
    "fumadocs-ui": "^16.6.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "tailwind-merge": "^3.5.0",
    "vite": "^8.0.0"
  },
  "devDependencies": {
    "@cloudflare/vite-plugin": "^1.29.0",
    "@tailwindcss/vite": "^4.1.0",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@vitejs/plugin-react": "^6.0.0",
    "tailwindcss": "^4.1.0",
    "typescript": "^5.7.0",
    "wrangler": "^4.0.0"
  }
}
```

**Step 2: Create vite.config.ts**

```ts
import { defineConfig } from 'vite';
import { cloudflare } from '@cloudflare/vite-plugin';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import mdx from 'fumadocs-mdx/vite';

export default defineConfig({
  plugins: [
    mdx(await import('./source.config')),
    tailwindcss(),
    cloudflare({ viteEnvironment: { name: 'ssr' }, inspectorPort: false }),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        concurrency: 8,
      },
    }),
    react(),
  ],
  resolve: {
    tsconfigPaths: true,
    alias: {
      tslib: 'tslib/tslib.es6.js',
    },
  },
});
```

**Step 3: Create wrangler.jsonc**

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "nextjs-docs-ts-poc",
  "compatibility_date": "2025-09-24",
  "compatibility_flags": ["nodejs_compat"],
  "main": "@tanstack/react-start/server-entry"
}
```

**Step 4: Create source.config.ts (fumadocs MDX content configuration)**

```ts
import { defineConfig, defineDocs, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const docs = defineDocs({
  dir: 'content/en/docs',
  docs: {
    schema: frontmatterSchema.extend({
      nav_title: z.string().optional(),
      source: z.string().optional(),
      related: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        links: z.array(z.string()).optional(),
      }).optional(),
    }),
  },
});

export default defineConfig();
```

**Step 5: Create minimal route files**

See fumadocs TanStack Start i18n example for exact patterns:
- `src/router.tsx` — TanStack router setup
- `src/routes/__root.tsx` — Root layout with RootProvider
- `src/routes/index.tsx` — Landing redirect
- `src/routes/docs/$.tsx` — Catch-all docs route using fumadocs source/loader

**Step 6: Run `bun install` and verify build**

```bash
cd apps/web-ts
bun install
bun run build
```

Expected: Vite build succeeds, fumadocs-mdx compiles MDX files

**Step 7: Commit**

```bash
git add apps/web-ts/
git commit -m "feat: scaffold TanStack Start + fumadocs POC"
```

### Task 2: Add content preparation for TanStack Start

**TDD scenario:** Modifying existing script

**Files:**
- Create: `scripts/prepare-content-ts.ts`

The TanStack Start version needs to adapt content for fumadocs-mdx's expected structure. Unlike the Astro prepare-content which strips numeric prefixes, fumadocs-mdx handles its own source configuration.

Key differences from Astro prepare-content:
- fumadocs-mdx reads content directly via `source.config.ts`
- No numeric prefix stripping needed (fumadocs handles ordering via `meta.json`)
- Source references still need resolving
- Content symlink or copy to app-local `content/` dir

**Step 1: Create prepare-content-ts.ts**

Script that:
1. Copies content from `content/en/docs/` to `apps/web-ts/content/en/docs/`
2. Generates `meta.json` files from numeric prefixes (for fumadocs sidebar ordering)
3. Resolves `source` frontmatter references
4. Strips MDX comments

**Step 2: Test with English-only content**

```bash
bun run scripts/prepare-content-ts.ts --target apps/web-ts
cd apps/web-ts && bun run build
```

**Step 3: Commit**

```bash
git commit -m "feat: add content preparation for TanStack Start"
```

### Task 3: Verify fumadocs UI renders correctly

**Files:**
- Modify: `apps/web-ts/src/routes/docs/$.tsx`

**Step 1: Add full docs page with sidebar, ToC, breadcrumbs**

Use fumadocs-ui components:
- `DocsLayout` — sidebar + content layout
- `DocsPage`, `DocsTitle`, `DocsDescription`, `DocsBody` — page structure
- `defaultMdxComponents` — code blocks, headings, etc.

**Step 2: Run dev server and verify**

```bash
cd apps/web-ts
bun run dev
# Open http://localhost:3000/docs/app/getting-started/installation
```

Verify:
- [ ] Page renders with sidebar
- [ ] Code blocks have syntax highlighting
- [ ] ToC (table of contents) shows
- [ ] Navigation between pages works
- [ ] Custom components (Image, AppOnly, PagesOnly) render

**Step 3: Deploy to CF Workers**

```bash
bunx wrangler deploy
```

**Step 4: Commit**

```bash
git commit -m "feat: fumadocs UI rendering on CF Workers"
```

### Task 4: Verify prerendering works at scale

**Step 1: Enable full prerendering with crawlLinks**

The prerender config should discover all docs pages via link crawling.

**Step 2: Build and measure**

```bash
cd apps/web-ts
time bun run build
```

Expected: All English docs pages (~530) prerendered.

Key metrics to watch:
- Build time (compare with Astro's ~280s for 4789 pages)
- Output size
- Memory usage

**Step 3: If prerendering is too slow for 4000+ pages, evaluate SSR-only mode**

With fumadocs-mdx/vite compiling MDX at build time, SSR just needs to render React → HTML on each request. The CF Worker has pre-compiled JS modules for each page.

**Step 4: Commit**

```bash
git commit -m "feat: verify prerendering at scale"
```

---

## Phase 2: Full i18n + Microfrontend Architecture

### Task 5: Add 9-language i18n support

**Files:**
- Modify: `apps/web-ts/source.config.ts`
- Modify: `apps/web-ts/src/lib/i18n.ts`
- Modify: `apps/web-ts/src/routes/__root.tsx`
- Create: `apps/web-ts/src/routes/$lang/docs/$.tsx`

Use fumadocs-core's `defineI18n` with all 9 locales.

### Task 6: Router/version switcher in sidebar

**Files:**
- Modify: `apps/web-ts/src/lib/layout.shared.tsx`

Implement App Router / Pages Router switching and version switching using fumadocs-ui's layout options.

### Task 7: Versioned worker template (apps/web-ts-v/)

**Files:**
- Create: `apps/web-ts-v/` (clone of web-ts with VERSION env support)

Same pattern as current `apps/web-v/` — single template with `VERSION` env var.

### Task 8: Router Worker integration

**Files:**
- Modify: `apps/router/src/index.ts` (if routing changes needed)
- Modify: `apps/router/generate-wrangler.ts`

The Router Worker should work unchanged since it just forwards requests via Service Bindings.

### Task 9: Full deployment

Deploy all 5 workers:
1. `nextjs-docs-latest` (TanStack Start + all 9 locales)
2. `nextjs-docs-v15`
3. `nextjs-docs-v14`
4. `nextjs-docs-v13`
5. `nextjs-docs-router`

---

## Phase 3: Cleanup & Polish

### Task 10: Remove Astro apps

Once TanStack Start is verified in production, remove:
- `apps/web/` (Astro latest)
- `apps/web-v/` (Astro versioned)
- `packages/shared/` (Astro shared components)

Keep `apps/docs/` (fumadocs + Next.js for Vercel deployment).

### Task 11: Update CI/CD

Update `.github/workflows/deploy-cf.yml` to build TanStack Start apps instead of Astro.

---

## Risk Assessment

| Risk | Impact | Mitigation |
|---|---|---|
| fumadocs-ui requires `next` as peer dep | Build failure | Install next as optional peer, or use fumadocs-ui's tanstack-specific exports which don't import next modules |
| Prerendering 36K+ pages too slow | Cannot ship | Fall back to SSR mode (MDX pre-compiled at build, HTML rendered at request time) |
| @cloudflare/vite-plugin + fumadocs-mdx/vite conflict | Build failure | Use nitro preset instead of CF vite plugin |
| fumadocs-mdx/vite uses `new Function()` at build time | Build-time only, not runtime | ✓ Already confirmed: MDX compiled during Vite build, not in CF Workers |
| TanStack Start + CF Workers immaturity | Runtime bugs | Fall back to nitro+cloudflare preset |

## Open Questions

1. **Does fumadocs-ui 16 actually work without Next.js at runtime?** The tanstack provider replaces Link/Router, but internal components might still import from `next/*`. Need to verify with POC.
2. **Can `@cloudflare/vite-plugin` and `fumadocs-mdx/vite` coexist?** Both are Vite plugins that modify the build pipeline. Need POC verification.
3. **Prerender performance at 4000+ pages?** TanStack Start's prerender is newer and less battle-tested than Astro's SSG at this scale.
4. **Client-side JS bundle size?** fumadocs-ui ships React components → more client JS than Astro's zero-JS. Acceptable for docs site?
