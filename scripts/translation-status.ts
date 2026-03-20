#!/usr/bin/env bun
/**
 * Translation status report — shows progress for all versions, sections, and languages.
 *
 * Usage:
 *   bun run scripts/translation-status.ts              # full report
 *   bun run scripts/translation-status.ts --json       # JSON output
 *   bun run scripts/translation-status.ts --lang zh-hans  # single language
 *   bun run scripts/translation-status.ts --version latest # single version
 *
 * How it works:
 *   1. Parse every EN MDX file into translatable nodes (using the same parser as the pipeline)
 *   2. For each node, compute its MD5 hash
 *   3. Check each language's cache (.cache/{lang}.jsonl) for that MD5
 *   4. Report per-version, per-section, per-language coverage
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { parseMdx } from '../packages/translate/src/parser';

// ── Types ──

interface FileStatus {
  relPath: string;
  section: string;
  totalNodes: number;
  cachedNodes: number;
  isFullyTranslated: boolean;
}

interface SectionStats {
  totalFiles: number;
  translatedFiles: number;
  totalNodes: number;
  cachedNodes: number;
}

interface LangStats {
  sections: Record<string, SectionStats>;
  totalFiles: number;
  translatedFiles: number;
  totalNodes: number;
  cachedNodes: number;
}

interface VersionStats {
  version: string;
  contentDir: string;
  enFileCount: number;
  langs: Record<string, LangStats>;
}

// ── CLI ──

interface CliOptions {
  json: boolean;
  lang: string | null;
  version: string | null;
  /** Show files identical to EN that need (re-)translation */
  untranslated: boolean;
}

function parseArgs(): CliOptions {
  const args = process.argv.slice(2);
  const opts: CliOptions = {
    json: false,
    lang: null,
    version: null,
    untranslated: false,
  };
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--json':
        opts.json = true;
        break;
      case '--lang':
        opts.lang = args[++i];
        break;
      case '--version':
        opts.version = args[++i];
        break;
      case '--untranslated':
        opts.untranslated = true;
        break;
    }
  }
  return opts;
}

// ── Helpers ──

const ROOT = resolve(import.meta.dirname!, '..');

function walkMdx(dir: string): string[] {
  const results: string[] = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkMdx(fullPath));
    } else if (entry.name.endsWith('.mdx')) {
      results.push(fullPath);
    }
  }
  return results;
}

/** Load a language cache into a Set of MD5 keys for fast lookup */
function loadCacheKeys(lang: string): Set<string> {
  const filePath = join(ROOT, '.cache', `${lang}.jsonl`);
  const keys = new Set<string>();
  if (!existsSync(filePath)) return keys;
  const lines = readFileSync(filePath, 'utf8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try {
      const entry = JSON.parse(trimmed);
      keys.add(entry.k);
    } catch {
      // skip malformed lines
    }
  }
  return keys;
}

/** Classify a file's section from its relative path */
function getSection(relPath: string): string {
  if (relPath.startsWith('docs/') || relPath.startsWith('docs\\'))
    return 'docs';
  if (relPath.startsWith('blog/') || relPath.startsWith('blog\\'))
    return 'blog';
  if (relPath.startsWith('learn/') || relPath.startsWith('learn\\'))
    return 'learn';
  return 'other';
}

/** Get file status: parse EN file, check each node against cache */
function getFileStatus(
  filePath: string,
  enDir: string,
  cacheKeys: Set<string>,
): FileStatus {
  const relPath = relative(enDir, filePath);
  const section = getSection(relPath);
  const content = readFileSync(filePath, 'utf8');

  const nodes = parseMdx(content);
  const translatableNodes = nodes.filter((n) => n.needsTranslation && n.md5);

  let cachedNodes = 0;
  for (const node of translatableNodes) {
    if (cacheKeys.has(node.md5!)) {
      cachedNodes++;
    }
  }

  return {
    relPath,
    section,
    totalNodes: translatableNodes.length,
    cachedNodes,
    isFullyTranslated: cachedNodes === translatableNodes.length,
  };
}

// ── Main ──

function main() {
  const opts = parseArgs();

  // Define versions to check
  const versionDefs: { version: string; dir: string }[] = [
    { version: 'latest', dir: 'content' },
    { version: 'v15', dir: 'content-v15' },
    { version: 'v14', dir: 'content-v14' },
    { version: 'v13', dir: 'content-v13' },
  ];

  // Filter by version if specified
  const versions =
    opts.version !== null
      ? versionDefs.filter((v) => v.version === opts.version)
      : versionDefs;

  if (versions.length === 0) {
    console.error(`Unknown version: ${opts.version}`);
    process.exit(1);
  }

  // All possible languages (from cache files)
  const ALL_LANGS = ['zh-hans', 'zh-hant', 'ja', 'ar', 'de', 'es', 'fr', 'ru'];
  const langs =
    opts.lang !== null ? ALL_LANGS.filter((l) => l === opts.lang) : ALL_LANGS;

  if (langs.length === 0) {
    console.error(`Unknown language: ${opts.lang}`);
    process.exit(1);
  }

  // Load all cache keys upfront
  const cacheMap = new Map<string, Set<string>>();
  for (const lang of langs) {
    cacheMap.set(lang, loadCacheKeys(lang));
  }

  const allVersionStats: VersionStats[] = [];

  for (const { version, dir } of versions) {
    const contentDir = join(ROOT, dir);
    const enDir = join(contentDir, 'en');

    if (!existsSync(enDir)) {
      if (!opts.json) console.log(`⚠ ${version}: EN directory not found`);
      continue;
    }

    // Collect all EN files
    const enFiles = walkMdx(enDir);
    const versionStat: VersionStats = {
      version,
      contentDir: dir,
      enFileCount: enFiles.length,
      langs: {},
    };

    for (const lang of langs) {
      const cacheKeys = cacheMap.get(lang)!;

      const langStat: LangStats = {
        sections: {},
        totalFiles: 0,
        translatedFiles: 0,
        totalNodes: 0,
        cachedNodes: 0,
      };

      for (const file of enFiles) {
        const status = getFileStatus(file, enDir, cacheKeys);

        // Aggregate by section
        if (!langStat.sections[status.section]) {
          langStat.sections[status.section] = {
            totalFiles: 0,
            translatedFiles: 0,
            totalNodes: 0,
            cachedNodes: 0,
          };
        }

        const sec = langStat.sections[status.section];
        sec.totalFiles++;
        sec.totalNodes += status.totalNodes;
        sec.cachedNodes += status.cachedNodes;
        if (status.isFullyTranslated) sec.translatedFiles++;

        langStat.totalFiles++;
        langStat.totalNodes += status.totalNodes;
        langStat.cachedNodes += status.cachedNodes;
        if (status.isFullyTranslated) langStat.translatedFiles++;
      }

      versionStat.langs[lang] = langStat;
    }

    allVersionStats.push(versionStat);
  }

  // Output
  if (opts.untranslated) {
    const result = findUntranslatedFiles(versions, langs);
    if (opts.json) {
      console.log(JSON.stringify(result, null, 2));
    } else {
      printUntranslatedReport(result);
    }
  } else if (opts.json) {
    console.log(JSON.stringify(allVersionStats, null, 2));
  } else {
    printReport(allVersionStats);
  }
}

// ── Untranslated file detection ──

interface UntranslatedFile {
  relPath: string;
  section: string;
  /** Whether cache has full coverage (file can be re-assembled from cache) */
  hasCacheCoverage: boolean;
  /** Node-level: cachedNodes/totalNodes */
  cachePct: number;
}

interface UntranslatedResult {
  version: string;
  contentDir: string;
  langs: Record<string, UntranslatedFile[]>;
}

/**
 * Find locale files that are identical to their EN source.
 * These are files that were either never translated or reset to EN.
 */
function findUntranslatedFiles(
  versions: { version: string; dir: string }[],
  langs: string[],
): UntranslatedResult[] {
  // Load caches for checking if files CAN be re-assembled
  const cacheMap = new Map<string, Set<string>>();
  for (const lang of langs) {
    cacheMap.set(lang, loadCacheKeys(lang));
  }

  const results: UntranslatedResult[] = [];

  for (const { version, dir } of versions) {
    const contentDir = join(ROOT, dir);
    const enDir = join(contentDir, 'en');
    if (!existsSync(enDir)) continue;

    const result: UntranslatedResult = {
      version,
      contentDir: dir,
      langs: {},
    };

    for (const lang of langs) {
      const langDir = join(contentDir, lang);
      if (!existsSync(langDir)) continue;

      const cacheKeys = cacheMap.get(lang)!;
      const untranslated: UntranslatedFile[] = [];

      const langFiles = walkMdx(langDir);
      for (const langFile of langFiles) {
        const relPath = relative(langDir, langFile);
        const enFile = join(enDir, relPath);
        if (!existsSync(enFile)) continue;

        // Compare file contents
        const langContent = readFileSync(langFile, 'utf8');
        const enContent = readFileSync(enFile, 'utf8');

        if (langContent === enContent) {
          // Check cache coverage
          const nodes = parseMdx(enContent);
          const translatable = nodes.filter((n) => n.needsTranslation && n.md5);
          const cached = translatable.filter((n) => cacheKeys.has(n.md5!));
          const totalNodes = translatable.length;
          const cachedNodes = cached.length;

          untranslated.push({
            relPath,
            section: getSection(relPath),
            hasCacheCoverage: cachedNodes === totalNodes && totalNodes > 0,
            cachePct: totalNodes > 0 ? (cachedNodes / totalNodes) * 100 : 0,
          });
        }
      }

      if (untranslated.length > 0) {
        // Sort: files with cache coverage first (easy wins), then by section
        untranslated.sort((a, b) => {
          if (a.hasCacheCoverage !== b.hasCacheCoverage)
            return a.hasCacheCoverage ? -1 : 1;
          return a.relPath.localeCompare(b.relPath);
        });
        result.langs[lang] = untranslated;
      }
    }

    results.push(result);
  }

  return results;
}

function printUntranslatedReport(results: UntranslatedResult[]) {
  console.log('');
  console.log(
    '═══════════════════════════════════════════════════════════════════════════════════',
  );
  console.log('  Untranslated Files (identical to EN)');
  console.log(
    '═══════════════════════════════════════════════════════════════════════════════════',
  );

  for (const r of results) {
    const totalUntranslated = Object.values(r.langs).reduce(
      (sum, files) => sum + files.length,
      0,
    );
    if (totalUntranslated === 0) continue;

    console.log('');
    console.log(`  📦 ${r.version.toUpperCase()} (${r.contentDir})`);

    for (const [lang, files] of Object.entries(r.langs)) {
      const withCache = files.filter((f) => f.hasCacheCoverage).length;
      const withoutCache = files.length - withCache;

      console.log('');
      console.log(
        `  ${lang}: ${files.length} files need translation (${withCache} can be assembled from cache)`,
      );
      console.log(
        '  ─────────────────────────────────────────────────────────────────────────',
      );

      for (const f of files) {
        const icon = f.hasCacheCoverage ? '🟢' : f.cachePct > 50 ? '🟡' : '🔴';
        const cachePctStr = `${f.cachePct.toFixed(0)}%`.padStart(4);
        console.log(`    ${icon} ${cachePctStr} cache  ${f.relPath}`);
      }

      if (withCache > 0) {
        console.log('');
        console.log(
          `    💡 ${withCache} files can be re-assembled without LLM calls:`,
        );
        console.log(
          `       bun run packages/translate/src/batch.pipeline.ts --lang ${lang} --max ${withCache}`,
        );
      }
      if (withoutCache > 0) {
        console.log(`    ⚡ ${withoutCache} files need LLM translation:`);
        console.log(
          `       bun run packages/translate/src/batch.pipeline.ts --lang ${lang} --max ${files.length}`,
        );
      }
    }
  }

  console.log('');
  console.log(
    '═══════════════════════════════════════════════════════════════════════════════════',
  );
  console.log('');
}

// ── Pretty Print ──

function pct(n: number, total: number): string {
  if (total === 0) return '  -  ';
  const p = (n / total) * 100;
  return `${p.toFixed(1)}%`.padStart(6);
}

function bar(n: number, total: number, width = 20): string {
  if (total === 0) return '░'.repeat(width);
  const filled = Math.round((n / total) * width);
  return '█'.repeat(filled) + '░'.repeat(width - filled);
}

function printReport(allStats: VersionStats[]) {
  console.log('');
  console.log(
    '═══════════════════════════════════════════════════════════════════════════════════════════════',
  );
  console.log('  Translation Status Report');
  console.log(
    '═══════════════════════════════════════════════════════════════════════════════════════════════',
  );

  for (const vs of allStats) {
    console.log('');
    console.log(
      `  📦 ${vs.version.toUpperCase()} (${vs.contentDir}) — ${vs.enFileCount} EN files`,
    );
    console.log(
      '  ─────────────────────────────────────────────────────────────────────────────────────────',
    );

    // Header
    const sections = new Set<string>();
    for (const ls of Object.values(vs.langs)) {
      for (const s of Object.keys(ls.sections)) sections.add(s);
    }
    const sectionList = ['docs', 'blog', 'learn'].filter((s) =>
      sections.has(s),
    );

    // Table header
    const langCol = 'Lang'.padEnd(10);
    const sectionCols = sectionList.map((s) => s.padStart(18)).join('');
    const totalCol = 'Total'.padStart(18);
    const nodesCol = 'Nodes'.padStart(18);
    console.log(`  ${langCol}${sectionCols}${totalCol}${nodesCol}`);
    console.log(
      `  ${'─'.repeat(10)}${sectionList.map(() => '─'.repeat(18)).join('')}${'─'.repeat(18)}${'─'.repeat(18)}`,
    );

    // Sort langs: zh-hans, zh-hant first, then alphabetical
    const sortedLangs = Object.keys(vs.langs).sort((a, b) => {
      const order = ['zh-hans', 'zh-hant', 'ja', 'ar', 'de', 'es', 'fr', 'ru'];
      return order.indexOf(a) - order.indexOf(b);
    });

    for (const lang of sortedLangs) {
      const ls = vs.langs[lang];
      const cols: string[] = [];

      cols.push(lang.padEnd(10));

      for (const section of sectionList) {
        const sec = ls.sections[section];
        if (sec) {
          const p = pct(sec.translatedFiles, sec.totalFiles);
          cols.push(
            `${sec.translatedFiles}/${sec.totalFiles} ${p}`.padStart(18),
          );
        } else {
          cols.push('-'.padStart(18));
        }
      }

      // Total files
      const totalP = pct(ls.translatedFiles, ls.totalFiles);
      cols.push(
        `${ls.translatedFiles}/${ls.totalFiles} ${totalP}`.padStart(18),
      );

      // Node-level coverage
      const nodeP = pct(ls.cachedNodes, ls.totalNodes);
      cols.push(`${ls.cachedNodes}/${ls.totalNodes} ${nodeP}`.padStart(18));

      console.log(`  ${cols.join('')}`);
    }

    // Progress bars
    console.log('');
    for (const lang of sortedLangs) {
      const ls = vs.langs[lang];
      const nodeP =
        ls.totalNodes > 0 ? (ls.cachedNodes / ls.totalNodes) * 100 : 0;
      console.log(
        `  ${lang.padEnd(10)} ${bar(ls.cachedNodes, ls.totalNodes, 30)} ${nodeP.toFixed(1)}%`,
      );
    }
  }

  // Summary
  console.log('');
  console.log(
    '═══════════════════════════════════════════════════════════════════════════════════════════════',
  );
  console.log('  Cache sizes:');
  const cacheDir = join(ROOT, '.cache');
  if (existsSync(cacheDir)) {
    for (const f of readdirSync(cacheDir)
      .filter((f) => f.endsWith('.jsonl'))
      .sort()) {
      const lines = readFileSync(join(cacheDir, f), 'utf8')
        .split('\n')
        .filter((l) => l.trim()).length;
      console.log(
        `    ${f.padEnd(20)} ${lines.toLocaleString().padStart(8)} entries`,
      );
    }
  }
  console.log(
    '═══════════════════════════════════════════════════════════════════════════════════════════════',
  );
  console.log('');
}

main();
