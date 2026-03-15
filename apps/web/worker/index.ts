import { WorkerEntrypoint } from 'cloudflare:workers';

interface Env {
  ASSETS: Fetcher;
}

export default class extends WorkerEntrypoint<Env> {
  override async fetch(request: Request) {
    const url = new URL(request.url);

    // TODO: Handle legacy subdomain redirects
    // e.g., zh-hans.nextjs.im/docs/... → nextjs.im/zh-hans/docs/...

    // Serve static assets
    return this.env.ASSETS.fetch(request);
  }
}
