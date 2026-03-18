import { createMetadata } from '@/lib/metadata';
import { blog } from '@/lib/source';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageClient from './page.client';

import { getBlogMDXComponents } from '@/mdx-components';

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const { body: Mdx, toc } = await page.data.load();

  return (
    <PageClient
      head={
        <>
          {page.data.date && (
            <time className="text-sm text-fd-muted-foreground bg-fd-accent px-3 py-1 rounded-full inline-block mb-6">
              {new Date(page.data.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-fd-foreground leading-tight mb-6">
            {page.data.title}
          </h1>

          {page.data.description && (
            <p className="text-xl text-fd-muted-foreground leading-relaxed max-w-3xl">
              {page.data.description}
            </p>
          )}
        </>
      }
    >
      <Mdx components={getBlogMDXComponents()} />
    </PageClient>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const url = page.url;

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    pathname: url,
    image: page.data.image,
  });
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
