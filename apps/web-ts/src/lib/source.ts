import * as icons from '@/mdx/Icon';
import { loader } from 'fumadocs-core/source';
import { docs as docsPosts, blog as blogEntries, learn as learnPosts } from 'collections/server';
import { createElement } from 'react';
import { getDocUrl } from './utils';

export const docs = loader({
  source: docsPosts.toFumadocsSource(),
  baseUrl: '/docs',
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
  url(slugs) {
    return getDocUrl(slugs);
  },
});

// Blog uses defineCollections (simple doc collection), not defineDocs
// Access directly without loader wrapper
export const blog = blogEntries;

export const learn = loader({
  source: learnPosts.toFumadocsSource(),
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

export type DocsSource = typeof docs;
export type LearnSource = typeof learn;
export type DocsPage = NonNullable<ReturnType<typeof docs.getPage>>;
export type LearnPage = NonNullable<ReturnType<typeof learn.getPage>>;
