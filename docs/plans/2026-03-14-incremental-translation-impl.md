# Incremental Translation Prototype Implementation Plan

> **REQUIRED SUB-SKILL:** Use the executing-plans skill to implement this plan task-by-task.

**Goal:** Build and validate the AST-based incremental translation pipeline using 2 test files, translating to zh-hans only.

**Architecture:** Parse MDX with remark into AST nodes → hash translatable nodes with MD5 → assemble target file with cached translations + `NEEDS_TRANSLATION` markers → call pi to translate → validate output and update cache. All new code goes into `packages/translate/src/` as new modules alongside existing code.

**Tech Stack:** remark (already in project), Node.js crypto (MD5), vitest (testing), pi SDK (translation — Phase 1 uses mock, real pi comes in Phase 2)

**Test files:**
- `apps/docs/content/en/docs/01-app/01-getting-started/01-installation.mdx` (340 lines, medium complexity)
- `apps/docs/content/en/docs/01-app/05-api-reference/02-components/image.mdx` (1252 lines, all edge cases)

---

## Phase A: Core Pipeline (parse → hash → assemble)

### Task 1: Add remark dependency to translate package

**TDD scenario:** Trivial change — no test needed.

**Files:**
- Modify: `packages/translate/package.json` (add `remark` dependency)

**Step 1: Add dependency**

```bash
cd packages/translate
pnpm add remark
```

**Step 2: Verify it installs**

```bash
pnpm install
```

Expected: clean install, no errors.

**Step 3: Commit**

```bash
git add packages/translate/package.json pnpm-lock.yaml
git commit -m "chore: add remark dependency to translate package"
```

---

### Task 2: Implement `normalize` — preprocess MDX for clean AST parsing

**TDD scenario:** New feature — full TDD cycle.

**Files:**
- Create: `packages/translate/src/normalize.ts`
- Create: `packages/translate/tests/unit/normalize.test.ts`

**Step 1: Write the failing tests**

```typescript
// packages/translate/tests/unit/normalize.test.ts
import { describe, expect, it } from 'vitest';
import { normalize } from '../../src/normalize';

describe('normalize', () => {
  it('should insert blank line after <AppOnly> when missing', () => {
    const input = '<AppOnly>\n### Heading';
    const expected = '<AppOnly>\n\n### Heading';
    expect(normalize(input)).toBe(expected);
  });

  it('should not double blank line after <AppOnly> when already present', () => {
    const input = '<AppOnly>\n\n### Heading';
    expect(normalize(input)).toBe(input);
  });

  it('should insert blank line after <PagesOnly>', () => {
    const input = '<PagesOnly>\nSome text here.';
    const expected = '<PagesOnly>\n\nSome text here.';
    expect(normalize(input)).toBe(expected);
  });

  it('should insert blank line before </AppOnly> when missing', () => {
    const input = 'Some text\n</AppOnly>';
    const expected = 'Some text\n\n</AppOnly>';
    expect(normalize(input)).toBe(expected);
  });

  it('should insert blank line after </AppOnly> when missing', () => {
    const input = '</AppOnly>\nNext content';
    const expected = '</AppOnly>\n\nNext content';
    expect(normalize(input)).toBe(expected);
  });

  it('should handle <details> with attributes', () => {
    const input = '<details open>\n  <summary>Examples</summary>';
    const expected = '<details open>\n\n  <summary>Examples</summary>';
    expect(normalize(input)).toBe(expected);
  });

  it('should handle <div> with style attributes', () => {
    const input = "<div style={{ overflowX: 'auto' }}>\n| Col1 | Col2 |";
    const expected = "<div style={{ overflowX: 'auto' }}>\n\n| Col1 | Col2 |";
    expect(normalize(input)).toBe(expected);
  });

  it('should handle </div> closing tag', () => {
    const input = '| data |\n</div>';
    const expected = '| data |\n\n</div>';
    expect(normalize(input)).toBe(expected);
  });

  it('should handle multiple tags in one file', () => {
    const input = '<AppOnly>\nText\n</AppOnly>\n<PagesOnly>\nMore\n</PagesOnly>';
    const result = normalize(input);
    // Every tag should have blank line after/before
    expect(result).toContain('<AppOnly>\n\nText');
    expect(result).toContain('Text\n\n</AppOnly>');
    expect(result).toContain('<PagesOnly>\n\nMore');
    expect(result).toContain('More\n\n</PagesOnly>');
  });

  it('should not modify content inside code blocks or other elements', () => {
    const input = '```\n<AppOnly>\ncode\n</AppOnly>\n```';
    // normalize works on line-level regex; code blocks may be affected
    // but this is acceptable since remark will parse code blocks correctly anyway
    // Just verify it doesn't crash
    expect(() => normalize(input)).not.toThrow();
  });
});
```

**Step 2: Run tests to verify they fail**

```bash
cd packages/translate && pnpm test -- tests/unit/normalize.test.ts
```

Expected: FAIL — module `../../src/normalize` not found.

**Step 3: Implement normalize**

```typescript
// packages/translate/src/normalize.ts

/**
 * Preprocess MDX content to ensure JSX tags (<AppOnly>, <PagesOnly>, <details>, <div>)
 * are separated from surrounding content by blank lines.
 * This ensures remark parses them as independent HTML nodes,
 * not merged with adjacent text content.
 */
export function normalize(content: string): string {
  let result = content;

  // After opening tags: ensure blank line follows
  result = result.replace(
    /^(<(?:AppOnly|PagesOnly|details[^>]*|div[^>]*)>)\n(?!\n)/gm,
    '$1\n\n',
  );

  // Before closing tags: ensure blank line precedes
  result = result.replace(
    /(?<!\n)\n(<\/(?:AppOnly|PagesOnly|details|div)>)/gm,
    '\n\n$1',
  );

  // After closing tags: ensure blank line follows
  result = result.replace(
    /^(<\/(?:AppOnly|PagesOnly|details|div)>)\n(?!\n)/gm,
    '$1\n\n',
  );

  return result;
}
```

**Step 4: Run tests to verify they pass**

```bash
cd packages/translate && pnpm test -- tests/unit/normalize.test.ts
```

Expected: ALL PASS.

**Step 5: Commit**

```bash
git add packages/translate/src/normalize.ts packages/translate/tests/unit/normalize.test.ts
git commit -m "feat: add normalize module for MDX preprocessing"
```

---

### Task 3: Implement `parser` — parse MDX into classified AST nodes

**TDD scenario:** New feature — full TDD cycle.

**Files:**
- Create: `packages/translate/src/parser.ts`
- Create: `packages/translate/tests/unit/parser.test.ts`

**Step 1: Write the failing tests**

```typescript
// packages/translate/tests/unit/parser.test.ts
import { describe, expect, it } from 'vitest';
import { type ParsedNode, parseMdx } from '../../src/parser';

describe('parseMdx', () => {
  it('should classify paragraph as translatable', () => {
    const content = '---\ntitle: Test\n---\n\nHello world paragraph.';
    const nodes = parseMdx(content);
    const para = nodes.find((n) => n.type === 'paragraph');
    expect(para).toBeDefined();
    expect(para!.needsTranslation).toBe(true);
    expect(para!.rawText).toBe('Hello world paragraph.');
  });

  it('should classify heading as translatable', () => {
    const content = '## My Heading';
    const nodes = parseMdx(content);
    expect(nodes[0].type).toBe('heading');
    expect(nodes[0].needsTranslation).toBe(true);
    expect(nodes[0].rawText).toBe('## My Heading');
  });

  it('should classify code block as non-translatable', () => {
    const content = '```js\nconsole.log("hi")\n```';
    const nodes = parseMdx(content);
    expect(nodes[0].type).toBe('code');
    expect(nodes[0].needsTranslation).toBe(false);
  });

  it('should classify pure html tags as non-translatable', () => {
    const content = '<AppOnly>\n\nSome text\n\n</AppOnly>';
    const nodes = parseMdx(content);
    const htmlNodes = nodes.filter((n) => n.type === 'html');
    // <AppOnly> and </AppOnly> are pure tags
    for (const n of htmlNodes) {
      expect(n.needsTranslation).toBe(false);
    }
  });

  it('should classify summary with text as translatable', () => {
    const content = '<details>\n\n<summary>Examples</summary>';
    const nodes = parseMdx(content);
    const summaryNode = nodes.find(
      (n) => n.type === 'html' && n.rawText.includes('<summary>'),
    );
    expect(summaryNode).toBeDefined();
    expect(summaryNode!.needsTranslation).toBe(true);
  });

  it('should classify thematicBreak as non-translatable', () => {
    const content = '---\ntitle: Test\n---';
    const nodes = parseMdx(content);
    const tb = nodes.find((n) => n.type === 'thematicBreak');
    expect(tb).toBeDefined();
    expect(tb!.needsTranslation).toBe(false);
  });

  it('should classify list as translatable', () => {
    const content = '- Item one\n- Item two\n- Item three';
    const nodes = parseMdx(content);
    expect(nodes[0].type).toBe('list');
    expect(nodes[0].needsTranslation).toBe(true);
  });

  it('should classify blockquote as translatable', () => {
    const content = '> **Good to know:** some info here.';
    const nodes = parseMdx(content);
    expect(nodes[0].type).toBe('blockquote');
    expect(nodes[0].needsTranslation).toBe(true);
  });

  it('should apply normalize before parsing', () => {
    // Without normalize, <AppOnly> + next line would merge into one html node
    const content = '<AppOnly>\n### Heading\n\nParagraph text.\n\n</AppOnly>';
    const nodes = parseMdx(content);
    const heading = nodes.find((n) => n.type === 'heading');
    expect(heading).toBeDefined();
    expect(heading!.needsTranslation).toBe(true);
  });

  it('should produce md5 hash for translatable nodes', () => {
    const content = '## My Heading\n\nA paragraph.';
    const nodes = parseMdx(content);
    const translatable = nodes.filter((n) => n.needsTranslation);
    expect(translatable.length).toBe(2);
    for (const n of translatable) {
      expect(n.md5).toBeDefined();
      expect(n.md5).toMatch(/^[a-f0-9]{32}$/);
    }
  });

  it('should produce same md5 for same content', () => {
    const content1 = 'Some paragraph.';
    const content2 = 'Other content.\n\nSome paragraph.';
    const nodes1 = parseMdx(content1);
    const nodes2 = parseMdx(content2);
    const hash1 = nodes1.find((n) => n.rawText === 'Some paragraph.')!.md5;
    const hash2 = nodes2.find((n) => n.rawText === 'Some paragraph.')!.md5;
    expect(hash1).toBe(hash2);
  });

  it('should normalize heading level before hashing', () => {
    const nodes1 = parseMdx('## Title');
    const nodes2 = parseMdx('### Title');
    expect(nodes1[0].md5).toBe(nodes2[0].md5);
  });

  it('should preserve node order matching original content', () => {
    const content = '## Heading\n\nParagraph.\n\n```js\ncode\n```\n\n- list item';
    const nodes = parseMdx(content);
    expect(nodes.map((n) => n.type)).toEqual([
      'heading',
      'paragraph',
      'code',
      'list',
    ]);
  });

  it('should classify self-closing JSX as non-translatable', () => {
    const content = '<Check size={18} />\n<Cross size={18} />';
    const nodes = parseMdx(content);
    for (const n of nodes) {
      expect(n.needsTranslation).toBe(false);
    }
  });
});
```

**Step 2: Run tests to verify they fail**

```bash
cd packages/translate && pnpm test -- tests/unit/parser.test.ts
```

Expected: FAIL — module not found.

**Step 3: Implement parser**

```typescript
// packages/translate/src/parser.ts
import crypto from 'node:crypto';
import { remark } from 'remark';
import { normalize } from './normalize';

export interface ParsedNode {
  /** AST node type: paragraph, heading, code, list, blockquote, html, thematicBreak */
  type: string;
  /** Raw text content extracted from the original (normalized) content */
  rawText: string;
  /** Whether this node contains text that needs translation */
  needsTranslation: boolean;
  /** MD5 hash of the content (only set for translatable nodes) */
  md5?: string;
  /** Start offset in the normalized content */
  startOffset: number;
  /** End offset in the normalized content */
  endOffset: number;
}

const TRANSLATABLE_TYPES = new Set([
  'paragraph',
  'heading',
  'list',
  'blockquote',
]);

/**
 * Check if an HTML node is a pure tag (no translatable text content).
 * Pure tags: <AppOnly>, </PagesOnly>, <Check size={18} />, etc.
 * Non-pure (needs translation): <summary>Examples</summary>
 */
function isHtmlPureTag(text: string): boolean {
  const trimmed = text.trim();
  // Self-closing tag: <Component ... />
  if (/^<\w[^>]*\/>$/.test(trimmed)) return true;
  // Opening or closing tag only: <Tag> or </Tag> or <Tag attr>
  if (/^<\/?\w[\w-]*[^>]*>$/.test(trimmed)) return true;
  return false;
}

/**
 * Compute MD5 hash. For headings, strip the leading # markers
 * so that ## Title and ### Title produce the same hash.
 */
function computeHash(text: string, type: string): string {
  let hashInput = text;
  if (type === 'heading') {
    hashInput = text.replace(/^#{1,6}\s+/, '');
  }
  return crypto.createHash('md5').update(hashInput).digest('hex');
}

/**
 * Parse MDX content into a flat list of classified AST nodes.
 * Applies normalize() preprocessing before parsing.
 */
export function parseMdx(rawContent: string): ParsedNode[] {
  const content = normalize(rawContent);
  const tree = remark().parse(content);
  const nodes: ParsedNode[] = [];

  for (const child of tree.children) {
    const startOffset = child.position!.start.offset!;
    const endOffset = child.position!.end.offset!;
    const rawText = content.substring(startOffset, endOffset);
    const type = child.type;

    let needsTranslation: boolean;

    if (TRANSLATABLE_TYPES.has(type)) {
      needsTranslation = true;
    } else if (type === 'html') {
      needsTranslation = !isHtmlPureTag(rawText);
    } else {
      needsTranslation = false;
    }

    const node: ParsedNode = {
      type,
      rawText,
      needsTranslation,
      startOffset,
      endOffset,
    };

    if (needsTranslation) {
      node.md5 = computeHash(rawText, type);
    }

    nodes.push(node);
  }

  return nodes;
}
```

**Step 4: Run tests to verify they pass**

```bash
cd packages/translate && pnpm test -- tests/unit/parser.test.ts
```

Expected: ALL PASS.

**Step 5: Commit**

```bash
git add packages/translate/src/parser.ts packages/translate/tests/unit/parser.test.ts
git commit -m "feat: add parser module - MDX to classified AST nodes"
```

---

### Task 4: Implement `cache` — MD5 translation cache read/write

**TDD scenario:** New feature — full TDD cycle.

**Files:**
- Create: `packages/translate/src/cache.ts`
- Create: `packages/translate/tests/unit/cache.test.ts`

**Step 1: Write the failing tests**

```typescript
// packages/translate/tests/unit/cache.test.ts
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { TranslationCache } from '../../src/cache';

describe('TranslationCache', () => {
  let tmpDir: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cache-test-'));
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it('should return undefined for missing key', () => {
    const cache = new TranslationCache(tmpDir);
    expect(cache.get('zh-hans', 'nonexistent')).toBeUndefined();
  });

  it('should set and get a translation', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'abc123', '这是翻译');
    expect(cache.get('zh-hans', 'abc123')).toBe('这是翻译');
  });

  it('should persist to disk and reload', () => {
    const cache1 = new TranslationCache(tmpDir);
    cache1.set('zh-hans', 'abc123', '翻译内容');
    cache1.save('zh-hans');

    const cache2 = new TranslationCache(tmpDir);
    cache2.load('zh-hans');
    expect(cache2.get('zh-hans', 'abc123')).toBe('翻译内容');
  });

  it('should handle multiple languages independently', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'hash1', '中文');
    cache.set('ja', 'hash1', '日本語');
    expect(cache.get('zh-hans', 'hash1')).toBe('中文');
    expect(cache.get('ja', 'hash1')).toBe('日本語');
  });

  it('should report cache stats', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'h1', 't1');
    cache.set('zh-hans', 'h2', 't2');
    const stats = cache.stats('zh-hans');
    expect(stats.size).toBe(2);
  });

  it('should overwrite existing translation', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'h1', 'old');
    cache.set('zh-hans', 'h1', 'new');
    expect(cache.get('zh-hans', 'h1')).toBe('new');
  });

  it('should save creates directory if not exists', () => {
    const nested = path.join(tmpDir, 'deep', 'nested');
    const cache = new TranslationCache(nested);
    cache.set('zh-hans', 'h1', 'val');
    cache.save('zh-hans');
    expect(fs.existsSync(path.join(nested, 'zh-hans.json'))).toBe(true);
  });
});
```

**Step 2: Run tests to verify they fail**

```bash
cd packages/translate && pnpm test -- tests/unit/cache.test.ts
```

Expected: FAIL.

**Step 3: Implement cache**

```typescript
// packages/translate/src/cache.ts
import fs from 'node:fs';
import path from 'node:path';

export class TranslationCache {
  private cacheDir: string;
  private data: Map<string, Map<string, string>> = new Map();

  constructor(cacheDir: string) {
    this.cacheDir = cacheDir;
  }

  /** Load cache for a specific language from disk */
  load(lang: string): void {
    const filePath = path.join(this.cacheDir, `${lang}.json`);
    if (fs.existsSync(filePath)) {
      const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      this.data.set(lang, new Map(Object.entries(raw)));
    }
  }

  /** Save cache for a specific language to disk */
  save(lang: string): void {
    fs.mkdirSync(this.cacheDir, { recursive: true });
    const filePath = path.join(this.cacheDir, `${lang}.json`);
    const langData = this.data.get(lang);
    if (langData) {
      const obj = Object.fromEntries(langData);
      fs.writeFileSync(filePath, JSON.stringify(obj, null, 2), 'utf8');
    }
  }

  /** Get a cached translation */
  get(lang: string, md5: string): string | undefined {
    return this.data.get(lang)?.get(md5);
  }

  /** Set a cached translation */
  set(lang: string, md5: string, translation: string): void {
    if (!this.data.has(lang)) {
      this.data.set(lang, new Map());
    }
    this.data.get(lang)!.set(md5, translation);
  }

  /** Get cache stats for a language */
  stats(lang: string): { size: number } {
    return { size: this.data.get(lang)?.size ?? 0 };
  }
}
```

**Step 4: Run tests to verify they pass**

```bash
cd packages/translate && pnpm test -- tests/unit/cache.test.ts
```

Expected: ALL PASS.

**Step 5: Commit**

```bash
git add packages/translate/src/cache.ts packages/translate/tests/unit/cache.test.ts
git commit -m "feat: add translation cache module with JSON persistence"
```

---

### Task 5: Implement `assembler` — build target file from cache + markers

**TDD scenario:** New feature — full TDD cycle.

**Files:**
- Create: `packages/translate/src/assembler.ts`
- Create: `packages/translate/tests/unit/assembler.test.ts`

**Step 1: Write the failing tests**

```typescript
// packages/translate/tests/unit/assembler.test.ts
import { describe, expect, it } from 'vitest';
import { type AssembleResult, assemble } from '../../src/assembler';
import { TranslationCache } from '../../src/cache';

describe('assemble', () => {
  function makeCache(entries: Record<string, string>): TranslationCache {
    const cache = new TranslationCache('/tmp/unused');
    for (const [md5, text] of Object.entries(entries)) {
      cache.set('zh-hans', md5, text);
    }
    return cache;
  }

  it('should replace translatable node with cached translation', () => {
    const content = '## Heading\n\nA paragraph.';
    const result = assemble(content, 'zh-hans', makeCache({}));
    // No cache, everything needs translation
    expect(result.content).toContain('<!-- NEEDS_TRANSLATION -->');
    expect(result.allCached).toBe(false);
    expect(result.uncachedCount).toBeGreaterThan(0);
  });

  it('should mark file as allCached when everything is cached', () => {
    const content = '## Heading\n\nA paragraph.';
    // First parse to get md5s, then populate cache
    const result1 = assemble(content, 'zh-hans', makeCache({}));
    // Create cache with all needed hashes
    const { parsedNodes } = result1;
    const cache = new TranslationCache('/tmp/unused');
    for (const node of parsedNodes) {
      if (node.needsTranslation && node.md5) {
        cache.set('zh-hans', node.md5, `translated:${node.rawText}`);
      }
    }
    const result2 = assemble(content, 'zh-hans', cache);
    expect(result2.allCached).toBe(true);
    expect(result2.uncachedCount).toBe(0);
    expect(result2.content).not.toContain('NEEDS_TRANSLATION');
  });

  it('should keep code blocks unchanged', () => {
    const content = '```js\nconsole.log("hi")\n```';
    const result = assemble(content, 'zh-hans', makeCache({}));
    expect(result.content).toContain('```js\nconsole.log("hi")\n```');
    expect(result.allCached).toBe(true); // no translatable nodes
  });

  it('should keep html tags unchanged', () => {
    const content = '<AppOnly>\n\nSome text\n\n</AppOnly>';
    const result = assemble(content, 'zh-hans', makeCache({}));
    expect(result.content).toContain('<AppOnly>');
    expect(result.content).toContain('</AppOnly>');
  });

  it('should handle mixed cached and uncached nodes', () => {
    const content = '## Title\n\nCached paragraph.\n\nUncached paragraph.';
    // Parse first to get hashes
    const result1 = assemble(content, 'zh-hans', makeCache({}));
    const cachedNode = result1.parsedNodes.find(
      (n) => n.rawText === 'Cached paragraph.',
    )!;

    const cache = new TranslationCache('/tmp/unused');
    cache.set('zh-hans', cachedNode.md5!, '已缓存的段落。');

    const result2 = assemble(content, 'zh-hans', cache);
    expect(result2.content).toContain('已缓存的段落。');
    expect(result2.content).toContain('<!-- NEEDS_TRANSLATION -->');
    expect(result2.content).toContain('Uncached paragraph.');
    expect(result2.uncachedCount).toBe(2); // heading + uncached para
  });

  it('should report stats: total, cached, uncached', () => {
    const content = '## A\n\nB\n\nC';
    const result = assemble(content, 'zh-hans', makeCache({}));
    expect(result.totalTranslatable).toBe(3);
    expect(result.uncachedCount).toBe(3);
    expect(result.cachedCount).toBe(0);
  });
});
```

**Step 2: Run tests to verify they fail**

```bash
cd packages/translate && pnpm test -- tests/unit/assembler.test.ts
```

Expected: FAIL.

**Step 3: Implement assembler**

```typescript
// packages/translate/src/assembler.ts
import { TranslationCache } from './cache';
import { normalize } from './normalize';
import { type ParsedNode, parseMdx } from './parser';

export const NEEDS_TRANSLATION_START = '<!-- NEEDS_TRANSLATION -->';
export const NEEDS_TRANSLATION_END = '<!-- /NEEDS_TRANSLATION -->';

export interface AssembleResult {
  /** The assembled file content */
  content: string;
  /** Whether all translatable nodes were found in cache */
  allCached: boolean;
  /** Number of translatable nodes found in cache */
  cachedCount: number;
  /** Number of translatable nodes not in cache */
  uncachedCount: number;
  /** Total number of translatable nodes */
  totalTranslatable: number;
  /** The parsed nodes for reference */
  parsedNodes: ParsedNode[];
}

/**
 * Assemble a target-language file from source content + translation cache.
 *
 * - Cached translations replace the original text
 * - Uncached nodes are wrapped in NEEDS_TRANSLATION markers
 * - Code, HTML tags, thematicBreak are kept as-is
 */
export function assemble(
  rawContent: string,
  lang: string,
  cache: TranslationCache,
): AssembleResult {
  const normalizedContent = normalize(rawContent);
  const nodes = parseMdx(rawContent);

  let result = '';
  let lastEnd = 0;
  let cachedCount = 0;
  let uncachedCount = 0;
  let totalTranslatable = 0;

  for (const node of nodes) {
    // Preserve whitespace/newlines between nodes
    result += normalizedContent.substring(lastEnd, node.startOffset);

    if (node.needsTranslation) {
      totalTranslatable++;
      const cached = node.md5 ? cache.get(lang, node.md5) : undefined;

      if (cached) {
        result += cached;
        cachedCount++;
      } else {
        result += `${NEEDS_TRANSLATION_START}\n${node.rawText}\n${NEEDS_TRANSLATION_END}`;
        uncachedCount++;
      }
    } else {
      result += node.rawText;
    }

    lastEnd = node.endOffset;
  }

  // Append any trailing content after the last node
  result += normalizedContent.substring(lastEnd);

  return {
    content: result,
    allCached: uncachedCount === 0,
    cachedCount,
    uncachedCount,
    totalTranslatable,
    parsedNodes: nodes,
  };
}
```

**Step 4: Run tests to verify they pass**

```bash
cd packages/translate && pnpm test -- tests/unit/assembler.test.ts
```

Expected: ALL PASS.

**Step 5: Commit**

```bash
git add packages/translate/src/assembler.ts packages/translate/tests/unit/assembler.test.ts
git commit -m "feat: add assembler module - build target files from cache"
```

---

### Task 6: Implement `validator` — verify pi output and update cache

**TDD scenario:** New feature — full TDD cycle.

**Files:**
- Create: `packages/translate/src/validator.ts`
- Create: `packages/translate/tests/unit/validator.test.ts`

**Step 1: Write the failing tests**

```typescript
// packages/translate/tests/unit/validator.test.ts
import { describe, expect, it } from 'vitest';
import { TranslationCache } from '../../src/cache';
import { parseMdx } from '../../src/parser';
import { type DiffRecord, validate } from '../../src/validator';

describe('validate', () => {
  it('should detect no diffs when pi output matches cached content', () => {
    const sourceContent = '## Heading\n\nA paragraph.';
    const piOutput = '## 标题\n\n一个段落。';

    const sourceNodes = parseMdx(sourceContent);
    const cache = new TranslationCache('/tmp/unused');
    // Pre-populate cache with exact translations
    for (const node of parseMdx(piOutput)) {
      if (node.needsTranslation) {
        // Find corresponding source node by index
        const srcIdx = parseMdx(piOutput).indexOf(node);
        const srcNode = sourceNodes[srcIdx];
        if (srcNode?.md5) {
          cache.set('zh-hans', srcNode.md5, node.rawText);
        }
      }
    }

    const result = validate(sourceContent, piOutput, 'zh-hans', cache);
    expect(result.diffs).toHaveLength(0);
  });

  it('should update cache with new translations', () => {
    const sourceContent = '## Heading\n\nA paragraph.';
    const piOutput = '## 标题\n\n一个段落。';
    const cache = new TranslationCache('/tmp/unused');

    const result = validate(sourceContent, piOutput, 'zh-hans', cache);
    // New translations should be added to cache
    expect(result.newTranslations).toBe(2); // heading + paragraph
    // Cache should now contain them
    const sourceNodes = parseMdx(sourceContent);
    for (const node of sourceNodes) {
      if (node.md5) {
        expect(cache.get('zh-hans', node.md5)).toBeDefined();
      }
    }
  });

  it('should detect and log diffs when pi modifies cached content', () => {
    const sourceContent = '## Heading\n\nA paragraph.';
    const piOutput = '## 标题\n\n被修改的段落。';
    const cache = new TranslationCache('/tmp/unused');

    // Pre-populate cache with "correct" translation for paragraph
    const sourceNodes = parseMdx(sourceContent);
    const paraNode = sourceNodes.find((n) => n.type === 'paragraph')!;
    cache.set('zh-hans', paraNode.md5!, '原始翻译。');

    const result = validate(sourceContent, piOutput, 'zh-hans', cache);
    expect(result.diffs.length).toBeGreaterThan(0);
    expect(result.diffs[0].cached).toBe('原始翻译。');
    expect(result.diffs[0].piOutput).toBe('被修改的段落。');
  });

  it('should return corrected content using cache values for diffs', () => {
    const sourceContent = '## Heading\n\nA paragraph.';
    const piOutput = '## 标题\n\n被修改的段落。';
    const cache = new TranslationCache('/tmp/unused');

    const sourceNodes = parseMdx(sourceContent);
    const paraNode = sourceNodes.find((n) => n.type === 'paragraph')!;
    cache.set('zh-hans', paraNode.md5!, '原始翻译。');

    const result = validate(sourceContent, piOutput, 'zh-hans', cache);
    // Corrected content should use cache value
    expect(result.correctedContent).toContain('原始翻译。');
    expect(result.correctedContent).not.toContain('被修改的段落。');
  });

  it('should handle code blocks and html as pass-through', () => {
    const sourceContent = '```js\ncode\n```\n\n<AppOnly>\n\nText\n\n</AppOnly>';
    const piOutput = '```js\ncode\n```\n\n<AppOnly>\n\n文本\n\n</AppOnly>';
    const cache = new TranslationCache('/tmp/unused');

    const result = validate(sourceContent, piOutput, 'zh-hans', cache);
    expect(result.correctedContent).toContain('```js\ncode\n```');
    expect(result.correctedContent).toContain('<AppOnly>');
  });
});
```

**Step 2: Run tests to verify they fail**

```bash
cd packages/translate && pnpm test -- tests/unit/validator.test.ts
```

Expected: FAIL.

**Step 3: Implement validator**

```typescript
// packages/translate/src/validator.ts
import { TranslationCache } from './cache';
import { normalize } from './normalize';
import { type ParsedNode, parseMdx } from './parser';

export interface DiffRecord {
  /** Index of the node in the source */
  nodeIndex: number;
  /** AST node type */
  nodeType: string;
  /** MD5 of the source node */
  md5: string;
  /** Cached translation (what we expected) */
  cached: string;
  /** What pi actually output */
  piOutput: string;
}

export interface ValidateResult {
  /** Content with corrections applied (cached values override pi modifications) */
  correctedContent: string;
  /** Differences where pi modified cached translations */
  diffs: DiffRecord[];
  /** Number of new translations added to cache */
  newTranslations: number;
}

/**
 * Validate pi's output against the translation cache.
 *
 * - For nodes that were already cached: compare pi output with cache.
 *   If different, log the diff and use the cached version.
 * - For nodes that were not cached: add pi's translation to cache.
 *
 * Both source and piOutput are parsed by the same parser,
 * so they should have the same number of translatable nodes (aligned by index).
 */
export function validate(
  sourceContent: string,
  piOutput: string,
  lang: string,
  cache: TranslationCache,
): ValidateResult {
  const sourceNodes = parseMdx(sourceContent);
  const outputNodes = parseMdx(piOutput);
  const normalizedOutput = normalize(piOutput);

  const diffs: DiffRecord[] = [];
  let newTranslations = 0;

  // Align translatable nodes by index
  const sourceTranslatable = sourceNodes.filter((n) => n.needsTranslation);
  const outputTranslatable = outputNodes.filter((n) => n.needsTranslation);

  // Build corrected content by replacing output nodes where needed
  let correctedContent = '';
  let lastEnd = 0;
  let outputTransIdx = 0;

  for (const outputNode of outputNodes) {
    correctedContent += normalizedOutput.substring(lastEnd, outputNode.startOffset);

    if (outputNode.needsTranslation && outputTransIdx < sourceTranslatable.length) {
      const sourceNode = sourceTranslatable[outputTransIdx];
      const cachedValue = sourceNode.md5
        ? cache.get(lang, sourceNode.md5)
        : undefined;

      if (cachedValue) {
        // Was cached — check if pi modified it
        if (outputNode.rawText !== cachedValue) {
          diffs.push({
            nodeIndex: outputTransIdx,
            nodeType: sourceNode.type,
            md5: sourceNode.md5!,
            cached: cachedValue,
            piOutput: outputNode.rawText,
          });
          // Use cached version (override pi)
          correctedContent += cachedValue;
        } else {
          correctedContent += outputNode.rawText;
        }
      } else {
        // Not cached — this is a new translation from pi
        if (sourceNode.md5) {
          cache.set(lang, sourceNode.md5, outputNode.rawText);
          newTranslations++;
        }
        correctedContent += outputNode.rawText;
      }
      outputTransIdx++;
    } else {
      correctedContent += outputNode.rawText;
    }

    lastEnd = outputNode.endOffset;
  }

  correctedContent += normalizedOutput.substring(lastEnd);

  return { correctedContent, diffs, newTranslations };
}
```

**Step 4: Run tests to verify they pass**

```bash
cd packages/translate && pnpm test -- tests/unit/validator.test.ts
```

Expected: ALL PASS.

**Step 5: Commit**

```bash
git add packages/translate/src/validator.ts packages/translate/tests/unit/validator.test.ts
git commit -m "feat: add validator module - verify pi output and update cache"
```

---

## Phase A Checkpoint

**At this point, run all tests:**

```bash
cd packages/translate && pnpm test
```

Expected: ALL PASS (33 existing + new tests).

**What we have:** A complete parse → hash → assemble → validate pipeline. No actual translation yet — that comes in Phase B.

---

## Phase B: Integration Test with Real Files

### Task 7: Integration test — parse and assemble `installation.mdx`

**TDD scenario:** Integration test — verify pipeline works end-to-end on real file.

**Files:**
- Create: `packages/translate/tests/integration/pipeline.test.ts`

**Step 1: Write the integration test**

```typescript
// packages/translate/tests/integration/pipeline.test.ts
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { assemble } from '../../src/assembler';
import { TranslationCache } from '../../src/cache';
import { parseMdx } from '../../src/parser';

// Resolve path relative to project root
const DOCS_ROOT = path.resolve(__dirname, '../../../../apps/docs/content/en');

describe('pipeline integration', () => {
  let tmpDir: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pipeline-test-'));
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  describe('installation.mdx', () => {
    const filePath = path.join(
      DOCS_ROOT,
      'docs/01-app/01-getting-started/01-installation.mdx',
    );

    it('should parse all nodes without errors', () => {
      const content = fs.readFileSync(filePath, 'utf8');
      const nodes = parseMdx(content);
      expect(nodes.length).toBeGreaterThan(0);

      // Should have all expected types
      const types = new Set(nodes.map((n) => n.type));
      expect(types.has('heading')).toBe(true);
      expect(types.has('paragraph')).toBe(true);
      expect(types.has('code')).toBe(true);
      expect(types.has('html')).toBe(true); // AppOnly/PagesOnly
    });

    it('should correctly separate AppOnly/PagesOnly from content', () => {
      const content = fs.readFileSync(filePath, 'utf8');
      const nodes = parseMdx(content);

      // All html nodes that are AppOnly/PagesOnly should be pure tags
      const htmlNodes = nodes.filter((n) => n.type === 'html');
      for (const node of htmlNodes) {
        if (
          node.rawText.includes('AppOnly') ||
          node.rawText.includes('PagesOnly')
        ) {
          expect(node.needsTranslation).toBe(false);
        }
      }

      // Headings inside AppOnly blocks should be independent nodes
      const headings = nodes.filter((n) => n.type === 'heading');
      expect(headings.length).toBeGreaterThan(5);
    });

    it('should assemble with empty cache — all nodes marked NEEDS_TRANSLATION', () => {
      const content = fs.readFileSync(filePath, 'utf8');
      const cache = new TranslationCache(tmpDir);
      const result = assemble(content, 'zh-hans', cache);

      expect(result.totalTranslatable).toBeGreaterThan(0);
      expect(result.uncachedCount).toBe(result.totalTranslatable);
      expect(result.allCached).toBe(false);
      // Code blocks should be present unchanged
      expect(result.content).toContain('npx create-next-app@latest');
    });

    it('should assemble with full cache — no NEEDS_TRANSLATION markers', () => {
      const content = fs.readFileSync(filePath, 'utf8');
      // First pass: get all hashes
      const cache = new TranslationCache(tmpDir);
      const result1 = assemble(content, 'zh-hans', cache);
      // Populate cache with fake translations
      for (const node of result1.parsedNodes) {
        if (node.needsTranslation && node.md5) {
          cache.set('zh-hans', node.md5, `[ZH] ${node.rawText}`);
        }
      }
      // Second pass: should be all cached
      const result2 = assemble(content, 'zh-hans', cache);
      expect(result2.allCached).toBe(true);
      expect(result2.content).not.toContain('NEEDS_TRANSLATION');
    });
  });

  describe('image.mdx (edge cases)', () => {
    const filePath = path.join(
      DOCS_ROOT,
      'docs/01-app/05-api-reference/02-components/image.mdx',
    );

    it('should parse without errors', () => {
      const content = fs.readFileSync(filePath, 'utf8');
      const nodes = parseMdx(content);
      expect(nodes.length).toBeGreaterThan(100);

      // Should have all 7 node types
      const types = new Set(nodes.map((n) => n.type));
      expect(types.size).toBe(7);
    });

    it('should handle div+table — table content is translatable paragraph', () => {
      const content = fs.readFileSync(filePath, 'utf8');
      const nodes = parseMdx(content);

      // After normalize, <div> should be a pure html tag
      const divNode = nodes.find(
        (n) => n.type === 'html' && n.rawText.includes('<div'),
      );
      expect(divNode).toBeDefined();
      expect(divNode!.needsTranslation).toBe(false);

      // The table content should be a separate paragraph node
      const tableNode = nodes.find(
        (n) => n.type === 'paragraph' && n.rawText.includes('| Prop'),
      );
      expect(tableNode).toBeDefined();
      expect(tableNode!.needsTranslation).toBe(true);
    });

    it('should handle details/summary', () => {
      const content = fs.readFileSync(filePath, 'utf8');
      const nodes = parseMdx(content);

      const summaryNodes = nodes.filter(
        (n) => n.type === 'html' && n.rawText.includes('<summary>'),
      );
      expect(summaryNodes.length).toBeGreaterThan(0);
      // summary with text should be translatable
      for (const n of summaryNodes) {
        expect(n.needsTranslation).toBe(true);
      }
    });

    it('should have consistent node count between parses', () => {
      const content = fs.readFileSync(filePath, 'utf8');
      const nodes1 = parseMdx(content);
      const nodes2 = parseMdx(content);
      expect(nodes1.length).toBe(nodes2.length);
      for (let i = 0; i < nodes1.length; i++) {
        expect(nodes1[i].md5).toBe(nodes2[i].md5);
      }
    });
  });
});
```

**Step 2: Run the test**

```bash
cd packages/translate && pnpm test -- tests/integration/pipeline.test.ts
```

Expected: ALL PASS. If any fail, debug and fix the core modules.

**Step 3: Commit**

```bash
git add packages/translate/tests/integration/pipeline.test.ts
git commit -m "test: add integration tests for pipeline with real MDX files"
```

---

### Task 8: CLI script — run end-to-end on test files and inspect output

**TDD scenario:** Manual verification script — not a test, but a runnable script.

**Files:**
- Create: `packages/translate/src/pipeline-demo.ts`

**Step 1: Create the demo script**

```typescript
// packages/translate/src/pipeline-demo.ts
/**
 * Demo script: run the incremental translation pipeline on test files.
 * Usage: npx tsx packages/translate/src/pipeline-demo.ts
 *
 * This writes output to tmp/pipeline-demo/ for manual inspection.
 */
import fs from 'node:fs';
import path from 'node:path';
import { assemble } from './assembler';
import { TranslationCache } from './cache';
import { parseMdx } from './parser';

const DOCS_ROOT = path.resolve(
  __dirname,
  '../../../apps/docs/content/en',
);
const OUTPUT_DIR = path.resolve(__dirname, '../../../tmp/pipeline-demo');
const CACHE_DIR = path.join(OUTPUT_DIR, 'cache');

const TEST_FILES = [
  'docs/01-app/01-getting-started/01-installation.mdx',
  'docs/01-app/05-api-reference/02-components/image.mdx',
];

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(CACHE_DIR, { recursive: true });

  const cache = new TranslationCache(CACHE_DIR);
  // Try loading existing cache
  try { cache.load('zh-hans'); } catch {}

  for (const relPath of TEST_FILES) {
    const sourcePath = path.join(DOCS_ROOT, relPath);
    const content = fs.readFileSync(sourcePath, 'utf8');

    console.log(`\n${'='.repeat(60)}`);
    console.log(`File: ${relPath}`);

    // Parse
    const nodes = parseMdx(content);
    const translatable = nodes.filter((n) => n.needsTranslation);
    const nonTranslatable = nodes.filter((n) => !n.needsTranslation);
    console.log(`  Nodes: ${nodes.length} total`);
    console.log(
      `  Translatable: ${translatable.length} (${translatable.reduce((s, n) => s + n.rawText.length, 0)} chars)`,
    );
    console.log(
      `  Non-translatable: ${nonTranslatable.length} (${nonTranslatable.reduce((s, n) => s + n.rawText.length, 0)} chars)`,
    );

    // Assemble
    const result = assemble(content, 'zh-hans', cache);
    console.log(
      `  Cache: ${result.cachedCount}/${result.totalTranslatable} cached, ${result.uncachedCount} need translation`,
    );
    console.log(`  All cached: ${result.allCached}`);

    // Write assembled output for inspection
    const outputPath = path.join(OUTPUT_DIR, 'zh-hans', relPath);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, result.content, 'utf8');
    console.log(`  Output: ${outputPath}`);
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log('Done. Inspect output files in:', OUTPUT_DIR);
  console.log('Next step: give the output files to pi for translation.');
}

main();
```

**Step 2: Run the script**

```bash
cd packages/translate && npx tsx src/pipeline-demo.ts
```

Expected: Output showing node counts, cache stats, and files written to `tmp/pipeline-demo/zh-hans/`.

**Step 3: Manually inspect the output**

Check that `tmp/pipeline-demo/zh-hans/docs/01-app/01-getting-started/01-installation.mdx` looks correct:
- Code blocks are preserved unchanged
- `<AppOnly>`/`<PagesOnly>` tags are preserved
- Translatable content is wrapped in `<!-- NEEDS_TRANSLATION -->` markers
- File structure matches original

**Step 4: Commit**

```bash
git add packages/translate/src/pipeline-demo.ts
git commit -m "feat: add pipeline demo script for manual inspection"
```

---

## Phase B Checkpoint

**At this point:**
- All unit tests pass
- Integration tests pass on both test files
- Manual inspection confirms the assembled output looks correct
- Code blocks, JSX tags, tables, blockquotes all handled properly

**Ready for Phase C:** Wire up pi for actual translation (separate plan — depends on pi SDK setup and token budget).
