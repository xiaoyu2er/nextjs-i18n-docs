import fs from 'node:fs';
import path from 'node:path';

export class TranslationCache {
  private cacheDir: string;
  private data: Map<string, Map<string, string>> = new Map();

  constructor(cacheDir: string) {
    this.cacheDir = cacheDir;
  }

  /** Load cache for a specific language from disk */
  load(lang: string): void {
    const filePath = path.join(this.cacheDir, `${lang}.json`);
    if (fs.existsSync(filePath)) {
      const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      this.data.set(lang, new Map(Object.entries(raw)));
    }
  }

  /** Save cache for a specific language to disk */
  save(lang: string): void {
    fs.mkdirSync(this.cacheDir, { recursive: true });
    const filePath = path.join(this.cacheDir, `${lang}.json`);
    const langData = this.data.get(lang);
    if (langData) {
      const obj = Object.fromEntries(langData);
      fs.writeFileSync(filePath, JSON.stringify(obj, null, 2), 'utf8');
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

  /** Get cache stats for a language */
  stats(lang: string): { size: number } {
    return { size: this.data.get(lang)?.size ?? 0 };
  }
}
