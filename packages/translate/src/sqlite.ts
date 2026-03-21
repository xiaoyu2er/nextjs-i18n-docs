/**
 * SQLite compatibility layer.
 *
 * Uses bun:sqlite when running under Bun, better-sqlite3 under Node.js (Vitest).
 */
import { createRequire } from 'node:module';

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

// biome-ignore lint/suspicious/noExplicitAny: runtime detection
const isBun = typeof (globalThis as any).Bun !== 'undefined';

/**
 * Open a SQLite database synchronously.
 * Uses bun:sqlite under Bun, better-sqlite3 under Node.
 */
export function openDatabase(filepath: string): SqliteDatabase {
  if (isBun) {
    // Use createRequire to get a CJS require that can load bun:sqlite
    const req = createRequire(import.meta.url);
    const mod = req('bun:sqlite');
    const Database = mod.Database ?? mod.default ?? mod;
    const raw = new Database(filepath);

    return {
      prepare: (sql: string) => {
        const stmt = raw.query(sql);
        return {
          run: (...params: unknown[]) => stmt.run(...params),
          get: (...params: unknown[]) => stmt.get(...params),
          all: (...params: unknown[]) => stmt.all(...params),
        } as SqliteStatement;
      },
      exec: (sql: string) => raw.run(sql),
      pragma: (p: string) => raw.run(`PRAGMA ${p}`),
      transaction: <T>(fn: () => T) => raw.transaction(fn),
      close: () => raw.close(),
    };
  }

  // Node.js / Vitest — use better-sqlite3
  const req = createRequire(import.meta.url);
  const Database = req('better-sqlite3');
  return new Database(filepath) as SqliteDatabase;
}
