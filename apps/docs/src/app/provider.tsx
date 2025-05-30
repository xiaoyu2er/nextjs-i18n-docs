'use client';

import { ORAMA_CONFIGS_MAP } from '@/lib/orama/config';
import { RootProvider } from 'fumadocs-ui/provider';
import { useLocale } from 'next-intl';
import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

const SearchDialog = dynamic(() => import('@/components/search-dialog'), {
  ssr: false,
});

export function Provider({ children }: { children: ReactNode }) {
  const locale = useLocale();
  const config = ORAMA_CONFIGS_MAP[locale];
  return (
    <RootProvider
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
