import { type Page, source } from './source';

export function getPage(url: string): Page | undefined {
  const pages = source.getPages();
  const page = pages.find((page) => page.url === url);
  return page;
}
