import { GITHUB_URL } from '@next-i18n/const';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { AlbumIcon, Book, NotebookIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const useBaseOptions = () => {
  const t = useTranslations('meta');
  return {
    i18n: true,
    nav: {
      title: (
        <>
          <Image src="/favicon.ico" alt="logo" width={24} height={24} />
          {t('title')}
        </>
      ),
    },
    githubUrl: GITHUB_URL,
    links: [
      {
        icon: <Book />,
        text: t('doc'),
        url: '/docs',
        active: 'nested-url',
      },

      {
        icon: <AlbumIcon />,
        text: t('blog'),
        url: '/blog',
        active: 'nested-url',
      },

      {
        icon: <NotebookIcon />,
        text: t('learn'),
        url: '/learn',
        active: 'nested-url',
      },
    ],
  } as BaseLayoutProps;
};
