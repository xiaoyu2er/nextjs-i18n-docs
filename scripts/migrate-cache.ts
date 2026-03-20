#!/usr/bin/env bun
/**
 * Migrate translation cache from JSONL files to SQLite database.
 *
 * Usage:
 *   bun run scripts/migrate-cache.ts              # migrate .cache/*.jsonl → .cache/translations.db
 *   bun run scripts/migrate-cache.ts --verify     # verify after migration
 *   bun run scripts/migrate-cache.ts --export     # export SQLite → .cache/*.jsonl (reverse)
 */
import fs from 'node:fs';
import path from 'node:path';
import { TranslationCache } from '../packages/translate/src/cache';

const ROOT = path.resolve(import.meta.dirname!, '..');
const CACHE_DIR = path.join(ROOT, '.cache');
const LANGS = ['zh-hans', 'zh-hant', 'ja', 'ar', 'de', 'es', 'fr', 'ru'];

const args = process.argv.slice(2);
const isVerify = args.includes('--verify');
const isExport = args.includes('--export');

if (isExport) {
  exportToJsonl();
} else if (isVerify) {
  verify();
} else {
  migrate();
}

function migrate() {
  const dbPath = path.join(CACHE_DIR, 'translations.db');

  if (fs.existsSync(dbPath)) {
    console.log(`⚠ Database already exists: ${dbPath}`);
    console.log('  Delete it first if you want to re-migrate.');
    process.exit(1);
  }

  console.log('📦 Migrating JSONL → SQLite...\n');

  const cache = new TranslationCache(CACHE_DIR);
  const start = Date.now();
  let totalEntries = 0;

  for (const lang of LANGS) {
    const jsonlPath = path.join(CACHE_DIR, `${lang}.jsonl`);
    if (!fs.existsSync(jsonlPath)) {
      console.log(`  ${lang}: no JSONL file, skipping`);
      continue;
    }

    const count = cache.importJsonl(lang, jsonlPath);
    totalEntries += count;
    console.log(`  ${lang}: ${count.toLocaleString()} entries imported`);
  }

  cache.close();

  const elapsed = Date.now() - start;
  const dbSize = fs.statSync(dbPath).size;

  console.log(`\n✅ Migration complete in ${elapsed}ms`);
  console.log(
    `   ${totalEntries.toLocaleString()} entries → ${(dbSize / 1024 / 1024).toFixed(1)} MB`,
  );
  console.log(`   Database: ${dbPath}`);
  console.log('\nRun with --verify to check data integrity.');
}

function verify() {
  console.log('🔍 Verifying SQLite ↔ JSONL consistency...\n');

  const cache = new TranslationCache(CACHE_DIR);
  let allGood = true;

  for (const lang of LANGS) {
    const jsonlPath = path.join(CACHE_DIR, `${lang}.jsonl`);
    if (!fs.existsSync(jsonlPath)) continue;

    // Count JSONL entries
    const lines = fs
      .readFileSync(jsonlPath, 'utf8')
      .split('\n')
      .filter((l) => l.trim());
    const jsonlCount = lines.length;

    // Count SQLite entries
    const sqliteCount = cache.stats(lang).size;

    const match = jsonlCount === sqliteCount;
    const icon = match ? '✅' : '❌';
    console.log(
      `  ${icon} ${lang}: JSONL=${jsonlCount}, SQLite=${sqliteCount}`,
    );

    if (!match) {
      allGood = false;
    }

    // Spot check a few entries
    let checked = 0;
    let mismatched = 0;
    for (const line of lines.slice(0, 100)) {
      const entry = JSON.parse(line);
      const cached = cache.get(lang, entry.k);
      if (cached !== entry.v) {
        mismatched++;
        if (mismatched <= 3) {
          console.log(`    Mismatch: key=${entry.k.substring(0, 12)}…`);
        }
      }
      checked++;
    }
    if (checked > 0) {
      console.log(
        `    Spot-checked ${checked} entries: ${mismatched} mismatches`,
      );
    }
  }

  cache.close();

  if (allGood) {
    console.log('\n✅ All counts match.');
  } else {
    console.log('\n❌ Some counts do not match. Re-run migration.');
    process.exit(1);
  }
}

function exportToJsonl() {
  console.log('📤 Exporting SQLite → JSONL...\n');

  const cache = new TranslationCache(CACHE_DIR);

  for (const lang of LANGS) {
    const outputPath = path.join(CACHE_DIR, `${lang}.jsonl`);
    const count = cache.exportJsonl(lang, outputPath);
    console.log(`  ${lang}: ${count.toLocaleString()} entries exported`);
  }

  cache.close();
  console.log('\n✅ Export complete.');
}
