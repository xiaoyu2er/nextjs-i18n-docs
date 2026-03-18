import * as icons from '@/mdx/Icon';
import { loader } from 'fumadocs-core/source';
import { docs as docsPosts, blog as blogEntries, learn as learnPosts } from 'collections/server';
import { createElement } from 'react';
import { getDocUrl } from './utils';

const LANGUAGES = ['en', 'zh-hans', 'zh-hant', 'ja', 'ar', 'de', 'es', 'fr', 'ru'];

const i18nConfig = {
  languages: LANGUAGES,
  defaultLanguage: 'en',
  parser: 'dir' as const,
};

export const docs = loader({
  source: docsPosts.toFumadocsSource(),
  i18n: i18nConfig,
  baseUrl: '/docs',
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
  url(slugs) {
    return getDocUrl(slugs);
  },
});

// Blog uses defineCollections (simple doc collection)
export const blog = blogEntries;

export const learn = loader({
  source: learnPosts.toFumadocsSource(),
  i18n: i18nConfig,
  baseUrl: '/learn',
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
  url(slugs) {
    const url = `/learn/${slugs
      .map((slug) => slug.replace(/^\d\d-/, ''))
      .join('/')}`;
    return url;
  },
});

export { LANGUAGES, i18nConfig };

export type DocsSource = typeof docs;
export type LearnSource = typeof learn;
export type DocsPage = NonNullable<ReturnType<typeof docs.getPage>>;
export type LearnPage = NonNullable<ReturnType<typeof learn.getPage>>;
