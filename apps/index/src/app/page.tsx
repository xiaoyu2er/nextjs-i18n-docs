import { SITES } from '@next-i18n/const';
import Image from 'next/image';

// Language metadata with display names and descriptions
const LANGUAGE_INFO = {
  en: {
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    description: 'Official Next.js documentation in English',
    color: 'from-blue-500 to-blue-600',
  },
  'zh-hans': {
    name: 'Simplified Chinese',
    nativeName: '简体中文',
    flag: '🇨🇳',
    description: 'Next.js 简体中文文档',
    color: 'from-red-500 to-red-600',
  },
  'zh-hant': {
    name: 'Traditional Chinese',
    nativeName: '繁體中文',
    flag: '🇭🇰',
    description: 'Next.js 繁體中文文檔',
    color: 'from-purple-500 to-purple-600',
  },
} as const;

export default function Home() {
  const siteEntries = Object.entries(SITES);
  const totalTranslations = siteEntries.length;

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
              Access comprehensive Next.js documentation in multiple languages.
              Built with AI-powered translation and maintained by the community.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>{totalTranslations} Languages Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                  className="dark:invert"
                />
                <span>Powered by AI Translation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {siteEntries.map(([locale, url]) => {
            const info = LANGUAGE_INFO[locale as keyof typeof LANGUAGE_INFO];
            if (!info) return null;

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
                  className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Card Content */}
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl mb-4">{info.flag}</div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span>Live</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {info.nativeName}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {info.name}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                    {info.description}
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
                      <span>Full Documentation</span>
                    </div>

                    <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      <span className="text-sm font-medium">Visit Docs</span>
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
          })}
        </div>
      </div>

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
                Community-driven multilingual documentation for Next.js.
                Translations powered by AI and refined by contributors
                worldwide.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{totalTranslations} Languages</span>
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
                  <Image
                    src="/file.svg"
                    alt="Docs icon"
                    width={14}
                    height={14}
                    className="dark:invert"
                  />
                  <span>Official Docs</span>
                </a>
                <a
                  href="https://nextjs.org/learn"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/file.svg"
                    alt="Learn icon"
                    width={14}
                    height={14}
                    className="dark:invert"
                  />
                  <span>Learn Next.js</span>
                </a>
                <a
                  href="https://vercel.com/templates?framework=next.js"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/window.svg"
                    alt="Templates icon"
                    width={14}
                    height={14}
                    className="dark:invert"
                  />
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
                  href="https://github.com/vercel/next.js"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/globe.svg"
                    alt="GitHub icon"
                    width={14}
                    height={14}
                    className="dark:invert"
                  />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://vercel.com"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/vercel.svg"
                    alt="Vercel icon"
                    width={14}
                    height={14}
                    className="dark:invert"
                  />
                  <span>Vercel</span>
                </a>
                <a
                  href="https://nextjs.org"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/globe.svg"
                    alt="Website icon"
                    width={14}
                    height={14}
                    className="dark:invert"
                  />
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
