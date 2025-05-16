import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'zh-Hans'],

  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'never',

  domains: [
    {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      domain: process.env.EN_DOMAIN!,
      defaultLocale: 'en',
      locales: ['en'],
    },
    {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      domain: process.env.ZH_HANS_DOMAIN!,
      defaultLocale: 'zh-Hans',
      locales: ['zh-Hans'],
    },
  ],
});
