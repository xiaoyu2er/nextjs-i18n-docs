'use client';

import { ORAMA_CONFIGS_MAP } from '@/lib/orama/config';
import { getDocId, parseDocId } from '@/lib/utils';
import { OramaClient } from '@oramacloud/client';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
// import SearchOrama from 'fumadocs-ui/components/dialog/search-orama';
import SearchOrama from './search-orama';

export default function CustomSearchDialog(props: SharedProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const config = ORAMA_CONFIGS_MAP[locale];
  if (!config) return null;
  const client = useMemo(
    () =>
      new OramaClient({
        endpoint: config.endpoint,
        api_key: config.apiKey,
      }),
    [config],
  );
  const docId = getDocId(locale, pathname);
  const { isPages, appTag, pagesTag, whereTag } = parseDocId(docId);

  return (
    <SearchOrama
      {...props}
      defaultTag={isPages ? pagesTag : appTag}
      whereTag={whereTag}
      allowClear
      tags={[
        { name: 'App', value: appTag },
        { name: 'Pages', value: pagesTag },
      ]}
      client={client}
      showOrama
    />
  );
}
