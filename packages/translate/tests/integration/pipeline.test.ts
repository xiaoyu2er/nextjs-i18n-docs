import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { assemble } from '../../src/assembler';
import { TranslationCache } from '../../src/cache';
import { parseMdx } from '../../src/parser';

const DOCS_ROOT = path.resolve(__dirname, '../../../../content/en');

// Helper: skip test if file doesn't exist (content may not be synced)
function readIfExists(filePath: string): string | null {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }
}

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
      const content = readIfExists(filePath);
      if (!content) return; // skip if content not synced
      const nodes = parseMdx(content);
      expect(nodes.length).toBeGreaterThan(0);

      const types = new Set(nodes.map((n) => n.type));
      expect(types.has('heading')).toBe(true);
      expect(types.has('paragraph')).toBe(true);
    });

    it('should correctly separate AppOnly/PagesOnly from content', () => {
      const content = readIfExists(filePath);
      if (!content) return;
      const nodes = parseMdx(content);

      const htmlNodes = nodes.filter((n) => n.type === 'html');
      for (const node of htmlNodes) {
        if (
          node.rawText.includes('AppOnly') ||
          node.rawText.includes('PagesOnly')
        ) {
          expect(node.needsTranslation).toBe(false);
        }
      }
    });

    it('should assemble with empty cache — all nodes marked NEEDS_TRANSLATION', () => {
      const content = readIfExists(filePath);
      if (!content) return;
      const cache = new TranslationCache(tmpDir);
      const result = assemble(content, 'zh-hans', cache);

      expect(result.totalTranslatable).toBeGreaterThan(0);
      expect(result.uncachedCount).toBe(result.totalTranslatable);
      expect(result.allCached).toBe(false);
    });

    it('should assemble with full cache — no NEEDS_TRANSLATION markers', () => {
      const content = readIfExists(filePath);
      if (!content) return;
      const cache = new TranslationCache(tmpDir);
      const result1 = assemble(content, 'zh-hans', cache);
      for (const node of result1.parsedNodes) {
        if (node.needsTranslation && node.md5) {
          cache.set('zh-hans', node.md5, `[ZH] ${node.rawText}`);
        }
      }
      const result2 = assemble(content, 'zh-hans', cache);
      expect(result2.allCached).toBe(true);
      expect(result2.content).not.toContain('NEEDS_TRANSLATION');
    });
  });

  describe('image.mdx (edge cases)', () => {
    const filePath = path.join(
      DOCS_ROOT,
      'docs/01-app/03-api-reference/02-components/image.mdx',
    );

    it('should parse without errors', () => {
      const content = readIfExists(filePath);
      if (!content) return;
      const nodes = parseMdx(content);
      expect(nodes.length).toBeGreaterThan(0);
    });

    it('should have consistent node count between parses', () => {
      const content = readIfExists(filePath);
      if (!content) return;
      const nodes1 = parseMdx(content);
      const nodes2 = parseMdx(content);
      expect(nodes1.length).toBe(nodes2.length);
      for (let i = 0; i < nodes1.length; i++) {
        expect(nodes1[i].md5).toBe(nodes2[i].md5);
      }
    });
  });
});
