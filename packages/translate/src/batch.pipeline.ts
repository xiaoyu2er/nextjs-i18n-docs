/**
 * Batch translation pipeline — translate multiple files.
 *
 * Usage:
 *   bun run packages/translate/src/batch.pipeline.ts [options]
 *
 * Options:
 *   --docs-root     Source docs root (default: apps/docs/content/en)
 *   --output-dir    Output directory (default: tmp/batch-output)
 *   --cache-dir     Cache directory (default: tmp/batch-output/cache)
 *   --lang          Target language code (default: zh-hans)
 *   --lang-name     Target language name (default: Simplified Chinese)
 *   --pattern       Glob pattern to match files (default: all .mdx)
 *   --max           Max files to process (default: all)
 *   --api-type      Translation engine: pi, openai, anthropic (default: openai)
 *   --api-base-url  API base URL
 *   --api-key       API key
 *   --model         Model name
 *   --provider      Provider (for pi mode)
 *   --dry-run       Only assemble, don't translate
 *   --concurrency   Number of concurrent translations (default: 1, only for sdk modes)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import {
  NEEDS_TRANSLATION_END,
  NEEDS_TRANSLATION_START,
  assemble,
} from './assembler';
import { executeInBatches } from './batch';
import { TranslationCache } from './cache';
import { validateMdx } from './mdx-validator';
import { needsTranslation, translateAssembled } from './translator';
import { validate } from './validator';

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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '../../..');

function parseArgs(argv: string[]) {
  const args = argv.slice(2);
  const getOpt = (name: string, def: string) => {
    const idx = args.indexOf(`--${name}`);
    return idx >= 0 && idx + 1 < args.length ? args[idx + 1] : def;
  };
  const hasFlag = (name: string) => args.includes(`--${name}`);

  return {
    docsRoot: path.resolve(
      PROJECT_ROOT,
      getOpt('docs-root', 'apps/docs/content/en'),
    ),
    outputDir: path.resolve(
      PROJECT_ROOT,
      getOpt('output-dir', 'tmp/batch-output'),
    ),
    cacheDir: path.resolve(PROJECT_ROOT, getOpt('cache-dir', '.cache')),
    lang: getOpt('lang', 'zh-hans'),
    langName: getOpt('lang-name', 'Simplified Chinese'),
    pattern: getOpt('pattern', '**/*.mdx'),
    max: Number.parseInt(getOpt('max', '999999'), 10),
    apiType: getOpt('api-type', 'openai') as 'openai' | 'anthropic' | 'pi',
    apiBaseUrl: getOpt('api-base-url', ''),
    apiKey: getOpt('api-key', ''),
    model: getOpt('model', ''),
    provider: getOpt('provider', ''),
    concurrency: Number.parseInt(getOpt('concurrency', '1'), 10),
    dryRun: hasFlag('dry-run'),
    guide: getOpt('guide', ''),
    configPath: getOpt('config', 'apps/docs/translation.config.mjs'),
  };
}

async function translateFile(
  sourcePath: string,
  relPath: string,
  opts: ReturnType<typeof parseArgs>,
  cache: TranslationCache,
): Promise<{
  status: 'cached' | 'translated' | 'skipped';
  newTranslations: number;
  diffs: number;
  mdxErrors: string[];
}> {
  const sourceContent = fs.readFileSync(sourcePath, 'utf8');
  const assembleResult = assemble(sourceContent, opts.lang, cache, relPath);

  if (assembleResult.allCached) {
    // Write directly from cache
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

  if (opts.dryRun || !needsTranslation(assembleResult.content)) {
    return { status: 'skipped', newTranslations: 0, diffs: 0, mdxErrors: [] };
  }

  // Translate
  const translatedContent = await translateAssembled({
    assembledContent: assembleResult.content,
    langName: opts.langName,
    guide: opts.guide,
    apiType: opts.apiType,
    apiBaseUrl: opts.apiBaseUrl || undefined,
    apiKey: opts.apiKey || undefined,
    model: opts.model || undefined,
    provider: opts.provider || undefined,
    docsContext:
      opts.docsContext ||
      'Next.js is a React framework for building full-stack web applications.',
  });

  // Validate
  const validateResult = validate(
    sourceContent,
    translatedContent,
    opts.lang,
    cache,
  );

  if (validateResult.diffs.length > 0) {
    const diffLogPath = path.join(opts.outputDir, 'diffs', `${relPath}.json`);
    fs.mkdirSync(path.dirname(diffLogPath), { recursive: true });
    fs.writeFileSync(
      diffLogPath,
      JSON.stringify(validateResult.diffs, null, 2),
      'utf8',
    );
  }

  // Write final output
  const finalPath = path.join(opts.outputDir, opts.lang, relPath);
  fs.mkdirSync(path.dirname(finalPath), { recursive: true });
  fs.writeFileSync(finalPath, validateResult.correctedContent, 'utf8');

  // Strip any leftover NEEDS_TRANSLATION markers (model didn't remove them)
  let finalContent = validateResult.correctedContent;
  if (finalContent.includes(NEEDS_TRANSLATION_START)) {
    finalContent = finalContent
      .replace(new RegExp(`${NEEDS_TRANSLATION_START}\\n?`, 'g'), '')
      .replace(new RegExp(`\\n?${NEEDS_TRANSLATION_END}`, 'g'), '');
    // Re-write the file with cleaned content
    fs.writeFileSync(finalPath, finalContent, 'utf8');
  }

  // Validate MDX
  const mdxResult = validateMdx(finalContent);

  return {
    status: 'translated',
    newTranslations: validateResult.newTranslations,
    diffs: validateResult.diffs.length,
    mdxErrors: mdxResult.errors.map((e) => e.message),
  };
}

async function main() {
  const opts = parseArgs(process.argv) as ReturnType<typeof parseArgs> & {
    docsContext?: string;
  };

  // Load language config from translation.config.mjs if no guide provided
  if (!opts.guide) {
    try {
      const configPath = path.resolve(PROJECT_ROOT, opts.configPath);
      const config = (await import(configPath)).default;
      const langConfig = config.langs?.[opts.lang];
      if (langConfig) {
        if (opts.langName === 'Simplified Chinese') {
          opts.langName = langConfig.name;
        }
        opts.guide = langConfig.guide || '';
      }
      if (config.docsContext) {
        opts.docsContext = config.docsContext;
      }
    } catch {
      // Config not found, use defaults
    }
  }

  console.log('\n📦 Batch Translation Pipeline');
  console.log(`   Source: ${opts.docsRoot}`);
  console.log(`   Target: ${opts.lang} (${opts.langName})`);
  console.log(`   Engine: ${opts.apiType}`);
  console.log(`   Pattern: ${opts.pattern}`);

  // Find files
  const files = await glob(opts.pattern, { cwd: opts.docsRoot });
  const filesToProcess = files.slice(0, opts.max);
  console.log(
    `   Files: ${filesToProcess.length}${files.length > opts.max ? ` (limited from ${files.length})` : ''}\n`,
  );

  // Load cache
  const cache = new TranslationCache(opts.cacheDir);
  try {
    cache.load(opts.lang);
    console.log(`📦 Cache loaded: ${cache.stats(opts.lang).size} entries`);
    // Clear source locations for fresh rebuild
    cache.clearSources(opts.lang);
  } catch {
    console.log('📦 No existing cache');
  }

  let totalCached = 0;
  let totalTranslated = 0;
  let totalSkipped = 0;
  let totalNewTranslations = 0;
  let totalDiffs = 0;
  let totalMdxErrors = 0;
  let totalErrors = 0;
  const mdxErrorFiles: string[] = [];
  const startTime = Date.now();
  const fileTimes: number[] = [];
  let completed = 0;

  // Separate cached files (instant) from files needing translation (API calls)
  const cachedFiles: string[] = [];
  const translateFiles: string[] = [];

  for (const relPath of filesToProcess) {
    const sourcePath = path.join(opts.docsRoot, relPath);
    const sourceContent = fs.readFileSync(sourcePath, 'utf8');
    const assembleResult = assemble(sourceContent, opts.lang, cache, relPath);

    if (assembleResult.allCached) {
      cachedFiles.push(relPath);
      // Write immediately
      const finalPath = path.join(opts.outputDir, opts.lang, relPath);
      fs.mkdirSync(path.dirname(finalPath), { recursive: true });
      fs.writeFileSync(finalPath, assembleResult.content, 'utf8');

      const mdxResult = validateMdx(assembleResult.content);
      const mdxStatus =
        mdxResult.errors.length > 0
          ? ` ⚠️ MDX: ${mdxResult.errors.map((e) => e.message).join('; ')}`
          : '';
      if (mdxResult.errors.length > 0) {
        totalMdxErrors += mdxResult.errors.length;
        mdxErrorFiles.push(relPath);
      }
      totalCached++;
      completed++;
      console.log(
        `[${completed}/${filesToProcess.length}] 💾 ${relPath} (all cached)${mdxStatus}`,
      );
    } else {
      translateFiles.push(relPath);
    }
  }

  console.log(
    `\n📦 ${cachedFiles.length} files from cache, ${translateFiles.length} files need translation (concurrency: ${opts.concurrency})\n`,
  );

  // Translate files with concurrency
  await executeInBatches(
    translateFiles,
    async (relPath) => {
      const sourcePath = path.join(opts.docsRoot, relPath);
      const fileStart = Date.now();

      completed++;
      const progress = `[${completed}/${filesToProcess.length}]`;
      console.log(`${progress} ⏳ ${relPath}...`);

      try {
        const result = await translateFile(sourcePath, relPath, opts, cache);

        const fileElapsed = Date.now() - fileStart;
        fileTimes.push(fileElapsed);

        const elapsed = Date.now() - startTime;
        const remaining = filesToProcess.length - completed;
        const avgTime =
          fileTimes.length > 0
            ? fileTimes.reduce((a, b) => a + b, 0) / fileTimes.length
            : 0;
        const eta = remaining * (avgTime / opts.concurrency);
        const elapsedStr = formatDuration(elapsed);
        const etaStr = remaining > 0 && avgTime > 0 ? formatDuration(eta) : '-';
        const timeInfo = `[${elapsedStr} elapsed, ETA ${etaStr}]`;

        const mdxStatus =
          result.mdxErrors.length > 0
            ? ` ⚠️ MDX: ${result.mdxErrors.join('; ')}`
            : '';
        if (result.mdxErrors.length > 0) {
          totalMdxErrors += result.mdxErrors.length;
          mdxErrorFiles.push(relPath);
        }

        if (result.status === 'translated') {
          totalTranslated++;
          totalNewTranslations += result.newTranslations;
          totalDiffs += result.diffs;
          console.log(
            `${progress} ✅ ${relPath} (+${result.newTranslations} cached${result.diffs > 0 ? `, ${result.diffs} diffs` : ''})${mdxStatus} ${timeInfo}`,
          );
          cache.save(opts.lang);
        } else {
          totalSkipped++;
          console.log(`${progress} ⏭️  ${relPath} (skipped)`);
        }
      } catch (err) {
        totalErrors++;
        console.error(
          `${progress} ❌ ${relPath}: ${err instanceof Error ? err.message : err}`,
        );
      }
    },
    opts.concurrency,
  );

  // Final cache save
  cache.save(opts.lang);
  cache.exportIndex(opts.lang);

  console.log(`\n${'='.repeat(60)}`);
  console.log('📊 Summary:');
  console.log(`   Cached (no API call): ${totalCached}`);
  console.log(`   Translated: ${totalTranslated}`);
  console.log(`   Skipped: ${totalSkipped}`);
  console.log(`   New translations cached: ${totalNewTranslations}`);
  console.log(`   Errors: ${totalErrors}`);
  console.log(`   Diffs: ${totalDiffs}`);
  console.log(`   MDX errors: ${totalMdxErrors}`);
  if (mdxErrorFiles.length > 0) {
    for (const f of mdxErrorFiles) {
      console.log(`     ⚠️  ${f}`);
    }
  }
  console.log(`   Cache size: ${cache.stats(opts.lang).size} entries`);
  console.log(`   Total time: ${formatDuration(Date.now() - startTime)}`);
  console.log(`   Output: ${path.join(opts.outputDir, opts.lang)}`);
}

main().catch((err) => {
  console.error('❌ Batch pipeline failed:', err.message);
  process.exit(1);
});
