import { createMetadata } from '@/lib/metadata';
import { blog } from '@/lib/source';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default function Page(): React.ReactElement {
  const posts = [...blog.getPages()].sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  return (
    <main className="min-h-screen bg-fd-background">
      {/* Hero Section */}
      <section className="w-full py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-fd-muted opacity-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-fd-foreground mb-6 leading-tight">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-fd-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Insights, tutorials, and updates about Next.js
              internationalization
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container max-w-6xl mx-auto px-6 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-fd-muted rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-fd-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>No posts available</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-fd-foreground mb-2">
              No posts yet
            </h3>
            <p className="text-fd-muted-foreground">
              Check back soon for new content!
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Featured Post */}
            {posts.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-3xl font-bold text-fd-foreground">
                    Latest Post
                  </h2>
                  <span className="px-3 py-1 bg-fd-accent text-fd-accent-foreground text-sm font-medium rounded-full">
                    Featured
                  </span>
                </div>
                <Link
                  href={posts[0].url}
                  className="group block bg-fd-card border border-fd-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative"
                >
                  <div className="absolute inset-0 bg-purple-50 dark:bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-8 md:p-12">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                      <time className="text-fd-muted-foreground">
                        {new Date(
                          posts[0].data.date ?? posts[0].file.name,
                        ).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium group-hover:translate-x-1 transition-transform duration-300">
                        <span className="mr-2">Read more</span>
                        <svg
                          className="w-4 h-4"
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
                    <h3 className="text-3xl md:text-4xl font-bold text-fd-foreground mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {posts[0].data.title}
                    </h3>
                    <p className="text-lg text-fd-muted-foreground leading-relaxed">
                      {posts[0].data.description}
                    </p>
                  </div>
                </Link>
              </div>
            )}

            {/* Other Posts Grid */}
            {posts.length > 1 && (
              <div>
                <h2 className="text-3xl font-bold text-fd-foreground mb-8">
                  All Posts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.slice(1).map((post) => (
                    <Link
                      key={post.url}
                      href={post.url}
                      className="group block bg-fd-card border border-fd-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
                    >
                      <div className="absolute inset-0 bg-purple-50 dark:bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative p-6">
                        <div className="mb-4">
                          <time className="text-sm text-fd-muted-foreground">
                            {new Date(
                              post.data.date ?? post.file.name,
                            ).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </time>
                        </div>

                        <h3 className="text-xl font-bold text-fd-foreground mb-3 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                          {post.data.title}
                        </h3>

                        <p className="text-fd-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                          {post.data.description}
                        </p>

                        <div className="flex items-center text-purple-600 dark:text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <span className="mr-2">Read article</span>
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
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export async function generateMetadata() {
  const t = await getTranslations('baseOptions');
  return createMetadata({
    title: t('blog'),
    pathname: '/blog',
  });
}
