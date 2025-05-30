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
      priority: 1,
    },

    {
      url: url('/blog'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: url('/learn'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    ...(await Promise.all(
      [docs.getPages(), learn.getPages(), blog.getPages()]
        .flat()
        .map(async (page) => {
          const { 'translation-updated-at': lastModified } = page.data;
          return {
            url: url(page.url),
            lastModified: lastModified ? new Date(lastModified) : undefined,
            changeFrequency: 'weekly',
            priority: 0.5,
          } as MetadataRoute.Sitemap[number];
        }),
    )),
  ];
}
