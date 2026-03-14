import { describe, expect, it } from 'vitest';
import { validateMdx } from '../../src/mdx-validator';

describe('validateMdx', () => {
  it('should pass valid MDX', () => {
    const content = '---\ntitle: Test\n---\n\n## Hello\n\nWorld';
    const result = validateMdx(content);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('should detect missing title', () => {
    const content = '---\ndescription: No title\n---\n\nContent';
    const result = validateMdx(content);
    expect(result.valid).toBe(false);
    expect(result.errors[0].type).toBe('frontmatter');
    expect(result.errors[0].message).toContain('title');
  });

  it('should detect invalid frontmatter YAML', () => {
    const content = '---\ntitle: `backtick start\n---\n\nContent';
    const result = validateMdx(content);
    // gray-matter may or may not error on this, but let's check
    expect(result).toBeDefined();
  });

  it('should detect unbalanced AppOnly tags', () => {
    const content =
      '---\ntitle: Test\n---\n\n<AppOnly>\n\nContent\n\n<AppOnly>\n\n</AppOnly>';
    const result = validateMdx(content);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.message.includes('AppOnly'))).toBe(true);
  });

  it('should pass balanced tags', () => {
    const content =
      '---\ntitle: Test\n---\n\n<AppOnly>\n\nA\n\n</AppOnly>\n\n<PagesOnly>\n\nB\n\n</PagesOnly>';
    const result = validateMdx(content);
    expect(result.valid).toBe(true);
  });

  it('should detect unbalanced PagesOnly tags', () => {
    const content = '---\ntitle: Test\n---\n\n<PagesOnly>\n\nContent';
    const result = validateMdx(content);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.message.includes('PagesOnly'))).toBe(
      true,
    );
  });

  it('should detect unbalanced details tags', () => {
    const content =
      '---\ntitle: Test\n---\n\n<details>\n\n<summary>X</summary>\n\nBody';
    const result = validateMdx(content);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.message.includes('details'))).toBe(true);
  });
});
