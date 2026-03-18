import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/16-web-performance-CUhDB3aL.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _16_web_performance_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Web Performance ",
	"image": "https://nextjs.org/api/learn-og?title=Web%20Performance%20&amp;%20Core%20Web%20Vitals&amp;chapter=16",
	"headline": "SEO: Web Performance &amp; Core Web Vitals"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Web Vitals is an initiative created by Google to provide unified guidance and metrics to measure end-user page experience on the web."
		},
		{
			"heading": void 0,
			"content": "Core Web Vitals is a subset of Web Vitals, and currently consists of three metrics that measure loading, interactivity, and visual stability. These metrics are Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS)."
		},
		{
			"heading": void 0,
			"content": "Achieving a great score in these three metrics will create a smoother website experience for your users."
		},
		{
			"heading": void 0,
			"content": "Websites scoring poorly in each of the Core Web Vitals metrics will impact its search engine ranking as Google starts to use Core Web Vitals as a ranking factor for their search algorithm. Poor vitals can have an impact on your web traffic and business."
		},
		{
			"heading": void 0,
			"content": "In this lesson, you’ll learn:"
		},
		{
			"heading": void 0,
			"content": "A short background on Core Web Vitals."
		},
		{
			"heading": void 0,
			"content": "Implications of Core Web Vitals in SEO and UX, and its impact on your website."
		},
		{
			"heading": void 0,
			"content": "Why you should care about Core Web Vitals in your development process and how to measure them."
		},
		{
			"heading": void 0,
			"content": "How to improve your Core Web Vitals with Next.js and monitor changes."
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		li: "li",
		p: "p",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://web.dev/vitals/",
			children: "Web Vitals"
		}), " is an initiative created by Google to provide unified guidance and metrics to measure end-user page experience on the web."] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/search/blog/2020/11/timing-for-page-experience",
				children: "Core Web Vitals"
			}),
			" is a subset of Web Vitals, and currently consists of three metrics that measure loading, interactivity, and visual stability. These metrics are ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/learn/seo/lcp",
				children: "Largest Contentful Paint (LCP)"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/learn/seo/fid",
				children: "First Input Delay (FID)"
			}),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/learn/seo/cls",
				children: "Cumulative Layout Shift (CLS)"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Achieving a great score in these three metrics will create a smoother website experience for your users." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Websites scoring poorly in each of the Core Web Vitals metrics will impact its search engine ranking as Google starts to use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/search/blog/2020/11/timing-for-page-experience",
				children: "Core Web Vitals as a ranking factor"
			}),
			" for their search algorithm. Poor vitals can have an impact on your web traffic and business."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In this lesson, you’ll learn:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "A short background on Core Web Vitals." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Implications of Core Web Vitals in SEO and UX, and its impact on your website." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Why you should care about Core Web Vitals in your development process and how to measure them." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "How to improve your Core Web Vitals with Next.js and monitor changes." }),
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
export { toc as a, structuredData as i, _16_web_performance_exports as n, frontmatter as r, MDXContent as t };
