import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { defineCollection, z } from 'astro:content';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // Allow custom frontmatter fields from the Next.js docs
        nav_title: z.string().optional(),
        source: z.string().optional(),
        'source-updated-at': z.coerce.string().optional(),
        'translation-updated-at': z.coerce.string().optional(),
        related: z.any().optional(),
        image: z.string().optional(),
        date: z.any().optional(),
        author: z.any().optional(),
        headline: z.string().optional(),
      }),
    }),
  }),
};
