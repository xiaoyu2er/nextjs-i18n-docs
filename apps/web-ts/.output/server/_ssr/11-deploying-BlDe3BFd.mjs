import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/11-deploying-BlDe3BFd.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _11_deploying_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "How to deploy your Next.js application",
	"description": "Learn how to deploy your Next.js application.",
	"nav_title": "Deploying",
	"source": "app/getting-started/deploying"
};
var structuredData = {
	"contents": [],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
//#endregion
export { toc as a, structuredData as i, _11_deploying_exports as n, frontmatter as r, MDXContent as t };
