import { defineConfig } from 'docs-i18n';

export default defineConfig({
  projects: {
    nextjs: {
      sources: {
        latest: 'content/latest',
        v15: 'content/v15',
        v14: 'content/v14',
        v13: 'content/v13',
      },
    },
  },
  languages: ['zh-hans', 'zh-hant', 'ja', 'ar', 'de', 'es', 'fr', 'ru'],
  cacheDir: '.cache',
  translatableFields: [
    'title',
    'description',
    'nav_title',
    'related.title',
    'related.description',
  ],
  llm: {
    provider: 'openrouter',
    model: 'qwen/qwen3.5-flash-02-23',
    contextLength: 1_000_000,
    maxTokens: 65536,
  },
  context:
    'Next.js is a React framework for building full-stack web applications.',
});
