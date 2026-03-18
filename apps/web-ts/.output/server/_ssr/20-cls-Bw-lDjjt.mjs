import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/20-cls-Bw-lDjjt.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _20_cls_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Cumulative Layout Shift (CLS)",
	"image": "https://nextjs.org/api/learn-og?title=Cumulative%20Layout%20Shift%20(CLS)&amp;chapter=20",
	"headline": "SEO: Cumulative Layout Shift (CLS)"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "The &#x2A;*Cumulative Layout Shift (CLS)** metric is a measure of your site’s overall layout stability. A site that unexpectedly shifts layout as the page loads can lead to accidental user error and distraction."
		},
		{
			"heading": void 0,
			"content": "Cumulative Layout Shift (CLS) occurs when elements have been shifted after initially being rendered by the DOM. Here, a button was rendered to the screen after the text block, causing the block to shift downward. A combination of impact and distance is considered when calculating CLS."
		},
		{
			"heading": void 0,
			"content": "Elements that shift position when new elements render to screen affect CLS."
		},
		{
			"heading": void 0,
			"content": "Each element’s individual layout shift score is only counted toward CLS if unexpected movement occurs. If a new element is added to the DOM or an existing element changes size, it doesn’t count toward layout shift if the loaded elements maintain their position."
		},
		{
			"heading": "further-reading",
			"content": "Google: Cumulative Layout Shift Documentation"
		},
		{
			"heading": "further-reading",
			"content": "Vercel: Blog: Core Web Vitals - Cumulative Layout Shift"
		}
	],
	"headings": [{
		"id": "further-reading",
		"content": "Further Reading"
	}]
};
var toc = [{
	depth: 3,
	url: "#further-reading",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#further-reading",
		children: "Further Reading"
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		h3: "h3",
		img: "img",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/seo/cls.png",
			alt: "Cumulative Layout Shift"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Cumulative Layout Shift (CLS)" }),
			" metric is a measure of your site’s overall layout stability. A site that unexpectedly shifts layout as the page loads can lead to accidental user error and distraction."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Cumulative Layout Shift (CLS) occurs when elements have been shifted after initially being rendered by the DOM. Here, a button was rendered to the screen after the text block, causing the block to shift downward. A combination of impact and distance is considered when calculating CLS." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/seo/cls-example.png",
			alt: "Cumulative Layout Shift Example"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Elements that shift position when new elements render to screen affect CLS." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Each element’s individual layout shift score is only counted toward CLS if unexpected movement occurs. If a new element is added to the DOM or an existing element changes size, it doesn’t count toward layout shift if the loaded elements maintain their position." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "further-reading",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#further-reading",
				children: "Further Reading"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Google: ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://web.dev/cls/",
				children: "Cumulative Layout Shift Documentation"
			})] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Vercel: ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/blog/core-web-vitals#cumulative-layout-shift",
				children: "Blog: Core Web Vitals - Cumulative Layout Shift"
			})] }),
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
export { toc as a, structuredData as i, _20_cls_exports as n, frontmatter as r, MDXContent as t };
