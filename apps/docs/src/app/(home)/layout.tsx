import { useBaseOptions } from '@/hooks/useLayoutOptions';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const baseOptions = useBaseOptions();
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}
