import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/08-colocation-C5PjClIw.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _08_colocation_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Project Organization and File Colocation",
	"description": "Learn how to organize your Next.js project and colocate files.",
	"nav_title": "Project Organization",
	"related": { "links": [
		"app/building-your-application/routing/defining-routes",
		"app/building-your-application/routing/route-groups",
		"app/building-your-application/configuring/src-directory",
		"app/building-your-application/configuring/absolute-imports-and-module-aliases"
	] }
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Apart from routing folder and file conventions, Next.js is **unopinionated** about how you organize and colocate your project files."
		},
		{
			"heading": void 0,
			"content": "This page shares default behavior and features you can use to organize your project."
		},
		{
			"heading": void 0,
			"content": "Safe colocation by default"
		},
		{
			"heading": void 0,
			"content": "Project organization features"
		},
		{
			"heading": void 0,
			"content": "Project organization strategies"
		},
		{
			"heading": "safe-colocation-by-default",
			"content": "In the `app` directory, nested folder hierarchy defines route structure."
		},
		{
			"heading": "safe-colocation-by-default",
			"content": "Each folder represents a route segment that is mapped to a corresponding segment in a URL path."
		},
		{
			"heading": "safe-colocation-by-default",
			"content": "However, even though route structure is defined through folders, a route is **not publicly accessible** until a `page.js` or `route.js` file is added to a route segment."
		},
		{
			"heading": "safe-colocation-by-default",
			"content": "And, even when a route is made publicly accessible, only the **content returned** by `page.js` or `route.js` is sent to the client."
		},
		{
			"heading": "safe-colocation-by-default",
			"content": "This means that **project files** can be **safely colocated** inside route segments in the `app` directory without accidentally being routable."
		},
		{
			"heading": "safe-colocation-by-default",
			"content": "> **Good to know**:\n>\n> * This is different from the `pages` directory, where any file in `pages` is considered a route.\n> * While you **can** colocate your project files in `app` you don't **have** to. If you prefer, you can keep them outside the `app` directory."
		},
		{
			"heading": "project-organization-features",
			"content": "Next.js provides several features to help you organize your project."
		},
		{
			"heading": "private-folders",
			"content": "Private folders can be created by prefixing a folder with an underscore: `_folderName`"
		},
		{
			"heading": "private-folders",
			"content": "This indicates the folder is a private implementation detail and should not be considered by the routing system, thereby **opting the folder and all its subfolders** out of routing."
		},
		{
			"heading": "private-folders",
			"content": "Since files in the `app` directory can be safely colocated by default, private folders are not required for colocation. However, they can be useful for:"
		},
		{
			"heading": "private-folders",
			"content": "Separating UI logic from routing logic."
		},
		{
			"heading": "private-folders",
			"content": "Consistently organizing internal files across a project and the Next.js ecosystem."
		},
		{
			"heading": "private-folders",
			"content": "Sorting and grouping files in code editors."
		},
		{
			"heading": "private-folders",
			"content": "Avoiding potential naming conflicts with future Next.js file conventions."
		},
		{
			"heading": "private-folders",
			"content": "> **Good to know**\n>\n> * While not a framework convention, you might also consider marking files outside private folders as \"private\" using the same underscore pattern.\n> * You can create URL segments that start with an underscore by prefixing the folder name with `%5F` (the URL-encoded form of an underscore): `%5FfolderName`.\n> * If you don't use private folders, it would be helpful to know Next.js special file conventions to prevent unexpected naming conflicts."
		},
		{
			"heading": "route-groups",
			"content": "Route groups can be created by wrapping a folder in parenthesis: `(folderName)`"
		},
		{
			"heading": "route-groups",
			"content": "This indicates the folder is for organizational purposes and should **not be included** in the route's URL path."
		},
		{
			"heading": "route-groups",
			"content": "Route groups are useful for:"
		},
		{
			"heading": "route-groups",
			"content": "Organizing routes into groups e.g. by site section, intent, or team."
		},
		{
			"heading": "route-groups",
			"content": "Enabling nested layouts in the same route segment level:"
		},
		{
			"heading": "route-groups",
			"content": "Creating multiple nested layouts in the same segment, including multiple root layouts"
		},
		{
			"heading": "route-groups",
			"content": "Adding a layout to a subset of routes in a common segment"
		},
		{
			"heading": "src-directory",
			"content": "Next.js supports storing application code (including `app`) inside an optional `src` directory. This separates application code from project configuration files which mostly live in the root of a project."
		},
		{
			"heading": "module-path-aliases",
			"content": "Next.js supports Module Path Aliases which make it easier to read and maintain imports across deeply nested project files."
		},
		{
			"heading": "project-organization-strategies",
			"content": "There is no \"right\" or \"wrong\" way when it comes to organizing your own files and folders in a Next.js project."
		},
		{
			"heading": "project-organization-strategies",
			"content": "The following section lists a very high-level overview of common strategies. The simplest takeaway is to choose a strategy that works for you and your team and be consistent across the project."
		},
		{
			"heading": "project-organization-strategies",
			"content": "> **Good to know**: In our examples below, we're using `components` and `lib` folders as generalized placeholders, their naming has no special framework significance and your projects might use other folders like `ui`, `utils`, `hooks`, `styles`, etc."
		},
		{
			"heading": "store-project-files-outside-of-app",
			"content": "This strategy stores all application code in shared folders in the **root of your project** and keeps the `app` directory purely for routing purposes."
		},
		{
			"heading": "store-project-files-in-top-level-folders-inside-of-app",
			"content": "This strategy stores all application code in shared folders in the **root of the `app` directory**."
		},
		{
			"heading": "split-project-files-by-feature-or-route",
			"content": "This strategy stores globally shared application code in the root `app` directory and **splits** more specific application code into the route segments that use them."
		}
	],
	"headings": [
		{
			"id": "safe-colocation-by-default",
			"content": "Safe colocation by default"
		},
		{
			"id": "project-organization-features",
			"content": "Project organization features"
		},
		{
			"id": "private-folders",
			"content": "Private Folders"
		},
		{
			"id": "route-groups",
			"content": "Route Groups"
		},
		{
			"id": "src-directory",
			"content": "`src` Directory"
		},
		{
			"id": "module-path-aliases",
			"content": "Module Path Aliases"
		},
		{
			"id": "project-organization-strategies",
			"content": "Project organization strategies"
		},
		{
			"id": "store-project-files-outside-of-app",
			"content": "Store project files outside of `app`"
		},
		{
			"id": "store-project-files-in-top-level-folders-inside-of-app",
			"content": "Store project files in top-level folders inside of `app`"
		},
		{
			"id": "split-project-files-by-feature-or-route",
			"content": "Split project files by feature or route"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#safe-colocation-by-default",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Safe colocation by default" })
	},
	{
		depth: 2,
		url: "#project-organization-features",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Project organization features" })
	},
	{
		depth: 3,
		url: "#private-folders",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Private Folders" })
	},
	{
		depth: 3,
		url: "#route-groups",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Route Groups" })
	},
	{
		depth: 3,
		url: "#src-directory",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("code", { children: "src" }), " Directory"] })
	},
	{
		depth: 3,
		url: "#module-path-aliases",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Module Path Aliases" })
	},
	{
		depth: 2,
		url: "#project-organization-strategies",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Project organization strategies" })
	},
	{
		depth: 3,
		url: "#store-project-files-outside-of-app",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Store project files outside of ", (0, import_jsx_runtime.jsx)("code", { children: "app" })] })
	},
	{
		depth: 3,
		url: "#store-project-files-in-top-level-folders-inside-of-app",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Store project files in top-level folders inside of ", (0, import_jsx_runtime.jsx)("code", { children: "app" })] })
	},
	{
		depth: 3,
		url: "#split-project-files-by-feature-or-route",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Split project files by feature or route" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { Image } = _components;
	if (!Image) _missingMdxReference("Image", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Apart from ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/getting-started/project-structure#app-routing-conventions",
				children: "routing folder and file conventions"
			}),
			", Next.js is ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "unopinionated" }),
			" about how you organize and colocate your project files."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This page shares default behavior and features you can use to organize your project." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#safe-colocation-by-default",
				children: "Safe colocation by default"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#project-organization-features",
				children: "Project organization features"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#project-organization-strategies",
				children: "Project organization strategies"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "safe-colocation-by-default",
			children: "Safe colocation by default"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" directory, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing#route-segments",
				children: "nested folder hierarchy"
			}),
			" defines route structure."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Each folder represents a route segment that is mapped to a corresponding segment in a URL path." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"However, even though route structure is defined through folders, a route is ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "not publicly accessible" }),
			" until a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "route.js" }),
			" file is added to a route segment."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "A diagram showing how a route is not publicly accessible until a page.js or route.js file is added to a route segment.",
			srcLight: "/docs/light/project-organization-not-routable.png",
			srcDark: "/docs/dark/project-organization-not-routable.png",
			width: "1600",
			height: "444"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"And, even when a route is made publicly accessible, only the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "content returned" }),
			" by ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "route.js" }),
			" is sent to the client."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "A diagram showing how page.js and route.js files make routes publicly accessible.",
			srcLight: "/docs/light/project-organization-routable.png",
			srcDark: "/docs/dark/project-organization-routable.png",
			width: "1600",
			height: "687"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This means that ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "project files" }),
			" can be ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "safely colocated" }),
			" inside route segments in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" directory without accidentally being routable."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "A diagram showing colocated project files are not routable even when a segment contains a page.js or route.js file.",
			srcLight: "/docs/light/project-organization-colocation.png",
			srcDark: "/docs/dark/project-organization-colocation.png",
			width: "1600",
			height: "1011"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }), ":"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"This is different from the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
					" directory, where any file in ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
					" is considered a route."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"While you ",
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "can" }),
					" colocate your project files in ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
					" you don't ",
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "have" }),
					" to. If you prefer, you can ",
					(0, import_jsx_runtime.jsxs)(_components.a, {
						href: "#store-project-files-outside-of-app",
						children: [
							"keep them outside the ",
							(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
							" directory"
						]
					}),
					"."
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "project-organization-features",
			children: "Project organization features"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js provides several features to help you organize your project." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "private-folders",
			children: "Private Folders"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: ["Private folders can be created by prefixing a folder with an underscore: ", (0, import_jsx_runtime.jsx)(_components.code, { children: "_folderName" })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This indicates the folder is a private implementation detail and should not be considered by the routing system, thereby ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "opting the folder and all its subfolders" }),
			" out of routing."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "An example folder structure using private folders",
			srcLight: "/docs/light/project-organization-private-folders.png",
			srcDark: "/docs/dark/project-organization-private-folders.png",
			width: "1600",
			height: "849"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Since files in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" directory can be ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#safe-colocation-by-default",
				children: "safely colocated by default"
			}),
			", private folders are not required for colocation. However, they can be useful for:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Separating UI logic from routing logic." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Consistently organizing internal files across a project and the Next.js ecosystem." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Sorting and grouping files in code editors." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Avoiding potential naming conflicts with future Next.js file conventions." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: "While not a framework convention, you might also consider marking files outside private folders as \"private\" using the same underscore pattern." }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"You can create URL segments that start with an underscore by prefixing the folder name with ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "%5F" }),
					" (the URL-encoded form of an underscore): ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "%5FfolderName" }),
					"."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"If you don't use private folders, it would be helpful to know Next.js ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/getting-started/project-structure#routing-files",
						children: "special file conventions"
					}),
					" to prevent unexpected naming conflicts."
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "route-groups",
			children: "Route Groups"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: ["Route groups can be created by wrapping a folder in parenthesis: ", (0, import_jsx_runtime.jsx)(_components.code, { children: "(folderName)" })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This indicates the folder is for organizational purposes and should ",
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Route groups are useful for:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/route-groups#organize-routes-without-affecting-the-url-path",
				children: "Organizing routes into groups"
			}), " e.g. by site section, intent, or team."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Enabling nested layouts in the same route segment level:",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/building-your-application/routing/route-groups#creating-multiple-root-layouts",
						children: "Creating multiple nested layouts in the same segment, including multiple root layouts"
					}) }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/building-your-application/routing/route-groups#opting-specific-segments-into-a-layout",
						children: "Adding a layout to a subset of routes in a common segment"
					}) }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "src-directory",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "src" }), " Directory"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js supports storing application code (including ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			") inside an optional ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/app/building-your-application/configuring/src-directory",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "src" }), " directory"]
			}),
			". This separates application code from project configuration files which mostly live in the root of a project."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "An example folder structure with the `src` directory",
			srcLight: "/docs/light/project-organization-src-directory.png",
			srcDark: "/docs/dark/project-organization-src-directory.png",
			width: "1600",
			height: "687"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "module-path-aliases",
			children: "Module Path Aliases"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js supports ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases",
				children: "Module Path Aliases"
			}),
			" which make it easier to read and maintain imports across deeply nested project files."
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
			title: "app/dashboard/settings/analytics/page.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// before"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "import"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { Button } "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "from"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " '../../../components/button'"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// after"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "import"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { Button } "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "from"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " '@/components/button'"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "project-organization-strategies",
			children: "Project organization strategies"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "There is no \"right\" or \"wrong\" way when it comes to organizing your own files and folders in a Next.js project." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The following section lists a very high-level overview of common strategies. The simplest takeaway is to choose a strategy that works for you and your team and be consistent across the project." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }),
				": In our examples below, we're using ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "components" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "lib" }),
				" folders as generalized placeholders, their naming has no special framework significance and your projects might use other folders like ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "ui" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "utils" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "hooks" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "styles" }),
				", etc."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "store-project-files-outside-of-app",
			children: ["Store project files outside of ", (0, import_jsx_runtime.jsx)(_components.code, { children: "app" })]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This strategy stores all application code in shared folders in the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "root of your project" }),
			" and keeps the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" directory purely for routing purposes."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "An example folder structure with project files outside of app",
			srcLight: "/docs/light/project-organization-project-root.png",
			srcDark: "/docs/dark/project-organization-project-root.png",
			width: "1600",
			height: "849"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "store-project-files-in-top-level-folders-inside-of-app",
			children: ["Store project files in top-level folders inside of ", (0, import_jsx_runtime.jsx)(_components.code, { children: "app" })]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This strategy stores all application code in shared folders in the ",
			(0, import_jsx_runtime.jsxs)(_components.strong, { children: [
				"root of the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
				" directory"
			] }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "An example folder structure with project files inside app",
			srcLight: "/docs/light/project-organization-app-root.png",
			srcDark: "/docs/dark/project-organization-app-root.png",
			width: "1600",
			height: "849"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "split-project-files-by-feature-or-route",
			children: "Split project files by feature or route"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This strategy stores globally shared application code in the root ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" directory and ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "splits" }),
			" more specific application code into the route segments that use them."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "An example folder structure with project files split by feature or route",
			srcLight: "/docs/light/project-organization-app-root-split.png",
			srcDark: "/docs/dark/project-organization-app-root-split.png",
			width: "1600",
			height: "1011"
		})
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
export { toc as a, structuredData as i, _08_colocation_exports as n, frontmatter as r, MDXContent as t };
