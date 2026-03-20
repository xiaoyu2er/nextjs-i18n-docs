/**
 * SQLite compatibility layer.
 *
 * Uses bun:sqlite when running under Bun, better-sqlite3 when under Node.js (Vitest).
 * Both have nearly identical APIs: Database, prepare(), run(), get(), all(), exec().
 */

// biome-ignore lint/suspicious/noExplicitAny: dynamic runtime detection
let DatabaseConstructor: any;

const isBun =
  typeof process !== 'undefined' &&
  // biome-ignore lint/suspicious/noExplicitAny: runtime detection
  typeof (globalThis as any).Bun !== 'undefined';

if (isBun) {
  // Use Bun's built-in SQLite
  DatabaseConstructor = require('bun:sqlite').Database;
} else {
  // Fallback to better-sqlite3 for Node.js / Vitest
  DatabaseConstructor = require('better-sqlite3');
}

export interface SqliteStatement {
  run(...params: unknown[]): { changes: number; lastInsertRowid: number };
  get(...params: unknown[]): unknown;
  all(...params: unknown[]): unknown[];
}

export interface SqliteDatabase {
  prepare(sql: string): SqliteStatement;
  exec(sql: string): void;
  pragma(pragma: string): unknown;
  transaction<T>(fn: () => T): () => T;
  close(): void;
}

/**
 * Open a SQLite database with the appropriate backend.
 */
export function openDatabase(filepath: string): SqliteDatabase {
  const db = new DatabaseConstructor(filepath);

  if (isBun) {
    // bun:sqlite uses db.run() for raw SQL, wrap to match better-sqlite3's exec()
    const bunDb = db as SqliteDatabase & {
      run(sql: string): void;
    };
    return {
      prepare: (sql: string) => bunDb.prepare(sql) as SqliteStatement,
      exec: (sql: string) => bunDb.run(sql),
      pragma: (p: string) => bunDb.run(`PRAGMA ${p}`),
      transaction: <T>(fn: () => T) => bunDb.transaction(fn),
      close: () => bunDb.close(),
    };
  }

  // better-sqlite3 — already has the right API shape
  return db as SqliteDatabase;
}
