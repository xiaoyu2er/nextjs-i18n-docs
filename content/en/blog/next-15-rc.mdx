---
title: Next.js 15 RC
description: >-
  The Next.js 15 Release Candidate (RC) is now available. This early version
  allows you to test the latest features before the upcoming stable release.
author:
  - name: Delba de Oliveira
    image: /static/team/delba.jpg
  - name: Zack Tanner
    image: /static/team/zack.jpg
date: 2024-05-23T17:00:00.507Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/twitter-card.png
---

The Next.js 15 Release Candidate (RC) is now available. This early version allows you to test the latest features before the upcoming stable release.

*   [**React:**](#react-19-rc) Support for the React 19 RC, React Compiler (Experimental), and hydration error improvements
*   [**Caching:**](#caching-updates) `fetch` requests, `GET` Route Handlers, and client navigations are no longer cached by default
*   [**Partial Prerendering (Experimental):**](#incremental-adoption-of-partial-prerendering-experimental) New Layout and Page config option for incremental adoption
*   [**`next/after` (Experimental):**](#executing-code-after-a-response-with-nextafter-experimental) New API to execute code after a response has finished streaming
*   [**`create-next-app`:**](#create-next-app-updates) Updated design and a new flag to enable Turbopack in local development
*   [**Bundling external packages (Stable):**](#optimizing-bundling-of-external-packages-stable) New config options for App and Pages Router

Try the Next.js 15 RC today:

```bash filename="Terminal"
npm install next@rc react@rc react-dom@rc
```

[React 19 RC](#react-19-rc)
---------------------------

The Next.js App Router is built on the React [canary channel](https://react.dev/blog/2023/05/03/react-canaries) for frameworks, which has allowed developers to use and provide feedback on these new React APIs before the v19 release.

Next.js 15 RC now supports React 19 RC, which includes new features for both the client and server like Actions.

Read the [Next.js 15 upgrade guide](https://nextjs.org/docs/app/building-your-application/upgrading/version-15), the [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide), and watch the [React Conf Keynote](https://www.youtube.com/live/T8TZQ6k4SLE?t=1788) to learn more.

> **Note:** Some third party libraries may not be compatible with React 19 yet.

[React Compiler (Experimental)](#react-compiler-experimental)
-------------------------------------------------------------

The [React Compiler](https://react.dev/learn/react-compiler) is a new experimental compiler created by the React team at Meta. The compiler understands your code at a deep level through its understanding of plain JavaScript semantics and the [Rules of React](https://react.dev/reference/rules), which allows it to add automatic optimizations to your code. The compiler reduces the amount of manual memoization developers have to do through APIs such as `useMemo` and `useCallback` - making code simpler, easier to maintain, and less error prone.

With Next.js 15, we've added support for the [React Compiler](https://react.dev/learn/react-compiler).

Install `babel-plugin-react-compiler`:

```bash filename="Terminal"
npm install babel-plugin-react-compiler
```

Then, add `experimental.reactCompiler` option in `next.config.js`:

```ts filename="next.config.ts"
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
};
 
module.exports = nextConfig;
```

Optionally, you can configure the compiler to run in "opt-in" mode as follows:

```ts filename="next.config.ts"
const nextConfig = {
  experimental: {
    reactCompiler: {
      compilationMode: 'annotation',
    },
  },
};
 
module.exports = nextConfig;
```

> **Note:** The React Compiler is currently only possible to use in Next.js through a Babel plugin, which could result in slower build times.

Learn more about the [React Compiler](https://react.dev/learn/react-compiler), and the [available Next.js config options](https://react.dev/learn/react-compiler#usage-with-nextjs).

### [Hydration error improvements](#hydration-error-improvements)

Next.js 14.1 [made improvements](/blog/next-14-1#improved-error-messages-and-fast-refresh) to error messages and hydration errors. Next.js 15 continues to build on those by adding an improved hydration error view. Hydration errors now display the source code of the error with suggestions on how to address the issue.

For example, this was a previous hydration error message in Next.js 14.1:

<Image
  alt="Hydration error message in Next.js 14.1"
  srcLight="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/hydration-error-before-light.png"
  srcDark="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/hydration-error-before-dark.png"
  width="1924"
  height="1034"
/>

Next.js 15 RC has improved this to:

<Image
  alt="Hydration error message improved in Next.js 15 RC"
  srcLight="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/hydration-error-after-light.png"
  srcDark="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/hydration-error-after-dark.png"
  width="1920"
  height="1308"
/>

[Caching updates](#caching-updates)
-----------------------------------

Next.js App Router launched with opinionated caching defaults. These were designed to provide the most performant option by default with the ability to opt out when required.

Based on your feedback, we re-evaluated our [caching heuristics](https://x.com/feedthejim/status/1785242054773145636) and how they would interact with projects like Partial Prerendering (PPR) and with third party libraries using `fetch`.

With Next.js 15, we’re changing the caching default for `fetch` requests, `GET` Route Handlers, and Client Router Cache from cached by default to uncached by default. If you want to retain the previous behavior, you can continue to opt-into caching.

We're continuing to improve caching in Next.js in the coming months and we'll share more details in the Next.js 15 GA announcement.

### [`fetch` Requests are no longer cached by default](#fetch-requests-are-no-longer-cached-by-default)

Next.js uses the [Web `fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API) cache option to configure how a server-side fetch request interacts with the framework's persistent HTTP cache:

```
fetch('https://...', { cache: 'force-cache' | 'no-store' });
```

*   `no-store` - fetch a resource from a remote server on every request and do not update the cache
*   `force-cache` - fetch a resource from the cache (if it exists) or a remote server and update the cache

In Next.js 14, `force-cache` was used by default if a `cache` option was not provided, unless a dynamic function or dynamic config option was used.

In Next.js 15, `no-store` is used by default if a `cache` option is not provided. This means **fetch requests will not be cached by default**.

You can still opt into caching `fetch` requests by:

*   Setting the [`cache` option](https://nextjs.org/docs/app/api-reference/functions/fetch#optionscache) to `force-cache` in a single `fetch` call
*   Setting the [`dynamic` route config option](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic) to `'force-static'` for a single route
*   Setting the [`fetchCache` route config option](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#fetchcache) to `'default-cache'` to override all `fetch` requests in a Layout or Page to use `force-cache` unless they explicitly specify their own `cache` option

### [`GET` Route Handlers are no longer cached by default](#get-route-handlers-are-no-longer-cached-by-default)

In Next 14, Route Handlers that used the `GET` HTTP method were cached by default unless they used a dynamic function or dynamic config option. In Next.js 15, `GET` functions are **not cached by default**.

You can still opt into caching using a static route config option such as `export dynamic = 'force-static'`.

Special Route Handlers like [`sitemap.ts`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap), [`opengraph-image.tsx`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image), and [`icon.tsx`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons), and other [metadata files](https://nextjs.org/docs/app/api-reference/file-conventions/metadata) remain static by default unless they use dynamic functions or dynamic config options.

### [Client Router Cache no longer caches Page components by default](#client-router-cache-no-longer-caches-page-components-by-default)

In Next.js 14.2.0, we introduced an experimental [`staleTimes`](https://nextjs.org/docs/app/api-reference/next-config-js/staleTimes) flag to allow custom configuration of the [Router Cache](https://nextjs.org/docs/app/building-your-application/caching#client-side-router-cache).

In Next.js 15, this flag still remains accessible, but we are changing the default behavior to have a `staleTime` of `0` for Page segments. This means that as you navigate around your app, the client will always reflect the latest data from the Page component(s) that become active as part of the navigation. However, there are still important behaviors that remain unchanged:

*   Shared layout data won't be refetched from the server to continue to support [partial rendering](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#4-partial-rendering).
*   Back/forward navigation will still restore from cache to ensure the browser can restore scroll position.
*   [Loading.js](https://nextjs.org/docs/app/api-reference/file-conventions/loading) will remain cached for 5 minutes (or the value of the `staleTimes.static` configuration).

You can opt into the previous Client Router Cache behavior by setting the following configuration:

```ts filename="next.config.ts"
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
};
 
module.exports = nextConfig;
```

[Incremental adoption of Partial Prerendering (Experimental)](#incremental-adoption-of-partial-prerendering-experimental)
-------------------------------------------------------------------------------------------------------------------------

In Next.js 14, we [introduced Partial Prerendering (PPR)](/blog/next-14#partial-prerendering-preview) - an optimization that combines [static and dynamic rendering](https://nextjs.org/docs/app/building-your-application/rendering/server-components#server-rendering-strategies) on the same page.

Next.js currently defaults to static rendering unless you use [dynamic functions](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-functions) such as `cookies()`, `headers()`, and uncached data requests. These APIs opt an entire route into dynamic rendering. With PPR, you can wrap any dynamic UI in a Suspense boundary. When a new request comes in, Next.js will immediately serve a static HTML shell, then render and stream the dynamic parts in the same HTTP request.

To allow for incremental adoption, we’ve added an `experimental_ppr` route config option for opting specific Layouts and Pages into PPR:

```jsx filename="app/page.jsx"
import { Suspense } from "react"
import { StaticComponent, DynamicComponent } from "@/app/ui"
 
export const experimental_ppr = true
 
export default function Page() {
  return {
     <>
	     <StaticComponent />
	     <Suspense fallback={...}>
		     <DynamicComponent />
	     </Suspense>
     </>
  };
}
```

To use the new option, you’ll need to set the `experimental.ppr` config in your `next.config.js` file to `'incremental'`:

```ts filename="next.config.ts"
const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
};
 
module.exports = nextConfig;
```

Once all the segments have PPR enabled, it’ll be considered safe for you to set the `ppr` value to `true`, and enable it for the entire app and all future routes.

We will share more about our PPR roadmap in our Next.js 15 GA blog post.

Learn more about [Partial Prerendering](https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering).

[Executing code after a response with `next/after` (Experimental)](#executing-code-after-a-response-with-nextafter-experimental)
--------------------------------------------------------------------------------------------------------------------------------

When processing a user request, the server typically performs tasks directly related to computing the response. However, you may need to perform tasks such as logging, analytics, and other external system synchronization.

Since these tasks are not directly related to the response, the user should not have to wait for them to complete. Deferring the work after responding to the user poses a challenge because serverless functions stop computation immediately after the response is closed.

`after()` is a new experimental API that solves this problem by allowing you to schedule work to be processed after the response has finished streaming, enabling secondary tasks to run without blocking the primary response.

To use it, add `experimental.after` to `next.config.js`:

```ts filename="next.config.ts"
const nextConfig = {
  experimental: {
    after: true,
  },
};
 
module.exports = nextConfig;
```

Then, import the function in Server Components, Server Actions, Route Handlers, or Middleware.

```
import { unstable_after as after } from 'next/server';
import { log } from '@/app/utils';
 
export default function Layout({ children }) {
  // Secondary task
  after(() => {
    log();
  });
 
  // Primary task
  return <>{children}</>;
}
```

Learn more about [`next/after`](https://nextjs.org/docs/app/api-reference/functions/unstable_after).

[`create-next-app` updates](#create-next-app-updates)
-----------------------------------------------------

For Next.js 15, we've updated `create-next-app` with a new design.

<Image
  alt="New design for create-next-app in Next.js 15 RC"
  srcLight="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/create-next-app-light.png"
  srcDark="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/create-next-app-dark.png"
  width="2038"
  height="1440"
/>

When running `create-next-app`, there is a new prompt asking if you want to enable Turbopack for local development (defaults to `No`).

```bash filename="Terminal"
✔ Would you like to use Turbopack for next dev? … No / Yes
```

The `--turbo` flag can be used to enable Turbopack.

```bash filename="Terminal"
npx create-next-app@rc --turbo
```

To make getting started on a new project even easier, a new `--empty` flag has been added to the CLI. This will remove any extraneous files and styles, resulting in a minimal "hello world" page.

```bash filename="Terminal"
npx create-next-app@rc --empty
```

[Optimizing bundling of external packages (Stable)](#optimizing-bundling-of-external-packages-stable)
-----------------------------------------------------------------------------------------------------

Bundling external packages can improve the cold start performance of your application. In the **App Router**, external packages are bundled by default, and you can opt-out specific packages using the new [`serverExternalPackages`](https://nextjs.org/docs/app/api-reference/next-config-js/serverExternalPackages) config option.

In the **Pages Router**, external packages are not bundled by default, but you can provide a list of packages to bundle using the existing [`transpilePackages`](https://nextjs.org/docs/pages/api-reference/next-config-js/transpilePackages) option. With this configuration option, you need to specify each package.

To unify configuration between App and Pages Router, we’re introducing a new option, [`bundlePagesRouterDependencies`](https://nextjs.org/docs/pages/api-reference/next-config-js/bundlePagesRouterDependencies) to match the default automatic bundling of the App Router. You can then use [`serverExternalPackages`](https://nextjs.org/docs/app/api-reference/next-config-js/serverExternalPackages) to opt-out specific packages, if needed.

```ts filename="next.config.ts"
const nextConfig = {
  // Automatically bundle external packages in the Pages Router:
  bundlePagesRouterDependencies: true,
  // Opt specific packages out of bundling for both App and Pages Router:
  serverExternalPackages: ['package-name'],
};
 
module.exports = nextConfig;
```

Learn more about [optimizing external packages](https://nextjs.org/docs/app/building-your-application/optimizing/package-bundling).

[Other Changes](#other-changes)
-------------------------------

*   **\[Breaking\]** Minimum React version is now 19 RC
*   **\[Breaking\]** next/image: Removed `squoosh` in favor of `sharp` as an optional dependency ([PR](https://github.com/vercel/next.js/pull/63321))
*   **\[Breaking\]** next/image: Changed default `Content-Disposition` to `attachment` ([PR](https://github.com/vercel/next.js/pull/65631))
*   **\[Breaking\]** next/image: Error when `src` has leading or trailing spaces ([PR](https://github.com/vercel/next.js/pull/65637))
*   **\[Breaking\]** Middleware: Apply `react-server` condition to limit unrecommended react API imports ([PR](https://github.com/vercel/next.js/pull/65424))
*   **\[Breaking\]** next/font: Removed support for external `@next/font` package ([PR](https://github.com/vercel/next.js/pull/65601))
*   **\[Breaking\]** next/font: Removed `font-family` hashing ([PR](https://github.com/vercel/next.js/pull/53608))
*   **\[Breaking\]** Caching: `force-dynamic` will now set a `no-store` default to the fetch cache ([PR](https://github.com/vercel/next.js/pull/64145))
*   **\[Breaking\]** Config: Enable `swcMinify` ([PR](https://github.com/vercel/next.js/pull/65579)), `missingSuspenseWithCSRBailout` ([PR](https://github.com/vercel/next.js/pull/65688)), and `outputFileTracing` ([PR](https://github.com/vercel/next.js/pull/65579)) behavior by default and remove deprecated options
*   **\[Breaking\]** Remove auto-instrumentation for Speed Insights (must now use the dedicated [@vercel/speed-insights](https://www.npmjs.com/package/@vercel/speed-insights) package) ([PR](https://github.com/vercel/next.js/pull/64199))
*   **\[Breaking\]** Remove `.xml` extension for dynamic sitemap routes and align sitemap URLs between development and production ([PR](https://github.com/vercel/next.js/pull/65507))
*   **\[Improvement\]** Metadata: Updated environmental variable fallbacks for `metadataBase` when hosted on Vercel ([PR](https://github.com/vercel/next.js/pull/65089))
*   **\[Improvement\]** Fix tree-shaking with mixed namespace and named imports from `optimizePackageImports` ([PR](https://github.com/vercel/next.js/pull/64894))
*   **\[Improvement\]** Parallel Routes: Provide unmatched catch-all routes with all known params ([PR](https://github.com/vercel/next.js/pull/65063))
*   **\[Improvement\]** Config `bundlePagesExternals` is now stable and renamed to `bundlePagesRouterDependencies`
*   **\[Improvement\]** Config `serverComponentsExternalPackages` is now stable and renamed to `serverExternalPackages`
*   **\[Improvement\]** create-next-app: New projects ignore all `.env` files by default ([PR](https://github.com/vercel/next.js/pull/61920))
*   **\[Docs\]** Improve auth documentation ([PR](https://github.com/vercel/next.js/pull/63140))
*   **\[Docs\]** `@next/env` package ([PR](https://github.com/vercel/next.js/pull/64908))

To learn more, check out the [upgrade guide](https://nextjs.org/docs/app/building-your-application/upgrading/version-15).

[Contributors](#contributors)
-----------------------------

Next.js is the result of the combined work of over 3,000 individual developers, industry partners like Google and Meta, and our core team at Vercel. This release was brought to you by:

*   The **Next.js** team: [Andrew](https://github.com/acdlite), [Balazs](https://github.com/balazsorban44), [Ethan](https://github.com/Ethan-Arrowood), [Janka](https://github.com/lubieowoce), [Jiachi](https://github.com/huozhi), [Jimmy](https://github.com/feedthejim), [JJ](https://github.com/ijjk), [Josh](https://github.com/gnoff), [Sam](https://github.com/samcx), [Sebastian](https://github.com/sebmarkbage), [Sebbie](https://github.com/eps1lon), [Shu](https://github.com/shuding), [Steven](https://github.com/styfle), [Tim](https://github.com/timneutkens), [Wyatt](https://github.com/wyattjoh), and [Zack](https://github.com/ztanner).
*   The **Turbopack** team: [Alex](https://github.com/arlyon), [Benjamin](https://github.com/bgw), [Donny](https://github.com/kdy1), [Leah](https://github.com/forsakenharmony), [Maia](https://github.com/padmaia), [OJ](https://github.com/kwonoj), [Tobias](https://github.com/sokra), and [Will](https://github.com/wbinnssmith).
*   **Next.js Docs**: [Delba](https://github.com/delbaoliveira), [Steph](https://github.com/StephDietz), [Michael](https://github.com/manovotny), [Anthony](https://github.com/anthonyshew), and [Lee](https://github.com/leerob).

Huge thanks to @devjiwonchoi, @ijjk, @Ethan-Arrowood, @sokra, @kenji-webdev, @wbinnssmith, @huozhi, @domdomegg, @samcx, @Jaaneek, @evanwinter, @wyattjoh, @kdy1, @balazsorban44, @feedthejim, @ztanner, @ForsakenHarmony, @kwonoj, @delbaoliveira, @stipsan, @leerob, @shuding, @xiaohanyu, @timneutkens, @dvoytenko, @bobaaaaa, @bgw, @gaspar09, @souporserious, @unflxw, @kiner-tang, @Ehren12, @EffectDoplera, @IAmKushagraSharma, @Auxdible, @sean-rallycry, @Jeffrey-Zutt, @eps1lon, @jeanmax1me, @unstubbable, @NilsJacobsen, @PaulAsjes, @adiguno, @ryan-nauman, @zsh77, @KagamiChan, @steveluscher, @MehfoozurRehman, @vkryachko, @chentsulin, @samijaber, @begalinsaf, @FluxCapacitor2, @lukahartwig, @brianshano, @pavelglac, @styfle, @symant233, @HristovCodes, @karlhorky, @jonluca, @jonathan-ingram, @mknichel, @sopranopillow, @Gomah, @imddc, @notrab, @gabrielrolfsen, @remorses, @AbhiShake1, @agadzik, @ryota-murakami, @rishabhpoddar, @rezamauliadi, @IncognitoTGT, @webtinax, @BunsDev, @nisabmohd, @z0n, @bennettdams, @joeshub, @n1ckoates, @srkirkland, @RiskyMH, @coopbri, @okoyecharles, @diogocapela, @dnhn, @typeofweb, @davidsa03, @imranolas, @lubieowoce, @maxhaomh, @mirasayon, @blvdmitry, @hwangstar156, @lforst, @emmerich, @christian-bromann, @Lsnsh, @datner, @hiro0218, @flybayer, @ianmacartney, @ypessoa, @ryohidaka, @icyJoseph, @Arinji2, @lovell, @nsams, @Nayeem-XTREME, @JamBalaya56562, @Arindam200, @gaojude, @qqww08, @todor0v, @coltonehrman, and @wiesson for helping!
