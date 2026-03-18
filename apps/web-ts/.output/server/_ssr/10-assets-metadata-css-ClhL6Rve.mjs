import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/10-assets-metadata-css-ClhL6Rve.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _10_assets_metadata_css_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Assets, Metadata, and CSS",
	"image": "https://nextjs.org/api/learn-og?title=Assets,%20Metadata,%20and%20CSS&amp;chapter=10",
	"headline": "Pages Router: Assets, Metadata, and CSS"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "The second page we added currently does not have styling. Let's add some CSS to style the page."
		},
		{
			"heading": void 0,
			"content": "Next.js has built-in support for CSS and Sass. For this course, we will use CSS."
		},
		{
			"heading": void 0,
			"content": "This lesson will also talk about how Next.js handles static assets like images and page metadata like the `<title>` tag."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "In this lesson, you’ll learn:"
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "How to add static files (images, etc) to Next.js."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "How to customize what goes inside the `<head>` for each page."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "How to create a reusable React component which is styled using CSS Modules."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "How to add global CSS in `pages/_app.js`."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "Some useful tips for styling in Next.js."
		},
		{
			"heading": "prerequisites",
			"content": "Basic CSS knowledge. This course will go over how to add CSS in a Next.js app, but it won't cover CSS fundamentals."
		},
		{
			"heading": "prerequisites",
			"content": "> If you’re looking for detailed documentation on Next.js styling, take a look at the CSS documentation."
		}
	],
	"headings": [{
		"id": "what-youll-learn-in-this-lesson",
		"content": "What You’ll Learn in This Lesson"
	}, {
		"id": "prerequisites",
		"content": "Prerequisites"
	}]
};
var toc = [{
	depth: 3,
	url: "#what-youll-learn-in-this-lesson",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#what-youll-learn-in-this-lesson",
		children: "What You’ll Learn in This Lesson"
	}) })
}, {
	depth: 3,
	url: "#prerequisites",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#prerequisites",
		children: "Prerequisites"
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The second page we added currently does not have styling. Let's add some CSS to style the page." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js has built-in support for ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/built-in-css-support",
				children: "CSS"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/built-in-css-support#sass-support",
				children: "Sass"
			}),
			". For this course, we will use CSS."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This lesson will also talk about how Next.js handles static assets like images and page metadata like the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<title>" }),
			" tag."
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In this lesson, you’ll learn:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"How to add ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/static-file-serving",
					children: "static files"
				}),
				" (images, etc) to Next.js."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"How to customize what goes inside the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<head>" }),
				" for each page."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"How to create a reusable React component which is styled using ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/built-in-css-support#adding-component-level-css",
					children: "CSS Modules"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"How to ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/built-in-css-support#adding-a-global-stylesheet",
					children: "add global CSS"
				}),
				" in ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/advanced-features/custom-app",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_app.js" })
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Some useful tips for styling in Next.js." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "prerequisites",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#prerequisites",
				children: "Prerequisites"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Basic CSS knowledge. This course will go over how to add CSS in a Next.js app, but it won't cover CSS fundamentals." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"If you’re looking for detailed documentation on Next.js styling, take a look ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/built-in-css-support",
					children: "at the CSS documentation"
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
export { toc as a, structuredData as i, _10_assets_metadata_css_exports as n, frontmatter as r, MDXContent as t };
