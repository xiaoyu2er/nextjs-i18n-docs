import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase:
    process.env.NODE_ENV === 'development'
      ? new URL('http://localhost:3000')
      : new URL('https://nextjs.im'),
  title: 'Next.js Documentation - Multilingual Hub',
  description:
    'Access comprehensive Next.js documentation in multiple languages. Built with AI-powered translation and maintained by the community. Available in English, Chinese, and more languages coming soon.',
  keywords: [
    'Next.js',
    'documentation',
    'multilingual',
    'i18n',
    'internationalization',
    'React',
    'Chinese',
    'Simplified Chinese',
    'Traditional Chinese',
    'Japanese',
    'Spanish',
    'Russian',
    'French',
    'German',
    'Arabic',
    'Portuguese',
    'Korean',
    'translation',
    'AI-powered',
    'community-driven',
    'Deepseek',
    'OpenAI',
  ],

  openGraph: {
    title: 'Next.js Documentation - Multilingual Hub',
    description:
      'Access Next.js documentation in multiple languages. AI-powered translations refined by the community.',
    type: 'website',
    siteName: 'Next.js i18n Docs',
    images: [
      {
        url: '/nextjs-im.png',
        width: 1200,
        height: 630,
        alt: 'Next.js Documentation - Multilingual Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Documentation - Multilingual Hub',
    description:
      'Access Next.js documentation in multiple languages. AI-powered translations refined by the community.',
    images: [
      {
        url: '/nextjs-im.png',
        width: 1200,
        height: 630,
        alt: 'Next.js Documentation - Multilingual Hub',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  other: {
    'google-adsense-account': 'ca-pub-8237457949590602',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
