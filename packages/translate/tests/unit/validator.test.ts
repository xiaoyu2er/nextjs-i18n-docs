import { describe, expect, it } from 'vitest';
import { TranslationCache } from '../../src/cache';
import { parseMdx } from '../../src/parser';
import { validate } from '../../src/validator';

describe('validate', () => {
  it('should update cache with new translations', () => {
    const sourceContent = '## Heading\n\nA paragraph.';
    const piOutput = '## 标题\n\n一个段落。';
    const cache = new TranslationCache('/tmp/unused');

    const result = validate(sourceContent, piOutput, 'zh-hans', cache);
    expect(result.newTranslations).toBe(2); // heading + paragraph

    // Cache should now contain translations
    const sourceNodes = parseMdx(sourceContent);
    for (const node of sourceNodes) {
      if (node.md5) {
        expect(cache.get('zh-hans', node.md5)).toBeDefined();
      }
    }
  });

  it('should detect diffs when pi modifies cached content', () => {
    const sourceContent = '## Heading\n\nA paragraph.';
    const piOutput = '## 标题\n\n被修改的段落。';
    const cache = new TranslationCache('/tmp/unused');

    // Pre-populate cache for paragraph
    const sourceNodes = parseMdx(sourceContent);
    const paraNode = sourceNodes.find((n) => n.type === 'paragraph');
    cache.set('zh-hans', paraNode?.md5 ?? '', '原始翻译。');

    const result = validate(sourceContent, piOutput, 'zh-hans', cache);
    expect(result.diffs.length).toBeGreaterThan(0);
    expect(result.diffs[0].cached).toBe('原始翻译。');
    expect(result.diffs[0].piOutput).toBe('被修改的段落。');
  });

  it('should return corrected content using cache for diffs', () => {
    const sourceContent = '## Heading\n\nA paragraph.';
    const piOutput = '## 标题\n\n被修改的段落。';
    const cache = new TranslationCache('/tmp/unused');

    const sourceNodes = parseMdx(sourceContent);
    const paraNode = sourceNodes.find((n) => n.type === 'paragraph');
    cache.set('zh-hans', paraNode?.md5 ?? '', '原始翻译。');

    const result = validate(sourceContent, piOutput, 'zh-hans', cache);
    expect(result.correctedContent).toContain('原始翻译。');
    expect(result.correctedContent).not.toContain('被修改的段落。');
  });

  it('should detect no diffs when pi output matches cached content', () => {
    const sourceContent = '## Heading\n\nA paragraph.';
    const piOutput = '## 标题\n\n一个段落。';
    const cache = new TranslationCache('/tmp/unused');

    // Pre-populate cache with exact pi output
    const sourceNodes = parseMdx(sourceContent);
    const outputNodes = parseMdx(piOutput);
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

    const result = validate(sourceContent, piOutput, 'zh-hans', cache);
    expect(result.diffs).toHaveLength(0);
  });

  it('should handle code blocks as pass-through', () => {
    const sourceContent = '```js\ncode\n```\n\n<AppOnly>\n\nText\n\n</AppOnly>';
    const piOutput = '```js\ncode\n```\n\n<AppOnly>\n\n文本\n\n</AppOnly>';
    const cache = new TranslationCache('/tmp/unused');

    const result = validate(sourceContent, piOutput, 'zh-hans', cache);
    expect(result.correctedContent).toContain('```js\ncode\n```');
    expect(result.correctedContent).toContain('<AppOnly>');
  });
});
