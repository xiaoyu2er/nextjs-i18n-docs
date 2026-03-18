import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-10-2-Dp86Fw9a.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_10_2_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 10.2",
	"description": "Next.js 10.2 introduces performance improvements (faster builds, refresh, and startup), improved accessibility, Automatic Webfont Optimization, and more!",
	"author": [
		{
			"name": "Connor Davis",
			"image": "/static/team/connor.jpg"
		},
		{
			"name": "JJ Kasper",
			"image": "/static/team/jj.jpg"
		},
		{
			"name": "Shu Ding",
			"image": "/static/team/shu.jpg"
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
	"date": /* @__PURE__ */ new Date(1619618400507),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-10-2/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "We are excited to introduce Next.js 10.2, featuring:"
		},
		{
			"heading": void 0,
			"content": "**Faster Builds**: Up to \\~60% faster subsequent builds with caching."
		},
		{
			"heading": void 0,
			"content": "**Faster Refresh**: 100ms to 200ms faster refresh."
		},
		{
			"heading": void 0,
			"content": "**Faster Startup**: Up to \\~24% faster `next dev`."
		},
		{
			"heading": void 0,
			"content": "**Improved Accessibility**: Route changes are now announced by screen readers."
		},
		{
			"heading": void 0,
			"content": "**More Flexible Redirects and Rewrites**: Match any header, cookie, or query string."
		},
		{
			"heading": void 0,
			"content": "**Automatic Webfont Optimization**: Improved performance by inlining font CSS."
		},
		{
			"heading": void 0,
			"content": "Update today by running `npm i next@latest`."
		},
		{
			"heading": "webpack-5",
			"content": "With Next.js 10.1, we improved Fast Refresh and decreased installation times. We're excited to share additional performance improvements enabled through webpack 5."
		},
		{
			"heading": "webpack-5",
			"content": "Today, we're expanding the rollout of webpack 5 to Next.js applications. Starting from Next.js 10.2, all applications that do not use a custom webpack configuration in their `next.config.js` will automatically use webpack 5."
		},
		{
			"heading": "webpack-5",
			"content": "When webpack 5 is enabled, you'll automatically get new features and improvements like:"
		},
		{
			"heading": "webpack-5",
			"content": "**Improved Disk Caching:** Disk caching allows the compiler to persist work between `next build` runs. Only changed files will be recompiled, leading to increased performance. Vercel customer Scale observed a **63% speedup** on subsequent builds."
		},
		{
			"heading": "webpack-5",
			"content": "**Improved Fast Refresh:** Next.js now prioritizes Fast Refresh related compilation, resulting in a 100ms to 200ms faster refresh every time."
		},
		{
			"heading": "webpack-5",
			"content": "**Improved Long Term Caching of Assets:** Output between multiple `next build` runs is now deterministic, improving browser caching of JavaScript assets in production. Hashes are kept the same when the content of a page does not change."
		},
		{
			"heading": "webpack-5",
			"content": "**Improved Tree Shaking:** CommonJS modules can now be tree shaken to automatically remove unused code. Static analysis is used to determine side-effect free modules. `export *` tracks more information and no longer flags the default export as used. Inner-module tree-shaking is also enabled, allowing for imports that are only used in an unused export to be tree shaken."
		},
		{
			"heading": "webpack-5",
			"content": "We've worked hard to ensure a smooth transition from webpack 4 to 5. The Next.js core test suite with over **3,400 integration tests** runs on every pull request with webpack 5 support enabled."
		},
		{
			"heading": "webpack-5",
			"content": "If your application has a custom webpack configuration, we recommend following the documentation to enable webpack 5. After upgrading to webpack 5 in Next.js, please share any feedback with us."
		},
		{
			"heading": "improved-startup-performance",
			"content": "We've improved the Next.js CLI initialization making boot time for `next dev` up to **24% faster** after the first run. For example, `next dev` for vercel.com went from 3.3s to 2.5s."
		},
		{
			"heading": "improved-startup-performance",
			"content": "We're on a mission to make your local development experience real-time (20x faster). Stay tuned for additional startup performance improvements in upcoming releases."
		},
		{
			"heading": "accessibility-improvements",
			"content": "Route changes are now announced to screen readers and other assistive technology by default."
		},
		{
			"heading": "accessibility-improvements",
			"content": "The example below shows the heading \"Real Data. Real Performance\" being announced by macOS VoiceOver on client-side navigation. The page name is found by first looking for an `<h1>` element, falling back to `document.title`, and lastly to the pathname."
		},
		{
			"heading": "accessibility-improvements",
			"content": "Route changes are now automatically announced."
		},
		{
			"heading": "accessibility-improvements",
			"content": "Thank you to Kyle Boss and Kitty Giraudel for helping land this feature."
		},
		{
			"heading": "routing-based-on-headers-and-query-string-parameters",
			"content": "Next.js rewrites, redirects, and headers now support a new `has` property allowing you to match against incoming headers, cookies, and query strings."
		},
		{
			"heading": "routing-based-on-headers-and-query-string-parameters",
			"content": "Vercel customer Joyn uses `has` to optimize content for both discoverability and performance. For example, you could redirect old browsers based on the User-Agent:"
		},
		{
			"heading": "routing-based-on-headers-and-query-string-parameters",
			"content": "Another example could be redirecting users based on their location:"
		},
		{
			"heading": "routing-based-on-headers-and-query-string-parameters",
			"content": "Finally, you could redirect if a user is already logged in:"
		},
		{
			"heading": "routing-based-on-headers-and-query-string-parameters",
			"content": "To learn more and explore additional examples, check out the redirects documentation."
		},
		{
			"heading": "automatic-webfont-optimization",
			"content": "82% of web pages for desktop use web fonts. Custom fonts are important for the branding, design, and cross-browser/device consistency of your site. However, using a web font should not come at the cost of performance."
		},
		{
			"heading": "automatic-webfont-optimization",
			"content": "Next.js now supports Automatic Webfont Optimization when using web fonts. By default, Next.js will automatically inline font CSS at build time, eliminating an extra round trip to fetch font declarations. This results in improvements to First Contentful Paint (FCP) and Largest Contentful Paint (LCP). For example:"
		},
		{
			"heading": "automatic-webfont-optimization",
			"content": "Automatic Webfont Optimization currently supports Google Fonts and we're working to expand support further to other font providers. We're also planning to add control over loading strategies and `font-display` values. By optimizing fonts by default, we're able to help developers ship faster websites and improve their Core Web Vitals without any additional effort."
		},
		{
			"heading": "automatic-webfont-optimization",
			"content": "Thank you our partners at Google and Janicklas Ralph for helping land this feature."
		},
		{
			"heading": "growing-the-team",
			"content": "We're excited to announce Tobias Koppers, the author of webpack, has joined the Next.js team at Vercel."
		},
		{
			"heading": "community",
			"content": "We are thankful to our community, including all the external feedback and contributions that helped shape this release."
		},
		{
			"heading": "community",
			"content": "This release was brought to you by the contributions of: @rpxs, @lemarier, @RayhanADev, @janicklas-ralph, @devknoll, @felipeptcho, @rishabhpoddar, @sokra, @m-leon, @turadg, @PierreBerger, @divmain, @dominikwilkowski, @pranavp10, @ijjk, @santidalmasso, @HaNdTriX, @jamesgeorge007, @garmeeh, @leerob, @shuding, @feute, @timneutkens, @alexvilchis, @Timer, @malixsys, @sahilrajput03, @marcvangend, @steven-tey, @julienben, @umarsenpai, @Mzaien, @merceyz, @AntelaBrais, @SystemDisc, @M1ck0, @jbmoelker, @jaisharx, @amannn, @vkarpov15, @gaelhameon, @4ortytwo, @Simply007, @styxlab, @xCloudzx, @wodCZ, @emmanuelgautier, @leosuncin, @ludder, @geritol, @vassbence, @vvo, @portenez, @arshad, @tarunama, @flybayer, @Hanaffi, @SokratisVidros, @chibicode, @kylemarshall18, and @jarrodwatts."
		}
	],
	"headings": [
		{
			"id": "webpack-5",
			"content": "Webpack 5"
		},
		{
			"id": "improved-startup-performance",
			"content": "Improved Startup Performance"
		},
		{
			"id": "accessibility-improvements",
			"content": "Accessibility Improvements"
		},
		{
			"id": "routing-based-on-headers-and-query-string-parameters",
			"content": "Routing based on Headers and Query String Parameters"
		},
		{
			"id": "automatic-webfont-optimization",
			"content": "Automatic Webfont Optimization"
		},
		{
			"id": "growing-the-team",
			"content": "Growing the Team"
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
		url: "#webpack-5",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#webpack-5",
			children: "Webpack 5"
		}) })
	},
	{
		depth: 2,
		url: "#improved-startup-performance",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#improved-startup-performance",
			children: "Improved Startup Performance"
		}) })
	},
	{
		depth: 2,
		url: "#accessibility-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#accessibility-improvements",
			children: "Accessibility Improvements"
		}) })
	},
	{
		depth: 2,
		url: "#routing-based-on-headers-and-query-string-parameters",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#routing-based-on-headers-and-query-string-parameters",
			children: "Routing based on Headers and Query String Parameters"
		}) })
	},
	{
		depth: 2,
		url: "#automatic-webfont-optimization",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#automatic-webfont-optimization",
			children: "Automatic Webfont Optimization"
		}) })
	},
	{
		depth: 2,
		url: "#growing-the-team",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#growing-the-team",
			children: "Growing the Team"
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
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We are excited to introduce Next.js 10.2, featuring:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#webpack-5",
				children: "Faster Builds"
			}) }), ": Up to ~60% faster subsequent builds with caching."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#webpack-5",
				children: "Faster Refresh"
			}) }), ": 100ms to 200ms faster refresh."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "#improved-startup-performance",
					children: "Faster Startup"
				}) }),
				": Up to ~24% faster ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#accessibility-improvements",
				children: "Improved Accessibility"
			}) }), ": Route changes are now announced by screen readers."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#routing-based-on-headers-and-query-string-parameters",
				children: "More Flexible Redirects and Rewrites"
			}) }), ": Match any header, cookie, or query string."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#automatic-webfont-optimization",
				children: "Automatic Webfont Optimization"
			}) }), ": Improved performance by inlining font CSS."] }),
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
			id: "webpack-5",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#webpack-5",
				children: "Webpack 5"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With Next.js 10.1, we improved ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-10-1#3x-faster-refresh",
				children: "Fast Refresh"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-10-1#improved-installation-time",
				children: "decreased installation times"
			}),
			". We're excited to share additional performance improvements enabled through webpack 5."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Today, we're expanding the rollout of webpack 5 to Next.js applications. Starting from Next.js 10.2, all applications that do not use a custom webpack configuration in their ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			" will automatically use webpack 5."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When webpack 5 is enabled, you'll automatically get new features and improvements like:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Improved Disk Caching:" }),
				" Disk caching allows the compiler to persist work between ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
				" runs. Only changed files will be recompiled, leading to increased performance. Vercel customer ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "http://scale.com/",
					children: "Scale"
				}),
				" observed a ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "63% speedup" }),
				" on subsequent builds."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Improved Fast Refresh:" }), " Next.js now prioritizes Fast Refresh related compilation, resulting in a 100ms to 200ms faster refresh every time."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Improved Long Term Caching of Assets:" }),
				" Output between multiple ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
				" runs is now deterministic, improving browser caching of JavaScript assets in production. Hashes are kept the same when the content of a page does not change."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Improved Tree Shaking:" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://en.wikipedia.org/wiki/CommonJS",
					children: "CommonJS"
				}),
				" modules can now be ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://webpack.js.org/guides/tree-shaking/",
					children: "tree shaken"
				}),
				" to automatically remove unused code. Static analysis is used to determine side-effect free modules. ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "export *" }),
				" tracks more information and no longer flags the default export as used. Inner-module tree-shaking is also enabled, allowing for imports that are only used in an unused export to be tree shaken."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We've worked hard to ensure a smooth transition from webpack 4 to 5. The Next.js core test suite with over ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "3,400 integration tests" }),
			" runs on every pull request with webpack 5 support enabled."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If your application has a custom webpack configuration, we recommend following ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/messages/webpack5",
				children: "the documentation to enable webpack 5"
			}),
			". After upgrading to webpack 5 in Next.js, please ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions/23498",
				children: "share any feedback with us"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "improved-startup-performance",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improved-startup-performance",
				children: "Improved Startup Performance"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We've improved the Next.js CLI initialization making boot time for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			" up to ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "24% faster" }),
			" after the first run. For example, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			" for ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com",
				children: "vercel.com"
			}),
			" went from 3.3s to 2.5s."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We're on a mission to make your local development experience real-time (",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://twitter.com/shuding_/status/1378086219708473344",
				children: "20x faster"
			}),
			"). Stay tuned for additional startup performance improvements in upcoming releases."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "accessibility-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#accessibility-improvements",
				children: "Accessibility Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Route changes are now announced to screen readers and other assistive technology by default." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The example below shows the heading \"Real Data. Real Performance\" being announced by ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.apple.com/voiceover/info/guide/_1121.html",
				children: "macOS VoiceOver"
			}),
			" on client-side navigation. The page name is found by first looking for an ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<h1>" }),
			" element, falling back to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "document.title" }),
			", and lastly to the pathname."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Route changes are now automatically announced." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Thank you to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://twitter.com/likeakyleboss",
				children: "Kyle Boss"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://twitter.com/KittyGiraudel",
				children: "Kitty Giraudel"
			}),
			" for helping land this feature."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "routing-based-on-headers-and-query-string-parameters",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#routing-based-on-headers-and-query-string-parameters",
				children: "Routing based on Headers and Query String Parameters"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/rewrites",
				children: "rewrites"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/redirects",
				children: "redirects"
			}),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/headers",
				children: "headers"
			}),
			" now support a new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "has" }),
			" property allowing you to match against incoming headers, cookies, and query strings."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Vercel customer ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.joyn.de/",
				children: "Joyn"
			}),
			" uses ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "has" }),
			" to optimize content for both discoverability and performance. For example, you could redirect old browsers based on the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/HTTP/Headers/User-Agent",
				children: "User-Agent"
			}),
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "  async"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " redirects"
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
						children: "    return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ["
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
						children: "      {"
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
							children: "        source: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/:path((?!old-browser$).*)'"
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
						children: "        has: ["
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
						children: "          {"
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
							children: "            type: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'header'"
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
							children: "            key: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'User-Agent'"
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
						children: "            value:"
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
						children: "              'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; Microsoft; Lumia 950)'"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ","
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
						children: "          },"
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
						children: "        ],"
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
							children: "        destination: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/old-browser'"
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
							children: "        permanent: "
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
						children: "    ];"
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Another example could be redirecting users based on their location:" }),
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "  async"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " redirects"
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
						children: "    return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ["
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
						children: "      {"
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
							children: "        source: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/:path((?!uk/).*)'"
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
						children: "        has: ["
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
						children: "          {"
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
							children: "            type: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'header'"
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
							children: "            key: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'x-vercel-ip-country'"
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
							children: "            value: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'GB'"
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
						children: "          },"
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
						children: "        ],"
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
							children: "        destination: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/uk/:path*'"
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
							children: "        permanent: "
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
						children: "    ];"
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Finally, you could redirect if a user is already logged in:" }),
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "  async"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " redirects"
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
						children: "    return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ["
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
						children: "      {"
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
							children: "        source: "
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
						children: "        has: ["
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
						children: "          {"
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
							children: "            type: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'header'"
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
							children: "            key: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'x-authorized'"
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
							children: "            value: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'(?<authorized>yes|true)'"
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
						children: "          },"
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
						children: "        ],"
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
							children: "        destination: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/dashboard?authorized=:authorized'"
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
							children: "        permanent: "
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
						children: "    ];"
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
			"To learn more and explore additional examples, check out ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/redirects#header-cookie-and-query-matching",
				children: "the redirects documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "automatic-webfont-optimization",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#automatic-webfont-optimization",
				children: "Automatic Webfont Optimization"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://almanac.httparchive.org/en/2020/fonts",
			children: "82% of web pages for desktop"
		}), " use web fonts. Custom fonts are important for the branding, design, and cross-browser/device consistency of your site. However, using a web font should not come at the cost of performance."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js now supports Automatic Webfont Optimization when using web fonts. By default, Next.js will automatically inline font CSS at build time, eliminating an extra round trip to fetch font declarations. This results in improvements to First Contentful Paint (FCP) and Largest Contentful Paint (LCP). For example:" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// Before" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<link href=\"https://fonts.googleapis.com/css2?family=Inter\" rel=\"stylesheet\" />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// After" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<style data-href=\"https://fonts.googleapis.com/css2?family=Inter\">" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  @font-face {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    font-family: 'Inter';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    font-style: normal;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <!-- ... -->" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  }" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "</style>" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Automatic Webfont Optimization currently supports Google Fonts and we're working to expand support further to other font providers. We're also planning to add control over ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/issues/21555",
				children: "loading strategies"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "font-display" }),
			" values. By optimizing fonts by default, we're able to help developers ship faster websites and improve their ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/blog/core-web-vitals",
				children: "Core Web Vitals"
			}),
			" without any additional effort."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Thank you our partners at Google and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/janicklas-ralph",
				children: "Janicklas Ralph"
			}),
			" for helping land this feature."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "growing-the-team",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#growing-the-team",
				children: "Growing the Team"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We're excited to announce Tobias Koppers, the author of ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://webpack.js.org/",
				children: "webpack"
			}),
			", has ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://x.com/wSokra/status/1381860800533528576",
				children: "joined the Next.js team"
			}),
			" at Vercel."
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We are thankful to our community, including all the external feedback and contributions that helped shape this release." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This release was brought to you by the contributions of: @rpxs, @lemarier, @RayhanADev, @janicklas-ralph, @devknoll, @felipeptcho, @rishabhpoddar, @sokra, @m-leon, @turadg, @PierreBerger, @divmain, @dominikwilkowski, @pranavp10, @ijjk, @santidalmasso, @HaNdTriX, @jamesgeorge007, @garmeeh, @leerob, @shuding, @feute, @timneutkens, @alexvilchis, @Timer, @malixsys, @sahilrajput03, @marcvangend, @steven-tey, @julienben, @umarsenpai, @Mzaien, @merceyz, @AntelaBrais, @SystemDisc, @M1ck0, @jbmoelker, @jaisharx, @amannn, @vkarpov15, @gaelhameon, @4ortytwo, @Simply007, @styxlab, @xCloudzx, @wodCZ, @emmanuelgautier, @leosuncin, @ludder, @geritol, @vassbence, @vvo, @portenez, @arshad, @tarunama, @flybayer, @Hanaffi, @SokratisVidros, @chibicode, @kylemarshall18, and @jarrodwatts." })
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
export { toc as a, structuredData as i, frontmatter as n, next_10_2_exports as r, MDXContent as t };
