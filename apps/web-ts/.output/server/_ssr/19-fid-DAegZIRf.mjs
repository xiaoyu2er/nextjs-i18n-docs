import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/19-fid-DAegZIRf.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _19_fid_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "First Input Delay (FID)",
	"image": "https://nextjs.org/api/learn-og?title=First%20Input%20Delay%20(FID)&amp;chapter=19",
	"headline": "SEO: First Input Delay (FID)"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "The &#x2A;*First Input Delay (FID)** metric is the perception of an end user’s experience while interacting with a web page. Imagine clicking inside an input box only for nothing to happen – this frustration with the interactivity and responsiveness of a site is caused by large input delays."
		},
		{
			"heading": void 0,
			"content": "FID requires real user data and cannot be measured in the lab (e.g. Google Lighthouse). However, the Total Blocking Time (TBT) metric is lab-measurable and captures issues that affect interactivity."
		},
		{
			"heading": void 0,
			"content": "FID happens when the browser’s main thread is performing other tasks and is unable to respond to the user’s request."
		},
		{
			"heading": "further-reading",
			"content": "Google: First Input Delay Documentation"
		},
		{
			"heading": "further-reading",
			"content": "Vercel: Blog: Core Web Vitals - First Input Delay"
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "First Input Delay (FID)" }),
			" metric is the perception of an end user’s experience while interacting with a web page. Imagine clicking inside an input box only for nothing to happen – this frustration with the interactivity and responsiveness of a site is caused by large input delays."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/seo/fid.png",
			alt: "First Input Delay"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"FID requires real user data and cannot be measured in the lab (e.g. Google Lighthouse). However, the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://web.dev/tbt",
				children: "Total Blocking Time (TBT)"
			}),
			" metric is lab-measurable and captures issues that affect interactivity."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/seo/fid-example.png",
			alt: "First Input Delay Example"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "FID happens when the browser’s main thread is performing other tasks and is unable to respond to the user’s request." }),
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
				href: "https://web.dev/fid/",
				children: "First Input Delay Documentation"
			})] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Vercel: ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/blog/core-web-vitals#first-input-delay",
				children: "Blog: Core Web Vitals - First Input Delay"
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
export { toc as a, structuredData as i, _19_fid_exports as n, frontmatter as r, MDXContent as t };
