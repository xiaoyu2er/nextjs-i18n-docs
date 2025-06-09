import {
  blog as blogPosts,
  docs as docsPosts,
  learn as learnPosts,
} from '@/.source';
import * as icons from '@/mdx/Icon';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import { createElement } from 'react';
import { getDocUrl } from './utils';

// See https://fumadocs.dev//docs/headless/source-api for more info
export const docs = loader({
  source: docsPosts.toFumadocsSource(),
  // it assigns a URL to your pages
  baseUrl: '/docs',
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
  url(slugs) {
    return getDocUrl(slugs);
  },
  // https://fumadocs.dev/docs/headless/source-api#page-tree-1
  pageTree: {
    attachFile(node, file) {
      node.name = file?.data.data.nav_title || node.name;
      return node;
    },
  },
});

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts),
});

export const learn = loader({
  source: learnPosts.toFumadocsSource(),
  // it assigns a URL to your pages
  baseUrl: '/learn',
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
  url(slugs) {
    // remove \d\d- from slug
    const url = `/learn/${slugs
      .map((slug) => {
        return slug.replace(/^\d\d-/, '');
      })
      .join('/')}`;

    return url;
  },
});

export type DocsSource = typeof docs;
export type BlogSource = typeof blog;
export type LearnSource = typeof learn;
export type DocsPage = NonNullable<ReturnType<typeof docs.getPage>>;
export type BlogPage = NonNullable<ReturnType<typeof blog.getPage>>;
export type LearnPage = NonNullable<ReturnType<typeof learn.getPage>>;
