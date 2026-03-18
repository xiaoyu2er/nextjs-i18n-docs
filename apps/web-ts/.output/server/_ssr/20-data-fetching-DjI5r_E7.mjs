import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/20-data-fetching-DjI5r_E7.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _20_data_fetching_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Pre-rendering and Data Fetching",
	"image": "https://nextjs.org/api/learn-og?title=Pre-rendering%20and%20Data%20Fetching&amp;chapter=20",
	"headline": "Pages Router: Pre-rendering and Data Fetching"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "We’d like to create a blog (here’s the desired result), but so far we’ve added no blog content. In this lesson, we’ll learn how to fetch external blog data into our app. We’ll store the blog content in the file system, but it’ll work if the content is stored elsewhere (e.g. database or Headless CMS)."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "In this lesson, you’ll learn about:"
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "Next.js’ pre-rendering feature."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "The two forms of pre-rendering: Static Generation and Server-side Rendering."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "Static Generation with data, and without data."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "`getStaticProps` and how to use it to import external blog data into the index page."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "Some useful information on `getStaticProps`."
		}
	],
	"headings": [{
		"id": "what-youll-learn-in-this-lesson",
		"content": "What You’ll Learn in This Lesson"
	}]
};
var toc = [{
	depth: 3,
	url: "#what-youll-learn-in-this-lesson",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#what-youll-learn-in-this-lesson",
		children: "What You’ll Learn in This Lesson"
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We’d like to create a blog (here’s ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://next-learn-starter.vercel.app/",
				children: "the desired result"
			}),
			"), but so far we’ve added no blog content. In this lesson, we’ll learn how to fetch external blog data into our app. We’ll store the blog content in the file system, but it’ll work if the content is stored elsewhere (e.g. database or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://en.wikipedia.org/wiki/Headless_content_management_system",
				children: "Headless CMS"
			}),
			")."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "what-youll-learn-in-this-lesson",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#what-youll-learn-in-this-lesson",
				children: "What You’ll Learn in This Lesson"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In this lesson, you’ll learn about:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Next.js’ ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/pages#pre-rendering",
					children: "pre-rendering"
				}),
				" feature."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The two forms of pre-rendering: ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/pages#static-generation-recommended",
					children: "Static Generation"
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/pages#server-side-rendering",
					children: "Server-side Rendering"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Static Generation ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/pages#static-generation-with-data",
					children: "with data"
				}),
				", and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/pages#static-generation-without-data",
					children: "without data"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}), " and how to use it to import external blog data into the index page."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Some useful information on ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
				}),
				"."
			] }),
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
export { toc as a, structuredData as i, _20_data_fetching_exports as n, frontmatter as r, MDXContent as t };
