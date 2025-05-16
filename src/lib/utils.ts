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

export const isAppDoc = (id: string) => {
  return getDocTags(id).includes('app');
};

export const isPagesDoc = (id: string) => {
  return getDocTags(id).includes('pages');
};

export function getDocsUrl(slug: string[] | string | undefined) {
  if (typeof slug === 'string') {
    return `/docs/${slug}`;
  }
  return `/docs/${(slug || []).join('/')}`;
}
