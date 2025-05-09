import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async () => {
  
  const locale = process.env.LANGUAGE_CODE!;

  return {
    locale,
    messages: (await import(`../../messages/${locale.toLowerCase()}.json`)).default
  };
});