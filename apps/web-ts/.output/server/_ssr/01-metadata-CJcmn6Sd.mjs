import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/01-metadata-CJcmn6Sd.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _01_metadata_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Metadata Files API Reference",
	"description": "API documentation for the metadata file conventions.",
	"nav_title": "Metadata Files"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "This section of the docs covers **Metadata file conventions**. File-based metadata can be defined by adding special metadata files to route segments."
		},
		{
			"heading": void 0,
			"content": "Each file convention can be defined using a static file (e.g. `opengraph-image.jpg`), or a dynamic variant that uses code to generate the file (e.g. `opengraph-image.js`)."
		},
		{
			"heading": void 0,
			"content": "Once a file is defined, Next.js will automatically serve the file (with hashes in production for caching) and update the relevant head elements with the correct metadata, such as the asset's URL, file type, and image size."
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		code: "code",
		p: "p",
		strong: "strong",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This section of the docs covers ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Metadata file conventions" }),
			". File-based metadata can be defined by adding special metadata files to route segments."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Each file convention can be defined using a static file (e.g. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "opengraph-image.jpg" }),
			"), or a dynamic variant that uses code to generate the file (e.g. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "opengraph-image.js" }),
			")."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Once a file is defined, Next.js will automatically serve the file (with hashes in production for caching) and update the relevant head elements with the correct metadata, such as the asset's URL, file type, and image size." })
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
export { toc as a, structuredData as i, _01_metadata_exports as n, frontmatter as r, MDXContent as t };
