import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/04-automatic-static-optimization-CKByhV71.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _04_automatic_static_optimization_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Automatic Static Optimization",
	"description": "Next.js automatically optimizes your app to be static HTML whenever possible. Learn how it works here."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js automatically determines that a page is static (can be prerendered) if it has no blocking data requirements. This determination is made by the absence of `getServerSideProps` and `getInitialProps` in the page."
		},
		{
			"heading": void 0,
			"content": "This feature allows Next.js to emit hybrid applications that contain **both server-rendered and statically generated pages**."
		},
		{
			"heading": void 0,
			"content": "> Statically generated pages are still reactive: Next.js will hydrate your application client-side to give it full interactivity."
		},
		{
			"heading": void 0,
			"content": "One of the main benefits of this feature is that optimized pages require no server-side computation, and can be instantly streamed to the end-user from multiple CDN locations. The result is an *ultra fast* loading experience for your users."
		},
		{
			"heading": "how-it-works",
			"content": "If `getServerSideProps` or `getInitialProps` is present in a page, Next.js will switch to render the page on-demand, per-request (meaning Server-Side Rendering)."
		},
		{
			"heading": "how-it-works",
			"content": "If the above is not the case, Next.js will **statically optimize** your page automatically by prerendering the page to static HTML."
		},
		{
			"heading": "how-it-works",
			"content": "During prerendering, the router's `query` object will be empty since we do not have `query` information to provide during this phase. After hydration, Next.js will trigger an update to your application to provide the route parameters in the `query` object."
		},
		{
			"heading": "how-it-works",
			"content": "The cases where the query will be updated after hydration triggering another render are:"
		},
		{
			"heading": "how-it-works",
			"content": "The page is a dynamic-route."
		},
		{
			"heading": "how-it-works",
			"content": "The page has query values in the URL."
		},
		{
			"heading": "how-it-works",
			"content": "Rewrites are configured in your `next.config.js` since these can have parameters that may need to be parsed and provided in the `query`."
		},
		{
			"heading": "how-it-works",
			"content": "To be able to distinguish if the query is fully updated and ready for use, you can leverage the `isReady` field on `next/router`."
		},
		{
			"heading": "how-it-works",
			"content": "> **Good to know**: Parameters added with dynamic routes to a page that's using `getStaticProps` will always be available inside the `query` object."
		},
		{
			"heading": "how-it-works",
			"content": "`next build` will emit `.html` files for statically optimized pages. For example, the result for the page `pages/about.js` would be:"
		},
		{
			"heading": "how-it-works",
			"content": "And if you add `getServerSideProps` to the page, it will then be JavaScript, like so:"
		},
		{
			"heading": "caveats",
			"content": "If you have a custom `App` with `getInitialProps` then this optimization will be turned off in pages without Static Generation."
		},
		{
			"heading": "caveats",
			"content": "If you have a custom `Document` with `getInitialProps` be sure you check if `ctx.req` is defined before assuming the page is server-side rendered. `ctx.req` will be `undefined` for pages that are prerendered."
		},
		{
			"heading": "caveats",
			"content": "Avoid using the `asPath` value on `next/router` in the rendering tree until the router's `isReady` field is `true`. Statically optimized pages only know `asPath` on the client and not the server, so using it as a prop may lead to mismatch errors. The `active-class-name` example demonstrates one way to use `asPath` as a prop."
		}
	],
	"headings": [{
		"id": "how-it-works",
		"content": "How it works"
	}, {
		"id": "caveats",
		"content": "Caveats"
	}]
};
var toc = [{
	depth: 2,
	url: "#how-it-works",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "How it works" })
}, {
	depth: 2,
	url: "#caveats",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Caveats" })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		em: "em",
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js automatically determines that a page is static (can be prerendered) if it has no blocking data requirements. This determination is made by the absence of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getInitialProps" }),
			" in the page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This feature allows Next.js to emit hybrid applications that contain ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "both server-rendered and statically generated pages" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Statically generated pages are still reactive: Next.js will hydrate your application client-side to give it full interactivity." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"One of the main benefits of this feature is that optimized pages require no server-side computation, and can be instantly streamed to the end-user from multiple CDN locations. The result is an ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "ultra fast" }),
			" loading experience for your users."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "how-it-works",
			children: "How it works"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getInitialProps" }),
			" is present in a page, Next.js will switch to render the page on-demand, per-request (meaning ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/rendering/server-side-rendering",
				children: "Server-Side Rendering"
			}),
			")."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If the above is not the case, Next.js will ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "statically optimize" }),
			" your page automatically by prerendering the page to static HTML."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"During prerendering, the router's ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "query" }),
			" object will be empty since we do not have ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "query" }),
			" information to provide during this phase. After hydration, Next.js will trigger an update to your application to provide the route parameters in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "query" }),
			" object."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The cases where the query will be updated after hydration triggering another render are:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The page is a ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/routing/dynamic-routes",
					children: "dynamic-route"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The page has query values in the URL." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/api-reference/next-config-js/rewrites",
					children: "Rewrites"
				}),
				" are configured in your ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
				" since these can have parameters that may need to be parsed and provided in the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "query" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To be able to distinguish if the query is fully updated and ready for use, you can leverage the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "isReady" }),
			" field on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/functions/use-router#router-object",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next/router" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }),
				": Parameters added with ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/routing/dynamic-routes",
					children: "dynamic routes"
				}),
				" to a page that's using ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/data-fetching/get-static-props",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
				}),
				" will always be available inside the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "query" }),
				" object."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			" will emit ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".html" }),
			" files for statically optimized pages. For example, the result for the page ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/about.js" }),
			" would be:"
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, {
					style: {
						"--shiki-light": "#6F42C1",
						"--shiki-dark": "#B392F0"
					},
					children: ".next/server/pages/about.html"
				})
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"And if you add ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			" to the page, it will then be JavaScript, like so:"
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, {
					style: {
						"--shiki-light": "#6F42C1",
						"--shiki-dark": "#B392F0"
					},
					children: ".next/server/pages/about.js"
				})
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "caveats",
			children: "Caveats"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"If you have a ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/pages/building-your-application/routing/custom-app",
					children: ["custom ", (0, import_jsx_runtime.jsx)(_components.code, { children: "App" })]
				}),
				" with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "getInitialProps" }),
				" then this optimization will be turned off in pages without ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/data-fetching/get-static-props",
					children: "Static Generation"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"If you have a ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/pages/building-your-application/routing/custom-document",
					children: ["custom ", (0, import_jsx_runtime.jsx)(_components.code, { children: "Document" })]
				}),
				" with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "getInitialProps" }),
				" be sure you check if ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "ctx.req" }),
				" is defined before assuming the page is server-side rendered. ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "ctx.req" }),
				" will be ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "undefined" }),
				" for pages that are prerendered."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Avoid using the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "asPath" }),
				" value on ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/api-reference/functions/use-router#router-object",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next/router" })
				}),
				" in the rendering tree until the router's ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "isReady" }),
				" field is ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "true" }),
				". Statically optimized pages only know ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "asPath" }),
				" on the client and not the server, so using it as a prop may lead to mismatch errors. The ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples/active-class-name",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "active-class-name" }), " example"]
				}),
				" demonstrates one way to use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "asPath" }),
				" as a prop."
			] }),
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
export { toc as a, structuredData as i, _04_automatic_static_optimization_exports as n, frontmatter as r, MDXContent as t };
