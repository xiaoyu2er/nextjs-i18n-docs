/**
 * Generate MD5 map for all translatable nodes in English source files.
 * Writes to apps/docs/translation-cache/en.jsonl
 *
 * Each line: {"k":"md5","v":"original english text","src":["file:line",...]}
 *
 * This serves as:
 * 1. A reference to see what content each MD5 maps to
 * 2. A way to find which files share the same content (cross-version reuse)
 * 3. IDE-navigable source locations
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'glob';
import { parseMdx } from './parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '../../..');
const DOCS_ROOT = path.join(PROJECT_ROOT, 'apps/docs/content/en');
const CACHE_DIR = path.join(PROJECT_ROOT, 'apps/docs/translation-cache');

interface Md5Entry {
  v: string;
  src: string[];
}

function main() {
  const pattern = process.argv[2] || '**/*.mdx';
  const files = globSync(pattern, { cwd: DOCS_ROOT });

  console.log(`📂 Source: ${DOCS_ROOT}`);
  console.log(`📄 Files: ${files.length}`);
  console.log(`🔍 Pattern: ${pattern}`);
  console.log('');

  const md5Map = new Map<string, Md5Entry>();

  for (const relPath of files) {
    const content = fs.readFileSync(path.join(DOCS_ROOT, relPath), 'utf8');
    const normalizedContent = content; // parseMdx applies normalize internally
    const nodes = parseMdx(content);

    // Count lines for source location
    const lineOffsets: number[] = [0];
    for (let i = 0; i < content.length; i++) {
      if (content[i] === '\n') lineOffsets.push(i + 1);
    }

    for (const node of nodes) {
      if (!node.needsTranslation || !node.md5) continue;

      // Find line number
      let line = 1;
      for (let i = 0; i < lineOffsets.length; i++) {
        if (lineOffsets[i] > node.startOffset) break;
        line = i + 1;
      }

      const loc = `${relPath}:${line}`;

      if (md5Map.has(node.md5)) {
        const entry = md5Map.get(node.md5);
        if (entry && !entry.src.includes(loc)) {
          entry.src.push(loc);
        }
      } else {
        md5Map.set(node.md5, {
          v: node.rawText,
          src: [loc],
        });
      }
    }
  }

  // Write en.jsonl
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  const enPath = path.join(CACHE_DIR, 'en.jsonl');
  const lines: string[] = [];
  for (const [k, entry] of md5Map) {
    lines.push(JSON.stringify({ k, v: entry.v, src: entry.src }));
  }
  fs.writeFileSync(enPath, `${lines.join('\n')}\n`, 'utf8');

  // Stats
  const totalNodes = [...md5Map.values()].reduce((s, e) => s + e.src.length, 0);
  const multiFile = [...md5Map.values()].filter((e) => e.src.length > 1).length;

  console.log('📊 Results:');
  console.log(`   Total translatable nodes: ${totalNodes}`);
  console.log(`   Unique MD5 hashes: ${md5Map.size}`);
  console.log(
    `   Dedup rate: ${Math.round((1 - md5Map.size / totalNodes) * 100)}%`,
  );
  console.log(`   Shared across files: ${multiFile}`);
  console.log(`   Written to: ${enPath}`);
}

main();
