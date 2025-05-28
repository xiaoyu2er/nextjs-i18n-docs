---
title: Next.js 15
description: >-
  Next.js 15 introduces React 19 support, caching improvements, a stable release
  for Turbopack in development, new APIs, and more.
author:
  - name: Delba de Oliveira
    image: /static/team/delba.jpg
  - name: Jimmy Lai
    image: /static/team/jimmy.jpg
  - name: Rich Haines
    image: /static/team/rich.jpg
date: 2024-10-21T17:00:00.507Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15/twitter-card.png
---

Next.js 15 is officially stable and ready for production. This release builds on the updates from both [RC1](/blog/next-15-rc) and [RC2](/blog/next-15-rc2). We've focused heavily on stability while adding some exciting updates we think you'll love. Try Next.js 15 today:

```bash filename="terminal"
# Use the new automated upgrade CLI
npx @next/codemod@canary upgrade latest
 
# ...or upgrade manually
npm install next@latest react@rc react-dom@rc
```

We're also excited to share more about what's coming next at [Next.js Conf](/conf) this Thursday, October 24th.

Here's what is new in Next.js 15:

*   [**`@next/codemod` CLI:**](#smooth-upgrades-with-nextcodemod-cli) Easily upgrade to the latest Next.js and React versions.
*   [**Async Request APIs (Breaking):**](#async-request-apis-breaking-change) Incremental step towards a simplified rendering and caching model.
*   [**Caching Semantics (Breaking):**](#caching-semantics) `fetch` requests, `GET` Route Handlers, and client navigations are no longer cached by default.
*   [**React 19 Support:**](#react-19) Support for React 19, React Compiler (Experimental), and hydration error improvements.
*   [**Turbopack Dev (Stable):**](#turbopack-dev) Performance and stability improvements.
*   [**Static Indicator:**](#static-route-indicator) New visual indicator shows static routes during development.
*   [**`unstable_after` API (Experimental):**](#executing-code-after-a-response-with-unstable_after-experimental) Execute code after a response finishes streaming.
*   [**`instrumentation.js` API (Stable):**](#instrumentationjs-stable) New API for server lifecycle observability.
*   [**Enhanced Forms (`next/form`):**](#form-component) Enhance HTML forms with client-side navigation.
*   [**`next.config`:**](#support-for-nextconfigts) TypeScript support for `next.config.ts`.
*   [**Self-hosting Improvements:**](#improvements-for-self-hosting) More control over `Cache-Control` headers.
*   [**Server Actions Security:**](#enhanced-security-for-server-actions) Unguessable endpoints and removal of unused actions.
*   [**Bundling External Packages (Stable):**](#optimizing-bundling-of-external-packages-stable) New config options for App and Pages Router.
*   [**ESLint 9 Support:**](#eslint-9-support) Added support for ESLint 9.
*   [**Development and Build Performance:**](#development-and-build-improvements) Improved build times and Faster Fast Refresh.

[Smooth upgrades with `@next/codemod` CLI](#smooth-upgrades-with-nextcodemod-cli)
---------------------------------------------------------------------------------

We include codemods (automated code transformations) with every major Next.js release to help automate upgrading breaking changes.

To make upgrades even smoother, we've released an enhanced codemod CLI:

```bash filename="Terminal"
npx @next/codemod@canary upgrade latest
```

This tool helps you upgrade your codebase to the latest stable or prerelease versions. The CLI will update your dependencies, show available codemods, and guide you through applying them.

The `canary` tag uses the latest version of the codemod while the latest specifies the Next.js version. We recommend using the canary version of the codemod even if you are upgrading to the latest Next.js version, as we plan to continue adding improvements to the tool based on your feedback.

Learn more about [Next.js codemod CLI](/docs/app/building-your-application/upgrading/codemods).

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

For an easier migration, these APIs can temporarily be accessed synchronously, but will show warnings in development and production until the next major version. A [codemod](/docs/app/building-your-application/upgrading/codemods) is available to automate the migration:

```bash filename="Terminal"
npx @next/codemod@canary next-async-request-api .
```

For cases where the codemod can't fully migrate your code, please read the [upgrade guide](/docs/app/building-your-application/upgrading/version-15). We have also provided an [example](https://github.com/leerob/next-saas-starter/pull/62) of how to migrate a Next.js application to the new APIs.

[Caching Semantics](#caching-semantics)
---------------------------------------

Next.js App Router launched with opinionated caching defaults. These were designed to provide the most performant option by default with the ability to opt out when required.

Based on your feedback, we re-evaluated our [caching heuristics](https://x.com/feedthejim/status/1785242054773145636) and how they would interact with projects like Partial Prerendering (PPR) and with third party libraries using `fetch`.

With Next.js 15, we're changing the caching default for `GET` Route Handlers and the Client Router Cache from cached by default to uncached by default. If you want to retain the previous behavior, you can continue to opt-into caching.

We're continuing to improve caching in Next.js in the coming months and we'll share more details soon.

### [`GET` Route Handlers are no longer cached by default](#get-route-handlers-are-no-longer-cached-by-default)

In Next 14, Route Handlers that used the `GET` HTTP method were cached by default unless they used a dynamic function or dynamic config option. In Next.js 15, `GET` functions are **not cached by default**.

You can still opt into caching using a static route config option such as `export dynamic = 'force-static'`.

Special Route Handlers like [`sitemap.ts`](/docs/app/api-reference/file-conventions/metadata/sitemap), [`opengraph-image.tsx`](/docs/app/api-reference/file-conventions/metadata/opengraph-image), and [`icon.tsx`](/docs/app/api-reference/file-conventions/metadata/app-icons), and other [metadata files](/docs/app/api-reference/file-conventions/metadata) remain static by default unless they use dynamic functions or dynamic config options.

### [Client Router Cache no longer caches Page components by default](#client-router-cache-no-longer-caches-page-components-by-default)

In Next.js 14.2.0, we introduced an experimental [`staleTimes`](/docs/app/api-reference/next-config-js/staleTimes) flag to allow custom configuration of the [Router Cache](/docs/app/building-your-application/caching#client-side-router-cache).

In Next.js 15, this flag still remains accessible, but we are changing the default behavior to have a `staleTime` of `0` for Page segments. This means that as you navigate around your app, the client will always reflect the latest data from the Page component(s) that become active as part of the navigation. However, there are still important behaviors that remain unchanged:

*   Shared layout data won't be refetched from the server to continue to support [partial rendering](/docs/app/building-your-application/routing/linking-and-navigating#4-partial-rendering).
*   Back/forward navigation will still restore from cache to ensure the browser can restore scroll position.
*   [`loading.js`](/docs/app/api-reference/file-conventions/loading) will remain cached for 5 minutes (or the value of the `staleTimes.static` configuration).

You can opt into the previous Client Router Cache behavior by setting the following configuration:

```ts filename="next.config.ts"
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
};
 
export default nextConfig;
```

[React 19](#react-19)
---------------------

As part of the Next.js 15 release, we've made the decision to align with the upcoming release of React 19.

In version 15, the App Router uses React 19 RC, and we've also introduced backwards compatibility for React 18 with the Pages Router based on community feedback. If you're using the Pages Router, this allows you to upgrade to React 19 when ready.

Although React 19 is still in the RC phase, our extensive testing across real-world applications and our close work with the React team have given us confidence in its stability. The core breaking changes have been well-tested and won't affect existing App Router users. Therefore, we've decided to release Next.js 15 as stable now, so your projects are fully prepared for React 19 GA.

To ensure the transition is as smooth as possible, we've provided [codemods and automated tools](#smooth-upgrades-with-codemod-cli) to help ease the migration process.

Read the [Next.js 15 upgrade guide](/docs/app/building-your-application/upgrading/version-15), the [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide), and watch the [React Conf Keynote](https://www.youtube.com/live/T8TZQ6k4SLE?t=1788) to learn more.

### [Pages Router on React 18](#pages-router-on-react-18)

Next.js 15 maintains backward compatibility for the Pages Router with React 18, allowing users to continue using React 18 while benefiting from improvements in Next.js 15.

Since the first Release Candidate (RC1), we've shifted our focus to include support for React 18 based on community feedback. This flexibility enables you to adopt Next.js 15 while using the Pages Router with React 18, giving you greater control over your upgrade path.

> **Note:** While it is possible to run the Pages Router on React 18 and the App Router on React 19 in the same application, we don't recommend this setup. Doing so could result in unpredictable behavior and typings inconsistencies, as the underlying APIs and rendering logic between the two versions may not fully align.

### [React Compiler (Experimental)](#react-compiler-experimental)

The [React Compiler](https://react.dev/learn/react-compiler) is a new experimental compiler created by the React team at Meta. The compiler understands your code at a deep level through its understanding of plain JavaScript semantics and the [Rules of React](https://react.dev/reference/rules), which allows it to add automatic optimizations to your code. The compiler reduces the amount of manual memoization developers have to do through APIs such as `useMemo` and `useCallback` - making code simpler, easier to maintain, and less error prone.

With Next.js 15, we've added support for the [React Compiler](https://react.dev/learn/react-compiler). Learn more about the React Compiler, and the [available Next.js config options](https://react.dev/learn/react-compiler#usage-with-nextjs).

> **Note:** The React Compiler is currently only available as a Babel plugin, which will result in slower development and build times.

### [Hydration error improvements](#hydration-error-improvements)

Next.js 14.1 [made improvements](/blog/next-14-1#improved-error-messages-and-fast-refresh) to error messages and hydration errors. Next.js 15 continues to build on those by adding an improved hydration error view. Hydration errors now display the source code of the error with suggestions on how to address the issue.

For example, this was a previous hydration error message in Next.js 14.1:

<Image
  alt="Hydration error message in Next.js 14.1"
  srcLight="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/hydration-error-before-light.png"
  srcDark="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/hydration-error-before-dark.png"
  width="962"
  height="517"
/>

Next.js 15 has improved this to:

<Image
  alt="Hydration error message improved in Next.js 15"
  srcLight="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/hydration-error-after-light.png"
  srcDark="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/hydration-error-after-dark.png"
  width="960"
  height="654"
/>

[Turbopack Dev](#turbopack-dev)
-------------------------------

We are happy to announce that `next dev --turbo` is now **stable and ready** to speed up your development experience. We've been using it to iterate on [vercel.com](https://vercel.com), [nextjs.org](https://nextjs.org), [v0](https://v0.dev), and all of our other applications with great results.

For example, with `vercel.com`, a large Next.js app, we've seen:

*   Up to **76.7% faster** local server startup.
*   Up to **96.3% faster** code updates with Fast Refresh.
*   Up to **45.8% faster** initial route compile without caching (Turbopack does not have disk caching yet).

You can learn more about Turbopack Dev in our new [blog post](/blog/turbopack-for-development-stable).

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

Learn more about the [Static Route Indicator](/docs/app/api-reference/next-config-js/devIndicators#appisrstatus-static-indicator), which can be disabled.

[Executing code after a response with `unstable_after` (Experimental)](#executing-code-after-a-response-with-unstable_after-experimental)
-----------------------------------------------------------------------------------------------------------------------------------------

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
 
export default nextConfig;
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

Learn more about [`unstable_after`](/docs/app/api-reference/functions/unstable_after).

[`instrumentation.js` (Stable)](#instrumentationjs-stable)
----------------------------------------------------------

The `instrumentation` file, with the `register()` API, allows users to tap into the Next.js server lifecycle to monitor performance, track the source of errors, and deeply integrate with observability libraries like [OpenTelemetry](https://opentelemetry.io/).

This feature is now **stable** and the `experimental.instrumentationHook` config option can be removed.

In addition, we've collaborated with [Sentry](https://sentry.io/) on designing a new `onRequestError` hook that can be used to:

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

Learn more about the `onRequestError` [function](/docs/app/api-reference/file-conventions/instrumentation#onrequesterror-optional).

[`<Form>` Component](#form-component)
-------------------------------------

The new `<Form>` component extends the HTML `<form>` element with [prefetching](/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching), [client-side navigation](/docs/app/building-your-application/routing/linking-and-navigating#5-soft-navigation), and progressive enhancement.

It is useful for forms that navigate to a new page, such as a search form that leads to a results page.

```jsx filename="app/page.jsx"
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
*   **Progressive Enhancement**: If JavaScript hasn't loaded yet, the form still works via full-page navigation.

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

Learn more about the [`<Form>` Component](/docs/app/api-reference/components/form).

[Support for `next.config.ts`](#support-for-nextconfigts)
---------------------------------------------------------

Next.js now supports the TypeScript `next.config.ts` file type and provides a `NextConfig` type for autocomplete and type-safe options:

```ts filename="next.config.ts"
import type { NextConfig } from 'next';
 
const nextConfig: NextConfig = {
  /* config options here */
};
 
export default nextConfig;
```

Learn more about [TypeScript support](/docs/app/building-your-application/configuring/typescript#type-checking-nextconfigts) in Next.js.

[Improvements for self-hosting](#improvements-for-self-hosting)
---------------------------------------------------------------

When self-hosting applications, you may need more control over `Cache-Control` directives.

One common case is controlling the `stale-while-revalidate` period sent for ISR pages. We've implemented two improvements:

1.  You can now configure the [`expireTime`](/docs/app/api-reference/next-config-js/expireTime) value in `next.config`. This was previously the `experimental.swrDelta` option.
2.  Updated the default value to one year, ensuring most CDNs can fully apply the `stale-while-revalidate` semantics as intended.

We also no longer override custom `Cache-Control` values with our default values, allowing full control and ensuring compatibility with any CDN setup.

Finally, we've improved image optimization when self-hosting. Previously, we recommended you install `sharp` for optimizing images on your Next.js server. This recommendation was sometimes missed. With Next.js 15, you no longer need to manually install `sharp` — Next.js will use `sharp` automatically when using `next start` or running with [standalone output mode](/docs/app/api-reference/next-config-js/output).

To learn more, see our new [demo and tutorial video](https://x.com/leeerob/status/1843796169173995544) on self-hosting Next.js.

[Enhanced Security for Server Actions](#enhanced-security-for-server-actions)
-----------------------------------------------------------------------------

[Server Actions](https://react.dev/reference/rsc/server-actions) are server-side functions that can be called from the client. They are defined by adding the `'use server'` directive at the top of a file and exporting an async function.

Even if a Server Action or utility function is not imported elsewhere in your code, it's still a publicly accessible HTTP endpoint. While this behavior is technically correct, it can lead to unintentional exposure of such functions.

To improve security, we've introduced the following enhancements:

*   **Dead code elimination:** Unused Server Actions won't have their IDs exposed to the client-side JavaScript bundle, reducing bundle size and improving performance.
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

You should still treat Server Actions as public HTTP endpoints. Learn more about [securing Server Actions](/blog/security-nextjs-server-components-actions#write).

[Optimizing bundling of external packages (Stable)](#optimizing-bundling-of-external-packages-stable)
-----------------------------------------------------------------------------------------------------

Bundling external packages can improve the cold start performance of your application. In the **App Router**, external packages are bundled by default, and you can opt-out specific packages using the new [`serverExternalPackages`](/docs/app/api-reference/next-config-js/serverExternalPackages) config option.

In the **Pages Router**, external packages are not bundled by default, but you can provide a list of packages to bundle using the existing [`transpilePackages`](/docs/pages/api-reference/next-config-js/transpilePackages) option. With this configuration option, you need to specify each package.

To unify configuration between App and Pages Router, we're introducing a new option, [`bundlePagesRouterDependencies`](/docs/pages/api-reference/next-config-js/bundlePagesRouterDependencies) to match the default automatic bundling of the App Router. You can then use [`serverExternalPackages`](/docs/app/api-reference/next-config-js/serverExternalPackages) to opt-out specific packages, if needed.

```ts filename="next.config.ts"
const nextConfig = {
  // Automatically bundle external packages in the Pages Router:
  bundlePagesRouterDependencies: true,
  // Opt specific packages out of bundling for both App and Pages Router:
  serverExternalPackages: ['package-name'],
};
 
export default nextConfig;
```

Learn more about [optimizing external packages](/docs/app/building-your-application/optimizing/package-bundling).

[ESLint 9 Support](#eslint-9-support)
-------------------------------------

Next.js 15 also introduces support for [ESLint 9](https://eslint.org/blog/2024/04/eslint-v9.0.0-released), following the end-of-life for ESLint 8 on October 5, 2024.

To ensure a smooth transition, Next.js remain backwards compatible, meaning you can continue using either ESLint 8 or 9.

If you upgrade to ESLint 9, and we detect that you haven't yet adopted [the new config format](https://eslint.org/blog/2024/04/eslint-v9.0.0-released/#flat-config-is-now-the-default-and-has-some-changes), Next.js will automatically apply the `ESLINT_USE_FLAT_CONFIG=false` escape hatch to ease migration.

Additionally, deprecated options like `—ext` and `—ignore-path` will be removed when running `next lint`. Please note that ESLint will eventually disallow these older configurations in ESLint 10, so we recommend starting your migration soon.

For more details on these changes, check out the [migration guide](https://eslint.org/docs/latest/use/migrate-to-9.0.0).

As part of this update, we've also upgraded `eslint-plugin-react-hooks` to `v5.0.0`, which introduces new rules for React Hooks usage. You can review all changes in the [changelog for eslint-plugin-react-hooks@5.0.0](https://github.com/facebook/react/releases/tag/eslint-plugin-react-hooks%405.0.0).

[Development and Build Improvements](#development-and-build-improvements)
-------------------------------------------------------------------------

### [Server Components HMR](#server-components-hmr)

During development, Server components are re-executed when saved. This means, any `fetch` requests to your API endpoints or third-party services are also called.

To improve local development performance and reduce potential costs for billed API calls, we now ensure Hot Module Replacement (HMR) can re-use `fetch` responses from previous renders.

Learn more about the [Server Components HMR Cache](/docs/app/api-reference/next-config-js/serverComponentsHmrCache).

### [Faster Static Generation for the App Router](#faster-static-generation-for-the-app-router)

We've optimized static generation to improve build times, especially for pages with slow network requests.

Previously, our static optimization process rendered pages twice—once to generate data for client-side navigation and a second time to render the HTML for the initial page visit. Now, we reuse the first render, cutting out the second pass, reducing workload and build times.

Additionally, static generation workers now share the `fetch` cache across pages. If a `fetch` call doesn't opt out of caching, its results are reused by other pages handled by the same worker. This reduces the number of requests for the same data.

### [Advanced Static Generation Control (Experimental)](#advanced-static-generation-control-experimental)

We've added experimental support for more control over the static generation process for advanced use cases that would benefit from greater control.

We recommend sticking to the current defaults unless you have specific requirements as these options can lead to increased resource usage and potential out-of-memory errors due to increased concurrency.

```ts filename="next.config.ts"
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

Learn more about the [Static Generation options](/docs/app/api-reference/next-config-js/staticGeneration).

[Other Changes](#other-changes)
-------------------------------

*   **\[Breaking\]** next/image: Removed `squoosh` in favor of `sharp` as an optional dependency ([PR](https://github.com/vercel/next.js/pull/63321))
*   **\[Breaking\]** next/image: Changed default `Content-Disposition` to `attachment` ([PR](https://github.com/vercel/next.js/pull/65631))
*   **\[Breaking\]** next/image: Error when `src` has leading or trailing spaces ([PR](https://github.com/vercel/next.js/pull/65637))
*   **\[Breaking\]** Middleware: Apply `react-server` condition to limit unrecommended React API imports ([PR](https://github.com/vercel/next.js/pull/65424))
*   **\[Breaking\]** next/font: Removed support for external `@next/font` package ([PR](https://github.com/vercel/next.js/pull/65601))
*   **\[Breaking\]** next/font: Removed `font-family` hashing ([PR](https://github.com/vercel/next.js/pull/53608))
*   **\[Breaking\]** Caching: `force-dynamic` will now set a `no-store` default to the fetch cache ([PR](https://github.com/vercel/next.js/pull/64145))
*   **\[Breaking\]** Config: Enable `swcMinify` ([PR](https://github.com/vercel/next.js/pull/65579)), `missingSuspenseWithCSRBailout` ([PR](https://github.com/vercel/next.js/pull/65688)), and `outputFileTracing` ([PR](https://github.com/vercel/next.js/pull/65579)) behavior by default and remove deprecated options
*   **\[Breaking\]** Remove auto-instrumentation for Speed Insights (must now use the dedicated [@vercel/speed-insights](https://www.npmjs.com/package/@vercel/speed-insights) package) ([PR](https://github.com/vercel/next.js/pull/64199))
*   **\[Breaking\]** Remove `.xml` extension for dynamic sitemap routes and align sitemap URLs between development and production ([PR](https://github.com/vercel/next.js/pull/65507))
*   **\[Breaking\]** We've deprecated exporting `export const runtime = "experimental-edge"` in the App Router. Users should now switch to `export const runtime = "edge"`. We've added a [codemod](/docs/app/building-your-application/upgrading/codemods#app-dir-runtime-config-experimental-edge) to perform this ([PR](https://github.com/vercel/next.js/pull/70480))
*   **\[Breaking\]** Calling `revalidateTag` and `revalidatePath` during render will now throw an error ([PR](https://github.com/vercel/next.js/pull/71093))
*   **\[Breaking\]** The `instrumentation.js` and `middleware.js` files will now use the vendored React packages ([PR](https://github.com/vercel/next.js/pull/69619))
*   **\[Breaking\]** The minimum required Node.js version has been updated to 18.18.0 ([PR](https://github.com/vercel/next.js/pull/67274))
*   **\[Breaking\]** `next/dynamic`: the deprecated `suspense` prop has been removed and when the component is used in the App Router, it won't insert an empty Suspense boundary anymore ([PR](https://github.com/vercel/next.js/pull/67014))
*   **\[Breaking\]** When resolving modules on the Edge Runtime, the `worker` module condition will not be applied ([PR](https://github.com/vercel/next.js/pull/66808))
*   **\[Breaking\]** Disallow using `ssr: false` option with `next/dynamic` in Server Components ([PR](https://github.com/vercel/next.js/pull/70378))
*   **\[Improvement\]** Metadata: Updated environment variable fallbacks for `metadataBase` when hosted on Vercel ([PR](https://github.com/vercel/next.js/pull/65089))
*   **\[Improvement\]** Fix tree-shaking with mixed namespace and named imports from `optimizePackageImports` ([PR](https://github.com/vercel/next.js/pull/64894))
*   **\[Improvement\]** Parallel Routes: Provide unmatched catch-all routes with all known params ([PR](https://github.com/vercel/next.js/pull/65063))
*   **\[Improvement\]** Config `bundlePagesExternals` is now stable and renamed to `bundlePagesRouterDependencies`
*   **\[Improvement\]** Config `serverComponentsExternalPackages` is now stable and renamed to `serverExternalPackages`
*   **\[Improvement\]** create-next-app: New projects ignore all `.env` files by default ([PR](https://github.com/vercel/next.js/pull/61920))
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
*   **\[Improvement\]** Prerendered pages should use static staleTime ([PR](https://github.com/vercel/next.js/pull/67868))

To learn more, check out the [upgrade guide](/docs/app/building-your-application/upgrading/version-15).

[Contributors](#contributors)
-----------------------------

Next.js is the result of the combined work of over 3,000 individual developers, industry partners like Google and Meta, and our core team at Vercel. This release was brought to you by:

*   The **Next.js** team: [Andrew](https://github.com/acdlite), [Hendrik](https://github.com/unstubbable), [Janka](https://github.com/lubieowoce), [Jiachi](https://github.com/huozhi), [Jimmy](https://github.com/feedthejim), [Jiwon](https://github.com/devjiwonchoi), [JJ](https://github.com/ijjk), [Josh](https://github.com/gnoff), [Sam](https://github.com/samcx), [Sebastian](https://github.com/sebmarkbage), [Sebbie](https://github.com/eps1lon), [Shu](https://github.com/shuding), [Wyatt](https://github.com/wyattjoh), and [Zack](https://github.com/ztanner).
*   The **Turbopack** team: [Alex](https://github.com/arlyon), [Benjamin](https://github.com/bgw), [Donny](https://github.com/kdy1), [Maia](https://github.com/padmaia), [Niklas](https://github.com/mischnic), [Tim](https://github.com/timneutkens), [Tobias](https://github.com/sokra), and [Will](https://github.com/wbinnssmith).
*   The **Next.js Docs** team: [Delba](https://github.com/delbaoliveira), [Rich](https://github.com/molebox), [Ismael](https://github.com/ismaelrumzan), and [Lee](https://github.com/leerob).

Huge thanks to @AbhiShake1, @Aerilym, @AhmedBaset, @AnaTofuZ, @Arindam200, @Arinji2, @ArnaudFavier, @ArnoldVanN, @Auxdible, @B33fb0n3, @Bhavya031, @Bjornnyborg, @BunsDev, @CannonLock, @CrutchTheClutch, @DeepakBalaraman, @DerTimonius, @Develliot, @EffectDoplera, @Ehren12, @Ethan-Arrowood, @FluxCapacitor2, @ForsakenHarmony, @Francoscopic, @Gomah, @GyoHeon, @Hemanshu-Upadhyay, @HristovCodes, @HughHzyb, @IAmKushagraSharma, @IDNK2203, @IGassmann, @ImDR, @IncognitoTGT, @Jaaneek, @JamBalaya56562, @Jeffrey-Zutt, @JohnGemstone, @JoshuaKGoldberg, @Julian-Louis, @Juneezee, @KagamiChan, @Kahitar, @KeisukeNagakawa, @KentoMoriwaki, @Kikobeats, @KonkenBonken, @Kuboczoch, @Lada496, @LichuAcu, @LorisSigrist, @Lsnsh, @Luk-z, @Luluno01, @M-YasirGhaffar, @Maaz-Ahmed007, @Manoj-M-S, @ManuLpz4, @Marukome0743, @MaxLeiter, @MehfoozurRehman, @MildTomato, @MonstraG, @N2D4, @NavidNourani, @Nayeem-XTREME, @Netail, @NilsJacobsen, @Ocheretovich, @OlyaPolya, @PapatMayuri, @PaulAsjes, @PlagueFPS, @ProchaLu, @Pyr33x, @QiuranHu, @RiskyMH, @Sam-Phillemon9493, @Sayakie, @Shruthireddy04, @SouthLink, @Strift, @SukkaW, @Teddir, @Tim-Zj, @TrevorSayre, @Unsleeping, @Willem-Jaap, @a89529294, @abdull-haseeb, @abhi12299, @acdlite, @actopas, @adcichowski, @adiguno, @agadzik, @ah100101, @akazwz, @aktoriukas, @aldosch, @alessiomaffeis, @allanchau, @alpedia0, @amannn, @amikofalvy, @anatoliik-lyft, @anay-208, @andrii-bodnar, @anku255, @ankur-dwivedi, @aralroca, @archanaagivale30, @arlyon, @atik-persei, @avdeev, @baeharam, @balazsorban44, @bangseongbeom, @begalinsaf, @bennettdams, @bewinsnw, @bgw, @blvdmitry, @bobaaaaa, @boris-szl, @bosconian-dynamics, @brekk, @brianshano, @cfrank, @chandanpasunoori, @chentsulin, @chogyejin, @chrisjstott, @christian-bromann, @codeSTACKr, @coderfin, @coltonehrman, @controversial, @coopbri, @creativoma, @crebelskydico, @crutchcorn, @darthmaim, @datner, @davidsa03, @delbaoliveira, @devjiwonchoi, @devnyxie, @dhruv-kaushik, @dineshh-m, @diogocapela, @dnhn, @domdomegg, @domin-mnd, @dvoytenko, @ebCrypto, @ekremkenter, @emmerich, @flybayer, @floriangosse, @forsakenharmony, @francoscopic, @frys, @gabrielrolfsen, @gaojude, @gdborton, @greatvivek11, @gnoff, @guisehn, @GyoHeon, @hamirmahal, @hiro0218, @hirotomoyamada, @housseindjirdeh, @hungdoansy, @huozhi, @hwangstar156, @iampoul, @ianmacartney, @icyJoseph, @ijjk, @imddc, @imranolas, @iscekic, @jantimon, @jaredhan418, @jeanmax1me, @jericopulvera, @jjm2317, @jlbovenzo, @joelhooks, @joeshub, @jonathan-ingram, @jonluca, @jontewks, @joostmeijles, @jophy-ye, @jordienr, @jordyfontoura, @kahlstrm, @karlhorky, @karlkeefer, @kartheesan05, @kdy1, @kenji-webdev, @kevva, @khawajaJunaid, @kidonng, @kiner-tang, @kippmr, @kjac, @kjugi, @kshehadeh, @kutsan, @kwonoj, @kxlow, @leerob, @lforst, @li-jia-nan, @liby, @lonr, @lorensr, @lovell, @lubieowoce, @luciancah, @luismiramirez, @lukahartwig, @lumirlumir, @luojiyin1987, @mamuso, @manovotny, @marlier, @mauroaccornero, @maxhaomh, @mayank1513, @mcnaveen, @md-rejoyan-islam, @mehmetozguldev, @mert-duzgun, @mirasayon, @mischnic, @mknichel, @mobeigi, @molebox, @mratlamwala, @mud-ali, @n-ii-ma, @n1ckoates, @nattui, @nauvalazhar, @neila-a, @neoFinch, @niketchandivade, @nisabmohd, @none23, @notomo, @notrab, @nsams, @nurullah, @okoyecharles, @omahs, @paarthmadan, @pathliving, @pavelglac, @penicillin0, @phryneas, @pkiv, @pnutmath, @qqww08, @r34son, @raeyoung-kim, @remcohaszing, @remorses, @rezamauliadi, @rishabhpoddar, @ronanru, @royalfig, @rubyisrust, @ryan-nauman, @ryohidaka, @ryota-murakami, @s-ekai, @saltcod, @samcx, @samijaber, @sean-rallycry, @sebmarkbage, @shubh73, @shuding, @sirTangale, @sleevezip, @slimbde, @soedirgo, @sokra, @sommeeeer, @sopranopillow, @souporserious, @srkirkland, @steadily-worked, @steveluscher, @stipsan, @styfle, @stylessh, @syi0808, @symant233, @tariknh, @theoludwig, @timfish, @timfuhrmann, @timneutkens, @tknickman, @todor0v, @tokkiyaa, @torresgol10, @tranvanhieu01012002, @txxxxc, @typeofweb, @unflxw, @unstubbable, @versecafe, @vicb, @vkryachko, @wbinnssmith, @webtinax, @weicheng95, @wesbos, @whatisagi, @wiesson, @woutvanderploeg, @wyattjoh, @xiaohanyu, @xixixao, @xugetsu, @yosefbeder, @ypessoa, @ytori, @yunsii, @yurivangeffen, @z0n, @zce, @zhawtof, @zsh77, and @ztanner for helping!
