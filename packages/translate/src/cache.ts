import fs from 'node:fs';
import path from 'node:path';

interface CacheEntry {
  v: string;
  /** Source locations: "relative/path/to/file.mdx:lineNumber" */
  src: string[];
}

export class TranslationCache {
  private cacheDir: string;
  private data: Map<string, Map<string, CacheEntry>> = new Map();

  constructor(cacheDir: string) {
    this.cacheDir = cacheDir;
  }

  /** Load cache for a specific language from disk (JSONL format) */
  load(lang: string): void {
    const filePath = path.join(this.cacheDir, `${lang}.jsonl`);
    // Also try .json for backward compatibility
    const jsonPath = path.join(this.cacheDir, `${lang}.json`);

    if (fs.existsSync(filePath)) {
      const lines = fs.readFileSync(filePath, 'utf8').split('\n');
      const map = new Map<string, CacheEntry>();
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        const entry = JSON.parse(trimmed);
        map.set(entry.k, {
          v: entry.v,
          src: entry.src ?? [],
        });
      }
      this.data.set(lang, map);
    } else if (fs.existsSync(jsonPath)) {
      // Migrate from old JSON format
      const raw = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      const map = new Map<string, CacheEntry>();
      for (const [k, v] of Object.entries(raw)) {
        map.set(k, { v: v as string, src: [] });
      }
      this.data.set(lang, map);
    }
  }

  /** Save cache for a specific language to disk (JSONL format) */
  save(lang: string): void {
    fs.mkdirSync(this.cacheDir, { recursive: true });
    const filePath = path.join(this.cacheDir, `${lang}.jsonl`);
    const langData = this.data.get(lang);
    if (langData) {
      const lines: string[] = [];
      for (const [k, entry] of langData) {
        lines.push(JSON.stringify({ k, v: entry.v }));
      }
      fs.writeFileSync(filePath, `${lines.join('\n')}\n`, 'utf8');
    }
  }

  /** Export a readable markdown index for IDE navigation */
  exportIndex(lang: string): void {
    const langData = this.data.get(lang);
    if (!langData) return;

    const indexPath = path.join(this.cacheDir, `${lang}.index.md`);
    const lines: string[] = [`# Translation Index (${lang})`, ''];

    for (const [k, entry] of langData) {
      if (entry.src.length === 0) continue;
      const preview = entry.v.split('\n')[0].substring(0, 80);
      lines.push(`## \`${k}\` ${preview}`);
      lines.push('');
      for (const src of entry.src) {
        const [filePath, line] = src.split(':');
        lines.push(`- [${src}](../content/en/${filePath}#L${line})`);
      }
      lines.push('');
    }

    fs.writeFileSync(indexPath, lines.join('\n'), 'utf8');
  }

  /** Get a cached translation */
  get(lang: string, md5: string): string | undefined {
    return this.data.get(lang)?.get(md5)?.v;
  }

  /** Set a cached translation */
  set(lang: string, md5: string, translation: string): void {
    if (!this.data.has(lang)) {
      this.data.set(lang, new Map());
    }
    const existing = this.data.get(lang)?.get(md5);
    this.data.get(lang)?.set(md5, {
      v: translation,
      src: existing?.src ?? [],
    });
  }

  /**
   * Update source locations for a md5 hash.
   * Call this during parse/assemble to track where each node appears.
   * @param filePath relative path like "docs/01-app/installation.mdx"
   * @param line 1-based line number
   */
  updateSource(
    lang: string,
    md5: string,
    filePath: string,
    line: number,
  ): void {
    const entry = this.data.get(lang)?.get(md5);
    if (!entry) return;
    const loc = `${filePath}:${line}`;
    if (!entry.src.includes(loc)) {
      entry.src.push(loc);
    }
  }

  /** Clear all source locations (call before a full rebuild) */
  clearSources(lang: string): void {
    const langData = this.data.get(lang);
    if (!langData) return;
    for (const entry of langData.values()) {
      entry.src = [];
    }
  }

  /** Delete a cached translation */
  delete(lang: string, md5: string): boolean {
    return this.data.get(lang)?.delete(md5) ?? false;
  }

  /** Iterate all entries for a language */
  entries(lang: string): IterableIterator<[string, CacheEntry]> {
    return (this.data.get(lang) ?? new Map()).entries();
  }

  /** Remove entries not in the provided set of md5s */
  prune(lang: string, usedMd5s: Set<string>): number {
    const langData = this.data.get(lang);
    if (!langData) return 0;
    let removed = 0;
    for (const md5 of langData.keys()) {
      if (!usedMd5s.has(md5)) {
        langData.delete(md5);
        removed++;
      }
    }
    return removed;
  }

  /** Get cache stats for a language */
  stats(lang: string): { size: number } {
    return { size: this.data.get(lang)?.size ?? 0 };
  }
}
