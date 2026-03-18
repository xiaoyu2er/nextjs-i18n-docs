import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/02-pages-JJmApNKU.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _02_pages_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Pages Router",
	"description": "Before Next.js 13, the Pages Router was the main way to create routes in Next.js with an intuitive file-system router."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "> You're viewing the documentation for the Pages Router. See the App Router documentation for the latest features."
		},
		{
			"heading": void 0,
			"content": "The **Pages Router** uses an intuitive file-system router to map each file to a route."
		},
		{
			"heading": void 0,
			"content": "Before Next.js 13, the Pages Router was the main way to create routes in Next.js. It's still supported in newer versions of Next.js, but we recommend migrating to the new App Router to leverage React's latest features."
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		p: "p",
		strong: "strong",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"You're viewing the documentation for the Pages Router. See the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app",
					children: "App Router"
				}),
				" documentation for the latest features."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Pages Router" }),
			" uses an intuitive file-system router to map each file to a route."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Before Next.js 13, the Pages Router was the main way to create routes in Next.js. It's still supported in newer versions of Next.js, but we recommend migrating to the new ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app",
				children: "App Router"
			}),
			" to leverage React's latest features."
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
export { toc as a, structuredData as i, _02_pages_exports as n, frontmatter as r, MDXContent as t };
