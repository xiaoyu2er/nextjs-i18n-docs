import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/open-telemetry-C3SL5L8i.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var open_telemetry_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "How to set up instrumentation with OpenTelemetry",
	"description": "Learn how to instrument your Next.js app with OpenTelemetry.",
	"nav_title": "OpenTelemetry"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Observability is crucial for understanding and optimizing the behavior and performance of your Next.js app."
		},
		{
			"heading": void 0,
			"content": "As applications become more complex, it becomes increasingly difficult to identify and diagnose issues that may arise. By leveraging observability tools, such as logging and metrics, developers can gain insights into their application's behavior and identify areas for optimization. With observability, developers can proactively address issues before they become major problems and provide a better user experience. Therefore, it is highly recommended to use observability in your Next.js applications to improve performance, optimize resources, and enhance user experience."
		},
		{
			"heading": void 0,
			"content": "We recommend using OpenTelemetry for instrumenting your apps.\nIt's a platform-agnostic way to instrument apps that allows you to change your observability provider without changing your code.\nRead Official OpenTelemetry docs for more information about OpenTelemetry and how it works."
		},
		{
			"heading": void 0,
			"content": "This documentation uses terms like *Span*, *Trace* or *Exporter* throughout this doc, all of which can be found in the OpenTelemetry Observability Primer."
		},
		{
			"heading": void 0,
			"content": "Next.js supports OpenTelemetry instrumentation out of the box, which means that we already instrumented Next.js itself."
		},
		{
			"heading": void 0,
			"content": "When you enable OpenTelemetry we will automatically wrap all your code like\n`getStaticProps` in *spans* with helpful attributes."
		},
		{
			"heading": "getting-started",
			"content": "OpenTelemetry is extensible but setting it up properly can be quite verbose.\nThat's why we prepared a package `@vercel/otel` that helps you get started quickly."
		},
		{
			"heading": "using-vercelotel",
			"content": "To get started, install the following packages:"
		},
		{
			"heading": "using-vercelotel",
			"content": "Next, create a custom `instrumentation.ts` (or `.js`) file in the **root directory** of the project (or inside `src` folder if using one):"
		},
		{
			"heading": "using-vercelotel",
			"content": "Next, create a custom `instrumentation.ts` (or `.js`) file in the **root directory** of the project (or inside `src` folder if using one):"
		},
		{
			"heading": "using-vercelotel",
			"content": "See the `@vercel/otel` documentation for additional configuration options."
		},
		{
			"heading": "using-vercelotel",
			"content": "> **Good to know**:\n>\n> * The `instrumentation` file should be in the root of your project and not inside the `app` or `pages` directory. If you're using the `src` folder, then place the file inside `src` alongside `pages` and `app`.\n> * If you use the `pageExtensions` config option to add a suffix, you will also need to update the `instrumentation` filename to match.\n> * We have created a basic with-opentelemetry example that you can use."
		},
		{
			"heading": "using-vercelotel",
			"content": "> **Good to know**:\n>\n> * The `instrumentation` file should be in the root of your project and not inside the `app` or `pages` directory. If you're using the `src` folder, then place the file inside `src` alongside `pages` and `app`.\n> * If you use the `pageExtensions` config option to add a suffix, you will also need to update the `instrumentation` filename to match.\n> * We have created a basic with-opentelemetry example that you can use."
		},
		{
			"heading": "manual-opentelemetry-configuration",
			"content": "The `@vercel/otel` package provides many configuration options and should serve most of common use cases. But if it doesn't suit your needs, you can configure OpenTelemetry manually."
		},
		{
			"heading": "manual-opentelemetry-configuration",
			"content": "Firstly you need to install OpenTelemetry packages:"
		},
		{
			"heading": "manual-opentelemetry-configuration",
			"content": "Now you can initialize `NodeSDK` in your `instrumentation.ts`.\nUnlike `@vercel/otel`, `NodeSDK` is not compatible with edge runtime, so you need to make sure that you are importing them only when `process.env.NEXT_RUNTIME === 'nodejs'`. We recommend creating a new file `instrumentation.node.ts` which you conditionally import only when using node:"
		},
		{
			"heading": "manual-opentelemetry-configuration",
			"content": "Doing this is equivalent to using `@vercel/otel`, but it's possible to modify and extend some features that are not exposed by the `@vercel/otel`. If edge runtime support is necessary, you will have to use `@vercel/otel`."
		},
		{
			"heading": "testing-your-instrumentation",
			"content": "You need an OpenTelemetry collector with a compatible backend to test OpenTelemetry traces locally.\nWe recommend using our OpenTelemetry dev environment."
		},
		{
			"heading": "testing-your-instrumentation",
			"content": "If everything works well you should be able to see the root server span labeled as `GET /requested/pathname`.\nAll other spans from that particular trace will be nested under it."
		},
		{
			"heading": "testing-your-instrumentation",
			"content": "Next.js traces more spans than are emitted by default.\nTo see more spans, you must set `NEXT_OTEL_VERBOSE=1`."
		},
		{
			"heading": "using-opentelemetry-collector",
			"content": "When you are deploying with OpenTelemetry Collector, you can use `@vercel/otel`.\nIt will work both on Vercel and when self-hosted."
		},
		{
			"heading": "deploying-on-vercel",
			"content": "We made sure that OpenTelemetry works out of the box on Vercel."
		},
		{
			"heading": "deploying-on-vercel",
			"content": "Follow Vercel documentation to connect your project to an observability provider."
		},
		{
			"heading": "self-hosting",
			"content": "Deploying to other platforms is also straightforward. You will need to spin up your own OpenTelemetry Collector to receive and process the telemetry data from your Next.js app."
		},
		{
			"heading": "self-hosting",
			"content": "To do this, follow the OpenTelemetry Collector Getting Started guide, which will walk you through setting up the collector and configuring it to receive data from your Next.js app."
		},
		{
			"heading": "self-hosting",
			"content": "Once you have your collector up and running, you can deploy your Next.js app to your chosen platform following their respective deployment guides."
		},
		{
			"heading": "custom-exporters",
			"content": "OpenTelemetry Collector is not necessary. You can use a custom OpenTelemetry exporter with `@vercel/otel` or manual OpenTelemetry configuration."
		},
		{
			"heading": "custom-spans",
			"content": "You can add a custom span with OpenTelemetry APIs."
		},
		{
			"heading": "custom-spans",
			"content": "The following example demonstrates a function that fetches GitHub stars and adds a custom `fetchGithubStars` span to track the fetch request's result:"
		},
		{
			"heading": "custom-spans",
			"content": "The `register` function will execute before your code runs in a new environment.\nYou can start creating new spans, and they should be correctly added to the exported trace."
		},
		{
			"heading": "default-spans-in-nextjs",
			"content": "Next.js automatically instruments several spans for you to provide useful insights into your application's performance."
		},
		{
			"heading": "default-spans-in-nextjs",
			"content": "Attributes on spans follow OpenTelemetry semantic conventions. We also add some custom attributes under the `next` namespace:"
		},
		{
			"heading": "default-spans-in-nextjs",
			"content": "`next.span_name` - duplicates span name"
		},
		{
			"heading": "default-spans-in-nextjs",
			"content": "`next.span_type` - each span type has a unique identifier"
		},
		{
			"heading": "default-spans-in-nextjs",
			"content": "`next.route` - The route pattern of the request (e.g., `/[param]/user`)."
		},
		{
			"heading": "default-spans-in-nextjs",
			"content": "`next.rsc` (true/false) - Whether the request is an RSC request, such as prefetch."
		},
		{
			"heading": "default-spans-in-nextjs",
			"content": "`next.page`"
		},
		{
			"heading": "default-spans-in-nextjs",
			"content": "This is an internal value used by an app router."
		},
		{
			"heading": "default-spans-in-nextjs",
			"content": "You can think about it as a route to a special file (like `page.ts`, `layout.ts`, `loading.ts` and others)"
		},
		{
			"heading": "default-spans-in-nextjs",
			"content": "It can be used as a unique identifier only when paired with `next.route` because `/layout` can be used to identify both `/(groupA)/layout.ts` and `/(groupB)/layout.ts`"
		},
		{
			"heading": "httpmethod-nextroute",
			"content": "`next.span_type`: `BaseServer.handleRequest`"
		},
		{
			"heading": "httpmethod-nextroute",
			"content": "This span represents the root span for each incoming request to your Next.js application. It tracks the HTTP method, route, target, and status code of the request."
		},
		{
			"heading": "httpmethod-nextroute",
			"content": "Attributes:"
		},
		{
			"heading": "httpmethod-nextroute",
			"content": "Common HTTP attributes"
		},
		{
			"heading": "httpmethod-nextroute",
			"content": "`http.method`"
		},
		{
			"heading": "httpmethod-nextroute",
			"content": "`http.status_code`"
		},
		{
			"heading": "httpmethod-nextroute",
			"content": "Server HTTP attributes"
		},
		{
			"heading": "httpmethod-nextroute",
			"content": "`http.route`"
		},
		{
			"heading": "httpmethod-nextroute",
			"content": "`http.target`"
		},
		{
			"heading": "httpmethod-nextroute",
			"content": "`next.span_name`"
		},
		{
			"heading": "httpmethod-nextroute",
			"content": "`next.span_type`"
		},
		{
			"heading": "httpmethod-nextroute",
			"content": "`next.route`"
		},
		{
			"heading": "render-route-app-nextroute",
			"content": "`next.span_type`: `AppRender.getBodyResult`."
		},
		{
			"heading": "render-route-app-nextroute",
			"content": "This span represents the process of rendering a route in the app router."
		},
		{
			"heading": "render-route-app-nextroute",
			"content": "Attributes:"
		},
		{
			"heading": "render-route-app-nextroute",
			"content": "`next.span_name`"
		},
		{
			"heading": "render-route-app-nextroute",
			"content": "`next.span_type`"
		},
		{
			"heading": "render-route-app-nextroute",
			"content": "`next.route`"
		},
		{
			"heading": "fetch-httpmethod-httpurl",
			"content": "`next.span_type`: `AppRender.fetch`"
		},
		{
			"heading": "fetch-httpmethod-httpurl",
			"content": "This span represents the fetch request executed in your code."
		},
		{
			"heading": "fetch-httpmethod-httpurl",
			"content": "Attributes:"
		},
		{
			"heading": "fetch-httpmethod-httpurl",
			"content": "Common HTTP attributes"
		},
		{
			"heading": "fetch-httpmethod-httpurl",
			"content": "`http.method`"
		},
		{
			"heading": "fetch-httpmethod-httpurl",
			"content": "Client HTTP attributes"
		},
		{
			"heading": "fetch-httpmethod-httpurl",
			"content": "`http.url`"
		},
		{
			"heading": "fetch-httpmethod-httpurl",
			"content": "`net.peer.name`"
		},
		{
			"heading": "fetch-httpmethod-httpurl",
			"content": "`net.peer.port` (only if specified)"
		},
		{
			"heading": "fetch-httpmethod-httpurl",
			"content": "`next.span_name`"
		},
		{
			"heading": "fetch-httpmethod-httpurl",
			"content": "`next.span_type`"
		},
		{
			"heading": "fetch-httpmethod-httpurl",
			"content": "This span can be turned off by setting `NEXT_OTEL_FETCH_DISABLED=1` in your environment. This is useful when you want to use a custom fetch instrumentation library."
		},
		{
			"heading": "executing-api-route-app-nextroute",
			"content": "`next.span_type`: `AppRouteRouteHandlers.runHandler`."
		},
		{
			"heading": "executing-api-route-app-nextroute",
			"content": "This span represents the execution of an API Route Handler in the app router."
		},
		{
			"heading": "executing-api-route-app-nextroute",
			"content": "Attributes:"
		},
		{
			"heading": "executing-api-route-app-nextroute",
			"content": "`next.span_name`"
		},
		{
			"heading": "executing-api-route-app-nextroute",
			"content": "`next.span_type`"
		},
		{
			"heading": "executing-api-route-app-nextroute",
			"content": "`next.route`"
		},
		{
			"heading": "getserversideprops-nextroute",
			"content": "`next.span_type`: `Render.getServerSideProps`."
		},
		{
			"heading": "getserversideprops-nextroute",
			"content": "This span represents the execution of `getServerSideProps` for a specific route."
		},
		{
			"heading": "getserversideprops-nextroute",
			"content": "Attributes:"
		},
		{
			"heading": "getserversideprops-nextroute",
			"content": "`next.span_name`"
		},
		{
			"heading": "getserversideprops-nextroute",
			"content": "`next.span_type`"
		},
		{
			"heading": "getserversideprops-nextroute",
			"content": "`next.route`"
		},
		{
			"heading": "getstaticprops-nextroute",
			"content": "`next.span_type`: `Render.getStaticProps`."
		},
		{
			"heading": "getstaticprops-nextroute",
			"content": "This span represents the execution of `getStaticProps` for a specific route."
		},
		{
			"heading": "getstaticprops-nextroute",
			"content": "Attributes:"
		},
		{
			"heading": "getstaticprops-nextroute",
			"content": "`next.span_name`"
		},
		{
			"heading": "getstaticprops-nextroute",
			"content": "`next.span_type`"
		},
		{
			"heading": "getstaticprops-nextroute",
			"content": "`next.route`"
		},
		{
			"heading": "render-route-pages-nextroute",
			"content": "`next.span_type`: `Render.renderDocument`."
		},
		{
			"heading": "render-route-pages-nextroute",
			"content": "This span represents the process of rendering the document for a specific route."
		},
		{
			"heading": "render-route-pages-nextroute",
			"content": "Attributes:"
		},
		{
			"heading": "render-route-pages-nextroute",
			"content": "`next.span_name`"
		},
		{
			"heading": "render-route-pages-nextroute",
			"content": "`next.span_type`"
		},
		{
			"heading": "render-route-pages-nextroute",
			"content": "`next.route`"
		},
		{
			"heading": "generatemetadata-nextpage",
			"content": "`next.span_type`: `ResolveMetadata.generateMetadata`."
		},
		{
			"heading": "generatemetadata-nextpage",
			"content": "This span represents the process of generating metadata for a specific page (a single route can have multiple of these spans)."
		},
		{
			"heading": "generatemetadata-nextpage",
			"content": "Attributes:"
		},
		{
			"heading": "generatemetadata-nextpage",
			"content": "`next.span_name`"
		},
		{
			"heading": "generatemetadata-nextpage",
			"content": "`next.span_type`"
		},
		{
			"heading": "generatemetadata-nextpage",
			"content": "`next.page`"
		},
		{
			"heading": "resolve-page-components",
			"content": "`next.span_type`: `NextNodeServer.findPageComponents`."
		},
		{
			"heading": "resolve-page-components",
			"content": "This span represents the process of resolving page components for a specific page."
		},
		{
			"heading": "resolve-page-components",
			"content": "Attributes:"
		},
		{
			"heading": "resolve-page-components",
			"content": "`next.span_name`"
		},
		{
			"heading": "resolve-page-components",
			"content": "`next.span_type`"
		},
		{
			"heading": "resolve-page-components",
			"content": "`next.route`"
		},
		{
			"heading": "resolve-segment-modules",
			"content": "`next.span_type`: `NextNodeServer.getLayoutOrPageModule`."
		},
		{
			"heading": "resolve-segment-modules",
			"content": "This span represents loading of code modules for a layout or a page."
		},
		{
			"heading": "resolve-segment-modules",
			"content": "Attributes:"
		},
		{
			"heading": "resolve-segment-modules",
			"content": "`next.span_name`"
		},
		{
			"heading": "resolve-segment-modules",
			"content": "`next.span_type`"
		},
		{
			"heading": "resolve-segment-modules",
			"content": "`next.segment`"
		},
		{
			"heading": "start-response",
			"content": "`next.span_type`: `NextNodeServer.startResponse`."
		},
		{
			"heading": "start-response",
			"content": "This zero-length span represents the time when the first byte has been sent in the response."
		}
	],
	"headings": [
		{
			"id": "getting-started",
			"content": "Getting Started"
		},
		{
			"id": "using-vercelotel",
			"content": "Using `@vercel/otel`"
		},
		{
			"id": "manual-opentelemetry-configuration",
			"content": "Manual OpenTelemetry configuration"
		},
		{
			"id": "testing-your-instrumentation",
			"content": "Testing your instrumentation"
		},
		{
			"id": "deployment",
			"content": "Deployment"
		},
		{
			"id": "using-opentelemetry-collector",
			"content": "Using OpenTelemetry Collector"
		},
		{
			"id": "deploying-on-vercel",
			"content": "Deploying on Vercel"
		},
		{
			"id": "self-hosting",
			"content": "Self-hosting"
		},
		{
			"id": "custom-exporters",
			"content": "Custom Exporters"
		},
		{
			"id": "custom-spans",
			"content": "Custom Spans"
		},
		{
			"id": "default-spans-in-nextjs",
			"content": "Default Spans in Next.js"
		},
		{
			"id": "httpmethod-nextroute",
			"content": "`[http.method] [next.route]`"
		},
		{
			"id": "render-route-app-nextroute",
			"content": "`render route (app) [next.route]`"
		},
		{
			"id": "fetch-httpmethod-httpurl",
			"content": "`fetch [http.method] [http.url]`"
		},
		{
			"id": "executing-api-route-app-nextroute",
			"content": "`executing api route (app) [next.route]`"
		},
		{
			"id": "getserversideprops-nextroute",
			"content": "`getServerSideProps [next.route]`"
		},
		{
			"id": "getstaticprops-nextroute",
			"content": "`getStaticProps [next.route]`"
		},
		{
			"id": "render-route-pages-nextroute",
			"content": "`render route (pages) [next.route]`"
		},
		{
			"id": "generatemetadata-nextpage",
			"content": "`generateMetadata [next.page]`"
		},
		{
			"id": "resolve-page-components",
			"content": "`resolve page components`"
		},
		{
			"id": "resolve-segment-modules",
			"content": "`resolve segment modules`"
		},
		{
			"id": "start-response",
			"content": "`start response`"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#getting-started",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Getting Started" })
	},
	{
		depth: 3,
		url: "#using-vercelotel",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Using ", (0, import_jsx_runtime.jsx)("code", { children: "@vercel/otel" })] })
	},
	{
		depth: 3,
		url: "#manual-opentelemetry-configuration",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Manual OpenTelemetry configuration" })
	},
	{
		depth: 2,
		url: "#testing-your-instrumentation",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Testing your instrumentation" })
	},
	{
		depth: 2,
		url: "#deployment",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Deployment" })
	},
	{
		depth: 3,
		url: "#using-opentelemetry-collector",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Using OpenTelemetry Collector" })
	},
	{
		depth: 4,
		url: "#deploying-on-vercel",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Deploying on Vercel" })
	},
	{
		depth: 4,
		url: "#self-hosting",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Self-hosting" })
	},
	{
		depth: 3,
		url: "#custom-exporters",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Custom Exporters" })
	},
	{
		depth: 2,
		url: "#custom-spans",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Custom Spans" })
	},
	{
		depth: 2,
		url: "#default-spans-in-nextjs",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Default Spans in Next.js" })
	},
	{
		depth: 3,
		url: "#httpmethod-nextroute",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("code", { children: "[http.method] [next.route]" }) })
	},
	{
		depth: 3,
		url: "#render-route-app-nextroute",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("code", { children: "render route (app) [next.route]" }) })
	},
	{
		depth: 3,
		url: "#fetch-httpmethod-httpurl",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("code", { children: "fetch [http.method] [http.url]" }) })
	},
	{
		depth: 3,
		url: "#executing-api-route-app-nextroute",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("code", { children: "executing api route (app) [next.route]" }) })
	},
	{
		depth: 3,
		url: "#getserversideprops-nextroute",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("code", { children: "getServerSideProps [next.route]" }) })
	},
	{
		depth: 3,
		url: "#getstaticprops-nextroute",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("code", { children: "getStaticProps [next.route]" }) })
	},
	{
		depth: 3,
		url: "#render-route-pages-nextroute",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("code", { children: "render route (pages) [next.route]" }) })
	},
	{
		depth: 3,
		url: "#generatemetadata-nextpage",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("code", { children: "generateMetadata [next.page]" }) })
	},
	{
		depth: 3,
		url: "#resolve-page-components",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("code", { children: "resolve page components" }) })
	},
	{
		depth: 3,
		url: "#resolve-segment-modules",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("code", { children: "resolve segment modules" }) })
	},
	{
		depth: 3,
		url: "#start-response",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("code", { children: "start response" }) })
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
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { AppOnly, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, PagesOnly } = _components;
	if (!AppOnly) _missingMdxReference("AppOnly", true);
	if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
	if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
	if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
	if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
	if (!PagesOnly) _missingMdxReference("PagesOnly", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Observability is crucial for understanding and optimizing the behavior and performance of your Next.js app." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "As applications become more complex, it becomes increasingly difficult to identify and diagnose issues that may arise. By leveraging observability tools, such as logging and metrics, developers can gain insights into their application's behavior and identify areas for optimization. With observability, developers can proactively address issues before they become major problems and provide a better user experience. Therefore, it is highly recommended to use observability in your Next.js applications to improve performance, optimize resources, and enhance user experience." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We recommend using OpenTelemetry for instrumenting your apps.\nIt's a platform-agnostic way to instrument apps that allows you to change your observability provider without changing your code.\nRead ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://opentelemetry.io/docs/",
				children: "Official OpenTelemetry docs"
			}),
			" for more information about OpenTelemetry and how it works."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This documentation uses terms like ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "Span" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "Trace" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "Exporter" }),
			" throughout this doc, all of which can be found in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://opentelemetry.io/docs/concepts/observability-primer/",
				children: "the OpenTelemetry Observability Primer"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js supports OpenTelemetry instrumentation out of the box, which means that we already instrumented Next.js itself." }),
		"\n",
		(0, import_jsx_runtime.jsx)(PagesOnly, { children: (0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When you enable OpenTelemetry we will automatically wrap all your code like\n",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			" in ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "spans" }),
			" with helpful attributes."
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "getting-started",
			children: "Getting Started"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"OpenTelemetry is extensible but setting it up properly can be quite verbose.\nThat's why we prepared a package ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@vercel/otel" }),
			" that helps you get started quickly."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "using-vercelotel",
			children: ["Using ", (0, import_jsx_runtime.jsx)(_components.code, { children: "@vercel/otel" })]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To get started, install the following packages:" }),
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
			title: "Terminal",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
				className: "line",
				children: [
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "npm"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " install"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " @vercel/otel"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " @opentelemetry/sdk-logs"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " @opentelemetry/api-logs"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " @opentelemetry/instrumentation"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(AppOnly, { children: (0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next, create a custom ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/instrumentation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation.ts" })
			}),
			" (or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
			") file in the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "root directory" }),
			" of the project (or inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "src" }),
			" folder if using one):"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(PagesOnly, { children: (0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next, create a custom ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/guides/instrumentation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation.ts" })
			}),
			" (or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
			") file in the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "root directory" }),
			" of the project (or inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "src" }),
			" folder if using one):"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "your-project/instrumentation.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "your-project/instrumentation.ts",
					children: "your-project/instrumentation.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "your-project/instrumentation.js",
					children: "your-project/instrumentation.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "your-project/instrumentation.ts",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
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
										children: " { registerOTel } "
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
										children: " '@vercel/otel'"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
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
										children: " function"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " register"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "  registerOTel"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ serviceName: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'next-app'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " })"
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
					}) })
				}),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "your-project/instrumentation.js",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
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
										children: " { registerOTel } "
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
										children: " '@vercel/otel'"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
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
										children: " function"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " register"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "  registerOTel"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ serviceName: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'next-app'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " })"
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
					}) })
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"See the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://www.npmjs.com/package/@vercel/otel",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "@vercel/otel" }), " documentation"]
			}),
			" for additional configuration options."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(AppOnly, { children: (0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }), ":"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"The ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation" }),
					" file should be in the root of your project and not inside the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
					" or ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
					" directory. If you're using the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "src" }),
					" folder, then place the file inside ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "src" }),
					" alongside ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
					" and ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
					"."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"If you use the ",
					(0, import_jsx_runtime.jsxs)(_components.a, {
						href: "/docs/app/api-reference/config/next-config-js/pageExtensions",
						children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "pageExtensions" }), " config option"]
					}),
					" to add a suffix, you will also need to update the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation" }),
					" filename to match."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"We have created a basic ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://github.com/vercel/next.js/tree/canary/examples/with-opentelemetry",
						children: "with-opentelemetry"
					}),
					" example that you can use."
				] }),
				"\n"
			] }),
			"\n"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(PagesOnly, { children: (0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }), ":"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"The ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation" }),
					" file should be in the root of your project and not inside the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
					" or ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
					" directory. If you're using the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "src" }),
					" folder, then place the file inside ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "src" }),
					" alongside ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
					" and ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
					"."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"If you use the ",
					(0, import_jsx_runtime.jsxs)(_components.a, {
						href: "/docs/pages/api-reference/config/next-config-js/pageExtensions",
						children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "pageExtensions" }), " config option"]
					}),
					" to add a suffix, you will also need to update the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation" }),
					" filename to match."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"We have created a basic ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://github.com/vercel/next.js/tree/canary/examples/with-opentelemetry",
						children: "with-opentelemetry"
					}),
					" example that you can use."
				] }),
				"\n"
			] }),
			"\n"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "manual-opentelemetry-configuration",
			children: "Manual OpenTelemetry configuration"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@vercel/otel" }),
			" package provides many configuration options and should serve most of common use cases. But if it doesn't suit your needs, you can configure OpenTelemetry manually."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Firstly you need to install OpenTelemetry packages:" }),
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
			title: "Terminal",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
				className: "line",
				children: [
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "npm"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " install"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " @opentelemetry/sdk-node"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " @opentelemetry/resources"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " @opentelemetry/semantic-conventions"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " @opentelemetry/sdk-trace-node"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " @opentelemetry/exporter-trace-otlp-http"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Now you can initialize ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NodeSDK" }),
			" in your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation.ts" }),
			".\nUnlike ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@vercel/otel" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NodeSDK" }),
			" is not compatible with edge runtime, so you need to make sure that you are importing them only when ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "process.env.NEXT_RUNTIME === 'nodejs'" }),
			". We recommend creating a new file ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation.node.ts" }),
			" which you conditionally import only when using node:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "instrumentation.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [
					(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "instrumentation.ts",
						children: "instrumentation.ts"
					}),
					(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "instrumentation.js",
						children: "instrumentation.js"
					}),
					(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "instrumentation.node.ts",
						children: "instrumentation.node.ts"
					}),
					(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "instrumentation.node.js",
						children: "instrumentation.node.js"
					})
				] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "instrumentation.ts",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
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
										children: " register"
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
										children: "  if"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (process.env."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "NEXT_RUNTIME"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ==="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'nodejs'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ") {"
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
										children: "    await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " import"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'./instrumentation.node.ts'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ")"
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
									children: "  }"
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
					}) })
				}),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "instrumentation.js",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
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
										children: " register"
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
										children: "  if"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (process.env."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "NEXT_RUNTIME"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ==="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'nodejs'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ") {"
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
										children: "    await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " import"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'./instrumentation.node.js'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ")"
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
									children: "  }"
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
					}) })
				}),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "instrumentation.node.ts",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
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
										children: " { OTLPTraceExporter } "
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
										children: " '@opentelemetry/exporter-trace-otlp-http'"
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
										children: " { Resource } "
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
										children: " '@opentelemetry/resources'"
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
										children: " { NodeSDK } "
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
										children: " '@opentelemetry/sdk-node'"
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
										children: " { SimpleSpanProcessor } "
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
										children: " '@opentelemetry/sdk-trace-node'"
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
										children: " { ATTR_SERVICE_NAME } "
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
										children: " '@opentelemetry/semantic-conventions'"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " sdk"
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
										children: " new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " NodeSDK"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({"
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
										children: "  resource: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Resource"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({"
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
										children: "    ["
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "ATTR_SERVICE_NAME"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "]: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'next-app'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ","
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
									children: "  }),"
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
										children: "  spanProcessor: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " SimpleSpanProcessor"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " OTLPTraceExporter"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()),"
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
									children: "})"
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
										children: "sdk."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "start"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							})
						] })
					}) })
				}),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "instrumentation.node.js",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
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
										children: " { OTLPTraceExporter } "
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
										children: " '@opentelemetry/exporter-trace-otlp-http'"
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
										children: " { Resource } "
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
										children: " '@opentelemetry/resources'"
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
										children: " { NodeSDK } "
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
										children: " '@opentelemetry/sdk-node'"
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
										children: " { SimpleSpanProcessor } "
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
										children: " '@opentelemetry/sdk-trace-node'"
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
										children: " { ATTR_SERVICE_NAME } "
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
										children: " '@opentelemetry/semantic-conventions'"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " sdk"
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
										children: " new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " NodeSDK"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({"
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
										children: "  resource: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Resource"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({"
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
										children: "    ["
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "ATTR_SERVICE_NAME"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "]: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'next-app'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ","
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
									children: "  }),"
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
										children: "  spanProcessor: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " SimpleSpanProcessor"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " OTLPTraceExporter"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()),"
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
									children: "})"
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
										children: "sdk."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "start"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							})
						] })
					}) })
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Doing this is equivalent to using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@vercel/otel" }),
			", but it's possible to modify and extend some features that are not exposed by the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@vercel/otel" }),
			". If edge runtime support is necessary, you will have to use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@vercel/otel" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "testing-your-instrumentation",
			children: "Testing your instrumentation"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You need an OpenTelemetry collector with a compatible backend to test OpenTelemetry traces locally.\nWe recommend using our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/opentelemetry-collector-dev-setup",
				children: "OpenTelemetry dev environment"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If everything works well you should be able to see the root server span labeled as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "GET /requested/pathname" }),
			".\nAll other spans from that particular trace will be nested under it."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js traces more spans than are emitted by default.\nTo see more spans, you must set ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NEXT_OTEL_VERBOSE=1" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "deployment",
			children: "Deployment"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "using-opentelemetry-collector",
			children: "Using OpenTelemetry Collector"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When you are deploying with OpenTelemetry Collector, you can use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@vercel/otel" }),
			".\nIt will work both on Vercel and when self-hosted."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "deploying-on-vercel",
			children: "Deploying on Vercel"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We made sure that OpenTelemetry works out of the box on Vercel." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Follow ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/docs/concepts/observability/otel-overview/quickstart",
				children: "Vercel documentation"
			}),
			" to connect your project to an observability provider."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "self-hosting",
			children: "Self-hosting"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Deploying to other platforms is also straightforward. You will need to spin up your own OpenTelemetry Collector to receive and process the telemetry data from your Next.js app." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To do this, follow the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://opentelemetry.io/docs/collector/getting-started/",
				children: "OpenTelemetry Collector Getting Started guide"
			}),
			", which will walk you through setting up the collector and configuring it to receive data from your Next.js app."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Once you have your collector up and running, you can deploy your Next.js app to your chosen platform following their respective deployment guides." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "custom-exporters",
			children: "Custom Exporters"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"OpenTelemetry Collector is not necessary. You can use a custom OpenTelemetry exporter with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#using-vercelotel",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "@vercel/otel" })
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#manual-opentelemetry-configuration",
				children: "manual OpenTelemetry configuration"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "custom-spans",
			children: "Custom Spans"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can add a custom span with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://opentelemetry.io/docs/instrumentation/js/instrumentation",
				children: "OpenTelemetry APIs"
			}),
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
			title: "Terminal",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
				className: "line",
				children: [
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "npm"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " install"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " @opentelemetry/api"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The following example demonstrates a function that fetches GitHub stars and adds a custom ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetchGithubStars" }),
			" span to track the fetch request's result:"
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
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
							children: " { trace } "
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
							children: " '@opentelemetry/api'"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
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
							children: " fetchGithubStars"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " await"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " trace"
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
							children: "    ."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "getTracer"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'nextjs-example'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ")"
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
							children: "    ."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "startActiveSpan"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'fetchGithubStars'"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "async"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " ("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "span"
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
							children: " {"
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
						children: "      try"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "        return"
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
							children: " getValue"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "()"
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
							children: "      } "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "finally"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " {"
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
							children: "        span."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "end"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "()"
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
						children: "      }"
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
						children: "    })"
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
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "register" }),
			" function will execute before your code runs in a new environment.\nYou can start creating new spans, and they should be correctly added to the exported trace."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "default-spans-in-nextjs",
			children: "Default Spans in Next.js"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js automatically instruments several spans for you to provide useful insights into your application's performance." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Attributes on spans follow ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://opentelemetry.io/docs/reference/specification/trace/semantic_conventions/",
				children: "OpenTelemetry semantic conventions"
			}),
			". We also add some custom attributes under the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next" }),
			" namespace:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_name" }), " - duplicates span name"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }), " - each span type has a unique identifier"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.route" }),
				" - The route pattern of the request (e.g., ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/[param]/user" }),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next.rsc" }), " (true/false) - Whether the request is an RSC request, such as prefetch."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.page" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "This is an internal value used by an app router." }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"You can think about it as a route to a special file (like ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "page.ts" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.ts" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "loading.ts" }),
						" and others)"
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"It can be used as a unique identifier only when paired with ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "next.route" }),
						" because ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "/layout" }),
						" can be used to identify both ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "/(groupA)/layout.ts" }),
						" and ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "/(groupB)/layout.ts" })
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "httpmethod-nextroute",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: "[http.method] [next.route]" })
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "BaseServer.handleRequest" })
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This span represents the root span for each incoming request to your Next.js application. It tracks the HTTP method, route, target, and status code of the request." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Attributes:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://opentelemetry.io/docs/reference/specification/trace/semantic_conventions/http/#common-attributes",
					children: "Common HTTP attributes"
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "http.method" }) }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "http.status_code" }) }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://opentelemetry.io/docs/reference/specification/trace/semantic_conventions/http/#http-server-semantic-conventions",
					children: "Server HTTP attributes"
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "http.route" }) }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "http.target" }) }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_name" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.route" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "render-route-app-nextroute",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: "render route (app) [next.route]" })
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "AppRender.getBodyResult" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This span represents the process of rendering a route in the app router." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Attributes:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_name" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.route" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "fetch-httpmethod-httpurl",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: "fetch [http.method] [http.url]" })
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "AppRender.fetch" })
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This span represents the fetch request executed in your code." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Attributes:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://opentelemetry.io/docs/reference/specification/trace/semantic_conventions/http/#common-attributes",
					children: "Common HTTP attributes"
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "http.method" }) }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://opentelemetry.io/docs/reference/specification/trace/semantic_conventions/http/#http-client",
					children: "Client HTTP attributes"
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "http.url" }) }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "net.peer.name" }) }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "net.peer.port" }), " (only if specified)"] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_name" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This span can be turned off by setting ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NEXT_OTEL_FETCH_DISABLED=1" }),
			" in your environment. This is useful when you want to use a custom fetch instrumentation library."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "executing-api-route-app-nextroute",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: "executing api route (app) [next.route]" })
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "AppRouteRouteHandlers.runHandler" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This span represents the execution of an API Route Handler in the app router." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Attributes:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_name" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.route" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "getserversideprops-nextroute",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps [next.route]" })
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Render.getServerSideProps" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This span represents the execution of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			" for a specific route."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Attributes:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_name" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.route" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "getstaticprops-nextroute",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps [next.route]" })
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Render.getStaticProps" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This span represents the execution of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			" for a specific route."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Attributes:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_name" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.route" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "render-route-pages-nextroute",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: "render route (pages) [next.route]" })
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Render.renderDocument" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This span represents the process of rendering the document for a specific route." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Attributes:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_name" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.route" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "generatemetadata-nextpage",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: "generateMetadata [next.page]" })
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "ResolveMetadata.generateMetadata" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This span represents the process of generating metadata for a specific page (a single route can have multiple of these spans)." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Attributes:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_name" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.page" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "resolve-page-components",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: "resolve page components" })
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NextNodeServer.findPageComponents" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This span represents the process of resolving page components for a specific page." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Attributes:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_name" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.route" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "resolve-segment-modules",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: "resolve segment modules" })
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NextNodeServer.getLayoutOrPageModule" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This span represents loading of code modules for a layout or a page." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Attributes:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_name" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.segment" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "start-response",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: "start response" })
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.span_type" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NextNodeServer.startResponse" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This zero-length span represents the time when the first byte has been sent in the response." })
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
export { toc as a, structuredData as i, frontmatter as n, open_telemetry_exports as r, MDXContent as t };
