import { loader } from 'fumadocs-core/source';
import { docs } from 'collections/server';

function stripPrefix(slug: string): string {
  return slug.replace(/^\d+-/, '');
}

export const source = loader({
  source: docs.toFumadocsSource(),
  baseUrl: '/docs',
  url(slugs) {
    return `/docs/${slugs.map(stripPrefix).join('/')}`;
  },
  pageTree: {
    attachFile(node, file) {
      node.name = (file?.data as any).nav_title || node.name;
      return node;
    },
  },
});
