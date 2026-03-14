import matter from 'gray-matter';
import { remark } from 'remark';

export interface MdxValidationError {
  type: 'frontmatter' | 'tag-balance' | 'parse';
  message: string;
}

export interface MdxValidationResult {
  valid: boolean;
  errors: MdxValidationError[];
}

/** JSX tags that must be balanced in the output */
const BALANCED_TAGS = ['AppOnly', 'PagesOnly', 'details'];

/**
 * Validate translated MDX content for common issues:
 * 1. Frontmatter is valid YAML and has a title
 * 2. JSX tags are balanced (AppOnly, PagesOnly, details)
 * 3. Content is parseable by remark
 */
export function validateMdx(content: string): MdxValidationResult {
  const errors: MdxValidationError[] = [];

  // 1. Frontmatter validation
  try {
    const parsed = matter(content);
    if (!parsed.data.title) {
      errors.push({
        type: 'frontmatter',
        message: 'Missing "title" in frontmatter',
      });
    }
  } catch (e) {
    errors.push({
      type: 'frontmatter',
      message: `Frontmatter parse error: ${e instanceof Error ? e.message : e}`,
    });
  }

  // 2. Balanced JSX tags — only check tags that appear on their own line
  //    (not tags mentioned inside paragraph text like "expanded `<details>` elements")
  const lines = content.split('\n');
  for (const tag of BALANCED_TAGS) {
    const openRegex = new RegExp(`^\\s*<${tag}[\\s>]`, '');
    const closeRegex = new RegExp(`^\\s*</${tag}>\\s*$`, '');
    let openCount = 0;
    let closeCount = 0;
    for (const line of lines) {
      if (openRegex.test(line)) openCount++;
      if (closeRegex.test(line)) closeCount++;
    }

    if (openCount !== closeCount) {
      errors.push({
        type: 'tag-balance',
        message: `Unbalanced <${tag}>: ${openCount} open, ${closeCount} close`,
      });
    }
  }

  // 3. Remark parse check
  try {
    remark().parse(content);
  } catch (e) {
    errors.push({
      type: 'parse',
      message: `Remark parse error: ${e instanceof Error ? e.message : e}`,
    });
  }

  return { valid: errors.length === 0, errors };
}
