import fs from 'node:fs';
import path from 'node:path';

// ── File Logger ─────────────────────────────────────────────────────

export class FileLogger {
  private logDir: string;
  private streams: Map<string, fs.WriteStream> = new Map();

  constructor(baseDir: string, lang: string) {
    const ts = new Date()
      .toISOString()
      .replace(/[:.]/g, '-')
      .replace('T', '_')
      .slice(0, 19);
    this.logDir = path.join(baseDir, `translate-${lang}-${ts}`);
    fs.mkdirSync(this.logDir, { recursive: true });

    // Write a summary log too
    this.log('_run', `Started at ${new Date().toISOString()}`);
    this.log('_run', `Language: ${lang}`);
  }

  getLogDir(): string {
    return this.logDir;
  }

  log(file: string, message: string): void {
    const safeName = file.replace(/\//g, '__');
    let stream = this.streams.get(safeName);
    if (!stream) {
      const logPath = path.join(this.logDir, `${safeName}.log`);
      stream = fs.createWriteStream(logPath, { flags: 'a' });
      this.streams.set(safeName, stream);
    }
    const ts = new Date().toISOString().slice(11, 23);
    stream.write(`[${ts}] ${message}\n`);
  }

  close(): void {
    for (const stream of this.streams.values()) {
      stream.end();
    }
    this.streams.clear();
  }
}

// ── Table UI ────────────────────────────────────────────────────────

export type FileStatus =
  | 'waiting'
  | 'translating'
  | 'done'
  | 'cached'
  | 'error'
  | 'skipped';

export interface FileRow {
  path: string;
  status: FileStatus;
  cached: number;
  total: number;
  newTrans: number;
  mdxErrors: number;
  elapsed: number;
  error?: string;
}

const STATUS_ICONS: Record<FileStatus, string> = {
  waiting: '⏳',
  translating: '🔄',
  done: '✅',
  cached: '📦',
  error: '❌',
  skipped: '⏭️',
};

const STATUS_COLORS: Record<FileStatus, string> = {
  waiting: '\x1b[90m', // gray
  translating: '\x1b[36m', // cyan
  done: '\x1b[32m', // green
  cached: '\x1b[34m', // blue
  error: '\x1b[31m', // red
  skipped: '\x1b[33m', // yellow
};

const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const DIM = '\x1b[2m';

export function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  const s = Math.floor(ms / 1000);
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  const rs = s % 60;
  return `${m}m${rs}s`;
}

export class TableUI {
  private rows: Map<string, FileRow> = new Map();
  private order: string[] = [];
  private headerLines = 0;
  private lastRender = 0;
  private renderInterval = 200; // ms between renders
  private startTime = Date.now();
  private totalFiles = 0;
  private cachedFiles = 0;
  private lang = '';
  private isInteractive: boolean;

  constructor(opts: {
    lang: string;
    totalFiles: number;
    cachedFiles: number;
    translateFiles: string[];
  }) {
    this.lang = opts.lang;
    this.totalFiles = opts.totalFiles;
    this.cachedFiles = opts.cachedFiles;
    this.isInteractive =
      process.stdout.isTTY === true &&
      process.env.CI === undefined &&
      process.env.NO_TTY === undefined;

    for (const filePath of opts.translateFiles) {
      this.rows.set(filePath, {
        path: filePath,
        status: 'waiting',
        cached: 0,
        total: 0,
        newTrans: 0,
        mdxErrors: 0,
        elapsed: 0,
      });
      this.order.push(filePath);
    }
  }

  update(filePath: string, updates: Partial<Omit<FileRow, 'path'>>): void {
    const row = this.rows.get(filePath);
    if (row) {
      Object.assign(row, updates);
      this.throttledRender();
    }
  }

  private throttledRender(): void {
    const now = Date.now();
    if (now - this.lastRender < this.renderInterval) return;
    this.lastRender = now;
    this.render();
  }

  render(): void {
    if (!this.isInteractive) return;

    const elapsed = Date.now() - this.startTime;
    const done = [...this.rows.values()].filter(
      (r) =>
        r.status === 'done' || r.status === 'error' || r.status === 'skipped',
    ).length;
    const translating = [...this.rows.values()].filter(
      (r) => r.status === 'translating',
    ).length;
    const waiting = this.order.length - done - translating;

    // Calculate ETA from completed file times
    const completedTimes = [...this.rows.values()]
      .filter((r) => r.status === 'done' && r.elapsed > 0)
      .map((r) => r.elapsed);
    const avgTime =
      completedTimes.length > 0
        ? completedTimes.reduce((a, b) => a + b, 0) / completedTimes.length
        : 0;
    const remaining = waiting + translating;
    const eta = avgTime > 0 ? remaining * avgTime : 0;

    // Clear previous render
    const totalLines = this.headerLines;
    if (totalLines > 0) {
      process.stdout.write(`\x1b[${totalLines}A\x1b[J`);
    }

    const lines: string[] = [];

    // Header bar
    const pctDone =
      this.order.length > 0
        ? Math.round((done / this.order.length) * 100)
        : 100;
    const barWidth = 30;
    const filledWidth = Math.round((pctDone / 100) * barWidth);
    const bar = `${BOLD}[${RESET}\x1b[32m${'█'.repeat(filledWidth)}${RESET}${DIM}${'░'.repeat(barWidth - filledWidth)}${RESET}${BOLD}]${RESET}`;
    lines.push(
      `${bar} ${pctDone}% · ${done}/${this.order.length} files · ${formatDuration(elapsed)}${eta > 0 ? ` · ETA ${formatDuration(eta)}` : ''}`,
    );
    lines.push('');

    // Show active (translating) files
    const active = this.order.filter(
      (p) => this.rows.get(p)?.status === 'translating',
    );
    if (active.length > 0) {
      for (const p of active) {
        const row = this.rows.get(p);
        if (!row) continue;
        const el = row.elapsed > 0 ? formatDuration(row.elapsed) : '...';
        lines.push(
          `  ${STATUS_COLORS.translating}${STATUS_ICONS.translating} ${this.truncPath(row.path)}${RESET} ${DIM}(${row.cached}/${row.total} cached, ${el})${RESET}`,
        );
      }
      lines.push('');
    }

    // Recent completed (last 5)
    const completed = this.order.filter((p) => {
      const s = this.rows.get(p)?.status;
      return s === 'done' || s === 'error' || s === 'skipped';
    });
    const recent = completed.slice(-5);
    if (recent.length > 0) {
      for (const p of recent) {
        const row = this.rows.get(p);
        if (!row) continue;
        const icon = STATUS_ICONS[row.status];
        const color = STATUS_COLORS[row.status];
        const info =
          row.status === 'done'
            ? `+${row.newTrans} cached${row.mdxErrors > 0 ? `, ${row.mdxErrors} MDX err` : ''} · ${formatDuration(row.elapsed)}`
            : row.status === 'error'
              ? row.error?.substring(0, 60) || 'failed'
              : 'skipped';
        lines.push(
          `  ${color}${icon} ${this.truncPath(row.path)}${RESET} ${DIM}(${info})${RESET}`,
        );
      }
      if (completed.length > 5) {
        lines.push(
          `  ${DIM}... and ${completed.length - 5} more completed${RESET}`,
        );
      }
    }

    // Stats bar
    const newTrans = [...this.rows.values()].reduce(
      (a, r) => a + r.newTrans,
      0,
    );
    const errors = [...this.rows.values()].filter(
      (r) => r.status === 'error',
    ).length;
    lines.push('');
    lines.push(
      `${DIM}  📦 ${this.cachedFiles} cached · 🔄 ${translating} active · ✅ ${done} done · +${newTrans} new · ❌ ${errors} errors${RESET}`,
    );

    const output = lines.join('\n');
    process.stdout.write(`${output}\n`);
    this.headerLines = lines.length;
  }

  /** Print a non-interactive log line (CI / piped output) */
  logLine(message: string): void {
    if (this.isInteractive) return;
    console.log(message);
  }

  /** Final summary after all work is done */
  finish(stats: {
    totalCached: number;
    totalTranslated: number;
    totalSkipped: number;
    totalNewTranslations: number;
    totalErrors: number;
    totalDiffs: number;
    totalMdxErrors: number;
    cacheSize: number;
    outputDir: string;
    failedFiles: string[];
    logDir: string;
  }): void {
    // Force final render
    if (this.isInteractive) {
      this.render();
    }

    const elapsed = Date.now() - this.startTime;
    console.log(`\n${'═'.repeat(60)}`);
    console.log(`📊 Summary (${this.lang}):`);
    console.log(`   Cached (no API call): ${stats.totalCached}`);
    console.log(`   Translated: ${stats.totalTranslated}`);
    console.log(`   Skipped: ${stats.totalSkipped}`);
    console.log(`   New translations cached: ${stats.totalNewTranslations}`);
    console.log(`   Errors: ${stats.totalErrors}`);
    console.log(`   Diffs: ${stats.totalDiffs}`);
    console.log(`   MDX errors: ${stats.totalMdxErrors}`);
    console.log(`   Cache size: ${stats.cacheSize} entries`);
    console.log(`   Total time: ${formatDuration(elapsed)}`);
    console.log(`   Output: ${stats.outputDir}`);
    console.log(`   Logs: ${stats.logDir}`);

    if (stats.failedFiles.length > 0) {
      console.log(`\n❌ Failed files (${stats.failedFiles.length}):`);
      for (const f of stats.failedFiles) {
        const logFile = path.join(
          stats.logDir,
          `${f.replace(/\//g, '__')}.log`,
        );
        console.log(`   - ${f}`);
        console.log(`     Log: ${logFile}`);
      }
    }
  }

  private truncPath(p: string, maxLen = 55): string {
    if (p.length <= maxLen) return p;
    return `…${p.slice(-(maxLen - 1))}`;
  }
}
