import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/37-api-routes-BZPKVQgB.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _37_api_routes_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "API Routes",
	"image": "https://nextjs.org/api/learn-og?title=API%20Routes&amp;chapter=37",
	"headline": "Pages Router: API Routes"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js has support for API Routes, which let you easily create an API endpoint as a Node.js serverless function. Although it’s not necessary for our blog app, we’ll briefly talk about how to use it in this lesson."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "In this lesson, you’ll learn:"
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "How to create an API Route."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "Some useful information on API Routes."
		}
	],
	"headings": [{
		"id": "what-youll-learn-in-this-lesson",
		"content": "What You’ll Learn in This Lesson"
	}]
};
var toc = [{
	depth: 3,
	url: "#what-youll-learn-in-this-lesson",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#what-youll-learn-in-this-lesson",
		children: "What You’ll Learn in This Lesson"
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		h3: "h3",
		li: "li",
		p: "p",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js has support for ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-routes/introduction",
				children: "API Routes"
			}),
			", which let you easily create an API endpoint as a Node.js serverless function. Although it’s not necessary for our blog app, we’ll briefly talk about how to use it in this lesson."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "what-youll-learn-in-this-lesson",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#what-youll-learn-in-this-lesson",
				children: "What You’ll Learn in This Lesson"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In this lesson, you’ll learn:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "How to create an API Route." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Some useful information on ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/api-routes/introduction",
					children: "API Routes"
				}),
				"."
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
export { toc as a, structuredData as i, _37_api_routes_exports as n, frontmatter as r, MDXContent as t };
