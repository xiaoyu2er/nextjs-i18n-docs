'use client';

import { useBaseOptions } from '@/hooks/useLayoutOptions';
import { getPage } from '@/lib/learn';
import { getLearnSidebarTree } from '@/lib/pageTree';
import { Learn } from '@/lib/source';

import type { PageTree } from 'fumadocs-core/server';
import type { Option } from 'fumadocs-ui/components/layout/root-toggle';
import {
  type DocsLayoutProps,
  DocsLayout as FumaDocsLayout,
} from 'fumadocs-ui/layouts/notebook';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export function DocsLayout({
  children,
  tree,
  tabs,
}: {
  children: ReactNode;
  tree: PageTree.Root;
  tabs: Option[];
}) {
  const pathname = usePathname();
  const baseOptions = useBaseOptions();
  const sidebarTree = getLearnSidebarTree(tree, pathname);
  const docsLayout: DocsLayoutProps = {
    ...baseOptions,
    links: [],
    tree: sidebarTree,
    sidebar: {
      tabs,
    },
  };

  return <FumaDocsLayout {...docsLayout}>{children}</FumaDocsLayout>;
}
