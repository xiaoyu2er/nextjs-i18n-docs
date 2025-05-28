---
title: Next.js 11.1
description: >-
  Next.js 11.1 introduces an important security patch, ES Modules support,
  performance improvements, Rust-based tooling, 2x faster data fetching when
  pre-rendering, and more!
author:
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
  - name: Tobias Koppers
    image: /static/team/sokra.jpg
date: 2021-08-11T16:00:00.507Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-11-1/twitter-card.png
---

We're improving build performance across the entire stack with Next.js 11.1, featuring:

*   [**Security Patch**](#security-patch): An important update to prevent potential open redirects.
*   [**ES Modules Support**](#es-modules-support): Enable today with an experimental flag.
*   [**Rust-based Tooling**](#adopting-rust-based-swc): SWC integration to replace JS tooling (Babel and Terser).
*   [**Faster Data Fetching**](#builds--data-fetching): 2x faster data fetching with HTTP `keep-alive` when pre-rendering.
*   [**Faster Source Maps**](#source-maps): 70% faster builds and 67% less memory usage when using source maps.
*   [**ESLint Integration Improvements**](#eslint-improvements): More accessible defaults and linting for typos.
*   [**`next/image` Improvements**](#nextimage-improvements): Optional Sharp usage, better support for `next export`.

Update today by running `npm i next@latest`.

[Security Patch](#security-patch)
---------------------------------

The Next.js team works with security researchers and auditors to prevent against vulnerabilities. We are thankful to Gabriel Benmergui from Robinhood for their investigation and discovery of an open redirect with `pages/_error.js` and subsequent responsible disclosure.

The reported issue did not directly harm users, but it could allow for phishing attacks by redirecting to an attacker's domain from a trusted domain. We've landed a patch in Next.js 11.1 preventing this open redirect from occurring, as well as [security regression tests](https://github.com/vercel/next.js/blob/canary/test/integration/repeated-slashes/test/index.test.js).

For more details, please read the [public CVE](https://github.com/vercel/next.js/security/advisories/GHSA-vxf5-wxwp-m7g9). We recommend upgrading to the latest version of Next.js to improve the overall security of your application. For future responsible disclosure of reports, email us at `security@vercel.com`.

**Note:** Next.js applications hosted on [Vercel](https://vercel.com) **are not affected** by this vulnerability (and, therefore, **no action is needed** for your Next.js apps running on Vercel.

[ES Modules Support](#es-modules-support)
-----------------------------------------

We're working on extensive [ES Modules](https://nodejs.org/docs/latest/api/esm.html) support in Next.js, both as input modules and as an output target. Starting with Next.js 11.1, you can now import npm packages using ES Modules (e.g. `"type": "module"` in their `package.json`) with an experimental flag.

```js filename="next.config.js"
module.exports = {
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
};
```

ES Modules support includes backward compatibility to support the previous import behavior of [CommonJS](https://nodejs.org/docs/latest/api/modules.html). In Next.js 12, `esmExternals: true` will become the default. We recommend trying the new option and [leave feedback GitHub Discussions](https://github.com/vercel/next.js/discussions/27876) if you have suggestions for improvement.

[Adopting Rust-based SWC](#adopting-rust-based-swc)
---------------------------------------------------

We're working on integrating [SWC](https://swc.rs/), a super-fast JavaScript and TypeScript compiler written in Rust, that will replace two toolchains used in Next.js: Babel for individual files and Terser for minifying of output bundles.

As part of replacing Babel with SWC, we are porting all custom code transformations Next.js uses to SWC transforms written in Rust to maximize performance. For example, tree shaking unused code inside `getStaticProps`, `getStaticPaths`, and `getServerSideProps`.

As part of replacing Terser, we are working on ensuring the SWC minifier has similar output to Terser while massively improving performance and parallelization of minification.

In early tests, previous code transformations using Babel dropped from **~500ms to ~10ms** and code minification from Terser dropped from **~250ms to ~30ms** using SWC. Overall, this resulted in **twice as fast builds**.

We're excited to announce [DongYoon Kang](https://twitter.com/kdy1dev), the creator of [SWC](https://swc.rs/), and [Maia Teegarden](https://twitter.com/padmaia), contributor to [Parcel](https://parceljs.org/), have joined the Next.js team at Vercel to work on improving both `next dev` and `next build` performance. We will be sharing more results from our SWC adoption in the next release when it's made stable.

[Improved Performance](#improved-performance)
---------------------------------------------

### [Builds & Data Fetching](#builds--data-fetching)

When using `next build` and making numerous HTTP requests, we've **improved performance by ~2x** on average. For example, if you're using `getStaticProps` and `getStaticPaths` to fetch content from a Headless CMS, you should see noticeably faster builds.

Next.js automatically polyfills [node-fetch](/docs/architecture/supported-browsers#polyfills) and now enables [HTTP Keep-Alive](https://en.wikipedia.org/wiki/HTTP_persistent_connection) by default. According to [external benchmarks](https://github.com/Ethan-Arrowood/undici-fetch/blob/main/benchmarks.md#fetch), this should make pre-rendering **~2x faster**.

To disable HTTP Keep-Alive for certain `fetch()` calls, you can add the agent option:

```
import { Agent } from 'https';
const url = '<https://example.com>';
const agent = new Agent({ keepAlive: false });
fetch(url, { agent });
```

To override all `fetch()` calls globally, you can use `next.config.js`:

```js filename="next.config.js"
module.exports = {
  httpAgentOptions: {
    keepAlive: false,
  },
};
```

### [Source Maps](#source-maps)

Including browser source maps in Next.js applications now has about 70% less performance cost and about 67% less memory cost due to optimizations in webpack asset and source map processing.

This only affects Next.js applications with `productionBrowserSourceMaps: true` in their `next.config.js` file. With Next.js 11.1, build times are only increased by 11% when source maps are enabled.

We've also worked with Sentry to [increase performance](https://github.com/vercel/next.js/issues/26588#issuecomment-894329188) of uploading source maps with the [Sentry Next.js plugin](https://docs.sentry.io/platforms/javascript/guides/nextjs/).

[ESLint Improvements](#eslint-improvements)
-------------------------------------------

In Next.js 11, we introduced built-in [ESLint support](/docs/pages/building-your-application/configuring/eslint) through `next lint`. Since its initial release, we've continued adding rules that help developers fix common mistakes in their applications.

### [Default Accessibility Rules](#default-accessibility-rules)

Better accessibility rules are now included by default, preventing issues with ARIA properties that do not match each other and usage of non-existent ARIA attributes. These rules will warn by default.

*   [aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-props.md?rgh-link-date=2021-06-04T02%3A10%3A36Z)
*   [aria-proptypes](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-proptypes.md?rgh-link-date=2021-06-04T02%3A10%3A36Z)
*   [aria-unsupported-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-unsupported-elements.md?rgh-link-date=2021-06-04T02%3A10%3A36Z)
*   [role-has-required-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-has-required-aria-props.md?rgh-link-date=2021-06-04T02%3A10%3A36Z)
*   [role-supports-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-supports-aria-props.md?rgh-link-date=2021-06-04T02%3A10%3A36Z)

Special thanks to community contributor [JeffersonBledsoe](https://github.com/JeffersonBledsoe) for adding these rules.

### [Common Typos](#common-typos)

Linting for common typos in `getStaticProps`, `getStaticPaths`, and `getServerSideProps` will now warn by default. This will help with cases where a small typo causes data fetching to not be called. For example `getstaticprops` or `getStaticprops` will show a warning.

Special thanks to community contributor [kaykdm](https://github.com/kaykdm) for creating this rule.

[`next/image` Improvements](#nextimage-improvements)
----------------------------------------------------

We've been collecting community feedback about `next/image` and the built-in [Image Optimization](/docs/pages/building-your-application/optimizing/images) and are excited to share multiple improvements to performance, developer experience, and user experience.

### [Image Optimization](#image-optimization)

By default, Next.js uses WebAssembly to perform Image Optimization, which offsets the install time of the Next.js package by being significantly smaller and not having a post-install step. With Next.js 11.1, you can optionally install `sharp` which optimizes for uncached image generation time with a trade-off of slower installation.

The WebAssembly-based image optimizer has been updated to support ARM chips like Apple M1 with Node.js 16.

The built-in image optimizer now automatically detects the external image content type based on the content of the response body. This allows Next.js to optimize images hosted on AWS S3 when the response header is `Content-Type: application/octet-stream` .

### [Lazy Generation of Blur Up Placeholders in Development](#lazy-generation-of-blur-up-placeholders-in-development)

During `next dev` [static image imports](/docs/pages/building-your-application/optimizing/images#image-imports) with `placeholder="blur"` are now automatically lazy-generated, improving dev server startup time for applications with many static image imports:

```js filename="pages/index.js"
import Image from 'next/image';
import author from '../public/me.png';
 
export default function Home() {
  return (
    // The placeholder for this image is lazy-generated during development
    <Image src={author} alt="Picture of the author" placeholder="blur" />
  );
}
```

### [Other Image Improvements](#other-image-improvements)

*   **Images which have been previously loaded are no longer lazy-loaded**: When an image has been loaded on a page before, either through client navigation or loading it at another point in the page, Next.js will now automatically skip the lazy loading to avoid a quick flash before showing the image.
*   **Support for custom image loaders with `next export`:** `next/image` now supports using `next export` along with any [third-party image optimization service](/docs/pages/building-your-application/optimizing/images#loader). You can configure `images.loader: "custom"` in `next.config.js` when you intend to provide the [custom `loader` prop](/docs/pages/api-reference/components/image#loader) to `next/image`.
*   **New event for when images complete loading:** Based on user feedback, we’ve added a new property [`onLoadingComplete`](/docs/pages/api-reference/components/image#onloadingcomplete) to `next/image`. This allows for registering a callback that is invoked once the image has fully loaded.
*   **Configuration for default image cache TTL (Time to Live):** You can now configure [`images.minimumCacheTTL`](/docs/pages/building-your-application/optimizing/images#minimumcachettl) in `next.config.js` to change the default cache TTL for optimized images. When possible, we recommend using [static image `import`s](/docs/pages/building-your-application/optimizing/images#image-imports), as those automatically use the maximum TTL because the image content hash is in the URL.

[Community](#community)
-----------------------

Next.js is the result of the combined work of over 1,700 individual developers, industry partners like Google and Facebook, and our core team.

We're proud to see that community continue to grow. Within the last six months alone, we've seen a 50% increase in Next.js downloads on NPM, from 4.1M to 6.2M and the number of homepages using Next.js in the Alexa top 10,000 has grown 50%.

This release was brought to you by the contributions of: @abotsi, @adam-cowley, @afbarbaro, @akellbl4, @AndreVarandas, @andys-github, @angeloashmore, @apuyou, @arturmuller, @AryanBeezadhur, @atcastle, @borekb, @brandonchinn178, @breyed, @brijendravarma, @ctbarna, @ctjlewis, @darshkpatel, @delbaoliveira, @destruc7i0n, @devknoll, @enesakar, @enzoferey, @euess, @fabb, @gnbaron, @hiro0218, @housseindjirdeh, @huozhi, @ijjk, @JacobLey, @jameshoward, @jamsinclair, @janicklas-ralph, @jarvelov, @javivelasco, @jaybekster, @JeffersonBledsoe, @jflayhart, @johnrackles, @jviide, @karlsander, @kasipavankumar, @kaykdm, @kdy1, @kylemh, @leerob, @LetItRock, @lsndr, @lucleray, @m-abdelwahab, @mandarons, @markkaylor, @mastoj, @michalbundyra, @michielvangendt, @Munawwar, @mvasilkov, @NickCrews, @NickKelly1, @noahweingand, @noreiller, @nyedidikeke, @omasher, @orta, @pa-rang, @padmaia, @papaponmx, @PaulvdDool, @petermekhaeil, @phocks, @pranavp10, @qwertyforce, @raon0211, @reod, @rishabhpoddar, @roim, @Ryz0nd, @sa3dany, @sachinraja, @samrobbins85, @schoenwaldnils, @schultzp2020, @sedlukha, @sergioalvz, @shibe23, @smitssjors, @sohamsshah, @sokra, @stefanprobst, @stovmascript, @stuymedova, @styfle, @tanys123, @ThangHuuVu, @theostrahlen, @thomasmarshall, @tigger9flow, @timneutkens, @Timvdv, @tmcgann, @tomchen, @UniqueNL, @Vadorequest, @vitalybaev, @yunger7, @zackdotcomputer, @zeekrey
