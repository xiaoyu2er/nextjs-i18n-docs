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
    const input =
      '<AppOnly>\nText\n</AppOnly>\n<PagesOnly>\nMore\n</PagesOnly>';
    const result = normalize(input);
    expect(result).toContain('<AppOnly>\n\nText');
    expect(result).toContain('Text\n\n</AppOnly>');
    expect(result).toContain('<PagesOnly>\n\nMore');
    expect(result).toContain('More\n\n</PagesOnly>');
  });

  it('should not crash on code blocks containing JSX tags', () => {
    const input = '```\n<AppOnly>\ncode\n</AppOnly>\n```';
    expect(() => normalize(input)).not.toThrow();
  });
});
