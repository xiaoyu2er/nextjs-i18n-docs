import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Book } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const useBaseOptions = () => {
  const t = useTranslations('baseOptions');
  return {
    nav: {
      title: (
        <>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo"
          >
            <title>Logo</title>
            <circle cx={12} cy={12} r={12} fill="currentColor" />
          </svg>
          {t('title')}
        </>
      ),
    },
    githubUrl: 'https://github.com/xiaoyu2er/nextjs-i18n-docs',
    links: [
      {
        icon: <Book />,
        text: t('doc'),
        url: '/docs/',
      },
    ],
  } as BaseLayoutProps;
};
