import { type DocsPage, docs } from './source';

export function getPage(url: string): DocsPage | undefined {
  const pages = docs.getPages();
  const page = pages.find((page) => page.url === url);
  return page;
}
