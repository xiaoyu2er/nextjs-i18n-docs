---
title: Next.js 11
description: >-
  Next.js 11 continues our mission to create the best developer experience with
  a new conformance system and performance improvements.
author:
  - name: JJ Kasper
    image: /static/team/jj.jpg
  - name: Shu Ding
    image: /static/team/shu.jpg
  - name: Tim Neutkens
    image: /static/team/tim.jpg
  - name: Tobias Koppers
    image: /static/team/sokra.jpg
date: 2021-06-15T16:00:00.507Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-11/twitter-card.png
---

As we announced at [Next.js Conf](/conf), our mission to create the best developer experience continues with Next.js 11, featuring:

*   [**Conformance**](#conformance): A system that provides carefully crafted solutions to support optimal UX.
*   [**Improved Performance**](#improved-performance): Further optimizations to improve cold startup time so you can start coding faster.
*   [**`next/script`**](#script-optimization): Automatically prioritize loading of third-party scripts to improve performance.
*   [**`next/image`**](#image-improvements): Reduce layout shift and create a smoother visual experience with automatic size detection and support for blur-up placeholders.
*   [**Webpack 5**](#webpack-5): Now enabled by default for all Next.js applications, bringing [these benefits](/blog/next-10-2#webpack-5) to all Next.js developers.
*   [**Create React App Migration (Experimental)**](#cra-migration): Automatically convert Create React App to be Next.js compatible.
*   [**Next.js Live (Preview Release)**](#nextjs-live-preview-release): Code in the browser, with your team, in real time.

Update today by running `npm i next@latest react@latest react-dom@latest` and reference the [migration guide](#upgrade-guide) below.

[Conformance](#conformance)
---------------------------

Even with great tools and automatic optimizations in frameworks, site owners and app developers are often asked to become experts in UX quality topics, like performance, security, and accessibility. As features are added and teams scale, developers need to think differently.

Through their work building large-scale web applications like Search and Maps, Google has proven that frameworks can play a crucial role in maintaining quality as teams and applications scale. By leveraging a system of strong defaults and safeguards, they empower developers to focus more on features and products.

Today, Google's Web Platforms team has begun open-sourcing their system with **Conformance for Next.js**.

[**Conformance**](http://web.dev/conformance) is a system that provides carefully crafted solutions and rules to support optimal loading and Core Web Vitals, with further additions coming to support other quality aspects like security and accessibility. These solutions free your team from memorizing all the latest rules for optimal loading performance, while still giving you the flexibility to make the right choices for your applications.

Along with many foundational optimizations backed by performance research, **Next.js 11 now supports [ESLint](https://eslint.org/)** out of the box to make it easier to catch framework-specific issues during development and set guidelines for your team to ensure best practices even as you scale.

To get started with ESLint, run `npx next lint` after upgrading to Next.js 11. The ESLint integration works for new and existing Next.js applications, providing a new set of rules to help developers build better applications.

```bash filename="Terminal"
$ npx next lint
We created the .eslintrc file for you and included the base Next.js ESLint configuration.
 
./pages/about.js
7:9  Warning: Do not include stylesheets manually. See: https://nextjs.org/docs/messages/no-css-tags.  @next/next/no-css-tags
10:7  Warning: External synchronous scripts are forbidden. See: https://nextjs.org/docs/messages/no-sync-scripts.  @next/next/no-sync-scripts
 
./pages/index.js
4:10  Warning: Do not use the HTML <a> tag to navigate to /about/. Use Link from 'next/link' instead. See: https://nextjs.org/docs/messages/no-html-link-for-pages.  @next/next/no-html-link-for-pages
 
Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/pages/building-your-application/configuring/eslint#disabling-rules
 
✨  Done in 1.94s.
```

Learn more about Conformance for frameworks on [Google's blog](http://web.dev/aurora).

[Improved Performance](#improved-performance)
---------------------------------------------

Since Next.js 10, we've been obsessed with further improving the developer experience of Next.js. In [10.1](/blog/next-10-1) and [10.2](/blog/next-10-2) we improved startup time by **up to 24%** and shaved off another **40% of processing time** for changes through React Fast Refresh. You've been getting these amazing speed improvements just by keeping Next.js updated.

Next.js 11 includes another optimization to Babel to further reduce the startup time. We've created a brand new implementation of the Babel loader for webpack, optimizing loading and adding an in-memory config caching layer. In practice, this means **no change for developers** but will ultimately mean a faster development experience.

[Script Optimization](#script-optimization)
-------------------------------------------

The new Next.js Script Component is a foundational optimization that enables developers to set the loading priority of third-party scripts to save developer time and improve loading performance.

Websites often need third parties for things like analytics, ads, customer support widgets, and consent management. However, these scripts tend to be heavy on loading performance and can drag down the user experience. Developers often struggle to decide where to place them in an application for optimal loading.

With `next/script`, you can define the `strategy` property and Next.js will automatically prioritize them to improve loading performance:

*   `beforeInteractive`: For critical scripts that need to be fetched and executed **before** the page is interactive, such as bot detection and consent management. These scripts are injected into the initial HTML from the server and run before self-bundled JavaScript is executed.
*   `afterInteractive` (**default**): For scripts that can fetch and execute **after** the page is interactive, such as tag managers and analytics. These scripts are injected on the client-side and will run after hydration.
*   `lazyOnload` For scripts that can wait to load during idle time, such as chat support and social media widgets.

```
<Script
  src={url}
  strategy="beforeInteractive" // lazyOnload, afterInteractive
/>
```

You can also run code after loading. For example, you can wait to execute code until after a user has answered consent:

```
<Script
  src={url} // consent mangagement
  strategy="beforeInteractive"
  onLoad={() => {
    // If loaded successfully, then you can load other scripts in sequence
  }}
/>
```

We've also changed the default script loading experience in Next.js 11 from preloading and `async` to `defer`. Third-party scripts often compete with higher priority resources, such as CSS, fonts, and images. Maintaining the proper sequencing relative to these resources, as well as other scripts, is an undue burden on developers.

By providing a Script Component with a default loading strategy of `afterInteractive`, developers now have better defaults for optimal performance, with the ability to still choose `beforeInteractive` as needed.

To learn more about the technical choices behind switching the default, check out the [RFC](https://github.com/vercel/next.js/discussions/24938) and [challenges with preload](https://docs.google.com/document/u/0/d/1ZEi-XXhpajrnq8oqs5SiW-CXR3jMc20jWIzN5QRy1QA/mobilebasic#) from the Google Chrome team.

[Image Improvements](#image-improvements)
-----------------------------------------

We're excited to share two of our community's top requested features for the `next/image` component, reducing [Cumulative Layout Shift](https://vercel.com/blog/core-web-vitals#cumulative-layout-shift) and creating a smoother visual experience.

### [Automatic Size Detection (Local Images)](#automatic-size-detection-local-images)

Use the `import` keyword for the image `src` to automatically define `width` and `height` for static images.

For example, using the [built-in Image component](/docs/pages/building-your-application/optimizing/images) is now even easier:

```js filename="pages/index.js"
import Image from 'next/image';
import author from '../public/me.png';
 
export default function Home() {
  return (
    // When importing the image as the source, you
    // don't need to define `width` and `height`.
    <Image src={author} alt="Picture of the author" />
  );
}
```

### [Image Placeholders](#image-placeholders)

`next/image` now supports blur-up placeholders to ease the transition from blank space to image and reduce perceived loading time, particularly for users with slower internet connections.

To use blurred placeholders, add `placeholder="blur"` to your image.

```
<Image src={author} alt="Picture of the author" placeholder="blur" />
```

Next.js also supports blurring dynamic images by allowing you to provide a custom `blurDataURL`, which is provided by your backend. For example, you can generate a [blurha.sh](http://blurha.sh) on the server.

```
<Image
  src="https://nextjs.org/static/blog/next-11/learn.png"
  blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
  alt="Picture of the author"
  placeholder="blur"
/>
```

[Webpack 5](#webpack-5)
-----------------------

With Next.js 10.2, we expanded the rollout of webpack 5 to all applications without a custom webpack configuration in their `next.config.js`. Today, we're making **webpack 5 the default for all Next.js applications**, which will provide a [variety of features and improvements](/blog/next-10-2#webpack-5)**.**

We've worked closely with the community to ensure a smooth transition to webpack 5, over 3,400 existing Next.js integration tests run on every pull request with webpack 5 enabled.

If your application has a custom webpack configuration, we recommend following [the upgrade documentation for webpack 5](/docs/messages/webpack5). If you run into any issues, [please share feedback with us](https://github.com/vercel/next.js/discussions/23498).

[CRA Migration](#cra-migration)
-------------------------------

Over the past six months, we've seen an increase in applications [migrating from Create React App](/docs/app/building-your-application/upgrading/from-create-react-app) to Next.js to leverage many of the developer experience and end-user performance improvements Next.js provides.

To help developers convert their applications to Next.js, we've introduced a new tool to `@next/codemod` that automatically converts Create React App applications to be Next.js compatible.

The transform automatically adds a `pages/` directory and moves CSS imports to the right location. It'll also enable a Create React App compatibility mode in Next.js that ensures some patterns used in Create React App work with Next.js.

By leveraging the new transform, you can [incrementally adopt Next.js](/docs/migrating/incremental-adoption) while maintaining the functionality of the existing Create React App application.

To get started migrating your Create React App project use the following command:

```bash filename="Terminal"
npx @next/codemod cra-to-next
```

This feature is currently experimental, please share any feedback [in this discussion](https://github.com/vercel/next.js/discussions/25858).

[Next.js Live (Preview Release)](#nextjs-live-preview-release)
--------------------------------------------------------------

Next.js Live is a continuation of our mission to make development not only **faster** and more enjoyable, but crucially **more inclusive of the entire organization**. By leveraging cutting-edge technology like ServiceWorker, WebAssembly, and ES Modules, Next.js Live puts the entire development process in the web browser. This opens up possibilities like collaborating and sharing instantaneously with a URL, **without a build step**. For developers, this means a faster feedback loop, less time waiting for builds, and real-time peer programming and editing within the browser.

To learn more about Next.js Live and how you can pair it with Vercel's real-time collaboration engine, see the [Next.js Live](/live) section of the documentation.

[Upgrade Guide](#upgrade-guide)
-------------------------------

Next.js 11 introduces a few breaking changes which should not affect the majority of users. These legacy features have been maintained in a backward-compatible way for years, some as far back as `v4.0`.

These features were removed to decrease the bundle size and ensure the codebase is maintainable for the future. To learn more about upgrading from version 10 to 11, please see the [upgrade guide](https://github.com/vercel/next.js/blob/canary/docs/pages/building-your-application/upgrading.md).

With Next.js 11, the minimum React version has been updated to `17.0.2`. Please see the [React 17 blog post](https://reactjs.org/blog/2020/08/10/react-v17-rc.html) for more details. We are also working closely with the React team as they introduce [React 18](https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html). Next.js 11 uses `createRoot` when React 18 alpha is being used.

[Community](#community)
-----------------------

Next.js is the result of the combined work of over 1,600 individual developers, industry partners like Google and Facebook, and our core team.

We're proud to see that community continue to grow. Within the last six months alone, we've seen a 50% increase in Next.js downloads on NPM, from 4.1M to 6.2M and the number of homepages using Next.js in the Alexa top 10,000 has grown 50%.

This release was brought to you by the contributions of: @kahy9, @ljosberinn, @leerob, @kettanaito, @thomasboyt, @hussainanjar, @styfle, @devknoll, @LiuuY, @timneutkens, @housseindjirdeh, @PepijnSenders, @janicklas-ralph, @payapula, @tmtk75, @ijjk, @hiramhuang, @daku10, @atcastle, @matamatanot, @pelhage, @Lukazovic, @Mzaien, @gleich, @geshan, @Munawwar, @ykzts, @vitalybaev, @mottox2, @vvo, @chrisneven, @turneand, @d3lm, @akellbl4, @sokra, @johnjago, @alicanyildirim, @sanathusk, @valse, @samrobbins85, @SamVerschueren, @ademilter, @ctjlewis, @brandondc741, @eltociear, @martpie, @kasipavankumar, @joecohens, @alexbrazier, @jamsinclair, @fabianishere, @rokinsky, @msidqi, @rubensdemelo, @Simply007, @bradlc, @SinimaWath, @rgabs, @darshkpatel, @sumanthratna, @shuding, @prophet1996, @Joonpark13, @tremby, @stefanprobst, @dopt, @rishabhpoddar, @aydinkn, @ErfanMirzapour, @tubbo, @frontendtony, @eric-burel, @iker-barriocanal, @eps1lon, @Gigiz, @mplis, @HaNdTriX, and @jigsawye.

The following features were mentioned in Next.js Conf, but were shipped early through versions [10.1](/blog/next-10-1) and [10.2](/blog/next-10-2):

*   **Automatic Webfont Optimization:** Improved performance by inlining font CSS.
*   **Faster Refresh**: 100ms to 200ms faster refresh.
*   [**`next/image` Improvements**](/blog/next-10-1#nextimage-improvements): Apple Silicon (M1) Support, plus more layout and loader options.
*   [**Next.js Commerce Shopify Integration**](/blog/next-10-1#nextjs-commerce-shopify-integration): Flexible data layer for composable e-commerce apps. Next.js Commerce currently supports Shopify, BigCommerce, Saleor, Swell, and Vendure.
