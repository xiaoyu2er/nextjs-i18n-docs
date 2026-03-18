import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/03-pages-BOgWsUNK.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _03_pages_exports = /* @__PURE__ */ __exportAll({
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
	"contents": [{
		"heading": void 0,
		"content": "Before Next.js 13, the Pages Router was the main way to create routes in Next.js. It used an intuitive file-system router to map each file to a route. The Pages Router is still supported in newer versions of Next.js, but we recommend migrating to the new App Router to leverage React's latest features."
	}, {
		"heading": void 0,
		"content": "Use this section of the documentation for existing applications that use the Pages Router."
	}],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		p: "p",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Before Next.js 13, the Pages Router was the main way to create routes in Next.js. It used an intuitive file-system router to map each file to a route. The Pages Router is still supported in newer versions of Next.js, but we recommend migrating to the new ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app",
				children: "App Router"
			}),
			" to leverage React's latest features."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Use this section of the documentation for existing applications that use the Pages Router." })
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
export { toc as a, structuredData as i, _03_pages_exports as n, frontmatter as r, MDXContent as t };
