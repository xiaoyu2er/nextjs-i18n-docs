---
title: Next.js 14.2
description: >-
  Next.js 14.2 includes development, production, and caching improvements.
  Including new configuration options, 99% Turbopack tests passing, and more.
author:
  - name: Delba de Oliveira
    image: /static/team/delba.jpg
  - name: Tim Neutkens
    image: /static/team/tim.jpg
date: 2024-04-11T17:00:00.507Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-14-2/twitter-card.png
---

Next.js 14.2 includes development, production, and caching improvements.

*   [**Turbopack for Development (Release Candidate):**](#turbopack-for-development-release-candidate) 99.8% tests passing for `next dev --turbo`.
*   [**Build and Production Improvements:**](#build-and-production-improvements) Reduced build memory usage and CSS optimizations.
*   [**Caching Improvements:**](#caching-improvements) Configurable invalidation periods with `staleTimes`.
*   [**Error DX Improvements:**](#errors-dx-improvements) Better hydration mismatch errors and design updates.

Upgrade today or get started with:

```bash filename="Terminal"
npx create-next-app@latest
```

[Turbopack for Development (Release Candidate)](#turbopack-for-development-release-candidate)
---------------------------------------------------------------------------------------------

Over the past few months, we’ve been working on improving local development performance with Turbopack. In version 14.2, the Turbopack **Release Candidate** is now available for local development:

*   **99.8%** of [integrations tests](https://areweturboyet.com/) are now passing.
*   We’ve verified the top 300 `npm` packages used in Next.js applications can compile with Turbopack.
*   All [Next.js examples](https://github.com/vercel/next.js/tree/canary/examples) work with Turbopack.
*   We’ve integrated [Lightning CSS](https://lightningcss.dev/), a fast CSS bundler and minifier, written in Rust.

We’ve been extensively dogfooding Turbopack with Vercel’s applications. For example, with `vercel.com`, a large Next.js app, we've seen:

*   Up to **76.7% faster** local server startup.
*   Up to **96.3% faster** code updates with Fast Refresh.
*   Up to **45.8% faster** initial route compile without caching (Turbopack does not have disk caching yet).

Turbopack continues to be opt-in and you can try it out with:

```bash filename="Terminal"
next dev --turbo
```

We will now be focusing on improving memory usage, implementing persistent caching, and `next build --turbo`.

*   **Memory Usage** - We’ve built low-level tools for investigating memory usage. You can now [generate traces](/docs/architecture/turbopack#generating-trace-files) that include both performance metrics and broad memory usage information. These traces allows us to investigate performance and memory usage without needing access to your application’s source code.
*   **Persistent Caching** - We’re also exploring the best architecture options, and we’re expecting to share more details in a future release.
*   **`next build`** - While Turbopack is not available for builds yet, **74.7%** of tests are already passing. You can follow the progress at [areweturboyet.com/build](https://areweturboyet.com/build).

To see a list of [supported](/docs/architecture/turbopack#supported-features) and [unsupported features](/docs/architecture/turbopack#unsupported-features) in Turbopack, please refer to our [documentation](/docs/architecture/turbopack).

[Build and Production Improvements](#build-and-production-improvements)
-----------------------------------------------------------------------

In addition to bundling improvements with Turbopack, we’ve worked to improve overall build and production performance for all Next.js applications (both Pages and App Router).

### [Tree-shaking](#tree-shaking)

We identified an optimization for the boundary between Server and Client Components that allows for tree-shaking unused exports. For example, importing a single `Icon` component from a file that has `"use client"` no longer includes all the other icons from that package. This can largely reduce the production JavaScript bundle size.

Testing this optimization on a popular library like `react-aria-components` reduced the final bundle size by **\-51.3%**.

> **Note:** This optimization does not currently work with barrel files. In the meantime, you can use the [`optimizePackageImports`](/docs/app/api-reference/next-config-js/optimizePackageImports) config option:
> 
> ```ts filename="next.config.ts"
> module.exports = {
>   experimental: {
>     optimizePackageImports: ['package-name'],
>   },
> };
> ```

### [Build Memory Usage](#build-memory-usage)

For extremely large-scale Next.js applications, we noticed out-of-memory crashes (OOMs) during production builds. After investigating user reports and reproductions, we identified the root issue was over-bundling and minification (Next.js created fewer, larger JavaScript files with duplication). We’ve refactored the bundling logic and optimized the compiler for these cases.

Our early tests show that on a minimal Next.js app, memory usage and cache file size decreased **from 2.2GB to under 190MB** on average.

To make it easier to debug memory performance, we’ve introduced a `--experimental-debug-memory-usage` flag to `next build`. Learn more in our [documentation](/docs/app/building-your-application/optimizing/memory-usage).

### [CSS](#css)

We updated how CSS is optimized during production Next.js builds by chunking CSS to avoid conflicting styles when you navigate between pages.

The order and merging of CSS chunks are now defined by the import order. For example, `base-button.module.css` will be ordered before `page.module.css`:

```tsx filename="base-button.tsx"
import styles from './base-button.module.css';
 
export function BaseButton() {
  return <button className={styles.primary} />;
}
```

```tsx filename="page.tsx"
import { BaseButton } from './base-button';
import styles from './page.module.css';
 
export function Page() {
  return <BaseButton className={styles.primary} />;
}
```

To maintain the correct CSS order, we recommend:

*   Using [CSS Modules](/docs/app/building-your-application/styling/css-modules) over [global styles](/docs/app/building-your-application/styling/css-modules#global-styles).
*   Only import a CSS Module in a single JS/TS file.
*   If using global class names, import the global styles in the same JS/TS too.

We don’t expect this change to negatively impact the majority of applications. However, if you see any unexpected styles when upgrading, please review your CSS import order as per the recommendations in our [documentation](/docs/app/building-your-application/styling/css#ordering-and-merging).

[Caching Improvements](#caching-improvements)
---------------------------------------------

Caching is a critical part of building fast and reliable web applications. When performing mutations, both users and developers expect the cache to be updated to reflect the latest changes. We've been exploring how to improve the Next.js caching experience in the App Router.

### [`staleTimes` (Experimental)](#staletimes-experimental)

The [Client-side Router Cache](/docs/app/building-your-application/caching#data-cache-and-client-side-router-cache) is a caching layer designed to provide a fast navigation experience by caching visited and prefetched routes on the client.

Based on community feedback, we’ve added an experimental `staleTimes` option to allow the [client-side router cache](/docs/app/building-your-application/caching#router-cache) invalidation period to be configured.

By default, prefetched routes (using the `<Link>` component without the `prefetch` prop) will be cached for 30 seconds, and if the `prefetch` prop is set to `true`, 5 minutes. You can overwrite these default values by defining custom [revalidation times](/docs/app/building-your-application/caching#duration-3) in `next.config.js`:

```ts filename="next.config.ts"
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
};
 
module.exports = nextConfig;
```

`staleTimes` aims to improve the current experience of users who want more control over caching heuristics, but it is not intended to be the complete solution. In upcoming releases, we will focus on improving the overall caching semantics and providing more flexible solutions.

Learn more about `staleTimes` in our [documentation](/docs/app/api-reference/next-config-js/staleTimes).

### [Parallel and Intercepting Routes](#parallel-and-intercepting-routes)

We are continuing to iterate on on [Parallel](/docs/app/building-your-application/routing/parallel-routes) and [Intercepting](/docs/app/building-your-application/routing/intercepting-routes) Routes, now improving the integration with the Client-side Router Cache.

*   Parallel and Intercepting routes that invoke Server Actions with [`revalidatePath`](/docs/app/api-reference/functions/revalidatePath) or [`revalidateTag`](/docs/app/api-reference/functions/revalidateTag) will revalidate the cache and refresh the visible slots while maintaining the user’s current view.
*   Similarly, calling [`router.refresh`](/docs/app/building-your-application/caching#routerrefresh) now correctly refreshes visible slots, maintaining the current view.

[Errors DX Improvements](#errors-dx-improvements)
-------------------------------------------------

In version 14.1, we started working on [improving the readability of error messages and stack traces](/blog/next-14-1#improved-error-messages-and-fast-refresh) when running `next dev`. This work has continued into 14.2 to now include better error messages, overlay design improvements for both App Router and Pages Router, light and dark mode support, and clearer `dev` and `build` logs.

For example, React Hydration errors are a common source of confusion in our community. While we made improvements to help users pinpoint the source of hydration mismatches (see below), we're working with the React team to improve the underlying error messages and show the file name where the error occurred.

**Before:**

An example of the Next.js error overlay before version 14.2.

**After:**

An example of the Next.js error overlay after version 14.2.

[React 19](#react-19)
---------------------

In February, the React team announced the upcoming release of [React 19](https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024#the-next-major-version-of-react). To prepare for React 19, we're working on integrating the latest features and improvements into Next.js, and plan on releasing a major version to orchestrate these changes.

New features like Actions and their related hooks, which have been available within Next.js from the [React canary channel](https://react.dev/blog/2023/05/03/react-canaries), will now all be available for all React applications (including client-only applications). We're excited to see wider adoption of these features in the React ecosystem.

[Other Improvements](#other-improvements)
-----------------------------------------

*   **\[Docs\]** New documentation on Video Optimization ([PR](https://github.com/vercel/next.js/pull/60574)).
*   **\[Docs\]** New documentation on `instrumentation.ts` ([PR](https://github.com/vercel/next.js/pull/61403))
*   **\[Feature\]** New `overrideSrc` prop for `next/image` ([PR](https://github.com/vercel/next.js/pull/64221)).
*   **\[Feature\]** New `revalidateReason` argument to `getStaticProps` ([PR](https://github.com/vercel/next.js/pull/64258)).
*   **\[Improvement\]** Refactored streaming logic, reducing the time to stream pages in production ([PR](https://github.com/vercel/next.js/pull/63427)).
*   **\[Improvement\]** Support for nested Server Actions ([PR](https://github.com/vercel/next.js/pull/61001)).
*   **\[Improvement\]** Support for localization in generated Sitemaps ([PR](https://github.com/vercel/next.js/pull/53765)).
*   **\[Improvement\]** Visual improvements to dev and build logs ([PR](https://github.com/vercel/next.js/pull/62946))
*   **\[Improvement\]** Skew protection is stable on Vercel ([Docs](https://vercel.com/docs/skew-protection)).
*   **\[Improvement\]** Make `useSelectedLayoutSegment` compatible with the Pages Router ([PR](https://github.com/vercel/next.js/pull/62584)).
*   **\[Improvement\]** Skip `metadataBase` warnings when absolute URLs don’t need to be resolved ([PR](https://github.com/vercel/next.js/pull/61898)).
*   **\[Improvement\]** Fix Server Actions not submitting without JavaScript enabled when deployed to Vercel ([PR](https://github.com/vercel/next.js/pull/63978))
*   **\[Improvement\]** Fix error about a Server Action not being found in the actions manifest if triggered after navigating away from referring page, or if used inside of an inactive parallel route segment ([PR](https://github.com/vercel/next.js/pull/64227))
*   **\[Improvement\]** Fix CSS imports in components loaded by `next/dynamic` ([PR](https://github.com/vercel/next.js/pull/64294)).
*   **\[Improvement\]** Warn when animated image is missing `unoptimized` prop ([PR](https://github.com/vercel/next.js/pull/61045)).
*   **\[Improvement\]** Show an error message if `images.loaderFile` doesn't export a default function ([PR](https://github.com/vercel/next.js/pull/64036))

[Community](#community)
-----------------------

Next.js now has over 1 million monthly active developers. We're grateful for the community's support and contributions. Join the conversation on [GitHub Discussions](https://github.com/vercel/next.js/discussions), [Reddit](https://www.reddit.com/r/nextjs/), and [Discord](/discord).

[Contributors](#contributors)
-----------------------------

Next.js is the result of the combined work of over 3,000 individual developers, industry partners like Google and Meta, and our core team at Vercel. This release was brought to you by:

*   The **Next.js** team: [Andrew](https://github.com/acdlite), [Balazs](https://github.com/balazsorban44), [Ethan](https://github.com/Ethan-Arrowood), [Janka](https://github.com/lubieowoce), [Jiachi](https://github.com/huozhi), [Jimmy](https://github.com/feedthejim), [JJ](https://github.com/ijjk), [Josh](https://github.com/gnoff), [Sam](https://github.com/samcx), [Sebastian](https://github.com/sebmarkbage), [Sebbie](https://github.com/eps1lon), [Shu](https://github.com/shuding), [Steven](https://github.com/styfle), [Tim](https://github.com/timneutkens), [Wyatt](https://github.com/wyattjoh), and [Zack](https://github.com/ztanner).
*   The **Turbopack** team: [Donny](https://github.com/kdy1), [Leah](https://github.com/forsakenharmony), [Maia](https://github.com/padmaia), [OJ](https://github.com/kwonoj), [Tobias](https://github.com/sokra), and [Will](https://github.com/wbinnssmith).
*   **Next.js Docs**: [Delba](https://github.com/delbaoliveira), [Steph](https://github.com/StephDietz), [Michael](https://github.com/manovotny), [Anthony](https://github.com/anthonyshew), and [Lee](https://github.com/leerob).

Huge thanks to @taishikato, @JesseKoldewijn, @Evavic44, @feugy, @liamlaverty, @dvoytenko, @SukkaW, @wbinnssmith, @rishabhpoddar, @better-salmon, @ziyafenn, @A7med3bdulBaset, @jasonuc, @yossydev, @Prachi-meon, @InfiniteCodeMonkeys, @ForsakenHarmony, @miketimmerman, @kwonoj, @williamli, @gnoff, @jsteele-stripe, @chungweileong94, @WITS, @sogoagain, @junioryono, @eisafaqiri, @yannbolliger, @aramikuto, @rocketman-21, @kenji-webdev, @michaelpeterswa, @Dannymx, @vpaflah, @zeevo, @chrisweb, @stefangeneralao, @tknickman, @Kikobeats, @ubinatus, @code-haseeb, @hmmChase, @byhow, @DanielRivers, @wojtekmaj, @paramoshkinandrew, @OMikkel, @theitaliandev, @oliviertassinari, @Ishaan2053, @Sandeep-Mani, @alyahmedaly, @Lezzio, @devjiwonchoi, @juliusmarminge, @szmazhr, @eddiejaoude, @itz-Me-Pj, @AndersDJohnson, @gentamura, @tills13, @dijonmusters, @SaiGanesh21, @vordgi, @ryota-murakami, @tszhong0411, @officialrajdeepsingh, @alexpuertasr, @AkifumiSato, @Jonas-PFX, @icyJoseph, @florian-lp, @pbzona, @erfanium, @remcohaszing, @bernardobelchior, @willashe, @kevinmitch14, @smakosh, @mnjongerius, @asobirov, @theoholl, @suu3, @ArianHamdi, @adrianha, @Sina-Abf, @kuzeykose, @meenie, @nphmuller, @javivelasco, @belgattitude, @Svetoslav99, @johnslemmer, @colbyfayock, @mehranmf31, @m-nakamura145, @ryo8000, @aryaemami59, @bestlyg, @jinsoul75, @petrovmiroslav, @nattui, @zhuyedev, @dongwonnn, @nhducit, @flotwig, @Schmavery, @abhinaypandey02, @rvetere, @coffeecupjapan, @cjimmy, @Soheiljafarnejad, @jantimon, @zengspr, @wesbos, @neomad1337, @MaxLeiter, and @devr77 for helping!
