# Astro Component Gaps Fix Plan

> **REQUIRED SUB-SKILL:** Use the executing-plans skill to implement this plan task-by-task.

**Goal:** Close the feature gaps between the Astro + Starlight deployment and the Next.js + fumadocs reference implementation.

**Architecture:** Add a remark plugin (`remark-convert-code-meta.ts`) to `packages/shared/src/plugins/`, upgrade existing Astro components to match Next.js quality, port the `related` frontmatter rendering. All changes in `packages/shared/` (shared by `apps/web` and `apps/web-v`).

**Tech Stack:** Astro 6, Starlight 0.38, remark, expressive-code.

---

## Task 1: Port `remark-convert-code-meta` plugin

**Highest impact: 775 files with `filename=`, 453 with `switcher`**

The Next.js app has `remark-convert-code-meta.ts` that:
1. `filename="x"` → `title="x"` (shows filename as code block title)
2. `filename="x" switcher` → `tab="x"` (consecutive blocks become tabs)
3. Language aliases: `.env`→`bash`, `terminal`→`bash`, `mjs`→`javascript`, etc.

Starlight's expressive-code supports `title="..."` natively, and consecutive `tab="..."` blocks render as tabs.

**Files:**
- Create: `packages/shared/src/plugins/remark-convert-code-meta.ts`
- Modify: `apps/web/astro.config.mjs` (add plugin)
- Modify: `apps/web-v/astro.config.mjs` (add plugin)

**Steps:**
1. Copy `apps/docs/src/lib/remark-plugins/remark-convert-code-meta.ts` to `packages/shared/src/plugins/`
2. Inline the `LANGUAGE_MAP` from `packages/const/src/mdx.ts` (avoid dep)
3. Add to `astro.config.mjs` remarkPlugins array (before existing plugins)
4. Build `apps/web` with en-only content to test
5. Verify: code blocks with `filename=` show titles, `switcher` blocks show tabs
6. Commit: `feat(shared): port remark-convert-code-meta from Next.js app`

---

## Task 2: Upgrade Check/Cross to SVG icons

**Current:** plain text ✓/✗. **Target:** Geist SVG icons matching Next.js.

**Files:**
- Modify: `packages/shared/src/components/Check.astro`
- Modify: `packages/shared/src/components/Cross.astro`

**Steps:**
1. Replace Check.astro with the SVG from `apps/docs/src/mdx/Check.tsx` (Check export)
2. Replace Cross.astro with the SVG from `apps/docs/src/mdx/Check.tsx` (Cross export)
3. Keep `size` prop support
4. Build and verify
5. Commit: `feat(shared): upgrade Check/Cross to Geist SVG icons`

---

## Task 3: Upgrade VideoComponent to match Next.js Video

**Current:** basic `<video controls>`. **Target:** autoplay+loop+muted+caption like Next.js.

**Files:**
- Modify: `packages/shared/src/components/VideoComponent.astro`

**Steps:**
1. Port the props and rendering from `apps/docs/src/mdx/Video.tsx`:
   - `src`, `caption`, `width`, `height` props
   - `autoPlay`, `loop`, `muted`, `playsInline` attributes
   - `width: 100%`, `height: auto`, `borderRadius: 8px` styles
   - `<figcaption>` for caption
2. Build and verify
3. Commit: `feat(shared): upgrade VideoComponent with autoplay/caption`

---

## Task 4: Upgrade Image.astro with srcSet support

**Current:** direct blob URL. **Target:** 1x/2x srcSet for responsive images.

The Next.js Image uses `nextjs.org/_next/image` proxy for resizing. Since we can't use that proxy on CF, we'll use the blob URL directly but add proper `srcSet` with width descriptors for the browser to choose.

**Files:**
- Modify: `packages/shared/src/components/Image.astro`

**Steps:**
1. Add `srcSet` with `1x` and `2x` variants using blob URL + width params (if available)
2. Add `rounded-md border border-gray-200 bg-gray-100` classes matching Next.js
3. Keep existing light/dark theme toggle via CSS
4. Build and verify
5. Commit: `feat(shared): upgrade Image with srcSet and styling`

---

## Task 5: Add `related` links rendering to MarkdownContent.astro

**177 files have `related` frontmatter with title, description, and links.**

**Files:**
- Modify: `packages/shared/src/overrides/MarkdownContent.astro`

**Steps:**
1. Read `related` from `entry.data` frontmatter
2. If `related.links` exists, resolve each link to a page URL and title
3. Render as cards (similar to existing child page cards)
4. Build and verify with a page that has `related` (e.g., `docs/index.mdx`)
5. Commit: `feat(shared): render related links from frontmatter`

---

## Task 6: Add sitemap generation

**Files:**
- Modify: `apps/web/astro.config.mjs` (add @astrojs/sitemap)
- Modify: `apps/web-v/astro.config.mjs` (add @astrojs/sitemap)

**Steps:**
1. Install `@astrojs/sitemap`
2. Add to integrations in astro.config.mjs
3. Configure with `site` URL
4. Build and verify `/sitemap-index.xml` is generated
5. Commit: `feat: add sitemap generation`

---

## Task 7: Delete TanStack Start POC (apps/web-ts)

**Files:**
- Delete: `apps/web-ts/` (entire directory)
- Delete: `docs/plans/2026-03-18-tanstack-start-cf-migration.md`
- Delete: `docs/plans/2026-03-18-tanstack-start-full-migration.md`

**Steps:**
1. Delete the POC app and migration plans
2. Remove from `bun` workspace if referenced
3. Clean up any deps that were only for web-ts
4. Commit: `chore: remove TanStack Start POC (Astro chosen for production)`

---

## Summary

| Task | Impact | Files affected |
|------|--------|---------------|
| 1. remark-convert-code-meta | 🔴 775+453 files | code block titles + tabs |
| 2. Check/Cross SVG | 🟡 visual | ~60 files use Check/Cross |
| 3. Video upgrade | 🟡 functional | ~20 files use Video |
| 4. Image srcSet | 🟡 quality | ~150 files use Image |
| 5. Related links | 🟡 content | 177 files have related |
| 6. Sitemap | 🟡 SEO | site-wide |
| 7. Cleanup web-ts | housekeeping | - |
