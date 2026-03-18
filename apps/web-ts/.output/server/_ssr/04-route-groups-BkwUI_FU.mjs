import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/04-route-groups-BkwUI_FU.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _04_route_groups_exports = /* @__PURE__ */ __exportAll({
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
			"content": "In the `app` directory, nested folders are normally mapped to URL paths. However, you can mark a folder as a **Route Group** to prevent the folder from being included in the route's URL path."
		},
		{
			"heading": void 0,
			"content": "This allows you to organize your route segments and project files into logical groups without affecting the URL path structure."
		},
		{
			"heading": void 0,
			"content": "Route groups are useful for:"
		},
		{
			"heading": void 0,
			"content": "Organizing routes into groups e.g. by site section, intent, or team."
		},
		{
			"heading": void 0,
			"content": "Enabling nested layouts in the same route segment level:"
		},
		{
			"heading": void 0,
			"content": "Creating multiple nested layouts in the same segment, including multiple root layouts"
		},
		{
			"heading": void 0,
			"content": "Adding a layout to a subset of routes in a common segment"
		},
		{
			"heading": "convention",
			"content": "A route group can be created by wrapping a folder's name in parenthesis: `(folderName)`"
		},
		{
			"heading": "organize-routes-without-affecting-the-url-path",
			"content": "To organize routes without affecting the URL, create a group to keep related routes together. The folders in parenthesis will be omitted from the URL (e.g. `(marketing)` or `(shop)`)."
		},
		{
			"heading": "organize-routes-without-affecting-the-url-path",
			"content": "Even though routes inside `(marketing)` and `(shop)` share the same URL hierarchy, you can create a different layout for each group by adding a `layout.js` file inside their folders."
		},
		{
			"heading": "opting-specific-segments-into-a-layout",
			"content": "To opt specific routes into a layout, create a new route group (e.g. `(shop)`) and move the routes that share the same layout into the group (e.g. `account` and `cart`). The routes outside of the group will not share the layout (e.g. `checkout`)."
		},
		{
			"heading": "creating-multiple-root-layouts",
			"content": "To create multiple root layouts, remove the top-level `layout.js` file, and add a `layout.js` file inside each route groups. This is useful for partitioning an application into sections that have a completely different UI or experience. The `<html>` and `<body>` tags need to be added to each root layout."
		},
		{
			"heading": "creating-multiple-root-layouts",
			"content": "In the example above, both `(marketing)` and `(shop)` have their own root layout."
		},
		{
			"heading": "creating-multiple-root-layouts",
			"content": "> **Good to know**:\n>\n> * The naming of route groups has no special significance other than for organization. They do not affect the URL path.\n> * Routes that include a route group **should not** resolve to the same URL path as other routes. For example, since route groups don't affect URL structure, `(marketing)/about/page.js` and `(shop)/about/page.js` would both resolve to `/about` and cause an error.\n> * If you use multiple root layouts without a top-level `layout.js` file, your home `page.js` file should be defined in one of the route groups, For example: `app/(marketing)/page.js`.\n> * Navigating **across multiple root layouts** will cause a **full page load** (as opposed to a client-side navigation). For example, navigating from `/cart` that uses `app/(shop)/layout.js` to `/blog` that uses `app/(marketing)/layout.js` will cause a full page load. This **only** applies to multiple root layouts."
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
			"id": "organize-routes-without-affecting-the-url-path",
			"content": "Organize routes without affecting the URL path"
		},
		{
			"id": "opting-specific-segments-into-a-layout",
			"content": "Opting specific segments into a layout"
		},
		{
			"id": "creating-multiple-root-layouts",
			"content": "Creating multiple root layouts"
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
		url: "#organize-routes-without-affecting-the-url-path",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Organize routes without affecting the URL path" })
	},
	{
		depth: 3,
		url: "#opting-specific-segments-into-a-layout",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Opting specific segments into a layout" })
	},
	{
		depth: 3,
		url: "#creating-multiple-root-layouts",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Creating multiple root layouts" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		h3: "h3",
		hr: "hr",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { Image } = _components;
	if (!Image) _missingMdxReference("Image", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" directory, nested folders are normally mapped to URL paths. However, you can mark a folder as a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Route Group" }),
			" to prevent the folder from being included in the route's URL path."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This allows you to organize your route segments and project files into logical groups without affecting the URL path structure." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Route groups are useful for:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#organize-routes-without-affecting-the-url-path",
				children: "Organizing routes into groups"
			}), " e.g. by site section, intent, or team."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Enabling ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/routing/pages-and-layouts",
					children: "nested layouts"
				}),
				" in the same route segment level:",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "#creating-multiple-root-layouts",
						children: "Creating multiple nested layouts in the same segment, including multiple root layouts"
					}) }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "#opting-specific-segments-into-a-layout",
						children: "Adding a layout to a subset of routes in a common segment"
					}) }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "convention",
			children: "Convention"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: ["A route group can be created by wrapping a folder's name in parenthesis: ", (0, import_jsx_runtime.jsx)(_components.code, { children: "(folderName)" })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "examples",
			children: "Examples"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "organize-routes-without-affecting-the-url-path",
			children: "Organize routes without affecting the URL path"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To organize routes without affecting the URL, create a group to keep related routes together. The folders in parenthesis will be omitted from the URL (e.g. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "(marketing)" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "(shop)" }),
			")."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Organizing Routes with Route Groups",
			srcLight: "/docs/light/route-group-organisation.png",
			srcDark: "/docs/dark/route-group-organisation.png",
			width: "1600",
			height: "930"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Even though routes inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "(marketing)" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "(shop)" }),
			" share the same URL hierarchy, you can create a different layout for each group by adding a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
			" file inside their folders."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Route Groups with Multiple Layouts",
			srcLight: "/docs/light/route-group-multiple-layouts.png",
			srcDark: "/docs/dark/route-group-multiple-layouts.png",
			width: "1600",
			height: "768"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "opting-specific-segments-into-a-layout",
			children: "Opting specific segments into a layout"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To opt specific routes into a layout, create a new route group (e.g. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "(shop)" }),
			") and move the routes that share the same layout into the group (e.g. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "account" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "cart" }),
			"). The routes outside of the group will not share the layout (e.g. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "checkout" }),
			")."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Route Groups with Opt-in Layouts",
			srcLight: "/docs/light/route-group-opt-in-layouts.png",
			srcDark: "/docs/dark/route-group-opt-in-layouts.png",
			width: "1600",
			height: "930"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "creating-multiple-root-layouts",
			children: "Creating multiple root layouts"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To create multiple ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required",
				children: "root layouts"
			}),
			", remove the top-level ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
			" file, and add a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
			" file inside each route groups. This is useful for partitioning an application into sections that have a completely different UI or experience. The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<html>" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<body>" }),
			" tags need to be added to each root layout."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Route Groups with Multiple Root Layouts",
			srcLight: "/docs/light/route-group-multiple-root-layouts.png",
			srcDark: "/docs/dark/route-group-multiple-root-layouts.png",
			width: "1600",
			height: "687"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In the example above, both ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "(marketing)" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "(shop)" }),
			" have their own root layout."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }), ":"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: "The naming of route groups has no special significance other than for organization. They do not affect the URL path." }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"Routes that include a route group ",
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "should not" }),
					" resolve to the same URL path as other routes. For example, since route groups don't affect URL structure, ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "(marketing)/about/page.js" }),
					" and ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "(shop)/about/page.js" }),
					" would both resolve to ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "/about" }),
					" and cause an error."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"If you use multiple root layouts without a top-level ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
					" file, your home ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
					" file should be defined in one of the route groups, For example: ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "app/(marketing)/page.js" }),
					"."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"Navigating ",
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "across multiple root layouts" }),
					" will cause a ",
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "full page load" }),
					" (as opposed to a client-side navigation). For example, navigating from ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "/cart" }),
					" that uses ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "app/(shop)/layout.js" }),
					" to ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "/blog" }),
					" that uses ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "app/(marketing)/layout.js" }),
					" will cause a full page load. This ",
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "only" }),
					" applies to multiple root layouts."
				] }),
				"\n"
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
export { toc as a, structuredData as i, _04_route_groups_exports as n, frontmatter as r, MDXContent as t };
