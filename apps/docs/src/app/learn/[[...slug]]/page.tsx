import { getChildren, getPage } from '@/lib/learn';
import { createMetadata } from '@/lib/metadata';
import { learn } from '@/lib/source';
import { getLearnUrl } from '@/lib/utils';
import { getLearnMDXComponents } from '@/mdx-components';

import {
  NextLearnAppIcon,
  NextLearnPagesIcon,
  NextLearnReactIcon,
  NextLearnSeoIcon,
} from '@/mdx/Icon';
import type { Option } from 'fumadocs-ui/components/layout/root-toggle';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsBody, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { DocsLayout } from './learn.layout';

function getTabs() {
  const URLS = [
    '/learn/react-foundations',
    '/learn/dashboard-app',
    '/learn/pages-router',
    '/learn/seo',
  ];

  const Icons: Record<(typeof URLS)[number], ReactNode> = {
    '/learn/react-foundations': <NextLearnReactIcon />,
    '/learn/dashboard-app': <NextLearnAppIcon />,
    '/learn/pages-router': <NextLearnPagesIcon />,
    '/learn/seo': <NextLearnSeoIcon />,
  };

  const tabs = URLS.map((url) => {
    const page = getPage(url);
    if (!page) return null;
    const pages = getChildren(url);
    return {
      url: page.url,
      title: page.data.title,
      description: `${pages.length + 1} chapters`,
      icon: Icons[page.url],
    };
  }).filter(Boolean) as Option[];
  return tabs;
}

export default async function Docs(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const slug = params.slug || [];

  const learnUrl = getLearnUrl(slug);
  const page = getPage(learnUrl);

  if (!page) notFound();

  // @ts-ignore
  const { body: MdxContent, toc } = page.data.load
    ? // @ts-ignore
      await page.data.load()
    : page.data;

  return (
    <DocsLayout tree={learn.pageTree} tabs={getTabs()}>
      <DocsPage toc={toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsBody>
          <MdxContent
            components={getLearnMDXComponents({
              // this allows you to link to other pages with relative file paths
              a: createRelativeLink(learn, page),
            })}
          />
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
}

export async function generateStaticParams() {
  if (process.env.GEN_DOC_STATIC !== 'true') return [];
  return learn.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const url = getLearnUrl(params.slug);
  const page = getPage(url);
  if (!page) notFound();

  return createMetadata({
    title: page.data.headline || page.data.title,
    description: page.data.description,
  });
}
