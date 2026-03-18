import { NextIntlClientProvider } from 'next-intl';
import './global.css';
import { Provider } from '@/app/provider';

import { getLocale, getTranslations } from 'next-intl/server';

import { baseUrl, createMetadata } from '@/lib/metadata';
import type { Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { getLangDir } from 'rtl-detect';

export async function generateMetadata() {
  const t = await getTranslations('meta');
  return createMetadata({
    title: {
      template: `%s | ${t('title')}`,
      default: t('title'),
    },
    description: t('description'),
    metadataBase: baseUrl,
    other: { 'google-adsense-account': 'ca-pub-8237457949590602' },
  });
}

const geist = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const mono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const direction = getLangDir(locale);

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${geist.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8237457949590602"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex flex-col min-h-screen" dir={direction}>
        <NextIntlClientProvider>
          <Provider dir={direction}>{children}</Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
