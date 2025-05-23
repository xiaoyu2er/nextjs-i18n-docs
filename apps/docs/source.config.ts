import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

import { addMdxContent } from '@/lib/remark-plugins/remark-add-content';
import { convertCodeMeta } from '@/lib/remark-plugins/remark-convert-code-meta';

const asyncMode = process.env.MDX_ASYNC === 'true';
if (!asyncMode && process.env.NODE_ENV === 'development') {
  console.log('AsyncMode', asyncMode);
  console.warn(
    'This may result in longer dev server start time for large docs sites, you can enable Async Mode on doc collections to improve this.',
  );
}

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev//docs/mdx/collections#define-docs
export const docs = defineDocs({
  dir: `content/${process.env.LOCALE}/docs`,
  docs: {
    async: asyncMode,
    schema: frontmatterSchema.extend({
      nav_title: z.string().optional(),
      source: z.string().optional(),
      related: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          links: z.array(z.string()).optional(),
        })
        .optional(),
    }),
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    remarkImageOptions: false,
    remarkPlugins: (v) => [convertCodeMeta, addMdxContent, ...v],
  },
});
