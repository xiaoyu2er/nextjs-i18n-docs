import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-groups-CRllgcWR.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var route_groups_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Route Groups",
	"description": "Route Groups can be used to partition your Next.js application into different sections."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Route Groups are a folder convention that let you organize routes by category or team."
		},
		{
			"heading": "convention",
			"content": "A route group can be created by wrapping a folder's name in parenthesis: `(folderName)`."
		},
		{
			"heading": "convention",
			"content": "This convention indicates the folder is for organizational purposes and should **not be included** in the route's URL path."
		},
		{
			"heading": "use-cases",
			"content": "Organizing routes by team, concern, or feature."
		},
		{
			"heading": "use-cases",
			"content": "Defining multiple root layouts."
		},
		{
			"heading": "use-cases",
			"content": "Opting specific route segments into sharing a layout, while keeping others out."
		},
		{
			"heading": "caveats",
			"content": "**Full page load**: If you navigate between routes that use different root layouts, it'll trigger a full page reload. For example, navigating from `/cart` that uses `app/(shop)/layout.js` to `/blog` that uses `app/(marketing)/layout.js`. This **only** applies to multiple root layouts."
		},
		{
			"heading": "caveats",
			"content": "**Conflicting paths**: Routes in different groups should not resolve to the same URL path. For example, `(marketing)/about/page.js` and `(shop)/about/page.js` would both resolve to `/about` and cause an error."
		},
		{
			"heading": "caveats",
			"content": "**Top-level root layout**: If you use multiple root layouts without a top-level `layout.js` file, make sure your home route (/) is defined within one of the route groups, e.g. app/(marketing)/page.js."
		}
	],
	"headings": [
		{
			"id": "convention",
			"content": "Convention"
		},
		{
			"id": "use-cases",
			"content": "Use cases"
		},
		{
			"id": "caveats",
			"content": "Caveats"
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
		url: "#use-cases",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Use cases" })
	},
	{
		depth: 2,
		url: "#caveats",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Caveats" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { Image } = _components;
	if (!Image) _missingMdxReference("Image", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Route Groups are a folder convention that let you organize routes by category or team." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "convention",
			children: "Convention"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A route group can be created by wrapping a folder's name in parenthesis: ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "(folderName)" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This convention indicates the folder is for organizational purposes and should ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "not be included" }),
			" in the route's URL path."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "An example folder structure using route groups",
			srcLight: "/docs/light/project-organization-route-groups.png",
			srcDark: "/docs/dark/project-organization-route-groups.png",
			width: "1600",
			height: "849"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "use-cases",
			children: "Use cases"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Organizing routes by team, concern, or feature." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Defining multiple ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/layout#root-layout",
					children: "root layouts"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Opting specific route segments into sharing a layout, while keeping others out." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "caveats",
			children: "Caveats"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Full page load" }),
				": If you navigate between routes that use different root layouts, it'll trigger a full page reload. For example, navigating from ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/cart" }),
				" that uses ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app/(shop)/layout.js" }),
				" to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/blog" }),
				" that uses ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app/(marketing)/layout.js" }),
				". This ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "only" }),
				" applies to multiple root layouts."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Conflicting paths" }),
				": Routes in different groups should not resolve to the same URL path. For example, ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "(marketing)/about/page.js" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "(shop)/about/page.js" }),
				" would both resolve to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/about" }),
				" and cause an error."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Top-level root layout" }),
				": If you use multiple root layouts without a top-level ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
				" file, make sure your home route (/) is defined within one of the route groups, e.g. app/(marketing)/page.js."
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
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { toc as a, structuredData as i, frontmatter as n, route_groups_exports as r, MDXContent as t };
