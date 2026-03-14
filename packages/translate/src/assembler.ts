import type { TranslationCache } from './cache';
import { normalize } from './normalize';
import { type ParsedNode, parseMdx } from './parser';

export const NEEDS_TRANSLATION_START = '<!-- NEEDS_TRANSLATION -->';
export const NEEDS_TRANSLATION_END = '<!-- /NEEDS_TRANSLATION -->';

export interface AssembleResult {
  /** The assembled file content */
  content: string;
  /** Whether all translatable nodes were found in cache */
  allCached: boolean;
  /** Number of translatable nodes found in cache */
  cachedCount: number;
  /** Number of translatable nodes not in cache */
  uncachedCount: number;
  /** Total number of translatable nodes */
  totalTranslatable: number;
  /** The parsed nodes for reference */
  parsedNodes: ParsedNode[];
}

/**
 * Assemble a target-language file from source content + translation cache.
 *
 * - Cached translations replace the original text
 * - Uncached nodes are wrapped in NEEDS_TRANSLATION markers
 * - Code, HTML tags, thematicBreak are kept as-is
 */
export function assemble(
  rawContent: string,
  lang: string,
  cache: TranslationCache,
  /** Relative file path for source tracking (e.g. "docs/01-app/installation.mdx") */
  sourceFilePath?: string,
): AssembleResult {
  const normalizedContent = normalize(rawContent);
  const nodes = parseMdx(rawContent);

  let result = '';
  let lastEnd = 0;
  let cachedCount = 0;
  let uncachedCount = 0;
  let totalTranslatable = 0;

  for (const node of nodes) {
    // Preserve whitespace/newlines between nodes
    result += normalizedContent.substring(lastEnd, node.startOffset);

    if (node.needsTranslation) {
      totalTranslatable++;
      const cached = node.md5 ? cache.get(lang, node.md5) : undefined;

      // Track source location
      if (node.md5 && sourceFilePath) {
        const line = normalizedContent
          .substring(0, node.startOffset)
          .split('\n').length;
        cache.updateSource(lang, node.md5, sourceFilePath, line);
      }

      if (cached) {
        result += cached;
        cachedCount++;
      } else {
        result += `${NEEDS_TRANSLATION_START}\n${node.rawText}\n${NEEDS_TRANSLATION_END}`;
        uncachedCount++;
      }
    } else {
      result += node.rawText;
    }

    lastEnd = node.endOffset;
  }

  // Append any trailing content after the last node
  result += normalizedContent.substring(lastEnd);

  return {
    content: result,
    allCached: uncachedCount === 0,
    cachedCount,
    uncachedCount,
    totalTranslatable,
    parsedNodes: nodes,
  };
}
