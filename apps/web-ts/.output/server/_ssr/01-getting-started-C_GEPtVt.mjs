import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/01-getting-started-C_GEPtVt.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _01_getting_started_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Getting Started",
	"description": "Learn how to create full-stack web applications with the Next.js App Router."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Welcome to the Next.js documentation!"
		},
		{
			"heading": void 0,
			"content": "This **Getting Started** section will help you create your first Next.js app and learn the core features you'll use in every project."
		},
		{
			"heading": "pre-requisite-knowledge",
			"content": "Our documentation assumes some familiarity with web development. Before getting started, it'll help if you're comfortable with:"
		},
		{
			"heading": "pre-requisite-knowledge",
			"content": "HTML"
		},
		{
			"heading": "pre-requisite-knowledge",
			"content": "CSS"
		},
		{
			"heading": "pre-requisite-knowledge",
			"content": "JavaScript"
		},
		{
			"heading": "pre-requisite-knowledge",
			"content": "React"
		},
		{
			"heading": "pre-requisite-knowledge",
			"content": "If you're new to React or need a refresher, we recommend starting with our React Foundations course, and the Next.js Foundations course that has you building an application as you learn."
		}
	],
	"headings": [{
		"id": "pre-requisite-knowledge",
		"content": "Pre-requisite knowledge"
	}, {
		"id": "next-steps",
		"content": "Next Steps"
	}]
};
var toc = [{
	depth: 2,
	url: "#pre-requisite-knowledge",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Pre-requisite knowledge" })
}, {
	depth: 2,
	url: "#next-steps",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Next Steps" })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Welcome to the Next.js documentation!" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Getting Started" }),
			" section will help you create your first Next.js app and learn the core features you'll use in every project."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "pre-requisite-knowledge",
			children: "Pre-requisite knowledge"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Our documentation assumes some familiarity with web development. Before getting started, it'll help if you're comfortable with:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "HTML" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "CSS" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "JavaScript" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "React" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you're new to React or need a refresher, we recommend starting with our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/learn/react-foundations",
				children: "React Foundations course"
			}),
			", and the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/learn/dashboard-app",
				children: "Next.js Foundations course"
			}),
			" that has you building an application as you learn."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "next-steps",
			children: "Next Steps"
		})
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
export { toc as a, structuredData as i, _01_getting_started_exports as n, frontmatter as r, MDXContent as t };
