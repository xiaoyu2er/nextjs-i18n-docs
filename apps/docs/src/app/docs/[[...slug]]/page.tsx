import { DocsLayout } from '@/app/docs/[[...slug]]/docs.layout';
import { getPage } from '@/lib/docs';
import { createMetadata } from '@/lib/metadata';
import { getPageTreePeers } from '@/lib/pageTree';
import { getToc } from '@/lib/remark-plugins/toc';
import { type DocsPage, type DocsSource, docs } from '@/lib/source';
import { filterCotent } from '@/lib/toc';
import { getDocId, getDocUrl, parseDocId } from '@/lib/utils';
import { getMDXComponents } from '@/mdx-components';
import { Identity } from '@/mdx/Identity';
import { Void } from '@/mdx/Void';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsBody, DocsTitle, DocsPage as UiDocsPage } from 'fumadocs-ui/page';
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
  const { isApp, isPages, isVLatest, version } = parseDocId(docId);
  let content = page.data.content;

  let { body: MdxContent, toc } = await page.data.load();
  const ref = page.data.source;
  if (ref) {
    const refUrl = getDocUrl(isVLatest ? ref : `${version}/${ref}`);
    const refPage = getPage(refUrl);
    if (!refPage) notFound();
    const { body: MdxContent2, toc: toc2 } = await refPage.data.load();

    content = refPage.data.content;
    MdxContent = MdxContent2;
    toc = toc2;
  }

  const hasRelated = page.data.related;
  const isIndex = page.file.name === 'index';

  if (isApp || isPages) {
    toc = await getToc(filterCotent({ content, isApp, isPages }));
  }

  return (
    <DocsLayout docId={docId} pageTree={docs.pageTree}>
      <UiDocsPage
        toc={toc}
        full={page.data.full}
        breadcrumb={{ includePage: true, includeRoot: true }}
      >
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsBody>
          <MdxContent
            components={getMDXComponents({
              // this allows you to link to other pages with relative file paths
              a: createRelativeLink(docs, page),
              AppOnly: isApp ? Identity : Void,
              PagesOnly: isPages ? Identity : Void,
            })}
          />
          {hasRelated ? <DocsRelated page={page} /> : null}
          {!hasRelated && isIndex ? (
            <DocsCategory url={page.url} source={docs} />
          ) : null}
        </DocsBody>
      </UiDocsPage>
    </DocsLayout>
  );
}

function DocsCategory({ url, source }: { url: string; source: DocsSource }) {
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

function DocsRelated({ page }: { page: DocsPage }) {
  const locale = useLocale();
  const relatedLinks = page.data.related?.links || [];
  const pages = relatedLinks
    .map((link) => {
      return getPage(getDocUrl(link));
    })
    .filter(Boolean) as DocsPage[];
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
  return docs.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const url = getDocUrl(params.slug);
  const page = getPage(url);
  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    pathname: page.url,
    // Use the default image for the docs page
    // image: `https://nextjs.org/api/docs-og?title=${page.data.title}`,
  });
}
