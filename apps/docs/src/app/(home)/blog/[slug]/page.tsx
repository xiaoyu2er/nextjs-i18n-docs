import { createMetadata } from '@/lib/metadata';
import { blog } from '@/lib/source';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getBlogMDXComponents } from '@/mdx-components';
import { BackButton } from '@/mdx/Icon';
import Link from 'next/link';

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const { body: Mdx, toc } = await page.data.load();

  return (
    <div className="container my-6 max-w-[860px]">
      <Link
        href="/blog"
        className="text-sm mb-12 text-fd-muted-foreground inline-flex items-center gap-2 hover:text-fd-foreground transition-colors"
      >
        <BackButton /> Back to blog
      </Link>

      {page.data.date && (
        <p className=" text-neutral-600 py-2">
          {new Date(page.data.date).toDateString()}
        </p>
      )}

      <h1 className="mb-2 text-5xl font-bold py-6">{page.data.title}</h1>

      <div className="prose">
        <Mdx components={getBlogMDXComponents()} />
      </div>
    </div>
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
  if (process.env.GEN_DOC_STATIC !== 'true') return [];
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
