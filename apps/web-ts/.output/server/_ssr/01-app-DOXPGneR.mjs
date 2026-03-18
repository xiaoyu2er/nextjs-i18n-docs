import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/01-app-DOXPGneR.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _01_app_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "App Router",
	"description": "The App Router is a file-system based router that uses React's latest features such as Server Components, Suspense, Server Functions, and more.",
	"related": {
		"title": "Next Steps",
		"description": "Get started by following the installation guide.",
		"links": ["app/getting-started/installation"]
	}
};
var structuredData = {
	"contents": [{
		"heading": void 0,
		"content": "The **App Router** is a file-system based router that uses React's latest features such as Server Components, Suspense, and Server Functions."
	}, {
		"heading": "next-steps",
		"content": "Get started by following the installation guide."
	}],
	"headings": [{
		"id": "next-steps",
		"content": "Next Steps"
	}]
};
var toc = [{
	depth: 2,
	url: "#next-steps",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Next Steps" })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		h2: "h2",
		p: "p",
		strong: "strong",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "App Router" }),
			" is a file-system based router that uses React's latest features such as ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/reference/rsc/server-components",
				children: "Server Components"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/reference/react/Suspense",
				children: "Suspense"
			}),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/reference/rsc/server-functions",
				children: "Server Functions"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "next-steps",
			children: "Next Steps"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Get started by following the installation guide." })
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
export { toc as a, structuredData as i, _01_app_exports as n, frontmatter as r, MDXContent as t };
