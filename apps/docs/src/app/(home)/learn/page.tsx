import { getLearnTabs } from '@/lib/learn';
import { createMetadata } from '@/lib/metadata';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default function LearnIndexPage() {
  const t = useTranslations('LearnPage');
  const tHome = useTranslations('HomePage');
  const learnTabs = getLearnTabs();

  return (
    <main className="min-h-screen bg-fd-background">
      {/* Hero Section */}
      <section className="w-full py-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-fd-muted opacity-50" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />

        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-fd-foreground mb-4 leading-tight">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-fd-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="container max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {learnTabs.map((tab, index) => (
            <Link
              key={tab.url}
              href={tab.url}
              className="group block bg-fd-card border border-fd-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-purple-50 dark:bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-6">
                {/* Icon and number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{tab.icon}</div>
                  <div className="w-7 h-7 bg-fd-accent text-fd-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-fd-foreground mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {tab.title}
                </h3>

                <p className="text-fd-muted-foreground leading-relaxed mb-4 text-sm">
                  {tab.description}
                </p>

                {/* Call to action */}
                <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="mr-2">{t('startLearning')}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <title>Arrow right</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export async function generateMetadata() {
  const t = await getTranslations('meta');
  return createMetadata({
    title: t('learn'),
    pathname: '/learn',
    image: 'https://nextjs.org/learn/opengraph-image-r39hrb.jpg',
  });
}
