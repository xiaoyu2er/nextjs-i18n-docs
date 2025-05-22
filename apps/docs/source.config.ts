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

const defaultDocsOptions = {
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
};

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev//docs/mdx/collections#define-docs
export const docs_en = defineDocs({
  dir: 'content/en/docs',
  ...defaultDocsOptions,
});

export const docs_zh_hans = defineDocs({
  dir: 'content/zh-hans/docs',
  ...defaultDocsOptions,
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: (v) => [convertCodeMeta, addMdxContent, ...v],
  },
});
