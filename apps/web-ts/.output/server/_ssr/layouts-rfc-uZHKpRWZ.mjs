import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/layouts-rfc-uZHKpRWZ.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var layouts_rfc_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Layouts RFC",
	"description": "Nested routes and layouts, client and server routing, React 18 features, and designed for Server Components.",
	"author": [
		{
			"name": "Delba de Oliveira",
			"image": "/static/team/delba.jpg"
		},
		{
			"name": "Lee Robinson",
			"image": "/static/team/lee.jpg"
		},
		{
			"name": "Sebastian Markbåge",
			"image": "/static/team/seb.jpg"
		},
		{
			"name": "Tim Neutkens",
			"image": "/static/team/tim.jpg"
		}
	],
	"date": /* @__PURE__ */ new Date(1653337800507),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "This RFC (Request for Comment) outlines the biggest update to Next.js since it was introduced in 2016:"
		},
		{
			"heading": void 0,
			"content": "**Nested Layouts:** Build complex applications with nested routes."
		},
		{
			"heading": void 0,
			"content": "**Designed for Server Components:** Optimized for subtree navigation."
		},
		{
			"heading": void 0,
			"content": "**Improved Data Fetching:** Fetch in layouts while avoiding waterfalls."
		},
		{
			"heading": void 0,
			"content": "**Using React 18 Features:** Streaming, Transitions, and Suspense."
		},
		{
			"heading": void 0,
			"content": "**Client and Server Routing:** Server-centric routing with *SPA-like* behavior."
		},
		{
			"heading": void 0,
			"content": "**100% incrementally adoptable**: No breaking changes so you can adopt gradually."
		},
		{
			"heading": void 0,
			"content": "**Advanced Routing Patterns**: Parallel routes, intercepting routes, and more."
		},
		{
			"heading": void 0,
			"content": "The new Next.js router will be built on top of the recently released React 18 features. We plan to introduce defaults and conventions that allow you to easily adopt these new features and take advantage of the benefits they unlock."
		},
		{
			"heading": void 0,
			"content": "> Work on this RFC is ongoing and we'll announce when the new features are available. To provide feedback, join the conversation on Github Discussions."
		},
		{
			"heading": "table-of-contents",
			"content": "Motivation"
		},
		{
			"heading": "table-of-contents",
			"content": "Terminology"
		},
		{
			"heading": "table-of-contents",
			"content": "How Routing Currently Works"
		},
		{
			"heading": "table-of-contents",
			"content": "The `app` Directory"
		},
		{
			"heading": "table-of-contents",
			"content": "Defining Routes"
		},
		{
			"heading": "table-of-contents",
			"content": "Layouts"
		},
		{
			"heading": "table-of-contents",
			"content": "Pages"
		},
		{
			"heading": "table-of-contents",
			"content": "React Server Components"
		},
		{
			"heading": "table-of-contents",
			"content": "Data Fetching"
		},
		{
			"heading": "table-of-contents",
			"content": "Route Groups (New)"
		},
		{
			"heading": "table-of-contents",
			"content": "Server Centric Routing (New)"
		},
		{
			"heading": "table-of-contents",
			"content": "Instant Loading States (New)"
		},
		{
			"heading": "table-of-contents",
			"content": "Error Handling (New)"
		},
		{
			"heading": "table-of-contents",
			"content": "Templates (New)"
		},
		{
			"heading": "table-of-contents",
			"content": "Advanced Routing Patterns (New)"
		},
		{
			"heading": "table-of-contents",
			"content": "Conclusion"
		},
		{
			"heading": "motivation",
			"content": "We've been gathering community feedback from GitHub, Discord, Reddit, and our developer survey about the current limitations of routing in Next.js. We've found that:"
		},
		{
			"heading": "motivation",
			"content": "The developer experience of creating layouts can be improved. It should be easy to create layouts that can be nested, shared across routes, and have their state preserved on navigation."
		},
		{
			"heading": "motivation",
			"content": "Many Next.js applications are dashboards or consoles, which would benefit from more advanced routing solutions."
		},
		{
			"heading": "motivation",
			"content": "While the current routing system has worked well since the beginning of Next.js, we want to make it easier for developers to build more performant and feature-rich web applications."
		},
		{
			"heading": "motivation",
			"content": "As framework maintainers, we also want to build a routing system that is backwards compatible and aligns with the future of React."
		},
		{
			"heading": "motivation",
			"content": "> **Note:** Some routing conventions were inspired by the Relay-based router at Meta, where some features of Server Components were originally developed, as well as client-side routers like React Router and Ember.js. The `layout.js` file convention was inspired by the work done in SvelteKit. We'd also like to thank Cassidy for opening an earlier RFC on layouts."
		},
		{
			"heading": "terminology",
			"content": "This RFC introduces new routing conventions and syntax. The terminology is based on React and standard web platform terms. Throughout the RFC, you'll see these terms linked back to their definitions below."
		},
		{
			"heading": "terminology",
			"content": "**Tree:** A convention for visualizing a hierarchical structure. For example, a component tree with parent and children components, a folder structure, etc."
		},
		{
			"heading": "terminology",
			"content": "**Subtree** Part of the tree, starting at the root (first) and ending at the leaves (last)."
		},
		{
			"heading": "terminology",
			"content": "**URL Path:** Part of the URL that comes after the domain."
		},
		{
			"heading": "terminology",
			"content": "**URL Segment:** Part of the URL path delimited by slashes."
		},
		{
			"heading": "how-routing-currently-works",
			"content": "Today, Next.js uses the file system to map individual folders and files in the Pages directory to routes accessible through URLs. Each **page** file exports a React Component and has an associated **route** based on its file name. For example:"
		},
		{
			"heading": "how-routing-currently-works",
			"content": "**Dynamic Routes:** Next.js supports Dynamic Routes (including catch all variations) with the `[param].js`, `[...param].js` and `[[...param]].js` conventions."
		},
		{
			"heading": "how-routing-currently-works",
			"content": "**Layouts:** Next.js offers support for simple component-based layouts, per-page layouts using a component property pattern, and a single global layout using a custom app."
		},
		{
			"heading": "how-routing-currently-works",
			"content": "**Data Fetching:** Next.js provides data fetching methods (`getStaticProps`, `getServerSideProps`) which can be used at the page (route) level. These methods are used to determine if a page should be Statically Generated (`getStaticProps`) or Server-Side Rendered (`getServerSideProps`). In addition, you can use Incremental Static Regeneration (ISR) to create or update static pages after a site is built."
		},
		{
			"heading": "how-routing-currently-works",
			"content": "**Rendering:** Next.js provides three rendering options: Static Generation, Server-Side Rendering, and Client-Side Rendering. By default, pages are statically generated unless they have a blocking data fetching requirement (`getServerSideProps`)."
		},
		{
			"heading": "introducing-the-app-directory",
			"content": "To ensure these new improvements can be incrementally adopted and avoid breaking changes, we are proposing a new directory called `app`."
		},
		{
			"heading": "introducing-the-app-directory",
			"content": "The `app` directory will work alongside the `pages` directory. You can incrementally move parts of your application to the new `app` directory to take advantage of the new features. For backwards compatibility, the behavior of the `pages` directory will remain the same and continue to be supported."
		},
		{
			"heading": "defining-routes",
			"content": "You can use the **folder** hierarchy inside `app` to define routes. A **route** is a single path of nested folders, following the hierarchy from the **root folder** down to a final &#x2A;*leaf folder.**"
		},
		{
			"heading": "defining-routes",
			"content": "For example, you can add a new `/dashboard/settings` route by nesting two new folders in the `app` directory."
		},
		{
			"heading": "defining-routes",
			"content": "> **Note:**\n>\n> * With this system, you'll use folders to define routes, and files to define UI (with new file conventions such as `layout.js`, `page.js`, and in the second part of the RFC `loading.js`).\n> * This allows you to colocate your own project files (UI components, test files, stories, etc) inside the `app` directory. Currently this is only possible with the pageExtensions config."
		},
		{
			"heading": "route-segments",
			"content": "Each folder in the subtree represents a **route segment**. Each route segment is mapped to a corresponding **segment** in a **URL path**."
		},
		{
			"heading": "route-segments",
			"content": "For example, the `/dashboard/settings` route is composed of 3 segments:"
		},
		{
			"heading": "route-segments",
			"content": "The `/` root segment"
		},
		{
			"heading": "route-segments",
			"content": "The `dashboard` segment"
		},
		{
			"heading": "route-segments",
			"content": "The `settings` segment"
		},
		{
			"heading": "route-segments",
			"content": "> **Note**: The name **route segment** was chosen to match the existing terminology around URL paths."
		},
		{
			"heading": "layouts",
			"content": "**New file convention:** `layout.js`"
		},
		{
			"heading": "layouts",
			"content": "So far, we have used folders to define the routes of our application. But empty folders do not do anything by themselves. Let's discuss how you can define the UI that will render for these routes using new file conventions."
		},
		{
			"heading": "layouts",
			"content": "A **layout** is UI that is shared between route segments in a subtree. Layouts do not affect URL paths and do not re-render (React state is preserved) when a user navigates between sibling segments."
		},
		{
			"heading": "layouts",
			"content": "A layout can be defined by default exporting a React component from a `layout.js` file. The component should accept a `children` prop which will be populated with the segments the layout is wrapping."
		},
		{
			"heading": "layouts",
			"content": "There are 2 types of layouts:"
		},
		{
			"heading": "layouts",
			"content": "**Root layout:** Applies to all routes"
		},
		{
			"heading": "layouts",
			"content": "**Regular layout:** Applies to specific routes"
		},
		{
			"heading": "layouts",
			"content": "You can nest two or more layouts together to form **nested layouts**."
		},
		{
			"heading": "root-layout",
			"content": "You can create a root layout that will apply to all routes of your application by adding a `layout.js` file inside the `app` folder."
		},
		{
			"heading": "root-layout",
			"content": "> **Note:**\n>\n> * The root layout replaces the need for a custom App (`_app.js`) and custom Document (`_document.js`) since it applies to all routes.\n> * You'll be able to use the root layout to customize the initial document shell (e.g. `<html>` and `<body>` tags).\n> * You'll be able to fetch data inside the root layout (and other layouts)."
		},
		{
			"heading": "regular-layouts",
			"content": "You can also create a layout that only applies to a part of your application by adding a `layout.js` file inside a specific folder."
		},
		{
			"heading": "regular-layouts",
			"content": "For example, you can create a `layout.js` file inside the `dashboard` folder which will only apply to the route segments inside `dashboard`."
		},
		{
			"heading": "nesting-layouts",
			"content": "Layouts are **nested** by default."
		},
		{
			"heading": "nesting-layouts",
			"content": "For example, if we were to combine the two layouts above. The root layout (`app/layout.js`) would be applied to the `dashboard` layout, which would also apply to all route segments inside `dashboard/*`."
		},
		{
			"heading": "pages",
			"content": "**New file convention:** `page.js`"
		},
		{
			"heading": "pages",
			"content": "A page is UI that is unique to a route segment. You can create a page by adding a `page.js` file inside a folder."
		},
		{
			"heading": "pages",
			"content": "For example, to create pages for the `/dashboard/*` routes, you can add a `page.js` file inside each folder. When a user visits `/dashboard/settings`, Next.js will render the `page.js` file for the `settings` folder wrapped in any layouts that exist further up the subtree."
		},
		{
			"heading": "pages",
			"content": "You can create a `page.js` file directly inside the dashboard folder to match the `/dashboard` route. The dashboard layout will also apply to this page:"
		},
		{
			"heading": "pages",
			"content": "This route is composed of 2 segments:"
		},
		{
			"heading": "pages",
			"content": "The `/` root segment"
		},
		{
			"heading": "pages",
			"content": "The `dashboard` segment"
		},
		{
			"heading": "pages",
			"content": "> **Note:**\n>\n> * For a route to be valid, it needs to have a page in its leaf segment. If it doesn't, the route will throw an error."
		},
		{
			"heading": "layout-and-page-behavior",
			"content": "The file extensions `js|jsx|ts|tsx` can be used for Pages and Layouts."
		},
		{
			"heading": "layout-and-page-behavior",
			"content": "Page Components are the default export of `page.js`."
		},
		{
			"heading": "layout-and-page-behavior",
			"content": "Layout Components are the default export of `layout.js`."
		},
		{
			"heading": "layout-and-page-behavior",
			"content": "Layout Components **must** accept a `children` prop."
		},
		{
			"heading": "layout-and-page-behavior",
			"content": "When a layout component is rendered, the `children` prop will be populated with a child layout (if it exists further down the subtree) or a page."
		},
		{
			"heading": "layout-and-page-behavior",
			"content": "It may be easier to visualize it as a layout tree where the parent layout will pick the nearest child layout until it reaches a page."
		},
		{
			"heading": "layout-and-page-behavior",
			"content": "**Example:**"
		},
		{
			"heading": "layout-and-page-behavior",
			"content": "The above combination of layouts and pages would render the following component hierarchy:"
		},
		{
			"heading": "react-server-components",
			"content": "> **Note:**\xA0React introduced new component types: Server, Client (traditional React components), and Shared. To learn more about these new types, we recommend reading the React Server Components RFC."
		},
		{
			"heading": "react-server-components",
			"content": "With this RFC, you can start using React features and incrementally adopt React Server Components into your Next.js application."
		},
		{
			"heading": "react-server-components",
			"content": "The internals of the new routing system will also leverage recently released React features such as Streaming, Suspense, and Transitions. These are the building blocks for React Server Components."
		},
		{
			"heading": "server-components-as-the-default",
			"content": "One of the biggest changes between the `pages` and `app` directories is that, by default, &#x2A;*files inside `app` will be rendered on the server as React Server Components.**"
		},
		{
			"heading": "server-components-as-the-default",
			"content": "This will allow you to automatically adopt React Server Components when migrating from `pages` to `app`."
		},
		{
			"heading": "server-components-as-the-default",
			"content": "> **Note:** Server components can be used in the `app` folder or your own folders, but cannot be used in the `pages` directory for backwards compatibility."
		},
		{
			"heading": "client-and-server-components-convention",
			"content": "The `app` folder will support server, client, and shared components, and you'll be able to interleave these components in a tree."
		},
		{
			"heading": "client-and-server-components-convention",
			"content": "There is an ongoing discussion on what exactly the convention will be for defining Client Components and Server Components. We will follow the resolution of this discussion."
		},
		{
			"heading": "client-and-server-components-convention",
			"content": "For now, Server components can be defined by appending `.server.js` to the filename. E.g. `layout.server.js`"
		},
		{
			"heading": "client-and-server-components-convention",
			"content": "Client components can be defined by appending the `.client.js` to the filename. E.g. `page.client.js`."
		},
		{
			"heading": "client-and-server-components-convention",
			"content": "`.js` files are considered shared components. Since they could be rendered on the Server and the Client, they need to respect the constraints of each context."
		},
		{
			"heading": "client-and-server-components-convention",
			"content": "> **Note:**\n>\n> * Client and Server components have\xA0constraints that need to be respected. When deciding to use a client or server component, we recommend using server components (default) until you need to use a client component."
		},
		{
			"heading": "hooks",
			"content": "We'll be adding Client and Server component hooks that’ll allow you to access the headers object, cookies, pathnames, search params, etc. In the future, we'll have documentation with more information."
		},
		{
			"heading": "rendering-environments",
			"content": "You'll have granular control of what components will be in the client-side JavaScript bundle using the Client and Server Components convention."
		},
		{
			"heading": "rendering-environments",
			"content": "By default, routes in `app` will use Static Generation, and will switch to dynamic rendering when a route segment uses server-side hooks that require request context."
		},
		{
			"heading": "interleaving-client-and-server-components-in-a-route",
			"content": "In React, there's a restriction around importing Server Components inside Client Components because Server Components might have server-only code (e.g. database or filesystem utilities)."
		},
		{
			"heading": "interleaving-client-and-server-components-in-a-route",
			"content": "For example, importing the Server Component would not work:"
		},
		{
			"heading": "interleaving-client-and-server-components-in-a-route",
			"content": "However, a Server Component can be passed as a child of a Client Component. You can do this by **wrapping** them in another Server Component. For example:"
		},
		{
			"heading": "interleaving-client-and-server-components-in-a-route",
			"content": "With this pattern, React will know it needs to render `ServerComponent` on the server before sending the result (which doesn't contain any server-only code) to the client. From the Client Component's perspective, its child will be already rendered."
		},
		{
			"heading": "interleaving-client-and-server-components-in-a-route",
			"content": "In layouts, this pattern is applied with the `children` prop so you don't have to create an additional wrapper component."
		},
		{
			"heading": "interleaving-client-and-server-components-in-a-route",
			"content": "For example, the `ClientLayout` component will accept the `ServerPage` component as its child:"
		},
		{
			"heading": "interleaving-client-and-server-components-in-a-route",
			"content": "> **Note:** This style of composition is an important pattern for rendering Server Components inside Client Components. It sets the precedence of one pattern to learn, and is one of the reasons why we've decided to use the `children` prop."
		},
		{
			"heading": "data-fetching",
			"content": "It will be possible to fetch data inside multiple segments in a route. This is different from the `pages` directory, where data fetching was limited to the page-level."
		},
		{
			"heading": "data-fetching-in-layouts",
			"content": "You can fetch data in a `layout.js` file by using the Next.js data fetching methods `getStaticProps` or `getServerSideProps`."
		},
		{
			"heading": "data-fetching-in-layouts",
			"content": "For example, a blog layout could use `getStaticProps` to fetch categories from a CMS, which can be used to populate a sidebar component:"
		},
		{
			"heading": "multiple-data-fetching-methods-in-a-route",
			"content": "You can also fetch data in multiple segments of a route. For example, a `layout` that fetches data can also wrap a `page` that fetches its own data."
		},
		{
			"heading": "multiple-data-fetching-methods-in-a-route",
			"content": "Using the blog example above, a single post page can use `getStaticProps` and `getStaticPaths` to fetch post data from a CMS:"
		},
		{
			"heading": "multiple-data-fetching-methods-in-a-route",
			"content": "Since both `app/blog/layout.js` and `app/blog/[slug]/page.js` use `getStaticProps`, Next.js will statically generate the whole `/blog/[slug]` route as **React Server Components** at build time - resulting in less client-side JavaScript and faster hydration."
		},
		{
			"heading": "multiple-data-fetching-methods-in-a-route",
			"content": "Statically generated routes improve this further, as the client navigation reuses the cache (Server Components data) and doesn't recompute work, leading to less CPU time because you're rendering a snapshot of the Server Components."
		},
		{
			"heading": "behavior-and-priority",
			"content": "Next.js Data Fetching Methods (`getServerSideProps` and `getStaticProps`) can only be used in Server Components in the `app` folder. Different data fetching methods in segments across a single route affect each other."
		},
		{
			"heading": "behavior-and-priority",
			"content": "Using `getServerSideProps` in one segment will affect `getStaticProps` in other segments. Since a request already has to go to a server for the `getServerSideProps` segment, the server will also render any `getStaticProps` segments. It will reuse the props fetched at build time so the data will still be static, the **rendering** happens on-demand on every request with the props generated during `next build`."
		},
		{
			"heading": "behavior-and-priority",
			"content": "Using `getStaticProps` with &#x2A;*revalidate (ISR)** in one segment will affect `getStaticProps` with `revalidate` in other segments. If there are two revalidate periods in one route, the shorter revalidation will take precedence."
		},
		{
			"heading": "behavior-and-priority",
			"content": "> **Note:** In the future, this may be optimized to allow for full data fetching granularity in a route."
		},
		{
			"heading": "data-fetching-with-react-server-components",
			"content": "The combination of Server-Side Routing, React Server Components, Suspense and Streaming have a few implications for data fetching and rendering in Next.js:"
		},
		{
			"heading": "parallel-data-fetching",
			"content": "Next.js will eagerly initiate data fetches in parallel to minimize waterfalls. For example, if data fetching was **sequential**, each nested segment in the route couldn't start fetching data until the previous segment was completed. With **parallel** fetching, however, each segment can eagerly start data fetching at the same time."
		},
		{
			"heading": "parallel-data-fetching",
			"content": "Since rendering may depend on Context, rendering for each segment will start once its data has been fetched and its parent has finished rendering."
		},
		{
			"heading": "parallel-data-fetching",
			"content": "In the future, with Suspense, rendering could also start immediately - even if the data is not completely loaded. If the data is read before it's available, Suspense will be triggered. React will start rendering Server Components optimistically, before the requests have completed, and will slot in the result as the requests resolve."
		},
		{
			"heading": "partial-fetching-and-rendering",
			"content": "When navigating between sibling route segments, Next.js will only fetch and render from that segment down. It will not need to re-fetch or re-render anything above. This means in a page that shares a layout, the layout will be preserved when a user navigates between sibling pages, and Next.js will only fetch and render from that segment down."
		},
		{
			"heading": "partial-fetching-and-rendering",
			"content": "This is especially useful for React Server Components, as otherwise each navigation would cause the full page to re-render on the server instead of rendering only the changed part of the page on the server. This reduces the amount of data transfered and execution time, leading to improved performance."
		},
		{
			"heading": "partial-fetching-and-rendering",
			"content": "For example, if the user navigates between the `/analytics` and the `/settings` pages, React will re-render the page segments but preserve the layouts:"
		},
		{
			"heading": "partial-fetching-and-rendering",
			"content": "> **Note:** It will be possible to force a re-fetch of data higher up the tree. We are still discussing the details of how this will look and will update the RFC."
		},
		{
			"heading": "route-groups",
			"content": "The hierarchy of the `app` folder maps directly to URL paths. But it’s possible to break out of this pattern by creating a route group. Route groups can be used to:"
		},
		{
			"heading": "route-groups",
			"content": "Organize routes without affecting the URL structure."
		},
		{
			"heading": "route-groups",
			"content": "Opt a route segment out of a layout."
		},
		{
			"heading": "route-groups",
			"content": "Create multiple root layouts by splitting the application."
		},
		{
			"heading": "convention",
			"content": "A route group can be created by wrapping a folder’s name in parenthesis: `(folderName)`"
		},
		{
			"heading": "convention",
			"content": "> **Note:** The naming of route groups are only for organizational purposes since they do not affect the URL path."
		},
		{
			"heading": "convention",
			"content": "**Example: Opting a route out of a layout**"
		},
		{
			"heading": "convention",
			"content": "To opt a route out of a layout, create a new route group (e.g. `(shop)`) and move the routes that share the same layout into the group (e.g. `account` and `cart`). The routes outside of the group will not share the layout (e.g. `checkout`)."
		},
		{
			"heading": "convention",
			"content": "Before:"
		},
		{
			"heading": "convention",
			"content": "After:"
		},
		{
			"heading": "convention",
			"content": "**Example: Organizing routes without affecting the URL path**"
		},
		{
			"heading": "convention",
			"content": "Similarly, to organize routes, create a group to keep related routes together. The folders in parenthesis will be omitted from the URL (e.g. `(marketing)` or `(shop)`)."
		},
		{
			"heading": "convention",
			"content": "**Example: Creating multiple root layouts**"
		},
		{
			"heading": "convention",
			"content": "To create multiple root layouts, create two or more route groups at the top level of the `app` directory. This is useful for partitioning an application into sections that have a completely different UI or experience. The `<html>`, `<body>` and `<head>` tags of each root layout can be customized separately."
		},
		{
			"heading": "server-centric-routing",
			"content": "Currently, Next.js uses client-side routing. After the initial load and on subsequent navigation, a request is made to the server for the resources of the new page. This includes the **JavaScript for every component** (including components only shown under certain conditions) and their props (JSON data from\xA0`getServerSideProps`\xA0or\xA0`getStaticProps`). Once both the JavaScript and data are loaded from the server, &#x2A;*React renders the components client-side.**"
		},
		{
			"heading": "server-centric-routing",
			"content": "In this new model, Next.js will use server-centric routing while maintaining client-side transitions. This aligns with\xA0Server Components\xA0which are evaluated on the server."
		},
		{
			"heading": "server-centric-routing",
			"content": "On navigation, data is fetched and React renders the components **server-side**. The output from the server are special instructions (not HTML or JSON) for React on the client to update the DOM. These instructions hold the **result** of the rendered Server Components meaning that no JavaScript for that component has to be loaded in the browser to render the result."
		},
		{
			"heading": "server-centric-routing",
			"content": "This is in contrast to the current default of Client components, which the component JavaScript to the browser to be rendered client-side."
		},
		{
			"heading": "server-centric-routing",
			"content": "Some benefits of server-centric routing with React Server Components include:"
		},
		{
			"heading": "server-centric-routing",
			"content": "Routing uses the same request used for Server Components (no additional server requests are made)."
		},
		{
			"heading": "server-centric-routing",
			"content": "Less work is done on the server because navigating between routes only fetches and renders the segments that change."
		},
		{
			"heading": "server-centric-routing",
			"content": "No additional JavaScript is loaded in the browser when client-side navigating when no new client components are used."
		},
		{
			"heading": "server-centric-routing",
			"content": "The router leverages a new streaming protocol so that rendering can start before all data is loaded."
		},
		{
			"heading": "server-centric-routing",
			"content": "As users navigate around an app, the router will store the result of the React Server Component *payload* in an in-memory client-side cache. The cache is split by route segments which allows invalidation at any level and ensures consistency across concurrent renders. This means that for certain cases, the cache of a previously fetched segment can be re-used."
		},
		{
			"heading": "server-centric-routing",
			"content": "> **Note**\n>\n> * Static Generation and Server-side caching can be used to optimize data fetching.\n> * The information above describes the behavior of subsequent navigations. The initial load is a different process involving Server Side Rendering to generate HTML.\n> * While client-side routing has worked well for Next.js, it scales poorly when the number of potential routes is large because the client has to download a\xA0&#x2A;*route map.**\n> * Overall, by using React Server Components, client-side navigation is faster because we load and render less components in the browser."
		},
		{
			"heading": "instant-loading-states",
			"content": "With server-side routing, navigation happens **after** data fetching and rendering so it’s important to show loading UI while the data is being fetched otherwise the application will seem unresponsive."
		},
		{
			"heading": "instant-loading-states",
			"content": "The new router will use Suspense for instant loading states and default skeletons. This means loading UI can be shown immediately while the content for the new segment loads. The new content is then swapped in once rendering on the server is complete."
		},
		{
			"heading": "instant-loading-states",
			"content": "While rendering is happening:"
		},
		{
			"heading": "instant-loading-states",
			"content": "Navigation to the new route will be immediate."
		},
		{
			"heading": "instant-loading-states",
			"content": "Shared layouts will remain interactive while new route segments load."
		},
		{
			"heading": "instant-loading-states",
			"content": "Navigation will be interruptible - meaning the user can navigate between routes while the content of one route is loading."
		},
		{
			"heading": "default-loading-skeletons",
			"content": "Suspense boundaries will be automatically handled behind-the-scenes with a new file convention called `loading.js`."
		},
		{
			"heading": "default-loading-skeletons",
			"content": "**Example:**"
		},
		{
			"heading": "default-loading-skeletons",
			"content": "You will be able to create a default loading skeleton by adding a `loading.js` file inside a folder."
		},
		{
			"heading": "default-loading-skeletons",
			"content": "The `loading.js` should export a React component:"
		},
		{
			"heading": "default-loading-skeletons",
			"content": "This will cause all segments in the folder to be wrapped in a suspense boundary. The default skeleton will be used when the layout is first loaded and when navigating between sibling pages."
		},
		{
			"heading": "error-handling",
			"content": "Error boundaries\xA0are React components that catch JavaScript errors anywhere in their child component tree."
		},
		{
			"heading": "convention-1",
			"content": "You'll be able to create an Error Boundary that will catch errors within a subtree by adding a\xA0`error.js`\xA0file and default exporting a React Component."
		},
		{
			"heading": "convention-1",
			"content": "The Component will be shown as a fallback if an error is thrown within that subtree. This component can be used to log errors, display useful information about the error, and functionality to attempt to recover from the error."
		},
		{
			"heading": "convention-1",
			"content": "Due to the nested nature of segments and layouts, creating Error boundaries allows you to isolate errors to those parts of the UI. During an error, layouts above the boundary will remain interactive and their state will be preserved."
		},
		{
			"heading": "convention-1",
			"content": "> Note:\n>\n> * Errors inside a\xA0`layout.js`\xA0file in the same segment as an\xA0`error.js`\xA0will not be caught as the automatic error boundary wraps the children of a layout and not the layout itself."
		},
		{
			"heading": "templates",
			"content": "Templates are similar to Layouts in that they wrap each child Layout or Page."
		},
		{
			"heading": "templates",
			"content": "Unlike Layouts that persist across routes and maintain state, templates create a new instance for each of their children. This means that when a user navigates between route segments that share a template, a new instance of the component is mounted."
		},
		{
			"heading": "templates",
			"content": "> **Note:** We recommend using Layouts unless you have a specific reason to use a Template."
		},
		{
			"heading": "convention-2",
			"content": "A template can be defined by exporting a default React component from a\xA0`template.js`\xA0file. The component should accept a\xA0`children`\xA0prop which will be populated with nested segments."
		},
		{
			"heading": "example",
			"content": "The rendered output of a route segment with a Layout and a Template will be as such:"
		},
		{
			"heading": "behavior",
			"content": "There may be cases where you need to mount and unmount shared UI, and templates would be a more suitable option. For example:"
		},
		{
			"heading": "behavior",
			"content": "Enter/exit animations using CSS or animation libraries"
		},
		{
			"heading": "behavior",
			"content": "Features that rely on `useEffect` (e.g logging page views) and `useState` (e.g a per-page feedback form)"
		},
		{
			"heading": "behavior",
			"content": "To change the default framework behavior. E.g. suspense boundaries inside Layouts only show the fallback the first time the Layout is loaded and not when switching pages. For templates, the fallback is shown on each navigation."
		},
		{
			"heading": "behavior",
			"content": "For example, consider the design of a nested layout with a bordered container that should be wrapped around every sub-page."
		},
		{
			"heading": "behavior",
			"content": "You could put the container inside the parent layout (`shop/layout.js`):"
		},
		{
			"heading": "behavior",
			"content": "But any enter/exit animations wouldn’t play when switching pages because the shared parent layout doesn’t re-render."
		},
		{
			"heading": "behavior",
			"content": "You could put the container in every nested layout or page:"
		},
		{
			"heading": "behavior",
			"content": "But then you’d have to manually put it in every nested layout or page which can be tedious and error-prone in more complex apps."
		},
		{
			"heading": "behavior",
			"content": "With this convention, you can share templates across routes that create a new instance on navigation. This means DOM elements will be recreated, state will not be preserved, and effects will be re-synchronized."
		},
		{
			"heading": "advanced-routing-patterns",
			"content": "We plan to introduce conventions to cover edge cases and allow you to implement more advanced routing patterns. Below are some examples we have been actively thinking about:"
		},
		{
			"heading": "intercepting-routes",
			"content": "Sometimes, it may be useful to intercept route segments from within other routes. On navigation, the URL will be updated as normal, but the intercepted segment will be shown within the current route’s layout."
		},
		{
			"heading": "example-1",
			"content": "**Before:** Clicking the image leads to a new route with its own layout."
		},
		{
			"heading": "example-1",
			"content": "**After:** By intercepting the route, clicking the image now loads the segment within the current route’s layout. E.g. as a modal."
		},
		{
			"heading": "example-1",
			"content": "To intercept the `/photo/[id]` route from within `/[username]` segment, create a duplicate `/photo/[id]` folder inside the `/[username]` folder, and prefix it with the `(..)` convention."
		},
		{
			"heading": "convention-3",
			"content": "`(..)` - will match the route segment one level higher (sibling of the parent directory). Similar to `../` in relative paths."
		},
		{
			"heading": "convention-3",
			"content": "`(..)(..)` - will match the route segment two levels higher. Similar to `../../` in relative paths."
		},
		{
			"heading": "convention-3",
			"content": "`(...)` - will match the route segment in the root directory."
		},
		{
			"heading": "convention-3",
			"content": "> **Note:** Refreshing or sharing the page would load the route with its default layout."
		},
		{
			"heading": "dynamic-parallel-routes",
			"content": "Sometimes it may be useful to show two or more leaf segments (`page.js`) in the same view that can be navigated independently."
		},
		{
			"heading": "dynamic-parallel-routes",
			"content": "Take for instance two or more tab groups within the same dashboard. Navigating one tab group should not affect the other. The combinations of tabs should also be correctly restored when navigating backwards and forwards."
		},
		{
			"heading": "convention-4",
			"content": "By default, layouts accept a prop called\xA0`children`\xA0which will contain a nested layout or a page. You can rename the prop by creating a named \"slot\" (a folder that includes the `@` prefix) and nesting segments inside it."
		},
		{
			"heading": "convention-4",
			"content": "After this change, the layout will receive a prop called\xA0`customProp`\xA0instead of\xA0`children`."
		},
		{
			"heading": "convention-4",
			"content": "You can create parallel routes by adding more than one named slot at the same level. In the example below, both\xA0`@views`\xA0and\xA0`@audience`\xA0are passed as props to the analytics layout."
		},
		{
			"heading": "convention-4",
			"content": "You can use the named slots to display leaf segments simultaneously."
		},
		{
			"heading": "convention-4",
			"content": "When the user first navigates to\xA0`/analytics`, the\xA0`page.js`\xA0segment in each folder (`@views`\xA0and\xA0`@audience`) are shown."
		},
		{
			"heading": "convention-4",
			"content": "On navigation to\xA0`/analytics/subscribers`, only\xA0`@audience`\xA0is updated. Similarly, only\xA0`@views`\xA0are updated when navigating to\xA0`/analytics/impressions`."
		},
		{
			"heading": "convention-4",
			"content": "Navigating backwards and forwards will reinstate the correct combination of parallel routes."
		},
		{
			"heading": "combining-intercepting-and-parallel-routes",
			"content": "You can combine intercepting and parallel routes to achieve specific routing behaviors in your application."
		},
		{
			"heading": "combining-intercepting-and-parallel-routes",
			"content": "**Example**"
		},
		{
			"heading": "combining-intercepting-and-parallel-routes",
			"content": "For example, when creating a modal, you often need to be aware of some common challenges, such as:"
		},
		{
			"heading": "combining-intercepting-and-parallel-routes",
			"content": "Modals not being accessible through an URL."
		},
		{
			"heading": "combining-intercepting-and-parallel-routes",
			"content": "Modals closing when the page is refreshed."
		},
		{
			"heading": "combining-intercepting-and-parallel-routes",
			"content": "Backwards navigation going to the previous route rather than the route behind the modal."
		},
		{
			"heading": "combining-intercepting-and-parallel-routes",
			"content": "Forwards navigation not reopening the modal."
		},
		{
			"heading": "combining-intercepting-and-parallel-routes",
			"content": "You may want the modal to update the URL when it opens, and backwards/fowards navigation to open and close the modal. Additionally, when sharing the URL, you may want the page to load with the modal open and context behind it or you may want the page to load the content without the modal."
		},
		{
			"heading": "combining-intercepting-and-parallel-routes",
			"content": "A good example of this are photos on social media sites. Usually, photos are accessible within a modal from the user's feed or profile. But when sharing the photo, they shown directly on their own page."
		},
		{
			"heading": "combining-intercepting-and-parallel-routes",
			"content": "By using conventions, we can make the modal behavior map to routing behavior by default."
		},
		{
			"heading": "combining-intercepting-and-parallel-routes",
			"content": "Consider this folder structure:"
		},
		{
			"heading": "combining-intercepting-and-parallel-routes",
			"content": "With this pattern:"
		},
		{
			"heading": "combining-intercepting-and-parallel-routes",
			"content": "The content of `/photo/[id]` is accessible through an URL within its own context. It's also accessible within a modal from within the `/[username]` route."
		},
		{
			"heading": "combining-intercepting-and-parallel-routes",
			"content": "Navigating backwards and forwards using client-side navigation should close and reopen the modal."
		},
		{
			"heading": "combining-intercepting-and-parallel-routes",
			"content": "Refreshing the page (server-side navigation) should take the user to the original `/photo/id` route instead of showing the modal."
		},
		{
			"heading": "combining-intercepting-and-parallel-routes",
			"content": "In `/@modal/(..)photo/[id]/page.js`, you can return the content of the page wrapped in a modal component."
		},
		{
			"heading": "combining-intercepting-and-parallel-routes",
			"content": "> **Note:** This solution isn't the only way to create a modal in Next.js, but aims to show how you can combine conventions to achieve more complex routing behavior."
		},
		{
			"heading": "conditional-routes",
			"content": "Sometimes, you may need dynamic information like data or context to determine what route to show. You can use parallel routes to conditionally load one route or another."
		},
		{
			"heading": "conditional-routes",
			"content": "**Example**"
		},
		{
			"heading": "conditional-routes",
			"content": "In the example above, you can return either the `user` or `team` route depending on the slug. This allows you to conditionally load the data and match the sub-routes against one option or the other."
		},
		{
			"heading": "conclusion",
			"content": "We're excited about the future of layouts, routing, and React 18 in Next.js. Implementation work has begun and we'll announce the features once they are available."
		},
		{
			"heading": "conclusion",
			"content": "Leave comments and join the conversation on GitHub Discussions."
		}
	],
	"headings": [
		{
			"id": "table-of-contents",
			"content": "Table of Contents"
		},
		{
			"id": "motivation",
			"content": "Motivation"
		},
		{
			"id": "terminology",
			"content": "Terminology"
		},
		{
			"id": "how-routing-currently-works",
			"content": "How Routing Currently Works"
		},
		{
			"id": "introducing-the-app-directory",
			"content": "Introducing the `app` Directory"
		},
		{
			"id": "defining-routes",
			"content": "Defining Routes"
		},
		{
			"id": "route-segments",
			"content": "Route Segments"
		},
		{
			"id": "layouts",
			"content": "Layouts"
		},
		{
			"id": "root-layout",
			"content": "Root Layout"
		},
		{
			"id": "regular-layouts",
			"content": "Regular Layouts"
		},
		{
			"id": "nesting-layouts",
			"content": "Nesting Layouts"
		},
		{
			"id": "pages",
			"content": "Pages"
		},
		{
			"id": "layout-and-page-behavior",
			"content": "Layout and Page Behavior"
		},
		{
			"id": "react-server-components",
			"content": "React Server Components"
		},
		{
			"id": "server-components-as-the-default",
			"content": "Server Components as the Default"
		},
		{
			"id": "client-and-server-components-convention",
			"content": "Client and Server Components Convention"
		},
		{
			"id": "hooks",
			"content": "Hooks"
		},
		{
			"id": "rendering-environments",
			"content": "Rendering Environments"
		},
		{
			"id": "interleaving-client-and-server-components-in-a-route",
			"content": "Interleaving Client and Server Components in a Route"
		},
		{
			"id": "data-fetching",
			"content": "Data fetching"
		},
		{
			"id": "data-fetching-in-layouts",
			"content": "Data fetching in Layouts"
		},
		{
			"id": "multiple-data-fetching-methods-in-a-route",
			"content": "Multiple data fetching methods in a route"
		},
		{
			"id": "behavior-and-priority",
			"content": "Behavior and priority"
		},
		{
			"id": "data-fetching-with-react-server-components",
			"content": "Data fetching with React Server Components"
		},
		{
			"id": "parallel-data-fetching",
			"content": "Parallel data fetching"
		},
		{
			"id": "partial-fetching-and-rendering",
			"content": "Partial Fetching and Rendering"
		},
		{
			"id": "route-groups",
			"content": "Route Groups"
		},
		{
			"id": "convention",
			"content": "Convention"
		},
		{
			"id": "server-centric-routing",
			"content": "Server-Centric Routing"
		},
		{
			"id": "instant-loading-states",
			"content": "Instant Loading States"
		},
		{
			"id": "default-loading-skeletons",
			"content": "Default loading skeletons"
		},
		{
			"id": "error-handling",
			"content": "Error Handling"
		},
		{
			"id": "convention-1",
			"content": "Convention"
		},
		{
			"id": "templates",
			"content": "Templates"
		},
		{
			"id": "convention-2",
			"content": "Convention"
		},
		{
			"id": "example",
			"content": "Example"
		},
		{
			"id": "behavior",
			"content": "Behavior"
		},
		{
			"id": "advanced-routing-patterns",
			"content": "Advanced Routing Patterns"
		},
		{
			"id": "intercepting-routes",
			"content": "Intercepting Routes"
		},
		{
			"id": "example-1",
			"content": "Example"
		},
		{
			"id": "convention-3",
			"content": "Convention"
		},
		{
			"id": "dynamic-parallel-routes",
			"content": "Dynamic Parallel Routes"
		},
		{
			"id": "convention-4",
			"content": "Convention"
		},
		{
			"id": "combining-intercepting-and-parallel-routes",
			"content": "Combining Intercepting and Parallel Routes"
		},
		{
			"id": "conditional-routes",
			"content": "Conditional Routes"
		},
		{
			"id": "conclusion",
			"content": "Conclusion"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#table-of-contents",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#table-of-contents",
			children: "Table of Contents"
		}) })
	},
	{
		depth: 2,
		url: "#motivation",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#motivation",
			children: "Motivation"
		}) })
	},
	{
		depth: 2,
		url: "#terminology",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#terminology",
			children: "Terminology"
		}) })
	},
	{
		depth: 2,
		url: "#how-routing-currently-works",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#how-routing-currently-works",
			children: "How Routing Currently Works"
		}) })
	},
	{
		depth: 2,
		url: "#introducing-the-app-directory",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#introducing-the-app-directory",
			children: [
				"Introducing the ",
				(0, import_jsx_runtime.jsx)("code", { children: "app" }),
				" Directory"
			]
		}) })
	},
	{
		depth: 2,
		url: "#defining-routes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#defining-routes",
			children: "Defining Routes"
		}) })
	},
	{
		depth: 3,
		url: "#route-segments",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#route-segments",
			children: "Route Segments"
		}) })
	},
	{
		depth: 2,
		url: "#layouts",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#layouts",
			children: "Layouts"
		}) })
	},
	{
		depth: 3,
		url: "#root-layout",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#root-layout",
			children: "Root Layout"
		}) })
	},
	{
		depth: 3,
		url: "#regular-layouts",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#regular-layouts",
			children: "Regular Layouts"
		}) })
	},
	{
		depth: 3,
		url: "#nesting-layouts",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#nesting-layouts",
			children: "Nesting Layouts"
		}) })
	},
	{
		depth: 2,
		url: "#pages",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#pages",
			children: "Pages"
		}) })
	},
	{
		depth: 3,
		url: "#layout-and-page-behavior",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#layout-and-page-behavior",
			children: "Layout and Page Behavior"
		}) })
	},
	{
		depth: 2,
		url: "#react-server-components",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#react-server-components",
			children: "React Server Components"
		}) })
	},
	{
		depth: 3,
		url: "#server-components-as-the-default",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#server-components-as-the-default",
			children: "Server Components as the Default"
		}) })
	},
	{
		depth: 3,
		url: "#client-and-server-components-convention",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#client-and-server-components-convention",
			children: "Client and Server Components Convention"
		}) })
	},
	{
		depth: 3,
		url: "#hooks",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#hooks",
			children: "Hooks"
		}) })
	},
	{
		depth: 3,
		url: "#rendering-environments",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#rendering-environments",
			children: "Rendering Environments"
		}) })
	},
	{
		depth: 3,
		url: "#interleaving-client-and-server-components-in-a-route",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#interleaving-client-and-server-components-in-a-route",
			children: "Interleaving Client and Server Components in a Route"
		}) })
	},
	{
		depth: 2,
		url: "#data-fetching",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#data-fetching",
			children: "Data fetching"
		}) })
	},
	{
		depth: 3,
		url: "#data-fetching-in-layouts",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#data-fetching-in-layouts",
			children: "Data fetching in Layouts"
		}) })
	},
	{
		depth: 3,
		url: "#multiple-data-fetching-methods-in-a-route",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#multiple-data-fetching-methods-in-a-route",
			children: "Multiple data fetching methods in a route"
		}) })
	},
	{
		depth: 3,
		url: "#behavior-and-priority",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#behavior-and-priority",
			children: "Behavior and priority"
		}) })
	},
	{
		depth: 3,
		url: "#data-fetching-with-react-server-components",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#data-fetching-with-react-server-components",
			children: "Data fetching with React Server Components"
		}) })
	},
	{
		depth: 3,
		url: "#parallel-data-fetching",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#parallel-data-fetching",
			children: "Parallel data fetching"
		}) })
	},
	{
		depth: 3,
		url: "#partial-fetching-and-rendering",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#partial-fetching-and-rendering",
			children: "Partial Fetching and Rendering"
		}) })
	},
	{
		depth: 2,
		url: "#route-groups",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#route-groups",
			children: "Route Groups"
		}) })
	},
	{
		depth: 3,
		url: "#convention",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#convention",
			children: "Convention"
		}) })
	},
	{
		depth: 2,
		url: "#server-centric-routing",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#server-centric-routing",
			children: "Server-Centric Routing"
		}) })
	},
	{
		depth: 2,
		url: "#instant-loading-states",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#instant-loading-states",
			children: "Instant Loading States"
		}) })
	},
	{
		depth: 3,
		url: "#default-loading-skeletons",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#default-loading-skeletons",
			children: "Default loading skeletons"
		}) })
	},
	{
		depth: 2,
		url: "#error-handling",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#error-handling",
			children: "Error Handling"
		}) })
	},
	{
		depth: 3,
		url: "#convention-1",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#convention-1",
			children: "Convention"
		}) })
	},
	{
		depth: 2,
		url: "#templates",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#templates",
			children: "Templates"
		}) })
	},
	{
		depth: 3,
		url: "#convention-2",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#convention-2",
			children: "Convention"
		}) })
	},
	{
		depth: 3,
		url: "#example",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#example",
			children: "Example"
		}) })
	},
	{
		depth: 3,
		url: "#behavior",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#behavior",
			children: "Behavior"
		}) })
	},
	{
		depth: 2,
		url: "#advanced-routing-patterns",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#advanced-routing-patterns",
			children: "Advanced Routing Patterns"
		}) })
	},
	{
		depth: 3,
		url: "#intercepting-routes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#intercepting-routes",
			children: "Intercepting Routes"
		}) })
	},
	{
		depth: 4,
		url: "#example-1",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#example-1",
			children: "Example"
		}) })
	},
	{
		depth: 4,
		url: "#convention-3",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#convention-3",
			children: "Convention"
		}) })
	},
	{
		depth: 3,
		url: "#dynamic-parallel-routes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#dynamic-parallel-routes",
			children: "Dynamic Parallel Routes"
		}) })
	},
	{
		depth: 4,
		url: "#convention-4",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#convention-4",
			children: "Convention"
		}) })
	},
	{
		depth: 2,
		url: "#combining-intercepting-and-parallel-routes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#combining-intercepting-and-parallel-routes",
			children: "Combining Intercepting and Parallel Routes"
		}) })
	},
	{
		depth: 2,
		url: "#conditional-routes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#conditional-routes",
			children: "Conditional Routes"
		}) })
	},
	{
		depth: 2,
		url: "#conclusion",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#conclusion",
			children: "Conclusion"
		}) })
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
		h4: "h4",
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This RFC (Request for Comment) outlines the biggest update to Next.js since it was introduced in 2016:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Nested Layouts:" }), " Build complex applications with nested routes."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Designed for Server Components:" }), " Optimized for subtree navigation."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Improved Data Fetching:" }), " Fetch in layouts while avoiding waterfalls."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Using React 18 Features:" }), " Streaming, Transitions, and Suspense."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Client and Server Routing:" }),
				" Server-centric routing with ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "SPA-like" }),
				" behavior."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "100% incrementally adoptable" }), ": No breaking changes so you can adopt gradually."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Advanced Routing Patterns" }), ": Parallel routes, intercepting routes, and more."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The new Next.js router will be built on top of the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://reactjs.org/blog/2022/03/29/react-v18.html",
				children: "recently released React 18"
			}),
			" features. We plan to introduce defaults and conventions that allow you to easily adopt these new features and take advantage of the benefits they unlock."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Work on this RFC is ongoing and we'll announce when the new features are available. To provide feedback, join the conversation on ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/discussions/37136",
					children: "Github Discussions"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "table-of-contents",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#table-of-contents",
				children: "Table of Contents"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#motivation",
				children: "Motivation"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#terminology",
				children: "Terminology"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#how-routing-currently-works",
				children: "How Routing Currently Works"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#introducing-the-app-router",
				children: [
					"The ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
					" Directory"
				]
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#defining-routes",
				children: "Defining Routes"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#layouts",
				children: "Layouts"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#pages",
				children: "Pages"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#react-server-components",
				children: "React Server Components"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#data-fetching",
				children: "Data Fetching"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#route-groups",
				children: "Route Groups (New)"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#server-centric-routing",
				children: "Server Centric Routing (New)"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#instant-loading-states",
				children: "Instant Loading States (New)"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#error-handling",
				children: "Error Handling (New)"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#templates",
				children: "Templates (New)"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#advanced-routing-patterns",
				children: "Advanced Routing Patterns (New)"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#conclusion",
				children: "Conclusion"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "motivation",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#motivation",
				children: "Motivation"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've been gathering community feedback from GitHub, Discord, Reddit, and our developer survey about the current limitations of routing in Next.js. We've found that:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The developer experience of creating layouts can be improved. It should be easy to create layouts that can be nested, shared across routes, and have their state preserved on navigation." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Many Next.js applications are dashboards or consoles, which would benefit from more advanced routing solutions." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "While the current routing system has worked well since the beginning of Next.js, we want to make it easier for developers to build more performant and feature-rich web applications." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "As framework maintainers, we also want to build a routing system that is backwards compatible and aligns with the future of React." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }),
				" Some routing conventions were inspired by the Relay-based router at Meta, where some features of Server Components were originally developed, as well as client-side routers like React Router and Ember.js. The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
				" file convention was inspired by the work done in SvelteKit. We'd also like to thank ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://twitter.com/cassidoo",
					children: "Cassidy"
				}),
				" for opening ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/discussions/26389",
					children: "an earlier RFC on layouts"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "terminology",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#terminology",
				children: "Terminology"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This RFC introduces new routing conventions and syntax. The terminology is based on React and standard web platform terms. Throughout the RFC, you'll see these terms linked back to their definitions below." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Tree:" }), " A convention for visualizing a hierarchical structure. For example, a component tree with parent and children components, a folder structure, etc."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Subtree" }), " Part of the tree, starting at the root (first) and ending at the leaves (last)."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/terminology.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "URL Path:" }), " Part of the URL that comes after the domain."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "URL Segment:" }), " Part of the URL path delimited by slashes."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/url-anatomy.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "how-routing-currently-works",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#how-routing-currently-works",
				children: "How Routing Currently Works"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Today, Next.js uses the file system to map individual folders and files in the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/routing/pages-and-layouts",
				children: "Pages"
			}),
			" directory to routes accessible through URLs. Each ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "page" }),
			" file exports a React Component and has an associated ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "route" }),
			" based on its file name. For example:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/routing-today.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Dynamic Routes:" }),
				" Next.js supports ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/routing/dynamic-routes",
					children: "Dynamic Routes"
				}),
				" (including catch all variations) with the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "[param].js" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "[...param].js" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "[[...param]].js" }),
				" conventions."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Layouts:" }),
				" Next.js offers support for simple ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/routing/pages-and-layouts#layout-pattern",
					children: "component-based"
				}),
				" layouts, per-page layouts using a component ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/routing/pages-and-layouts#layout-pattern#per-page-layouts",
					children: "property pattern"
				}),
				", and a single global layout using a ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/routing/pages-and-layouts#layout-pattern#single-shared-layout-with-custom-app",
					children: "custom app"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Data Fetching:" }),
				" Next.js provides data fetching methods (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/data-fetching/get-static-props",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/data-fetching/get-server-side-props",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" })
				}),
				") which can be used at the page (route) level. These methods are used to determine if a page should be Statically Generated (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/data-fetching/get-static-props",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
				}),
				") or Server-Side Rendered (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/data-fetching/get-server-side-props",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" })
				}),
				"). In addition, you can use ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/data-fetching/incremental-static-regeneration",
					children: "Incremental Static Regeneration (ISR)"
				}),
				" to create or update static pages after a site is built."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Rendering:" }),
				" Next.js provides three rendering options: ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nextjs.org/learn/foundations/how-nextjs-works/rendering",
					children: "Static Generation"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nextjs.org/learn/foundations/how-nextjs-works/rendering",
					children: "Server-Side Rendering"
				}),
				", and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nextjs.org/learn/foundations/how-nextjs-works/rendering",
					children: "Client-Side Rendering"
				}),
				". By default, pages are statically generated unless they have a blocking data fetching requirement (",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
				")."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "introducing-the-app-directory",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#introducing-the-app-directory",
				children: [
					"Introducing the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
					" Directory"
				]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To ensure these new improvements can be incrementally adopted and avoid breaking changes, we are proposing a new directory called ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/app-folder.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" directory will work alongside the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
			" directory. You can incrementally move parts of your application to the new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" directory to take advantage of the new features. For backwards compatibility, the behavior of the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
			" directory will remain the same and continue to be supported."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "defining-routes",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#defining-routes",
				children: "Defining Routes"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can use the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "folder" }),
			" hierarchy inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" to define routes. A ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "route" }),
			" is a single path of nested folders, following the hierarchy from the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "root folder" }),
			" down to a final ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "leaf folder." })
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/routes.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, you can add a new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/dashboard/settings" }),
			" route by nesting two new folders in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" directory."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"With this system, you'll use folders to define routes, and files to define UI (with new file conventions such as ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
					", ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
					", and in the second part of the RFC ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "loading.js" }),
					")."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"This allows you to colocate your own project files (UI components, test files, stories, etc) inside the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
					" directory. Currently this is only possible with the ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/pages/api-reference/next-config-js/pageExtensions#including-non-page-files-in-the-pages-directory",
						children: "pageExtensions config"
					}),
					"."
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "route-segments",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#route-segments",
				children: "Route Segments"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Each folder in the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#terminology",
				children: "subtree"
			}),
			" represents a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "route segment" }),
			". Each route segment is mapped to a corresponding ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "segment" }),
			" in a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#terminology",
				children: "URL path"
			}) }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/route-segments.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/dashboard/settings" }),
			" route is composed of 3 segments:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/" }),
				" root segment"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "dashboard" }),
				" segment"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "settings" }),
				" segment"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note" }),
				": The name ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "route segment" }),
				" was chosen to match the existing terminology around ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#terminology",
					children: "URL paths"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "layouts",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#layouts",
				children: "Layouts"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "New file convention:" }),
			" ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" })
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "So far, we have used folders to define the routes of our application. But empty folders do not do anything by themselves. Let's discuss how you can define the UI that will render for these routes using new file conventions." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "layout" }),
			" is UI that is shared between route segments in a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#terminology",
				children: "subtree"
			}),
			". Layouts do not affect ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#terminology",
				children: "URL paths"
			}),
			" and do not re-render (React state is preserved) when a user navigates between sibling segments."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A layout can be defined by default exporting a React component from a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
			" file. The component should accept a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "children" }),
			" prop which will be populated with the segments the layout is wrapping."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "There are 2 types of layouts:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Root layout:" }), " Applies to all routes"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Regular layout:" }), " Applies to specific routes"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can nest two or more layouts together to form ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "nested layouts" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "root-layout",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#root-layout",
				children: "Root Layout"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can create a root layout that will apply to all routes of your application by adding a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
			" file inside the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" folder."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/root-layout.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"The root layout replaces the need for a ",
					(0, import_jsx_runtime.jsxs)(_components.a, {
						href: "/docs/pages/building-your-application/routing/custom-app",
						children: [
							"custom App (",
							(0, import_jsx_runtime.jsx)(_components.code, { children: "_app.js" }),
							")"
						]
					}),
					" and ",
					(0, import_jsx_runtime.jsxs)(_components.a, {
						href: "/docs/pages/building-your-application/routing/custom-document",
						children: [
							"custom Document (",
							(0, import_jsx_runtime.jsx)(_components.code, { children: "_document.js" }),
							")"
						]
					}),
					" since it applies to all routes."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"You'll be able to use the root layout to customize the initial document shell (e.g. ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "<html>" }),
					" and ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "<body>" }),
					" tags)."
				] }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: "You'll be able to fetch data inside the root layout (and other layouts)." }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "regular-layouts",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#regular-layouts",
				children: "Regular Layouts"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can also create a layout that only applies to a part of your application by adding a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
			" file inside a specific folder."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/regular-layouts.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, you can create a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
			" file inside the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "dashboard" }),
			" folder which will only apply to the route segments inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "dashboard" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "nesting-layouts",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nesting-layouts",
				children: "Nesting Layouts"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Layouts are ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "nested" }),
			" by default."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/nested-layouts.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, if we were to combine the two layouts above. The root layout (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app/layout.js" }),
			") would be applied to the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "dashboard" }),
			" layout, which would also apply to all route segments inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "dashboard/*" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/nested-layouts-example.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "pages",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#pages",
				children: "Pages"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "New file convention:" }),
			" ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" })
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A page is UI that is unique to a route segment. You can create a page by adding a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
			" file inside a folder."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/page.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, to create pages for the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/dashboard/*" }),
			" routes, you can add a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
			" file inside each folder. When a user visits ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/dashboard/settings" }),
			", Next.js will render the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
			" file for the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "settings" }),
			" folder wrapped in any layouts that exist further up the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#terminology",
				children: "subtree"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/page-example.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can create a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
			" file directly inside the dashboard folder to match the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/dashboard" }),
			" route. The dashboard layout will also apply to this page:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/page-nested.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This route is composed of 2 segments:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/" }),
				" root segment"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "dashboard" }),
				" segment"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: "For a route to be valid, it needs to have a page in its leaf segment. If it doesn't, the route will throw an error." }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "layout-and-page-behavior",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#layout-and-page-behavior",
				children: "Layout and Page Behavior"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The file extensions ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "js|jsx|ts|tsx" }),
				" can be used for Pages and Layouts."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Page Components are the default export of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Layout Components are the default export of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Layout Components ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "must" }),
				" accept a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "children" }),
				" prop."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When a layout component is rendered, the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "children" }),
			" prop will be populated with a child layout (if it exists further down the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#terminology",
				children: "subtree"
			}),
			") or a page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"It may be easier to visualize it as a layout ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#terminology",
				children: "tree"
			}),
			" where the parent layout will pick the nearest child layout until it reaches a page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Example:" }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/basic-example.png",
			alt: ""
		}) }),
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
			title: "app/layout.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// Root layout"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// - Applies to all routes"
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " RootLayout"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "children"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ("
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "html"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "body"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "        <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Header"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "        {children}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "        <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Footer"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      </"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "body"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    </"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "html"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  );"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				})
			] })
		}) }),
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
			title: "app/dashboard/layout.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// Regular layout"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// - Applies to route segments in app/dashboard/*"
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " DashboardLayout"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "children"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ("
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "DashboardSidebar"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "      {children}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    </>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  );"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				})
			] })
		}) }),
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
			title: "app/dashboard/analytics/page.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// Page Component"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// - The UI for the `app/dashboard/analytics` segment"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// - Matches the `acme.com/dashboard/analytics` URL path"
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " AnalyticsPage"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "() {"
						})
					]
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
							children: "  return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "main"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">...</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "main"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">;"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The above combination of layouts and pages would render the following component hierarchy:" }),
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
			title: "Component hierarchy",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "<"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "RootLayout"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Header"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "DashboardLayout"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "DashboardSidebar"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "AnalyticsPage"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "main"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">...</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "main"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    </"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "AnalyticsPage"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  </"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "DashboardLayout"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Footer"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "RootLayout"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "react-server-components",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#react-server-components",
				children: "React Server Components"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }),
				"\xA0React introduced new component types: Server, Client (traditional React components), and Shared. To learn more about these new types, we recommend reading the React ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html",
					children: "Server Components RFC"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "With this RFC, you can start using React features and incrementally adopt React Server Components into your Next.js application." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The internals of the new routing system will also leverage recently released React features such as Streaming, Suspense, and Transitions. These are the building blocks for React Server Components." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "server-components-as-the-default",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#server-components-as-the-default",
				children: "Server Components as the Default"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"One of the biggest changes between the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" directories is that, by default, ",
			(0, import_jsx_runtime.jsxs)(_components.strong, { children: [
				"files inside ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
				" will be rendered on the server as React Server Components."
			] })
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This will allow you to automatically adopt React Server Components when migrating from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }),
				" Server components can be used in the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
				" folder or your own folders, but cannot be used in the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
				" directory for backwards compatibility."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "client-and-server-components-convention",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#client-and-server-components-convention",
				children: "Client and Server Components Convention"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" folder will support server, client, and shared components, and you'll be able to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#interleaving-client-and-server-components-in-a-route",
				children: "interleave these components in a tree"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/server-components.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"There is an ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/reactjs/rfcs/pull/189#issuecomment-1116482278",
				children: "ongoing discussion"
			}),
			" on what exactly the convention will be for defining Client Components and Server Components. We will follow the resolution of this discussion."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"For now, Server components can be defined by appending ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".server.js" }),
				" to the filename. E.g. ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.server.js" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Client components can be defined by appending the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".client.js" }),
				" to the filename. E.g. ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "page.client.js" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }), " files are considered shared components. Since they could be rendered on the Server and the Client, they need to respect the constraints of each context."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"Client and Server components have\xA0",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://github.com/josephsavona/rfcs/blob/server-components/text/0000-server-components.md#capabilities--constraints-of-server-and-client-components",
						children: "constraints"
					}),
					" that need to be respected. When deciding to use a client or server component, we recommend using server components (default) until you need to use a client component."
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "hooks",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#hooks",
				children: "Hooks"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We'll be adding Client and Server component hooks that’ll allow you to access the headers object, cookies, pathnames, search params, etc. In the future, we'll have documentation with more information." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "rendering-environments",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#rendering-environments",
				children: "Rendering Environments"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You'll have granular control of what components will be in the client-side JavaScript bundle using the Client and Server Components convention." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"By default, routes in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" will use Static Generation, and will switch to dynamic rendering when a route segment uses ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#hooks",
				children: "server-side hooks"
			}),
			" that require request context."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "interleaving-client-and-server-components-in-a-route",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#interleaving-client-and-server-components-in-a-route",
				children: "Interleaving Client and Server Components in a Route"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In React, there's a restriction around importing Server Components inside Client Components because Server Components might have server-only code (e.g. database or filesystem utilities)." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For example, importing the Server Component would not work:" }),
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
			title: "ClientComponent.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
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
							children: " ServerComponent "
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
							children: " './ServerComponent.js'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ";"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " ClientComponent"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "() {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ("
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "ServerComponent"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    </>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  );"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"However, a Server Component can be passed as a child of a Client Component. You can do this by ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "wrapping" }),
			" them in another Server Component. For example:"
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
			title: "ClientComponent.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " ClientComponent"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "children"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ("
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "h1"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">Client Component</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "h1"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "      {children}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    </>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  );"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// ServerComponent.js"
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " ServerComponent"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "() {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ("
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "h1"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">Server Component</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "h1"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    </>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  );"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// page.js"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// It's possible to import Client and Server components inside Server Components"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// because this component is rendered on the server"
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
							children: " ClientComponent "
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
							children: " \"./ClientComponent.js\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ";"
						})
					]
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
							children: " ServerComponent "
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
							children: " \"./ServerComponent.js\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ";"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " ServerComponentPage"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "() {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ("
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "ClientComponent"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "        <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "ServerComponent"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      </"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "ClientComponent"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    </>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  );"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With this pattern, React will know it needs to render ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ServerComponent" }),
			" on the server before sending the result (which doesn't contain any server-only code) to the client. From the Client Component's perspective, its child will be already rendered."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In layouts, this pattern is applied with the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "children" }),
			" prop so you don't have to create an additional wrapper component."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ClientLayout" }),
			" component will accept the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ServerPage" }),
			" component as its child:"
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
			title: "app/dashboard/layout.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// The Dashboard Layout is a Client Component"
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " ClientLayout"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "children"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "  // Can use useState / useEffect here"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ("
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "h1"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">Layout</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "h1"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "      {children}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    </>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  );"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// The Page is a Server Component that will be passed to Dashboard Layout"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// app/dashboard/settings/page.js"
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " ServerPage"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "() {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ("
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "h1"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">Page</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "h1"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    </>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  );"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }),
				" This style of composition is an important pattern for rendering Server Components inside Client Components. It sets the precedence of one pattern to learn, and is one of the reasons why we've decided to use the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "children" }),
				" prop."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "data-fetching",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#data-fetching",
				children: "Data fetching"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"It will be possible to fetch data inside multiple segments in a route. This is different from the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
			" directory, where data fetching was limited to the page-level."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "data-fetching-in-layouts",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#data-fetching-in-layouts",
				children: "Data fetching in Layouts"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can fetch data in a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
			" file by using the Next.js data fetching methods ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, a blog layout could use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			" to fetch categories from a CMS, which can be used to populate a sidebar component:"
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
			title: "app/blog/layout.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " async"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " getStaticProps"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "() {"
						})
					]
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
							children: "  const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " categories"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " await"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " getCategoriesFromCMS"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "();"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " {"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    props: { categories },"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  };"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " BlogLayout"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "categories"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "children"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ("
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "BlogSidebar"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " categories"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "{categories} />"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "      {children}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    </>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  );"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "multiple-data-fetching-methods-in-a-route",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#multiple-data-fetching-methods-in-a-route",
				children: "Multiple data fetching methods in a route"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can also fetch data in multiple segments of a route. For example, a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "layout" }),
			" that fetches data can also wrap a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "page" }),
			" that fetches its own data."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Using the blog example above, a single post page can use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" }),
			" to fetch post data from a CMS:"
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
			title: "app/blog/[slug]/page.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " async"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " getStaticPaths"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "() {"
						})
					]
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
							children: "  const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " posts"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " await"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " getPostSlugsFromCMS"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "();"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " {"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    paths: posts."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "map"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "post"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ") "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "=>"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " ({"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "      params: { slug: post.slug },"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    })),"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  };"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " async"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " getStaticProps"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "params"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) {"
						})
					]
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
							children: "  const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " post"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " await"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " getPostFromCMS"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(params.slug);"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " {"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    props: { post },"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  };"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " BlogPostPage"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "post"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) {"
						})
					]
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
							children: "  return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Post"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " post"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "{post} />;"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Since both ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app/blog/layout.js" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app/blog/[slug]/page.js" }),
			" use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			", Next.js will statically generate the whole ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/blog/[slug]" }),
			" route as ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "React Server Components" }),
			" at build time - resulting in less client-side JavaScript and faster hydration."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Statically generated routes improve this further, as the client navigation reuses the cache (Server Components data) and doesn't recompute work, leading to less CPU time because you're rendering a snapshot of the Server Components." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "behavior-and-priority",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#behavior-and-priority",
				children: "Behavior and priority"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js Data Fetching Methods (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			") can only be used in Server Components in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" folder. Different data fetching methods in segments across a single route affect each other."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			" in one segment will affect ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			" in other segments. Since a request already has to go to a server for the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			" segment, the server will also render any ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			" segments. It will reuse the props fetched at build time so the data will still be static, the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "rendering" }),
			" happens on-demand on every request with the props generated during ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			" with ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "revalidate (ISR)" }),
			" in one segment will affect ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			" with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "revalidate" }),
			" in other segments. If there are two revalidate periods in one route, the shorter revalidation will take precedence."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }), " In the future, this may be optimized to allow for full data fetching granularity in a route."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "data-fetching-with-react-server-components",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#data-fetching-with-react-server-components",
				children: "Data fetching with React Server Components"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The combination of Server-Side Routing, React Server Components, Suspense and Streaming have a few implications for data fetching and rendering in Next.js:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "parallel-data-fetching",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#parallel-data-fetching",
				children: "Parallel data fetching"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js will eagerly initiate data fetches in parallel to minimize waterfalls. For example, if data fetching was ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "sequential" }),
			", each nested segment in the route couldn't start fetching data until the previous segment was completed. With ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "parallel" }),
			" fetching, however, each segment can eagerly start data fetching at the same time."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/parallel.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Since rendering may depend on Context, rendering for each segment will start once its data has been fetched and its parent has finished rendering." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In the future, with Suspense, rendering could also start immediately - even if the data is not completely loaded. If the data is read before it's available, Suspense will be triggered. React will start rendering Server Components optimistically, before the requests have completed, and will slot in the result as the requests resolve." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "partial-fetching-and-rendering",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#partial-fetching-and-rendering",
				children: "Partial Fetching and Rendering"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When navigating between sibling route segments, Next.js will only fetch and render from that segment down. It will not need to re-fetch or re-render anything above. This means in a page that shares a layout, the layout will be preserved when a user navigates between sibling pages, and Next.js will only fetch and render from that segment down." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This is especially useful for React Server Components, as otherwise each navigation would cause the full page to re-render on the server instead of rendering only the changed part of the page on the server. This reduces the amount of data transfered and execution time, leading to improved performance." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, if the user navigates between the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/analytics" }),
			" and the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/settings" }),
			" pages, React will re-render the page segments but preserve the layouts:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/partial-example.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }),
				" It will be possible to force a re-fetch of data higher up the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#terminology",
					children: "tree"
				}),
				". We are still discussing the details of how this will look and will update the RFC."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "route-groups",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#route-groups",
				children: "Route Groups"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The hierarchy of the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" folder maps directly to URL paths. But it’s possible to break out of this pattern by creating a route group. Route groups can be used to:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Organize routes without affecting the URL structure." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Opt a route segment out of a layout." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Create multiple root layouts by splitting the application." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "convention",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#convention",
				children: "Convention"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: ["A route group can be created by wrapping a folder’s name in parenthesis: ", (0, import_jsx_runtime.jsx)(_components.code, { children: "(folderName)" })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }), " The naming of route groups are only for organizational purposes since they do not affect the URL path."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Example: Opting a route out of a layout" }) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To opt a route out of a layout, create a new route group (e.g. ",
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Before:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/route-group-opt-out-before.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "After:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/route-group-opt-out-after.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Example: Organizing routes without affecting the URL path" }) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Similarly, to organize routes, create a group to keep related routes together. The folders in parenthesis will be omitted from the URL (e.g. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "(marketing)" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "(shop)" }),
			")."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/route-group-organisation.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Example: Creating multiple root layouts" }) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To create multiple root layouts, create two or more route groups at the top level of the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" directory. This is useful for partitioning an application into sections that have a completely different UI or experience. The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<html>" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<body>" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<head>" }),
			" tags of each root layout can be customized separately."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/route-group-multiple-root.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "server-centric-routing",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#server-centric-routing",
				children: "Server-Centric Routing"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Currently, Next.js uses client-side routing. After the initial load and on subsequent navigation, a request is made to the server for the resources of the new page. This includes the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "JavaScript for every component" }),
			" (including components only shown under certain conditions) and their props (JSON data from\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			"\xA0or\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			"). Once both the JavaScript and data are loaded from the server, ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "React renders the components client-side." })
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In this new model, Next.js will use server-centric routing while maintaining client-side transitions. This aligns with\xA0Server Components\xA0which are evaluated on the server." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"On navigation, data is fetched and React renders the components ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "server-side" }),
			". The output from the server are special instructions (not HTML or JSON) for React on the client to update the DOM. These instructions hold the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "result" }),
			" of the rendered Server Components meaning that no JavaScript for that component has to be loaded in the browser to render the result."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This is in contrast to the current default of Client components, which the component JavaScript to the browser to be rendered client-side." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Some benefits of server-centric routing with React Server Components include:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Routing uses the same request used for Server Components (no additional server requests are made)." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Less work is done on the server because navigating between routes only fetches and renders the segments that change." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "No additional JavaScript is loaded in the browser when client-side navigating when no new client components are used." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The router leverages a new streaming protocol so that rendering can start before all data is loaded." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As users navigate around an app, the router will store the result of the React Server Component ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "payload" }),
			" in an in-memory client-side cache. The cache is split by route segments which allows invalidation at any level and ensures consistency across concurrent renders. This means that for certain cases, the cache of a previously fetched segment can be re-used."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Note" }) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: "Static Generation and Server-side caching can be used to optimize data fetching." }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: "The information above describes the behavior of subsequent navigations. The initial load is a different process involving Server Side Rendering to generate HTML." }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: ["While client-side routing has worked well for Next.js, it scales poorly when the number of potential routes is large because the client has to download a\xA0", (0, import_jsx_runtime.jsx)(_components.strong, { children: "route map." })] }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: "Overall, by using React Server Components, client-side navigation is faster because we load and render less components in the browser." }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "instant-loading-states",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#instant-loading-states",
				children: "Instant Loading States"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With server-side routing, navigation happens ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "after" }),
			" data fetching and rendering so it’s important to show loading UI while the data is being fetched otherwise the application will seem unresponsive."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/server-side-routing.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The new router will use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://reactjs.org/docs/react-api.html#reactsuspense",
				children: "Suspense"
			}),
			" for instant loading states and default skeletons. This means loading UI can be shown immediately while the content for the new segment loads. The new content is then swapped in once rendering on the server is complete."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "While rendering is happening:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Navigation to the new route will be immediate." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Shared layouts will remain interactive while new route segments load." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Navigation will be interruptible - meaning the user can navigate between routes while the content of one route is loading." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "default-loading-skeletons",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#default-loading-skeletons",
				children: "Default loading skeletons"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Suspense boundaries will be automatically handled behind-the-scenes with a new file convention called ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "loading.js" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Example:" }) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You will be able to create a default loading skeleton by adding a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "loading.js" }),
			" file inside a folder."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/loading.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "loading.js" }),
			" should export a React component:"
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
			title: "loading.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Loading"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "() {"
						})
					]
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
							children: "  return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "YourSkeleton"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// layout.js"
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Layout"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "children"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "}) {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ("
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Sidebar"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "      {children}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    </>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  )"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// Output"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "<>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Sidebar"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Suspense"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " fallback"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "{<"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Loading"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />}>{children}</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Suspense"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "</>"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This will cause all segments in the folder to be wrapped in a suspense boundary. The default skeleton will be used when the layout is first loaded and when navigating between sibling pages." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "error-handling",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#error-handling",
				children: "Error Handling"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://reactjs.org/docs/error-boundaries.html",
			children: "Error boundaries"
		}), "\xA0are React components that catch JavaScript errors anywhere in their child component tree."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "convention-1",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#convention-1",
				children: "Convention"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You'll be able to create an Error Boundary that will catch errors within a subtree by adding a\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "error.js" }),
			"\xA0file and default exporting a React Component."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/error.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Component will be shown as a fallback if an error is thrown within that subtree. This component can be used to log errors, display useful information about the error, and functionality to attempt to recover from the error." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Due to the nested nature of segments and layouts, creating Error boundaries allows you to isolate errors to those parts of the UI. During an error, layouts above the boundary will remain interactive and their state will be preserved." }),
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
			title: "error.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Error"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "error"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "reset"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ("
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "      An error occurred: {error.message}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "button"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " onClick"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "{() "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "=>"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " reset"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "()}>Try again</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "button"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    </>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  );"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// layout.js"
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Layout"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "children"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "}) {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ("
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Sidebar"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "      {children}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    </>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  )"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// Output"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "<>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Sidebar"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "ErrorBoundary"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " fallback"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "{<"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Error"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />}>{children}</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "ErrorBoundary"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "</>"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Note:" }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"Errors inside a\xA0",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
					"\xA0file in the same segment as an\xA0",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "error.js" }),
					"\xA0will not be caught as the automatic error boundary wraps the children of a layout and not the layout itself."
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "templates",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#templates",
				children: "Templates"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Templates are similar to Layouts in that they wrap each child Layout or Page." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Unlike Layouts that persist across routes and maintain state, templates create a new instance for each of their children. This means that when a user navigates between route segments that share a template, a new instance of the component is mounted." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }), " We recommend using Layouts unless you have a specific reason to use a Template."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "convention-2",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#convention-2",
				children: "Convention"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A template can be defined by exporting a default React component from a\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "template.js" }),
			"\xA0file. The component should accept a\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "children" }),
			"\xA0prop which will be populated with nested segments."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "example",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#example",
				children: "Example"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/template.png",
			alt: ""
		}) }),
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
			title: "template.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Template"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "children"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) {"
						})
					]
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
							children: "  return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Container"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">{children}</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Container"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">;"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The rendered output of a route segment with a Layout and a Template will be as such:" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<Layout>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  {/* Note that the template is given a unique key. */}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  <Template key={routeParam}>{children}</Template>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "</Layout>" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "behavior",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#behavior",
				children: "Behavior"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "There may be cases where you need to mount and unmount shared UI, and templates would be a more suitable option. For example:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Enter/exit animations using CSS or animation libraries" }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Features that rely on ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "useEffect" }),
				" (e.g logging page views) and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "useState" }),
				" (e.g a per-page feedback form)"
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "To change the default framework behavior. E.g. suspense boundaries inside Layouts only show the fallback the first time the Layout is loaded and not when switching pages. For templates, the fallback is shown on each navigation." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For example, consider the design of a nested layout with a bordered container that should be wrapped around every sub-page." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You could put the container inside the parent layout (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "shop/layout.js" }),
			"):"
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
			title: "shop/layout.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Layout"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "children"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) {"
						})
					]
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
							children: "  return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " className"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"container\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">{children}</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">;"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// shop/page.js"
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Page"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "() {"
						})
					]
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
							children: "  return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">...</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">;"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// shop/categories/layout.js"
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " CategoryLayout"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "children"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) {"
						})
					]
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
							children: "  return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">{children}</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">;"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "But any enter/exit animations wouldn’t play when switching pages because the shared parent layout doesn’t re-render." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You could put the container in every nested layout or page:" }),
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
			title: "shop/layout.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Layout"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "children"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) {"
						})
					]
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
							children: "  return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">{children}</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">;"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// shop/page.js"
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Page"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "() {"
						})
					]
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
							children: "  return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " className"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"container\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">...</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">;"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// shop/categories/layout.js"
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " CategoryLayout"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "children"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) {"
						})
					]
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
							children: "  return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " className"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"container\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">{children}</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">;"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "But then you’d have to manually put it in every nested layout or page which can be tedious and error-prone in more complex apps." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "With this convention, you can share templates across routes that create a new instance on navigation. This means DOM elements will be recreated, state will not be preserved, and effects will be re-synchronized." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "advanced-routing-patterns",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#advanced-routing-patterns",
				children: "Advanced Routing Patterns"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We plan to introduce conventions to cover edge cases and allow you to implement more advanced routing patterns. Below are some examples we have been actively thinking about:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "intercepting-routes",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#intercepting-routes",
				children: "Intercepting Routes"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Sometimes, it may be useful to intercept route segments from within other routes. On navigation, the URL will be updated as normal, but the intercepted segment will be shown within the current route’s layout." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "example-1",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#example-1",
				children: "Example"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Before:" }), " Clicking the image leads to a new route with its own layout."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/intercepted-routes-before.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "After:" }), " By intercepting the route, clicking the image now loads the segment within the current route’s layout. E.g. as a modal."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/intercepted-routes-after.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To intercept the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/photo/[id]" }),
			" route from within ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/[username]" }),
			" segment, create a duplicate ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/photo/[id]" }),
			" folder inside the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/[username]" }),
			" folder, and prefix it with the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "(..)" }),
			" convention."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/intercepted-route.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "convention-3",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#convention-3",
				children: "Convention"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "(..)" }),
				" - will match the route segment one level higher (sibling of the parent directory). Similar to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "../" }),
				" in relative paths."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "(..)(..)" }),
				" - will match the route segment two levels higher. Similar to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "../../" }),
				" in relative paths."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "(...)" }), " - will match the route segment in the root directory."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }), " Refreshing or sharing the page would load the route with its default layout."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "dynamic-parallel-routes",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#dynamic-parallel-routes",
				children: "Dynamic Parallel Routes"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Sometimes it may be useful to show two or more leaf segments (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
			") in the same view that can be navigated independently."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Take for instance two or more tab groups within the same dashboard. Navigating one tab group should not affect the other. The combinations of tabs should also be correctly restored when navigating backwards and forwards." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/parallel-routes.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "convention-4",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#convention-4",
				children: "Convention"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"By default, layouts accept a prop called\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "children" }),
			"\xA0which will contain a nested layout or a page. You can rename the prop by creating a named \"slot\" (a folder that includes the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@" }),
			" prefix) and nesting segments inside it."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/parallel-routes-children.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"After this change, the layout will receive a prop called\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "customProp" }),
			"\xA0instead of\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "children" }),
			"."
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
			title: "analytics/layout.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Layout"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "customProp"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " <>{customProp}</>;"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can create parallel routes by adding more than one named slot at the same level. In the example below, both\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@views" }),
			"\xA0and\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@audience" }),
			"\xA0are passed as props to the analytics layout."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/parallel-routes-complete.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can use the named slots to display leaf segments simultaneously." }),
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
			title: "analytics/layout.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Layout"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "views"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "audience"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ("
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "        <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "ViewsNav"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "        {views}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      </"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "        <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "AudienceNav"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "        {audience}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      </"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "div"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    </>"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  );"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When the user first navigates to\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/analytics" }),
			", the\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
			"\xA0segment in each folder (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@views" }),
			"\xA0and\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@audience" }),
			") are shown."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"On navigation to\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/analytics/subscribers" }),
			", only\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@audience" }),
			"\xA0is updated. Similarly, only\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@views" }),
			"\xA0are updated when navigating to\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/analytics/impressions" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Navigating backwards and forwards will reinstate the correct combination of parallel routes." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "combining-intercepting-and-parallel-routes",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#combining-intercepting-and-parallel-routes",
				children: "Combining Intercepting and Parallel Routes"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can combine intercepting and parallel routes to achieve specific routing behaviors in your application." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Example" }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For example, when creating a modal, you often need to be aware of some common challenges, such as:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Modals not being accessible through an URL." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Modals closing when the page is refreshed." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Backwards navigation going to the previous route rather than the route behind the modal." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Forwards navigation not reopening the modal." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You may want the modal to update the URL when it opens, and backwards/fowards navigation to open and close the modal. Additionally, when sharing the URL, you may want the page to load with the modal open and context behind it or you may want the page to load the content without the modal." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "A good example of this are photos on social media sites. Usually, photos are accessible within a modal from the user's feed or profile. But when sharing the photo, they shown directly on their own page." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "By using conventions, we can make the modal behavior map to routing behavior by default." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Consider this folder structure:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/layouts-rfc/intercepted-route-modal.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "With this pattern:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The content of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/photo/[id]" }),
				" is accessible through an URL within its own context. It's also accessible within a modal from within the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/[username]" }),
				" route."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Navigating backwards and forwards using client-side navigation should close and reopen the modal." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Refreshing the page (server-side navigation) should take the user to the original ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/photo/id" }),
				" route instead of showing the modal."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/@modal/(..)photo/[id]/page.js" }),
			", you can return the content of the page wrapped in a modal component."
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
			title: "/@modal/(..)photo/[id]/page.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " PhotoPage"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "() {"
						})
					]
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
							children: "  const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " router"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " useRouter"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "();"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ("
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "Modal"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "      // the modal should always be shown on page load"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "      isOpen"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "{"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "true"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "}"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "      // closing the modal should take user back to the previous page"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "      onClose"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "{() "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "=>"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " router."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "back"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "()}"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    >"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      {"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "/* Page Content */"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "}"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    </"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Modal"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  );"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }), " This solution isn't the only way to create a modal in Next.js, but aims to show how you can combine conventions to achieve more complex routing behavior."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "conditional-routes",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#conditional-routes",
				children: "Conditional Routes"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Sometimes, you may need dynamic information like data or context to determine what route to show. You can use parallel routes to conditionally load one route or another." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Example" }) }),
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
			title: "layout.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " async"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " getServerSideProps"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "params"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) {"
						})
					]
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
							children: "  const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "accountType"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " } "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " await"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " fetchAccount"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(params.slug);"
						})
					]
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
							children: "  return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { props: { isUser: accountType "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "==="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " 'user'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " } };"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " "
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
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " UserOrTeamLayout"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "isUser"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "user"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "team"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) {"
						})
					]
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
							children: "  return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " <>{isUser "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "?"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " user "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: ":"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " team}</>;"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In the example above, you can return either the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "user" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "team" }),
			" route depending on the slug. This allows you to conditionally load the data and match the sub-routes against one option or the other."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "conclusion",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#conclusion",
				children: "Conclusion"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're excited about the future of layouts, routing, and React 18 in Next.js. Implementation work has begun and we'll announce the features once they are available." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Leave comments and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions/37136",
				children: "join the conversation on GitHub Discussions"
			}),
			"."
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
export { toc as a, structuredData as i, frontmatter as n, layouts_rfc_exports as r, MDXContent as t };
