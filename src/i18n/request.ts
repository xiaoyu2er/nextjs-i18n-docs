import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

export default getRequestConfig(async () => {
  const headersList = await headers();
  const host =
    headersList.get('host') || headersList.get('x-forwarded-host') || '';
  const locale = /zh-hans/.test(host) ? 'zh-Hans' : 'en';

  return {
    locale,
    messages: (
      await import(`../../messages/${locale.toLocaleLowerCase()}.json`)
    ).default,
  };
});
