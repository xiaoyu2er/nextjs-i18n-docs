import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/01-directives-C_5Uuk44.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _01_directives_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Directives",
	"description": "Directives are used to modify the behavior of your Next.js application."
};
var structuredData = {
	"contents": [{
		"heading": void 0,
		"content": "The following directives are available:"
	}],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	return (0, import_jsx_runtime.jsx)({
		p: "p",
		...props.components
	}.p, { children: "The following directives are available:" });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
//#endregion
export { toc as a, structuredData as i, _01_directives_exports as n, frontmatter as r, MDXContent as t };
