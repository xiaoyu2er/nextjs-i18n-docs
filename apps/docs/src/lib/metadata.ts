import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: '/twitter-card.png',
      siteName: 'nextjs.im',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@xiaoyu2er',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: '/twitter-card.png',
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development' ||
  !process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
    ? new URL('http://localhost:3000')
    : new URL(
        `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`,
      );
