/**
 * Local dev proxy that mimics the Router Worker.
 * Routes requests to version-specific Astro dev servers.
 *
 * Usage: bun run dev-proxy.ts
 */

const LOCALES = ['zh-hans', 'zh-hant', 'ja', 'ar', 'de', 'es', 'fr', 'ru'];

const ROUTES: Array<{ prefix: string; port: number }> = [
  { prefix: '/docs/13', port: 4322 },
  { prefix: '/docs/14', port: 4323 },
  { prefix: '/docs/15', port: 4324 },
];
const DEFAULT_PORT = 4321;

function getTargetPort(pathname: string): number {
  const segments = pathname.split('/').filter(Boolean);
  let matchPath = pathname;
  if (LOCALES.includes(segments[0])) {
    matchPath = '/' + segments.slice(1).join('/');
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
      return new Response('WebSocket not proxied — connect directly to worker port', { status: 426 });
    }

    // Version root redirects
    const versionRedirects: Record<string, string> = {
      '/docs/15': '/docs/15/app/getting-started/',
      '/docs/14': '/docs/14/app/building-your-application/',
      '/docs/13': '/docs/13/app/building-your-application/',
    };
    const segments = pathname.split('/').filter(Boolean);
    let matchPath = pathname;
    if (LOCALES.includes(segments[0])) {
      matchPath = '/' + segments.slice(1).join('/');
    }
    const cleanPath = matchPath.endsWith('/') ? matchPath.slice(0, -1) : matchPath;
    if (versionRedirects[cleanPath]) {
      const localePrefix = LOCALES.includes(segments[0]) ? `/${segments[0]}` : '';
      return Response.redirect(`http://localhost:3000${localePrefix}${versionRedirects[cleanPath]}`, 302);
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
