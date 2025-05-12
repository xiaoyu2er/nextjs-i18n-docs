'use client';

import { baseOptions } from '@/app/layout.config';
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
  };

  return <FumaDocsLayout {...docsLayout}>{children}</FumaDocsLayout>;
}
