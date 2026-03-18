import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-14-2-owI2r3O4.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_14_2_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 14.2",
	"description": "Next.js 14.2 includes development, production, and caching improvements. Including new configuration options, 99% Turbopack tests passing, and more.",
	"author": [{
		"name": "Delba de Oliveira",
		"image": "/static/team/delba.jpg"
	}, {
		"name": "Tim Neutkens",
		"image": "/static/team/tim.jpg"
	}],
	"date": /* @__PURE__ */ new Date(1712854800507),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-14-2/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js 14.2 includes development, production, and caching improvements."
		},
		{
			"heading": void 0,
			"content": "**Turbopack for Development (Release Candidate):** 99.8% tests passing for `next dev --turbo`."
		},
		{
			"heading": void 0,
			"content": "**Build and Production Improvements:** Reduced build memory usage and CSS optimizations."
		},
		{
			"heading": void 0,
			"content": "**Caching Improvements:** Configurable invalidation periods with `staleTimes`."
		},
		{
			"heading": void 0,
			"content": "**Error DX Improvements:** Better hydration mismatch errors and design updates."
		},
		{
			"heading": void 0,
			"content": "Upgrade today or get started with:"
		},
		{
			"heading": "turbopack-for-development-release-candidate",
			"content": "Over the past few months, we’ve been working on improving local development performance with Turbopack. In version 14.2, the Turbopack **Release Candidate** is now available for local development:"
		},
		{
			"heading": "turbopack-for-development-release-candidate",
			"content": "**99.8%** of integrations tests are now passing."
		},
		{
			"heading": "turbopack-for-development-release-candidate",
			"content": "We’ve verified the top 300 `npm` packages used in Next.js applications can compile with Turbopack."
		},
		{
			"heading": "turbopack-for-development-release-candidate",
			"content": "All Next.js examples work with Turbopack."
		},
		{
			"heading": "turbopack-for-development-release-candidate",
			"content": "We’ve integrated Lightning CSS, a fast CSS bundler and minifier, written in Rust."
		},
		{
			"heading": "turbopack-for-development-release-candidate",
			"content": "We’ve been extensively dogfooding Turbopack with Vercel’s applications. For example, with\xA0`vercel.com`, a large Next.js app, we've seen:"
		},
		{
			"heading": "turbopack-for-development-release-candidate",
			"content": "Up to\xA0**76.7% faster**\xA0local server startup."
		},
		{
			"heading": "turbopack-for-development-release-candidate",
			"content": "Up to\xA0**96.3% faster**\xA0code updates with Fast Refresh."
		},
		{
			"heading": "turbopack-for-development-release-candidate",
			"content": "Up to\xA0**45.8% faster**\xA0initial route compile without caching (Turbopack does not have disk caching yet)."
		},
		{
			"heading": "turbopack-for-development-release-candidate",
			"content": "Turbopack continues to be opt-in and you can try it out with:"
		},
		{
			"heading": "turbopack-for-development-release-candidate",
			"content": "We will now be focusing on improving memory usage, implementing persistent caching, and `next build --turbo`."
		},
		{
			"heading": "turbopack-for-development-release-candidate",
			"content": "**Memory Usage** - We’ve built low-level tools for investigating memory usage. You can now generate traces that include both performance metrics and broad memory usage information. These traces allows us to investigate performance and memory usage without needing access to your application’s source code."
		},
		{
			"heading": "turbopack-for-development-release-candidate",
			"content": "**Persistent Caching** - We’re also exploring the best architecture options, and we’re expecting to share more details in a future release."
		},
		{
			"heading": "turbopack-for-development-release-candidate",
			"content": "**`next build`** - While Turbopack is not available for builds yet, &#x2A;*74.7%** of tests are already passing. You can follow the progress at areweturboyet.com/build."
		},
		{
			"heading": "turbopack-for-development-release-candidate",
			"content": "To see a list of supported and unsupported features in Turbopack, please refer to our documentation."
		},
		{
			"heading": "build-and-production-improvements",
			"content": "In addition to bundling improvements with Turbopack, we’ve worked to improve overall build and production performance for all Next.js applications (both Pages and App Router)."
		},
		{
			"heading": "tree-shaking",
			"content": "We identified an optimization for the boundary between Server and Client Components that allows for tree-shaking unused exports. For example, importing a single `Icon` component from a file that has `\"use client\"` no longer includes all the other icons from that package. This can largely reduce the production JavaScript bundle size."
		},
		{
			"heading": "tree-shaking",
			"content": "Testing this optimization on a popular library like `react-aria-components&#x60; reduced the final bundle size by &#x2A;*-51.3%**."
		},
		{
			"heading": "tree-shaking",
			"content": "> **Note:** This optimization does not currently work with barrel files. In the meantime, you can use the `optimizePackageImports` config option:\n>\n> ```ts title=\"next.config.ts\"\n> module.exports = {\n>   experimental: {\n>     optimizePackageImports: ['package-name'],\n>   },\n> };\n> ```"
		},
		{
			"heading": "build-memory-usage",
			"content": "For extremely large-scale Next.js applications, we noticed out-of-memory crashes (OOMs) during production builds. After investigating user reports and reproductions, we identified the root issue was over-bundling and minification (Next.js created fewer, larger JavaScript files with duplication). We’ve refactored the bundling logic and optimized the compiler for these cases."
		},
		{
			"heading": "build-memory-usage",
			"content": "Our early tests show that on a minimal Next.js app, memory usage and cache file size decreased **from 2.2GB to under 190MB** on average."
		},
		{
			"heading": "build-memory-usage",
			"content": "To make it easier to debug memory performance, we’ve introduced a `--experimental-debug-memory-usage` flag to `next build`. Learn more in our documentation."
		},
		{
			"heading": "css",
			"content": "We updated how CSS is optimized during production Next.js builds by chunking CSS to avoid conflicting styles when you navigate between pages."
		},
		{
			"heading": "css",
			"content": "The order and merging of CSS chunks are now defined by the import order. For example, `base-button.module.css` will be ordered before `page.module.css`:"
		},
		{
			"heading": "css",
			"content": "To maintain the correct CSS order, we recommend:"
		},
		{
			"heading": "css",
			"content": "Using CSS Modules over global styles."
		},
		{
			"heading": "css",
			"content": "Only import a CSS Module in a single JS/TS file."
		},
		{
			"heading": "css",
			"content": "If using global class names, import the global styles in the same JS/TS too."
		},
		{
			"heading": "css",
			"content": "We don’t expect this change to negatively impact the majority of applications. However, if you see any unexpected styles when upgrading, please review your CSS import order as per the recommendations in our documentation."
		},
		{
			"heading": "caching-improvements",
			"content": "Caching is a critical part of building fast and reliable web applications. When performing mutations, both users and developers expect the cache to be updated to reflect the latest changes. We've been exploring how to improve the Next.js caching experience in the App Router."
		},
		{
			"heading": "staletimes-experimental",
			"content": "The Client-side Router Cache is a caching layer designed to provide a fast navigation experience by caching visited and prefetched routes on the client."
		},
		{
			"heading": "staletimes-experimental",
			"content": "Based on community feedback, we’ve added an experimental `staleTimes` option to allow the client-side router cache invalidation period to be configured."
		},
		{
			"heading": "staletimes-experimental",
			"content": "By default, prefetched routes (using the `<Link>` component without the `prefetch` prop) will be cached for 30 seconds, and if the `prefetch` prop is set to `true`, 5 minutes. You can overwrite these default values by defining custom revalidation times in `next.config.js`:"
		},
		{
			"heading": "staletimes-experimental",
			"content": "`staleTimes` aims to improve the current experience of users who want more control over caching heuristics, but it is not intended to be the complete solution. In upcoming releases, we will focus on improving the overall caching semantics and providing more flexible solutions."
		},
		{
			"heading": "staletimes-experimental",
			"content": "Learn more about `staleTimes` in our documentation."
		},
		{
			"heading": "parallel-and-intercepting-routes",
			"content": "We are continuing to iterate on on Parallel and Intercepting Routes, now improving the integration with the Client-side Router Cache."
		},
		{
			"heading": "parallel-and-intercepting-routes",
			"content": "Parallel and Intercepting routes that invoke Server Actions with `revalidatePath` or `revalidateTag` will revalidate the cache and refresh the visible slots while maintaining the user’s current view."
		},
		{
			"heading": "parallel-and-intercepting-routes",
			"content": "Similarly, calling `router.refresh` now correctly refreshes visible slots, maintaining the current view."
		},
		{
			"heading": "errors-dx-improvements",
			"content": "In version 14.1, we started working on improving the readability of error messages and stack traces when running `next dev`. This work has continued into 14.2 to now include better error messages, overlay design improvements for both App Router and Pages Router, light and dark mode support, and clearer `dev` and `build` logs."
		},
		{
			"heading": "errors-dx-improvements",
			"content": "For example, React Hydration errors are a common source of confusion in our community. While we made improvements to help users pinpoint the source of hydration mismatches (see below), we're working with the React team to improve the underlying error messages and show the file name where the error occurred."
		},
		{
			"heading": "errors-dx-improvements",
			"content": "**Before:**"
		},
		{
			"heading": "errors-dx-improvements",
			"content": "An example of the Next.js error overlay before version 14.2."
		},
		{
			"heading": "errors-dx-improvements",
			"content": "**After:**"
		},
		{
			"heading": "errors-dx-improvements",
			"content": "An example of the Next.js error overlay after version 14.2."
		},
		{
			"heading": "react-19",
			"content": "In February, the React team announced the upcoming release of React 19. To prepare for React 19, we're working on integrating the latest features and improvements into Next.js, and plan on releasing a major version to orchestrate these changes."
		},
		{
			"heading": "react-19",
			"content": "New features like Actions and their related hooks, which have been available within Next.js from the React canary channel, will now all be available for all React applications (including client-only applications). We're excited to see wider adoption of these features in the React ecosystem."
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Docs]** New documentation on Video Optimization (PR)."
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Docs]** New documentation on `instrumentation.ts` (PR)"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Feature]** New `overrideSrc` prop for `next/image` (PR)."
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Feature]** New `revalidateReason` argument to `getStaticProps` (PR)."
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Refactored streaming logic, reducing the time to stream pages in production (PR)."
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Support for nested Server Actions (PR)."
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Support for localization in generated Sitemaps (PR)."
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Visual improvements to dev and build logs (PR)"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Skew protection is stable on Vercel (Docs)."
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Make `useSelectedLayoutSegment` compatible with the Pages Router (PR)."
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Skip `metadataBase` warnings when absolute URLs don’t need to be resolved (PR)."
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Fix Server Actions not submitting without JavaScript enabled when deployed to Vercel (PR)"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Fix error about a Server Action not being found in the actions manifest if triggered after navigating away from referring page, or if used inside of an inactive parallel route segment (PR)"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Fix CSS imports in components loaded by `next/dynamic` (PR)."
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Warn when animated image is missing `unoptimized` prop (PR)."
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Show an error message if `images.loaderFile` doesn't export a default function (PR)"
		},
		{
			"heading": "community",
			"content": "Next.js now has over 1 million monthly active developers. We're grateful for the community's support and contributions. Join the conversation on\xA0GitHub Discussions,\xA0Reddit, and\xA0Discord."
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
			"content": "The\xA0**Turbopack**\xA0team:\xA0Donny,\xA0Leah,\xA0Maia,\xA0OJ,\xA0Tobias, and\xA0Will."
		},
		{
			"heading": "contributors",
			"content": "**Next.js Docs**:\xA0Delba,\xA0Steph,\xA0Michael, Anthony, and\xA0Lee."
		},
		{
			"heading": "contributors",
			"content": "Huge thanks to @taishikato, @JesseKoldewijn, @Evavic44, @feugy, @liamlaverty, @dvoytenko, @SukkaW, @wbinnssmith, @rishabhpoddar, @better-salmon, @ziyafenn, @A7med3bdulBaset, @jasonuc, @yossydev, @Prachi-meon, @InfiniteCodeMonkeys, @ForsakenHarmony, @miketimmerman, @kwonoj, @williamli, @gnoff, @jsteele-stripe, @chungweileong94, @WITS, @sogoagain, @junioryono, @eisafaqiri, @yannbolliger, @aramikuto, @rocketman-21, @kenji-webdev, @michaelpeterswa, @Dannymx, @vpaflah, @zeevo, @chrisweb, @stefangeneralao, @tknickman, @Kikobeats, @ubinatus, @code-haseeb, @hmmChase, @byhow, @DanielRivers, @wojtekmaj, @paramoshkinandrew, @OMikkel, @theitaliandev, @oliviertassinari, @Ishaan2053, @Sandeep-Mani, @alyahmedaly, @Lezzio, @devjiwonchoi, @juliusmarminge, @szmazhr, @eddiejaoude, @itz-Me-Pj, @AndersDJohnson, @gentamura, @tills13, @dijonmusters, @SaiGanesh21, @vordgi, @ryota-murakami, @tszhong0411, @officialrajdeepsingh, @alexpuertasr, @AkifumiSato, @Jonas-PFX, @icyJoseph, @florian-lp, @pbzona, @erfanium, @remcohaszing, @bernardobelchior, @willashe, @kevinmitch14, @smakosh, @mnjongerius, @asobirov, @theoholl, @suu3, @ArianHamdi, @adrianha, @Sina-Abf, @kuzeykose, @meenie, @nphmuller, @javivelasco, @belgattitude, @Svetoslav99, @johnslemmer, @colbyfayock, @mehranmf31, @m-nakamura145, @ryo8000, @aryaemami59, @bestlyg, @jinsoul75, @petrovmiroslav, @nattui, @zhuyedev, @dongwonnn, @nhducit, @flotwig, @Schmavery, @abhinaypandey02, @rvetere, @coffeecupjapan, @cjimmy, @Soheiljafarnejad, @jantimon, @zengspr, @wesbos, @neomad1337, @MaxLeiter, and @devr77 for helping!"
		}
	],
	"headings": [
		{
			"id": "turbopack-for-development-release-candidate",
			"content": "Turbopack for Development (Release Candidate)"
		},
		{
			"id": "build-and-production-improvements",
			"content": "Build and Production Improvements"
		},
		{
			"id": "tree-shaking",
			"content": "Tree-shaking"
		},
		{
			"id": "build-memory-usage",
			"content": "Build Memory Usage"
		},
		{
			"id": "css",
			"content": "CSS"
		},
		{
			"id": "caching-improvements",
			"content": "Caching Improvements"
		},
		{
			"id": "staletimes-experimental",
			"content": "`staleTimes` (Experimental)"
		},
		{
			"id": "parallel-and-intercepting-routes",
			"content": "Parallel and Intercepting Routes"
		},
		{
			"id": "errors-dx-improvements",
			"content": "Errors DX Improvements"
		},
		{
			"id": "react-19",
			"content": "React 19"
		},
		{
			"id": "other-improvements",
			"content": "Other Improvements"
		},
		{
			"id": "community",
			"content": "Community"
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
		url: "#turbopack-for-development-release-candidate",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#turbopack-for-development-release-candidate",
			children: "Turbopack for Development (Release Candidate)"
		}) })
	},
	{
		depth: 2,
		url: "#build-and-production-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#build-and-production-improvements",
			children: "Build and Production Improvements"
		}) })
	},
	{
		depth: 3,
		url: "#tree-shaking",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#tree-shaking",
			children: "Tree-shaking"
		}) })
	},
	{
		depth: 3,
		url: "#build-memory-usage",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#build-memory-usage",
			children: "Build Memory Usage"
		}) })
	},
	{
		depth: 3,
		url: "#css",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#css",
			children: "CSS"
		}) })
	},
	{
		depth: 2,
		url: "#caching-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#caching-improvements",
			children: "Caching Improvements"
		}) })
	},
	{
		depth: 3,
		url: "#staletimes-experimental",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#staletimes-experimental",
			children: [(0, import_jsx_runtime.jsx)("code", { children: "staleTimes" }), " (Experimental)"]
		}) })
	},
	{
		depth: 3,
		url: "#parallel-and-intercepting-routes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#parallel-and-intercepting-routes",
			children: "Parallel and Intercepting Routes"
		}) })
	},
	{
		depth: 2,
		url: "#errors-dx-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#errors-dx-improvements",
			children: "Errors DX Improvements"
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
		depth: 2,
		url: "#other-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#other-improvements",
			children: "Other Improvements"
		}) })
	},
	{
		depth: 2,
		url: "#community",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#community",
			children: "Community"
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
		img: "img",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js 14.2 includes development, production, and caching improvements." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#turbopack-for-development-release-candidate",
					children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Turbopack for Development (Release Candidate):" })
				}),
				" 99.8% tests passing for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev --turbo" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#build-and-production-improvements",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Build and Production Improvements:" })
			}), " Reduced build memory usage and CSS optimizations."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#caching-improvements",
					children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Caching Improvements:" })
				}),
				" Configurable invalidation periods with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "staleTimes" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#errors-dx-improvements",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Error DX Improvements:" })
			}), " Better hydration mismatch errors and design updates."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Upgrade today or get started with:" }),
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
				children: [(0, import_jsx_runtime.jsx)(_components.span, {
					style: {
						"--shiki-light": "#6F42C1",
						"--shiki-dark": "#B392F0"
					},
					children: "npx"
				}), (0, import_jsx_runtime.jsx)(_components.span, {
					style: {
						"--shiki-light": "#032F62",
						"--shiki-dark": "#9ECBFF"
					},
					children: " create-next-app@latest"
				})]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "turbopack-for-development-release-candidate",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#turbopack-for-development-release-candidate",
				children: "Turbopack for Development (Release Candidate)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Over the past few months, we’ve been working on improving local development performance with Turbopack. In version 14.2, the Turbopack ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Release Candidate" }),
			" is now available for local development:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "99.8%" }),
				" of ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://areweturboyet.com/",
					children: "integrations tests"
				}),
				" are now passing."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"We’ve verified the top 300 ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "npm" }),
				" packages used in Next.js applications can compile with Turbopack."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"All ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples",
					children: "Next.js examples"
				}),
				" work with Turbopack."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"We’ve integrated ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://lightningcss.dev/",
					children: "Lightning CSS"
				}),
				", a fast CSS bundler and minifier, written in Rust."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We’ve been extensively dogfooding Turbopack with Vercel’s applications. For example, with\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "vercel.com" }),
			", a large Next.js app, we've seen:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Up to\xA0",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "76.7% faster" }),
				"\xA0local server startup."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Up to\xA0",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "96.3% faster" }),
				"\xA0code updates with Fast Refresh."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Up to\xA0",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "45.8% faster" }),
				"\xA0initial route compile without caching (Turbopack does not have disk caching yet)."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Turbopack continues to be opt-in and you can try it out with:" }),
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
						children: "next"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " dev"
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
			"We will now be focusing on improving memory usage, implementing persistent caching, and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build --turbo" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Memory Usage" }),
				" - We’ve built low-level tools for investigating memory usage. You can now ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/architecture/turbopack#generating-trace-files",
					children: "generate traces"
				}),
				" that include both performance metrics and broad memory usage information. These traces allows us to investigate performance and memory usage without needing access to your application’s source code."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Persistent Caching" }), " - We’re also exploring the best architecture options, and we’re expecting to share more details in a future release."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }) }),
				" - While Turbopack is not available for builds yet, ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "74.7%" }),
				" of tests are already passing. You can follow the progress at ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://areweturboyet.com/build",
					children: "areweturboyet.com/build"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To see a list of ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/architecture/turbopack#supported-features",
				children: "supported"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/architecture/turbopack#unsupported-features",
				children: "unsupported features"
			}),
			" in Turbopack, please refer to our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/architecture/turbopack",
				children: "documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "build-and-production-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#build-and-production-improvements",
				children: "Build and Production Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In addition to bundling improvements with Turbopack, we’ve worked to improve overall build and production performance for all Next.js applications (both Pages and App Router)." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "tree-shaking",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#tree-shaking",
				children: "Tree-shaking"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We identified an optimization for the boundary between Server and Client Components that allows for tree-shaking unused exports. For example, importing a single ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Icon" }),
			" component from a file that has ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "\"use client\"" }),
			" no longer includes all the other icons from that package. This can largely reduce the production JavaScript bundle size."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Testing this optimization on a popular library like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "react-aria-components" }),
			" reduced the final bundle size by ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "-51.3%" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }),
				" This optimization does not currently work with barrel files. In the meantime, you can use the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/next-config-js/optimizePackageImports",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "optimizePackageImports" })
				}),
				" config option:"
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
								children: "    optimizePackageImports: ["
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
					})
				] })
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "build-memory-usage",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#build-memory-usage",
				children: "Build Memory Usage"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For extremely large-scale Next.js applications, we noticed out-of-memory crashes (OOMs) during production builds. After investigating user reports and reproductions, we identified the root issue was over-bundling and minification (Next.js created fewer, larger JavaScript files with duplication). We’ve refactored the bundling logic and optimized the compiler for these cases." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Our early tests show that on a minimal Next.js app, memory usage and cache file size decreased ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "from 2.2GB to under 190MB" }),
			" on average."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To make it easier to debug memory performance, we’ve introduced a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--experimental-debug-memory-usage" }),
			" flag to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			". Learn more in our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/optimizing/memory-usage",
				children: "documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "css",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#css",
				children: "CSS"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We updated how CSS is optimized during production Next.js builds by chunking CSS to avoid conflicting styles when you navigate between pages." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The order and merging of CSS chunks are now defined by the import order. For example, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "base-button.module.css" }),
			" will be ordered before ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "page.module.css" }),
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
			title: "base-button.tsx",
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
							children: " styles "
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
							children: " './base-button.module.css'"
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
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " BaseButton"
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
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "  return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " <"
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
							children: " className"
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
							children: "{styles.primary} />;"
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
						children: "}"
					})
				})
			] })
		}) }),
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
			title: "page.tsx",
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
							children: " { BaseButton } "
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
							children: " './base-button'"
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
							children: " styles "
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
							children: " './page.module.css'"
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
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "  return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "BaseButton"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " className"
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
							children: "{styles.primary} />;"
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
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To maintain the correct CSS order, we recommend:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Using ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/styling/css-modules",
					children: "CSS Modules"
				}),
				" over ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/styling/css-modules#global-styles",
					children: "global styles"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Only import a CSS Module in a single JS/TS file." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "If using global class names, import the global styles in the same JS/TS too." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We don’t expect this change to negatively impact the majority of applications. However, if you see any unexpected styles when upgrading, please review your CSS import order as per the recommendations in our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/styling/css#ordering-and-merging",
				children: "documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "caching-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#caching-improvements",
				children: "Caching Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Caching is a critical part of building fast and reliable web applications. When performing mutations, both users and developers expect the cache to be updated to reflect the latest changes. We've been exploring how to improve the Next.js caching experience in the App Router." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "staletimes-experimental",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#staletimes-experimental",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "staleTimes" }), " (Experimental)"]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/caching#data-cache-and-client-side-router-cache",
				children: "Client-side Router Cache"
			}),
			" is a caching layer designed to provide a fast navigation experience by caching visited and prefetched routes on the client."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Based on community feedback, we’ve added an experimental ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "staleTimes" }),
			" option to allow the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/caching#router-cache",
				children: "client-side router cache"
			}),
			" invalidation period to be configured."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"By default, prefetched routes (using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<Link>" }),
			" component without the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "prefetch" }),
			" prop) will be cached for 30 seconds, and if the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "prefetch" }),
			" prop is set to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "true" }),
			", 5 minutes. You can overwrite these default values by defining custom ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/caching#duration-3",
				children: "revalidation times"
			}),
			" in ",
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      static: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "180"
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "staleTimes" }), " aims to improve the current experience of users who want more control over caching heuristics, but it is not intended to be the complete solution. In upcoming releases, we will focus on improving the overall caching semantics and providing more flexible solutions."] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "staleTimes" }),
			" in our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/next-config-js/staleTimes",
				children: "documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "parallel-and-intercepting-routes",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#parallel-and-intercepting-routes",
				children: "Parallel and Intercepting Routes"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We are continuing to iterate on on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/parallel-routes",
				children: "Parallel"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/intercepting-routes",
				children: "Intercepting"
			}),
			" Routes, now improving the integration with the Client-side Router Cache."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Parallel and Intercepting routes that invoke Server Actions with ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/functions/revalidatePath",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "revalidatePath" })
				}),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/functions/revalidateTag",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "revalidateTag" })
				}),
				" will revalidate the cache and refresh the visible slots while maintaining the user’s current view."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Similarly, calling ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/caching#routerrefresh",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "router.refresh" })
				}),
				" now correctly refreshes visible slots, maintaining the current view."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "errors-dx-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#errors-dx-improvements",
				children: "Errors DX Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In version 14.1, we started working on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-14-1#improved-error-messages-and-fast-refresh",
				children: "improving the readability of error messages and stack traces"
			}),
			" when running ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			". This work has continued into 14.2 to now include better error messages, overlay design improvements for both App Router and Pages Router, light and dark mode support, and clearer ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "dev" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "build" }),
			" logs."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For example, React Hydration errors are a common source of confusion in our community. While we made improvements to help users pinpoint the source of hydration mismatches (see below), we're working with the React team to improve the underlying error messages and show the file name where the error occurred." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Before:" }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-14-2/error-overlay-before.png",
			alt: "An example of the Next.js error overlay before version 14.2."
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "An example of the Next.js error overlay before version 14.2." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "After:" }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-14-2/error-overlay-after.png",
			alt: "An example of the Next.js error overlay after version 14.2."
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "An example of the Next.js error overlay after version 14.2." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "react-19",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#react-19",
				children: "React 19"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In February, the React team announced the upcoming release of ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024#the-next-major-version-of-react",
				children: "React 19"
			}),
			". To prepare for React 19, we're working on integrating the latest features and improvements into Next.js, and plan on releasing a major version to orchestrate these changes."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"New features like Actions and their related hooks, which have been available within Next.js from the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/blog/2023/05/03/react-canaries",
				children: "React canary channel"
			}),
			", will now all be available for all React applications (including client-only applications). We're excited to see wider adoption of these features in the React ecosystem."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "other-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#other-improvements",
				children: "Other Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Docs]" }),
				" New documentation on Video Optimization (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/60574",
					children: "PR"
				}),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Docs]" }),
				" New documentation on ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation.ts" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/61403",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" New ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "overrideSrc" }),
				" prop for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/64221",
					children: "PR"
				}),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" New ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "revalidateReason" }),
				" argument to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/64258",
					children: "PR"
				}),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Refactored streaming logic, reducing the time to stream pages in production (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/63427",
					children: "PR"
				}),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Support for nested Server Actions (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/61001",
					children: "PR"
				}),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Support for localization in generated Sitemaps (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/53765",
					children: "PR"
				}),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Visual improvements to dev and build logs (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/62946",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Skew protection is stable on Vercel (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://vercel.com/docs/skew-protection",
					children: "Docs"
				}),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Make ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "useSelectedLayoutSegment" }),
				" compatible with the Pages Router (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/62584",
					children: "PR"
				}),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Skip ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "metadataBase" }),
				" warnings when absolute URLs don’t need to be resolved (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/61898",
					children: "PR"
				}),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Fix Server Actions not submitting without JavaScript enabled when deployed to Vercel (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/63978",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Fix error about a Server Action not being found in the actions manifest if triggered after navigating away from referring page, or if used inside of an inactive parallel route segment (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/64227",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Fix CSS imports in components loaded by ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/dynamic" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/64294",
					children: "PR"
				}),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Warn when animated image is missing ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "unoptimized" }),
				" prop (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/61045",
					children: "PR"
				}),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Show an error message if ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "images.loaderFile" }),
				" doesn't export a default function (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/64036",
					children: "PR"
				}),
				")"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "community",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#community",
				children: "Community"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js now has over 1 million monthly active developers. We're grateful for the community's support and contributions. Join the conversation on\xA0",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions",
				children: "GitHub Discussions"
			}),
			",\xA0",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.reddit.com/r/nextjs/",
				children: "Reddit"
			}),
			", and\xA0",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/discord",
				children: "Discord"
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Huge thanks to @taishikato, @JesseKoldewijn, @Evavic44, @feugy, @liamlaverty, @dvoytenko, @SukkaW, @wbinnssmith, @rishabhpoddar, @better-salmon, @ziyafenn, @A7med3bdulBaset, @jasonuc, @yossydev, @Prachi-meon, @InfiniteCodeMonkeys, @ForsakenHarmony, @miketimmerman, @kwonoj, @williamli, @gnoff, @jsteele-stripe, @chungweileong94, @WITS, @sogoagain, @junioryono, @eisafaqiri, @yannbolliger, @aramikuto, @rocketman-21, @kenji-webdev, @michaelpeterswa, @Dannymx, @vpaflah, @zeevo, @chrisweb, @stefangeneralao, @tknickman, @Kikobeats, @ubinatus, @code-haseeb, @hmmChase, @byhow, @DanielRivers, @wojtekmaj, @paramoshkinandrew, @OMikkel, @theitaliandev, @oliviertassinari, @Ishaan2053, @Sandeep-Mani, @alyahmedaly, @Lezzio, @devjiwonchoi, @juliusmarminge, @szmazhr, @eddiejaoude, @itz-Me-Pj, @AndersDJohnson, @gentamura, @tills13, @dijonmusters, @SaiGanesh21, @vordgi, @ryota-murakami, @tszhong0411, @officialrajdeepsingh, @alexpuertasr, @AkifumiSato, @Jonas-PFX, @icyJoseph, @florian-lp, @pbzona, @erfanium, @remcohaszing, @bernardobelchior, @willashe, @kevinmitch14, @smakosh, @mnjongerius, @asobirov, @theoholl, @suu3, @ArianHamdi, @adrianha, @Sina-Abf, @kuzeykose, @meenie, @nphmuller, @javivelasco, @belgattitude, @Svetoslav99, @johnslemmer, @colbyfayock, @mehranmf31, @m-nakamura145, @ryo8000, @aryaemami59, @bestlyg, @jinsoul75, @petrovmiroslav, @nattui, @zhuyedev, @dongwonnn, @nhducit, @flotwig, @Schmavery, @abhinaypandey02, @rvetere, @coffeecupjapan, @cjimmy, @Soheiljafarnejad, @jantimon, @zengspr, @wesbos, @neomad1337, @MaxLeiter, and @devr77 for helping!" })
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
export { toc as a, structuredData as i, frontmatter as n, next_14_2_exports as r, MDXContent as t };
