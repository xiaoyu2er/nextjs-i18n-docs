import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const t = useTranslations('baseOptions');
  const docsLayout: DocsLayoutProps = {
    ...baseOptions({ title: t('title') }),
    tree: source.pageTree,
  };

  return <DocsLayout {...docsLayout}>{children}</DocsLayout>;
}
