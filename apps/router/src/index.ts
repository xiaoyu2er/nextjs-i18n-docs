/**
 * Router Worker — routes requests to version-specific doc workers
 * via Cloudflare Service Bindings (microfrontends pattern).
 *
 * Routes /docs/13/* → V13, /docs/14/* → V14, /docs/15/* → V15, else → LATEST.
 * Uses Referer header to route static assets (/_astro/*) to the correct worker.
 */

interface Env {
  LATEST: Fetcher;
  V13_DOCS: Fetcher;
  V14_DOCS: Fetcher;
  V15_DOCS: Fetcher;
}

const LOCALES = ['zh-hans', 'zh-hant', 'ja', 'ar', 'de', 'es', 'fr', 'ru'];

const VERSION_REDIRECTS: Record<string, string> = {
  '/docs/15': '/docs/15/app/getting-started/',
  '/docs/14': '/docs/14/app/building-your-application/',
  '/docs/13': '/docs/13/app/building-your-application/',
};

function stripLocale(path: string): string {
  const segments = path.split('/').filter(Boolean);
  if (LOCALES.includes(segments[0])) {
    return '/' + segments.slice(1).join('/');
  }
  return path;
}

function getVersionWorker(path: string, env: Env): Fetcher | null {
  if (path.startsWith('/docs/13')) return env.V13_DOCS;
  if (path.startsWith('/docs/14')) return env.V14_DOCS;
  if (path.startsWith('/docs/15')) return env.V15_DOCS;
  return null;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = stripLocale(url.pathname);

    // Version root redirects
    const cleanPath = path.endsWith('/') ? path.slice(0, -1) : path;
    if (VERSION_REDIRECTS[cleanPath]) {
      const segments = url.pathname.split('/').filter(Boolean);
      const localePrefix = LOCALES.includes(segments[0]) ? `/${segments[0]}` : '';
      return Response.redirect(
        new URL(`${localePrefix}${VERSION_REDIRECTS[cleanPath]}`, url.origin).href,
        302
      );
    }

    // Route versioned doc pages
    const versionWorker = getVersionWorker(path, env);
    if (versionWorker) return versionWorker.fetch(request);

    // Static assets (/_astro/*, /favicon.svg, etc.) — use Referer to find correct worker
    if (!path.startsWith('/docs/') && !path.startsWith('/learn/') && !path.startsWith('/blog/')) {
      const referer = request.headers.get('Referer');
      if (referer) {
        try {
          const refPath = stripLocale(new URL(referer).pathname);
          const refWorker = getVersionWorker(refPath, env);
          if (refWorker) return refWorker.fetch(request);
        } catch {}
      }
    }

    // Default: latest (v16) + learn + blog + everything else
    return env.LATEST.fetch(request);
  },
};
