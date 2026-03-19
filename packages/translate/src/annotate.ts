import type { TranslationCache } from './cache';
import { normalize } from './normalize';
import { parseMdx } from './parser';

/**
 * Inject `{/* md5:hash * /}` comments before each translatable node
 * in the translated content. The MD5 comes from the ENGLISH SOURCE
 * (same key used in the translation cache).
 *
 * When sourceContent is provided, uses the translation cache to build
 * anchor points for alignment (same strategy as the validator), then
 * maps English MD5s to translated node positions.
 *
 * When sourceContent is NOT provided, falls back to hashing the
 * translated text itself (less useful but still enables grep navigation).
 */
export function annotate(
  translatedContent: string,
  sourceContent?: string,
  cache?: TranslationCache,
  lang?: string,
): string {
  const normalized = normalize(translatedContent);
  const transNodes = parseMdx(translatedContent);
  const transTranslatable = transNodes.filter((n) => n.needsTranslation);

  // Build source MD5 alignment
  let md5ForTransIdx: Map<number, string> = new Map();

  if (sourceContent) {
    const sourceNodes = parseMdx(sourceContent);
    const sourceTranslatable = sourceNodes.filter((n) => n.needsTranslation);

    if (sourceTranslatable.length === transTranslatable.length) {
      // Exact match — simple index alignment
      for (let i = 0; i < sourceTranslatable.length; i++) {
        if (sourceTranslatable[i].md5) {
          md5ForTransIdx.set(i, sourceTranslatable[i].md5 as string);
        }
      }
    } else if (cache && lang) {
      // Anchor-based alignment using cache
      md5ForTransIdx = alignWithCache(
        sourceTranslatable,
        transTranslatable,
        cache,
        lang,
      );
    } else {
      // No cache available — try type-based alignment
      md5ForTransIdx = alignByType(sourceTranslatable, transTranslatable);
    }
  }

  // Build output
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
      const md5 = md5ForTransIdx.get(transIdx) ?? node.md5;
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

/**
 * Align using cached translations as anchors.
 * For each translated node, check if it matches a cached translation.
 * Returns map: transIdx → English source MD5.
 */
function alignWithCache(
  sourceTranslatable: ReturnType<typeof parseMdx>,
  transTranslatable: ReturnType<typeof parseMdx>,
  cache: TranslationCache,
  lang: string,
): Map<number, string> {
  const alignment = new Map<number, string>();

  // Build: cached translation text → source MD5
  const cachedToMd5 = new Map<string, string>();
  for (const node of sourceTranslatable) {
    if (!node.md5) continue;
    const cached = cache.get(lang, node.md5);
    if (cached) {
      cachedToMd5.set(cached, node.md5);
    }
  }

  // For each translated node, see if it matches a cached translation
  // Each source MD5 can only be assigned once
  const usedMd5s = new Set<string>();
  for (let i = 0; i < transTranslatable.length; i++) {
    const text = transTranslatable[i].rawText;
    const md5 = cachedToMd5.get(text);
    if (md5 && !usedMd5s.has(md5)) {
      alignment.set(i, md5);
      usedMd5s.add(md5);
    }
  }

  return alignment;
}

/**
 * Simple type-based alignment as fallback.
 * Walk both lists, match nodes with same type.
 */
function alignByType(
  sourceTranslatable: ReturnType<typeof parseMdx>,
  transTranslatable: ReturnType<typeof parseMdx>,
): Map<number, string> {
  const alignment = new Map<number, string>();
  let si = 0;
  let ti = 0;

  while (si < sourceTranslatable.length && ti < transTranslatable.length) {
    if (sourceTranslatable[si].type === transTranslatable[ti].type) {
      if (sourceTranslatable[si].md5) {
        alignment.set(ti, sourceTranslatable[si].md5 as string);
      }
      si++;
      ti++;
    } else if (sourceTranslatable.length > transTranslatable.length) {
      si++;
    } else {
      ti++;
    }
  }

  return alignment;
}
