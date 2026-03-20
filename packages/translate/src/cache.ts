import fs from 'node:fs';
import path from 'node:path';
import {
  openDatabase,
  type SqliteDatabase,
  type SqliteStatement,
} from './sqlite';

export interface CacheEntry {
  v: string;
  /** Source locations: "relative/path/to/file.mdx:lineNumber" */
  src: string[];
}

/**
 * Translation cache backed by SQLite.
 *
 * Schema:
 *   sources(key PK, text, type)            — EN source texts
 *   source_files(key, file, line, version)  — which files use each source node
 *   translations(lang, key, value, ...)     — translated texts per language
 *
 * All writes are immediate (no separate save step).
 * WAL mode enables concurrent readers + single writer.
 */
export class TranslationCache {
  private db: SqliteDatabase;
  private cacheDir: string;

  // Prepared statements (lazily initialized)
  private _stmts?: {
    getTranslation: SqliteStatement;
    setTranslation: SqliteStatement;
    deleteTranslation: SqliteStatement;
    countByLang: SqliteStatement;
    allByLang: SqliteStatement;
    keysByLang: SqliteStatement;
    setSource: SqliteStatement;
    getSource: SqliteStatement;
    clearSourceFiles: SqliteStatement;
    upsertSourceFile: SqliteStatement;
    deleteSourceFilesByLang: SqliteStatement;
  };

  constructor(cacheDir: string) {
    this.cacheDir = cacheDir;
    fs.mkdirSync(cacheDir, { recursive: true });

    const dbPath = path.join(cacheDir, 'translations.db');
    this.db = openDatabase(dbPath);

    // Performance pragmas
    this.db.pragma('journal_mode = WAL');
    this.db.pragma('busy_timeout = 5000');
    this.db.pragma('synchronous = NORMAL');
    this.db.pragma('foreign_keys = ON');

    // Create tables
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS sources (
        key   TEXT PRIMARY KEY NOT NULL,
        text  TEXT NOT NULL,
        type  TEXT NOT NULL DEFAULT 'paragraph'
      ) WITHOUT ROWID;

      CREATE TABLE IF NOT EXISTS source_files (
        key     TEXT    NOT NULL,
        file    TEXT    NOT NULL,
        line    INTEGER NOT NULL,
        version TEXT    NOT NULL DEFAULT 'latest',
        PRIMARY KEY (version, key, file, line),
        FOREIGN KEY (key) REFERENCES sources(key) ON DELETE CASCADE
      ) WITHOUT ROWID;

      CREATE TABLE IF NOT EXISTS translations (
        lang       TEXT    NOT NULL,
        key        TEXT    NOT NULL,
        value      TEXT    NOT NULL,
        created_at INTEGER NOT NULL DEFAULT (unixepoch()),
        updated_at INTEGER NOT NULL DEFAULT (unixepoch()),
        PRIMARY KEY (lang, key)
      ) WITHOUT ROWID;

      CREATE INDEX IF NOT EXISTS idx_translations_lang ON translations(lang);
      CREATE INDEX IF NOT EXISTS idx_source_files_version ON source_files(version);
      CREATE INDEX IF NOT EXISTS idx_source_files_file ON source_files(version, file);
    `);
  }

  private get stmts() {
    if (!this._stmts) {
      this._stmts = {
        getTranslation: this.db.prepare(
          'SELECT value FROM translations WHERE lang = ? AND key = ?',
        ),
        setTranslation: this.db.prepare(`
          INSERT INTO translations (lang, key, value)
          VALUES (?, ?, ?)
          ON CONFLICT(lang, key) DO UPDATE SET value = excluded.value, updated_at = unixepoch()
        `),
        deleteTranslation: this.db.prepare(
          'DELETE FROM translations WHERE lang = ? AND key = ?',
        ),
        countByLang: this.db.prepare(
          'SELECT COUNT(*) as count FROM translations WHERE lang = ?',
        ),
        allByLang: this.db.prepare(
          'SELECT key, value FROM translations WHERE lang = ?',
        ),
        keysByLang: this.db.prepare(
          'SELECT key FROM translations WHERE lang = ?',
        ),
        setSource: this.db.prepare(`
          INSERT INTO sources (key, text, type) VALUES (?, ?, ?)
          ON CONFLICT(key) DO UPDATE SET text = excluded.text, type = excluded.type
        `),
        getSource: this.db.prepare(
          'SELECT text, type FROM sources WHERE key = ?',
        ),
        clearSourceFiles: this.db.prepare(
          'DELETE FROM source_files WHERE version = ?',
        ),
        upsertSourceFile: this.db.prepare(`
          INSERT OR IGNORE INTO source_files (key, file, line, version) VALUES (?, ?, ?, ?)
        `),
        deleteSourceFilesByLang: this.db.prepare(
          'DELETE FROM source_files WHERE version = ?',
        ),
      };
    }
    return this._stmts;
  }

  // ── Public API (backward-compatible with JSONL version) ──

  /**
   * Load cache for a language. No-op for SQLite (data is always available).
   * Kept for API compatibility.
   */
  load(_lang: string): void {
    // No-op: SQLite is always "loaded"
  }

  /**
   * Save cache for a language. No-op for SQLite (writes are immediate).
   * Kept for API compatibility.
   */
  save(_lang: string): void {
    // No-op: all writes are immediate in SQLite
  }

  /** Get a cached translation */
  get(lang: string, md5: string): string | undefined {
    const row = this.stmts.getTranslation.get(lang, md5) as {
      value: string;
    } | null;
    return row?.value;
  }

  /** Set a cached translation (writes immediately to disk) */
  set(lang: string, md5: string, translation: string): void {
    this.stmts.setTranslation.run(lang, md5, translation);
  }

  /**
   * Set a cached translation with its EN source text.
   * This also stores the source in the `sources` table for dashboard use.
   */
  setWithSource(
    lang: string,
    md5: string,
    translation: string,
    sourceText: string,
    sourceType = 'paragraph',
  ): void {
    this.db.transaction(() => {
      this.stmts.setSource.run(md5, sourceText, sourceType);
      this.stmts.setTranslation.run(lang, md5, translation);
    })();
  }

  /** Delete a cached translation */
  delete(lang: string, md5: string): boolean {
    const result = this.stmts.deleteTranslation.run(lang, md5);
    return result.changes > 0;
  }

  /** Iterate all entries for a language */
  *entries(lang: string): IterableIterator<[string, CacheEntry]> {
    const rows = this.stmts.allByLang.all(lang) as {
      key: string;
      value: string;
    }[];
    for (const row of rows) {
      yield [row.key, { v: row.value, src: [] }];
    }
  }

  /** Get all cached keys for a language as a Set (fast for coverage checks) */
  keys(lang: string): Set<string> {
    const rows = this.stmts.keysByLang.all(lang) as { key: string }[];
    return new Set(rows.map((r) => r.key));
  }

  /** Remove entries not in the provided set of md5s */
  prune(lang: string, usedMd5s: Set<string>): number {
    // Get all keys for this lang, delete those not in usedMd5s
    const allKeys = this.keys(lang);
    let removed = 0;
    const deleteStmt = this.stmts.deleteTranslation;
    this.db.transaction(() => {
      for (const md5 of allKeys) {
        if (!usedMd5s.has(md5)) {
          deleteStmt.run(lang, md5);
          removed++;
        }
      }
    })();
    return removed;
  }

  /** Get cache stats for a language */
  stats(lang: string): { size: number } {
    const row = this.stmts.countByLang.get(lang) as { count: number } | null;
    return { size: row?.count ?? 0 };
  }

  // ── Source tracking ──

  /**
   * Update source locations for a md5 hash.
   * In SQLite mode, this inserts into source_files table.
   */
  updateSource(
    _lang: string,
    md5: string,
    filePath: string,
    line: number,
    version = 'latest',
  ): void {
    this.stmts.upsertSourceFile.run(md5, filePath, line, version);
  }

  /** Clear all source file mappings for a version (call before a full rebuild) */
  clearSources(_lang: string, version = 'latest'): void {
    this.stmts.clearSourceFiles.run(version);
  }

  /** Store an EN source text in the sources table */
  setSource(md5: string, text: string, type = 'paragraph'): void {
    this.stmts.setSource.run(md5, text, type);
  }

  /** Get an EN source text from the sources table */
  getSource(md5: string): { text: string; type: string } | undefined {
    const row = this.stmts.getSource.get(md5) as {
      text: string;
      type: string;
    } | null;
    return row ?? undefined;
  }

  // ── Dashboard queries ──

  /** Get translation stats for all languages */
  allLangStats(): { lang: string; count: number }[] {
    return this.db
      .prepare('SELECT lang, COUNT(*) as count FROM translations GROUP BY lang')
      .all() as { lang: string; count: number }[];
  }

  /**
   * Get file-level coverage for a version and language.
   * Returns how many source nodes each file has and how many are translated.
   */
  fileCoverage(
    version: string,
    lang: string,
  ): { file: string; total: number; translated: number }[] {
    return this.db
      .prepare(
        `
      SELECT
        sf.file,
        COUNT(DISTINCT sf.key) as total,
        COUNT(DISTINCT t.key) as translated
      FROM source_files sf
      LEFT JOIN translations t ON t.key = sf.key AND t.lang = ?
      WHERE sf.version = ?
      GROUP BY sf.file
      ORDER BY sf.file
    `,
      )
      .all(lang, version) as {
      file: string;
      total: number;
      translated: number;
    }[];
  }

  /**
   * Get node-level detail for a specific file: EN source + translation side by side.
   */
  fileDetail(
    version: string,
    lang: string,
    file: string,
  ): {
    key: string;
    source: string;
    type: string;
    translation: string | null;
    line: number;
  }[] {
    return this.db
      .prepare(
        `
      SELECT
        s.key,
        s.text as source,
        s.type,
        t.value as translation,
        sf.line
      FROM source_files sf
      JOIN sources s ON s.key = sf.key
      LEFT JOIN translations t ON t.key = sf.key AND t.lang = ?
      WHERE sf.version = ? AND sf.file = ?
      ORDER BY sf.line
    `,
      )
      .all(lang, version, file) as {
      key: string;
      source: string;
      type: string;
      translation: string | null;
      line: number;
    }[];
  }

  /** Get total source node count for a version */
  sourceCount(version: string): number {
    const row = this.db
      .prepare(
        'SELECT COUNT(DISTINCT key) as count FROM source_files WHERE version = ?',
      )
      .get(version) as { count: number } | null;
    return row?.count ?? 0;
  }

  /**
   * Get section-level stats for a version and language.
   * Section is derived from file path prefix (docs/, blog/, learn/).
   */
  sectionStats(
    version: string,
    lang: string,
  ): {
    section: string;
    totalFiles: number;
    translatedFiles: number;
    totalNodes: number;
    translatedNodes: number;
  }[] {
    return this.db
      .prepare(
        `
      WITH file_coverage AS (
        SELECT
          sf.file,
          CASE
            WHEN sf.file LIKE 'docs/%' THEN 'docs'
            WHEN sf.file LIKE 'blog/%' THEN 'blog'
            WHEN sf.file LIKE 'learn/%' THEN 'learn'
            ELSE 'other'
          END as section,
          COUNT(DISTINCT sf.key) as total_nodes,
          COUNT(DISTINCT t.key) as translated_nodes
        FROM source_files sf
        LEFT JOIN translations t ON t.key = sf.key AND t.lang = ?
        WHERE sf.version = ?
        GROUP BY sf.file
      )
      SELECT
        section,
        COUNT(*) as totalFiles,
        SUM(CASE WHEN translated_nodes = total_nodes THEN 1 ELSE 0 END) as translatedFiles,
        SUM(total_nodes) as totalNodes,
        SUM(translated_nodes) as translatedNodes
      FROM file_coverage
      GROUP BY section
      ORDER BY section
    `,
      )
      .all(lang, version) as {
      section: string;
      totalFiles: number;
      translatedFiles: number;
      totalNodes: number;
      translatedNodes: number;
    }[];
  }

  // ── Export / Import ──

  /** Export cache to JSONL format (for backward compatibility / git tracking) */
  exportJsonl(lang: string, outputPath: string): number {
    const rows = this.db
      .prepare(
        'SELECT key, value FROM translations WHERE lang = ? ORDER BY key',
      )
      .all(lang) as { key: string; value: string }[];

    const lines: string[] = [];
    for (const row of rows) {
      // Get source file locations
      const srcs = this.db
        .prepare(
          "SELECT file || ':' || line as loc FROM source_files WHERE key = ? ORDER BY file, line",
        )
        .all(row.key) as { loc: string }[];

      const entry: Record<string, unknown> = { k: row.key, v: row.value };
      if (srcs.length > 0) {
        entry.src = srcs.map((s) => s.loc);
      }
      lines.push(JSON.stringify(entry));
    }

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, `${lines.join('\n')}\n`, 'utf8');
    return rows.length;
  }

  /** Import translations from a JSONL file */
  importJsonl(lang: string, inputPath: string): number {
    if (!fs.existsSync(inputPath)) return 0;
    const lines = fs.readFileSync(inputPath, 'utf8').split('\n');
    let count = 0;

    this.db.transaction(() => {
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        const entry = JSON.parse(trimmed);
        this.stmts.setTranslation.run(lang, entry.k, entry.v);
        count++;

        // Import source locations if available
        const srcs: string[] = entry.src ?? [];
        for (const src of srcs) {
          const parts = src.split(':');
          const lineNum = Number.parseInt(parts.pop() ?? '0', 10);
          const file = parts.join(':');
          if (file) {
            // Store source text as empty placeholder (we don't have it in JSONL)
            this.db
              .prepare(
                "INSERT OR IGNORE INTO sources (key, text, type) VALUES (?, '', 'unknown')",
              )
              .run(entry.k);
            this.stmts.upsertSourceFile.run(entry.k, file, lineNum, 'latest');
          }
        }
      }
    })();

    return count;
  }

  /** Export a readable markdown index for IDE navigation */
  exportIndex(lang: string): void {
    const indexPath = path.join(this.cacheDir, `${lang}.index.md`);
    const rows = this.db
      .prepare(
        `
      SELECT t.key, t.value,
             GROUP_CONCAT(sf.file || ':' || sf.line, char(10)) as sources
      FROM translations t
      LEFT JOIN source_files sf ON sf.key = t.key
      WHERE t.lang = ?
      GROUP BY t.key
      HAVING sources IS NOT NULL
      ORDER BY t.key
    `,
      )
      .all(lang) as { key: string; value: string; sources: string | null }[];

    const lines: string[] = [`# Translation Index (${lang})`, ''];
    for (const row of rows) {
      if (!row.sources) continue;
      const preview = row.value.split('\n')[0].substring(0, 80);
      lines.push(`## \`${row.key}\` ${preview}`);
      lines.push('');
      for (const src of row.sources.split('\n')) {
        const [filePath] = src.split(':');
        lines.push(
          `- [${src}](../content/en/${filePath}#L${src.split(':')[1]})`,
        );
      }
      lines.push('');
    }

    fs.writeFileSync(indexPath, lines.join('\n'), 'utf8');
  }

  /** Close the database connection */
  close(): void {
    this._stmts = undefined;
    this.db.close();
  }
}
