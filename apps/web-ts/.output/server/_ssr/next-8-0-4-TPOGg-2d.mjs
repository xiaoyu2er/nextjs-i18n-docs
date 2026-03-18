import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-8-0-4-TPOGg-2d.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_8_0_4_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 8.0.4",
	"description": "Next.js 8.0.4 introduces build performance improvements, smaller bundles, stonger defaults, and more.",
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
			"name": "Joe Haddad",
			"image": "/static/team/timer.jpg"
		},
		{
			"name": "Luis Alvarez",
			"image": "/static/team/lfades.jpg"
		},
		{
			"name": "Tim Neutkens",
			"image": "/static/team/tim.jpg"
		}
	],
	"date": /* @__PURE__ */ new Date(1554168945219),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-8-0-4/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "We are happy to introduce the production-ready Next.js 8.0.4:"
		},
		{
			"heading": void 0,
			"content": "Build performance improvements"
		},
		{
			"heading": void 0,
			"content": "Deterministic builds"
		},
		{
			"heading": void 0,
			"content": "Smaller client runtime"
		},
		{
			"heading": void 0,
			"content": "Smaller serverless functions"
		},
		{
			"heading": void 0,
			"content": "Default viewport tag"
		},
		{
			"heading": void 0,
			"content": "Learning guide improvements"
		},
		{
			"heading": void 0,
			"content": "As always, we have strived to ensure all these benefits are **completely backwards compatible**. For most Next.js applications, all you need to do is run:"
		},
		{
			"heading": "build-performance",
			"content": "Next.js builds are now more deterministic, meaning that if code is not changed the build output would hold the same result every time."
		},
		{
			"heading": "build-performance",
			"content": "This allows for more work done by the build process to be cached, which results in faster rebuilds of production code after the first build."
		},
		{
			"heading": "build-performance",
			"content": "Our measurements revealed that a significant amount of build time is spent minifying JavaScript, because the build output is now more deterministic the chances of the minified file already being in the cache are larger."
		},
		{
			"heading": "build-performance",
			"content": "Users deploying to Vercel will experience these caching improvements automatically."
		},
		{
			"heading": "build-performance",
			"content": "We've simplified our server-side `next/dynamic` manifest to only include modules that are loaded asynchronously. This simplified manifest is faster to compute and produces less JavaScript."
		},
		{
			"heading": "build-performance",
			"content": "CircleCI users should notice faster build times. Previously, workers were over-scheduled due to the CircleCI environment not accurately reflecting the amount of available CPUs. Next.js now detects CircleCI and sets an appropriate number of CPUs based on the resources available."
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "Next.js now generates **5.58KB less** client-side JavaScript and has a smaller HTTP payload than the previous version."
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "`withRouter` no longer depends on `hoist-non-react-statics`, reducing the bundle size by **3KB**. `withRouter` will still hoist `getInitialProps`, but not other static properties."
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "The `next/babel` preset has been optimized to produce *leaner* and *faster* JavaScript."
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "The `X-Powered-By` header has been removed, reducing the HTTP payload size. We surveyed the community and found the header was often disabled in production, so we've decided to remove it. This also means that the `poweredByHeader` can be removed from your `next.config.js` if the option was enabled in your project."
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "We have made many optimizations in the Next.js dependency tree and overall codebase, in doing so we were able to make every Serverless Function **44KB (5.44KB gzip) smaller**."
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "Serverless Function size directly affect Serverless bootup performance, smaller functions mean faster bootup."
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "8.0"
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "8.0.4"
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "delta"
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "Serverless page size"
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "259 KB"
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "215 KB"
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "**17%** *smaller*"
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "Serverless page size (gzip)"
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "62.3 KB"
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "56.8 KB"
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "**9%** *smaller*"
		},
		{
			"heading": "smaller-runtime-footprint",
			"content": "After the release of Next.js 8 we received reports from a small number of users having trouble importing React components outside of Next.js, for example in their test suite. This was caused by imports to `next` being rewritten to the correct file inside the Next.js codebase, however, this optimization was applied for all users of the `next/babel` preset. The optimization has been moved into the Next.js build process itself so it will no longer conflict user's babel setups."
		},
		{
			"heading": "default-viewport-meta-tag",
			"content": "One of Next.js' goals is to provide the best possible defaults for writing web applications. In an effort to reduce the amount of setup one has to do when implementing CSS media queries in Next.js."
		},
		{
			"heading": "default-viewport-meta-tag",
			"content": "By default browsers don't handle CSS `@media` queries and zooming the way you would expect them to work, which can lead to unexpected inconsistencies when writing CSS `@media` queries."
		},
		{
			"heading": "default-viewport-meta-tag",
			"content": "In nearly all cases Next.js users would add a `viewport` meta tag to their application to solve these inconsistencies."
		},
		{
			"heading": "default-viewport-meta-tag",
			"content": "Starting from version 8.0.4 this `viewport` tag is no longer needed in most cases. If the `viewport` is not set by the application a default viewport will be applied:"
		},
		{
			"heading": "default-viewport-meta-tag",
			"content": "The viewport tag can still be overwritten by using `next/head`:"
		},
		{
			"heading": "default-viewport-meta-tag",
			"content": "Thanks to Jason Miller for collaborating on and implementing this change."
		},
		{
			"heading": "new-nextmdx-plugin",
			"content": "MDX lets you write JSX inside your Markdown documents. You can use regular markdown syntax to write content and import React components to enhance the document with interactive and dynamic content."
		},
		{
			"heading": "new-nextmdx-plugin",
			"content": "The plugin that provides MDX support for Next.js, `@zeit/next-mdx`, has been moved to Next.js GitHub repository and is now available as `@next/mdx`."
		},
		{
			"heading": "new-nextmdx-plugin",
			"content": "Installation:"
		},
		{
			"heading": "new-nextmdx-plugin",
			"content": "To make it available to your Next.js app, create a `next.config.js` file and include:"
		},
		{
			"heading": "new-nextmdx-plugin",
			"content": "Over time more Next.js plugins will be moved into the Next.js repository so that they are released together with Next.js core and are tested by the Next.js test suite. This way we can ensure that hot module replacement, production building and other features work well with plugins."
		},
		{
			"heading": "learning-guide-improvements",
			"content": "Next.js Learn is a step-by-step guide to learn Next.js, complete with quizzes and examples."
		},
		{
			"heading": "learning-guide-improvements",
			"content": "The website has recently been rebuilt using MDX, which makes contributing easier than ever. We welcome anyone to contribute to the learn website!"
		},
		{
			"heading": "learning-guide-improvements",
			"content": "The website has also been upgraded to use the Next.js serverless target, which was introduced in Next.js 8, ensuring the website scales and is fast for users all over the world."
		},
		{
			"heading": "learning-guide-improvements",
			"content": "We received a lot of feedback from the community regarding content improvements, and we have been acting on it over the past few weeks. Next.js Learn now has updated examples and more details in each section to make the instructions easier to understand!"
		},
		{
			"heading": "learning-guide-improvements",
			"content": "The Next.js Learn Website"
		},
		{
			"heading": "contributions",
			"content": "We’re very excited to see the continued growth in Next.js adoption."
		},
		{
			"heading": "contributions",
			"content": "We’ve had over &#x2A;*660 contributors.**"
		},
		{
			"heading": "contributions",
			"content": "On GitHub, the project has been starred over **36,150 times**."
		},
		{
			"heading": "contributions",
			"content": "Over **2,950 pull requests** have been submitted since the first release."
		},
		{
			"heading": "contributions",
			"content": "We would like to thank everyone who has contributed to this Next.js release. Whether it’s contributing to the core or expanding and improving our ever growing examples directory, we appreciate all contributions."
		},
		{
			"heading": "contributions",
			"content": "If you are looking to start contributing to Next.js, issues with the good first issue or help wanted label are a good place to start."
		},
		{
			"heading": "community",
			"content": "The Next.js community has grown to over **6,000 members**."
		},
		{
			"heading": "community",
			"content": "GitHub discussions is a place where you can chat about Next.js, get advice on how to solve problems, and help out other community members with your knowledge of Next.js."
		},
		{
			"heading": "community",
			"content": "Join the community on GitHub!"
		}
	],
	"headings": [
		{
			"id": "build-performance",
			"content": "Build Performance"
		},
		{
			"id": "smaller-runtime-footprint",
			"content": "Smaller Runtime Footprint"
		},
		{
			"id": "default-viewport-meta-tag",
			"content": "Default Viewport Meta Tag"
		},
		{
			"id": "new-nextmdx-plugin",
			"content": "New `@next/mdx` Plugin"
		},
		{
			"id": "learning-guide-improvements",
			"content": "Learning Guide Improvements"
		},
		{
			"id": "contributions",
			"content": "Contributions"
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
		url: "#build-performance",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#build-performance",
			children: "Build Performance"
		}) })
	},
	{
		depth: 2,
		url: "#smaller-runtime-footprint",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#smaller-runtime-footprint",
			children: "Smaller Runtime Footprint"
		}) })
	},
	{
		depth: 2,
		url: "#default-viewport-meta-tag",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#default-viewport-meta-tag",
			children: "Default Viewport Meta Tag"
		}) })
	},
	{
		depth: 2,
		url: "#new-nextmdx-plugin",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#new-nextmdx-plugin",
			children: [
				"New ",
				(0, import_jsx_runtime.jsx)("code", { children: "@next/mdx" }),
				" Plugin"
			]
		}) })
	},
	{
		depth: 2,
		url: "#learning-guide-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#learning-guide-improvements",
			children: "Learning Guide Improvements"
		}) })
	},
	{
		depth: 2,
		url: "#contributions",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#contributions",
			children: "Contributions"
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
		em: "em",
		h2: "h2",
		img: "img",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We are happy to introduce the production-ready Next.js 8.0.4:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#build-performance",
				children: "Build performance improvements"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#build-performance",
				children: "Deterministic builds"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#smaller-runtime-footprint",
				children: "Smaller client runtime"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#smaller-runtime-footprint",
				children: "Smaller serverless functions"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#default-viewport-meta-tag",
				children: "Default viewport tag"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#learning-guide-improvements",
				children: "Learning guide improvements"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As always, we have strived to ensure all these benefits are ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "completely backwards compatible" }),
			". For most Next.js applications, all you need to do is run:"
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
						children: " i"
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
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "build-performance",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#build-performance",
				children: "Build Performance"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js builds are now more deterministic, meaning that if code is not changed the build output would hold the same result every time." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This allows for more work done by the build process to be cached, which results in faster rebuilds of production code after the first build." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Our measurements revealed that a significant amount of build time is spent minifying JavaScript, because the build output is now more deterministic the chances of the minified file already being in the cache are larger." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Users ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/guides/deploying-nextjs-with-vercel",
				children: "deploying to Vercel"
			}),
			" will experience these caching improvements automatically."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We've simplified our server-side ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/dynamic" }),
			" manifest to only include modules that are loaded asynchronously. This simplified manifest is faster to compute and produces less JavaScript."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "CircleCI users should notice faster build times. Previously, workers were over-scheduled due to the CircleCI environment not accurately reflecting the amount of available CPUs. Next.js now detects CircleCI and sets an appropriate number of CPUs based on the resources available." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "smaller-runtime-footprint",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#smaller-runtime-footprint",
				children: "Smaller Runtime Footprint"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js now generates ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "5.58KB less" }),
			" client-side JavaScript and has a smaller HTTP payload than the previous version."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs#using-a-higher-order-component",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "withRouter" })
			}),
			" no longer depends on ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "hoist-non-react-statics" }),
			", reducing the bundle size by ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "3KB" }),
			". ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "withRouter" }),
			" will still hoist ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getInitialProps" }),
			", but not other static properties."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/babel" }),
			" preset has been optimized to produce ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "leaner" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "faster" }),
			" JavaScript."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "X-Powered-By" }),
			" header has been removed, reducing the HTTP payload size. We surveyed the community and found the header was often disabled in production, so we've decided to remove it. This also means that the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "poweredByHeader" }),
			" can be removed from your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			" if the option was enabled in your project."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We have made many optimizations in the Next.js dependency tree and overall codebase, in doing so we were able to make every Serverless Function ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "44KB (5.44KB gzip) smaller" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Serverless Function size directly affect Serverless bootup performance, smaller functions mean faster bootup." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, {}),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "8.0" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "8.0.4" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "delta" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.td, { children: "Serverless page size" }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: "259 KB" }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: "215 KB" }),
			(0, import_jsx_runtime.jsxs)(_components.td, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "17%" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "smaller" })
			] })
		] }), (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.td, { children: "Serverless page size (gzip)" }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: "62.3 KB" }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: "56.8 KB" }),
			(0, import_jsx_runtime.jsxs)(_components.td, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "9%" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "smaller" })
			] })
		] })] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"After the release of Next.js 8 we received reports from a small number of users having trouble importing React components outside of Next.js, for example in their test suite. This was caused by imports to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next" }),
			" being rewritten to the correct file inside the Next.js codebase, however, this optimization was applied for all users of the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/babel" }),
			" preset. The optimization has been moved into the Next.js build process itself so it will no longer conflict user's babel setups."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "default-viewport-meta-tag",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#default-viewport-meta-tag",
				children: "Default Viewport Meta Tag"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "One of Next.js' goals is to provide the best possible defaults for writing web applications. In an effort to reduce the amount of setup one has to do when implementing CSS media queries in Next.js." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"By default browsers don't handle CSS ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@media" }),
			" queries and zooming the way you would expect them to work, which can lead to unexpected inconsistencies when writing CSS ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@media" }),
			" queries."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In nearly all cases Next.js users would add a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "viewport" }),
			" meta tag to their application to solve these inconsistencies."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Starting from version 8.0.4 this ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "viewport" }),
			" tag is no longer needed in most cases. If the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "viewport" }),
			" is not set by the application a default viewport will be applied:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<meta" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  name=\"viewport\"" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  content=\"width=device-width,minimum-scale=1,initial-scale=1\"" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "/>" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The viewport tag can still be overwritten by using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/head" }),
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
							children: " Head "
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
							children: " 'next/head'"
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
							children: "function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " HomePage"
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
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <>"
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
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Head"
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
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "        <"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#22863A",
							"--shiki-dark": "#85E89D"
						},
						children: "meta"
					})]
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
							children: "          name"
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
							children: "\"viewport\""
						})
					]
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
							children: "          content"
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
							children: "\"width=device-width,minimum-scale=0.5,initial-scale=1\""
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
						children: "        />"
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
							children: "      </"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Head"
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
						children: "    </>"
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
							children: " HomePage;"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Thanks to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://twitter.com/_developit",
				children: "Jason Miller"
			}),
			" for collaborating on and implementing this change."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "new-nextmdx-plugin",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#new-nextmdx-plugin",
				children: [
					"New ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "@next/mdx" }),
					" Plugin"
				]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://mdxjs.com/",
			children: "MDX"
		}), " lets you write JSX inside your Markdown documents. You can use regular markdown syntax to write content and import React components to enhance the document with interactive and dynamic content."] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The plugin that provides MDX support for Next.js, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@zeit/next-mdx" }),
			", has been moved to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/tree/canary/packages/next-mdx",
				children: "Next.js GitHub repository"
			}),
			" and is now available as ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.npmjs.com/package/@next/mdx",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "@next/mdx" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Installation:" }),
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
						children: " i"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " @next/mdx"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " @mdx-js/loader"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To make it available to your Next.js app, create a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			" file and include:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "const withMDX = require('@next/mdx')();" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "module.exports = withMDX();" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Over time more Next.js plugins will be moved into the Next.js repository so that they are released together with Next.js core and are tested by the Next.js test suite. This way we can ensure that hot module replacement, production building and other features work well with plugins." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "learning-guide-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#learning-guide-improvements",
				children: "Learning Guide Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://nextjs.org/learn",
			children: "Next.js Learn"
		}), " is a step-by-step guide to learn Next.js, complete with quizzes and examples."] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The website has recently been rebuilt using MDX, which makes contributing easier than ever. We welcome anyone to contribute to the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next-site/labels/learn",
				children: "learn website"
			}),
			"!"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The website has also been upgraded to use the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs#serverless-deployment",
				children: "Next.js serverless target"
			}),
			", which was introduced in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/blog/next-8#serverless-nextjs",
				children: "Next.js 8"
			}),
			", ensuring the website scales and is fast for users all over the world."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We received a lot of feedback from the community regarding content improvements, and we have been acting on it over the past few weeks. ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/learn",
				children: "Next.js Learn"
			}),
			" now has updated examples and more details in each section to make the instructions easier to understand!"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-8-0-4/next-learn.png",
			alt: "The Next.js Learn Website"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Next.js Learn Website" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "contributions",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#contributions",
				children: "Contributions"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We’re very excited to see the continued growth in Next.js adoption." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["We’ve had over ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "660 contributors." })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"On GitHub, the project has been starred over ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "36,150 times" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Over ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "2,950 pull requests" }),
				" have been submitted since the first release."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We would like to thank everyone who has contributed to this Next.js release. Whether it’s contributing to the core or expanding and improving our ever growing ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/tree/canary/examples",
				children: "examples directory"
			}),
			", we appreciate all contributions."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you are looking to start contributing to Next.js, issues with the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22good+first+issue%22",
				children: "good first issue"
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22help+wanted%22",
				children: "help wanted"
			}),
			" label are a good place to start."
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
			"The Next.js community has grown to over ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "6,000 members" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "GitHub discussions is a place where you can chat about Next.js, get advice on how to solve problems, and help out other community members with your knowledge of Next.js." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://github.com/vercel/next.js/discussions",
			children: "Join the community on GitHub!"
		}) })
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
export { toc as a, structuredData as i, frontmatter as n, next_8_0_4_exports as r, MDXContent as t };
