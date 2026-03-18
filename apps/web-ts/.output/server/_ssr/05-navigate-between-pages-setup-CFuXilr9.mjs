import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/05-navigate-between-pages-setup-CFuXilr9.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _05_navigate_between_pages_setup_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Set up pages",
	"image": "https://nextjs.org/api/learn-og?title=Set%20up%20pages&amp;chapter=5",
	"headline": "Pages Router: Set up pages"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "**If you’re continuing from the previous lesson,** you can skip this page."
		},
		{
			"heading": "download-starter-code-optional",
			"content": "If you’re NOT continuing from the previous lesson, you can download, install, and run the starter code for this lesson below. This sets up a `nextjs-blog` directory such that it’s identical to the result of the previous lesson."
		},
		{
			"heading": "download-starter-code-optional",
			"content": "Again, this is NOT necessary if you’ve just finished the previous lesson."
		},
		{
			"heading": "download-starter-code-optional",
			"content": "Then follow the instructions from the command output (`cd` into the directory and start the development server)."
		}
	],
	"headings": [{
		"id": "download-starter-code-optional",
		"content": "Download Starter Code (Optional)"
	}]
};
var toc = [{
	depth: 3,
	url: "#download-starter-code-optional",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#download-starter-code-optional",
		children: "Download Starter Code (Optional)"
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h3: "h3",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "If you’re continuing from the previous lesson," }), " you can skip this page."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "download-starter-code-optional",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#download-starter-code-optional",
				children: "Download Starter Code (Optional)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you’re NOT continuing from the previous lesson, you can download, install, and run the starter code for this lesson below. This sets up a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "nextjs-blog" }),
			" directory such that it’s identical to the result of the previous lesson."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Again, this is NOT necessary if you’ve just finished the previous lesson." }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "npx create-next-app@latest nextjs-blog --use-npm --example \"https://github.com/vercel/next-learn/tree/main/basics/navigate-between-pages-starter\"" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Then follow the instructions from the command output (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "cd" }),
			" into the directory and start the development server)."
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
export { toc as a, structuredData as i, _05_navigate_between_pages_setup_exports as n, frontmatter as r, MDXContent as t };
