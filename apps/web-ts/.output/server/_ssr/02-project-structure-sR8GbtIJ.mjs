import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/02-project-structure-sR8GbtIJ.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _02_project_structure_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Project structure and organization",
	"description": "Learn the folder and file conventions in Next.js, and how to organize your project.",
	"nav_title": "Project Structure"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "This page provides an overview of **all** the folder and file conventions in Next.js, and recommendations for organizing your project."
		},
		{
			"heading": "top-level-folders",
			"content": "Top-level folders are used to organize your application's code and static assets."
		},
		{
			"heading": "top-level-folders",
			"content": "`app`"
		},
		{
			"heading": "top-level-folders",
			"content": "App Router"
		},
		{
			"heading": "top-level-folders",
			"content": "`pages`"
		},
		{
			"heading": "top-level-folders",
			"content": "Pages Router"
		},
		{
			"heading": "top-level-folders",
			"content": "`public`"
		},
		{
			"heading": "top-level-folders",
			"content": "Static assets to be served"
		},
		{
			"heading": "top-level-folders",
			"content": "`src`"
		},
		{
			"heading": "top-level-folders",
			"content": "Optional application source folder"
		},
		{
			"heading": "top-level-files",
			"content": "Top-level files are used to configure your application, manage dependencies, run middleware, integrate monitoring tools, and define environment variables."
		},
		{
			"heading": "top-level-files",
			"content": "**Next.js**"
		},
		{
			"heading": "top-level-files",
			"content": "`next.config.js`"
		},
		{
			"heading": "top-level-files",
			"content": "Configuration file for Next.js"
		},
		{
			"heading": "top-level-files",
			"content": "`package.json`"
		},
		{
			"heading": "top-level-files",
			"content": "Project dependencies and scripts"
		},
		{
			"heading": "top-level-files",
			"content": "`instrumentation.ts`"
		},
		{
			"heading": "top-level-files",
			"content": "OpenTelemetry and Instrumentation file"
		},
		{
			"heading": "top-level-files",
			"content": "`middleware.ts`"
		},
		{
			"heading": "top-level-files",
			"content": "Next.js request middleware"
		},
		{
			"heading": "top-level-files",
			"content": "`.env`"
		},
		{
			"heading": "top-level-files",
			"content": "Environment variables"
		},
		{
			"heading": "top-level-files",
			"content": "`.env.local`"
		},
		{
			"heading": "top-level-files",
			"content": "Local environment variables"
		},
		{
			"heading": "top-level-files",
			"content": "`.env.production`"
		},
		{
			"heading": "top-level-files",
			"content": "Production environment variables"
		},
		{
			"heading": "top-level-files",
			"content": "`.env.development`"
		},
		{
			"heading": "top-level-files",
			"content": "Development environment variables"
		},
		{
			"heading": "top-level-files",
			"content": "`.eslintrc.json`"
		},
		{
			"heading": "top-level-files",
			"content": "Configuration file for ESLint"
		},
		{
			"heading": "top-level-files",
			"content": "`.gitignore`"
		},
		{
			"heading": "top-level-files",
			"content": "Git files and folders to ignore"
		},
		{
			"heading": "top-level-files",
			"content": "`next-env.d.ts`"
		},
		{
			"heading": "top-level-files",
			"content": "TypeScript declaration file for Next.js"
		},
		{
			"heading": "top-level-files",
			"content": "`tsconfig.json`"
		},
		{
			"heading": "top-level-files",
			"content": "Configuration file for TypeScript"
		},
		{
			"heading": "top-level-files",
			"content": "`jsconfig.json`"
		},
		{
			"heading": "top-level-files",
			"content": "Configuration file for JavaScript"
		},
		{
			"heading": "routing-files",
			"content": "Add `page` to expose a route, `layout` for shared UI such as header, nav, or footer, `loading` for skeletons, `error` for error boundaries and `route` for APIs."
		},
		{
			"heading": "routing-files",
			"content": "`layout`"
		},
		{
			"heading": "routing-files",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "routing-files",
			"content": "Layout"
		},
		{
			"heading": "routing-files",
			"content": "`page`"
		},
		{
			"heading": "routing-files",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "routing-files",
			"content": "Page"
		},
		{
			"heading": "routing-files",
			"content": "`loading`"
		},
		{
			"heading": "routing-files",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "routing-files",
			"content": "Loading UI"
		},
		{
			"heading": "routing-files",
			"content": "`not-found`"
		},
		{
			"heading": "routing-files",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "routing-files",
			"content": "Not found UI"
		},
		{
			"heading": "routing-files",
			"content": "`error`"
		},
		{
			"heading": "routing-files",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "routing-files",
			"content": "Error UI"
		},
		{
			"heading": "routing-files",
			"content": "`global-error`"
		},
		{
			"heading": "routing-files",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "routing-files",
			"content": "Global error UI"
		},
		{
			"heading": "routing-files",
			"content": "`route`"
		},
		{
			"heading": "routing-files",
			"content": "`.js` `.ts`"
		},
		{
			"heading": "routing-files",
			"content": "API endpoint"
		},
		{
			"heading": "routing-files",
			"content": "`template`"
		},
		{
			"heading": "routing-files",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "routing-files",
			"content": "Re-rendered layout"
		},
		{
			"heading": "routing-files",
			"content": "`default`"
		},
		{
			"heading": "routing-files",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "routing-files",
			"content": "Parallel route fallback page"
		},
		{
			"heading": "nested-routes",
			"content": "Folders define URL segments. Nesting folders nests segments. Layouts at any level wrap their child segments. A route becomes public when a `page` or `route` file exists."
		},
		{
			"heading": "nested-routes",
			"content": "Path"
		},
		{
			"heading": "nested-routes",
			"content": "URL pattern"
		},
		{
			"heading": "nested-routes",
			"content": "Notes"
		},
		{
			"heading": "nested-routes",
			"content": "`app/layout.tsx`"
		},
		{
			"heading": "nested-routes",
			"content": "—"
		},
		{
			"heading": "nested-routes",
			"content": "Root layout wraps all routes"
		},
		{
			"heading": "nested-routes",
			"content": "`app/blog/layout.tsx`"
		},
		{
			"heading": "nested-routes",
			"content": "—"
		},
		{
			"heading": "nested-routes",
			"content": "Wraps `/blog` and descendants"
		},
		{
			"heading": "nested-routes",
			"content": "`app/page.tsx`"
		},
		{
			"heading": "nested-routes",
			"content": "`/`"
		},
		{
			"heading": "nested-routes",
			"content": "Public route"
		},
		{
			"heading": "nested-routes",
			"content": "`app/blog/page.tsx`"
		},
		{
			"heading": "nested-routes",
			"content": "`/blog`"
		},
		{
			"heading": "nested-routes",
			"content": "Public route"
		},
		{
			"heading": "nested-routes",
			"content": "`app/blog/authors/page.tsx`"
		},
		{
			"heading": "nested-routes",
			"content": "`/blog/authors`"
		},
		{
			"heading": "nested-routes",
			"content": "Public route"
		},
		{
			"heading": "dynamic-routes",
			"content": "Parameterize segments with square brackets. Use `[segment]` for a single param, `[...segment]` for catch‑all, and `[[...segment]]` for optional catch‑all. Access values via the `params` prop."
		},
		{
			"heading": "dynamic-routes",
			"content": "Path"
		},
		{
			"heading": "dynamic-routes",
			"content": "URL pattern"
		},
		{
			"heading": "dynamic-routes",
			"content": "`app/blog/[slug]/page.tsx`"
		},
		{
			"heading": "dynamic-routes",
			"content": "`/blog/my-first-post`"
		},
		{
			"heading": "dynamic-routes",
			"content": "`app/shop/[...slug]/page.tsx`"
		},
		{
			"heading": "dynamic-routes",
			"content": "`/shop/clothing`, `/shop/clothing/shirts`"
		},
		{
			"heading": "dynamic-routes",
			"content": "`app/docs/[[...slug]]/page.tsx`"
		},
		{
			"heading": "dynamic-routes",
			"content": "`/docs`, `/docs/layouts-and-pages`, `/docs/api-reference/use-router`"
		},
		{
			"heading": "route-groups-and-private-folders",
			"content": "Organize code without changing URLs with route groups `(group)`, and colocate non-routable files with private folders `_folder`."
		},
		{
			"heading": "route-groups-and-private-folders",
			"content": "Path"
		},
		{
			"heading": "route-groups-and-private-folders",
			"content": "URL pattern"
		},
		{
			"heading": "route-groups-and-private-folders",
			"content": "Notes"
		},
		{
			"heading": "route-groups-and-private-folders",
			"content": "`app/(marketing)/page.tsx`"
		},
		{
			"heading": "route-groups-and-private-folders",
			"content": "`/`"
		},
		{
			"heading": "route-groups-and-private-folders",
			"content": "Group omitted from URL"
		},
		{
			"heading": "route-groups-and-private-folders",
			"content": "`app/(shop)/cart/page.tsx`"
		},
		{
			"heading": "route-groups-and-private-folders",
			"content": "`/cart`"
		},
		{
			"heading": "route-groups-and-private-folders",
			"content": "Share layouts within `(shop)`"
		},
		{
			"heading": "route-groups-and-private-folders",
			"content": "`app/blog/_components/Post.tsx`"
		},
		{
			"heading": "route-groups-and-private-folders",
			"content": "—"
		},
		{
			"heading": "route-groups-and-private-folders",
			"content": "Not routable; safe place for UI utilities"
		},
		{
			"heading": "route-groups-and-private-folders",
			"content": "`app/blog/_lib/data.ts`"
		},
		{
			"heading": "route-groups-and-private-folders",
			"content": "—"
		},
		{
			"heading": "route-groups-and-private-folders",
			"content": "Not routable; safe place for utils"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "These features fit specific UI patterns, such as slot-based layouts or modal routing."
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "Use `@slot` for named slots rendered by a parent layout. Use intercept patterns to render another route inside the current layout without changing the URL, for example, to show a details view as a modal over a list."
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "Pattern (docs)"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "Meaning"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "Typical use case"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "`@folder`"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "Named slot"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "Sidebar + main content"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "`(.)folder`"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "Intercept same level"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "Preview sibling route in a modal"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "`(..)folder`"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "Intercept parent"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "Open parent child as overlay"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "`(..)(..)folder`"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "Intercept two levels"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "Deeply nested overlay"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "`(...)folder`"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "Intercept from root"
		},
		{
			"heading": "parallel-and-intercepted-routes",
			"content": "Show arbitrary route in current view"
		},
		{
			"heading": "app-icons",
			"content": "`favicon`"
		},
		{
			"heading": "app-icons",
			"content": "`.ico`"
		},
		{
			"heading": "app-icons",
			"content": "Favicon file"
		},
		{
			"heading": "app-icons",
			"content": "`icon`"
		},
		{
			"heading": "app-icons",
			"content": "`.ico` `.jpg` `.jpeg` `.png` `.svg`"
		},
		{
			"heading": "app-icons",
			"content": "App Icon file"
		},
		{
			"heading": "app-icons",
			"content": "`icon`"
		},
		{
			"heading": "app-icons",
			"content": "`.js` `.ts` `.tsx`"
		},
		{
			"heading": "app-icons",
			"content": "Generated App Icon"
		},
		{
			"heading": "app-icons",
			"content": "`apple-icon`"
		},
		{
			"heading": "app-icons",
			"content": "`.jpg` `.jpeg`, `.png`"
		},
		{
			"heading": "app-icons",
			"content": "Apple App Icon file"
		},
		{
			"heading": "app-icons",
			"content": "`apple-icon`"
		},
		{
			"heading": "app-icons",
			"content": "`.js` `.ts` `.tsx`"
		},
		{
			"heading": "app-icons",
			"content": "Generated Apple App Icon"
		},
		{
			"heading": "open-graph-and-twitter-images",
			"content": "`opengraph-image`"
		},
		{
			"heading": "open-graph-and-twitter-images",
			"content": "`.jpg` `.jpeg` `.png` `.gif`"
		},
		{
			"heading": "open-graph-and-twitter-images",
			"content": "Open Graph image file"
		},
		{
			"heading": "open-graph-and-twitter-images",
			"content": "`opengraph-image`"
		},
		{
			"heading": "open-graph-and-twitter-images",
			"content": "`.js` `.ts` `.tsx`"
		},
		{
			"heading": "open-graph-and-twitter-images",
			"content": "Generated Open Graph image"
		},
		{
			"heading": "open-graph-and-twitter-images",
			"content": "`twitter-image`"
		},
		{
			"heading": "open-graph-and-twitter-images",
			"content": "`.jpg` `.jpeg` `.png` `.gif`"
		},
		{
			"heading": "open-graph-and-twitter-images",
			"content": "Twitter image file"
		},
		{
			"heading": "open-graph-and-twitter-images",
			"content": "`twitter-image`"
		},
		{
			"heading": "open-graph-and-twitter-images",
			"content": "`.js` `.ts` `.tsx`"
		},
		{
			"heading": "open-graph-and-twitter-images",
			"content": "Generated Twitter image"
		},
		{
			"heading": "seo",
			"content": "`sitemap`"
		},
		{
			"heading": "seo",
			"content": "`.xml`"
		},
		{
			"heading": "seo",
			"content": "Sitemap file"
		},
		{
			"heading": "seo",
			"content": "`sitemap`"
		},
		{
			"heading": "seo",
			"content": "`.js` `.ts`"
		},
		{
			"heading": "seo",
			"content": "Generated Sitemap"
		},
		{
			"heading": "seo",
			"content": "`robots`"
		},
		{
			"heading": "seo",
			"content": "`.txt`"
		},
		{
			"heading": "seo",
			"content": "Robots file"
		},
		{
			"heading": "seo",
			"content": "`robots`"
		},
		{
			"heading": "seo",
			"content": "`.js` `.ts`"
		},
		{
			"heading": "seo",
			"content": "Generated Robots file"
		},
		{
			"heading": "files-conventions",
			"content": "`_app`"
		},
		{
			"heading": "files-conventions",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "files-conventions",
			"content": "Custom App"
		},
		{
			"heading": "files-conventions",
			"content": "`_document`"
		},
		{
			"heading": "files-conventions",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "files-conventions",
			"content": "Custom Document"
		},
		{
			"heading": "files-conventions",
			"content": "`_error`"
		},
		{
			"heading": "files-conventions",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "files-conventions",
			"content": "Custom Error Page"
		},
		{
			"heading": "files-conventions",
			"content": "`404`"
		},
		{
			"heading": "files-conventions",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "files-conventions",
			"content": "404 Error Page"
		},
		{
			"heading": "files-conventions",
			"content": "`500`"
		},
		{
			"heading": "files-conventions",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "files-conventions",
			"content": "500 Error Page"
		},
		{
			"heading": "routes",
			"content": "**Folder convention**"
		},
		{
			"heading": "routes",
			"content": "`index`"
		},
		{
			"heading": "routes",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "routes",
			"content": "Home page"
		},
		{
			"heading": "routes",
			"content": "`folder/index`"
		},
		{
			"heading": "routes",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "routes",
			"content": "Nested page"
		},
		{
			"heading": "routes",
			"content": "**File convention**"
		},
		{
			"heading": "routes",
			"content": "`index`"
		},
		{
			"heading": "routes",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "routes",
			"content": "Home page"
		},
		{
			"heading": "routes",
			"content": "`file`"
		},
		{
			"heading": "routes",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "routes",
			"content": "Nested page"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "**Folder convention**"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "`[folder]/index`"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "Dynamic route segment"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "`[...folder]/index`"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "Catch-all route segment"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "`[[...folder]]/index`"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "Optional catch-all route segment"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "**File convention**"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "`[file]`"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "Dynamic route segment"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "`[...file]`"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "Catch-all route segment"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "`[[...file]]`"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "`.js` `.jsx` `.tsx`"
		},
		{
			"heading": "dynamic-routes-1",
			"content": "Optional catch-all route segment"
		},
		{
			"heading": "organizing-your-project",
			"content": "Next.js is **unopinionated** about how you organize and colocate your project files. But it does provide several features to help you organize your project."
		},
		{
			"heading": "component-hierarchy",
			"content": "The components defined in special files are rendered in a specific hierarchy:"
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
			"content": "The components are rendered recursively in nested routes, meaning the components of a route segment will be nested **inside** the components of its parent segment."
		},
		{
			"heading": "colocation",
			"content": "In the `app` directory, nested folders define route structure. Each folder represents a route segment that is mapped to a corresponding segment in a URL path."
		},
		{
			"heading": "colocation",
			"content": "However, even though route structure is defined through folders, a route is **not publicly accessible** until a `page.js` or `route.js` file is added to a route segment."
		},
		{
			"heading": "colocation",
			"content": "And, even when a route is made publicly accessible, only the **content returned** by `page.js` or `route.js` is sent to the client."
		},
		{
			"heading": "colocation",
			"content": "This means that **project files** can be **safely colocated** inside route segments in the `app` directory without accidentally being routable."
		},
		{
			"heading": "colocation",
			"content": "> **Good to know**: While you **can** colocate your project files in `app` you don't **have** to. If you prefer, you can keep them outside the `app` directory."
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
			"content": "> **Good to know**:\n>\n> * While not a framework convention, you might also consider marking files outside private folders as \"private\" using the same underscore pattern.\n> * You can create URL segments that start with an underscore by prefixing the folder name with `%5F` (the URL-encoded form of an underscore): `%5FfolderName`.\n> * If you don't use private folders, it would be helpful to know Next.js special file conventions to prevent unexpected naming conflicts."
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
			"content": "Organizing routes by site section, intent, or team. e.g. marketing pages, admin pages, etc."
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
			"heading": "src-folder",
			"content": "Next.js supports storing application code (including `app`) inside an optional `src` folder. This separates application code from project configuration files which mostly live in the root of a project."
		},
		{
			"heading": "examples",
			"content": "The following section lists a very high-level overview of common strategies. The simplest takeaway is to choose a strategy that works for you and your team and be consistent across the project."
		},
		{
			"heading": "examples",
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
			"heading": "opting-for-loading-skeletons-on-a-specific-route",
			"content": "To apply a loading skeleton via a `loading.js` file to a specific route, create a new route group (e.g., `/(overview)`) and then move your `loading.tsx` inside that route group."
		},
		{
			"heading": "opting-for-loading-skeletons-on-a-specific-route",
			"content": "Now, the `loading.tsx` file will only apply to your dashboard → overview page instead of all your dashboard pages without affecting the URL path structure."
		},
		{
			"heading": "creating-multiple-root-layouts",
			"content": "To create multiple root layouts, remove the top-level `layout.js` file, and add a `layout.js` file inside each route group. This is useful for partitioning an application into sections that have a completely different UI or experience. The `<html>` and `<body>` tags need to be added to each root layout."
		},
		{
			"heading": "creating-multiple-root-layouts",
			"content": "In the example above, both `(marketing)` and `(shop)` have their own root layout."
		}
	],
	"headings": [
		{
			"id": "folder-and-file-conventions",
			"content": "Folder and file conventions"
		},
		{
			"id": "top-level-folders",
			"content": "Top-level folders"
		},
		{
			"id": "top-level-files",
			"content": "Top-level files"
		},
		{
			"id": "routing-files",
			"content": "Routing Files"
		},
		{
			"id": "nested-routes",
			"content": "Nested routes"
		},
		{
			"id": "dynamic-routes",
			"content": "Dynamic routes"
		},
		{
			"id": "route-groups-and-private-folders",
			"content": "Route Groups and private folders"
		},
		{
			"id": "parallel-and-intercepted-routes",
			"content": "Parallel and Intercepted Routes"
		},
		{
			"id": "metadata-file-conventions",
			"content": "Metadata file conventions"
		},
		{
			"id": "app-icons",
			"content": "App icons"
		},
		{
			"id": "open-graph-and-twitter-images",
			"content": "Open Graph and Twitter images"
		},
		{
			"id": "seo",
			"content": "SEO"
		},
		{
			"id": "files-conventions",
			"content": "Files conventions"
		},
		{
			"id": "routes",
			"content": "Routes"
		},
		{
			"id": "dynamic-routes-1",
			"content": "Dynamic routes"
		},
		{
			"id": "organizing-your-project",
			"content": "Organizing your project"
		},
		{
			"id": "component-hierarchy",
			"content": "Component hierarchy"
		},
		{
			"id": "colocation",
			"content": "Colocation"
		},
		{
			"id": "private-folders",
			"content": "Private folders"
		},
		{
			"id": "route-groups",
			"content": "Route groups"
		},
		{
			"id": "src-folder",
			"content": "`src` folder"
		},
		{
			"id": "examples",
			"content": "Examples"
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
			"id": "opting-for-loading-skeletons-on-a-specific-route",
			"content": "Opting for loading skeletons on a specific route"
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
		url: "#folder-and-file-conventions",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Folder and file conventions" })
	},
	{
		depth: 3,
		url: "#top-level-folders",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Top-level folders" })
	},
	{
		depth: 3,
		url: "#top-level-files",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Top-level files" })
	},
	{
		depth: 3,
		url: "#routing-files",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Routing Files" })
	},
	{
		depth: 3,
		url: "#nested-routes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Nested routes" })
	},
	{
		depth: 3,
		url: "#dynamic-routes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Dynamic routes" })
	},
	{
		depth: 3,
		url: "#route-groups-and-private-folders",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Route Groups and private folders" })
	},
	{
		depth: 3,
		url: "#parallel-and-intercepted-routes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Parallel and Intercepted Routes" })
	},
	{
		depth: 3,
		url: "#metadata-file-conventions",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Metadata file conventions" })
	},
	{
		depth: 4,
		url: "#app-icons",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "App icons" })
	},
	{
		depth: 4,
		url: "#open-graph-and-twitter-images",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Open Graph and Twitter images" })
	},
	{
		depth: 4,
		url: "#seo",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "SEO" })
	},
	{
		depth: 3,
		url: "#files-conventions",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Files conventions" })
	},
	{
		depth: 3,
		url: "#routes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Routes" })
	},
	{
		depth: 3,
		url: "#dynamic-routes-1",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Dynamic routes" })
	},
	{
		depth: 2,
		url: "#organizing-your-project",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Organizing your project" })
	},
	{
		depth: 3,
		url: "#component-hierarchy",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Component hierarchy" })
	},
	{
		depth: 3,
		url: "#colocation",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Colocation" })
	},
	{
		depth: 3,
		url: "#private-folders",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Private folders" })
	},
	{
		depth: 3,
		url: "#route-groups",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Route groups" })
	},
	{
		depth: 3,
		url: "#src-folder",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("code", { children: "src" }), " folder"] })
	},
	{
		depth: 2,
		url: "#examples",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Examples" })
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
		url: "#opting-for-loading-skeletons-on-a-specific-route",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Opting for loading skeletons on a specific route" })
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
		h4: "h4",
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
	}, { AppOnly, Image, PagesOnly } = _components;
	if (!AppOnly) _missingMdxReference("AppOnly", true);
	if (!Image) _missingMdxReference("Image", true);
	if (!PagesOnly) _missingMdxReference("PagesOnly", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This page provides an overview of ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "all" }),
			" the folder and file conventions in Next.js, and recommendations for organizing your project."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "folder-and-file-conventions",
			children: "Folder and file conventions"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "top-level-folders",
			children: "Top-level folders"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Top-level folders are used to organize your application's code and static assets." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Route segments to path segments",
			srcLight: "/docs/light/top-level-folders.png",
			srcDark: "/docs/dark/top-level-folders.png",
			width: "1600",
			height: "525"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, {}), (0, import_jsx_runtime.jsx)(_components.th, {})] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "app" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "App Router" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/routing",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "pages" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Pages Router" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/public-folder",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "public" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Static assets to be served" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/src-folder",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "src" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Optional application source folder" })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "top-level-files",
			children: "Top-level files"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Top-level files are used to configure your application, manage dependencies, run middleware, integrate monitoring tools, and define environment variables." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, {}), (0, import_jsx_runtime.jsx)(_components.th, {})] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Next.js" }) }), (0, import_jsx_runtime.jsx)(_components.td, {})] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/config/next-config-js",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Configuration file for Next.js" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/getting-started/installation#manual-installation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "package.json" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Project dependencies and scripts" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/instrumentation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation.ts" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "OpenTelemetry and Instrumentation file" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/middleware",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "middleware.ts" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Next.js request middleware" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/environment-variables",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: ".env" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Environment variables" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/environment-variables",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: ".env.local" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Local environment variables" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/environment-variables",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: ".env.production" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Production environment variables" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/environment-variables",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: ".env.development" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Development environment variables" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/config/eslint",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: ".eslintrc.json" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Configuration file for ESLint" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: ".gitignore" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Git files and folders to ignore" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next-env.d.ts" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "TypeScript declaration file for Next.js" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "tsconfig.json" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Configuration file for TypeScript" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "jsconfig.json" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Configuration file for JavaScript" })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(AppOnly, { children: [
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "routing-files",
				children: "Routing Files"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Add ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "page" }),
				" to expose a route, ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout" }),
				" for shared UI such as header, nav, or footer, ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "loading" }),
				" for skeletons, ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "error" }),
				" for error boundaries and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "route" }),
				" for APIs."
			] }),
			(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.th, {}),
				(0, import_jsx_runtime.jsx)(_components.th, {}),
				(0, import_jsx_runtime.jsx)(_components.th, {})
			] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/layout",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "layout" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Layout" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/page",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "page" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Page" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/loading",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "loading" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Loading UI" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/not-found",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "not-found" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Not found UI" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/error",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "error" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Error UI" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/error#global-error",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "global-error" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Global error UI" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/route",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "route" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".ts" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "API endpoint" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/template",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "template" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Re-rendered layout" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/default",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "default" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Parallel route fallback page" })
				] })
			] })] }),
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "nested-routes",
				children: "Nested routes"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Folders define URL segments. Nesting folders nests segments. Layouts at any level wrap their child segments. A route becomes public when a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "page" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "route" }),
				" file exists."
			] }),
			(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.th, { children: "Path" }),
				(0, import_jsx_runtime.jsx)(_components.th, { children: "URL pattern" }),
				(0, import_jsx_runtime.jsx)(_components.th, { children: "Notes" })
			] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "app/layout.tsx" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "—" }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Root layout wraps all routes" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "app/blog/layout.tsx" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "—" }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						"Wraps ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "/blog" }),
						" and descendants"
					] })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "app/page.tsx" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "/" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Public route" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "app/blog/page.tsx" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "/blog" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Public route" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "app/blog/authors/page.tsx" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "/blog/authors" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Public route" })
				] })
			] })] }),
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "dynamic-routes",
				children: "Dynamic routes"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Parameterize segments with square brackets. Use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "[segment]" }),
				" for a single param, ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "[...segment]" }),
				" for catch‑all, and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "[[...segment]]" }),
				" for optional catch‑all. Access values via the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/page#params-optional",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "params" })
				}),
				" prop."
			] }),
			(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Path" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "URL pattern" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "app/blog/[slug]/page.tsx" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "/blog/my-first-post" }) })] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "app/shop/[...slug]/page.tsx" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "/shop/clothing" }),
					", ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "/shop/clothing/shirts" })
				] })] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "app/docs/[[...slug]]/page.tsx" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "/docs" }),
					", ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "/docs/layouts-and-pages" }),
					", ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "/docs/api-reference/use-router" })
				] })] })
			] })] }),
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "route-groups-and-private-folders",
				children: "Route Groups and private folders"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Organize code without changing URLs with route groups ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/route-groups#convention",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "(group)" })
				}),
				", and colocate non-routable files with private folders ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#private-folders",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "_folder" })
				}),
				"."
			] }),
			(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.th, { children: "Path" }),
				(0, import_jsx_runtime.jsx)(_components.th, { children: "URL pattern" }),
				(0, import_jsx_runtime.jsx)(_components.th, { children: "Notes" })
			] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "app/(marketing)/page.tsx" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "/" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Group omitted from URL" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "app/(shop)/cart/page.tsx" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "/cart" }) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: ["Share layouts within ", (0, import_jsx_runtime.jsx)(_components.code, { children: "(shop)" })] })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "app/blog/_components/Post.tsx" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "—" }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Not routable; safe place for UI utilities" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "app/blog/_lib/data.ts" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "—" }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Not routable; safe place for utils" })
				] })
			] })] }),
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "parallel-and-intercepted-routes",
				children: "Parallel and Intercepted Routes"
			}),
			(0, import_jsx_runtime.jsx)(_components.p, { children: "These features fit specific UI patterns, such as slot-based layouts or modal routing." }),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "@slot" }),
				" for named slots rendered by a parent layout. Use intercept patterns to render another route inside the current layout without changing the URL, for example, to show a details view as a modal over a list."
			] }),
			(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.th, { children: "Pattern (docs)" }),
				(0, import_jsx_runtime.jsx)(_components.th, { children: "Meaning" }),
				(0, import_jsx_runtime.jsx)(_components.th, { children: "Typical use case" })
			] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/parallel-routes#slots",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "@folder" })
					}) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Named slot" }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Sidebar + main content" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/intercepting-routes#convention",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "(.)folder" })
					}) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Intercept same level" }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Preview sibling route in a modal" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/intercepting-routes#convention",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "(..)folder" })
					}) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Intercept parent" }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Open parent child as overlay" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/intercepting-routes#convention",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "(..)(..)folder" })
					}) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Intercept two levels" }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Deeply nested overlay" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/intercepting-routes#convention",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "(...)folder" })
					}) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Intercept from root" }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Show arbitrary route in current view" })
				] })
			] })] }),
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "metadata-file-conventions",
				children: "Metadata file conventions"
			}),
			(0, import_jsx_runtime.jsx)(_components.h4, {
				id: "app-icons",
				children: "App icons"
			}),
			(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.th, {}),
				(0, import_jsx_runtime.jsx)(_components.th, {}),
				(0, import_jsx_runtime.jsx)(_components.th, {})
			] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/metadata/app-icons#favicon",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "favicon" })
					}) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: ".ico" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Favicon file" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/metadata/app-icons#icon",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "icon" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".ico" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jpg" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jpeg" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".png" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".svg" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "App Icon file" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/metadata/app-icons#generate-icons-using-code-js-ts-tsx",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "icon" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".ts" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Generated App Icon" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/metadata/app-icons#apple-icon",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "apple-icon" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jpg" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jpeg" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".png" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Apple App Icon file" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/metadata/app-icons#generate-icons-using-code-js-ts-tsx",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "apple-icon" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".ts" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Generated Apple App Icon" })
				] })
			] })] }),
			(0, import_jsx_runtime.jsx)(_components.h4, {
				id: "open-graph-and-twitter-images",
				children: "Open Graph and Twitter images"
			}),
			(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.th, {}),
				(0, import_jsx_runtime.jsx)(_components.th, {}),
				(0, import_jsx_runtime.jsx)(_components.th, {})
			] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/metadata/opengraph-image#opengraph-image",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "opengraph-image" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jpg" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jpeg" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".png" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".gif" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Open Graph image file" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "opengraph-image" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".ts" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Generated Open Graph image" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/metadata/opengraph-image#twitter-image",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "twitter-image" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jpg" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jpeg" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".png" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".gif" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Twitter image file" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "twitter-image" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".ts" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Generated Twitter image" })
				] })
			] })] }),
			(0, import_jsx_runtime.jsx)(_components.h4, {
				id: "seo",
				children: "SEO"
			}),
			(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.th, {}),
				(0, import_jsx_runtime.jsx)(_components.th, {}),
				(0, import_jsx_runtime.jsx)(_components.th, {})
			] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/metadata/sitemap#sitemap-files-xml",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "sitemap" })
					}) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: ".xml" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Sitemap file" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/metadata/sitemap#generating-a-sitemap-using-code-js-ts",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "sitemap" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".ts" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Generated Sitemap" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/metadata/robots#static-robotstxt",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "robots" })
					}) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: ".txt" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Robots file" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/metadata/robots#generate-a-robots-file",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "robots" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".ts" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Generated Robots file" })
				] })
			] })] })
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(PagesOnly, { children: [
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "files-conventions",
				children: "Files conventions"
			}),
			(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.th, {}),
				(0, import_jsx_runtime.jsx)(_components.th, {}),
				(0, import_jsx_runtime.jsx)(_components.th, {})
			] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/pages/building-your-application/routing/custom-app",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "_app" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Custom App" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/pages/building-your-application/routing/custom-document",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "_document" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Custom Document" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/pages/building-your-application/routing/custom-error#more-advanced-error-page-customizing",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "_error" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Custom Error Page" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/pages/building-your-application/routing/custom-error#404-page",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "404" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "404 Error Page" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/pages/building-your-application/routing/custom-error#500-page",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "500" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "500 Error Page" })
				] })
			] })] }),
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "routes",
				children: "Routes"
			}),
			(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.th, {}),
				(0, import_jsx_runtime.jsx)(_components.th, {}),
				(0, import_jsx_runtime.jsx)(_components.th, {})
			] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Folder convention" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, {}),
					(0, import_jsx_runtime.jsx)(_components.td, {})
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/pages/building-your-application/routing/pages-and-layouts#index-routes",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "index" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Home page" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/pages/building-your-application/routing/pages-and-layouts#index-routes",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "folder/index" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Nested page" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "File convention" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, {}),
					(0, import_jsx_runtime.jsx)(_components.td, {})
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/pages/building-your-application/routing/pages-and-layouts#index-routes",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "index" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Home page" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/pages/building-your-application/routing/pages-and-layouts",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "file" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Nested page" })
				] })
			] })] }),
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "dynamic-routes-1",
				children: "Dynamic routes"
			}),
			(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.th, {}),
				(0, import_jsx_runtime.jsx)(_components.th, {}),
				(0, import_jsx_runtime.jsx)(_components.th, {})
			] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Folder convention" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, {}),
					(0, import_jsx_runtime.jsx)(_components.td, {})
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/pages/building-your-application/routing/dynamic-routes",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "[folder]/index" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Dynamic route segment" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/pages/building-your-application/routing/dynamic-routes#catch-all-segments",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "[...folder]/index" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Catch-all route segment" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "[[...folder]]/index" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Optional catch-all route segment" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "File convention" }) }),
					(0, import_jsx_runtime.jsx)(_components.td, {}),
					(0, import_jsx_runtime.jsx)(_components.td, {})
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/pages/building-your-application/routing/dynamic-routes",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "[file]" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Dynamic route segment" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/pages/building-your-application/routing/dynamic-routes#catch-all-segments",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "[...file]" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Catch-all route segment" })
				] }),
				(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
					(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "[[...file]]" })
					}) }),
					(0, import_jsx_runtime.jsxs)(_components.td, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".jsx" }),
						" ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" })
					] }),
					(0, import_jsx_runtime.jsx)(_components.td, { children: "Optional catch-all route segment" })
				] })
			] })] })
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(AppOnly, { children: [
			(0, import_jsx_runtime.jsx)(_components.h2, {
				id: "organizing-your-project",
				children: "Organizing your project"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Next.js is ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "unopinionated" }),
				" about how you organize and colocate your project files. But it does provide several features to help you organize your project."
			] }),
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "component-hierarchy",
				children: "Component hierarchy"
			}),
			(0, import_jsx_runtime.jsx)(_components.p, { children: "The components defined in special files are rendered in a specific hierarchy:" }),
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
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "Component Hierarchy for File Conventions",
				srcLight: "/docs/light/file-conventions-component-hierarchy.png",
				srcDark: "/docs/dark/file-conventions-component-hierarchy.png",
				width: "1600",
				height: "643"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"The components are rendered recursively in nested routes, meaning the components of a route segment will be nested ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "inside" }),
				" the components of its parent segment."
			] }),
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "Nested File Conventions Component Hierarchy",
				srcLight: "/docs/light/nested-file-conventions-component-hierarchy.png",
				srcDark: "/docs/dark/nested-file-conventions-component-hierarchy.png",
				width: "1600",
				height: "863"
			}),
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "colocation",
				children: "Colocation"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"In the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
				" directory, nested folders define route structure. Each folder represents a route segment that is mapped to a corresponding segment in a URL path."
			] }),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"However, even though route structure is defined through folders, a route is ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "not publicly accessible" }),
				" until a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "route.js" }),
				" file is added to a route segment."
			] }),
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "A diagram showing how a route is not publicly accessible until a page.js or route.js file is added to a route segment.",
				srcLight: "/docs/light/project-organization-not-routable.png",
				srcDark: "/docs/dark/project-organization-not-routable.png",
				width: "1600",
				height: "444"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"And, even when a route is made publicly accessible, only the ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "content returned" }),
				" by ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "route.js" }),
				" is sent to the client."
			] }),
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "A diagram showing how page.js and route.js files make routes publicly accessible.",
				srcLight: "/docs/light/project-organization-routable.png",
				srcDark: "/docs/dark/project-organization-routable.png",
				width: "1600",
				height: "687"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"This means that ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "project files" }),
				" can be ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "safely colocated" }),
				" inside route segments in the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
				" directory without accidentally being routable."
			] }),
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "A diagram showing colocated project files are not routable even when a segment contains a page.js or route.js file.",
				srcLight: "/docs/light/project-organization-colocation.png",
				srcDark: "/docs/dark/project-organization-colocation.png",
				width: "1600",
				height: "1011"
			}),
			(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }),
					": While you ",
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
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "private-folders",
				children: "Private folders"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: ["Private folders can be created by prefixing a folder with an underscore: ", (0, import_jsx_runtime.jsx)(_components.code, { children: "_folderName" })] }),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"This indicates the folder is a private implementation detail and should not be considered by the routing system, thereby ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "opting the folder and all its subfolders" }),
				" out of routing."
			] }),
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "An example folder structure using private folders",
				srcLight: "/docs/light/project-organization-private-folders.png",
				srcDark: "/docs/dark/project-organization-private-folders.png",
				width: "1600",
				height: "849"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Since files in the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
				" directory can be ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#colocation",
					children: "safely colocated by default"
				}),
				", private folders are not required for colocation. However, they can be useful for:"
			] }),
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
			(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }), ":"] }),
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
							href: "/docs/app/getting-started/project-structure#routing-files",
							children: "special file conventions"
						}),
						" to prevent unexpected naming conflicts."
					] }),
					"\n"
				] }),
				"\n"
			] }),
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "route-groups",
				children: "Route groups"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: ["Route groups can be created by wrapping a folder in parenthesis: ", (0, import_jsx_runtime.jsx)(_components.code, { children: "(folderName)" })] }),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"This indicates the folder is for organizational purposes and should ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "not be included" }),
				" in the route's URL path."
			] }),
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "An example folder structure using route groups",
				srcLight: "/docs/light/project-organization-route-groups.png",
				srcDark: "/docs/dark/project-organization-route-groups.png",
				width: "1600",
				height: "849"
			}),
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Route groups are useful for:" }),
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: "Organizing routes by site section, intent, or team. e.g. marketing pages, admin pages, etc." }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"Enabling nested layouts in the same route segment level:",
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
			(0, import_jsx_runtime.jsxs)(_components.h3, {
				id: "src-folder",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "src" }), " folder"]
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Next.js supports storing application code (including ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
				") inside an optional ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/src-folder",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "src" }), " folder"]
				}),
				". This separates application code from project configuration files which mostly live in the root of a project."
			] }),
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "An example folder structure with the `src` folder",
				srcLight: "/docs/light/project-organization-src-directory.png",
				srcDark: "/docs/dark/project-organization-src-directory.png",
				width: "1600",
				height: "687"
			}),
			(0, import_jsx_runtime.jsx)(_components.h2, {
				id: "examples",
				children: "Examples"
			}),
			(0, import_jsx_runtime.jsx)(_components.p, { children: "The following section lists a very high-level overview of common strategies. The simplest takeaway is to choose a strategy that works for you and your team and be consistent across the project." }),
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
			(0, import_jsx_runtime.jsxs)(_components.h3, {
				id: "store-project-files-outside-of-app",
				children: ["Store project files outside of ", (0, import_jsx_runtime.jsx)(_components.code, { children: "app" })]
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"This strategy stores all application code in shared folders in the ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "root of your project" }),
				" and keeps the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
				" directory purely for routing purposes."
			] }),
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "An example folder structure with project files outside of app",
				srcLight: "/docs/light/project-organization-project-root.png",
				srcDark: "/docs/dark/project-organization-project-root.png",
				width: "1600",
				height: "849"
			}),
			(0, import_jsx_runtime.jsxs)(_components.h3, {
				id: "store-project-files-in-top-level-folders-inside-of-app",
				children: ["Store project files in top-level folders inside of ", (0, import_jsx_runtime.jsx)(_components.code, { children: "app" })]
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"This strategy stores all application code in shared folders in the ",
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [
					"root of the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
					" directory"
				] }),
				"."
			] }),
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "An example folder structure with project files inside app",
				srcLight: "/docs/light/project-organization-app-root.png",
				srcDark: "/docs/dark/project-organization-app-root.png",
				width: "1600",
				height: "849"
			}),
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "split-project-files-by-feature-or-route",
				children: "Split project files by feature or route"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"This strategy stores globally shared application code in the root ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
				" directory and ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "splits" }),
				" more specific application code into the route segments that use them."
			] }),
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "An example folder structure with project files split by feature or route",
				srcLight: "/docs/light/project-organization-app-root-split.png",
				srcDark: "/docs/dark/project-organization-app-root-split.png",
				width: "1600",
				height: "1011"
			}),
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "organize-routes-without-affecting-the-url-path",
				children: "Organize routes without affecting the URL path"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"To organize routes without affecting the URL, create a group to keep related routes together. The folders in parenthesis will be omitted from the URL (e.g. ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "(marketing)" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "(shop)" }),
				")."
			] }),
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "Organizing Routes with Route Groups",
				srcLight: "/docs/light/route-group-organisation.png",
				srcDark: "/docs/dark/route-group-organisation.png",
				width: "1600",
				height: "930"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Even though routes inside ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "(marketing)" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "(shop)" }),
				" share the same URL hierarchy, you can create a different layout for each group by adding a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
				" file inside their folders."
			] }),
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "Route Groups with Multiple Layouts",
				srcLight: "/docs/light/route-group-multiple-layouts.png",
				srcDark: "/docs/dark/route-group-multiple-layouts.png",
				width: "1600",
				height: "768"
			}),
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "opting-specific-segments-into-a-layout",
				children: "Opting specific segments into a layout"
			}),
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
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "Route Groups with Opt-in Layouts",
				srcLight: "/docs/light/route-group-opt-in-layouts.png",
				srcDark: "/docs/dark/route-group-opt-in-layouts.png",
				width: "1600",
				height: "930"
			}),
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "opting-for-loading-skeletons-on-a-specific-route",
				children: "Opting for loading skeletons on a specific route"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"To apply a ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/loading",
					children: "loading skeleton"
				}),
				" via a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "loading.js" }),
				" file to a specific route, create a new route group (e.g., ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/(overview)" }),
				") and then move your ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "loading.tsx" }),
				" inside that route group."
			] }),
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "Folder structure showing a loading.tsx and a page.tsx inside the route group",
				srcLight: "/docs/light/route-group-loading.png",
				srcDark: "/docs/dark/route-group-loading.png",
				width: "1600",
				height: "444"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Now, the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "loading.tsx" }),
				" file will only apply to your dashboard → overview page instead of all your dashboard pages without affecting the URL path structure."
			] }),
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "creating-multiple-root-layouts",
				children: "Creating multiple root layouts"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"To create multiple ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/layout#root-layout",
					children: "root layouts"
				}),
				", remove the top-level ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
				" file, and add a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
				" file inside each route group. This is useful for partitioning an application into sections that have a completely different UI or experience. The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<html>" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<body>" }),
				" tags need to be added to each root layout."
			] }),
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "Route Groups with Multiple Root Layouts",
				srcLight: "/docs/light/route-group-multiple-root-layouts.png",
				srcDark: "/docs/dark/route-group-multiple-root-layouts.png",
				width: "1600",
				height: "687"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"In the example above, both ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "(marketing)" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "(shop)" }),
				" have their own root layout."
			] })
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
export { toc as a, structuredData as i, _02_project_structure_exports as n, frontmatter as r, MDXContent as t };
