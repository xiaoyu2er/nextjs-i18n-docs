import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/05-fonts-6gYX1KTU.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _05_fonts_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "How to use fonts",
	"description": "Learn how to use fonts in Next.js",
	"nav_title": "Fonts",
	"source": "app/getting-started/fonts",
	"related": {
		"title": "API Reference",
		"description": "See the API Reference for the full feature set of Next.js Font",
		"links": ["pages/api-reference/components/font"]
	}
};
var structuredData = {
	"contents": [{
		"heading": "api-reference",
		"content": "See the API Reference for the full feature set of Next.js Font"
	}],
	"headings": [{
		"id": "api-reference",
		"content": "API Reference"
	}]
};
var toc = [{
	depth: 2,
	url: "#api-reference",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "API Reference" })
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
			id: "api-reference",
			children: "API Reference"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "See the API Reference for the full feature set of Next.js Font" })
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
export { toc as a, structuredData as i, _05_fonts_exports as n, frontmatter as r, MDXContent as t };
