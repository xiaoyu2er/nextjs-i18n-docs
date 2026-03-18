import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/version-11-CP5zJJoU.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var version_11_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "How to upgrade to version 11",
	"description": "Upgrade your Next.js Application from Version 10 to Version 11.",
	"nav_title": "Version 11"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "To upgrade to version 11, run the following command:"
		},
		{
			"heading": void 0,
			"content": "> **Good to know:** If you are using TypeScript, ensure you also upgrade `@types/react` and `@types/react-dom` to their corresponding versions."
		},
		{
			"heading": "webpack-5",
			"content": "Webpack 5 is now the default for all Next.js applications. If you did not have a custom webpack configuration, your application is already using webpack 5. If you do have a custom webpack configuration, you can refer to the Next.js webpack 5 documentation for upgrade guidance."
		},
		{
			"heading": "cleaning-the-distdir-is-now-a-default",
			"content": "The build output directory (defaults to `.next`) is now cleared by default except for the Next.js caches. You can refer to the cleaning `distDir` RFC for more information."
		},
		{
			"heading": "cleaning-the-distdir-is-now-a-default",
			"content": "If your application was relying on this behavior previously you can disable the new default behavior by adding the `cleanDistDir: false` flag in `next.config.js`."
		},
		{
			"heading": "port-is-now-supported-for-next-dev-and-next-start",
			"content": "Next.js 11 supports the `PORT` environment variable to set the port the application runs on. Using `-p`/`--port` is still recommended but if you were prohibited from using `-p` in any way you can now use `PORT` as an alternative:"
		},
		{
			"heading": "port-is-now-supported-for-next-dev-and-next-start",
			"content": "Example:"
		},
		{
			"heading": "nextconfigjs-customization-to-import-images",
			"content": "Next.js 11 supports static image imports with `next/image`. This new feature relies on being able to process image imports. If you previously added the `next-images` or `next-optimized-images` packages you can either move to the new built-in support using `next/image` or disable the feature:"
		},
		{
			"heading": "remove-supercomponentdidcatch-from-pages_appjs",
			"content": "The `next/app` component's `componentDidCatch` was deprecated in Next.js 9 as it's no longer needed and has since been a no-op. In Next.js 11, it was removed."
		},
		{
			"heading": "remove-supercomponentdidcatch-from-pages_appjs",
			"content": "If your `pages/_app.js` has a custom `componentDidCatch` method you can remove `super.componentDidCatch` as it is no longer needed."
		},
		{
			"heading": "remove-container-from-pages_appjs",
			"content": "This export was deprecated in Next.js 9 as it's no longer needed and has since been a no-op with a warning during development. In Next.js 11 it was removed."
		},
		{
			"heading": "remove-container-from-pages_appjs",
			"content": "If your `pages/_app.js` imports `Container` from `next/app` you can remove `Container` as it was removed. Learn more in the documentation."
		},
		{
			"heading": "remove-propsurl-usage-from-page-components",
			"content": "This property was deprecated in Next.js 4 and has since shown a warning during development. With the introduction of `getStaticProps` / `getServerSideProps` these methods already disallowed the usage of `props.url`. In Next.js 11, it was removed completely."
		},
		{
			"heading": "remove-propsurl-usage-from-page-components",
			"content": "You can learn more in the documentation."
		},
		{
			"heading": "remove-unsized-property-on-nextimage",
			"content": "The `unsized` property on `next/image` was deprecated in Next.js 10.0.1. You can use `layout=\"fill\"` instead. In Next.js 11 `unsized` was removed."
		},
		{
			"heading": "remove-modules-property-on-nextdynamic",
			"content": "The `modules` and `render` option for `next/dynamic` were deprecated in Next.js 9.5. This was done in order to make the `next/dynamic` API closer to `React.lazy`. In Next.js 11, the `modules` and `render` options were removed."
		},
		{
			"heading": "remove-modules-property-on-nextdynamic",
			"content": "This option hasn't been mentioned in the documentation since Next.js 8 so it's less likely that your application is using it."
		},
		{
			"heading": "remove-modules-property-on-nextdynamic",
			"content": "If your application does use `modules` and `render` you can refer to the documentation."
		},
		{
			"heading": "remove-headrewind",
			"content": "`Head.rewind` has been a no-op since Next.js 9.5, in Next.js 11 it was removed. You can safely remove your usage of `Head.rewind`."
		},
		{
			"heading": "momentjs-locales-excluded-by-default",
			"content": "Moment.js includes translations for a lot of locales by default. Next.js now automatically excludes these locales by default to optimize bundle size for applications using Moment.js."
		},
		{
			"heading": "momentjs-locales-excluded-by-default",
			"content": "To load a specific locale use this snippet:"
		},
		{
			"heading": "momentjs-locales-excluded-by-default",
			"content": "You can opt-out of this new default by adding `excludeDefaultMomentLocales: false` to `next.config.js` if you do not want the new behavior, do note it's highly recommended to not disable this new optimization as it significantly reduces the size of Moment.js."
		},
		{
			"heading": "update-usage-of-routerevents",
			"content": "In case you're accessing `router.events` during rendering, in Next.js 11 `router.events` is no longer provided during pre-rendering. Ensure you're accessing `router.events` in `useEffect`:"
		},
		{
			"heading": "update-usage-of-routerevents",
			"content": "If your application uses `router.router.events` which was an internal property that was not public please make sure to use `router.events` as well."
		},
		{
			"heading": "react-16-to-17",
			"content": "React 17 introduced a new JSX Transform that brings a long-time Next.js feature to the wider React ecosystem: Not having to `import React from 'react'` when using JSX. When using React 17 Next.js will automatically use the new transform. This transform does not make the `React` variable global, which was an unintended side-effect of the previous Next.js implementation. A codemod is available to automatically fix cases where you accidentally used `React` without importing it."
		},
		{
			"heading": "react-16-to-17",
			"content": "Most applications already use the latest version of React, with Next.js 11 the minimum React version has been updated to 17.0.2."
		},
		{
			"heading": "react-16-to-17",
			"content": "To upgrade you can run the following command:"
		},
		{
			"heading": "react-16-to-17",
			"content": "Or using `yarn`:"
		}
	],
	"headings": [
		{
			"id": "webpack-5",
			"content": "Webpack 5"
		},
		{
			"id": "cleaning-the-distdir-is-now-a-default",
			"content": "Cleaning the `distDir` is now a default"
		},
		{
			"id": "port-is-now-supported-for-next-dev-and-next-start",
			"content": "`PORT` is now supported for `next dev` and `next start`"
		},
		{
			"id": "nextconfigjs-customization-to-import-images",
			"content": "`next.config.js` customization to import images"
		},
		{
			"id": "remove-supercomponentdidcatch-from-pages_appjs",
			"content": "Remove `super.componentDidCatch()` from `pages/_app.js`"
		},
		{
			"id": "remove-container-from-pages_appjs",
			"content": "Remove `Container` from `pages/_app.js`"
		},
		{
			"id": "remove-propsurl-usage-from-page-components",
			"content": "Remove `props.url` usage from page components"
		},
		{
			"id": "remove-unsized-property-on-nextimage",
			"content": "Remove `unsized` property on `next/image`"
		},
		{
			"id": "remove-modules-property-on-nextdynamic",
			"content": "Remove `modules` property on `next/dynamic`"
		},
		{
			"id": "remove-headrewind",
			"content": "Remove `Head.rewind`"
		},
		{
			"id": "momentjs-locales-excluded-by-default",
			"content": "Moment.js locales excluded by default"
		},
		{
			"id": "update-usage-of-routerevents",
			"content": "Update usage of `router.events`"
		},
		{
			"id": "react-16-to-17",
			"content": "React 16 to 17"
		}
	]
};
var toc = [
	{
		depth: 3,
		url: "#webpack-5",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Webpack 5" })
	},
	{
		depth: 3,
		url: "#cleaning-the-distdir-is-now-a-default",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Cleaning the ",
			(0, import_jsx_runtime.jsx)("code", { children: "distDir" }),
			" is now a default"
		] })
	},
	{
		depth: 3,
		url: "#port-is-now-supported-for-next-dev-and-next-start",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			(0, import_jsx_runtime.jsx)("code", { children: "PORT" }),
			" is now supported for ",
			(0, import_jsx_runtime.jsx)("code", { children: "next dev" }),
			" and ",
			(0, import_jsx_runtime.jsx)("code", { children: "next start" })
		] })
	},
	{
		depth: 3,
		url: "#nextconfigjs-customization-to-import-images",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("code", { children: "next.config.js" }), " customization to import images"] })
	},
	{
		depth: 3,
		url: "#remove-supercomponentdidcatch-from-pages_appjs",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Remove ",
			(0, import_jsx_runtime.jsx)("code", { children: "super.componentDidCatch()" }),
			" from ",
			(0, import_jsx_runtime.jsx)("code", { children: "pages/_app.js" })
		] })
	},
	{
		depth: 3,
		url: "#remove-container-from-pages_appjs",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Remove ",
			(0, import_jsx_runtime.jsx)("code", { children: "Container" }),
			" from ",
			(0, import_jsx_runtime.jsx)("code", { children: "pages/_app.js" })
		] })
	},
	{
		depth: 3,
		url: "#remove-propsurl-usage-from-page-components",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Remove ",
			(0, import_jsx_runtime.jsx)("code", { children: "props.url" }),
			" usage from page components"
		] })
	},
	{
		depth: 3,
		url: "#remove-unsized-property-on-nextimage",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Remove ",
			(0, import_jsx_runtime.jsx)("code", { children: "unsized" }),
			" property on ",
			(0, import_jsx_runtime.jsx)("code", { children: "next/image" })
		] })
	},
	{
		depth: 3,
		url: "#remove-modules-property-on-nextdynamic",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Remove ",
			(0, import_jsx_runtime.jsx)("code", { children: "modules" }),
			" property on ",
			(0, import_jsx_runtime.jsx)("code", { children: "next/dynamic" })
		] })
	},
	{
		depth: 3,
		url: "#remove-headrewind",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Remove ", (0, import_jsx_runtime.jsx)("code", { children: "Head.rewind" })] })
	},
	{
		depth: 3,
		url: "#momentjs-locales-excluded-by-default",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Moment.js locales excluded by default" })
	},
	{
		depth: 3,
		url: "#update-usage-of-routerevents",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Update usage of ", (0, import_jsx_runtime.jsx)("code", { children: "router.events" })] })
	},
	{
		depth: 2,
		url: "#react-16-to-17",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "React 16 to 17" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		h3: "h3",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To upgrade to version 11, run the following command:" }),
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
						children: " next@11"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react@17"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react-dom@17"
					})
				]
			}) })
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
						children: "yarn"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " add"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " next@11"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react@17"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react-dom@17"
					})
				]
			}) })
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
						children: "pnpm"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " up"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " next@11"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react@17"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react-dom@17"
					})
				]
			}) })
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
						children: "bun"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " add"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " next@11"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react@17"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react-dom@17"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know:" }),
				" If you are using TypeScript, ensure you also upgrade ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "@types/react" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "@types/react-dom" }),
				" to their corresponding versions."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "webpack-5",
			children: "Webpack 5"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Webpack 5 is now the default for all Next.js applications. If you did not have a custom webpack configuration, your application is already using webpack 5. If you do have a custom webpack configuration, you can refer to the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/messages/webpack5",
				children: "Next.js webpack 5 documentation"
			}),
			" for upgrade guidance."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "cleaning-the-distdir-is-now-a-default",
			children: [
				"Cleaning the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "distDir" }),
				" is now a default"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The build output directory (defaults to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".next" }),
			") is now cleared by default except for the Next.js caches. You can refer to ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions/6009",
				children: [
					"the cleaning ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "distDir" }),
					" RFC"
				]
			}),
			" for more information."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If your application was relying on this behavior previously you can disable the new default behavior by adding the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "cleanDistDir: false" }),
			" flag in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "port-is-now-supported-for-next-dev-and-next-start",
			children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "PORT" }),
				" is now supported for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" })
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js 11 supports the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "PORT" }),
			" environment variable to set the port the application runs on. Using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "-p" }),
			"/",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--port" }),
			" is still recommended but if you were prohibited from using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "-p" }),
			" in any way you can now use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "PORT" }),
			" as an alternative:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Example:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "PORT=4000 next start" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "nextconfigjs-customization-to-import-images",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }), " customization to import images"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js 11 supports static image imports with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			". This new feature relies on being able to process image imports. If you previously added the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next-images" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next-optimized-images" }),
			" packages you can either move to the new built-in support using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			" or disable the feature:"
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
						children: "  images: {"
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
							children: "    disableStaticImages: "
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
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "remove-supercomponentdidcatch-from-pages_appjs",
			children: [
				"Remove ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "super.componentDidCatch()" }),
				" from ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_app.js" })
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/app" }),
			" component's ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "componentDidCatch" }),
			" was deprecated in Next.js 9 as it's no longer needed and has since been a no-op. In Next.js 11, it was removed."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_app.js" }),
			" has a custom ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "componentDidCatch" }),
			" method you can remove ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "super.componentDidCatch" }),
			" as it is no longer needed."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "remove-container-from-pages_appjs",
			children: [
				"Remove ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Container" }),
				" from ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_app.js" })
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This export was deprecated in Next.js 9 as it's no longer needed and has since been a no-op with a warning during development. In Next.js 11 it was removed." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_app.js" }),
			" imports ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Container" }),
			" from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/app" }),
			" you can remove ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Container" }),
			" as it was removed. Learn more in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/messages/app-container-deprecated",
				children: "the documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "remove-propsurl-usage-from-page-components",
			children: [
				"Remove ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "props.url" }),
				" usage from page components"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This property was deprecated in Next.js 4 and has since shown a warning during development. With the introduction of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			" / ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			" these methods already disallowed the usage of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "props.url" }),
			". In Next.js 11, it was removed completely."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can learn more in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/messages/url-deprecated",
				children: "the documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "remove-unsized-property-on-nextimage",
			children: [
				"Remove ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "unsized" }),
				" property on ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" })
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "unsized" }),
			" property on ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			" was deprecated in Next.js 10.0.1. You can use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "layout=\"fill\"" }),
			" instead. In Next.js 11 ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "unsized" }),
			" was removed."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "remove-modules-property-on-nextdynamic",
			children: [
				"Remove ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "modules" }),
				" property on ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/dynamic" })
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "modules" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "render" }),
			" option for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/dynamic" }),
			" were deprecated in Next.js 9.5. This was done in order to make the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/dynamic" }),
			" API closer to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "React.lazy" }),
			". In Next.js 11, the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "modules" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "render" }),
			" options were removed."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This option hasn't been mentioned in the documentation since Next.js 8 so it's less likely that your application is using it." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If your application does use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "modules" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "render" }),
			" you can refer to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/messages/next-dynamic-modules",
				children: "the documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "remove-headrewind",
			children: ["Remove ", (0, import_jsx_runtime.jsx)(_components.code, { children: "Head.rewind" })]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Head.rewind" }),
			" has been a no-op since Next.js 9.5, in Next.js 11 it was removed. You can safely remove your usage of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Head.rewind" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "momentjs-locales-excluded-by-default",
			children: "Moment.js locales excluded by default"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Moment.js includes translations for a lot of locales by default. Next.js now automatically excludes these locales by default to optimize bundle size for applications using Moment.js." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To load a specific locale use this snippet:" }),
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
							children: " moment "
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
							children: " 'moment'"
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
						children: "import"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " 'moment/locale/ja'"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "moment."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "locale"
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
							children: "'ja'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ")"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can opt-out of this new default by adding ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "excludeDefaultMomentLocales: false" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			" if you do not want the new behavior, do note it's highly recommended to not disable this new optimization as it significantly reduces the size of Moment.js."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "update-usage-of-routerevents",
			children: ["Update usage of ", (0, import_jsx_runtime.jsx)(_components.code, { children: "router.events" })]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In case you're accessing ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "router.events" }),
			" during rendering, in Next.js 11 ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "router.events" }),
			" is no longer provided during pre-rendering. Ensure you're accessing ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "router.events" }),
			" in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useEffect" }),
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "useEffect"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(() "
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
							children: "  const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " handleRouteChange"
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
							children: " ("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "url"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", { "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "shallow"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) "
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    console."
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
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "      `App is changing to ${"
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
							children: "} ${"
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
							children: "        shallow"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ?"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " 'with'"
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
							children: " 'without'"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: "      } shallow routing`"
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
						children: "    )"
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
						children: "  }"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  router.events."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "on"
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
							children: "'routeChangeStart'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", handleRouteChange)"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "  // If the component is unmounted, unsubscribe"
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
						children: "  // from the event with the `off` method:"
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
							children: "  return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " () "
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    router.events."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "off"
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
							children: "'routeChangeStart'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", handleRouteChange)"
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
						children: "}, [router])"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If your application uses ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "router.router.events" }),
			" which was an internal property that was not public please make sure to use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "router.events" }),
			" as well."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "react-16-to-17",
			children: "React 16 to 17"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"React 17 introduced a new ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html",
				children: "JSX Transform"
			}),
			" that brings a long-time Next.js feature to the wider React ecosystem: Not having to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "import React from 'react'" }),
			" when using JSX. When using React 17 Next.js will automatically use the new transform. This transform does not make the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "React" }),
			" variable global, which was an unintended side-effect of the previous Next.js implementation. A ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/guides/upgrading/codemods#add-missing-react-import",
				children: "codemod is available"
			}),
			" to automatically fix cases where you accidentally used ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "React" }),
			" without importing it."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Most applications already use the latest version of React, with Next.js 11 the minimum React version has been updated to 17.0.2." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To upgrade you can run the following command:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "npm install react@latest react-dom@latest" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Or using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "yarn" }),
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "yarn add react@latest react-dom@latest" })
			}) })
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
export { version_11_exports as a, toc as i, frontmatter as n, structuredData as r, MDXContent as t };
