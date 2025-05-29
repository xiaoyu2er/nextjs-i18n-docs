import { getLearnTabs, getPage } from '@/lib/learn';
import { createMetadata } from '@/lib/metadata';
import { learn } from '@/lib/source';
import { getLearnUrl } from '@/lib/utils';
import { getLearnMDXComponents } from '@/mdx-components';

import { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsBody, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { DocsLayout } from './learn.layout';

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
    <DocsLayout tree={learn.pageTree} tabs={getLearnTabs()}>
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
