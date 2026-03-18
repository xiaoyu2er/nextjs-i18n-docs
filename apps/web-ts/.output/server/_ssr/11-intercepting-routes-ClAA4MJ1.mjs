import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/11-intercepting-routes-ClAA4MJ1.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _11_intercepting_routes_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Intercepting Routes",
	"description": "Use intercepting routes to load a new route within the current layout while masking the browser URL, useful for advanced routing patterns such as modals.",
	"related": {
		"title": "Next Steps",
		"description": "Learn how to use modals with Intercepted and Parallel Routes.",
		"links": ["app/building-your-application/routing/parallel-routes"]
	}
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Intercepting routes allows you to load a route from another part of your application within the current layout. This routing paradigm can be useful when you want to display the content of a route without the user switching to a different context."
		},
		{
			"heading": void 0,
			"content": "For example, when clicking on a photo in a feed, you can display the photo in a modal, overlaying the feed. In this case, Next.js intercepts the `/photo/123` route, masks the URL, and overlays it over `/feed`."
		},
		{
			"heading": void 0,
			"content": "However, when navigating to the photo by clicking a shareable URL or by refreshing the page, the entire photo page should render instead of the modal. No route interception should occur."
		},
		{
			"heading": "convention",
			"content": "Intercepting routes can be defined with the `(..)` convention, which is similar to relative path convention `../` but for segments."
		},
		{
			"heading": "convention",
			"content": "You can use:"
		},
		{
			"heading": "convention",
			"content": "`(.)` to match segments on the **same level**"
		},
		{
			"heading": "convention",
			"content": "`(..)` to match segments **one level above**"
		},
		{
			"heading": "convention",
			"content": "`(..)(..)` to match segments **two levels above**"
		},
		{
			"heading": "convention",
			"content": "`(...)` to match segments from the **root** `app` directory"
		},
		{
			"heading": "convention",
			"content": "For example, you can intercept the `photo` segment from within the `feed` segment by creating a `(..)photo` directory."
		},
		{
			"heading": "convention",
			"content": "> Note that the `(..)` convention is based on *route segments*, not the file-system."
		},
		{
			"heading": "modals",
			"content": "Intercepting Routes can be used together with Parallel Routes to create modals. This allows you to solve common challenges when building modals, such as:"
		},
		{
			"heading": "modals",
			"content": "Making the modal content **shareable through a URL**."
		},
		{
			"heading": "modals",
			"content": "**Preserving context** when the page is refreshed, instead of closing the modal."
		},
		{
			"heading": "modals",
			"content": "**Closing the modal on backwards navigation** rather than going to the previous route."
		},
		{
			"heading": "modals",
			"content": "**Reopening the modal on forwards navigation**."
		},
		{
			"heading": "modals",
			"content": "Consider the following UI pattern, where a user can open a photo modal from a gallery using client-side navigation, or navigate to the photo page directly from a shareable URL:"
		},
		{
			"heading": "modals",
			"content": "In the above example, the path to the `photo` segment can use the `(..)` matcher since `@modal` is a slot and **not** a segment. This means that the `photo` route is only one segment level higher, despite being two file-system levels higher."
		},
		{
			"heading": "modals",
			"content": "See the Parallel Routes documentation for a step-by-step example, or see our image gallery example."
		},
		{
			"heading": "modals",
			"content": "> **Good to know:**\n>\n> * Other examples could include opening a login modal in a top navbar while also having a dedicated `/login` page, or opening a shopping cart in a side modal."
		},
		{
			"heading": "next-steps",
			"content": "Learn how to use modals with Intercepted and Parallel Routes."
		}
	],
	"headings": [
		{
			"id": "convention",
			"content": "Convention"
		},
		{
			"id": "examples",
			"content": "Examples"
		},
		{
			"id": "modals",
			"content": "Modals"
		},
		{
			"id": "next-steps",
			"content": "Next Steps"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#convention",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Convention" })
	},
	{
		depth: 2,
		url: "#examples",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Examples" })
	},
	{
		depth: 3,
		url: "#modals",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Modals" })
	},
	{
		depth: 2,
		url: "#next-steps",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Next Steps" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		em: "em",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { Image } = _components;
	if (!Image) _missingMdxReference("Image", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Intercepting routes allows you to load a route from another part of your application within the current layout. This routing paradigm can be useful when you want to display the content of a route without the user switching to a different context." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, when clicking on a photo in a feed, you can display the photo in a modal, overlaying the feed. In this case, Next.js intercepts the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/photo/123" }),
			" route, masks the URL, and overlays it over ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/feed" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Intercepting routes soft navigation",
			srcLight: "/docs/light/intercepting-routes-soft-navigate.png",
			srcDark: "/docs/dark/intercepting-routes-soft-navigate.png",
			width: "1600",
			height: "617"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "However, when navigating to the photo by clicking a shareable URL or by refreshing the page, the entire photo page should render instead of the modal. No route interception should occur." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Intercepting routes hard navigation",
			srcLight: "/docs/light/intercepting-routes-hard-navigate.png",
			srcDark: "/docs/dark/intercepting-routes-hard-navigate.png",
			width: "1600",
			height: "604"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "convention",
			children: "Convention"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Intercepting routes can be defined with the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "(..)" }),
			" convention, which is similar to relative path convention ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "../" }),
			" but for segments."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can use:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "(.)" }),
				" to match segments on the ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "same level" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "(..)" }),
				" to match segments ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "one level above" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "(..)(..)" }),
				" to match segments ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "two levels above" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "(...)" }),
				" to match segments from the ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "root" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
				" directory"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, you can intercept the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "photo" }),
			" segment from within the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "feed" }),
			" segment by creating a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "(..)photo" }),
			" directory."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Intercepting routes folder structure",
			srcLight: "/docs/light/intercepted-routes-files.png",
			srcDark: "/docs/dark/intercepted-routes-files.png",
			width: "1600",
			height: "604"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Note that the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "(..)" }),
				" convention is based on ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "route segments" }),
				", not the file-system."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "examples",
			children: "Examples"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "modals",
			children: "Modals"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Intercepting Routes can be used together with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/parallel-routes",
				children: "Parallel Routes"
			}),
			" to create modals. This allows you to solve common challenges when building modals, such as:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Making the modal content ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "shareable through a URL" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Preserving context" }), " when the page is refreshed, instead of closing the modal."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Closing the modal on backwards navigation" }), " rather than going to the previous route."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Reopening the modal on forwards navigation" }), "."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Consider the following UI pattern, where a user can open a photo modal from a gallery using client-side navigation, or navigate to the photo page directly from a shareable URL:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Intercepting routes modal example",
			srcLight: "/docs/light/intercepted-routes-modal-example.png",
			srcDark: "/docs/dark/intercepted-routes-modal-example.png",
			width: "1600",
			height: "976"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In the above example, the path to the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "photo" }),
			" segment can use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "(..)" }),
			" matcher since ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@modal" }),
			" is a slot and ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "not" }),
			" a segment. This means that the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "photo" }),
			" route is only one segment level higher, despite being two file-system levels higher."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"See the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/parallel-routes#modals",
				children: "Parallel Routes"
			}),
			" documentation for a step-by-step example, or see our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel-labs/nextgram",
				children: "image gallery example"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know:" }) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"Other examples could include opening a login modal in a top navbar while also having a dedicated ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "/login" }),
					" page, or opening a shopping cart in a side modal."
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "next-steps",
			children: "Next Steps"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Learn how to use modals with Intercepted and Parallel Routes." })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { toc as a, structuredData as i, _11_intercepting_routes_exports as n, frontmatter as r, MDXContent as t };
