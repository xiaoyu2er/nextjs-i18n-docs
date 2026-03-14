/**
 * Demo script: run the incremental translation pipeline on test files.
 * Usage: npx tsx packages/translate/src/pipeline-demo.ts
 *
 * This writes output to tmp/pipeline-demo/ for manual inspection.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { assemble } from './assembler';
import { TranslationCache } from './cache';
import { parseMdx } from './parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_ROOT = path.resolve(__dirname, '../../../apps/docs/content/en');
const OUTPUT_DIR = path.resolve(__dirname, '../../../tmp/pipeline-demo');
const CACHE_DIR = path.join(OUTPUT_DIR, 'cache');

const TEST_FILES = [
  'docs/01-app/01-getting-started/01-installation.mdx',
  'docs/01-app/05-api-reference/02-components/image.mdx',
];

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(CACHE_DIR, { recursive: true });

  const cache = new TranslationCache(CACHE_DIR);
  try {
    cache.load('zh-hans');
  } catch {
    // no existing cache
  }

  for (const relPath of TEST_FILES) {
    const sourcePath = path.join(DOCS_ROOT, relPath);
    const content = fs.readFileSync(sourcePath, 'utf8');

    console.log(`\n${'='.repeat(60)}`);
    console.log(`File: ${relPath}`);

    // Parse
    const nodes = parseMdx(content);
    const translatable = nodes.filter((n) => n.needsTranslation);
    const nonTranslatable = nodes.filter((n) => !n.needsTranslation);
    console.log(`  Nodes: ${nodes.length} total`);
    console.log(
      `  Translatable: ${translatable.length} (${translatable.reduce((s, n) => s + n.rawText.length, 0)} chars)`,
    );
    console.log(
      `  Non-translatable: ${nonTranslatable.length} (${nonTranslatable.reduce((s, n) => s + n.rawText.length, 0)} chars)`,
    );

    // Assemble
    const result = assemble(content, 'zh-hans', cache);
    console.log(
      `  Cache: ${result.cachedCount}/${result.totalTranslatable} cached, ${result.uncachedCount} need translation`,
    );
    console.log(`  All cached: ${result.allCached}`);

    // Write assembled output for inspection
    const outputPath = path.join(OUTPUT_DIR, 'zh-hans', relPath);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, result.content, 'utf8');
    console.log(`  Output: ${outputPath}`);
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log('Done. Inspect output files in:', OUTPUT_DIR);
  console.log(
    'Next step: give the output files to pi for translation of NEEDS_TRANSLATION sections.',
  );
}

main();
