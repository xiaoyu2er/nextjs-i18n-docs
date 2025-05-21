import { docs_en, docs_zh_hans } from '@/.source';
import * as icons from '@/mdx/Icon';
import { loader } from 'fumadocs-core/source';
import type { Locale } from 'next-intl';
import { createElement } from 'react';

// See https://fumadocs.dev//docs/headless/source-api for more info
const source_en = loader({
  source: docs_en.toFumadocsSource(),
  // it assigns a URL to your pages
  baseUrl: '/docs',
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
  url(slugs) {
    // remove \d\d- from slug
    const url = `/docs/${slugs
      .map((slug) => {
        return slug.replace(/^\d\d-/, '');
      })
      .join('/')}`;

    return url;
  },
  // https://fumadocs.dev/docs/headless/source-api#page-tree-1
  pageTree: {
    attachFile(node, file) {
      node.name = file?.data.data.nav_title || node.name;
      return node;
    },
  },
});

const source_zh_hans = loader({
  source: docs_zh_hans.toFumadocsSource(),
  // it assigns a URL to your pages
  baseUrl: '/docs',
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
  url(slugs) {
    // remove \d\d- from slug
    const url = `/docs/${slugs
      .map((slug) => {
        return slug.replace(/^\d\d-/, '');
      })
      .join('/')}`;

    return url;
  },
  // https://fumadocs.dev/docs/headless/source-api#page-tree-1
  pageTree: {
    attachFile(node, file) {
      node.name = file?.data.data.nav_title || node.name;
      return node;
    },
  },
});

export const sourceMap: Record<Locale, typeof source_en> = {
  en: source_en,
  'zh-Hans': source_zh_hans,
};

export type Source = typeof source_en;
export type Page = NonNullable<ReturnType<typeof source_en.getPage>>;
