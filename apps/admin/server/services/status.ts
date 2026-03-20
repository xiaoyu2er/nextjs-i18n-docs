import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { TranslationCache } from '../../../../packages/translate/src/cache';
import { parseMdx } from '../../../../packages/translate/src/parser';

const ROOT = resolve(import.meta.dir, '../../../..');
const CACHE_DIR = join(ROOT, '.cache');

export const VERSIONS = [
  { version: 'latest', dir: 'content' },
  { version: 'v15', dir: 'content-v15' },
  { version: 'v14', dir: 'content-v14' },
  { version: 'v13', dir: 'content-v13' },
] as const;

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
  const vDef = VERSIONS.find((v) => v.version === version);
  if (!vDef) return;

  const enDir = join(ROOT, vDef.dir, 'en');
  if (!existsSync(enDir)) return;

  const files = walkMdx(enDir);

  // Check if scan is needed: source_files count should roughly match EN file count
  // (each file has multiple nodes, so sourceCount >> fileCount, but 0 or way too low means stale)
  const currentCount = cache.sourceCount(version);
  if (currentCount >= files.length) return; // already scanned

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

  for (const vDef of VERSIONS) {
    ensureScanned(vDef.version);
    const enDir = join(ROOT, vDef.dir, 'en');
    const enFileCount = existsSync(enDir) ? walkMdx(enDir).length : 0;

    const langs: (typeof result)[string]['langs'] = {};
    for (const lang of LANGS) {
      const sections = cache.sectionStats(vDef.version, lang);
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

    result[vDef.version] = { enFileCount, langs };
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
