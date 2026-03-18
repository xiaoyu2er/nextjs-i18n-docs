import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/multi-tenant-W8ZmRSxD.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var multi_tenant_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "How to build multi-tenant apps in Next.js",
	"description": "Learn how to build multi-tenant apps with the App Router.",
	"nav_title": "Multi-tenant"
};
var structuredData = {
	"contents": [{
		"heading": void 0,
		"content": "If you are looking to build a single Next.js application that serves multiple tenants, we have built an example showing our recommended architecture."
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
	return (0, import_jsx_runtime.jsxs)(_components.p, { children: [
		"If you are looking to build a single Next.js application that serves multiple tenants, we have ",
		(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://vercel.com/templates/next.js/platforms-starter-kit",
			children: "built an example"
		}),
		" showing our recommended architecture."
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
export { toc as a, structuredData as i, frontmatter as n, multi_tenant_exports as r, MDXContent as t };
