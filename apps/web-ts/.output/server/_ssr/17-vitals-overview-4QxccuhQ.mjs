import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/17-vitals-overview-4QxccuhQ.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _17_vitals_overview_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Web Vitals Overview",
	"image": "https://nextjs.org/api/learn-og?title=Web%20Vitals%20Overview&amp;chapter=17",
	"headline": "SEO: Web Vitals Overview"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "In this lesson, we will go through the different metrics, the impact that Core Web Vitals can have on your SEO, and the importance they have over your user experience."
		},
		{
			"heading": void 0,
			"content": "There are three different values when measuring Core Web Vitals:"
		},
		{
			"heading": void 0,
			"content": "**\"Good\"*&#x2A;, &#x2A;*\"Needs Improvement\"*&#x2A;, and &#x2A;*\"Poor\"**. These values differ based on the vital being measured:"
		},
		{
			"heading": void 0,
			"content": "You can approach Core Web Vitals in two different ways:"
		},
		{
			"heading": void 0,
			"content": "**Try to achieve the highest score possible on each metric**. Striving for perfection is great, but it might be tricky on large websites with many dependencies."
		},
		{
			"heading": void 0,
			"content": "**Benchmark against competitors in your industry**. You are not competing with every perfectly optimized website in Google search, but with others ranking for your target keywords."
		},
		{
			"heading": "next-steps",
			"content": "In the following lessons, we will go through each vital to understand what it measures."
		}
	],
	"headings": [{
		"id": "next-steps",
		"content": "Next Steps"
	}]
};
var toc = [{
	depth: 3,
	url: "#next-steps",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#next-steps",
		children: "Next Steps"
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
			"In this lesson, we will go through the different metrics, the impact that ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://web.dev/vitals/",
				children: "Core Web Vitals"
			}),
			" can have on your SEO, and the importance they have over your user experience."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "There are three different values when measuring Core Web Vitals:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "\"Good\"" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "\"Needs Improvement\"" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "\"Poor\"" }),
			". These values differ based on the vital being measured:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/seo/vitals-light.png",
			alt: "Core Web Vitals"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can approach Core Web Vitals in two different ways:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Try to achieve the highest score possible on each metric" }), ". Striving for perfection is great, but it might be tricky on large websites with many dependencies."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Benchmark against competitors in your industry" }), ". You are not competing with every perfectly optimized website in Google search, but with others ranking for your target keywords."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "next-steps",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#next-steps",
				children: "Next Steps"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In the following lessons, we will go through each vital to understand what it measures." })
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
export { toc as a, structuredData as i, _17_vitals_overview_exports as n, frontmatter as r, MDXContent as t };
