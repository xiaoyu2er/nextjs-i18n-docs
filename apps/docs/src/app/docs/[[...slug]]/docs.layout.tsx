'use client';

import { useBaseOptions } from '@/hooks/useLayoutOptions';
import { useRouterType } from '@/hooks/useRouterType';
import type { RouterType } from '@/lib/const';
import { getDocsLayoutTree } from '@/lib/pageTree';
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
import { useTranslations } from 'next-intl';
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
  const routerType = useRouterType();
  const baseOptions = useBaseOptions();
  const t = useTranslations('sidebar');
  const tree = getDocsLayoutTree(pageTree, docId, routerType);
  const { appDocsRoot, pagesDocsRoot, docsRoot, docUrl, isPages } =
    parseDocId(docId);
  const options = [
    {
      title: t('app.title'),
      description: t('app.description'),
      icon: <NextAppIcon />,
      url: appDocsRoot,
      ...(routerType !== 'pages' ? { urls: new Set([docUrl]) } : {}),
    },
    {
      title: t('pages.title'),
      description: t('pages.description'),
      icon: <NextPagesIcon />,
      url: pagesDocsRoot,
      ...(routerType === 'pages' ? { urls: new Set([docUrl]) } : {}),
    },
  ];

  const docsLayout: DocsLayoutProps = {
    ...baseOptions,
    tree,
    sidebar: {
      banner: (
        <>
          <RootToggle options={options} />
          <RootToggle
            options={[
              {
                title: t('version.latest.title'),
                description: '15.3.2',
                icon: <NextLastedVersionIcon />,
                url: '/docs/',
              },
              {
                title: t('version.v14.title'),
                description: '14.2.29',
                icon: <NextOldVersionIcon />,
                url: '/docs/14',
              },
              {
                title: t('version.v13.title'),
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
