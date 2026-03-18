import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/22-data-fetching-pre-rendering-2cSe41jK.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _22_data_fetching_pre_rendering_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Pre-rendering",
	"image": "https://nextjs.org/api/learn-og?title=Pre-rendering&amp;chapter=22",
	"headline": "Pages Router: Pre-rendering"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Before we talk about data fetching, let’s talk about one of the most important concepts in Next.js: **Pre-rendering**."
		},
		{
			"heading": void 0,
			"content": "By default, Next.js pre-renders every page. This means that Next.js *generates HTML for each page in advance*, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO."
		},
		{
			"heading": void 0,
			"content": "Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called **hydration**.)"
		},
		{
			"heading": "check-that-pre-rendering-is-happening",
			"content": "You can check that pre-rendering is happening by taking the following steps:"
		},
		{
			"heading": "check-that-pre-rendering-is-happening",
			"content": "Disable JavaScript in your browser. (Here’s how in Chrome)."
		},
		{
			"heading": "check-that-pre-rendering-is-happening",
			"content": "Try accessing this page (the final result of this tutorial)."
		},
		{
			"heading": "check-that-pre-rendering-is-happening",
			"content": "You should see that your app is rendered without JavaScript. That’s because Next.js has pre-rendered the app into static HTML, allowing you to see the app UI without running JavaScript."
		},
		{
			"heading": "check-that-pre-rendering-is-happening",
			"content": "> **Note**: You can also try the above steps on `localhost`, but CSS won’t be loaded if you disable JavaScript."
		},
		{
			"heading": "check-that-pre-rendering-is-happening",
			"content": "If your app is a plain React.js app (without Next.js), there’s no pre-rendering, so you won’t be able to see the app if you disable JavaScript. For example:"
		},
		{
			"heading": "check-that-pre-rendering-is-happening",
			"content": "Enable JavaScript in your browser and check out this page. This is a plain React.js app built with Create React App."
		},
		{
			"heading": "check-that-pre-rendering-is-happening",
			"content": "Now, disable JavaScript and access the same page again."
		},
		{
			"heading": "check-that-pre-rendering-is-happening",
			"content": "You won’t see the app anymore — instead, it’ll say \"You need to enable JavaScript to run this app.\" This is because the app is not pre-rendered into static HTML."
		},
		{
			"heading": "summary-pre-rendering-vs-no-pre-rendering",
			"content": "Here’s a quick graphical summary:"
		},
		{
			"heading": "summary-pre-rendering-vs-no-pre-rendering",
			"content": "Next, let’s talk about **two forms** of pre-rendering in Next.js."
		}
	],
	"headings": [{
		"id": "check-that-pre-rendering-is-happening",
		"content": "Check That Pre-rendering Is Happening"
	}, {
		"id": "summary-pre-rendering-vs-no-pre-rendering",
		"content": "Summary: Pre-rendering vs. No Pre-rendering"
	}]
};
var toc = [{
	depth: 3,
	url: "#check-that-pre-rendering-is-happening",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#check-that-pre-rendering-is-happening",
		children: "Check That Pre-rendering Is Happening"
	}) })
}, {
	depth: 3,
	url: "#summary-pre-rendering-vs-no-pre-rendering",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#summary-pre-rendering-vs-no-pre-rendering",
		children: "Summary: Pre-rendering vs. No Pre-rendering"
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		em: "em",
		h3: "h3",
		img: "img",
		li: "li",
		ol: "ol",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Before we talk about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching",
				children: "data fetching"
			}),
			", let’s talk about one of the most important concepts in Next.js: ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#pre-rendering",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Pre-rendering" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"By default, Next.js pre-renders every page. This means that Next.js ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "generates HTML for each page in advance" }),
			", instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://en.wikipedia.org/wiki/Search_engine_optimization",
				children: "SEO"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "hydration" }),
			".)"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "check-that-pre-rendering-is-happening",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#check-that-pre-rendering-is-happening",
				children: "Check That Pre-rendering Is Happening"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can check that pre-rendering is happening by taking the following steps:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Disable JavaScript in your browser. (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developer.chrome.com/docs/devtools/javascript/disable/",
					children: "Here’s how in Chrome"
				}),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://next-learn-starter.vercel.app/",
				children: "Try accessing this page"
			}), " (the final result of this tutorial)."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You should see that your app is rendered without JavaScript. That’s because Next.js has pre-rendered the app into static HTML, allowing you to see the app UI without running JavaScript." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note" }),
				": You can also try the above steps on ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "localhost" }),
				", but CSS won’t be loaded if you disable JavaScript."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If your app is a plain React.js app (without Next.js), there’s no ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#pre-rendering",
				children: "pre-rendering"
			}),
			", so you won’t be able to see the app if you disable JavaScript. For example:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Enable JavaScript in your browser and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://create-react-template.vercel.app/",
					children: "check out this page"
				}),
				". This is a plain React.js app built with ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://create-react-app.dev/",
					children: "Create React App"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Now, disable JavaScript and access ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://create-react-template.vercel.app/",
					children: "the same page"
				}),
				" again."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "You won’t see the app anymore — instead, it’ll say \"You need to enable JavaScript to run this app.\" This is because the app is not pre-rendered into static HTML." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "summary-pre-rendering-vs-no-pre-rendering",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#summary-pre-rendering-vs-no-pre-rendering",
				children: "Summary: Pre-rendering vs. No Pre-rendering"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Here’s a quick graphical summary:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/data-fetching/pre-rendering.png",
			alt: "Pre-rendering"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/data-fetching/no-pre-rendering.png",
			alt: "No pre-rendering"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next, let’s talk about ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "two forms" }),
			" of pre-rendering in Next.js."
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
export { toc as a, structuredData as i, _22_data_fetching_pre_rendering_exports as n, frontmatter as r, MDXContent as t };
