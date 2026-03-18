import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/backend-for-frontend-BaJw7Vme.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var backend_for_frontend_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "How to use Next.js as a backend for your frontend",
	"description": "Learn how to use Next.js as a backend framework",
	"nav_title": "Backend for Frontend",
	"related": {
		"title": "API Reference",
		"description": "Learn more about Route Handlers and Middleware",
		"links": ["app/api-reference/file-conventions/route", "app/api-reference/file-conventions/middleware"]
	}
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js supports the \"Backend for Frontend\" pattern. This lets you create public endpoints to handle HTTP requests and return any content type—not just HTML. You can also access data sources and perform side effects like updating remote data."
		},
		{
			"heading": void 0,
			"content": "If you are starting a new project, using `create-next-app` with the `--api` flag automatically includes an example `route.ts` in your new project’s `app/` folder, demonstrating how to create an API endpoint."
		},
		{
			"heading": void 0,
			"content": "> **Good to know**: Next.js backend capabilities are not a full backend replacement. They serve as an API layer that:\n>\n> * is publicly reachable\n> * handles any HTTP request\n> * can return any content type"
		},
		{
			"heading": void 0,
			"content": "To implement this pattern, use:"
		},
		{
			"heading": void 0,
			"content": "Route Handlers"
		},
		{
			"heading": void 0,
			"content": "`middleware`"
		},
		{
			"heading": void 0,
			"content": "In Pages Router, API Routes"
		},
		{
			"heading": "public-endpoints",
			"content": "Route Handlers are public HTTP endpoints. Any client can access them."
		},
		{
			"heading": "public-endpoints",
			"content": "Create a Route Handler using the `route.ts` or `route.js` file convention:"
		},
		{
			"heading": "public-endpoints",
			"content": "This handles `GET` requests sent to `/api`."
		},
		{
			"heading": "public-endpoints",
			"content": "Use `try/catch` blocks for operations that may throw an exception:"
		},
		{
			"heading": "public-endpoints",
			"content": "Avoid exposing sensitive information in error messages sent to the client."
		},
		{
			"heading": "public-endpoints",
			"content": "To restrict access, implement authentication and authorization. See Authentication."
		},
		{
			"heading": "content-types",
			"content": "Route Handlers let you serve non-UI responses, including JSON, XML, images, files, and plain text."
		},
		{
			"heading": "content-types",
			"content": "Next.js uses file conventions for common endpoints:"
		},
		{
			"heading": "content-types",
			"content": "`sitemap.xml`"
		},
		{
			"heading": "content-types",
			"content": "`opengraph-image.jpg`, `twitter-image`"
		},
		{
			"heading": "content-types",
			"content": "favicon, app icon, and apple-icon"
		},
		{
			"heading": "content-types",
			"content": "`manifest.json`"
		},
		{
			"heading": "content-types",
			"content": "`robots.txt`"
		},
		{
			"heading": "content-types",
			"content": "You can also define custom ones, such as:"
		},
		{
			"heading": "content-types",
			"content": "`llms.txt`"
		},
		{
			"heading": "content-types",
			"content": "`rss.xml`"
		},
		{
			"heading": "content-types",
			"content": "`.well-known`"
		},
		{
			"heading": "content-types",
			"content": "For example, `app/rss.xml/route.ts` creates a Route Handler for `rss.xml`."
		},
		{
			"heading": "content-types",
			"content": "Sanitize any input used to generate markup."
		},
		{
			"heading": "consuming-request-payloads",
			"content": "Use Request instance methods like `.json()`, `.formData()`, or `.text()` to access the request body."
		},
		{
			"heading": "consuming-request-payloads",
			"content": "`GET` and `HEAD` requests don’t carry a body."
		},
		{
			"heading": "consuming-request-payloads",
			"content": "> **Good to know**: Validate data before passing it to other systems"
		},
		{
			"heading": "consuming-request-payloads",
			"content": "You can only read the request body once. Clone the request if you need to read it again:"
		},
		{
			"heading": "manipulating-data",
			"content": "Route Handlers can transform, filter, and aggregate data from one or more sources. This keeps logic out of the frontend and avoids exposing internal systems."
		},
		{
			"heading": "manipulating-data",
			"content": "You can also offload heavy computations to the server and reduce client battery and data usage."
		},
		{
			"heading": "manipulating-data",
			"content": "> **Good to know**: This example uses `POST` to avoid putting geo-location data in the URL. `GET` requests may be cached or logged, which could expose sensitive info."
		},
		{
			"heading": "proxying-to-a-backend",
			"content": "You can use a Route Handler as a proxy to another backend. Add validation logic before forwarding the request."
		},
		{
			"heading": "proxying-to-a-backend",
			"content": "Or use:"
		},
		{
			"heading": "proxying-to-a-backend",
			"content": "`middleware` rewrites"
		},
		{
			"heading": "proxying-to-a-backend",
			"content": "`rewrites` in `next.config.js`."
		},
		{
			"heading": "nextrequest-and-nextresponse",
			"content": "Next.js extends the `Request` and `Response` Web APIs with methods that simplify common operations. These extensions are available in both Route Handlers and Middleware."
		},
		{
			"heading": "nextrequest-and-nextresponse",
			"content": "Both provide methods for reading and manipulating cookies."
		},
		{
			"heading": "nextrequest-and-nextresponse",
			"content": "`NextRequest` includes the `nextUrl` property, which exposes parsed values from the incoming request, for example, it makes it easier to access request pathname and search params."
		},
		{
			"heading": "nextrequest-and-nextresponse",
			"content": "`NextResponse` provides helpers like `next()`, `json()`, `redirect()`, and `rewrite()`."
		},
		{
			"heading": "nextrequest-and-nextresponse",
			"content": "You can pass `NextRequest` to any function expecting `Request`. Likewise, you can return `NextResponse` where a `Response` is expected."
		},
		{
			"heading": "nextrequest-and-nextresponse",
			"content": "Learn more about `NextRequest` and `NextResponse`."
		},
		{
			"heading": "webhooks-and-callback-urls",
			"content": "Use Route Handlers to receive event notifications from third-party applications."
		},
		{
			"heading": "webhooks-and-callback-urls",
			"content": "For example, revalidate a route when content changes in a CMS. Configure the CMS to call a specific endpoint on changes."
		},
		{
			"heading": "webhooks-and-callback-urls",
			"content": "Callback URLs are another use case. When a user completes a third-party flow, the third party sends them to a callback URL. Use a Route Handler to verify the response and decide where to redirect the user."
		},
		{
			"heading": "redirects",
			"content": "Learn more about redirects in `redirect` and `permanentRedirect`"
		},
		{
			"heading": "middleware",
			"content": "Only one middleware file is allowed per project. Use `config.matcher` to target specific paths. Learn more about middleware."
		},
		{
			"heading": "middleware",
			"content": "Use `middleware` to generate a response before the request reaches a route path."
		},
		{
			"heading": "middleware",
			"content": "You can also proxy requests using `middleware`:"
		},
		{
			"heading": "middleware",
			"content": "Another type of response `middleware` can produce are redirects:"
		},
		{
			"heading": "working-with-headers",
			"content": "Be deliberate about where headers go, and avoid directly passing incoming request headers to the outgoing response."
		},
		{
			"heading": "working-with-headers",
			"content": "**Upstream request headers**: In Middleware, `NextResponse.next({ request: { headers } })` modifies the headers your server receives and does not expose them to the client."
		},
		{
			"heading": "working-with-headers",
			"content": "**Response headers**: `new Response(..., { headers })`, `NextResponse.json(..., { headers })`, `NextResponse.next({ headers })`, or `response.headers.set(...)` send headers back to the client. If sensitive values were appended to these headers, they will be visible to clients."
		},
		{
			"heading": "working-with-headers",
			"content": "Learn more in NextResponse headers in Middleware."
		},
		{
			"heading": "rate-limiting",
			"content": "You can implement rate limiting in your Next.js backend. In addition to code-based checks, enable any rate limiting features provided by your host."
		},
		{
			"heading": "verify-payloads",
			"content": "Never trust incoming request data. Validate content type and size, and sanitize against XSS before use."
		},
		{
			"heading": "verify-payloads",
			"content": "Use timeouts to prevent abuse and protect server resources."
		},
		{
			"heading": "verify-payloads",
			"content": "Store user-generated static assets in dedicated services. When possible, upload them from the browser and store the returned URI in your database to reduce request size."
		},
		{
			"heading": "access-to-protected-resources",
			"content": "Always verify credentials before granting access. Do not rely on middleware alone for authentication and authorization."
		},
		{
			"heading": "access-to-protected-resources",
			"content": "Remove sensitive or unnecessary data from responses and backend logs."
		},
		{
			"heading": "access-to-protected-resources",
			"content": "Rotate credentials and API keys regularly."
		},
		{
			"heading": "preflight-requests",
			"content": "Preflight requests use the `OPTIONS` method to ask the server if a request is allowed based on origin, method, and headers."
		},
		{
			"heading": "preflight-requests",
			"content": "If `OPTIONS` is not defined, Next.js adds it automatically and sets the `Allow` header based on the other defined methods."
		},
		{
			"heading": "preflight-requests",
			"content": "CORS"
		},
		{
			"heading": "library-patterns",
			"content": "Community libraries often use the factory pattern for Route Handlers."
		},
		{
			"heading": "library-patterns",
			"content": "This creates a shared handler for `GET` and `POST` requests. The library customizes behavior based on the `method` and `pathname` in the request."
		},
		{
			"heading": "library-patterns",
			"content": "Libraries can also provide a `middleware` factory."
		},
		{
			"heading": "more-examples",
			"content": "See more examples on using Router Handlers and the `middleware` API references."
		},
		{
			"heading": "more-examples",
			"content": "These examples include, working with Cookies, Headers, Streaming, Middleware negative matching, and other useful code snippets."
		},
		{
			"heading": "server-components",
			"content": "Fetch data in Server Components directly from its source, not via Route Handlers."
		},
		{
			"heading": "server-components",
			"content": "For Server Components pre-rendered at build time, using Route Handlers will fail the build step. This is because, while building there is no server listening for these requests."
		},
		{
			"heading": "server-components",
			"content": "For Server Components rendered on demand, fetching from Route Handlers is slower due to the extra HTTP round trip between the handler and the render process."
		},
		{
			"heading": "server-components",
			"content": "> A server side `fetch` request uses absolute URLs. This implies an HTTP round trip, to an external server. During development, your own development server acts as the external server. At build time there is no server, and at runtime, the server is available through your public facing domain."
		},
		{
			"heading": "server-components",
			"content": "Server Components cover most data-fetching needs. However, fetching data client side might be necessary for:"
		},
		{
			"heading": "server-components",
			"content": "Data that depends on client-only Web APIs:"
		},
		{
			"heading": "server-components",
			"content": "Geo-location API"
		},
		{
			"heading": "server-components",
			"content": "Storage API"
		},
		{
			"heading": "server-components",
			"content": "Audio API"
		},
		{
			"heading": "server-components",
			"content": "File API"
		},
		{
			"heading": "server-components",
			"content": "Frequently polled data"
		},
		{
			"heading": "server-components",
			"content": "For these, use community libraries like `swr` or `react-query`."
		},
		{
			"heading": "server-actions",
			"content": "Server Actions let you run server-side code from the client. Their primary purpose is to mutate data from your frontend client."
		},
		{
			"heading": "server-actions",
			"content": "Server Actions are queued. Using them for data fetching introduces sequential execution."
		},
		{
			"heading": "export-mode",
			"content": "`export` mode outputs a static site without a runtime server. Features that require the Next.js runtime are not supported, because this mode produces a static site, and no runtime server."
		},
		{
			"heading": "export-mode",
			"content": "In `export mode`, only `GET` Route Handlers are supported, in combination with the `dynamic` route segment config, set to `'force-static'`."
		},
		{
			"heading": "export-mode",
			"content": "This can be used to generate static HTML, JSON, TXT, or other files."
		},
		{
			"heading": "deployment-environment",
			"content": "Some hosts deploy Route Handlers as lambda functions. This means:"
		},
		{
			"heading": "deployment-environment",
			"content": "Route Handlers cannot share data between requests."
		},
		{
			"heading": "deployment-environment",
			"content": "The environment may not support writing to File System."
		},
		{
			"heading": "deployment-environment",
			"content": "Long-running handlers may be terminated due to timeouts."
		},
		{
			"heading": "deployment-environment",
			"content": "WebSockets won’t work because the connection closes on timeout, or after the response is generated."
		},
		{
			"heading": "api-reference",
			"content": "Learn more about Route Handlers and Middleware"
		}
	],
	"headings": [
		{
			"id": "public-endpoints",
			"content": "Public Endpoints"
		},
		{
			"id": "content-types",
			"content": "Content types"
		},
		{
			"id": "consuming-request-payloads",
			"content": "Consuming request payloads"
		},
		{
			"id": "manipulating-data",
			"content": "Manipulating data"
		},
		{
			"id": "proxying-to-a-backend",
			"content": "Proxying to a backend"
		},
		{
			"id": "nextrequest-and-nextresponse",
			"content": "NextRequest and NextResponse"
		},
		{
			"id": "webhooks-and-callback-urls",
			"content": "Webhooks and callback URLs"
		},
		{
			"id": "redirects",
			"content": "Redirects"
		},
		{
			"id": "middleware",
			"content": "Middleware"
		},
		{
			"id": "security",
			"content": "Security"
		},
		{
			"id": "working-with-headers",
			"content": "Working with headers"
		},
		{
			"id": "rate-limiting",
			"content": "Rate limiting"
		},
		{
			"id": "verify-payloads",
			"content": "Verify payloads"
		},
		{
			"id": "access-to-protected-resources",
			"content": "Access to protected resources"
		},
		{
			"id": "preflight-requests",
			"content": "Preflight Requests"
		},
		{
			"id": "library-patterns",
			"content": "Library patterns"
		},
		{
			"id": "more-examples",
			"content": "More examples"
		},
		{
			"id": "caveats",
			"content": "Caveats"
		},
		{
			"id": "server-components",
			"content": "Server Components"
		},
		{
			"id": "server-actions",
			"content": "Server Actions"
		},
		{
			"id": "export-mode",
			"content": "`export` mode"
		},
		{
			"id": "deployment-environment",
			"content": "Deployment environment"
		},
		{
			"id": "api-reference",
			"content": "API Reference"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#public-endpoints",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Public Endpoints" })
	},
	{
		depth: 2,
		url: "#content-types",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Content types" })
	},
	{
		depth: 3,
		url: "#consuming-request-payloads",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Consuming request payloads" })
	},
	{
		depth: 2,
		url: "#manipulating-data",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Manipulating data" })
	},
	{
		depth: 2,
		url: "#proxying-to-a-backend",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Proxying to a backend" })
	},
	{
		depth: 2,
		url: "#nextrequest-and-nextresponse",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "NextRequest and NextResponse" })
	},
	{
		depth: 2,
		url: "#webhooks-and-callback-urls",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Webhooks and callback URLs" })
	},
	{
		depth: 2,
		url: "#redirects",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Redirects" })
	},
	{
		depth: 2,
		url: "#middleware",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Middleware" })
	},
	{
		depth: 2,
		url: "#security",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Security" })
	},
	{
		depth: 3,
		url: "#working-with-headers",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Working with headers" })
	},
	{
		depth: 3,
		url: "#rate-limiting",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Rate limiting" })
	},
	{
		depth: 3,
		url: "#verify-payloads",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Verify payloads" })
	},
	{
		depth: 3,
		url: "#access-to-protected-resources",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Access to protected resources" })
	},
	{
		depth: 2,
		url: "#preflight-requests",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Preflight Requests" })
	},
	{
		depth: 2,
		url: "#library-patterns",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Library patterns" })
	},
	{
		depth: 2,
		url: "#more-examples",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "More examples" })
	},
	{
		depth: 2,
		url: "#caveats",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Caveats" })
	},
	{
		depth: 3,
		url: "#server-components",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Server Components" })
	},
	{
		depth: 3,
		url: "#server-actions",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Server Actions" })
	},
	{
		depth: 3,
		url: "#export-mode",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("code", { children: "export" }), " mode"] })
	},
	{
		depth: 3,
		url: "#deployment-environment",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Deployment environment" })
	},
	{
		depth: 2,
		url: "#api-reference",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "API Reference" })
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
	}, { CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger } = _components;
	if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
	if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
	if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
	if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js supports the \"Backend for Frontend\" pattern. This lets you create public endpoints to handle HTTP requests and return any content type—not just HTML. You can also access data sources and perform side effects like updating remote data." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you are starting a new project, using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "create-next-app" }),
			" with the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--api" }),
			" flag automatically includes an example ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "route.ts" }),
			" in your new project’s ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app/" }),
			" folder, demonstrating how to create an API endpoint."
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
						children: "npx"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " create-next-app@latest"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " --api"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }), ": Next.js backend capabilities are not a full backend replacement. They serve as an API layer that:"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: "is publicly reachable" }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: "handles any HTTP request" }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: "can return any content type" }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To implement this pattern, use:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/route",
				children: "Route Handlers"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/middleware",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "middleware" })
			}) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["In Pages Router, ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/routing/api-routes",
				children: "API Routes"
			})] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "public-endpoints",
			children: "Public Endpoints"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Route Handlers are public HTTP endpoints. Any client can access them." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Create a Route Handler using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "route.ts" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "route.js" }),
			" file convention:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "/app/api/route.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/api/route.ts",
					children: "/app/api/route.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/api/route.js",
					children: "/app/api/route.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "/app/api/route.ts",
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
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
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
									children: " GET"
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
										"--shiki-light": "#E36209",
										"--shiki-dark": "#FFAB70"
									},
									children: "request"
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
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: " Request"
								}),
								(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: ") {}"
								})
							]
						}) })
					}) })
				}),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "/app/api/route.js",
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
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
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
									children: " GET"
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
										"--shiki-light": "#E36209",
										"--shiki-dark": "#FFAB70"
									},
									children: "request"
								}),
								(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: ") {}"
								})
							]
						}) })
					}) })
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This handles ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }),
			" requests sent to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/api" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "try/catch" }),
			" blocks for operations that may throw an exception:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "/app/api/route.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/api/route.ts",
					children: "/app/api/route.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/api/route.js",
					children: "/app/api/route.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "/app/api/route.ts",
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
										children: " { submit } "
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
										children: " '@/lib/submit'"
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
										children: " POST"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Request"
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
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "  try"
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
										children: "    await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " submit"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(request)"
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
										children: "    return"
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
										children: " Response"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "null"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "204"
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
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "  } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "catch"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (reason) {"
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
										children: "    const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " message"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
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
										children: "      reason "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "instanceof"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ?"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " reason.message "
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
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'Unexpected error'"
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
										children: "    return"
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
										children: " Response"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(message, { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "500"
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
					value: "/app/api/route.js",
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
										children: " { submit } "
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
										children: " '@/lib/submit'"
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
										children: " POST"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "  try"
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
										children: "    await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " submit"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(request)"
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
										children: "    return"
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
										children: " Response"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "null"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "204"
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
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "  } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "catch"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (reason) {"
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
										children: "    const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " message"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
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
										children: "      reason "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "instanceof"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ?"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " reason.message "
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
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'Unexpected error'"
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
										children: "    return"
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
										children: " Response"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(message, { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "500"
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
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Avoid exposing sensitive information in error messages sent to the client." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To restrict access, implement authentication and authorization. See ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/authentication",
				children: "Authentication"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "content-types",
			children: "Content types"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Route Handlers let you serve non-UI responses, including JSON, XML, images, files, and plain text." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js uses file conventions for common endpoints:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/metadata/sitemap",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "sitemap.xml" })
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/metadata/opengraph-image",
				children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "opengraph-image.jpg" }),
					", ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "twitter-image" })
				]
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/metadata/app-icons",
				children: "favicon, app icon, and apple-icon"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/metadata/manifest",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "manifest.json" })
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/metadata/robots",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "robots.txt" })
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can also define custom ones, such as:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "llms.txt" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "rss.xml" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: ".well-known" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app/rss.xml/route.ts" }),
			" creates a Route Handler for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "rss.xml" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "/app/rss.xml/route.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/rss.xml/route.ts",
					children: "/app/rss.xml/route.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/rss.xml/route.js",
					children: "/app/rss.xml/route.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "/app/rss.xml/route.ts",
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
										children: " GET"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Request"
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " rssResponse"
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
										children: " fetch"
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
											"--shiki-light": "#6A737D",
											"--shiki-dark": "#6A737D"
										},
										children: "/* rss endpoint */"
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
										children: " rssData"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " rssResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " rssFeed"
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
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " `<?xml version=\"1.0\" encoding=\"UTF-8\" ?>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: "<rss version=\"2.0\">"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: "<channel>"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " <title>${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "rssData"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "title"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</title>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " <description>${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "rssData"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "description"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</description>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " <link>${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "rssData"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "link"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</link>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " <copyright>${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "rssData"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "copyright"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</copyright>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " ${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "rssData"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "items"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
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
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "(("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "item"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
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
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
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
									children: "   return"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " `<item>"
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "    <title>${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "item"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "title"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</title>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "    <description>${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "item"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "description"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</description>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "    <link>${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "item"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "link"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</link>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "    <pubDate>${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "item"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "publishDate"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</pubDate>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "    <guid isPermaLink=\"false\">${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "item"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "guid"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</guid>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " </item>`"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " })"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: "}"
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: "</channel>"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: "</rss>`"
								})
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " headers"
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
										children: " Headers"
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
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'content-type'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ": "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'application/xml'"
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
										children: "  return"
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
										children: " Response"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(rssFeed, { headers })"
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
					value: "/app/rss.xml/route.js",
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
										children: " GET"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " rssResponse"
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
										children: " fetch"
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
											"--shiki-light": "#6A737D",
											"--shiki-dark": "#6A737D"
										},
										children: "/* rss endpoint */"
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
										children: " rssData"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " rssResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " rssFeed"
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
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " `<?xml version=\"1.0\" encoding=\"UTF-8\" ?>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: "<rss version=\"2.0\">"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: "<channel>"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " <title>${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "rssData"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "title"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</title>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " <description>${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "rssData"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "description"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</description>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " <link>${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "rssData"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "link"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</link>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " <copyright>${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "rssData"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "copyright"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</copyright>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " ${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "rssData"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "items"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
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
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "(("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "item"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
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
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
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
									children: "   return"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " `<item>"
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "    <title>${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "item"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "title"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</title>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "    <description>${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "item"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "description"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</description>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "    <link>${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "item"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "link"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</link>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "    <pubDate>${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "item"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "publishDate"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</pubDate>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "    <guid isPermaLink=\"false\">${"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "item"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "guid"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "}</guid>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " </item>`"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " })"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: "}"
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: "</channel>"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: "</rss>`"
								})
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " headers"
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
										children: " Headers"
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
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'content-type'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ": "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'application/xml'"
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
										children: "  return"
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
										children: " Response"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(rssFeed, { headers })"
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Sanitize any input used to generate markup." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "consuming-request-payloads",
			children: "Consuming request payloads"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use Request ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/en-US/docs/Web/API/Request#instance_methods",
				children: "instance methods"
			}),
			" like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".json()" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".formData()" }),
			", or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".text()" }),
			" to access the request body."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "HEAD" }),
			" requests don’t carry a body."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "/app/api/echo-body/route.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/api/echo-body/route.ts",
					children: "/app/api/echo-body/route.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/api/echo-body/route.js",
					children: "/app/api/echo-body/route.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "/app/api/echo-body/route.ts",
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
										children: " POST"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Request"
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " res"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
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
										children: " Response."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ res })"
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
					value: "/app/api/echo-body/route.js",
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
										children: " POST"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " res"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
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
										children: " Response."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ res })"
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
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }), ": Validate data before passing it to other systems"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "/app/api/send-email/route.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/api/send-email/route.ts",
					children: "/app/api/send-email/route.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/api/send-email/route.js",
					children: "/app/api/send-email/route.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "/app/api/send-email/route.ts",
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
										children: " { sendMail, validateInputs } "
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
										children: " '@/lib/email-transporter'"
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
										children: " POST"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Request"
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " formData"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "formData"
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
										children: " email"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " formData."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
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
										children: "'email'"
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
										children: " contents"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " formData."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
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
										children: "'contents'"
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
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "  try"
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
										children: "    await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " validateInputs"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ email, contents })"
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
										children: "    const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " info"
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
										children: " sendMail"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ email, contents })"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " Response."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ messageId: info.messageId })"
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
										children: "  } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "catch"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (reason) {"
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
										children: "    const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " message"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
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
										children: "      reason "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "instanceof"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ?"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " reason.message "
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
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'Unexpected exception'"
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
										children: "    return"
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
										children: " Response"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(message, { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "500"
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
					value: "/app/api/send-email/route.js",
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
										children: " { sendMail, validateInputs } "
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
										children: " '@/lib/email-transporter'"
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
										children: " POST"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " formData"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "formData"
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
										children: " email"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " formData."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
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
										children: "'email'"
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
										children: " contents"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " formData."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
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
										children: "'contents'"
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
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "  try"
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
										children: "    await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " validateInputs"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ email, contents })"
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
										children: "    const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " info"
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
										children: " sendMail"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ email, contents })"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " Response."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ messageId: info.messageId })"
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
										children: "  } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "catch"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (reason) {"
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
										children: "    const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " message"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
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
										children: "      reason "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "instanceof"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ?"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " reason.message "
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
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'Unexpected exception'"
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
										children: "    return"
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
										children: " Response"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(message, { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "500"
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
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can only read the request body once. Clone the request if you need to read it again:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "/app/api/clone/route.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/api/clone/route.ts",
					children: "/app/api/clone/route.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/api/clone/route.js",
					children: "/app/api/clone/route.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "/app/api/clone/route.ts",
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
										children: " POST"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Request"
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
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "  try"
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
										children: "    const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " clonedRequest"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "clone"
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
										children: "    await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "body"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "    await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " clonedRequest."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "body"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "    await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "body"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "() "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6A737D",
											"--shiki-dark": "#6A737D"
										},
										children: "// Throws error"
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
										children: "    return"
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
										children: " Response"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "null"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "204"
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
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "  } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "catch"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "    return"
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
										children: " Response"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "null"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "500"
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
					value: "/app/api/clone/route.js",
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
										children: " POST"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "  try"
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
										children: "    const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " clonedRequest"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "clone"
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
										children: "    await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "body"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "    await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " clonedRequest."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "body"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "    await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "body"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "() "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6A737D",
											"--shiki-dark": "#6A737D"
										},
										children: "// Throws error"
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
										children: "    return"
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
										children: " Response"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "null"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "204"
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
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "  } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "catch"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "    return"
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
										children: " Response"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "null"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "500"
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
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "manipulating-data",
			children: "Manipulating data"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Route Handlers can transform, filter, and aggregate data from one or more sources. This keeps logic out of the frontend and avoids exposing internal systems." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can also offload heavy computations to the server and reduce client battery and data usage." }),
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
							children: " { parseWeatherData } "
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
							children: " '@/lib/weather'"
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
							children: " POST"
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
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "request"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Request"
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
							children: "  const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " body"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " request."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "json"
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
							children: " searchParams"
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
							children: " URLSearchParams"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ lat: body.lat, lng: body.lng })"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  try"
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
							children: "    const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " weatherResponse"
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
							children: " fetch"
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
							children: "`${"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "weatherEndpoint"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "}?${"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "searchParams"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "}`"
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
							children: "    if"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "!"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "weatherResponse.ok) {"
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
						children: "      /* handle error */"
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
						children: "    }"
					})
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
							children: "    const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " weatherData"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " weatherResponse."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "text"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "    const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " payload"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " parseWeatherData."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "asJSON"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(weatherData)"
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
							children: "    return"
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
							children: " Response"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(payload, { status: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "200"
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  } "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "catch"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " (reason) {"
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
							children: "    const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " message"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ="
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
							children: "      reason "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "instanceof"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ?"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " reason.message "
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
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " 'Unexpected exception'"
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
							children: "    return"
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
							children: " Response"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(message, { status: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "500"
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
							children: " { parseWeatherData } "
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
							children: " '@/lib/weather'"
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
							children: " POST"
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
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "request"
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
							children: "  const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " body"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " request."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "json"
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
							children: " searchParams"
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
							children: " URLSearchParams"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ lat: body.lat, lng: body.lng })"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  try"
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
							children: "    const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " weatherResponse"
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
							children: " fetch"
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
							children: "`${"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "weatherEndpoint"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "}?${"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "searchParams"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "}`"
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
							children: "    if"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "!"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "weatherResponse.ok) {"
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
						children: "      /* handle error */"
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
						children: "    }"
					})
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
							children: "    const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " weatherData"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " weatherResponse."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "text"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "    const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " payload"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " parseWeatherData."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "asJSON"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(weatherData)"
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
							children: "    return"
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
							children: " Response"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(payload, { status: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "200"
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  } "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "catch"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " (reason) {"
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
							children: "    const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " message"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ="
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
							children: "      reason "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "instanceof"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ?"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " reason.message "
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
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " 'Unexpected exception'"
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
							children: "    return"
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
							children: " Response"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(message, { status: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "500"
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
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }),
				": This example uses ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "POST" }),
				" to avoid putting geo-location data in the URL. ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }),
				" requests may be cached or logged, which could expose sensitive info."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "proxying-to-a-backend",
			children: "Proxying to a backend"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can use a Route Handler as a proxy to another backend. Add validation logic before forwarding the request." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "/app/api/[...slug]/route.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/api/[...slug]/route.ts",
					children: "/app/api/[...slug]/route.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/api/[...slug]/route.js",
					children: "/app/api/[...slug]/route.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "/app/api/[...slug]/route.ts",
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
										children: " { isValidRequest } "
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
										children: " '@/lib/utils'"
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
										children: " POST"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Request"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", { "
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
										children: " clonedRequest"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "clone"
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
										children: " isValid"
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
										children: " isValidRequest"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(clonedRequest)"
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
										children: "  if"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "!"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "isValid) {"
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
										children: "    return"
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
										children: " Response"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "null"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "400"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", statusText: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'Bad Request'"
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
									children: "  }"
								})
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
										children: "slug"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " params"
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
										children: " pathname"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " slug."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "join"
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
										children: "'/'"
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
										children: " proxyURL"
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
										children: " URL"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(pathname, "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'https://nextjs.org'"
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
										children: " proxyRequest"
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
										children: " Request"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(proxyURL, request)"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "  try"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " fetch"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(proxyRequest)"
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
										children: "  } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "catch"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (reason) {"
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
										children: "    const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " message"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
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
										children: "      reason "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "instanceof"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ?"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " reason.message "
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
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'Unexpected exception'"
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
										children: "    return"
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
										children: " Response"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(message, { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "500"
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
					value: "/app/api/[...slug]/route.js",
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
										children: " { isValidRequest } "
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
										children: " '@/lib/utils'"
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
										children: " POST"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", { "
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
										children: " clonedRequest"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "clone"
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
										children: " isValid"
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
										children: " isValidRequest"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(clonedRequest)"
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
										children: "  if"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "!"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "isValid) {"
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
										children: "    return"
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
										children: " Response"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "null"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "400"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", statusText: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'Bad Request'"
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
									children: "  }"
								})
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
										children: "slug"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " params"
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
										children: " pathname"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " slug."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "join"
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
										children: "'/'"
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
										children: " proxyURL"
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
										children: " URL"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(pathname, "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'https://nextjs.org'"
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
										children: " proxyRequest"
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
										children: " Request"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(proxyURL, request)"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "  try"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " fetch"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(proxyRequest)"
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
										children: "  } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "catch"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (reason) {"
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
										children: "    const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " message"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
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
										children: "      reason "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "instanceof"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ?"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " reason.message "
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
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'Unexpected exception'"
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
										children: "    return"
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
										children: " Response"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(message, { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "500"
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
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Or use:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "middleware" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#middleware",
					children: "rewrites"
				})
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/config/next-config-js/rewrites",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "rewrites" })
				}),
				" in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nextrequest-and-nextresponse",
			children: "NextRequest and NextResponse"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js extends the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/en-US/docs/Web/API/Request",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Request" })
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/en-US/docs/Web/API/Response",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Response" })
			}),
			" Web APIs with methods that simplify common operations. These extensions are available in both Route Handlers and Middleware."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Both provide methods for reading and manipulating cookies." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NextRequest" }),
			" includes the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/next-request#nexturl",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "nextUrl" })
			}),
			" property, which exposes parsed values from the incoming request, for example, it makes it easier to access request pathname and search params."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NextResponse" }),
			" provides helpers like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next()" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "json()" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "redirect()" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "rewrite()" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can pass ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NextRequest" }),
			" to any function expecting ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Request" }),
			". Likewise, you can return ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NextResponse" }),
			" where a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Response" }),
			" is expected."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "/app/echo-pathname/route.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/echo-pathname/route.ts",
					children: "/app/echo-pathname/route.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/echo-pathname/route.js",
					children: "/app/echo-pathname/route.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "/app/echo-pathname/route.ts",
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
										children: " { "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "type"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextRequest, NextResponse } "
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
										children: " 'next/server'"
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
										children: " GET"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " NextRequest"
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " nextUrl"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request.nextUrl"
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
										children: "  if"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (nextUrl.searchParams."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
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
										children: "'redirect'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ")) {"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "redirect"
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
										children: " URL"
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
										children: "'/'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", request.url))"
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
										children: "  if"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (nextUrl.searchParams."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
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
										children: "'rewrite'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ")) {"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "rewrite"
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
										children: " URL"
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
										children: "'/'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", request.url))"
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
										children: "  return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ pathname: nextUrl.pathname })"
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
					value: "/app/echo-pathname/route.js",
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
										children: " { NextResponse } "
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
										children: " 'next/server'"
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
										children: " GET"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " nextUrl"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request.nextUrl"
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
										children: "  if"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (nextUrl.searchParams."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
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
										children: "'redirect'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ")) {"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "redirect"
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
										children: " URL"
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
										children: "'/'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", request.url))"
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
										children: "  if"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (nextUrl.searchParams."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
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
										children: "'rewrite'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ")) {"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "rewrite"
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
										children: " URL"
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
										children: "'/'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", request.url))"
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
										children: "  return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ pathname: nextUrl.pathname })"
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
			"Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/next-request",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "NextRequest" })
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/next-response",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "NextResponse" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "webhooks-and-callback-urls",
			children: "Webhooks and callback URLs"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Use Route Handlers to receive event notifications from third-party applications." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For example, revalidate a route when content changes in a CMS. Configure the CMS to call a specific endpoint on changes." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "/app/webhook/route.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/webhook/route.ts",
					children: "/app/webhook/route.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/webhook/route.js",
					children: "/app/webhook/route.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "/app/webhook/route.ts",
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
										children: " { "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "type"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextRequest, NextResponse } "
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
										children: " 'next/server'"
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
										children: " GET"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " NextRequest"
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " token"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request.nextUrl.searchParams."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
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
										children: "'token'"
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
										children: "  if"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (token "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "!=="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " process.env."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "REVALIDATE_SECRET_TOKEN"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ success: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "false"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " }, { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "401"
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
									children: "  }"
								})
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " tag"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request.nextUrl.searchParams."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
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
										children: "'tag'"
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
										children: "  if"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "!"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "tag) {"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ success: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "false"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " }, { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "400"
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
									children: "  }"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: "  revalidateTag"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(tag)"
								})]
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
										children: "  return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ success: "
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
					value: "/app/webhook/route.js",
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
										children: " { NextResponse } "
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
										children: " 'next/server'"
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
										children: " GET"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " token"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request.nextUrl.searchParams."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
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
										children: "'token'"
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
										children: "  if"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (token "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "!=="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " process.env."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "REVALIDATE_SECRET_TOKEN"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ success: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "false"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " }, { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "401"
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
									children: "  }"
								})
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " tag"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request.nextUrl.searchParams."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
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
										children: "'tag'"
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
										children: "  if"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "!"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "tag) {"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ success: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "false"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " }, { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "400"
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
									children: "  }"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: "  revalidateTag"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(tag)"
								})]
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
										children: "  return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ success: "
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Callback URLs are another use case. When a user completes a third-party flow, the third party sends them to a callback URL. Use a Route Handler to verify the response and decide where to redirect the user." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "/app/auth/callback/route.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/auth/callback/route.ts",
					children: "/app/auth/callback/route.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/auth/callback/route.js",
					children: "/app/auth/callback/route.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "/app/auth/callback/route.ts",
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
										children: " { "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "type"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextRequest, NextResponse } "
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
										children: " 'next/server'"
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
										children: " GET"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " NextRequest"
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " token"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request.nextUrl.searchParams."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
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
										children: "'session_token'"
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
										children: " redirectUrl"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request.nextUrl.searchParams."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
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
										children: "'redirect_url'"
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " response"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "redirect"
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
										children: " URL"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(redirectUrl, request.url))"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "  response.cookies."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "set"
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
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "    value: token,"
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
										children: "    name: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'_token'"
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
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    path: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'/'"
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
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    secure: "
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
										children: ","
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
										children: "    httpOnly: "
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
										children: ","
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
										children: "    expires: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "undefined"
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
											"--shiki-light": "#6A737D",
											"--shiki-dark": "#6A737D"
										},
										children: "// session cookie"
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
									children: "  })"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
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
									children: " response"
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
					}) })
				}),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "/app/auth/callback/route.js",
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
										children: " { NextResponse } "
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
										children: " 'next/server'"
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
										children: " GET"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " token"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request.nextUrl.searchParams."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
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
										children: "'session_token'"
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
										children: " redirectUrl"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " request.nextUrl.searchParams."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
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
										children: "'redirect_url'"
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
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " response"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "redirect"
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
										children: " URL"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(redirectUrl, request.url))"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "  response.cookies."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "set"
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
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "    value: token,"
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
										children: "    name: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'_token'"
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
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    path: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'/'"
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
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    secure: "
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
										children: ","
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
										children: "    httpOnly: "
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
										children: ","
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
										children: "    expires: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "undefined"
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
											"--shiki-light": "#6A737D",
											"--shiki-dark": "#6A737D"
										},
										children: "// session cookie"
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
									children: "  })"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
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
									children: " response"
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
					}) })
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "redirects",
			children: "Redirects"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "app/api/route.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "app/api/route.ts",
					children: "app/api/route.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "app/api/route.js",
					children: "app/api/route.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "app/api/route.ts",
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
										children: " { redirect } "
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
										children: " 'next/navigation'"
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
										children: " GET"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Request"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "  redirect"
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
										children: "'https://nextjs.org/'"
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
									children: "}"
								})
							})
						] })
					}) })
				}),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "app/api/route.js",
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
										children: " { redirect } "
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
										children: " 'next/navigation'"
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
										children: " GET"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "  redirect"
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
										children: "'https://nextjs.org/'"
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
			"Learn more about redirects in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/redirect",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "redirect" })
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/permanentRedirect",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "permanentRedirect" })
			})
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "middleware",
			children: "Middleware"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Only one middleware file is allowed per project. Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "config.matcher" }),
			" to target specific paths. Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/middleware",
				children: "middleware"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "middleware" }),
			" to generate a response before the request reaches a route path."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "middleware.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "middleware.ts",
					children: "middleware.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "middleware.js",
					children: "middleware.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "middleware.ts",
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
										children: " { isAuthenticated } "
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
										children: " '@lib/auth'"
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
										children: " const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " config"
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
										children: "  matcher: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'/api/:function*'"
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
									children: "}"
								})
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
										children: " middleware"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Request"
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
										children: "  if"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "!"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "isAuthenticated"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(request)) {"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " Response."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
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
										children: "      { success: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "false"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", message: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'authentication failed'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " },"
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
										children: "      { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "401"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " }"
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
									children: "    )"
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
					value: "middleware.js",
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
										children: " { isAuthenticated } "
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
										children: " '@lib/auth'"
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
										children: " const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " config"
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
										children: "  matcher: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'/api/:function*'"
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
									children: "}"
								})
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
										children: " middleware"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
										children: "  if"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "!"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "isAuthenticated"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(request)) {"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " Response."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
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
										children: "      { success: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "false"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", message: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'authentication failed'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " },"
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
										children: "      { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "401"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " }"
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
									children: "    )"
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
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can also proxy requests using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "middleware" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "middleware.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "middleware.ts",
					children: "middleware.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "middleware.js",
					children: "middleware.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "middleware.ts",
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
										children: " { NextResponse } "
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
										children: " 'next/server'"
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
										children: " middleware"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Request"
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
										children: "  if"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (request.nextUrl.pathname "
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
										children: " '/proxy-this-path'"
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
										children: "    const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " rewriteUrl"
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
										children: " URL"
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
										children: "'https://nextjs.org'"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "rewrite"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(rewriteUrl)"
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
					value: "middleware.js",
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
										children: " { NextResponse } "
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
										children: " 'next/server'"
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
										children: " middleware"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
										children: "  if"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (request.nextUrl.pathname "
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
										children: " '/proxy-this-path'"
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
										children: "    const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " rewriteUrl"
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
										children: " URL"
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
										children: "'https://nextjs.org'"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "rewrite"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(rewriteUrl)"
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
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Another type of response ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "middleware" }),
			" can produce are redirects:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "middleware.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "middleware.ts",
					children: "middleware.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "middleware.js",
					children: "middleware.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "middleware.ts",
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
										children: " { NextResponse } "
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
										children: " 'next/server'"
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
										children: " middleware"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Request"
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
										children: "  if"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (request.nextUrl.pathname "
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
										children: " '/v1/docs'"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    request.nextUrl.pathname "
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
										children: " '/v2/docs'"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "redirect"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(request.nextUrl)"
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
					value: "middleware.js",
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
										children: " { NextResponse } "
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
										children: " 'next/server'"
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
										children: " middleware"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
										children: "  if"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (request.nextUrl.pathname "
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
										children: " '/v1/docs'"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    request.nextUrl.pathname "
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
										children: " '/v2/docs'"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "redirect"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(request.nextUrl)"
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
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "security",
			children: "Security"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "working-with-headers",
			children: "Working with headers"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Be deliberate about where headers go, and avoid directly passing incoming request headers to the outgoing response." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Upstream request headers" }),
				": In Middleware, ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NextResponse.next({ request: { headers } })" }),
				" modifies the headers your server receives and does not expose them to the client."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Response headers" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "new Response(..., { headers })" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NextResponse.json(..., { headers })" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NextResponse.next({ headers })" }),
				", or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "response.headers.set(...)" }),
				" send headers back to the client. If sensitive values were appended to these headers, they will be visible to clients."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/next-response#next",
				children: "NextResponse headers in Middleware"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "rate-limiting",
			children: "Rate limiting"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can implement rate limiting in your Next.js backend. In addition to code-based checks, enable any rate limiting features provided by your host." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "/app/resource/route.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/resource/route.ts",
					children: "/app/resource/route.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "/app/resource/route.js",
					children: "/app/resource/route.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "/app/resource/route.ts",
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
										children: " { NextResponse } "
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
										children: " 'next/server'"
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
										children: " { checkRateLimit } "
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
										children: " '@/lib/rate-limit'"
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
										children: " POST"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Request"
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
										children: "rateLimited"
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
										children: " checkRateLimit"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(request)"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "  if"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: " (rateLimited) {"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ error: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'Rate limit exceeded'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " }, { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "429"
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
									children: "  }"
								})
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
										children: "  return"
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
										children: " Response"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "null"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "204"
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
					value: "/app/resource/route.js",
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
										children: " { NextResponse } "
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
										children: " 'next/server'"
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
										children: " { checkRateLimit } "
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
										children: " '@/lib/rate-limit'"
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
										children: " POST"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
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
										children: "rateLimited"
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
										children: " checkRateLimit"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(request)"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "  if"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: " (rateLimited) {"
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
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " NextResponse."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "({ error: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'Rate limit exceeded'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " }, { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "429"
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
									children: "  }"
								})
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
										children: "  return"
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
										children: " Response"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "null"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "204"
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
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "verify-payloads",
			children: "Verify payloads"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Never trust incoming request data. Validate content type and size, and sanitize against XSS before use." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Use timeouts to prevent abuse and protect server resources." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Store user-generated static assets in dedicated services. When possible, upload them from the browser and store the returned URI in your database to reduce request size." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "access-to-protected-resources",
			children: "Access to protected resources"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Always verify credentials before granting access. Do not rely on middleware alone for authentication and authorization." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Remove sensitive or unnecessary data from responses and backend logs." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Rotate credentials and API keys regularly." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "preflight-requests",
			children: "Preflight Requests"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Preflight requests use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "OPTIONS" }),
			" method to ask the server if a request is allowed based on origin, method, and headers."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "OPTIONS" }),
			" is not defined, Next.js adds it automatically and sets the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Allow" }),
			" header based on the other defined methods."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/route#cors",
				children: "CORS"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "library-patterns",
			children: "Library patterns"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Community libraries often use the factory pattern for Route Handlers." }),
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
			title: "/app/api/[...path]/route.ts",
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
							children: " { createHandler } "
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
							children: " 'third-party-library'"
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
							children: " handler"
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
							children: " createHandler"
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
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "  /* library-specific options */"
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
						children: "})"
					})
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
							children: " const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " GET"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " handler"
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
						children: "// or"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { handler "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "as"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " POST }"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This creates a shared handler for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "POST" }),
			" requests. The library customizes behavior based on the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "method" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pathname" }),
			" in the request."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Libraries can also provide a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "middleware" }),
			" factory."
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
			title: "middleware.ts",
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
							children: " { createMiddleware } "
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
							children: " 'third-party-library'"
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
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " createMiddleware"
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
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "more-examples",
			children: "More examples"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"See more examples on using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/route#examples",
				children: "Router Handlers"
			}),
			" and the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/middleware#examples",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "middleware" })
			}),
			" API references."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"These examples include, working with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/route#cookies",
				children: "Cookies"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/route#headers",
				children: "Headers"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/route#streaming",
				children: "Streaming"
			}),
			", Middleware ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/middleware#negative-matching",
				children: "negative matching"
			}),
			", and other useful code snippets."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "caveats",
			children: "Caveats"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "server-components",
			children: "Server Components"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Fetch data in Server Components directly from its source, not via Route Handlers." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For Server Components pre-rendered at build time, using Route Handlers will fail the build step. This is because, while building there is no server listening for these requests." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For Server Components rendered on demand, fetching from Route Handlers is slower due to the extra HTTP round trip between the handler and the render process." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"A server side ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
				" request uses absolute URLs. This implies an HTTP round trip, to an external server. During development, your own development server acts as the external server. At build time there is no server, and at runtime, the server is available through your public facing domain."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Server Components cover most data-fetching needs. However, fetching data client side might be necessary for:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Data that depends on client-only Web APIs:",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Geo-location API" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Storage API" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Audio API" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "File API" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Frequently polled data" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For these, use community libraries like ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://swr.vercel.app/",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "swr" })
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://tanstack.com/query/latest/docs/framework/react/overview",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "react-query" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "server-actions",
			children: "Server Actions"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Server Actions let you run server-side code from the client. Their primary purpose is to mutate data from your frontend client." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Server Actions are queued. Using them for data fetching introduces sequential execution." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "export-mode",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "export" }), " mode"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "export" }),
			" mode outputs a static site without a runtime server. Features that require the Next.js runtime are ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/static-exports#unsupported-features",
				children: "not supported"
			}),
			", because this mode produces a static site, and no runtime server."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "export mode" }),
			", only ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }),
			" Route Handlers are supported, in combination with the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/route-segment-config#dynamic",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "dynamic" })
			}),
			" route segment config, set to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "'force-static'" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This can be used to generate static HTML, JSON, TXT, or other files." }),
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
			title: "app/hello-world/route.ts",
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
							children: " const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " dynamic"
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
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " 'force-static'"
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
							children: " GET"
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
							children: " new"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Response"
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
							children: "'Hello World'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", { status: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "200"
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
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "deployment-environment",
			children: "Deployment environment"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Some hosts deploy Route Handlers as lambda functions. This means:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Route Handlers cannot share data between requests." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The environment may not support writing to File System." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Long-running handlers may be terminated due to timeouts." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "WebSockets won’t work because the connection closes on timeout, or after the response is generated." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "api-reference",
			children: "API Reference"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Learn more about Route Handlers and Middleware" })
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
export { toc as a, structuredData as i, backend_for_frontend_exports as n, frontmatter as r, MDXContent as t };
