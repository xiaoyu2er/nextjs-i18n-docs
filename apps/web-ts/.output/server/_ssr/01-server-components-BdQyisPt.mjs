import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/01-server-components-BdQyisPt.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _01_server_components_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Server Components",
	"description": "Learn how you can use React Server Components to render parts of your application on the server.",
	"related": {
		"description": "Learn how Next.js caches data and the result of static rendering.",
		"links": ["app/building-your-application/caching"]
	}
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "React Server Components allow you to write UI that can be rendered and optionally cached on the server. In Next.js, the rendering work is further split by route segments to enable streaming and partial rendering, and there are three different server rendering strategies:"
		},
		{
			"heading": void 0,
			"content": "Static Rendering"
		},
		{
			"heading": void 0,
			"content": "Dynamic Rendering"
		},
		{
			"heading": void 0,
			"content": "Streaming"
		},
		{
			"heading": void 0,
			"content": "This page will go through how Server Components work, when you might use them, and the different server rendering strategies."
		},
		{
			"heading": "benefits-of-server-rendering",
			"content": "There are a couple of benefits to doing the rendering work on the server, including:"
		},
		{
			"heading": "benefits-of-server-rendering",
			"content": "**Data Fetching**: Server Components allow you to move data fetching to the server, closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering, and the number of requests the client needs to make."
		},
		{
			"heading": "benefits-of-server-rendering",
			"content": "**Security**: Server Components allow you to keep sensitive data and logic on the server, such as tokens and API keys, without the risk of exposing them to the client."
		},
		{
			"heading": "benefits-of-server-rendering",
			"content": "**Caching**: By rendering on the server, the result can be cached and reused on subsequent requests and across users. This can improve performance and reduce cost by reducing the amount of rendering and data fetching done on each request."
		},
		{
			"heading": "benefits-of-server-rendering",
			"content": "**Performance**: Server Components give you additional tools to optimize performance from the baseline. For example, if you start with an app composed of entirely Client Components, moving non-interactive pieces of your UI to Server Components can reduce the amount of client-side JavaScript needed. This is beneficial for users with slower internet or less powerful devices, as the browser has less client-side JavaScript to download, parse, and execute."
		},
		{
			"heading": "benefits-of-server-rendering",
			"content": "**Initial Page Load and First Contentful Paint (FCP)**: On the server, we can generate HTML to allow users to view the page immediately, without waiting for the client to download, parse and execute the JavaScript needed to render the page."
		},
		{
			"heading": "benefits-of-server-rendering",
			"content": "**Search Engine Optimization and Social Network Shareability**: The rendered HTML can be used by search engine bots to index your pages and social network bots to generate social card previews for your pages."
		},
		{
			"heading": "benefits-of-server-rendering",
			"content": "**Streaming**: Server Components allow you to split the rendering work into chunks and stream them to the client as they become ready. This allows the user to see parts of the page earlier without having to wait for the entire page to be rendered on the server."
		},
		{
			"heading": "using-server-components-in-nextjs",
			"content": "By default, Next.js uses Server Components. This allows you to automatically implement server rendering with no additional configuration, and you can opt into using Client Components when needed, see Client Components."
		},
		{
			"heading": "how-are-server-components-rendered",
			"content": "On the server, Next.js uses React's APIs to orchestrate rendering. The rendering work is split into chunks: by individual route segments and Suspense Boundaries."
		},
		{
			"heading": "how-are-server-components-rendered",
			"content": "Each chunk is rendered in two steps:"
		},
		{
			"heading": "how-are-server-components-rendered",
			"content": "React renders Server Components into a special data format called the &#x2A;*React Server Component Payload (RSC Payload)**."
		},
		{
			"heading": "how-are-server-components-rendered",
			"content": "Next.js uses the RSC Payload and Client Component JavaScript instructions to render **HTML** on the server."
		},
		{
			"heading": "how-are-server-components-rendered",
			"content": "Then, on the client:"
		},
		{
			"heading": "how-are-server-components-rendered",
			"content": "The HTML is used to immediately show a fast non-interactive preview of the route - this is for the initial page load only."
		},
		{
			"heading": "how-are-server-components-rendered",
			"content": "The React Server Components Payload is used to reconcile the Client and Server Component trees, and update the DOM."
		},
		{
			"heading": "how-are-server-components-rendered",
			"content": "The JavaScript instructions are used to hydrate Client Components and make the application interactive."
		},
		{
			"heading": "how-are-server-components-rendered",
			"content": "> **What is the React Server Component Payload (RSC)?**\n>\n> The RSC Payload is a compact binary representation of the rendered React Server Components tree. It's used by React on the client to update the browser's DOM. The RSC Payload contains:\n>\n> * The rendered result of Server Components\n> * Placeholders for where Client Components should be rendered and references to their JavaScript files\n> * Any props passed from a Server Component to a Client Component"
		},
		{
			"heading": "server-rendering-strategies",
			"content": "There are three subsets of server rendering: Static, Dynamic, and Streaming."
		},
		{
			"heading": "static-rendering-default",
			"content": "With Static Rendering, routes are rendered at **build time**, or in the background after data revalidation. The result is cached and can be pushed to a Content Delivery Network (CDN). This optimization allows you to share the result of the rendering work between users and server requests."
		},
		{
			"heading": "static-rendering-default",
			"content": "Static rendering is useful when a route has data that is not personalized to the user and can be known at build time, such as a static blog post or a product page."
		},
		{
			"heading": "dynamic-rendering",
			"content": "With Dynamic Rendering, routes are rendered for each user at **request time**."
		},
		{
			"heading": "dynamic-rendering",
			"content": "Dynamic rendering is useful when a route has data that is personalized to the user or has information that can only be known at request time, such as cookies or the URL's search params."
		},
		{
			"heading": "dynamic-rendering",
			"content": "> **Dynamic Routes with Cached Data**\n>\n> In most websites, routes are not fully static or fully dynamic - it's a spectrum. For example, you can have an e-commerce page that uses cached product data that's revalidated at an interval, but also has uncached, personalized customer data.\n>\n> In Next.js, you can have dynamically rendered routes that have both cached and uncached data. This is because the RSC Payload and data are cached separately. This allows you to opt into dynamic rendering without worrying about the performance impact of fetching all the data at request time.\n>\n> Learn more about the full-route cache and Data Cache."
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "During rendering, if a dynamic function or uncached data request is discovered, Next.js will switch to dynamically rendering the whole route. This table summarizes how dynamic functions and data caching affect whether a route is statically or dynamically rendered:"
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "Dynamic Functions"
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "Data"
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "Route"
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "No"
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "Cached"
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "Statically Rendered"
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "Yes"
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "Cached"
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "Dynamically Rendered"
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "No"
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "Not Cached"
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "Dynamically Rendered"
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "Yes"
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "Not Cached"
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "Dynamically Rendered"
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "In the table above, for a route to be fully static, all data must be cached. However, you can have a dynamically rendered route that uses both cached and uncached data fetches."
		},
		{
			"heading": "switching-to-dynamic-rendering",
			"content": "As a developer, you do not need to choose between static and dynamic rendering as Next.js will automatically choose the best rendering strategy for each route based on the features and APIs used. Instead, you choose when to cache or revalidate specific data, and you may choose to stream parts of your UI."
		},
		{
			"heading": "dynamic-functions",
			"content": "Dynamic functions rely on information that can only be known at request time such as a user's cookies, current requests headers, or the URL's search params. In Next.js, these dynamic functions are:"
		},
		{
			"heading": "dynamic-functions",
			"content": "**`cookies()` and `headers()`**: Using these in a Server Component will opt the whole route into dynamic rendering at request time."
		},
		{
			"heading": "dynamic-functions",
			"content": "**`searchParams`**: Using the `searchParams` prop on a Page will opt the page into dynamic rendering at request time."
		},
		{
			"heading": "dynamic-functions",
			"content": "Using any of these functions will opt the whole route into dynamic rendering at request time."
		},
		{
			"heading": "streaming",
			"content": "Streaming enables you to progressively render UI from the server. Work is split into chunks and streamed to the client as it becomes ready. This allows the user to see parts of the page immediately, before the entire content has finished rendering."
		},
		{
			"heading": "streaming",
			"content": "Streaming is built into the Next.js App Router by default. This helps improve both the initial page loading performance, as well as UI that depends on slower data fetches that would block rendering the whole route. For example, reviews on a product page."
		},
		{
			"heading": "streaming",
			"content": "You can start streaming route segments using `loading.js` and UI components with React Suspense. See the Loading UI and Streaming section for more information."
		}
	],
	"headings": [
		{
			"id": "benefits-of-server-rendering",
			"content": "Benefits of Server Rendering"
		},
		{
			"id": "using-server-components-in-nextjs",
			"content": "Using Server Components in Next.js"
		},
		{
			"id": "how-are-server-components-rendered",
			"content": "How are Server Components rendered?"
		},
		{
			"id": "server-rendering-strategies",
			"content": "Server Rendering Strategies"
		},
		{
			"id": "static-rendering-default",
			"content": "Static Rendering (Default)"
		},
		{
			"id": "dynamic-rendering",
			"content": "Dynamic Rendering"
		},
		{
			"id": "switching-to-dynamic-rendering",
			"content": "Switching to Dynamic Rendering"
		},
		{
			"id": "dynamic-functions",
			"content": "Dynamic Functions"
		},
		{
			"id": "streaming",
			"content": "Streaming"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#benefits-of-server-rendering",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Benefits of Server Rendering" })
	},
	{
		depth: 2,
		url: "#using-server-components-in-nextjs",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Using Server Components in Next.js" })
	},
	{
		depth: 2,
		url: "#how-are-server-components-rendered",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "How are Server Components rendered?" })
	},
	{
		depth: 2,
		url: "#server-rendering-strategies",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Server Rendering Strategies" })
	},
	{
		depth: 3,
		url: "#static-rendering-default",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Static Rendering (Default)" })
	},
	{
		depth: 3,
		url: "#dynamic-rendering",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Dynamic Rendering" })
	},
	{
		depth: 4,
		url: "#switching-to-dynamic-rendering",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Switching to Dynamic Rendering" })
	},
	{
		depth: 4,
		url: "#dynamic-functions",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Dynamic Functions" })
	},
	{
		depth: 3,
		url: "#streaming",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Streaming" })
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
		ol: "ol",
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "React Server Components allow you to write UI that can be rendered and optionally cached on the server. In Next.js, the rendering work is further split by route segments to enable streaming and partial rendering, and there are three different server rendering strategies:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#static-rendering-default",
				children: "Static Rendering"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#dynamic-rendering",
				children: "Dynamic Rendering"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#streaming",
				children: "Streaming"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This page will go through how Server Components work, when you might use them, and the different server rendering strategies." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "benefits-of-server-rendering",
			children: "Benefits of Server Rendering"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "There are a couple of benefits to doing the rendering work on the server, including:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Data Fetching" }), ": Server Components allow you to move data fetching to the server, closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering, and the number of requests the client needs to make."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Security" }), ": Server Components allow you to keep sensitive data and logic on the server, such as tokens and API keys, without the risk of exposing them to the client."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Caching" }), ": By rendering on the server, the result can be cached and reused on subsequent requests and across users. This can improve performance and reduce cost by reducing the amount of rendering and data fetching done on each request."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Performance" }), ": Server Components give you additional tools to optimize performance from the baseline. For example, if you start with an app composed of entirely Client Components, moving non-interactive pieces of your UI to Server Components can reduce the amount of client-side JavaScript needed. This is beneficial for users with slower internet or less powerful devices, as the browser has less client-side JavaScript to download, parse, and execute."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: ["Initial Page Load and ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://web.dev/fcp/",
				children: "First Contentful Paint (FCP)"
			})] }), ": On the server, we can generate HTML to allow users to view the page immediately, without waiting for the client to download, parse and execute the JavaScript needed to render the page."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Search Engine Optimization and Social Network Shareability" }), ": The rendered HTML can be used by search engine bots to index your pages and social network bots to generate social card previews for your pages."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Streaming" }), ": Server Components allow you to split the rendering work into chunks and stream them to the client as they become ready. This allows the user to see parts of the page earlier without having to wait for the entire page to be rendered on the server."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "using-server-components-in-nextjs",
			children: "Using Server Components in Next.js"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"By default, Next.js uses Server Components. This allows you to automatically implement server rendering with no additional configuration, and you can opt into using Client Components when needed, see ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/rendering/client-components",
				children: "Client Components"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "how-are-server-components-rendered",
			children: "How are Server Components rendered?"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"On the server, Next.js uses React's APIs to orchestrate rendering. The rendering work is split into chunks: by individual route segments and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/reference/react/Suspense",
				children: "Suspense Boundaries"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Each chunk is rendered in two steps:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"React renders Server Components into a special data format called the ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "React Server Component Payload (RSC Payload)" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Next.js uses the RSC Payload and Client Component JavaScript instructions to render ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "HTML" }),
				" on the server."
			] }),
			"\n"
		] }),
		"\n",
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Then, on the client:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The HTML is used to immediately show a fast non-interactive preview of the route - this is for the initial page load only." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The React Server Components Payload is used to reconcile the Client and Server Component trees, and update the DOM." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The JavaScript instructions are used to ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://react.dev/reference/react-dom/client/hydrateRoot",
					children: "hydrate"
				}),
				" Client Components and make the application interactive."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "What is the React Server Component Payload (RSC)?" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "The RSC Payload is a compact binary representation of the rendered React Server Components tree. It's used by React on the client to update the browser's DOM. The RSC Payload contains:" }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: "The rendered result of Server Components" }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: "Placeholders for where Client Components should be rendered and references to their JavaScript files" }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: "Any props passed from a Server Component to a Client Component" }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "server-rendering-strategies",
			children: "Server Rendering Strategies"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "There are three subsets of server rendering: Static, Dynamic, and Streaming." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "static-rendering-default",
			children: "Static Rendering (Default)"
		}),
		"\n",
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With Static Rendering, routes are rendered at ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "build time" }),
			", or in the background after ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data",
				children: "data revalidation"
			}),
			". The result is cached and can be pushed to a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Glossary/CDN",
				children: "Content Delivery Network (CDN)"
			}),
			". This optimization allows you to share the result of the rendering work between users and server requests."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Static rendering is useful when a route has data that is not personalized to the user and can be known at build time, such as a static blog post or a product page." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "dynamic-rendering",
			children: "Dynamic Rendering"
		}),
		"\n",
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With Dynamic Rendering, routes are rendered for each user at ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "request time" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Dynamic rendering is useful when a route has data that is personalized to the user or has information that can only be known at request time, such as cookies or the URL's search params." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Dynamic Routes with Cached Data" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "In most websites, routes are not fully static or fully dynamic - it's a spectrum. For example, you can have an e-commerce page that uses cached product data that's revalidated at an interval, but also has uncached, personalized customer data." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "In Next.js, you can have dynamically rendered routes that have both cached and uncached data. This is because the RSC Payload and data are cached separately. This allows you to opt into dynamic rendering without worrying about the performance impact of fetching all the data at request time." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Learn more about the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/caching#full-route-cache",
					children: "full-route cache"
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/caching#data-cache",
					children: "Data Cache"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "switching-to-dynamic-rendering",
			children: "Switching to Dynamic Rendering"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"During rendering, if a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#dynamic-functions",
				children: "dynamic function"
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#opting-out-of-data-caching",
				children: "uncached data request"
			}),
			" is discovered, Next.js will switch to dynamically rendering the whole route. This table summarizes how dynamic functions and data caching affect whether a route is statically or dynamically rendered:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Dynamic Functions" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Data" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Route" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "No" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Cached" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Statically Rendered" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Yes" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Cached" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Dynamically Rendered" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "No" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Not Cached" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Dynamically Rendered" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Yes" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Not Cached" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Dynamically Rendered" })
			] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In the table above, for a route to be fully static, all data must be cached. However, you can have a dynamically rendered route that uses both cached and uncached data fetches." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As a developer, you do not need to choose between static and dynamic rendering as Next.js will automatically choose the best rendering strategy for each route based on the features and APIs used. Instead, you choose when to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating",
				children: "cache or revalidate specific data"
			}),
			", and you may choose to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#streaming",
				children: "stream"
			}),
			" parts of your UI."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "dynamic-functions",
			children: "Dynamic Functions"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Dynamic functions rely on information that can only be known at request time such as a user's cookies, current requests headers, or the URL's search params. In Next.js, these dynamic functions are:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/functions/cookies",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "cookies()" })
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/functions/headers",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "headers()" })
				})
			] }), ": Using these in a Server Component will opt the whole route into dynamic rendering at request time."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/page#searchparams-optional",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "searchParams" })
				}) }),
				": Using the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "searchParams" }),
				" prop on a ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/page",
					children: "Page"
				}),
				" will opt the page into dynamic rendering at request time."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Using any of these functions will opt the whole route into dynamic rendering at request time." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "streaming",
			children: "Streaming"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Diagram showing parallelization of route segments during streaming, showing data fetching, rendering, and hydration of individual chunks.",
			srcLight: "/docs/light/sequential-parallel-data-fetching.png",
			srcDark: "/docs/dark/sequential-parallel-data-fetching.png",
			width: "1600",
			height: "525"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Streaming enables you to progressively render UI from the server. Work is split into chunks and streamed to the client as it becomes ready. This allows the user to see parts of the page immediately, before the entire content has finished rendering." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Diagram showing partially rendered page on the client, with loading UI for chunks that are being streamed.",
			srcLight: "/docs/light/server-rendering-with-streaming.png",
			srcDark: "/docs/dark/server-rendering-with-streaming.png",
			width: "1600",
			height: "785"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Streaming is built into the Next.js App Router by default. This helps improve both the initial page loading performance, as well as UI that depends on slower data fetches that would block rendering the whole route. For example, reviews on a product page." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can start streaming route segments using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "loading.js" }),
			" and UI components with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/loading-ui-and-streaming",
				children: "React Suspense"
			}),
			". See the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/loading-ui-and-streaming",
				children: "Loading UI and Streaming"
			}),
			" section for more information."
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
export { toc as a, structuredData as i, _01_server_components_exports as n, frontmatter as r, MDXContent as t };
