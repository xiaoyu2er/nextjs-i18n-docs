import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-15-2-DspjwR3v.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_15_2_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 15.2",
	"description": "Next.js 15.2 includes updates for debugging errors, metadata, Turbopack, and more.",
	"author": [
		{
			"name": "Jiachi Liu",
			"image": "/static/team/jiachi.png"
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
			"name": "Pranathi Peri",
			"image": "/static/team/pran.png"
		},
		{
			"name": "Rauno Freiberg",
			"image": "/static/team/rauno.jpeg"
		},
		{
			"name": "Sebastian Silbermann",
			"image": "/static/team/sebbie.png"
		},
		{
			"name": "Zack Tanner",
			"image": "/static/team/zack.jpg"
		}
	],
	"date": /* @__PURE__ */ new Date(17406e8),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-2/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js 15.2 includes updates for debugging errors, metadata, Turbopack, and more:"
		},
		{
			"heading": void 0,
			"content": "**Redesigned error UI and improved stack traces**: A redesigned debugging experience"
		},
		{
			"heading": void 0,
			"content": "**Streaming metadata**: Async metadata will no longer block page rendering or client-side page transitions"
		},
		{
			"heading": void 0,
			"content": "**Turbopack performance improvements**: Faster compile times and reduced memory usage"
		},
		{
			"heading": void 0,
			"content": "**React View Transitions (experimental)**: Experimental support for React's new View Transitions API"
		},
		{
			"heading": void 0,
			"content": "**Node.js Middleware (experimental)**: Experimental support for using the Node.js runtime in Middleware"
		},
		{
			"heading": void 0,
			"content": "Upgrade today, or get started with:"
		},
		{
			"heading": "redesigned-error-ui-and-improved-stack-traces",
			"content": "We've added both visual and quality improvements to errors you may encounter while building your application. Let's walk through each area of improvements:"
		},
		{
			"heading": "error-overlay",
			"content": "We've overhauled the UI and presentation of error messages in Next.js, making them easier to understand. The new design highlights the core details of the error—such as the message, the relevant code frame, and the call stack—while reducing noise from code in libraries or dependencies. This means you can quickly get to the root of what went wrong and start fixing it faster."
		},
		{
			"heading": "error-overlay",
			"content": "Leveraging the newly introduced owner stacks feature in React, we're now able to provide higher fidelity into where your errors are coming from. Next.js will now be able to surface the subcomponent responsible for throwing the error, skipping over intermediary elements that weren't responsible for creating the element that caused the error."
		},
		{
			"heading": "error-overlay",
			"content": "We're also making it easier to customize your indicator preferences without needing to add additional configuration."
		},
		{
			"heading": "error-overlay",
			"content": "We've added a feedback section at the bottom of error overlays that lets you rate how helpful the error message was. Your opinion helps us understand common pain points and improve error messages to make debugging easier."
		},
		{
			"heading": "dev-indicator",
			"content": "The various states of the dev indicator, from rendering to showing additional information."
		},
		{
			"heading": "dev-indicator",
			"content": "We've consolidated development information into a new, streamlined indicator that shows details like rendering mode and build status."
		},
		{
			"heading": "dev-indicator",
			"content": "During compilation, you'll notice a dimmed, animated Next.js logo when navigating between routes. The logo brightens once compilation is complete and React begins rendering, providing a visual cue of your application's state."
		},
		{
			"heading": "dev-indicator",
			"content": "Opening the dev indicator now displays:"
		},
		{
			"heading": "dev-indicator",
			"content": "Your current route's rendering mode (static/dynamic)"
		},
		{
			"heading": "dev-indicator",
			"content": "Turbopack compilation status"
		},
		{
			"heading": "dev-indicator",
			"content": "Active errors with quick access to the error overlay"
		},
		{
			"heading": "dev-indicator",
			"content": "Future updates will expand this menu to include:"
		},
		{
			"heading": "dev-indicator",
			"content": "PPR (Partial Prerendering) debugging tools"
		},
		{
			"heading": "dev-indicator",
			"content": "Cache monitoring features"
		},
		{
			"heading": "dev-indicator",
			"content": "Additional developer tooling"
		},
		{
			"heading": "dev-indicator",
			"content": "This unified approach puts all crucial development information in one accessible location. We'll continue to refine and expand this feature in future releases based on your feedback."
		},
		{
			"heading": "streaming-metadata",
			"content": "It can often be necessary to fetch dynamic data, or perform some async operation, in `generateMetadata`. In prior versions of Next.js, this metadata needed to finish generating before the initial UI would be sent so it could be included in the document `<head>`."
		},
		{
			"heading": "streaming-metadata",
			"content": "This meant that for many pages where a fast initial UI was available, the initial paint was still delayed by data requirements that did not affect what the user would see visually. We've improved this in 15.2 by allowing the initial UI to be sent to the browser even before `generateMetadata` has completed."
		},
		{
			"heading": "streaming-metadata",
			"content": "However, to maintain compatibility with bots and crawlers that expect metadata to be available in the `<head>` of the document, we continue to delay sending HTML to certain bot user agents. If you need more fine-grained control over which bots receive this treatment, you can customize the regex used to serve them via the `htmlLimitedBots` option in `next.config.js`."
		},
		{
			"heading": "streaming-metadata",
			"content": "Learn more about streaming metadata."
		},
		{
			"heading": "turbopack-performance-improvements",
			"content": "Turbopack was marked stable with Next.js 15."
		},
		{
			"heading": "turbopack-performance-improvements",
			"content": "We've been working on improving Turbopack's performance, particularly in scenarios without persistent caching. As part of this release, we've introduced the following enhancements:"
		},
		{
			"heading": "turbopack-performance-improvements",
			"content": "**Faster compile times:** Early adopters have reported up to **57.6% faster compile times** when accessing routes compared to Next.js 15.1."
		},
		{
			"heading": "turbopack-performance-improvements",
			"content": "**Reduced memory usage:** For the vercel.com application, we observed a **30% decrease in memory usage** during local development."
		},
		{
			"heading": "turbopack-performance-improvements",
			"content": "With these improvements, Turbopack should now be faster than Webpack in virtually all cases. If you encounter a scenario where this isn't true for your application, please reach out—we want to investigate these."
		},
		{
			"heading": "turbopack-performance-improvements",
			"content": "We've also made progress on persistent caching and production builds. Although these features aren't ready for an experimental release yet, we've started testing them on real-world projects. We'll share more detailed metrics once they're available for broader use."
		},
		{
			"heading": "react-view-transitions-experimental",
			"content": "We've added a feature flag to enable the new experimental View Transitions API in React. This new API allows you to animate between different views and components in your application."
		},
		{
			"heading": "react-view-transitions-experimental",
			"content": "To enable this feature, add the following to your `next.config.js`:"
		},
		{
			"heading": "react-view-transitions-experimental",
			"content": "> **Note:** This feature is highly experimental and may change in future releases."
		},
		{
			"heading": "react-view-transitions-experimental",
			"content": "For more information on how to use this feature, please refer to the original View Transition pull request in the React repository. This work builds on the native browser implementation of View Transitions."
		},
		{
			"heading": "react-view-transitions-experimental",
			"content": "We will be publishing more documentation and examples as stability progresses."
		},
		{
			"heading": "nodejs-middleware-experimental",
			"content": "We've been working on a new experimental flag to allow using the Node.js runtime for the Next.js Middleware."
		},
		{
			"heading": "nodejs-middleware-experimental",
			"content": "To enable this feature, add the following to your `next.config.js`:"
		},
		{
			"heading": "nodejs-middleware-experimental",
			"content": "You can then specify the Node.js runtime in your Middleware `config` export:"
		},
		{
			"heading": "nodejs-middleware-experimental",
			"content": "> **Note:** This feature is not yet recommended for production use. Therefore, Next.js will throw an error unless you are using the `next@canary` release instead of the stable release."
		},
		{
			"heading": "nodejs-middleware-experimental",
			"content": "We are planning to take this opportunity to improve and reshape the Middleware API. If you have any suggestions or requests, please let us know. Node.js Middleware was a top community request and we are excited to have this addressed."
		},
		{
			"heading": "coming-soon",
			"content": "**\"use cache\" (beta)**: We've been working on stabilizing `\"use cache\"` as a standalone feature. Stay tuned for more details in the coming releases. Learn more about `\"use cache\"`."
		},
		{
			"heading": "coming-soon",
			"content": "**Turbopack persistent caching (experimental)**: We've been dogfooding persistent caching at Vercel with positive performance improvements. Once we've stabilized it further, we'll release it behind a feature flag for additional feedback and testing."
		},
		{
			"heading": "other-changes",
			"content": "**\\[Feature]** Add `--api` flag to create a headless API-only with `create-next-app` (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Feature]** Add support for `images.qualities` with `next/image` (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Deprecation]** Warn about i18n configuration deprecation in App Router (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Improve lint performance of `no-html-link-for-pages` (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Emit build error if `\"use action\"` directive is incorrectly used (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Display `global-error` alongside dev overlay during development (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Allow disabling HTTP request logs in development server (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Add pagination SEO link tags (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Improve JSDocs for `metadata` and `<Link>` components (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Middleware should match `next/image` requests (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Add hostname to default error boundary message (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Send errors not handled by explicit error boundaries through `reportError` (PR)"
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
			"content": "The **Turbopack** team: Benjamin, Donny, Maia, Niklas, Tim, Tobias, and Will."
		},
		{
			"heading": "contributors",
			"content": "The **Next.js Docs** team: Delba, Rich, Ismael, and Lee."
		},
		{
			"heading": "contributors",
			"content": "Huge thanks to @mischnic, @Marukome0743, @JamBalaya56562, @creationix, @noreiller, @styfle, @abdonrd, @ollyw, @aymericzip, @davidhu2000, @attilarepka, @devpla, @dydals3440, @huozhi, @wbinnssmith, @suu3, @PapatMayuri, @Sahil4883, @abyii, @molebox, @sokra, @maciej-ka, @abvthecity, @damiensedgwick, @alitas, @RiskyMH, @ytreister, @sommeeeer, @n1ckoates, @yongholeeme, @spidersouris, @gurkerl83, @cassiossantos, @Netail, @tknickman, @eur00t, @cseas, @nnnnoel, @Manoj-M-S, @lfades, @matmannion, @mikeboensel, @nphmuller, @apostolos, @k15a, @pavelee, @locothedev, @vexcat, @Zach-Jaensch, @decepulis, @gadcam, @lukahartwig, @jsanford8, @RobinMalfait, @raunofreiberg, @mohsen1, @skushagra, @amannn, @HQidea, @jrandolf, @smit-err, @littledivy, @k35o, @martinsione, @CvX, @msereniti, @Timer, @Iftee97, @chibicode, @RobPruzan, @PlagueFPS, @bjunix, @maximevtush, @michaelven, @sedlukha, @johannpinson, @AxelUser, @Nayeem-XTREME, @IcaroG, @blurrah, @lachlanjc, @ashi009, @conico974, @raphaelcosta, @dulmandakh, @khuezy, @Knoa0405, @wangsijie, @stefanprobst, @wentsul, @loopy-lim, @bratvanov, @hedgeday, and @cassian-goode for helping!"
		}
	],
	"headings": [
		{
			"id": "redesigned-error-ui-and-improved-stack-traces",
			"content": "Redesigned error UI and improved stack traces"
		},
		{
			"id": "error-overlay",
			"content": "Error overlay"
		},
		{
			"id": "dev-indicator",
			"content": "Dev indicator"
		},
		{
			"id": "streaming-metadata",
			"content": "Streaming metadata"
		},
		{
			"id": "turbopack-performance-improvements",
			"content": "Turbopack performance improvements"
		},
		{
			"id": "react-view-transitions-experimental",
			"content": "React View Transitions (experimental)"
		},
		{
			"id": "nodejs-middleware-experimental",
			"content": "Node.js Middleware (experimental)"
		},
		{
			"id": "coming-soon",
			"content": "Coming soon"
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
		url: "#redesigned-error-ui-and-improved-stack-traces",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#redesigned-error-ui-and-improved-stack-traces",
			children: "Redesigned error UI and improved stack traces"
		}) })
	},
	{
		depth: 3,
		url: "#error-overlay",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#error-overlay",
			children: "Error overlay"
		}) })
	},
	{
		depth: 3,
		url: "#dev-indicator",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#dev-indicator",
			children: "Dev indicator"
		}) })
	},
	{
		depth: 2,
		url: "#streaming-metadata",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#streaming-metadata",
			children: "Streaming metadata"
		}) })
	},
	{
		depth: 2,
		url: "#turbopack-performance-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#turbopack-performance-improvements",
			children: "Turbopack performance improvements"
		}) })
	},
	{
		depth: 2,
		url: "#react-view-transitions-experimental",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#react-view-transitions-experimental",
			children: "React View Transitions (experimental)"
		}) })
	},
	{
		depth: 2,
		url: "#nodejs-middleware-experimental",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#nodejs-middleware-experimental",
			children: "Node.js Middleware (experimental)"
		}) })
	},
	{
		depth: 2,
		url: "#coming-soon",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#coming-soon",
			children: "Coming soon"
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js 15.2 includes updates for debugging errors, metadata, Turbopack, and more:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-15-2#redesigned-error-ui-and-improved-stack-traces",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Redesigned error UI and improved stack traces" })
			}), ": A redesigned debugging experience"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-15-2#streaming-metadata",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Streaming metadata" })
			}), ": Async metadata will no longer block page rendering or client-side page transitions"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-15-2#turbopack-performance-improvements",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Turbopack performance improvements" })
			}), ": Faster compile times and reduced memory usage"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-15-2#react-view-transitions-experimental",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "React View Transitions (experimental)" })
			}), ": Experimental support for React's new View Transitions API"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-15-2#nodejs-middleware-experimental",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Node.js Middleware (experimental)" })
			}), ": Experimental support for using the Node.js runtime in Middleware"] }),
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
			id: "redesigned-error-ui-and-improved-stack-traces",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#redesigned-error-ui-and-improved-stack-traces",
				children: "Redesigned error UI and improved stack traces"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've added both visual and quality improvements to errors you may encounter while building your application. Let's walk through each area of improvements:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "error-overlay",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#error-overlay",
				children: "Error overlay"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "An example of the Next.js error overlay after version 15.2",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-2/bad-element-error-turbo2-light.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-2/bad-element-error-turbo2-dark.png",
			width: "2048",
			height: "1408"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've overhauled the UI and presentation of error messages in Next.js, making them easier to understand. The new design highlights the core details of the error—such as the message, the relevant code frame, and the call stack—while reducing noise from code in libraries or dependencies. This means you can quickly get to the root of what went wrong and start fixing it faster." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Leveraging the newly introduced ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/reference/react/captureOwnerStack",
				children: "owner stacks"
			}),
			" feature in React, we're now able to provide higher fidelity into where your errors are coming from. Next.js will now be able to surface the subcomponent responsible for throwing the error, skipping over intermediary elements that weren't responsible for creating the element that caused the error."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're also making it easier to customize your indicator preferences without needing to add additional configuration." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "An example of the Next.js dev tools preferences",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-2/preferences-light.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-2/preferences-dark.png",
			width: "506",
			height: "354"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've added a feedback section at the bottom of error overlays that lets you rate how helpful the error message was. Your opinion helps us understand common pain points and improve error messages to make debugging easier." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "dev-indicator",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#dev-indicator",
				children: "Dev indicator"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The various states of the dev indicator, from rendering to showing additional information." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've consolidated development information into a new, streamlined indicator that shows details like rendering mode and build status." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "During compilation, you'll notice a dimmed, animated Next.js logo when navigating between routes. The logo brightens once compilation is complete and React begins rendering, providing a visual cue of your application's state." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Opening the dev indicator now displays:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Your current route's rendering mode (static/dynamic)" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Turbopack compilation status" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Active errors with quick access to the error overlay" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Future updates will expand this menu to include:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "PPR (Partial Prerendering) debugging tools" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Cache monitoring features" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Additional developer tooling" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This unified approach puts all crucial development information in one accessible location. We'll continue to refine and expand this feature in future releases based on your feedback." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "streaming-metadata",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#streaming-metadata",
				children: "Streaming metadata"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"It can often be necessary to fetch dynamic data, or perform some async operation, in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "generateMetadata" }),
			". In prior versions of Next.js, this metadata needed to finish generating before the initial UI would be sent so it could be included in the document ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<head>" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This meant that for many pages where a fast initial UI was available, the initial paint was still delayed by data requirements that did not affect what the user would see visually. We've improved this in 15.2 by allowing the initial UI to be sent to the browser even before ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "generateMetadata" }),
			" has completed."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "An example of the Next.js dev tools preferences",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-2/metadata-light.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-2/metadata-dark.png",
			width: "1600",
			height: "882"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"However, to maintain compatibility with bots and crawlers that expect metadata to be available in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<head>" }),
			" of the document, we continue to delay sending HTML to certain bot user agents. If you need more fine-grained control over which bots receive this treatment, you can customize the regex used to serve them via the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "htmlLimitedBots" }),
			" option in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/generate-metadata#streaming-metadata",
				children: "streaming metadata"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "turbopack-performance-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#turbopack-performance-improvements",
				children: "Turbopack performance improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Turbopack was marked stable with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/blog/next-15#turbopack-dev",
				children: "Next.js 15"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've been working on improving Turbopack's performance, particularly in scenarios without persistent caching. As part of this release, we've introduced the following enhancements:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Faster compile times:" }),
				" Early adopters have reported up to ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "57.6% faster compile times" }),
				" when accessing routes compared to Next.js 15.1."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Reduced memory usage:" }),
				" For the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "http://vercel.com/",
					children: "vercel.com"
				}),
				" application, we observed a ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "30% decrease in memory usage" }),
				" during local development."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "With these improvements, Turbopack should now be faster than Webpack in virtually all cases. If you encounter a scenario where this isn't true for your application, please reach out—we want to investigate these." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've also made progress on persistent caching and production builds. Although these features aren't ready for an experimental release yet, we've started testing them on real-world projects. We'll share more detailed metrics once they're available for broader use." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "react-view-transitions-experimental",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#react-view-transitions-experimental",
				children: "React View Transitions (experimental)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've added a feature flag to enable the new experimental View Transitions API in React. This new API allows you to animate between different views and components in your application." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To enable this feature, add the following to your ",
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
							children: "    viewTransition: "
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
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }), " This feature is highly experimental and may change in future releases."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more information on how to use this feature, please refer to the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/facebook/react/pull/31975",
				children: "original View Transition pull request"
			}),
			" in the React repository. This work builds on the native browser implementation of View Transitions."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We will be publishing more documentation and examples as stability progresses." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nodejs-middleware-experimental",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nodejs-middleware-experimental",
				children: "Node.js Middleware (experimental)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've been working on a new experimental flag to allow using the Node.js runtime for the Next.js Middleware." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To enable this feature, add the following to your ",
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
							children: "    nodeMiddleware: "
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
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can then specify the Node.js runtime in your Middleware ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "config" }),
			" export:"
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
			title: "middleware.js",
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
							children: " bcrypt "
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
							children: " 'bcrypt'"
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
							children: " API_KEY_HASH"
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
							children: " process.env."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "API_KEY_HASH"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "; "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "// Pre-hashed API key in env"
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
							children: " apiKey"
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
							children: " req.headers."
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
							children: "'x-api-key'"
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
							children: " ("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "!"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "apiKey "
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " !"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "await"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " bcrypt."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "compare"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(apiKey, "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "API_KEY_HASH"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "))) {"
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
							children: "'Forbidden'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", { status: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "403"
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
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  console."
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
							children: "'API key validated'"
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
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }),
				" This feature is not yet recommended for production use. Therefore, Next.js will throw an error unless you are using the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next@canary" }),
				" release instead of the stable release."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We are planning to take this opportunity to improve and reshape the Middleware API. If you have any suggestions or requests, please let us know. Node.js Middleware was a top community request and we are excited to have this addressed." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "coming-soon",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#coming-soon",
				children: "Coming soon"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "\"use cache\" (beta)" }),
				": We've been working on stabilizing ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "\"use cache\"" }),
				" as a standalone feature. Stay tuned for more details in the coming releases. Learn more about ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nextjs.org/blog/composable-caching",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "\"use cache\"" })
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Turbopack persistent caching (experimental)" }), ": We've been dogfooding persistent caching at Vercel with positive performance improvements. Once we've stabilized it further, we'll release it behind a feature flag for additional feedback and testing."] }),
			"\n"
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
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" Add ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--api" }),
				" flag to create a headless API-only with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "create-next-app" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/68130",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" Add support for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "images.qualities" }),
				" with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/74257",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Deprecation]" }),
				" Warn about i18n configuration deprecation in App Router (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/76346",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Improve lint performance of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "no-html-link-for-pages" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/74827",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Emit build error if ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "\"use action\"" }),
				" directive is incorrectly used (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/74954",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Display ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "global-error" }),
				" alongside dev overlay during development (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/75101",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Allow disabling HTTP request logs in development server (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/74349",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Add pagination SEO link tags (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/74737",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Improve JSDocs for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "metadata" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<Link>" }),
				" components (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/75576",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Middleware should match ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
				" requests (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/75729",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Add hostname to default error boundary message (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/75151",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Send errors not handled by explicit error boundaries through ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "reportError" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/76101",
					children: "PR"
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Huge thanks to @mischnic, @Marukome0743, @JamBalaya56562, @creationix, @noreiller, @styfle, @abdonrd, @ollyw, @aymericzip, @davidhu2000, @attilarepka, @devpla, @dydals3440, @huozhi, @wbinnssmith, @suu3, @PapatMayuri, @Sahil4883, @abyii, @molebox, @sokra, @maciej-ka, @abvthecity, @damiensedgwick, @alitas, @RiskyMH, @ytreister, @sommeeeer, @n1ckoates, @yongholeeme, @spidersouris, @gurkerl83, @cassiossantos, @Netail, @tknickman, @eur00t, @cseas, @nnnnoel, @Manoj-M-S, @lfades, @matmannion, @mikeboensel, @nphmuller, @apostolos, @k15a, @pavelee, @locothedev, @vexcat, @Zach-Jaensch, @decepulis, @gadcam, @lukahartwig, @jsanford8, @RobinMalfait, @raunofreiberg, @mohsen1, @skushagra, @amannn, @HQidea, @jrandolf, @smit-err, @littledivy, @k35o, @martinsione, @CvX, @msereniti, @Timer, @Iftee97, @chibicode, @RobPruzan, @PlagueFPS, @bjunix, @maximevtush, @michaelven, @sedlukha, @johannpinson, @AxelUser, @Nayeem-XTREME, @IcaroG, @blurrah, @lachlanjc, @ashi009, @conico974, @raphaelcosta, @dulmandakh, @khuezy, @Knoa0405, @wangsijie, @stefanprobst, @wentsul, @loopy-lim, @bratvanov, @hedgeday, and @cassian-goode for helping!" })
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
export { toc as a, structuredData as i, frontmatter as n, next_15_2_exports as r, MDXContent as t };
