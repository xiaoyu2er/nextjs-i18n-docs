import { routing } from '@/i18n/routing';
import { getPageTreePeers } from '@/lib/pageTree';
import { source } from '@/lib/source';
import { useSource } from '@/lib/useSource';
import { getMDXComponents } from '@/mdx-components';
import { Identity } from '@/mdx/Identity';
import { Void } from '@/mdx/Void';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsBody, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { type Locale, useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

type Page = NonNullable<ReturnType<typeof source.en.getPage>>;

function getDocsUrl(slug: string[] | string | undefined) {
  if (typeof slug === 'string') {
    return `/docs/${slug}`;
  }
  return `/docs/${(slug || []).join('/')}`;
}

function getPage(locale: Locale, url: string): Page | undefined {
  const pages = source[locale].getPages();
  const page = pages.find((page) => page.url === url);
  return page;
}

export default async function Docs(props: {
  params: Promise<{ locale: Locale; slug?: string[] }>;
}) {
  const params = await props.params;
  const slug = params.slug || [];
  const locale = params.locale;
  const docsUrl = getDocsUrl(slug);
  const page = getPage(locale, docsUrl);
  if (!page) notFound();
  let MDXContent = page.data.body;
  let toc = page.data.toc;
  const isAppDocs = slug[0] === 'app';
  const isPagesDocs = slug[0] === 'pages';
  // source: app/getting-started/installation
  const ref = page.data.source;
  if (ref) {
    const refUrl = getDocsUrl(ref);
    const refPage = getPage(locale, refUrl);
    if (!refPage) notFound();
    MDXContent = refPage.data.body;
    toc = refPage.data.toc;
  }

  const hasRelated = page.data.related;
  const isIndex = page.file.name === 'index';

  return (
    <DocsPage
      toc={toc}
      full={page.data.full}
      breadcrumb={{ includePage: true, includeRoot: true }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source[locale], page),
            AppOnly: isAppDocs ? Identity : Void,
            PagesOnly: isPagesDocs ? Identity : Void,
          })}
        />
        {hasRelated ? <DocsRelated page={page} /> : null}
        {!hasRelated && isIndex ? <DocsCategory url={page.url} /> : null}
      </DocsBody>
    </DocsPage>
  );
}

function DocsCategory({ url }: { url: string }) {
  const source = useSource();
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
      return getPage(locale, getDocsUrl(link));
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
  const staticParams = routing.locales.flatMap((locale) => {
    return source[locale].generateParams().map((params) => {
      return {
        locale,
        ...params,
      };
    });
  });
  return staticParams;
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[]; locale: Locale }>;
}) {
  const params = await props.params;
  const url = getDocsUrl(params.slug);
  const page = getPage(params.locale, url);
  if (!page) notFound();

  return {
    title: page.data.nav_title || page.data.title,
    description: page.data.description,
  };
}
