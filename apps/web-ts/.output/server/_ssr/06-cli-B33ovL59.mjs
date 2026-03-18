import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/06-cli-B33ovL59.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _06_cli_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "CLI",
	"description": "API Reference for the Next.js Command Line Interface (CLI) tools."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js comes with **two** Command Line Interface (CLI) tools:"
		},
		{
			"heading": void 0,
			"content": "**`create-next-app`**: Quickly create a new Next.js application using the default template or an example from a public GitHub repository."
		},
		{
			"heading": void 0,
			"content": "**`next`**: Run the Next.js development server, build your application, and more."
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js comes with ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "two" }),
			" Command Line Interface (CLI) tools:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "create-next-app" }) }),
				": Quickly create a new Next.js application using the default template or an ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples",
					children: "example"
				}),
				" from a public GitHub repository."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next" }) }), ": Run the Next.js development server, build your application, and more."] }),
			"\n"
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
export { toc as a, structuredData as i, _06_cli_exports as n, frontmatter as r, MDXContent as t };
