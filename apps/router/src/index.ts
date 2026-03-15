/**
 * Router Worker — routes requests to version-specific doc workers
 * via Cloudflare Service Bindings (microfrontends pattern).
 */

interface Env {
  LATEST: Fetcher;
  V13_DOCS: Fetcher;
  V14_DOCS: Fetcher;
  V15_DOCS: Fetcher;
}

const LOCALES = ['zh-hans', 'zh-hant', 'ja', 'ar', 'de', 'es', 'fr', 'ru'];

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    let path = url.pathname;

    // Strip locale prefix for route matching
    const segments = path.split('/').filter(Boolean);
    if (LOCALES.includes(segments[0])) {
      path = '/' + segments.slice(1).join('/');
    }

    // Version root redirects
    const versionRedirects: Record<string, string> = {
      '/docs/15': '/docs/15/app/getting-started/',
      '/docs/14': '/docs/14/app/building-your-application/',
      '/docs/13': '/docs/13/app/building-your-application/',
    };

    // Check exact match (with or without trailing slash)
    const cleanPath = path.endsWith('/') ? path.slice(0, -1) : path;
    if (versionRedirects[cleanPath]) {
      // Preserve locale prefix in redirect
      const localePrefix = segments.length > 0 && LOCALES.includes(segments[0]) ? `/${segments[0]}` : '';
      return Response.redirect(new URL(`${localePrefix}${versionRedirects[cleanPath]}`, url.origin).href, 302);
    }

    // Route to version-specific workers
    if (path.startsWith('/docs/13')) return env.V13_DOCS.fetch(request);
    if (path.startsWith('/docs/14')) return env.V14_DOCS.fetch(request);
    if (path.startsWith('/docs/15')) return env.V15_DOCS.fetch(request);

    // Default: latest (v16) + learn + blog + everything else
    return env.LATEST.fetch(request);
  },
};
