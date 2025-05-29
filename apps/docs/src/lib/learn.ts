import { type Learn, learn } from './source';

export function getPage(url: string): Learn | undefined {
  const pages = learn.getPages();
  const page = pages.find((page) => page.url === url);
  return page;
}

export function getChildren(url: string): Learn[] {
  const pages = learn.getPages();
  return pages.filter((page) => page.url.startsWith(url) && page.url !== url);
}
