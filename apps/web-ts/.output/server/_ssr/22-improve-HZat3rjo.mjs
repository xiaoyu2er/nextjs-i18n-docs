import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/22-improve-HZat3rjo.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _22_improve_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Improving your Core Web Vitals",
	"image": "https://nextjs.org/api/learn-og?title=Improving%20your%20Core%20Web%20Vitals&amp;chapter=22",
	"headline": "SEO: Improving your Core Web Vitals"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Let's look at how we can improve the Core Web Vitals of our example using Next.js features."
		},
		{
			"heading": void 0,
			"content": "In this lesson, you’ll learn:"
		},
		{
			"heading": void 0,
			"content": "What Lighthouse is and how we can use it."
		},
		{
			"heading": void 0,
			"content": "How to use `next/image` to automatically optimize images."
		},
		{
			"heading": void 0,
			"content": "How to dynamically import libraries and components to reduce your initial JS bundle."
		},
		{
			"heading": void 0,
			"content": "How to preconnect to third-party scripts."
		},
		{
			"heading": void 0,
			"content": "How Next.js optimizes web font loading by default."
		},
		{
			"heading": void 0,
			"content": "How to optimize loading of any third-party scripts."
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		code: "code",
		li: "li",
		p: "p",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Let's look at how we can improve the Core Web Vitals of our example using Next.js features." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In this lesson, you’ll learn:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "What Lighthouse is and how we can use it." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"How to use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
				" to automatically optimize images."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "How to dynamically import libraries and components to reduce your initial JS bundle." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "How to preconnect to third-party scripts." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "How Next.js optimizes web font loading by default." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "How to optimize loading of any third-party scripts." }),
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
export { toc as a, structuredData as i, _22_improve_exports as n, frontmatter as r, MDXContent as t };
