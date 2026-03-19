/**
 * End-to-end incremental translation pipeline.
 *
 * Usage:
 *   OPENAI_API_KEY=xxx bun run packages/translate/src/pipeline.ts <source-file> [options]
 *
 * Example:
 *   OPENAI_API_KEY=xxx bun run packages/translate/src/pipeline.ts \
 *     apps/docs/content/en/docs/01-app/01-getting-started/01-installation.mdx \
 *     --lang zh-hans --lang-name "Simplified Chinese"
 *
 * Options:
 *   --lang          Target language code (default: zh-hans)
 *   --lang-name     Target language name (default: Simplified Chinese)
 *   --output-dir    Output directory (default: tmp/pipeline-output)
 *   --cache-dir     Cache directory (default: tmp/pipeline-output/cache)
 *   --dry-run       Only assemble, don't translate
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { assemble } from './assembler';
import { TranslationCache } from './cache';
import { needsTranslation, translateAssembled } from './translator';
import { validate } from './validator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '../../..');

function parseArgs(argv: string[]) {
  const args = argv.slice(2);
  const sourceFile = args.find((a) => !a.startsWith('--'));
  const getOpt = (name: string, def: string) => {
    const idx = args.indexOf(`--${name}`);
    return idx >= 0 && idx + 1 < args.length ? args[idx + 1] : def;
  };
  const hasFlag = (name: string) => args.includes(`--${name}`);

  return {
    sourceFile: sourceFile ? path.resolve(PROJECT_ROOT, sourceFile) : undefined,
    lang: getOpt('lang', 'zh-hans'),
    langName: getOpt('lang-name', 'Simplified Chinese'),
    outputDir: path.resolve(
      PROJECT_ROOT,
      getOpt('output-dir', 'tmp/pipeline-output'),
    ),
    cacheDir: path.resolve(PROJECT_ROOT, getOpt('cache-dir', '.cache')),
    apiKey: getOpt('api-key', ''),
    apiType: getOpt('api-type', 'pi') as 'openai' | 'anthropic' | 'pi',
    apiBaseUrl: getOpt('api-base-url', ''),
    model: getOpt('model', ''),
    provider: getOpt('provider', ''),
    dryRun: hasFlag('dry-run'),
    guide: getOpt(
      'guide',
      `- For technical terms that should not be fully translated, use the format: "中文翻译 (English term)"
- Add a space between Chinese characters and English words/symbols
- Maintain consistent translations for common terms`,
    ),
  };
}

async function main() {
  const opts = parseArgs(process.argv);

  if (!opts.sourceFile) {
    console.error(
      'Usage: bun run packages/translate/src/pipeline.ts <source-file> [options]',
    );
    process.exit(1);
  }

  if (!fs.existsSync(opts.sourceFile)) {
    console.error(`Source file not found: ${opts.sourceFile}`);
    process.exit(1);
  }

  const relPath = path.relative(
    path.join(PROJECT_ROOT, 'apps/docs/content/en'),
    opts.sourceFile,
  );
  console.log(`\n📄 Source: ${relPath}`);
  console.log(`🌐 Target: ${opts.lang} (${opts.langName})`);

  // 1. Load cache
  const cache = new TranslationCache(opts.cacheDir);
  try {
    cache.load(opts.lang);
    console.log(`📦 Cache loaded from: ${opts.cacheDir}/${opts.lang}.json`);
  } catch {
    console.log('📦 No existing cache, starting fresh');
  }

  // 2. Read source and assemble
  const sourceContent = fs.readFileSync(opts.sourceFile, 'utf8');
  const assembleResult = assemble(sourceContent, opts.lang, cache);

  console.log(
    `\n📊 Nodes: ${assembleResult.totalTranslatable} translatable, ${assembleResult.cachedCount} cached, ${assembleResult.uncachedCount} need translation`,
  );

  // 3. Write assembled file for reference
  const assembledPath = path.join(opts.outputDir, 'assembled', relPath);
  fs.mkdirSync(path.dirname(assembledPath), { recursive: true });
  fs.writeFileSync(assembledPath, assembleResult.content, 'utf8');
  console.log(`📝 Assembled: ${assembledPath}`);

  if (assembleResult.allCached) {
    console.log('\n✅ All nodes cached! Writing final output directly.');
    const finalPath = path.join(opts.outputDir, opts.lang, relPath);
    fs.mkdirSync(path.dirname(finalPath), { recursive: true });
    fs.writeFileSync(finalPath, assembleResult.content, 'utf8');
    console.log(`📄 Output: ${finalPath}`);
    return;
  }

  if (opts.dryRun) {
    console.log('\n🔍 Dry run — skipping translation. Inspect assembled file.');
    return;
  }

  if (!needsTranslation(assembleResult.content)) {
    console.log('\n✅ No NEEDS_TRANSLATION markers found. Nothing to do.');
    return;
  }

  // 4. Translate
  console.log(
    `\n🤖 Translating ${assembleResult.uncachedCount} nodes via ${opts.apiType}...`,
  );
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

  // 5. Write raw translation for reference
  const rawTranslatedPath = path.join(
    opts.outputDir,
    'raw-translated',
    relPath,
  );
  fs.mkdirSync(path.dirname(rawTranslatedPath), { recursive: true });
  fs.writeFileSync(rawTranslatedPath, translatedContent, 'utf8');
  console.log(`📝 Raw translation: ${rawTranslatedPath}`);

  // 6. Validate and update cache
  const validateResult = validate(
    sourceContent,
    translatedContent,
    opts.lang,
    cache,
  );

  console.log('\n📊 Validation:');
  console.log(`   New translations cached: ${validateResult.newTranslations}`);
  console.log(`   Diffs (pi modified cached): ${validateResult.diffs.length}`);

  if (validateResult.diffs.length > 0) {
    // Write diff log
    const diffLogPath = path.join(opts.outputDir, 'diffs', `${relPath}.json`);
    fs.mkdirSync(path.dirname(diffLogPath), { recursive: true });
    fs.writeFileSync(
      diffLogPath,
      JSON.stringify(validateResult.diffs, null, 2),
      'utf8',
    );
    console.log(`   Diff log: ${diffLogPath}`);
  }

  // 7. Save cache
  cache.save(opts.lang);
  console.log(`📦 Cache saved: ${opts.cacheDir}/${opts.lang}.json`);

  // 8. Write final corrected output
  const finalPath = path.join(opts.outputDir, opts.lang, relPath);
  fs.mkdirSync(path.dirname(finalPath), { recursive: true });
  fs.writeFileSync(finalPath, validateResult.correctedContent, 'utf8');
  console.log(`\n✅ Done! Output: ${finalPath}`);
}

main().catch((err) => {
  console.error('❌ Pipeline failed:', err.message);
  process.exit(1);
});
