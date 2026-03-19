#!/usr/bin/env node
/**
 * Unified translation pipeline CLI.
 *
 * Usage:
 *   bun run packages/translate/src/batch.pipeline.ts [options]
 *
 * Modes:
 *   --status          Report translation coverage (no API calls)
 *   --lang <code>     Translate to a specific language (e.g., zh-hans)
 *   --lang all        Translate to all configured languages
 *   --dry-run         Assemble only, show what would be translated
 *
 * Options:
 *   --docs-root <dir>   Source English content (default: content/en)
 *   --output-dir <dir>  Output directory (default: content)
 *   --cache-dir <dir>   Cache directory (default: .cache)
 *   --pattern <glob>    File pattern (default: **\/*.mdx)
 *   --max <n>           Max files to process
 *   --concurrency <n>   Parallel API calls (default: 3)
 *   --model <name>      Override model from .env
 *   --api-type <type>   API type: openrouter, openai, anthropic (default: openrouter)
 *   --api-key <key>     API key override
 *   --api-base-url <u>  API base URL override
 *   --max-tokens <n>    Max output tokens (default: 16384)
 *   --config <path>     Translation config file (default: translation.config.example.mjs)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import { annotate } from './annotate';
import {
  assemble,
  extractUncached,
  NEEDS_TRANSLATION_END,
  NEEDS_TRANSLATION_START,
} from './assembler';
import { executeInBatches } from './batch';
import { TranslationCache } from './cache';
import { validateMdx } from './mdx-validator';
import { parseMdx } from './parser';
import { type TranslateOptions, translateJson } from './translator';

// ── Helpers ──────────────────────────────────────────────────────────

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '../../..');

function formatDuration(ms: number): string {
  const secs = Math.floor(ms / 1000);
  if (secs < 60) return `${secs}s`;
  const mins = Math.floor(secs / 60);
  const remainSecs = secs % 60;
  if (mins < 60) return `${mins}m${remainSecs}s`;
  const hours = Math.floor(mins / 60);
  const remainMins = mins % 60;
  return `${hours}h${remainMins}m`;
}

// ── CLI Arg Parsing ──────────────────────────────────────────────────

interface CliOptions {
  docsRoot: string;
  outputDir: string;
  cacheDir: string;
  lang: string;
  pattern: string;
  max: number;
  apiType: TranslateOptions['apiType'];
  apiBaseUrl: string;
  apiKey: string;
  model: string;
  maxTokens: number;
  concurrency: number;
  dryRun: boolean;
  status: boolean;
  repair: boolean;
  annotateFiles: string;
  lookup: string;
  configPath: string;
  docsContext?: string;
}

interface LangConfig {
  locale: string;
  name: string;
  guide?: string;
}

function parseArgs(argv: string[]): CliOptions {
  const args = argv.slice(2);
  const getOpt = (name: string, def: string) => {
    const idx = args.indexOf(`--${name}`);
    return idx >= 0 && idx + 1 < args.length ? args[idx + 1] : def;
  };
  const hasFlag = (name: string) => args.includes(`--${name}`);

  return {
    docsRoot: path.resolve(PROJECT_ROOT, getOpt('docs-root', 'content/en')),
    outputDir: path.resolve(PROJECT_ROOT, getOpt('output-dir', 'content')),
    cacheDir: path.resolve(PROJECT_ROOT, getOpt('cache-dir', '.cache')),
    lang: getOpt('lang', 'zh-hans'),
    pattern: getOpt('pattern', '**/*.mdx'),
    max: Number.parseInt(getOpt('max', '999999'), 10),
    apiType: getOpt('api-type', 'openrouter') as TranslateOptions['apiType'],
    apiBaseUrl: getOpt('api-base-url', ''),
    apiKey: getOpt('api-key', ''),
    model: getOpt('model', ''),
    maxTokens: Number.parseInt(getOpt('max-tokens', '16384'), 10),
    concurrency: Number.parseInt(getOpt('concurrency', '3'), 10),
    dryRun: hasFlag('dry-run'),
    status: hasFlag('status'),
    repair: hasFlag('repair'),
    annotateFiles: getOpt('annotate', ''),
    lookup: getOpt('lookup', ''),
    configPath: getOpt(
      'config',
      'packages/translate/translation.config.example.mjs',
    ),
  };
}

// ── Load language config ─────────────────────────────────────────────

async function loadLangConfigs(
  configPath: string,
): Promise<{ langs: Record<string, LangConfig>; docsContext?: string }> {
  try {
    const fullPath = path.resolve(PROJECT_ROOT, configPath);
    const config = (await import(fullPath)).default;
    return {
      langs: config.langs ?? {},
      docsContext: config.docsContext,
    };
  } catch {
    // Fallback: minimal zh-hans config
    return {
      langs: {
        'zh-hans': { locale: 'zh-hans', name: 'Simplified Chinese' },
      },
    };
  }
}

// ── Status Mode ──────────────────────────────────────────────────────

async function runStatus(opts: CliOptions): Promise<void> {
  const { langs } = await loadLangConfigs(opts.configPath);
  const targetLangs = opts.lang === 'all' ? Object.keys(langs) : [opts.lang];

  // Scan source files
  const files = await glob(opts.pattern, { cwd: opts.docsRoot });
  let totalNodes = 0;
  const allMd5s = new Set<string>();

  for (const relPath of files) {
    const content = fs.readFileSync(path.join(opts.docsRoot, relPath), 'utf8');
    const nodes = parseMdx(content);
    for (const node of nodes) {
      if (node.needsTranslation && node.md5) {
        totalNodes++;
        allMd5s.add(node.md5);
      }
    }
  }

  console.log(`\n📊 Translation Coverage Report`);
  console.log(
    `   Source: ${opts.docsRoot} (${files.length} files, ${totalNodes} translatable nodes, ${allMd5s.size} unique)\n`,
  );
  console.log(
    `${'Language'.padEnd(12)} ${'Cached'.padStart(8)} ${'Missing'.padStart(8)} ${'Coverage'.padStart(10)}`,
  );
  console.log('─'.repeat(42));

  for (const lang of targetLangs) {
    const cache = new TranslationCache(opts.cacheDir);
    try {
      cache.load(lang);
    } catch {
      // No cache for this language
    }

    let cached = 0;
    let missing = 0;
    for (const md5 of allMd5s) {
      if (cache.get(lang, md5)) {
        cached++;
      } else {
        missing++;
      }
    }

    const coverage =
      allMd5s.size > 0
        ? `${((cached / allMd5s.size) * 100).toFixed(1)}%`
        : '0.0%';
    console.log(
      `${lang.padEnd(12)} ${String(cached).padStart(8)} ${String(missing).padStart(8)} ${coverage.padStart(10)}`,
    );
  }
  console.log('');
}

// ── Translate Mode ───────────────────────────────────────────────────

interface TranslateFileResult {
  status: 'cached' | 'translated' | 'skipped' | 'error';
  newTranslations: number;
  diffs: number;
  mdxErrors: string[];
  error?: string;
}

async function translateFile(
  sourcePath: string,
  relPath: string,
  opts: CliOptions,
  langConfig: LangConfig,
  cache: TranslationCache,
): Promise<TranslateFileResult> {
  const sourceContent = fs.readFileSync(sourcePath, 'utf8');
  const assembleResult = assemble(sourceContent, opts.lang, cache, relPath);

  if (assembleResult.allCached) {
    const finalPath = path.join(opts.outputDir, opts.lang, relPath);
    fs.mkdirSync(path.dirname(finalPath), { recursive: true });
    fs.writeFileSync(finalPath, assembleResult.content, 'utf8');
    const mdxResult = validateMdx(assembleResult.content);
    return {
      status: 'cached',
      newTranslations: 0,
      diffs: 0,
      mdxErrors: mdxResult.errors.map((e) => e.message),
    };
  }

  if (opts.dryRun) {
    return { status: 'skipped', newTranslations: 0, diffs: 0, mdxErrors: [] };
  }

  // Extract uncached nodes for JSON-based translation
  const { uncached } = extractUncached(sourceContent, opts.lang, cache);
  if (Object.keys(uncached).length === 0) {
    // All cached after extractUncached (race condition or cache updated)
    const final = assemble(sourceContent, opts.lang, cache, relPath);
    const finalPath = path.join(opts.outputDir, opts.lang, relPath);
    fs.mkdirSync(path.dirname(finalPath), { recursive: true });
    fs.writeFileSync(finalPath, final.content, 'utf8');
    return { status: 'cached', newTranslations: 0, diffs: 0, mdxErrors: [] };
  }

  // Translate via JSON mode — LLM returns {md5: translation} pairs
  const jsonResult = await translateJson({
    assembledContent: assembleResult.content,
    uncached,
    langName: langConfig.name,
    guide: langConfig.guide,
    apiType: opts.apiType,
    apiBaseUrl: opts.apiBaseUrl || undefined,
    apiKey: opts.apiKey || undefined,
    model: opts.model || undefined,
    maxTokens: opts.maxTokens,
    docsContext:
      opts.docsContext ||
      'Next.js is a React framework for building full-stack web applications.',
  });

  // Update cache with translations
  let newTranslations = 0;
  for (const [md5, translation] of Object.entries(jsonResult.translations)) {
    cache.set(opts.lang, md5, translation);
    newTranslations++;
  }

  // Log missing translations
  if (jsonResult.missing.length > 0) {
    console.warn(
      `   ⚠️ ${jsonResult.missing.length} nodes missing from LLM response`,
    );
  }

  // Re-assemble from source structure + updated cache
  // Structure is ALWAYS correct since we control the assembly
  const reassembled = assemble(sourceContent, opts.lang, cache, relPath);
  const finalContent = reassembled.allCached
    ? reassembled.content
    : // Strip NEEDS_TRANSLATION markers for any still-uncached nodes
      reassembled.content
        .replace(new RegExp(`${NEEDS_TRANSLATION_START}\\n?`, 'g'), '')
        .replace(new RegExp(`\\n?${NEEDS_TRANSLATION_END}`, 'g'), '');

  if (!reassembled.allCached) {
    console.warn(
      `   ⚠️ ${reassembled.uncachedCount} nodes still uncached (English text in output)`,
    );
  }

  const finalPath = path.join(opts.outputDir, opts.lang, relPath);
  fs.mkdirSync(path.dirname(finalPath), { recursive: true });
  fs.writeFileSync(finalPath, finalContent, 'utf8');

  const mdxResult = validateMdx(finalContent);

  return {
    status: 'translated',
    newTranslations,
    diffs: jsonResult.missing.length,
    mdxErrors: mdxResult.errors.map((e) => e.message),
  };
}

async function runTranslate(opts: CliOptions): Promise<void> {
  const { langs, docsContext } = await loadLangConfigs(opts.configPath);
  opts.docsContext = docsContext;

  const targetLangs = opts.lang === 'all' ? Object.keys(langs) : [opts.lang];

  for (const lang of targetLangs) {
    const langConfig = langs[lang];
    if (!langConfig) {
      console.error(
        `❌ Language "${lang}" not found in config. Available: ${Object.keys(langs).join(', ')}`,
      );
      continue;
    }

    // Update opts.lang for this iteration
    opts.lang = lang;

    console.log(`\n📦 Translating to ${lang} (${langConfig.name})`);
    console.log(`   Source: ${opts.docsRoot}`);
    console.log(`   Engine: ${opts.apiType}`);
    console.log(
      `   Model: ${opts.model || process.env.OPENROUTER_MODEL || 'default'}`,
    );

    // Find files
    const files = await glob(opts.pattern, { cwd: opts.docsRoot });
    console.log(`   Files: ${files.length} total\n`);

    // Load cache
    const cache = new TranslationCache(opts.cacheDir);
    try {
      cache.load(lang);
      console.log(`📦 Cache loaded: ${cache.stats(lang).size} entries`);
      cache.clearSources(lang);
    } catch {
      console.log('📦 No existing cache');
    }

    // Scan all files, separate cached vs needs-translation
    // --max limits the number of files to TRANSLATE, not scan
    const cachedFiles: string[] = [];
    const translateFiles: string[] = [];

    for (const relPath of files) {
      const sourcePath = path.join(opts.docsRoot, relPath);
      const sourceContent = fs.readFileSync(sourcePath, 'utf8');
      const assembleResult = assemble(sourceContent, lang, cache, relPath);

      if (assembleResult.allCached) {
        cachedFiles.push(relPath);
        const finalPath = path.join(opts.outputDir, lang, relPath);
        fs.mkdirSync(path.dirname(finalPath), { recursive: true });
        fs.writeFileSync(finalPath, assembleResult.content, 'utf8');
      } else {
        translateFiles.push(relPath);
        if (translateFiles.length >= opts.max) break;
      }
    }

    console.log(
      `📦 ${cachedFiles.length} fully cached, ${translateFiles.length} need translation${translateFiles.length === opts.max ? ` (max ${opts.max})` : ''}`,
    );

    if (translateFiles.length === 0) {
      console.log(
        `\n✅ All ${cachedFiles.length} files fully cached. Nothing to translate.\n`,
      );
      cache.save(lang);
      continue;
    }

    console.log(`   Concurrency: ${opts.concurrency}\n`);

    // Stats
    const totalCached = cachedFiles.length;
    let totalTranslated = 0;
    let totalSkipped = 0;
    let totalNewTranslations = 0;
    let totalDiffs = 0;
    let totalErrors = 0;
    let totalMdxErrors = 0;
    const failedFiles: string[] = [];
    const startTime = Date.now();
    const fileTimes: number[] = [];
    let completed = 0;

    // Translate
    await executeInBatches(
      translateFiles,
      async (relPath) => {
        const sourcePath = path.join(opts.docsRoot, relPath);
        const fileStart = Date.now();
        completed++;
        const progress = `[${completed}/${translateFiles.length}]`;
        console.log(`${progress} ⏳ ${relPath}...`);

        try {
          const result = await translateFile(
            sourcePath,
            relPath,
            opts,
            langConfig,
            cache,
          );

          const fileElapsed = Date.now() - fileStart;
          fileTimes.push(fileElapsed);

          const elapsed = Date.now() - startTime;
          const remaining = translateFiles.length - completed;
          const avgTime =
            fileTimes.length > 0
              ? fileTimes.reduce((a, b) => a + b, 0) / fileTimes.length
              : 0;
          const eta = remaining * (avgTime / opts.concurrency);
          const timeInfo = `[${formatDuration(elapsed)} elapsed, ETA ${remaining > 0 && avgTime > 0 ? formatDuration(eta) : '-'}]`;

          if (result.mdxErrors.length > 0) {
            totalMdxErrors += result.mdxErrors.length;
          }

          if (result.status === 'translated') {
            totalTranslated++;
            totalNewTranslations += result.newTranslations;
            totalDiffs += result.diffs;
            console.log(
              `${progress} ✅ ${relPath} (+${result.newTranslations} cached${result.diffs > 0 ? `, ${result.diffs} diffs` : ''}) ${timeInfo}`,
            );
            cache.save(lang);
          } else {
            totalSkipped++;
            console.log(`${progress} ⏭️  ${relPath} (skipped)`);
          }
        } catch (err) {
          totalErrors++;
          const msg = err instanceof Error ? err.message : String(err);
          console.error(`${progress} ❌ ${relPath}: ${msg}`);
          failedFiles.push(relPath);
        }
      },
      opts.concurrency,
    );

    // Final save
    cache.save(lang);

    // Summary
    console.log(`\n${'═'.repeat(60)}`);
    console.log(`📊 Summary (${lang}):`);
    console.log(`   Cached (no API call): ${totalCached}`);
    console.log(`   Translated: ${totalTranslated}`);
    console.log(`   Skipped: ${totalSkipped}`);
    console.log(`   New translations cached: ${totalNewTranslations}`);
    console.log(`   Errors: ${totalErrors}`);
    console.log(`   Diffs: ${totalDiffs}`);
    console.log(`   MDX errors: ${totalMdxErrors}`);
    console.log(`   Cache size: ${cache.stats(lang).size} entries`);
    console.log(`   Total time: ${formatDuration(Date.now() - startTime)}`);
    console.log(`   Output: ${path.join(opts.outputDir, lang)}`);

    if (failedFiles.length > 0) {
      console.log(`\n❌ Failed files (${failedFiles.length}):`);
      for (const f of failedFiles) {
        console.log(`   - ${f}`);
      }
    }
  }
}

// ── Repair Mode ──────────────────────────────────────────────────────

async function runRepair(opts: CliOptions): Promise<void> {
  const { langs } = await loadLangConfigs(opts.configPath);
  const targetLangs = opts.lang === 'all' ? Object.keys(langs) : [opts.lang];
  const files = await glob(opts.pattern, { cwd: opts.docsRoot });

  for (const lang of targetLangs) {
    const langDir = path.join(opts.outputDir, lang);
    if (!fs.existsSync(langDir)) {
      console.log(`⏭️  ${lang}: no translated files found`);
      continue;
    }

    const cache = new TranslationCache(opts.cacheDir);
    try {
      cache.load(lang);
    } catch {
      console.log(`⏭️  ${lang}: no cache found`);
      continue;
    }

    let repaired = 0;
    let skipped = 0;
    let partial = 0;

    for (const relPath of files) {
      const enPath = path.join(opts.docsRoot, relPath);
      const langPath = path.join(langDir, relPath);
      if (!fs.existsSync(langPath)) continue;

      const enContent = fs.readFileSync(enPath, 'utf8');
      const langContent = fs.readFileSync(langPath, 'utf8');

      const enNodes = parseMdx(enContent).filter((n) => n.needsTranslation);
      const langNodes = parseMdx(langContent).filter((n) => n.needsTranslation);

      // Check alignment
      let aligned = true;
      if (enNodes.length !== langNodes.length) {
        aligned = false;
      } else {
        for (let i = 0; i < enNodes.length; i++) {
          if (enNodes[i].type !== langNodes[i].type) {
            aligned = false;
            break;
          }
        }
      }

      if (aligned) {
        skipped++;
        continue;
      }

      // Try re-assemble from cache
      const reassembled = assemble(enContent, lang, cache, relPath);
      if (reassembled.allCached) {
        fs.writeFileSync(langPath, reassembled.content, 'utf8');
        repaired++;
        console.log(`  ✅ ${relPath} (re-assembled from cache)`);
      } else {
        // Backfill from existing translation, then re-assemble
        const existingNodes = parseMdx(langContent).filter(
          (n) => n.needsTranslation,
        );
        let si = 0;
        let li = 0;
        let backfilled = 0;
        while (si < enNodes.length && li < existingNodes.length) {
          if (enNodes[si].type === existingNodes[li].type) {
            if (
              enNodes[si].md5 &&
              !cache.get(lang, enNodes[si].md5 as string)
            ) {
              cache.set(
                lang,
                enNodes[si].md5 as string,
                existingNodes[li].rawText,
              );
              backfilled++;
            }
            si++;
            li++;
          } else if (existingNodes.length > enNodes.length) {
            li++;
          } else {
            si++;
          }
        }

        const reassembled2 = assemble(enContent, lang, cache, relPath);
        if (reassembled2.allCached) {
          fs.writeFileSync(langPath, reassembled2.content, 'utf8');
          repaired++;
          console.log(
            `  ✅ ${relPath} (backfilled ${backfilled} + re-assembled)`,
          );
        } else {
          partial++;
          console.log(
            `  ⚠️  ${relPath} (${reassembled2.uncachedCount} nodes still uncached)`,
          );
        }
      }
    }

    cache.save(lang);
    console.log(
      `\n📊 ${lang}: ${repaired} repaired, ${skipped} already aligned, ${partial} partial\n`,
    );
  }
}

// ── Lookup Mode ──────────────────────────────────────────────────────

// ── Annotate Mode ────────────────────────────────────────────────────

async function runAnnotate(opts: CliOptions): Promise<void> {
  const target = opts.annotateFiles;

  // Resolve glob or file path
  const stat = fs.existsSync(target) && fs.statSync(target);
  let files: string[];
  let baseDir: string;

  if (stat?.isFile()) {
    // Single file
    baseDir = path.dirname(target);
    files = [path.basename(target)];
  } else if (stat?.isDirectory()) {
    // Directory — find all .mdx
    baseDir = target;
    files = await glob('**/*.mdx', { cwd: target });
  } else {
    // Treat as glob pattern
    baseDir = '.';
    files = await glob(target);
  }

  // Load all language caches for anchor-based alignment
  const { langs: langConfigs } = await loadLangConfigs(opts.configPath);
  const caches = new Map<string, TranslationCache>();
  for (const lang of Object.keys(langConfigs)) {
    const c = new TranslationCache(opts.cacheDir);
    try {
      c.load(lang);
      caches.set(lang, c);
    } catch {
      // no cache for this language
    }
  }

  console.log(`📝 Annotating ${files.length} file(s)`);
  console.log(`   Caches loaded: ${[...caches.keys()].join(', ') || 'none'}\n`);

  let annotatedCount = 0;
  let skippedCount = 0;
  let noSourceCount = 0;
  for (const relPath of files) {
    const filePath = path.join(baseDir, relPath);
    const content = fs.readFileSync(filePath, 'utf8');

    // Skip if already annotated
    if (content.includes('{/* md5:')) {
      skippedCount++;
      continue;
    }

    // Try to find corresponding English source file
    // Strategy: replace the language code segment in the path with 'en'
    // e.g., content/zh-hans/docs/foo.mdx → content/en/docs/foo.mdx
    //        content-v15/ja/docs/foo.mdx → content-v15/en/docs/foo.mdx
    const fullPath = path.resolve(filePath);
    const langs = ['zh-hans', 'zh-hant', 'ja', 'es', 'de', 'fr', 'ru', 'ar'];
    let enSourcePath = '';
    for (const lang of langs) {
      const langSegment = `/${lang}/`;
      if (fullPath.includes(langSegment)) {
        enSourcePath = fullPath.replace(langSegment, '/en/');
        break;
      }
    }
    // Fallback: try --docs-root + relPath
    if (!enSourcePath) {
      enSourcePath = path.join(opts.docsRoot, relPath);
    }
    let sourceText: string | undefined;
    if (enSourcePath && fs.existsSync(enSourcePath)) {
      sourceText = fs.readFileSync(enSourcePath, 'utf8');
    }

    // Detect language from path for cache lookup
    let detectedLang = '';
    const knownLangs = [
      'zh-hans',
      'zh-hant',
      'ja',
      'es',
      'de',
      'fr',
      'ru',
      'ar',
    ];
    for (const lang of knownLangs) {
      if (fullPath.includes(`/${lang}/`)) {
        detectedLang = lang;
        break;
      }
    }
    const langCache = detectedLang ? caches.get(detectedLang) : undefined;

    const result = annotate(
      content,
      sourceText,
      langCache,
      detectedLang || undefined,
    );
    fs.writeFileSync(filePath, result, 'utf8');
    annotatedCount++;
    if (!sourceText) noSourceCount++;
    console.log(
      `  ✅ ${filePath}${sourceText ? '' : ' (no EN source, using translated MD5)'}`,
    );
  }

  console.log(
    `\n📝 Done: ${annotatedCount} annotated, ${skippedCount} already had annotations${noSourceCount > 0 ? `, ${noSourceCount} without EN source` : ''}.`,
  );
}

// ── Lookup Mode ──────────────────────────────────────────────────────

async function runLookup(opts: CliOptions): Promise<void> {
  const md5 = opts.lookup;
  const files = await glob(opts.pattern, { cwd: opts.docsRoot });

  console.log(`🔍 Looking up MD5: ${md5}`);
  console.log(`   Scanning: ${opts.docsRoot} (${files.length} files)\n`);

  let found = false;
  for (const relPath of files) {
    const content = fs.readFileSync(path.join(opts.docsRoot, relPath), 'utf8');
    const nodes = parseMdx(content);
    for (const node of nodes) {
      if (node.md5 === md5) {
        console.log(`📄 ${relPath}:`);
        console.log(`   Type: ${node.type}`);
        console.log(`   Text:\n${node.rawText}\n`);
        found = true;
      }
    }
  }

  if (!found) {
    console.log('❌ Not found in any source file.');
  }

  // Also show cached translations
  const { langs } = await loadLangConfigs(opts.configPath);
  let hasTranslation = false;
  for (const lang of Object.keys(langs)) {
    const cache = new TranslationCache(opts.cacheDir);
    try {
      cache.load(lang);
    } catch {
      continue;
    }
    const val = cache.get(lang, md5);
    if (val) {
      if (!hasTranslation) {
        console.log('🌐 Cached translations:');
        hasTranslation = true;
      }
      console.log(
        `   ${lang}: ${val.substring(0, 120).replace(/\n/g, '↵')}${val.length > 120 ? '...' : ''}`,
      );
    }
  }
  if (!hasTranslation) {
    console.log('🌐 No cached translations found.');
  }
}

// ── Main ─────────────────────────────────────────────────────────────

async function main() {
  const opts = parseArgs(process.argv);

  if (opts.repair) {
    await runRepair(opts);
  } else if (opts.annotateFiles) {
    await runAnnotate(opts);
  } else if (opts.lookup) {
    await runLookup(opts);
  } else if (opts.status) {
    await runStatus(opts);
  } else {
    await runTranslate(opts);
  }
}

main().catch((err) => {
  console.error('❌ Pipeline failed:', err.message);
  process.exit(1);
});
