import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-11-1-CQaMBVZE.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_11_1_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 11.1",
	"description": "Next.js 11.1 introduces an important security patch, ES Modules support, performance improvements, Rust-based tooling, 2x faster data fetching when pre-rendering, and more!",
	"author": [
		{
			"name": "DongYoon Kang",
			"image": "/static/team/kdy.jpg"
		},
		{
			"name": "Jiachi Liu",
			"image": "/static/team/jiachi.png"
		},
		{
			"name": "JJ Kasper",
			"image": "/static/team/jj.jpg"
		},
		{
			"name": "Maia Teegarden",
			"image": "/static/team/maia.jpg"
		},
		{
			"name": "Shu Ding",
			"image": "/static/team/shu.jpg"
		},
		{
			"name": "Steven",
			"image": "/static/team/styfle.png"
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
	"date": /* @__PURE__ */ new Date(1628697600507),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-11-1/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "We're improving build performance across the entire stack with Next.js 11.1, featuring:"
		},
		{
			"heading": void 0,
			"content": "**Security Patch**: An important update to prevent potential open redirects."
		},
		{
			"heading": void 0,
			"content": "**ES Modules Support**: Enable today with an experimental flag."
		},
		{
			"heading": void 0,
			"content": "**Rust-based Tooling**: SWC integration to replace JS tooling (Babel and Terser)."
		},
		{
			"heading": void 0,
			"content": "**Faster Data Fetching**: 2x faster data fetching with HTTP `keep-alive` when pre-rendering."
		},
		{
			"heading": void 0,
			"content": "**Faster Source Maps**: 70% faster builds and 67% less memory usage when using source maps."
		},
		{
			"heading": void 0,
			"content": "**ESLint Integration Improvements**: More accessible defaults and linting for typos."
		},
		{
			"heading": void 0,
			"content": "**`next/image` Improvements**: Optional Sharp usage, better support for `next export`."
		},
		{
			"heading": void 0,
			"content": "Update today by running `npm i next@latest`."
		},
		{
			"heading": "security-patch",
			"content": "The Next.js team works with security researchers and auditors to prevent against vulnerabilities. We are thankful to Gabriel Benmergui from Robinhood for their investigation and discovery of an open redirect with `pages/_error.js` and subsequent responsible disclosure."
		},
		{
			"heading": "security-patch",
			"content": "The reported issue did not directly harm users, but it could allow for phishing attacks by redirecting to an attacker's domain from a trusted domain. We've landed a patch in Next.js 11.1 preventing this open redirect from occurring, as well as security regression tests."
		},
		{
			"heading": "security-patch",
			"content": "For more details, please read the public CVE. We recommend upgrading to the latest version of Next.js to improve the overall security of your application. For future responsible disclosure of reports, email us at `security@vercel.com`."
		},
		{
			"heading": "security-patch",
			"content": "**Note:** Next.js applications hosted on Vercel **are not affected** by this vulnerability (and, therefore, **no action is needed** for your Next.js apps running on Vercel."
		},
		{
			"heading": "es-modules-support",
			"content": "We're working on extensive ES Modules support in Next.js, both as input modules and as an output target. Starting with Next.js 11.1, you can now import npm packages using ES Modules (e.g. `\"type\": \"module\"` in their `package.json`) with an experimental flag."
		},
		{
			"heading": "es-modules-support",
			"content": "ES Modules support includes backward compatibility to support the previous import behavior of CommonJS. In Next.js 12, `esmExternals: true` will become the default. We recommend trying the new option and leave feedback GitHub Discussions if you have suggestions for improvement."
		},
		{
			"heading": "adopting-rust-based-swc",
			"content": "We're working on integrating SWC, a super-fast JavaScript and TypeScript compiler written in Rust, that will replace two toolchains used in Next.js: Babel for individual files and Terser for minifying of output bundles."
		},
		{
			"heading": "adopting-rust-based-swc",
			"content": "As part of replacing Babel with SWC, we are porting all custom code transformations Next.js uses to SWC transforms written in Rust to maximize performance. For example, tree shaking unused code inside `getStaticProps`, `getStaticPaths`, and `getServerSideProps`."
		},
		{
			"heading": "adopting-rust-based-swc",
			"content": "As part of replacing Terser, we are working on ensuring the SWC minifier has similar output to Terser while massively improving performance and parallelization of minification."
		},
		{
			"heading": "adopting-rust-based-swc",
			"content": "In early tests, previous code transformations using Babel dropped from **\\~500ms to \\~10ms*&#x2A; and code minification from Terser dropped from **\\~250ms to \\~30ms** using SWC. Overall, this resulted in **twice as fast builds**."
		},
		{
			"heading": "adopting-rust-based-swc",
			"content": "We're excited to announce DongYoon Kang, the creator of SWC, and Maia Teegarden, contributor to Parcel, have joined the Next.js team at Vercel to work on improving both `next dev` and `next build` performance. We will be sharing more results from our SWC adoption in the next release when it's made stable."
		},
		{
			"heading": "builds--data-fetching",
			"content": "When using `next build` and making numerous HTTP requests, we've **improved performance by \\~2x** on average. For example, if you're using `getStaticProps` and `getStaticPaths` to fetch content from a Headless CMS, you should see noticeably faster builds."
		},
		{
			"heading": "builds--data-fetching",
			"content": "Next.js automatically polyfills node-fetch and now enables HTTP Keep-Alive by default. According to external benchmark&#x73;, this should make pre-rendering **\\~2x faster**."
		},
		{
			"heading": "builds--data-fetching",
			"content": "To disable HTTP Keep-Alive for certain `fetch()` calls, you can add the agent option:"
		},
		{
			"heading": "builds--data-fetching",
			"content": "To override all `fetch()` calls globally, you can use `next.config.js`:"
		},
		{
			"heading": "source-maps",
			"content": "Including browser source maps in Next.js applications now has about 70% less performance cost and about 67% less memory cost due to optimizations in webpack asset and source map processing."
		},
		{
			"heading": "source-maps",
			"content": "This only affects Next.js applications with `productionBrowserSourceMaps: true` in their `next.config.js` file. With Next.js 11.1, build times are only increased by 11% when source maps are enabled."
		},
		{
			"heading": "source-maps",
			"content": "We've also worked with Sentry to increase performance of uploading source maps with the Sentry Next.js plugin."
		},
		{
			"heading": "eslint-improvements",
			"content": "In Next.js 11, we introduced built-in ESLint support through `next lint`. Since its initial release, we've continued adding rules that help developers fix common mistakes in their applications."
		},
		{
			"heading": "default-accessibility-rules",
			"content": "Better accessibility rules are now included by default, preventing issues with ARIA properties that do not match each other and usage of non-existent ARIA attributes. These rules will warn by default."
		},
		{
			"heading": "default-accessibility-rules",
			"content": "aria-props"
		},
		{
			"heading": "default-accessibility-rules",
			"content": "aria-proptypes"
		},
		{
			"heading": "default-accessibility-rules",
			"content": "aria-unsupported-elements"
		},
		{
			"heading": "default-accessibility-rules",
			"content": "role-has-required-aria-props"
		},
		{
			"heading": "default-accessibility-rules",
			"content": "role-supports-aria-props"
		},
		{
			"heading": "default-accessibility-rules",
			"content": "Special thanks to community contributor JeffersonBledsoe for adding these rules."
		},
		{
			"heading": "common-typos",
			"content": "Linting for common typos in `getStaticProps`, `getStaticPaths`, and `getServerSideProps` will now warn by default. This will help with cases where a small typo causes data fetching to not be called. For example `getstaticprops` or `getStaticprops` will show a warning."
		},
		{
			"heading": "common-typos",
			"content": "Special thanks to community contributor kaykdm for creating this rule."
		},
		{
			"heading": "nextimage-improvements",
			"content": "We've been collecting community feedback about `next/image` and the built-in Image Optimization and are excited to share multiple improvements to performance, developer experience, and user experience."
		},
		{
			"heading": "image-optimization",
			"content": "By default, Next.js uses WebAssembly to perform Image Optimization, which offsets the install time of the Next.js package by being significantly smaller and not having a post-install step. With Next.js 11.1, you can optionally install `sharp` which optimizes for uncached image generation time with a trade-off of slower installation."
		},
		{
			"heading": "image-optimization",
			"content": "The WebAssembly-based image optimizer has been updated to support ARM chips like Apple M1 with Node.js 16."
		},
		{
			"heading": "image-optimization",
			"content": "The built-in image optimizer now automatically detects the external image content type based on the content of the response body. This allows Next.js to optimize images hosted on AWS S3 when the response header is `Content-Type: application/octet-stream` ."
		},
		{
			"heading": "lazy-generation-of-blur-up-placeholders-in-development",
			"content": "During `next dev` static image imports with `placeholder=\"blur\"` are now automatically lazy-generated, improving dev server startup time for applications with many static image imports:"
		},
		{
			"heading": "other-image-improvements",
			"content": "**Images which have been previously loaded are no longer lazy-loaded**: When an image has been loaded on a page before, either through client navigation or loading it at another point in the page, Next.js will now automatically skip the lazy loading to avoid a quick flash before showing the image."
		},
		{
			"heading": "other-image-improvements",
			"content": "**Support for custom image loaders with `next export`:** `next/image` now supports using `next export` along with any third-party image optimization service. You can configure `images.loader: \"custom\"` in `next.config.js` when you intend to provide the custom `loader` prop to `next/image`."
		},
		{
			"heading": "other-image-improvements",
			"content": "**New event for when images complete loading:** Based on user feedback, we’ve added a new property `onLoadingComplete` to `next/image`. This allows for registering a callback that is invoked once the image has fully loaded."
		},
		{
			"heading": "other-image-improvements",
			"content": "**Configuration for default image cache TTL (Time to Live):** You can now configure `images.minimumCacheTTL` in `next.config.js` to change the default cache TTL for optimized images. When possible, we recommend using static image `import`s, as those automatically use the maximum TTL because the image content hash is in the URL."
		},
		{
			"heading": "community",
			"content": "Next.js is the result of the combined work of over 1,700 individual developers, industry partners like Google and Facebook, and our core team."
		},
		{
			"heading": "community",
			"content": "We're proud to see that community continue to grow. Within the last six months alone, we've seen a 50% increase in Next.js downloads on NPM, from 4.1M to 6.2M and the number of homepages using Next.js in the Alexa top 10,000 has grown 50%."
		},
		{
			"heading": "community",
			"content": "This release was brought to you by the contributions of: @abotsi, @adam-cowley, @afbarbaro, @akellbl4, @AndreVarandas, @andys-github, @angeloashmore, @apuyou, @arturmuller, @AryanBeezadhur, @atcastle, @borekb, @brandonchinn178, @breyed, @brijendravarma, @ctbarna, @ctjlewis, @darshkpatel, @delbaoliveira, @destruc7i0n, @devknoll, @enesakar, @enzoferey, @euess, @fabb, @gnbaron, @hiro0218, @housseindjirdeh, @huozhi, @ijjk, @JacobLey, @jameshoward, @jamsinclair, @janicklas-ralph, @jarvelov, @javivelasco, @jaybekster, @JeffersonBledsoe, @jflayhart, @johnrackles, @jviide, @karlsander, @kasipavankumar, @kaykdm, @kdy1, @kylemh, @leerob, @LetItRock, @lsndr, @lucleray, @m-abdelwahab, @mandarons, @markkaylor, @mastoj, @michalbundyra, @michielvangendt, @Munawwar, @mvasilkov, @NickCrews, @NickKelly1, @noahweingand, @noreiller, @nyedidikeke, @omasher, @orta, @pa-rang, @padmaia, @papaponmx, @PaulvdDool, @petermekhaeil, @phocks, @pranavp10, @qwertyforce, @raon0211, @reod, @rishabhpoddar, @roim, @Ryz0nd, @sa3dany, @sachinraja, @samrobbins85, @schoenwaldnils, @schultzp2020, @sedlukha, @sergioalvz, @shibe23, @smitssjors, @sohamsshah, @sokra, @stefanprobst, @stovmascript, @stuymedova, @styfle, @tanys123, @ThangHuuVu, @theostrahlen, @thomasmarshall, @tigger9flow, @timneutkens, @Timvdv, @tmcgann, @tomchen, @UniqueNL, @Vadorequest, @vitalybaev, @yunger7, @zackdotcomputer, @zeekrey"
		}
	],
	"headings": [
		{
			"id": "security-patch",
			"content": "Security Patch"
		},
		{
			"id": "es-modules-support",
			"content": "ES Modules Support"
		},
		{
			"id": "adopting-rust-based-swc",
			"content": "Adopting Rust-based SWC"
		},
		{
			"id": "improved-performance",
			"content": "Improved Performance"
		},
		{
			"id": "builds--data-fetching",
			"content": "Builds & Data Fetching"
		},
		{
			"id": "source-maps",
			"content": "Source Maps"
		},
		{
			"id": "eslint-improvements",
			"content": "ESLint Improvements"
		},
		{
			"id": "default-accessibility-rules",
			"content": "Default Accessibility Rules"
		},
		{
			"id": "common-typos",
			"content": "Common Typos"
		},
		{
			"id": "nextimage-improvements",
			"content": "`next/image` Improvements"
		},
		{
			"id": "image-optimization",
			"content": "Image Optimization"
		},
		{
			"id": "lazy-generation-of-blur-up-placeholders-in-development",
			"content": "Lazy Generation of Blur Up Placeholders in Development"
		},
		{
			"id": "other-image-improvements",
			"content": "Other Image Improvements"
		},
		{
			"id": "community",
			"content": "Community"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#security-patch",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#security-patch",
			children: "Security Patch"
		}) })
	},
	{
		depth: 2,
		url: "#es-modules-support",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#es-modules-support",
			children: "ES Modules Support"
		}) })
	},
	{
		depth: 2,
		url: "#adopting-rust-based-swc",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#adopting-rust-based-swc",
			children: "Adopting Rust-based SWC"
		}) })
	},
	{
		depth: 2,
		url: "#improved-performance",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#improved-performance",
			children: "Improved Performance"
		}) })
	},
	{
		depth: 3,
		url: "#builds--data-fetching",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#builds--data-fetching",
			children: "Builds & Data Fetching"
		}) })
	},
	{
		depth: 3,
		url: "#source-maps",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#source-maps",
			children: "Source Maps"
		}) })
	},
	{
		depth: 2,
		url: "#eslint-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#eslint-improvements",
			children: "ESLint Improvements"
		}) })
	},
	{
		depth: 3,
		url: "#default-accessibility-rules",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#default-accessibility-rules",
			children: "Default Accessibility Rules"
		}) })
	},
	{
		depth: 3,
		url: "#common-typos",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#common-typos",
			children: "Common Typos"
		}) })
	},
	{
		depth: 2,
		url: "#nextimage-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#nextimage-improvements",
			children: [(0, import_jsx_runtime.jsx)("code", { children: "next/image" }), " Improvements"]
		}) })
	},
	{
		depth: 3,
		url: "#image-optimization",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#image-optimization",
			children: "Image Optimization"
		}) })
	},
	{
		depth: 3,
		url: "#lazy-generation-of-blur-up-placeholders-in-development",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#lazy-generation-of-blur-up-placeholders-in-development",
			children: "Lazy Generation of Blur Up Placeholders in Development"
		}) })
	},
	{
		depth: 3,
		url: "#other-image-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#other-image-improvements",
			children: "Other Image Improvements"
		}) })
	},
	{
		depth: 2,
		url: "#community",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#community",
			children: "Community"
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
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're improving build performance across the entire stack with Next.js 11.1, featuring:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#security-patch",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Security Patch" })
			}), ": An important update to prevent potential open redirects."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#es-modules-support",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "ES Modules Support" })
			}), ": Enable today with an experimental flag."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#adopting-rust-based-swc",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Rust-based Tooling" })
			}), ": SWC integration to replace JS tooling (Babel and Terser)."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#builds--data-fetching",
					children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Faster Data Fetching" })
				}),
				": 2x faster data fetching with HTTP ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "keep-alive" }),
				" when pre-rendering."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#source-maps",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Faster Source Maps" })
			}), ": 70% faster builds and 67% less memory usage when using source maps."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#eslint-improvements",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "ESLint Integration Improvements" })
			}), ": More accessible defaults and linting for typos."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#nextimage-improvements",
					children: (0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }), " Improvements"] })
				}),
				": Optional Sharp usage, better support for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next export" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Update today by running ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "npm i next@latest" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "security-patch",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#security-patch",
				children: "Security Patch"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The Next.js team works with security researchers and auditors to prevent against vulnerabilities. We are thankful to Gabriel Benmergui from Robinhood for their investigation and discovery of an open redirect with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_error.js" }),
			" and subsequent responsible disclosure."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The reported issue did not directly harm users, but it could allow for phishing attacks by redirecting to an attacker's domain from a trusted domain. We've landed a patch in Next.js 11.1 preventing this open redirect from occurring, as well as ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/blob/canary/test/integration/repeated-slashes/test/index.test.js",
				children: "security regression tests"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more details, please read the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/security/advisories/GHSA-vxf5-wxwp-m7g9",
				children: "public CVE"
			}),
			". We recommend upgrading to the latest version of Next.js to improve the overall security of your application. For future responsible disclosure of reports, email us at ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "security@vercel.com" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }),
			" Next.js applications hosted on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com",
				children: "Vercel"
			}),
			" ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "are not affected" }),
			" by this vulnerability (and, therefore, ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "no action is needed" }),
			" for your Next.js apps running on Vercel."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "es-modules-support",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#es-modules-support",
				children: "ES Modules Support"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We're working on extensive ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nodejs.org/docs/latest/api/esm.html",
				children: "ES Modules"
			}),
			" support in Next.js, both as input modules and as an output target. Starting with Next.js 11.1, you can now import npm packages using ES Modules (e.g. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "\"type\": \"module\"" }),
			" in their ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "package.json" }),
			") with an experimental flag."
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
			title: "next.config.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
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
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "  // Prefer loading of ES Modules over CommonJS"
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
							children: "  experimental: { esmExternals: "
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
							children: " },"
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
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"ES Modules support includes backward compatibility to support the previous import behavior of ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nodejs.org/docs/latest/api/modules.html",
				children: "CommonJS"
			}),
			". In Next.js 12, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "esmExternals: true" }),
			" will become the default. We recommend trying the new option and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions/27876",
				children: "leave feedback GitHub Discussions"
			}),
			" if you have suggestions for improvement."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "adopting-rust-based-swc",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#adopting-rust-based-swc",
				children: "Adopting Rust-based SWC"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We're working on integrating ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://swc.rs/",
				children: "SWC"
			}),
			", a super-fast JavaScript and TypeScript compiler written in Rust, that will replace two toolchains used in Next.js: Babel for individual files and Terser for minifying of output bundles."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As part of replacing Babel with SWC, we are porting all custom code transformations Next.js uses to SWC transforms written in Rust to maximize performance. For example, tree shaking unused code inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "As part of replacing Terser, we are working on ensuring the SWC minifier has similar output to Terser while massively improving performance and parallelization of minification." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In early tests, previous code transformations using Babel dropped from ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "~500ms to ~10ms" }),
			" and code minification from Terser dropped from ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "~250ms to ~30ms" }),
			" using SWC. Overall, this resulted in ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "twice as fast builds" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We're excited to announce ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://twitter.com/kdy1dev",
				children: "DongYoon Kang"
			}),
			", the creator of ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://swc.rs/",
				children: "SWC"
			}),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://twitter.com/padmaia",
				children: "Maia Teegarden"
			}),
			", contributor to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://parceljs.org/",
				children: "Parcel"
			}),
			", have joined the Next.js team at Vercel to work on improving both ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			" performance. We will be sharing more results from our SWC adoption in the next release when it's made stable."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "improved-performance",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improved-performance",
				children: "Improved Performance"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "builds--data-fetching",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#builds--data-fetching",
				children: "Builds & Data Fetching"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			" and making numerous HTTP requests, we've ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "improved performance by ~2x" }),
			" on average. For example, if you're using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" }),
			" to fetch content from a Headless CMS, you should see noticeably faster builds."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js automatically polyfills ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/architecture/supported-browsers#polyfills",
				children: "node-fetch"
			}),
			" and now enables ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://en.wikipedia.org/wiki/HTTP_persistent_connection",
				children: "HTTP Keep-Alive"
			}),
			" by default. According to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/Ethan-Arrowood/undici-fetch/blob/main/benchmarks.md#fetch",
				children: "external benchmarks"
			}),
			", this should make pre-rendering ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "~2x faster" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To disable HTTP Keep-Alive for certain ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch()" }),
			" calls, you can add the agent option:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import { Agent } from 'https';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "const url = '<https://example.com>';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "const agent = new Agent({ keepAlive: false });" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "fetch(url, { agent });" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To override all ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch()" }),
			" calls globally, you can use ",
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
			title: "next.config.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
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
						children: "  httpAgentOptions: {"
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
							children: "    keepAlive: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "false"
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
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "source-maps",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#source-maps",
				children: "Source Maps"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Including browser source maps in Next.js applications now has about 70% less performance cost and about 67% less memory cost due to optimizations in webpack asset and source map processing." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This only affects Next.js applications with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "productionBrowserSourceMaps: true" }),
			" in their ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			" file. With Next.js 11.1, build times are only increased by 11% when source maps are enabled."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We've also worked with Sentry to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/issues/26588#issuecomment-894329188",
				children: "increase performance"
			}),
			" of uploading source maps with the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://docs.sentry.io/platforms/javascript/guides/nextjs/",
				children: "Sentry Next.js plugin"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "eslint-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#eslint-improvements",
				children: "ESLint Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In Next.js 11, we introduced built-in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/configuring/eslint",
				children: "ESLint support"
			}),
			" through ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }),
			". Since its initial release, we've continued adding rules that help developers fix common mistakes in their applications."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "default-accessibility-rules",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#default-accessibility-rules",
				children: "Default Accessibility Rules"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Better accessibility rules are now included by default, preventing issues with ARIA properties that do not match each other and usage of non-existent ARIA attributes. These rules will warn by default." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-props.md?rgh-link-date=2021-06-04T02%3A10%3A36Z",
				children: "aria-props"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-proptypes.md?rgh-link-date=2021-06-04T02%3A10%3A36Z",
				children: "aria-proptypes"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-unsupported-elements.md?rgh-link-date=2021-06-04T02%3A10%3A36Z",
				children: "aria-unsupported-elements"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-has-required-aria-props.md?rgh-link-date=2021-06-04T02%3A10%3A36Z",
				children: "role-has-required-aria-props"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-supports-aria-props.md?rgh-link-date=2021-06-04T02%3A10%3A36Z",
				children: "role-supports-aria-props"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Special thanks to community contributor ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/JeffersonBledsoe",
				children: "JeffersonBledsoe"
			}),
			" for adding these rules."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "common-typos",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#common-typos",
				children: "Common Typos"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Linting for common typos in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			" will now warn by default. This will help with cases where a small typo causes data fetching to not be called. For example ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getstaticprops" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticprops" }),
			" will show a warning."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Special thanks to community contributor ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/kaykdm",
				children: "kaykdm"
			}),
			" for creating this rule."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nextimage-improvements",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#nextimage-improvements",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }), " Improvements"]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We've been collecting community feedback about ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			" and the built-in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/optimizing/images",
				children: "Image Optimization"
			}),
			" and are excited to share multiple improvements to performance, developer experience, and user experience."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "image-optimization",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#image-optimization",
				children: "Image Optimization"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"By default, Next.js uses WebAssembly to perform Image Optimization, which offsets the install time of the Next.js package by being significantly smaller and not having a post-install step. With Next.js 11.1, you can optionally install ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "sharp" }),
			" which optimizes for uncached image generation time with a trade-off of slower installation."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The WebAssembly-based image optimizer has been updated to support ARM chips like Apple M1 with Node.js 16." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The built-in image optimizer now automatically detects the external image content type based on the content of the response body. This allows Next.js to optimize images hosted on AWS S3 when the response header is ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Content-Type: application/octet-stream" }),
			" ."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "lazy-generation-of-blur-up-placeholders-in-development",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#lazy-generation-of-blur-up-placeholders-in-development",
				children: "Lazy Generation of Blur Up Placeholders in Development"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"During ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			" ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/optimizing/images#image-imports",
				children: "static image imports"
			}),
			" with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "placeholder=\"blur\"" }),
			" are now automatically lazy-generated, improving dev server startup time for applications with many static image imports:"
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
			title: "pages/index.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
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
							children: " Image "
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
							children: " 'next/image'"
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
							children: " author "
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
							children: " '../public/me.png'"
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
							children: " Home"
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
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "    // The placeholder for this image is lazy-generated during development"
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
							children: "    <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Image"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " src"
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
							children: "{author} "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "alt"
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
							children: "\"Picture of the author\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " placeholder"
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
							children: "\"blur\""
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
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "other-image-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#other-image-improvements",
				children: "Other Image Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Images which have been previously loaded are no longer lazy-loaded" }), ": When an image has been loaded on a page before, either through client navigation or loading it at another point in the page, Next.js will now automatically skip the lazy loading to avoid a quick flash before showing the image."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [
					"Support for custom image loaders with ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "next export" }),
					":"
				] }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
				" now supports using ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next export" }),
				" along with any ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/optimizing/images#loader",
					children: "third-party image optimization service"
				}),
				". You can configure ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "images.loader: \"custom\"" }),
				" in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
				" when you intend to provide the ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/pages/api-reference/components/image#loader",
					children: [
						"custom ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "loader" }),
						" prop"
					]
				}),
				" to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "New event for when images complete loading:" }),
				" Based on user feedback, we’ve added a new property ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/api-reference/components/image#onloadingcomplete",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "onLoadingComplete" })
				}),
				" to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
				". This allows for registering a callback that is invoked once the image has fully loaded."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Configuration for default image cache TTL (Time to Live):" }),
				" You can now configure ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/optimizing/images#minimumcachettl",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "images.minimumCacheTTL" })
				}),
				" in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
				" to change the default cache TTL for optimized images. When possible, we recommend using ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/pages/building-your-application/optimizing/images#image-imports",
					children: [
						"static image ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "import" }),
						"s"
					]
				}),
				", as those automatically use the maximum TTL because the image content hash is in the URL."
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js is the result of the combined work of over 1,700 individual developers, industry partners like Google and Facebook, and our core team." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're proud to see that community continue to grow. Within the last six months alone, we've seen a 50% increase in Next.js downloads on NPM, from 4.1M to 6.2M and the number of homepages using Next.js in the Alexa top 10,000 has grown 50%." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This release was brought to you by the contributions of: @abotsi, @adam-cowley, @afbarbaro, @akellbl4, @AndreVarandas, @andys-github, @angeloashmore, @apuyou, @arturmuller, @AryanBeezadhur, @atcastle, @borekb, @brandonchinn178, @breyed, @brijendravarma, @ctbarna, @ctjlewis, @darshkpatel, @delbaoliveira, @destruc7i0n, @devknoll, @enesakar, @enzoferey, @euess, @fabb, @gnbaron, @hiro0218, @housseindjirdeh, @huozhi, @ijjk, @JacobLey, @jameshoward, @jamsinclair, @janicklas-ralph, @jarvelov, @javivelasco, @jaybekster, @JeffersonBledsoe, @jflayhart, @johnrackles, @jviide, @karlsander, @kasipavankumar, @kaykdm, @kdy1, @kylemh, @leerob, @LetItRock, @lsndr, @lucleray, @m-abdelwahab, @mandarons, @markkaylor, @mastoj, @michalbundyra, @michielvangendt, @Munawwar, @mvasilkov, @NickCrews, @NickKelly1, @noahweingand, @noreiller, @nyedidikeke, @omasher, @orta, @pa-rang, @padmaia, @papaponmx, @PaulvdDool, @petermekhaeil, @phocks, @pranavp10, @qwertyforce, @raon0211, @reod, @rishabhpoddar, @roim, @Ryz0nd, @sa3dany, @sachinraja, @samrobbins85, @schoenwaldnils, @schultzp2020, @sedlukha, @sergioalvz, @shibe23, @smitssjors, @sohamsshah, @sokra, @stefanprobst, @stovmascript, @stuymedova, @styfle, @tanys123, @ThangHuuVu, @theostrahlen, @thomasmarshall, @tigger9flow, @timneutkens, @Timvdv, @tmcgann, @tomchen, @UniqueNL, @Vadorequest, @vitalybaev, @yunger7, @zackdotcomputer, @zeekrey" })
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
export { toc as a, structuredData as i, frontmatter as n, next_11_1_exports as r, MDXContent as t };
