import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { TranslationCache } from '../../../../packages/translate/src/cache';
import { parseMdx } from '../../../../packages/translate/src/parser';

const ROOT = resolve(import.meta.dir, '../../../..');
const CACHE_DIR = join(ROOT, '.cache');

export const VERSIONS = ['latest', 'v15', 'v14', 'v13'] as const;

export const LANGS = [
  'zh-hans',
  'zh-hant',
  'ja',
  'ar',
  'de',
  'es',
  'fr',
  'ru',
] as const;

let _cache: TranslationCache | null = null;

export function getCache(): TranslationCache {
  if (!_cache) {
    _cache = new TranslationCache(CACHE_DIR);
  }
  return _cache;
}

function walkMdx(dir: string): string[] {
  const results: string[] = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walkMdx(fullPath));
    else if (entry.name.endsWith('.mdx')) results.push(fullPath);
  }
  return results;
}

/** Ensure source_files are populated for a version */
export function ensureScanned(version: string): void {
  const cache = getCache();
  if (!VERSIONS.includes(version as any)) return;

  const enDir = join(ROOT, 'content', version);
  if (!existsSync(enDir)) return;

  const files = walkMdx(enDir);

  // Check if scan is needed
  const currentCount = cache.sourceCount(version);
  if (currentCount >= files.length) return;

  console.log(`  Scanning ${version}: ${files.length} EN files...`);
  cache.clearSources('', version);

  for (const file of files) {
    const relPath = file.slice(enDir.length + 1); // relative path
    const content = readFileSync(file, 'utf8');
    const nodes = parseMdx(content);

    for (const node of nodes) {
      if (node.needsTranslation && node.md5) {
        const line = content.substring(0, node.startOffset).split('\n').length;
        cache.setSource(node.md5, node.rawText, node.type);
        cache.updateSource('', node.md5, relPath, line, version);
      }
    }
  }
}

/** Force rescan source_files for a version (clears stale MD5 keys) */
export function rescan(version: string): number {
  const cache = getCache();
  if (!VERSIONS.includes(version as any)) return 0;

  const enDir = join(ROOT, 'content', version);
  if (!existsSync(enDir)) return 0;

  const files = walkMdx(enDir);
  cache.clearSources('', version);

  for (const file of files) {
    const relPath = file.slice(enDir.length + 1);
    const content = readFileSync(file, 'utf8');
    const nodes = parseMdx(content);

    for (const node of nodes) {
      if (node.needsTranslation && node.md5) {
        const line = content.substring(0, node.startOffset).split('\n').length;
        cache.setSource(node.md5, node.rawText, node.type);
        cache.updateSource('', node.md5, relPath, line, version);
      }
    }
  }

  return files.length;
}

/** Get overview stats for all versions and languages */
export function getOverview() {
  const cache = getCache();
  const result: Record<
    string,
    {
      enFileCount: number;
      langs: Record<
        string,
        {
          sections: Record<
            string,
            {
              totalFiles: number;
              translatedFiles: number;
              totalNodes: number;
              translatedNodes: number;
            }
          >;
          totalFiles: number;
          translatedFiles: number;
          totalNodes: number;
          translatedNodes: number;
        }
      >;
    }
  > = {};

  for (const version of VERSIONS) {
    ensureScanned(version);
    const enDir = join(ROOT, 'content', version);
    const enFileCount = existsSync(enDir) ? walkMdx(enDir).length : 0;

    const langs: (typeof result)[string]['langs'] = {};
    for (const lang of LANGS) {
      const sections = cache.sectionStats(version, lang);
      let totalFiles = 0;
      let translatedFiles = 0;
      let totalNodes = 0;
      let translatedNodes = 0;

      const sectionMap: Record<string, (typeof sections)[0]> = {};
      for (const s of sections) {
        sectionMap[s.section] = s;
        totalFiles += s.totalFiles;
        translatedFiles += s.translatedFiles;
        totalNodes += s.totalNodes;
        translatedNodes += s.translatedNodes;
      }

      langs[lang] = {
        sections: sectionMap,
        totalFiles,
        translatedFiles,
        totalNodes,
        translatedNodes,
      };
    }

    result[version] = { enFileCount, langs };
  }

  return result;
}

/** Get file-level coverage for a version and language */
export function getFileCoverage(version: string, lang: string) {
  const cache = getCache();
  ensureScanned(version);
  return cache.fileCoverage(version, lang);
}

/** Get node-level detail for a specific file */
export function getFileDetail(version: string, lang: string, file: string) {
  const cache = getCache();
  ensureScanned(version);
  return cache.fileDetail(version, lang, file);
}

export interface FileBlock {
  md5: string | null;
  type: string;
  source: string;
  translation: string | null;
}

/**
 * Get file content as structured node blocks.
 * Parses EN source, looks up translations, returns aligned blocks.
 */
export function getFileBlocks(
  version: string,
  lang: string,
  file: string,
): FileBlock[] | null {
  const cache = getCache();
  if (!VERSIONS.includes(version as any)) return null;

  const enPath = join(ROOT, 'content', version, file);
  if (!existsSync(enPath)) return null;

  const content = readFileSync(enPath, 'utf8');
  const nodes = parseMdx(content);
  const blocks: FileBlock[] = [];

  let lastEnd = 0;

  for (const node of nodes) {
    // Gap before this node
    if (node.startOffset > lastEnd) {
      const gap = content.substring(lastEnd, node.startOffset);
      if (gap.trim()) {
        blocks.push({ md5: null, type: 'gap', source: gap, translation: null });
      } else if (gap) {
        // whitespace-only gap — still include for formatting
        blocks.push({ md5: null, type: 'gap', source: gap, translation: null });
      }
    }

    if (node.needsTranslation && node.md5) {
      const translation =
        lang === 'en' ? null : (cache.get(lang, node.md5) ?? null);
      blocks.push({
        md5: node.md5,
        type: node.type,
        source: node.rawText,
        translation,
      });
    } else {
      // Non-translatable node (code blocks, etc.)
      blocks.push({
        md5: null,
        type: node.type,
        source: node.rawText,
        translation: null,
      });
    }

    lastEnd = node.endOffset;
  }

  // Trailing content
  if (lastEnd < content.length) {
    const tail = content.substring(lastEnd);
    if (tail.trim()) {
      blocks.push({ md5: null, type: 'gap', source: tail, translation: null });
    }
  }

  return blocks;
}
