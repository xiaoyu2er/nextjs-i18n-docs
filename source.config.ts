import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

import { addMdxContent, convertCodeMeta } from './src/lib/remarkPlugin';
const defaultDocsOptions = {
  docs: {
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
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
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
