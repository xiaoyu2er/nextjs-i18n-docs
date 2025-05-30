import { getOramaDocuments } from '@/lib/orama/orama-document';
import { docs } from '@/lib/source';

import { getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { NextResponse } from 'next/server';

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ page: string }> },
) {
  if (process.env.GEN_ORAMA_STATIC !== 'true') {
    throw notFound();
  }
  const { page = '0' } = await params;
  const locale = await getLocale();

  return NextResponse.json(
    await getOramaDocuments(docs, locale, Number.parseInt(page)),
  );
}

export function generateStaticParams() {
  if (process.env.GEN_ORAMA_STATIC !== 'true') return [];

  const pages = docs.getPages();
  const pageSize = 20;
  const pageIndex = Math.ceil(pages.length / pageSize);

  return new Array(pageIndex).fill(0).map((_, i) => {
    return {
      page: `${i}`,
    };
  });
}
