import { type DocsPage, docs } from './source';

export function getPage(url: string, locale: string = 'en'): DocsPage | undefined {
  const pages = docs.getPages(locale);
  const page = pages.find((page) => page.url === url);
  return page;
}
