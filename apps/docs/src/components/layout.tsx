'use client';

import { useBaseOptions } from '@/hooks/useLayoutOptions';
import { parseDocId } from '@/lib/utils';
import {
  NextAppIcon,
  NextLastedVersionIcon,
  NextOldVersionIcon,
  NextPagesIcon,
} from '@/mdx/Icon';
import type { PageTree } from 'fumadocs-core/server';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import {
  type DocsLayoutProps,
  DocsLayout as FumaDocsLayout,
} from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';

export function DocsLayout({
  children,
  pageTree,
  docId,
}: {
  children: ReactNode;
  pageTree: PageTree.Root;
  docId: string;
}) {
  const baseOptions = useBaseOptions();
  const { appDocsRoot, pagesDocsRoot, docsRoot } = parseDocId(docId);

  const docsLayout: DocsLayoutProps = {
    ...baseOptions,
    links: [],
    tree: pageTree,
    sidebar: {
      banner: (
        <>
          <RootToggle
            options={[
              {
                title: 'Using App Router',
                description: 'Features available in /app',
                icon: <NextAppIcon />,
                url: appDocsRoot,
                urls: new Set([docsRoot, appDocsRoot]),
              },
              {
                title: 'Using Pages Router',
                description: 'Features available in /pages',
                icon: <NextPagesIcon />,
                url: pagesDocsRoot,
              },
            ]}
          />
          <RootToggle
            options={[
              {
                title: 'Using Latest Version',
                description: '15.3.2',
                icon: <NextLastedVersionIcon />,
                url: '/docs/',
              },
              {
                title: 'Using Version 14',
                description: '14.2.29',
                icon: <NextOldVersionIcon />,
                url: '/docs/14',
              },
              {
                title: 'Using Version 13',
                description: '13.5.11',
                icon: <NextOldVersionIcon />,
                url: '/docs/13',
              },
            ]}
          />
        </>
      ),
    },
  };

  return <FumaDocsLayout {...docsLayout}>{children}</FumaDocsLayout>;
}
