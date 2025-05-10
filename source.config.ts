import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";
import { z } from 'zod';

import { convertCodeMeta } from "./src/lib/remarkPlugin";

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  dir: `content/${process.env.LANGUAGE_CODE!.toLowerCase()}/docs`,
  docs: {
    schema: frontmatterSchema.extend({
      nav_title: z.string().optional(),
      source: z.string().optional(),
    }),
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: (v) => [convertCodeMeta, ...v],
  },
});
