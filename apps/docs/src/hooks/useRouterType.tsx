'use client';

import { type RouterType, routerTypeCookie } from '@/lib/const';
import { parseDocId } from '@/lib/utils';
import { getCookie, setCookie } from 'cookies-next';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useRouterType() {
  const pathname = usePathname();
  const [routerType, setRouterType] = useState<RouterType>(() => {
    const docId = `en${pathname}`;
    const { isPages, isApp } = parseDocId(docId);
    if (isPages) {
      return 'pages';
    }
    if (isApp) {
      return 'app';
    }
    return (getCookie(routerTypeCookie) as RouterType) || 'app';
  });

  useEffect(() => {
    const docId = `en${pathname}`;
    const { isPages, isApp } = parseDocId(docId);
    if (isPages) {
      setCookie(routerTypeCookie, 'pages');
      setRouterType('pages');
    }
    if (isApp) {
      setCookie(routerTypeCookie, 'app');
      setRouterType('app');
    }
  }, [pathname]);

  return routerType;
}
