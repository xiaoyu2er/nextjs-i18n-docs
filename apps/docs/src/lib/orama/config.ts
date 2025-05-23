import type { Locale } from 'next-intl';

const ORAMA_EN_CONFIG = {
  locale: 'en',
  privateKey: process.env.ORAMA_PRIVATE_API_KEY_EN || '',
  apiKey: '4DujbZrvGuklBRFcZBtegX3fV1lzNXnU',
  index: 'vuywlowcbl1w3s2jtvq5ysxl',
  endpoint: 'https://cloud.orama.run/v1/indexes/en-ai00ky',
};

type ORAMA_EN_CONFIG = typeof ORAMA_EN_CONFIG;

const OORAMA_ZH_HANS_CONFIG = {
  locale: 'zh-hans',
  privateKey: process.env.ORAMA_PRIVATE_API_KEY_ZH_HANS || '',
  apiKey: '6nEUS4tyXiajWxZ8qMEQMzzLoOYTuLSk',
  index: 'vcwl00bwd64h3pa8yq8x107y',
  endpoint: 'https://cloud.orama.run/v1/indexes/zh-hans-js5ujm',
};

export const ORAMA_CONFIGS = [ORAMA_EN_CONFIG, OORAMA_ZH_HANS_CONFIG] as const;

export const ORAMA_CONFIGS_MAP: Record<Locale, ORAMA_EN_CONFIG> = {
  en: ORAMA_EN_CONFIG,
  'zh-hans': OORAMA_ZH_HANS_CONFIG,
} as const;
