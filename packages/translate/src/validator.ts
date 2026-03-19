import type { TranslationCache } from './cache';
import { normalize } from './normalize';
import { type ParsedNode, parseMdx } from './parser';

export interface DiffRecord {
  /** Index of the node among translatable nodes */
  nodeIndex: number;
  /** AST node type */
  nodeType: string;
  /** MD5 of the source node */
  md5: string;
  /** Cached translation (what we expected) */
  cached: string;
  /** What the LLM actually output */
  llmOutput: string;
}

export interface ValidateResult {
  /** Content with corrections applied (cached values override LLM modifications) */
  correctedContent: string;
  /** Differences where LLM modified cached translations */
  diffs: DiffRecord[];
  /** Number of new translations added to cache */
  newTranslations: number;
}

/**
 * Build a map from cached translation text → source node index.
 * Used as anchors when node counts don't match.
 */
function buildAnchorMap(
  sourceTranslatable: ParsedNode[],
  lang: string,
  cache: TranslationCache,
): Map<string, number> {
  const anchors = new Map<string, number>();
  for (let i = 0; i < sourceTranslatable.length; i++) {
    const node = sourceTranslatable[i];
    if (!node.md5) continue;
    const cached = cache.get(lang, node.md5);
    if (cached) {
      // Use first 200 chars as key to avoid huge map keys
      // but enough to be unique
      anchors.set(cached, i);
    }
  }
  return anchors;
}

/**
 * Anchor-based alignment: use cached translations to find correspondence
 * between source and output nodes when counts don't match.
 *
 * Returns a map: outputTranslatableIndex → sourceTranslatableIndex
 * Only includes confidently aligned pairs.
 */
function alignWithAnchors(
  sourceTranslatable: ParsedNode[],
  outputTranslatable: ParsedNode[],
  lang: string,
  cache: TranslationCache,
): Map<number, number> {
  const alignment = new Map<number, number>();
  const anchorMap = buildAnchorMap(sourceTranslatable, lang, cache);

  // Phase 1: Find anchor points — output nodes that exactly match a cached translation
  const anchorPairs: Array<{ outIdx: number; srcIdx: number }> = [];
  const usedSrcIndices = new Set<number>();

  for (let outIdx = 0; outIdx < outputTranslatable.length; outIdx++) {
    const outText = outputTranslatable[outIdx].rawText;
    const srcIdx = anchorMap.get(outText);
    if (srcIdx !== undefined && !usedSrcIndices.has(srcIdx)) {
      anchorPairs.push({ outIdx, srcIdx });
      usedSrcIndices.add(srcIdx);
      alignment.set(outIdx, srcIdx);
    }
  }

  // Phase 2: Between anchors, align remaining nodes by relative position
  // Add sentinel anchors at start and end
  const sentinels = [
    { outIdx: -1, srcIdx: -1 },
    ...anchorPairs,
    { outIdx: outputTranslatable.length, srcIdx: sourceTranslatable.length },
  ];

  for (let a = 0; a < sentinels.length - 1; a++) {
    const prev = sentinels[a];
    const next = sentinels[a + 1];

    // Nodes between these two anchors
    const outStart = prev.outIdx + 1;
    const outEnd = next.outIdx;
    const srcStart = prev.srcIdx + 1;
    const srcEnd = next.srcIdx;

    const outCount = outEnd - outStart;
    const srcCount = srcEnd - srcStart;

    // Only align 1:1 when counts match between anchors
    if (outCount === srcCount && outCount > 0) {
      for (let i = 0; i < outCount; i++) {
        alignment.set(outStart + i, srcStart + i);
      }
    }
    // If counts differ between anchors, we can still try type-matching
    // for the common prefix (nodes with same type in order)
    else if (outCount > 0 && srcCount > 0) {
      let oi = outStart;
      let si = srcStart;
      while (oi < outEnd && si < srcEnd) {
        if (outputTranslatable[oi].type === sourceTranslatable[si].type) {
          alignment.set(oi, si);
          oi++;
          si++;
        } else {
          // Types diverged — try to skip the extra node on the longer side
          if (outCount > srcCount) {
            oi++; // skip extra output node
          } else {
            si++; // skip missing source node
          }
        }
      }
    }
  }

  return alignment;
}

/**
 * Validate LLM's output against the translation cache.
 *
 * Strategy:
 * 1. If node counts match: align by index (fast path, most accurate)
 * 2. If node counts don't match: use cached translations as anchors
 *    to find correspondence, then cache what we can confidently align.
 *
 * Either way, the LLM's output is used as the final content.
 * Cached translations override LLM modifications for already-cached nodes.
 */
export function validate(
  sourceContent: string,
  llmOutput: string,
  lang: string,
  cache: TranslationCache,
): ValidateResult {
  const sourceNodes = parseMdx(sourceContent);
  const outputNodes = parseMdx(llmOutput);
  const normalizedOutput = normalize(llmOutput);

  const diffs: DiffRecord[] = [];
  let newTranslations = 0;

  const sourceTranslatable = sourceNodes.filter((n) => n.needsTranslation);
  const outputTranslatable = outputNodes.filter((n) => n.needsTranslation);

  const exactMatch = sourceTranslatable.length === outputTranslatable.length;

  // Build alignment map
  let alignment: Map<number, number>;

  if (exactMatch) {
    // Fast path: 1:1 index alignment
    alignment = new Map();
    for (let i = 0; i < sourceTranslatable.length; i++) {
      alignment.set(i, i);
    }
  } else {
    // Anchor-based alignment
    const srcCount = sourceTranslatable.length;
    const outCount = outputTranslatable.length;
    alignment = alignWithAnchors(
      sourceTranslatable,
      outputTranslatable,
      lang,
      cache,
    );
    console.warn(
      `⚠️ Node count mismatch: source=${srcCount}, output=${outCount}. ` +
        `Anchor-based alignment: ${alignment.size}/${srcCount} nodes aligned.`,
    );
  }

  // Build reverse map: outputTransIdx → sourceTransIdx
  // (alignment is already outIdx → srcIdx)

  // Build corrected content
  let correctedContent = '';
  let lastEnd = 0;
  let outputTransIdx = 0;

  for (const outputNode of outputNodes) {
    correctedContent += normalizedOutput.substring(
      lastEnd,
      outputNode.startOffset,
    );

    if (outputNode.needsTranslation) {
      const srcIdx = alignment.get(outputTransIdx);

      if (srcIdx !== undefined) {
        const sourceNode = sourceTranslatable[srcIdx];
        const cachedValue = sourceNode.md5
          ? cache.get(lang, sourceNode.md5)
          : undefined;

        if (cachedValue) {
          // Was cached — check if LLM modified it
          if (outputNode.rawText !== cachedValue) {
            diffs.push({
              nodeIndex: srcIdx,
              nodeType: sourceNode.type,
              md5: sourceNode.md5 ?? '',
              cached: cachedValue,
              llmOutput: outputNode.rawText,
            });
            // Use cached version (override LLM)
            correctedContent += cachedValue;
          } else {
            correctedContent += outputNode.rawText;
          }
        } else {
          // Not cached — new translation from LLM
          if (sourceNode.md5) {
            cache.set(lang, sourceNode.md5, outputNode.rawText);
            newTranslations++;
          }
          correctedContent += outputNode.rawText;
        }
      } else {
        // Unaligned output node — keep LLM output as-is, don't cache
        correctedContent += outputNode.rawText;
      }

      outputTransIdx++;
    } else {
      correctedContent += outputNode.rawText;
    }

    lastEnd = outputNode.endOffset;
  }

  correctedContent += normalizedOutput.substring(lastEnd);

  return { correctedContent, diffs, newTranslations };
}
