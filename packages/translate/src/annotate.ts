import { normalize } from './normalize';
import { parseMdx } from './parser';

/**
 * Inject `{/* md5:hash * /}` comments before each translatable node
 * in the translated content. The MD5 comes from the ENGLISH SOURCE
 * (same key used in the translation cache), not the translated text.
 *
 * When sourceContent is provided, aligns source and translated nodes
 * by index to map English MD5 → translated node position.
 *
 * When sourceContent is NOT provided (standalone annotate mode),
 * falls back to hashing the translated text itself (less useful but
 * still enables grep-based navigation).
 */
export function annotate(
  translatedContent: string,
  sourceContent?: string,
): string {
  const normalized = normalize(translatedContent);
  const transNodes = parseMdx(translatedContent);

  // Build English MD5 map if source provided
  let sourceMd5s: (string | undefined)[] | undefined;
  if (sourceContent) {
    const sourceNodes = parseMdx(sourceContent);
    const sourceTranslatable = sourceNodes.filter((n) => n.needsTranslation);
    sourceMd5s = sourceTranslatable.map((n) => n.md5);
  }

  let result = '';
  let lastEnd = 0;
  let transIdx = 0;

  // Detect frontmatter
  let frontmatterEnd = 0;
  if (normalized.startsWith('---')) {
    const secondDash = normalized.indexOf('---', 3);
    if (secondDash > 0) {
      frontmatterEnd = secondDash + 3;
    }
  }

  for (const node of transNodes) {
    result += normalized.substring(lastEnd, node.startOffset);

    if (node.needsTranslation && node.startOffset >= frontmatterEnd) {
      // Use English source MD5 if available, otherwise fall back to translated text MD5
      const md5 =
        sourceMd5s && transIdx < sourceMd5s.length
          ? sourceMd5s[transIdx]
          : node.md5;

      if (md5) {
        result += `{/* md5:${md5} */}\n${node.rawText}`;
      } else {
        result += node.rawText;
      }
    } else {
      result += node.rawText;
    }

    if (node.needsTranslation) {
      transIdx++;
    }

    lastEnd = node.endOffset;
  }

  result += normalized.substring(lastEnd);
  return result;
}
