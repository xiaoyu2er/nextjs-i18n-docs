import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/06-optimizing-Dba05ejy.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _06_optimizing_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Optimizations",
	"description": "Optimize your Next.js application for best performance and user experience.",
	"nav_title": "Optimizing"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js comes with a variety of built-in optimizations designed to improve your application's speed and Core Web Vitals. This guide will cover the optimizations you can leverage to enhance your user experience."
		},
		{
			"heading": "built-in-components",
			"content": "Built-in components abstract away the complexity of implementing common UI optimizations. These components are:"
		},
		{
			"heading": "built-in-components",
			"content": "**Images**: Built on the native `<img>` element. The Image Component optimizes images for performance by lazy loading and automatically resizing images based on device size."
		},
		{
			"heading": "built-in-components",
			"content": "**Link**: Built on the native `<a>` tags. The Link Component prefetches pages in the background, for faster and smoother page transitions."
		},
		{
			"heading": "built-in-components",
			"content": "**Scripts**: Built on the native `<script>` tags. The Script Component gives you control over loading and execution of third-party scripts."
		},
		{
			"heading": "metadata",
			"content": "Metadata helps search engines understand your content better (which can result in better SEO), and allows you to customize how your content is presented on social media, helping you create a more engaging and consistent user experience across various platforms."
		},
		{
			"heading": "metadata",
			"content": "The Metadata API in Next.js allows you to modify the `<head>` element of a page. You can configure metadata in two ways:"
		},
		{
			"heading": "metadata",
			"content": "**Config-based Metadata**: Export a static metadata object or a dynamic generateMetadata function in a `layout.js` or `page.js` file."
		},
		{
			"heading": "metadata",
			"content": "**File-based Metadata**: Add static or dynamically generated special files to route segments."
		},
		{
			"heading": "metadata",
			"content": "Additionally, you can create dynamic Open Graph Images using JSX and CSS with imageResponse constructor."
		},
		{
			"heading": "metadata",
			"content": "The Head Component in Next.js allows you to modify the `<head>` of a page. Learn more in the Head Component documentation."
		},
		{
			"heading": "static-assets",
			"content": "Next.js `/public` folder can be used to serve static assets like images, fonts, and other files. Files inside `/public` can also be cached by CDN providers so that they are delivered efficiently."
		},
		{
			"heading": "analytics-and-monitoring",
			"content": "For large applications, Next.js integrates with popular analytics and monitoring tools to help you understand how your application is performing. Learn more in the Analytics,  OpenTelemetry, and Instrumentation guides."
		}
	],
	"headings": [
		{
			"id": "built-in-components",
			"content": "Built-in Components"
		},
		{
			"id": "metadata",
			"content": "Metadata"
		},
		{
			"id": "static-assets",
			"content": "Static Assets"
		},
		{
			"id": "analytics-and-monitoring",
			"content": "Analytics and Monitoring"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#built-in-components",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Built-in Components" })
	},
	{
		depth: 2,
		url: "#metadata",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Metadata" })
	},
	{
		depth: 2,
		url: "#static-assets",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Static Assets" })
	},
	{
		depth: 2,
		url: "#analytics-and-monitoring",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Analytics and Monitoring" })
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
	}, { AppOnly, PagesOnly } = _components;
	if (!AppOnly) _missingMdxReference("AppOnly", true);
	if (!PagesOnly) _missingMdxReference("PagesOnly", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js comes with a variety of built-in optimizations designed to improve your application's speed and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://web.dev/vitals/",
				children: "Core Web Vitals"
			}),
			". This guide will cover the optimizations you can leverage to enhance your user experience."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "built-in-components",
			children: "Built-in Components"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Built-in components abstract away the complexity of implementing common UI optimizations. These components are:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Images" }),
				": Built on the native ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<img>" }),
				" element. The Image Component optimizes images for performance by lazy loading and automatically resizing images based on device size."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Link" }),
				": Built on the native ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<a>" }),
				" tags. The Link Component prefetches pages in the background, for faster and smoother page transitions."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Scripts" }),
				": Built on the native ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<script>" }),
				" tags. The Script Component gives you control over loading and execution of third-party scripts."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "metadata",
			children: "Metadata"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Metadata helps search engines understand your content better (which can result in better SEO), and allows you to customize how your content is presented on social media, helping you create a more engaging and consistent user experience across various platforms." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(AppOnly, { children: [
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"The Metadata API in Next.js allows you to modify the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<head>" }),
				" element of a page. You can configure metadata in two ways:"
			] }),
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "Config-based Metadata" }),
					": Export a static metadata object or a dynamic generateMetadata function in a ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
					" or ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
					" file."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "File-based Metadata" }), ": Add static or dynamically generated special files to route segments."] }),
				"\n"
			] }),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Additionally, you can create dynamic Open Graph Images using JSX and CSS with ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/functions/image-response",
					children: "imageResponse"
				}),
				" constructor."
			] })
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(PagesOnly, { children: (0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The Head Component in Next.js allows you to modify the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<head>" }),
			" of a page. Learn more in the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/components/head",
				children: "Head Component"
			}),
			" documentation."
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "static-assets",
			children: "Static Assets"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/public" }),
			" folder can be used to serve static assets like images, fonts, and other files. Files inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/public" }),
			" can also be cached by CDN providers so that they are delivered efficiently."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "analytics-and-monitoring",
			children: "Analytics and Monitoring"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For large applications, Next.js integrates with popular analytics and monitoring tools to help you understand how your application is performing. Learn more in the ",
			(0, import_jsx_runtime.jsxs)(PagesOnly, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/optimizing/analytics",
				children: "Analytics"
			}), ", "] }),
			" ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/optimizing/open-telemetry",
				children: "OpenTelemetry"
			}),
			(0, import_jsx_runtime.jsx)(PagesOnly, { children: "," }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/optimizing/instrumentation",
				children: "Instrumentation"
			}),
			" guides."
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
export { toc as a, structuredData as i, _06_optimizing_exports as n, frontmatter as r, MDXContent as t };
