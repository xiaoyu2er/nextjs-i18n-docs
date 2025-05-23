import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">{t('title')}</h1>
      <p className="text-fd-muted-foreground">
        {t.rich('intro', {
          Link: (chunks) => (
            <Link
              href="/docs"
              className="text-fd-foreground font-semibold underline"
            >
              {chunks}
            </Link>
          ),
        })}
      </p>
    </main>
  );
}

// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({ locale }));
// }

export async function generateMetadata() {
  const t = await getTranslations('HomePage');

  return {
    title: t('title'),
  };
}
