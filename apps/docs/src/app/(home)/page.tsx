import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const features = t.raw('features') as Array<{
    title: string;
    desc: string;
    href: string;
  }>;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-2">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center pt-20 pb-10 text-center relative overflow-hidden">
        {/* Decorative SVGs or backgrounds can be added here if needed */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 gradient-text">
          {t('title')}
        </h1>
        <div className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mb-8">
          {t.rich('subtitle', {
            strong: (chunks) => (
              <strong className="font-semibold text-black dark:text-white">
                {chunks}
              </strong>
            ),
          })}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link
            href="/docs"
            className="px-6 py-3 rounded-lg bg-black text-white font-semibold text-lg shadow hover:bg-gray-900 transition"
          >
            {t('getStarted')}
          </Link>
          <Link
            href="https://nextjs.org/learn"
            target="_blank"
            className="px-6 py-3 rounded-lg bg-white border border-gray-300 dark:bg-gray-900 dark:border-gray-700 text-black dark:text-white font-semibold text-lg shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {t('learn')}
          </Link>
        </div>
        <button
          aria-label="Copy npx command for creating a new Next.js app"
          className="mt-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          type="button"
          // onClick={() => navigator.clipboard.writeText('npx create-next-app@latest')}
        >
          {t('copyCommand')}
        </button>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl px-2 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-2">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            {t('featuresTitle')}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            {t('featuresSubtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(
            (
              feature: { title: string; desc: string; href: string },
              i: number,
            ) => (
              <Link
                key={feature.title}
                href={feature.href}
                target={feature.href.startsWith('/') ? '_self' : '_blank'}
                className="block p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow hover:shadow-lg transition group"
              >
                <div className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {feature.title}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-base">
                  {feature.desc}
                </div>
              </Link>
            ),
          )}
        </div>
      </section>
    </main>
  );
}

export async function generateMetadata() {
  const t = await getTranslations('HomePage');
  return {
    title: t('title'),
  };
}
