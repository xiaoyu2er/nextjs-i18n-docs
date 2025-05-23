import type { Locale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = (process.env.LOCALE as Locale) || 'en';

  return {
    locale,
    messages: (
      await import(`../../messages/${locale.toLocaleLowerCase()}.json`)
    ).default,
  };
});
