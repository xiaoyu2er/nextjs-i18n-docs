import { routing } from '@/i18n/routing';
import { getOramaDocuments } from '@/lib/orama/orama-document';
import { sourceMap } from '@/lib/source';
import type { Locale } from 'next-intl';

import { NextResponse } from 'next/server';

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ locale: Locale; page: string }> },
) {
  const { locale, page = '0' } = await params;
  const s = sourceMap[locale];
  if (!s) {
    throw new Error(`No source found for locale: ${locale}`);
  }
  return NextResponse.json(
    await getOramaDocuments(s, locale, Number.parseInt(page)),
  );
}

export function generateStaticParams() {
  const params = routing.locales.flatMap((locale) => {
    const source = sourceMap[locale];
    const pages = source.getPages();
    const pageSize = 20;
    const pageIndex = Math.ceil(pages.length / pageSize);

    return new Array(pageIndex).fill(0).map((_, i) => {
      return {
        locale,
        page: `${i}`,
      };
    });
  });
  // console.log('params', params);
  return params;
}
