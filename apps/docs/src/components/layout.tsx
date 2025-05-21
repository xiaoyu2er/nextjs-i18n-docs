'use client';

import { baseOptions } from '@/app/[locale]/layout.config';
import type { PageTree } from 'fumadocs-core/server';
import {
  type DocsLayoutProps,
  DocsLayout as FumaDocsLayout,
} from 'fumadocs-ui/layouts/docs';
import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

export function DocsLayout({
  children,
  pageTree,
}: { children: ReactNode; pageTree: PageTree.Root }) {
  const t = useTranslations('baseOptions');
  const docsLayout: DocsLayoutProps = {
    ...baseOptions({ title: t('title') }),
    tree: pageTree,
    sidebar: {},
    githubUrl: 'https://github.com/xiaoyu2er/nextjs-i18n-docs',
  };

  return <FumaDocsLayout {...docsLayout}>{children}</FumaDocsLayout>;
}
