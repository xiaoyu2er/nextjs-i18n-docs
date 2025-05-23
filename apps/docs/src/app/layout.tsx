import { NextIntlClientProvider, hasLocale } from 'next-intl';
import './global.css';
import { Provider } from '@/app/provider';

import { getLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider>
          <Provider>{children}</Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
