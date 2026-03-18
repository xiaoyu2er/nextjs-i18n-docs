import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/28-dynamic-routes-BGR3JX7L.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _28_dynamic_routes_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Dynamic Routes",
	"image": "https://nextjs.org/api/learn-og?title=Dynamic%20Routes&amp;chapter=28",
	"headline": "Pages Router: Dynamic Routes"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "We’ve populated the index page with the blog data, but we still haven’t created individual blog pages yet (here’s the desired result). We want the URL for these pages to depend on the blog data, which means we need to use dynamic routes."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "In this lesson, you’ll learn:"
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "How to statically generate pages with dynamic routes using `getStaticPaths`."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "How to write `getStaticProps` to fetch the data for each blog post."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "How to render markdown using `remark`."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "How to pretty-print date strings."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "How to link to a page with dynamic routes."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "Some useful information on dynamic routes."
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
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We’ve populated the index page with the blog data, but we still haven’t created individual blog pages yet (here’s the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://next-learn-starter.vercel.app/",
				children: "desired result"
			}),
			"). We want the URL for these pages to depend on the blog data, which means we need to use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/routing/dynamic-routes",
				children: "dynamic routes"
			}),
			"."
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
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"How to statically generate pages with ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/routing/dynamic-routes",
					children: "dynamic routes"
				}),
				" using ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/data-fetching#getstaticpaths-static-generation",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"How to write ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
				}),
				" to fetch the data for each blog post."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"How to render markdown using ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/remarkjs/remark",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "remark" })
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "How to pretty-print date strings." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"How to link to a page with ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/routing/dynamic-routes",
					children: "dynamic routes"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Some useful information on ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/routing/dynamic-routes",
					children: "dynamic routes"
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
export { toc as a, structuredData as i, _28_dynamic_routes_exports as n, frontmatter as r, MDXContent as t };
