import { defineConfig, defineDocs, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: frontmatterSchema.extend({
      nav_title: z.string().optional(),
      source: z.string().optional(),
      related: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        links: z.array(z.string()).optional(),
      }).optional(),
    }),
  },
});

export default defineConfig();
