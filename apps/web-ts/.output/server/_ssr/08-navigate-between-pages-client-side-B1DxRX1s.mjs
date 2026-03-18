import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/08-navigate-between-pages-client-side-B1DxRX1s.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _08_navigate_between_pages_client_side_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Client-Side Navigation",
	"image": "https://nextjs.org/api/learn-og?title=Client-Side%20Navigation&amp;chapter=8",
	"headline": "Pages Router: Client-Side Navigation"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "The `Link` component enables **client-side navigation** between two pages in the same Next.js app."
		},
		{
			"heading": void 0,
			"content": "Client-side navigation means that the page transition happens *using JavaScript*, which is faster than the default navigation done by the browser."
		},
		{
			"heading": void 0,
			"content": "Here’s a simple way you can verify it:"
		},
		{
			"heading": void 0,
			"content": "Use the browser’s developer tools to change the `background` CSS property of `<html>` to `yellow`."
		},
		{
			"heading": void 0,
			"content": "Click on the links to go back and forth between the two pages."
		},
		{
			"heading": void 0,
			"content": "You’ll see that the yellow background persists between page transitions."
		},
		{
			"heading": void 0,
			"content": "This shows that the browser does *not* load the full page and client-side navigation is working."
		},
		{
			"heading": void 0,
			"content": "If you’ve used `<a href=\"…\">` instead of `<Link href=\"…\">` and did this, the background color will be cleared on link clicks because the browser does a full refresh."
		},
		{
			"heading": "code-splitting-and-prefetching",
			"content": "Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially."
		},
		{
			"heading": "code-splitting-and-prefetching",
			"content": "This ensures that the homepage loads quickly even if you have hundreds of pages."
		},
		{
			"heading": "code-splitting-and-prefetching",
			"content": "Only loading the code for the page you request also means that pages become isolated. If a certain page throws an error, the rest of the application would still work."
		},
		{
			"heading": "code-splitting-and-prefetching",
			"content": "Furthermore, in a production build of Next.js, whenever `Link` components appear in the browser’s viewport, Next.js automatically **prefetches** the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!"
		},
		{
			"heading": "summary",
			"content": "Next.js automatically optimizes your application for the best performance by code splitting, client-side navigation, and prefetching (in production)."
		},
		{
			"heading": "summary",
			"content": "You create routes as files under `pages` and use the built-in `Link` component. No routing libraries are required."
		},
		{
			"heading": "summary",
			"content": "You can learn more about the `Link` component in the API reference for `next/link` and routing in general in the routing documentation."
		},
		{
			"heading": "summary",
			"content": "> **Note:** If you need to link to an *external* page outside the Next.js app, just use an `<a>` tag without `Link`."
		}
	],
	"headings": [{
		"id": "code-splitting-and-prefetching",
		"content": "Code splitting and prefetching"
	}, {
		"id": "summary",
		"content": "Summary"
	}]
};
var toc = [{
	depth: 3,
	url: "#code-splitting-and-prefetching",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#code-splitting-and-prefetching",
		children: "Code splitting and prefetching"
	}) })
}, {
	depth: 3,
	url: "#summary",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#summary",
		children: "Summary"
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
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-reference/next/link",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Link" })
			}),
			" component enables ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "client-side navigation" }),
			" between two pages in the same Next.js app."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Client-side navigation means that the page transition happens ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "using JavaScript" }),
			", which is faster than the default navigation done by the browser."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Here’s a simple way you can verify it:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Use the browser’s developer tools to change the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "background" }),
				" CSS property of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<html>" }),
				" to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "yellow" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Click on the links to go back and forth between the two pages." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "You’ll see that the yellow background persists between page transitions." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This shows that the browser does ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "not" }),
			" load the full page and client-side navigation is working."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/navigate-between-pages/client-side.gif",
			alt: "Links"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you’ve used ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<a href=\"…\">" }),
			" instead of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<Link href=\"…\">" }),
			" and did this, the background color will be cleared on link clicks because the browser does a full refresh."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "code-splitting-and-prefetching",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#code-splitting-and-prefetching",
				children: "Code splitting and prefetching"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This ensures that the homepage loads quickly even if you have hundreds of pages." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Only loading the code for the page you request also means that pages become isolated. If a certain page throws an error, the rest of the application would still work." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Furthermore, in a production build of Next.js, whenever ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-reference/next/link",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Link" })
			}),
			" components appear in the browser’s viewport, Next.js automatically ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "prefetches" }),
			" the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "summary",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#summary",
				children: "Summary"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js automatically optimizes your application for the best performance by code splitting, client-side navigation, and prefetching (in production)." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You create routes as files under ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "pages" })
			}),
			" and use the built-in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-reference/next/link",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Link" })
			}),
			" component. No routing libraries are required."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can learn more about the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Link" }),
			" component ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/api-reference/next/link",
				children: ["in the API reference for ", (0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" })]
			}),
			" and routing in general ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/routing/introduction",
				children: "in the routing documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }),
				" If you need to link to an ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "external" }),
				" page outside the Next.js app, just use an ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<a>" }),
				" tag without ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Link" }),
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
export { toc as a, structuredData as i, _08_navigate_between_pages_client_side_exports as n, frontmatter as r, MDXContent as t };
