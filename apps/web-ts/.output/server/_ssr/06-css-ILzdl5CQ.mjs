import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/06-css-ILzdl5CQ.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _06_css_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "How to use CSS in your application",
	"description": "Learn about the different ways to add CSS to your application, including CSS Modules, Global CSS, Tailwind CSS, and more.",
	"nav_title": "CSS",
	"source": "app/getting-started/css",
	"related": {
		"title": "Next Steps",
		"description": "Learn more about the features mentioned in this page.",
		"links": [
			"pages/guides/tailwind-css",
			"pages/guides/sass",
			"pages/guides/css-in-js"
		]
	}
};
var structuredData = {
	"contents": [{
		"heading": "next-steps",
		"content": "Learn more about the features mentioned in this page."
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
		h2: "h2",
		p: "p",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "next-steps",
			children: "Next Steps"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Learn more about the features mentioned in this page." })
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
export { toc as a, structuredData as i, _06_css_exports as n, frontmatter as r, MDXContent as t };
