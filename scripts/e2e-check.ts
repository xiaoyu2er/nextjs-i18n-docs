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
    .replace(/\/index$/, '')
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

  // Wait for server to be ready
  const ready = await waitForServer('http://localhost:4321/', 120000);
  if (!ready) {
    proc.kill();
    throw new Error('Dev server failed to start within 120s');
  }

  console.log('✅ Dev server ready\n');
  return {
    kill: () => {
      proc.kill('SIGTERM');
    },
  };
}

// ── Page Checking ──

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
  retries = 2,
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

    // Check for Astro error pages
    if (body.includes('AstroError') || body.includes('MDXError')) {
      const match = body.match(/(AstroError|MDXError)[^<]*/);
      errors.push(
        match ? match[0].substring(0, 100) : 'Astro/MDX error in page',
      );
    }

    // Check for "Internal Server Error"
    if (body.includes('Internal Server Error')) {
      errors.push('Internal Server Error');
    }

    // Check for empty content (very short body = broken page)
    if (body.length < 100 && res.status === 200) {
      errors.push(`Suspiciously short response (${body.length} bytes)`);
    }

    // Retry on transient errors (Internal Server Error, timeouts)
    if (errors.length > 0 && retries > 0) {
      const isTransient = errors.some(
        (e) => e.includes('Internal Server Error') || e.includes('HTTP 5'),
      );
      if (isTransient) {
        await new Promise((r) => setTimeout(r, 2000));
        return checkUrl(baseUrl, urlPath, retries - 1);
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
      await new Promise((r) => setTimeout(r, 2000));
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
        console.log(`\n   Failed URLs:`);
        for (const f of failed) {
          console.log(`   - ${f.url}`);
          console.log(`     ${f.error}`);
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
