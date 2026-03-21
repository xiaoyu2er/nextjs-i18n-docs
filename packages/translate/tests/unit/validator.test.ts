import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { TranslationCache } from '../../src/cache';
import { parseMdx } from '../../src/parser';
import { validate } from '../../src/validator';

describe('validate', () => {
  it('should update cache with new translations', () => {
    const sourceContent = '## Heading\n\nA paragraph.';
    const llmOutput = '## 标题\n\n一个段落。';
    const cache = new TranslationCache(
      fs.mkdtempSync(path.join(os.tmpdir(), 'validator-test-')),
    );

    const result = validate(sourceContent, llmOutput, 'zh-hans', cache);
    expect(result.newTranslations).toBe(2); // heading + paragraph

    // Cache should now contain translations
    const sourceNodes = parseMdx(sourceContent);
    for (const node of sourceNodes) {
      if (node.md5) {
        expect(cache.get('zh-hans', node.md5)).toBeDefined();
      }
    }
  });

  it('should detect diffs when LLM modifies cached content', () => {
    const sourceContent = '## Heading\n\nA paragraph.';
    const llmOutput = '## 标题\n\n被修改的段落。';
    const cache = new TranslationCache(
      fs.mkdtempSync(path.join(os.tmpdir(), 'validator-test-')),
    );

    // Pre-populate cache for paragraph
    const sourceNodes = parseMdx(sourceContent);
    const paraNode = sourceNodes.find((n) => n.type === 'paragraph');
    cache.set('zh-hans', paraNode?.md5 ?? '', '原始翻译。');

    const result = validate(sourceContent, llmOutput, 'zh-hans', cache);
    expect(result.diffs.length).toBeGreaterThan(0);
    expect(result.diffs[0].cached).toBe('原始翻译。');
    expect(result.diffs[0].llmOutput).toBe('被修改的段落。');
  });

  it('should return corrected content using cache for diffs', () => {
    const sourceContent = '## Heading\n\nA paragraph.';
    const llmOutput = '## 标题\n\n被修改的段落。';
    const cache = new TranslationCache(
      fs.mkdtempSync(path.join(os.tmpdir(), 'validator-test-')),
    );

    const sourceNodes = parseMdx(sourceContent);
    const paraNode = sourceNodes.find((n) => n.type === 'paragraph');
    cache.set('zh-hans', paraNode?.md5 ?? '', '原始翻译。');

    const result = validate(sourceContent, llmOutput, 'zh-hans', cache);
    expect(result.correctedContent).toContain('原始翻译。');
    expect(result.correctedContent).not.toContain('被修改的段落。');
  });

  it('should detect no diffs when LLM output matches cached content', () => {
    const sourceContent = '## Heading\n\nA paragraph.';
    const llmOutput = '## 标题\n\n一个段落。';
    const cache = new TranslationCache(
      fs.mkdtempSync(path.join(os.tmpdir(), 'validator-test-')),
    );

    // Pre-populate cache with exact LLM output
    const sourceNodes = parseMdx(sourceContent);
    const outputNodes = parseMdx(llmOutput);
    const srcTranslatable = sourceNodes.filter((n) => n.needsTranslation);
    const outTranslatable = outputNodes.filter((n) => n.needsTranslation);
    for (let i = 0; i < srcTranslatable.length; i++) {
      if (srcTranslatable[i].md5) {
        cache.set(
          'zh-hans',
          srcTranslatable[i].md5 ?? '',
          outTranslatable[i].rawText,
        );
      }
    }

    const result = validate(sourceContent, llmOutput, 'zh-hans', cache);
    expect(result.diffs).toHaveLength(0);
  });

  it('should use anchor-based alignment when node counts mismatch', () => {
    // Source: heading + para1 + para2
    const sourceContent = '## Heading\n\nParagraph one.\n\nParagraph two.';
    // LLM merged two paragraphs into one (2 translatable vs 3 source)
    const llmOutput = '## 标题\n\n段落一和段落二合并了。';
    const cache = new TranslationCache(
      fs.mkdtempSync(path.join(os.tmpdir(), 'validator-test-')),
    );

    // Pre-populate heading cache as anchor
    const sourceNodes = parseMdx(sourceContent);
    const headingNode = sourceNodes.find((n) => n.type === 'heading');
    cache.set('zh-hans', headingNode?.md5 ?? '', '## 标题');

    const result = validate(sourceContent, llmOutput, 'zh-hans', cache);
    // Heading should be aligned via anchor, its diff detected
    // The merged paragraph can't be aligned to either source paragraph
    // So we get 0 new translations (merged node is unaligned)
    expect(result.correctedContent).toContain('标题');
  });

  it('should cache aligned nodes even when counts mismatch', () => {
    // Source: heading + para + heading2 + para2
    const sourceContent =
      '## First\n\nParagraph one.\n\n## Second\n\nParagraph two.';
    // LLM output: heading + para + extra para + heading2 + para2
    // (added an extra paragraph)
    const llmOutput =
      '## 第一\n\n段落一。\n\n额外段落。\n\n## 第二\n\n段落二。';
    const cache = new TranslationCache(
      fs.mkdtempSync(path.join(os.tmpdir(), 'validator-test-')),
    );

    const result = validate(sourceContent, llmOutput, 'zh-hans', cache);

    // Should still cache translations for nodes that can be aligned
    // The two headings and at least some paragraphs should be cached
    expect(result.newTranslations).toBeGreaterThan(0);
  });

  it('should cache most nodes when off by 1 at the end', () => {
    // Source: 3 nodes. Output: 2 nodes (last one dropped)
    const sourceContent = '## Title\n\nParagraph.\n\nAnother paragraph.';
    const llmOutput = '## 标题\n\n段落。';
    const cache = new TranslationCache(
      fs.mkdtempSync(path.join(os.tmpdir(), 'validator-test-')),
    );

    const result = validate(sourceContent, llmOutput, 'zh-hans', cache);
    // First two should still be cached
    expect(result.newTranslations).toBe(2); // heading + first paragraph
  });

  it('should handle code blocks as pass-through', () => {
    const sourceContent = '```js\ncode\n```\n\n<AppOnly>\n\nText\n\n</AppOnly>';
    const llmOutput = '```js\ncode\n```\n\n<AppOnly>\n\n文本\n\n</AppOnly>';
    const cache = new TranslationCache(
      fs.mkdtempSync(path.join(os.tmpdir(), 'validator-test-')),
    );

    const result = validate(sourceContent, llmOutput, 'zh-hans', cache);
    expect(result.correctedContent).toContain('```js\ncode\n```');
    expect(result.correctedContent).toContain('<AppOnly>');
  });
});
