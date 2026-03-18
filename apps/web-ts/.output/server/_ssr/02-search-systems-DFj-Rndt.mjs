import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/02-search-systems-DFj-Rndt.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _02_search_systems_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Search Systems",
	"image": "https://nextjs.org/api/learn-og?title=Search%20Systems&amp;chapter=2",
	"headline": "SEO: Search Systems"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Search Systems are what you typically refer to as Search Engines (Google, Bing, DuckDuckGo, etc.). They are massively complex systems that tackle some of the biggest challenges in technology history."
		},
		{
			"heading": void 0,
			"content": "Search Systems have four main responsibilities:"
		},
		{
			"heading": void 0,
			"content": "**Crawling**: the process of going through the Web and parsing the content in all websites. This is a massive task as there are over 350 million domains available."
		},
		{
			"heading": void 0,
			"content": "**Indexing**: finding places to store all of the data gathered during the crawling stage so it can be accessed."
		},
		{
			"heading": void 0,
			"content": "**Rendering**: executing any resources on the page such as JavaScript that might enhance the features and enrich content on the site. This process doesn't happen for all pages that are crawled and sometimes it happens before the content is actually indexed. Rendering might happen after indexing if there are no available resources to perform the task at the time of the crawl."
		},
		{
			"heading": void 0,
			"content": "**Ranking**: querying data to craft relevant results pages based on user input. This is where the different ranking criteria are applied in Search engines to give users the best answer to fulfill their intent."
		},
		{
			"heading": void 0,
			"content": "In the next section, we will learn more specifically how Googlebot works. Googlebot is Google's internet crawler, the part of the search system that gathers all the information needed to create the massive database of content to serve search results."
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
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Search Systems are what you typically refer to as Search Engines (Google, Bing, DuckDuckGo, etc.). They are massively complex systems that tackle some of the biggest challenges in technology history." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Search Systems have four main responsibilities:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Crawling" }),
				": the process of going through the Web and parsing the content in all websites. This is a massive task as there are ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://www.businesswire.com/news/home/20200528005832/en/Internet-Grows-to-366.8-Million-Domain-Name-Registrations-at-the-End-of-the-First-Quarter-of-2020",
					children: "over 350 million domains"
				}),
				" available."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Indexing" }), ": finding places to store all of the data gathered during the crawling stage so it can be accessed."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Rendering" }), ": executing any resources on the page such as JavaScript that might enhance the features and enrich content on the site. This process doesn't happen for all pages that are crawled and sometimes it happens before the content is actually indexed. Rendering might happen after indexing if there are no available resources to perform the task at the time of the crawl."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Ranking" }), ": querying data to craft relevant results pages based on user input. This is where the different ranking criteria are applied in Search engines to give users the best answer to fulfill their intent."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In the next section, we will learn more specifically how Googlebot works. Googlebot is Google's internet crawler, the part of the search system that gathers all the information needed to create the massive database of content to serve search results." })
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
export { toc as a, structuredData as i, _02_search_systems_exports as n, frontmatter as r, MDXContent as t };
