import type { Locale } from 'next-intl';

export type LocaleConfig = {
  name: string;
  nativeName: string;
  locale: Locale;
  flag: string;
  enabled: boolean;
  url: string;
  description: string;
  color: string;
};
export const LOCALES: LocaleConfig[] = [
  {
    color: 'from-blue-500 to-blue-600',
    description: 'Official Next.js documentation in English',
    enabled: true,
    flag: '🇺🇸',
    locale: 'en',
    name: 'English',
    nativeName: 'English',
    url: 'https://en.nextjs.im',
  },
  {
    color: 'from-red-500 to-red-600',
    description: 'Next.js 简体中文文档',
    enabled: true,
    flag: '🇨🇳',
    locale: 'zh-hans',
    name: 'Simplified Chinese',
    nativeName: '简体中文',
    url: 'https://zh-hans.nextjs.im',
  },
  {
    color: 'from-purple-500 to-purple-600',
    description: 'Next.js 繁體中文文檔',
    enabled: true,
    flag: '🇭🇰',
    locale: 'zh-hant',
    name: 'Traditional Chinese',
    nativeName: '繁體中文',
    url: 'https://zh-hant.nextjs.im',
  },

  {
    color: 'from-pink-500 to-pink-600',
    description: 'Next.js 日本語ドキュメント',
    enabled: false,
    flag: '🇯🇵',
    locale: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    url: 'https://ja.nextjs.im',
  },
  {
    color: 'from-amber-500 to-amber-600',
    description: 'Documentación de Next.js en español',
    enabled: false,
    flag: '🇪🇸',
    locale: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    url: 'https://es.nextjs.im',
  },
  {
    color: 'from-gray-500 to-gray-600',
    description: 'Next.js Dokumentation auf Deutsch',
    enabled: false,
    flag: '🇩🇪',
    locale: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    url: 'https://de.nextjs.im',
  },
  {
    color: 'from-indigo-500 to-indigo-600',
    description: 'Documentation Next.js en français',
    enabled: false,
    flag: '🇫🇷',
    locale: 'fr',
    name: 'French',
    nativeName: 'Français',
    url: 'https://fr.nextjs.im',
  },
  {
    color: 'from-emerald-500 to-emerald-600',
    description: 'Документация Next.js на русском языке',
    enabled: false,
    flag: '🇷🇺',
    locale: 'ru',
    name: 'French',
    nativeName: 'Русский',
    url: 'https://ru.nextjs.im',
  },
  {
    color: 'from-green-500 to-green-600',
    description: 'وثائق Next.js باللغة العربية',
    enabled: false,
    flag: '🇸🇦',
    locale: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    url: 'https://ar.nextjs.im',
  },
];

export const LOCALE_URL_MAP = LOCALES.reduce(
  (acc, locale) => {
    acc[locale.locale] = locale.url;
    return acc;
  },
  {} as Record<Locale, string>,
);
