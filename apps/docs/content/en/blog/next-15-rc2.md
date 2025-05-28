---
title: Next.js 15 RC 2
description: >-
  The second Next.js 15 Release Candidate (RC) is now available. This version
  allows you to test the latest features before the upcoming stable release.
author:
  - name: Delba de Oliveira
    image: /static/team/delba.jpg
  - name: Jiachi Liu
    image: /static/team/jiachi.png
  - name: Jiwon Choi
    image: /static/team/jiwon.png
  - name: Josh Story
    image: /static/team/josh.jpg
  - name: Sebastian Silbermann
    image: /static/team/sebbie.png
  - name: Zack Tanner
    image: /static/team/zack.jpg
date: 2024-10-15T02:00:00.000Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc2/twitter-card.png
---

Following the announcement of the first Next.js 15 Release Candidate [back in May,](https://nextjs.org/blog/next-15-rc) we’ve been preparing a second Release Candidate based on your feedback. Here’s what we’ve been working on:

*   [**`@next/codemod upgrade`**](#smooth-upgrades-with-codemod-cli): Easily upgrade to the latest Next.js and React versions.
*   [**Turbopack for development**](#turbopack-for-development): Performance improvements and Next.js 15 stability target.
*   [**Async Request APIs (Breaking)**](#async-request-apis-breaking-change): Incremental step towards a simplified rendering and caching model.
*   [**Server Actions**](#enhanced-security-for-server-actions): Enhanced security with unguessable endpoints and removal of unused actions.
*   [**Static Indicator**](#static-route-indicator): New visual indicator shows static routes during development.
*   [**`next/form`**](#form-component): Enhance HTML forms with client-side navigation.
*   [**`next.config.ts`**](#support-for-nextconfigts): TypeScript support for the Next.js configuration file.
*   [**`instrumentation.js` (Stable)**](#instrumentationjs-stable): New API for server lifecycle observability.
*   [**Development and Build improvements**](#development-and-build-improvements): Improved build times and Faster Fast Refresh.
*   [**Self-hosting**](#improvements-for-self-hosting): More control over `Cache-Control` headers.
*   [**Linting**](#eslint-9-support): Added support for ESLint 9.

Try the Next.js 15 Release Candidate (RC2) today:

```
# Use the new automated upgrade CLI
npx @next/codemod@canary upgrade rc
 
# ...or upgrade manually
npm install next@rc react@rc react-dom@rc
```

> **Note:** This Release Candidate includes all changes from the [previous RC](/blog/next-15-rc).

[Smooth upgrades with codemod CLI](#smooth-upgrades-with-codemod-cli)
---------------------------------------------------------------------

We include codemods (automated code transformations) with every major Next.js release to help automate upgrading breaking changes.

To make upgrades even smoother, we've released an enhanced codemod CLI:

```
npx @next/codemod@canary upgrade rc
```

This tool helps you upgrade your codebase to the latest stable or prerelease versions. The CLI will update your dependencies, show available codemods, and guide you through applying them. The specified dist tag on the command line (`@rc`, `@canary`, etc.) determines the version to upgrade to.

Learn more about [Next.js codemods](/docs/canary/app/building-your-application/upgrading/codemods).

[Turbopack for Development](#turbopack-for-development)
-------------------------------------------------------

Turbopack for local development will become stable in the general release of Next.js 15, while remaining opt-in. You can try it today by running:

```
next dev --turbo
```

Thanks to the thousands of developers who participated in testing, reporting issues, and verifying fixes throughout the Turbopack beta and release candidate phases, we've resolved [54 GitHub issues](https://github.com/vercel/next.js/issues?q=is:issue+is:closed+label:Turbopack+created:%3E%3D2024-05-23+) since the first Next.js 15 Release Candidate. Alongside this community effort, our internal testing on [vercel.com](http://vercel.com/), [v0.dev](http://v0.dev), and [nextjs.org](http://nextjs.org/) helped identify numerous additional improvements.

In the last three months, we've focused on optimizing cold compilation performance. Compared to the previous release, we've seen:

*   **25–35% reduction** in memory usage.
*   **30–50% faster** compilation for large pages with thousands of modules.

We will continue to optimize these areas in future releases.

Looking ahead, the Turbopack team is making significant progress on persistent caching, memory usage reduction, and Turbopack for `next build`—with [96% of tests passing](https://areweturboyet.com/build).

> **Note:** See all of the [supported and unsupported features](/docs/architecture/turbopack#unsupported-features) of Turbopack.

[Async Request APIs (Breaking Change)](#async-request-apis-breaking-change)
---------------------------------------------------------------------------

In traditional Server-Side Rendering, the server waits for a request before rendering any content. However, not all components depend on request-specific data, so it's unnecessary to wait for the request to render them. Ideally, the server would prepare as much as possible before a request arrives. To enable this, and set the stage for future optimizations, we need to know when to wait for the request.

Therefore, we are transitioning APIs that rely on request-specific data—such as `headers`, `cookies`, `params`, and `searchParams`—to be **asynchronous**.

```
import { cookies } from 'next/headers';
 
export async function AdminPanel() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');
 
  // ...
}
```

This is a **breaking change** and affects the following APIs:

*   `cookies`
*   `headers`
*   `draftMode`
*   `params` in `layout.js`, `page.js`, `route.js`, `default.js`, `generateMetadata`, and `generateViewport`
*   `searchParams` in `page.js`

For an easier migration, these APIs can temporarily be accessed synchronously, but will show warnings in development and production until the next major version. A [codemod](/docs/canary/app/building-your-application/upgrading/codemods) is available to automate the migration:

```
npx @next/codemod@canary next-async-request-api .
```

For cases where the codemod can't fully migrate your code, please read the [upgrade guide](/docs/canary/app/building-your-application/upgrading/version-15). We have also provided an [example](https://github.com/leerob/next-saas-starter/pull/62) of how to migrate a Next.js application to the new APIs.

[Enhanced Security for Server Actions](#enhanced-security-for-server-actions)
-----------------------------------------------------------------------------

[Server Actions](https://react.dev/reference/rsc/server-actions) are server-side functions that can be called from the client. They are defined by adding the `'use server'` directive at the top of a file and exporting an async function.

Even if a Server Action or utility function is not imported elsewhere in your code, it’s still a publicly accessible HTTP endpoint. While this behavior is technically correct, it can lead to unintentional exposure of such functions.

To improve security, we’ve introduced the following enhancements:

*   **Dead code elimination:** Unused Server Actions won’t have their IDs exposed to the client-side JavaScript bundle, reducing bundle size and improving performance.
*   **Secure action IDs:** Next.js now creates unguessable, non-deterministic IDs to allow the client to reference and call the Server Action. These IDs are periodically recalculated between builds for enhanced security.

```
// app/actions.js
'use server';
 
// This action **is** used in our application, so Next.js
// will create a secure ID to allow the client to reference
// and call the Server Action.
export async function updateUserAction(formData) {}
 
// This action **is not** used in our application, so Next.js
// will automatically remove this code during `next build`
// and will not create a public endpoint.
export async function deleteUserAction(formData) {}
```

You should still treat Server Actions as public HTTP endpoints. Learn more about [securing Server Actions](https://nextjs.org/blog/security-nextjs-server-components-actions#write).

[Static Route Indicator](#static-route-indicator)
-------------------------------------------------

Next.js now displays a Static Route Indicator during development to help you identify which routes are static or dynamic. This visual cue makes it easier to optimize performance by understanding how your pages are rendered.

<Image
  alt=""
  srcLight="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc2/static-route-light.png"
  srcDark="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc2/static-route-dark.png"
  width="1720"
  height="516"
/>

You can also use the [next build](/docs/app/api-reference/cli/next#next-build-options) output to view the rendering strategy for all routes.

This update is part of our ongoing efforts to enhance observability in Next.js, making it easier for developers to monitor, debug, and optimize their applications. We're also working on dedicated developer tools, with more details to come soon.

Learn more about the [Static Route Indicator](/docs/canary/app/api-reference/next-config-js/devIndicators#appisrstatus-static-indicator), which can be disabled.

[`<Form>` Component](#form-component)
-------------------------------------

The new `<Form>` component extends the HTML `<form>` element with [prefetching](/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching), [client-side navigation](/docs/app/building-your-application/routing/linking-and-navigating#5-soft-navigation), and progressive enhancement.

It is useful for forms that navigate to a new page, such as a search form that leads to a results page.

```
import Form from 'next/form';
 
export default function Page() {
  return (
    <Form action="/search">
      <input name="query" />
      <button type="submit">Submit</button>
    </Form>
  );
}
```

The `<Form>` component comes with:

*   **Prefetching**: When the form is in view, the [layout](/docs/app/api-reference/file-conventions/layout) and [loading](/docs/app/api-reference/file-conventions/loading) UI are prefetched, making navigation fast.
*   **Client-side Navigation:** On submission, shared layouts and client-side state are preserved.
*   **Progressive Enhancement**: If JavaScript hasn’t loaded yet, the form still works via full-page navigation.

Previously, achieving these features required a lot of manual boilerplate. For example:

Example

```
// Note: This is abbreviated for demonstration purposes.
// Not recommended for use in production code.
 
'use client'
 
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
 
export default function Form(props) {
  const action = props.action
  const router = useRouter()
 
  useEffect(() => {
    // if form target is a URL, prefetch it
    if (typeof action === 'string') {
      router.prefetch(action)
    }
  }, [action, router])
 
  function onSubmit(event) {
    event.preventDefault()
 
    // grab all of the form fields and trigger a `router.push` with the data URL encoded
    const formData = new FormData(event.currentTarget)
    const data = new URLSearchParams()
 
    for (const [name, value] of formData) {
      data.append(name, value as string)
    }
 
    router.push(`${action}?${data.toString()}`)
  }
 
  if (typeof action === 'string') {
    return <form onSubmit={onSubmit} {...props} />
  }
 
  return <form {...props} />
}
```

Learn more about the [`<Form>` Component](/docs/canary/app/api-reference/components/form).

[Support for `next.config.ts`](#support-for-nextconfigts)
---------------------------------------------------------

Next.js now supports the TypeScript `next.config.ts` file type and provides a `NextConfig` type for autocomplete and type-safe options:

```
import type { NextConfig } from 'next';
 
const nextConfig: NextConfig = {
  /* config options here */
};
 
export default nextConfig;
```

Learn more about [TypeScript support](/docs/canary/app/building-your-application/configuring/typescript#type-checking-nextconfigts) in Next.js.

[`instrumentation.js` (Stable)](#instrumentationjs-stable)
----------------------------------------------------------

The `instrumentation` file, with the `register()` API, allows users to tap into the Next.js server lifecycle to monitor performance, track the source of errors, and deeply integrate with observability libraries like [OpenTelemetry](https://opentelemetry.io/).

This feature is now **stable** and the `experimental.instrumentationHook` config option can be removed.

In addition, we’ve collaborated with [Sentry](https://sentry.io/) on designing a new `onRequestError` hook that can be used to:

*   Capture important context about all errors thrown on the server, including:
    *   Router: Pages Router or App Router
    *   Server context: Server Component, Server Action, Route Handler, or Middleware
*   Report the errors to your favorite observability provider.

```
export async function onRequestError(err, request, context) {
  await fetch('https://...', {
    method: 'POST',
    body: JSON.stringify({ message: err.message, request, context }),
    headers: { 'Content-Type': 'application/json' },
  });
}
 
export async function register() {
  // init your favorite observability provider SDK
}
```

Learn more about the `onRequestError` [function](/docs/canary/app/api-reference/file-conventions/instrumentation#onrequesterror-optional).

[Development and Build Improvements](#development-and-build-improvements)
-------------------------------------------------------------------------

### [Server Components HMR](#server-components-hmr)

During development, Server components are re-executed when saved. This means, any `fetch` requests to your API endpoints or third-party services are also called.

To improve local development performance and reduce potential costs for billed API calls, we now ensure Hot Module Replacement (HMR) can re-use `fetch` responses from previous renders.

Learn more about the [Server Components HMR Cache](/docs/canary/app/api-reference/next-config-js/serverComponentsHmrCache).

### [Faster Static Generation for the App Router](#faster-static-generation-for-the-app-router)

We've optimized static generation to improve build times, especially for pages with slow network requests.

Previously, our static optimization process rendered pages twice—once to generate data for client-side navigation and a second time to render the HTML for the initial page visit. Now, we reuse the first render, cutting out the second pass, reducing workload and build times.

Additionally, static generation workers now share the `fetch` cache across pages. If a `fetch` call doesn’t opt out of caching, its results are reused by other pages handled by the same worker. This reduces the number of requests for the same data.

### [Advanced Static Generation Control (Experimental)](#advanced-static-generation-control-experimental)

We’ve added experimental support for more control over static generation process for advanced use cases that would benefit from greater control.

We recommend sticking to the current defaults unless you have specific requirements as these options can lead to increased resource usage and potential out-of-memory errors due to increased concurrency.

```
const nextConfig = {
  experimental: {
	  // how many times Next.js will retry failed page generation attempts
	  // before failing the build
    staticGenerationRetryCount: 1
    // how many pages will be processed per worker
    staticGenerationMaxConcurrency: 8
    // the minimum number of pages before spinning up a new export worker
    staticGenerationMinPagesPerWorker: 25
  },
}
 
export default nextConfig;
```

Learn more about the [Static Generation options](/docs/canary/app/api-reference/next-config-js/staticGeneration).

[Improvements for self-hosting](#improvements-for-self-hosting)
---------------------------------------------------------------

When self-hosting applications, you may need more control over `Cache-Control` directives.

One common case is controlling the `stale-while-revalidate` period sent for ISR pages. We've implemented two improvements:

1.  You can now configure the [`expireTime`](/docs/canary/app/api-reference/next-config-js/expireTime) value in `next.config`. This was previously the `experimental.swrDelta` option.
2.  Updated the default value to one year, ensuring most CDNs can fully apply the `stale-while-revalidate` semantics as intended.

We also no longer override custom `Cache-Control` values with our default values, allowing full control and ensuring compatibility with any CDN setup.

Finally, we've improved image optimization when self-hosting. Previously, we recommended you install `sharp` for optimizing images on your Next.js server. This recommendation was sometimes missed. With Next.js 15, you no longer need to manually install `sharp` — Next.js will use `sharp` automatically when using `next start` or running with [standalone output mode](/docs/app/api-reference/next-config-js/output).

To learn more, see our new [demo and tutorial video](https://x.com/leeerob/status/1843796169173995544) on self-hosting Next.js.

[ESLint 9 Support](#eslint-9-support)
-------------------------------------

Next.js 15 also introduces support for [ESLint 9](https://eslint.org/blog/2024/04/eslint-v9.0.0-released), following the end-of-life for ESLint 8 on October 5, 2024.

To ensure a smooth transition, Next.js remain backwards compatible, meaning you can continue using either ESLint 8 or 9.

If you upgrade to ESLint 9, and we detect that you haven’t yet adopted [the new config format](https://eslint.org/blog/2024/04/eslint-v9.0.0-released/#flat-config-is-now-the-default-and-has-some-changes), Next.js will automatically apply the `ESLINT_USE_FLAT_CONFIG=false` escape hatch to ease migration.

Additionally, deprecated options like `—ext` and `—ignore-path` will be removed when running `next lint`. Please note that ESLint will eventually disallow these older configurations in ESLint 10, so we recommend starting your migration soon.

For more details on these changes, check out the [migration guide](https://eslint.org/docs/latest/use/migrate-to-9.0.0).

As part of this update, we’ve also upgraded `eslint-plugin-react-hooks` to `v5.0.0`, which introduces new rules for React Hooks usage. You can review all changes in the [changelog for eslint-plugin-react-hooks@5.0.0](https://github.com/facebook/react/releases/tag/eslint-plugin-react-hooks%405.0.0).

[Other Changes](#other-changes)
-------------------------------

*   All of the changes previously described in the RC 1 [blog post](/blog/next-15-rc)
*   **\[Breaking\]** We’ve deprecated exporting `export const runtime = "experimental-edge"` in the App Router. Users should now switch to `export const runtime = "edge"`. We’ve added a [codemod](/docs/canary/app/building-your-application/upgrading/codemods#app-dir-runtime-config-experimental-edge) to perform this ([PR](https://github.com/vercel/next.js/pull/70480))
*   **\[Breaking\]** Calling `revalidateTag` and `revalidatePath` during render will now throw an error ([PR](https://github.com/vercel/next.js/pull/71093))
*   **\[Breaking\]** The `instrumentation.js` and `middleware.js` files will now use the vendored React packages ([PR](https://github.com/vercel/next.js/pull/69619))
*   **\[Breaking\]** The minimum required Node.js version has been updated to 18.18.0 ([PR](https://github.com/vercel/next.js/pull/67274))
*   **\[Breaking\]** `next/dynamic`: the deprecated `suspense` prop has been removed and when the component is used in the App Router, it won't insert an empty Suspense boundary anymore ([PR](https://github.com/vercel/next.js/pull/67014))
*   **\[Breaking\]** When resolving modules on the Edge Runtime, the `worker` module condition will not be applied ([PR](https://github.com/vercel/next.js/pull/66808))
*   **\[Breaking\]** Disallow using `ssr: false` option with `next/dynamic` in Server Components ([PR](https://github.com/vercel/next.js/pull/70378))
*   **\[Improvement\]** The `outputFileTracingRoot`, `outputFileTracingIncludes` and `outputFileTracingExcludes` have been upgraded from experimental and are now stable ([PR](https://github.com/vercel/next.js/pull/68464))
*   **\[Improvement\]** Avoid merging global CSS files with CSS module files deeper in the tree ([PR](https://github.com/vercel/next.js/pull/67373))
*   **\[Improvement\]** The cache handler can be specified via the `NEXT_CACHE_HANDLER_PATH` environment variable ([PR](https://github.com/vercel/next.js/pull/70537/))
*   **\[Improvement\]** The Pages Router now supports both React 18 and React 19 ([PR](https://github.com/vercel/next.js/pull/69484))
*   **\[Improvement\]** The Error Overlay now displays a button to copy the Node.js Inspector URL if the inspector is enabled ([PR](https://github.com/vercel/next.js/pull/69357))
*   **\[Improvement\]** Client prefetches on the App Router now use the `priority` attribute ([PR](https://github.com/vercel/next.js/pull/67356))
*   **\[Improvement\]** Next.js now provides an `unstable_rethrow` function to rethrow Next.js internal errors in the App Router ([PR](https://github.com/vercel/next.js/pull/65831))
*   **\[Improvement\]** `unstable_after` can now be used in static pages ([PR](https://github.com/vercel/next.js/pull/71231))
*   **\[Improvement\]** If a `next/dynamic` component is used during SSR, the chunk will be prefetched ([PR](https://github.com/vercel/next.js/pull/65486))
*   **\[Improvement\]** The `esmExternals` option is now supported on the App Router ([PR](https://github.com/vercel/next.js/pull/65041))
*   **\[Improvement\]** The `experimental.allowDevelopmentBuild` option can be used to allow `NODE_ENV=development` with `next build` for debugging purposes ([PR](https://github.com/vercel/next.js/pull/65463))
*   **\[Improvement\]** The Server Action transforms are now disabled in the Pages Router ([PR](https://github.com/vercel/next.js/pull/71028))
*   **\[Improvement\]** Build workers will now stop the build from hanging when they exit ([PR](https://github.com/vercel/next.js/pull/70997))
*   **\[Improvement\]** When redirecting from a Server Action, revalidations will now apply correctly ([PR](https://github.com/vercel/next.js/pull/70715))
*   **\[Improvement\]** Dynamic params are now handled correctly for parallel routes on the Edge Runtime ([PR](https://github.com/vercel/next.js/pull/70667))
*   **\[Improvement\]** Static pages will now respect staleTime after initial load ([PR](https://github.com/vercel/next.js/pull/70640))
*   **\[Improvement\]** `vercel/og` updated with a memory leak fix ([PR](https://github.com/vercel/next.js/pull/70214))
*   **\[Improvement\]** Patch timings updated to allow usage of packages like `msw` for APIs mocking ([PR](https://github.com/vercel/next.js/pull/68193))

[Contributors](#contributors)
-----------------------------

Next.js is the result of the combined work of over 3,000 individual developers, and our core team at Vercel. This release was brought to you by:

*   The **Next.js** team: [Andrew](https://github.com/acdlite), [Hendrik](https://github.com/unstubbable), [Janka](https://github.com/lubieowoce), [Jiachi](https://github.com/huozhi), [Jimmy](https://github.com/feedthejim), [Jiwon](https://github.com/devjiwonchoi), [JJ](https://github.com/ijjk), [Josh](https://github.com/gnoff), [Sam](https://github.com/samcx), [Sebastian](https://github.com/sebmarkbage), [Sebbie](https://github.com/eps1lon), [Shu](https://github.com/shuding), [Wyatt](https://github.com/wyattjoh), and [Zack](https://github.com/ztanner).
*   The **Turbopack** team: [Alex](https://github.com/arlyon), [Benjamin](https://github.com/bgw), [Donny](https://github.com/kdy1), [Maia](https://github.com/padmaia), [Niklas](https://github.com/mischnic), [Tim](https://github.com/timneutkens), [Tobias](https://github.com/sokra), and [Will](https://github.com/wbinnssmith).
*   The **Next.js Docs**  team: [Delba](https://github.com/delbaoliveira), [Rich](https://github.com/molebox), [Ismael](https://github.com/ismaelrumzan), and [Lee](https://github.com/leerob).

Huge thanks to @huozhi, @shuding, @wyattjoh, @PaulAsjes, @mcnaveen, @timneutkens, @stipsan, @aktoriukas, @sirTangale, @greatvivek11, @sokra, @anatoliik-lyft, @wbinnssmith, @coltonehrman, @hungdoansy, @kxlow, @ztanner, @manovotny, @leerob, @ryota-murakami, @ijjk, @pnutmath, @feugy, @Jeffrey-Zutt, @wiesson, @eps1lon, @devjiwonchoi, @Ethan-Arrowood, @kenji-webdev, @domdomegg, @samcx, @Jaaneek, @evanwinter, @kdy1, @balazsorban44, @feedthejim, @ForsakenHarmony, @kwonoj, @delbaoliveira, @xiaohanyu, @dvoytenko, @bobaaaaa, @bgw, @gaspar09, @souporserious, @unflxw, @kiner-tang, @Ehren12, @EffectDoplera, @IAmKushagraSharma, @Auxdible, @sean-rallycry, @jeanmax1me, @unstubbable, @NilsJacobsen, @adiguno, @ryan-nauman, @zsh77, @KagamiChan, @steveluscher, @MehfoozurRehman, @vkryachko, @chentsulin, @samijaber, @begalinsaf, @FluxCapacitor2, @lukahartwig, @brianshano, @pavelglac, @styfle, @symant233, @HristovCodes, @karlhorky, @jonluca, @jonathan-ingram, @mknichel, @sopranopillow, @Gomah, @imddc, @notrab, @gabrielrolfsen, @remorses, @AbhiShake1, @agadzik, @rishabhpoddar, @rezamauliadi, @IncognitoTGT, @webtinax, @BunsDev, @nisabmohd, @z0n, @bennettdams, @joeshub, @n1ckoates, @srkirkland, @RiskyMH, @coopbri, @okoyecharles, @diogocapela, @dnhn, @typeofweb, @davidsa03, @imranolas, @lubieowoce, @maxhaomh, @mirasayon, @blvdmitry, @hwangstar156, @lforst, @emmerich, @christian-bromann, @Lsnsh, @datner, @hiro0218, @flybayer, @ianmacartney, @ypessoa, @ryohidaka, @icyJoseph, @Arinji2, @lovell, @nsams, @Nayeem-XTREME, @JamBalaya56562, @Arindam200, @gaojude, @qqww08, @todor0v, @tokkiyaa, @arlyon, @lorensr, @Juneezee, @Sayakie, @IGassmann, @bosconian-dynamics, @phryneas, @akazwz, @atik-persei, @shubh73, @alpedia0, @chogyejin, @notomo, @ArnoldVanN, @dhruv-kaushik, @kevva, @Kahitar, @anay-208, @boris-szl, @devnyxie, @LorisSigrist, @M-YasirGhaffar, @Lada496, @kippmr, @torresgol10, @pkiv, @Netail, @jontewks, @ArnaudFavier, @chrisjstott, @mratlamwala, @mayank1513, @karlkeefer, @kshehadeh, @Marukome0743, @a89529294, @anku255, @KeisukeNagakawa, @andrii-bodnar, @aldosch, @versecafe, @steadily-worked, @cfrank, @QiuranHu, @farsabbutt, @joostmeijles, @saltcod, @archanaagivale30, @crutchcorn, @crebelskydico, @Maaz-Ahmed007, @jophy-ye, @remcohaszing, @JoshuaKGoldberg, @creativoma, @GyoHeon, @SukkaW, @MaxLeiter, @neila-a, @stylessh, @Teddir, @ManuLpz4, @Julian-Louis, @syi0808, @mert-duzgun, @amannn, @MonstraG, @hamirmahal, @tariknh, @Kikobeats, @LichuAcu, @Kuboczoch, @himself65, @Sam-Phillemon9493, @Shruthireddy04, @Hemanshu-Upadhyay, @timfuhrmann, @controversial, @pathliving, @mischnic, @mauroaccornero, @NavidNourani, @allanchau, @ekremkenter, @yurivangeffen, @gnoff, @darthmaim, @gdborton, @Willem-Jaap, @KentoMoriwaki, @TrevorSayre, @marlier, @Luluno01, @xixixao, @domin-mnd, @niketchandivade, @N2D4, @kjugi, @luciancah, @mud-ali, @codeSTACKr, @luojiyin1987, @mehmetozguldev, @ronanru, @tknickman, @joelhooks, @khawajaJunaid, @rubyisrust, @abdull-haseeb, @bewinsnw, @housseindjirdeh, @li-jia-nan, @aralroca, @s-ekai, @ah100101, @jantimon, @jordienr, @iscekic, @Strift, @slimbde, @nauvalazhar, @HughHzyb, @guisehn, @wesbos, @OlyaPolya, @paarthmadan, @AhmedBaset, @dineshh-m, @avdeev, @Bhavya031, @MildTomato, @Bjornnyborg, @amikofalvy, @yosefbeder, @kjac, @woutvanderploeg, @Ocheretovich, @ProchaLu, @luismiramirez, @omahs, @theoludwig, @abhi12299, @sommeeeer, @lumirlumir, @royalfig, @iampoul, @molebox, @txxxxc, @zce, @mamuso, @kahlstrm, @vercel-release-bot, @zhawtof, @PapatMayuri, @PlagueFPS, @IDNK2203, @jericopulvera, @liby, @CannonLock, @timfish, @whatisagi, @none23, @haouvw, @Pyr33x, @SouthLink, @frydj, @CrutchTheClutch, @sleevezip, @r34son, @yunsii, @md-rejoyan-islam, @kartheesan05, @nattui, @KonkenBonken, @weicheng95, @brekk, @Francoscopic, @B33fb0n3, @ImDR, @nurullah, @hdodov, @ebCrypto, @soedirgo, @floriangosse, @Tim-Zj, @raeyoung-kim, @erwannbst, @DerTimonius, @hirotomoyamada, @Develliot, @chandanpasunoori, @vicb, @ankur-dwivedi, @kidonng, @baeharam, @AnaTofuZ, @coderfin, @xugetsu, @alessiomaffeis, @kutsan, @jordyfontoura, @sebmarkbage, @tranvanhieu01012002, @jlbovenzo, @Luk-z, @jaredhan418, @bangseongbeom, @penicillin0, @neoFinch, @DeepakBalaraman, @Manoj-M-S, @Unsleeping, @lonr, @Aerilym, @ytori, @acdlite, @actopas, @n-ii-ma, @adcichowski, @mobeigi, @JohnGemstone, and @jjm2317 for helping!
