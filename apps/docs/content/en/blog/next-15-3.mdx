---
title: Next.js 15.3
description: >-
  Next.js 15.3 includes Turbopack for builds, new client instrumentation and
  navigation hooks, and more.
author:
  - name: Andrew Clark
    image: /static/team/acdlite.jpeg
  - name: Jiwon Choi
    image: /static/team/jiwon.png
  - name: Jude Gao
    image: /static/team/jude.png
  - name: Maia Teegarden
    image: /static/team/maia.jpg
  - name: Tim Neutkens
    image: /static/team/tim.jpg
  - name: Will Binns-Smith
    image: /static/team/wbinnssmith.jpg
date: 2025-04-09T20:00:00.000Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-3/twitter-card.png
---

Next.js 15.3 includes Turbopack for builds, new client instrumentation and navigation hooks, and more:

*   [**Turbopack for builds (alpha)**](/blog/next-15-3#turbopack-builds-alpha): Faster production builds passing 8000+ tests (99%)
*   [**Community support for Rspack (experimental)**](/blog/next-15-3#community-support-for-rspack-experimental): Alternative bundler with Webpack compatibility
*   [**Client Instrumentation hook**](/blog/next-15-3#client-instrumentation-hook): Early monitoring and analytics setup
*   [**Navigation hooks**](/blog/next-15-3#navigation-hooks): Control routing with `onNavigate` and `useLinkStatus`
*   [**TypeScript plugin improvements**](/blog/next-15-3#typescript-plugin-performance-improvements): Improved support for large codebases

Upgrade today, or get started with:

```bash filename="Terminal"
# Use the automated upgrade CLI
npx @next/codemod@canary upgrade latest
 
# ...or upgrade manually
npm install next@latest react@latest react-dom@latest
 
# ...or start a new project
npx create-next-app@latest
```

[Turbopack Builds (alpha)](#turbopack-builds-alpha)
---------------------------------------------------

Following the stable release of `next dev --turbopack`, **over 50% of development sessions** on Next.js 15 are now using Turbopack.

This release includes our **alpha** release of `next build --turbopack`, bringing the same performance improvements from local development to production builds.

Try Turbopack for production builds by upgrading to 15.3 and running:

```bash filename="Terminal"
next build --turbopack
```

### [Functionality](#functionality)

[99.3%](https://areweturboyet.com/) of integration tests for `next build` are already passing. You can track our progress towards 100% at [areweturboyet.com](http://areweturboyet.com/). If your application already works with Turbopack for `dev`, then it should work as-is with `build`.

Turbopack builds are in alpha. We don’t recommend using them in production for mission-critical applications at this stage. Instead, try them in a preview or staging environment, or run the build locally to observe differences in bundle size and performance.

We’re actively working to close these performance gaps through scope hoisting, improved chunking, and other optimizations.

### [Build performance](#build-performance)

We’ve been validating Turbopack on Vercel’s large internal monorepo and early partner codebases. One advantage of Turbopack’s architecture versus our previous Webpack implementation is that performance scales when adding CPU cores:

*   At 4 cores: 28% faster than Webpack
*   At 16 cores: 60% faster than Webpack
*   At 30 cores: 83% faster than Webpack

These build times drop even further with our experimental work on persistent caching. We will share more on that in a future release.

### [Ecosystem](#ecosystem)

We’re working with commonly used integrations like Sentry to make sure they’re compatible with `next build --turbopack` before the stable release. Please reach out to [@leerob on X](https://x.com/leerob) if you are a tool author who would like to work with us to ensure compatibility.

### [Feedback](#feedback)

Please share your feedback, even if it goes smoothly, to help us prepare a stable release:

*   [GitHub discussion](https://github.com/vercel/next.js/discussions/77721)s for general feedback
*   [GitHub issues](https://github.com/vercel/next.js/issues) for reproductions

[Turbopack configuration in `next.config.ts` (stable)](#turbopack-configuration-in-nextconfigts-stable)
-------------------------------------------------------------------------------------------------------

Turbopack configuration in `next.config.ts` has moved from `experimental.turbo` to the top-level `turbopack` key:

```ts filename="next.config.ts"
import type { NextConfig } from 'next';
 
const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};
 
export default nextConfig;
```

For compatibility, the `experimental.turbo` option will continue to be supported until the next major release of Next.js.

For a complete list of Turbopack configuration options, see the [Turbopack API Reference](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack).

[Community support for Rspack (experimental)](#community-support-for-rspack-experimental)
-----------------------------------------------------------------------------------------

The Rspack team has created a community plugin for Next.js.

This provides an option for Next.js users who need near-exact Webpack API compatibility, but cannot yet move to Turbopack, to improve their local compilation and build times. We’re confident in our progress with Turbopack and will continue to provide an incremental path forward for Webpack users.

While this is not an official Next.js plugin, we are partnering with the Rspack team. Both teams will collaborate on shared foundations like SWC and Lightning CSS, benefiting all Next.js users and the broader ecosystem.

If you want to explore using Rspack with Next.js, you can use the `next-rspack` adapter. We are running the adapter against our integration test suite. It currently passes ~96% of tests.

[View an example](https://github.com/vercel/next.js/tree/canary/examples/with-rspack) or learn more in the [Rspack docs](https://rspack.dev/guide/tech/next).

[Client Instrumentation Hook](#client-instrumentation-hook)
-----------------------------------------------------------

The `instrumentation-client.js|ts` file allows you to add monitoring and analytics code that runs before your application's frontend code starts executing.

This is ideal for setting up performance tracking, error monitoring, or other client-side observability tools as early as possible in the lifecycle.

```js filename="instrumentation-client.js"
// Set up performance monitoring
performance.mark('app-init');
 
// Initialize analytics
console.log('Analytics initialized');
 
// Set up error tracking
window.addEventListener('error', (event) => {
  // Send to your error tracking service
  reportError(event.error);
});
```

Place this file at the root of your project similar to [server-side instrumentation](https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation).

Learn more in the [instrumentation-client file documentation](https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation-client).

[Navigation Hooks](#navigation-hooks)
-------------------------------------

We're introducing new navigation hooks that enhance client-side routing capabilities in Next.js 15.3, allowing you to more easily develop localized loading states and implement complex controls like navigation cancelation.

### [`onNavigate`](#onnavigate)

This event handler is a new property of the `Link` component and executes during client-side navigations, giving you precise control over your application's routing behavior.

Unlike the `onClick` event, which fires for all clicks, `onNavigate` can be used for [Single-Page App (SPA)](https://nextjs.org/docs/app/building-your-application/upgrading/single-page-applications) navigations, allowing you to execute code or even cancel navigation with `preventDefault()`.

This API can be used to implement transition animations, navigation guards, or analytics tracking that should only run during actual page transitions.

Learn more by visiting the [`onNavigate` documentation](https://nextjs.org/docs/app/api-reference/components/link#onnavigate).

### [`useLinkStatus`](#uselinkstatus)

The `useLinkStatus` Client Component hook returns a `pending` boolean that indicates when navigation is in progress, giving you localized control over loading states.

This API is modeled after [`useFormStatus`](https://react.dev/reference/react-dom/hooks/useFormStatus) from React, and is helpful for adding custom loading indicators during page transitions, especially when prefetching is disabled or when your linked routes don't have dedicated loading states.

By placing a component that uses `useLinkStatus` as a descendant of your `<Link>` component, you can create responsive UI elements that react to navigation events in real-time.

Learn more by visiting the [`useLinkStatus` documentation](https://nextjs.org/docs/app/api-reference/functions/use-link-status).

[TypeScript Plugin Performance Improvements](#typescript-plugin-performance-improvements)
-----------------------------------------------------------------------------------------

The Next.js TypeScript language server plugin (LSP) is now faster.

The LSP provides inline Intellisense features such as server/client boundary validation, component prop hints, configuration autocompletion, and error detection for disallowed APIs in React Server Components. In very large codebases, the plugin could previously cause the TypeScript language service to hang or crash.

We’ve made significant performance improvements to resolve these issues. In our internal testing, plugin response times have improved ~60% with no freezing or crashes.

[Other Changes](#other-changes)
-------------------------------

*   **\[Feature\]** Support `new URL()` in `images.remotePatterns` ([#77692](https://github.com/vercel/next.js/pull/77692))
*   **\[Feature\]** Viewport options are now separate from `metadata` ([#77427](https://github.com/vercel/next.js/pull/77427))
*   **\[Feature\]** Add `unstable_dynamicOnHover` option ([#77866](https://github.com/vercel/next.js/pull/77866))
*   **\[Feature\]** Add support for Pinterest Rich Pins ([#76988](https://github.com/vercel/next.js/pull/76988))
*   **\[Improvement\]** Make revalidate work when followed by a redirect in Route Handlers ([#77090](https://github.com/vercel/next.js/pull/77090))
*   **\[Improvement\]** Ensure strong consistency after calling revalidate in Server Actions ([#76885](https://github.com/vercel/next.js/pull/76885))
*   **\[Improvement\]** Upgrade `sharp` for faster PNG to AVIF conversion ([#77839](https://github.com/vercel/next.js/pull/77839))

[Contributors](#contributors)
-----------------------------

Next.js is the result of the combined work of over 3,000 individual developers. This release was brought to you by:

*   The **Next.js** team: [Andrew](https://github.com/acdlite), [Hendrik](https://github.com/unstubbable), [Janka](https://github.com/lubieowoce), [Jiachi](https://github.com/huozhi), [Jimmy](https://github.com/feedthejim), [Jiwon](https://github.com/devjiwonchoi), [JJ](https://github.com/ijjk), [Josh](https://github.com/gnoff), [Jude](https://github.com/gao_jude), [Sam](https://github.com/samcx), [Sebastian](https://github.com/sebmarkbage), [Sebbie](https://github.com/eps1lon), [Wyatt](https://github.com/wyattjoh), and [Zack](https://github.com/ztanner).
*   The **Turbopack** team: [Benjamin](https://github.com/bgw), [Donny](https://github.com/kdy1), [Josh](https://github.com/Cy-Tek), [Maia](https://github.com/padmaia), [Niklas](https://github.com/mischnic), [Tim](https://github.com/timneutkens), [Tobias](https://github.com/sokra), and [Will](https://github.com/wbinnssmith).
*   The **Next.js Docs** team: [Delba](https://github.com/delbaoliveira), [Rich](https://github.com/molebox), [Ismael](https://github.com/ismaelrumzan), and [Lee](https://github.com/leerob).

Huge thanks to @raunofreiberg, @huozhi, @ijjk, @timneutkens, @gaojude, @leerob, @mezotv, @bgw, @samcx, @ztanner, @sokra, @mischnic, @wbinnssmith, @kdy1, @unstubbable, @ahabhgk, @ScriptedAlchemy, @SukkaW, @wyattjoh, @eps1lon, @Amirroid, @Netail, @lubieowoce, @gnoff, @jackwilson323, @acdlite, @sbougerel, @kevva, @kasperpeulen, @Cy-Tek, @dvoytenko, @husseinraoouf, @isBatak, @iamkd, @delbaoliveira, @jantimon, @padmaia, @Bernardoow, @styfle, @devjiwonchoi, @JamBalaya56562, and @Marukome0743 for helping!
