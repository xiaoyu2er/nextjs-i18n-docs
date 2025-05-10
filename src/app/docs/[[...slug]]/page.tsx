import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import { Identity } from "@/mdx/Identity";
import { Void } from "@/mdx/Void";
import { get } from "http";

export function getDocsUrl(slug: string[] | string | undefined) {
  if (typeof slug === "string") {
    return `/docs/${slug}`;
  }
  return `/docs/${(slug || []).join("/")}`;
}

export function getPage(url: string) {
  const pages = source.getPages();
  const page = pages.find((page) => page.url === url);
  console.log("getPage", page);
  return page;
}

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const slug = params.slug || [];
  const docsUrl = getDocsUrl(slug);
  const page = getPage(docsUrl);
  if (!page) notFound();
  let MDXContent = page.data.body;
  const isAppDocs = slug[0] === "app";
  const isPagesDocs = slug[0] === "pages";
  // source: app/getting-started/installation
  const ref = page.data.source;
  if (ref) {
    const refUrl = getDocsUrl(ref);
    const refPage = getPage(refUrl);
    if (!refPage) notFound();
    MDXContent = refPage.data.body;
  }

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
            AppOnly: isAppDocs ? Identity : Void,
            PagesOnly: isPagesDocs ? Identity : Void,
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const url = getDocsUrl(params.slug);
  const page = getPage(url);
  if (!page) notFound();

  return {
    title: page.data.nav_title || page.data.title,
    description: page.data.description,
  };
}
