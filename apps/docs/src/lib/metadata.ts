import { LOCALES, LOCALE_URL_MAP } from '@next-i18n/const';
import type { Locale } from 'next-intl';
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
            languages: LOCALES.reduce(
              (acc, site) => {
                if (site.enabled) {
                  acc[site.locale] = new URL(site.url + override.pathname).href;
                }
                return acc;
              },
              {} as Record<Locale, string>,
            ),
          },
        }
      : {}),
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? new URL('http://localhost:3000')
    : new URL(
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        LOCALE_URL_MAP[process.env.LOCALE!],
      );
