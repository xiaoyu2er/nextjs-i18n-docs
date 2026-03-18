import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/production-checklist-Cx09ss1M.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var production_checklist_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "How to optimize your Next.js application for production",
	"description": "Recommendations to ensure the best performance and user experience before taking your Next.js application to production.",
	"nav_title": "Production"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Before taking your Next.js application to production, there are some optimizations and patterns you should consider implementing for the best user experience, performance, and security."
		},
		{
			"heading": void 0,
			"content": "This page provides best practices that you can use as a reference when building your application and before going to production, as well as the automatic Next.js optimizations you should be aware of."
		},
		{
			"heading": "automatic-optimizations",
			"content": "These Next.js optimizations are enabled by default and require no configuration:"
		},
		{
			"heading": "automatic-optimizations",
			"content": "**Server Components:** Next.js uses Server Components by default. Server Components run on the server, and don't require JavaScript to render on the client. As such, they have no impact on the size of your client-side JavaScript bundles. You can then use Client Components as needed for interactivity."
		},
		{
			"heading": "automatic-optimizations",
			"content": "**Code-splitting:** Server Components enable automatic code-splitting by route segments. You may also consider lazy loading Client Components and third-party libraries, where appropriate."
		},
		{
			"heading": "automatic-optimizations",
			"content": "**Prefetching:** When a link to a new route enters the user's viewport, Next.js prefetches the route in background. This makes navigation to new routes almost instant. You can opt out of prefetching, where appropriate."
		},
		{
			"heading": "automatic-optimizations",
			"content": "**Static Rendering:** Next.js statically renders Server and Client Components on the server at build time and caches the rendered result to improve your application's performance. You can opt into Dynamic Rendering for specific routes, where appropriate. {/* TODO: Update when PPR is stable */}"
		},
		{
			"heading": "automatic-optimizations",
			"content": "**Caching:** Next.js caches data requests, the rendered result of Server and Client Components, static assets, and more, to reduce the number of network requests to your server, database, and backend services. You may opt out of caching, where appropriate."
		},
		{
			"heading": "automatic-optimizations",
			"content": "**Code-splitting:** Next.js automatically code-splits your application code by pages. This means only the code needed for the current page is loaded on navigation. You may also consider lazy loading third-party libraries, where appropriate."
		},
		{
			"heading": "automatic-optimizations",
			"content": "**Prefetching:** When a link to a new route enters the user's viewport, Next.js prefetches the route in background. This makes navigation to new routes almost instant. You can opt out of prefetching, where appropriate."
		},
		{
			"heading": "automatic-optimizations",
			"content": "**Automatic Static Optimization:** Next.js automatically determines that a page is static (can be pre-rendered) if it has no blocking data requirements. Optimized pages can be cached, and served to the end-user from multiple CDN locations. You may opt into Server-side Rendering, where appropriate."
		},
		{
			"heading": "automatic-optimizations",
			"content": "These defaults aim to improve your application's performance, and reduce the cost and amount of data transferred on each network request."
		},
		{
			"heading": "during-development",
			"content": "While building your application, we recommend using the following features to ensure the best performance and user experience:"
		},
		{
			"heading": "routing-and-rendering",
			"content": "**Layouts:** Use layouts to share UI across pages and enable partial rendering on navigation."
		},
		{
			"heading": "routing-and-rendering",
			"content": "**`<Link>` component:** Use the `<Link>` component for client-side navigation and prefetching."
		},
		{
			"heading": "routing-and-rendering",
			"content": "**Error Handling:** Gracefully handle catch-all errors and 404 errors in production by creating custom error pages."
		},
		{
			"heading": "routing-and-rendering",
			"content": "**Client and Server Components:** Follow the recommended composition patterns for Server and Client Components, and check the placement of your `\"use client\"` boundaries to avoid unnecessarily increasing your client-side JavaScript bundle."
		},
		{
			"heading": "routing-and-rendering",
			"content": "**Dynamic APIs:** Be aware that Dynamic APIs like `cookies` and the `searchParams` prop will opt the entire route into Dynamic Rendering (or your whole application if used in the Root Layout). Ensure Dynamic API usage is intentional and wrap them in `<Suspense>` boundaries where appropriate."
		},
		{
			"heading": "routing-and-rendering",
			"content": "> **Good to know**: Partial Prerendering (experimental) will allow parts of a route to be dynamic without opting the whole route into dynamic rendering."
		},
		{
			"heading": "routing-and-rendering",
			"content": "**`<Link>` component:** Use the `<Link>` component for client-side navigation and prefetching."
		},
		{
			"heading": "routing-and-rendering",
			"content": "**Custom Errors:** Gracefully handle 500 and 404 errors"
		},
		{
			"heading": "data-fetching-and-caching",
			"content": "**Server Components:** Leverage the benefits of fetching data on the server using Server Components."
		},
		{
			"heading": "data-fetching-and-caching",
			"content": "**Route Handlers:** Use Route Handlers to access your backend resources from Client Components. But do not call Route Handlers from Server Components to avoid an additional server request."
		},
		{
			"heading": "data-fetching-and-caching",
			"content": "**Streaming:** Use Loading UI and React Suspense to progressively send UI from the server to the client, and prevent the whole route from blocking while data is being fetched."
		},
		{
			"heading": "data-fetching-and-caching",
			"content": "**Parallel Data Fetching:** Reduce network waterfalls by fetching data in parallel, where appropriate. Also, consider preloading data where appropriate."
		},
		{
			"heading": "data-fetching-and-caching",
			"content": "**Data Caching:** Verify whether your data requests are being cached or not, and opt into caching, where appropriate. Ensure requests that don't use `fetch` are cached."
		},
		{
			"heading": "data-fetching-and-caching",
			"content": "**Static Images:** Use the `public` directory to automatically cache your application's static assets, e.g. images."
		},
		{
			"heading": "data-fetching-and-caching",
			"content": "**API Routes:** Use Route Handlers to access your backend resources, and prevent sensitive secrets from being exposed to the client."
		},
		{
			"heading": "data-fetching-and-caching",
			"content": "**Data Caching:** Verify whether your data requests are being cached or not, and opt into caching, where appropriate. Ensure requests that don't use `getStaticProps` are cached where appropriate."
		},
		{
			"heading": "data-fetching-and-caching",
			"content": "**Incremental Static Regeneration:** Use Incremental Static Regeneration to update static pages after they've been built, without rebuilding your entire site."
		},
		{
			"heading": "data-fetching-and-caching",
			"content": "**Static Images:** Use the `public` directory to automatically cache your application's static assets, e.g. images."
		},
		{
			"heading": "ui-and-accessibility",
			"content": "**Forms and Validation:** Use Server Actions to handle form submissions, server-side validation, and handle errors."
		},
		{
			"heading": "ui-and-accessibility",
			"content": "**Global Error UI:** Add `app/global-error.tsx` to provide consistent, accessible fallback UI and recovery for uncaught errors across your app."
		},
		{
			"heading": "ui-and-accessibility",
			"content": "**Global 404:** Add `app/global-not-found.tsx` to serve an accessible 404 for unmatched routes across your app."
		},
		{
			"heading": "ui-and-accessibility",
			"content": "**Font Module:** Optimize fonts by using the Font Module, which automatically hosts your font files with other static assets, removes external network requests, and reduces layout shift."
		},
		{
			"heading": "ui-and-accessibility",
			"content": "**`<Image>` Component:** Optimize images by using the Image Component, which automatically optimizes images, prevents layout shift, and serves them in modern formats like WebP."
		},
		{
			"heading": "ui-and-accessibility",
			"content": "**`<Script>` Component:** Optimize third-party scripts by using the Script Component, which automatically defers scripts and prevents them from blocking the main thread."
		},
		{
			"heading": "ui-and-accessibility",
			"content": "**ESLint:** Use the built-in `eslint-plugin-jsx-a11y` plugin to catch accessibility issues early."
		},
		{
			"heading": "security",
			"content": "**Tainting:** Prevent sensitive data from being exposed to the client by tainting data objects and/or specific values."
		},
		{
			"heading": "security",
			"content": "**Server Actions:** Ensure users are authorized to call Server Actions. Review the recommended security practices."
		},
		{
			"heading": "security",
			"content": "**Environment Variables:** Ensure your `.env.*` files are added to `.gitignore` and only public variables are prefixed with `NEXT_PUBLIC_`."
		},
		{
			"heading": "security",
			"content": "**Content Security Policy:** Consider adding a Content Security Policy to protect your application against various security threats such as cross-site scripting, clickjacking, and other code injection attacks."
		},
		{
			"heading": "metadata-and-seo",
			"content": "**Metadata API:** Use the Metadata API to improve your application's Search Engine Optimization (SEO) by adding page titles, descriptions, and more."
		},
		{
			"heading": "metadata-and-seo",
			"content": "**Open Graph (OG) images:** Create OG images to prepare your application for social sharing."
		},
		{
			"heading": "metadata-and-seo",
			"content": "**Sitemaps and Robots:** Help Search Engines crawl and index your pages by generating sitemaps and robots files."
		},
		{
			"heading": "metadata-and-seo",
			"content": "**`<Head>` Component:** Use the `next/head` component to add page titles, descriptions, and more."
		},
		{
			"heading": "type-safety",
			"content": "**TypeScript and TS Plugin:** Use TypeScript and the TypeScript plugin for better type-safety, and to help you catch errors early."
		},
		{
			"heading": "before-going-to-production",
			"content": "Before going to production, you can run `next build` to build your application locally and catch any build errors, then run `next start` to measure the performance of your application in a production-like environment."
		},
		{
			"heading": "core-web-vitals",
			"content": "**Lighthouse:** Run lighthouse in incognito to gain a better understanding of how your users will experience your site, and to identify areas for improvement. This is a simulated test and should be paired with looking at field data (such as Core Web Vitals)."
		},
		{
			"heading": "core-web-vitals",
			"content": "**`useReportWebVitals` hook:** Use this hook to send Core Web Vitals data to analytics tools."
		},
		{
			"heading": "analyzing-bundles",
			"content": "Use the `@next/bundle-analyzer` plugin to analyze the size of your JavaScript bundles and identify large modules and dependencies that might be impacting your application's performance."
		},
		{
			"heading": "analyzing-bundles",
			"content": "Additionally, the following tools can help you understand the impact of adding new dependencies to your application:"
		},
		{
			"heading": "analyzing-bundles",
			"content": "Import Cost"
		},
		{
			"heading": "analyzing-bundles",
			"content": "Package Phobia"
		},
		{
			"heading": "analyzing-bundles",
			"content": "Bundle Phobia"
		},
		{
			"heading": "analyzing-bundles",
			"content": "bundlejs"
		}
	],
	"headings": [
		{
			"id": "automatic-optimizations",
			"content": "Automatic optimizations"
		},
		{
			"id": "during-development",
			"content": "During development"
		},
		{
			"id": "routing-and-rendering",
			"content": "Routing and rendering"
		},
		{
			"id": "data-fetching-and-caching",
			"content": "Data fetching and caching"
		},
		{
			"id": "ui-and-accessibility",
			"content": "UI and accessibility"
		},
		{
			"id": "security",
			"content": "Security"
		},
		{
			"id": "metadata-and-seo",
			"content": "Metadata and SEO"
		},
		{
			"id": "type-safety",
			"content": "Type safety"
		},
		{
			"id": "before-going-to-production",
			"content": "Before going to production"
		},
		{
			"id": "core-web-vitals",
			"content": "Core Web Vitals"
		},
		{
			"id": "analyzing-bundles",
			"content": "Analyzing bundles"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#automatic-optimizations",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Automatic optimizations" })
	},
	{
		depth: 2,
		url: "#during-development",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "During development" })
	},
	{
		depth: 3,
		url: "#routing-and-rendering",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Routing and rendering" })
	},
	{
		depth: 3,
		url: "#data-fetching-and-caching",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Data fetching and caching" })
	},
	{
		depth: 3,
		url: "#ui-and-accessibility",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "UI and accessibility" })
	},
	{
		depth: 3,
		url: "#security",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Security" })
	},
	{
		depth: 3,
		url: "#metadata-and-seo",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Metadata and SEO" })
	},
	{
		depth: 3,
		url: "#type-safety",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Type safety" })
	},
	{
		depth: 2,
		url: "#before-going-to-production",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Before going to production" })
	},
	{
		depth: 3,
		url: "#core-web-vitals",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Core Web Vitals" })
	},
	{
		depth: 3,
		url: "#analyzing-bundles",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Analyzing bundles" })
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
		strong: "strong",
		ul: "ul",
		...props.components
	}, { AppOnly, PagesOnly } = _components;
	if (!AppOnly) _missingMdxReference("AppOnly", true);
	if (!PagesOnly) _missingMdxReference("PagesOnly", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Before taking your Next.js application to production, there are some optimizations and patterns you should consider implementing for the best user experience, performance, and security." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This page provides best practices that you can use as a reference when ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#during-development",
				children: "building your application"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#before-going-to-production",
				children: "before going to production"
			}),
			", as well as the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#automatic-optimizations",
				children: "automatic Next.js optimizations"
			}),
			" you should be aware of."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "automatic-optimizations",
			children: "Automatic optimizations"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "These Next.js optimizations are enabled by default and require no configuration:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(AppOnly, { children: (0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/getting-started/server-and-client-components",
					children: "Server Components"
				}), ":"] }),
				" Next.js uses Server Components by default. Server Components run on the server, and don't require JavaScript to render on the client. As such, they have no impact on the size of your client-side JavaScript bundles. You can then use ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/getting-started/server-and-client-components",
					children: "Client Components"
				}),
				" as needed for interactivity."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/getting-started/linking-and-navigating#how-navigation-works",
					children: "Code-splitting"
				}), ":"] }),
				" Server Components enable automatic code-splitting by route segments. You may also consider ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/guides/lazy-loading",
					children: "lazy loading"
				}),
				" Client Components and third-party libraries, where appropriate."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/getting-started/linking-and-navigating#prefetching",
				children: "Prefetching"
			}), ":"] }), " When a link to a new route enters the user's viewport, Next.js prefetches the route in background. This makes navigation to new routes almost instant. You can opt out of prefetching, where appropriate."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/getting-started/partial-prerendering#static-rendering",
					children: "Static Rendering"
				}), ":"] }),
				" Next.js statically renders Server and Client Components on the server at build time and caches the rendered result to improve your application's performance. You can opt into ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/getting-started/partial-prerendering#dynamic-rendering",
					children: "Dynamic Rendering"
				}),
				" for specific routes, where appropriate. "
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/caching",
				children: "Caching"
			}), ":"] }), " Next.js caches data requests, the rendered result of Server and Client Components, static assets, and more, to reduce the number of network requests to your server, database, and backend services. You may opt out of caching, where appropriate."] }),
			"\n"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(PagesOnly, { children: (0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/routing/pages-and-layouts",
					children: "Code-splitting"
				}), ":"] }),
				" Next.js automatically code-splits your application code by pages. This means only the code needed for the current page is loaded on navigation. You may also consider ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/guides/lazy-loading",
					children: "lazy loading"
				}),
				" third-party libraries, where appropriate."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/components/link#prefetch",
				children: "Prefetching"
			}), ":"] }), " When a link to a new route enters the user's viewport, Next.js prefetches the route in background. This makes navigation to new routes almost instant. You can opt out of prefetching, where appropriate."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/rendering/automatic-static-optimization",
					children: "Automatic Static Optimization"
				}), ":"] }),
				" Next.js automatically determines that a page is static (can be pre-rendered) if it has no blocking data requirements. Optimized pages can be cached, and served to the end-user from multiple CDN locations. You may opt into ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/data-fetching/get-server-side-props",
					children: "Server-side Rendering"
				}),
				", where appropriate."
			] }),
			"\n"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "These defaults aim to improve your application's performance, and reduce the cost and amount of data transferred on each network request." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "during-development",
			children: "During development"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "While building your application, we recommend using the following features to ensure the best performance and user experience:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "routing-and-rendering",
			children: "Routing and rendering"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(AppOnly, { children: [(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/layout",
					children: "Layouts"
				}), ":"] }),
				" Use layouts to share UI across pages and enable ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/getting-started/linking-and-navigating#client-side-transitions",
					children: "partial rendering"
				}),
				" on navigation."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/app/api-reference/components/link",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "<Link>" }), " component"]
				}), ":"] }),
				" Use the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<Link>" }),
				" component for ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/getting-started/linking-and-navigating#how-navigation-works",
					children: "client-side navigation and prefetching"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/getting-started/error-handling",
					children: "Error Handling"
				}), ":"] }),
				" Gracefully handle ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/getting-started/error-handling",
					children: "catch-all errors"
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/not-found",
					children: "404 errors"
				}),
				" in production by creating custom error pages."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/getting-started/server-and-client-components#examples",
					children: "Client and Server Components"
				}), ":"] }),
				" Follow the recommended composition patterns for Server and Client Components, and check the placement of your ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/app/getting-started/server-and-client-components#examples#moving-client-components-down-the-tree",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "\"use client\"" }), " boundaries"]
				}),
				" to avoid unnecessarily increasing your client-side JavaScript bundle."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/getting-started/partial-prerendering#dynamic-rendering",
					children: "Dynamic APIs"
				}), ":"] }),
				" Be aware that Dynamic APIs like ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/functions/cookies",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "cookies" })
				}),
				" and the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/page#searchparams-optional",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "searchParams" })
				}),
				" prop will opt the entire route into ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/getting-started/partial-prerendering#dynamic-rendering",
					children: "Dynamic Rendering"
				}),
				" (or your whole application if used in the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/layout#root-layout",
					children: "Root Layout"
				}),
				"). Ensure Dynamic API usage is intentional and wrap them in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<Suspense>" }),
				" boundaries where appropriate."
			] }),
			"\n"
		] }), (0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/blog/next-14#partial-prerendering-preview",
					children: "Partial Prerendering (experimental)"
				}),
				" will allow parts of a route to be dynamic without opting the whole route into dynamic rendering."
			] }),
			"\n"
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(PagesOnly, { children: (0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/pages/building-your-application/routing/linking-and-navigating",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "<Link>" }), " component"]
				}), ":"] }),
				" Use the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<Link>" }),
				" component for client-side navigation and prefetching."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/routing/custom-error",
					children: "Custom Errors"
				}), ":"] }),
				" Gracefully handle ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/routing/custom-error#500-page",
					children: "500"
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/routing/custom-error#404-page",
					children: "404 errors"
				})
			] }),
			"\n"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "data-fetching-and-caching",
			children: "Data fetching and caching"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(AppOnly, { children: (0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/getting-started/fetching-data",
				children: "Server Components"
			}), ":"] }), " Leverage the benefits of fetching data on the server using Server Components."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/route",
				children: "Route Handlers"
			}), ":"] }), " Use Route Handlers to access your backend resources from Client Components. But do not call Route Handlers from Server Components to avoid an additional server request."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/loading",
				children: "Streaming"
			}), ":"] }), " Use Loading UI and React Suspense to progressively send UI from the server to the client, and prevent the whole route from blocking while data is being fetched."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/getting-started/fetching-data#parallel-data-fetching",
					children: "Parallel Data Fetching"
				}), ":"] }),
				" Reduce network waterfalls by fetching data in parallel, where appropriate. Also, consider ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/getting-started/fetching-data#preloading-data",
					children: "preloading data"
				}),
				" where appropriate."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/guides/caching#data-cache",
					children: "Data Caching"
				}), ":"] }),
				" Verify whether your data requests are being cached or not, and opt into caching, where appropriate. Ensure requests that don't use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
				" are ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/functions/unstable_cache",
					children: "cached"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/public-folder",
					children: "Static Images"
				}), ":"] }),
				" Use the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "public" }),
				" directory to automatically cache your application's static assets, e.g. images."
			] }),
			"\n"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(PagesOnly, { children: (0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/routing/api-routes",
				children: "API Routes"
			}), ":"] }), " Use Route Handlers to access your backend resources, and prevent sensitive secrets from being exposed to the client."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/data-fetching/get-static-props",
					children: "Data Caching"
				}), ":"] }),
				" Verify whether your data requests are being cached or not, and opt into caching, where appropriate. Ensure requests that don't use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
				" are cached where appropriate."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/guides/incremental-static-regeneration",
				children: "Incremental Static Regeneration"
			}), ":"] }), " Use Incremental Static Regeneration to update static pages after they've been built, without rebuilding your entire site."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/api-reference/file-conventions/public-folder",
					children: "Static Images"
				}), ":"] }),
				" Use the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "public" }),
				" directory to automatically cache your application's static assets, e.g. images."
			] }),
			"\n"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "ui-and-accessibility",
			children: "UI and accessibility"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(AppOnly, { children: (0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/forms",
				children: "Forms and Validation"
			}), ":"] }), " Use Server Actions to handle form submissions, server-side validation, and handle errors."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/error#global-error",
					children: "Global Error UI"
				}), ":"] }),
				" Add ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app/global-error.tsx" }),
				" to provide consistent, accessible fallback UI and recovery for uncaught errors across your app."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/not-found#global-not-foundjs-experimental",
					children: "Global 404"
				}), ":"] }),
				" Add ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app/global-not-found.tsx" }),
				" to serve an accessible 404 for unmatched routes across your app."
			] }),
			"\n"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/components/font",
					children: "Font Module"
				}), ":"] }),
				" Optimize fonts by using the Font Module, which automatically hosts your font files with other static assets, removes external network requests, and reduces ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://web.dev/articles/cls",
					children: "layout shift"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/app/api-reference/components/image",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "<Image>" }), " Component"]
			}), ":"] }), " Optimize images by using the Image Component, which automatically optimizes images, prevents layout shift, and serves them in modern formats like WebP."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/app/guides/scripts",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "<Script>" }), " Component"]
			}), ":"] }), " Optimize third-party scripts by using the Script Component, which automatically defers scripts and prevents them from blocking the main thread."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/architecture/accessibility#linting",
					children: "ESLint"
				}), ":"] }),
				" Use the built-in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-plugin-jsx-a11y" }),
				" plugin to catch accessibility issues early."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "security",
			children: "Security"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(AppOnly, { children: (0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/config/next-config-js/taint",
				children: "Tainting"
			}), ":"] }), " Prevent sensitive data from being exposed to the client by tainting data objects and/or specific values."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/getting-started/updating-data",
					children: "Server Actions"
				}), ":"] }),
				" Ensure users are authorized to call Server Actions. Review the recommended ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/blog/security-nextjs-server-components-actions",
					children: "security practices"
				}),
				"."
			] }),
			"\n"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/guides/environment-variables",
					children: "Environment Variables"
				}), ":"] }),
				" Ensure your ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".env.*" }),
				" files are added to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".gitignore" }),
				" and only public variables are prefixed with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NEXT_PUBLIC_" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/content-security-policy",
				children: "Content Security Policy"
			}), ":"] }), " Consider adding a Content Security Policy to protect your application against various security threats such as cross-site scripting, clickjacking, and other code injection attacks."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "metadata-and-seo",
			children: "Metadata and SEO"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(AppOnly, { children: (0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/getting-started/metadata-and-og-images",
				children: "Metadata API"
			}), ":"] }), " Use the Metadata API to improve your application's Search Engine Optimization (SEO) by adding page titles, descriptions, and more."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/metadata/opengraph-image",
				children: "Open Graph (OG) images"
			}), ":"] }), " Create OG images to prepare your application for social sharing."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/functions/generate-sitemaps",
					children: "Sitemaps"
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/metadata/robots",
					children: "Robots"
				}),
				":"
			] }), " Help Search Engines crawl and index your pages by generating sitemaps and robots files."] }),
			"\n"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(PagesOnly, { children: (0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/pages/api-reference/components/head",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "<Head>" }), " Component"]
				}), ":"] }),
				" Use the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/head" }),
				" component to add page titles, descriptions, and more."
			] }),
			"\n"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "type-safety",
			children: "Type safety"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [
				"TypeScript and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/config/typescript",
					children: "TS Plugin"
				}),
				":"
			] }), " Use TypeScript and the TypeScript plugin for better type-safety, and to help you catch errors early."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "before-going-to-production",
			children: "Before going to production"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Before going to production, you can run ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			" to build your application locally and catch any build errors, then run ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
			" to measure the performance of your application in a production-like environment."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "core-web-vitals",
			children: "Core Web Vitals"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/web/tools/lighthouse",
				children: "Lighthouse"
			}), ":"] }), " Run lighthouse in incognito to gain a better understanding of how your users will experience your site, and to identify areas for improvement. This is a simulated test and should be paired with looking at field data (such as Core Web Vitals)."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(AppOnly, { children: (0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/app/api-reference/functions/use-report-web-vitals",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "useReportWebVitals" }), " hook"]
				}), ":"] }),
				" Use this hook to send ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://web.dev/articles/vitals",
					children: "Core Web Vitals"
				}),
				" data to analytics tools."
			] }),
			"\n"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "analyzing-bundles",
			children: "Analyzing bundles"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/app/guides/package-bundling#analyzing-javascript-bundles",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "@next/bundle-analyzer" }), " plugin"]
			}),
			" to analyze the size of your JavaScript bundles and identify large modules and dependencies that might be impacting your application's performance."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Additionally, the following tools can help you understand the impact of adding new dependencies to your application:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost",
				children: "Import Cost"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://packagephobia.com/",
				children: "Package Phobia"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://bundlephobia.com/",
				children: "Bundle Phobia"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://bundlejs.com/",
				children: "bundlejs"
			}) }),
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
export { toc as a, structuredData as i, frontmatter as n, production_checklist_exports as r, MDXContent as t };
