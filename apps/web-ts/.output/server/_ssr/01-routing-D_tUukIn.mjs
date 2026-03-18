import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/01-routing-D_tUukIn.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _01_routing_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Routing Fundamentals",
	"description": "Learn the fundamentals of routing for front-end applications.",
	"nav_title": "Routing"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "The skeleton of every application is routing. This page will introduce you to the **fundamental concepts** of routing for the web and how to handle routing in Next.js."
		},
		{
			"heading": "terminology",
			"content": "First, you will see these terms being used throughout the documentation. Here's a quick reference:"
		},
		{
			"heading": "terminology",
			"content": "**Tree:** A convention for visualizing a hierarchical structure. For example, a component tree with parent and children components, a folder structure, etc."
		},
		{
			"heading": "terminology",
			"content": "**Subtree:** Part of a tree, starting at a new root (first) and ending at the leaves (last)."
		},
		{
			"heading": "terminology",
			"content": "**Root**: The first node in a tree or subtree, such as a root layout."
		},
		{
			"heading": "terminology",
			"content": "**Leaf:** Nodes in a subtree that have no children, such as the last segment in a URL path."
		},
		{
			"heading": "terminology",
			"content": "**URL Segment:** Part of the URL path delimited by slashes."
		},
		{
			"heading": "terminology",
			"content": "**URL Path:** Part of the URL that comes after the domain (composed of segments)."
		},
		{
			"heading": "the-app-router",
			"content": "In version 13, Next.js introduced a new **App Router** built on React Server Components, which supports shared layouts, nested routing, loading states, error handling, and more."
		},
		{
			"heading": "the-app-router",
			"content": "The App Router works in a new directory named `app`. The `app` directory works alongside the `pages` directory to allow for incremental adoption. This allows you to opt some routes of your application into the new behavior while keeping other routes in the `pages` directory for previous behavior. If your application uses the `pages` directory, please also see the Pages Router documentation."
		},
		{
			"heading": "the-app-router",
			"content": "> **Good to know**: The App Router takes priority over the Pages Router. Routes across directories should not resolve to the same URL path and will cause a build-time error to prevent a conflict."
		},
		{
			"heading": "the-app-router",
			"content": "By default, components inside `app` are React Server Components. This is a performance optimization and allows you to easily adopt them, and you can also use Client Components."
		},
		{
			"heading": "the-app-router",
			"content": "> **Recommendation:** Check out the Server page if you're new to Server Components."
		},
		{
			"heading": "roles-of-folders-and-files",
			"content": "Next.js uses a file-system based router where:"
		},
		{
			"heading": "roles-of-folders-and-files",
			"content": "**Folders** are used to define routes. A route is a single path of nested folders, following the file-system hierarchy from the **root folder** down to a final **leaf folder** that includes a `page.js` file. See Defining Routes."
		},
		{
			"heading": "roles-of-folders-and-files",
			"content": "**Files** are used to create UI that is shown for a route segment. See special files."
		},
		{
			"heading": "route-segments",
			"content": "Each folder in a route represents a **route segment**. Each route segment is mapped to a corresponding **segment** in a **URL path**."
		},
		{
			"heading": "nested-routes",
			"content": "To create a nested route, you can nest folders inside each other. For example, you can add a new `/dashboard/settings` route by nesting two new folders in the `app` directory."
		},
		{
			"heading": "nested-routes",
			"content": "The `/dashboard/settings` route is composed of three segments:"
		},
		{
			"heading": "nested-routes",
			"content": "`/` (Root segment)"
		},
		{
			"heading": "nested-routes",
			"content": "`dashboard` (Segment)"
		},
		{
			"heading": "nested-routes",
			"content": "`settings` (Leaf segment)"
		},
		{
			"heading": "file-conventions",
			"content": "Next.js provides a set of special files to create UI with specific behavior in nested routes:"
		},
		{
			"heading": "file-conventions",
			"content": "`layout`"
		},
		{
			"heading": "file-conventions",
			"content": "Shared UI for a segment and its children"
		},
		{
			"heading": "file-conventions",
			"content": "`page`"
		},
		{
			"heading": "file-conventions",
			"content": "Unique UI of a route and make routes publicly accessible"
		},
		{
			"heading": "file-conventions",
			"content": "`loading`"
		},
		{
			"heading": "file-conventions",
			"content": "Loading UI for a segment and its children"
		},
		{
			"heading": "file-conventions",
			"content": "`not-found`"
		},
		{
			"heading": "file-conventions",
			"content": "Not found UI for a segment and its children"
		},
		{
			"heading": "file-conventions",
			"content": "`error`"
		},
		{
			"heading": "file-conventions",
			"content": "Error UI for a segment and its children"
		},
		{
			"heading": "file-conventions",
			"content": "`global-error`"
		},
		{
			"heading": "file-conventions",
			"content": "Global Error UI"
		},
		{
			"heading": "file-conventions",
			"content": "`route`"
		},
		{
			"heading": "file-conventions",
			"content": "Server-side API endpoint"
		},
		{
			"heading": "file-conventions",
			"content": "`template`"
		},
		{
			"heading": "file-conventions",
			"content": "Specialized re-rendered Layout UI"
		},
		{
			"heading": "file-conventions",
			"content": "`default`"
		},
		{
			"heading": "file-conventions",
			"content": "Fallback UI for Parallel Routes"
		},
		{
			"heading": "file-conventions",
			"content": "> **Good to know**: `.js`, `.jsx`, or `.tsx` file extensions can be used for special files."
		},
		{
			"heading": "component-hierarchy",
			"content": "The React components defined in special files of a route segment are rendered in a specific hierarchy:"
		},
		{
			"heading": "component-hierarchy",
			"content": "`layout.js`"
		},
		{
			"heading": "component-hierarchy",
			"content": "`template.js`"
		},
		{
			"heading": "component-hierarchy",
			"content": "`error.js` (React error boundary)"
		},
		{
			"heading": "component-hierarchy",
			"content": "`loading.js` (React suspense boundary)"
		},
		{
			"heading": "component-hierarchy",
			"content": "`not-found.js` (React error boundary)"
		},
		{
			"heading": "component-hierarchy",
			"content": "`page.js` or nested `layout.js`"
		},
		{
			"heading": "component-hierarchy",
			"content": "In a nested route, the components of a segment will be nested **inside** the components of its parent segment."
		},
		{
			"heading": "colocation",
			"content": "In addition to special files, you have the option to colocate your own files (e.g. components, styles, tests, etc) inside folders in the `app` directory."
		},
		{
			"heading": "colocation",
			"content": "This is because while folders define routes, only the contents returned by `page.js` or `route.js` are publicly addressable."
		},
		{
			"heading": "colocation",
			"content": "Learn more about Project Organization and Colocation."
		},
		{
			"heading": "advanced-routing-patterns",
			"content": "The App Router also provides a set of conventions to help you implement more advanced routing patterns. These include:"
		},
		{
			"heading": "advanced-routing-patterns",
			"content": "Parallel Routes: Allow you to simultaneously show two or more pages in the same view that can be navigated independently. You can use them for split views that have their own sub-navigation. E.g. Dashboards."
		},
		{
			"heading": "advanced-routing-patterns",
			"content": "Intercepting Routes: Allow you to intercept a route and show it in the context of another route. You can use these when keeping the context for the current page is important. E.g. Seeing all tasks while editing one task or expanding a photo in a feed."
		},
		{
			"heading": "advanced-routing-patterns",
			"content": "These patterns allow you to build richer and more complex UIs, democratizing features that were historically complex for small teams and individual developers to implement."
		},
		{
			"heading": "next-steps",
			"content": "Now that you understand the fundamentals of routing in Next.js, follow the links below to create your first routes:"
		}
	],
	"headings": [
		{
			"id": "terminology",
			"content": "Terminology"
		},
		{
			"id": "the-app-router",
			"content": "The `app` Router"
		},
		{
			"id": "roles-of-folders-and-files",
			"content": "Roles of Folders and Files"
		},
		{
			"id": "route-segments",
			"content": "Route Segments"
		},
		{
			"id": "nested-routes",
			"content": "Nested Routes"
		},
		{
			"id": "file-conventions",
			"content": "File Conventions"
		},
		{
			"id": "component-hierarchy",
			"content": "Component Hierarchy"
		},
		{
			"id": "colocation",
			"content": "Colocation"
		},
		{
			"id": "advanced-routing-patterns",
			"content": "Advanced Routing Patterns"
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
		url: "#terminology",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Terminology" })
	},
	{
		depth: 2,
		url: "#the-app-router",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)("code", { children: "app" }),
			" Router"
		] })
	},
	{
		depth: 2,
		url: "#roles-of-folders-and-files",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Roles of Folders and Files" })
	},
	{
		depth: 2,
		url: "#route-segments",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Route Segments" })
	},
	{
		depth: 2,
		url: "#nested-routes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Nested Routes" })
	},
	{
		depth: 2,
		url: "#file-conventions",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "File Conventions" })
	},
	{
		depth: 2,
		url: "#component-hierarchy",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Component Hierarchy" })
	},
	{
		depth: 2,
		url: "#colocation",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Colocation" })
	},
	{
		depth: 2,
		url: "#advanced-routing-patterns",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Advanced Routing Patterns" })
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
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul",
		...props.components
	}, { Image } = _components;
	if (!Image) _missingMdxReference("Image", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The skeleton of every application is routing. This page will introduce you to the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "fundamental concepts" }),
			" of routing for the web and how to handle routing in Next.js."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "terminology",
			children: "Terminology"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "First, you will see these terms being used throughout the documentation. Here's a quick reference:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Terminology for Component Tree",
			srcLight: "/docs/light/terminology-component-tree.png",
			srcDark: "/docs/dark/terminology-component-tree.png",
			width: "1600",
			height: "832"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Tree:" }), " A convention for visualizing a hierarchical structure. For example, a component tree with parent and children components, a folder structure, etc."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Subtree:" }), " Part of a tree, starting at a new root (first) and ending at the leaves (last)."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Root" }), ": The first node in a tree or subtree, such as a root layout."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Leaf:" }), " Nodes in a subtree that have no children, such as the last segment in a URL path."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Terminology for URL Anatomy",
			srcLight: "/docs/light/terminology-url-anatomy.png",
			srcDark: "/docs/dark/terminology-url-anatomy.png",
			width: "1600",
			height: "371"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "URL Segment:" }), " Part of the URL path delimited by slashes."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "URL Path:" }), " Part of the URL that comes after the domain (composed of segments)."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h2, {
			id: "the-app-router",
			children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
				" Router"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In version 13, Next.js introduced a new ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "App Router" }),
			" built on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/rendering/server-components",
				children: "React Server Components"
			}),
			", which supports shared layouts, nested routing, loading states, error handling, and more."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The App Router works in a new directory named ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			". The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" directory works alongside the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
			" directory to allow for incremental adoption. This allows you to opt some routes of your application into the new behavior while keeping other routes in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
			" directory for previous behavior. If your application uses the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
			" directory, please also see the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/routing",
				children: "Pages Router"
			}),
			" documentation."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }), ": The App Router takes priority over the Pages Router. Routes across directories should not resolve to the same URL path and will cause a build-time error to prevent a conflict."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Next.js App Directory",
			srcLight: "/docs/light/next-router-directories.png",
			srcDark: "/docs/dark/next-router-directories.png",
			width: "1600",
			height: "444"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"By default, components inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" are ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/rendering/server-components",
				children: "React Server Components"
			}),
			". This is a performance optimization and allows you to easily adopt them, and you can also use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/rendering/client-components",
				children: "Client Components"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Recommendation:" }),
				" Check out the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/rendering/server-components",
					children: "Server"
				}),
				" page if you're new to Server Components."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "roles-of-folders-and-files",
			children: "Roles of Folders and Files"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js uses a file-system based router where:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Folders" }),
				" are used to define routes. A route is a single path of nested folders, following the file-system hierarchy from the ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "root folder" }),
				" down to a final ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "leaf folder" }),
				" that includes a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
				" file. See ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/routing/defining-routes",
					children: "Defining Routes"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Files" }),
				" are used to create UI that is shown for a route segment. See ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#file-conventions",
					children: "special files"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "route-segments",
			children: "Route Segments"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Each folder in a route represents a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "route segment" }),
			". Each route segment is mapped to a corresponding ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "segment" }),
			" in a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "URL path" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "How Route Segments Map to URL Segments",
			srcLight: "/docs/light/route-segments-to-path-segments.png",
			srcDark: "/docs/dark/route-segments-to-path-segments.png",
			width: "1600",
			height: "594"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nested-routes",
			children: "Nested Routes"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To create a nested route, you can nest folders inside each other. For example, you can add a new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/dashboard/settings" }),
			" route by nesting two new folders in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" directory."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/dashboard/settings" }),
			" route is composed of three segments:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "/" }), " (Root segment)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "dashboard" }), " (Segment)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "settings" }), " (Leaf segment)"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "file-conventions",
			children: "File Conventions"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js provides a set of special files to create UI with specific behavior in nested routes:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, {}), (0, import_jsx_runtime.jsx)(_components.th, {})] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/pages-and-layouts#layouts",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "layout" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Shared UI for a segment and its children" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/pages-and-layouts#pages",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "page" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Unique UI of a route and make routes publicly accessible" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/loading-ui-and-streaming",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "loading" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Loading UI for a segment and its children" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/not-found",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "not-found" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Not found UI for a segment and its children" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/error-handling",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "error" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Error UI for a segment and its children" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/error-handling",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "global-error" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Global Error UI" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/route-handlers",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "route" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Server-side API endpoint" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/pages-and-layouts#templates",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "template" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Specialized re-rendered Layout UI" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/default",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "default" })
			}) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: ["Fallback UI for ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/parallel-routes",
				children: "Parallel Routes"
			})] })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
				", or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" }),
				" file extensions can be used for special files."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "component-hierarchy",
			children: "Component Hierarchy"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The React components defined in special files of a route segment are rendered in a specific hierarchy:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "template.js" }) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "error.js" }), " (React error boundary)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "loading.js" }), " (React suspense boundary)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "not-found.js" }), " (React error boundary)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
				" or nested ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" })
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Component Hierarchy for File Conventions",
			srcLight: "/docs/light/file-conventions-component-hierarchy.png",
			srcDark: "/docs/dark/file-conventions-component-hierarchy.png",
			width: "1600",
			height: "643"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In a nested route, the components of a segment will be nested ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "inside" }),
			" the components of its parent segment."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Nested File Conventions Component Hierarchy",
			srcLight: "/docs/light/nested-file-conventions-component-hierarchy.png",
			srcDark: "/docs/dark/nested-file-conventions-component-hierarchy.png",
			width: "1600",
			height: "863"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "colocation",
			children: "Colocation"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In addition to special files, you have the option to colocate your own files (e.g. components, styles, tests, etc) inside folders in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" directory."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This is because while folders define routes, only the contents returned by ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "route.js" }),
			" are publicly addressable."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "An example folder structure with colocated files",
			srcLight: "/docs/light/project-organization-colocation.png",
			srcDark: "/docs/dark/project-organization-colocation.png",
			width: "1600",
			height: "1011"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/colocation",
				children: "Project Organization and Colocation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "advanced-routing-patterns",
			children: "Advanced Routing Patterns"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The App Router also provides a set of conventions to help you implement more advanced routing patterns. These include:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/parallel-routes",
				children: "Parallel Routes"
			}), ": Allow you to simultaneously show two or more pages in the same view that can be navigated independently. You can use them for split views that have their own sub-navigation. E.g. Dashboards."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/intercepting-routes",
				children: "Intercepting Routes"
			}), ": Allow you to intercept a route and show it in the context of another route. You can use these when keeping the context for the current page is important. E.g. Seeing all tasks while editing one task or expanding a photo in a feed."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "These patterns allow you to build richer and more complex UIs, democratizing features that were historically complex for small teams and individual developers to implement." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "next-steps",
			children: "Next Steps"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Now that you understand the fundamentals of routing in Next.js, follow the links below to create your first routes:" })
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
export { toc as a, structuredData as i, _01_routing_exports as n, frontmatter as r, MDXContent as t };
