import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-15-3-DPR4TsoZ.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_15_3_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 15.3",
	"description": "Next.js 15.3 includes Turbopack for builds, new client instrumentation and navigation hooks, and more.",
	"author": [
		{
			"name": "Andrew Clark",
			"image": "/static/team/acdlite.jpeg"
		},
		{
			"name": "Jiwon Choi",
			"image": "/static/team/jiwon.png"
		},
		{
			"name": "Jude Gao",
			"image": "/static/team/jude.png"
		},
		{
			"name": "Maia Teegarden",
			"image": "/static/team/maia.jpg"
		},
		{
			"name": "Tim Neutkens",
			"image": "/static/team/tim.jpg"
		},
		{
			"name": "Will Binns-Smith",
			"image": "/static/team/wbinnssmith.jpg"
		}
	],
	"date": /* @__PURE__ */ new Date(17442288e5),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-3/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js 15.3 includes Turbopack for builds, new client instrumentation and navigation hooks, and more:"
		},
		{
			"heading": void 0,
			"content": "**Turbopack for builds (alpha)**: Faster production builds passing 8000+ tests (99%)"
		},
		{
			"heading": void 0,
			"content": "**Community support for Rspack (experimental)**: Alternative bundler with Webpack compatibility"
		},
		{
			"heading": void 0,
			"content": "**Client Instrumentation hook**: Early monitoring and analytics setup"
		},
		{
			"heading": void 0,
			"content": "**Navigation hooks**: Control routing with `onNavigate` and `useLinkStatus`"
		},
		{
			"heading": void 0,
			"content": "**TypeScript plugin improvements**: Improved support for large codebases"
		},
		{
			"heading": void 0,
			"content": "Upgrade today, or get started with:"
		},
		{
			"heading": "turbopack-builds-alpha",
			"content": "Following the stable release of `next dev --turbopack`, **over 50% of development sessions** on Next.js 15 are now using Turbopack."
		},
		{
			"heading": "turbopack-builds-alpha",
			"content": "This release includes our **alpha** release of `next build --turbopack`, bringing the same performance improvements from local development to production builds."
		},
		{
			"heading": "turbopack-builds-alpha",
			"content": "Try Turbopack for production builds by upgrading to 15.3 and running:"
		},
		{
			"heading": "functionality",
			"content": "99.3% of integration tests for `next build` are already passing. You can track our progress towards 100% at areweturboyet.com. If your application already works with Turbopack for `dev`, then it should work as-is with `build`."
		},
		{
			"heading": "functionality",
			"content": "Turbopack builds are in alpha. We don’t recommend using them in production for mission-critical applications at this stage. Instead, try them in a preview or staging environment, or run the build locally to observe differences in bundle size and performance."
		},
		{
			"heading": "functionality",
			"content": "We’re actively working to close these performance gaps through scope hoisting, improved chunking, and other optimizations."
		},
		{
			"heading": "build-performance",
			"content": "We’ve been validating Turbopack on Vercel’s large internal monorepo and early partner codebases. One advantage of Turbopack’s architecture versus our previous Webpack implementation is that performance scales when adding CPU cores:"
		},
		{
			"heading": "build-performance",
			"content": "At 4 cores: 28% faster than Webpack"
		},
		{
			"heading": "build-performance",
			"content": "At 16 cores: 60% faster than Webpack"
		},
		{
			"heading": "build-performance",
			"content": "At 30 cores: 83% faster than Webpack"
		},
		{
			"heading": "build-performance",
			"content": "These build times drop even further with our experimental work on persistent caching. We will share more on that in a future release."
		},
		{
			"heading": "ecosystem",
			"content": "We’re working with commonly used integrations like Sentry to make sure they’re compatible with `next build --turbopack` before the stable release. Please reach out to @leerob on X if you are a tool author who would like to work with us to ensure compatibility."
		},
		{
			"heading": "feedback",
			"content": "Please share your feedback, even if it goes smoothly, to help us prepare a stable release:"
		},
		{
			"heading": "feedback",
			"content": "GitHub discussions for general feedback"
		},
		{
			"heading": "feedback",
			"content": "GitHub issues for reproductions"
		},
		{
			"heading": "turbopack-configuration-in-nextconfigts-stable",
			"content": "Turbopack configuration in `next.config.ts` has moved from `experimental.turbo` to the top-level `turbopack` key:"
		},
		{
			"heading": "turbopack-configuration-in-nextconfigts-stable",
			"content": "For compatibility, the `experimental.turbo` option will continue to be supported until the next major release of Next.js."
		},
		{
			"heading": "turbopack-configuration-in-nextconfigts-stable",
			"content": "For a complete list of Turbopack configuration options, see the Turbopack API Reference."
		},
		{
			"heading": "community-support-for-rspack-experimental",
			"content": "The Rspack team has created a community plugin for Next.js."
		},
		{
			"heading": "community-support-for-rspack-experimental",
			"content": "This provides an option for Next.js users who need near-exact Webpack API compatibility, but cannot yet move to Turbopack, to improve their local compilation and build times. We’re confident in our progress with Turbopack and will continue to provide an incremental path forward for Webpack users."
		},
		{
			"heading": "community-support-for-rspack-experimental",
			"content": "While this is not an official Next.js plugin, we are partnering with the Rspack team. Both teams will collaborate on shared foundations like SWC and Lightning CSS, benefiting all Next.js users and the broader ecosystem."
		},
		{
			"heading": "community-support-for-rspack-experimental",
			"content": "If you want to explore using Rspack with Next.js, you can use the `next-rspack` adapter. We are running the adapter against our integration test suite. It currently passes \\~96% of tests."
		},
		{
			"heading": "community-support-for-rspack-experimental",
			"content": "View an example or learn more in the Rspack docs."
		},
		{
			"heading": "client-instrumentation-hook",
			"content": "The\xA0`instrumentation-client.js|ts`\xA0file allows you to add monitoring and analytics code that runs before your application's frontend code starts executing."
		},
		{
			"heading": "client-instrumentation-hook",
			"content": "This is ideal for setting up performance tracking, error monitoring, or other client-side observability tools as early as possible in the lifecycle."
		},
		{
			"heading": "client-instrumentation-hook",
			"content": "Place this file at the root of your project similar to server-side instrumentation."
		},
		{
			"heading": "client-instrumentation-hook",
			"content": "Learn more in the instrumentation-client file documentation."
		},
		{
			"heading": "navigation-hooks",
			"content": "We're introducing new navigation hooks that enhance client-side routing capabilities in Next.js 15.3, allowing you to more easily develop localized loading states and implement complex controls like navigation cancelation."
		},
		{
			"heading": "onnavigate",
			"content": "This event handler is a new property of the `Link` component and executes during client-side navigations, giving you precise control over your application's routing behavior."
		},
		{
			"heading": "onnavigate",
			"content": "Unlike the `onClick` event, which fires for all clicks, `onNavigate` can be used for Single-Page App (SPA) navigations, allowing you to execute code or even cancel navigation with `preventDefault()`."
		},
		{
			"heading": "onnavigate",
			"content": "This API can be used to implement transition animations, navigation guards, or analytics tracking that should only run during actual page transitions."
		},
		{
			"heading": "onnavigate",
			"content": "Learn more by visiting the `onNavigate` documentation."
		},
		{
			"heading": "uselinkstatus",
			"content": "The `useLinkStatus` Client Component hook returns a `pending` boolean that indicates when navigation is in progress, giving you localized control over loading states."
		},
		{
			"heading": "uselinkstatus",
			"content": "This API is modeled after `useFormStatus` from React, and is helpful for adding custom loading indicators during page transitions, especially when prefetching is disabled or when your linked routes don't have dedicated loading states."
		},
		{
			"heading": "uselinkstatus",
			"content": "By placing a component that uses `useLinkStatus` as a descendant of your `<Link>` component, you can create responsive UI elements that react to navigation events in real-time."
		},
		{
			"heading": "uselinkstatus",
			"content": "Learn more by visiting the `useLinkStatus` documentation."
		},
		{
			"heading": "typescript-plugin-performance-improvements",
			"content": "The Next.js TypeScript language server plugin (LSP) is now faster."
		},
		{
			"heading": "typescript-plugin-performance-improvements",
			"content": "The LSP provides inline Intellisense features such as server/client boundary validation, component prop hints, configuration autocompletion, and error detection for disallowed APIs in React Server Components. In very large codebases, the plugin could previously cause the TypeScript language service to hang or crash."
		},
		{
			"heading": "typescript-plugin-performance-improvements",
			"content": "We’ve made significant performance improvements to resolve these issues. In our internal testing, plugin response times have improved \\~60% with no freezing or crashes."
		},
		{
			"heading": "other-changes",
			"content": "**\\[Feature]** Support `new URL()` in `images.remotePatterns` (#77692)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Feature]** Viewport options are now separate from `metadata` (#77427)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Feature]** Add `unstable_dynamicOnHover` option (#77866)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Feature]** Add support for Pinterest Rich Pins (#76988)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Make revalidate work when followed by a redirect in Route Handlers (#77090)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Ensure strong consistency after calling revalidate in Server Actions (#76885)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Upgrade `sharp` for faster PNG to AVIF conversion (#77839)"
		},
		{
			"heading": "contributors",
			"content": "Next.js is the result of the combined work of over 3,000 individual developers. This release was brought to you by:"
		},
		{
			"heading": "contributors",
			"content": "The **Next.js** team: Andrew, Hendrik, Janka, Jiachi, Jimmy, Jiwon, JJ, Josh, Jude, Sam, Sebastian, Sebbie, Wyatt, and Zack."
		},
		{
			"heading": "contributors",
			"content": "The **Turbopack** team: Benjamin, Donny, Josh, Maia, Niklas, Tim, Tobias, and Will."
		},
		{
			"heading": "contributors",
			"content": "The **Next.js Docs** team: Delba, Rich, Ismael, and Lee."
		},
		{
			"heading": "contributors",
			"content": "Huge thanks to @raunofreiberg, @huozhi, @ijjk, @timneutkens, @gaojude, @leerob, @mezotv, @bgw, @samcx, @ztanner, @sokra, @mischnic, @wbinnssmith, @kdy1, @unstubbable, @ahabhgk, @ScriptedAlchemy, @SukkaW, @wyattjoh, @eps1lon, @Amirroid, @Netail, @lubieowoce, @gnoff, @jackwilson323, @acdlite, @sbougerel, @kevva, @kasperpeulen, @Cy-Tek, @dvoytenko, @husseinraoouf, @isBatak, @iamkd, @delbaoliveira, @jantimon, @padmaia, @Bernardoow, @styfle, @devjiwonchoi, @JamBalaya56562, and @Marukome0743 for helping!"
		}
	],
	"headings": [
		{
			"id": "turbopack-builds-alpha",
			"content": "Turbopack Builds (alpha)"
		},
		{
			"id": "functionality",
			"content": "Functionality"
		},
		{
			"id": "build-performance",
			"content": "Build performance"
		},
		{
			"id": "ecosystem",
			"content": "Ecosystem"
		},
		{
			"id": "feedback",
			"content": "Feedback"
		},
		{
			"id": "turbopack-configuration-in-nextconfigts-stable",
			"content": "Turbopack configuration in `next.config.ts` (stable)"
		},
		{
			"id": "community-support-for-rspack-experimental",
			"content": "Community support for Rspack (experimental)"
		},
		{
			"id": "client-instrumentation-hook",
			"content": "Client Instrumentation Hook"
		},
		{
			"id": "navigation-hooks",
			"content": "Navigation Hooks"
		},
		{
			"id": "onnavigate",
			"content": "`onNavigate`"
		},
		{
			"id": "uselinkstatus",
			"content": "`useLinkStatus`"
		},
		{
			"id": "typescript-plugin-performance-improvements",
			"content": "TypeScript Plugin Performance Improvements"
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
		url: "#turbopack-builds-alpha",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#turbopack-builds-alpha",
			children: "Turbopack Builds (alpha)"
		}) })
	},
	{
		depth: 3,
		url: "#functionality",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#functionality",
			children: "Functionality"
		}) })
	},
	{
		depth: 3,
		url: "#build-performance",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#build-performance",
			children: "Build performance"
		}) })
	},
	{
		depth: 3,
		url: "#ecosystem",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#ecosystem",
			children: "Ecosystem"
		}) })
	},
	{
		depth: 3,
		url: "#feedback",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#feedback",
			children: "Feedback"
		}) })
	},
	{
		depth: 2,
		url: "#turbopack-configuration-in-nextconfigts-stable",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#turbopack-configuration-in-nextconfigts-stable",
			children: [
				"Turbopack configuration in ",
				(0, import_jsx_runtime.jsx)("code", { children: "next.config.ts" }),
				" (stable)"
			]
		}) })
	},
	{
		depth: 2,
		url: "#community-support-for-rspack-experimental",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#community-support-for-rspack-experimental",
			children: "Community support for Rspack (experimental)"
		}) })
	},
	{
		depth: 2,
		url: "#client-instrumentation-hook",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#client-instrumentation-hook",
			children: "Client Instrumentation Hook"
		}) })
	},
	{
		depth: 2,
		url: "#navigation-hooks",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#navigation-hooks",
			children: "Navigation Hooks"
		}) })
	},
	{
		depth: 3,
		url: "#onnavigate",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#onnavigate",
			children: (0, import_jsx_runtime.jsx)("code", { children: "onNavigate" })
		}) })
	},
	{
		depth: 3,
		url: "#uselinkstatus",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#uselinkstatus",
			children: (0, import_jsx_runtime.jsx)("code", { children: "useLinkStatus" })
		}) })
	},
	{
		depth: 2,
		url: "#typescript-plugin-performance-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#typescript-plugin-performance-improvements",
			children: "TypeScript Plugin Performance Improvements"
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js 15.3 includes Turbopack for builds, new client instrumentation and navigation hooks, and more:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-15-3#turbopack-builds-alpha",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Turbopack for builds (alpha)" })
			}), ": Faster production builds passing 8000+ tests (99%)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-15-3#community-support-for-rspack-experimental",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Community support for Rspack (experimental)" })
			}), ": Alternative bundler with Webpack compatibility"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-15-3#client-instrumentation-hook",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Client Instrumentation hook" })
			}), ": Early monitoring and analytics setup"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/blog/next-15-3#navigation-hooks",
					children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Navigation hooks" })
				}),
				": Control routing with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "onNavigate" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "useLinkStatus" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-15-3#typescript-plugin-performance-improvements",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "TypeScript plugin improvements" })
			}), ": Improved support for large codebases"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Upgrade today, or get started with:" }),
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
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "# Use the automated upgrade CLI"
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
							children: " react@latest"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " react-dom@latest"
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
						children: "# ...or start a new project"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
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
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "turbopack-builds-alpha",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#turbopack-builds-alpha",
				children: "Turbopack Builds (alpha)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Following the stable release of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev --turbopack" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "over 50% of development sessions" }),
			" on Next.js 15 are now using Turbopack."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This release includes our ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "alpha" }),
			" release of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build --turbopack" }),
			", bringing the same performance improvements from local development to production builds."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Try Turbopack for production builds by upgrading to 15.3 and running:" }),
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
						children: " build"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " --turbopack"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "functionality",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#functionality",
				children: "Functionality"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://areweturboyet.com/",
				children: "99.3%"
			}),
			" of integration tests for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			" are already passing. You can track our progress towards 100% at ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://areweturboyet.com/",
				children: "areweturboyet.com"
			}),
			". If your application already works with Turbopack for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "dev" }),
			", then it should work as-is with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "build" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Turbopack builds are in alpha. We don’t recommend using them in production for mission-critical applications at this stage. Instead, try them in a preview or staging environment, or run the build locally to observe differences in bundle size and performance." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We’re actively working to close these performance gaps through scope hoisting, improved chunking, and other optimizations." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "build-performance",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#build-performance",
				children: "Build performance"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We’ve been validating Turbopack on Vercel’s large internal monorepo and early partner codebases. One advantage of Turbopack’s architecture versus our previous Webpack implementation is that performance scales when adding CPU cores:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "At 4 cores: 28% faster than Webpack" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "At 16 cores: 60% faster than Webpack" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "At 30 cores: 83% faster than Webpack" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "These build times drop even further with our experimental work on persistent caching. We will share more on that in a future release." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "ecosystem",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#ecosystem",
				children: "Ecosystem"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We’re working with commonly used integrations like Sentry to make sure they’re compatible with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build --turbopack" }),
			" before the stable release. Please reach out to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://x.com/leerob",
				children: "@leerob on X"
			}),
			" if you are a tool author who would like to work with us to ensure compatibility."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "feedback",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#feedback",
				children: "Feedback"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Please share your feedback, even if it goes smoothly, to help us prepare a stable release:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions/77721",
				children: "GitHub discussion"
			}), "s for general feedback"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/issues",
				children: "GitHub issues"
			}), " for reproductions"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "turbopack-configuration-in-nextconfigts-stable",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#turbopack-configuration-in-nextconfigts-stable",
				children: [
					"Turbopack configuration in ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.ts" }),
					" (stable)"
				]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Turbopack configuration in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.ts" }),
			" has moved from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.turbo" }),
			" to the top-level ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "turbopack" }),
			" key:"
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
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  turbopack: {"
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
						children: "    rules: {"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: "      '*.svg'"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ": {"
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
							children: "        loaders: ["
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'@svgr/webpack'"
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "        as: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'*.js'"
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
						children: "      },"
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
			"For compatibility, the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.turbo" }),
			" option will continue to be supported until the next major release of Next.js."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For a complete list of Turbopack configuration options, see the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack",
				children: "Turbopack API Reference"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "community-support-for-rspack-experimental",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#community-support-for-rspack-experimental",
				children: "Community support for Rspack (experimental)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Rspack team has created a community plugin for Next.js." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This provides an option for Next.js users who need near-exact Webpack API compatibility, but cannot yet move to Turbopack, to improve their local compilation and build times. We’re confident in our progress with Turbopack and will continue to provide an incremental path forward for Webpack users." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "While this is not an official Next.js plugin, we are partnering with the Rspack team. Both teams will collaborate on shared foundations like SWC and Lightning CSS, benefiting all Next.js users and the broader ecosystem." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you want to explore using Rspack with Next.js, you can use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next-rspack" }),
			" adapter. We are running the adapter against our integration test suite. It currently passes ~96% of tests."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/tree/canary/examples/with-rspack",
				children: "View an example"
			}),
			" or learn more in the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://rspack.dev/guide/tech/next",
				children: "Rspack docs"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "client-instrumentation-hook",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#client-instrumentation-hook",
				children: "Client Instrumentation Hook"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation-client.js|ts" }),
			"\xA0file allows you to add monitoring and analytics code that runs before your application's frontend code starts executing."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This is ideal for setting up performance tracking, error monitoring, or other client-side observability tools as early as possible in the lifecycle." }),
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
			title: "instrumentation-client.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// Set up performance monitoring"
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
							children: "performance."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "mark"
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
							children: "'app-init'"
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
						children: "// Initialize analytics"
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
							children: "console."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "log"
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
							children: "'Analytics initialized'"
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
						children: "// Set up error tracking"
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
							children: "window."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "addEventListener"
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
							children: "'error'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", ("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "event"
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
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "  // Send to your error tracking service"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "  reportError"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "(event.error);"
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
						children: "});"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Place this file at the root of your project similar to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation",
				children: "server-side instrumentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more in the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation-client",
				children: "instrumentation-client file documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "navigation-hooks",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#navigation-hooks",
				children: "Navigation Hooks"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're introducing new navigation hooks that enhance client-side routing capabilities in Next.js 15.3, allowing you to more easily develop localized loading states and implement complex controls like navigation cancelation." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "onnavigate",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#onnavigate",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "onNavigate" })
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This event handler is a new property of the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Link" }),
			" component and executes during client-side navigations, giving you precise control over your application's routing behavior."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Unlike the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onClick" }),
			" event, which fires for all clicks, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onNavigate" }),
			" can be used for ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/building-your-application/upgrading/single-page-applications",
				children: "Single-Page App (SPA)"
			}),
			" navigations, allowing you to execute code or even cancel navigation with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "preventDefault()" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This API can be used to implement transition animations, navigation guards, or analytics tracking that should only run during actual page transitions." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more by visiting the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://nextjs.org/docs/app/api-reference/components/link#onnavigate",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "onNavigate" }), " documentation"]
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "uselinkstatus",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#uselinkstatus",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "useLinkStatus" })
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useLinkStatus" }),
			" Client Component hook returns a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pending" }),
			" boolean that indicates when navigation is in progress, giving you localized control over loading states."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This API is modeled after ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/reference/react-dom/hooks/useFormStatus",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "useFormStatus" })
			}),
			" from React, and is helpful for adding custom loading indicators during page transitions, especially when prefetching is disabled or when your linked routes don't have dedicated loading states."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"By placing a component that uses ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useLinkStatus" }),
			" as a descendant of your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<Link>" }),
			" component, you can create responsive UI elements that react to navigation events in real-time."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more by visiting the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://nextjs.org/docs/app/api-reference/functions/use-link-status",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "useLinkStatus" }), " documentation"]
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "typescript-plugin-performance-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#typescript-plugin-performance-improvements",
				children: "TypeScript Plugin Performance Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Next.js TypeScript language server plugin (LSP) is now faster." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The LSP provides inline Intellisense features such as server/client boundary validation, component prop hints, configuration autocompletion, and error detection for disallowed APIs in React Server Components. In very large codebases, the plugin could previously cause the TypeScript language service to hang or crash." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We’ve made significant performance improvements to resolve these issues. In our internal testing, plugin response times have improved ~60% with no freezing or crashes." }),
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
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" Support ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "new URL()" }),
				" in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "images.remotePatterns" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/77692",
					children: "#77692"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" Viewport options are now separate from ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "metadata" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/77427",
					children: "#77427"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" Add ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "unstable_dynamicOnHover" }),
				" option (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/77866",
					children: "#77866"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" Add support for Pinterest Rich Pins (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/76988",
					children: "#76988"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Make revalidate work when followed by a redirect in Route Handlers (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/77090",
					children: "#77090"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Ensure strong consistency after calling revalidate in Server Actions (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/76885",
					children: "#76885"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Upgrade ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "sharp" }),
				" for faster PNG to AVIF conversion (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/77839",
					children: "#77839"
				}),
				")"
			] }),
			"\n"
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js is the result of the combined work of over 3,000 individual developers. This release was brought to you by:" }),
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
					href: "https://github.com/gao_jude",
					children: "Jude"
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
					href: "https://github.com/Cy-Tek",
					children: "Josh"
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Huge thanks to @raunofreiberg, @huozhi, @ijjk, @timneutkens, @gaojude, @leerob, @mezotv, @bgw, @samcx, @ztanner, @sokra, @mischnic, @wbinnssmith, @kdy1, @unstubbable, @ahabhgk, @ScriptedAlchemy, @SukkaW, @wyattjoh, @eps1lon, @Amirroid, @Netail, @lubieowoce, @gnoff, @jackwilson323, @acdlite, @sbougerel, @kevva, @kasperpeulen, @Cy-Tek, @dvoytenko, @husseinraoouf, @isBatak, @iamkd, @delbaoliveira, @jantimon, @padmaia, @Bernardoow, @styfle, @devjiwonchoi, @JamBalaya56562, and @Marukome0743 for helping!" })
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
export { toc as a, structuredData as i, frontmatter as n, next_15_3_exports as r, MDXContent as t };
