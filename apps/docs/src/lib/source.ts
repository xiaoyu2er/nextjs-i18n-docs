import { docs } from '@/.source';
import { blog as blogPosts, learn as learnPosts } from '@/.source';
import * as icons from '@/mdx/Icon';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import { createElement } from 'react';

// See https://fumadocs.dev//docs/headless/source-api for more info
export const source = loader({
  source: docs.toFumadocsSource(),
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

export type Source = typeof source;
export type Page = NonNullable<ReturnType<typeof source.getPage>>;
export type Blog = NonNullable<ReturnType<typeof blog.getPage>>;
export type Learn = NonNullable<ReturnType<typeof learn.getPage>>;
