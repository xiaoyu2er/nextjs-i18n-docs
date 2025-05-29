---
title: Next.js 12.2
description: >-
  Next.js 12.2 introduces stable Middleware and On-Demand ISR, experimental Edge
  SSR and API Routes, and more!
author:
  - name: Balázs Orbán
    image: /static/team/balazs.jpg
  - name: DongYoon Kang
    image: /static/team/kdy.jpg
  - name: Javi Velasco
    image: /static/team/javi.jpg
  - name: Jiachi Liu
    image: /static/team/jiachi.png
  - name: JJ Kasper
    image: /static/team/jj.jpg
  - name: Joe Haddad
    image: /static/team/timer.jpg
  - name: Maia Teegarden
    image: /static/team/maia.jpg
  - name: Shu Ding
    image: /static/team/shu.jpg
  - name: Steven
    image: /static/team/styfle.png
  - name: Tim Neutkens
    image: /static/team/tim.jpg
  - name: Tobias Koppers
    image: /static/team/sokra.jpg
date: 2022-06-28T16:00:00.507Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-12-2/twitter-card.png
---

We're laying the foundation for the future of Next.js with 12.2:

*   [**Middleware (Stable):**](#middleware-stable) Dynamic routing for your entire application.
*   [**On-Demand ISR (Stable):**](#on-demand-incremental-static-regeneration-stable) Update content without redeploying.
*   [**Edge API Routes (Experimental):**](#edge-api-routes-experimental) High performance API endpoints.
*   [**Edge SSR (Experimental):**](#edge-server-rendering-experimental) Server-render your app, at the Edge.
*   [**SWC Plugins (Experimental):**](#swc-plugins-experimental) Extend compilation with your own plugins.
*   [**Improvements to `next/image`:**](#improvements-to-nextimage) Including a new `next/future/image` component.

Update today by running `npm i next@latest`.

[Middleware (Stable)](#middleware-stable)
-----------------------------------------

We're excited to announce Middleware is now stable in 12.2 and has an improved API based on feedback from users.

Middleware allows you to run code before a request is completed. Based on the incoming request, you can modify the response by rewriting, redirecting, adding headers, or setting cookies.

```ts filename="middleware.ts"
import { NextRequest, NextResponse } from 'next/server';
 
// If the incoming request has the "beta" cookie
// then we'll rewrite the request to /beta
export function middleware(req: NextRequest) {
  const isInBeta = JSON.parse(req.cookies.get('beta') || 'false');
  req.nextUrl.pathname = isInBeta ? '/beta' : '/';
  return NextResponse.rewrite(req.nextUrl);
}
 
// Supports both a single value or an array of matches
export const config = {
  matcher: '/',
};
```

To update to the newest API changes for Middleware, please see the [migration guide](/docs/messages/middleware-upgrade-guide).

Try Middleware for [free on Vercel](https://vercel.com/edge) or when [self-hosting](/docs/pages/building-your-application/deploying#self-hosting) using `next start`.

[On-Demand Incremental Static Regeneration (Stable)](#on-demand-incremental-static-regeneration-stable)
-------------------------------------------------------------------------------------------------------

On-Demand Incremental Static Regeneration (ISR) allows you to update the content on your site without needing to redeploy. This makes it easy to update your site immediately when data changes in your headless CMS or commerce platform. This was one of the most requested features from the community and we're excited it is now stable.

```js filename="pages/api/revalidate.js"
export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }
 
  try {
    await res.revalidate('/path-to-revalidate');
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}
```

Incremental Static Regeneration works for any providers supporting the [Next.js Build API](/docs/pages/building-your-application/deploying#nextjs-build-api) (`next build`). When deployed to [Vercel](https://vercel.com/), on-demand revalidation propagates globally in ~300ms when pushing pages to the edge.

For more information, [check out the documentation](/docs/pages/building-your-application/data-fetching/incremental-static-regeneration) or [view our demo](https://on-demand-isr.vercel.app/) to see on-demand revalidation in action.

[Edge API Routes (Experimental)](#edge-api-routes-experimental)
---------------------------------------------------------------

Next.js now also supports using the [Edge Runtime](/docs/pages/api-reference/edge) for API Routes. The Edge Runtime is a lighter-weight runtime than Node.js providing fast startups for low latency. In addition, Edge API Routes support streaming responses from the server.

You can set the runtime for an API Route in the `config`, specifying either `nodejs` (default) or `experimental-edge`:

```js filename="pages/api/hello.js"
import type { NextRequest } from 'next/server';
 
export default (req: NextRequest) => {
  return new Response(`Hello, from ${req.url} I'm now an Edge API Route!`);
};
 
export const config = {
  runtime: 'experimental-edge',
};
```

Because the Edge Runtime is lightweight, it has limitations to accommodate fast startup — for example, it does not support Node.js-specific APIs like `fs`. Therefore, the default runtime for API Routes remains `nodejs`.

For more information, [check out the documentation](/docs/pages/building-your-application/routing/api-routes).

[Edge Server-Rendering (Experimental)](#edge-server-rendering-experimental)
---------------------------------------------------------------------------

Next.js now supports using the [Edge Runtime](/docs/pages/api-reference/edge) for server rendering.

As mentioned above, the Edge Runtime is a lighter-weight runtime than Node.js providing fast startups for low latency. When used with React 18, it enables streaming server-rendering for Pages.

Next.js uses Node.js as the default runtime for server-side rendering pages. Starting with 12.2, if you are using React 18 you can opt into using the Edge Runtime.

You can set the runtime globally in `next.config.js`, specifying either `nodejs` or `experimental-edge`:

```js filename="next.config.js"
module.exports = {
  experimental: {
    runtime: 'experimental-edge',
  },
};
```

Changing the default page runtime affects all pages, including [SSR streaming](/docs/app/building-your-application/routing/loading-ui-and-streaming) and [Server Components](/docs/getting-started/react-essentials) features. You can also override this default on a per-page basis, by exporting a `runtime` config:

```js filename="pages/index.js"
export const config = {
  runtime: 'nodejs',
};
 
export default function Home() {}
```

You can detect which runtime you're using by looking at the `process.env.NEXT_RUNTIME` Environment Variable during runtime, and examining the `options.nextRuntime` variable during webpack compilation.

For more information, [check out the documentation](/docs/pages/building-your-application/rendering/edge-and-nodejs-runtimes).

[Improvements to `next/image`](#improvements-to-nextimage)
----------------------------------------------------------

### [`next/future/image` component (Experimental)](#nextfutureimage-component-experimental)

We've heard your feedback on the current Image component and are excited to share an early preview of the new `next/image`. This new and improved image component requires less client-side JavaScript and simplifies how you style images:

*   Renders a single `<img>` without `<div>` or `<span>` wrappers
*   Added support for canonical `style` prop
*   Removed `layout`, `objectFit`, and `objectPosition` props in favor of `style` or `className`
*   Removed `IntersectionObserver` implementation in favor of [native lazy loading](https://caniuse.com/loading-lazy-attr)
*   Removed `loader` config in favor of `loader` prop
*   Note: no `fill` mode (yet) so `width` & `height` props are required

This improves performance because native `loading="lazy"` doesn't need to wait for React hydration and client-side JavaScript.

For more information, [check out the documentation](/docs/pages/building-your-application/optimizing/images).

### [Remote Patterns (Experimental)](#remote-patterns-experimental)

`next/image` now supports an experimental configuration option `remotePatterns` that allows you to specify wildcards for remote images when using the built-in Image Optimization API. This allows for more powerful matching beyond the existing [`images.domains`](http://images.domains) configuration, which only performs exact matches on the domain name.

```js filename="next.config.js"
module.exports = {
  experimental: {
    images: {
      remotePatterns: [
        {
          // The `src` property hostname must end with `.example.com`,
          // otherwise this will respond with 400 Bad Request.
          protocol: 'https',
          hostname: '**.example.com',
        },
      ],
    },
  },
};
```

For more information, [check out the documentation](/docs/pages/api-reference/components/image#remotepatterns).

### [Disable Image Optimization](#disable-image-optimization)

The zero-config Image Optimization API prevents the use of `next export` since it requires a server to optimize images on-demand as they're requested. Until today, users targeting `next export` needed to configure the `loader` to use a 3rd party Image Optimization provider, but there was no clear solution if there was no provider available. Starting today, `next export` users can disable Image Optimization for all instances of `next/image` with a new configuration property:

```js filename="next.config.js"
module.exports = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};
```

[SWC Plugins (Experimental)](#swc-plugins-experimental)
-------------------------------------------------------

The [Next.js Compiler](/docs/architecture/nextjs-compiler) uses [SWC](https://swc.rs/) to transform and minify your JavaScript code for production. SWC was introduced in Next.js 12.0 to improve both local development and build performance.

You can now add plugins (written in WebAssembly) to customize the SWC transformation behavior during compilation:

```js filename="next.config.js"
module.exports = {
  experimental: {
    swcPlugins: [
      ['css-variable/swc', { displayName: true, basePath: __dirname }],
    ],
  },
};
```

For more information, [check out the documentation](https://github.com/vercel/next.js/blob/canary/docs/architecture/nextjs-compiler.md#experimental-swc-plugin-support).

[React 18 Support Improvements](#react-18-support-improvements)
---------------------------------------------------------------

*   Improved support for CSS-in-JS libraries like `styled-components` and `emotion` with a smoother upgrade experience and no breaking changes.
*   AMP and HTML post-optimization (CSS, fonts optimizations) are properly supported now.
*   `next/head` now supports React 18.
*   Next.js' route announcer, which is used to properly announce page transitions to screen readers and other assistive technology, now supports React 18.

[Other Improvements](#other-improvements)
-----------------------------------------

*   Support for Emotion transform in the Next.js Compiler. Most features of `@emotion/babel-plugin` are now supported, and unless you are using `importMap`, it can be removed. For more information, [check out the documentation](/docs/architecture/nextjs-compiler#emotion).
*   Better support for the `styled-components` transform in the Next.js Compiler by allowing customization of the default options, including the `cssProp` option. For more information, [check out the documentation](/docs/architecture/nextjs-compiler#styled-components).
*   Better support for JavaScript ES Modules, so components like `next/image` and `next/link` can properly be `import`ed.
*   `next/link` no longer requires manually adding `<a>` as a child. You can now [opt into this behavior](https://github.com/vercel/next.js/pull/36436) in a backward-compatible way.
*   We've added experimental support for shipping only modern JavaScript by modifying `browsersList`. You can opt-into this behavior by setting `browsersListForSwc: true` and `legacyBrowsers: false` in the `experimental` option of `next.config.js`.
*   New `@swc/helpers` optimizations prevent duplication across bundles, reducing bundle size by around `2KB` in a minimal configuration, and more on larger apps
*   We've significantly reduced the Next.js install size. We did this by moving our monorepo to `pnpm`, which allows us to remove duplicate packages while creating the pre-compiled versions that we use. This leads to a reduction in install size of 14MB.
*   In our continued effort to improve self-hosting Next.js, we are stabilizing our experimental `outputStandalone: true` config to `output: 'standalone'`. This config reduces deployment sizes drastically by only including necessary files/assets, including removing the need for installing all of `node_modules` in the built deployment package. This config can be seen in action in our [`with-docker` example](https://github.com/vercel/next.js/blob/canary/examples/with-docker/README.md).

[Layouts RFC & Advanced Routing Support](#layouts-rfc--advanced-routing-support)
--------------------------------------------------------------------------------

In case you missed it, last month we announced the [Layouts RFC](/blog/layouts-rfc) – the biggest update to Next.js since it was introduced in 2016 including:

*   **Nested Layouts:** Build complex applications with nested routes.
*   **Designed for Server Components:** Optimized for subtree navigation.
*   **Improved Data Fetching:** Fetch in layouts while avoiding waterfalls.
*   **Using React 18 Features:** Streaming, Transitions, and Suspense.
*   **Client and Server Routing:** Server-centric routing with _SPA-like_ behavior.
*   **100% incrementally adoptable**: No breaking changes so you can adopt gradually.
*   **Advanced Routing Conventions**: Offscreen stashing, instant transitions, and more.

For more information, [check out the RFC](/blog/layouts-rfc) or [provide feedback](https://github.com/vercel/next.js/discussions/37136).

[Thank you, contributors](#thank-you-contributors)
--------------------------------------------------

Next.js is the result of the combined work of **over 2,000 individual developers**, industry partners like Google Chrome and Meta, and our core team at Vercel.

This release was brought to you by the contributions of: @huozhi, @ijjk, @kwonoj, @ViolanteCodes, @akrabdev, @timneutkens, @jpveilleux, @stigkj, @jgoping, @oof2win2, @Brooooooklyn, @CGamesPlay, @lfades, @molebox, @steven-tey, @SukkaW, @Kikobeats, @balazsorban44, @erikbrinkman, @therealmarzouq, @remcohaszing, @perkinsjr, @shuding, @hanneslund, @housseindjirdeh, @RobertKeyser, @styfle, @htunnicliff, @lukeshumard, @sagnik3, @pixelass, @JoshuaKGoldberg, @rishabhpoddar, @nguyenyou, @kdy1, @sidwebworks, @gnoff, @gaspar09, @feugy, @mfix-stripe, @javivelasco, @Chastrlove, @goncharov-vlad, @NaveenDA, @Firfi, @idkwhojamesis, @FLCN-16, @icyJoseph, @ElijahPepe, @elskwid, @irvile, @Munawwar, @ykolbin, @hulufei, @baruchadi, @imadatyatalah, @await-ovo, @menosprezzi, @gazs, @Exortions, @rubens-lopes, @woochul2, @stefee, @stmtk1, @jlarmstrongiv, @MaedahBatool, @jameshfisher, @fabienheureux, @TxHawks, @mattbrandlysonos, @iggyzap, @src200, @AkifumiSato, @hermanskurichin, @kamilogorek, @ben-xD, @dawsonbooth, @Josehower, @crutchcorn, @ericmatthys, @CharlesStover, @charlypoly, @apmatthews, @naingaungphyo, @alexandrutasica, @stefanprobst, @dc7290, @DilwoarH, @tommarshall, @stanhong, @leerob, @appsbytom, @sshyam-gupta, @saulloalmeida, @indicozy, @ArianHamdi, @Clariity, @sebastianbenz, @7iomka, @gr-qft, @Schniz, @dgagn, @sokra, @okbel, @tbvjaos510, @dmvjs, @PepijnSenders, @JohnPhamous, @kyliau, @eric-burel, @alabhyajindal, @jsjoeio, @vorcigernix, @clearlyTHUYDOAN, @splatterxl, @manovotny, @maxproske, @nvh95, @frankievalentine, @nuta, @bagpyp, @dfelsie, @qqpann, @atcastle, @jsimonrichard, @mass2527, @ekamkohli, @Yuddomack, @tonyspiro, @saurabhmehta1601, @banner4422, @falsepopsky, @jantimon, @henriqueholtz, @ilfa, @matteobruni, @ryscheng, @hoonoh, @ForsakenHarmony, @william-keller, @AleksaC, @Miikis, @zakiego, @radunemerenco, @AliYusuf95, and @dominiksipowicz.
