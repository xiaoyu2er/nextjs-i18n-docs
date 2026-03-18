import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/02-rendering-Cob88KNo.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _02_rendering_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Rendering",
	"description": "Learn the fundamentals of rendering in React and Next.js."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "By default, Next.js **pre-renders** every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO."
		},
		{
			"heading": void 0,
			"content": "Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive (this process is called hydration in React)."
		},
		{
			"heading": "pre-rendering",
			"content": "Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page."
		},
		{
			"heading": "pre-rendering",
			"content": "Static Generation: The HTML is generated at **build time** and will be reused on each request."
		},
		{
			"heading": "pre-rendering",
			"content": "Server-side Rendering: The HTML is generated on **each request**."
		},
		{
			"heading": "pre-rendering",
			"content": "Importantly, Next.js lets you choose which pre-rendering form you'd like to use for each page. You can create a \"hybrid\" Next.js app by using Static Generation for most pages and using Server-side Rendering for others."
		},
		{
			"heading": "pre-rendering",
			"content": "We recommend using Static Generation over Server-side Rendering for performance reasons. Statically generated pages can be cached by CDN with no extra configuration to boost performance. However, in some cases, Server-side Rendering might be the only option."
		},
		{
			"heading": "pre-rendering",
			"content": "You can also use client-side data fetching along with Static Generation or Server-side Rendering. That means some parts of a page can be rendered entirely by clientside JavaScript. To learn more, take a look at the Data Fetching documentation."
		}
	],
	"headings": [{
		"id": "pre-rendering",
		"content": "Pre-rendering"
	}]
};
var toc = [{
	depth: 3,
	url: "#pre-rendering",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Pre-rendering" })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"By default, Next.js ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "pre-renders" }),
			" every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive (this process is called ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/reference/react-dom/client/hydrateRoot",
				children: "hydration"
			}),
			" in React)."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "pre-rendering",
			children: "Pre-rendering"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js has two forms of pre-rendering: ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Static Generation" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Server-side Rendering" }),
			". The difference is in ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "when" }),
			" it generates the HTML for a page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Static Generation: The HTML is generated at ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "build time" }),
				" and will be reused on each request."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Server-side Rendering: The HTML is generated on ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "each request" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Importantly, Next.js lets you choose which pre-rendering form you'd like to use for each page. You can create a \"hybrid\" Next.js app by using Static Generation for most pages and using Server-side Rendering for others." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We recommend using Static Generation over Server-side Rendering for performance reasons. Statically generated pages can be cached by CDN with no extra configuration to boost performance. However, in some cases, Server-side Rendering might be the only option." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can also use client-side data fetching along with Static Generation or Server-side Rendering. That means some parts of a page can be rendered entirely by clientside JavaScript. To learn more, take a look at the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/data-fetching/client-side",
				children: "Data Fetching"
			}),
			" documentation."
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
export { toc as a, structuredData as i, _02_rendering_exports as n, frontmatter as r, MDXContent as t };
