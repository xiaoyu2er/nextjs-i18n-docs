import { createFileRoute, notFound } from '@tanstack/react-router';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { createServerFn } from '@tanstack/react-start';
import { docs, LANGUAGES } from '@/lib/source';
import { getPage } from '@/lib/docs';
import browserCollections from 'collections/browser';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { baseOptions } from '@/lib/layout.shared';
import { useFumadocsLoader } from 'fumadocs-core/source/client';
import { Suspense } from 'react';
import { useMDXComponents } from '@/components/mdx';

export const Route = createFileRoute('/$locale/docs/$')({
  component: Page,
  loader: async ({ params }) => {
    const locale = params.locale;
    if (!LANGUAGES.includes(locale)) throw notFound();
    
    const slugs = params._splat?.split('/') ?? [];
    const data = await serverLoader({ data: { slugs, locale } });
    await clientLoader.preload(data.path);
    return data;
  },
});

const serverLoader = createServerFn({
  method: 'GET',
})
  .inputValidator((input: { slugs: string[]; locale: string }) => input)
  .handler(async ({ data: { slugs, locale } }) => {
    const url = `/docs/${slugs.join('/')}`;
    const page = getPage(url, locale);
    if (!page) throw notFound();

    return {
      slugs: page.slugs,
      path: page.path,
      locale,
      pageTree: await docs.serializePageTree(docs.getPageTree(locale)),
    };
  });

const clientLoader = browserCollections.docs.createClientLoader({
  component({ toc, frontmatter, default: MDX }) {
    return (
      <DocsPage toc={toc}>
        <DocsTitle>{frontmatter.title}</DocsTitle>
        <DocsDescription>{frontmatter.description}</DocsDescription>
        <DocsBody>
          <MDX components={useMDXComponents()} />
        </DocsBody>
      </DocsPage>
    );
  },
});

function Page() {
  const data = useFumadocsLoader(Route.useLoaderData());

  return (
    <DocsLayout {...baseOptions()} tree={(data as any).pageTree}>
      <Suspense>{clientLoader.useContent(data.path)}</Suspense>
    </DocsLayout>
  );
}
