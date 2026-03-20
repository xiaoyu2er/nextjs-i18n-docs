#!/usr/bin/env bun
/**
 * Translation status report — shows progress for all versions, sections, and languages.
 *
 * Usage:
 *   bun run scripts/translation-status.ts              # full report
 *   bun run scripts/translation-status.ts --json       # JSON output
 *   bun run scripts/translation-status.ts --lang zh-hans  # single language
 *   bun run scripts/translation-status.ts --version latest # single version
 *   bun run scripts/translation-status.ts --untranslated   # show incomplete files
 *   bun run scripts/translation-status.ts --scan          # rescan EN files into SQLite
 *
 * The first run (or --scan) parses EN files with remark and stores MD5 hashes
 * in the SQLite database. Subsequent runs use cached data (~10ms vs ~11s).
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { TranslationCache } from '../packages/translate/src/cache';
import { parseMdx } from '../packages/translate/src/parser';

// ── Types ──

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

interface IncompleteFile {
  relPath: string;
  section: string;
  reason: 'identical' | 'partial';
  hasCacheCoverage: boolean;
  cachePct: number;
  cachedNodes: number;
  totalNodes: number;
  missingNodes: number;
}

interface UntranslatedResult {
  version: string;
  contentDir: string;
  langs: Record<string, IncompleteFile[]>;
}

// ── CLI ──

interface CliOptions {
  json: boolean;
  lang: string | null;
  version: string | null;
  untranslated: boolean;
  scan: boolean;
}

function parseArgs(): CliOptions {
  const args = process.argv.slice(2);
  const opts: CliOptions = {
    json: false,
    lang: null,
    version: null,
    untranslated: false,
    scan: false,
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
      case '--scan':
        opts.scan = true;
        break;
    }
  }
  return opts;
}

// ── Helpers ──

const ROOT = resolve(import.meta.dirname ?? '.', '..');

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

function getSection(relPath: string): string {
  if (relPath.startsWith('docs/')) return 'docs';
  if (relPath.startsWith('blog/')) return 'blog';
  if (relPath.startsWith('learn/')) return 'learn';
  return 'other';
}

// ── Scan EN files into SQLite ──

function scanVersion(
  cache: TranslationCache,
  version: string,
  enDir: string,
): number {
  const files = walkMdx(enDir);
  cache.clearSources('', version);

  let totalNodes = 0;
  for (const file of files) {
    const relPath = relative(enDir, file);
    const content = readFileSync(file, 'utf8');
    const nodes = parseMdx(content);

    for (const node of nodes) {
      if (node.needsTranslation && node.md5) {
        const line = content.substring(0, node.startOffset).split('\n').length;
        cache.setSource(node.md5, node.rawText, node.type);
        cache.updateSource('', node.md5, relPath, line, version);
        totalNodes++;
      }
    }
  }

  return totalNodes;
}

function needsScan(cache: TranslationCache, version: string): boolean {
  return cache.sourceCount(version) === 0;
}

// ── Main ──

const VERSION_DEFS: { version: string; dir: string }[] = [
  { version: 'latest', dir: 'content' },
  { version: 'v15', dir: 'content-v15' },
  { version: 'v14', dir: 'content-v14' },
  { version: 'v13', dir: 'content-v13' },
];

const ALL_LANGS = ['zh-hans', 'zh-hant', 'ja', 'ar', 'de', 'es', 'fr', 'ru'];

function main() {
  const opts = parseArgs();

  const versions =
    opts.version !== null
      ? VERSION_DEFS.filter((v) => v.version === opts.version)
      : VERSION_DEFS;

  const langs =
    opts.lang !== null ? ALL_LANGS.filter((l) => l === opts.lang) : ALL_LANGS;

  if (versions.length === 0) {
    console.error(`Unknown version: ${opts.version}`);
    process.exit(1);
  }
  if (langs.length === 0) {
    console.error(`Unknown language: ${opts.lang}`);
    process.exit(1);
  }

  const cache = new TranslationCache(join(ROOT, '.cache'));

  // Scan EN files if needed or requested
  for (const { version, dir } of versions) {
    const enDir = join(ROOT, dir, 'en');
    if (!existsSync(enDir)) continue;

    if (opts.scan || needsScan(cache, version)) {
      const start = Date.now();
      const count = scanVersion(cache, version, enDir);
      if (!opts.json) {
        console.error(
          `  Scanned ${version}: ${count} nodes in ${Date.now() - start}ms`,
        );
      }
    }
  }

  if (opts.scan && !opts.untranslated && !opts.json) {
    console.log('✅ Scan complete.');
    cache.close();
    return;
  }

  // Build stats using SQLite queries
  if (opts.untranslated) {
    const result = findUntranslatedFiles(cache, versions, langs);
    if (opts.json) {
      console.log(JSON.stringify(result, null, 2));
    } else {
      printUntranslatedReport(result);
    }
  } else {
    const allStats = buildStats(cache, versions, langs);
    if (opts.json) {
      console.log(JSON.stringify(allStats, null, 2));
    } else {
      printReport(allStats);
    }
  }

  cache.close();
}

// ── Build stats from SQLite ──

function buildStats(
  cache: TranslationCache,
  versions: { version: string; dir: string }[],
  langs: string[],
): VersionStats[] {
  const allStats: VersionStats[] = [];

  for (const { version, dir } of versions) {
    const enDir = join(ROOT, dir, 'en');
    if (!existsSync(enDir)) continue;

    const enFileCount = walkMdx(enDir).length;
    const versionStat: VersionStats = {
      version,
      contentDir: dir,
      enFileCount,
      langs: {},
    };

    for (const lang of langs) {
      const sectionData = cache.sectionStats(version, lang);
      const langStat: LangStats = {
        sections: {},
        totalFiles: 0,
        translatedFiles: 0,
        totalNodes: 0,
        cachedNodes: 0,
      };

      for (const s of sectionData) {
        langStat.sections[s.section] = {
          totalFiles: s.totalFiles,
          translatedFiles: s.translatedFiles,
          totalNodes: s.totalNodes,
          cachedNodes: s.translatedNodes,
        };
        langStat.totalFiles += s.totalFiles;
        langStat.translatedFiles += s.translatedFiles;
        langStat.totalNodes += s.totalNodes;
        langStat.cachedNodes += s.translatedNodes;
      }

      versionStat.langs[lang] = langStat;
    }

    allStats.push(versionStat);
  }

  return allStats;
}

// ── Untranslated file detection ──

function findUntranslatedFiles(
  cache: TranslationCache,
  versions: { version: string; dir: string }[],
  langs: string[],
): UntranslatedResult[] {
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
      const coverage = cache.fileCoverage(version, lang);
      const incomplete: IncompleteFile[] = [];

      for (const fc of coverage) {
        if (fc.translated === fc.total) continue; // fully translated

        const langFile = join(contentDir, lang, fc.file);
        const enFile = join(enDir, fc.file);
        const isIdentical =
          existsSync(langFile) &&
          existsSync(enFile) &&
          readFileSync(langFile, 'utf8') === readFileSync(enFile, 'utf8');

        const missingNodes = fc.total - fc.translated;
        const cachePct = fc.total > 0 ? (fc.translated / fc.total) * 100 : 0;

        incomplete.push({
          relPath: fc.file,
          section: getSection(fc.file),
          reason: isIdentical ? 'identical' : 'partial',
          hasCacheCoverage: false,
          cachePct,
          cachedNodes: fc.translated,
          totalNodes: fc.total,
          missingNodes,
        });
      }

      // Also find files identical to EN that have full cache coverage
      // (they can be re-assembled without LLM)
      for (const fc of coverage) {
        if (fc.translated !== fc.total) continue;
        const langFile = join(contentDir, lang, fc.file);
        const enFile = join(enDir, fc.file);
        if (
          existsSync(langFile) &&
          existsSync(enFile) &&
          readFileSync(langFile, 'utf8') === readFileSync(enFile, 'utf8')
        ) {
          incomplete.push({
            relPath: fc.file,
            section: getSection(fc.file),
            reason: 'identical',
            hasCacheCoverage: true,
            cachePct: 100,
            cachedNodes: fc.total,
            totalNodes: fc.total,
            missingNodes: 0,
          });
        }
      }

      if (incomplete.length > 0) {
        incomplete.sort((a, b) => {
          if (a.reason !== b.reason) return a.reason === 'identical' ? -1 : 1;
          return b.cachePct - a.cachePct;
        });
        result.langs[lang] = incomplete;
      }
    }

    results.push(result);
  }

  return results;
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

    const sections = new Set<string>();
    for (const ls of Object.values(vs.langs)) {
      for (const s of Object.keys(ls.sections)) sections.add(s);
    }
    const sectionList = ['docs', 'blog', 'learn'].filter((s) =>
      sections.has(s),
    );

    const langCol = 'Lang'.padEnd(10);
    const sectionCols = sectionList.map((s) => s.padStart(18)).join('');
    const totalCol = 'Total'.padStart(18);
    const nodesCol = 'Nodes'.padStart(18);
    console.log(`  ${langCol}${sectionCols}${totalCol}${nodesCol}`);
    console.log(
      `  ${'─'.repeat(10)}${sectionList.map(() => '─'.repeat(18)).join('')}${'─'.repeat(18)}${'─'.repeat(18)}`,
    );

    const sortedLangs = Object.keys(vs.langs).sort((a, b) => {
      const order = ALL_LANGS;
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

      const totalP = pct(ls.translatedFiles, ls.totalFiles);
      cols.push(
        `${ls.translatedFiles}/${ls.totalFiles} ${totalP}`.padStart(18),
      );

      const nodeP = pct(ls.cachedNodes, ls.totalNodes);
      cols.push(`${ls.cachedNodes}/${ls.totalNodes} ${nodeP}`.padStart(18));

      console.log(`  ${cols.join('')}`);
    }

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

  console.log('');
  console.log(
    '═══════════════════════════════════════════════════════════════════════════════════════════════',
  );
  const stats = new TranslationCache(join(ROOT, '.cache')).allLangStats();
  console.log('  Cache sizes:');
  for (const s of stats) {
    console.log(
      `    ${(`${s.lang}.jsonl`).padEnd(20)} ${s.count.toLocaleString().padStart(8)} entries`,
    );
  }
  console.log(
    '═══════════════════════════════════════════════════════════════════════════════════════════════',
  );
  console.log('');
}

function printUntranslatedReport(results: UntranslatedResult[]) {
  console.log('');
  console.log(
    '═══════════════════════════════════════════════════════════════════════════════════',
  );
  console.log('  Incomplete Translation Files');
  console.log(
    '═══════════════════════════════════════════════════════════════════════════════════',
  );

  for (const r of results) {
    const totalIncomplete = Object.values(r.langs).reduce(
      (sum, files) => sum + files.length,
      0,
    );
    if (totalIncomplete === 0) continue;

    console.log('');
    console.log(`  📦 ${r.version.toUpperCase()} (${r.contentDir})`);

    for (const [lang, files] of Object.entries(r.langs)) {
      const identical = files.filter((f) => f.reason === 'identical');
      const partial = files.filter((f) => f.reason === 'partial');
      const assembleOnly = files.filter((f) => f.hasCacheCoverage);
      const totalMissing = files.reduce((s, f) => s + f.missingNodes, 0);

      console.log('');
      console.log(
        `  ${lang}: ${files.length} incomplete files (${totalMissing} nodes missing from cache)`,
      );
      console.log(
        '  ─────────────────────────────────────────────────────────────────────────────',
      );

      if (identical.length > 0) {
        console.log(
          `\n    📄 Identical to EN (${identical.length} files — reset or never translated):`,
        );
        for (const f of identical) {
          const icon = f.hasCacheCoverage
            ? '🟢'
            : f.cachePct > 50
              ? '🟡'
              : '🔴';
          const cachePctStr = `${f.cachePct.toFixed(0)}%`.padStart(4);
          const missing =
            f.missingNodes > 0 ? ` (${f.missingNodes} nodes missing)` : '';
          console.log(
            `      ${icon} ${cachePctStr} cache  ${f.relPath}${missing}`,
          );
        }
      }

      if (partial.length > 0) {
        console.log(
          `\n    📝 Partially translated (${partial.length} files — some nodes missing from cache):`,
        );
        for (const f of partial) {
          const icon = f.cachePct > 80 ? '🟡' : '🔴';
          const cachePctStr = `${f.cachePct.toFixed(0)}%`.padStart(4);
          console.log(
            `      ${icon} ${cachePctStr} cache  ${f.relPath}  (${f.missingNodes}/${f.totalNodes} nodes missing)`,
          );
        }
      }

      console.log('');
      if (assembleOnly.length > 0) {
        console.log(
          `    💡 ${assembleOnly.length} files can be re-assembled from cache (no LLM needed)`,
        );
      }
      const needLlm = files.length - assembleOnly.length;
      if (needLlm > 0) {
        console.log(
          `    ⚡ ${needLlm} files need LLM translation (${totalMissing} nodes)`,
        );
      }
      console.log(
        `    → bun run packages/translate/src/batch.pipeline.ts --lang ${lang} --max ${files.length}`,
      );
    }
  }

  console.log('');
  console.log(
    '═══════════════════════════════════════════════════════════════════════════════════',
  );
  console.log('');
}

main();
