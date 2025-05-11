import { useLocale } from 'next-intl';
import { source } from './source';

export const useSource = () => {
  const locale = useLocale();
  return source[locale];
};
