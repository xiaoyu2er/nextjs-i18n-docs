import { baseOptions } from '@/app/layout.config';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const t = useTranslations('baseOptions');
  return (
    <HomeLayout {...baseOptions({ title: t('title') })}>{children}</HomeLayout>
  );
}
