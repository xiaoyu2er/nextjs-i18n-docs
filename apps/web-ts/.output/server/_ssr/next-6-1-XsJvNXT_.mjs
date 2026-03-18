import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-6-1-XsJvNXT_.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_6_1_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 6.1",
	"description": "Next.js 6.1 features improved reliability and consistency in development",
	"author": [{
		"name": "Tim Neutkens",
		"image": "/static/team/tim.jpg"
	}],
	"date": /* @__PURE__ */ new Date(1530129015699),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-6-1/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "We are proud today to introduce the production-ready **Next.js 6.1**, featuring:"
		},
		{
			"heading": void 0,
			"content": "Increased hot reloading reliability"
		},
		{
			"heading": void 0,
			"content": "Codebase improvements"
		},
		{
			"heading": void 0,
			"content": "Next.js codemods"
		},
		{
			"heading": void 0,
			"content": "In addition to the Next.js 6.1 release, we're excited to announce that nextjs.org is now open source"
		},
		{
			"heading": "improved-hot-reloading-reliability",
			"content": "In versions before Next.js 6.1 Next.js implemented `react-hot-loader` on behalf of the user. This library keeps React state between hot reloads."
		},
		{
			"heading": "improved-hot-reloading-reliability",
			"content": "In doing so `react-hot-loader` adds a few non-standard behaviors to React, for example, it will ignore `shouldComponentUpdate` and the element `type` ended up being a proxy component instead of the actual React component."
		},
		{
			"heading": "improved-hot-reloading-reliability",
			"content": "To make sure Next.js is as close to default React as possible we have removed `react-hot-loader` as a dependency, this makes sure development and production mode are closer to each other in behavior. Do note that Next.js's hot reloading feature was **not** removed, hot reloading has always been handled by Next.js internally."
		},
		{
			"heading": "hot-reloading-typescript-and-other-custom-extensions",
			"content": "By default, Next.js automatically looks for any `.js` or `.jsx` file inside the `pages` directory to define routes."
		},
		{
			"heading": "hot-reloading-typescript-and-other-custom-extensions",
			"content": "With the introduction of universal webpack in Next.js 5 came the possibility to have compile-to-js top-level pages. A good example is Typescript, which uses `.ts` and `.tsx`."
		},
		{
			"heading": "hot-reloading-typescript-and-other-custom-extensions",
			"content": "`pageExtensions` is a configuration key in `next.config.js` aimed at allowing Next.js plugins to define extensions that should be considered pages. For example `@zeit/next-typescript` defines `.ts` and `.tsx` or `@zeit/next-mdx` which documents how to have top level `.mdx` pages."
		},
		{
			"heading": "hot-reloading-typescript-and-other-custom-extensions",
			"content": "Previously when implementing `pageExtensions` Next.js plugins were required to implement the `hot-self-accept-loader` that is used for hot reloading. This is no longer required, when adding an extension to `pageExtensions` the `hot-self-accept-loader` is automatically applied."
		},
		{
			"heading": "codebase-improvements",
			"content": "Recently we've been paving the way for upcoming features, this involved some under the hood changes that will improve code quality in the long run."
		},
		{
			"heading": "codebase-improvements",
			"content": "One of these changes is that the `server/build` directory is moved to the top level `build`. This makes the webpack and babel configuration easier to find for new contributors."
		},
		{
			"heading": "codebase-improvements",
			"content": "We have also been focusing on adding Flow types throughout the codebase."
		},
		{
			"heading": "codebase-improvements",
			"content": "A change we've made that is more visible to users is that `.next/dist` has been renamed to `.next/server`. The `.next` directory that holds build output. For example when you run `next build` the result will be stored in `.next`."
		},
		{
			"heading": "codebase-improvements",
			"content": "> The pre-rendering files are now in the `server` directory"
		},
		{
			"heading": "codebase-improvements",
			"content": "Occurrences of the same constants have been moved into a common file: `constants.js`"
		},
		{
			"heading": "nextjs-codemods",
			"content": "When Next.js 6.0 was released the magically injected `url` property on page components was deprecated. The reason `url` is going away is that we want to make things very predictable and explicit. Having a magical url property coming out of nowhere doesn't aid that goal."
		},
		{
			"heading": "nextjs-codemods",
			"content": "The recommended way to get the same properties the `url` property had is using `withRouter`:"
		},
		{
			"heading": "nextjs-codemods",
			"content": "> How the pathname was accessed in versions before Next.js 6 using `url`"
		},
		{
			"heading": "nextjs-codemods",
			"content": "> How the pathname should be accessed in versions after Next.js 6 using `router` injected by `withRouter`"
		},
		{
			"heading": "nextjs-codemods",
			"content": "As we are committed to keeping the upgrade path for Next.js applications simple, so we set out to create an easy way of upgrading usages of `url` to `withRouter`."
		},
		{
			"heading": "nextjs-codemods",
			"content": "The result of this effort is next‑codemod, a library of codemods that make upgrading specific deprecated features to their new usage as easy as running one command."
		},
		{
			"heading": "nextjs-codemods",
			"content": "The first codemod we're providing is `url-to-withrouter` which automatically transforms many cases where `url` was used to `withRouter`."
		},
		{
			"heading": "nextjs-codemods",
			"content": "> This will transform uses of `url` to `withRouter`."
		},
		{
			"heading": "nextjs-codemods",
			"content": "Read more here"
		},
		{
			"heading": "contributing-to-nextjs",
			"content": "The Next.js community is growing, with more than 450 contributors that already landed at least 1 commit into the Next.js core or examples."
		},
		{
			"heading": "contributing-to-nextjs",
			"content": "There's many ways to contribute back to Next.js:"
		},
		{
			"heading": "contributing-to-nextjs",
			"content": "Joining the community and giving advice on GitHub"
		},
		{
			"heading": "contributing-to-nextjs",
			"content": "Contributing examples of common use cases: examples directory"
		},
		{
			"heading": "contributing-to-nextjs",
			"content": "Checking the good first issue and help wanted labels on GitHub"
		},
		{
			"heading": "contributing-to-nextjs",
			"content": "> There's 30 open issues with the good first issue label. Giving new contributors the opportunity to contribute."
		},
		{
			"heading": "nextjsorg-open-source",
			"content": "We're excited to announce that nextjs.org is now open source so that it can serve as a reference Nextjs implementation and issues/improvements can be filed directly on the project."
		},
		{
			"heading": "future",
			"content": "We've been working on a few new features to increase reliability and performance, here are a few highlights:"
		},
		{
			"heading": "webpack-4",
			"content": "Webpack 4 brings a lot of improvements: better code-splitting, less configuration is needed by default, and most importantly faster build times. In initial tests we did on an app with over 200 pages `next build` went from taking 100 seconds to 70 seconds on average. On a second run (with caches) a `next build` took 21 seconds on average."
		},
		{
			"heading": "serverless-nextjs",
			"content": "We are incrementally making changes to prepare to move `next start` out into its own package: `next-server`. This package will be heavily optimized for install size and bootup time. These optimizations are needed for the \"serverless\" use case where a new instance of the app is executed every request or every few requests. Meaning the \"cold start\" of an application has to be optimized to be as fast as possible."
		}
	],
	"headings": [
		{
			"id": "improved-hot-reloading-reliability",
			"content": "Improved hot reloading reliability"
		},
		{
			"id": "hot-reloading-typescript-and-other-custom-extensions",
			"content": "Hot reloading Typescript and other custom extensions"
		},
		{
			"id": "codebase-improvements",
			"content": "Codebase improvements"
		},
		{
			"id": "nextjs-codemods",
			"content": "Next.js codemods"
		},
		{
			"id": "contributing-to-nextjs",
			"content": "Contributing to Next.js"
		},
		{
			"id": "nextjsorg-open-source",
			"content": "nextjs.org open source"
		},
		{
			"id": "future",
			"content": "Future"
		},
		{
			"id": "webpack-4",
			"content": "Webpack 4"
		},
		{
			"id": "serverless-nextjs",
			"content": "Serverless Next.js"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#improved-hot-reloading-reliability",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#improved-hot-reloading-reliability",
			children: "Improved hot reloading reliability"
		}) })
	},
	{
		depth: 2,
		url: "#hot-reloading-typescript-and-other-custom-extensions",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#hot-reloading-typescript-and-other-custom-extensions",
			children: "Hot reloading Typescript and other custom extensions"
		}) })
	},
	{
		depth: 2,
		url: "#codebase-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#codebase-improvements",
			children: "Codebase improvements"
		}) })
	},
	{
		depth: 2,
		url: "#nextjs-codemods",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#nextjs-codemods",
			children: "Next.js codemods"
		}) })
	},
	{
		depth: 2,
		url: "#contributing-to-nextjs",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#contributing-to-nextjs",
			children: "Contributing to Next.js"
		}) })
	},
	{
		depth: 2,
		url: "#nextjsorg-open-source",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#nextjsorg-open-source",
			children: "nextjs.org open source"
		}) })
	},
	{
		depth: 2,
		url: "#future",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#future",
			children: "Future"
		}) })
	},
	{
		depth: 3,
		url: "#webpack-4",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#webpack-4",
			children: "Webpack 4"
		}) })
	},
	{
		depth: 3,
		url: "#serverless-nextjs",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#serverless-nextjs",
			children: "Serverless Next.js"
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
			"We are proud today to introduce the production-ready ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Next.js 6.1" }),
			", featuring:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Increased hot reloading reliability" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Codebase improvements" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Next.js codemods" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In addition to the Next.js 6.1 release, we're excited to announce that ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org",
				children: "nextjs.org"
			}),
			" is now ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next-site",
				children: "open source"
			})
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "improved-hot-reloading-reliability",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improved-hot-reloading-reliability",
				children: "Improved hot reloading reliability"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In versions before Next.js 6.1 Next.js implemented ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "react-hot-loader" }),
			" on behalf of the user. This library keeps React state between hot reloads."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In doing so ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "react-hot-loader" }),
			" adds a few non-standard behaviors to React, for example, it will ignore ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "shouldComponentUpdate" }),
			" and the element ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "type" }),
			" ended up being a proxy component instead of the actual React component."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To make sure Next.js is as close to default React as possible we have removed ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "react-hot-loader" }),
			" as a dependency, this makes sure development and production mode are closer to each other in behavior. Do note that Next.js's hot reloading feature was ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "not" }),
			" removed, hot reloading has always been handled by Next.js internally."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "hot-reloading-typescript-and-other-custom-extensions",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#hot-reloading-typescript-and-other-custom-extensions",
				children: "Hot reloading Typescript and other custom extensions"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"By default, Next.js automatically looks for any ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
			" file inside the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
			" directory to define routes."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With the introduction of universal webpack in Next.js 5 came the possibility to have compile-to-js top-level pages. A good example is Typescript, which uses ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".ts" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pageExtensions" }),
			" is a configuration key in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			" aimed at allowing Next.js plugins to define extensions that should be considered pages. For example ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next-plugins/tree/master/packages/next-typescript",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "@zeit/next-typescript" })
			}),
			" defines ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".ts" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next-plugins/tree/master/packages/next-mdx",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "@zeit/next-mdx" })
			}),
			" which ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next-plugins/tree/master/packages/next-mdx#top-level-mdx-pages",
				children: "documents"
			}),
			" how to have top level ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".mdx" }),
			" pages."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Previously when implementing ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pageExtensions" }),
			" Next.js plugins were required to implement the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "hot-self-accept-loader" }),
			" that is used for hot reloading. This is no longer required, when adding an extension to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pageExtensions" }),
			" the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "hot-self-accept-loader" }),
			" is automatically applied."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "codebase-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#codebase-improvements",
				children: "Codebase improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Recently we've been paving the way for upcoming features, this involved some under the hood changes that will improve code quality in the long run." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"One of these changes is that the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "server/build" }),
			" directory is moved to the top level ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "build" }),
			". This makes the webpack and babel configuration easier to find for new contributors."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We have also been focusing on adding ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://flow.org/",
				children: "Flow"
			}),
			" types throughout the codebase."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A change we've made that is more visible to users is that ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".next/dist" }),
			" has been renamed to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".next/server" }),
			". The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".next" }),
			" directory that holds build output. For example when you run ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			" the result will be stored in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".next" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-6-1/server-dist.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"The pre-rendering files are now in the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "server" }),
				" directory"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: ["Occurrences of the same constants have been moved into a common file: ", (0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://github.com/vercel/next.js/blob/canary/lib/constants.js",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: "constants.js" })
		})] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nextjs-codemods",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nextjs-codemods",
				children: "Next.js codemods"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When Next.js 6.0 was released the magically injected ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "url" }),
			" property on page components was deprecated. The reason ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "url" }),
			" is going away is that we want to make things very predictable and explicit. Having a magical url property coming out of nowhere doesn't aid that goal."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The recommended way to get the same properties the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "url" }),
			" property had is using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "withRouter" }),
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
			title: "page.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// old"
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
							children: "class"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " extends"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " React"
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
							children: "Component"
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
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "  render"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "() {"
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
							children: "    const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "url"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " } "
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " this"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ".props;"
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
							children: " <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">{url.pathname}</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">;"
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
							children: " Page;"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: ["How the pathname was accessed in versions before Next.js 6 using ", (0, import_jsx_runtime.jsx)(_components.code, { children: "url" })] }),
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
			title: "page.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// new"
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
							children: "import"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { withRouter } "
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
							children: " 'next/router'"
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
							children: "class"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " extends"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " React"
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
							children: "Component"
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
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "  render"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "() {"
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
							children: "    const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "router"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " } "
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " this"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ".props;"
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
							children: " <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">{router.pathname}</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">;"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " withRouter"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(Page);"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"How the pathname should be accessed in versions after Next.js 6 using ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "router" }),
				" injected by ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "withRouter" })
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As we are committed to keeping the upgrade path for Next.js applications simple, so we set out to create an easy way of upgrading usages of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "url" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "withRouter" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The result of this effort is ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next-codemod",
				children: "next‑codemod"
			}),
			", a library of codemods that make upgrading specific deprecated features to their new usage as easy as running one command."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The first codemod we're providing is ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "url-to-withrouter" }),
			" which automatically transforms many cases where ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "url" }),
			" was used to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "withRouter" }),
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
						children: "  jscodeshift"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " -t"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " ./url-to-withrouter.js"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " pages/"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "**"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: "/"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "*"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: ".js"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"This will transform uses of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "url" }),
				" to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "withRouter" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://github.com/vercel/next-codemod#url-to-withrouter",
			children: "Read more here"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "contributing-to-nextjs",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#contributing-to-nextjs",
				children: "Contributing to Next.js"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Next.js community is growing, with more than 450 contributors that already landed at least 1 commit into the Next.js core or examples." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "There's many ways to contribute back to Next.js:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: ["Joining the community and giving advice on ", (0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/discussions",
					children: "GitHub"
				})] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: ["Contributing examples of common use cases: ", (0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples",
					children: "examples directory"
				})] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					"Checking the ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://github.com/vercel/next.js/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22good+first+issue%22",
						children: "good first issue"
					}),
					" and ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://github.com/vercel/next.js/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22help+wanted%22",
						children: "help wanted"
					}),
					" labels on ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://github.com/vercel/next.js",
						children: "GitHub"
					})
				] }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
					src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-6-1/good-first-issue.png",
					alt: ""
				}) }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.p, { children: [
						"There's 30 open issues with the ",
						(0, import_jsx_runtime.jsx)(_components.a, {
							href: "https://github.com/vercel/next.js/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22good+first+issue%22",
							children: "good first issue"
						}),
						" label. Giving new contributors the opportunity to contribute."
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nextjsorg-open-source",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nextjsorg-open-source",
				children: "nextjs.org open source"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We're excited to announce that ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org",
				children: "nextjs.org"
			}),
			" is now ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next-site",
				children: "open source"
			}),
			" so that it can serve as a reference Nextjs implementation and issues/improvements can be filed directly on the project."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "future",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#future",
				children: "Future"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've been working on a few new features to increase reliability and performance, here are a few highlights:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "webpack-4",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#webpack-4",
				children: "Webpack 4"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Webpack 4 brings a lot of improvements: better code-splitting, less configuration is needed by default, and most importantly faster build times. In initial tests we did on an app with over 200 pages ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			" went from taking 100 seconds to 70 seconds on average. On a second run (with caches) a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			" took 21 seconds on average."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "serverless-nextjs",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#serverless-nextjs",
				children: "Serverless Next.js"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We are incrementally making changes to prepare to move ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
			" out into its own package: ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next-server" }),
			". This package will be heavily optimized for install size and bootup time. These optimizations are needed for the \"serverless\" use case where a new instance of the app is executed every request or every few requests. Meaning the \"cold start\" of an application has to be optimized to be as fast as possible."
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
export { toc as a, structuredData as i, frontmatter as n, next_6_1_exports as r, MDXContent as t };
