#!/usr/bin/env bun
/**
 * Rescan EN source files and rebuild source_files table.
 * Clears stale MD5 keys from previous EN content versions.
 *
 * Usage:
 *   bun run rescan                   # All versions
 *   bun run rescan -- --version latest  # Single version
 */

import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { TranslationCache } from '../packages/translate/src/cache';
import { parseMdx } from '../packages/translate/src/parser';

const ROOT = resolve(import.meta.dirname!, '..');
const CACHE_DIR = join(ROOT, '.cache');

const VERSIONS = [
  { version: 'latest', dir: 'content' },
  { version: 'v13', dir: 'content-v13' },
  { version: 'v14', dir: 'content-v14' },
  { version: 'v15', dir: 'content-v15' },
];

const args = process.argv.slice(2);
const filterVersion =
  args.indexOf('--version') >= 0 ? args[args.indexOf('--version') + 1] : null;
const versions = filterVersion
  ? VERSIONS.filter((v) => v.version === filterVersion)
  : VERSIONS;

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

const t0 = Date.now();
const cache = new TranslationCache(CACHE_DIR);

for (const vDef of versions) {
  const enDir = join(ROOT, vDef.dir, 'en');
  if (!existsSync(enDir)) {
    console.log(`⚠ ${vDef.version}: EN dir not found, skipping`);
    continue;
  }

  const files = walkMdx(enDir);
  cache.clearSources('', vDef.version);

  let nodeCount = 0;
  for (const file of files) {
    const relPath = file.slice(enDir.length + 1);
    const content = readFileSync(file, 'utf8');
    const nodes = parseMdx(content);

    for (const node of nodes) {
      if (node.needsTranslation && node.md5) {
        const line = content.substring(0, node.startOffset).split('\n').length;
        cache.setSource(node.md5, node.rawText, node.type);
        cache.updateSource('', node.md5, relPath, line, vDef.version);
        nodeCount++;
      }
    }
  }

  console.log(`✅ ${vDef.version}: ${files.length} files, ${nodeCount} nodes`);
}

const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
console.log(`\nDone in ${elapsed}s`);
cache.db.close();
