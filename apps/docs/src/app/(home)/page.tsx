import { createMetadata } from '@/lib/metadata';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const features = t.raw('features') as Array<{
    title: string;
    desc: string;
    href: string;
  }>;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-fd-background text-fd-foreground">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center pt-12 pb-10 text-center relative overflow-hidden bg-gradient-to-b from-fd-background to-fd-muted">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-fd-accent)_0%,_transparent_70%)] opacity-50" />

        <div className="relative z-10 max-w-5xl px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-fd-foreground leading-tight">
            {t('title')}
          </h1>
          <div className="mx-auto text-lg md:text-xl text-fd-muted-foreground max-w-3xl mb-8 leading-relaxed">
            {t.rich('subtitle', {
              strong: (chunks) => (
                <strong className="font-semibold text-fd-foreground">
                  {chunks}
                </strong>
              ),
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/docs"
              className="px-6 py-3 rounded-xl bg-fd-primary text-fd-primary-foreground font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {t('getStarted')}
            </Link>
            <Link
              href="/learn"
              className="px-6 py-3 rounded-xl bg-fd-card border-2 border-fd-border text-fd-foreground font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-purple-400"
            >
              {t('learn')}
            </Link>
          </div>

          <button
            aria-label="Copy npx command for creating a new Next.js app"
            className="group mt-3 px-5 py-2 bg-fd-secondary rounded-lg text-xs font-mono text-fd-muted-foreground border border-fd-border hover:border-purple-400 hover:bg-fd-accent transition-all duration-300 hover:scale-105 relative overflow-hidden"
            type="button"
            // onClick={() => navigator.clipboard.writeText('npx create-next-app@latest')}
          >
            <span className="relative z-10">{t('copyCommand')}</span>
            <div className="absolute inset-0 bg-fd-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-fd-foreground">
            {t('featuresTitle')}
          </h2>
          <p className="text-lg text-fd-muted-foreground max-w-md">
            {t('featuresSubtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(
            (
              feature: { title: string; desc: string; href: string },
              i: number,
            ) => (
              <Link
                key={feature.title}
                href={feature.href}
                target={feature.href.startsWith('/') ? '_self' : '_blank'}
                className="group block p-6 rounded-2xl border border-fd-border bg-fd-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-purple-400 relative overflow-hidden"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-purple-50 dark:bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="text-xl font-bold mb-3 text-fd-foreground group-hover:text-purple-600 transition-colors duration-300">
                    {feature.title}
                  </div>
                  <div className="text-fd-muted-foreground text-base leading-relaxed group-hover:text-fd-foreground transition-colors duration-300">
                    {feature.desc}
                  </div>

                  {/* Link arrow indicator */}
                  <div className="mt-4 flex items-center text-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span className="text-sm font-semibold mr-2">
                      {feature.href.startsWith('/') ? 'Explore' : 'Visit'}
                    </span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <title>Arrow Right</title>
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
            ),
          )}
        </div>
      </section>
    </main>
  );
}

export async function generateMetadata() {
  return createMetadata({
    pathname: '/',
  });
}
