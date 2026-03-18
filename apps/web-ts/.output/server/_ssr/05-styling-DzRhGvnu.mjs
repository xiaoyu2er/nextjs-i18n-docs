import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/05-styling-DzRhGvnu.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _05_styling_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Styling",
	"description": "Learn the different ways you can style your Next.js application."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js supports different ways of styling your application, including:"
		},
		{
			"heading": void 0,
			"content": "**Global CSS**: Simple to use and familiar for those experienced with traditional CSS, but can lead to larger CSS bundles and difficulty managing styles as the application grows."
		},
		{
			"heading": void 0,
			"content": "**CSS Modules**: Create locally scoped CSS classes to avoid naming conflicts and improve maintainability."
		},
		{
			"heading": void 0,
			"content": "**Tailwind CSS**: A utility-first CSS framework that allows for rapid custom designs by composing utility classes."
		},
		{
			"heading": void 0,
			"content": "**Sass**: A popular CSS preprocessor that extends CSS with features like variables, nested rules, and mixins."
		},
		{
			"heading": void 0,
			"content": "**CSS-in-JS**: Embed CSS directly in your JavaScript components, enabling dynamic and scoped styling."
		},
		{
			"heading": void 0,
			"content": "Learn more about each approach by exploring their respective documentation:"
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js supports different ways of styling your application, including:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Global CSS" }), ": Simple to use and familiar for those experienced with traditional CSS, but can lead to larger CSS bundles and difficulty managing styles as the application grows."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "CSS Modules" }), ": Create locally scoped CSS classes to avoid naming conflicts and improve maintainability."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Tailwind CSS" }), ": A utility-first CSS framework that allows for rapid custom designs by composing utility classes."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Sass" }), ": A popular CSS preprocessor that extends CSS with features like variables, nested rules, and mixins."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "CSS-in-JS" }), ": Embed CSS directly in your JavaScript components, enabling dynamic and scoped styling."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Learn more about each approach by exploring their respective documentation:" })
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
export { toc as a, structuredData as i, _05_styling_exports as n, frontmatter as r, MDXContent as t };
