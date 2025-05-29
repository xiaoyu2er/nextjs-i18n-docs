---
title: Next.js 12.3
description: >-
  Next.js 12.3 introduces TypeScript Auto-Install, improved Fast Refresh, stable
  new Image Component, and more!
author:
  - name: Balázs Orbán
    image: /static/team/balazs.jpg
  - name: DongYoon Kang
    image: /static/team/kdy.jpg
  - name: Jiachi Liu
    image: /static/team/jiachi.png
  - name: JJ Kasper
    image: /static/team/jj.jpg
  - name: Maia Teegarden
    image: /static/team/maia.jpg
  - name: Shu Ding
    image: /static/team/shu.jpg
  - name: Steven
    image: /static/team/styfle.png
  - name: Tim Neutkens
    image: /static/team/tim.jpg
date: 2022-09-08T16:00:00.507Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-12-3/twitter-card.png
---

We've shipped some quality-of-life improvements to Next.js with 12.3:

*   [**Improved Fast Refresh:**](#improved-fast-refresh) `.env`, `jsconfig.json`, and `tsconfig.json` files now hot reload.
*   [**TypeScript Auto-Install:**](#typescript-auto-install) Add a `.ts` file to automatically configure TypeScript and install deps.
*   [**Image Component:**](#image-component) `next/future/image` is now stable.
*   [**SWC Minifier:**](#swc-minifier-stable) Minification with the Next.js compiler is now stable.
*   [**New Router + Layouts Update:**](#new-router-and-layouts-update) Implementation has begun and new features explained.

Update today by running `npm i next@latest`.

> Announcing the third global Next.js community conference on October 25th. [Register now](https://nextjs.org/conf) →

[Next.js Conf](#nextjs-conf)
----------------------------

You’re invited to the global Next.js community conference on October 25th. For the 6th anniversary of Next.js, we’ll be introducing:

*   Features that leverage React Server Components, Streaming and Suspense.
*   Conventions that make it easier for developers to optimize and scale applications.
*   Open-source tooling that make local development and production builds faster.

[Claim your free ticket](https://nextjs.org/conf) and see the future of Next.js and React, and follow [@nextjs](https://twitter.com/nextjs) for more announcements soon. We’re also looking for community talks. [Submit a talk proposal](https://nextjs-conf.super.site/) and share the story of what you’re building with Next.js.

[TypeScript Auto-Install](#typescript-auto-install)
---------------------------------------------------

Next.js has built-in support for automatically configuring TypeScript. Previously, adding TypeScript to an existing project required manually installing the necessary dependencies.

With this release, Next.js automatically detects when TypeScript files are added to a project, installs the necessary dependencies, and adds a `tsconfig.json` file. This works when running `next dev` and `next build`.

Video showing Next.js auto-installing TypeScript.

[Improved Fast Refresh](#improved-fast-refresh)
-----------------------------------------------

Fast iterations are critical for your local development workflow. Next.js uses [Fast Refresh](/docs/architecture/fast-refresh) for instantaneous feedback on edits made to your React components. Hit save and see your changes reflected in the browser _without_ needing to reload the page.

With Next.js 12.3, some configuration files now also hot reloaded when making edits, including:

*   `.env` and `env.*` variants
*   `jsconfig.json`
*   `tsconfig.json`

You now **do not need to restart your local development server** when making changes to these configuration files.

Video showing Next.js hot reloading a \`.env\` file.

[Image Component](#image-component)
-----------------------------------

### [`next/future/image` component (Stable)](#nextfutureimage-component-stable)

In [Next.js 12.2](https://nextjs.org/blog/next-12-2), we shared an experimental preview of a **new** Image component that simplifies how you style images and improves performance by using native browser lazy loading.

The new Image component is now stable and no longer requires an experimental flag.

Since the last release, we've made further improvements:

*   Added support for `fill` layout mode that causes the image to fill the parent element.
*   Improved the blur-up placeholder so it works with transparent images, no longer needs `<noscript>`, and `next dev` matches `next start`.
*   Prevented subtle layout shift (browsers other than Chrome) by hiding `alt` text while image is loading.
*   Required `alt` property for better accessibility.
*   Fixed `onError` property when error occurs before hydration.
*   Fixed aspect ratio for statically imported image that has only `width` or only `height` property.
*   Improved error messages when using improper settings or configuration.

In the future, we plan to rename `next/image` to `next/legacy/image` and `next/future/image` to `next/image`. This will provide a great experience for new Next.js projects and existing projects will be able to easily migrate using our `next/image` codemod. We will provide more details leading up to the next major version.

For more information on how to use it today, please refer to the [documentation](/docs/pages/building-your-application/optimizing/images) which includes a migration guide.

### [Remote Patterns (Stable)](#remote-patterns-stable)

`remotePatterns` allows you to specify wildcards for remote images when using the built-in Image Optimization API. It allows for more powerful matching beyond the existing `images.domains` configuration, which only performs exact matches on the domain name.

This option is now stable and can be used with the following configuration option:

```js filename="next.config.js"
module.exports = {
  images: {
    remotePatterns: [
      {
        // The `src` property hostname must end with `.example.com`,
        // otherwise the API will respond with 400 Bad Request.
        protocol: 'https',
        hostname: '**.example.com',
      },
    ],
  },
};
```

### [Disable Image Optimization (Stable)](#disable-image-optimization-stable)

The Image Optimization API requires a server to optimize images on demand as they’re requested. This works great when self-hosting with `next start` or deploying to platforms like [Vercel](https://vercel.com/solutions/nextjs). However, this won't work with `next export` because it doesn’t include a server to optimize images. Previously, you would need to configure a 3rd party Image Optimization provider using the `loader` prop, but now you can disable Image Optimization completely using `next.config.js` for all instances of `next/image`.

This previously experimental option is now stable and can be used with the following configuration option:

```js filename="next.config.js"
module.exports = {
  images: {
    unoptimized: true,
  },
};
```

[SWC Minifier (Stable)](#swc-minifier-stable)
---------------------------------------------

In Next.js 12, we introduced code minification using SWC as part of the experimental features of [Next.js Compiler](/docs/architecture/nextjs-compiler). Early results showed that minification with SWC was **7x faster** than the previous version with Terser.

With this release, the feature is stable and you can opt-in using the following `next.config.js` option:

```js filename="next.config.js"
module.exports = {
  swcMinify: true,
};
```

We plan to make the SWC minifier the default in the next major version.

[New Router and Layouts Update](#new-router-and-layouts-update)
---------------------------------------------------------------

Earlier this year, we published the [Layouts RFC](https://nextjs.org/blog/layouts-rfc) which introduced the biggest update to Next.js since it was released in 2016. These changes include a new router built on top of React Server Components. The implementation work has begun and we’re working towards a public beta in the next major version.

Today, we’re sharing more information about upcoming features, including:

*   [Route Groups](https://nextjs.org/blog/layouts-rfc#route-groups): Used to opt routes out of layouts, and organize routes without affecting URL paths.
*   [Instant Loading States](https://nextjs.org/blog/layouts-rfc#instant-loading-states): New file convention to easily add loading UI, built with Suspense.
*   [Error Handling](https://nextjs.org/blog/layouts-rfc#error-handling): New file convention to easily add nested Error Boundaries and error UI.
*   [Templates](https://nextjs.org/blog/layouts-rfc#templates): New file convention to add shared UI that creates a different instance and doesn’t share state.
*   [Intercepting Routes](https://nextjs.org/blog/layouts-rfc#intercepting-routes), [Parallel Routes](https://nextjs.org/blog/layouts-rfc#dynamic-parallel-routes), and [Conditional Routes](https://nextjs.org/blog/layouts-rfc#conditional-routes): New conventions that allow you to implement advanced routing patterns.

Additionally, in a [different RFC](https://github.com/vercel/next.js/discussions/27953), we're exploring adding support for **Global CSS Imports** in the new `app` directory . This would allow you to use packages that import their own `.css` files without additional configuration.

Read more about these new features in the [Layouts RFC](https://nextjs.org/blog/layouts-rfc).

[Other Improvements](#other-improvements)
-----------------------------------------

*   [New documentation](/docs/accessibility) on built-in accessibility features of Next.js.
*   `create-next-app` templates now include dark mode support automatically using your system preference.
*   `src/` is now a default linting directory when using the [integrated ESLint support](/docs/pages/building-your-application/configuring/eslint).
*   `next.config.js` now includes schema validation with `ajv`, helping prevent misuse of configuration options.
*   `next.config.js` now has an experimental config flag `fallbackNodePolyfills: false` to prevent Next.js from polyfilling Node.js APIs for the browser (which leads to increased bundle sizes). This option will cause Next.js to show a build-time error showing where the unnecessary import comes from.

[Community](#community)
-----------------------

Next.js is the result of the combined work of **over 2,000 individual developers**, industry partners like Google Chrome and Meta, and our core team at Vercel.

This release was brought to you by the contributions of: @pthomas931, @madmed88, @sanjaiyan-dev, @balazsorban44, @DonghyukJacobJang, @chaiwattsw, @styfle, @dunglas, @ahkhanjani, @promer94, @terrierscript, @shawncal, @insik-han, @QuiiBz, @ykzts, @JoshuaKGoldberg, @lucasassisrosa, @dikwickley, @Brooooooklyn, @sicarius97, @FourwingsY, @manovotny, @SukkaW, @pepoeverton, @jdeniau, @sumiren, @anthonyshew, @pekarja5, @huozhi, @leerob, @fediev, @atcastle, @shuding, @feugy, @jonohewitt, @zakiego, @Schniz, @timneutkens, @wyattjoh, @MaedahBatool, @X7Becka, @nnnnoel, @dcdev67, @alvinometric, @timothympace, @jeferson-sb, @ijjk, @theMosaad, @Yuddomack, @msquitieri, @andreizanik, @nix6839, @thomasballinger, @ziishaned, @xyeres, @nyedidikeke, @maxproske, @sokra, @titusdmoore, @thebergamo, @fikrikarim, @Kikobeats, @clearlyTHUYDOAN, @nasso, @qutek, @kdy1, @kyliau, @housseindjirdeh, @barissayil, @seveibar, @Jessidhia, @santidalmasso, @JohnDaly, @Nikhilnama18, @mduleone, @colinhacks, @ductnn, @josh, @hiro0218, @eltociear, @kwonoj, @valcosmos, @mihaic195, @stefanprobst, @KATT, @thiagomorales, @danielcavanagh, @steven-tey, @hellomhc, @trevor-fauna, @nguyenyou, @eminvergil, @lobsterkatie, @dorian-davis, @sambecker, @isaac-martin, @lfades, @amorimr, @javivelasco, @mongolyy, @Thisen, @zorrolisto, @ethomson, @padmaia, @thisisjofrank, @dominiksipowicz, @awareness481, @pakaponk, @apledger, @longzheng, @tknickman, @rbrcsk, @emersonlaurentino, @carstenlebek, @edusig, @riccardogiorato, @hanneslund, @ryanhaticus, @j-mendez, @armandabric, @WinmezzZ, @andershagbard, @dammy001, @MarDi66, @okmttdhr, @rishabhpoddar, @marjorg, @dustinsgoodman, and @zanechua.
