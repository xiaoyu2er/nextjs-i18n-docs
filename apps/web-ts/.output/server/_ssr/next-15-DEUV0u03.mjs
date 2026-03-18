import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-15-DEUV0u03.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_15_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 15",
	"description": "Next.js 15 introduces React 19 support, caching improvements, a stable release for Turbopack in development, new APIs, and more.",
	"author": [
		{
			"name": "Delba de Oliveira",
			"image": "/static/team/delba.jpg"
		},
		{
			"name": "Jimmy Lai",
			"image": "/static/team/jimmy.jpg"
		},
		{
			"name": "Rich Haines",
			"image": "/static/team/rich.jpg"
		}
	],
	"date": /* @__PURE__ */ new Date(1729530000507),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js 15 is officially stable and ready for production. This release builds on the updates from both RC1 and RC2. We've focused heavily on stability while adding some exciting updates we think you'll love. Try Next.js 15 today:"
		},
		{
			"heading": void 0,
			"content": "We're also excited to share more about what's coming next at Next.js Conf this Thursday, October 24th."
		},
		{
			"heading": void 0,
			"content": "Here's what is new in Next.js 15:"
		},
		{
			"heading": void 0,
			"content": "**`@next/codemod` CLI:** Easily upgrade to the latest Next.js and React versions."
		},
		{
			"heading": void 0,
			"content": "**Async Request APIs (Breaking):** Incremental step towards a simplified rendering and caching model."
		},
		{
			"heading": void 0,
			"content": "**Caching Semantics (Breaking):** `fetch` requests, `GET` Route Handlers, and client navigations are no longer cached by default."
		},
		{
			"heading": void 0,
			"content": "**React 19 Support:** Support for React 19, React Compiler (Experimental), and hydration error improvements."
		},
		{
			"heading": void 0,
			"content": "**Turbopack Dev (Stable):** Performance and stability improvements."
		},
		{
			"heading": void 0,
			"content": "**Static Indicator:** New visual indicator shows static routes during development."
		},
		{
			"heading": void 0,
			"content": "**`unstable_after` API (Experimental):** Execute code after a response finishes streaming."
		},
		{
			"heading": void 0,
			"content": "**`instrumentation.js` API (Stable):** New API for server lifecycle observability."
		},
		{
			"heading": void 0,
			"content": "**Enhanced Forms (`next/form`):** Enhance HTML forms with client-side navigation."
		},
		{
			"heading": void 0,
			"content": "**`next.config`:** TypeScript support for `next.config.ts`."
		},
		{
			"heading": void 0,
			"content": "**Self-hosting Improvements:** More control over `Cache-Control` headers."
		},
		{
			"heading": void 0,
			"content": "**Server Actions Security:** Unguessable endpoints and removal of unused actions."
		},
		{
			"heading": void 0,
			"content": "**Bundling External Packages (Stable):** New config options for App and Pages Router."
		},
		{
			"heading": void 0,
			"content": "**ESLint 9 Support:** Added support for ESLint 9."
		},
		{
			"heading": void 0,
			"content": "**Development and Build Performance:** Improved build times and Faster Fast Refresh."
		},
		{
			"heading": "smooth-upgrades-with-nextcodemod-cli",
			"content": "We include codemods (automated code transformations) with every major Next.js release to help automate upgrading breaking changes."
		},
		{
			"heading": "smooth-upgrades-with-nextcodemod-cli",
			"content": "To make upgrades even smoother, we've released an enhanced codemod CLI:"
		},
		{
			"heading": "smooth-upgrades-with-nextcodemod-cli",
			"content": "This tool helps you upgrade your codebase to the latest stable or prerelease versions. The CLI will update your dependencies, show available codemods, and guide you through applying them."
		},
		{
			"heading": "smooth-upgrades-with-nextcodemod-cli",
			"content": "The `canary` tag uses the latest version of the codemod while the latest specifies the Next.js version. We recommend using the canary version of the codemod even if you are upgrading to the latest Next.js version, as we plan to continue adding improvements to the tool based on your feedback."
		},
		{
			"heading": "smooth-upgrades-with-nextcodemod-cli",
			"content": "Learn more about Next.js codemod CLI."
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "In traditional Server-Side Rendering, the server waits for a request before rendering any content. However, not all components depend on request-specific data, so it's unnecessary to wait for the request to render them. Ideally, the server would prepare as much as possible before a request arrives. To enable this, and set the stage for future optimizations, we need to know when to wait for the request."
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "Therefore, we are transitioning APIs that rely on request-specific data—such as `headers`, `cookies`, `params`, and `searchParams`—to be **asynchronous**."
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "This is a **breaking change** and affects the following APIs:"
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "`cookies`"
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "`headers`"
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "`draftMode`"
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "`params` in `layout.js`, `page.js`, `route.js`, `default.js`, `generateMetadata`, and `generateViewport`"
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "`searchParams` in `page.js`"
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "For an easier migration, these APIs can temporarily be accessed synchronously, but will show warnings in development and production until the next major version. A codemod is available to automate the migration:"
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "For cases where the codemod can't fully migrate your code, please read the upgrade guide. We have also provided an example of how to migrate a Next.js application to the new APIs."
		},
		{
			"heading": "caching-semantics",
			"content": "Next.js App Router launched with opinionated caching defaults. These were designed to provide the most performant option by default with the ability to opt out when required."
		},
		{
			"heading": "caching-semantics",
			"content": "Based on your feedback, we re-evaluated our caching heuristics and how they would interact with projects like Partial Prerendering (PPR) and with third party libraries using `fetch`."
		},
		{
			"heading": "caching-semantics",
			"content": "With Next.js 15, we're changing the caching default for `GET` Route Handlers and the Client Router Cache from cached by default to uncached by default. If you want to retain the previous behavior, you can continue to opt-into caching."
		},
		{
			"heading": "caching-semantics",
			"content": "We're continuing to improve caching in Next.js in the coming months and we'll share more details soon."
		},
		{
			"heading": "get-route-handlers-are-no-longer-cached-by-default",
			"content": "In Next 14, Route Handlers that used the `GET` HTTP method were cached by default unless they used a dynamic function or dynamic config option. In Next.js 15, `GET` functions are **not cached by default**."
		},
		{
			"heading": "get-route-handlers-are-no-longer-cached-by-default",
			"content": "You can still opt into caching using a static route config option such as `export dynamic = 'force-static'`."
		},
		{
			"heading": "get-route-handlers-are-no-longer-cached-by-default",
			"content": "Special Route Handlers like `sitemap.ts`, `opengraph-image.tsx`, and `icon.tsx`, and other metadata files remain static by default unless they use dynamic functions or dynamic config options."
		},
		{
			"heading": "client-router-cache-no-longer-caches-page-components-by-default",
			"content": "In Next.js 14.2.0, we introduced an experimental `staleTimes` flag to allow custom configuration of the Router Cache."
		},
		{
			"heading": "client-router-cache-no-longer-caches-page-components-by-default",
			"content": "In Next.js 15, this flag still remains accessible, but we are changing the default behavior to have a `staleTime` of `0` for Page segments. This means that as you navigate around your app, the client will always reflect the latest data from the Page component(s) that become active as part of the navigation. However, there are still important behaviors that remain unchanged:"
		},
		{
			"heading": "client-router-cache-no-longer-caches-page-components-by-default",
			"content": "Shared layout data won't be refetched from the server to continue to support partial rendering."
		},
		{
			"heading": "client-router-cache-no-longer-caches-page-components-by-default",
			"content": "Back/forward navigation will still restore from cache to ensure the browser can restore scroll position."
		},
		{
			"heading": "client-router-cache-no-longer-caches-page-components-by-default",
			"content": "`loading.js` will remain cached for 5 minutes (or the value of the `staleTimes.static` configuration)."
		},
		{
			"heading": "client-router-cache-no-longer-caches-page-components-by-default",
			"content": "You can opt into the previous Client Router Cache behavior by setting the following configuration:"
		},
		{
			"heading": "react-19",
			"content": "As part of the Next.js 15 release, we've made the decision to align with the upcoming release of React 19."
		},
		{
			"heading": "react-19",
			"content": "In version 15, the App Router uses React 19 RC, and we've also introduced backwards compatibility for React 18 with the Pages Router based on community feedback. If you're using the Pages Router, this allows you to upgrade to React 19 when ready."
		},
		{
			"heading": "react-19",
			"content": "Although React 19 is still in the RC phase, our extensive testing across real-world applications and our close work with the React team have given us confidence in its stability. The core breaking changes have been well-tested and won't affect existing App Router users. Therefore, we've decided to release Next.js 15 as stable now, so your projects are fully prepared for React 19 GA."
		},
		{
			"heading": "react-19",
			"content": "To ensure the transition is as smooth as possible, we've provided codemods and automated tools to help ease the migration process."
		},
		{
			"heading": "react-19",
			"content": "Read the Next.js 15 upgrade guide, the React 19 upgrade guide, and watch the React Conf Keynote to learn more."
		},
		{
			"heading": "pages-router-on-react-18",
			"content": "Next.js 15 maintains backward compatibility for the Pages Router with React 18, allowing users to continue using React 18 while benefiting from improvements in Next.js 15."
		},
		{
			"heading": "pages-router-on-react-18",
			"content": "Since the first Release Candidate (RC1), we've shifted our focus to include support for React 18 based on community feedback. This flexibility enables you to adopt Next.js 15 while using the Pages Router with React 18, giving you greater control over your upgrade path."
		},
		{
			"heading": "pages-router-on-react-18",
			"content": "> **Note:** While it is possible to run the Pages Router on React 18 and the App Router on React 19 in the same application, we don't recommend this setup. Doing so could result in unpredictable behavior and typings inconsistencies, as the underlying APIs and rendering logic between the two versions may not fully align."
		},
		{
			"heading": "react-compiler-experimental",
			"content": "The React Compiler is a new experimental compiler created by the React team at Meta. The compiler understands your code at a deep level through its understanding of plain JavaScript semantics and the Rules of React, which allows it to add automatic optimizations to your code. The compiler reduces the amount of manual memoization developers have to do through APIs such as `useMemo` and `useCallback` - making code simpler, easier to maintain, and less error prone."
		},
		{
			"heading": "react-compiler-experimental",
			"content": "With Next.js 15, we've added support for the React Compiler. Learn more about the React Compiler, and the available Next.js config options."
		},
		{
			"heading": "react-compiler-experimental",
			"content": "> **Note:** The React Compiler is currently only available as a Babel plugin, which will result in slower development and build times."
		},
		{
			"heading": "hydration-error-improvements",
			"content": "Next.js 14.1 made improvements to error messages and hydration errors. Next.js 15 continues to build on those by adding an improved hydration error view. Hydration errors now display the source code of the error with suggestions on how to address the issue."
		},
		{
			"heading": "hydration-error-improvements",
			"content": "For example, this was a previous hydration error message in Next.js 14.1:"
		},
		{
			"heading": "hydration-error-improvements",
			"content": "Next.js 15 has improved this to:"
		},
		{
			"heading": "turbopack-dev",
			"content": "We are happy to announce that `next dev --turbo` is now **stable and ready** to speed up your development experience. We've been using it to iterate on vercel.com, nextjs.org, v0, and all of our other applications with great results."
		},
		{
			"heading": "turbopack-dev",
			"content": "For example, with `vercel.com`, a large Next.js app, we've seen:"
		},
		{
			"heading": "turbopack-dev",
			"content": "Up to **76.7% faster** local server startup."
		},
		{
			"heading": "turbopack-dev",
			"content": "Up to **96.3% faster** code updates with Fast Refresh."
		},
		{
			"heading": "turbopack-dev",
			"content": "Up to **45.8% faster** initial route compile without caching (Turbopack does not have disk caching yet)."
		},
		{
			"heading": "turbopack-dev",
			"content": "You can learn more about Turbopack Dev in our new blog post."
		},
		{
			"heading": "static-route-indicator",
			"content": "Next.js now displays a Static Route Indicator during development to help you identify which routes are static or dynamic. This visual cue makes it easier to optimize performance by understanding how your pages are rendered."
		},
		{
			"heading": "static-route-indicator",
			"content": "You can also use the next build output to view the rendering strategy for all routes."
		},
		{
			"heading": "static-route-indicator",
			"content": "This update is part of our ongoing efforts to enhance observability in Next.js, making it easier for developers to monitor, debug, and optimize their applications. We're also working on dedicated developer tools, with more details to come soon."
		},
		{
			"heading": "static-route-indicator",
			"content": "Learn more about the Static Route Indicator, which can be disabled."
		},
		{
			"heading": "executing-code-after-a-response-with-unstable_after-experimental",
			"content": "When processing a user request, the server typically performs tasks directly related to computing the response. However, you may need to perform tasks such as logging, analytics, and other external system synchronization."
		},
		{
			"heading": "executing-code-after-a-response-with-unstable_after-experimental",
			"content": "Since these tasks are not directly related to the response, the user should not have to wait for them to complete. Deferring the work after responding to the user poses a challenge because serverless functions stop computation immediately after the response is closed."
		},
		{
			"heading": "executing-code-after-a-response-with-unstable_after-experimental",
			"content": "`after()` is a new experimental API that solves this problem by allowing you to schedule work to be processed after the response has finished streaming, enabling secondary tasks to run without blocking the primary response."
		},
		{
			"heading": "executing-code-after-a-response-with-unstable_after-experimental",
			"content": "To use it, add `experimental.after` to `next.config.js`:"
		},
		{
			"heading": "executing-code-after-a-response-with-unstable_after-experimental",
			"content": "Then, import the function in Server Components, Server Actions, Route Handlers, or Middleware."
		},
		{
			"heading": "executing-code-after-a-response-with-unstable_after-experimental",
			"content": "Learn more about `unstable_after`."
		},
		{
			"heading": "instrumentationjs-stable",
			"content": "The `instrumentation` file, with the `register()` API, allows users to tap into the Next.js server lifecycle to monitor performance, track the source of errors, and deeply integrate with observability libraries like OpenTelemetry."
		},
		{
			"heading": "instrumentationjs-stable",
			"content": "This feature is now **stable** and the `experimental.instrumentationHook` config option can be removed."
		},
		{
			"heading": "instrumentationjs-stable",
			"content": "In addition, we've collaborated with Sentry on designing a new `onRequestError` hook that can be used to:"
		},
		{
			"heading": "instrumentationjs-stable",
			"content": "Capture important context about all errors thrown on the server, including:"
		},
		{
			"heading": "instrumentationjs-stable",
			"content": "Router: Pages Router or App Router"
		},
		{
			"heading": "instrumentationjs-stable",
			"content": "Server context: Server Component, Server Action, Route Handler, or Middleware"
		},
		{
			"heading": "instrumentationjs-stable",
			"content": "Report the errors to your favorite observability provider."
		},
		{
			"heading": "instrumentationjs-stable",
			"content": "Learn more about the `onRequestError` function."
		},
		{
			"heading": "form-component",
			"content": "The new `<Form>` component extends the HTML `<form>` element with prefetching, client-side navigation, and progressive enhancement."
		},
		{
			"heading": "form-component",
			"content": "It is useful for forms that navigate to a new page, such as a search form that leads to a results page."
		},
		{
			"heading": "form-component",
			"content": "The `<Form>` component comes with:"
		},
		{
			"heading": "form-component",
			"content": "**Prefetching**: When the form is in view, the layout and loading UI are prefetched, making navigation fast."
		},
		{
			"heading": "form-component",
			"content": "**Client-side Navigation:** On submission, shared layouts and client-side state are preserved."
		},
		{
			"heading": "form-component",
			"content": "**Progressive Enhancement**: If JavaScript hasn't loaded yet, the form still works via full-page navigation."
		},
		{
			"heading": "form-component",
			"content": "Previously, achieving these features required a lot of manual boilerplate. For example:"
		},
		{
			"heading": "form-component",
			"content": "Example"
		},
		{
			"heading": "form-component",
			"content": "Learn more about the `<Form>` Component."
		},
		{
			"heading": "support-for-nextconfigts",
			"content": "Next.js now supports the TypeScript `next.config.ts` file type and provides a `NextConfig` type for autocomplete and type-safe options:"
		},
		{
			"heading": "support-for-nextconfigts",
			"content": "Learn more about TypeScript support in Next.js."
		},
		{
			"heading": "improvements-for-self-hosting",
			"content": "When self-hosting applications, you may need more control over `Cache-Control` directives."
		},
		{
			"heading": "improvements-for-self-hosting",
			"content": "One common case is controlling the `stale-while-revalidate` period sent for ISR pages. We've implemented two improvements:"
		},
		{
			"heading": "improvements-for-self-hosting",
			"content": "You can now configure the `expireTime` value in `next.config`. This was previously the `experimental.swrDelta` option."
		},
		{
			"heading": "improvements-for-self-hosting",
			"content": "Updated the default value to one year, ensuring most CDNs can fully apply the `stale-while-revalidate` semantics as intended."
		},
		{
			"heading": "improvements-for-self-hosting",
			"content": "We also no longer override custom `Cache-Control` values with our default values, allowing full control and ensuring compatibility with any CDN setup."
		},
		{
			"heading": "improvements-for-self-hosting",
			"content": "Finally, we've improved image optimization when self-hosting. Previously, we recommended you install `sharp` for optimizing images on your Next.js server. This recommendation was sometimes missed. With Next.js 15, you no longer need to manually install `sharp` — Next.js will use `sharp` automatically when using `next start` or running with standalone output mode."
		},
		{
			"heading": "improvements-for-self-hosting",
			"content": "To learn more, see our new demo and tutorial video on self-hosting Next.js."
		},
		{
			"heading": "enhanced-security-for-server-actions",
			"content": "Server Actions are server-side functions that can be called from the client. They are defined by adding the `'use server'` directive at the top of a file and exporting an async function."
		},
		{
			"heading": "enhanced-security-for-server-actions",
			"content": "Even if a Server Action or utility function is not imported elsewhere in your code, it's still a publicly accessible HTTP endpoint. While this behavior is technically correct, it can lead to unintentional exposure of such functions."
		},
		{
			"heading": "enhanced-security-for-server-actions",
			"content": "To improve security, we've introduced the following enhancements:"
		},
		{
			"heading": "enhanced-security-for-server-actions",
			"content": "**Dead code elimination:** Unused Server Actions won't have their IDs exposed to the client-side JavaScript bundle, reducing bundle size and improving performance."
		},
		{
			"heading": "enhanced-security-for-server-actions",
			"content": "**Secure action IDs:** Next.js now creates unguessable, non-deterministic IDs to allow the client to reference and call the Server Action. These IDs are periodically recalculated between builds for enhanced security."
		},
		{
			"heading": "enhanced-security-for-server-actions",
			"content": "You should still treat Server Actions as public HTTP endpoints. Learn more about securing Server Actions."
		},
		{
			"heading": "optimizing-bundling-of-external-packages-stable",
			"content": "Bundling external packages can improve the cold start performance of your application. In the **App Router**, external packages are bundled by default, and you can opt-out specific packages using the new `serverExternalPackages` config option."
		},
		{
			"heading": "optimizing-bundling-of-external-packages-stable",
			"content": "In the **Pages Router**, external packages are not bundled by default, but you can provide a list of packages to bundle using the existing `transpilePackages` option. With this configuration option, you need to specify each package."
		},
		{
			"heading": "optimizing-bundling-of-external-packages-stable",
			"content": "To unify configuration between App and Pages Router, we're introducing a new option, `bundlePagesRouterDependencies` to match the default automatic bundling of the App Router. You can then use `serverExternalPackages` to opt-out specific packages, if needed."
		},
		{
			"heading": "optimizing-bundling-of-external-packages-stable",
			"content": "Learn more about optimizing external packages."
		},
		{
			"heading": "eslint-9-support",
			"content": "Next.js 15 also introduces support for ESLint 9, following the end-of-life for ESLint 8 on October 5, 2024."
		},
		{
			"heading": "eslint-9-support",
			"content": "To ensure a smooth transition, Next.js remain backwards compatible, meaning you can continue using either ESLint 8 or 9."
		},
		{
			"heading": "eslint-9-support",
			"content": "If you upgrade to ESLint 9, and we detect that you haven't yet adopted the new config format, Next.js will automatically apply the `ESLINT_USE_FLAT_CONFIG=false` escape hatch to ease migration."
		},
		{
			"heading": "eslint-9-support",
			"content": "Additionally, deprecated options like `—ext` and `—ignore-path` will be removed when running `next lint`. Please note that ESLint will eventually disallow these older configurations in ESLint 10, so we recommend starting your migration soon."
		},
		{
			"heading": "eslint-9-support",
			"content": "For more details on these changes, check out the migration guide."
		},
		{
			"heading": "eslint-9-support",
			"content": "As part of this update, we've also upgraded `eslint-plugin-react-hooks` to `v5.0.0`, which introduces new rules for React Hooks usage. You can review all changes in the changelog for eslint-plugin-react-hooks\\@5.0.0."
		},
		{
			"heading": "server-components-hmr",
			"content": "During development, Server components are re-executed when saved. This means, any `fetch` requests to your API endpoints or third-party services are also called."
		},
		{
			"heading": "server-components-hmr",
			"content": "To improve local development performance and reduce potential costs for billed API calls, we now ensure Hot Module Replacement (HMR) can re-use `fetch` responses from previous renders."
		},
		{
			"heading": "server-components-hmr",
			"content": "Learn more about the Server Components HMR Cache."
		},
		{
			"heading": "faster-static-generation-for-the-app-router",
			"content": "We've optimized static generation to improve build times, especially for pages with slow network requests."
		},
		{
			"heading": "faster-static-generation-for-the-app-router",
			"content": "Previously, our static optimization process rendered pages twice—once to generate data for client-side navigation and a second time to render the HTML for the initial page visit. Now, we reuse the first render, cutting out the second pass, reducing workload and build times."
		},
		{
			"heading": "faster-static-generation-for-the-app-router",
			"content": "Additionally, static generation workers now share the `fetch` cache across pages. If a `fetch` call doesn't opt out of caching, its results are reused by other pages handled by the same worker. This reduces the number of requests for the same data."
		},
		{
			"heading": "advanced-static-generation-control-experimental",
			"content": "We've added experimental support for more control over the static generation process for advanced use cases that would benefit from greater control."
		},
		{
			"heading": "advanced-static-generation-control-experimental",
			"content": "We recommend sticking to the current defaults unless you have specific requirements as these options can lead to increased resource usage and potential out-of-memory errors due to increased concurrency."
		},
		{
			"heading": "advanced-static-generation-control-experimental",
			"content": "Learn more about the Static Generation options."
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** next/image: Removed `squoosh` in favor of `sharp` as an optional dependency (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** next/image: Changed default `Content-Disposition` to `attachment` (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** next/image: Error when `src` has leading or trailing spaces (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** Middleware: Apply `react-server` condition to limit unrecommended React API imports (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** next/font: Removed support for external `@next/font` package (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** next/font: Removed `font-family` hashing (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** Caching: `force-dynamic` will now set a `no-store` default to the fetch cache (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** Config: Enable `swcMinify` (PR), `missingSuspenseWithCSRBailout` (PR), and `outputFileTracing` (PR) behavior by default and remove deprecated options"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** Remove auto-instrumentation for Speed Insights (must now use the dedicated @vercel/speed-insights package) (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** Remove `.xml` extension for dynamic sitemap routes and align sitemap URLs between development and production (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** We've deprecated exporting `export const runtime = \"experimental-edge\"` in the App Router. Users should now switch to `export const runtime = \"edge\"`. We've added a codemod to perform this (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** Calling `revalidateTag` and `revalidatePath` during render will now throw an error (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** The `instrumentation.js` and `middleware.js` files will now use the vendored React packages (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** The minimum required Node.js version has been updated to 18.18.0 (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** `next/dynamic`: the deprecated `suspense` prop has been removed and when the component is used in the App Router, it won't insert an empty Suspense boundary anymore (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** When resolving modules on the Edge Runtime, the `worker` module condition will not be applied (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** Disallow using `ssr: false` option with `next/dynamic` in Server Components (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Metadata: Updated environment variable fallbacks for `metadataBase` when hosted on Vercel (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Fix tree-shaking with mixed namespace and named imports from `optimizePackageImports` (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Parallel Routes: Provide unmatched catch-all routes with all known params (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Config `bundlePagesExternals` is now stable and renamed to `bundlePagesRouterDependencies`"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Config `serverComponentsExternalPackages` is now stable and renamed to `serverExternalPackages`"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** create-next-app: New projects ignore all `.env` files by default (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** The `outputFileTracingRoot`, `outputFileTracingIncludes` and `outputFileTracingExcludes` have been upgraded from experimental and are now stable (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Avoid merging global CSS files with CSS module files deeper in the tree (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** The cache handler can be specified via the `NEXT_CACHE_HANDLER_PATH` environment variable (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** The Pages Router now supports both React 18 and React 19 (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** The Error Overlay now displays a button to copy the Node.js Inspector URL if the inspector is enabled (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Client prefetches on the App Router now use the `priority` attribute (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Next.js now provides an `unstable_rethrow` function to rethrow Next.js internal errors in the App Router (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** `unstable_after` can now be used in static pages (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** If a `next/dynamic` component is used during SSR, the chunk will be prefetched (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** The `esmExternals` option is now supported on the App Router (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** The `experimental.allowDevelopmentBuild` option can be used to allow `NODE_ENV=development` with `next build` for debugging purposes (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** The Server Action transforms are now disabled in the Pages Router (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Build workers will now stop the build from hanging when they exit (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** When redirecting from a Server Action, revalidations will now apply correctly (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Dynamic params are now handled correctly for parallel routes on the Edge Runtime (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Static pages will now respect staleTime after initial load (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** `vercel/og` updated with a memory leak fix (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Patch timings updated to allow usage of packages like `msw` for APIs mocking (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Prerendered pages should use static staleTime (PR)"
		},
		{
			"heading": "other-changes",
			"content": "To learn more, check out the upgrade guide."
		},
		{
			"heading": "contributors",
			"content": "Next.js is the result of the combined work of over 3,000 individual developers, industry partners like Google and Meta, and our core team at Vercel. This release was brought to you by:"
		},
		{
			"heading": "contributors",
			"content": "The **Next.js** team: Andrew, Hendrik, Janka, Jiachi, Jimmy, Jiwon, JJ, Josh, Sam, Sebastian, Sebbie, Shu, Wyatt, and Zack."
		},
		{
			"heading": "contributors",
			"content": "The **Turbopack** team: Alex, Benjamin, Donny, Maia, Niklas, Tim, Tobias, and Will."
		},
		{
			"heading": "contributors",
			"content": "The **Next.js Docs** team: Delba, Rich, Ismael, and Lee."
		},
		{
			"heading": "contributors",
			"content": "Huge thanks to @AbhiShake1, @Aerilym, @AhmedBaset, @AnaTofuZ, @Arindam200, @Arinji2, @ArnaudFavier, @ArnoldVanN, @Auxdible, @B33fb0n3, @Bhavya031, @Bjornnyborg, @BunsDev, @CannonLock, @CrutchTheClutch, @DeepakBalaraman, @DerTimonius, @Develliot, @EffectDoplera, @Ehren12, @Ethan-Arrowood, @FluxCapacitor2, @ForsakenHarmony, @Francoscopic, @Gomah, @GyoHeon, @Hemanshu-Upadhyay, @HristovCodes, @HughHzyb, @IAmKushagraSharma, @IDNK2203, @IGassmann, @ImDR, @IncognitoTGT, @Jaaneek, @JamBalaya56562, @Jeffrey-Zutt, @JohnGemstone, @JoshuaKGoldberg, @Julian-Louis, @Juneezee, @KagamiChan, @Kahitar, @KeisukeNagakawa, @KentoMoriwaki, @Kikobeats, @KonkenBonken, @Kuboczoch, @Lada496, @LichuAcu, @LorisSigrist, @Lsnsh, @Luk-z, @Luluno01, @M-YasirGhaffar, @Maaz-Ahmed007, @Manoj-M-S, @ManuLpz4, @Marukome0743, @MaxLeiter, @MehfoozurRehman, @MildTomato, @MonstraG, @N2D4, @NavidNourani, @Nayeem-XTREME, @Netail, @NilsJacobsen, @Ocheretovich, @OlyaPolya, @PapatMayuri, @PaulAsjes, @PlagueFPS, @ProchaLu, @Pyr33x, @QiuranHu, @RiskyMH, @Sam-Phillemon9493, @Sayakie, @Shruthireddy04, @SouthLink, @Strift, @SukkaW, @Teddir, @Tim-Zj, @TrevorSayre, @Unsleeping, @Willem-Jaap, @a89529294, @abdull-haseeb, @abhi12299, @acdlite, @actopas, @adcichowski, @adiguno, @agadzik, @ah100101, @akazwz, @aktoriukas, @aldosch, @alessiomaffeis, @allanchau, @alpedia0, @amannn, @amikofalvy, @anatoliik-lyft, @anay-208, @andrii-bodnar, @anku255, @ankur-dwivedi, @aralroca, @archanaagivale30, @arlyon, @atik-persei, @avdeev, @baeharam, @balazsorban44, @bangseongbeom, @begalinsaf, @bennettdams, @bewinsnw, @bgw, @blvdmitry, @bobaaaaa, @boris-szl, @bosconian-dynamics, @brekk, @brianshano, @cfrank, @chandanpasunoori, @chentsulin, @chogyejin, @chrisjstott, @christian-bromann, @codeSTACKr, @coderfin, @coltonehrman, @controversial, @coopbri, @creativoma, @crebelskydico, @crutchcorn, @darthmaim, @datner, @davidsa03, @delbaoliveira, @devjiwonchoi, @devnyxie, @dhruv-kaushik, @dineshh-m, @diogocapela, @dnhn, @domdomegg, @domin-mnd, @dvoytenko, @ebCrypto, @ekremkenter, @emmerich, @flybayer, @floriangosse, @forsakenharmony, @francoscopic, @frys, @gabrielrolfsen, @gaojude, @gdborton, @greatvivek11, @gnoff, @guisehn, @GyoHeon, @hamirmahal, @hiro0218, @hirotomoyamada, @housseindjirdeh, @hungdoansy, @huozhi, @hwangstar156, @iampoul, @ianmacartney, @icyJoseph, @ijjk, @imddc, @imranolas, @iscekic, @jantimon, @jaredhan418, @jeanmax1me, @jericopulvera, @jjm2317, @jlbovenzo, @joelhooks, @joeshub, @jonathan-ingram, @jonluca, @jontewks, @joostmeijles, @jophy-ye, @jordienr, @jordyfontoura, @kahlstrm, @karlhorky, @karlkeefer, @kartheesan05, @kdy1, @kenji-webdev, @kevva, @khawajaJunaid, @kidonng, @kiner-tang, @kippmr, @kjac, @kjugi, @kshehadeh, @kutsan, @kwonoj, @kxlow, @leerob, @lforst, @li-jia-nan, @liby, @lonr, @lorensr, @lovell, @lubieowoce, @luciancah, @luismiramirez, @lukahartwig, @lumirlumir, @luojiyin1987, @mamuso, @manovotny, @marlier, @mauroaccornero, @maxhaomh, @mayank1513, @mcnaveen, @md-rejoyan-islam, @mehmetozguldev, @mert-duzgun, @mirasayon, @mischnic, @mknichel, @mobeigi, @molebox, @mratlamwala, @mud-ali, @n-ii-ma, @n1ckoates, @nattui, @nauvalazhar, @neila-a, @neoFinch, @niketchandivade, @nisabmohd, @none23, @notomo, @notrab, @nsams, @nurullah, @okoyecharles, @omahs, @paarthmadan, @pathliving, @pavelglac, @penicillin0, @phryneas, @pkiv, @pnutmath, @qqww08, @r34son, @raeyoung-kim, @remcohaszing, @remorses, @rezamauliadi, @rishabhpoddar, @ronanru, @royalfig, @rubyisrust, @ryan-nauman, @ryohidaka, @ryota-murakami, @s-ekai, @saltcod, @samcx, @samijaber, @sean-rallycry, @sebmarkbage, @shubh73, @shuding, @sirTangale, @sleevezip, @slimbde, @soedirgo, @sokra, @sommeeeer, @sopranopillow, @souporserious, @srkirkland, @steadily-worked, @steveluscher, @stipsan, @styfle, @stylessh, @syi0808, @symant233, @tariknh, @theoludwig, @timfish, @timfuhrmann, @timneutkens, @tknickman, @todor0v, @tokkiyaa, @torresgol10, @tranvanhieu01012002, @txxxxc, @typeofweb, @unflxw, @unstubbable, @versecafe, @vicb, @vkryachko, @wbinnssmith, @webtinax, @weicheng95, @wesbos, @whatisagi, @wiesson, @woutvanderploeg, @wyattjoh, @xiaohanyu, @xixixao, @xugetsu, @yosefbeder, @ypessoa, @ytori, @yunsii, @yurivangeffen, @z0n, @zce, @zhawtof, @zsh77, and @ztanner for helping!"
		}
	],
	"headings": [
		{
			"id": "smooth-upgrades-with-nextcodemod-cli",
			"content": "Smooth upgrades with `@next/codemod` CLI"
		},
		{
			"id": "async-request-apis-breaking-change",
			"content": "Async Request APIs (Breaking Change)"
		},
		{
			"id": "caching-semantics",
			"content": "Caching Semantics"
		},
		{
			"id": "get-route-handlers-are-no-longer-cached-by-default",
			"content": "`GET` Route Handlers are no longer cached by default"
		},
		{
			"id": "client-router-cache-no-longer-caches-page-components-by-default",
			"content": "Client Router Cache no longer caches Page components by default"
		},
		{
			"id": "react-19",
			"content": "React 19"
		},
		{
			"id": "pages-router-on-react-18",
			"content": "Pages Router on React 18"
		},
		{
			"id": "react-compiler-experimental",
			"content": "React Compiler (Experimental)"
		},
		{
			"id": "hydration-error-improvements",
			"content": "Hydration error improvements"
		},
		{
			"id": "turbopack-dev",
			"content": "Turbopack Dev"
		},
		{
			"id": "static-route-indicator",
			"content": "Static Route Indicator"
		},
		{
			"id": "executing-code-after-a-response-with-unstable_after-experimental",
			"content": "Executing code after a response with `unstable_after` (Experimental)"
		},
		{
			"id": "instrumentationjs-stable",
			"content": "`instrumentation.js` (Stable)"
		},
		{
			"id": "form-component",
			"content": "`<Form>` Component"
		},
		{
			"id": "support-for-nextconfigts",
			"content": "Support for `next.config.ts`"
		},
		{
			"id": "improvements-for-self-hosting",
			"content": "Improvements for self-hosting"
		},
		{
			"id": "enhanced-security-for-server-actions",
			"content": "Enhanced Security for Server Actions"
		},
		{
			"id": "optimizing-bundling-of-external-packages-stable",
			"content": "Optimizing bundling of external packages (Stable)"
		},
		{
			"id": "eslint-9-support",
			"content": "ESLint 9 Support"
		},
		{
			"id": "development-and-build-improvements",
			"content": "Development and Build Improvements"
		},
		{
			"id": "server-components-hmr",
			"content": "Server Components HMR"
		},
		{
			"id": "faster-static-generation-for-the-app-router",
			"content": "Faster Static Generation for the App Router"
		},
		{
			"id": "advanced-static-generation-control-experimental",
			"content": "Advanced Static Generation Control (Experimental)"
		},
		{
			"id": "other-changes",
			"content": "Other Changes"
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
		url: "#smooth-upgrades-with-nextcodemod-cli",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#smooth-upgrades-with-nextcodemod-cli",
			children: [
				"Smooth upgrades with ",
				(0, import_jsx_runtime.jsx)("code", { children: "@next/codemod" }),
				" CLI"
			]
		}) })
	},
	{
		depth: 2,
		url: "#async-request-apis-breaking-change",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#async-request-apis-breaking-change",
			children: "Async Request APIs (Breaking Change)"
		}) })
	},
	{
		depth: 2,
		url: "#caching-semantics",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#caching-semantics",
			children: "Caching Semantics"
		}) })
	},
	{
		depth: 3,
		url: "#get-route-handlers-are-no-longer-cached-by-default",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#get-route-handlers-are-no-longer-cached-by-default",
			children: [(0, import_jsx_runtime.jsx)("code", { children: "GET" }), " Route Handlers are no longer cached by default"]
		}) })
	},
	{
		depth: 3,
		url: "#client-router-cache-no-longer-caches-page-components-by-default",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#client-router-cache-no-longer-caches-page-components-by-default",
			children: "Client Router Cache no longer caches Page components by default"
		}) })
	},
	{
		depth: 2,
		url: "#react-19",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#react-19",
			children: "React 19"
		}) })
	},
	{
		depth: 3,
		url: "#pages-router-on-react-18",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#pages-router-on-react-18",
			children: "Pages Router on React 18"
		}) })
	},
	{
		depth: 3,
		url: "#react-compiler-experimental",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#react-compiler-experimental",
			children: "React Compiler (Experimental)"
		}) })
	},
	{
		depth: 3,
		url: "#hydration-error-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#hydration-error-improvements",
			children: "Hydration error improvements"
		}) })
	},
	{
		depth: 2,
		url: "#turbopack-dev",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#turbopack-dev",
			children: "Turbopack Dev"
		}) })
	},
	{
		depth: 2,
		url: "#static-route-indicator",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#static-route-indicator",
			children: "Static Route Indicator"
		}) })
	},
	{
		depth: 2,
		url: "#executing-code-after-a-response-with-unstable_after-experimental",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#executing-code-after-a-response-with-unstable_after-experimental",
			children: [
				"Executing code after a response with ",
				(0, import_jsx_runtime.jsx)("code", { children: "unstable_after" }),
				" (Experimental)"
			]
		}) })
	},
	{
		depth: 2,
		url: "#instrumentationjs-stable",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#instrumentationjs-stable",
			children: [(0, import_jsx_runtime.jsx)("code", { children: "instrumentation.js" }), " (Stable)"]
		}) })
	},
	{
		depth: 2,
		url: "#form-component",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#form-component",
			children: [(0, import_jsx_runtime.jsx)("code", { children: "<Form>" }), " Component"]
		}) })
	},
	{
		depth: 2,
		url: "#support-for-nextconfigts",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#support-for-nextconfigts",
			children: ["Support for ", (0, import_jsx_runtime.jsx)("code", { children: "next.config.ts" })]
		}) })
	},
	{
		depth: 2,
		url: "#improvements-for-self-hosting",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#improvements-for-self-hosting",
			children: "Improvements for self-hosting"
		}) })
	},
	{
		depth: 2,
		url: "#enhanced-security-for-server-actions",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#enhanced-security-for-server-actions",
			children: "Enhanced Security for Server Actions"
		}) })
	},
	{
		depth: 2,
		url: "#optimizing-bundling-of-external-packages-stable",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#optimizing-bundling-of-external-packages-stable",
			children: "Optimizing bundling of external packages (Stable)"
		}) })
	},
	{
		depth: 2,
		url: "#eslint-9-support",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#eslint-9-support",
			children: "ESLint 9 Support"
		}) })
	},
	{
		depth: 2,
		url: "#development-and-build-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#development-and-build-improvements",
			children: "Development and Build Improvements"
		}) })
	},
	{
		depth: 3,
		url: "#server-components-hmr",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#server-components-hmr",
			children: "Server Components HMR"
		}) })
	},
	{
		depth: 3,
		url: "#faster-static-generation-for-the-app-router",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#faster-static-generation-for-the-app-router",
			children: "Faster Static Generation for the App Router"
		}) })
	},
	{
		depth: 3,
		url: "#advanced-static-generation-control-experimental",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#advanced-static-generation-control-experimental",
			children: "Advanced Static Generation Control (Experimental)"
		}) })
	},
	{
		depth: 2,
		url: "#other-changes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#other-changes",
			children: "Other Changes"
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
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { Image } = _components;
	if (!Image) _missingMdxReference("Image", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js 15 is officially stable and ready for production. This release builds on the updates from both ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-15-rc",
				children: "RC1"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-15-rc2",
				children: "RC2"
			}),
			". We've focused heavily on stability while adding some exciting updates we think you'll love. Try Next.js 15 today:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			title: "terminal",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "# Use the new automated upgrade CLI"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "npx"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " @next/codemod@canary"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " upgrade"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " latest"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "# ...or upgrade manually"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "npm"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " install"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " next@latest"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " react@rc"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " react-dom@rc"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We're also excited to share more about what's coming next at ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/conf",
				children: "Next.js Conf"
			}),
			" this Thursday, October 24th."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Here's what is new in Next.js 15:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#smooth-upgrades-with-nextcodemod-cli",
				children: (0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "@next/codemod" }), " CLI:"] })
			}), " Easily upgrade to the latest Next.js and React versions."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#async-request-apis-breaking-change",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Async Request APIs (Breaking):" })
			}), " Incremental step towards a simplified rendering and caching model."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#caching-semantics",
					children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Caching Semantics (Breaking):" })
				}),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
				" requests, ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }),
				" Route Handlers, and client navigations are no longer cached by default."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#react-19",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "React 19 Support:" })
			}), " Support for React 19, React Compiler (Experimental), and hydration error improvements."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#turbopack-dev",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Turbopack Dev (Stable):" })
			}), " Performance and stability improvements."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#static-route-indicator",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Static Indicator:" })
			}), " New visual indicator shows static routes during development."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#executing-code-after-a-response-with-unstable_after-experimental",
				children: (0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "unstable_after" }), " API (Experimental):"] })
			}), " Execute code after a response finishes streaming."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#instrumentationjs-stable",
				children: (0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation.js" }), " API (Stable):"] })
			}), " New API for server lifecycle observability."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#form-component",
				children: (0, import_jsx_runtime.jsxs)(_components.strong, { children: [
					"Enhanced Forms (",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "next/form" }),
					"):"
				] })
			}), " Enhance HTML forms with client-side navigation."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#support-for-nextconfigts",
					children: (0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config" }), ":"] })
				}),
				" TypeScript support for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.ts" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#improvements-for-self-hosting",
					children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Self-hosting Improvements:" })
				}),
				" More control over ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Cache-Control" }),
				" headers."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#enhanced-security-for-server-actions",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Server Actions Security:" })
			}), " Unguessable endpoints and removal of unused actions."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#optimizing-bundling-of-external-packages-stable",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Bundling External Packages (Stable):" })
			}), " New config options for App and Pages Router."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#eslint-9-support",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "ESLint 9 Support:" })
			}), " Added support for ESLint 9."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#development-and-build-improvements",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Development and Build Performance:" })
			}), " Improved build times and Faster Fast Refresh."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "smooth-upgrades-with-nextcodemod-cli",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#smooth-upgrades-with-nextcodemod-cli",
				children: [
					"Smooth upgrades with ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "@next/codemod" }),
					" CLI"
				]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We include codemods (automated code transformations) with every major Next.js release to help automate upgrading breaking changes." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To make upgrades even smoother, we've released an enhanced codemod CLI:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			title: "Terminal",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
				className: "line",
				children: [
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "npx"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " @next/codemod@canary"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " upgrade"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " latest"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This tool helps you upgrade your codebase to the latest stable or prerelease versions. The CLI will update your dependencies, show available codemods, and guide you through applying them." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "canary" }),
			" tag uses the latest version of the codemod while the latest specifies the Next.js version. We recommend using the canary version of the codemod even if you are upgrading to the latest Next.js version, as we plan to continue adding improvements to the tool based on your feedback."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/upgrading/codemods",
				children: "Next.js codemod CLI"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "async-request-apis-breaking-change",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#async-request-apis-breaking-change",
				children: "Async Request APIs (Breaking Change)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In traditional Server-Side Rendering, the server waits for a request before rendering any content. However, not all components depend on request-specific data, so it's unnecessary to wait for the request to render them. Ideally, the server would prepare as much as possible before a request arrives. To enable this, and set the stage for future optimizations, we need to know when to wait for the request." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Therefore, we are transitioning APIs that rely on request-specific data—such as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "headers" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "cookies" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "params" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "searchParams" }),
			"—to be ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "asynchronous" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import { cookies } from 'next/headers';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function AdminPanel() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const cookieStore = await cookies();" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const token = cookieStore.get('token');" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // ..." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This is a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "breaking change" }),
			" and affects the following APIs:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "cookies" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "headers" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "draftMode" }) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "params" }),
				" in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "route.js" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "default.js" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "generateMetadata" }),
				", and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "generateViewport" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "searchParams" }),
				" in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" })
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For an easier migration, these APIs can temporarily be accessed synchronously, but will show warnings in development and production until the next major version. A ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/upgrading/codemods",
				children: "codemod"
			}),
			" is available to automate the migration:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			title: "Terminal",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
				className: "line",
				children: [
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "npx"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " @next/codemod@canary"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " next-async-request-api"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " ."
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For cases where the codemod can't fully migrate your code, please read the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/upgrading/version-15",
				children: "upgrade guide"
			}),
			". We have also provided an ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/leerob/next-saas-starter/pull/62",
				children: "example"
			}),
			" of how to migrate a Next.js application to the new APIs."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "caching-semantics",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#caching-semantics",
				children: "Caching Semantics"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js App Router launched with opinionated caching defaults. These were designed to provide the most performant option by default with the ability to opt out when required." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Based on your feedback, we re-evaluated our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://x.com/feedthejim/status/1785242054773145636",
				children: "caching heuristics"
			}),
			" and how they would interact with projects like Partial Prerendering (PPR) and with third party libraries using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With Next.js 15, we're changing the caching default for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }),
			" Route Handlers and the Client Router Cache from cached by default to uncached by default. If you want to retain the previous behavior, you can continue to opt-into caching."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're continuing to improve caching in Next.js in the coming months and we'll share more details soon." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "get-route-handlers-are-no-longer-cached-by-default",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#get-route-handlers-are-no-longer-cached-by-default",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }), " Route Handlers are no longer cached by default"]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In Next 14, Route Handlers that used the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }),
			" HTTP method were cached by default unless they used a dynamic function or dynamic config option. In Next.js 15, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }),
			" functions are ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "not cached by default" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can still opt into caching using a static route config option such as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "export dynamic = 'force-static'" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Special Route Handlers like ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/metadata/sitemap",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "sitemap.ts" })
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/metadata/opengraph-image",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "opengraph-image.tsx" })
			}),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/metadata/app-icons",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "icon.tsx" })
			}),
			", and other ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/metadata",
				children: "metadata files"
			}),
			" remain static by default unless they use dynamic functions or dynamic config options."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "client-router-cache-no-longer-caches-page-components-by-default",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#client-router-cache-no-longer-caches-page-components-by-default",
				children: "Client Router Cache no longer caches Page components by default"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In Next.js 14.2.0, we introduced an experimental ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/next-config-js/staleTimes",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "staleTimes" })
			}),
			" flag to allow custom configuration of the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/caching#client-side-router-cache",
				children: "Router Cache"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In Next.js 15, this flag still remains accessible, but we are changing the default behavior to have a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "staleTime" }),
			" of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "0" }),
			" for Page segments. This means that as you navigate around your app, the client will always reflect the latest data from the Page component(s) that become active as part of the navigation. However, there are still important behaviors that remain unchanged:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Shared layout data won't be refetched from the server to continue to support ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/routing/linking-and-navigating#4-partial-rendering",
					children: "partial rendering"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Back/forward navigation will still restore from cache to ensure the browser can restore scroll position." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/loading",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "loading.js" })
				}),
				" will remain cached for 5 minutes (or the value of the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "staleTimes.static" }),
				" configuration)."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can opt into the previous Client Router Cache behavior by setting the following configuration:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			title: "next.config.ts",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " nextConfig"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  experimental: {"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    staleTimes: {"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      dynamic: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "30"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ","
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    },"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  },"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "};"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " nextConfig;"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "react-19",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#react-19",
				children: "React 19"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "As part of the Next.js 15 release, we've made the decision to align with the upcoming release of React 19." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In version 15, the App Router uses React 19 RC, and we've also introduced backwards compatibility for React 18 with the Pages Router based on community feedback. If you're using the Pages Router, this allows you to upgrade to React 19 when ready." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Although React 19 is still in the RC phase, our extensive testing across real-world applications and our close work with the React team have given us confidence in its stability. The core breaking changes have been well-tested and won't affect existing App Router users. Therefore, we've decided to release Next.js 15 as stable now, so your projects are fully prepared for React 19 GA." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To ensure the transition is as smooth as possible, we've provided ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#smooth-upgrades-with-codemod-cli",
				children: "codemods and automated tools"
			}),
			" to help ease the migration process."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Read the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/upgrading/version-15",
				children: "Next.js 15 upgrade guide"
			}),
			", the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/blog/2024/04/25/react-19-upgrade-guide",
				children: "React 19 upgrade guide"
			}),
			", and watch the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.youtube.com/live/T8TZQ6k4SLE?t=1788",
				children: "React Conf Keynote"
			}),
			" to learn more."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "pages-router-on-react-18",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#pages-router-on-react-18",
				children: "Pages Router on React 18"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js 15 maintains backward compatibility for the Pages Router with React 18, allowing users to continue using React 18 while benefiting from improvements in Next.js 15." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Since the first Release Candidate (RC1), we've shifted our focus to include support for React 18 based on community feedback. This flexibility enables you to adopt Next.js 15 while using the Pages Router with React 18, giving you greater control over your upgrade path." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }), " While it is possible to run the Pages Router on React 18 and the App Router on React 19 in the same application, we don't recommend this setup. Doing so could result in unpredictable behavior and typings inconsistencies, as the underlying APIs and rendering logic between the two versions may not fully align."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "react-compiler-experimental",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#react-compiler-experimental",
				children: "React Compiler (Experimental)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/learn/react-compiler",
				children: "React Compiler"
			}),
			" is a new experimental compiler created by the React team at Meta. The compiler understands your code at a deep level through its understanding of plain JavaScript semantics and the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/reference/rules",
				children: "Rules of React"
			}),
			", which allows it to add automatic optimizations to your code. The compiler reduces the amount of manual memoization developers have to do through APIs such as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useMemo" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useCallback" }),
			" - making code simpler, easier to maintain, and less error prone."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With Next.js 15, we've added support for the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/learn/react-compiler",
				children: "React Compiler"
			}),
			". Learn more about the React Compiler, and the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/learn/react-compiler#usage-with-nextjs",
				children: "available Next.js config options"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }), " The React Compiler is currently only available as a Babel plugin, which will result in slower development and build times."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "hydration-error-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#hydration-error-improvements",
				children: "Hydration error improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js 14.1 ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-14-1#improved-error-messages-and-fast-refresh",
				children: "made improvements"
			}),
			" to error messages and hydration errors. Next.js 15 continues to build on those by adding an improved hydration error view. Hydration errors now display the source code of the error with suggestions on how to address the issue."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For example, this was a previous hydration error message in Next.js 14.1:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Hydration error message in Next.js 14.1",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/hydration-error-before-light.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/hydration-error-before-dark.png",
			width: "962",
			height: "517"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js 15 has improved this to:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Hydration error message improved in Next.js 15",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/hydration-error-after-light.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/hydration-error-after-dark.png",
			width: "960",
			height: "654"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "turbopack-dev",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#turbopack-dev",
				children: "Turbopack Dev"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We are happy to announce that ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev --turbo" }),
			" is now ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "stable and ready" }),
			" to speed up your development experience. We've been using it to iterate on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com",
				children: "vercel.com"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org",
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, with ",
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can learn more about Turbopack Dev in our new ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/turbopack-for-development-stable",
				children: "blog post"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "static-route-indicator",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#static-route-indicator",
				children: "Static Route Indicator"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js now displays a Static Route Indicator during development to help you identify which routes are static or dynamic. This visual cue makes it easier to optimize performance by understanding how your pages are rendered." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc2/static-route-light.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc2/static-route-dark.png",
			width: "1720",
			height: "516"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can also use the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/cli/next#next-build-options",
				children: "next build"
			}),
			" output to view the rendering strategy for all routes."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This update is part of our ongoing efforts to enhance observability in Next.js, making it easier for developers to monitor, debug, and optimize their applications. We're also working on dedicated developer tools, with more details to come soon." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/next-config-js/devIndicators#appisrstatus-static-indicator",
				children: "Static Route Indicator"
			}),
			", which can be disabled."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "executing-code-after-a-response-with-unstable_after-experimental",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#executing-code-after-a-response-with-unstable_after-experimental",
				children: [
					"Executing code after a response with ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "unstable_after" }),
					" (Experimental)"
				]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When processing a user request, the server typically performs tasks directly related to computing the response. However, you may need to perform tasks such as logging, analytics, and other external system synchronization." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Since these tasks are not directly related to the response, the user should not have to wait for them to complete. Deferring the work after responding to the user poses a challenge because serverless functions stop computation immediately after the response is closed." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "after()" }), " is a new experimental API that solves this problem by allowing you to schedule work to be processed after the response has finished streaming, enabling secondary tasks to run without blocking the primary response."] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To use it, add ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.after" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			title: "next.config.ts",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " nextConfig"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  experimental: {"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    after: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "true"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ","
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  },"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "};"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " nextConfig;"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Then, import the function in Server Components, Server Actions, Route Handlers, or Middleware." }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import { unstable_after as after } from 'next/server';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import { log } from '@/app/utils';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function Layout({ children }) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // Secondary task" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  after(() => {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    log();" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  });" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // Primary task" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return <>{children}</>;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/unstable_after",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "unstable_after" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "instrumentationjs-stable",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#instrumentationjs-stable",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation.js" }), " (Stable)"]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation" }),
			" file, with the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "register()" }),
			" API, allows users to tap into the Next.js server lifecycle to monitor performance, track the source of errors, and deeply integrate with observability libraries like ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://opentelemetry.io/",
				children: "OpenTelemetry"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This feature is now ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "stable" }),
			" and the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.instrumentationHook" }),
			" config option can be removed."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In addition, we've collaborated with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://sentry.io/",
				children: "Sentry"
			}),
			" on designing a new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onRequestError" }),
			" hook that can be used to:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Capture important context about all errors thrown on the server, including:",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Router: Pages Router or App Router" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Server context: Server Component, Server Action, Route Handler, or Middleware" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Report the errors to your favorite observability provider." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function onRequestError(err, request, context) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  await fetch('https://...', {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    method: 'POST'," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    body: JSON.stringify({ message: err.message, request, context })," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    headers: { 'Content-Type': 'application/json' }," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  });" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function register() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // init your favorite observability provider SDK" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onRequestError" }),
			" ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/instrumentation#onrequesterror-optional",
				children: "function"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "form-component",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#form-component",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "<Form>" }), " Component"]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<Form>" }),
			" component extends the HTML ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<form>" }),
			" element with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching",
				children: "prefetching"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/linking-and-navigating#5-soft-navigation",
				children: "client-side navigation"
			}),
			", and progressive enhancement."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "It is useful for forms that navigate to a new page, such as a search form that leads to a results page." }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			title: "app/page.jsx",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "import"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " Form "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "from"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " 'next/form'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ";"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Page"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "() {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ("
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Form"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " action"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"/search\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "input"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " name"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"query\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "button"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " type"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"submit\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">Submit</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "button"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    </"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Form"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  );"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<Form>" }),
			" component comes with:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Prefetching" }),
				": When the form is in view, the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/layout",
					children: "layout"
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/loading",
					children: "loading"
				}),
				" UI are prefetched, making navigation fast."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Client-side Navigation:" }), " On submission, shared layouts and client-side state are preserved."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Progressive Enhancement" }), ": If JavaScript hasn't loaded yet, the form still works via full-page navigation."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Previously, achieving these features required a lot of manual boilerplate. For example:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Example" }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// Note: This is abbreviated for demonstration purposes." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// Not recommended for use in production code." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "'use client'" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import { useEffect } from 'react'" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import { useRouter } from 'next/navigation'" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function Form(props) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const action = props.action" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const router = useRouter()" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  useEffect(() => {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    // if form target is a URL, prefetch it" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    if (typeof action === 'string') {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      router.prefetch(action)" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    }" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  }, [action, router])" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  function onSubmit(event) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    event.preventDefault()" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    // grab all of the form fields and trigger a `router.push` with the data URL encoded" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    const formData = new FormData(event.currentTarget)" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    const data = new URLSearchParams()" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    for (const [name, value] of formData) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      data.append(name, value as string)" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    }" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    router.push(`${action}?${data.toString()}`)" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  }" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  if (typeof action === 'string') {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    return <form onSubmit={onSubmit} {...props} />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  }" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return <form {...props} />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/app/api-reference/components/form",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "<Form>" }), " Component"]
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "support-for-nextconfigts",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#support-for-nextconfigts",
				children: ["Support for ", (0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.ts" })]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js now supports the TypeScript ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.ts" }),
			" file type and provides a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NextConfig" }),
			" type for autocomplete and type-safe options:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			title: "next.config.ts",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "import"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " type"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { NextConfig } "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "from"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " 'next'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ";"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " nextConfig"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: ":"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " NextConfig"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "  /* config options here */"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "};"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " nextConfig;"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/configuring/typescript#type-checking-nextconfigts",
				children: "TypeScript support"
			}),
			" in Next.js."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "improvements-for-self-hosting",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improvements-for-self-hosting",
				children: "Improvements for self-hosting"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When self-hosting applications, you may need more control over ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Cache-Control" }),
			" directives."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"One common case is controlling the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "stale-while-revalidate" }),
			" period sent for ISR pages. We've implemented two improvements:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"You can now configure the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/next-config-js/expireTime",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "expireTime" })
				}),
				" value in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config" }),
				". This was previously the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.swrDelta" }),
				" option."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Updated the default value to one year, ensuring most CDNs can fully apply the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "stale-while-revalidate" }),
				" semantics as intended."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We also no longer override custom ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Cache-Control" }),
			" values with our default values, allowing full control and ensuring compatibility with any CDN setup."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Finally, we've improved image optimization when self-hosting. Previously, we recommended you install ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "sharp" }),
			" for optimizing images on your Next.js server. This recommendation was sometimes missed. With Next.js 15, you no longer need to manually install ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "sharp" }),
			" — Next.js will use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "sharp" }),
			" automatically when using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
			" or running with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/next-config-js/output",
				children: "standalone output mode"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To learn more, see our new ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://x.com/leeerob/status/1843796169173995544",
				children: "demo and tutorial video"
			}),
			" on self-hosting Next.js."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "enhanced-security-for-server-actions",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#enhanced-security-for-server-actions",
				children: "Enhanced Security for Server Actions"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/reference/rsc/server-actions",
				children: "Server Actions"
			}),
			" are server-side functions that can be called from the client. They are defined by adding the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "'use server'" }),
			" directive at the top of a file and exporting an async function."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Even if a Server Action or utility function is not imported elsewhere in your code, it's still a publicly accessible HTTP endpoint. While this behavior is technically correct, it can lead to unintentional exposure of such functions." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To improve security, we've introduced the following enhancements:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Dead code elimination:" }), " Unused Server Actions won't have their IDs exposed to the client-side JavaScript bundle, reducing bundle size and improving performance."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Secure action IDs:" }), " Next.js now creates unguessable, non-deterministic IDs to allow the client to reference and call the Server Action. These IDs are periodically recalculated between builds for enhanced security."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// app/actions.js" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "'use server';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// This action **is** used in our application, so Next.js" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// will create a secure ID to allow the client to reference" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// and call the Server Action." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function updateUserAction(formData) {}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// This action **is not** used in our application, so Next.js" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// will automatically remove this code during `next build`" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// and will not create a public endpoint." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function deleteUserAction(formData) {}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You should still treat Server Actions as public HTTP endpoints. Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/security-nextjs-server-components-actions#write",
				children: "securing Server Actions"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "optimizing-bundling-of-external-packages-stable",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#optimizing-bundling-of-external-packages-stable",
				children: "Optimizing bundling of external packages (Stable)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Bundling external packages can improve the cold start performance of your application. In the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "App Router" }),
			", external packages are bundled by default, and you can opt-out specific packages using the new ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/next-config-js/serverExternalPackages",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "serverExternalPackages" })
			}),
			" config option."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Pages Router" }),
			", external packages are not bundled by default, but you can provide a list of packages to bundle using the existing ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/transpilePackages",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "transpilePackages" })
			}),
			" option. With this configuration option, you need to specify each package."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To unify configuration between App and Pages Router, we're introducing a new option, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/bundlePagesRouterDependencies",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "bundlePagesRouterDependencies" })
			}),
			" to match the default automatic bundling of the App Router. You can then use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/next-config-js/serverExternalPackages",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "serverExternalPackages" })
			}),
			" to opt-out specific packages, if needed."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			title: "next.config.ts",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " nextConfig"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "  // Automatically bundle external packages in the Pages Router:"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  bundlePagesRouterDependencies: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "true"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ","
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "  // Opt specific packages out of bundling for both App and Pages Router:"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  serverExternalPackages: ["
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'package-name'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "],"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "};"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " nextConfig;"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/optimizing/package-bundling",
				children: "optimizing external packages"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "eslint-9-support",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#eslint-9-support",
				children: "ESLint 9 Support"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js 15 also introduces support for ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://eslint.org/blog/2024/04/eslint-v9.0.0-released",
				children: "ESLint 9"
			}),
			", following the end-of-life for ESLint 8 on October 5, 2024."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To ensure a smooth transition, Next.js remain backwards compatible, meaning you can continue using either ESLint 8 or 9." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you upgrade to ESLint 9, and we detect that you haven't yet adopted ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://eslint.org/blog/2024/04/eslint-v9.0.0-released/#flat-config-is-now-the-default-and-has-some-changes",
				children: "the new config format"
			}),
			", Next.js will automatically apply the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ESLINT_USE_FLAT_CONFIG=false" }),
			" escape hatch to ease migration."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Additionally, deprecated options like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "—ext" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "—ignore-path" }),
			" will be removed when running ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }),
			". Please note that ESLint will eventually disallow these older configurations in ESLint 10, so we recommend starting your migration soon."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more details on these changes, check out the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://eslint.org/docs/latest/use/migrate-to-9.0.0",
				children: "migration guide"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As part of this update, we've also upgraded ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-plugin-react-hooks" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "v5.0.0" }),
			", which introduces new rules for React Hooks usage. You can review all changes in the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/facebook/react/releases/tag/eslint-plugin-react-hooks%405.0.0",
				children: "changelog for eslint-plugin-react-hooks@5.0.0"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "development-and-build-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#development-and-build-improvements",
				children: "Development and Build Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "server-components-hmr",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#server-components-hmr",
				children: "Server Components HMR"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"During development, Server components are re-executed when saved. This means, any ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
			" requests to your API endpoints or third-party services are also called."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To improve local development performance and reduce potential costs for billed API calls, we now ensure Hot Module Replacement (HMR) can re-use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
			" responses from previous renders."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/next-config-js/serverComponentsHmrCache",
				children: "Server Components HMR Cache"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "faster-static-generation-for-the-app-router",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#faster-static-generation-for-the-app-router",
				children: "Faster Static Generation for the App Router"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've optimized static generation to improve build times, especially for pages with slow network requests." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Previously, our static optimization process rendered pages twice—once to generate data for client-side navigation and a second time to render the HTML for the initial page visit. Now, we reuse the first render, cutting out the second pass, reducing workload and build times." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Additionally, static generation workers now share the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
			" cache across pages. If a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
			" call doesn't opt out of caching, its results are reused by other pages handled by the same worker. This reduces the number of requests for the same data."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "advanced-static-generation-control-experimental",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#advanced-static-generation-control-experimental",
				children: "Advanced Static Generation Control (Experimental)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've added experimental support for more control over the static generation process for advanced use cases that would benefit from greater control." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We recommend sticking to the current defaults unless you have specific requirements as these options can lead to increased resource usage and potential out-of-memory errors due to increased concurrency." }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			title: "next.config.ts",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " nextConfig"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  experimental: {"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "    // how many times Next.js will retry failed page generation attempts"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "    // before failing the build"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    staticGenerationRetryCount: "
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "1"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "    // how many pages will be processed per worker"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    staticGenerationMaxConcurrency: "
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "8"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "    // the minimum number of pages before spinning up a new export worker"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    staticGenerationMinPagesPerWorker: "
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "25"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  },"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " nextConfig;"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/next-config-js/staticGeneration",
				children: "Static Generation options"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "other-changes",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#other-changes",
				children: "Other Changes"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" next/image: Removed ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "squoosh" }),
				" in favor of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "sharp" }),
				" as an optional dependency (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/63321",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" next/image: Changed default ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Content-Disposition" }),
				" to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "attachment" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65631",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" next/image: Error when ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "src" }),
				" has leading or trailing spaces (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65637",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" Middleware: Apply ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "react-server" }),
				" condition to limit unrecommended React API imports (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65424",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" next/font: Removed support for external ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "@next/font" }),
				" package (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65601",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" next/font: Removed ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "font-family" }),
				" hashing (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/53608",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" Caching: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "force-dynamic" }),
				" will now set a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "no-store" }),
				" default to the fetch cache (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/64145",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" Config: Enable ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "swcMinify" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65579",
					children: "PR"
				}),
				"), ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "missingSuspenseWithCSRBailout" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65688",
					children: "PR"
				}),
				"), and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "outputFileTracing" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65579",
					children: "PR"
				}),
				") behavior by default and remove deprecated options"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" Remove auto-instrumentation for Speed Insights (must now use the dedicated ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://www.npmjs.com/package/@vercel/speed-insights",
					children: "@vercel/speed-insights"
				}),
				" package) (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/64199",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" Remove ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".xml" }),
				" extension for dynamic sitemap routes and align sitemap URLs between development and production (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65507",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" We've deprecated exporting ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "export const runtime = \"experimental-edge\"" }),
				" in the App Router. Users should now switch to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "export const runtime = \"edge\"" }),
				". We've added a ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/upgrading/codemods#app-dir-runtime-config-experimental-edge",
					children: "codemod"
				}),
				" to perform this (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/70480",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" Calling ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "revalidateTag" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "revalidatePath" }),
				" during render will now throw an error (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/71093",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation.js" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "middleware.js" }),
				" files will now use the vendored React packages (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/69619",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" The minimum required Node.js version has been updated to 18.18.0 (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/67274",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/dynamic" }),
				": the deprecated ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "suspense" }),
				" prop has been removed and when the component is used in the App Router, it won't insert an empty Suspense boundary anymore (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/67014",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" When resolving modules on the Edge Runtime, the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "worker" }),
				" module condition will not be applied (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/66808",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" Disallow using ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "ssr: false" }),
				" option with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/dynamic" }),
				" in Server Components (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/70378",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Metadata: Updated environment variable fallbacks for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "metadataBase" }),
				" when hosted on Vercel (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65089",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Fix tree-shaking with mixed namespace and named imports from ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "optimizePackageImports" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/64894",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Parallel Routes: Provide unmatched catch-all routes with all known params (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65063",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Config ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "bundlePagesExternals" }),
				" is now stable and renamed to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "bundlePagesRouterDependencies" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Config ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "serverComponentsExternalPackages" }),
				" is now stable and renamed to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "serverExternalPackages" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" create-next-app: New projects ignore all ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".env" }),
				" files by default (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/61920",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "outputFileTracingRoot" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "outputFileTracingIncludes" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "outputFileTracingExcludes" }),
				" have been upgraded from experimental and are now stable (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/68464",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Avoid merging global CSS files with CSS module files deeper in the tree (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/67373",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" The cache handler can be specified via the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NEXT_CACHE_HANDLER_PATH" }),
				" environment variable (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/70537/",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" The Pages Router now supports both React 18 and React 19 (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/69484",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" The Error Overlay now displays a button to copy the Node.js Inspector URL if the inspector is enabled (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/69357",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Client prefetches on the App Router now use the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "priority" }),
				" attribute (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/67356",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Next.js now provides an ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "unstable_rethrow" }),
				" function to rethrow Next.js internal errors in the App Router (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65831",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "unstable_after" }),
				" can now be used in static pages (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/71231",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" If a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/dynamic" }),
				" component is used during SSR, the chunk will be prefetched (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65486",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "esmExternals" }),
				" option is now supported on the App Router (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65041",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.allowDevelopmentBuild" }),
				" option can be used to allow ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NODE_ENV=development" }),
				" with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
				" for debugging purposes (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65463",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" The Server Action transforms are now disabled in the Pages Router (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/71028",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Build workers will now stop the build from hanging when they exit (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/70997",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" When redirecting from a Server Action, revalidations will now apply correctly (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/70715",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Dynamic params are now handled correctly for parallel routes on the Edge Runtime (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/70667",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Static pages will now respect staleTime after initial load (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/70640",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "vercel/og" }),
				" updated with a memory leak fix (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/70214",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Patch timings updated to allow usage of packages like ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "msw" }),
				" for APIs mocking (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/68193",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Prerendered pages should use static staleTime (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/67868",
					children: "PR"
				}),
				")"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To learn more, check out the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/upgrading/version-15",
				children: "upgrade guide"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "contributors",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#contributors",
				children: "Contributors"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js is the result of the combined work of over 3,000 individual developers, industry partners like Google and Meta, and our core team at Vercel. This release was brought to you by:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
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
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Huge thanks to @AbhiShake1, @Aerilym, @AhmedBaset, @AnaTofuZ, @Arindam200, @Arinji2, @ArnaudFavier, @ArnoldVanN, @Auxdible, @B33fb0n3, @Bhavya031, @Bjornnyborg, @BunsDev, @CannonLock, @CrutchTheClutch, @DeepakBalaraman, @DerTimonius, @Develliot, @EffectDoplera, @Ehren12, @Ethan-Arrowood, @FluxCapacitor2, @ForsakenHarmony, @Francoscopic, @Gomah, @GyoHeon, @Hemanshu-Upadhyay, @HristovCodes, @HughHzyb, @IAmKushagraSharma, @IDNK2203, @IGassmann, @ImDR, @IncognitoTGT, @Jaaneek, @JamBalaya56562, @Jeffrey-Zutt, @JohnGemstone, @JoshuaKGoldberg, @Julian-Louis, @Juneezee, @KagamiChan, @Kahitar, @KeisukeNagakawa, @KentoMoriwaki, @Kikobeats, @KonkenBonken, @Kuboczoch, @Lada496, @LichuAcu, @LorisSigrist, @Lsnsh, @Luk-z, @Luluno01, @M-YasirGhaffar, @Maaz-Ahmed007, @Manoj-M-S, @ManuLpz4, @Marukome0743, @MaxLeiter, @MehfoozurRehman, @MildTomato, @MonstraG, @N2D4, @NavidNourani, @Nayeem-XTREME, @Netail, @NilsJacobsen, @Ocheretovich, @OlyaPolya, @PapatMayuri, @PaulAsjes, @PlagueFPS, @ProchaLu, @Pyr33x, @QiuranHu, @RiskyMH, @Sam-Phillemon9493, @Sayakie, @Shruthireddy04, @SouthLink, @Strift, @SukkaW, @Teddir, @Tim-Zj, @TrevorSayre, @Unsleeping, @Willem-Jaap, @a89529294, @abdull-haseeb, @abhi12299, @acdlite, @actopas, @adcichowski, @adiguno, @agadzik, @ah100101, @akazwz, @aktoriukas, @aldosch, @alessiomaffeis, @allanchau, @alpedia0, @amannn, @amikofalvy, @anatoliik-lyft, @anay-208, @andrii-bodnar, @anku255, @ankur-dwivedi, @aralroca, @archanaagivale30, @arlyon, @atik-persei, @avdeev, @baeharam, @balazsorban44, @bangseongbeom, @begalinsaf, @bennettdams, @bewinsnw, @bgw, @blvdmitry, @bobaaaaa, @boris-szl, @bosconian-dynamics, @brekk, @brianshano, @cfrank, @chandanpasunoori, @chentsulin, @chogyejin, @chrisjstott, @christian-bromann, @codeSTACKr, @coderfin, @coltonehrman, @controversial, @coopbri, @creativoma, @crebelskydico, @crutchcorn, @darthmaim, @datner, @davidsa03, @delbaoliveira, @devjiwonchoi, @devnyxie, @dhruv-kaushik, @dineshh-m, @diogocapela, @dnhn, @domdomegg, @domin-mnd, @dvoytenko, @ebCrypto, @ekremkenter, @emmerich, @flybayer, @floriangosse, @forsakenharmony, @francoscopic, @frys, @gabrielrolfsen, @gaojude, @gdborton, @greatvivek11, @gnoff, @guisehn, @GyoHeon, @hamirmahal, @hiro0218, @hirotomoyamada, @housseindjirdeh, @hungdoansy, @huozhi, @hwangstar156, @iampoul, @ianmacartney, @icyJoseph, @ijjk, @imddc, @imranolas, @iscekic, @jantimon, @jaredhan418, @jeanmax1me, @jericopulvera, @jjm2317, @jlbovenzo, @joelhooks, @joeshub, @jonathan-ingram, @jonluca, @jontewks, @joostmeijles, @jophy-ye, @jordienr, @jordyfontoura, @kahlstrm, @karlhorky, @karlkeefer, @kartheesan05, @kdy1, @kenji-webdev, @kevva, @khawajaJunaid, @kidonng, @kiner-tang, @kippmr, @kjac, @kjugi, @kshehadeh, @kutsan, @kwonoj, @kxlow, @leerob, @lforst, @li-jia-nan, @liby, @lonr, @lorensr, @lovell, @lubieowoce, @luciancah, @luismiramirez, @lukahartwig, @lumirlumir, @luojiyin1987, @mamuso, @manovotny, @marlier, @mauroaccornero, @maxhaomh, @mayank1513, @mcnaveen, @md-rejoyan-islam, @mehmetozguldev, @mert-duzgun, @mirasayon, @mischnic, @mknichel, @mobeigi, @molebox, @mratlamwala, @mud-ali, @n-ii-ma, @n1ckoates, @nattui, @nauvalazhar, @neila-a, @neoFinch, @niketchandivade, @nisabmohd, @none23, @notomo, @notrab, @nsams, @nurullah, @okoyecharles, @omahs, @paarthmadan, @pathliving, @pavelglac, @penicillin0, @phryneas, @pkiv, @pnutmath, @qqww08, @r34son, @raeyoung-kim, @remcohaszing, @remorses, @rezamauliadi, @rishabhpoddar, @ronanru, @royalfig, @rubyisrust, @ryan-nauman, @ryohidaka, @ryota-murakami, @s-ekai, @saltcod, @samcx, @samijaber, @sean-rallycry, @sebmarkbage, @shubh73, @shuding, @sirTangale, @sleevezip, @slimbde, @soedirgo, @sokra, @sommeeeer, @sopranopillow, @souporserious, @srkirkland, @steadily-worked, @steveluscher, @stipsan, @styfle, @stylessh, @syi0808, @symant233, @tariknh, @theoludwig, @timfish, @timfuhrmann, @timneutkens, @tknickman, @todor0v, @tokkiyaa, @torresgol10, @tranvanhieu01012002, @txxxxc, @typeofweb, @unflxw, @unstubbable, @versecafe, @vicb, @vkryachko, @wbinnssmith, @webtinax, @weicheng95, @wesbos, @whatisagi, @wiesson, @woutvanderploeg, @wyattjoh, @xiaohanyu, @xixixao, @xugetsu, @yosefbeder, @ypessoa, @ytori, @yunsii, @yurivangeffen, @z0n, @zce, @zhawtof, @zsh77, and @ztanner for helping!" })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { toc as a, structuredData as i, frontmatter as n, next_15_exports as r, MDXContent as t };
