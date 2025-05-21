import type { OramaDocument } from 'fumadocs-core/search/orama-cloud';
import type { Locale } from 'next-intl';
import { structure } from '../remark-plugins/remark-structure';
import type { Source } from '../source';
import { getDocId, getDocUrl, parseDocId } from '../utils';

export async function getOramaDocuments(
  source: Source,
  lang: Locale,
  i: number,
) {
  const results: OramaDocument[] = [];
  const pages = source.getPages();
  for (const page of pages.slice(i * 20, (i + 1) * 20)) {
    const id = getDocId(lang, page.url);
    const { isApp, isPages } = parseDocId(id);
    const ref = page.data.source;
    let content = page.data.content;

    if (ref) {
      // If the page has a reference, we need to get the content from the referenced page
      const url = getDocUrl(ref);
      const refPage = pages.find((p) => p.url === url);
      if (!refPage) continue;
      content = refPage.data.content;
    }

    content = content
      // Strip frontmatter
      .replace(/^---\s*[\s\S]*?---\s*/m, '')
      // Remove the comment that indicates the content is shared between app and pages router
      .replace(
        '{/* The content of this doc is shared between the app and pages router. You can use the `<PagesOnly>Content</PagesOnly>` component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. */}',
        '',
      );

    const structuredData = await structure(
      content,
      {},
      { nodeNames: isApp ? ['PagesOnly'] : isPages ? ['AppOnly'] : [] },
    );

    const result: OramaDocument = {
      id,
      structured: structuredData,
      url: page.url,
      title: page.data.title,
      description: page.data.description,
      tag: parseDocId(id).docTag,
    };

    results.push(result);
  }

  return results;
}
