import crypto from 'node:crypto';
import { remark } from 'remark';
import { normalize } from './normalize';

export interface ParsedNode {
  /** AST node type: paragraph, heading, code, list, blockquote, html, thematicBreak */
  type: string;
  /** Raw text content extracted from the original (normalized) content */
  rawText: string;
  /** Whether this node contains text that needs translation */
  needsTranslation: boolean;
  /** MD5 hash of the content (only set for translatable nodes) */
  md5?: string;
  /** Start offset in the normalized content */
  startOffset: number;
  /** End offset in the normalized content */
  endOffset: number;
}

const TRANSLATABLE_TYPES = new Set([
  'paragraph',
  'heading',
  'list',
  'blockquote',
]);

/**
 * Check if an HTML node is a pure tag (no translatable text content).
 * Pure tags: <AppOnly>, </PagesOnly>, <Check size={18} />, etc.
 * Non-pure (needs translation): <summary>Examples</summary>
 */
function isHtmlPureTag(text: string): boolean {
  // Check each line independently — a block of pure tags is still pure
  const lines = text.trim().split('\n');
  return lines.every((line) => {
    const trimmed = line.trim();
    if (trimmed === '') return true;
    // Self-closing tag: <Component ... />
    if (/^<\w[^>]*\/>$/.test(trimmed)) return true;
    // Opening or closing tag only: <Tag> or </Tag> or <Tag attr>
    if (/^<\/?\w[\w-]*[^>]*>$/.test(trimmed)) return true;
    return false;
  });
}

/**
 * Compute MD5 hash of the raw text.
 * Headings include their level markers (## vs ###) so different
 * heading levels produce distinct hashes.
 */
function computeHash(text: string): string {
  return crypto.createHash('md5').update(text).digest('hex');
}

/**
 * Parse MDX content into a flat list of classified AST nodes.
 * Applies normalize() preprocessing before parsing.
 */
export function parseMdx(rawContent: string): ParsedNode[] {
  const content = normalize(rawContent);
  const tree = remark().parse(content);
  const nodes: ParsedNode[] = [];

  for (const child of tree.children) {
    const startOffset = child.position?.start.offset ?? 0;
    const endOffset = child.position?.end.offset ?? 0;
    const rawText = content.substring(startOffset, endOffset);
    const type = child.type;

    let needsTranslation: boolean;

    if (TRANSLATABLE_TYPES.has(type)) {
      needsTranslation = true;
    } else if (type === 'html') {
      needsTranslation = !isHtmlPureTag(rawText);
    } else {
      needsTranslation = false;
    }

    const node: ParsedNode = {
      type,
      rawText,
      needsTranslation,
      startOffset,
      endOffset,
    };

    if (needsTranslation) {
      node.md5 = computeHash(rawText);
    }

    nodes.push(node);
  }

  return nodes;
}
