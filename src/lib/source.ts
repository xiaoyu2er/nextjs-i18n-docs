import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  url(slugs) {
    // remove \d\d- from slug
    const url =  '/docs/' + slugs.map((slug) => {
      return slug.replace(/^\d\d-/, '');
    }).join('/');
    
    return url;
  },
  // https://fumadocs.dev/docs/headless/source-api#page-tree-1
  pageTree: {
    attachFile(node, file) {
      node.name = file?.data.data.nav_title || node.name;
      return node;
    },
  },

});
