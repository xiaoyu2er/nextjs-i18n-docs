import { baseUrl } from '@/lib/metadata';
import { blog, docs, learn } from '@/lib/source';
import type { MetadataRoute } from 'next';

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, baseUrl).toString();

  return [
    {
      url: url('/'),
      changeFrequency: 'monthly',
    },

    {
      url: url('/blog'),
      changeFrequency: 'monthly',
    },

    {
      url: url('/learn'),
    },

    ...(await Promise.all(
      [
        docs
          .getPages()
          // We filter out the pages that start with /docs/13 and /docs/14
          .filter((page) =>
            ['/docs/13', '/docs/14'].every(
              (prefix) => !page.url.startsWith(prefix),
            ),
          ),
        learn.getPages(),
        blog.getPages(),
      ]
        .flat()
        .map(async (page) => {
          return {
            url: url(page.url),
          } as MetadataRoute.Sitemap[number];
        }),
    )),
  ];
}
