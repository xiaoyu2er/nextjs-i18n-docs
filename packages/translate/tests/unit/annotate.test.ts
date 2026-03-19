import { describe, expect, it } from 'vitest';
import { annotate } from '../../src/annotate';

describe('annotate', () => {
  it('should inject md5 comments before translatable nodes', () => {
    const content = '## 标题\n\n一个段落。';
    const result = annotate(content);
    expect(result).toContain('{/* md5:');
    expect(result).toContain('## 标题');
    expect(result).toContain('一个段落。');
    // Should have 2 md5 comments (heading + paragraph)
    const matches = result.match(/\{\/\* md5:[a-f0-9]{32} \*\/\}/g);
    expect(matches).toHaveLength(2);
  });

  it('should not annotate code blocks', () => {
    const content = '## 标题\n\n```js\ncode\n```';
    const result = annotate(content);
    // Only heading is annotated, code block is not
    const matches = result.match(/\{\/\* md5:[a-f0-9]{32} \*\/\}/g);
    expect(matches).toHaveLength(1);
  });

  it('should not annotate pure HTML tags', () => {
    const content = '<AppOnly>\n\n段落\n\n</AppOnly>';
    const result = annotate(content);
    // Only the paragraph is annotated
    const matches = result.match(/\{\/\* md5:[a-f0-9]{32} \*\/\}/g);
    expect(matches).toHaveLength(1);
    expect(result).toContain('{/* md5:');
    expect(result).toContain('段落');
  });
});
