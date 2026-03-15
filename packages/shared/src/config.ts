/**
 * Shared Starlight configuration used by all workers.
 */

export const starlightLocales = {
  root: { label: 'English', lang: 'en' },
  'zh-hans': { label: '简体中文', lang: 'zh-Hans' },
  'zh-hant': { label: '繁體中文', lang: 'zh-Hant' },
  ja: { label: '日本語', lang: 'ja' },
  ar: { label: 'العربية', lang: 'ar', dir: 'rtl' as const },
  de: { label: 'Deutsch', lang: 'de' },
  es: { label: 'Español', lang: 'es' },
  fr: { label: 'Français', lang: 'fr' },
  ru: { label: 'Русский', lang: 'ru' },
};

export const starlightSocial = [
  { icon: 'github' as const, label: 'GitHub', href: 'https://github.com/nicepkg/nextjs-i18n-docs' },
];

export const sharedComponents = {
  Header: '@next-i18n/shared/overrides/Header.astro',
  Sidebar: '@next-i18n/shared/overrides/Sidebar.astro',
  MarkdownContent: '@next-i18n/shared/overrides/MarkdownContent.astro',
};
