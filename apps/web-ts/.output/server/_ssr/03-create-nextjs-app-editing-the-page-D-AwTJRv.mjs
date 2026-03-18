import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/03-create-nextjs-app-editing-the-page-D-AwTJRv.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _03_create_nextjs_app_editing_the_page_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Editing the Page",
	"image": "https://nextjs.org/api/learn-og?title=Editing%20the%20Page&amp;chapter=3",
	"headline": "Pages Router: Editing the Page"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Let’s try editing the starter page."
		},
		{
			"heading": void 0,
			"content": "Make sure the Next.js development server is still running."
		},
		{
			"heading": void 0,
			"content": "Open `pages/index.js` with your text editor."
		},
		{
			"heading": void 0,
			"content": "Find the text that says &#x2A;*\"Welcome to\"** under the `<h1>&#x60; tag and change it to &#x2A;*\"Learn\"**."
		},
		{
			"heading": void 0,
			"content": "Save the file."
		},
		{
			"heading": void 0,
			"content": "As soon as you save the file, the browser automatically updates the page with the new text:"
		},
		{
			"heading": void 0,
			"content": "The Next.js development server has Fast Refresh enabled. When you make changes to files, Next.js automatically applies the changes in the browser almost instantly. No refresh needed! This will help you iterate on your app quickly."
		},
		{
			"heading": "next-up-creating-pages",
			"content": "Great job! That’s it for the first lesson."
		},
		{
			"heading": "next-up-creating-pages",
			"content": "In the next lesson, we’ll talk about *creating more pages and navigating between pages*."
		},
		{
			"heading": "next-up-creating-pages",
			"content": "> You should keep the development server running, but if you want to restart it, hit Ctrl + c to stop the server."
		}
	],
	"headings": [{
		"id": "next-up-creating-pages",
		"content": "Next Up: Creating Pages"
	}]
};
var toc = [{
	depth: 3,
	url: "#next-up-creating-pages",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#next-up-creating-pages",
		children: "Next Up: Creating Pages"
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		em: "em",
		h3: "h3",
		img: "img",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Let’s try editing the starter page." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Make sure the Next.js development server is still running." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Open ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/index.js" }),
				" with your text editor."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Find the text that says ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "\"Welcome to\"" }),
				" under the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<h1>" }),
				" tag and change it to ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "\"Learn\"" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Save the file." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "As soon as you save the file, the browser automatically updates the page with the new text:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/create-nextjs-app/learn-nextjs.png",
			alt: "Learn Next.js"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The Next.js development server has ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/fast-refresh",
				children: "Fast Refresh"
			}),
			" enabled. When you make changes to files, Next.js automatically applies the changes in the browser almost instantly. No refresh needed! This will help you iterate on your app quickly."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "next-up-creating-pages",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#next-up-creating-pages",
				children: "Next Up: Creating Pages"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Great job! That’s it for the first lesson." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In the next lesson, we’ll talk about ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "creating more pages and navigating between pages" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "You should keep the development server running, but if you want to restart it, hit Ctrl + c to stop the server." }),
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
export { toc as a, structuredData as i, _03_create_nextjs_app_editing_the_page_exports as n, frontmatter as r, MDXContent as t };
