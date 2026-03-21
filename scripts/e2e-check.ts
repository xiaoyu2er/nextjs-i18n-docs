#!/usr/bin/env bun
import { spawn } from 'node:child_process';
/**
 * E2E URL checker — verifies all content pages are accessible and render without errors.
 *
 * Usage:
 *   bun run scripts/e2e-check.ts                          # check EN only
 *   bun run scripts/e2e-check.ts --lang zh-hans           # check specific locale
 *   bun run scripts/e2e-check.ts --lang all                # check all locales
 *   bun run scripts/e2e-check.ts --base-url http://...     # custom base URL
 *   bun run scripts/e2e-check.ts --concurrency 10          # parallel requests
 *   bun run scripts/e2e-check.ts --prepare                 # run prepare-content first
 */
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { slug as githubSlug } from 'github-slugger';

// ── CLI Args ──

interface CliOptions {
  lang: string;
  baseUrl: string;
  concurrency: number;
  contentDir: string;
  prepare: boolean;
}

function parseArgs(): CliOptions {
  const args = process.argv.slice(2);
  const opts: CliOptions = {
    lang: 'en',
    baseUrl: 'http://localhost:4321',
    concurrency: 5,
    contentDir: 'apps/web/src/content/docs',
    prepare: false,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--lang':
        opts.lang = args[++i];
        break;
      case '--base-url':
        opts.baseUrl = args[++i];
        break;
      case '--concurrency':
        opts.concurrency = Number.parseInt(args[++i], 10);
        break;
      case '--content-dir':
        opts.contentDir = args[++i];
        break;
      case '--prepare':
        opts.prepare = true;
        break;
    }
  }

  return opts;
}

// ── URL Collection ──

function walkMdx(dir: string): string[] {
  const results: string[] = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkMdx(fullPath));
    } else if (entry.name.endsWith('.mdx')) {
      results.push(fullPath);
    }
  }
  return results;
}

function contentPathToUrl(
  contentDir: string,
  filePath: string,
  locale: string,
): string {
  let rel = relative(contentDir, filePath);

  // Remove locale prefix if present (e.g., zh-hans/docs/... → docs/...)
  if (locale !== 'en') {
    rel = rel.replace(new RegExp(`^${locale}/`), '');
  }

  // Convert file path to URL path (Astro uses github-slugger to lowercase segments)
  let urlPath = rel
    .replace(/\.mdx$/, '')
    .replace(/(^|\/)index$/, '')
    .replace(/\\/g, '/')
    .split('/')
    .map((segment) => githubSlug(segment))
    .join('/');

  // Add locale prefix for non-EN
  if (locale !== 'en') {
    urlPath = `${locale}/${urlPath}`;
  }

  return `/${urlPath}/`;
}

function collectUrls(contentDir: string, locale: string): string[] {
  let dir: string;
  if (locale === 'en') {
    // EN content is split across docs/, blog/, learn/ (no locale prefix)
    const urls: string[] = [];
    for (const section of ['docs', 'blog', 'learn']) {
      const sectionDir = join(contentDir, section);
      if (!existsSync(sectionDir)) continue;
      for (const file of walkMdx(sectionDir)) {
        urls.push(contentPathToUrl(contentDir, file, locale));
      }
    }
    return urls;
  }

  dir = join(contentDir, locale);
  if (!existsSync(dir)) return [];
  return walkMdx(dir).map((f) => contentPathToUrl(contentDir, f, locale));
}

// ── Server Management ──

async function waitForServer(
  baseUrl: string,
  timeoutMs = 60000,
): Promise<boolean> {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(baseUrl, { signal: AbortSignal.timeout(2000) });
      if (res.ok || res.status === 404) return true;
    } catch {
      // not ready yet
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  return false;
}

async function startDevServer(
  prepare: boolean,
): Promise<{ kill: () => void } | null> {
  // Check if already running
  try {
    const res = await fetch('http://localhost:4321/', {
      signal: AbortSignal.timeout(2000),
    });
    if (res.ok || res.status === 404) {
      console.log('📡 Dev server already running');
      return null;
    }
  } catch {
    // not running, start it
  }

  if (prepare) {
    console.log('📦 Running prepare-content...');
    const prep = spawn(
      'bun',
      ['run', '../../scripts/prepare-content.ts', '--target', 'apps/web'],
      {
        cwd: 'apps/web',
        stdio: 'inherit',
      },
    );
    await new Promise<void>((resolve, reject) => {
      prep.on('exit', (code) =>
        code === 0
          ? resolve()
          : reject(new Error(`prepare-content failed with code ${code}`)),
      );
    });
  }

  console.log('🚀 Starting dev server...');
  const proc = spawn('bun', ['run', 'astro', 'dev'], {
    cwd: 'apps/web',
    stdio: 'pipe',
    env: { ...process.env, FORCE_COLOR: '0' },
  });

  // Capture stderr for error extraction
  const stderrLines: string[] = [];
  const MAX_STDERR_LINES = 500;
  let stderrBuf = '';
  proc.stderr?.on('data', (chunk: Buffer) => {
    stderrBuf += chunk.toString();
    const lines = stderrBuf.split('\n');
    stderrBuf = lines.pop() ?? '';
    for (const line of lines) {
      stderrLines.push(line);
      if (stderrLines.length > MAX_STDERR_LINES) stderrLines.shift();
    }
  });

  // Wait for server to be ready
  const ready = await waitForServer('http://localhost:4321/', 120000);
  if (!ready) {
    proc.kill();
    throw new Error('Dev server failed to start within 120s');
  }

  // Warm up the server with a request to trigger initial compilation
  try {
    await fetch('http://localhost:4321/', {
      signal: AbortSignal.timeout(30000),
    });
  } catch {
    // ignore warmup errors
  }

  console.log('✅ Dev server ready\n');
  return {
    kill: () => {
      proc.kill('SIGTERM');
    },
    /** Return recent stderr lines, optionally clearing the buffer */
    getStderr: (clear = false) => {
      const lines = [...stderrLines];
      if (clear) stderrLines.length = 0;
      return lines;
    },
  };
}

// ── Page Checking ──

/**
 * Extract error details from server stderr for a given URL.
 * Astro dev server prints errors like:
 *   [ERROR] Could not parse expression with acorn
 *     Stack trace:
 *       at /path/to/file.mdx:53:67
 *
 * We search for [ERROR] blocks and match file paths related to the URL.
 */
function extractStderrDetails(
  stderrLines: string[],
  url: string,
): string | null {
  // Convert URL to likely file path segments for matching
  // e.g., /zh-hans/blog/next-15-2/ → ["zh-hans", "blog", "next-15-2"]
  const segments = url.split('/').filter(Boolean).slice(-2); // last 2 segments are most specific

  if (segments.length === 0) return null;

  // Find [ERROR] lines and their context
  const errorBlocks: string[] = [];
  let currentBlock: string[] = [];
  let inError = false;

  for (const rawLine of stderrLines) {
    // Strip ANSI escape codes
    // biome-ignore lint/suspicious/noControlCharactersInRegex: stripping ESC sequences
    const line = rawLine.replace(/\x1b\[[0-9;]*m/g, '').replace(/\[\d+m/g, '');
    if (line.includes('[ERROR]')) {
      if (currentBlock.length > 0) errorBlocks.push(currentBlock.join('\n'));
      currentBlock = [line];
      inError = true;
    } else if (inError) {
      if (
        line.startsWith('  ') ||
        line.includes('Stack trace') ||
        line.includes('Caused by') ||
        line.includes('at ')
      ) {
        currentBlock.push(line);
      } else {
        if (currentBlock.length > 0) errorBlocks.push(currentBlock.join('\n'));
        currentBlock = [];
        inError = false;
      }
    }
  }
  if (currentBlock.length > 0) errorBlocks.push(currentBlock.join('\n'));

  // Find blocks that mention file paths matching the URL
  for (const block of errorBlocks) {
    const matchesUrl = segments.every((seg) => block.includes(seg));
    if (matchesUrl) {
      // Extract the key info: error message + file location
      const errorMsg = block.match(/\[ERROR\]\s*(.+)/)?.[1] ?? 'Unknown error';
      const fileLoc = block.match(/at\s+([^\n]+\.mdx:\d+:\d+)/)?.[1] ?? '';
      const causedBy = block.match(/Caused by:\s*\n\s*(.+)/)?.[1] ?? '';
      const parts = [errorMsg];
      if (fileLoc) parts.push(`at ${fileLoc}`);
      if (causedBy) parts.push(`caused by: ${causedBy}`);
      return parts.join(' | ');
    }
  }

  // Fallback: return the most recent error block if no URL match found
  if (errorBlocks.length > 0) {
    const last = errorBlocks[errorBlocks.length - 1];
    const errorMsg = last.match(/\[ERROR\]\s*(.+)/)?.[1] ?? 'Unknown error';
    const fileLoc = last.match(/at\s+([^\n]+\.mdx:\d+:\d+)/)?.[1] ?? '';
    return `(recent) ${errorMsg}${fileLoc ? ` | at ${fileLoc}` : ''}`;
  }

  return null;
}

interface CheckResult {
  url: string;
  status: number;
  ok: boolean;
  error?: string;
  duration: number;
}

async function checkUrl(
  baseUrl: string,
  urlPath: string,
  retries = 3,
): Promise<CheckResult> {
  const fullUrl = `${baseUrl}${urlPath}`;
  const start = Date.now();

  try {
    const res = await fetch(fullUrl, {
      signal: AbortSignal.timeout(30000),
      redirect: 'follow',
    });

    const duration = Date.now() - start;
    const body = await res.text();

    // Check for error indicators in the HTML
    const errors: string[] = [];

    if (res.status !== 200) {
      errors.push(`HTTP ${res.status}`);
    }

    // Extract error type from <title> — Astro/Vite error pages use:
    //   <title>MDXError</title>, <title>AstroUserError</title>, etc.
    // The actual error details are only in the server stderr, not in the response body.
    const titleMatch = body.match(/<title>([^<]+)<\/title>/);
    const title = titleMatch?.[1] ?? '';
    const isErrorPage =
      title.includes('Error') ||
      title === '500' ||
      title === 'Internal Server Error';

    if (isErrorPage && res.status >= 400) {
      errors.push(title);
    }

    // Check for Astro error content in larger pages (error overlay within a rendered page)
    if (
      body.length > 200 &&
      (body.includes('AstroError') || body.includes('MDXError'))
    ) {
      // Only flag if it's in error-related elements, not in documentation content
      if (body.includes('vite-error-overlay') || body.includes('astro-error')) {
        const match = body.match(/(AstroError|MDXError)[^<]*/);
        errors.push(
          match ? match[0].substring(0, 200) : 'Astro/MDX error in page',
        );
      }
    }

    // Check for empty content (very short body = broken page)
    if (body.length < 100 && res.status === 200) {
      errors.push(`Suspiciously short response (${body.length} bytes)`);
    }

    // Retry on transient errors only — NOT on MDX/Astro errors (those are deterministic)
    if (errors.length > 0 && retries > 0) {
      const isDeterministic = errors.some(
        (e) =>
          e.includes('MDXError') ||
          e.includes('AstroError') ||
          e.includes('AstroUserError'),
      );
      if (!isDeterministic) {
        const isTransient = errors.some(
          (e) => e.includes('HTTP 5') || e.includes('HTTP 502'),
        );
        if (isTransient) {
          await new Promise((r) => setTimeout(r, 3000));
          return checkUrl(baseUrl, urlPath, retries - 1);
        }
      }
    }

    return {
      url: urlPath,
      status: res.status,
      ok: errors.length === 0,
      error: errors.length > 0 ? errors.join('; ') : undefined,
      duration,
    };
  } catch (err) {
    // Retry on network errors
    if (retries > 0) {
      await new Promise((r) => setTimeout(r, 3000));
      return checkUrl(baseUrl, urlPath, retries - 1);
    }
    return {
      url: urlPath,
      status: 0,
      ok: false,
      error: err instanceof Error ? err.message : String(err),
      duration: Date.now() - start,
    };
  }
}

async function runBatch<T, R>(
  items: T[],
  fn: (item: T) => Promise<R>,
  concurrency: number,
): Promise<R[]> {
  const results: R[] = [];
  let idx = 0;

  async function worker() {
    while (idx < items.length) {
      const i = idx++;
      results[i] = await fn(items[i]);
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return results;
}

// ── Main ──

async function main() {
  const opts = parseArgs();

  // Ensure content is prepared
  if (!existsSync(opts.contentDir)) {
    console.log(
      '⚠️  Content not found. Run with --prepare or run bun dev:latest first.',
    );
    process.exit(1);
  }

  // Determine which locales to check
  const locales: string[] = [];
  if (opts.lang === 'all') {
    locales.push('en');
    for (const entry of readdirSync(opts.contentDir)) {
      if (
        entry !== 'en' &&
        !['docs', 'blog', 'learn'].includes(entry) &&
        existsSync(join(opts.contentDir, entry)) &&
        statSync(join(opts.contentDir, entry)).isDirectory()
      ) {
        locales.push(entry);
      }
    }
  } else {
    locales.push(opts.lang);
  }

  // Start server if needed
  const server = await startDevServer(opts.prepare);

  try {
    for (const locale of locales) {
      console.log(`\n🔍 Checking ${locale.toUpperCase()} pages...`);

      const urls = collectUrls(opts.contentDir, locale);
      console.log(
        `   ${urls.length} URLs to check (concurrency: ${opts.concurrency})\n`,
      );

      if (urls.length === 0) {
        console.log('   No URLs found, skipping.');
        continue;
      }

      let checked = 0;
      const failed: CheckResult[] = [];
      const slow: CheckResult[] = [];

      const results = await runBatch(
        urls,
        async (url) => {
          const result = await checkUrl(opts.baseUrl, url);
          checked++;

          if (!result.ok) {
            failed.push(result);
            process.stdout.write(`   ❌ ${result.url} — ${result.error}\n`);
          } else if (result.duration > 5000) {
            slow.push(result);
          }

          // Progress every 50 URLs
          if (checked % 50 === 0) {
            process.stdout.write(
              `   ⏳ ${checked}/${urls.length} checked (${failed.length} failed)\n`,
            );
          }

          return result;
        },
        opts.concurrency,
      );

      // Retry failed URLs sequentially (dev server may have been overwhelmed)
      if (failed.length > 0) {
        const retryUrls = failed.map((f) => f.url);
        console.log(
          `\n   🔄 Retrying ${retryUrls.length} failed URLs sequentially...`,
        );
        const retryResults: CheckResult[] = [];
        for (const url of retryUrls) {
          // Wait a bit between retries to let the server recover
          await new Promise((r) => setTimeout(r, 1000));
          const result = await checkUrl(opts.baseUrl, url);
          retryResults.push(result);
          if (result.ok) {
            process.stdout.write(`   ✅ ${url} — passed on retry\n`);
          } else {
            process.stdout.write(
              `   ❌ ${url} — still failing: ${result.error}\n`,
            );
          }
        }
        // Update failed list: only keep URLs that still fail
        failed.length = 0;
        for (const r of retryResults) {
          if (!r.ok) failed.push(r);
        }
        // Update results with retry outcomes
        for (const retry of retryResults) {
          const idx = results.findIndex((r) => r.url === retry.url);
          if (idx !== -1) results[idx] = retry;
        }
      }

      // Summary
      const passed = results.filter((r) => r.ok).length;
      const avgDuration = Math.round(
        results.reduce((sum, r) => sum + r.duration, 0) / results.length,
      );

      console.log(`\n${'─'.repeat(50)}`);
      console.log(`📊 ${locale.toUpperCase()} Results:`);
      console.log(`   ✅ Passed: ${passed}/${urls.length}`);
      console.log(`   ❌ Failed: ${failed.length}`);
      if (slow.length > 0) {
        console.log(`   🐌 Slow (>5s): ${slow.length}`);
      }
      console.log(`   ⏱  Avg response: ${avgDuration}ms`);

      if (failed.length > 0) {
        // Extract error details from server stderr
        const stderrLog = server?.getStderr?.() ?? [];
        console.log(`\n   Failed URLs:`);
        for (const f of failed) {
          console.log(`   - ${f.url}`);
          console.log(`     ${f.error}`);
          // Find related stderr lines: look for ERROR blocks that mention
          // a file path matching this URL's likely source file
          const details = extractStderrDetails(stderrLog, f.url);
          if (details) {
            console.log(`     📋 ${details}`);
          }
        }
      }
    }
  } finally {
    if (server) {
      console.log('\n🛑 Stopping dev server...');
      server.kill();
    }
  }
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
