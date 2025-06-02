import { BackButton } from '@/mdx/Icon';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function Page({
  head,
  children,
}: {
  head: ReactNode;
  children: ReactNode;
}) {
  const t = useTranslations('BlogPage');

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
            {t('backToBlog')}
          </span>
        </Link>

        {/* Article Header */}
        <header className="mb-12">{head}</header>

        {/* Article Content */}
        <article className="prose prose-lg prose-fd max-w-none">
          {children}
        </article>
      </div>
    </main>
  );
}
