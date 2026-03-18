import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-6-DFu4q1oC.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_6_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 6 and Nextjs.org",
	"description": "Next.js 6 features zero-configuration static exports, App Component, Babel 7 and more",
	"author": [{
		"name": "Arunoda Susiripala",
		"image": "/static/team/arunoda.jpg"
	}, {
		"name": "Tim Neutkens",
		"image": "/static/team/tim.jpg"
	}],
	"date": /* @__PURE__ */ new Date(1526504644997),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-6/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "This year, the ZEIT Day Keynote started by highlighting our Open Source projects including showing the metrics of Next.js. With over 25000 stars on GitHub and over 10000 websites are already powered by it, we're incredibly amazed at its growth and love seeing the increasing amount of projects depending on it."
		},
		{
			"heading": void 0,
			"content": "We are proud today to introduce the production-ready **Next.js 6**, featuring:"
		},
		{
			"heading": void 0,
			"content": "Zero-configuration static exports. No need for `next.config.js` by default"
		},
		{
			"heading": void 0,
			"content": "`_app.js`, an extension point that enables page transitions, error boundaries and more"
		},
		{
			"heading": void 0,
			"content": "Babel 7 and Fragment syntax `<>` support"
		},
		{
			"heading": void 0,
			"content": "Extended integration test suites with a strong focus on security"
		},
		{
			"heading": void 0,
			"content": "Flow annotations in the core codebase"
		},
		{
			"heading": void 0,
			"content": "In addition to the 6.0 release, we're moving to feature Next.js on its very own homepage, nextjs.org, featuring:"
		},
		{
			"heading": void 0,
			"content": "All the Next.js documentation in one place. No more lookups of the README file on GitHub"
		},
		{
			"heading": void 0,
			"content": "Merging https\\://learnnextjs.com into https\\://nextjs.org/learn"
		},
		{
			"heading": void 0,
			"content": "A showcase of the most impressive websites built with Next.js"
		},
		{
			"heading": "static-react-applications",
			"content": "Next.js focuses on the idea of **pre-rendering** as a means to achieve high performance. Pre-rendering comes in two forms:"
		},
		{
			"heading": "static-react-applications",
			"content": "**Server rendering:** where each request triggers a render. As a result, the end-user doesn't have to wait for any JS to be downloaded to start consuming data"
		},
		{
			"heading": "static-react-applications",
			"content": "**Static rendering:** where we output static files that can be served directly without any code execution on the server"
		},
		{
			"heading": "static-react-applications",
			"content": "Until now, static exporting in Next.js was very powerful but not sufficiently easy to use. It required setting up a manual route map even when no custom routes were in use."
		},
		{
			"heading": "static-react-applications",
			"content": "With Next.js 6, we automatically generate the route map for you based on the content of your `pages/` directory. If you're not using advanced custom routing, you won't have to make any modifications to `next.config.js`. Just run:"
		},
		{
			"heading": "static-react-applications",
			"content": "For an example, check out this website deployed statically to Vercel. The websites source code is available too."
		},
		{
			"heading": "app-component",
			"content": "Next.js offers an extensibility point called `_document.js`. If defined, it lets you override the very top-level document of your application, which renders the `<html>` element."
		},
		{
			"heading": "app-component",
			"content": "`_document.js` allows for powerful extensibility, but it has some serious limitations. For example, React is not able to render `<html>` or `<body>` directly on the client side, so `_document.js` is mostly limited to the initial pre-rendering phase."
		},
		{
			"heading": "app-component",
			"content": "To enable some other powerful use cases, we're introducing `_app.js`, which is the top-level component that wraps the outside of each page."
		},
		{
			"heading": "app-component",
			"content": "> Some differences between `_document.js` and `_app.js`"
		},
		{
			"heading": "app-component",
			"content": "Let's look at some use cases that defining `_app.js` enables."
		},
		{
			"heading": "page-transitions",
			"content": "> Page transitions example: `page-transitions-app-next.vercel.app` by Xavier Cazalot (Source)"
		},
		{
			"heading": "page-transitions",
			"content": "In this example, each page can be independently accessed, pre-rendered and lazy-loaded. However, when we transition on the client side, smooth animations are possible."
		},
		{
			"heading": "better-apollo-and-redux-integration",
			"content": "We already had numerous examples of integrating data and state management frameworks like Apollo and Redux."
		},
		{
			"heading": "better-apollo-and-redux-integration",
			"content": "With `_app.js`, however, it's now even simpler to include these. Here are a few examples:"
		},
		{
			"heading": "better-apollo-and-redux-integration",
			"content": "Apollo (source code)"
		},
		{
			"heading": "better-apollo-and-redux-integration",
			"content": "Redux (source code)"
		},
		{
			"heading": "better-error-handling",
			"content": "React offers a component method called `componentDidCatch` which enables you to capture and handle exceptions that bubble up from nested components on the client side."
		},
		{
			"heading": "better-error-handling",
			"content": "In many cases, due to the unexpected nature of these exceptions, you might want to handle all of them equally at the top level."
		},
		{
			"heading": "better-error-handling",
			"content": "`_app.js` is, therefore, a good place to define that `componentDidCatch` logic. Here's an example of error handling boundaries in action (source code)"
		},
		{
			"heading": "babel-7",
			"content": "We have upgraded Babel to its latest version: 7. With it comes some great new features and improvements."
		},
		{
			"heading": "jsx-fragments",
			"content": "React 16.2 introduced the `Fragment` API, which allows you to express a list of elements without having to wrap them in an arbitrary HTML element like `<div>`:"
		},
		{
			"heading": "jsx-fragments",
			"content": "Writing this can be tedious, with Next.js 6 you can use the new JSX fragment syntax to facilitate creating fragments:"
		},
		{
			"heading": "nested-babelrc",
			"content": "If you have a directory nested in your Next.js applications that require a different Babel configuration, it's now possible to include a scoped `.babelrc` file specifically in that directory"
		},
		{
			"heading": "first-class-typescript-support",
			"content": "When we announced Universal webpack, we pointed out it was possible to use TypeScript via ts-loader, as we now run webpack both on the server and the client."
		},
		{
			"heading": "first-class-typescript-support",
			"content": "Babel 7 features built-in support for TypeScript (previously only Flow was supported by Babel)."
		},
		{
			"heading": "first-class-typescript-support",
			"content": "To use it, just install the latest version of @zeit/next-typescript or check out this example."
		},
		{
			"heading": "nextjsorg",
			"content": "We are very happy to introduce the new nextjs.org, built by Next.js core contributor Jimmy Moon."
		},
		{
			"heading": "nextjsorg",
			"content": "To start off, we highlight a sped-up video that shows you how to create a PWA with server-rendering from scratch in 5 minutes:"
		},
		{
			"heading": "nextjsorg",
			"content": "> The opening video of `nextjs.org`"
		},
		{
			"heading": "one-place-for-our-documentation",
			"content": "When you need to look up something quickly, just head to nextjs.org/docs:"
		},
		{
			"heading": "one-place-for-our-documentation",
			"content": "> The documentation will always reflect the latest stable version"
		},
		{
			"heading": "learn-step-by-step",
			"content": "Previously, we would recommend beginners to head to https\\://learnnextjs.com for a step-by-step guide (with quizzes!) on how to get started with Next.js"
		},
		{
			"heading": "learn-step-by-step",
			"content": "Now we've integrated it directly into nextjs.org/learn to make it even easier start learning:"
		},
		{
			"heading": "learn-step-by-step",
			"content": "The easiest way to start learning Next.js"
		},
		{
			"heading": "get-inspired",
			"content": "We are now featuring a showcase of some nice-looking websites and applications built on Next.js. Head to nextjs.org/showcase to get inspired, or submit your own!"
		},
		{
			"heading": "get-inspired",
			"content": "> Showcase of projects built with Next.js"
		}
	],
	"headings": [
		{
			"id": "static-react-applications",
			"content": "Static React Applications"
		},
		{
			"id": "app-component",
			"content": "App Component"
		},
		{
			"id": "page-transitions",
			"content": "Page Transitions"
		},
		{
			"id": "better-apollo-and-redux-integration",
			"content": "Better Apollo and Redux Integration"
		},
		{
			"id": "better-error-handling",
			"content": "Better Error Handling"
		},
		{
			"id": "babel-7",
			"content": "Babel 7"
		},
		{
			"id": "jsx-fragments",
			"content": "JSX Fragments"
		},
		{
			"id": "nested-babelrc",
			"content": "Nested .babelrc"
		},
		{
			"id": "first-class-typescript-support",
			"content": "First-class TypeScript Support"
		},
		{
			"id": "nextjsorg",
			"content": "Nextjs.org"
		},
		{
			"id": "one-place-for-our-documentation",
			"content": "One place for our documentation"
		},
		{
			"id": "learn-step-by-step",
			"content": "Learn, step-by-step"
		},
		{
			"id": "get-inspired",
			"content": "Get Inspired"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#static-react-applications",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#static-react-applications",
			children: "Static React Applications"
		}) })
	},
	{
		depth: 2,
		url: "#app-component",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#app-component",
			children: "App Component"
		}) })
	},
	{
		depth: 3,
		url: "#page-transitions",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#page-transitions",
			children: "Page Transitions"
		}) })
	},
	{
		depth: 3,
		url: "#better-apollo-and-redux-integration",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#better-apollo-and-redux-integration",
			children: "Better Apollo and Redux Integration"
		}) })
	},
	{
		depth: 3,
		url: "#better-error-handling",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#better-error-handling",
			children: "Better Error Handling"
		}) })
	},
	{
		depth: 2,
		url: "#babel-7",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#babel-7",
			children: "Babel 7"
		}) })
	},
	{
		depth: 3,
		url: "#jsx-fragments",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#jsx-fragments",
			children: "JSX Fragments"
		}) })
	},
	{
		depth: 3,
		url: "#nested-babelrc",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#nested-babelrc",
			children: "Nested .babelrc"
		}) })
	},
	{
		depth: 3,
		url: "#first-class-typescript-support",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#first-class-typescript-support",
			children: "First-class TypeScript Support"
		}) })
	},
	{
		depth: 2,
		url: "#nextjsorg",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#nextjsorg",
			children: "Nextjs.org"
		}) })
	},
	{
		depth: 3,
		url: "#one-place-for-our-documentation",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#one-place-for-our-documentation",
			children: "One place for our documentation"
		}) })
	},
	{
		depth: 3,
		url: "#learn-step-by-step",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#learn-step-by-step",
			children: "Learn, step-by-step"
		}) })
	},
	{
		depth: 3,
		url: "#get-inspired",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#get-inspired",
			children: "Get Inspired"
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This year, the ZEIT Day Keynote started by highlighting our Open Source projects including showing the metrics of Next.js. With over 25000 stars on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js",
				children: "GitHub"
			}),
			" and over 10000 websites are already powered by it, we're incredibly amazed at its growth and love seeing the increasing amount of projects depending on it."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We are proud today to introduce the production-ready ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Next.js 6" }),
			", featuring:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Zero-configuration static exports. No need for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
				" by default"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "_app.js" }), ", an extension point that enables page transitions, error boundaries and more"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Babel 7 and Fragment syntax ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<>" }),
				" support"
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Extended integration test suites with a strong focus on security" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Flow annotations in the core codebase" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In addition to the 6.0 release, we're moving to feature Next.js on its very own homepage, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org",
				children: "nextjs.org"
			}),
			", featuring:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "All the Next.js documentation in one place. No more lookups of the README file on GitHub" }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Merging ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://learnnextjs.com",
					children: "https://learnnextjs.com"
				}),
				" into ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nextjs.org/learn",
					children: "https://nextjs.org/learn"
				})
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "A showcase of the most impressive websites built with Next.js" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "static-react-applications",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#static-react-applications",
				children: "Static React Applications"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js focuses on the idea of ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "pre-rendering" }),
			" as a means to achieve high performance. Pre-rendering comes in two forms:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Server rendering:" }), " where each request triggers a render. As a result, the end-user doesn't have to wait for any JS to be downloaded to start consuming data"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Static rendering:" }), " where we output static files that can be served directly without any code execution on the server"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Until now, static exporting in Next.js was very powerful but not sufficiently easy to use. It required setting up ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs#static-html-export",
				children: "a manual route map"
			}),
			" even when no custom routes were in use."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With Next.js 6, we automatically generate the route map for you based on the content of your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/" }),
			" directory. If you're not using advanced custom routing, you won't have to make any modifications to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			". Just run:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "next build" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "next export" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For an example, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://out-khozebgbnl.now.sh/",
				children: "check out this website"
			}),
			" deployed statically to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com",
				children: "Vercel"
			}),
			". The websites ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/tree/canary/examples/basic-css",
				children: "source code"
			}),
			" is available too."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "app-component",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#app-component",
				children: "App Component"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js offers an extensibility point called ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js#custom-document",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "_document.js" })
			}),
			". If defined, it lets you override the very top-level document of your application, which renders the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<html>" }),
			" element."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "_document.js" }),
			" allows for powerful extensibility, but it has some serious limitations. For example, React is not able to render ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<html>" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<body>" }),
			" directly on the client side, so ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "_document.js" }),
			" is mostly limited to the initial pre-rendering phase."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To enable some other powerful use cases, we're introducing ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "_app.js" }),
			", which is the top-level component that wraps the outside of each page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-6/document-app-differences.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Some differences between ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "_document.js" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "_app.js" })
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Let's look at some use cases that defining ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "_app.js" }),
			" enables."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "page-transitions",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#page-transitions",
				children: "Page Transitions"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-6/page-transitions.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Page transitions example: ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://page-transitions-app-next.vercel.app",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "page-transitions-app-next.vercel.app" })
				}),
				" by ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/xavczen%22",
					children: "Xavier Cazalot"
				}),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/xavczen/nextjs-page-transitions",
					children: "Source"
				}),
				")"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In this example, each page can be independently accessed, pre-rendered and lazy-loaded. However, when we transition on the client side, smooth animations are possible." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "better-apollo-and-redux-integration",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#better-apollo-and-redux-integration",
				children: "Better Apollo and Redux Integration"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We already had ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/tree/canary/examples",
				children: "numerous examples"
			}),
			" of integrating data and state management frameworks like Apollo and Redux."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "_app.js" }),
			", however, it's now even simpler to include these. Here are a few examples:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://apollo-app-next.vercel.app",
					children: "Apollo"
				}),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples/with-apollo",
					children: "source code"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://redux-app-next.vercel.app",
					children: "Redux"
				}),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples/with-redux",
					children: "source code"
				}),
				")"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "better-error-handling",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#better-error-handling",
				children: "Better Error Handling"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"React offers a component method called ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "componentDidCatch" }),
			" which enables you to capture and handle exceptions that bubble up from nested components on the client side."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In many cases, due to the unexpected nature of these exceptions, you might want to handle all of them equally at the top level." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "_app.js" }),
			" is, therefore, a good place to define that ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "componentDidCatch" }),
			" logic. Here's an ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://error-app-next.vercel.app",
				children: "example"
			}),
			" of error handling boundaries in action (",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/tree/canary/examples/with-componentdidcatch",
				children: "source code"
			}),
			")"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "babel-7",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#babel-7",
				children: "Babel 7"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We have upgraded Babel to its latest version: 7. With it comes some great new features and improvements." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "jsx-fragments",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#jsx-fragments",
				children: "JSX Fragments"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"React 16.2 introduced the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Fragment" }),
			" API, which allows you to express a list of elements without having to wrap them in an arbitrary HTML element like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<div>" }),
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "render() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return <React.Fragment>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <A />," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <B />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  </React.Fragment>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Writing this can be tedious, with Next.js 6 you can use the new JSX fragment syntax to facilitate creating fragments:" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "render() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return <>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <A />," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <B />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  </>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "nested-babelrc",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nested-babelrc",
				children: "Nested .babelrc"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you have a directory nested in your Next.js applications that require a different Babel configuration, it's now possible to include a scoped ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".babelrc" }),
			" file specifically in that directory"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "src/" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  .babelrc      # General .babelrc" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  components/" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    i18n/" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      .babelrc  # This .babelrc only applies to this directory" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "first-class-typescript-support",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#first-class-typescript-support",
				children: "First-class TypeScript Support"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When we announced ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-5",
				children: "Universal webpack"
			}),
			", we pointed out it was possible to use TypeScript via ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/TypeStrong/ts-loader",
				children: "ts-loader"
			}),
			", as we now run webpack both on the server and the client."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Babel 7 features built-in support for TypeScript (previously only Flow was supported by Babel)." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To use it, just install the latest version of ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next-plugins/tree/master/packages/next-typescript/#readme",
				children: "@zeit/next-typescript"
			}),
			" or check out ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/tree/canary/examples/with-typescript",
				children: "this example"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nextjsorg",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nextjsorg",
				children: "Nextjs.org"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We are very happy to introduce the new ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org",
				children: "nextjs.org"
			}),
			", built by Next.js core contributor ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://twitter.com/ragingwind",
				children: "Jimmy Moon"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To start off, we highlight a sped-up video that shows you how to create a PWA with server-rendering from scratch in 5 minutes:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: ["The opening video of ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "nextjs.org" })
			})] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "one-place-for-our-documentation",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#one-place-for-our-documentation",
				children: "One place for our documentation"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When you need to look up something quickly, just head to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs",
				children: "nextjs.org/docs"
			}),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-6/docs.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "The documentation will always reflect the latest stable version" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "learn-step-by-step",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#learn-step-by-step",
				children: "Learn, step-by-step"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Previously, we would recommend beginners to head to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://learnnextjs.com",
				children: "https://learnnextjs.com"
			}),
			" for a step-by-step guide (with quizzes!) on how to get started with Next.js"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Now we've integrated it directly into ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/learn",
				children: "nextjs.org/learn"
			}),
			" to make it even easier start learning:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-6/learn.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The easiest way to start learning Next.js" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "get-inspired",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#get-inspired",
				children: "Get Inspired"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We are now featuring a showcase of some nice-looking websites and applications built on Next.js. Head to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/showcase",
				children: "nextjs.org/showcase"
			}),
			" to get inspired, or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/issues/new?template=4.Nextjs.org_showcase.md",
				children: "submit your own"
			}),
			"!"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-6/showcase.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Showcase of projects built with Next.js" }),
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
export { toc as a, structuredData as i, frontmatter as n, next_6_exports as r, MDXContent as t };
