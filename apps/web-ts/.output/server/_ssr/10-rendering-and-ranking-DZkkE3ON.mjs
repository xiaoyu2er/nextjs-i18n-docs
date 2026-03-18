import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/10-rendering-and-ranking-DZkkE3ON.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _10_rendering_and_ranking_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Rendering and Ranking",
	"image": "https://nextjs.org/api/learn-og?title=Rendering%20and%20Ranking&amp;chapter=10",
	"headline": "SEO: Rendering and Ranking"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "JavaScript is an important part of the web development ecosystem. In the past, most programming languages were sending all content directly from the server."
		},
		{
			"heading": void 0,
			"content": "With technology like JavaScript, fetching information from the browser became more popular than ever. This, in turn, affected search engines and their ability to understand pages, as most bots were only parsing the initial HTML from the server and loading it to the browser."
		},
		{
			"heading": void 0,
			"content": "In this lesson, we'll talk about:"
		},
		{
			"heading": void 0,
			"content": "Rendering strategies, such as Client-Side Rendering (CSR), Incremental Static Regeneration (ISR), Static Site Generation (SSG), and Server-Side Rendering (SSR)."
		},
		{
			"heading": void 0,
			"content": "How URL structure can impact SEO ranking."
		},
		{
			"heading": void 0,
			"content": "Incorporating headings and internal links to optimize your search engine results page ranking."
		},
		{
			"heading": void 0,
			"content": "Let's dive in!"
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "JavaScript is an important part of the web development ecosystem. In the past, most programming languages were sending all content directly from the server." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "With technology like JavaScript, fetching information from the browser became more popular than ever. This, in turn, affected search engines and their ability to understand pages, as most bots were only parsing the initial HTML from the server and loading it to the browser." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In this lesson, we'll talk about:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Rendering strategies, such as Client-Side Rendering (CSR), Incremental Static Regeneration (ISR), Static Site Generation (SSG), and Server-Side Rendering (SSR)." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "How URL structure can impact SEO ranking." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Incorporating headings and internal links to optimize your search engine results page ranking." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Let's dive in!" })
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
export { toc as a, structuredData as i, _10_rendering_and_ranking_exports as n, frontmatter as r, MDXContent as t };
