import type { Locale } from 'next-intl';

export function removeLeadingDigit(str: string) {
  return str.replace(/^\d\d-/, '');
}

/**
 * en/docs/13
 * en/docs/13/app
 * en/docs/13/pages
 * en/docs/app
 * en/docs/pages
 * en/docs/
 * @param url
 * @returns
 */
export const getDocTag = (id: string) => {
  const tags = getDocTags(id);
  return tags.join('/');
};

export const getDocTags = (id: string) => {
  const tags = id.split('/').slice(0, 2);
  const slugs = id.split('/').slice(2);
  let isApp = slugs[0] === 'app';
  let isPages = slugs[0] === 'pages';
  const isV13 = slugs[0] === '13';
  const isV14 = slugs[0] === '14';

  if (isV13) {
    tags.push('13');
  } else if (isV14) {
    tags.push('14');
  }

  if (isV13 || isV14) {
    isApp = slugs[1] === 'app';
    isPages = slugs[1] === 'pages';
  }

  if (isApp) {
    tags.push('app');
  }
  if (isPages) {
    tags.push('pages');
  }

  return tags;
};

/**
 * Get the full doc id
 * locale: en
 * docUrl: /docs/13/app/getting-started/installation
 * docId: en/docs/13/app/getting-started/installation
 *
 * @param locale
 * @param docUrl
 * @returns
 */
export const getDocId = (locale: Locale, docUrl: string) => {
  const id = `${locale}${docUrl}`;
  if (id.endsWith('/')) {
    return id.slice(0, -1);
  }
  return id;
};

/**
 * docId: en/docs/13/app/getting-started/installation
 * -->
 *
 * @param id
 * @returns
 */
export const parseDocId = (id: string) => {
  const paths = id.split('/');
  if (paths[paths.length - 1] === '') {
    paths.pop();
  }
  const locale = paths[0];
  // const tags = paths.slice(0, 2);
  const slugs = paths.slice(2);
  let isApp = slugs[0] === 'app';
  let isPages = slugs[0] === 'pages';
  const isV13 = slugs[0] === '13';
  const isV14 = slugs[0] === '14';
  const isVLatest = !isV13 && !isV14;
  const version = isVLatest ? 'latest' : isV13 ? '13' : isV14 ? '14' : '';

  if (isV13 || isV14) {
    isApp = slugs[1] === 'app';
    isPages = slugs[1] === 'pages';
  }

  const docTag = isVLatest
    ? paths.slice(0, 3).join('/')
    : paths.slice(0, 4).join('/');

  const appTag = !isVLatest
    ? `${locale}/docs/${version}/app`
    : `${locale}/docs/app`;
  const pagesTag = !isVLatest
    ? `${locale}/docs/${version}/pages`
    : `${locale}/docs/pages`;
  const whereTag = !isVLatest ? `${locale}/docs/${version}` : `${locale}/docs`;

  return {
    slugs,
    locale: paths[0],
    version,
    isApp,
    isPages,
    isV13,
    isV14,
    isVLatest,
    docUrl: `/${paths.slice(1).join('/')}`,
    docsRoot: isVLatest ? '/docs' : `/docs/${version}`,
    appDocsRoot: isVLatest ? '/docs/app' : `/docs/${version}/app`,
    pagesDocsRoot: isVLatest ? '/docs/pages' : `/docs/${version}/pages`,
    docTag,
    appTag,
    pagesTag,
    whereTag,
  };
};

export function getDocUrl(slug: string[] | string | undefined) {
  if (typeof slug === 'string') {
    return `/docs/${slug}`;
  }
  return `/docs/${(slug || []).join('/')}`;
}

export function getLearnUrl(slug: string[] | string | undefined) {
  if (typeof slug === 'string') {
    return `/learn/${slug}`;
  }
  return `/learn/${(slug || []).join('/')}`;
}
