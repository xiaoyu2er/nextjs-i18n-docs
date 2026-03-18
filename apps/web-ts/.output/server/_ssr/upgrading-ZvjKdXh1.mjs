import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/upgrading-ZvjKdXh1.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var upgrading_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Upgrading",
	"description": "Learn how to upgrade to the latest versions of Next.js."
};
var structuredData = {
	"contents": [{
		"heading": void 0,
		"content": "Learn how to upgrade to the latest versions of Next.js following the versions-specific guides:"
	}],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	return (0, import_jsx_runtime.jsx)({
		p: "p",
		...props.components
	}.p, { children: "Learn how to upgrade to the latest versions of Next.js following the versions-specific guides:" });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
//#endregion
export { upgrading_exports as a, toc as i, frontmatter as n, structuredData as r, MDXContent as t };
