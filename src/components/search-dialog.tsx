'use client';

import { ORAMA_CONFIGS_MAP } from '@/lib/orama/config';
import { getDocTag, getDocTags } from '@/lib/utils';
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
  const client = useMemo(
    () =>
      new OramaClient({
        endpoint: config.endpoint,
        api_key: config.apiKey,
      }),
    [config],
  );
  const id = `${locale}${pathname}`;
  const tag = getDocTag(id);
  const tags = getDocTags(id);
  const isV13 = tags.includes('13');
  const isV14 = tags.includes('14');
  const version = isV13 ? '13' : isV14 ? '14' : '';
  const appTag =
    isV13 || isV14 ? `${locale}/docs/${version}/app` : `${locale}/docs/app`;
  const pagesTag =
    isV13 || isV14 ? `${locale}/docs/${version}/pages` : `${locale}/docs/pages`;
  const whereTag =
    isV13 || isV14 ? `${locale}/docs/${version}` : `${locale}/docs`;

  return (
    <SearchOrama
      {...props}
      defaultTag={tag}
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
