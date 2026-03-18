import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-12-2-CBvg7zIs.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_12_2_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 12.2",
	"description": "Next.js 12.2 introduces stable Middleware and On-Demand ISR, experimental Edge SSR and API Routes, and more!",
	"author": [
		{
			"name": "Balázs Orbán",
			"image": "/static/team/balazs.jpg"
		},
		{
			"name": "DongYoon Kang",
			"image": "/static/team/kdy.jpg"
		},
		{
			"name": "Javi Velasco",
			"image": "/static/team/javi.jpg"
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
			"name": "Joe Haddad",
			"image": "/static/team/timer.jpg"
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
	"date": /* @__PURE__ */ new Date(1656432000507),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-12-2/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "We're laying the foundation for the future of Next.js with 12.2:"
		},
		{
			"heading": void 0,
			"content": "**Middleware (Stable):** Dynamic routing for your entire application."
		},
		{
			"heading": void 0,
			"content": "**On-Demand ISR (Stable):** Update content without redeploying."
		},
		{
			"heading": void 0,
			"content": "**Edge API Routes (Experimental):** High performance API endpoints."
		},
		{
			"heading": void 0,
			"content": "**Edge SSR (Experimental):** Server-render your app, at the Edge."
		},
		{
			"heading": void 0,
			"content": "**SWC Plugins (Experimental):** Extend compilation with your own plugins."
		},
		{
			"heading": void 0,
			"content": "**Improvements to `next/image`:** Including a new `next/future/image` component."
		},
		{
			"heading": void 0,
			"content": "Update today by running `npm i next@latest`."
		},
		{
			"heading": "middleware-stable",
			"content": "We're excited to announce Middleware is now stable in 12.2 and has an improved API based on feedback from users."
		},
		{
			"heading": "middleware-stable",
			"content": "Middleware allows you to run code before a request is completed. Based on the incoming request, you can modify the response by rewriting, redirecting, adding headers, or setting cookies."
		},
		{
			"heading": "middleware-stable",
			"content": "To update to the newest API changes for Middleware, please see the migration guide."
		},
		{
			"heading": "middleware-stable",
			"content": "Try Middleware for free on Vercel or when self-hosting using `next start`."
		},
		{
			"heading": "on-demand-incremental-static-regeneration-stable",
			"content": "On-Demand Incremental Static Regeneration (ISR) allows you to update the content on your site without needing to redeploy. This makes it easy to update your site immediately when data changes in your headless CMS or commerce platform. This was one of the most requested features from the community and we're excited it is now stable."
		},
		{
			"heading": "on-demand-incremental-static-regeneration-stable",
			"content": "Incremental Static Regeneration works for any providers supporting the Next.js Build API (`next build`). When deployed to Vercel, on-demand revalidation propagates globally in \\~300ms when pushing pages to the edge."
		},
		{
			"heading": "on-demand-incremental-static-regeneration-stable",
			"content": "For more information, check out the documentation or view our demo to see on-demand revalidation in action."
		},
		{
			"heading": "edge-api-routes-experimental",
			"content": "Next.js now also supports using the Edge Runtime for API Routes. The Edge Runtime is a lighter-weight runtime than Node.js providing fast startups for low latency. In addition, Edge API Routes support streaming responses from the server."
		},
		{
			"heading": "edge-api-routes-experimental",
			"content": "You can set the runtime for an API Route in the `config`, specifying either `nodejs` (default) or `experimental-edge`:"
		},
		{
			"heading": "edge-api-routes-experimental",
			"content": "Because the Edge Runtime is lightweight, it has limitations to accommodate fast startup — for example, it does not support Node.js-specific APIs like `fs`. Therefore, the default runtime for API Routes remains `nodejs`."
		},
		{
			"heading": "edge-api-routes-experimental",
			"content": "For more information, check out the documentation."
		},
		{
			"heading": "edge-server-rendering-experimental",
			"content": "Next.js now supports using the Edge Runtime for server rendering."
		},
		{
			"heading": "edge-server-rendering-experimental",
			"content": "As mentioned above, the Edge Runtime is a lighter-weight runtime than Node.js providing fast startups for low latency. When used with React 18, it enables streaming server-rendering for Pages."
		},
		{
			"heading": "edge-server-rendering-experimental",
			"content": "Next.js uses Node.js as the default runtime for server-side rendering pages. Starting with 12.2, if you are using React 18 you can opt into using the Edge Runtime."
		},
		{
			"heading": "edge-server-rendering-experimental",
			"content": "You can set the runtime globally in `next.config.js`, specifying either `nodejs` or `experimental-edge`:"
		},
		{
			"heading": "edge-server-rendering-experimental",
			"content": "Changing the default page runtime affects all pages, including SSR streaming and Server Components features. You can also override this default on a per-page basis, by exporting a `runtime` config:"
		},
		{
			"heading": "edge-server-rendering-experimental",
			"content": "You can detect which runtime you're using by looking at the `process.env.NEXT_RUNTIME` Environment Variable during runtime, and examining the `options.nextRuntime` variable during webpack compilation."
		},
		{
			"heading": "edge-server-rendering-experimental",
			"content": "For more information, check out the documentation."
		},
		{
			"heading": "nextfutureimage-component-experimental",
			"content": "We've heard your feedback on the current Image component and are excited to share an early preview of the new `next/image`. This new and improved image component requires less client-side JavaScript and simplifies how you style images:"
		},
		{
			"heading": "nextfutureimage-component-experimental",
			"content": "Renders a single `<img>` without `<div>` or `<span>` wrappers"
		},
		{
			"heading": "nextfutureimage-component-experimental",
			"content": "Added support for canonical `style` prop"
		},
		{
			"heading": "nextfutureimage-component-experimental",
			"content": "Removed `layout`, `objectFit`, and `objectPosition` props in favor of `style` or `className`"
		},
		{
			"heading": "nextfutureimage-component-experimental",
			"content": "Removed `IntersectionObserver` implementation in favor of native lazy loading"
		},
		{
			"heading": "nextfutureimage-component-experimental",
			"content": "Removed `loader` config in favor of `loader` prop"
		},
		{
			"heading": "nextfutureimage-component-experimental",
			"content": "Note: no `fill` mode (yet) so `width` & `height` props are required"
		},
		{
			"heading": "nextfutureimage-component-experimental",
			"content": "This improves performance because native `loading=\"lazy\"` doesn't need to wait for React hydration and client-side JavaScript."
		},
		{
			"heading": "nextfutureimage-component-experimental",
			"content": "For more information, check out the documentation."
		},
		{
			"heading": "remote-patterns-experimental",
			"content": "`next/image` now supports an experimental configuration option `remotePatterns` that allows you to specify wildcards for remote images when using the built-in Image Optimization API. This allows for more powerful matching beyond the existing `images.domains` configuration, which only performs exact matches on the domain name."
		},
		{
			"heading": "remote-patterns-experimental",
			"content": "For more information, check out the documentation."
		},
		{
			"heading": "disable-image-optimization",
			"content": "The zero-config Image Optimization API prevents the use of `next export` since it requires a server to optimize images on-demand as they're requested. Until today, users targeting `next export` needed to configure the `loader` to use a 3rd party Image Optimization provider, but there was no clear solution if there was no provider available. Starting today, `next export` users can disable Image Optimization for all instances of `next/image` with a new configuration property:"
		},
		{
			"heading": "swc-plugins-experimental",
			"content": "The Next.js Compiler uses SWC to transform and minify your JavaScript code for production. SWC was introduced in Next.js 12.0 to improve both local development and build performance."
		},
		{
			"heading": "swc-plugins-experimental",
			"content": "You can now add plugins (written in WebAssembly) to customize the SWC transformation behavior during compilation:"
		},
		{
			"heading": "swc-plugins-experimental",
			"content": "For more information, check out the documentation."
		},
		{
			"heading": "react-18-support-improvements",
			"content": "Improved support for CSS-in-JS libraries like `styled-components` and `emotion` with a smoother upgrade experience and no breaking changes."
		},
		{
			"heading": "react-18-support-improvements",
			"content": "AMP and HTML post-optimization (CSS, fonts optimizations) are properly supported now."
		},
		{
			"heading": "react-18-support-improvements",
			"content": "`next/head` now supports React 18."
		},
		{
			"heading": "react-18-support-improvements",
			"content": "Next.js' route announcer, which is used to properly announce page transitions to screen readers and other assistive technology, now supports React 18."
		},
		{
			"heading": "other-improvements",
			"content": "Support for Emotion transform in the Next.js Compiler. Most features of `@emotion/babel-plugin` are now supported, and unless you are using `importMap`, it can be removed. For more information, check out the documentation."
		},
		{
			"heading": "other-improvements",
			"content": "Better support for the `styled-components` transform in the Next.js Compiler by allowing customization of the default options, including the `cssProp` option. For more information, check out the documentation."
		},
		{
			"heading": "other-improvements",
			"content": "Better support for JavaScript ES Modules, so components like `next/image` and `next/link` can properly be `import`ed."
		},
		{
			"heading": "other-improvements",
			"content": "`next/link` no longer requires manually adding `<a>` as a child. You can now opt into this behavior in a backward-compatible way."
		},
		{
			"heading": "other-improvements",
			"content": "We've added experimental support for shipping only modern JavaScript by modifying `browsersList`. You can opt-into this behavior by setting `browsersListForSwc: true` and `legacyBrowsers: false` in the `experimental` option of `next.config.js`."
		},
		{
			"heading": "other-improvements",
			"content": "New `@swc/helpers` optimizations prevent duplication across bundles, reducing bundle size by around `2KB` in a minimal configuration, and more on larger apps"
		},
		{
			"heading": "other-improvements",
			"content": "We've significantly reduced the Next.js install size. We did this by moving our monorepo to `pnpm`, which allows us to remove duplicate packages while creating the pre-compiled versions that we use. This leads to a reduction in install size of 14MB."
		},
		{
			"heading": "other-improvements",
			"content": "In our continued effort to improve self-hosting Next.js, we are stabilizing our experimental `outputStandalone: true` config to `output: 'standalone'`. This config reduces deployment sizes drastically by only including necessary files/assets, including removing the need for installing all of `node_modules` in the built deployment package. This config can be seen in action in our `with-docker` example."
		},
		{
			"heading": "layouts-rfc--advanced-routing-support",
			"content": "In case you missed it, last month we announced the Layouts RFC – the biggest update to Next.js since it was introduced in 2016 including:"
		},
		{
			"heading": "layouts-rfc--advanced-routing-support",
			"content": "**Nested Layouts:** Build complex applications with nested routes."
		},
		{
			"heading": "layouts-rfc--advanced-routing-support",
			"content": "**Designed for Server Components:** Optimized for subtree navigation."
		},
		{
			"heading": "layouts-rfc--advanced-routing-support",
			"content": "**Improved Data Fetching:** Fetch in layouts while avoiding waterfalls."
		},
		{
			"heading": "layouts-rfc--advanced-routing-support",
			"content": "**Using React 18 Features:** Streaming, Transitions, and Suspense."
		},
		{
			"heading": "layouts-rfc--advanced-routing-support",
			"content": "**Client and Server Routing:** Server-centric routing with *SPA-like* behavior."
		},
		{
			"heading": "layouts-rfc--advanced-routing-support",
			"content": "**100% incrementally adoptable**: No breaking changes so you can adopt gradually."
		},
		{
			"heading": "layouts-rfc--advanced-routing-support",
			"content": "**Advanced Routing Conventions**: Offscreen stashing, instant transitions, and more."
		},
		{
			"heading": "layouts-rfc--advanced-routing-support",
			"content": "For more information, check out the RFC or provide feedback."
		},
		{
			"heading": "thank-you-contributors",
			"content": "Next.js is the result of the combined work of **over 2,000 individual developers**, industry partners like Google Chrome and Meta, and our core team at Vercel."
		},
		{
			"heading": "thank-you-contributors",
			"content": "This release was brought to you by the contributions of: @huozhi, @ijjk, @kwonoj, @ViolanteCodes, @akrabdev, @timneutkens, @jpveilleux, @stigkj, @jgoping, @oof2win2, @Brooooooklyn, @CGamesPlay, @lfades, @molebox, @steven-tey, @SukkaW, @Kikobeats, @balazsorban44, @erikbrinkman, @therealmarzouq, @remcohaszing, @perkinsjr, @shuding, @hanneslund, @housseindjirdeh, @RobertKeyser, @styfle, @htunnicliff, @lukeshumard, @sagnik3, @pixelass, @JoshuaKGoldberg, @rishabhpoddar, @nguyenyou, @kdy1, @sidwebworks, @gnoff, @gaspar09, @feugy, @mfix-stripe, @javivelasco, @Chastrlove, @goncharov-vlad, @NaveenDA, @Firfi, @idkwhojamesis, @FLCN-16, @icyJoseph, @ElijahPepe, @elskwid, @irvile, @Munawwar, @ykolbin, @hulufei, @baruchadi, @imadatyatalah, @await-ovo, @menosprezzi, @gazs, @Exortions, @rubens-lopes, @woochul2, @stefee, @stmtk1, @jlarmstrongiv, @MaedahBatool, @jameshfisher, @fabienheureux, @TxHawks, @mattbrandlysonos, @iggyzap, @src200, @AkifumiSato, @hermanskurichin, @kamilogorek, @ben-xD, @dawsonbooth, @Josehower, @crutchcorn, @ericmatthys, @CharlesStover, @charlypoly, @apmatthews, @naingaungphyo, @alexandrutasica, @stefanprobst, @dc7290, @DilwoarH, @tommarshall, @stanhong, @leerob, @appsbytom, @sshyam-gupta, @saulloalmeida, @indicozy, @ArianHamdi, @Clariity, @sebastianbenz, @7iomka, @gr-qft, @Schniz, @dgagn, @sokra, @okbel, @tbvjaos510, @dmvjs, @PepijnSenders, @JohnPhamous, @kyliau, @eric-burel, @alabhyajindal, @jsjoeio, @vorcigernix, @clearlyTHUYDOAN, @splatterxl, @manovotny, @maxproske, @nvh95, @frankievalentine, @nuta, @bagpyp, @dfelsie, @qqpann, @atcastle, @jsimonrichard, @mass2527, @ekamkohli, @Yuddomack, @tonyspiro, @saurabhmehta1601, @banner4422, @falsepopsky, @jantimon, @henriqueholtz, @ilfa, @matteobruni, @ryscheng, @hoonoh, @ForsakenHarmony, @william-keller, @AleksaC, @Miikis, @zakiego, @radunemerenco, @AliYusuf95, and @dominiksipowicz."
		}
	],
	"headings": [
		{
			"id": "middleware-stable",
			"content": "Middleware (Stable)"
		},
		{
			"id": "on-demand-incremental-static-regeneration-stable",
			"content": "On-Demand Incremental Static Regeneration (Stable)"
		},
		{
			"id": "edge-api-routes-experimental",
			"content": "Edge API Routes (Experimental)"
		},
		{
			"id": "edge-server-rendering-experimental",
			"content": "Edge Server-Rendering (Experimental)"
		},
		{
			"id": "improvements-to-nextimage",
			"content": "Improvements to `next/image`"
		},
		{
			"id": "nextfutureimage-component-experimental",
			"content": "`next/future/image` component (Experimental)"
		},
		{
			"id": "remote-patterns-experimental",
			"content": "Remote Patterns (Experimental)"
		},
		{
			"id": "disable-image-optimization",
			"content": "Disable Image Optimization"
		},
		{
			"id": "swc-plugins-experimental",
			"content": "SWC Plugins (Experimental)"
		},
		{
			"id": "react-18-support-improvements",
			"content": "React 18 Support Improvements"
		},
		{
			"id": "other-improvements",
			"content": "Other Improvements"
		},
		{
			"id": "layouts-rfc--advanced-routing-support",
			"content": "Layouts RFC & Advanced Routing Support"
		},
		{
			"id": "thank-you-contributors",
			"content": "Thank you, contributors"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#middleware-stable",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#middleware-stable",
			children: "Middleware (Stable)"
		}) })
	},
	{
		depth: 2,
		url: "#on-demand-incremental-static-regeneration-stable",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#on-demand-incremental-static-regeneration-stable",
			children: "On-Demand Incremental Static Regeneration (Stable)"
		}) })
	},
	{
		depth: 2,
		url: "#edge-api-routes-experimental",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#edge-api-routes-experimental",
			children: "Edge API Routes (Experimental)"
		}) })
	},
	{
		depth: 2,
		url: "#edge-server-rendering-experimental",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#edge-server-rendering-experimental",
			children: "Edge Server-Rendering (Experimental)"
		}) })
	},
	{
		depth: 2,
		url: "#improvements-to-nextimage",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#improvements-to-nextimage",
			children: ["Improvements to ", (0, import_jsx_runtime.jsx)("code", { children: "next/image" })]
		}) })
	},
	{
		depth: 3,
		url: "#nextfutureimage-component-experimental",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#nextfutureimage-component-experimental",
			children: [(0, import_jsx_runtime.jsx)("code", { children: "next/future/image" }), " component (Experimental)"]
		}) })
	},
	{
		depth: 3,
		url: "#remote-patterns-experimental",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#remote-patterns-experimental",
			children: "Remote Patterns (Experimental)"
		}) })
	},
	{
		depth: 3,
		url: "#disable-image-optimization",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#disable-image-optimization",
			children: "Disable Image Optimization"
		}) })
	},
	{
		depth: 2,
		url: "#swc-plugins-experimental",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#swc-plugins-experimental",
			children: "SWC Plugins (Experimental)"
		}) })
	},
	{
		depth: 2,
		url: "#react-18-support-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#react-18-support-improvements",
			children: "React 18 Support Improvements"
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
		url: "#layouts-rfc--advanced-routing-support",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#layouts-rfc--advanced-routing-support",
			children: "Layouts RFC & Advanced Routing Support"
		}) })
	},
	{
		depth: 2,
		url: "#thank-you-contributors",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#thank-you-contributors",
			children: "Thank you, contributors"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		em: "em",
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're laying the foundation for the future of Next.js with 12.2:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#middleware-stable",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Middleware (Stable):" })
			}), " Dynamic routing for your entire application."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#on-demand-incremental-static-regeneration-stable",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "On-Demand ISR (Stable):" })
			}), " Update content without redeploying."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#edge-api-routes-experimental",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Edge API Routes (Experimental):" })
			}), " High performance API endpoints."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#edge-server-rendering-experimental",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Edge SSR (Experimental):" })
			}), " Server-render your app, at the Edge."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#swc-plugins-experimental",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "SWC Plugins (Experimental):" })
			}), " Extend compilation with your own plugins."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#improvements-to-nextimage",
					children: (0, import_jsx_runtime.jsxs)(_components.strong, { children: [
						"Improvements to ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
						":"
					] })
				}),
				" Including a new ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/future/image" }),
				" component."
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
			id: "middleware-stable",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#middleware-stable",
				children: "Middleware (Stable)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're excited to announce Middleware is now stable in 12.2 and has an improved API based on feedback from users." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Middleware allows you to run code before a request is completed. Based on the incoming request, you can modify the response by rewriting, redirecting, adding headers, or setting cookies." }),
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
			title: "middleware.ts",
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { NextRequest, NextResponse } "
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
							children: " 'next/server'"
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
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// If the incoming request has the \"beta\" cookie"
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
						children: "// then we'll rewrite the request to /beta"
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
							children: " middleware"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "req"
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
							children: " NextRequest"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ") {"
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
							children: "  const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " isInBeta"
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
							children: " JSON"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "parse"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(req.cookies."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "get"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'beta'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ") "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "||"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " 'false'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ");"
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
							children: "  req.nextUrl.pathname "
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
							children: " isInBeta "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "?"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " '/beta'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " :"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " '/'"
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
							children: "  return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " NextResponse."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "rewrite"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(req.nextUrl);"
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
						children: "// Supports both a single value or an array of matches"
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
							children: " config"
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  matcher: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/'"
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
						children: "};"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To update to the newest API changes for Middleware, please see the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/messages/middleware-upgrade-guide",
				children: "migration guide"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Try Middleware for ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/edge",
				children: "free on Vercel"
			}),
			" or when ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/deploying#self-hosting",
				children: "self-hosting"
			}),
			" using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "on-demand-incremental-static-regeneration-stable",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#on-demand-incremental-static-regeneration-stable",
				children: "On-Demand Incremental Static Regeneration (Stable)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "On-Demand Incremental Static Regeneration (ISR) allows you to update the content on your site without needing to redeploy. This makes it easy to update your site immediately when data changes in your headless CMS or commerce platform. This was one of the most requested features from the community and we're excited it is now stable." }),
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
			title: "pages/api/revalidate.js",
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
							children: " async"
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
							children: " handler"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "req"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "res"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ") {"
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
						children: "  // Check for secret to confirm this is a valid request"
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
							children: "  if"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " (req.query.secret "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "!=="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " process.env."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "MY_SECRET_TOKEN"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ") {"
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
							children: "    return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " res."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "status"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "401"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ")."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "json"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ message: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'Invalid token'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " });"
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
						children: "  }"
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
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  try"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " {"
					})]
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
							children: "    await"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " res."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "revalidate"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/path-to-revalidate'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ");"
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
							children: "    return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " res."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "json"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ revalidated: "
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
							children: " });"
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
							children: "  } "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "catch"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " (err) {"
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
						children: "    // If there was an error, Next.js will continue"
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
						children: "    // to show the last successfully generated page"
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
							children: "    return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " res."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "status"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "500"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ")."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "send"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'Error revalidating'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ");"
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
						children: "  }"
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
			"Incremental Static Regeneration works for any providers supporting the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/deploying#nextjs-build-api",
				children: "Next.js Build API"
			}),
			" (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			"). When deployed to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/",
				children: "Vercel"
			}),
			", on-demand revalidation propagates globally in ~300ms when pushing pages to the edge."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more information, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/data-fetching/incremental-static-regeneration",
				children: "check out the documentation"
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://on-demand-isr.vercel.app/",
				children: "view our demo"
			}),
			" to see on-demand revalidation in action."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "edge-api-routes-experimental",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#edge-api-routes-experimental",
				children: "Edge API Routes (Experimental)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js now also supports using the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/edge",
				children: "Edge Runtime"
			}),
			" for API Routes. The Edge Runtime is a lighter-weight runtime than Node.js providing fast startups for low latency. In addition, Edge API Routes support streaming responses from the server."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can set the runtime for an API Route in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "config" }),
			", specifying either ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "nodejs" }),
			" (default) or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental-edge" }),
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
			title: "pages/api/hello.js",
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
							children: " { NextRequest } "
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
							children: " 'next/server'"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " ("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "req"
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
							children: " NextRequest"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ") "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "=>"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " new"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Response"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "`Hello, from ${"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "req"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "url"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "} I'm now an Edge API Route!`"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ");"
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
							children: " const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " config"
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  runtime: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'experimental-edge'"
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
						children: "};"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Because the Edge Runtime is lightweight, it has limitations to accommodate fast startup — for example, it does not support Node.js-specific APIs like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fs" }),
			". Therefore, the default runtime for API Routes remains ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "nodejs" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more information, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/routing/api-routes",
				children: "check out the documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "edge-server-rendering-experimental",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#edge-server-rendering-experimental",
				children: "Edge Server-Rendering (Experimental)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js now supports using the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/edge",
				children: "Edge Runtime"
			}),
			" for server rendering."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "As mentioned above, the Edge Runtime is a lighter-weight runtime than Node.js providing fast startups for low latency. When used with React 18, it enables streaming server-rendering for Pages." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js uses Node.js as the default runtime for server-side rendering pages. Starting with 12.2, if you are using React 18 you can opt into using the Edge Runtime." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can set the runtime globally in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			", specifying either ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "nodejs" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental-edge" }),
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
							children: "    runtime: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'experimental-edge'"
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Changing the default page runtime affects all pages, including ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/loading-ui-and-streaming",
				children: "SSR streaming"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/getting-started/react-essentials",
				children: "Server Components"
			}),
			" features. You can also override this default on a per-page basis, by exporting a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "runtime" }),
			" config:"
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
							children: " config"
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  runtime: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'nodejs'"
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
							children: "() {}"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can detect which runtime you're using by looking at the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "process.env.NEXT_RUNTIME" }),
			" Environment Variable during runtime, and examining the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "options.nextRuntime" }),
			" variable during webpack compilation."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more information, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/rendering/edge-and-nodejs-runtimes",
				children: "check out the documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "improvements-to-nextimage",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#improvements-to-nextimage",
				children: ["Improvements to ", (0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" })]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "nextfutureimage-component-experimental",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#nextfutureimage-component-experimental",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next/future/image" }), " component (Experimental)"]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We've heard your feedback on the current Image component and are excited to share an early preview of the new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			". This new and improved image component requires less client-side JavaScript and simplifies how you style images:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Renders a single ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<img>" }),
				" without ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<div>" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<span>" }),
				" wrappers"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Added support for canonical ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "style" }),
				" prop"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Removed ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "objectFit" }),
				", and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "objectPosition" }),
				" props in favor of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "style" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "className" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Removed ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "IntersectionObserver" }),
				" implementation in favor of ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://caniuse.com/loading-lazy-attr",
					children: "native lazy loading"
				})
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Removed ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "loader" }),
				" config in favor of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "loader" }),
				" prop"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Note: no ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "fill" }),
				" mode (yet) so ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "width" }),
				" & ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "height" }),
				" props are required"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This improves performance because native ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "loading=\"lazy\"" }),
			" doesn't need to wait for React hydration and client-side JavaScript."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more information, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/optimizing/images",
				children: "check out the documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "remote-patterns-experimental",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#remote-patterns-experimental",
				children: "Remote Patterns (Experimental)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			" now supports an experimental configuration option ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "remotePatterns" }),
			" that allows you to specify wildcards for remote images when using the built-in Image Optimization API. This allows for more powerful matching beyond the existing ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://images.domains",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "images.domains" })
			}),
			" configuration, which only performs exact matches on the domain name."
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
						children: "    images: {"
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
						children: "      remotePatterns: ["
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
						children: "        {"
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
						children: "          // The `src` property hostname must end with `.example.com`,"
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
						children: "          // otherwise this will respond with 400 Bad Request."
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
							children: "          protocol: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'https'"
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
							children: "          hostname: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'**.example.com'"
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
						children: "        },"
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
						children: "      ],"
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
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more information, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/components/image#remotepatterns",
				children: "check out the documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "disable-image-optimization",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#disable-image-optimization",
				children: "Disable Image Optimization"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The zero-config Image Optimization API prevents the use of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next export" }),
			" since it requires a server to optimize images on-demand as they're requested. Until today, users targeting ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next export" }),
			" needed to configure the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "loader" }),
			" to use a 3rd party Image Optimization provider, but there was no clear solution if there was no provider available. Starting today, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next export" }),
			" users can disable Image Optimization for all instances of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			" with a new configuration property:"
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
						children: "    images: {"
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
							children: "      unoptimized: "
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
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "swc-plugins-experimental",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#swc-plugins-experimental",
				children: "SWC Plugins (Experimental)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/architecture/nextjs-compiler",
				children: "Next.js Compiler"
			}),
			" uses ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://swc.rs/",
				children: "SWC"
			}),
			" to transform and minify your JavaScript code for production. SWC was introduced in Next.js 12.0 to improve both local development and build performance."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can now add plugins (written in WebAssembly) to customize the SWC transformation behavior during compilation:" }),
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
						children: "    swcPlugins: ["
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
							children: "      ["
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'css-variable/swc'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", { displayName: "
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
							children: ", basePath: __dirname }],"
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
						children: "    ],"
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
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more information, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/blob/canary/docs/architecture/nextjs-compiler.md#experimental-swc-plugin-support",
				children: "check out the documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "react-18-support-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#react-18-support-improvements",
				children: "React 18 Support Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Improved support for CSS-in-JS libraries like ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "styled-components" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "emotion" }),
				" with a smoother upgrade experience and no breaking changes."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "AMP and HTML post-optimization (CSS, fonts optimizations) are properly supported now." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next/head" }), " now supports React 18."] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Next.js' route announcer, which is used to properly announce page transitions to screen readers and other assistive technology, now supports React 18." }),
			"\n"
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
				"Support for Emotion transform in the Next.js Compiler. Most features of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "@emotion/babel-plugin" }),
				" are now supported, and unless you are using ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "importMap" }),
				", it can be removed. For more information, ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/architecture/nextjs-compiler#emotion",
					children: "check out the documentation"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Better support for the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "styled-components" }),
				" transform in the Next.js Compiler by allowing customization of the default options, including the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "cssProp" }),
				" option. For more information, ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/architecture/nextjs-compiler#styled-components",
					children: "check out the documentation"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Better support for JavaScript ES Modules, so components like ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" }),
				" can properly be ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "import" }),
				"ed."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" }),
				" no longer requires manually adding ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<a>" }),
				" as a child. You can now ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/36436",
					children: "opt into this behavior"
				}),
				" in a backward-compatible way."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"We've added experimental support for shipping only modern JavaScript by modifying ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "browsersList" }),
				". You can opt-into this behavior by setting ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "browsersListForSwc: true" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "legacyBrowsers: false" }),
				" in the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental" }),
				" option of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"New ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "@swc/helpers" }),
				" optimizations prevent duplication across bundles, reducing bundle size by around ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "2KB" }),
				" in a minimal configuration, and more on larger apps"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"We've significantly reduced the Next.js install size. We did this by moving our monorepo to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pnpm" }),
				", which allows us to remove duplicate packages while creating the pre-compiled versions that we use. This leads to a reduction in install size of 14MB."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"In our continued effort to improve self-hosting Next.js, we are stabilizing our experimental ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "outputStandalone: true" }),
				" config to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "output: 'standalone'" }),
				". This config reduces deployment sizes drastically by only including necessary files/assets, including removing the need for installing all of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "node_modules" }),
				" in the built deployment package. This config can be seen in action in our ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "https://github.com/vercel/next.js/blob/canary/examples/with-docker/README.md",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "with-docker" }), " example"]
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "layouts-rfc--advanced-routing-support",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#layouts-rfc--advanced-routing-support",
				children: "Layouts RFC & Advanced Routing Support"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In case you missed it, last month we announced the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/layouts-rfc",
				children: "Layouts RFC"
			}),
			" – the biggest update to Next.js since it was introduced in 2016 including:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Nested Layouts:" }), " Build complex applications with nested routes."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Designed for Server Components:" }), " Optimized for subtree navigation."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Improved Data Fetching:" }), " Fetch in layouts while avoiding waterfalls."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Using React 18 Features:" }), " Streaming, Transitions, and Suspense."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Client and Server Routing:" }),
				" Server-centric routing with ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "SPA-like" }),
				" behavior."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "100% incrementally adoptable" }), ": No breaking changes so you can adopt gradually."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Advanced Routing Conventions" }), ": Offscreen stashing, instant transitions, and more."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more information, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/layouts-rfc",
				children: "check out the RFC"
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions/37136",
				children: "provide feedback"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "thank-you-contributors",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#thank-you-contributors",
				children: "Thank you, contributors"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js is the result of the combined work of ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "over 2,000 individual developers" }),
			", industry partners like Google Chrome and Meta, and our core team at Vercel."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This release was brought to you by the contributions of: @huozhi, @ijjk, @kwonoj, @ViolanteCodes, @akrabdev, @timneutkens, @jpveilleux, @stigkj, @jgoping, @oof2win2, @Brooooooklyn, @CGamesPlay, @lfades, @molebox, @steven-tey, @SukkaW, @Kikobeats, @balazsorban44, @erikbrinkman, @therealmarzouq, @remcohaszing, @perkinsjr, @shuding, @hanneslund, @housseindjirdeh, @RobertKeyser, @styfle, @htunnicliff, @lukeshumard, @sagnik3, @pixelass, @JoshuaKGoldberg, @rishabhpoddar, @nguyenyou, @kdy1, @sidwebworks, @gnoff, @gaspar09, @feugy, @mfix-stripe, @javivelasco, @Chastrlove, @goncharov-vlad, @NaveenDA, @Firfi, @idkwhojamesis, @FLCN-16, @icyJoseph, @ElijahPepe, @elskwid, @irvile, @Munawwar, @ykolbin, @hulufei, @baruchadi, @imadatyatalah, @await-ovo, @menosprezzi, @gazs, @Exortions, @rubens-lopes, @woochul2, @stefee, @stmtk1, @jlarmstrongiv, @MaedahBatool, @jameshfisher, @fabienheureux, @TxHawks, @mattbrandlysonos, @iggyzap, @src200, @AkifumiSato, @hermanskurichin, @kamilogorek, @ben-xD, @dawsonbooth, @Josehower, @crutchcorn, @ericmatthys, @CharlesStover, @charlypoly, @apmatthews, @naingaungphyo, @alexandrutasica, @stefanprobst, @dc7290, @DilwoarH, @tommarshall, @stanhong, @leerob, @appsbytom, @sshyam-gupta, @saulloalmeida, @indicozy, @ArianHamdi, @Clariity, @sebastianbenz, @7iomka, @gr-qft, @Schniz, @dgagn, @sokra, @okbel, @tbvjaos510, @dmvjs, @PepijnSenders, @JohnPhamous, @kyliau, @eric-burel, @alabhyajindal, @jsjoeio, @vorcigernix, @clearlyTHUYDOAN, @splatterxl, @manovotny, @maxproske, @nvh95, @frankievalentine, @nuta, @bagpyp, @dfelsie, @qqpann, @atcastle, @jsimonrichard, @mass2527, @ekamkohli, @Yuddomack, @tonyspiro, @saurabhmehta1601, @banner4422, @falsepopsky, @jantimon, @henriqueholtz, @ilfa, @matteobruni, @ryscheng, @hoonoh, @ForsakenHarmony, @william-keller, @AleksaC, @Miikis, @zakiego, @radunemerenco, @AliYusuf95, and @dominiksipowicz." })
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
export { toc as a, structuredData as i, frontmatter as n, next_12_2_exports as r, MDXContent as t };
