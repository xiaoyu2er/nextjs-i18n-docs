import type { Locale } from 'next-intl';
import { type Page, sourceMap } from './source';

export function getPage(locale: Locale, url: string): Page | undefined {
  const pages = sourceMap[locale].getPages();
  const page = pages.find((page) => page.url === url);
  return page;
}
