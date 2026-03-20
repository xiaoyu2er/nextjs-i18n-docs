import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { assemble } from '../../src/assembler';
import { TranslationCache } from '../../src/cache';

describe('assemble', () => {
  function makeCache(entries: Record<string, string>): TranslationCache {
    const cache = new TranslationCache(
      fs.mkdtempSync(path.join(os.tmpdir(), 'assembler-test-')),
    );
    for (const [md5, text] of Object.entries(entries)) {
      cache.set('zh-hans', md5, text);
    }
    return cache;
  }

  it('should mark uncached nodes with NEEDS_TRANSLATION', () => {
    const content = '## Heading\n\nA paragraph.';
    const result = assemble(content, 'zh-hans', makeCache({}));
    expect(result.content).toContain('<!-- NEEDS_TRANSLATION -->');
    expect(result.allCached).toBe(false);
    expect(result.uncachedCount).toBeGreaterThan(0);
  });

  it('should mark file as allCached when everything is cached', () => {
    const content = '## Heading\n\nA paragraph.';
    // First pass to get hashes
    const result1 = assemble(content, 'zh-hans', makeCache({}));
    const cache = new TranslationCache('/tmp/unused');
    for (const node of result1.parsedNodes) {
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
    const result1 = assemble(content, 'zh-hans', makeCache({}));
    const cachedNode = result1.parsedNodes.find(
      (n) => n.rawText === 'Cached paragraph.',
    );

    const cache = new TranslationCache('/tmp/unused');
    cache.set('zh-hans', cachedNode?.md5 ?? '', '已缓存的段落。');

    const result2 = assemble(content, 'zh-hans', cache);
    expect(result2.content).toContain('已缓存的段落。');
    expect(result2.content).toContain('<!-- NEEDS_TRANSLATION -->');
    expect(result2.content).toContain('Uncached paragraph.');
  });

  it('should report stats: total, cached, uncached', () => {
    const content = '## A\n\nB\n\nC';
    const result = assemble(content, 'zh-hans', makeCache({}));
    expect(result.totalTranslatable).toBe(3);
    expect(result.uncachedCount).toBe(3);
    expect(result.cachedCount).toBe(0);
  });
});
