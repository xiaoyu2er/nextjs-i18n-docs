import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/04-edge-and-nodejs-runtimes-Ci-K_feG.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _04_edge_and_nodejs_runtimes_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Edge and Node.js Runtimes",
	"description": "Learn about the switchable runtimes (Edge and Node.js) in Next.js."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "In the context of Next.js, runtime refers to the set of libraries, APIs, and general functionality available to your code during execution."
		},
		{
			"heading": void 0,
			"content": "On the server, there are two runtimes where parts of your application code can be rendered:"
		},
		{
			"heading": void 0,
			"content": "The **Node.js Runtime** (default) has access to all Node.js APIs and compatible packages from the ecosystem."
		},
		{
			"heading": void 0,
			"content": "The **Edge Runtime** is based on Web APIs."
		},
		{
			"heading": "runtime-differences",
			"content": "There are many considerations to make when choosing a runtime. This table shows the major differences at a glance. If you want a more in-depth analysis of the differences, check out the sections below."
		},
		{
			"heading": "runtime-differences",
			"content": "Node"
		},
		{
			"heading": "runtime-differences",
			"content": "Serverless"
		},
		{
			"heading": "runtime-differences",
			"content": "Edge"
		},
		{
			"heading": "runtime-differences",
			"content": "Cold Boot"
		},
		{
			"heading": "runtime-differences",
			"content": "/"
		},
		{
			"heading": "runtime-differences",
			"content": "Normal"
		},
		{
			"heading": "runtime-differences",
			"content": "Low"
		},
		{
			"heading": "runtime-differences",
			"content": "HTTP Streaming"
		},
		{
			"heading": "runtime-differences",
			"content": "Yes"
		},
		{
			"heading": "runtime-differences",
			"content": "Yes"
		},
		{
			"heading": "runtime-differences",
			"content": "Yes"
		},
		{
			"heading": "runtime-differences",
			"content": "IO"
		},
		{
			"heading": "runtime-differences",
			"content": "All"
		},
		{
			"heading": "runtime-differences",
			"content": "All"
		},
		{
			"heading": "runtime-differences",
			"content": "`fetch`"
		},
		{
			"heading": "runtime-differences",
			"content": "Scalability"
		},
		{
			"heading": "runtime-differences",
			"content": "/"
		},
		{
			"heading": "runtime-differences",
			"content": "High"
		},
		{
			"heading": "runtime-differences",
			"content": "Highest"
		},
		{
			"heading": "runtime-differences",
			"content": "Security"
		},
		{
			"heading": "runtime-differences",
			"content": "Normal"
		},
		{
			"heading": "runtime-differences",
			"content": "High"
		},
		{
			"heading": "runtime-differences",
			"content": "High"
		},
		{
			"heading": "runtime-differences",
			"content": "Latency"
		},
		{
			"heading": "runtime-differences",
			"content": "Normal"
		},
		{
			"heading": "runtime-differences",
			"content": "Low"
		},
		{
			"heading": "runtime-differences",
			"content": "Lowest"
		},
		{
			"heading": "runtime-differences",
			"content": "npm Packages"
		},
		{
			"heading": "runtime-differences",
			"content": "All"
		},
		{
			"heading": "runtime-differences",
			"content": "All"
		},
		{
			"heading": "runtime-differences",
			"content": "A smaller subset"
		},
		{
			"heading": "runtime-differences",
			"content": "Static Rendering"
		},
		{
			"heading": "runtime-differences",
			"content": "Yes"
		},
		{
			"heading": "runtime-differences",
			"content": "Yes"
		},
		{
			"heading": "runtime-differences",
			"content": "No"
		},
		{
			"heading": "runtime-differences",
			"content": "Dynamic Rendering"
		},
		{
			"heading": "runtime-differences",
			"content": "Yes"
		},
		{
			"heading": "runtime-differences",
			"content": "Yes"
		},
		{
			"heading": "runtime-differences",
			"content": "Yes"
		},
		{
			"heading": "runtime-differences",
			"content": "Data Revalidation w/ `fetch`"
		},
		{
			"heading": "runtime-differences",
			"content": "Yes"
		},
		{
			"heading": "runtime-differences",
			"content": "Yes"
		},
		{
			"heading": "runtime-differences",
			"content": "Yes"
		},
		{
			"heading": "edge-runtime",
			"content": "In Next.js, the lightweight Edge Runtime is a subset of available Node.js APIs."
		},
		{
			"heading": "edge-runtime",
			"content": "The Edge Runtime is ideal if you need to deliver dynamic, personalized content at low latency with small, simple functions. The Edge Runtime's speed comes from its minimal use of resources, but that can be limiting in many scenarios."
		},
		{
			"heading": "edge-runtime",
			"content": "For example, code executed in the Edge Runtime on Vercel cannot exceed between 1 MB and 4 MB, this limit includes imported packages, fonts and files, and will vary depending on your deployment infrastructure. In addition, the Edge Runtime does not support all Node.js APIs meaning some `npm` packages may not work. For example, \"Module not found: Can't resolve 'fs'\" or similar errors. We recommend using the Node.js runtime if you need to use these APIs or packages."
		},
		{
			"heading": "nodejs-runtime",
			"content": "Using the Node.js runtime gives you access to all Node.js APIs, and all npm packages that rely on them. However, it's not as fast to start up as routes using the Edge runtime."
		},
		{
			"heading": "nodejs-runtime",
			"content": "Deploying your Next.js application to a Node.js server will require managing, scaling, and configuring your infrastructure. Alternatively, you can consider deploying your Next.js application to a serverless platform like Vercel, which will handle this for you."
		},
		{
			"heading": "serverless-nodejs",
			"content": "Serverless is ideal if you need a scalable solution that can handle more complex computational loads than the Edge Runtime. With Serverless Functions on Vercel, for example, your overall code size is 50MB including imported packages, fonts, and files."
		},
		{
			"heading": "serverless-nodejs",
			"content": "The downside compared to routes using the Edge is that it can take hundreds of milliseconds for Serverless Functions to boot up before they begin processing requests. Depending on the amount of traffic your site receives, this could be a frequent occurrence as the functions are not frequently \"warm\"."
		},
		{
			"heading": "segment-runtime-option",
			"content": "You can specify a runtime for individual route segments in your Next.js application. To do so, declare a variable called `runtime` and export it. The variable must be a string, and must have a value of either `'nodejs'` or `'edge'` runtime."
		},
		{
			"heading": "segment-runtime-option",
			"content": "The following example demonstrates a page route segment that exports a `runtime` with a value of `'edge'`:"
		},
		{
			"heading": "segment-runtime-option",
			"content": "You can also define `runtime` on a layout level, which will make all routes under the layout run on the edge runtime:"
		},
		{
			"heading": "segment-runtime-option",
			"content": "If the segment runtime is *not* set, the default `nodejs` runtime will be used. You do not need to use the `runtime` option if you do not plan to change from the Node.js runtime."
		},
		{
			"heading": "segment-runtime-option",
			"content": "> Please refer to the Node.js Docs and Edge Docs for the full list of available APIs. Both runtimes can also support streaming depending on your deployment infrastructure."
		}
	],
	"headings": [
		{
			"id": "runtime-differences",
			"content": "Runtime Differences"
		},
		{
			"id": "edge-runtime",
			"content": "Edge Runtime"
		},
		{
			"id": "nodejs-runtime",
			"content": "Node.js Runtime"
		},
		{
			"id": "serverless-nodejs",
			"content": "Serverless Node.js"
		},
		{
			"id": "examples",
			"content": "Examples"
		},
		{
			"id": "segment-runtime-option",
			"content": "Segment Runtime Option"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#runtime-differences",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Runtime Differences" })
	},
	{
		depth: 3,
		url: "#edge-runtime",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Edge Runtime" })
	},
	{
		depth: 3,
		url: "#nodejs-runtime",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Node.js Runtime" })
	},
	{
		depth: 3,
		url: "#serverless-nodejs",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Serverless Node.js" })
	},
	{
		depth: 2,
		url: "#examples",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Examples" })
	},
	{
		depth: 3,
		url: "#segment-runtime-option",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Segment Runtime Option" })
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
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul",
		...props.components
	}, { AppOnly, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger } = _components;
	if (!AppOnly) _missingMdxReference("AppOnly", true);
	if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
	if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
	if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
	if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In the context of Next.js, runtime refers to the set of libraries, APIs, and general functionality available to your code during execution." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "On the server, there are two runtimes where parts of your application code can be rendered:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Node.js Runtime" }),
				" (default) has access to all Node.js APIs and compatible packages from the ecosystem."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Edge Runtime" }),
				" is based on ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/edge",
					children: "Web APIs"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "runtime-differences",
			children: "Runtime Differences"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "There are many considerations to make when choosing a runtime. This table shows the major differences at a glance. If you want a more in-depth analysis of the differences, check out the sections below." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, {}),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Node" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Serverless" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Edge" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Cold Boot" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "/" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Normal" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Low" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/routing/loading-ui-and-streaming",
					children: "HTTP Streaming"
				}) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Yes" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Yes" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Yes" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "IO" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "All" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "All" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }) })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Scalability" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "/" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "High" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Highest" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Security" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Normal" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "High" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "High" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Latency" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Normal" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Low" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Lowest" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "npm Packages" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "All" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "All" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "A smaller subset" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/rendering/server-components#static-rendering-default",
					children: "Static Rendering"
				}) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Yes" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Yes" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "No" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/rendering/server-components#dynamic-rendering",
					children: "Dynamic Rendering"
				}) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Yes" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Yes" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Yes" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data",
					children: ["Data Revalidation w/ ", (0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" })]
				}) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Yes" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Yes" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Yes" })
			] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "edge-runtime",
			children: "Edge Runtime"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In Next.js, the lightweight Edge Runtime is a subset of available Node.js APIs." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Edge Runtime is ideal if you need to deliver dynamic, personalized content at low latency with small, simple functions. The Edge Runtime's speed comes from its minimal use of resources, but that can be limiting in many scenarios." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, code executed in the Edge Runtime ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/docs/concepts/limits/overview#edge-middleware-and-edge-functions-size",
				children: "on Vercel cannot exceed between 1 MB and 4 MB"
			}),
			", this limit includes imported packages, fonts and files, and will vary depending on your deployment infrastructure. In addition, the Edge Runtime does not support all Node.js APIs meaning some ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "npm" }),
			" packages may not work. For example, \"Module not found: Can't resolve 'fs'\" or similar errors. We recommend using the Node.js runtime if you need to use these APIs or packages."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "nodejs-runtime",
			children: "Node.js Runtime"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Using the Node.js runtime gives you access to all Node.js APIs, and all npm packages that rely on them. However, it's not as fast to start up as routes using the Edge runtime." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Deploying your Next.js application to a Node.js server will require managing, scaling, and configuring your infrastructure. Alternatively, you can consider deploying your Next.js application to a serverless platform like Vercel, which will handle this for you." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "serverless-nodejs",
			children: "Serverless Node.js"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Serverless is ideal if you need a scalable solution that can handle more complex computational loads than the Edge Runtime. With Serverless Functions on Vercel, for example, your overall code size is ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/docs/concepts/limits/overview#serverless-function-size",
				children: "50MB"
			}),
			" including imported packages, fonts, and files."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The downside compared to routes using the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/docs/concepts/functions/edge-functions",
				children: "Edge"
			}),
			" is that it can take hundreds of milliseconds for Serverless Functions to boot up before they begin processing requests. Depending on the amount of traffic your site receives, this could be a frequent occurrence as the functions are not frequently \"warm\"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(AppOnly, { children: [
			(0, import_jsx_runtime.jsx)(_components.h2, {
				id: "examples",
				children: "Examples"
			}),
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "segment-runtime-option",
				children: "Segment Runtime Option"
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"You can specify a runtime for individual route segments in your Next.js application. To do so, ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/route-segment-config",
					children: [
						"declare a variable called ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "runtime" }),
						" and export it"
					]
				}),
				". The variable must be a string, and must have a value of either ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "'nodejs'" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "'edge'" }),
				" runtime."
			] }),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"The following example demonstrates a page route segment that exports a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "runtime" }),
				" with a value of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "'edge'" }),
				":"
			] }),
			(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
				defaultValue: "app/page.tsx",
				children: [
					(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "app/page.tsx",
						children: "app/page.tsx"
					}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "app/page.js",
						children: "app/page.js"
					})] }),
					(0, import_jsx_runtime.jsx)(CodeBlockTab, {
						value: "app/page.tsx",
						children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
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
										children: " const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " runtime"
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
										children: " 'edge'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6A737D",
											"--shiki-dark": "#6A737D"
										},
										children: " // 'nodejs' (default) | 'edge'"
									})
								]
							}) })
						}) })
					}),
					(0, import_jsx_runtime.jsx)(CodeBlockTab, {
						value: "app/page.js",
						children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
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
										children: " const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " runtime"
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
										children: " 'edge'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6A737D",
											"--shiki-dark": "#6A737D"
										},
										children: " // 'nodejs' (default) | 'edge'"
									})
								]
							}) })
						}) })
					})
				]
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"You can also define ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "runtime" }),
				" on a layout level, which will make all routes under the layout run on the edge runtime:"
			] }),
			(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
				defaultValue: "app/layout.tsx",
				children: [
					(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "app/layout.tsx",
						children: "app/layout.tsx"
					}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "app/layout.js",
						children: "app/layout.js"
					})] }),
					(0, import_jsx_runtime.jsx)(CodeBlockTab, {
						value: "app/layout.tsx",
						children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
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
										children: " const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " runtime"
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
										children: " 'edge'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6A737D",
											"--shiki-dark": "#6A737D"
										},
										children: " // 'nodejs' (default) | 'edge'"
									})
								]
							}) })
						}) })
					}),
					(0, import_jsx_runtime.jsx)(CodeBlockTab, {
						value: "app/layout.js",
						children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
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
										children: " const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " runtime"
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
										children: " 'edge'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6A737D",
											"--shiki-dark": "#6A737D"
										},
										children: " // 'nodejs' (default) | 'edge'"
									})
								]
							}) })
						}) })
					})
				]
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"If the segment runtime is ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "not" }),
				" set, the default ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "nodejs" }),
				" runtime will be used. You do not need to use the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "runtime" }),
				" option if you do not plan to change from the Node.js runtime."
			] })
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Please refer to the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nodejs.org/docs/latest/api/",
					children: "Node.js Docs"
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/edge",
					children: "Edge Docs"
				}),
				" for the full list of available APIs. Both runtimes can also support ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/routing/loading-ui-and-streaming",
					children: "streaming"
				}),
				" depending on your deployment infrastructure."
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
export { toc as a, structuredData as i, _04_edge_and_nodejs_runtimes_exports as n, frontmatter as r, MDXContent as t };
