import type { TranslationCache } from './cache';
import { normalize } from './normalize';
import { parseMdx } from './parser';

export interface DiffRecord {
  /** Index of the node among translatable nodes */
  nodeIndex: number;
  /** AST node type */
  nodeType: string;
  /** MD5 of the source node */
  md5: string;
  /** Cached translation (what we expected) */
  cached: string;
  /** What pi actually output */
  piOutput: string;
}

export interface ValidateResult {
  /** Content with corrections applied (cached values override pi modifications) */
  correctedContent: string;
  /** Differences where pi modified cached translations */
  diffs: DiffRecord[];
  /** Number of new translations added to cache */
  newTranslations: number;
}

/**
 * Validate pi's output against the translation cache.
 *
 * - For nodes that were already cached: compare pi output with cache.
 *   If different, log the diff and use the cached version.
 * - For nodes that were not cached: add pi's translation to cache.
 *
 * Both source and piOutput are parsed by the same parser,
 * so they should have the same number of translatable nodes (aligned by index).
 */
export function validate(
  sourceContent: string,
  piOutput: string,
  lang: string,
  cache: TranslationCache,
): ValidateResult {
  const sourceNodes = parseMdx(sourceContent);
  const outputNodes = parseMdx(piOutput);
  const normalizedOutput = normalize(piOutput);

  const diffs: DiffRecord[] = [];
  let newTranslations = 0;

  // Align translatable nodes by index
  const sourceTranslatable = sourceNodes.filter((n) => n.needsTranslation);
  const outputTranslatable = outputNodes.filter((n) => n.needsTranslation);

  // Guard: if node counts don't match, the LLM merged/split nodes.
  // Skip cache updates to avoid silent corruption; return raw output as-is.
  if (sourceTranslatable.length !== outputTranslatable.length) {
    console.warn(
      `⚠️ Node count mismatch: source has ${sourceTranslatable.length} translatable nodes, output has ${outputTranslatable.length}. Skipping cache update for this file.`,
    );
    return {
      correctedContent: normalizedOutput,
      diffs: [],
      newTranslations: 0,
    };
  }

  // Build corrected content by replacing output nodes where needed
  let correctedContent = '';
  let lastEnd = 0;
  let outputTransIdx = 0;

  for (const outputNode of outputNodes) {
    correctedContent += normalizedOutput.substring(
      lastEnd,
      outputNode.startOffset,
    );

    if (
      outputNode.needsTranslation &&
      outputTransIdx < sourceTranslatable.length
    ) {
      const sourceNode = sourceTranslatable[outputTransIdx];
      const cachedValue = sourceNode.md5
        ? cache.get(lang, sourceNode.md5)
        : undefined;

      if (cachedValue) {
        // Was cached — check if pi modified it
        if (outputNode.rawText !== cachedValue) {
          diffs.push({
            nodeIndex: outputTransIdx,
            nodeType: sourceNode.type,
            md5: sourceNode.md5 ?? '',
            cached: cachedValue,
            piOutput: outputNode.rawText,
          });
          // Use cached version (override pi)
          correctedContent += cachedValue;
        } else {
          correctedContent += outputNode.rawText;
        }
      } else {
        // Not cached — this is a new translation from pi
        if (sourceNode.md5) {
          cache.set(lang, sourceNode.md5, outputNode.rawText);
          newTranslations++;
        }
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
