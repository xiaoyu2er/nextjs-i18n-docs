---
title: Turbopack Dev is Now Stable
description: >-
  It&apos;s been a long road, but we are happy to announce that `next dev
  --turbo` is now stable and ready to speed up your development experience.
author:
  - name: Maia Teegarden
    image: /static/team/maia.jpg
  - name: Tim Neutkens
    image: /static/team/tim.jpg
  - name: Tobias Koppers
    image: /static/team/sokra.jpg
date: 2024-10-21T16:50:00.507Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/turbopack-for-development-stable/twitter-card.png
---

It's been a long road, but we are happy to announce that `next dev --turbo` is now stable and ready to speed up your development experience. We've been using it to iterate on [vercel.com](http://vercel.com), [nextjs.org](http://nextjs.org), [v0](https://v0.dev), and all of our other applications with great results.

Since its release 8 years ago, Next.js has been used to build everything, from weekend hobby projects to sophisticated enterprise applications. When Next.js was first released, webpack was clearly the best choice for the framework's bundling foundation, but over time it has struggled to keep up with the needs of modern web developers. Our community started to find it painfully slow to iterate while waiting for routes to load, code changes to reflect, and production builds to deploy.

We invested a lot of [time](/blog/next-12#faster-builds-and-fast-refresh-with-rust-compiler) and [effort](/blog/next-13-5#improving-startup-and-fast-refresh-time) optimizing webpack, but at a certain point, we felt we weren't getting enough improvement for the effort involved. We needed a new foundation that could support the many Next.js applications already in production today, as well as the future innovations we had planned, like React Server Components.

These were our requirements for this new bundler:

*   Minimal breaking changes
*   Support for both App Router and Pages Router
*   Faster compile times for codebases of all sizes
*   Development builds that closely match production
*   Advanced production optimizations (e.g. tree shaking within modules)
*   Module graph that supports multiple environments like Node.js and the browser
*   Full observability for maintainers and advanced users

We evaluated all existing solutions at the time and found that each one had trade-offs that didn't align with our requirements and goals. It made sense for us to design something from the ground up that could accomplish exactly what Next.js needs today and own the roadmap so we can build and experiment with what it will need tomorrow. This was our motivation to create Turbopack.

We started out by optimizing the development experience, and that's what we're releasing as stable today. We've been extensively dogfooding Turbopack with Vercel's applications, and have noticeably improved the iteration velocity of our developers. For example, with `vercel.com`, a large Next.js app, we've seen:

*   Up to **76.7% faster** local server startup.
*   Up to **96.3% faster** code updates with Fast Refresh.
*   Up to **45.8% faster** initial route compile without caching (Turbopack does not have disk caching yet).

In this post, we'll discuss how we achieved these results, along with some other highlights. We'll also clarify exactly what to expect from this release and provide a roadmap for what to expect next.

[Highlights](#highlights)
-------------------------

### [Faster initial compile of a route](#faster-initial-compile-of-a-route)

One of the biggest issues we were hearing from our community was that routes were taking too long to load in development, which came down to webpack's compilation speed. Next.js compiles routes on-demand to avoid having to compile all possible routes before they are needed, which keeps the initial startup fast and memory usage lower, but even then, you could still find yourself tapping your feet while waiting for a single page to load.

To be fair, bundlers like webpack are doing a lot underneath the hood. When compiling a route for the first time, the bundler starts at an “entrypoint”. In the case of Next.js, it's a combination of `page.tsx` and all related files for that route, like `layout.tsx` and `loading.tsx`, etc. These entrypoints are parsed to find `import` statements that get resolved to files, which then get processed the same as the entrypoints, and this cycle continues until no more imports are found. This process builds a graph of modules, which can be made up of not just TypeScript / JavaScript modules (including `node_modules`), but also CSS files (both global and CSS modules), and static files like imported images for `next/image`.

After all modules are collected, the module graph is used to create bundles of JavaScript, often referred to as “chunks.” These chunks are the outputs of the compiler that run on the server (at build-time or runtime) or in the browser.

webpack does not support creating graphs that produce outputs for multiple environments, so we have to run at least two separate compilers in Next.js with webpack today, one for the server and one for the browser. We must compile the server module graph first so that all references to `"use client"` can be found. Once the server is built, we traverse its graph to create the relevant entrypoints for the browser compiler. Since this is a separate webpack compiler, there's some overhead in this process, like parsing the same code twice across client and server.

With Turbopack, we set out to remove the overhead of running multiple compilers and coordinating between them. The solution was to make the compiler aware of multiple different output targets. Internally, these are called target “transitions”. We can mark an import as a transition from server to browser or from browser to server. This is what allows Turbopack to efficiently bundle Server Components and Client Components, as well as Server Functions imported from Client Components.

In addition to improving performance, having a single compiler that can handle multiple environments in a single pass has reliability and debugging benefits, as we no longer have to coordinate between two separate compiler processes in Next.js.

Another big difference between webpack and Turbopack is that Turbopack can parallelize work across multiple CPUs, whereas with webpack, only the TypeScript / JavaScript transformation step using SWC is parallelized.

webpack doesn't support parallelizing across CPUs because, in order to parallelize effectively, data must be easily accessible across threads. webpack was built in a way that heavily uses large JavaScript objects, which can't be shared across threads easily without expensive serialization and deserialization. This overhead often negates the performance improvement of leveraging multiple CPUs. Turbopack is written in Rust, which does not have the same limitations, and was built with parallelization in mind from the start.

We were also able to achieve performance wins with faster filesystem reads and writes, faster module resolution, and by [skipping more work on side-effect free modules](https://gist.github.com/timneutkens/63f95e096a7a060627ca53056720022e).

When using Turbopack on [`vercel.com`](http://vercel.com), a large Next.js application, we've seen up to **45.8%** **faster** initial compilation compared to Next.js with webpack.

### [Faster Fast Refresh](#faster-fast-refresh)

Fast Refresh is the system that bundlers use to propagate changes to the route you're currently looking at in the browser, sometimes referred to as Hot Module Replacement (HMR).

Next.js has a deeper integration that connects Fast Refresh to React, making sure that React doesn't lose state whenever you change a component.

With webpack, we found there is a limit to the performance of Fast Refresh when you hit a certain number of JavaScript modules. Webpack needs to do graph traversal and generate outputs even for modules that have not changed, scaling linearly with the amount of JavaScript modules.

We found that at around 30,000 modules, code changes consistently have at least 1 second of overhead to process an update, regardless of whether the change is small. For example, changing a color in a CSS file could take 1 second to show up on screen.

This performance was not acceptable for us. We believe that incremental builds should scale with only the size of local changes, not the size of the route or application. When `button.tsx` changes, the compiler should only have to run the work related to that file change instead of having to recompute other modules and output files that are not affected by the change. To combat this, we prioritized a foundation in Turbopack that allows very granular recomputing of work.

This effort turned into the underlying library, [Turbo Engine](https://nextjs.org/docs/app/api-reference/turbopack), which uses an automatic demand-driven incremental computation architecture to provide interactive hot-reloading of massive Next.js and React applications in tens of milliseconds. This architecture is based on over a decade of research and prior art, including [webpack](https://webpack.js.org/), [Salsa](https://github.com/salsa-rs/salsa), [Parcel](https://parceljs.org/), [Adapton](http://adapton.org/), and the [Rust compiler's query system](https://rustc-dev-guide.rust-lang.org/query.html).

Now with Turbopack, Fast Refresh speed scales with the size of your changes, which is how we've been able to achieve **96.3% faster** code updates with Fast Refresh on large Next.js apps like [vercel.com](http://vercel.com).

### [Advanced Tracing](#advanced-tracing)

As Next.js has grown in adoption over the years, we've found it increasingly hard to reproduce reported issues on GitHub, especially related to compiler performance and memory usage. This is because most people can't share their application code, or when they share the code, the application can't run because it requires a database or other setup.

To begin to address this, we added tracing to the internals of Next.js. These traces are written to a file in the `.next` folder and do not include application code — only the file path, the time the compiler took on it, and other timings like individual transforms. However, with webpack, we never had a good way to clearly distinguish memory usage of the compiler from memory usage of framework or application code, as they all run in the same Node.js instance.

With Turbopack, we were able to design with instrumentation from the beginning. We implemented an instrumentation layer in [Turbo Engine](https://nextjs.org/docs/app/api-reference/turbopack) that allows for collecting timings of each individual function. We were able to extend these traces to also keep track of the memory allocation, deallocation, and persisted memory across every function.

This new, advanced tracing gives us all the information needed to investigate slowdowns and memory usage deeply; it only requires a trace instead of a full codebase.

In order to process these new traces, we've implemented a custom trace viewer that stays performant regardless of application and trace size. It's a trace viewer specifically built for investigating slowdowns and memory usage for Turbopack and has allowed us to optimize performance across many early adopter applications as it shortens the feedback loop.

While the trace viewer was initially built for internal usage (and it's intended for situations where a deep technical dive is needed), we've landed the required pieces to run it yourself in Next.js. You can generate a Turbopack trace using [these instructions](/docs/canary/architecture/turbopack#generating-trace-files). Then, when the trace is generated, you can use `next internal turbo-trace-server .next/trace-turbopack` to start the server that allows for inspecting the trace. There is a quick video overview of the trace viewer [available here](https://www.youtube.com/watch?v=PGO2szAye7A&t=1s).

### [Less flakiness in compile times](#less-flakiness-in-compile-times)

When using Next.js with webpack, compile times are often not transparent enough. In one case, it may take 10 seconds to open a page, and in another, it may take 20 seconds. While a cache may be present, it sometimes doesn't have enough impact to produce consistent results. Even on compilation without caches, we've seen some variance.

The underlying architecture of Turbopack ensures variance in compile times is much more consistent. The compile times for routes only vary a few percent, allowing us to consistently optimize the compiler performance.

### [Development builds that closely match production](#development-builds-that-closely-match-production)

In order to optimize for compilation speed with webpack, we had to accept some trade-offs that resulted in divergent development and production environments. Some examples of those trade-offs are that we use `style-loader`, which injects the style into the page and allows for Fast Refreshing them, without reloading the page. However, this means that the styles are injected by JavaScript in development, which causes a flash of unstyled content. We work around this flash of unstyled content, so you don't see it. Another example is that Next.js with webpack uses `eval-source-map`, meaning that all code is wrapped in `eval` and the sourcemaps are included in that, which ensures sourcemaps are available in development at the expense of the bundled code being harder to inspect and debug. While webpack supports outputting full sourcemaps using the `source-map` option, it causes an outsized impact on compilation time and memory usage.

For Turbopack, we set out to solve these by default, outputting CSS files and sourcemaps without using `eval`. Turbopack leverages [`sections` sourcemaps](https://tc39.es/source-map/#index-map), a relatively new part of the source-map specification that allows for more efficient merging of sourcemaps outputs. Where we previously had to generate all mappings in one place, we're now able to generate and cache them much more granularly.

The CSS handling in Turbopack always outputs CSS files, and similar to JavaScript handling it can update the CSS file without refreshing the browser by a mechanism that is part of the Turbopack development runtime.

We can now confidently say that when something works in development with Turbopack, it also works and behaves the same in production.

[Our first stable release](#our-first-stable-release)
-----------------------------------------------------

Two years ago, we introduced Turbopack as an alpha with Next.js 13, offering a preview of its performance potential. While initial results were promising, it only supported basic usage—many Next.js features, like `basePath`, weren't yet implemented.

Over the following year, we focused on adding missing Next.js and bundling features. Based on community feedback, we decided to fully focus on the `next dev` experience so we could address the most common iteration velocity complaints. By last year's Next.js Conf, 90% of development tests were passing, and Vercel developers were already using Turbopack in day-to-day development.

In April, we announced Next.js 14.2 with 99.8% of tests passing, reaching 100% soon after. Since then, we've addressed GitHub-reported issues, especially around npm packages, Fast Refresh, and error location accuracy.

Admittedly, the road to stability has taken a long time, but that mostly comes down to Next.js's extensive test suite, which sets a high bar for stability. We've had 8 years to uncover edge cases and add 6,599 development tests that also needed to pass with Turbopack. An additional factor is that we designed Turbopack with a completely different architecture than webpack. Simply porting webpack to Rust would have been easier but wouldn't have unlocked the performance wins we want to achieve.

Now that Turbopack passes all tests, has been validated with top npm packages, and feedback from early adopters is addressed, we're ready to stamp it as stable.

### [What exactly is stable?](#what-exactly-is-stable)

This has been a point of confusion in the past, so we'll take this section to clarify what this release unlocks for the Next.js community.

This release specifically marks the `next dev --turbo` command as stable. Production builds (`next build --turbo`) are not supported yet, but keep reading for an update as they are in progress. We eventually plan to release a standalone version of Turbopack outside of Next.js, but we want to prove its merit by enhancing the Next.js community's experience first.

Other than the unsupported features we will cover in the next section, Turbopack should work with all stable features of Next.js. For clarity, Turbopack supports both App Router and Pages Router. Experimental features may or may not work with Turbopack, but they certainly will by the time they are marked stable.

If your application has webpack customization but only adds webpack loaders, you might be able to already use Turbopack by configuring the loaders for Turbopack. You can [read the documentation](/docs/canary/app/api-reference/next-config-js/turbo#webpack-loaders) for webpack loader support in Turbopack.

Here's a list of webpack loaders that are verified to work with Turbopack:

*   `@svgr/webpack`
*   `babel-loader`
*   `url-loader`
*   `file-loader`
*   `raw-loader`
*   `tsconfig-paths-webpack-plugin` — supported out of the box, no plugin needed.
*   Most other loaders also work, as we support a subset of the webpack loader API.

Most CSS and CSS-in-JS libraries are supported:

*   Supported
    *   Tailwind CSS
    *   @emotion/react
    *   Sass
    *   styled-components
    *   Bootstrap
    *   Antd
    *   node-sass
    *   JSS
    *   Emotion
    *   theme-ui (uses Emotion)
    *   @chakra-ui/core (with Emotion)
    *   aphrodite
*   Not supported currently
    *   Less — You can add less-loader. Next.js with webpack doesn't support Less out of the box either.
    *   @vanilla-extract/css — Uses a custom webpack plugin — We're going to look into what it takes to support the required hooks in the future.
    *   StyleX — Requires a Babel transform and support for `data:` attributes — We're going to look into supporting StyleX after `next build --turbo` is stable.

### [Performance](#performance)

We want to call out that the performance of the version released today is significantly better than that of the webpack, but it is not the final performance number. We've been following Kent Beck's famous formula of “Make it work. Make it good. Make it fast." So far, a large portion of our effort has gone towards the “Make it work” stage since we have to catch up to the scope of Next.js and webpack, which have matured for close to a decade.

Turbopack is betting heavily on its caching infrastructure, but as you may know, caching is one of the only two hard things in software development. From experience, we knew that adding caching to an architecture that wasn't explicitly built for it can lead to undesirable results, so we enabled caching for even the most granular functions. This means that rebuilds are extremely fast at the cost of cold builds and memory usage, and we are working towards a better balance. The neat thing is that we can use our advanced tracing mentioned earlier in the post to find inefficiencies and profile which functions are most worthwhile to cache.

Over the past 3 months, we've already made some significant improvements. Comparing Turbopack in [Next.js 15 RC 2](/blog/next-15-rc2) versus Turbopack in [15 RC 1](/blog/next-15-rc) shows the results of these optimizations:

*   A 25-35% average reduction in **memory** usage.
*   A 30-50% faster **initial** **compilation** for large pages with thousands of modules.

The stable version of Turbopack contains an in-memory cache that must be rebuilt on every restart of the development server, which can take ten or more seconds for large applications. Something we're extremely excited about are the big wins we're seeing when testing on-disk persistent caching, which we will cover later in this post.

### [Breaking changes](#breaking-changes)

A huge motivation for building our own bundler was the need to match the existing behaviors of webpack as much as possible, which is something we couldn't guarantee with any existing solution at the time. This includes the way files are resolved and smaller features of webpack, such as [the `webpackIgnore` comment](https://webpack.js.org/api/module-methods/#magic-comments) that some npm packages use.

Unfortunately, we did have to remove some features in order to future-proof Turbopack and the related Next.js implementation. Those features will still be supported when you use webpack.

There are a few highlights, let's dig into the reasons why we had to change them:

**`webpack()` configuration is not supported.** Turbopack is not webpack, it doesn't have the same configuration option structure, though it does support many of the same features. Specifically we have implemented support for [webpack loaders](/docs/app/api-reference/next-config-js/turbo#webpack-loaders) and [resolve aliases](/docs/app/api-reference/next-config-js/turbo#resolve-aliases). Most webpack loaders that are transforming code are supported out of the box. Some webpack loaders that do exotic things, like a webpack child compiler and emitting files, are not supported.

**`.babelrc` will not automatically transform code.** Turbopack leverages [SWC](/docs/architecture/nextjs-compiler#why-swc) by default. You're still able to add `babel-loader` as needed, but we're ensuring the defaults are always fast and that these make sense in terms of architecture too. We always have to run SWC, even if you configure `.babelrc`, in order to process other optimizations. This is similar to how webpack always has to run the `acorn` parser to do further optimizations. If you use SWC instead of Babel with Turbopack, we can parse once and leverage the same abstract syntax tree (AST) end-to-end throughout Turbopack.

**Some lesser-used CSS Modules features.** We've switched the processing of CSS from PostCSS to [Lightning CSS](https://lightningcss.dev/). Lightning CSS is a significantly faster CSS compiler that supports CSS transformations, minification, and CSS Modules out of the box. The trade-off is that some lesser-used features are not supported. Specifically `:global` and `:local` pseudo selectors (their function variant `:global()` and `:local()` still work), `@value`, and `:import / :export` ICSS rules. It's also a bit stricter than other CSS parsers and will point to errors in code rather than ignore them.

In the process of adding Lightning CSS we've contributed back to the project. For example, we implemented granular options for CSS Modules to disable CSS grid prefixing and the `pure` mode for CSS Modules. This makes it easier to adopt Lightning CSS for CSS Modules when coming from css-loader in webpack. We have also improved errors for the unsupported CSS Modules features.

We are thankful to [Devon Govett](https://x.com/devongovett), the author and maintainer of Lightning CSS, for the continued collaboration on the project.

**Experimental features.** As we are focused on Turbopack's stability in Next.js, we've decided to focus on the stable features that are available in Next.js first.

For the full list, see the [documentation page](/docs/canary/architecture/turbopack#unsupported-features).

[Roadmap](#roadmap)
-------------------

Turbopack has come a long way, but there's still a lot of work to be done. The two exciting features coming down the pipeline are persistent caching and production builds. We expect the rollout to look something like the following order:

*   Persistent caching — Future Minor
*   Builds beta — Future Minor
*   Builds release candidate — Future Minor
*   Builds stable — Future Minor
*   Recommended in create-next-app for new applications — Future Minor
*   Default in Next.js when you don't have custom webpack configuration — Future Major

While webpack will stay in Next.js, we're expecting that because of the benefits of Turbopack, the majority of Next.js applications will want to use it. Once Turbopack for production builds is complete we'll start work to support commonly used webpack plugins.

We have loose plans for Turbopack beyond that, but we'd like to keep this post constrained to what we can confidently ship in the foreseeable future. We may only be talking about two features, but there's a lot that goes into them, so it's worth diving into.

### [Persistent caching (Fast Refresh across restarts)](#persistent-caching-fast-refresh-across-restarts)

Persistent caching means storing the work done by the compiler in a way that allows it to be reused across restarts of the development server or across multiple production builds.

In short, Turbopack avoids redoing the same work, even if you restart.

As mentioned in the Faster Fast Refresh section, we built [Turbo Engine](https://nextjs.org/docs/app/api-reference/turbopack) to ensure work can be parallelized and cached, so that whenever you make a file change, we only have to run the work related to that file change. What if we could give you this experience across restarts and when opening a route? We wouldn't have to redo compilation work that was already done in a previous development session. What if we could get the benefits of Fast Refresh but for opening routes compiled in previous development sessions and across multiple builds with the `next build`?

That's exactly what we've been working on: a new storage layer for [Turbo Engine](https://nextjs.org/docs/app/api-reference/turbopack) that supports persisting the compilation work to disk and restoring it when starting the development server or building again.

While webpack does have disk caching enabled by default in Next.js, it has quite a few limitations. It's notable that a large portion of the cache has to be restored from disk and read into memory in order to function. It never quite felt like there is a granular enough cache. For example, on larger applications at Vercel, we found that the webpack disk cache could even be slower than doing all the work from scratch when the cache had grown to a sufficiently large size.

Unlike the existing disk caching with webpack, the persistent cache with Turbopack truly feels like Fast Refresh across restarts. Routes that take over 10 seconds to compile the very first time take less than 500ms to restore from cache once they've been compiled once.

We have seen similar results for `next build` with Turbopack, where only the changed files are recompiled, and everything else stays as-is. In the multiple steps that `next build` takes, this moves the majority of time spent from running compilation and bundling to running TypeScript type checking.

The persistent caching is currently a work in progress, as we want to verify it using our internal Next.js applications first. The initial results are very promising, and performance will get even better over time as we keep optimizing these hot paths.

Once the persistent cache is stable, it will be enabled by default. Enabling persistent caching will not require changes to your codebase.

If you are interested in testing out persistent caching, please reach out!

### [Production Builds](#production-builds)

We're excited to share that we're making substantial progress towards stable production builds with Turbopack. Currently, 96% of our production tests are passing, which is a big step forward. However, there are still areas that need more work before we can confidently recommend Turbopack for production at scale.

Production builds bring their own unique challenges compared to development, and we're actively working to address them. Below, we'll go over what's already been optimized and what's still in progress.

### [Production Optimizations](#production-optimizations)

### [Correctness](#correctness)

Ensuring correctness is essential for reliable production builds. Here's the current status:

*   **CSS Chunking**: In progress. This feature is crucial for splitting CSS into smaller chunks, allowing only the necessary CSS to load for each part of the application, which helps reduce load times and ensures correct ordering of CSS rules..
*   **Production JS Runtime**: Completed. This ensures that the JavaScript runtime behaves as expected in a production environment, providing reliability and stability.
*   **Content-Based File Name Hashing**: Not yet implemented. Content-based hashing will allow us to generate filenames based on content, enabling more efficient long-term caching in browsers.

### [UX Performance Optimizations](#ux-performance-optimizations)

UX Performance is key to delivering fast load times and efficient resource usage. Here's what we're working on:

*   **JS Minify**: Completed. We've implemented SWC Minify, which Next.js already uses with webpack since Next.js 13.
*   **CSS Minify**: Completed. CSS minification with Lightning CSS, which is important for reducing the size of stylesheets.
*   **Global Information (Whole Application Optimizations)**: Completed. Turbopack can apply optimizations that require data about all routes in the application, for example module id hashing.
*   **Tree Shaking**: Partially completed. In progress. We have partial support for tree-shaking, which helps eliminate unused code and reduce bundle sizes. However, there are scenarios where tree-shaking is not fully effective yet:
    *   **Dynamic Imports**: Tree shaking is limited for dynamic imports like using `next/dynamic`.
    *   **Complex Exports**: Certain types of exports, like `export { foo as "string name" }`.
    *   **Non-ES Modules**: CommonJS modules are not tree-shakeable.
    *   **Barrel Files**: Re-exports from barrel files are inefficient, with limitations in skipping side-effect-free modules.
    *   **Fragmentation**: In some cases, tree-shaking can create too many fragments, leading to inefficient bundles.
*   **Module ID Hashing (Partial)**: In progress. Module ID hashing is partially implemented but we're working on improving the performance. Once fully enabled, it will help reduce the final bundle size.
*   **Export Name Mangling**: In progress. This involves reducing the size of exported names to reduce the final bundle size.
*   **Scope Hoisting**: Not yet implemented. Scope hoisting will help reduce bundle size by merging smaller JavaScript modules into a single scope, which reduces overhead and improves performance.
*   **Production Optimized JS Chunking**: Not yet implemented. Chunking JavaScript to minimize duplication is essential for improving load performance, especially for larger applications.

[Stay Tuned](#stay-tuned)
-------------------------

We're thrilled to confidently recommend the `next dev --turbo`, and we can't wait to hear how it improves your development experience. Give it a try today and see the performance gains for yourself.

This is just the beginning—persistent caching and production builds are on the horizon, which will bring even more speed and reliability to your workflow.

We'll share more updates as we progress towards ensuring correctness and optimizing performance to handle even the largest applications seamlessly. Stay tuned for future releases and improvements as we work towards making Turbopack the best solution for both development and production builds.

[Contributors](#contributors)
-----------------------------

We are thankful to the thousands of developers who participated in testing, reporting issues, and verifying fixes throughout the Turbopack beta and release candidate phases.

This release was brought to you by:

*   The **Turbopack** team: [Alex](https://github.com/arlyon), [Benjamin](https://github.com/bgw), [Donny](https://github.com/kdy1), [Justin](https://github.com/jridgewell), [Leah](https://github.com/forsakenharmony), [Maia](https://github.com/padmaia), [Niklas](https://github.com/mischnic), [OJ](https://github.com/kwonoj), [Tim](https://github.com/timneutkens), [Tobias](https://github.com/sokra), and [Will](https://github.com/wbinnssmith).
*   The **Next.js** team: [Andrew](https://github.com/acdlite), [Hendrik](https://github.com/unstubbable), [Janka](https://github.com/lubieowoce), [Jiachi](https://github.com/huozhi), [Jimmy](https://github.com/feedthejim), [Jiwon](https://github.com/devjiwonchoi), [JJ](https://github.com/ijjk), [Josh](https://github.com/gnoff), [Sam](https://github.com/samcx), [Sebastian](https://github.com/sebmarkbage), [Sebbie](https://github.com/eps1lon), [Shu](https://github.com/shuding), [Wyatt](https://github.com/wyattjoh), and [Zack](https://github.com/ztanner).
*   The **Next.js Docs** team: [Delba](https://github.com/delbaoliveira), [Rich](https://github.com/molebox), [Ismael](https://github.com/ismaelrumzan), and [Lee](https://github.com/leerob).
