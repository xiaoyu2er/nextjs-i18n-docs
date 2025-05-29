import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { AlbumIcon, Book, NotebookIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const useBaseOptions = () => {
  const t = useTranslations('baseOptions');
  return {
    nav: {
      title: (
        <>
          <Image src="/favicon.ico" alt="logo" width={24} height={24} />
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

      {
        icon: <AlbumIcon />,
        text: t('blog'),
        url: '/blog',
        active: 'nested-url',
      },

      {
        icon: <NotebookIcon />,
        text: t('learn'),
        url: '/learn/',
        active: 'nested-url',
      },
    ],
  } as BaseLayoutProps;
};
