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
  NEEDS_TRANSLATION_END,
  NEEDS_TRANSLATION_START,
} from './assembler';
import { executeInBatches } from './batch';
import { TranslationCache } from './cache';
import { validateMdx } from './mdx-validator';
import { parseMdx } from './parser';
import {
  needsTranslation,
  type TranslateOptions,
  translateAssembled,
} from './translator';
import { validate } from './validator';

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
    annotateFiles: getOpt('annotate', ''),
    lookup: getOpt('lookup', ''),
    configPath: getOpt('config', 'translation.config.example.mjs'),
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
    const annotated = annotate(assembleResult.content);
    fs.writeFileSync(finalPath, annotated, 'utf8');
    const mdxResult = validateMdx(annotated);
    return {
      status: 'cached',
      newTranslations: 0,
      diffs: 0,
      mdxErrors: mdxResult.errors.map((e) => e.message),
    };
  }

  if (opts.dryRun || !needsTranslation(assembleResult.content)) {
    return { status: 'skipped', newTranslations: 0, diffs: 0, mdxErrors: [] };
  }

  // Translate via API
  const translatedContent = await translateAssembled({
    assembledContent: assembleResult.content,
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

  // Validate and update cache
  const validateResult = validate(
    sourceContent,
    translatedContent,
    opts.lang,
    cache,
    relPath,
  );

  // Write final output
  let finalContent = validateResult.correctedContent;

  // Strip any leftover NEEDS_TRANSLATION markers
  if (finalContent.includes(NEEDS_TRANSLATION_START)) {
    finalContent = finalContent
      .replace(new RegExp(`${NEEDS_TRANSLATION_START}\\n?`, 'g'), '')
      .replace(new RegExp(`\\n?${NEEDS_TRANSLATION_END}`, 'g'), '');
  }

  const finalPath = path.join(opts.outputDir, opts.lang, relPath);
  fs.mkdirSync(path.dirname(finalPath), { recursive: true });
  const annotatedFinal = annotate(finalContent);
  fs.writeFileSync(finalPath, annotatedFinal, 'utf8');

  const mdxResult = validateMdx(annotatedFinal);

  return {
    status: 'translated',
    newTranslations: validateResult.newTranslations,
    diffs: validateResult.diffs.length,
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
        fs.writeFileSync(finalPath, annotate(assembleResult.content), 'utf8');
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

  console.log(`📝 Annotating ${files.length} file(s)\n`);

  let annotated = 0;
  for (const relPath of files) {
    const filePath = path.join(baseDir, relPath);
    const content = fs.readFileSync(filePath, 'utf8');

    // Skip if already annotated
    if (content.includes('{/* md5:')) {
      continue;
    }

    const result = annotate(content);
    fs.writeFileSync(filePath, result, 'utf8');
    annotated++;
    console.log(`  ✅ ${filePath}`);
  }

  console.log(
    `\n📝 Annotated ${annotated} file(s), ${files.length - annotated} already had annotations.`,
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

  if (opts.annotateFiles) {
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
