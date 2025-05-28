---
title: Next.js 15.2
description: >-
  Next.js 15.2 includes updates for debugging errors, metadata, Turbopack, and
  more.
author:
  - name: Jiachi Liu
    image: /static/team/jiachi.png
  - name: Jiwon Choi
    image: /static/team/jiwon.png
  - name: Jude Gao
    image: /static/team/jude.png
  - name: Maia Teegarden
    image: /static/team/maia.jpg
  - name: Pranathi Peri
    image: /static/team/pran.png
  - name: Rauno Freiberg
    image: /static/team/rauno.jpeg
  - name: Sebastian Silbermann
    image: /static/team/sebbie.png
  - name: Zack Tanner
    image: /static/team/zack.jpg
date: 2025-02-26T20:00:00.000Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-2/twitter-card.png
---

Next.js 15.2 includes updates for debugging errors, metadata, Turbopack, and more:

*   [**Redesigned error UI and improved stack traces**](/blog/next-15-2#redesigned-error-ui-and-improved-stack-traces): A redesigned debugging experience
*   [**Streaming metadata**](/blog/next-15-2#streaming-metadata): Async metadata will no longer block page rendering or client-side page transitions
*   [**Turbopack performance improvements**](/blog/next-15-2#turbopack-performance-improvements): Faster compile times and reduced memory usage
*   [**React View Transitions (experimental)**](/blog/next-15-2#react-view-transitions-experimental): Experimental support for React's new View Transitions API
*   [**Node.js Middleware (experimental)**](/blog/next-15-2#nodejs-middleware-experimental): Experimental support for using the Node.js runtime in Middleware

Upgrade today, or get started with:

```bash filename="Terminal"
# Use the automated upgrade CLI
npx @next/codemod@canary upgrade latest
 
# ...or upgrade manually
npm install next@latest react@latest react-dom@latest
 
# ...or start a new project
npx create-next-app@latest
```

[Redesigned error UI and improved stack traces](#redesigned-error-ui-and-improved-stack-traces)
-----------------------------------------------------------------------------------------------

We've added both visual and quality improvements to errors you may encounter while building your application. Let's walk through each area of improvements:

### [Error overlay](#error-overlay)

<Image
  alt="An example of the Next.js error overlay after version 15.2"
  srcLight="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-2/bad-element-error-turbo2-light.png"
  srcDark="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-2/bad-element-error-turbo2-dark.png"
  width="2048"
  height="1408"
/>

We've overhauled the UI and presentation of error messages in Next.js, making them easier to understand. The new design highlights the core details of the error—such as the message, the relevant code frame, and the call stack—while reducing noise from code in libraries or dependencies. This means you can quickly get to the root of what went wrong and start fixing it faster.

Leveraging the newly introduced [owner stacks](https://react.dev/reference/react/captureOwnerStack) feature in React, we're now able to provide higher fidelity into where your errors are coming from. Next.js will now be able to surface the subcomponent responsible for throwing the error, skipping over intermediary elements that weren't responsible for creating the element that caused the error.

We're also making it easier to customize your indicator preferences without needing to add additional configuration.

<Image
  alt="An example of the Next.js dev tools preferences"
  srcLight="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-2/preferences-light.png"
  srcDark="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-2/preferences-dark.png"
  width="506"
  height="354"
/>

We've added a feedback section at the bottom of error overlays that lets you rate how helpful the error message was. Your opinion helps us understand common pain points and improve error messages to make debugging easier.

### [Dev indicator](#dev-indicator)

The various states of the dev indicator, from rendering to showing additional information.

We've consolidated development information into a new, streamlined indicator that shows details like rendering mode and build status.

During compilation, you'll notice a dimmed, animated Next.js logo when navigating between routes. The logo brightens once compilation is complete and React begins rendering, providing a visual cue of your application's state.

Opening the dev indicator now displays:

*   Your current route's rendering mode (static/dynamic)
*   Turbopack compilation status
*   Active errors with quick access to the error overlay

Future updates will expand this menu to include:

*   PPR (Partial Prerendering) debugging tools
*   Cache monitoring features
*   Additional developer tooling

This unified approach puts all crucial development information in one accessible location. We'll continue to refine and expand this feature in future releases based on your feedback.

[Streaming metadata](#streaming-metadata)
-----------------------------------------

It can often be necessary to fetch dynamic data, or perform some async operation, in `generateMetadata`. In prior versions of Next.js, this metadata needed to finish generating before the initial UI would be sent so it could be included in the document `<head>`.

This meant that for many pages where a fast initial UI was available, the initial paint was still delayed by data requirements that did not affect what the user would see visually. We've improved this in 15.2 by allowing the initial UI to be sent to the browser even before `generateMetadata` has completed.

<Image
  alt="An example of the Next.js dev tools preferences"
  srcLight="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-2/metadata-light.png"
  srcDark="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-2/metadata-dark.png"
  width="1600"
  height="882"
/>

However, to maintain compatibility with bots and crawlers that expect metadata to be available in the `<head>` of the document, we continue to delay sending HTML to certain bot user agents. If you need more fine-grained control over which bots receive this treatment, you can customize the regex used to serve them via the `htmlLimitedBots` option in `next.config.js`.

Learn more about [streaming metadata](/docs/app/api-reference/functions/generate-metadata#streaming-metadata).

[Turbopack performance improvements](#turbopack-performance-improvements)
-------------------------------------------------------------------------

Turbopack was marked stable with [Next.js 15](https://nextjs.org/blog/next-15#turbopack-dev).

We've been working on improving Turbopack's performance, particularly in scenarios without persistent caching. As part of this release, we've introduced the following enhancements:

*   **Faster compile times:** Early adopters have reported up to **57.6% faster compile times** when accessing routes compared to Next.js 15.1.
*   **Reduced memory usage:** For the [vercel.com](http://vercel.com/) application, we observed a **30% decrease in memory usage** during local development.

With these improvements, Turbopack should now be faster than Webpack in virtually all cases. If you encounter a scenario where this isn't true for your application, please reach out—we want to investigate these.

We've also made progress on persistent caching and production builds. Although these features aren't ready for an experimental release yet, we've started testing them on real-world projects. We'll share more detailed metrics once they're available for broader use.

[React View Transitions (experimental)](#react-view-transitions-experimental)
-----------------------------------------------------------------------------

We've added a feature flag to enable the new experimental View Transitions API in React. This new API allows you to animate between different views and components in your application.

To enable this feature, add the following to your `next.config.js`:

```js filename="next.config.js"
module.exports = {
  experimental: {
    viewTransition: true,
  },
};
```

> **Note:** This feature is highly experimental and may change in future releases.

For more information on how to use this feature, please refer to the [original View Transition pull request](https://github.com/facebook/react/pull/31975) in the React repository. This work builds on the native browser implementation of View Transitions.

We will be publishing more documentation and examples as stability progresses.

[Node.js Middleware (experimental)](#nodejs-middleware-experimental)
--------------------------------------------------------------------

We've been working on a new experimental flag to allow using the Node.js runtime for the Next.js Middleware.

To enable this feature, add the following to your `next.config.js`:

```js filename="next.config.js"
module.exports = {
  experimental: {
    nodeMiddleware: true,
  },
};
```

You can then specify the Node.js runtime in your Middleware `config` export:

```js filename="middleware.js"
import bcrypt from 'bcrypt';
 
const API_KEY_HASH = process.env.API_KEY_HASH; // Pre-hashed API key in env
 
export default async function middleware(req) {
  const apiKey = req.headers.get('x-api-key');
 
  if (!apiKey || !(await bcrypt.compare(apiKey, API_KEY_HASH))) {
    return new Response('Forbidden', { status: 403 });
  }
 
  console.log('API key validated');
}
 
export const config = {
  runtime: 'nodejs',
};
```

> **Note:** This feature is not yet recommended for production use. Therefore, Next.js will throw an error unless you are using the `next@canary` release instead of the stable release.

We are planning to take this opportunity to improve and reshape the Middleware API. If you have any suggestions or requests, please let us know. Node.js Middleware was a top community request and we are excited to have this addressed.

[Coming soon](#coming-soon)
---------------------------

*   **"use cache" (beta)**: We've been working on stabilizing `"use cache"` as a standalone feature. Stay tuned for more details in the coming releases. Learn more about [`"use cache"`](https://nextjs.org/blog/composable-caching).
*   **Turbopack persistent caching (experimental)**: We've been dogfooding persistent caching at Vercel with positive performance improvements. Once we've stabilized it further, we'll release it behind a feature flag for additional feedback and testing.

[Other Changes](#other-changes)
-------------------------------

*   **\[Feature\]** Add `--api` flag to create a headless API-only with `create-next-app` ([PR](https://github.com/vercel/next.js/pull/68130))
*   **\[Feature\]** Add support for `images.qualities` with `next/image` ([PR](https://github.com/vercel/next.js/pull/74257))
*   **\[Deprecation\]** Warn about i18n configuration deprecation in App Router ([PR](https://github.com/vercel/next.js/pull/76346))
*   **\[Improvement\]** Improve lint performance of `no-html-link-for-pages` ([PR](https://github.com/vercel/next.js/pull/74827))
*   **\[Improvement\]** Emit build error if `"use action"` directive is incorrectly used ([PR](https://github.com/vercel/next.js/pull/74954))
*   **\[Improvement\]** Display `global-error` alongside dev overlay during development ([PR](https://github.com/vercel/next.js/pull/75101))
*   **\[Improvement\]** Allow disabling HTTP request logs in development server ([PR](https://github.com/vercel/next.js/pull/74349))
*   **\[Improvement\]** Add pagination SEO link tags ([PR](https://github.com/vercel/next.js/pull/74737))
*   **\[Improvement\]** Improve JSDocs for `metadata` and `<Link>` components ([PR](https://github.com/vercel/next.js/pull/75576))
*   **\[Improvement\]** Middleware should match `next/image` requests ([PR](https://github.com/vercel/next.js/pull/75729))
*   **\[Improvement\]** Add hostname to default error boundary message ([PR](https://github.com/vercel/next.js/pull/75151))
*   **\[Improvement\]** Send errors not handled by explicit error boundaries through `reportError` ([PR](https://github.com/vercel/next.js/pull/76101))

[Contributors](#contributors)
-----------------------------

Next.js is the result of the combined work of over 3,000 individual developers. This release was brought to you by:

*   The **Next.js** team: [Andrew](https://github.com/acdlite), [Hendrik](https://github.com/unstubbable), [Janka](https://github.com/lubieowoce), [Jiachi](https://github.com/huozhi), [Jimmy](https://github.com/feedthejim), [Jiwon](https://github.com/devjiwonchoi), [JJ](https://github.com/ijjk), [Josh](https://github.com/gnoff), [Jude](https://github.com/gao_jude), [Sam](https://github.com/samcx), [Sebastian](https://github.com/sebmarkbage), [Sebbie](https://github.com/eps1lon), [Wyatt](https://github.com/wyattjoh), and [Zack](https://github.com/ztanner).
*   The **Turbopack** team: [Benjamin](https://github.com/bgw), [Donny](https://github.com/kdy1), [Maia](https://github.com/padmaia), [Niklas](https://github.com/mischnic), [Tim](https://github.com/timneutkens), [Tobias](https://github.com/sokra), and [Will](https://github.com/wbinnssmith).
*   The **Next.js Docs** team: [Delba](https://github.com/delbaoliveira), [Rich](https://github.com/molebox), [Ismael](https://github.com/ismaelrumzan), and [Lee](https://github.com/leerob).

Huge thanks to @mischnic, @Marukome0743, @JamBalaya56562, @creationix, @noreiller, @styfle, @abdonrd, @ollyw, @aymericzip, @davidhu2000, @attilarepka, @devpla, @dydals3440, @huozhi, @wbinnssmith, @suu3, @PapatMayuri, @Sahil4883, @abyii, @molebox, @sokra, @maciej-ka, @abvthecity, @damiensedgwick, @alitas, @RiskyMH, @ytreister, @sommeeeer, @n1ckoates, @yongholeeme, @spidersouris, @gurkerl83, @cassiossantos, @Netail, @tknickman, @eur00t, @cseas, @nnnnoel, @Manoj-M-S, @lfades, @matmannion, @mikeboensel, @nphmuller, @apostolos, @k15a, @pavelee, @locothedev, @vexcat, @Zach-Jaensch, @decepulis, @gadcam, @lukahartwig, @jsanford8, @RobinMalfait, @raunofreiberg, @mohsen1, @skushagra, @amannn, @HQidea, @jrandolf, @smit-err, @littledivy, @k35o, @martinsione, @CvX, @msereniti, @Timer, @Iftee97, @chibicode, @RobPruzan, @PlagueFPS, @bjunix, @maximevtush, @michaelven, @sedlukha, @johannpinson, @AxelUser, @Nayeem-XTREME, @IcaroG, @blurrah, @lachlanjc, @ashi009, @conico974, @raphaelcosta, @dulmandakh, @khuezy, @Knoa0405, @wangsijie, @stefanprobst, @wentsul, @loopy-lim, @bratvanov, @hedgeday, and @cassian-goode for helping!
