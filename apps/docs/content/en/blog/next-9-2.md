---
title: Next.js 9.2
description: >-
  Next.js 9.2 introduces native support for CSS, aggressive code-splitting,
  catch-all dynamic routes, and more!
author:
  - name: JJ Kasper
    image: /static/team/jj.jpg
  - name: Joe Haddad
    image: /static/team/timer.jpg
  - name: Luis Alvarez
    image: /static/team/lfades.jpg
  - name: Tim Neutkens
    image: /static/team/tim.jpg
date: 2020-01-15T19:37:43.618Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-9-2/twitter-card.png
---

We are excited today to introduce Next.js 9.2, featuring:

*   **[Built-In CSS Support for Global Stylesheets](#built-in-css-support-for-global-stylesheets)**: Applications can now directly import `.css` files as global stylesheets.
*   **[Built-In CSS Module Support for Component-Level Styles](#built-in-css-module-support-for-component-level-styles)**: Leveraging the `.module.css` convention, locally scoped CSS can be imported and used anywhere in your application.
*   **[Improved Code-Splitting Strategy](#improved-code-splitting-strategy)**: The Google Chrome team heavily optimized Next.js' code-splitting strategy, resulting in significantly smaller client-side bundles. Furthermore, they've maximized [HTTP/2](https://developers.google.com/web/fundamentals/performance/http2) utilization to improve page load speed without hurting HTTP/1.1 performance.
*   **[Catch-All Dynamic Routes](#catch-all-dynamic-routes)**: Next.js' Dynamic Routes now support catch-all routes, supporting a variety of new use-cases, e.g. CMS-powered websites.

All of these benefits are non-breaking and fully backwards compatible. All you need to do to update is run:

```bash filename="Terminal"
npm i next@latest react@latest react-dom@latest
```

### [Built-In CSS Support for Global Stylesheets](#built-in-css-support-for-global-stylesheets)

Next.js 5 introduced support for importing CSS through a custom plugin called `next-css` which extended the behavior of Next.js.

Over time we got consistent feedback from companies and users of Next.js, mentioning that they end up adding `next-css` to their application often.

Furthermore, `next-css` had a few missing constraints when importing CSS. For example, you could import a CSS file in every file of the project, however this imported CSS file would be global for the whole application.

In order to improve developer experience and solve these inconsistencies, we started working on bringing CSS imports support to Next.js by default.

We're excited to announce that Next.js now has native support for importing stylesheets into your application.

To get started using CSS imports in your application, import the CSS file within `pages/_app.js`.

For example, consider the following stylesheet named `styles.css` in the root of your project:

```
body {
  padding: 20px 20px 60px;
  margin: 0;
}
```

Create a [`pages/_app.js` file](/docs/pages/building-your-application/routing/custom-app) if not already present.

Then, import the `styles.css` file:

```js filename="pages/_app.js"
import '../styles.css';
 
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

Since stylesheets are global by nature, they must be imported in the [Custom `<App>` component](/docs/pages/building-your-application/routing/custom-app). This is necessary to avoid class name and ordering conflicts for global styles.

In development, expressing stylesheets this way allows your styles to be automatically updated on the page as you edit them.

In production, all CSS files will be automatically concatenated into a single minified `.css` file. This CSS file will be loaded via a `<link>` tag and automatically injected into the default HTML markup Next.js generates.

This new feature is fully backwards compatible. If you are using `@zeit/next-css` or other CSS related plugins the feature is disabled to avoid conflicts.

If you are currently using `@zeit/next-css` we recommend removing the plugin from your `next.config.js` and `package.json`, thereby moving to the built-in CSS support upon upgrading.

### [Built-In CSS Module Support for Component-Level Styles](#built-in-css-module-support-for-component-level-styles)

Next.js now supports [CSS Modules](https://github.com/css-modules/css-modules) using the `[name].module.css` file naming convention.

Unlike the support previously available in Next.js 5 using `next-css`, [global CSS](#built-in-css-support-for-global-stylesheets) and CSS modules can now **coexist** — `next-css` required all `.css` files in your application be handled as global or local, but not both.

CSS Modules locally scope CSS by automatically creating unique class names. This allows you to use the same CSS class name in different files without worrying about collisions.

This behavior makes CSS Modules the ideal way to include component-level CSS. CSS Module files **can be imported anywhere in your application**.

For example, consider a reusable `Button` component in the `components/` folder:

First, create `components/Button.module.css` with the following content:

```
/*
You do not need to worry about .error {} colliding with any other `.css` or
`.module.css` files!
*/
.error {
  color: white;
  background-color: red;
}
```

Then, create `components/Button.js`, importing and using the above CSS file:

```js filename="components/Button.js"
import styles from './Button.module.css';
 
export function Button() {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      Destroy
    </button>
  );
}
```

CSS Modules are an _optional_ feature and are only enabled for files with the `.module.css` extension. Regular [`<link>` stylesheets](/docs/pages/api-reference/components/head) and [global CSS files](#built-in-css-support-for-global-stylesheets) are still supported.

In production, all CSS Module files are automatically concatenated into **many minified and code-split `.css` files**. These `.css` files represent hot execution paths in your application, ensuring the minimal amount of CSS is loaded per-page for your application to paint.

Like above, this new feature is fully backwards compatible. If you are using `@zeit/next-css` or other CSS related plugins the feature is disabled to avoid conflicts.

If you are currently using `@zeit/next-css` we recommend removing the plugin from your `next.config.js` and `package.json`, thereby moving to the built-in CSS support.

### [Improved Code-Splitting Strategy](#improved-code-splitting-strategy)

Next.js versions prior to 9.2 had a fixed set of JavaScript bundles required to load and make a page interactive:

*   The page's JavaScript file
*   A file with common JavaScript
*   Next.js client-side runtime bundle
*   Webpack client-side runtime bundle
*   Dynamic imports (added through `next/dynamic`, when used)

To make the page interactive, all of these bundles have to load as they depend on each other to boot up React in the browser.

Because all of these bundles are required for the application to become interactive, it's important they are as optimized as possible. In practice, this means not over-downloading code from other parts of the application.

For this reason, Next.js used a `commons` bundle that held common JavaScript between pages. The calculation of the old bundle-splitting strategy to generate `commons` was a usage-ratio heuristic. If a module was used in more than 50% of all pages, it'd be marked as a common module. Otherwise, it was bundled in the page's JavaScript file.

However, applications can consist of many different types of pages. For example, marketing pages, a blog, and a dashboard. If there was a large number of marketing pages compared to other page types, the commons calculation would result in optimizations heavily focused on the marketing pages.

Our goal is to optimize for all page types, in one application.

[Alex Castle](https://twitter.com/atcastle) [proposed a new method of chunking](https://github.com/vercel/next.js/issues/7631) (creation of separate JavaScript files) that allows optimized commons chunking with multiple files, including when many page types are involved.

Today, we're happy to announce this new chunking behavior is enabled by default in Next.js 9.2. We'd like to extend deep gratitude to the [Google Chrome team](/blog/next-9#google-chrome-collaboration) and [Alex Castle](https://twitter.com/atcastle) for contributing this change. This change reflects the cumulative effort of weeks of research, lab testing, real-world testing, and implementation.

The new chunking implementation leverages [HTTP/2](https://developers.google.com/web/fundamentals/performance/http2) to deliver a greater number of smaller sized chunks.

Under the new heuristic, chunks are created for:

*   A minimal chunk for each page.
*   A framework chunk containing React, ReactDOM, React's Scheduler, etc.
*   Library chunks for any `node_module` dependency over 160kb (pre-minify/gzip)
*   A commons chunk for code used across all pages.
*   As many shared chunks (used by 2 or more pages) as possible, optimizing for overall application size and initial load speed.
*   Next.js' client-side runtime.
*   Webpack runtime.

Let's take a look at what this means in a real-world application:

An early-adopting industry-partner, [Barnebys®](https://www.barnebys.com/), saw a 23% decrease in overall application size.

Furthermore, their largest JS bundle was reduced by 30% — 605kB reduced to 425kB — with no required code changes.

Another industry-partner, [SumUp®](https://sumup.com/), saw a 70% decrease in their largest JS bundle — 395kB reduced to 122kB — with no required code changes.

#### [Largest JavaScript Bundle](#largest-javascript-bundle)

Before

After

Delta

Barnebys

605kB

425kB

**30%** _smaller_

SumUp

395kB

122kB

**70%** _smaller_

The new chunking behavior not only reduces your overall and initial-load size, but also successive client-side navigations. [Barnebys®](https://www.barnebys.com/) saw a 87% reduction in the amount of JavaScript loaded after six (6) page navigations:

#### [JavaScript Loaded by Multiple Client-Side transitions](#javascript-loaded-by-multiple-client-side-transitions)

Before

After

Delta

Barnebys

136kB

18kB

**87%** _smaller_

This new behavior is fully backwards compatible. Upgrading to the latest version of Next.js is all you need to do to leverage this performance improvement.

### [Catch-All Dynamic Routes](#catch-all-dynamic-routes)

With the release of Next.js 9 we introduced [dynamic route segments](https://nextjs.org/blog/next-9#dynamic-route-segments) with the goal of simplifying dynamic segments in Next.js without the need for a custom server. This feature has been massively adopted by Next.js users.

There were still some cases that the dynamic route segments feature didn't cover.

One of these cases was catch-all routes. For example, routing a wildcard like `/post/**` as a page. This is especially useful when you have a nested structure that is defined by a content source like a CMS.

You can now create catch-all dynamic routes using the `[...name]` syntax.

For example, `pages/post/[...slug].js` will match `/post/a`, `/post/a/b`, `/post/a/b/c`, and so on.

`slug` will be provided in the router query object as an array of individual path parts. So, for the path `/post/foo/bar`, the query object will be `{ slug: ['foo', 'bar'] }`.

[Community](#community)
-----------------------

We're very excited to see the continued growth in Next.js adoption:

*   We have had over **880** independent contributors.
*   On GitHub, the project has been starred over **44,000** times.
*   The [examples directory](https://github.com/vercel/next.js/tree/canary/examples) has over **220 examples.**

The Next.js community now has over **13,800** members. [Join us!](https://github.com/vercel/next.js/discussions)

We are thankful to our community and all the external feedback and contributions that helped shape this release.
