import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/02-rspack-Bvd55lRV.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _02_rspack_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Rspack Integration",
	"description": "Use the `next-rspack` plugin to bundle your Next.js with Rspack.",
	"nav_title": "Rspack"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "The Rspack team has created a community plugin for Next.js, which is part of a partnering effort with the Rspack team."
		},
		{
			"heading": void 0,
			"content": "This plugin is currently experimental. Please use this discussion thread to give feedback on any issues you encounter."
		},
		{
			"heading": void 0,
			"content": "Learn more on the Rspack docs and try out this example."
		}
	],
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
			"The Rspack team has created a community plugin for Next.js, which is part of a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://rspack.rs/blog/rspack-next-partner",
				children: "partnering effort"
			}),
			" with the Rspack team."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This plugin is currently experimental. Please use this ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions/77800",
				children: "discussion thread"
			}),
			" to give feedback on any issues you encounter."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more on the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://rspack.rs/guide/tech/next",
				children: "Rspack docs"
			}),
			" and try out ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/tree/canary/examples/with-rspack",
				children: "this example"
			}),
			"."
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
export { toc as a, structuredData as i, _02_rspack_exports as n, frontmatter as r, MDXContent as t };
