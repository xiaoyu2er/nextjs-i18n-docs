import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/06-navigate-between-pages-pages-in-nextjs-bPM03Q7W.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _06_navigate_between_pages_pages_in_nextjs_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Pages in Next.js",
	"image": "https://nextjs.org/api/learn-og?title=Pages%20in%20Next.js&amp;chapter=6",
	"headline": "Pages Router: Pages in Next.js"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "In Next.js, a page is a React Component exported from a file in the `pages` directory."
		},
		{
			"heading": void 0,
			"content": "Pages are associated with a route based on their **file name**. For example, in development:"
		},
		{
			"heading": void 0,
			"content": "`pages/index.js` is associated with the `/` route."
		},
		{
			"heading": void 0,
			"content": "`pages/posts/first-post.js` is associated with the `/posts/first-post` route."
		},
		{
			"heading": void 0,
			"content": "We already have the `pages/index.js` file, so let’s create `pages/posts/first-post.js` to see how it works."
		},
		{
			"heading": "create-a-new-page",
			"content": "Create the `posts` directory under `pages`."
		},
		{
			"heading": "create-a-new-page",
			"content": "Create a file called `first-post.js` inside the `posts` directory with the following content:"
		},
		{
			"heading": "create-a-new-page",
			"content": "The component can have any name, but you must export it as a `default` export."
		},
		{
			"heading": "create-a-new-page",
			"content": "Now, make sure that the development server is running and visit http\\://localhost:3000/posts/first-post. You should see the page:"
		},
		{
			"heading": "create-a-new-page",
			"content": "This is how you can create different pages in Next.js."
		},
		{
			"heading": "create-a-new-page",
			"content": "Simply create a JS file under the `pages` directory, and the path to the file becomes the URL path."
		},
		{
			"heading": "create-a-new-page",
			"content": "In a way, this is similar to building websites using HTML or PHP files. Instead of writing HTML you write JSX and use React Components."
		},
		{
			"heading": "create-a-new-page",
			"content": "Let's add a link to the newly added page so that we can navigate to it from the homepage."
		}
	],
	"headings": [{
		"id": "create-a-new-page",
		"content": "Create a New Page"
	}]
};
var toc = [{
	depth: 3,
	url: "#create-a-new-page",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#create-a-new-page",
		children: "Create a New Page"
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h3: "h3",
		img: "img",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In Next.js, a page is a React Component exported from a file in the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/basic-features/pages",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }), " directory"]
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Pages are associated with a route based on their ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "file name" }),
			". For example, in development:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/index.js" }),
				" is associated with the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/" }),
				" route."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/posts/first-post.js" }),
				" is associated with the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/posts/first-post" }),
				" route."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We already have the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/index.js" }),
			" file, so let’s create ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/posts/first-post.js" }),
			" to see how it works."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "create-a-new-page",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#create-a-new-page",
				children: "Create a New Page"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Create the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "posts" }),
			" directory under ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Create a file called ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "first-post.js" }),
			" inside the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "posts" }),
			" directory with the following content:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function FirstPost() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return <h1>First Post</h1>;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The component can have any name, but you must export it as a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "default" }),
			" export."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Now, make sure that the development server is running and visit ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://localhost:3000/posts/first-post",
				children: "http://localhost:3000/posts/first-post"
			}),
			". You should see the page:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/navigate-between-pages/first-post.png",
			alt: "First Post"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This is how you can create different pages in Next.js." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Simply create a JS file under the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/basic-features/pages",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }), " directory"]
			}),
			", and the path to the file becomes the URL path."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In a way, this is similar to building websites using HTML or PHP files. Instead of writing HTML you write JSX and use React Components." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Let's add a link to the newly added page so that we can navigate to it from the homepage." })
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
export { toc as a, structuredData as i, _06_navigate_between_pages_pages_in_nextjs_exports as n, frontmatter as r, MDXContent as t };
