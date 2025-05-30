import { getLearnTabs } from '@/lib/learn';
import { createMetadata } from '@/lib/metadata';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default function LearnIndexPage() {
  const tHome = useTranslations('HomePage');
  const learnTabs = getLearnTabs();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-2 py-12 bg-white dark:bg-neutral-950 transition-colors">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
        {tHome('learn', { defaultValue: 'Learn Next.js' })}
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400 text-center max-w-xl">
        {tHome('featuresSubtitle', {
          defaultValue: 'Choose a learning path to get started with Next.js.',
        })}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {learnTabs.map((tab) => (
          <Link
            key={tab.url}
            href={tab.url}
            className="group flex items-center gap-4 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-sm"
          >
            <span className="text-2xl">{tab.icon}</span>
            <div className="flex-1">
              <div className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {tab.title}
              </div>
              <div className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                {tab.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export async function generateMetadata() {
  const t = await getTranslations('baseOptions');
  return createMetadata({
    title: t('learn'),
    pathname: '/learn',
    image: 'https://nextjs.org/learn/opengraph-image-r39hrb.jpg',
  });
}
