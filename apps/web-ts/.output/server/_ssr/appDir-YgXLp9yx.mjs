import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/appDir-YgXLp9yx.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var appDir_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "appDir",
	"description": "Enable the App Router to use layouts, streaming, and more."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "> **Good to know**: This option is **no longer** needed as of Next.js 13.4. The App Router is now stable."
		},
		{
			"heading": void 0,
			"content": "The App Router (`app` directory) enables support for layouts, Server Components, streaming, and colocated data fetching."
		},
		{
			"heading": void 0,
			"content": "Using the `app` directory will automatically enable React Strict Mode. Learn how to incrementally adopt `app`."
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		p: "p",
		strong: "strong",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }),
				": This option is ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "no longer" }),
				" needed as of Next.js 13.4. The App Router is now stable."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The App Router (",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/app/building-your-application/routing",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }), " directory"]
			}),
			") enables support for ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/pages-and-layouts",
				children: "layouts"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/rendering/server-components",
				children: "Server Components"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/loading-ui-and-streaming",
				children: "streaming"
			}),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/data-fetching",
				children: "colocated data fetching"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" directory will automatically enable ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/reference/react/StrictMode",
				children: "React Strict Mode"
			}),
			". Learn how to ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/app/building-your-application/upgrading/app-router-migration#migrating-from-pages-to-app",
				children: ["incrementally adopt ", (0, import_jsx_runtime.jsx)(_components.code, { children: "app" })]
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
export { toc as a, structuredData as i, appDir_exports as n, frontmatter as r, MDXContent as t };
