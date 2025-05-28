---
title: Next.js 15.1
description: >-
  Next.js 15.1 introduces React 19 stable support, improved error debugging, new
  experimental authorization APIs, and more.
author:
  - name: Janka Uryga
    image: /static/team/janka.png
  - name: Jiachi Liu
    image: /static/team/jiachi.png
  - name: Sebastian Silbermann
    image: /static/team/sebbie.png
date: 2024-12-10T20:00:00.000Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-1/twitter-card.png
---

Next.js 15.1 brings core upgrades, new APIs, and improvements to the developer experience. Key updates include:

*   [**React 19 (stable)**](/blog/next-15-1#react-19-stable): Support for React 19 is officially available in both Pages Router & App Router.
*   [**Improved Error Debugging**](/blog/next-15-1#improved-error-debugging): Enhanced DX and better source maps for the browser and the terminal.
*   [**`after` (stable)**](/blog/next-15-1#after-stable): New API to execute code after a response has finished streaming.
*   [**`forbidden` / `unauthorized` (experimental)**](/blog/next-15-1#forbidden-and-unauthorized-experimental): New APIs to enable more granular authentication error handling.

Upgrade today, or get started with:

```bash filename="Terminal"
# Use the automated upgrade CLI
npx @next/codemod@canary upgrade latest
 
# ...or upgrade manually
npm install next@latest react@latest react-dom@latest
 
# ...or start a new project
npx create-next-app@latest
```

[React 19 (stable)](#react-19-stable)
-------------------------------------

Next.js 15.1 now fully supports React 19:

*   **For the Pages Router**: you can now use React 19 stable without needing the Release Candidate or Canary releases, alongside continued support for React 18.
*   **For the App Router**: we will continue to provide React Canary releases built-in. These include all the stable React 19 changes, as well as newer features being validated in frameworks, prior to a new React release.

Since the Next.js 15 release, a significant addition to React 19 was “[sibling pre-warming](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#improvements-to-suspense)”.

For a comprehensive overview of React 19’s updates, please refer to [the official React 19 blog post](https://react.dev/blog/2024/12/05/react-19).

[Improved Error Debugging](#improved-error-debugging)
-----------------------------------------------------

We’ve made improvements to error debugging in Next.js, ensuring you can quickly locate the source of issues, whether they appear in the terminal, browser, or attached debuggers. These enhancements apply to both Webpack and Turbopack ([now stable with Next.js 15](/blog/turbopack-for-development-stable)).

### [Source Maps Enhancements](#source-maps-enhancements)

Errors are now easier to trace back to their origin through the improved use of source maps. We’ve implemented the [`ignoreList` property of source maps](https://developer.chrome.com/docs/devtools/x-google-ignore-list), which allows Next.js to hide stack frames for external dependencies, making your application code the primary focus.

For slightly more accurate source mapping of method names, we suggest adopting Turbopack (now stable), which has improved handling and detection of source maps over Webpack.

> **For library authors**: We recommend populating the `ignoreList` property in sourcemaps when publishing your libraries, especially if they are configured as external (e.g. in the `serverExternalPackages` config).

### [Collapsed Stack Frames](#collapsed-stack-frames)

We’ve improved the logic for collapsing stack frames to highlight the most relevant parts of your code.

*   **In the browser and error overlay**: Stack frames from third-party dependencies are hidden by default, focusing on your application code. You can reveal the hidden frames by clicking “Show ignored frames” in the devtools or the overlay.
*   **In the terminal**: Third-party dependency frames are also collapsed by default, and error formatting now aligns with the browser output for a consistent debugging experience. Errors are replayed in the browser to ensure you don’t miss important information during development if you need the entire stack trace.

### [Enhanced Profiling](#enhanced-profiling)

Ignored stack frames are also recognized by built-in browser profilers. This makes profiling your application easier, allowing you to pinpoint slow functions in your code without noise from external libraries.

### [Improved with the Edge Runtime](#improved-with-the-edge-runtime)

When using the Edge runtime, errors are now displayed consistently across development environments, ensuring seamless debugging. Previously, logged errors would only include the message and not the stack.

### [Before and after](#before-and-after)

Terminal **Before**:

```bash filename="Terminal"
 ⨯ app/page.tsx (6:11) @ eval
 ⨯ Error: boom
    at eval (./app/page.tsx:12:15)
    at Page (./app/page.tsx:11:74)
    at AsyncLocalStorage.run (node:async_hooks:346:14)
    at stringify (<anonymous>)
    at AsyncLocalStorage.run (node:async_hooks:346:14)
    at AsyncResource.runInAsyncScope (node:async_hooks:206:9)
digest: "380744807"
  4 | export default function Page() {
  5 |   const throwError = myCallback(() => {
> 6 |     throw new Error('boom')
    |           ^
  7 |   }, [])
  8 |
  9 |   throwError()
 GET / 500 in 2354ms
```

Terminal **After**:

```bash filename="Terminal"
  ⨯ Error: boom
    at eval (app/page.tsx:6:10)
    at Page (app/page.tsx:5:32)
  4 | export default function Page() {
  5 |   const throwError = myCallback(() => {
> 6 |     throw new Error('boom')
    |          ^
  7 |   }, [])
  8 |
  9 |   throwError() {
  digest: '225828171'
}
```

Error Overlay **Before**

<Image
  alt="An example of the Next.js error overlay before version 15.1"
  srcLight="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-1/before-light.png"
  srcDark="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-1/before-dark.png"
  width="1000"
  height="712"
/>

Error Overlay **After**

<Image
  alt="An example of the Next.js error overlay after version 15.1"
  srcLight="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-1/after-light.png"
  srcDark="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-1/after-dark.png"
  width="1000"
  height="712"
/>

These improvements make errors clearer and more intuitive, allowing you to focus your time building your application rather than debugging.

We’re also thrilled to announce the introduction of a redesigned UI for the error overlay, coming in upcoming releases.

[`after` (stable)](#after-stable)
---------------------------------

The `after()` API is now stable following its introduction in the first Next.js 15 RC.

`after()` provides a way to perform tasks such as logging, analytics, and other system synchronization after the response has finished streaming to the user, without blocking the primary response.

### [Key changes](#key-changes)

Since its introduction, we’ve stabilized `after()` and addressed feedback including:

*   **Improved support** for self-hosted Next.js servers.
*   **Bug fixes** for scenarios where `after()` interacted with other Next.js features.
*   **Enhanced extensibility**, enabling other platforms to inject their own `waitUntil()` primitives to power `after()`.
*   **Support for runtime APIs** such as `cookies()` and `headers()` in Server Actions and Route Handlers.

```js filename="app/layout.js"
import { after } from 'next/server';
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

Read more about the [`after`](/docs/app/api-reference/functions/after) API and how to leverage it in the documentation.

[`forbidden` and `unauthorized` (experimental)](#forbidden-and-unauthorized-experimental)
-----------------------------------------------------------------------------------------

Next.js 15.1 includes two experimental APIs, `forbidden()` and `unauthorized()`, based on community feedback.

> **We’d love your feedback** — please try it in your development environments and share your thoughts in this [discussion thread](https://github.com/vercel/next.js/discussions/73753).

### [Overview](#overview)

If you’re familiar with the App Router, you’ve likely used [`notFound()`](/docs/app/api-reference/file-conventions/not-found) to trigger 404 behavior alongside the customizable `not-found.tsx` file. With version 15.1, we’re extending this approach to authorization errors:

• `forbidden()` triggers a **403 error** with customizable UI via `forbidden.tsx`.

• `unauthorized()` triggers a **401 error** with customizable UI via `unauthorized.tsx`.

> **Good to know:** As with `notFound()` errors, the status code will be `200` if the error is triggered after initial response headers have been sent. [Learn more](/docs/app/building-your-application/routing/loading-ui-and-streaming#status-codes).

### [Enabling the feature](#enabling-the-feature)

As this feature is still experimental, you’ll need to enable it in your `next.config.ts` file:

```ts filename="next.config.ts"
import type { NextConfig } from 'next';
 
const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
  },
};
 
export default nextConfig;
```

> **Note:** `next.config.ts` support was introduced in Next.js 15. [Learn more](/docs/app/api-reference/config/next-config-js#typescript).

### [Using `forbidden()` and `unauthorized()`](#using-forbidden-and-unauthorized)

You can use `forbidden()` and `unauthorized()` in Server Actions, Server Components, Client Components, or Route Handlers. Here’s an example:

```
import { verifySession } from '@/app/lib/dal';
import { forbidden } from 'next/navigation';
 
export default async function AdminPage() {
  const session = await verifySession();
 
  // Check if the user has the 'admin' role
  if (session.role !== 'admin') {
    forbidden();
  }
 
  // Render the admin page for authorized users
  return <h1>Admin Page</h1>;
}
```

### [Creating custom error pages](#creating-custom-error-pages)

To customize the error pages, create the following files:

```tsx filename="app/forbidden.tsx"
import Link from 'next/link';
 
export default function Forbidden() {
  return (
    <div>
      <h2>Forbidden</h2>
      <p>You are not authorized to access this resource.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
```

```tsx filename="app/unauthorized.tsx"
import Link from 'next/link';
 
export default function Unauthorized() {
  return (
    <div>
      <h2>Unauthorized</h2>
      <p>Please log in to access this page.</p>
      <Link href="/login">Go to Login</Link>
    </div>
  );
}
```

We'd like to thank [Clerk](https://clerk.com) for proposing this feature through a PR and assisting us in prototyping the API. Before we stabilize this feature in 15.2, we're planning on adding more capabilities and improvements to the APIs to support a wider range of use cases.

Read the documentation for the [`unauthorized`](/docs/app/api-reference/functions/unauthorized) and [`forbidden`](/docs/app/api-reference/functions/forbidden) APIs for more details.

[Other Changes](#other-changes)
-------------------------------

*   **\[Feature\]** Use ESLint 9 in `create-next-app` ([PR](https://github.com/vercel/next.js/pull/72762))
*   **\[Feature\]** Increase max cache tags to 128 ([PR](https://github.com/vercel/next.js/pull/73124))
*   **\[Feature\]** Add an option to disable experimental CssChunkingPlugin ([PR](https://github.com/vercel/next.js/pull/73286))
*   **\[Feature\]** Add experimental CSS inlining support ([PR](https://github.com/vercel/next.js/pull/72195))
*   **\[Improvement\]** Silence Sass `legacy-js-api` warning ([PR](https://github.com/vercel/next.js/pull/72632))
*   **\[Improvement\]** Fix unhandled rejection when using rewrites ([PR](https://github.com/vercel/next.js/pull/72530))
*   **\[Improvement\]** Ensure parent process exits when webpack worker fails ([PR](https://github.com/vercel/next.js/pull/72921))
*   **\[Improvement\]** Fixed route interception on a catch-all route ([PR](https://github.com/vercel/next.js/pull/72902))
*   **\[Improvement\]** Fixed response cloning issue in request deduping ([PR](https://github.com/vercel/next.js/pull/73274))
*   **\[Improvement\]** Fixed Server Action redirects between multiple root layouts ([PR](https://github.com/vercel/next.js/pull/73063))
*   **\[Improvement\]** Support providing MDX plugins as strings for Turbopack compatibility ([PR](https://github.com/vercel/next.js/pull/72802))

[Contributors](#contributors)
-----------------------------

Next.js is the result of the combined work of over 3,000 individual developers. This release was brought to you by:

*   The **Next.js** team: [Andrew](https://github.com/acdlite), [Hendrik](https://github.com/unstubbable), [Janka](https://github.com/lubieowoce), [Jiachi](https://github.com/huozhi), [Jimmy](https://github.com/feedthejim), [Jiwon](https://github.com/devjiwonchoi), [JJ](https://github.com/ijjk), [Josh](https://github.com/gnoff), [Jude](https://github.com/gaojude), [Sam](https://github.com/samcx), [Sebastian](https://github.com/sebmarkbage), [Sebbie](https://github.com/eps1lon), [Wyatt](https://github.com/wyattjoh), and [Zack](https://github.com/ztanner).
*   The **Turbopack** team: [Alex](https://github.com/arlyon), [Benjamin](https://github.com/bgw), [Donny](https://github.com/kdy1), [Maia](https://github.com/padmaia), [Niklas](https://github.com/mischnic), [Tim](https://github.com/timneutkens), [Tobias](https://github.com/sokra), and [Will](https://github.com/wbinnssmith).
*   The **Next.js Docs** team: [Delba](https://github.com/delbaoliveira), [Rich](https://github.com/molebox), [Ismael](https://github.com/ismaelrumzan), and [Lee](https://github.com/leerob).

Huge thanks to @sokra, @molebox, @delbaoliveira, @eps1lon, @wbinnssmith, @JamBalaya56562, @hyungjikim, @adrian-faustino, @mottox2, @lubieowoce, @bgw, @mknichel, @wyattjoh, @huozhi, @kdy1, @mischnic, @ijjk, @icyJoseph, @acdlite, @unstubbable, @gaojude, @devjiwonchoi, @cena-ko, @lforst, @devpla, @samcx, @styfle, @ztanner, @Marukome0743, @timneutkens, @JeremieDoctrine, @ductnn, @karlhorky, @reynaldichernando, @chogyejin, @y-yagi, @philparzer, @alfawal, @Rhynden, @arlyon, @MJez29, @Goodosky, @themattmayfield, @tobySolutions, @kevinmitch14, @leerob, @emmanuelgautier, @mrhrifat, @lid0a, @boar-is, @nisabmohd, @PapatMayuri, @ovogmap, @Reflex2468, @LioRael, @betterthanhajin, @HerringtonDarkholme, @bpb54321, @ahmoin, @Kikobeats, @abdelrahmanAbouelkheir, @lumirlumir, @yeeed711, @petter, and @suu3 for helping!
