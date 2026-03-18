import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/04-navigate-between-pages-DBbwJgH4.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _04_navigate_between_pages_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Navigate Between Pages",
	"image": "https://nextjs.org/api/learn-og?title=Navigate%20Between%20Pages&amp;chapter=4",
	"headline": "Pages Router: Navigate Between Pages"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "So far, the Next.js app we created only has one page. Websites and web applications generally have many different pages."
		},
		{
			"heading": void 0,
			"content": "Let's explore how to add more pages to our application."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "In this lesson, you will:"
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "Create a new page using the integrated file system routing."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "Learn how to use the `Link` component to enable client-side navigation between pages."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "Learn about built-in support for code splitting and prefetching."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "> If you’re looking for detailed documentation on Next.js routing, take a look at the routing documentation."
		}
	],
	"headings": [{
		"id": "what-youll-learn-in-this-lesson",
		"content": "What You’ll Learn in This Lesson"
	}]
};
var toc = [{
	depth: 2,
	url: "#what-youll-learn-in-this-lesson",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#what-youll-learn-in-this-lesson",
		children: "What You’ll Learn in This Lesson"
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "So far, the Next.js app we created only has one page. Websites and web applications generally have many different pages." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Let's explore how to add more pages to our application." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "what-youll-learn-in-this-lesson",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#what-youll-learn-in-this-lesson",
				children: "What You’ll Learn in This Lesson"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In this lesson, you will:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Create a new page using the integrated ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/routing/introduction",
					children: "file system routing"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Learn how to use the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nextjs.org/docs/api-reference/next/link",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Link" })
				}),
				" component to enable client-side navigation between pages."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Learn about built-in support for code splitting and prefetching." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"If you’re looking for detailed documentation on Next.js routing, take a look at the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/routing/introduction",
					children: "routing documentation"
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
export { toc as a, structuredData as i, _04_navigate_between_pages_exports as n, frontmatter as r, MDXContent as t };
