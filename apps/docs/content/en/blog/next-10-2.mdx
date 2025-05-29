---
title: Next.js 10.2
description: >-
  Next.js 10.2 introduces performance improvements (faster builds, refresh, and
  startup), improved accessibility, Automatic Webfont Optimization, and more!
author:
  - name: Connor Davis
    image: /static/team/connor.jpg
  - name: JJ Kasper
    image: /static/team/jj.jpg
  - name: Shu Ding
    image: /static/team/shu.jpg
  - name: Tim Neutkens
    image: /static/team/tim.jpg
  - name: Tobias Koppers
    image: /static/team/sokra.jpg
date: 2021-04-28T14:00:00.507Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-10-2/twitter-card.png
---

We are excited to introduce Next.js 10.2, featuring:

*   **[Faster Builds](#webpack-5)**: Up to ~60% faster subsequent builds with caching.
*   **[Faster Refresh](#webpack-5)**: 100ms to 200ms faster refresh.
*   **[Faster Startup](#improved-startup-performance)**: Up to ~24% faster `next dev`.
*   **[Improved Accessibility](#accessibility-improvements)**: Route changes are now announced by screen readers.
*   **[More Flexible Redirects and Rewrites](#routing-based-on-headers-and-query-string-parameters)**: Match any header, cookie, or query string.
*   **[Automatic Webfont Optimization](#automatic-webfont-optimization)**: Improved performance by inlining font CSS.

Update today by running `npm i next@latest`.

[Webpack 5](#webpack-5)
-----------------------

With Next.js 10.1, we improved [Fast Refresh](/blog/next-10-1#3x-faster-refresh) and [decreased installation times](/blog/next-10-1#improved-installation-time). We're excited to share additional performance improvements enabled through webpack 5.

Today, we're expanding the rollout of webpack 5 to Next.js applications. Starting from Next.js 10.2, all applications that do not use a custom webpack configuration in their `next.config.js` will automatically use webpack 5.

When webpack 5 is enabled, you'll automatically get new features and improvements like:

*   **Improved Disk Caching:** Disk caching allows the compiler to persist work between `next build` runs. Only changed files will be recompiled, leading to increased performance. Vercel customer [Scale](http://scale.com/) observed a **63% speedup** on subsequent builds.
*   **Improved Fast Refresh:** Next.js now prioritizes Fast Refresh related compilation, resulting in a 100ms to 200ms faster refresh every time.
*   **Improved Long Term Caching of Assets:** Output between multiple `next build` runs is now deterministic, improving browser caching of JavaScript assets in production. Hashes are kept the same when the content of a page does not change.
*   **Improved Tree Shaking:** [CommonJS](https://en.wikipedia.org/wiki/CommonJS) modules can now be [tree shaken](https://webpack.js.org/guides/tree-shaking/) to automatically remove unused code. Static analysis is used to determine side-effect free modules. `export *` tracks more information and no longer flags the default export as used. Inner-module tree-shaking is also enabled, allowing for imports that are only used in an unused export to be tree shaken.

We've worked hard to ensure a smooth transition from webpack 4 to 5. The Next.js core test suite with over **3,400 integration tests** runs on every pull request with webpack 5 support enabled.

If your application has a custom webpack configuration, we recommend following [the documentation to enable webpack 5](/docs/messages/webpack5). After upgrading to webpack 5 in Next.js, please [share any feedback with us](https://github.com/vercel/next.js/discussions/23498).

[Improved Startup Performance](#improved-startup-performance)
-------------------------------------------------------------

We've improved the Next.js CLI initialization making boot time for `next dev` up to **24% faster** after the first run. For example, `next dev` for [vercel.com](https://vercel.com) went from 3.3s to 2.5s.

We're on a mission to make your local development experience real-time ([20x faster](https://twitter.com/shuding_/status/1378086219708473344)). Stay tuned for additional startup performance improvements in upcoming releases.

[Accessibility Improvements](#accessibility-improvements)
---------------------------------------------------------

Route changes are now announced to screen readers and other assistive technology by default.

The example below shows the heading "Real Data. Real Performance" being announced by [macOS VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html) on client-side navigation. The page name is found by first looking for an `<h1>` element, falling back to `document.title`, and lastly to the pathname.

Route changes are now automatically announced.

Thank you to [Kyle Boss](https://twitter.com/likeakyleboss) and [Kitty Giraudel](https://twitter.com/KittyGiraudel) for helping land this feature.

[Routing based on Headers and Query String Parameters](#routing-based-on-headers-and-query-string-parameters)
-------------------------------------------------------------------------------------------------------------

Next.js [rewrites](/docs/pages/api-reference/next-config-js/rewrites), [redirects](/docs/pages/api-reference/next-config-js/redirects), and [headers](/docs/pages/api-reference/next-config-js/headers) now support a new `has` property allowing you to match against incoming headers, cookies, and query strings.

Vercel customer [Joyn](https://www.joyn.de/) uses `has` to optimize content for both discoverability and performance. For example, you could redirect old browsers based on the [User-Agent](https://developer.mozilla.org/docs/Web/HTTP/Headers/User-Agent):

```js filename="next.config.js"
module.exports = {
  async redirects() {
    return [
      {
        source: '/:path((?!old-browser$).*)',
        has: [
          {
            type: 'header',
            key: 'User-Agent',
            value:
              'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; Microsoft; Lumia 950)',
          },
        ],
        destination: '/old-browser',
        permanent: false,
      },
    ];
  },
};
```

Another example could be redirecting users based on their location:

```js filename="next.config.js"
module.exports = {
  async redirects() {
    return [
      {
        source: '/:path((?!uk/).*)',
        has: [
          {
            type: 'header',
            key: 'x-vercel-ip-country',
            value: 'GB',
          },
        ],
        destination: '/uk/:path*',
        permanent: true,
      },
    ];
  },
};
```

Finally, you could redirect if a user is already logged in:

```js filename="next.config.js"
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'header',
            key: 'x-authorized',
            value: '(?<authorized>yes|true)',
          },
        ],
        destination: '/dashboard?authorized=:authorized',
        permanent: false,
      },
    ];
  },
};
```

To learn more and explore additional examples, check out [the redirects documentation](/docs/pages/api-reference/next-config-js/redirects#header-cookie-and-query-matching).

[Automatic Webfont Optimization](#automatic-webfont-optimization)
-----------------------------------------------------------------

[82% of web pages for desktop](https://almanac.httparchive.org/en/2020/fonts) use web fonts. Custom fonts are important for the branding, design, and cross-browser/device consistency of your site. However, using a web font should not come at the cost of performance.

Next.js now supports Automatic Webfont Optimization when using web fonts. By default, Next.js will automatically inline font CSS at build time, eliminating an extra round trip to fetch font declarations. This results in improvements to First Contentful Paint (FCP) and Largest Contentful Paint (LCP). For example:

```
// Before
<link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet" />
 
// After
<style data-href="https://fonts.googleapis.com/css2?family=Inter">
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    <!-- ... -->
  }
</style>
```

Automatic Webfont Optimization currently supports Google Fonts and we're working to expand support further to other font providers. We're also planning to add control over [loading strategies](https://github.com/vercel/next.js/issues/21555) and `font-display` values. By optimizing fonts by default, we're able to help developers ship faster websites and improve their [Core Web Vitals](https://vercel.com/blog/core-web-vitals) without any additional effort.

Thank you our partners at Google and [Janicklas Ralph](https://github.com/janicklas-ralph) for helping land this feature.

[Growing the Team](#growing-the-team)
-------------------------------------

We're excited to announce Tobias Koppers, the author of [webpack](https://webpack.js.org/), has [joined the Next.js team](https://x.com/wSokra/status/1381860800533528576) at Vercel.

[Community](#community)
-----------------------

We are thankful to our community, including all the external feedback and contributions that helped shape this release.

This release was brought to you by the contributions of: @rpxs, @lemarier, @RayhanADev, @janicklas-ralph, @devknoll, @felipeptcho, @rishabhpoddar, @sokra, @m-leon, @turadg, @PierreBerger, @divmain, @dominikwilkowski, @pranavp10, @ijjk, @santidalmasso, @HaNdTriX, @jamesgeorge007, @garmeeh, @leerob, @shuding, @feute, @timneutkens, @alexvilchis, @Timer, @malixsys, @sahilrajput03, @marcvangend, @steven-tey, @julienben, @umarsenpai, @Mzaien, @merceyz, @AntelaBrais, @SystemDisc, @M1ck0, @jbmoelker, @jaisharx, @amannn, @vkarpov15, @gaelhameon, @4ortytwo, @Simply007, @styxlab, @xCloudzx, @wodCZ, @emmanuelgautier, @leosuncin, @ludder, @geritol, @vassbence, @vvo, @portenez, @arshad, @tarunama, @flybayer, @Hanaffi, @SokratisVidros, @chibicode, @kylemarshall18, and @jarrodwatts.
