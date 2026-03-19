/**
 * Shared content preparation script for all Astro workers.
 *
 * Usage:
 *   bun run scripts/prepare-content.ts --target apps/web          # latest
 *   bun run scripts/prepare-content.ts --target apps/web-v13 --version 13
 *   bun run scripts/prepare-content.ts --target apps/web-v14 --version 14
 *   bun run scripts/prepare-content.ts --target apps/web-v15 --version 15
 *
 * Handles:
 * 1. Strip numeric prefixes from directory names (01-app → app)
 * 2. Resolve `source` references (Pages Router → App Router content)
 * 3. Map locale directories to Starlight structure
 * 4. Strip MDX comments
 *
 * JSX components (Image, Check, Cross, AppOnly, PagesOnly, etc.) are NOT
 * stripped here — they are handled as Astro components via remark-auto-import.
 */

import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { join, relative, resolve, dirname } from 'node:path';

// ── CLI Args ──

function parseArgs(): { target: string; version: string | null } {
  const args = process.argv.slice(2);
  let target = '';
  let version: string | null = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--target' && args[i + 1]) target = args[++i];
    if (args[i] === '--version' && args[i + 1]) version = args[++i];
  }

  if (!target) {
    console.error('Usage: bun run scripts/prepare-content.ts --target <app-dir> [--version <13|14|15>]');
    process.exit(1);
  }

  return { target, version };
}

const { target, version } = parseArgs();

const ROOT_LOCALE = 'en';
const LOCALES = ['en', 'zh-hans', 'zh-hant', 'ja', 'ar', 'de', 'es', 'fr', 'ru'];
const CONTENT_SRC = version
  ? resolve(import.meta.dirname!, `../content-v${version}`)
  : resolve(import.meta.dirname!, '../content');
const CONTENT_DST = resolve(import.meta.dirname!, '..', target, 'src/content/docs');
const VERSIONED_DIRS = ['13', '14', '15'];

// ── Helpers ──

function stripNumericPrefix(name: string): string {
  return name.replace(/^\d+-/, '');
}

/** Extract the numeric prefix from a filename: "01-getting-started" → 1, "index.mdx" → -1 */
function extractOrder(name: string): number | null {
  const match = name.match(/^(\d+)-/);
  return match ? parseInt(match[1], 10) : null;
}

/**
 * Get the sidebar order for a file based on its original path's numeric prefixes.
 * Uses hierarchical ordering: parent order × 100 + child order.
 * e.g., 01-getting-started/01-installation.mdx → 101
 *       05-api-reference/01-directives/01-use-cache.mdx → 50101
 * This ensures parent directory ordering is respected by Starlight's
 * "directory order = min(child orders)" algorithm.
 */
function getSidebarOrder(originalRelPath: string): number | null {
  const parts = originalRelPath.split('/');
  let order = 0;
  let hasOrder = false;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].replace(/\.mdx$/, '');
    // Skip 'index' files - they inherit parent's order
    if (part === 'index') continue;
    const num = extractOrder(part);
    if (num !== null) {
      order = order * 100 + num;
      hasOrder = true;
    }
  }

  return hasOrder ? order : null;
}

function stripAllPrefixes(relPath: string): string {
  return relPath.split('/').map(stripNumericPrefix).join('/');
}

function parseFrontmatter(content: string): {
  frontmatter: Record<string, string>;
  body: string;
  raw: string;
} {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { frontmatter: {}, body: content, raw: '' };

  const fm: Record<string, string> = {};
  const lines = match[1].split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const colonIdx = line.indexOf(':');
    if (colonIdx > 0 && !line.startsWith(' ') && !line.startsWith('\t')) {
      const key = line.slice(0, colonIdx).trim();
      let value = line.slice(colonIdx + 1).trim();
      while (i + 1 < lines.length && (lines[i + 1].startsWith('  ') || lines[i + 1].startsWith('\t'))) {
        i++;
        value += '\n' + lines[i];
      }
      fm[key] = value;
    }
  }

  return { frontmatter: fm, body: content.slice(match[0].length), raw: match[1] };
}

function resolveSourceFile(locale: string, sourceRef: string): string | null {
  const parts = sourceRef.split('/');
  // For versioned builds, CONTENT_SRC already points to content-v{N}/
  return resolveSourceInDir(join(CONTENT_SRC, locale, 'docs'), parts);
}

function resolveSourceInDir(currentDir: string, parts: string[]): string | null {
  for (let i = 0; i < parts.length; i++) {
    const target = parts[i];
    if (!existsSync(currentDir)) return null;

    const entries = readdirSync(currentDir);
    const match = entries.find((e) => stripNumericPrefix(e).replace(/\.mdx$/, '') === target);
    if (!match) return null;

    if (i === parts.length - 1) {
      const asFile = join(currentDir, match.endsWith('.mdx') ? match : `${match}.mdx`);
      if (existsSync(asFile)) return asFile;
      const asIndex = join(currentDir, match, 'index.mdx');
      if (existsSync(asIndex)) return asIndex;
      const withPrefix = entries.find(
        (e) => stripNumericPrefix(e.replace(/\.mdx$/, '')) === target && e.endsWith('.mdx')
      );
      if (withPrefix) return join(currentDir, withPrefix);
      return null;
    }

    currentDir = join(currentDir, match);
  }

  return null;
}

/** Strip MDX comments and rewrite links for versioned content */
function filterContent(body: string): string {
  let result = body.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');

  // For versioned builds, rewrite internal doc links:
  // /docs/app/... → /docs/{version}/app/...
  // /docs/pages/... → /docs/{version}/pages/...
  // /docs/getting-started/... → /docs/{version}/getting-started/...
  if (version) {
    result = result.replace(
      /\]\(\/docs\/(app|pages|getting-started)(\/[^)]*)\)/g,
      `](/docs/${version}/$1$2)`
    );
    // Also handle links without trailing path
    result = result.replace(
      /\]\(\/docs\/(app|pages|getting-started)\)/g,
      `](/docs/${version}/$1)`
    );
  }

  return result;
}

function walkMdx(dir: string): string[] {
  const files: string[] = [];
  if (!existsSync(dir)) return files;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkMdx(fullPath));
    else if (entry.name.endsWith('.mdx')) files.push(fullPath);
  }
  return files;
}

function ensureDir(path: string) {
  mkdirSync(dirname(path), { recursive: true });
}

function shouldIncludeDocsDir(dirName: string): boolean {
  // Versioned content is in separate top-level dirs (content-v13/, etc.)
  // so no version subdirs exist within the content source
  if (version) return true;
  return !VERSIONED_DIRS.includes(dirName);
}

function shouldIncludeSection(sectionName: string): boolean {
  if (version) return sectionName === 'docs';
  return true;
}

// ── Main Processing ──

// Use force: true to handle race condition when multiple versioned workers
// share the same directory (apps/web-v) and run prepare-content concurrently
rmSync(CONTENT_DST, { recursive: true, force: true });
mkdirSync(CONTENT_DST, { recursive: true });

let totalFiles = 0;
let sourceResolved = 0;
let sourceErrors = 0;

// Pre-compute blog post ordering by date (newest first)
const blogDateOrder = new Map<string, number>();
if (!version) {
  const blogDir = join(CONTENT_SRC, 'en', 'blog');
  if (existsSync(blogDir)) {
    const posts: { slug: string; date: number }[] = [];
    for (const file of readdirSync(blogDir)) {
      if (!file.endsWith('.mdx') || file === 'index.mdx') continue;
      const content = readFileSync(join(blogDir, file), 'utf-8');
      const { frontmatter } = parseFrontmatter(content);
      const date = frontmatter.date ? new Date(frontmatter.date.trim()).getTime() : 0;
      posts.push({ slug: file.replace(/\.mdx$/, ''), date });
    }
    posts.sort((a, b) => b.date - a.date); // newest first
    posts.forEach((p, i) => blogDateOrder.set(p.slug, i + 1));
  }
}

console.log(`Preparing content: ${version ? `v${version}` : 'latest'} → ${CONTENT_DST}`);

for (const locale of LOCALES) {
  const localeSrc = join(CONTENT_SRC, locale);
  if (!existsSync(localeSrc)) {
    console.log(`⚠ Skipping ${locale} — not found`);
    continue;
  }

  const localePrefix = locale === ROOT_LOCALE ? '' : `${locale}/`;
  const sections = readdirSync(localeSrc, { withFileTypes: true });

  for (const section of sections) {
    if (!section.isDirectory()) continue;
    if (!shouldIncludeSection(section.name)) continue;

    const sectionSrc = join(localeSrc, section.name);
    const sectionName = section.name;

    if (sectionName === 'docs') {
      // Process root-level MDX files in docs/ (e.g., index.mdx)
      if (!version) {
        const rootFiles = readdirSync(sectionSrc, { withFileTypes: true })
          .filter((e) => !e.isDirectory() && e.name.endsWith('.mdx'));
        for (const file of rootFiles) {
          const srcPath = join(sectionSrc, file.name);
          const dstPath = join(CONTENT_DST, localePrefix, 'docs', file.name);
          processFile(srcPath, dstPath, locale, file.name, file.name);
        }
      }

      const docsDirs = readdirSync(sectionSrc, { withFileTypes: true });
      for (const docsDir of docsDirs) {
        if (!docsDir.isDirectory()) continue;
        if (!shouldIncludeDocsDir(docsDir.name)) continue;

        const subSrc = join(sectionSrc, docsDir.name);
        const mdxFiles = walkMdx(subSrc);

        for (const srcPath of mdxFiles) {
          const relFromDocsDir = relative(subSrc, srcPath);
          const cleanRel = stripAllPrefixes(relFromDocsDir);

          let dstRel: string;
          if (version) {
            dstRel = join('docs', version, stripNumericPrefix(docsDir.name), cleanRel);
          } else {
            dstRel = join('docs', stripNumericPrefix(docsDir.name), cleanRel);
          }

          const dstPath = join(CONTENT_DST, localePrefix, dstRel);
          processFile(srcPath, dstPath, locale, cleanRel, relFromDocsDir);
        }
      }
    } else {
      const mdxFiles = walkMdx(sectionSrc);
      for (const srcPath of mdxFiles) {
        const relFromSection = relative(sectionSrc, srcPath);
        const cleanRel = stripAllPrefixes(relFromSection);
        const dstPath = join(CONTENT_DST, localePrefix, sectionName, cleanRel);
        processFile(srcPath, dstPath, locale, cleanRel, relFromSection);
      }
    }
  }

  console.log(`[${locale}] processed`);
}

function processFile(
  srcPath: string,
  dstPath: string,
  locale: string,
  cleanRel: string,
  originalRel: string
) {
  const content = readFileSync(srcPath, 'utf-8');
  const { frontmatter, body, raw } = parseFrontmatter(content);

  // Inject sidebar metadata based on original numeric prefix or blog date
  const isBlogPost = dstPath.includes('/blog/') && !cleanRel.endsWith('index.mdx');
  const order = isBlogPost
    ? blogDateOrder.get(cleanRel.replace(/\.mdx$/, ''))
    : getSidebarOrder(originalRel);
  let enrichedRaw = raw;
  if (!raw.includes('sidebar:')) {
    const sidebarParts: string[] = [];
    if (order !== null && order !== undefined) sidebarParts.push(`  order: ${order}`);
    // Use nav_title as sidebar label (short name for navigation)
    // Falls back to title for index files (used as group label)
    if (frontmatter.nav_title) {
      sidebarParts.push(`  label: "${frontmatter.nav_title.replace(/"/g, '\\"')}"`);
    } else if (originalRel.endsWith('index.mdx') && frontmatter.title) {
      sidebarParts.push(`  label: "${frontmatter.title.replace(/"/g, '\\"')}"`);
    }

    if (sidebarParts.length > 0) {
      enrichedRaw = `${raw}\nsidebar:\n${sidebarParts.join('\n')}`;
    }
  }

  const bodyWithoutComments = body.replace(/\{\/\*[\s\S]*?\*\/\}/g, '').trim();
  if (frontmatter.source && bodyWithoutComments.length < 10) {
    const sourceFile = resolveSourceFile(locale, frontmatter.source);
    if (sourceFile) {
      const sourceContent = readFileSync(sourceFile, 'utf-8');
      const { body: sourceBody } = parseFrontmatter(sourceContent);
      const filtered = filterContent(sourceBody);
      ensureDir(dstPath);
      writeFileSync(dstPath, `---\n${enrichedRaw}\n---\n${filtered}`);
      sourceResolved++;
    } else {
      ensureDir(dstPath);
      writeFileSync(dstPath, content);
      sourceErrors++;
      if (sourceErrors <= 5) {
        console.log(`  ⚠ Source not found: ${frontmatter.source} (in ${locale}/${cleanRel})`);
      }
    }
  } else {
    const filtered = filterContent(body);
    ensureDir(dstPath);
    writeFileSync(dstPath, `---\n${enrichedRaw}\n---\n${filtered}`);
  }

  totalFiles++;
}

// Generate Starlight root index
{
  const rootIndex = join(CONTENT_DST, 'index.mdx');
  if (!existsSync(rootIndex)) {
    // Find a suitable index to copy as root
    const candidates = version
      ? [join(CONTENT_DST, 'docs', version, 'index.mdx')]
      : [join(CONTENT_DST, 'docs', 'index.mdx')];
    for (const candidate of candidates) {
      if (existsSync(candidate)) {
        writeFileSync(rootIndex, readFileSync(candidate, 'utf-8'));
        break;
      }
    }
  }
  // Same for each locale
  for (const locale of LOCALES) {
    if (locale === ROOT_LOCALE) continue;
    const localeRoot = join(CONTENT_DST, locale, 'index.mdx');
    if (!existsSync(localeRoot)) {
      const candidates = version
        ? [join(CONTENT_DST, locale, 'docs', version, 'index.mdx')]
        : [join(CONTENT_DST, locale, 'docs', 'index.mdx')];
      for (const candidate of candidates) {
        if (existsSync(candidate)) {
          ensureDir(localeRoot);
          writeFileSync(localeRoot, readFileSync(candidate, 'utf-8'));
          break;
        }
      }
    }
  }
}

// ── Generate splash index pages (blog & learn) ──

if (!version) {
  const CONTENT_ROOT = resolve(import.meta.dirname!, '../content');

  // Generate blog index from actual blog posts
  generateBlogIndex(CONTENT_ROOT);

  // Generate learn index from actual learn directories
  generateLearnIndex(CONTENT_ROOT);

  console.log('Generated blog & learn index pages');
}

/** Generate blog/index.mdx with cards grouped by year */
function generateBlogIndex(contentRoot: string) {
  const blogDir = join(contentRoot, 'en', 'blog');
  if (!existsSync(blogDir)) return;

  interface BlogPost { slug: string; title: string; date: Date; dateStr: string }
  const posts: BlogPost[] = [];

  for (const file of readdirSync(blogDir)) {
    if (!file.endsWith('.mdx') || file === 'index.mdx') continue;
    const content = readFileSync(join(blogDir, file), 'utf-8');
    const { frontmatter } = parseFrontmatter(content);
    if (!frontmatter.title || !frontmatter.date) continue;
    const date = new Date(frontmatter.date.trim());
    posts.push({
      slug: file.replace(/\.mdx$/, ''),
      title: frontmatter.title
        .replace(/^['"]|['"]$/g, '')  // strip wrapping quotes
        .replace(/&apos;/g, "'")      // decode HTML entities
        .replace(/"/g, '&quot;'),     // escape for MDX attribute
      date,
      dateStr: date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    });
  }

  posts.sort((a, b) => b.date.getTime() - a.date.getTime());

  // Group by year
  const byYear = new Map<number, BlogPost[]>();
  for (const post of posts) {
    const year = post.date.getFullYear();
    if (!byYear.has(year)) byYear.set(year, []);
    byYear.get(year)!.push(post);
  }

  let mdx = `---
title: Blog
description: News and updates from the Next.js team.
template: splash
hero:
  title: Blog
  tagline: News and updates from the Next.js team.
---

import { LinkCard, CardGrid } from '@astrojs/starlight/components';

`;

  const years = [...byYear.keys()].sort((a, b) => b - a);
  for (const year of years) {
    mdx += `## ${year}\n\n<CardGrid>\n`;
    for (const post of byYear.get(year)!) {
      mdx += `  <LinkCard title="${post.title}" href="/blog/${post.slug}/" description="${post.dateStr}" />\n`;
    }
    mdx += `</CardGrid>\n\n`;
  }

  const dstPath = join(CONTENT_DST, 'blog', 'index.mdx');
  ensureDir(dstPath);
  writeFileSync(dstPath, mdx);
  totalFiles++;
}

/** Generate learn/index.mdx with cards for each course */
function generateLearnIndex(contentRoot: string) {
  const learnDir = join(contentRoot, 'en', 'learn');
  if (!existsSync(learnDir)) return;

  const icons: Record<string, string> = {
    'react-foundations': 'rocket',
    'dashboard-app': 'laptop',
    'pages-router': 'document',
    'seo': 'magnifier',
  };

  interface Course { name: string; slug: string; chapters: number; icon: string }
  const courses: Course[] = [];

  const titleOverrides: Record<string, string> = { seo: 'SEO' };

  const entries = readdirSync(learnDir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name));

  for (const entry of entries) {
    const slug = stripNumericPrefix(entry.name);
    const chapters = readdirSync(join(learnDir, entry.name))
      .filter((f) => f.endsWith('.mdx')).length;
    const name = titleOverrides[slug]
      || slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    courses.push({ name, slug, chapters, icon: icons[slug] || 'open-book' });
  }

  let mdx = `---
title: Learn Next.js
description: Free interactive courses to help you get started with Next.js and build full-stack web applications.
template: splash
hero:
  title: Learn Next.js
  tagline: Free interactive courses with quizzes, from React basics to building a full-stack app.
---

import { Card, CardGrid } from '@astrojs/starlight/components';

<CardGrid>
`;

  for (const course of courses) {
    mdx += `  <Card title="${course.name}" icon="${course.icon}">
    **${course.chapters} Chapters**

    [Start Learning →](/learn/${course.slug}/)
  </Card>

`;
  }

  mdx += `</CardGrid>\n`;

  const dstPath = join(CONTENT_DST, 'learn', 'index.mdx');
  ensureDir(dstPath);
  writeFileSync(dstPath, mdx);
  totalFiles++;
}

console.log(`\nTotal: ${totalFiles} files`);
console.log(`Source references resolved: ${sourceResolved}`);
console.log(`Source references failed: ${sourceErrors}`);
console.log(`Output: ${CONTENT_DST}`);
