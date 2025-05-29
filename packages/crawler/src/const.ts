import path from 'node:path';
export const BLOG_INDEX_URL = 'https://nextjs.org/blog';
export const NEXT_JS_URL = 'https://nextjs.org';

export const CONTENT_DIR = path.join(
  import.meta.filename,
  '../../../..',
  'apps/docs/content/en',
);

export const userAgents = [
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
];

export const headers = {
  accept:
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'accept-language':
    'en-US,en;q=0.9,da;q=0.8,zh-TW;q=0.7,zh;q=0.6,ja;q=0.5,de;q=0.4,fr;q=0.3,pt;q=0.2,zh-CN;q=0.1',
  'cache-control': 'no-cache',
  pragma: 'no-cache',
  'sec-ch-ua':
    '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  'sec-fetch-dest': 'document',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-site': 'none',
  'sec-fetch-user': '?1',
  'upgrade-insecure-requests': '1',
  cookie:
    '__cf_bm=Jx6axE9.9fCxMvkXAMKQH2leCY3QDw8_UUjHWutsStE-1705958633-1-AeQiu1fCUYPAIzNQgyelbRDvALpIMeIURdJf0cJUxO4l0kwnvpvBMiC1TjNsUWMEWCxqRdJfYY9o1pD9vYPCgXY=; _ga=GA1.2.1698023326.1705958634; _gid=GA1.2.33889270.1705958634',
};

export const crawlerOptions = {
  maxConnections: 10,
  userAgents: userAgents,
  headers: headers,
};
