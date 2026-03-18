import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/turbopack-for-development-stable-DIvJu03f.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var turbopack_for_development_stable_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Turbopack Dev is Now Stable",
	"description": "It&apos;s been a long road, but we are happy to announce that `next dev --turbo` is now stable and ready to speed up your development experience.",
	"author": [
		{
			"name": "Maia Teegarden",
			"image": "/static/team/maia.jpg"
		},
		{
			"name": "Tim Neutkens",
			"image": "/static/team/tim.jpg"
		},
		{
			"name": "Tobias Koppers",
			"image": "/static/team/sokra.jpg"
		}
	],
	"date": /* @__PURE__ */ new Date(1729529400507),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/turbopack-for-development-stable/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "It's been a long road, but we are happy to announce that `next dev --turbo` is now stable and ready to speed up your development experience. We've been using it to iterate on vercel.com, nextjs.org, v0, and all of our other applications with great results."
		},
		{
			"heading": void 0,
			"content": "Since its release 8 years ago, Next.js has been used to build everything, from weekend hobby projects to sophisticated enterprise applications. When Next.js was first released, webpack was clearly the best choice for the framework's bundling foundation, but over time it has struggled to keep up with the needs of modern web developers. Our community started to find it painfully slow to iterate while waiting for routes to load, code changes to reflect, and production builds to deploy."
		},
		{
			"heading": void 0,
			"content": "We invested a lot of time and effort optimizing webpack, but at a certain point, we felt we weren't getting enough improvement for the effort involved. We needed a new foundation that could support the many Next.js applications already in production today, as well as the future innovations we had planned, like React Server Components."
		},
		{
			"heading": void 0,
			"content": "These were our requirements for this new bundler:"
		},
		{
			"heading": void 0,
			"content": "Minimal breaking changes"
		},
		{
			"heading": void 0,
			"content": "Support for both App Router and Pages Router"
		},
		{
			"heading": void 0,
			"content": "Faster compile times for codebases of all sizes"
		},
		{
			"heading": void 0,
			"content": "Development builds that closely match production"
		},
		{
			"heading": void 0,
			"content": "Advanced production optimizations (e.g. tree shaking within modules)"
		},
		{
			"heading": void 0,
			"content": "Module graph that supports multiple environments like Node.js and the browser"
		},
		{
			"heading": void 0,
			"content": "Full observability for maintainers and advanced users"
		},
		{
			"heading": void 0,
			"content": "We evaluated all existing solutions at the time and found that each one had trade-offs that didn't align with our requirements and goals. It made sense for us to design something from the ground up that could accomplish exactly what Next.js needs today and own the roadmap so we can build and experiment with what it will need tomorrow. This was our motivation to create Turbopack."
		},
		{
			"heading": void 0,
			"content": "We started out by optimizing the development experience, and that's what we're releasing as stable today. We've been extensively dogfooding Turbopack with Vercel's applications, and have noticeably improved the iteration velocity of our developers. For example, with `vercel.com`, a large Next.js app, we've seen:"
		},
		{
			"heading": void 0,
			"content": "Up to **76.7% faster** local server startup."
		},
		{
			"heading": void 0,
			"content": "Up to **96.3% faster** code updates with Fast Refresh."
		},
		{
			"heading": void 0,
			"content": "Up to **45.8% faster** initial route compile without caching (Turbopack does not have disk caching yet)."
		},
		{
			"heading": void 0,
			"content": "In this post, we'll discuss how we achieved these results, along with some other highlights. We'll also clarify exactly what to expect from this release and provide a roadmap for what to expect next."
		},
		{
			"heading": "faster-initial-compile-of-a-route",
			"content": "One of the biggest issues we were hearing from our community was that routes were taking too long to load in development, which came down to webpack's compilation speed. Next.js compiles routes on-demand to avoid having to compile all possible routes before they are needed, which keeps the initial startup fast and memory usage lower, but even then, you could still find yourself tapping your feet while waiting for a single page to load."
		},
		{
			"heading": "faster-initial-compile-of-a-route",
			"content": "To be fair, bundlers like webpack are doing a lot underneath the hood. When compiling a route for the first time, the bundler starts at an “entrypoint”. In the case of Next.js, it's a combination of `page.tsx` and all related files for that route, like `layout.tsx` and `loading.tsx`, etc. These entrypoints are parsed to find `import` statements that get resolved to files, which then get processed the same as the entrypoints, and this cycle continues until no more imports are found. This process builds a graph of modules, which can be made up of not just TypeScript / JavaScript modules (including `node_modules`), but also CSS files (both global and CSS modules), and static files like imported images for `next/image`."
		},
		{
			"heading": "faster-initial-compile-of-a-route",
			"content": "After all modules are collected, the module graph is used to create bundles of JavaScript, often referred to as “chunks.” These chunks are the outputs of the compiler that run on the server (at build-time or runtime) or in the browser."
		},
		{
			"heading": "faster-initial-compile-of-a-route",
			"content": "webpack does not support creating graphs that produce outputs for multiple environments, so we have to run at least two separate compilers in Next.js with webpack today, one for the server and one for the browser. We must compile the server module graph first so that all references to `\"use client\"` can be found. Once the server is built, we traverse its graph to create the relevant entrypoints for the browser compiler. Since this is a separate webpack compiler, there's some overhead in this process, like parsing the same code twice across client and server."
		},
		{
			"heading": "faster-initial-compile-of-a-route",
			"content": "With Turbopack, we set out to remove the overhead of running multiple compilers and coordinating between them. The solution was to make the compiler aware of multiple different output targets. Internally, these are called target “transitions”. We can mark an import as a transition from server to browser or from browser to server. This is what allows Turbopack to efficiently bundle Server Components and Client Components, as well as Server Functions imported from Client Components."
		},
		{
			"heading": "faster-initial-compile-of-a-route",
			"content": "In addition to improving performance, having a single compiler that can handle multiple environments in a single pass has reliability and debugging benefits, as we no longer have to coordinate between two separate compiler processes in Next.js."
		},
		{
			"heading": "faster-initial-compile-of-a-route",
			"content": "Another big difference between webpack and Turbopack is that Turbopack can parallelize work across multiple CPUs, whereas with webpack, only the TypeScript / JavaScript transformation step using SWC is parallelized."
		},
		{
			"heading": "faster-initial-compile-of-a-route",
			"content": "webpack doesn't support parallelizing across CPUs because, in order to parallelize effectively, data must be easily accessible across threads. webpack was built in a way that heavily uses large JavaScript objects, which can't be shared across threads easily without expensive serialization and deserialization. This overhead often negates the performance improvement of leveraging multiple CPUs. Turbopack is written in Rust, which does not have the same limitations, and was built with parallelization in mind from the start."
		},
		{
			"heading": "faster-initial-compile-of-a-route",
			"content": "We were also able to achieve performance wins with faster filesystem reads and writes, faster module resolution, and by skipping more work on side-effect free modules."
		},
		{
			"heading": "faster-initial-compile-of-a-route",
			"content": "When using Turbopack on `vercel.com`, a large Next.js application, we've seen up to &#x2A;*45.8%** **faster** initial compilation compared to Next.js with webpack."
		},
		{
			"heading": "faster-fast-refresh",
			"content": "Fast Refresh is the system that bundlers use to propagate changes to the route you're currently looking at in the browser, sometimes referred to as Hot Module Replacement (HMR)."
		},
		{
			"heading": "faster-fast-refresh",
			"content": "Next.js has a deeper integration that connects Fast Refresh to React, making sure that React doesn't lose state whenever you change a component."
		},
		{
			"heading": "faster-fast-refresh",
			"content": "With webpack, we found there is a limit to the performance of Fast Refresh when you hit a certain number of JavaScript modules. Webpack needs to do graph traversal and generate outputs even for modules that have not changed, scaling linearly with the amount of JavaScript modules."
		},
		{
			"heading": "faster-fast-refresh",
			"content": "We found that at around 30,000 modules, code changes consistently have at least 1 second of overhead to process an update, regardless of whether the change is small. For example, changing a color in a CSS file could take 1 second to show up on screen."
		},
		{
			"heading": "faster-fast-refresh",
			"content": "This performance was not acceptable for us. We believe that incremental builds should scale with only the size of local changes, not the size of the route or application. When `button.tsx` changes, the compiler should only have to run the work related to that file change instead of having to recompute other modules and output files that are not affected by the change. To combat this, we prioritized a foundation in Turbopack that allows very granular recomputing of work."
		},
		{
			"heading": "faster-fast-refresh",
			"content": "This effort turned into the underlying library, Turbo Engine, which uses an automatic demand-driven incremental computation architecture to provide interactive hot-reloading of massive Next.js and React applications in tens of milliseconds. This architecture is based on over a decade of research and prior art, including webpack, Salsa, Parcel, Adapton, and the Rust compiler's query system."
		},
		{
			"heading": "faster-fast-refresh",
			"content": "Now with Turbopack, Fast Refresh speed scales with the size of your changes, which is how we've been able to achieve **96.3% faster** code updates with Fast Refresh on large Next.js apps like vercel.com."
		},
		{
			"heading": "advanced-tracing",
			"content": "As Next.js has grown in adoption over the years, we've found it increasingly hard to reproduce reported issues on GitHub, especially related to compiler performance and memory usage. This is because most people can't share their application code, or when they share the code, the application can't run because it requires a database or other setup."
		},
		{
			"heading": "advanced-tracing",
			"content": "To begin to address this, we added tracing to the internals of Next.js. These traces are written to a file in the `.next` folder and do not include application code — only the file path, the time the compiler took on it, and other timings like individual transforms. However, with webpack, we never had a good way to clearly distinguish memory usage of the compiler from memory usage of framework or application code, as they all run in the same Node.js instance."
		},
		{
			"heading": "advanced-tracing",
			"content": "With Turbopack, we were able to design with instrumentation from the beginning. We implemented an instrumentation layer in Turbo Engine that allows for collecting timings of each individual function. We were able to extend these traces to also keep track of the memory allocation, deallocation, and persisted memory across every function."
		},
		{
			"heading": "advanced-tracing",
			"content": "This new, advanced tracing gives us all the information needed to investigate slowdowns and memory usage deeply; it only requires a trace instead of a full codebase."
		},
		{
			"heading": "advanced-tracing",
			"content": "In order to process these new traces, we've implemented a custom trace viewer that stays performant regardless of application and trace size. It's a trace viewer specifically built for investigating slowdowns and memory usage for Turbopack and has allowed us to optimize performance across many early adopter applications as it shortens the feedback loop."
		},
		{
			"heading": "advanced-tracing",
			"content": "While the trace viewer was initially built for internal usage (and it's intended for situations where a deep technical dive is needed), we've landed the required pieces to run it yourself in Next.js. You can generate a Turbopack trace using these instructions. Then, when the trace is generated, you can use `next internal turbo-trace-server .next/trace-turbopack` to start the server that allows for inspecting the trace. There is a quick video overview of the trace viewer available here."
		},
		{
			"heading": "less-flakiness-in-compile-times",
			"content": "When using Next.js with webpack, compile times are often not transparent enough. In one case, it may take 10 seconds to open a page, and in another, it may take 20 seconds. While a cache may be present, it sometimes doesn't have enough impact to produce consistent results. Even on compilation without caches, we've seen some variance."
		},
		{
			"heading": "less-flakiness-in-compile-times",
			"content": "The underlying architecture of Turbopack ensures variance in compile times is much more consistent. The compile times for routes only vary a few percent, allowing us to consistently optimize the compiler performance."
		},
		{
			"heading": "development-builds-that-closely-match-production",
			"content": "In order to optimize for compilation speed with webpack, we had to accept some trade-offs that resulted in divergent development and production environments. Some examples of those trade-offs are that we use `style-loader`, which injects the style into the page and allows for Fast Refreshing them, without reloading the page. However, this means that the styles are injected by JavaScript in development, which causes a flash of unstyled content. We work around this flash of unstyled content, so you don't see it. Another example is that Next.js with webpack uses `eval-source-map`, meaning that all code is wrapped in `eval` and the sourcemaps are included in that, which ensures sourcemaps are available in development at the expense of the bundled code being harder to inspect and debug. While webpack supports outputting full sourcemaps using the `source-map` option, it causes an outsized impact on compilation time and memory usage."
		},
		{
			"heading": "development-builds-that-closely-match-production",
			"content": "For Turbopack, we set out to solve these by default, outputting CSS files and sourcemaps without using `eval`. Turbopack leverages `sections` sourcemaps, a relatively new part of the source-map specification that allows for more efficient merging of sourcemaps outputs. Where we previously had to generate all mappings in one place, we're now able to generate and cache them much more granularly."
		},
		{
			"heading": "development-builds-that-closely-match-production",
			"content": "The CSS handling in Turbopack always outputs CSS files, and similar to JavaScript handling it can update the CSS file without refreshing the browser by a mechanism that is part of the Turbopack development runtime."
		},
		{
			"heading": "development-builds-that-closely-match-production",
			"content": "We can now confidently say that when something works in development with Turbopack, it also works and behaves the same in production."
		},
		{
			"heading": "our-first-stable-release",
			"content": "Two years ago, we introduced Turbopack as an alpha with Next.js 13, offering a preview of its performance potential. While initial results were promising, it only supported basic usage—many Next.js features, like `basePath`, weren't yet implemented."
		},
		{
			"heading": "our-first-stable-release",
			"content": "Over the following year, we focused on adding missing Next.js and bundling features. Based on community feedback, we decided to fully focus on the `next dev` experience so we could address the most common iteration velocity complaints. By last year's Next.js Conf, 90% of development tests were passing, and Vercel developers were already using Turbopack in day-to-day development."
		},
		{
			"heading": "our-first-stable-release",
			"content": "In April, we announced Next.js 14.2 with 99.8% of tests passing, reaching 100% soon after. Since then, we've addressed GitHub-reported issues, especially around npm packages, Fast Refresh, and error location accuracy."
		},
		{
			"heading": "our-first-stable-release",
			"content": "Admittedly, the road to stability has taken a long time, but that mostly comes down to Next.js's extensive test suite, which sets a high bar for stability. We've had 8 years to uncover edge cases and add 6,599 development tests that also needed to pass with Turbopack. An additional factor is that we designed Turbopack with a completely different architecture than webpack. Simply porting webpack to Rust would have been easier but wouldn't have unlocked the performance wins we want to achieve."
		},
		{
			"heading": "our-first-stable-release",
			"content": "Now that Turbopack passes all tests, has been validated with top npm packages, and feedback from early adopters is addressed, we're ready to stamp it as stable."
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "This has been a point of confusion in the past, so we'll take this section to clarify what this release unlocks for the Next.js community."
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "This release specifically marks the `next dev --turbo` command as stable. Production builds (`next build --turbo`) are not supported yet, but keep reading for an update as they are in progress. We eventually plan to release a standalone version of Turbopack outside of Next.js, but we want to prove its merit by enhancing the Next.js community's experience first."
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "Other than the unsupported features we will cover in the next section, Turbopack should work with all stable features of Next.js. For clarity, Turbopack supports both App Router and Pages Router. Experimental features may or may not work with Turbopack, but they certainly will by the time they are marked stable."
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "If your application has webpack customization but only adds webpack loaders, you might be able to already use Turbopack by configuring the loaders for Turbopack. You can read the documentation for webpack loader support in Turbopack."
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "Here's a list of webpack loaders that are verified to work with Turbopack:"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "`@svgr/webpack`"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "`babel-loader`"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "`url-loader`"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "`file-loader`"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "`raw-loader`"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "`tsconfig-paths-webpack-plugin` — supported out of the box, no plugin needed."
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "Most other loaders also work, as we support a subset of the webpack loader API."
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "Most CSS and CSS-in-JS libraries are supported:"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "Supported"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "Tailwind CSS"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "@emotion/react"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "Sass"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "styled-components"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "Bootstrap"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "Antd"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "node-sass"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "JSS"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "Emotion"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "theme-ui (uses Emotion)"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "@chakra-ui/core (with Emotion)"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "aphrodite"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "Not supported currently"
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "Less — You can add less-loader. Next.js with webpack doesn't support Less out of the box either."
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "@vanilla-extract/css — Uses a custom webpack plugin — We're going to look into what it takes to support the required hooks in the future."
		},
		{
			"heading": "what-exactly-is-stable",
			"content": "StyleX — Requires a Babel transform and support for `data:` attributes — We're going to look into supporting StyleX after `next build --turbo` is stable."
		},
		{
			"heading": "performance",
			"content": "We want to call out that the performance of the version released today is significantly better than that of the webpack, but it is not the final performance number. We've been following Kent Beck's famous formula of “Make it work. Make it good. Make it fast.\" So far, a large portion of our effort has gone towards the “Make it work” stage since we have to catch up to the scope of Next.js and webpack, which have matured for close to a decade."
		},
		{
			"heading": "performance",
			"content": "Turbopack is betting heavily on its caching infrastructure, but as you may know, caching is one of the only two hard things in software development. From experience, we knew that adding caching to an architecture that wasn't explicitly built for it can lead to undesirable results, so we enabled caching for even the most granular functions. This means that rebuilds are extremely fast at the cost of cold builds and memory usage, and we are working towards a better balance. The neat thing is that we can use our advanced tracing mentioned earlier in the post to find inefficiencies and profile which functions are most worthwhile to cache."
		},
		{
			"heading": "performance",
			"content": "Over the past 3 months, we've already made some significant improvements. Comparing Turbopack in Next.js 15 RC 2 versus Turbopack in 15 RC 1 shows the results of these optimizations:"
		},
		{
			"heading": "performance",
			"content": "A 25-35% average reduction in **memory** usage."
		},
		{
			"heading": "performance",
			"content": "A 30-50% faster **initial** **compilation** for large pages with thousands of modules."
		},
		{
			"heading": "performance",
			"content": "The stable version of Turbopack contains an in-memory cache that must be rebuilt on every restart of the development server, which can take ten or more seconds for large applications. Something we're extremely excited about are the big wins we're seeing when testing on-disk persistent caching, which we will cover later in this post."
		},
		{
			"heading": "breaking-changes",
			"content": "A huge motivation for building our own bundler was the need to match the existing behaviors of webpack as much as possible, which is something we couldn't guarantee with any existing solution at the time. This includes the way files are resolved and smaller features of webpack, such as the `webpackIgnore` comment that some npm packages use."
		},
		{
			"heading": "breaking-changes",
			"content": "Unfortunately, we did have to remove some features in order to future-proof Turbopack and the related Next.js implementation. Those features will still be supported when you use webpack."
		},
		{
			"heading": "breaking-changes",
			"content": "There are a few highlights, let's dig into the reasons why we had to change them:"
		},
		{
			"heading": "breaking-changes",
			"content": "**`webpack()` configuration is not supported.** Turbopack is not webpack, it doesn't have the same configuration option structure, though it does support many of the same features. Specifically we have implemented support for webpack loaders and resolve aliases. Most webpack loaders that are transforming code are supported out of the box. Some webpack loaders that do exotic things, like a webpack child compiler and emitting files, are not supported."
		},
		{
			"heading": "breaking-changes",
			"content": "**`.babelrc` will not automatically transform code.** Turbopack leverages SWC by default. You're still able to add `babel-loader` as needed, but we're ensuring the defaults are always fast and that these make sense in terms of architecture too. We always have to run SWC, even if you configure `.babelrc`, in order to process other optimizations. This is similar to how webpack always has to run the `acorn` parser to do further optimizations. If you use SWC instead of Babel with Turbopack, we can parse once and leverage the same abstract syntax tree (AST) end-to-end throughout Turbopack."
		},
		{
			"heading": "breaking-changes",
			"content": "**Some lesser-used CSS Modules features.** We've switched the processing of CSS from PostCSS to Lightning CSS. Lightning CSS is a significantly faster CSS compiler that supports CSS transformations, minification, and CSS Modules out of the box. The trade-off is that some lesser-used features are not supported. Specifically `:global` and `:local` pseudo selectors (their function variant `:global()` and `:local()` still work), `@value`, and `:import / :export` ICSS rules. It's also a bit stricter than other CSS parsers and will point to errors in code rather than ignore them."
		},
		{
			"heading": "breaking-changes",
			"content": "In the process of adding Lightning CSS we've contributed back to the project. For example, we implemented granular options for CSS Modules to disable CSS grid prefixing and the `pure` mode for CSS Modules. This makes it easier to adopt Lightning CSS for CSS Modules when coming from css-loader in webpack. We have also improved errors for the unsupported CSS Modules features."
		},
		{
			"heading": "breaking-changes",
			"content": "We are thankful to Devon Govett, the author and maintainer of Lightning CSS, for the continued collaboration on the project."
		},
		{
			"heading": "breaking-changes",
			"content": "**Experimental features.** As we are focused on Turbopack's stability in Next.js, we've decided to focus on the stable features that are available in Next.js first."
		},
		{
			"heading": "breaking-changes",
			"content": "For the full list, see the documentation page."
		},
		{
			"heading": "roadmap",
			"content": "Turbopack has come a long way, but there's still a lot of work to be done. The two exciting features coming down the pipeline are persistent caching and production builds. We expect the rollout to look something like the following order:"
		},
		{
			"heading": "roadmap",
			"content": "Persistent caching — Future Minor"
		},
		{
			"heading": "roadmap",
			"content": "Builds beta — Future Minor"
		},
		{
			"heading": "roadmap",
			"content": "Builds release candidate — Future Minor"
		},
		{
			"heading": "roadmap",
			"content": "Builds stable — Future Minor"
		},
		{
			"heading": "roadmap",
			"content": "Recommended in create-next-app for new applications — Future Minor"
		},
		{
			"heading": "roadmap",
			"content": "Default in Next.js when you don't have custom webpack configuration — Future Major"
		},
		{
			"heading": "roadmap",
			"content": "While webpack will stay in Next.js, we're expecting that because of the benefits of Turbopack, the majority of Next.js applications will want to use it. Once Turbopack for production builds is complete we'll start work to support commonly used webpack plugins."
		},
		{
			"heading": "roadmap",
			"content": "We have loose plans for Turbopack beyond that, but we'd like to keep this post constrained to what we can confidently ship in the foreseeable future. We may only be talking about two features, but there's a lot that goes into them, so it's worth diving into."
		},
		{
			"heading": "persistent-caching-fast-refresh-across-restarts",
			"content": "Persistent caching means storing the work done by the compiler in a way that allows it to be reused across restarts of the development server or across multiple production builds."
		},
		{
			"heading": "persistent-caching-fast-refresh-across-restarts",
			"content": "In short, Turbopack avoids redoing the same work, even if you restart."
		},
		{
			"heading": "persistent-caching-fast-refresh-across-restarts",
			"content": "As mentioned in the Faster Fast Refresh section, we built Turbo Engine to ensure work can be parallelized and cached, so that whenever you make a file change, we only have to run the work related to that file change. What if we could give you this experience across restarts and when opening a route? We wouldn't have to redo compilation work that was already done in a previous development session. What if we could get the benefits of Fast Refresh but for opening routes compiled in previous development sessions and across multiple builds with the `next build`?"
		},
		{
			"heading": "persistent-caching-fast-refresh-across-restarts",
			"content": "That's exactly what we've been working on: a new storage layer for Turbo Engine that supports persisting the compilation work to disk and restoring it when starting the development server or building again."
		},
		{
			"heading": "persistent-caching-fast-refresh-across-restarts",
			"content": "While webpack does have disk caching enabled by default in Next.js, it has quite a few limitations. It's notable that a large portion of the cache has to be restored from disk and read into memory in order to function. It never quite felt like there is a granular enough cache. For example, on larger applications at Vercel, we found that the webpack disk cache could even be slower than doing all the work from scratch when the cache had grown to a sufficiently large size."
		},
		{
			"heading": "persistent-caching-fast-refresh-across-restarts",
			"content": "Unlike the existing disk caching with webpack, the persistent cache with Turbopack truly feels like Fast Refresh across restarts. Routes that take over 10 seconds to compile the very first time take less than 500ms to restore from cache once they've been compiled once."
		},
		{
			"heading": "persistent-caching-fast-refresh-across-restarts",
			"content": "We have seen similar results for `next build` with Turbopack, where only the changed files are recompiled, and everything else stays as-is. In the multiple steps that `next build` takes, this moves the majority of time spent from running compilation and bundling to running TypeScript type checking."
		},
		{
			"heading": "persistent-caching-fast-refresh-across-restarts",
			"content": "The persistent caching is currently a work in progress, as we want to verify it using our internal Next.js applications first. The initial results are very promising, and performance will get even better over time as we keep optimizing these hot paths."
		},
		{
			"heading": "persistent-caching-fast-refresh-across-restarts",
			"content": "Once the persistent cache is stable, it will be enabled by default. Enabling persistent caching will not require changes to your codebase."
		},
		{
			"heading": "persistent-caching-fast-refresh-across-restarts",
			"content": "If you are interested in testing out persistent caching, please reach out!"
		},
		{
			"heading": "production-builds",
			"content": "We're excited to share that we're making substantial progress towards stable production builds with Turbopack. Currently, 96% of our production tests are passing, which is a big step forward. However, there are still areas that need more work before we can confidently recommend Turbopack for production at scale."
		},
		{
			"heading": "production-builds",
			"content": "Production builds bring their own unique challenges compared to development, and we're actively working to address them. Below, we'll go over what's already been optimized and what's still in progress."
		},
		{
			"heading": "correctness",
			"content": "Ensuring correctness is essential for reliable production builds. Here's the current status:"
		},
		{
			"heading": "correctness",
			"content": "**CSS Chunking**: In progress. This feature is crucial for splitting CSS into smaller chunks, allowing only the necessary CSS to load for each part of the application, which helps reduce load times and ensures correct ordering of CSS rules.."
		},
		{
			"heading": "correctness",
			"content": "**Production JS Runtime**: Completed. This ensures that the JavaScript runtime behaves as expected in a production environment, providing reliability and stability."
		},
		{
			"heading": "correctness",
			"content": "**Content-Based File Name Hashing**: Not yet implemented. Content-based hashing will allow us to generate filenames based on content, enabling more efficient long-term caching in browsers."
		},
		{
			"heading": "ux-performance-optimizations",
			"content": "UX Performance is key to delivering fast load times and efficient resource usage. Here's what we're working on:"
		},
		{
			"heading": "ux-performance-optimizations",
			"content": "**JS Minify**: Completed. We've implemented SWC Minify, which Next.js already uses with webpack since Next.js 13."
		},
		{
			"heading": "ux-performance-optimizations",
			"content": "**CSS Minify**: Completed. CSS minification with Lightning CSS, which is important for reducing the size of stylesheets."
		},
		{
			"heading": "ux-performance-optimizations",
			"content": "**Global Information (Whole Application Optimizations)**: Completed. Turbopack can apply optimizations that require data about all routes in the application, for example module id hashing."
		},
		{
			"heading": "ux-performance-optimizations",
			"content": "**Tree Shaking**: Partially completed. In progress. We have partial support for tree-shaking, which helps eliminate unused code and reduce bundle sizes. However, there are scenarios where tree-shaking is not fully effective yet:"
		},
		{
			"heading": "ux-performance-optimizations",
			"content": "**Dynamic Imports**: Tree shaking is limited for dynamic imports like using `next/dynamic`."
		},
		{
			"heading": "ux-performance-optimizations",
			"content": "**Complex Exports**: Certain types of exports, like `export { foo as \"string name\" }`."
		},
		{
			"heading": "ux-performance-optimizations",
			"content": "**Non-ES Modules**: CommonJS modules are not tree-shakeable."
		},
		{
			"heading": "ux-performance-optimizations",
			"content": "**Barrel Files**: Re-exports from barrel files are inefficient, with limitations in skipping side-effect-free modules."
		},
		{
			"heading": "ux-performance-optimizations",
			"content": "**Fragmentation**: In some cases, tree-shaking can create too many fragments, leading to inefficient bundles."
		},
		{
			"heading": "ux-performance-optimizations",
			"content": "**Module ID Hashing (Partial)**: In progress. Module ID hashing is partially implemented but we're working on improving the performance. Once fully enabled, it will help reduce the final bundle size."
		},
		{
			"heading": "ux-performance-optimizations",
			"content": "**Export Name Mangling**: In progress. This involves reducing the size of exported names to reduce the final bundle size."
		},
		{
			"heading": "ux-performance-optimizations",
			"content": "**Scope Hoisting**: Not yet implemented. Scope hoisting will help reduce bundle size by merging smaller JavaScript modules into a single scope, which reduces overhead and improves performance."
		},
		{
			"heading": "ux-performance-optimizations",
			"content": "**Production Optimized JS Chunking**: Not yet implemented. Chunking JavaScript to minimize duplication is essential for improving load performance, especially for larger applications."
		},
		{
			"heading": "stay-tuned",
			"content": "We're thrilled to confidently recommend the `next dev --turbo`, and we can't wait to hear how it improves your development experience. Give it a try today and see the performance gains for yourself."
		},
		{
			"heading": "stay-tuned",
			"content": "This is just the beginning—persistent caching and production builds are on the horizon, which will bring even more speed and reliability to your workflow."
		},
		{
			"heading": "stay-tuned",
			"content": "We'll share more updates as we progress towards ensuring correctness and optimizing performance to handle even the largest applications seamlessly. Stay tuned for future releases and improvements as we work towards making Turbopack the best solution for both development and production builds."
		},
		{
			"heading": "contributors",
			"content": "We are thankful to the thousands of developers who participated in testing, reporting issues, and verifying fixes throughout the Turbopack beta and release candidate phases."
		},
		{
			"heading": "contributors",
			"content": "This release was brought to you by:"
		},
		{
			"heading": "contributors",
			"content": "The **Turbopack** team: Alex, Benjamin, Donny, Justin, Leah, Maia, Niklas, OJ, Tim, Tobias, and Will."
		},
		{
			"heading": "contributors",
			"content": "The **Next.js** team: Andrew, Hendrik, Janka, Jiachi, Jimmy, Jiwon, JJ, Josh, Sam, Sebastian, Sebbie, Shu, Wyatt, and Zack."
		},
		{
			"heading": "contributors",
			"content": "The **Next.js Docs** team: Delba, Rich, Ismael, and Lee."
		}
	],
	"headings": [
		{
			"id": "highlights",
			"content": "Highlights"
		},
		{
			"id": "faster-initial-compile-of-a-route",
			"content": "Faster initial compile of a route"
		},
		{
			"id": "faster-fast-refresh",
			"content": "Faster Fast Refresh"
		},
		{
			"id": "advanced-tracing",
			"content": "Advanced Tracing"
		},
		{
			"id": "less-flakiness-in-compile-times",
			"content": "Less flakiness in compile times"
		},
		{
			"id": "development-builds-that-closely-match-production",
			"content": "Development builds that closely match production"
		},
		{
			"id": "our-first-stable-release",
			"content": "Our first stable release"
		},
		{
			"id": "what-exactly-is-stable",
			"content": "What exactly is stable?"
		},
		{
			"id": "performance",
			"content": "Performance"
		},
		{
			"id": "breaking-changes",
			"content": "Breaking changes"
		},
		{
			"id": "roadmap",
			"content": "Roadmap"
		},
		{
			"id": "persistent-caching-fast-refresh-across-restarts",
			"content": "Persistent caching (Fast Refresh across restarts)"
		},
		{
			"id": "production-builds",
			"content": "Production Builds"
		},
		{
			"id": "production-optimizations",
			"content": "Production Optimizations"
		},
		{
			"id": "correctness",
			"content": "Correctness"
		},
		{
			"id": "ux-performance-optimizations",
			"content": "UX Performance Optimizations"
		},
		{
			"id": "stay-tuned",
			"content": "Stay Tuned"
		},
		{
			"id": "contributors",
			"content": "Contributors"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#highlights",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#highlights",
			children: "Highlights"
		}) })
	},
	{
		depth: 3,
		url: "#faster-initial-compile-of-a-route",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#faster-initial-compile-of-a-route",
			children: "Faster initial compile of a route"
		}) })
	},
	{
		depth: 3,
		url: "#faster-fast-refresh",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#faster-fast-refresh",
			children: "Faster Fast Refresh"
		}) })
	},
	{
		depth: 3,
		url: "#advanced-tracing",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#advanced-tracing",
			children: "Advanced Tracing"
		}) })
	},
	{
		depth: 3,
		url: "#less-flakiness-in-compile-times",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#less-flakiness-in-compile-times",
			children: "Less flakiness in compile times"
		}) })
	},
	{
		depth: 3,
		url: "#development-builds-that-closely-match-production",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#development-builds-that-closely-match-production",
			children: "Development builds that closely match production"
		}) })
	},
	{
		depth: 2,
		url: "#our-first-stable-release",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#our-first-stable-release",
			children: "Our first stable release"
		}) })
	},
	{
		depth: 3,
		url: "#what-exactly-is-stable",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#what-exactly-is-stable",
			children: "What exactly is stable?"
		}) })
	},
	{
		depth: 3,
		url: "#performance",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#performance",
			children: "Performance"
		}) })
	},
	{
		depth: 3,
		url: "#breaking-changes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#breaking-changes",
			children: "Breaking changes"
		}) })
	},
	{
		depth: 2,
		url: "#roadmap",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#roadmap",
			children: "Roadmap"
		}) })
	},
	{
		depth: 3,
		url: "#persistent-caching-fast-refresh-across-restarts",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#persistent-caching-fast-refresh-across-restarts",
			children: "Persistent caching (Fast Refresh across restarts)"
		}) })
	},
	{
		depth: 3,
		url: "#production-builds",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#production-builds",
			children: "Production Builds"
		}) })
	},
	{
		depth: 3,
		url: "#production-optimizations",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#production-optimizations",
			children: "Production Optimizations"
		}) })
	},
	{
		depth: 3,
		url: "#correctness",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#correctness",
			children: "Correctness"
		}) })
	},
	{
		depth: 3,
		url: "#ux-performance-optimizations",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#ux-performance-optimizations",
			children: "UX Performance Optimizations"
		}) })
	},
	{
		depth: 2,
		url: "#stay-tuned",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#stay-tuned",
			children: "Stay Tuned"
		}) })
	},
	{
		depth: 2,
		url: "#contributors",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#contributors",
			children: "Contributors"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"It's been a long road, but we are happy to announce that ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev --turbo" }),
			" is now stable and ready to speed up your development experience. We've been using it to iterate on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://vercel.com",
				children: "vercel.com"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://nextjs.org",
				children: "nextjs.org"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://v0.dev",
				children: "v0"
			}),
			", and all of our other applications with great results."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Since its release 8 years ago, Next.js has been used to build everything, from weekend hobby projects to sophisticated enterprise applications. When Next.js was first released, webpack was clearly the best choice for the framework's bundling foundation, but over time it has struggled to keep up with the needs of modern web developers. Our community started to find it painfully slow to iterate while waiting for routes to load, code changes to reflect, and production builds to deploy." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We invested a lot of ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-12#faster-builds-and-fast-refresh-with-rust-compiler",
				children: "time"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-13-5#improving-startup-and-fast-refresh-time",
				children: "effort"
			}),
			" optimizing webpack, but at a certain point, we felt we weren't getting enough improvement for the effort involved. We needed a new foundation that could support the many Next.js applications already in production today, as well as the future innovations we had planned, like React Server Components."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "These were our requirements for this new bundler:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Minimal breaking changes" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Support for both App Router and Pages Router" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Faster compile times for codebases of all sizes" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Development builds that closely match production" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Advanced production optimizations (e.g. tree shaking within modules)" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Module graph that supports multiple environments like Node.js and the browser" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Full observability for maintainers and advanced users" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We evaluated all existing solutions at the time and found that each one had trade-offs that didn't align with our requirements and goals. It made sense for us to design something from the ground up that could accomplish exactly what Next.js needs today and own the roadmap so we can build and experiment with what it will need tomorrow. This was our motivation to create Turbopack." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We started out by optimizing the development experience, and that's what we're releasing as stable today. We've been extensively dogfooding Turbopack with Vercel's applications, and have noticeably improved the iteration velocity of our developers. For example, with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "vercel.com" }),
			", a large Next.js app, we've seen:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Up to ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "76.7% faster" }),
				" local server startup."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Up to ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "96.3% faster" }),
				" code updates with Fast Refresh."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Up to ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "45.8% faster" }),
				" initial route compile without caching (Turbopack does not have disk caching yet)."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In this post, we'll discuss how we achieved these results, along with some other highlights. We'll also clarify exactly what to expect from this release and provide a roadmap for what to expect next." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "highlights",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#highlights",
				children: "Highlights"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "faster-initial-compile-of-a-route",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#faster-initial-compile-of-a-route",
				children: "Faster initial compile of a route"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "One of the biggest issues we were hearing from our community was that routes were taking too long to load in development, which came down to webpack's compilation speed. Next.js compiles routes on-demand to avoid having to compile all possible routes before they are needed, which keeps the initial startup fast and memory usage lower, but even then, you could still find yourself tapping your feet while waiting for a single page to load." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To be fair, bundlers like webpack are doing a lot underneath the hood. When compiling a route for the first time, the bundler starts at an “entrypoint”. In the case of Next.js, it's a combination of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "page.tsx" }),
			" and all related files for that route, like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.tsx" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "loading.tsx" }),
			", etc. These entrypoints are parsed to find ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "import" }),
			" statements that get resolved to files, which then get processed the same as the entrypoints, and this cycle continues until no more imports are found. This process builds a graph of modules, which can be made up of not just TypeScript / JavaScript modules (including ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "node_modules" }),
			"), but also CSS files (both global and CSS modules), and static files like imported images for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "After all modules are collected, the module graph is used to create bundles of JavaScript, often referred to as “chunks.” These chunks are the outputs of the compiler that run on the server (at build-time or runtime) or in the browser." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"webpack does not support creating graphs that produce outputs for multiple environments, so we have to run at least two separate compilers in Next.js with webpack today, one for the server and one for the browser. We must compile the server module graph first so that all references to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "\"use client\"" }),
			" can be found. Once the server is built, we traverse its graph to create the relevant entrypoints for the browser compiler. Since this is a separate webpack compiler, there's some overhead in this process, like parsing the same code twice across client and server."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "With Turbopack, we set out to remove the overhead of running multiple compilers and coordinating between them. The solution was to make the compiler aware of multiple different output targets. Internally, these are called target “transitions”. We can mark an import as a transition from server to browser or from browser to server. This is what allows Turbopack to efficiently bundle Server Components and Client Components, as well as Server Functions imported from Client Components." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In addition to improving performance, having a single compiler that can handle multiple environments in a single pass has reliability and debugging benefits, as we no longer have to coordinate between two separate compiler processes in Next.js." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Another big difference between webpack and Turbopack is that Turbopack can parallelize work across multiple CPUs, whereas with webpack, only the TypeScript / JavaScript transformation step using SWC is parallelized." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "webpack doesn't support parallelizing across CPUs because, in order to parallelize effectively, data must be easily accessible across threads. webpack was built in a way that heavily uses large JavaScript objects, which can't be shared across threads easily without expensive serialization and deserialization. This overhead often negates the performance improvement of leveraging multiple CPUs. Turbopack is written in Rust, which does not have the same limitations, and was built with parallelization in mind from the start." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We were also able to achieve performance wins with faster filesystem reads and writes, faster module resolution, and by ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://gist.github.com/timneutkens/63f95e096a7a060627ca53056720022e",
				children: "skipping more work on side-effect free modules"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When using Turbopack on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://vercel.com",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "vercel.com" })
			}),
			", a large Next.js application, we've seen up to ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "45.8%" }),
			" ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "faster" }),
			" initial compilation compared to Next.js with webpack."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "faster-fast-refresh",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#faster-fast-refresh",
				children: "Faster Fast Refresh"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Fast Refresh is the system that bundlers use to propagate changes to the route you're currently looking at in the browser, sometimes referred to as Hot Module Replacement (HMR)." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js has a deeper integration that connects Fast Refresh to React, making sure that React doesn't lose state whenever you change a component." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "With webpack, we found there is a limit to the performance of Fast Refresh when you hit a certain number of JavaScript modules. Webpack needs to do graph traversal and generate outputs even for modules that have not changed, scaling linearly with the amount of JavaScript modules." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We found that at around 30,000 modules, code changes consistently have at least 1 second of overhead to process an update, regardless of whether the change is small. For example, changing a color in a CSS file could take 1 second to show up on screen." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This performance was not acceptable for us. We believe that incremental builds should scale with only the size of local changes, not the size of the route or application. When ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "button.tsx" }),
			" changes, the compiler should only have to run the work related to that file change instead of having to recompute other modules and output files that are not affected by the change. To combat this, we prioritized a foundation in Turbopack that allows very granular recomputing of work."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This effort turned into the underlying library, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/api-reference/turbopack",
				children: "Turbo Engine"
			}),
			", which uses an automatic demand-driven incremental computation architecture to provide interactive hot-reloading of massive Next.js and React applications in tens of milliseconds. This architecture is based on over a decade of research and prior art, including ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://webpack.js.org/",
				children: "webpack"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/salsa-rs/salsa",
				children: "Salsa"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://parceljs.org/",
				children: "Parcel"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://adapton.org/",
				children: "Adapton"
			}),
			", and the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://rustc-dev-guide.rust-lang.org/query.html",
				children: "Rust compiler's query system"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Now with Turbopack, Fast Refresh speed scales with the size of your changes, which is how we've been able to achieve ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "96.3% faster" }),
			" code updates with Fast Refresh on large Next.js apps like ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://vercel.com",
				children: "vercel.com"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "advanced-tracing",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#advanced-tracing",
				children: "Advanced Tracing"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "As Next.js has grown in adoption over the years, we've found it increasingly hard to reproduce reported issues on GitHub, especially related to compiler performance and memory usage. This is because most people can't share their application code, or when they share the code, the application can't run because it requires a database or other setup." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To begin to address this, we added tracing to the internals of Next.js. These traces are written to a file in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".next" }),
			" folder and do not include application code — only the file path, the time the compiler took on it, and other timings like individual transforms. However, with webpack, we never had a good way to clearly distinguish memory usage of the compiler from memory usage of framework or application code, as they all run in the same Node.js instance."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With Turbopack, we were able to design with instrumentation from the beginning. We implemented an instrumentation layer in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/api-reference/turbopack",
				children: "Turbo Engine"
			}),
			" that allows for collecting timings of each individual function. We were able to extend these traces to also keep track of the memory allocation, deallocation, and persisted memory across every function."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This new, advanced tracing gives us all the information needed to investigate slowdowns and memory usage deeply; it only requires a trace instead of a full codebase." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In order to process these new traces, we've implemented a custom trace viewer that stays performant regardless of application and trace size. It's a trace viewer specifically built for investigating slowdowns and memory usage for Turbopack and has allowed us to optimize performance across many early adopter applications as it shortens the feedback loop." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"While the trace viewer was initially built for internal usage (and it's intended for situations where a deep technical dive is needed), we've landed the required pieces to run it yourself in Next.js. You can generate a Turbopack trace using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/canary/architecture/turbopack#generating-trace-files",
				children: "these instructions"
			}),
			". Then, when the trace is generated, you can use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next internal turbo-trace-server .next/trace-turbopack" }),
			" to start the server that allows for inspecting the trace. There is a quick video overview of the trace viewer ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.youtube.com/watch?v=PGO2szAye7A&t=1s",
				children: "available here"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "less-flakiness-in-compile-times",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#less-flakiness-in-compile-times",
				children: "Less flakiness in compile times"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When using Next.js with webpack, compile times are often not transparent enough. In one case, it may take 10 seconds to open a page, and in another, it may take 20 seconds. While a cache may be present, it sometimes doesn't have enough impact to produce consistent results. Even on compilation without caches, we've seen some variance." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The underlying architecture of Turbopack ensures variance in compile times is much more consistent. The compile times for routes only vary a few percent, allowing us to consistently optimize the compiler performance." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "development-builds-that-closely-match-production",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#development-builds-that-closely-match-production",
				children: "Development builds that closely match production"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In order to optimize for compilation speed with webpack, we had to accept some trade-offs that resulted in divergent development and production environments. Some examples of those trade-offs are that we use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "style-loader" }),
			", which injects the style into the page and allows for Fast Refreshing them, without reloading the page. However, this means that the styles are injected by JavaScript in development, which causes a flash of unstyled content. We work around this flash of unstyled content, so you don't see it. Another example is that Next.js with webpack uses ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eval-source-map" }),
			", meaning that all code is wrapped in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eval" }),
			" and the sourcemaps are included in that, which ensures sourcemaps are available in development at the expense of the bundled code being harder to inspect and debug. While webpack supports outputting full sourcemaps using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "source-map" }),
			" option, it causes an outsized impact on compilation time and memory usage."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For Turbopack, we set out to solve these by default, outputting CSS files and sourcemaps without using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eval" }),
			". Turbopack leverages ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://tc39.es/source-map/#index-map",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "sections" }), " sourcemaps"]
			}),
			", a relatively new part of the source-map specification that allows for more efficient merging of sourcemaps outputs. Where we previously had to generate all mappings in one place, we're now able to generate and cache them much more granularly."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The CSS handling in Turbopack always outputs CSS files, and similar to JavaScript handling it can update the CSS file without refreshing the browser by a mechanism that is part of the Turbopack development runtime." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We can now confidently say that when something works in development with Turbopack, it also works and behaves the same in production." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "our-first-stable-release",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#our-first-stable-release",
				children: "Our first stable release"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Two years ago, we introduced Turbopack as an alpha with Next.js 13, offering a preview of its performance potential. While initial results were promising, it only supported basic usage—many Next.js features, like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "basePath" }),
			", weren't yet implemented."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Over the following year, we focused on adding missing Next.js and bundling features. Based on community feedback, we decided to fully focus on the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			" experience so we could address the most common iteration velocity complaints. By last year's Next.js Conf, 90% of development tests were passing, and Vercel developers were already using Turbopack in day-to-day development."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In April, we announced Next.js 14.2 with 99.8% of tests passing, reaching 100% soon after. Since then, we've addressed GitHub-reported issues, especially around npm packages, Fast Refresh, and error location accuracy." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Admittedly, the road to stability has taken a long time, but that mostly comes down to Next.js's extensive test suite, which sets a high bar for stability. We've had 8 years to uncover edge cases and add 6,599 development tests that also needed to pass with Turbopack. An additional factor is that we designed Turbopack with a completely different architecture than webpack. Simply porting webpack to Rust would have been easier but wouldn't have unlocked the performance wins we want to achieve." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Now that Turbopack passes all tests, has been validated with top npm packages, and feedback from early adopters is addressed, we're ready to stamp it as stable." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "what-exactly-is-stable",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#what-exactly-is-stable",
				children: "What exactly is stable?"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This has been a point of confusion in the past, so we'll take this section to clarify what this release unlocks for the Next.js community." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This release specifically marks the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev --turbo" }),
			" command as stable. Production builds (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build --turbo" }),
			") are not supported yet, but keep reading for an update as they are in progress. We eventually plan to release a standalone version of Turbopack outside of Next.js, but we want to prove its merit by enhancing the Next.js community's experience first."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Other than the unsupported features we will cover in the next section, Turbopack should work with all stable features of Next.js. For clarity, Turbopack supports both App Router and Pages Router. Experimental features may or may not work with Turbopack, but they certainly will by the time they are marked stable." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If your application has webpack customization but only adds webpack loaders, you might be able to already use Turbopack by configuring the loaders for Turbopack. You can ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/canary/app/api-reference/next-config-js/turbo#webpack-loaders",
				children: "read the documentation"
			}),
			" for webpack loader support in Turbopack."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Here's a list of webpack loaders that are verified to work with Turbopack:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "@svgr/webpack" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "babel-loader" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "url-loader" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "file-loader" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "raw-loader" }) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "tsconfig-paths-webpack-plugin" }), " — supported out of the box, no plugin needed."] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Most other loaders also work, as we support a subset of the webpack loader API." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Most CSS and CSS-in-JS libraries are supported:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Supported",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Tailwind CSS" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "@emotion/react" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Sass" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "styled-components" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Bootstrap" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Antd" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "node-sass" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "JSS" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Emotion" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "theme-ui (uses Emotion)" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "@chakra-ui/core (with Emotion)" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "aphrodite" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Not supported currently",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Less — You can add less-loader. Next.js with webpack doesn't support Less out of the box either." }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "@vanilla-extract/css — Uses a custom webpack plugin — We're going to look into what it takes to support the required hooks in the future." }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"StyleX — Requires a Babel transform and support for ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "data:" }),
						" attributes — We're going to look into supporting StyleX after ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "next build --turbo" }),
						" is stable."
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "performance",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#performance",
				children: "Performance"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We want to call out that the performance of the version released today is significantly better than that of the webpack, but it is not the final performance number. We've been following Kent Beck's famous formula of “Make it work. Make it good. Make it fast.\" So far, a large portion of our effort has gone towards the “Make it work” stage since we have to catch up to the scope of Next.js and webpack, which have matured for close to a decade." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Turbopack is betting heavily on its caching infrastructure, but as you may know, caching is one of the only two hard things in software development. From experience, we knew that adding caching to an architecture that wasn't explicitly built for it can lead to undesirable results, so we enabled caching for even the most granular functions. This means that rebuilds are extremely fast at the cost of cold builds and memory usage, and we are working towards a better balance. The neat thing is that we can use our advanced tracing mentioned earlier in the post to find inefficiencies and profile which functions are most worthwhile to cache." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Over the past 3 months, we've already made some significant improvements. Comparing Turbopack in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-15-rc2",
				children: "Next.js 15 RC 2"
			}),
			" versus Turbopack in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-15-rc",
				children: "15 RC 1"
			}),
			" shows the results of these optimizations:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"A 25-35% average reduction in ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "memory" }),
				" usage."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"A 30-50% faster ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "initial" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "compilation" }),
				" for large pages with thousands of modules."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The stable version of Turbopack contains an in-memory cache that must be rebuilt on every restart of the development server, which can take ten or more seconds for large applications. Something we're extremely excited about are the big wins we're seeing when testing on-disk persistent caching, which we will cover later in this post." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "breaking-changes",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#breaking-changes",
				children: "Breaking changes"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A huge motivation for building our own bundler was the need to match the existing behaviors of webpack as much as possible, which is something we couldn't guarantee with any existing solution at the time. This includes the way files are resolved and smaller features of webpack, such as ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://webpack.js.org/api/module-methods/#magic-comments",
				children: [
					"the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "webpackIgnore" }),
					" comment"
				]
			}),
			" that some npm packages use."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Unfortunately, we did have to remove some features in order to future-proof Turbopack and the related Next.js implementation. Those features will still be supported when you use webpack." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "There are a few highlights, let's dig into the reasons why we had to change them:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "webpack()" }), " configuration is not supported."] }),
			" Turbopack is not webpack, it doesn't have the same configuration option structure, though it does support many of the same features. Specifically we have implemented support for ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/next-config-js/turbo#webpack-loaders",
				children: "webpack loaders"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/next-config-js/turbo#resolve-aliases",
				children: "resolve aliases"
			}),
			". Most webpack loaders that are transforming code are supported out of the box. Some webpack loaders that do exotic things, like a webpack child compiler and emitting files, are not supported."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: ".babelrc" }), " will not automatically transform code."] }),
			" Turbopack leverages ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/architecture/nextjs-compiler#why-swc",
				children: "SWC"
			}),
			" by default. You're still able to add ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "babel-loader" }),
			" as needed, but we're ensuring the defaults are always fast and that these make sense in terms of architecture too. We always have to run SWC, even if you configure ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".babelrc" }),
			", in order to process other optimizations. This is similar to how webpack always has to run the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "acorn" }),
			" parser to do further optimizations. If you use SWC instead of Babel with Turbopack, we can parse once and leverage the same abstract syntax tree (AST) end-to-end throughout Turbopack."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Some lesser-used CSS Modules features." }),
			" We've switched the processing of CSS from PostCSS to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://lightningcss.dev/",
				children: "Lightning CSS"
			}),
			". Lightning CSS is a significantly faster CSS compiler that supports CSS transformations, minification, and CSS Modules out of the box. The trade-off is that some lesser-used features are not supported. Specifically ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ":global" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ":local" }),
			" pseudo selectors (their function variant ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ":global()" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ":local()" }),
			" still work), ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@value" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ":import / :export" }),
			" ICSS rules. It's also a bit stricter than other CSS parsers and will point to errors in code rather than ignore them."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In the process of adding Lightning CSS we've contributed back to the project. For example, we implemented granular options for CSS Modules to disable CSS grid prefixing and the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pure" }),
			" mode for CSS Modules. This makes it easier to adopt Lightning CSS for CSS Modules when coming from css-loader in webpack. We have also improved errors for the unsupported CSS Modules features."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We are thankful to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://x.com/devongovett",
				children: "Devon Govett"
			}),
			", the author and maintainer of Lightning CSS, for the continued collaboration on the project."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Experimental features." }), " As we are focused on Turbopack's stability in Next.js, we've decided to focus on the stable features that are available in Next.js first."] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For the full list, see the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/canary/architecture/turbopack#unsupported-features",
				children: "documentation page"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "roadmap",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#roadmap",
				children: "Roadmap"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Turbopack has come a long way, but there's still a lot of work to be done. The two exciting features coming down the pipeline are persistent caching and production builds. We expect the rollout to look something like the following order:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Persistent caching — Future Minor" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Builds beta — Future Minor" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Builds release candidate — Future Minor" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Builds stable — Future Minor" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Recommended in create-next-app for new applications — Future Minor" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Default in Next.js when you don't have custom webpack configuration — Future Major" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "While webpack will stay in Next.js, we're expecting that because of the benefits of Turbopack, the majority of Next.js applications will want to use it. Once Turbopack for production builds is complete we'll start work to support commonly used webpack plugins." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We have loose plans for Turbopack beyond that, but we'd like to keep this post constrained to what we can confidently ship in the foreseeable future. We may only be talking about two features, but there's a lot that goes into them, so it's worth diving into." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "persistent-caching-fast-refresh-across-restarts",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#persistent-caching-fast-refresh-across-restarts",
				children: "Persistent caching (Fast Refresh across restarts)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Persistent caching means storing the work done by the compiler in a way that allows it to be reused across restarts of the development server or across multiple production builds." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In short, Turbopack avoids redoing the same work, even if you restart." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As mentioned in the Faster Fast Refresh section, we built ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/api-reference/turbopack",
				children: "Turbo Engine"
			}),
			" to ensure work can be parallelized and cached, so that whenever you make a file change, we only have to run the work related to that file change. What if we could give you this experience across restarts and when opening a route? We wouldn't have to redo compilation work that was already done in a previous development session. What if we could get the benefits of Fast Refresh but for opening routes compiled in previous development sessions and across multiple builds with the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			"?"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"That's exactly what we've been working on: a new storage layer for ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/api-reference/turbopack",
				children: "Turbo Engine"
			}),
			" that supports persisting the compilation work to disk and restoring it when starting the development server or building again."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "While webpack does have disk caching enabled by default in Next.js, it has quite a few limitations. It's notable that a large portion of the cache has to be restored from disk and read into memory in order to function. It never quite felt like there is a granular enough cache. For example, on larger applications at Vercel, we found that the webpack disk cache could even be slower than doing all the work from scratch when the cache had grown to a sufficiently large size." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Unlike the existing disk caching with webpack, the persistent cache with Turbopack truly feels like Fast Refresh across restarts. Routes that take over 10 seconds to compile the very first time take less than 500ms to restore from cache once they've been compiled once." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We have seen similar results for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			" with Turbopack, where only the changed files are recompiled, and everything else stays as-is. In the multiple steps that ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			" takes, this moves the majority of time spent from running compilation and bundling to running TypeScript type checking."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The persistent caching is currently a work in progress, as we want to verify it using our internal Next.js applications first. The initial results are very promising, and performance will get even better over time as we keep optimizing these hot paths." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Once the persistent cache is stable, it will be enabled by default. Enabling persistent caching will not require changes to your codebase." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If you are interested in testing out persistent caching, please reach out!" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "production-builds",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#production-builds",
				children: "Production Builds"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're excited to share that we're making substantial progress towards stable production builds with Turbopack. Currently, 96% of our production tests are passing, which is a big step forward. However, there are still areas that need more work before we can confidently recommend Turbopack for production at scale." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Production builds bring their own unique challenges compared to development, and we're actively working to address them. Below, we'll go over what's already been optimized and what's still in progress." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "production-optimizations",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#production-optimizations",
				children: "Production Optimizations"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "correctness",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#correctness",
				children: "Correctness"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Ensuring correctness is essential for reliable production builds. Here's the current status:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "CSS Chunking" }), ": In progress. This feature is crucial for splitting CSS into smaller chunks, allowing only the necessary CSS to load for each part of the application, which helps reduce load times and ensures correct ordering of CSS rules.."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Production JS Runtime" }), ": Completed. This ensures that the JavaScript runtime behaves as expected in a production environment, providing reliability and stability."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Content-Based File Name Hashing" }), ": Not yet implemented. Content-based hashing will allow us to generate filenames based on content, enabling more efficient long-term caching in browsers."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "ux-performance-optimizations",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#ux-performance-optimizations",
				children: "UX Performance Optimizations"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "UX Performance is key to delivering fast load times and efficient resource usage. Here's what we're working on:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "JS Minify" }), ": Completed. We've implemented SWC Minify, which Next.js already uses with webpack since Next.js 13."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "CSS Minify" }), ": Completed. CSS minification with Lightning CSS, which is important for reducing the size of stylesheets."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Global Information (Whole Application Optimizations)" }), ": Completed. Turbopack can apply optimizations that require data about all routes in the application, for example module id hashing."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Tree Shaking" }),
				": Partially completed. In progress. We have partial support for tree-shaking, which helps eliminate unused code and reduce bundle sizes. However, there are scenarios where tree-shaking is not fully effective yet:",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.strong, { children: "Dynamic Imports" }),
						": Tree shaking is limited for dynamic imports like using ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "next/dynamic" }),
						"."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.strong, { children: "Complex Exports" }),
						": Certain types of exports, like ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "export { foo as \"string name\" }" }),
						"."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Non-ES Modules" }), ": CommonJS modules are not tree-shakeable."] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Barrel Files" }), ": Re-exports from barrel files are inefficient, with limitations in skipping side-effect-free modules."] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Fragmentation" }), ": In some cases, tree-shaking can create too many fragments, leading to inefficient bundles."] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Module ID Hashing (Partial)" }), ": In progress. Module ID hashing is partially implemented but we're working on improving the performance. Once fully enabled, it will help reduce the final bundle size."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Export Name Mangling" }), ": In progress. This involves reducing the size of exported names to reduce the final bundle size."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Scope Hoisting" }), ": Not yet implemented. Scope hoisting will help reduce bundle size by merging smaller JavaScript modules into a single scope, which reduces overhead and improves performance."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Production Optimized JS Chunking" }), ": Not yet implemented. Chunking JavaScript to minimize duplication is essential for improving load performance, especially for larger applications."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "stay-tuned",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#stay-tuned",
				children: "Stay Tuned"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We're thrilled to confidently recommend the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev --turbo" }),
			", and we can't wait to hear how it improves your development experience. Give it a try today and see the performance gains for yourself."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This is just the beginning—persistent caching and production builds are on the horizon, which will bring even more speed and reliability to your workflow." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We'll share more updates as we progress towards ensuring correctness and optimizing performance to handle even the largest applications seamlessly. Stay tuned for future releases and improvements as we work towards making Turbopack the best solution for both development and production builds." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "contributors",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#contributors",
				children: "Contributors"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We are thankful to the thousands of developers who participated in testing, reporting issues, and verifying fixes throughout the Turbopack beta and release candidate phases." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This release was brought to you by:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Turbopack" }),
				" team: ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/arlyon",
					children: "Alex"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/bgw",
					children: "Benjamin"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/kdy1",
					children: "Donny"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/jridgewell",
					children: "Justin"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/forsakenharmony",
					children: "Leah"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/padmaia",
					children: "Maia"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/mischnic",
					children: "Niklas"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/kwonoj",
					children: "OJ"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/timneutkens",
					children: "Tim"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/sokra",
					children: "Tobias"
				}),
				", and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/wbinnssmith",
					children: "Will"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Next.js" }),
				" team: ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/acdlite",
					children: "Andrew"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/unstubbable",
					children: "Hendrik"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/lubieowoce",
					children: "Janka"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/huozhi",
					children: "Jiachi"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/feedthejim",
					children: "Jimmy"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/devjiwonchoi",
					children: "Jiwon"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/ijjk",
					children: "JJ"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/gnoff",
					children: "Josh"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/samcx",
					children: "Sam"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/sebmarkbage",
					children: "Sebastian"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/eps1lon",
					children: "Sebbie"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/shuding",
					children: "Shu"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/wyattjoh",
					children: "Wyatt"
				}),
				", and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/ztanner",
					children: "Zack"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Next.js Docs" }),
				" team: ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/delbaoliveira",
					children: "Delba"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/molebox",
					children: "Rich"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/ismaelrumzan",
					children: "Ismael"
				}),
				", and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/leerob",
					children: "Lee"
				}),
				"."
			] }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
//#endregion
export { turbopack_for_development_stable_exports as a, toc as i, frontmatter as n, structuredData as r, MDXContent as t };
