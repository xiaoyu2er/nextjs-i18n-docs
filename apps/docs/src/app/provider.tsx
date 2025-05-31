'use client';

import { ORAMA_CONFIGS_MAP } from '@/lib/orama/config';
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
