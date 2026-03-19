import { describe, expect, it } from 'vitest';
import { annotate } from '../../src/annotate';

describe('annotate', () => {
  it('should use English source MD5 when source provided', () => {
    const source = '## Heading\n\nA paragraph.';
    const translated = '## 标题\n\n一个段落。';
    const result = annotate(translated, source);

    // MD5s should come from English source, not Chinese text
    expect(result).toContain('{/* md5:');
    expect(result).toContain('## 标题');
    expect(result).toContain('一个段落。');

    const matches = result.match(/\{\/\* md5:[a-f0-9]{32} \*\/\}/g);
    expect(matches).toHaveLength(2);

    // Verify the MD5 is from English source
    const resultWithoutSource = annotate(translated);
    // MD5s should be different (English vs Chinese)
    expect(result).not.toBe(resultWithoutSource);
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

  it('should not annotate pure HTML tags', () => {
    const source = '<AppOnly>\n\nParagraph\n\n</AppOnly>';
    const translated = '<AppOnly>\n\n段落\n\n</AppOnly>';
    const result = annotate(translated, source);
    const matches = result.match(/\{\/\* md5:[a-f0-9]{32} \*\/\}/g);
    expect(matches).toHaveLength(1);
    expect(result).toContain('段落');
  });

  it('should skip frontmatter', () => {
    const source = '---\ntitle: Test\n---\n\nParagraph.';
    const translated = '---\ntitle: 测试\n---\n\n段落。';
    const result = annotate(translated, source);
    // Frontmatter should NOT have md5 comment
    expect(result.startsWith('---\ntitle:')).toBe(true);
    // But the paragraph should
    expect(result).toContain('{/* md5:');
  });
});
