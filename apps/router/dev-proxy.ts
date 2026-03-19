/**
 * Local dev proxy that mimics the Router Worker.
 * Routes requests to version-specific Astro dev servers.
 *
 * Usage: bun run dev-proxy.ts
 */

import { resolve } from 'node:path';

const LOCALES = ['zh-hans', 'zh-hant', 'ja', 'ar', 'de', 'es', 'fr', 'ru'];

// Read versions from single source of truth
const ROOT = resolve(import.meta.dirname!, '../..');
const versionsData = JSON.parse(
  await Bun.file(resolve(ROOT, '.github/nextjs-versions.json')).text(),
);
const latestMajor = versionsData.latestMajor;
const olderVersions = Object.keys(versionsData.versions).filter(
  (v) => v !== latestMajor,
);

const ROUTES: Array<{ prefix: string; port: number }> = olderVersions.map(
  (v, i) => ({
    prefix: `/docs/${v}`,
    port: 4322 + i,
  }),
);
const DEFAULT_PORT = 4321;

function getTargetPort(pathname: string): number {
  const segments = pathname.split('/').filter(Boolean);
  let matchPath = pathname;
  if (LOCALES.includes(segments[0])) {
    matchPath = `/${segments.slice(1).join('/')}`;
  }

  for (const { prefix, port } of ROUTES) {
    if (matchPath.startsWith(prefix)) return port;
  }
  return DEFAULT_PORT;
}

// Track which port the last HTML page was served from (for assets like favicon)
let lastHtmlPort = DEFAULT_PORT;

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const { pathname } = url;

    // Vite HMR websocket — can't proxy, return 426
    if (req.headers.get('upgrade') === 'websocket') {
      return new Response(
        'WebSocket not proxied — connect directly to worker port',
        { status: 426 },
      );
    }

    // Version root redirects (same logic as router worker)
    const segments = pathname.split('/').filter(Boolean);
    let matchPath = pathname;
    if (LOCALES.includes(segments[0])) {
      matchPath = `/${segments.slice(1).join('/')}`;
    }
    const versionMatch = matchPath.match(/^\/docs\/(\d+)\/?$/);
    if (versionMatch) {
      const ver = versionMatch[1];
      const localePrefix = LOCALES.includes(segments[0])
        ? `/${segments[0]}`
        : '';
      const defaultPage =
        Number(ver) >= 15
          ? `/docs/${ver}/app/getting-started/`
          : `/docs/${ver}/app/building-your-application/`;
      return Response.redirect(
        `http://localhost:3000${localePrefix}${defaultPage}`,
        302,
      );
    }

    let port = getTargetPort(pathname);

    // For static assets (favicon, CSS, JS), use the same port as last HTML page
    if (pathname.match(/\.(svg|ico|png|jpg|css|js|mjs|woff2?|ttf)$/)) {
      port = lastHtmlPort;
    }

    const target = `http://localhost:${port}`;
    const proxyUrl = `${target}${pathname}${url.search}`;

    try {
      const resp = await fetch(proxyUrl, {
        method: req.method,
        headers: req.headers,
        body: req.body,
      });

      // Track last HTML page port
      const ct = resp.headers.get('content-type') || '';
      if (ct.includes('text/html')) {
        lastHtmlPort = port;
      }

      // Clone headers and remove hop-by-hop headers
      const headers = new Headers(resp.headers);
      headers.delete('transfer-encoding');

      return new Response(resp.body, {
        status: resp.status,
        headers,
      });
    } catch {
      return new Response(`Upstream :${port} not running`, { status: 502 });
    }
  },
});

console.log(`🚀 Router proxy on http://localhost:${server.port}`);
console.log(`   /docs/13/* → :4322`);
console.log(`   /docs/14/* → :4323`);
console.log(`   /docs/15/* → :4324`);
console.log(`   /*         → :4321 (latest)`);
