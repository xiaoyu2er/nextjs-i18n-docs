/**
 * Batch translation pipeline — translate multiple files.
 *
 * Usage:
 *   pnpm exec tsx packages/translate/src/batch.pipeline.ts [options]
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
import { assemble } from './assembler';
import { TranslationCache } from './cache';
import { needsTranslation, translateAssembled } from './translator';
import { validate } from './validator';

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
    cacheDir: path.resolve(
      PROJECT_ROOT,
      getOpt('cache-dir', 'tmp/batch-output/cache'),
    ),
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
    guide: getOpt(
      'guide',
      `- For technical terms that should not be fully translated, use the format: "中文翻译 (English term)"
- Add a space between Chinese characters and English words/symbols
- Maintain consistent translations for common terms`,
    ),
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
}> {
  const sourceContent = fs.readFileSync(sourcePath, 'utf8');
  const assembleResult = assemble(sourceContent, opts.lang, cache);

  if (assembleResult.allCached) {
    // Write directly from cache
    const finalPath = path.join(opts.outputDir, opts.lang, relPath);
    fs.mkdirSync(path.dirname(finalPath), { recursive: true });
    fs.writeFileSync(finalPath, assembleResult.content, 'utf8');
    return { status: 'cached', newTranslations: 0, diffs: 0 };
  }

  if (opts.dryRun || !needsTranslation(assembleResult.content)) {
    return { status: 'skipped', newTranslations: 0, diffs: 0 };
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

  return {
    status: 'translated',
    newTranslations: validateResult.newTranslations,
    diffs: validateResult.diffs.length,
  };
}

async function main() {
  const opts = parseArgs(process.argv);

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
  } catch {
    console.log('📦 No existing cache');
  }

  let totalCached = 0;
  let totalTranslated = 0;
  let totalSkipped = 0;
  let totalNewTranslations = 0;
  let totalDiffs = 0;

  for (let i = 0; i < filesToProcess.length; i++) {
    const relPath = filesToProcess[i];
    const sourcePath = path.join(opts.docsRoot, relPath);
    const progress = `[${i + 1}/${filesToProcess.length}]`;

    try {
      const result = await translateFile(sourcePath, relPath, opts, cache);

      if (result.status === 'cached') {
        totalCached++;
        console.log(`${progress} ✅ ${relPath} (all cached)`);
      } else if (result.status === 'translated') {
        totalTranslated++;
        totalNewTranslations += result.newTranslations;
        totalDiffs += result.diffs;
        console.log(
          `${progress} 🔤 ${relPath} (+${result.newTranslations} cached${result.diffs > 0 ? `, ${result.diffs} diffs` : ''})`,
        );

        // Save cache after each translation
        cache.save(opts.lang);
      } else {
        totalSkipped++;
        console.log(`${progress} ⏭️  ${relPath} (skipped)`);
      }
    } catch (err) {
      console.error(
        `${progress} ❌ ${relPath}: ${err instanceof Error ? err.message : err}`,
      );
    }
  }

  // Final cache save
  cache.save(opts.lang);

  console.log(`\n${'='.repeat(60)}`);
  console.log('📊 Summary:');
  console.log(`   Cached (no API call): ${totalCached}`);
  console.log(`   Translated: ${totalTranslated}`);
  console.log(`   Skipped: ${totalSkipped}`);
  console.log(`   New translations cached: ${totalNewTranslations}`);
  console.log(`   Diffs: ${totalDiffs}`);
  console.log(`   Cache size: ${cache.stats(opts.lang).size} entries`);
  console.log(`   Output: ${path.join(opts.outputDir, opts.lang)}`);
}

main().catch((err) => {
  console.error('❌ Batch pipeline failed:', err.message);
  process.exit(1);
});
