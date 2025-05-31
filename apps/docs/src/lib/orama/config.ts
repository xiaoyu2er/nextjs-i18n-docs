import type { Locale } from 'next-intl';

type ORAMA_EN_CONFIG = {
  locale: Locale;
  apiKey: string;
  index: string;
  endpoint: string;
};

export const ORAMA_CONFIGS_MAP: Record<Locale, ORAMA_EN_CONFIG> = {
  en: {
    locale: 'en',
    apiKey: '4DujbZrvGuklBRFcZBtegX3fV1lzNXnU',
    index: 'vuywlowcbl1w3s2jtvq5ysxl',
    endpoint: 'https://cloud.orama.run/v1/indexes/en-ai00ky',
  },
  'zh-hans': {
    locale: 'zh-hans',
    apiKey: '6nEUS4tyXiajWxZ8qMEQMzzLoOYTuLSk',
    index: 'vcwl00bwd64h3pa8yq8x107y',
    endpoint: 'https://cloud.orama.run/v1/indexes/zh-hans-js5ujm',
  },
  'zh-hant': {
    locale: 'zh-hant',
    apiKey: 'm2Wdhf6R37fKAhXNDufzbegTuQdz6aqf',
    index: 'l4wtdj6zo3gpv432pmf4s98g',
    endpoint: 'https://cloud.orama.run/v1/indexes/zh-hant-nvys3a',
  },
  ja: {
    locale: 'ja',
    apiKey: 'T1d4liKUCMsFBe6KwxcJXThDL9ivLuW1',
    index: 'tm282a4uii57bndhs36mxj0k',
    endpoint: 'https://cloud.orama.run/v1/indexes/ja-ktjgl8',
  },
  es: {
    locale: 'es',
    apiKey: 'hXUDpmHkyY0qSaEc60ABwlC7ESm21w49',
    index: 'i0uke54g09bmdourkqaxhf8i',
    endpoint: 'https://cloud.orama.run/v1/indexes/es-uuyyib',
  },
  de: {
    locale: 'de',
    apiKey: 'rVpVeJbBHuOXmpCFkJHMclngEz6lH2zT',
    index: 'qh93dcne0w9qe3x9niih7o8x',
    endpoint: 'https://cloud.orama.run/v1/indexes/de-zxbgkd',
  },
} as const;
