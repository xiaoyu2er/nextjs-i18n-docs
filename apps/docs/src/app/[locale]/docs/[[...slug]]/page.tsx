import { DocsLayout } from '@/components/layout';
import { getPage } from '@/lib/page';
import { getDocsLayoutTree, getPageTreePeers } from '@/lib/pageTree';
import { type Page, type Source, sourceMap } from '@/lib/source';
import { getDocId, getDocUrl, parseDocId } from '@/lib/utils';
import { getMDXComponents } from '@/mdx-components';
import { Identity } from '@/mdx/Identity';
import { Void } from '@/mdx/Void';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsBody, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { type Locale, useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

export default async function Docs(props: {
  params: Promise<{ locale: Locale; slug?: string[] }>;
}) {
  const params = await props.params;
  const slug = params.slug || [];
  const locale = params.locale;
  const source = sourceMap[locale];
  const docUrl = getDocUrl(slug);
  const docId = getDocId(locale, docUrl);
  const page = getPage(locale, docUrl);
  if (!page) notFound();
  const { isApp, isPages } = parseDocId(docId);
  // Markdown content requires await
  let { body: MdxContent, toc } = await page.data.load();

  // source: app/getting-started/installation
  const ref = page.data.source;
  if (ref) {
    const refUrl = getDocUrl(ref);
    const refPage = getPage(locale, refUrl);
    if (!refPage) notFound();
    const { body: MdxContent2, toc: toc2 } = await refPage.data.load();

    MdxContent = MdxContent2;
    toc = toc2;
  }

  const hasRelated = page.data.related;
  const isIndex = page.file.name === 'index';

  return (
    <DocsLayout
      docId={docId}
      pageTree={getDocsLayoutTree(source.pageTree, slug)}
    >
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
      return getPage(locale, getDocUrl(link));
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

// export async function generateStaticParams() {
//   const staticParams = routing.locales.flatMap((locale) => {
//     return sourceMap[locale].generateParams().map((params) => {
//       return {
//         locale,
//         ...params,
//       };
//     });
//   });
//   return staticParams;
// }

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[]; locale: Locale }>;
}) {
  const params = await props.params;
  const url = getDocUrl(params.slug);
  const page = getPage(params.locale, url);
  if (!page) notFound();

  return {
    title: page.data.nav_title || page.data.title,
    description: page.data.description,
  };
}
