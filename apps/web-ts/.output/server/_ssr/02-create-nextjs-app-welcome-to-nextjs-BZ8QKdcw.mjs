import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/02-create-nextjs-app-welcome-to-nextjs-BZ8QKdcw.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _02_create_nextjs_app_welcome_to_nextjs_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Welcome to Next.js",
	"image": "https://nextjs.org/api/learn-og?title=Welcome%20to%20Next.js&amp;chapter=2",
	"headline": "Pages Router: Welcome to Next.js"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "You should see a page like this when you access http\\://localhost:3000. This is the starter template page which shows some helpful information about Next.js."
		},
		{
			"heading": void 0,
			"content": "> **Help is available:** If you get stuck, you can reach out to the community on GitHub Discussions."
		},
		{
			"heading": void 0,
			"content": "Let’s try to edit this page next!"
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		img: "img",
		p: "p",
		strong: "strong",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You should see a page like this when you access ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://localhost:3000",
				children: "http://localhost:3000"
			}),
			". This is the starter template page which shows some helpful information about Next.js."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/create-nextjs-app/welcome-to-nextjs.png",
			alt: "Welcome to Next.js"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Help is available:" }),
				" If you get stuck, you can reach out to the community on ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/discussions",
					children: "GitHub Discussions"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Let’s try to edit this page next!" })
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
export { toc as a, structuredData as i, _02_create_nextjs_app_welcome_to_nextjs_exports as n, frontmatter as r, MDXContent as t };
