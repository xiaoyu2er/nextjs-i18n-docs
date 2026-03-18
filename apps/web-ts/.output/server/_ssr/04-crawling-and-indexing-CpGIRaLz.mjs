import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/04-crawling-and-indexing-CpGIRaLz.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _04_crawling_and_indexing_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Crawling and Indexing",
	"image": "https://nextjs.org/api/learn-og?title=Crawling%20and%20Indexing&amp;chapter=4",
	"headline": "SEO: Crawling and Indexing"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Now that we have a general overview of how search systems and Googlebot work, we'll deep-dive into several key parts that impact Crawling and Indexing."
		},
		{
			"heading": void 0,
			"content": "In this lesson, we'll take a look at:"
		},
		{
			"heading": void 0,
			"content": "HTTP status code fundamentals."
		},
		{
			"heading": void 0,
			"content": "Metadata and what web crawlers look for when parsing web content."
		},
		{
			"heading": void 0,
			"content": "How to communicate with Google so its search crawler knows when there is new content on your site."
		},
		{
			"heading": void 0,
			"content": "How to leverage meta robot tags and canonical links to indicate to search engines your desired indexing status."
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		li: "li",
		p: "p",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Now that we have a general overview of how search systems and Googlebot work, we'll deep-dive into several key parts that impact Crawling and Indexing." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In this lesson, we'll take a look at:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "HTTP status code fundamentals." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Metadata and what web crawlers look for when parsing web content." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "How to communicate with Google so its search crawler knows when there is new content on your site." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "How to leverage meta robot tags and canonical links to indicate to search engines your desired indexing status." }),
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
export { toc as a, structuredData as i, _04_crawling_and_indexing_exports as n, frontmatter as r, MDXContent as t };
