import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { remarkAutoImport } from './src/plugins/remark-auto-import.ts';
import { remarkPackageTabs } from './src/plugins/remark-package-tabs.ts';
import { starlightLocales, starlightSocial } from '../../packages/shared/src/config.ts';

const ver = '13';

export default defineConfig({
  site: 'https://nextjs.im',
  markdown: {
    remarkPlugins: [remarkPackageTabs, remarkAutoImport],
  },
  integrations: [
    starlight({
      title: 'Next.js v' + ver + ' Docs',
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
          label: 'v' + ver + ' Documentation',
          autogenerate: { directory: 'docs/' + ver },
        },
      ],
    }),
  ],
});
