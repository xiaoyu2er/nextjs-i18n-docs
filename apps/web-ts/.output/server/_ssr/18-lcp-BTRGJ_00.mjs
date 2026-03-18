import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/18-lcp-BTRGJ_00.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _18_lcp_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Largest Contentful Paint (LCP)",
	"image": "https://nextjs.org/api/learn-og?title=Largest%20Contentful%20Paint%20(LCP)&amp;chapter=18",
	"headline": "SEO: Largest Contentful Paint (LCP)"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "LCP shows how long it takes for the largest element to be loaded and visible for users."
		},
		{
			"heading": void 0,
			"content": "The &#x2A;*Largest Contentful Paint (LCP)** metric looks at the loading performance of your page. LCP measures the time it takes to get the largest element on the page visible within the viewport. This could be a large text block, video, or image that takes up the primary real estate on the page."
		},
		{
			"heading": void 0,
			"content": "**Note:** This is not First Contentful Paint (FCP), which measures the time from when the page begins to load to when the first element is rendered on screen."
		},
		{
			"heading": void 0,
			"content": "As the DOM is rendered, the largest element on the page may change. The Largest Contentful Paint doesn't stop counting until the largest image orelement is seen on-screen."
		},
		{
			"heading": void 0,
			"content": "The Largest Contentful Paint doesn't stop counting until the largest image or element is seen on-screen."
		},
		{
			"heading": "further-reading",
			"content": "Google: Largest Contentful Paint Documentation"
		},
		{
			"heading": "further-reading",
			"content": "Vercel: Blog: Core Web Vitals - Largest Contentful Paint"
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
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/seo/lcp.png",
			alt: "Largest Contentful Paint"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "LCP shows how long it takes for the largest element to be loaded and visible for users." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Largest Contentful Paint (LCP)" }),
			" metric looks at the loading performance of your page. LCP measures the time it takes to get the largest element on the page visible within the viewport. This could be a large text block, video, or image that takes up the primary real estate on the page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }),
			" This is not ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://web.dev/fcp/",
				children: "First Contentful Paint (FCP)"
			}),
			", which measures the time from when the page begins to load to when the first element is rendered on screen."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "As the DOM is rendered, the largest element on the page may change. The Largest Contentful Paint doesn't stop counting until the largest image orelement is seen on-screen." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/seo/lcp-example.png",
			alt: "Largest Contentful Paint Example"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Largest Contentful Paint doesn't stop counting until the largest image or element is seen on-screen." }),
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
				href: "https://web.dev/lcp/",
				children: "Largest Contentful Paint Documentation"
			})] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Vercel: ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/blog/core-web-vitals#largest-contentful-paint",
				children: "Blog: Core Web Vitals - Largest Contentful Paint"
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
export { toc as a, structuredData as i, _18_lcp_exports as n, frontmatter as r, MDXContent as t };
