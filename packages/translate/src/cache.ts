import fs from 'node:fs';
import path from 'node:path';

export class TranslationCache {
  private cacheDir: string;
  private data: Map<string, Map<string, string>> = new Map();

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
      const map = new Map<string, string>();
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        const entry = JSON.parse(trimmed);
        map.set(entry.k, entry.v);
      }
      this.data.set(lang, map);
    } else if (fs.existsSync(jsonPath)) {
      // Migrate from old JSON format
      const raw = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      this.data.set(lang, new Map(Object.entries(raw)));
    }
  }

  /** Save cache for a specific language to disk (JSONL format) */
  save(lang: string): void {
    fs.mkdirSync(this.cacheDir, { recursive: true });
    const filePath = path.join(this.cacheDir, `${lang}.jsonl`);
    const langData = this.data.get(lang);
    if (langData) {
      const lines: string[] = [];
      for (const [k, v] of langData) {
        lines.push(JSON.stringify({ k, v }));
      }
      fs.writeFileSync(filePath, `${lines.join('\n')}\n`, 'utf8');
    }
  }

  /** Get a cached translation */
  get(lang: string, md5: string): string | undefined {
    return this.data.get(lang)?.get(md5);
  }

  /** Set a cached translation */
  set(lang: string, md5: string, translation: string): void {
    if (!this.data.has(lang)) {
      this.data.set(lang, new Map());
    }
    this.data.get(lang)?.set(md5, translation);
  }

  /** Delete a cached translation */
  delete(lang: string, md5: string): boolean {
    return this.data.get(lang)?.delete(md5) ?? false;
  }

  /** Iterate all entries for a language */
  entries(lang: string): IterableIterator<[string, string]> {
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
