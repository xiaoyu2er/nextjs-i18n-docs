import type { Locale } from 'next-intl';

const ORAMA_EN_CONFIG = {
  locale: 'en',
  apiKey: '4DujbZrvGuklBRFcZBtegX3fV1lzNXnU',
  index: 'vuywlowcbl1w3s2jtvq5ysxl',
  endpoint: 'https://cloud.orama.run/v1/indexes/en-ai00ky',
};

type ORAMA_EN_CONFIG = typeof ORAMA_EN_CONFIG;

const OORAMA_ZH_HANS_CONFIG = {
  locale: 'zh-hans',
  apiKey: '6nEUS4tyXiajWxZ8qMEQMzzLoOYTuLSk',
  index: 'vcwl00bwd64h3pa8yq8x107y',
  endpoint: 'https://cloud.orama.run/v1/indexes/zh-hans-js5ujm',
};

const OORAMA_ZH_HANT_CONFIG = {
  locale: 'zh-hant',
  apiKey: 'm2Wdhf6R37fKAhXNDufzbegTuQdz6aqf',
  index: 'l4wtdj6zo3gpv432pmf4s98g',
  endpoint: 'https://cloud.orama.run/v1/indexes/zh-hant-nvys3a',
};

export const ORAMA_CONFIGS_MAP: Record<Locale, ORAMA_EN_CONFIG> = {
  en: ORAMA_EN_CONFIG,
  'zh-hans': OORAMA_ZH_HANS_CONFIG,
  'zh-hant': OORAMA_ZH_HANT_CONFIG,
} as const;
