import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/11-upgrading-CbnvSdS9.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _11_upgrading_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Upgrade Guide",
	"description": "Learn how to upgrade to the latest versions of Next.js.",
	"nav_title": "Upgrading"
};
var structuredData = {
	"contents": [{
		"heading": void 0,
		"content": "Upgrade your application to newer versions of Next.js or migrate from the Pages Router to the App Router."
	}],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	return (0, import_jsx_runtime.jsx)({
		p: "p",
		...props.components
	}.p, { children: "Upgrade your application to newer versions of Next.js or migrate from the Pages Router to the App Router." });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
//#endregion
export { toc as a, structuredData as i, _11_upgrading_exports as n, frontmatter as r, MDXContent as t };
