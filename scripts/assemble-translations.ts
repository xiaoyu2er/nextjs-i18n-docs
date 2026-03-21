#!/usr/bin/env bun
/**
 * Assemble translated files from EN source + translation cache.
 *
 * Source:  content/{version}/        (EN files)
 * Output:  .cache/content/{version}/{lang}/  (assembled translations)
 *
 * Usage:
 *   bun scripts/assemble-translations.ts                    # All versions, all langs
 *   bun scripts/assemble-translations.ts --version latest   # Latest only
 *   bun scripts/assemble-translations.ts --lang zh-hans     # One language only
 */

import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { assemble } from '../packages/translate/src/assembler';
import { TranslationCache } from '../packages/translate/src/cache';

const ROOT = resolve(import.meta.dirname!, '..');
const CACHE_DIR = join(ROOT, '.cache');
const CONTENT_DIR = join(ROOT, 'content');
const OUTPUT_DIR = join(CACHE_DIR, 'content');

const VERSIONS = ['latest', 'v13', 'v14', 'v15'];
const ALL_LANGS = ['zh-hans', 'zh-hant', 'ja', 'ar', 'de', 'es', 'fr', 'ru'];

// ── CLI ──
const args = process.argv.slice(2);
const getOpt = (f: string): string | null => {
  const i = args.indexOf(`--${f}`);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : null;
};

const filterVersion = getOpt('version');
const filterLang = getOpt('lang');
const versions = filterVersion
  ? VERSIONS.filter((v) => v === filterVersion)
  : VERSIONS;
const langs = filterLang ? [filterLang] : ALL_LANGS;

// ── Helpers ──
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

function ensureDir(path: string) {
  mkdirSync(dirname(path), { recursive: true });
}

// ── Main ──
const t0 = Date.now();
const cache = new TranslationCache(CACHE_DIR);

let totalWritten = 0;

for (const version of versions) {
  const enDir = join(CONTENT_DIR, version);
  if (!existsSync(enDir)) {
    console.log(`⚠ ${version}: source dir not found, skipping`);
    continue;
  }

  const enFiles = walkMdx(enDir);

  for (const lang of langs) {
    let written = 0;

    for (const enFile of enFiles) {
      const relPath = enFile.slice(enDir.length + 1);
      const content = readFileSync(enFile, 'utf8');

      const result = assemble(content, lang, cache, relPath, true);

      const outPath = join(OUTPUT_DIR, version, lang, relPath);
      ensureDir(outPath);
      writeFileSync(outPath, result.content);
      written++;
    }

    totalWritten += written;
    console.log(`[${version}/${lang}] ${written} files written`);
  }
}

const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
console.log(`\n✅ Assembled ${totalWritten} files in ${elapsed}s`);

cache.db.close();
