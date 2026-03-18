import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-15-rc-BBYZOKdN.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_15_rc_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 15 RC",
	"description": "The Next.js 15 Release Candidate (RC) is now available. This early version allows you to test the latest features before the upcoming stable release.",
	"author": [{
		"name": "Delba de Oliveira",
		"image": "/static/team/delba.jpg"
	}, {
		"name": "Zack Tanner",
		"image": "/static/team/zack.jpg"
	}],
	"date": /* @__PURE__ */ new Date(1716483600507),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "The Next.js 15 Release Candidate (RC) is now available. This early version allows you to test the latest features before the upcoming stable release."
		},
		{
			"heading": void 0,
			"content": "**React:** Support for the React 19 RC, React Compiler (Experimental), and hydration error improvements"
		},
		{
			"heading": void 0,
			"content": "**Caching:** `fetch` requests, `GET` Route Handlers, and client navigations are no longer cached by default"
		},
		{
			"heading": void 0,
			"content": "**Partial Prerendering (Experimental):** New Layout and Page config option for incremental adoption"
		},
		{
			"heading": void 0,
			"content": "**`next/after` (Experimental):** New API to execute code after a response has finished streaming"
		},
		{
			"heading": void 0,
			"content": "**`create-next-app`:** Updated design and a new flag to enable Turbopack in local development"
		},
		{
			"heading": void 0,
			"content": "**Bundling external packages (Stable):** New config options for App and Pages Router"
		},
		{
			"heading": void 0,
			"content": "Try the Next.js 15 RC today:"
		},
		{
			"heading": "react-19-rc",
			"content": "The Next.js App Router is built on the React canary channel for frameworks, which has allowed developers to use and provide feedback on these new React APIs before the v19 release."
		},
		{
			"heading": "react-19-rc",
			"content": "Next.js 15 RC now supports React 19 RC, which includes new features for both the client and server like Actions."
		},
		{
			"heading": "react-19-rc",
			"content": "Read the Next.js 15 upgrade guide, the React 19 upgrade guide, and watch the React Conf Keynote to learn more."
		},
		{
			"heading": "react-19-rc",
			"content": "> **Note:** Some third party libraries may not be compatible with React 19 yet."
		},
		{
			"heading": "react-compiler-experimental",
			"content": "The React Compiler is a new experimental compiler created by the React team at Meta. The compiler understands your code at a deep level through its understanding of plain JavaScript semantics and the Rules of React, which allows it to add automatic optimizations to your code. The compiler reduces the amount of manual memoization developers have to do through APIs such as `useMemo` and `useCallback` - making code simpler, easier to maintain, and less error prone."
		},
		{
			"heading": "react-compiler-experimental",
			"content": "With Next.js 15, we've added support for the React Compiler."
		},
		{
			"heading": "react-compiler-experimental",
			"content": "Install `babel-plugin-react-compiler`:"
		},
		{
			"heading": "react-compiler-experimental",
			"content": "Then, add `experimental.reactCompiler` option in `next.config.js`:"
		},
		{
			"heading": "react-compiler-experimental",
			"content": "Optionally, you can configure the compiler to run in \"opt-in\" mode as follows:"
		},
		{
			"heading": "react-compiler-experimental",
			"content": "> **Note:** The React Compiler is currently only possible to use in Next.js through a Babel plugin, which could result in slower build times."
		},
		{
			"heading": "react-compiler-experimental",
			"content": "Learn more about the React Compiler, and the available Next.js config options."
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
			"content": "Next.js 15 RC has improved this to:"
		},
		{
			"heading": "caching-updates",
			"content": "Next.js App Router launched with opinionated caching defaults. These were designed to provide the most performant option by default with the ability to opt out when required."
		},
		{
			"heading": "caching-updates",
			"content": "Based on your feedback, we re-evaluated our caching heuristics and how they would interact with projects like Partial Prerendering (PPR) and with third party libraries using `fetch`."
		},
		{
			"heading": "caching-updates",
			"content": "With Next.js 15, we’re changing the caching default for `fetch` requests, `GET` Route Handlers, and Client Router Cache from cached by default to uncached by default. If you want to retain the previous behavior, you can continue to opt-into caching."
		},
		{
			"heading": "caching-updates",
			"content": "We're continuing to improve caching in Next.js in the coming months and we'll share more details in the Next.js 15 GA announcement."
		},
		{
			"heading": "fetch-requests-are-no-longer-cached-by-default",
			"content": "Next.js uses the Web\xA0`fetch`\xA0API\xA0cache option to configure how a server-side fetch request interacts with the framework's persistent HTTP cache:"
		},
		{
			"heading": "fetch-requests-are-no-longer-cached-by-default",
			"content": "`no-store` - fetch a resource from a remote server on every request and do not update the cache"
		},
		{
			"heading": "fetch-requests-are-no-longer-cached-by-default",
			"content": "`force-cache` - fetch a resource from the cache (if it exists) or a remote server and update the cache"
		},
		{
			"heading": "fetch-requests-are-no-longer-cached-by-default",
			"content": "In Next.js 14, `force-cache` was used by default if a `cache` option was not provided, unless a dynamic function or dynamic config option was used."
		},
		{
			"heading": "fetch-requests-are-no-longer-cached-by-default",
			"content": "In Next.js 15, `no-store` is used by default if a `cache` option is not provided. This means **fetch requests will not be cached by default**."
		},
		{
			"heading": "fetch-requests-are-no-longer-cached-by-default",
			"content": "You can still opt into caching `fetch` requests by:"
		},
		{
			"heading": "fetch-requests-are-no-longer-cached-by-default",
			"content": "Setting the `cache` option to `force-cache` in a single `fetch` call"
		},
		{
			"heading": "fetch-requests-are-no-longer-cached-by-default",
			"content": "Setting the `dynamic` route config option to `'force-static'` for a single route"
		},
		{
			"heading": "fetch-requests-are-no-longer-cached-by-default",
			"content": "Setting the `fetchCache` route config option to `'default-cache'` to override all `fetch` requests in a Layout or Page to use `force-cache` unless they explicitly specify their own `cache` option"
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
			"content": "Loading.js will remain cached for 5 minutes (or the value of the `staleTimes.static` configuration)."
		},
		{
			"heading": "client-router-cache-no-longer-caches-page-components-by-default",
			"content": "You can opt into the previous Client Router Cache behavior by setting the following configuration:"
		},
		{
			"heading": "incremental-adoption-of-partial-prerendering-experimental",
			"content": "In Next.js 14, we introduced Partial Prerendering (PPR) - an optimization that combines static and dynamic rendering on the same page."
		},
		{
			"heading": "incremental-adoption-of-partial-prerendering-experimental",
			"content": "Next.js currently defaults to static rendering unless you use dynamic functions such as `cookies()`, `headers()`, and uncached data requests. These APIs opt an entire route into dynamic rendering. With PPR, you can wrap any dynamic UI in a Suspense boundary. When a new request comes in, Next.js will immediately serve a static HTML shell, then render and stream the dynamic parts in the same HTTP request."
		},
		{
			"heading": "incremental-adoption-of-partial-prerendering-experimental",
			"content": "To allow for incremental adoption, we’ve added an `experimental_ppr` route config option for opting specific Layouts and Pages into PPR:"
		},
		{
			"heading": "incremental-adoption-of-partial-prerendering-experimental",
			"content": "To use the new option, you’ll need to set the `experimental.ppr` config in your `next.config.js` file to `'incremental'`:"
		},
		{
			"heading": "incremental-adoption-of-partial-prerendering-experimental",
			"content": "Once all the segments have PPR enabled, it’ll be considered safe for you to set the `ppr`\xA0value\xA0to\xA0`true`, and enable it for the entire app and all future routes."
		},
		{
			"heading": "incremental-adoption-of-partial-prerendering-experimental",
			"content": "We will share more about our PPR roadmap in our Next.js 15 GA blog post."
		},
		{
			"heading": "incremental-adoption-of-partial-prerendering-experimental",
			"content": "Learn more about Partial Prerendering."
		},
		{
			"heading": "executing-code-after-a-response-with-nextafter-experimental",
			"content": "When processing a user request, the server typically performs tasks directly related to computing the response. However, you may need to perform tasks such as logging, analytics, and other external system synchronization."
		},
		{
			"heading": "executing-code-after-a-response-with-nextafter-experimental",
			"content": "Since these tasks are not directly related to the response, the user should not have to wait for them to complete. Deferring the work after responding to the user poses a challenge because serverless functions stop computation immediately after the response is closed."
		},
		{
			"heading": "executing-code-after-a-response-with-nextafter-experimental",
			"content": "`after()` is a new experimental API that solves this problem by allowing you to schedule work to be processed after the response has finished streaming, enabling secondary tasks to run without blocking the primary response."
		},
		{
			"heading": "executing-code-after-a-response-with-nextafter-experimental",
			"content": "To use it, add `experimental.after` to `next.config.js`:"
		},
		{
			"heading": "executing-code-after-a-response-with-nextafter-experimental",
			"content": "Then, import the function in Server Components, Server Actions, Route Handlers, or Middleware."
		},
		{
			"heading": "executing-code-after-a-response-with-nextafter-experimental",
			"content": "Learn more about `next/after`."
		},
		{
			"heading": "create-next-app-updates",
			"content": "For Next.js 15, we've updated `create-next-app` with a new design."
		},
		{
			"heading": "create-next-app-updates",
			"content": "When running `create-next-app`, there is a new prompt asking if you want to enable Turbopack for local development (defaults to `No`)."
		},
		{
			"heading": "create-next-app-updates",
			"content": "The `--turbo` flag can be used to enable Turbopack."
		},
		{
			"heading": "create-next-app-updates",
			"content": "To make getting started on a new project even easier, a new `--empty` flag has been added to the CLI. This will remove any extraneous files and styles, resulting in a minimal \"hello world\" page."
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
			"content": "To unify configuration between App and Pages Router, we’re introducing a new option, `bundlePagesRouterDependencies` to match the default automatic bundling of the App Router. You can then use `serverExternalPackages` to opt-out specific packages, if needed."
		},
		{
			"heading": "optimizing-bundling-of-external-packages-stable",
			"content": "Learn more about optimizing external packages."
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** Minimum React version is now 19 RC"
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
			"content": "**\\[Breaking]** Middleware: Apply `react-server` condition to limit unrecommended react API imports (PR)"
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
			"content": "**\\[Improvement]** Metadata: Updated environmental variable fallbacks for `metadataBase` when hosted on Vercel (PR)"
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
			"content": "**\\[Docs]** Improve auth documentation (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Docs]** `@next/env` package (PR)"
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
			"content": "The\xA0**Next.js**\xA0team:\xA0Andrew,\xA0Balazs, Ethan, Janka,\xA0Jiachi,\xA0Jimmy,\xA0JJ,\xA0Josh, Sam,\xA0Sebastian, Sebbie,\xA0Shu,\xA0Steven,\xA0Tim,\xA0Wyatt, and Zack."
		},
		{
			"heading": "contributors",
			"content": "The\xA0**Turbopack**\xA0team:\xA0Alex, Benjamin, Donny,\xA0Leah,\xA0Maia,\xA0OJ,\xA0Tobias, and\xA0Will."
		},
		{
			"heading": "contributors",
			"content": "**Next.js Docs**:\xA0Delba,\xA0Steph,\xA0Michael, Anthony, and\xA0Lee."
		},
		{
			"heading": "contributors",
			"content": "Huge thanks to @devjiwonchoi, @ijjk, @Ethan-Arrowood, @sokra, @kenji-webdev, @wbinnssmith, @huozhi, @domdomegg, @samcx, @Jaaneek, @evanwinter, @wyattjoh, @kdy1, @balazsorban44, @feedthejim, @ztanner, @ForsakenHarmony, @kwonoj, @delbaoliveira, @stipsan, @leerob, @shuding, @xiaohanyu, @timneutkens, @dvoytenko, @bobaaaaa, @bgw, @gaspar09, @souporserious, @unflxw, @kiner-tang, @Ehren12, @EffectDoplera, @IAmKushagraSharma, @Auxdible, @sean-rallycry, @Jeffrey-Zutt, @eps1lon, @jeanmax1me, @unstubbable, @NilsJacobsen, @PaulAsjes, @adiguno, @ryan-nauman, @zsh77, @KagamiChan, @steveluscher, @MehfoozurRehman, @vkryachko, @chentsulin, @samijaber, @begalinsaf, @FluxCapacitor2, @lukahartwig, @brianshano, @pavelglac, @styfle, @symant233, @HristovCodes, @karlhorky, @jonluca, @jonathan-ingram, @mknichel, @sopranopillow, @Gomah, @imddc, @notrab, @gabrielrolfsen, @remorses, @AbhiShake1, @agadzik, @ryota-murakami, @rishabhpoddar, @rezamauliadi, @IncognitoTGT, @webtinax, @BunsDev, @nisabmohd, @z0n, @bennettdams, @joeshub, @n1ckoates, @srkirkland, @RiskyMH, @coopbri, @okoyecharles, @diogocapela, @dnhn, @typeofweb, @davidsa03, @imranolas, @lubieowoce, @maxhaomh, @mirasayon, @blvdmitry, @hwangstar156, @lforst, @emmerich, @christian-bromann, @Lsnsh, @datner, @hiro0218, @flybayer, @ianmacartney, @ypessoa, @ryohidaka, @icyJoseph, @Arinji2, @lovell, @nsams, @Nayeem-XTREME, @JamBalaya56562, @Arindam200, @gaojude, @qqww08, @todor0v, @coltonehrman, and @wiesson for helping!"
		}
	],
	"headings": [
		{
			"id": "react-19-rc",
			"content": "React 19 RC"
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
			"id": "caching-updates",
			"content": "Caching updates"
		},
		{
			"id": "fetch-requests-are-no-longer-cached-by-default",
			"content": "`fetch` Requests are no longer cached by default"
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
			"id": "incremental-adoption-of-partial-prerendering-experimental",
			"content": "Incremental adoption of Partial Prerendering (Experimental)"
		},
		{
			"id": "executing-code-after-a-response-with-nextafter-experimental",
			"content": "Executing code after a response with `next/after` (Experimental)"
		},
		{
			"id": "create-next-app-updates",
			"content": "`create-next-app` updates"
		},
		{
			"id": "optimizing-bundling-of-external-packages-stable",
			"content": "Optimizing bundling of external packages (Stable)"
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
		url: "#react-19-rc",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#react-19-rc",
			children: "React 19 RC"
		}) })
	},
	{
		depth: 2,
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
		url: "#caching-updates",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#caching-updates",
			children: "Caching updates"
		}) })
	},
	{
		depth: 3,
		url: "#fetch-requests-are-no-longer-cached-by-default",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#fetch-requests-are-no-longer-cached-by-default",
			children: [(0, import_jsx_runtime.jsx)("code", { children: "fetch" }), " Requests are no longer cached by default"]
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
		url: "#incremental-adoption-of-partial-prerendering-experimental",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#incremental-adoption-of-partial-prerendering-experimental",
			children: "Incremental adoption of Partial Prerendering (Experimental)"
		}) })
	},
	{
		depth: 2,
		url: "#executing-code-after-a-response-with-nextafter-experimental",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#executing-code-after-a-response-with-nextafter-experimental",
			children: [
				"Executing code after a response with ",
				(0, import_jsx_runtime.jsx)("code", { children: "next/after" }),
				" (Experimental)"
			]
		}) })
	},
	{
		depth: 2,
		url: "#create-next-app-updates",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#create-next-app-updates",
			children: [(0, import_jsx_runtime.jsx)("code", { children: "create-next-app" }), " updates"]
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
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { Image } = _components;
	if (!Image) _missingMdxReference("Image", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Next.js 15 Release Candidate (RC) is now available. This early version allows you to test the latest features before the upcoming stable release." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#react-19-rc",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "React:" })
			}), " Support for the React 19 RC, React Compiler (Experimental), and hydration error improvements"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#caching-updates",
					children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Caching:" })
				}),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
				" requests, ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }),
				" Route Handlers, and client navigations are no longer cached by default"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#incremental-adoption-of-partial-prerendering-experimental",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Partial Prerendering (Experimental):" })
			}), " New Layout and Page config option for incremental adoption"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#executing-code-after-a-response-with-nextafter-experimental",
				children: (0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next/after" }), " (Experimental):"] })
			}), " New API to execute code after a response has finished streaming"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#create-next-app-updates",
				children: (0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "create-next-app" }), ":"] })
			}), " Updated design and a new flag to enable Turbopack in local development"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#optimizing-bundling-of-external-packages-stable",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Bundling external packages (Stable):" })
			}), " New config options for App and Pages Router"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Try the Next.js 15 RC today:" }),
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
						children: " next@rc"
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
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "react-19-rc",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#react-19-rc",
				children: "React 19 RC"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The Next.js App Router is built on the React ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/blog/2023/05/03/react-canaries",
				children: "canary channel"
			}),
			" for frameworks, which has allowed developers to use and provide feedback on these new React APIs before the v19 release."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js 15 RC now supports React 19 RC, which includes new features for both the client and server like Actions." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Read the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/building-your-application/upgrading/version-15",
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
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }), " Some third party libraries may not be compatible with React 19 yet."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
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
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Install ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "babel-plugin-react-compiler" }),
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
						children: " babel-plugin-react-compiler"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Then, add ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.reactCompiler" }),
			" option in ",
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
							children: "    reactCompiler: "
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "module"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "exports"
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
							children: " nextConfig;"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Optionally, you can configure the compiler to run in \"opt-in\" mode as follows:" }),
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
						children: "    reactCompiler: {"
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
							children: "      compilationMode: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'annotation'"
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "module"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "exports"
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
							children: " nextConfig;"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }), " The React Compiler is currently only possible to use in Next.js through a Babel plugin, which could result in slower build times."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/learn/react-compiler",
				children: "React Compiler"
			}),
			", and the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/learn/react-compiler#usage-with-nextjs",
				children: "available Next.js config options"
			}),
			"."
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
			width: "1924",
			height: "1034"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js 15 RC has improved this to:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Hydration error message improved in Next.js 15 RC",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/hydration-error-after-light.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/hydration-error-after-dark.png",
			width: "1920",
			height: "1308"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "caching-updates",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#caching-updates",
				children: "Caching updates"
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
			"With Next.js 15, we’re changing the caching default for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
			" requests, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }),
			" Route Handlers, and Client Router Cache from cached by default to uncached by default. If you want to retain the previous behavior, you can continue to opt-into caching."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're continuing to improve caching in Next.js in the coming months and we'll share more details in the Next.js 15 GA announcement." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "fetch-requests-are-no-longer-cached-by-default",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#fetch-requests-are-no-longer-cached-by-default",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }), " Requests are no longer cached by default"]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js uses the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/Fetch_API",
				children: [
					"Web\xA0",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
					"\xA0API"
				]
			}),
			"\xA0cache option to configure how a server-side fetch request interacts with the framework's persistent HTTP cache:"
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "fetch('https://...', { cache: 'force-cache' | 'no-store' });" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "no-store" }), " - fetch a resource from a remote server on every request and do not update the cache"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "force-cache" }), " - fetch a resource from the cache (if it exists) or a remote server and update the cache"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In Next.js 14, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "force-cache" }),
			" was used by default if a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "cache" }),
			" option was not provided, unless a dynamic function or dynamic config option was used."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In Next.js 15, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "no-store" }),
			" is used by default if a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "cache" }),
			" option is not provided. This means ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "fetch requests will not be cached by default" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can still opt into caching ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
			" requests by:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Setting the ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "https://nextjs.org/docs/app/api-reference/functions/fetch#optionscache",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "cache" }), " option"]
				}),
				" to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "force-cache" }),
				" in a single ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
				" call"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Setting the ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "dynamic" }), " route config option"]
				}),
				" to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "'force-static'" }),
				" for a single route"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Setting the ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#fetchcache",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "fetchCache" }), " route config option"]
				}),
				" to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "'default-cache'" }),
				" to override all ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
				" requests in a Layout or Page to use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "force-cache" }),
				" unless they explicitly specify their own ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "cache" }),
				" option"
			] }),
			"\n"
		] }),
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
				href: "https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "sitemap.ts" })
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "opengraph-image.tsx" })
			}),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "icon.tsx" })
			}),
			", and other ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/api-reference/file-conventions/metadata",
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
				href: "https://nextjs.org/docs/app/api-reference/next-config-js/staleTimes",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "staleTimes" })
			}),
			" flag to allow custom configuration of the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/building-your-application/caching#client-side-router-cache",
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
					href: "https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#4-partial-rendering",
					children: "partial rendering"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Back/forward navigation will still restore from cache to ensure the browser can restore scroll position." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nextjs.org/docs/app/api-reference/file-conventions/loading",
					children: "Loading.js"
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "module"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "exports"
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
							children: " nextConfig;"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "incremental-adoption-of-partial-prerendering-experimental",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#incremental-adoption-of-partial-prerendering-experimental",
				children: "Incremental adoption of Partial Prerendering (Experimental)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In Next.js 14, we ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-14#partial-prerendering-preview",
				children: "introduced Partial Prerendering (PPR)"
			}),
			" - an optimization that combines ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/building-your-application/rendering/server-components#server-rendering-strategies",
				children: "static and dynamic rendering"
			}),
			" on the same page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js currently defaults to static rendering unless you use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-functions",
				children: "dynamic functions"
			}),
			" such as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "cookies()" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "headers()" }),
			", and uncached data requests. These APIs opt an entire route into dynamic rendering. With PPR, you can wrap any dynamic UI in a Suspense boundary. When a new request comes in, Next.js will immediately serve a static HTML shell, then render and stream the dynamic parts in the same HTTP request."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To allow for incremental adoption, we’ve added an ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental_ppr" }),
			" route config option for opting specific Layouts and Pages into PPR:"
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
							children: " { Suspense } "
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
							children: " \"react\""
						})
					]
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
							children: "import"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { StaticComponent, DynamicComponent } "
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
							children: " \"@/app/ui\""
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
							children: " const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " experimental_ppr"
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " true"
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
						children: " {"
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
						children: "     <>"
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
						children: "	     <StaticComponent />"
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
							children: "	     <Suspense fallback"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "{"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "..."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "}"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
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
						children: "		     <DynamicComponent />"
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
						children: "	     </Suspense>"
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
						children: "     </>"
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
						children: "  };"
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
			"To use the new option, you’ll need to set the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.ppr" }),
			" config in your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			" file to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "'incremental'" }),
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
							children: "    ppr: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'incremental'"
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "module"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "exports"
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
							children: " nextConfig;"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Once all the segments have PPR enabled, it’ll be considered safe for you to set the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ppr" }),
			"\xA0value\xA0to\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "true" }),
			", and enable it for the entire app and all future routes."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We will share more about our PPR roadmap in our Next.js 15 GA blog post." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering",
				children: "Partial Prerendering"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "executing-code-after-a-response-with-nextafter-experimental",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#executing-code-after-a-response-with-nextafter-experimental",
				children: [
					"Executing code after a response with ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "next/after" }),
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "module"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "exports"
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
				href: "https://nextjs.org/docs/app/api-reference/functions/unstable_after",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next/after" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "create-next-app-updates",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#create-next-app-updates",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "create-next-app" }), " updates"]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For Next.js 15, we've updated ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "create-next-app" }),
			" with a new design."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "New design for create-next-app in Next.js 15 RC",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/create-next-app-light.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc/create-next-app-dark.png",
			width: "2038",
			height: "1440"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When running ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "create-next-app" }),
			", there is a new prompt asking if you want to enable Turbopack for local development (defaults to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "No" }),
			")."
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
						children: "✔"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " Would"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " you"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " like"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " to"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " use"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " Turbopack"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " for"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " next"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " dev?"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " …"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " No"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " /"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " Yes"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--turbo" }),
			" flag can be used to enable Turbopack."
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
						children: " create-next-app@rc"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " --turbo"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To make getting started on a new project even easier, a new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--empty" }),
			" flag has been added to the CLI. This will remove any extraneous files and styles, resulting in a minimal \"hello world\" page."
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
						children: " create-next-app@rc"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " --empty"
					})
				]
			}) })
		}) }),
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
				href: "https://nextjs.org/docs/app/api-reference/next-config-js/serverExternalPackages",
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
				href: "https://nextjs.org/docs/pages/api-reference/next-config-js/transpilePackages",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "transpilePackages" })
			}),
			" option. With this configuration option, you need to specify each package."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To unify configuration between App and Pages Router, we’re introducing a new option, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/pages/api-reference/next-config-js/bundlePagesRouterDependencies",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "bundlePagesRouterDependencies" })
			}),
			" to match the default automatic bundling of the App Router. You can then use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/api-reference/next-config-js/serverExternalPackages",
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "module"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "exports"
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
				href: "https://nextjs.org/docs/app/building-your-application/optimizing/package-bundling",
				children: "optimizing external packages"
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
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }), " Minimum React version is now 19 RC"] }),
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
				" condition to limit unrecommended react API imports (",
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
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Metadata: Updated environmental variable fallbacks for ",
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
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Docs]" }),
				" Improve auth documentation (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/63140",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Docs]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "@next/env" }),
				" package (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/64908",
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
				href: "https://nextjs.org/docs/app/building-your-application/upgrading/version-15",
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
				"The\xA0",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Next.js" }),
				"\xA0team:\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/acdlite",
					children: "Andrew"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/balazsorban44",
					children: "Balazs"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/Ethan-Arrowood",
					children: "Ethan"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/lubieowoce",
					children: "Janka"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/huozhi",
					children: "Jiachi"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/feedthejim",
					children: "Jimmy"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/ijjk",
					children: "JJ"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/gnoff",
					children: "Josh"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/samcx",
					children: "Sam"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/sebmarkbage",
					children: "Sebastian"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/eps1lon",
					children: "Sebbie"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/shuding",
					children: "Shu"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/styfle",
					children: "Steven"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/timneutkens",
					children: "Tim"
				}),
				",\xA0",
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
				"The\xA0",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Turbopack" }),
				"\xA0team:\xA0",
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
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/forsakenharmony",
					children: "Leah"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/padmaia",
					children: "Maia"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/kwonoj",
					children: "OJ"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/sokra",
					children: "Tobias"
				}),
				", and\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/wbinnssmith",
					children: "Will"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Next.js Docs" }),
				":\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/delbaoliveira",
					children: "Delba"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/StephDietz",
					children: "Steph"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/manovotny",
					children: "Michael"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/anthonyshew",
					children: "Anthony"
				}),
				", and\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/leerob",
					children: "Lee"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Huge thanks to @devjiwonchoi, @ijjk, @Ethan-Arrowood, @sokra, @kenji-webdev, @wbinnssmith, @huozhi, @domdomegg, @samcx, @Jaaneek, @evanwinter, @wyattjoh, @kdy1, @balazsorban44, @feedthejim, @ztanner, @ForsakenHarmony, @kwonoj, @delbaoliveira, @stipsan, @leerob, @shuding, @xiaohanyu, @timneutkens, @dvoytenko, @bobaaaaa, @bgw, @gaspar09, @souporserious, @unflxw, @kiner-tang, @Ehren12, @EffectDoplera, @IAmKushagraSharma, @Auxdible, @sean-rallycry, @Jeffrey-Zutt, @eps1lon, @jeanmax1me, @unstubbable, @NilsJacobsen, @PaulAsjes, @adiguno, @ryan-nauman, @zsh77, @KagamiChan, @steveluscher, @MehfoozurRehman, @vkryachko, @chentsulin, @samijaber, @begalinsaf, @FluxCapacitor2, @lukahartwig, @brianshano, @pavelglac, @styfle, @symant233, @HristovCodes, @karlhorky, @jonluca, @jonathan-ingram, @mknichel, @sopranopillow, @Gomah, @imddc, @notrab, @gabrielrolfsen, @remorses, @AbhiShake1, @agadzik, @ryota-murakami, @rishabhpoddar, @rezamauliadi, @IncognitoTGT, @webtinax, @BunsDev, @nisabmohd, @z0n, @bennettdams, @joeshub, @n1ckoates, @srkirkland, @RiskyMH, @coopbri, @okoyecharles, @diogocapela, @dnhn, @typeofweb, @davidsa03, @imranolas, @lubieowoce, @maxhaomh, @mirasayon, @blvdmitry, @hwangstar156, @lforst, @emmerich, @christian-bromann, @Lsnsh, @datner, @hiro0218, @flybayer, @ianmacartney, @ypessoa, @ryohidaka, @icyJoseph, @Arinji2, @lovell, @nsams, @Nayeem-XTREME, @JamBalaya56562, @Arindam200, @gaojude, @qqww08, @todor0v, @coltonehrman, and @wiesson for helping!" })
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
export { toc as a, structuredData as i, frontmatter as n, next_15_rc_exports as r, MDXContent as t };
