import { describe, expect, it } from 'vitest';
import { parseMdx } from '../../src/parser';

describe('parseMdx', () => {
  it('should classify paragraph as translatable', () => {
    const content = '---\ntitle: Test\n---\n\nHello world paragraph.';
    const nodes = parseMdx(content);
    const para = nodes.find((n) => n.type === 'paragraph');
    expect(para).toBeDefined();
    expect(para?.needsTranslation).toBe(true);
    expect(para?.rawText).toBe('Hello world paragraph.');
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
    expect(summaryNode?.needsTranslation).toBe(true);
  });

  it('should classify thematicBreak as non-translatable', () => {
    const content = '---\ntitle: Test\n---';
    const nodes = parseMdx(content);
    const tb = nodes.find((n) => n.type === 'thematicBreak');
    expect(tb).toBeDefined();
    expect(tb?.needsTranslation).toBe(false);
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
    const content = '<AppOnly>\n### Heading\n\nParagraph text.\n\n</AppOnly>';
    const nodes = parseMdx(content);
    const heading = nodes.find((n) => n.type === 'heading');
    expect(heading).toBeDefined();
    expect(heading?.needsTranslation).toBe(true);
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
    const hash1 = nodes1.find((n) => n.rawText === 'Some paragraph.')?.md5;
    const hash2 = nodes2.find((n) => n.rawText === 'Some paragraph.')?.md5;
    expect(hash1).toBe(hash2);
  });

  it('should normalize heading level before hashing', () => {
    const nodes1 = parseMdx('## Title');
    const nodes2 = parseMdx('### Title');
    expect(nodes1[0].md5).toBe(nodes2[0].md5);
  });

  it('should preserve node order matching original content', () => {
    const content =
      '## Heading\n\nParagraph.\n\n```js\ncode\n```\n\n- list item';
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
