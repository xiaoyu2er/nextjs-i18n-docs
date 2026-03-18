import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { remarkAutoImport } from './src/plugins/remark-auto-import.ts';
import { remarkPackageTabs } from './src/plugins/remark-package-tabs.ts';
import { remarkConvertCodeMeta } from '../../packages/shared/src/plugins/remark-convert-code-meta.ts';
import { starlightLocales, starlightSocial } from '../../packages/shared/src/config.ts';

export default defineConfig({
  site: 'https://nextjs.im',
  markdown: {
    remarkPlugins: [remarkConvertCodeMeta, remarkPackageTabs, remarkAutoImport],
  },
  integrations: [
    starlight({
      title: 'Next.js Docs',
      pagefind: false,
      components: {
        Header: './src/overrides/Header.astro',
        Sidebar: './src/overrides/Sidebar.astro',
        MarkdownContent: './src/overrides/MarkdownContent.astro',
      },
      locales: starlightLocales,
      social: starlightSocial,
      sidebar: [
        {
          label: 'Introduction',
          slug: 'docs',
        },
        {
          label: 'App Router',
          autogenerate: { directory: 'docs/app' },
        },
        {
          label: 'Pages Router',
          autogenerate: { directory: 'docs/pages' },
        },
        {
          label: 'Architecture',
          autogenerate: { directory: 'docs/architecture' },
        },
        {
          label: 'Community',
          autogenerate: { directory: 'docs/community' },
        },
        {
          label: 'Learn',
          autogenerate: { directory: 'learn' },
        },
        {
          label: 'Blog',
          autogenerate: { directory: 'blog' },
        },
      ],
    }),
  ],
});
