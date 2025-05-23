import { DocsLayout } from '@/components/layout';
import { getPage } from '@/lib/page';
import { getPageTreePeers } from '@/lib/pageTree';
import { type Page, type Source, source } from '@/lib/source';
import { getDocId, getDocUrl, parseDocId } from '@/lib/utils';
import { getMDXComponents } from '@/mdx-components';
import { Identity } from '@/mdx/Identity';
import { Void } from '@/mdx/Void';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsBody, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { type Locale, useLocale } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function Docs(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const locale: Locale = await getLocale();
  const params = await props.params;
  const slug = params.slug || [];
  const docUrl = getDocUrl(slug);
  const docId = getDocId(locale, docUrl);
  const page = getPage(docUrl);
  if (!page) notFound();
  const { isApp, isPages } = parseDocId(docId);
  // @ts-ignore
  let { body: MdxContent, toc } = page.data.load
    ? // @ts-ignore
      await page.data.load()
    : page.data;

  // source: app/getting-started/installation
  const ref = page.data.source;
  if (ref) {
    const refUrl = getDocUrl(ref);
    const refPage = getPage(refUrl);
    if (!refPage) notFound();
    // @ts-ignore
    const { body: MdxContent2, toc: toc2 } = refPage.data.load
      ? // @ts-ignore
        await refPage.data.load()
      : refPage.data;

    MdxContent = MdxContent2;
    toc = toc2;
  }

  const hasRelated = page.data.related;
  const isIndex = page.file.name === 'index';

  return (
    <DocsLayout docId={docId} pageTree={source.pageTree}>
      <DocsPage
        toc={toc}
        full={page.data.full}
        breadcrumb={{ includePage: true, includeRoot: true }}
      >
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsBody>
          <MdxContent
            components={getMDXComponents({
              // this allows you to link to other pages with relative file paths
              a: createRelativeLink(source, page),
              AppOnly: isApp ? Identity : Void,
              PagesOnly: isPages ? Identity : Void,
            })}
          />
          {hasRelated ? <DocsRelated page={page} /> : null}
          {!hasRelated && isIndex ? (
            <DocsCategory url={page.url} source={source} />
          ) : null}
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
}

function DocsCategory({ url, source }: { url: string; source: Source }) {
  const peers = getPageTreePeers(source.pageTree, url);

  return (
    <Cards>
      {peers.map((peer) => (
        <Card key={peer.url} title={peer.name} href={peer.url}>
          {peer.description}
        </Card>
      ))}
    </Cards>
  );
}

function DocsRelated({ page }: { page: Page }) {
  const locale = useLocale();
  const relatedLinks = page.data.related?.links || [];
  const pages = relatedLinks
    .map((link) => {
      return getPage(getDocUrl(link));
    })
    .filter(Boolean) as Page[];
  return (
    <Cards>
      {pages.map((page) => {
        return (
          <Card
            key={page.url}
            title={page.data.nav_title || page.data.title}
            href={page.url}
          >
            {page.data.description}
          </Card>
        );
      })}
    </Cards>
  );
}

export async function generateStaticParams() {
  if (process.env.GEN_DOC_STATIC !== 'true') return [];
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const url = getDocUrl(params.slug);
  const page = getPage(url);
  if (!page) notFound();

  return {
    title: page.data.nav_title || page.data.title,
    description: page.data.description,
  };
}
