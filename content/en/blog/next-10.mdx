---
title: Next.js 10
description: >-
  Next.js 10 introduces Built-in Image Optimization, Internationalized Routing,
  Next.js Analytics, React 17 Support, and more!
author:
  - name: Belén Curcio
    image: /static/team/bel.png
  - name: Connor Davis
    image: /static/team/connor.jpg
  - name: JJ Kasper
    image: /static/team/jj.jpg
  - name: Joe Haddad
    image: /static/team/timer.jpg
  - name: Luis Alvarez
    image: /static/team/lfades.jpg
  - name: Shu Uesugi
    image: /static/team/chibicode.jpg
  - name: Steven
    image: /static/team/styfle.png
  - name: Tim Neutkens
    image: /static/team/tim.jpg
date: 2020-10-27T14:00:00.507Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-10/twitter-card.png
---

We are excited to introduce Next.js 10, featuring:

*   **[Built-in Image Component and Automatic Image Optimization](#built-in-image-component-and-automatic-image-optimization)**: Automatically optimize images using the new `next/image` component
*   **[Internationalized Routing](#internationalized-routing)**: Start internationalizing your Next.js applications with built-in primitives
*   **[Next.js Analytics](#nextjs-analytics)**: Measure and act on real user performance
*   **[Next.js Commerce](#nextjs-commerce)**: An all-in-one starter kit for high-performance e-commerce sites
*   **[React 17 Support](#react-17-support)**: The latest React release is fully compatible with Next.js
*   **[`getStaticProps` / `getServerSideProps` Fast Refresh](#getstaticprops--getserversideprops-fast-refresh)**: Automatic reloading of properties when editing data fetching methods
*   **[Fast Refresh for MDX](#fast-refresh-for-mdx)**: When using `@next/mdx`, Fast Refresh is now leveraged to apply changes without full page reloads
*   **[Importing CSS from Third Party React Components](#importing-css-from-third-party-react-components)**: Importing CSS needed for components from npm is now supported
*   **[Automatic Resolving of `href`](#automatic-resolving-of-href)**: The `as` property is no longer needed on `next/link`
*   **[`@next/codemod` CLI](#nextcodemod-cli)**: Allows for easier access to all Next.js codemods
*   **[Blocking Fallback for `getStaticPaths`](#blocking-fallback-for-getstaticpaths)**: Wait on pre-rendering when generating new static pages instead of serving a static fallback page

[Built-in Image Component and Automatic Image Optimization](#built-in-image-component-and-automatic-image-optimization)
-----------------------------------------------------------------------------------------------------------------------

Our goal with Next.js is to improve two things: Developer Experience and User Experience.

This year we've already invested heavily in both Developer Experience and improving performance for all Next.js applications. We focused on reducing the amount of JavaScript the browser has to load.

We introduced over **20 new features** that improve performance and developer experience. At the same time, the JavaScript size of the Next.js core has been **reduced by 16%**.

In January, we introduced a new best-in-class JavaScript code-splitting strategy in collaboration with the Google Chrome team.

For example, Barnebys saw a **23% decrease in application size**, and Sumup had a **70% decrease in their largest Javascript bundle size**. These improvements were achieved **without changing any code** in their Next.js applications.

Companies adopted this new strategy automatically by simply upgrading Next.js to the latest version.

### [Images on the Web](#images-on-the-web)

While our focus on reducing the amount of JavaScript the browser has to load has paid off, the web is not only Javascript: it's also markup and images.

Images take up 50% of the total bytes on web pages.

Images have a big impact on Largest Contentful Paint as they're often the largest visible element when a page is loaded. Largest Contentful Paint is a Core Web Vital that Google will be using in their search ranking [very soon](https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html).

Half of all images are over one megabyte in size, which means they aren't optimized to be displayed on the web.

Nowadays users browse the web using their phones, tablets, and laptops, yet images are still as a one size fits all. For example: sites load a 2000 by 2000 pixel image, but phones are only displaying it as 100 by 100 pixels.

Furthermore, 30% of images on web pages are outside of the initial viewport, meaning the browser loads images that a user does not see until they scroll further down the page.

Images often don't have a `width` and `height` property, causing them to jump around when the page is loaded. This hurts the Cumulative Layout Shift Core Web Vital.

99.7% of images on websites don't use modern image formats like WebP.

In order to use images on web pages in a performant way a lot of aspects have to be considered: size, weight, lazy loading, and modern image formats.

Developers have to set up complicated build tooling to optimize images, however those tools usually don't cover user-submitted images coming from an external data source, making it impossible to optimize all images.

This impossible development task inevitably leads to a frustrating end-user experience.

### [Next.js Image Component](#nextjs-image-component)

We're excited to announce our solution to performant images on the web: the Next.js Image Component and Automatic Image Optimization.

At it's most basic the Next.js Image Component is just a drop-in replacement for the HTML `<img>` element, evolved for the modern web.

```
<img
  src="/profile-picture.jpg"
  width="400"
  height="400"
  alt="Profile Picture"
/>
```

```
import Image from 'next/image';
<Image
  src="/profile-picture.jpg"
  width="400"
  height="400"
  alt="Profile Picture"
/>;
```

The Google Chrome team helped create this React Component to improve page performance by making best practices the default.

When using the `next/image` component, images are automatically lazy-loaded, meaning they're only rendered when the user is close to seeing the image. This prevents loading that 30% of images outside of the initial viewport.

Image dimensions are enforced, allowing browsers to immediately render the space needed for the image instead of having it jump in when loaded, preventing layout shift.

While `width` and `height` on the HTML `<img>` element can cause issues with responsive layouts, **this is not the case when using `next/image`**. When using `next/image` the image is automatically made responsive based on the aspect ratio from the provided `width` and `height`.

Developers can mark images that are in the initial viewport, allowing Next.js to automatically preload these images. Preloading images in the initial viewport has shown improvements to the Largest Contentful Paint by up to 50%.

### [Automatic Image Optimization](#automatic-image-optimization)

Even with these improvements compared to the HTML `<img>` element, there's still a major problem. The 2000 by 2000 pixel image is sent to phones that render a smaller image.

With Next.js 10 we're also solving that problem. The `next/image` component will automatically generate smaller sizes through built-in Image Optimization.

Built-in Image Optimization automatically serves the images in modern image formats like WebP, which is about 30% smaller than JPEG, if the browser supports it. It also allows Next.js to automatically adopt **future** image formats and serve them to browsers that support those formats.

Image Optimization works with any image source. Even if images come from an external data source, like a CMS, they are optimized.

Instead of optimizing images at build time, Next.js 10 optimizes images on-demand, as users request them. Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images.

### [Conclusion](#conclusion)

The new `next/image` component and Automatic Image Optimization are powerful new primitives that will massively improve user experience.

The `next/image` component handles automatic lazy-loading, preloading of critical images, correct sizing across devices, and automatically supports modern formats. These features work with images from any source.

We are looking forward to seeing how much faster your user experience becomes with these new primites.

For more details check out the [Next.js Image Component and Automatic Image Optimization documentation](/docs/pages/building-your-application/optimizing/images).

[Internationalized Routing](#internationalized-routing)
-------------------------------------------------------

This year, several businesses and community members helped our team understand how important internationalization is.

For example, we learned that 72% of consumers are more likely to stay on your site if it's been translated and 55% of consumers said they only buy from e-commerce sites in their native language.

If you plan to go to market in a different country, internationalizing your project is critical for success.

Internationalizing a project has two main pillars: Translations and Routing.

Many React libraries prepare applications to be translated, but most of them expect you to handle routing manually, and generally only work with one rendering strategy.

That's why, as part of Next.js 10, we're releasing built-in support for internationalized routing and language detection.

This built-in support for internationalized routing supports Next.js' hybrid strategy, so you can choose between Static Generation or Server-Rendering on a per-page basis.

Next.js 10 supports the two most common routing strategies: subpath routing and domain routing.

For both strategies, you start by configuring the locales in the Next.js configuration.

```js filename="next.config.js"
module.exports = {
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
  },
};
```

Locales are [UTS Locale Identifiers](https://www.unicode.org/reports/tr35/tr35-59/tr35.html#Identifiers), a standardized format for defining locales.

Generally a Locale Identifier is made up of a language, region, and script separated by a dash: `language-region-script`. The region and script are optional. An example:

*   `en-US` - English as spoken in the United States
*   `nl-NL` - Dutch as spoken in the Netherlands
*   `nl` - Dutch, no specific region

Once your locales are configured you can choose subpath or domain routing.

### [Subpath routing](#subpath-routing)

Subpath routing puts the locale in the url. This allows all languages to live on a single domain.

For example, you can insert the locale in the url like `/nl-nl/blog` and `/en/blog`.

### [Domain routing](#domain-routing)

Domain routing enables you to map a locale to a top level domain. For example [`example.nl`](http://example.nl) can be mapped to the `nl` locale and [`example.com`](http://example.com) can be mapped to the `en` locale.

Domain routing requires some extra configuration to know how to route domains:

```js filename="next.config.js"
module.exports = {
  i18n: {
    locales: ['en', 'nl'],
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en',
      },
      {
        domain: 'example.nl',
        defaultLocale: 'nl',
      },
    ],
  },
};
```

### [Language Detection](#language-detection)

Next.js 10 has built-in language detection on the `/` route based on the `Accept-Language` header, which all modern browsers support. The configured locales will be matches against the `Accept-Language` header and then redirect according to the configured strategy.

### [Search Engine Optimization](#search-engine-optimization)

Since Next.js knows the language of the page visited by the user, it will automatically add the lang attribute to the `<html>` tag.

Next.js doesn't know about variants of a page so it's up to you to add the `hreflang` meta tags using `next/head`. You can learn more about `hreflang` in the [Google Webmasters documentation](https://support.google.com/webmasters/answer/189077).

### [The future of internationalization in Next.js](#the-future-of-internationalization-in-nextjs)

Internationalized Routing is the first in a series of features that will make internationalizing and localizing your project easier. Internationalized Routing allows for integrating with the majority of React internationalization libraries.

To learn more about Internationalized Routing check out the [Internationalized Routing documentation](/docs/pages/building-your-application/routing/internationalization).

[Next.js Speed Insights](#nextjs-speed-insights)
------------------------------------------------

At Vercel, we know that you can't fix what you can't measure.

Your visitors have grown increasingly sensitive to site performance. More than 50% of them will abandon your website [if it takes more than 3 seconds to load](https://www.blog.google/products/admanager/the-need-for-mobile-speed/). If you're in e-commerce, many have found that improving your load time by 1/10th of a second resulted in a [1% increase in conversion](http://robotics.stanford.edu/~ronnyk/2007IEEEComputerOnlineExperiments.pdf).

Because of how critical performance is to your success, we're proud to release Next.js Speed Insights. The solution for tracking real-world performance metrics and feeding those insights back into your development workflow.

With Next.js Speed Insights:

Instead of measuring once, **you will now measure continuously.**

Instead of measuring on your development device, **measurements will come from the actual devices that your visitors are using.**

**Next.js Speed Insights is about focusing on the entire picture, deeply understanding your audience, and how your application performs for your users.**

We're so adamant about collecting real data because the causes of poor performance aren't always the most obvious. Performance regressions can result from a variety of places— third-party scripts and stylesheets, or first-party fonts, images, and videos that are oversized or slow.

### [Core Web Vitals](#core-web-vitals)

Google, in conjunction with the [Web Performance Working Group](https://www.w3.org/webperf/), have established the set of metrics to accurately measure how users experience the performance of your website: aptly named, Web Vitals. Web Vitals are metrics that track the perceived loading speed, responsiveness, and visual stability of your website—all three essential for website's overall health!

Perceived loading speed can be measured by Largest Contentful Paint, or when all the page's content has been displayed. For example, when I open a link to buy a pair sneakers—the amount of time that passes before I see my sneakers, their price, and the add to cart button is LCP.

Page responsiveness can be measured by First Input Delay, which measures how long your users must wait to see the reaction of their first interaction with the page. For example, the amount of time between me clicking Add to Cart and the number of items in my cart incrementing is FID.

Finally, visual stability can be measured by Cumulative Layout Shift, or how much elements move after being displayed to the user. For example, we've all experienced the frustration of trying to tap a button that moved because an image loaded late—that's layout shift.

The continuous measurement and conformance around these Web Vitals for your real users is crucial. It's the only way to truly know how your site performs for your users. The performance of your site can vary dramatically based on a user's device and their network conditions, or how they're interacting with the page. Sites that load personalized content or ads may also experience wildly different performance from user to user.

**An emulated test cannot capture these important signals.**

Next.js Speed Insights allows you to capture real-world insights, instead of synthetic benchmarks. It enables a continuous stream of measurement instead of relying on occasional testing, ensuring it's part of your developer workflow.

Next.js Speed Insights allows you to capture **real-world insights**, instead of synthetic benchmarks. It enables a **continuous stream** of measurement instead of relying on occasional testing, **ensuring it's part of your developer workflow**.

Visit [nextjs.org/analytics](http://nextjs.org/analytics) to learn how enable it in your application right now.

[Next.js Commerce](#nextjs-commerce)
------------------------------------

Ecommerce is one of the most important uses of the web. The new Next.js 10 features are powerful new tools for ecommerce.

That's why today, in collaboration with BigCommerce, we released Next.js Commerce, the all-in-one React starter kit for ecommerce sites. With a few clicks, Next.js developers can clone, deploy, and fully customize it. Start right now at [nextjs.org/commerce.](https://nextjs.org/commerce)

[React 17 Support](#react-17-support)
-------------------------------------

React 17 had no breaking changes for Next.js, however there were some maintenance changes required, for example updating the peer dependencies. The [new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) is automatically enabled when React 17 is used, no configuration changes are needed.

All you have to do to start using React 17 is upgrade Next.js and React:

```bash filename="Terminal"
npm install next@latest react@latest react-dom@latest
```

[`getStaticProps` / `getServerSideProps` Fast Refresh](#getstaticprops--getserversideprops-fast-refresh)
--------------------------------------------------------------------------------------------------------

When making edits to your `getStaticProps` and `getServerSideProps` functions Next.js will now automatically re-run the function and apply the new data. This allows you to iterate quicker without having to refresh the page.

To learn more about `getStaticProps` and `getServerSideProps` you can read the [Data Fetching documentation](/docs/pages/building-your-application/data-fetching).

[Fast Refresh for MDX](#fast-refresh-for-mdx)
---------------------------------------------

When using Next.js with MDX through `@next/mdx` changing the MDX contents will now leverage Fast Refresh, making sure the browser does not have to reload the page on edits.

The [`@next/mdx` documentation](https://github.com/vercel/next.js/tree/canary/packages/next-mdx) guides you through how to set up MDX with Next.js.

[Importing CSS from Third Party React Components](#importing-css-from-third-party-react-components)
---------------------------------------------------------------------------------------------------

You can now import third party css inside of React components. This allows for code-splitting CSS only meant for a single component. For example you can now use the `react-datepicker` library without needing to import the CSS in `_app.js`:

```js filename="components/MyComponent.js"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
 
function MyComponent() {}
```

You can refer to the [built-in CSS support documentation](/docs/pages/building-your-application/styling) to learn more about how Next.js handles CSS imports.

[Automatic Resolving of `href`](#automatic-resolving-of-href)
-------------------------------------------------------------

If you've used dynamic routes before, you've probably ran into a case before where you had to provide both a `href` and `as` property to `next/link`. It would look something like this:

```
<Link href="/categories/[slug]" as="/categories/books" />
```

This allowed Next.js to interpolate the href for the dynamic parameters, however, it caused friction when developers forgot to add the `as` or added the `as` in `href` causing the page transitions to not use client-side routing.

We set out to solve this friction for developers a few months ago, with the main goal to improve developer experience and end user experience. We incrementally worked towards a solution that allows for `href` to be automatically resolved.

We're excited to announce that as part of Next.js 10 you no longer have to use the `as` property for the majority of use-cases. Removing friction from developers and improving the end user experience.

This change is fully backwards compatible, if you currently use both `href` and `as` the existing behavior is preserved.

In order to adopt the automatic `href` resolving all you have to do is change your usage of `next/link` to only use `href` holding the value that you previously had in `as` property.

```
<Link href="/categories/books" />
```

To learn more about `next/link` and client-side routing you can refer to the [`next/link` documentation](/docs/pages/api-reference/components/link).

[`@next/codemod` CLI](#nextcodemod-cli)
---------------------------------------

We're committed to making sure Next.js upgrades are as smooth as possible through extensive backwards compatibility. This commitment starts with very sparingly deprecating features while introducing new and better solutions in their place. On top of this commitment we have extensive integration tests for all Next.js features, including tests that replicate local development.

When a feature in Next.js is deprecate and requires large codebase changes our team creates a codemod for it. A codemod is an automated code transformation that you can run over your project to update source code.

For example: We released a codemod for updating arrow functions and anonymous functions to named functions. [This transformation](/docs/pages/building-your-application/upgrading/codemods#name-default-component) is needed because otherwise React Fast Refresh does not detect the function as being a valid React Component. Similarly the React hooks eslint rules would not pick up the function as a React component.

With Next.js 10 we're releasing a new Next.js codemods CLI tool that allows you run a single command to update your application: `npx @next/codemod <transform> <path>`.

To learn more about the codemods you can check the [Next.js Codemods documentation](/docs/pages/building-your-application/upgrading/codemods).

[Blocking Fallback for `getStaticPaths`](#blocking-fallback-for-getstaticpaths)
-------------------------------------------------------------------------------

In Next.js 9.3 we introduced `getStaticProps` and `getStaticPaths` along with the ability to return a `fallback` property in `getStaticPaths`. The `fallback` property allows for generating additional static pages without needing a full rebuild, serving a static HTML file initially that is then replaced by the fully rendered content on subsequent requests. The past few months we've received a lot of feedback from companies that wanted a similar but slightly different behavior: a blocking pre-render when a user requests the page for the first time. After that initial render the page would be re-used for subsequent requests.

With Next.js 10 we're solving this case.

We're excited to announce the new `fallback: 'blocking'` mode for `getStaticPaths` that enables the blocking behavior where no static fallback is sent to the browser. Instead the initial request is waited on for pre-rendering.

```js filename="pages/posts/[id].js"
export function getStaticPaths() {
  return {
    // enables blocking mode for the fallback behavior
    fallback: 'blocking',
  };
}
```

To learn more about `fallback` behavior for incrementally generating additional static pages you can refer to the [`fallback` documentation](/docs/pages/building-your-application/data-fetching#fallback-true).

[Redirect and notFound Support for `getStaticProps` / `getServerSideProps`](#redirect-and-notfound-support-for-getstaticprops--getserversideprops)
--------------------------------------------------------------------------------------------------------------------------------------------------

Since the introduction of `getStaticProps` and `getServerSideProps` we have noticed cases where users are needing to return redirects and 404 responses. To help streamline these cases we now allow returning two new fields from `getStaticProps` and `getServerSideProps`: `notFound` and `redirect`.

### [`notFound` Support](#notfound-support)

When returning the `notFound` field with `true` the default 404 page will be returned with a status code of `404`. This allows you to avoid generating additional pages with SSG and having to handle rendering the 404 page manually.

```js filename="pages/posts/[id].js"
export function getStaticProps() {
  return {
    // returns the default 404 page with a status code of 404
    notFound: true,
  };
}
```

### [`redirect` Support](#redirect-support)

Redirects can now be returned which contains the `destination` and whether the redirect should be permanent or not e.g. `permanent: true`. An optional `statusCode` can also be returned in place of the `permanent` field for cases where you need to use a specific status over the defaults.

```js filename="pages/posts/[id].js"
export function getStaticProps() {
  return {
    // returns a redirect to an internal page `/another-page`
    redirect: {
      destination: '/another-page',
      permanent: false,
    },
  };
}
```

```js filename="pages/posts/[id].js"
export function getServerSideProps() {
  return {
    // returns a redirect to an external domain `example.com`
    redirect: {
      destination: 'https://example.com',
      permanent: false,
    },
  };
}
```

[Conclusion](#conclusion-1)
---------------------------

We're excited to see the continued growth in Next.js adoption:

*   We have had over **1,300** independent contributors, with over **120** new contributors since the 9.5 release
*   On GitHub, the project has been starred over **54,800** times.

Join the Next.js community on [GitHub Discussions.](https://github.com/vercel/next.js/discussions) Discussions is a community space that allows you to connect with other Next.js users and freely ask questions or share your work.

### [Credits](#credits)

We are thankful to our community, including all the external feedback and contributions that helped shape this release.

This release was brought to you by the contributions of: @ijjk, @adebiyial, @elliottsj, @saintmalik, @HaNdTriX, @prateekbh, @amirsaeed671, @paambaati, @imagentleman, @gregrickaby, @Janpot, @atcastle, @Kirkhammetz, @remorses, @davidsonsns, @kmkzt, @slawekkolodziej, @Timer, @styfle, @timneutkens, @ykzts, @ashconnell, @orYoffe, @lfades, @justinwhall, @fbaiodias, @ludofischer, @felipeguilhermefs, @gr-qft, @TasukuUno, @YichiZ, @weichienhung, @seosmmbusiness, @HsuTing, @gsimone, @peduarte, @ztanner, @neighborhood999, @chibicode, @merceyz, @opudalo, @lunchboxav, @mohsen1, @akd-io, @justman00, @helloworld, @devknoll, @borekb, @ArthurMaverick, @sakito21, @TrySound, @omBratteng, @svenheden, @hallaji, @kettanaito, @vvo, @m-lautenbach, @jensmeindertsma, @Zeko369, @longlho, @stefanprobst, @laugharn, @sdornan, @daneroo, @mohd-akram, @austingmhuang, @sphilee, @devinekadeni, @Bacher, @nghiepit, @tomasdisk, @leader22, @paulogdm, @284km, @belgattitude, @geritol, @stigkj, @sampoder, @samrobbins85, @Pitasi, @digitalPlayer1125, @timfee, @plug-n-play, @philihp, @leerob, @dylanjha, @Kerumen, @rdimaio, @jorisw, @zerbinidamata, @jamesgeorge007, @Jashnm, and @futantan!
