---
title: Next.js 13.5
description: >-
  Next.js 13.5 includes 22% faster local server startup, 29% faster HMR (Fast
  Refresh), 40% less memory usage, and more.
author:
  - name: Jimmy Lai
    image: /static/team/jimmy.jpg
  - name: Tim Neutkens
    image: /static/team/tim.jpg
  - name: Tobias Koppers
    image: /static/team/sokra.jpg
date: 2023-09-19T18:00:00.507Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-13-5/twitter-card.png
---

Next.js 13.5 improves local dev performance and reliability with:

*   [**22% faster local server startup:**](#improving-startup-and-fast-refresh-time) Iterate faster with the App & Pages Router
*   [**29% faster HMR (Fast Refresh):**](#improving-startup-and-fast-refresh-time) For faster iterations when saving changes
*   [**40% less memory usage:**](#improving-startup-and-fast-refresh-time) Measured when running `next start`
*   [**Optimized Package Imports:**](#optimized-package-imports) Faster updates when using popular icon and component libraries
*   [**`next/image` Improvements:**](#nextimage-improvements) `<picture>`, art direction, and dark mode support
*   [**And over 438 bugs patched!**](#other-improvements)

Upgrade today and register for [Next.js Conf](https://nextjs.org/conf) on Oct 26:

```
npm i next@latest react@latest react-dom@latest eslint-config-next@latest
```

[Improving startup and Fast Refresh time](#improving-startup-and-fast-refresh-time)
-----------------------------------------------------------------------------------

We're excited to see the continued adoption of the App Router, now **growing 80% MoM** when looking at the top 10 million origins crawled by the [HTTP Archive](https://httparchive.org/).

<Image
  alt="2023 CRuX Dataset for Top 1 Million Mobile Sites on the Web"
  srcLight="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-13-5/crux-light.png"
  srcDark="https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-13-5/crux.png"
  width="1712"
  height="788"
/>

Since Next.js 13.4, our focus has been on improving performance and reliability for App Router applications. Comparing 13.4 to 13.5, we've seen the following improvements on a new application:

*   **22% faster** local server startup
*   **29% faster** HMR (Fast Refresh)
*   **40% less** memory usage

We were able to achieve this performance increase through optimizations like:

*   Doing less work by caching or minimizing slow operations
*   Optimizing expensive file system operations
*   Better incremental tree traversal during compilation
*   Moving unnecessary blocking synchronous calls to be lazy
*   [Automatically configuring large icon libraries](#optimized-package-imports)

Next.js user Lattice reported between [87-92% faster compilation](https://github.com/vercel/next.js/issues/48748#issuecomment-1638742497) in their testing.

While we continue to iterate and improve our current bundler performance, we're also [working on Turbopack (Beta)](https://nextjs.org/docs/app/api-reference/turbopack) in parallel to further increase performance. With 13.5, `next dev --turbo` now supports more features.

[Optimized Package Imports](#optimized-package-imports)
-------------------------------------------------------

We've made an exciting breakthrough to optimize package imports, improving both local dev performance and production cold starts, when using large icon or component libraries or other dependencies that re-export hundreds or thousands of modules.

Previously, we added support for `modularizeImports`, enabling you to configure how imports should resolve when using these libraries. In 13.5, we have superseeded this option with `optimizePackageImports`, which doesn't require you to specify the mapping of imports, but instead will automatically optimize imports for you.

Libraries like `@mui/icons-material`, `@mui/material`, `date-fns`, `lodash`, `lodash-es`, `ramda`, `react-bootstrap`, `@headlessui/react` ,`@heroicons/react` , and `lucide-react` are now automatically optimized, only loading the modules you are actually using, while still giving you the convenience of writing `import` statements with many named exports.

[View the PR](https://github.com/vercel/next.js/pull/54695) or [learn more](/docs/app/api-reference/next-config-js/optimizePackageImports) about `optimizePackageImports` in our documentation.

[`next/image` Improvements](#nextimage-improvements)
----------------------------------------------------

Based on community feedback, we've added a new experimental function `unstable_getImgProps()` to support advanced use cases without using the `<Image>` component directly, including:

*   Working with [`background-image`](https://developer.mozilla.org/docs/Web/CSS/background-image) or [`image-set`](https://developer.mozilla.org/docs/Web/CSS/image/image-set)
*   Working with canvas [`context.drawImage()`](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Using_images) or `new Image()`
*   Working with [`<picture>`](https://developer.mozilla.org/docs/Web/HTML/Element/picture) media queries to implement [Art Direction](https://developer.mozilla.org/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#art_direction) or Light/Dark Mode images

```
import { unstable_getImgProps as getImgProps } from 'next/image';
 
export default function Page() {
  const common = { alt: 'Hero', width: 800, height: 400 };
  const {
    props: { srcSet: dark },
  } = getImgProps({ ...common, src: '/dark.png' });
  const {
    props: { srcSet: light, ...rest },
  } = getImgProps({ ...common, src: '/light.png' });
 
  return (
    <picture>
      <source media="(prefers-color-scheme: dark)" srcSet={dark} />
      <source media="(prefers-color-scheme: light)" srcSet={light} />
      <img {...rest} />
    </picture>
  );
}
```

Additionally, the `placeholder` prop now supports providing arbitrary `data:image/` for placeholder images that shouldn't be blurred ([demo](https://github.com/vercel/next.js/blob/86d2ead1fe612432f7aee73f295a3753bd421ebe/examples/image-component/pages/shimmer.tsx#L30)).

[Learn more](/docs/app/building-your-application/optimizing/images) about `next/image` in our documentation.

[Other Improvements](#other-improvements)
-----------------------------------------

Since `13.4.0`, we've fixed over 438 bugs and made various improvements including:

*   **\[Docs\]** New documentation on [Forms and Mutations](/docs/app/building-your-application/data-fetching/forms-and-mutations)
*   **\[Docs\]** New documentation on [Server](/docs/app/building-your-application/rendering/server-components) and [Client Components](/docs/app/building-your-application/rendering/client-components)
*   **\[Docs\]** New documentation on [Content Security Policy and Nonces](/docs/app/building-your-application/configuring/content-security-policy)
*   **\[Docs\]** New documentation on [Caching](/docs/app/building-your-application/caching) and [Revalidating](/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)
*   **\[Feature\]** `useParams` and `useSearchParams` from `next/navigation` now work in the Pages Router for incremental adoption
*   **\[Feature\]** Support for `scroll: false` on `router.push` / `router.replace`
*   **\[Feature\]** Support for `scroll={false}` on `next/link`
*   **\[Feature\]** HTTPS support for development: `next dev --experimental-https`
*   **\[Feature\]** Added support for `cookies().has()` ([Docs](/docs/app/api-reference/functions/cookies#cookieshasname))
*   **\[Feature\]** Added support for IPv6 hostnames
*   **\[Feature\]** Added support for Yarn PnP with the App Router
*   **\[Feature\]** Added support for `redirect()` in Server Actions
*   **\[Feature\]** Added support for using Bun with creating projects: `bunx create-next-app` ([Docs](/docs/app/api-reference/create-next-app))
*   **\[Feature\]** Draft Mode support for use inside Middleware and the Edge Runtime
*   **\[Feature\]** `cookies()` and `headers()` are now supported inside Middleware
*   **\[Feature\]** Metadata API now supports `summary_large_image` in Twitter cards
*   **\[Feature\]** `RedirectType` is now exported from `next/navigation`
*   **\[Feature\]** Added experimental test mode for Playwright ([Docs](https://github.com/vercel/next.js/blob/canary/packages/next/src/experimental/testmode/playwright/README.md))
*   **\[Improvement\]** Refactored `next start` to handle 1062% more requests/second
*   **\[Improvement\]** Optimized Next.js internals to improve cold starts (up to 40% faster, tested on Vercel)
*   **\[Improvement\]** Better Jest support for the App Router ([PR](https://github.com/vercel/next.js/pull/54891))
*   **\[Improvement\]** Redesigned `next dev` output ([PR](https://github.com/vercel/next.js/pull/54713))
*   **\[Improvement\]** Server Actions now work with fully static routes (including revalidating data with ISR)
*   **\[Improvement\]** Server Actions no longer block navigation between routes
*   **\[Improvement\]** Server Actions can no longer trigger multiple concurrent actions
*   **\[Improvement\]** Server Actions calling `redirect()` now push into the history stack instead of replacing the current entry to ensure the back button works
*   **\[Improvement\]** Server Actions add `no-cache, no-store` `cache-control` header to prevent browser caching
*   **\[Improvement\]** Fixed a bug where Server Actions could be called twice after navigating
*   **\[Improvement\]** Improved support for Emotion CSS with Server Components
*   **\[Improvement\]** Support for `scroll-behavior: smooth` for hash url changes
*   **\[Improvement\]** Added polyfill for [`Array.prototype.at`](http://array.prototype.at) in all browsers
*   **\[Improvement\]** Fixed race condition in `next dev` cache when handling multiple parallel requests
*   **\[Improvement\]** `fetch` output in console now shows requests that skipped cache with `cache: SKIP`
*   **\[Improvement\]** `usePathname` now properly strips `basePath`
*   **\[Improvement\]** `next/image` now properly preloads images in App Router
*   **\[Improvement\]** `not-found` no longer renders the root layout twice
*   **\[Improvement\]** `NextRequest` can now be cloned (i.e `new NextRequest(request)`)
*   **\[Improvement\]** `app/children/page.tsx` now properly works for literal `/children` routes
*   **\[Improvement\]** Content Security Policy now supports `nonce` for preinitialized scripts
*   **\[Improvement\]** Using `redirect` from `next/navigation` now supports `basePath`
*   **\[Improvement\]** Fixed `process.env` not being available during rendering in `output: 'standalone'` mode
*   **\[Improvement\]** Improved error message when using a [Static Export](/docs/app/building-your-application/deploying/static-exports) with unsupported features
*   **\[Improvement\]** Improved recursive readdir implementation (~3x faster)
*   **\[Improvement\]** Fixed `fallback: false` with dynamic route segments previously causing hanging requests
*   **\[Improvement\]** Fixed error where `signal` was passed to revalidate requests, causing them to fail when the request was already aborted
*   **\[Improvement\]** Removed `fetch` polling on 404 page in favor of websocket events, preventing unnecessary reloads when running `next dev`
*   **\[Improvement\]** `performance.measure` no longer can cause a hydration mismatch
*   **\[Improvement\]** Fixed cases where an unexpected full reload could happen editing `pages/_app`
*   **\[Improvement\]** `ImageResponse` now extends `Response` for improved type checking ([PR](https://github.com/vercel/next.js/pull/55187))
*   **\[Improvement\]** `pages` is no longer shown when there is no `pages` output in `next build`
*   **\[Improvement\]** Fixed `skipTrailingSlashRedirect` being ignored in `<Link>`
*   **\[Improvement\]** Fixed duplicated dynamic metadata routes in dev mode

[Contributors](#contributors)
-----------------------------

Next.js is the result of the combined work of over 2,800 individual developers, industry partners like Google and Meta, and our core team at Vercel. Join the community on [GitHub Discussions](https://github.com/vercel/next.js/discussions), [Reddit](https://www.reddit.com/r/nextjs/), and [Discord](/discord).

This release was brought to you by:

*   The **Next.js** team: [Andrew](https://github.com/acdlite), [Balazs](https://github.com/balazsorban44), [Jiachi](https://github.com/huozhi), [Jimmy](https://github.com/feedthejim), [JJ](https://github.com/ijjk), [Josh](https://github.com/gnoff), [Sebastian](https://github.com/sebmarkbage), [Shu](https://github.com/shuding), [Steven](https://github.com/styfle), [Tim](https://github.com/timneutkens), [Wyatt](https://github.com/wyattjoh), and [Zack](https://github.com/ztanner).
*   The **Turbopack** team: [Donny](https://github.com/kdy1), [Justin](https://github.com/jridgewell), [Leah](https://github.com/forsakenharmony), [Maia](https://github.com/padmaia), [OJ](https://github.com/kwonoj), [Tobias](https://github.com/sokra), and [Will](https://github.com/wbinnssmith).

And the contributions of: @opnay, @vinaykulk621, @goguda, @coreyleelarson, @bencmbrook, @cramforce, @williamli, @stefanprobst, @feugy, @Kikobeats, @dvoytenko, @MaxLeiter, @devjiwonchoi, @lacymorrow, @kylemcd, @tibi1220, @iamarpitpatidar, @pythagoras-yamamoto, @alexkirsz, @jsteele-stripe, @tknickman, @gaojude, @janicklas-ralph, @ericfennis, @JohnAdib, @MiLk, @delbaoliveira, @leerob, @LuudJanssen, @lucasconstantino, @davecarlson, @colinhacks, @jantimon, @Banbarashik, @ForsakenHarmony, @arturbien, @gnoff, @hsrvms, @DuCanhGH, @tim-hanssen, @Aryan9592, @rishabhpoddar, @Lantianyou, @joulev, @AkifumiSato, @trigaten, @HurSungYun, @DevLab2425, @SukkaW, @daniel-web-developer, @ky1ejs, @wyattjoh, @ShaunFerris, @syedtaqi95, @Heidar-An, @Jeffrey-Zutt, @Ryan-Dia, @steppefox, @hiro0218, @rjsdnql123, @fgiuliani, @steven-tey, @AntoineBourin, @adamrhunter, @darshanjain-entrepreneur, @s0h311, @djreillo, @dijonmusters, @cassidoo, @anonrig, @gfgabrielfranca, @Bitbbot, @BrennanColberg, @Nick-Mazuk, @thomasballinger, @lucgagan, @nroland013, @SonMooSans, @jenewland1999, @thorwebdev, @jyunhanlin, @Gnadhi, @yagogmaisp, @carlos-menezes, @ryo-manba, @vamcs, @matepapp, @SleeplessOne1917, @ecklf, @karlhorky, @starunaway, @FernandVEYRIER, @Terro216, @anthonyshew, @suhaotian, @simonswiss, @feikerwu, @lubakravche, @masnormen, @bottxiang, @mhmdrioaf, @tyler-lutz, @vincenthongzy, @yigithanyucedag, @doinki, @danger-ahead, @bre30kra69cs, @Yash-Singh1, @krmeda, @bigyanse, @2-NOW, @Mingyu-Song, @morganfeeney, @aralroca, @nickmccurdy, @adamjmcgrath, @angel1254mc, @cxa, @ibash, @mohanraj-r, @kevinmitch14, @iaurg, @steebchen, @Cow258, @charlesbdudley, @tyhopp, @Drblessing, @milovangudelj, @jacobsfletch, @JoshuaKGoldberg, @zignis, @ChristianIvicevic, @mrxbox98, @oliviertassinari, @fsansalvadore, @tvthatsme, @dvakatsiienko, @brunoeduardodev, @sonam-serchan, @vicsantizo, @leodr, @wiscaksono, @hustLer2k, @joshuabaker, @shozibabbas, @omarhoumz, @jamespearson, @tristndev, @AldeonMoriak, @manovotny, @mirismaili, @SuttonJack, @jeremydouglas, @JanCizmar, @mltsy, @WilderDev, @Guilleo03, @Willem-Jaap, @escwxyz, @wiredacorn, @Ethan-Arrowood, @BaffinLee, @greatSumini, @ciruz, @kijikunnn, @DustinsCode, @riqwan, @joostdecock, @nikolovlazar, @Bowens20832, @JohnAlbin, @gidgudgod, @maxproske, @dunklesToast, @yyuemii, @mPaella, @mknichel, @niko20, @mkcy3, @valentinpolitov, @smaeda-ks, @keyz, @Schniz, @koba04, @jiwooIncludeJeong, @ethanmick, @didemkkaslan, @itsmingjie, @v1k1, @thepatrick00, @taylorbryant, @kvnang, @alainkaiser, @simPod, @svarunid, @pauek, @lycuid, @MarkAtOmniux, @darshkpatel, @johnta0, @devagrawal09, @ibrahemid, @JesseKoldewijn, @javivelasco, @05lazy, @alexanderbluhm, @Fonger, @souporserious, @DevEsteves, @sanjaiyan-dev, @g12i, @cesarkohl, @josh, @li-jia-nan, @gabschne, @akd-io, @runjuu, @jocarrd, @nnnnoel, @ferdingler, and @ikryvorotenko
