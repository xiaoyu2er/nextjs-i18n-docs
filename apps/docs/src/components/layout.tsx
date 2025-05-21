'use client';

import { useBaseOptions } from '@/hooks/useLayoutOptions';
import type { PageTree } from 'fumadocs-core/server';
import {
  type DocsLayoutProps,
  DocsLayout as FumaDocsLayout,
} from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

export function DocsLayout({
  children,
  pageTree,
}: {
  children: ReactNode;
  pageTree: PageTree.Root;
}) {
  const baseOptions = useBaseOptions();
  const docsLayout: DocsLayoutProps = {
    ...baseOptions,
    tree: pageTree,
    sidebar: {},
  };

  return <FumaDocsLayout {...docsLayout}>{children}</FumaDocsLayout>;
}
