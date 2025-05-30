import {
  NextLearnAppIcon,
  NextLearnPagesIcon,
  NextLearnReactIcon,
  NextLearnSeoIcon,
} from '@/mdx/Icon';
import type { Option } from 'fumadocs-ui/components/layout/root-toggle';
import type { ReactNode } from 'react';
import { type LearnPage, learn } from './source';

export const LEARN_URLS = [
  '/learn/react-foundations',
  '/learn/dashboard-app',
  '/learn/pages-router',
  '/learn/seo',
];

export const LEARN_ICONS: Record<(typeof LEARN_URLS)[number], ReactNode> = {
  '/learn/react-foundations': <NextLearnReactIcon />,
  '/learn/dashboard-app': <NextLearnAppIcon />,
  '/learn/pages-router': <NextLearnPagesIcon />,
  '/learn/seo': <NextLearnSeoIcon />,
};

export function getLearnTabs() {
  const LEARN_TABS = LEARN_URLS.map((url) => {
    const page = getPage(url);
    if (!page) return null;
    const pages = getChildren(url);
    return {
      url: page.url,
      title: page.data.title,
      description: `${pages.length + 1} chapters`,
      icon: LEARN_ICONS[page.url],
    };
  }).filter(Boolean) as Option[];
  return LEARN_TABS;
}

export function getPage(url: string): LearnPage | undefined {
  const pages = learn.getPages();
  const page = pages.find((page) => page.url === url);
  return page;
}

export function getChildren(url: string): LearnPage[] {
  const pages = learn.getPages();
  return pages.filter((page) => page.url.startsWith(url) && page.url !== url);
}
