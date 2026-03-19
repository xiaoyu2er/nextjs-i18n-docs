import { normalize } from './normalize';
import { parseMdx } from './parser';

/**
 * Inject `<!-- md5:hash -->` comments before each translatable node
 * in the final translated content. This makes MD5 hashes searchable
 * directly in the output files without running a CLI tool.
 *
 * Only annotates translatable nodes (paragraph, heading, list, blockquote, html with text).
 * Non-translatable nodes (code blocks, pure HTML tags) are left untouched.
 * Skips frontmatter nodes (type === 'heading' whose rawText contains YAML-like content
 * parsed from the --- block) to avoid breaking YAML parsing.
 */
export function annotate(content: string): string {
  const normalized = normalize(content);
  const nodes = parseMdx(content);

  let result = '';
  let lastEnd = 0;

  // Detect frontmatter: if content starts with ---, the first thematicBreak
  // is the frontmatter delimiter. The next translatable node after it
  // (before the first blank line gap) is the frontmatter content.
  let frontmatterEnd = 0;
  if (normalized.startsWith('---')) {
    // Find the closing --- (second occurrence)
    const secondDash = normalized.indexOf('---', 3);
    if (secondDash > 0) {
      frontmatterEnd = secondDash + 3;
    }
  }

  for (const node of nodes) {
    result += normalized.substring(lastEnd, node.startOffset);

    if (
      node.needsTranslation &&
      node.md5 &&
      node.startOffset >= frontmatterEnd
    ) {
      result += `<!-- md5:${node.md5} -->\n${node.rawText}`;
    } else {
      result += node.rawText;
    }

    lastEnd = node.endOffset;
  }

  result += normalized.substring(lastEnd);
  return result;
}
