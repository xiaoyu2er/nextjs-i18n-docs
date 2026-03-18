import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/01-routing-B7O2E8Lt.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _01_routing_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Routing",
	"description": "Learn the fundamentals of routing for front-end applications with the Pages Router."
};
var structuredData = {
	"contents": [{
		"heading": void 0,
		"content": "The Pages Router has a file-system based router built on concepts of pages. When a file is added to the `pages` directory it's automatically available as a route. Learn more about routing in the Pages Router:"
	}],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		code: "code",
		p: "p",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(_components.p, { children: [
		"The Pages Router has a file-system based router built on concepts of pages. When a file is added to the ",
		(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
		" directory it's automatically available as a route. Learn more about routing in the Pages Router:"
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
export { toc as a, structuredData as i, _01_routing_exports as n, frontmatter as r, MDXContent as t };
