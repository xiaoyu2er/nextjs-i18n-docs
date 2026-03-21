import { remark } from 'remark';

export interface MdxValidationError {
  type: 'frontmatter' | 'tag-balance' | 'parse' | 'mdx';
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

  // 1. Frontmatter validation (simple YAML check)
  if (content.startsWith('---')) {
    const endIdx = content.indexOf('---', 3);
    if (endIdx === -1) {
      errors.push({
        type: 'frontmatter',
        message: 'Unclosed frontmatter (missing closing ---)',
      });
    } else {
      const fm = content.substring(3, endIdx).trim();
      if (!fm.includes('title:')) {
        errors.push({
          type: 'frontmatter',
          message: 'Missing "title" in frontmatter',
        });
      }
    }
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

  // 4. Bare component tags that will break MDX compilation
  //    These should be wrapped in backticks: `<Link>` not <Link>
  const COMPONENT_TAGS = [
    'Link',
    'Script',
    'Head',
    'Form',
    'Suspense',
    'Router',
    'NextScript',
    'NextHead',
  ];
  let inCodeBlock = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    for (const tag of COMPONENT_TAGS) {
      // Match bare <Tag> or </Tag> not inside backticks
      const regex = new RegExp(`(?<!\`)(</?${tag}(?:\\s[^>]*)?>)(?!\`)`, 'g');
      let match: RegExpExecArray | null = null;
      // biome-ignore lint/suspicious/noAssignInExpressions: regex exec loop
      while ((match = regex.exec(line)) !== null) {
        const before = line.substring(0, match.index);
        // Skip if inside backtick pair
        if (before.split('`').length % 2 === 0) continue;
        errors.push({
          type: 'parse',
          message: `Bare <${tag}> tag at line ${i + 1} (should be \`<${tag}>\` in backticks)`,
        });
        break; // one error per tag per line is enough
      }
    }
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Deep MDX validation using the actual MDX compiler.
 * Catches JSX errors, unclosed tags, etc. that remark alone misses.
 * Returns null if @mdx-js/mdx is not available.
 */
export async function validateMdxCompile(
  content: string,
): Promise<MdxValidationError[] | null> {
  try {
    const { compile } = await import('@mdx-js/mdx');
    // Strip frontmatter before compiling (MDX compiler doesn't handle YAML)
    let mdxContent = content;
    if (content.startsWith('---')) {
      const endIdx = content.indexOf('---', 3);
      if (endIdx > 0) {
        mdxContent = content.substring(endIdx + 3).trim();
      }
    }
    await compile(mdxContent, {
      // Don't output JS, just check for errors
      jsx: true,
    });
    return [];
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    // Extract the useful part of the error
    const match = msg.match(/Expected.*|Unexpected.*|Cannot.*|Could not.*/);
    return [
      {
        type: 'mdx',
        message: match ? match[0].substring(0, 200) : msg.substring(0, 200),
      },
    ];
  }
}
