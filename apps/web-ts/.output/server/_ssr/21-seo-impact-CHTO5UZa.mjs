import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/21-seo-impact-CHTO5UZa.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _21_seo_impact_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "SEO Impact",
	"image": "https://nextjs.org/api/learn-og?title=SEO%20Impact&amp;chapter=21",
	"headline": "SEO: SEO Impact"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "The main objective of Google's search engine is to give users the best results possible while taking localization and misspellings into account. In every case, Google cares about giving users a fast and smooth result with great website experience. Web page speed on mobile devices has been a ranking factor since 2018. However, it's not been clear what specific performance metrics the Google Search algorithm uses as part of ranking until now."
		},
		{
			"heading": void 0,
			"content": "This changed in June 2021, when Google provided a set of specific metrics and ranges to analyze and optimize your performance."
		},
		{
			"heading": "lighthouse-v6-weights-for-vitals",
			"content": "The three metrics are not necessarily valued equally. In Lighthouse, different weights are assigned to each of the Core Web Vitals:"
		},
		{
			"heading": "lighthouse-v6-weights-for-vitals",
			"content": "**Largest Contentful Paint**: 25%"
		},
		{
			"heading": "lighthouse-v6-weights-for-vitals",
			"content": "**Total Blocking Time**: 25%"
		},
		{
			"heading": "lighthouse-v6-weights-for-vitals",
			"content": "**First Contentful Paint**: 15%"
		},
		{
			"heading": "lighthouse-v6-weights-for-vitals",
			"content": "**Speed Index**: 15%"
		},
		{
			"heading": "lighthouse-v6-weights-for-vitals",
			"content": "**Time to Interactive**: 15%"
		},
		{
			"heading": "lighthouse-v6-weights-for-vitals",
			"content": "**Cumulative Layout Shift**: 5%"
		},
		{
			"heading": "lighthouse-v6-weights-for-vitals",
			"content": "This is similar to First Input Delay."
		},
		{
			"heading": "lighthouse-v6-weights-for-vitals",
			"content": "**Note:** The Google ranking impact will be the same for all pages in the good range for all Core Web Vitals, regardless of their individual Core Web Vitals scores."
		},
		{
			"heading": "ux-impact",
			"content": "Most conversations around Core Web Vitals are primarily focused on SEO."
		},
		{
			"heading": "ux-impact",
			"content": "While it's true that Core Web Vitals are an initiative designed to measure and push the improvement of page experience and search ranking, it's the users who ultimately benefit from these changes."
		},
		{
			"heading": "ux-impact",
			"content": "Core Web Vitals help to strive for the best page experience. According to a study performed by Amazon in 2012, one additional second of load time could potentially cost the company 1.6 billion USD. Studies like this showcase the importance of a great page experience and a fast website, both of which Core Web Vitals help to achieve."
		},
		{
			"heading": "further-reading",
			"content": "Chromium: The Science Behind Web Vitals"
		}
	],
	"headings": [
		{
			"id": "lighthouse-v6-weights-for-vitals",
			"content": "Lighthouse (v6) Weights for Vitals"
		},
		{
			"id": "ux-impact",
			"content": "UX Impact"
		},
		{
			"id": "further-reading",
			"content": "Further Reading"
		}
	]
};
var toc = [
	{
		depth: 3,
		url: "#lighthouse-v6-weights-for-vitals",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#lighthouse-v6-weights-for-vitals",
			children: "Lighthouse (v6) Weights for Vitals"
		}) })
	},
	{
		depth: 3,
		url: "#ux-impact",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#ux-impact",
			children: "UX Impact"
		}) })
	},
	{
		depth: 3,
		url: "#further-reading",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#further-reading",
			children: "Further Reading"
		}) })
	}
];
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
			"The main objective of Google's search engine is to give users the best results possible while taking localization and misspellings into account. In every case, Google cares about giving users a fast and smooth result with great website experience. ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/web/updates/2018/07/search-ads-speed",
				children: "Web page speed"
			}),
			" on mobile devices has been a ranking factor since 2018. However, it's not been clear what specific performance metrics the Google Search algorithm uses as part of ranking until now."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This changed in June 2021, when Google provided ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/search/blog/2021/04/more-details-page-experience",
				children: "a set of specific metrics and ranges"
			}),
			" to analyze and optimize your performance."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/seo/page-experience.png",
			alt: "Search experience signals details for the June 2021 Google algorithm update."
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "lighthouse-v6-weights-for-vitals",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#lighthouse-v6-weights-for-vitals",
				children: "Lighthouse (v6) Weights for Vitals"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The three metrics are not necessarily valued equally. In ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/web/tools/lighthouse",
				children: "Lighthouse"
			}),
			", different weights are assigned to each of the Core Web Vitals:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Largest Contentful Paint" }), ": 25%"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Total Blocking Time" }), ": 25%"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "First Contentful Paint" }), ": 15%"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Speed Index" }), ": 15%"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Time to Interactive" }), ": 15%"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Cumulative Layout Shift" }), ": 5%"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This is similar to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/learn/seo/fid",
				children: "First Input Delay"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }), " The Google ranking impact will be the same for all pages in the good range for all Core Web Vitals, regardless of their individual Core Web Vitals scores."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "ux-impact",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#ux-impact",
				children: "UX Impact"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Most conversations around Core Web Vitals are primarily focused on SEO." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "While it's true that Core Web Vitals are an initiative designed to measure and push the improvement of page experience and search ranking, it's the users who ultimately benefit from these changes." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Core Web Vitals help to strive for the best page experience. According to a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.fastcompany.com/1825005/how-one-second-could-cost-amazon-16-billion-sales",
				children: "study performed by Amazon in 2012"
			}),
			", one additional second of load time could potentially cost the company 1.6 billion USD. Studies like this showcase the importance of a great page experience and a fast website, both of which Core Web Vitals help to achieve."
		] }),
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
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Chromium: ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://blog.chromium.org/2020/05/the-science-behind-web-vitals.html",
				children: "The Science Behind Web Vitals"
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
export { toc as a, structuredData as i, _21_seo_impact_exports as n, frontmatter as r, MDXContent as t };
