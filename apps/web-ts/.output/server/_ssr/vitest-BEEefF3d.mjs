import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vitest-BEEefF3d.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var vitest_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "How to set up Vitest with Next.js",
	"description": "Learn how to set up Next.js with Vitest and React Testing Library - two popular unit testing libraries.",
	"nav_title": "Vitest",
	"source": "app/guides/testing/vitest"
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
export { vitest_exports as a, toc as i, frontmatter as n, structuredData as r, MDXContent as t };
