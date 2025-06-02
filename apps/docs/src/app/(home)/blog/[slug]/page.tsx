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
    <main className="min-h-screen bg-fd-background">
      <div className="container max-w-4xl mx-auto px-6 py-16">
        {/* Back Navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors mb-8 group"
        >
          <BackButton />
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            Back to blog
          </span>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
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
        </header>

        {/* Article Content */}
        <article className="prose prose-lg prose-fd max-w-none">
          <Mdx components={getBlogMDXComponents()} />
        </article>

        {/* Footer Navigation */}
        <footer className="mt-16 pt-8 border-t border-fd-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-fd-card border border-fd-border text-fd-foreground font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-purple-400"
          >
            <BackButton />
            Back to all posts
          </Link>
        </footer>
      </div>
    </main>
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
