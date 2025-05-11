import { NextIntlClientProvider, hasLocale } from 'next-intl';
import '../global.css';
import { routing } from '@/i18n/routing';
import { RootProvider } from 'fumadocs-ui/provider';
import { getLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider>
          <RootProvider>{children}</RootProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
