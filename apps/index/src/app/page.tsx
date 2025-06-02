import { GITHUB_URL, LOCALES } from '@next-i18n/const';
import Image from 'next/image';

export default function Home() {
  const sites = LOCALES.filter((l) => l.locale !== 'en' && l.enabled);
  const pedingSites = LOCALES.filter((l) => !l.enabled);
  const finishedLength = sites.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/10 dark:to-purple-400/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={240}
                height={50}
                priority
              />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Next.js Documentation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Multilingual Hub
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Access comprehensive Next.js documentation in multiple languages,
              synchronized with the official site. Includes complete docs
              (latest, v14, v13), blog posts, and learn tutorials.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0" />
                <span>{finishedLength} Languages Available</span>
              </div>
              {pedingSites.length > 0 && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shrink-0" />
                  <span>{pedingSites.length} More Coming Soon</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Image
                  src="/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                  className="dark:invert"
                />
                <span>Synced with Official Site</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-4 md:pt-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sites.map(
            ({ locale, url, color, flag, name, nativeName, description }) => {
              return (
                <a
                  key={locale}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${color} opacity-6 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Card Content */}
                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl mb-4">{flag}</div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        <span>Live</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {nativeName}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      {name}
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                      {description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Image
                          src="/file.svg"
                          alt="Documentation icon"
                          width={14}
                          height={14}
                          className="dark:invert"
                        />
                        <span>Docs • Blog • Learn</span>
                      </div>

                      <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        <span className="text-sm font-medium">Visit Site</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <title>Arrow Right Icon</title>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              );
            },
          )}
        </div>
      </div>

      {/* Language Request Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative px-8 py-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                  <span className="text-white text-sm font-medium">
                    Community Input Needed
                  </span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                What Language Do You Need?
              </h2>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Help us prioritize our translation efforts! Tell us which
                languages would be most valuable
                <br className="hidden sm:block" /> for your development team and
                the global Next.js community.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8 text-white/80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">🗳️</span>
                  </div>
                  <span className="text-sm">Vote for languages</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">🔄</span>
                  </div>
                  <span className="text-sm">Synced with official site</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">🤝</span>
                  </div>
                  <span className="text-sm">Offer to contribute</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">🌍</span>
                  </div>
                  <span className="text-sm">Build global community</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://github.com/xiaoyu2er/nextjs-i18n-docs/discussions/33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <title>GitHub Icon</title>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>Join the Discussion</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <title>External Link Icon</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>

                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <span>or</span>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white transition-colors"
                  >
                    browse our GitHub repo
                  </a>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <p className="text-white/80 text-sm">
                  <strong>Most requested so far:</strong>{' '}
                  {pedingSites
                    .map(({ name }) => {
                      return name;
                    })
                    .join(', ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Sites Section */}
      {pedingSites.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              More languages are in development. Help us expand the Next.js
              documentation to reach developers worldwide.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pedingSites.map(
              ({ locale, color, name, nativeName, description, flag }) => {
                return (
                  <div
                    key={locale}
                    className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 opacity-75"
                  >
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${color} opacity-3`}
                    />

                    {/* Card Content */}
                    <div className="relative p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-3xl mb-3 opacity-60">{flag}</div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-full">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                          <span>In Progress</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {nativeName}
                      </h3>

                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        {name}
                      </p>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 text-sm">
                        {description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Image
                            src="/globe.svg"
                            alt="Coming soon icon"
                            width={12}
                            height={12}
                            className="dark:invert opacity-60"
                          />
                          <span>Docs • Blog • Learn</span>
                        </div>

                        <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                          Coming Soon
                        </div>
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Want to help with translations?
            </p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              <span>Contribute on GitHub</span>
            </a>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/next.svg"
                  alt="Next.js logo"
                  width={120}
                  height={25}
                  className="dark:invert"
                />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  i18n Docs
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
                Community-driven multilingual documentation for Next.js,
                synchronized with the official site. Includes docs (latest, v14,
                v13), blog posts, and learn tutorials in multiple languages.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{finishedLength} Languages</span>
                <span>•</span>
                <span>{pedingSites.length} In Progress</span>
                <span>•</span>
                <span>Open Source</span>
                <span>•</span>
                <span>Community Driven</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Resources
              </h4>
              <div className="space-y-2">
                <a
                  href="https://nextjs.org/docs"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Official Docs</span>
                </a>
                <a
                  href="https://nextjs.org/learn"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Learn Next.js</span>
                </a>
                <a
                  href="https://vercel.com/templates?framework=next.js"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Templates</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Community
              </h4>
              <div className="space-y-2">
                <a
                  href={GITHUB_URL}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitHub</span>
                </a>
                <a
                  href="https://vercel.com"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Vercel</span>
                </a>
                <a
                  href="https://nextjs.org"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Next.js</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Next.js i18n Documentation. Built
                with ❤️ by the community.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>Powered by</span>
                <Image
                  src="/next.svg"
                  alt="Next.js"
                  width={60}
                  height={12}
                  className="dark:invert"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
