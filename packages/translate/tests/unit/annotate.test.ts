import { describe, expect, it } from 'vitest';
import { annotate } from '../../src/annotate';
import { TranslationCache } from '../../src/cache';
import { parseMdx } from '../../src/parser';

describe('annotate', () => {
  it('should use English source MD5 when source provided and counts match', () => {
    const source = '## Heading\n\nA paragraph.';
    const translated = '## 标题\n\n一个段落。';
    const result = annotate(translated, source);

    expect(result).toContain('{/* md5:');
    expect(result).toContain('## 标题');
    expect(result).toContain('一个段落。');

    const matches = result.match(/\{\/\* md5:[a-f0-9]{32} \*\/\}/g);
    expect(matches).toHaveLength(2);

    // Verify MD5 is from English source, not Chinese
    const enNodes = parseMdx(source).filter((n) => n.needsTranslation);
    for (const node of enNodes) {
      expect(result).toContain(`md5:${node.md5}`);
    }
  });

  it('should use cache anchors when node counts mismatch', () => {
    // EN: 2 nodes. ZH: 3 nodes (extra paragraph from old pipeline)
    const source = '## Heading\n\nA paragraph.';
    const translated = '## 标题\n\n额外段落。\n\n一个段落。';

    // Build cache so "## 标题" is a known translation of "## Heading"
    const cache = new TranslationCache('/tmp/unused');
    const enNodes = parseMdx(source).filter((n) => n.needsTranslation);
    // biome-ignore lint/style/noNonNullAssertion: test code, md5 is guaranteed for heading
    const headingMd5 = enNodes[0].md5!;
    cache.set('zh-hans', headingMd5, '## 标题');

    const result = annotate(translated, source, cache, 'zh-hans');

    // The heading should have the correct English MD5 via anchor
    expect(result).toContain(`md5:${headingMd5}`);
  });

  it('should fall back to translated text MD5 when no source', () => {
    const translated = '## 标题\n\n一个段落。';
    const result = annotate(translated);
    expect(result).toContain('{/* md5:');
    const matches = result.match(/\{\/\* md5:[a-f0-9]{32} \*\/\}/g);
    expect(matches).toHaveLength(2);
  });

  it('should not annotate code blocks', () => {
    const source = '## Heading\n\n```js\ncode\n```';
    const translated = '## 标题\n\n```js\ncode\n```';
    const result = annotate(translated, source);
    const matches = result.match(/\{\/\* md5:[a-f0-9]{32} \*\/\}/g);
    expect(matches).toHaveLength(1);
  });

  it('should skip frontmatter', () => {
    const source = '---\ntitle: Test\n---\n\nParagraph.';
    const translated = '---\ntitle: 测试\n---\n\n段落。';
    const result = annotate(translated, source);
    expect(result.startsWith('---\ntitle:')).toBe(true);
    expect(result).toContain('{/* md5:');
  });
});
