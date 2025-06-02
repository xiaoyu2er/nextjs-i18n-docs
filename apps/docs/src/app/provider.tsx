'use client';

import { ORAMA_CONFIGS_MAP } from '@/lib/orama/config';
import { LOCALES, LOCALE_URL_MAP } from '@next-i18n/const';
import { RootProvider } from 'fumadocs-ui/provider';
import type { RootProviderProps } from 'fumadocs-ui/provider/base';
import { useLocale } from 'next-intl';
import dynamic from 'next/dynamic';

const SearchDialog = dynamic(() => import('@/components/search-dialog'), {
  ssr: false,
});

export function Provider({ children, ...props }: RootProviderProps) {
  const locale = useLocale();
  const config = ORAMA_CONFIGS_MAP[locale];
  return (
    <RootProvider
      {...props}
      i18n={{
        locale,
        locales: LOCALES.filter((l) => l.enabled).map((l) => ({
          name: `${l.flag} ${l.nativeName}`,
          locale: l.locale,
        })),
        onLocaleChange: (locale) => {
          const url = LOCALE_URL_MAP[locale];
          window.location.href = new URL(window.location.pathname, url).href;
        },
      }}
      search={
        config
          ? {
              SearchDialog,
            }
          : {
              enabled: false,
            }
      }
    >
      {children}
    </RootProvider>
  );
}
