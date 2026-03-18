import {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

import { transformerMetaHighlight } from '@shikijs/transformers';

import { addMdxContent } from './src/lib/remark-plugins/remark-add-content';
import { convertCodeMeta } from './src/lib/remark-plugins/remark-convert-code-meta';
import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';

const locale = process.env.LOCALE || 'en';

export const docs = defineDocs({
  dir: `content/${locale}/docs`,
  docs: {
    schema: frontmatterSchema.extend({
      'translation-updated-at': z.date().optional(),
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

export const blog = defineCollections({
  type: 'doc',
  dir: `content/${locale}/blog`,
  schema: frontmatterSchema.extend({
    'translation-updated-at': z.date().optional(),
    author: z
      .object({
        name: z.string().optional(),
        image: z.string().optional(),
      })
      .array()
      .optional(),
    date: z.date(),
    image: z.string().url().optional(),
  }),
});

export const learn = defineDocs({
  dir: `content/${locale}/learn`,
  docs: {
    schema: frontmatterSchema.extend({
      'translation-updated-at': z.date().optional(),
      image: z.string().url().optional(),
      headline: z.string().optional(),
    }),
  },
});

export default defineConfig({
  mdxOptions: {
    remarkImageOptions: false,
    rehypeCodeOptions: {
      ...rehypeCodeDefaultOptions,
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerMetaHighlight(),
      ],
    },
    remarkPlugins: (v) => [convertCodeMeta, addMdxContent, ...v],
  },
});
