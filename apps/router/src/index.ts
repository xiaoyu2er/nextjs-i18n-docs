/**
 * Router Worker — routes requests to version-specific doc workers
 * via Cloudflare Service Bindings (microfrontends pattern).
 *
 * Version workers are bound as V{major}_DOCS (e.g. V13_DOCS, V14_DOCS).
 * Uses Referer header to route static assets (/_astro/*) to the correct worker.
 */

interface Env {
  LATEST: Fetcher;
  [key: string]: Fetcher | unknown;
}

const LOCALES = ['zh-hans', 'zh-hant', 'ja', 'ar', 'de', 'es', 'fr', 'ru'];

function stripLocale(path: string): string {
  const segments = path.split('/').filter(Boolean);
  if (LOCALES.includes(segments[0])) {
    return '/' + segments.slice(1).join('/');
  }
  return path;
}

/** Extract version number from path like /docs/15/... → "15" */
function extractVersion(path: string): string | null {
  const match = path.match(/^\/docs\/(\d+)(\/|$)/);
  return match ? match[1] : null;
}

/** Get the service binding for a version, e.g. "15" → env.V15_DOCS */
function getVersionWorker(version: string, env: Env): Fetcher | null {
  const binding = env[`V${version}_DOCS`];
  return binding && typeof (binding as Fetcher).fetch === 'function' ? (binding as Fetcher) : null;
}

/** Get worker from path (checks for /docs/{version}/ pattern) */
function getWorkerForPath(path: string, env: Env): Fetcher | null {
  const version = extractVersion(path);
  return version ? getVersionWorker(version, env) : null;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = stripLocale(url.pathname);

    // Version root redirects: /docs/{ver} → /docs/{ver}/app/...
    const version = extractVersion(path);
    if (version) {
      const cleanPath = path.endsWith('/') ? path.slice(0, -1) : path;
      if (cleanPath === `/docs/${version}`) {
        const segments = url.pathname.split('/').filter(Boolean);
        const localePrefix = LOCALES.includes(segments[0]) ? `/${segments[0]}` : '';
        // Default landing page per version
        const defaultPage = Number(version) >= 15
          ? `/docs/${version}/app/getting-started/`
          : `/docs/${version}/app/building-your-application/`;
        return Response.redirect(
          new URL(`${localePrefix}${defaultPage}`, url.origin).href,
          302
        );
      }
    }

    // Route versioned doc pages
    const versionWorker = getWorkerForPath(path, env);
    if (versionWorker) return versionWorker.fetch(request);

    // Static assets — use Referer to find correct worker
    if (!path.startsWith('/docs/') && !path.startsWith('/learn/') && !path.startsWith('/blog/')) {
      const referer = request.headers.get('Referer');
      if (referer) {
        try {
          const refPath = stripLocale(new URL(referer).pathname);
          const refWorker = getWorkerForPath(refPath, env);
          if (refWorker) return refWorker.fetch(request);
        } catch {}
      }
    }

    // Default: latest + learn + blog + everything else
    return env.LATEST.fetch(request);
  },
};
