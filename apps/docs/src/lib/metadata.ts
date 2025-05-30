import { SITES } from '@next-i18n/const';
import type { Metadata } from 'next/types';

export function createMetadata(
  override: Metadata & { pathname?: string; image?: string },
): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: '/twitter-card.png',
      siteName: 'nextjs.im',
      ...(override.image
        ? {
            images: override.image,
          }
        : {}),
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@xiaoyu2er',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: '/twitter-card.png',
      ...(override.image
        ? {
            images: override.image,
          }
        : {}),
      ...override.twitter,
    },
    ...(override.pathname
      ? {
          alternates: {
            canonical: baseUrl.origin + override.pathname,
            languages: {
              'en-US': SITES.en + override.pathname,
              'zh-Hans': SITES['zh-hans'] + override.pathname,
              'zh-Hant': SITES['zh-hant'] + override.pathname,
            },
          },
        }
      : {}),
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development' ||
  !process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
    ? new URL('http://localhost:3000')
    : new URL(
        `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`,
      );
