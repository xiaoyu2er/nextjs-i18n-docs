import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/incrementalCacheHandlerPath-cs3Hn-P8.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var incrementalCacheHandlerPath_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Custom Next.js Cache Handler",
	"description": "Configure the Next.js cache used for storing and revalidating data to use any external service like Redis, Memcached, or others.",
	"nav_title": "cacheHandler"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "You can configure the Next.js cache location if you want to persist cached pages and data to durable storage, or share the cache across multiple containers or instances of your Next.js application."
		},
		{
			"heading": void 0,
			"content": "View an example of a custom cache handler and learn more about the implementation."
		},
		{
			"heading": "api-reference",
			"content": "The cache handler can implement the following methods: `get`, `set`, `revalidateTag`, and `resetRequestCache`."
		},
		{
			"heading": "get",
			"content": "Parameter"
		},
		{
			"heading": "get",
			"content": "Type"
		},
		{
			"heading": "get",
			"content": "Description"
		},
		{
			"heading": "get",
			"content": "`key`"
		},
		{
			"heading": "get",
			"content": "`string`"
		},
		{
			"heading": "get",
			"content": "The key to the cached value."
		},
		{
			"heading": "get",
			"content": "Returns the cached value or `null` if not found."
		},
		{
			"heading": "set",
			"content": "Parameter"
		},
		{
			"heading": "set",
			"content": "Type"
		},
		{
			"heading": "set",
			"content": "Description"
		},
		{
			"heading": "set",
			"content": "`key`"
		},
		{
			"heading": "set",
			"content": "`string`"
		},
		{
			"heading": "set",
			"content": "The key to store the data under."
		},
		{
			"heading": "set",
			"content": "`data`"
		},
		{
			"heading": "set",
			"content": "Data or `null`"
		},
		{
			"heading": "set",
			"content": "The data to be cached."
		},
		{
			"heading": "set",
			"content": "`ctx`"
		},
		{
			"heading": "set",
			"content": "`{ tags: [] }`"
		},
		{
			"heading": "set",
			"content": "The cache tags provided."
		},
		{
			"heading": "set",
			"content": "Returns `Promise<void>`."
		},
		{
			"heading": "revalidatetag",
			"content": "Parameter"
		},
		{
			"heading": "revalidatetag",
			"content": "Type"
		},
		{
			"heading": "revalidatetag",
			"content": "Description"
		},
		{
			"heading": "revalidatetag",
			"content": "`tag`"
		},
		{
			"heading": "revalidatetag",
			"content": "`string` or `string[]`"
		},
		{
			"heading": "revalidatetag",
			"content": "The cache tags to revalidate."
		},
		{
			"heading": "revalidatetag",
			"content": "Returns `Promise<void>`. Learn more about revalidating data or the `revalidateTag()` function."
		},
		{
			"heading": "resetrequestcache",
			"content": "This method resets the temporary in-memory cache for a single request before the next request."
		},
		{
			"heading": "resetrequestcache",
			"content": "Returns `void`."
		},
		{
			"heading": "resetrequestcache",
			"content": "**Good to know:**"
		},
		{
			"heading": "resetrequestcache",
			"content": "`revalidatePath` is a convenience layer on top of cache tags. Calling `revalidatePath` will call your `revalidateTag` function, which you can then choose if you want to tag cache keys based on the path."
		},
		{
			"heading": "platform-support",
			"content": "Deployment Option"
		},
		{
			"heading": "platform-support",
			"content": "Supported"
		},
		{
			"heading": "platform-support",
			"content": "Node.js server"
		},
		{
			"heading": "platform-support",
			"content": "Yes"
		},
		{
			"heading": "platform-support",
			"content": "Docker container"
		},
		{
			"heading": "platform-support",
			"content": "Yes"
		},
		{
			"heading": "platform-support",
			"content": "Static export"
		},
		{
			"heading": "platform-support",
			"content": "No"
		},
		{
			"heading": "platform-support",
			"content": "Adapters"
		},
		{
			"heading": "platform-support",
			"content": "Platform-specific"
		},
		{
			"heading": "platform-support",
			"content": "Learn how to configure ISR when self-hosting Next.js."
		},
		{
			"heading": "version-history",
			"content": "Version"
		},
		{
			"heading": "version-history",
			"content": "Changes"
		},
		{
			"heading": "version-history",
			"content": "`v14.1.0`"
		},
		{
			"heading": "version-history",
			"content": "Renamed to `cacheHandler` and became stable."
		},
		{
			"heading": "version-history",
			"content": "`v13.4.0`"
		},
		{
			"heading": "version-history",
			"content": "`incrementalCacheHandlerPath` support for `revalidateTag`."
		},
		{
			"heading": "version-history",
			"content": "`v13.4.0`"
		},
		{
			"heading": "version-history",
			"content": "`incrementalCacheHandlerPath` support for standalone output."
		},
		{
			"heading": "version-history",
			"content": "`v12.2.0`"
		},
		{
			"heading": "version-history",
			"content": "Experimental `incrementalCacheHandlerPath` added."
		}
	],
	"headings": [
		{
			"id": "api-reference",
			"content": "API Reference"
		},
		{
			"id": "get",
			"content": "`get()`"
		},
		{
			"id": "set",
			"content": "`set()`"
		},
		{
			"id": "revalidatetag",
			"content": "`revalidateTag()`"
		},
		{
			"id": "resetrequestcache",
			"content": "`resetRequestCache()`"
		},
		{
			"id": "platform-support",
			"content": "Platform Support"
		},
		{
			"id": "version-history",
			"content": "Version History"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#api-reference",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "API Reference" })
	},
	{
		depth: 3,
		url: "#get",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("code", { children: "get()" }) })
	},
	{
		depth: 3,
		url: "#set",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("code", { children: "set()" }) })
	},
	{
		depth: 3,
		url: "#revalidatetag",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("code", { children: "revalidateTag()" }) })
	},
	{
		depth: 3,
		url: "#resetrequestcache",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("code", { children: "resetRequestCache()" }) })
	},
	{
		depth: 2,
		url: "#platform-support",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Platform Support" })
	},
	{
		depth: 2,
		url: "#version-history",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Version History" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
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
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can configure the Next.js cache location if you want to persist cached pages and data to durable storage, or share the cache across multiple containers or instances of your Next.js application." }),
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
			title: "next.config.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "module"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "exports"
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
							children: "  cacheHandler: require."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "resolve"
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
							children: "'./cache-handler.js'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "),"
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
							children: "  cacheMaxMemorySize: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "0"
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
							children: "// disable default in-memory caching"
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
			"View an example of a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/self-hosting#configuring-caching",
				children: "custom cache handler"
			}),
			" and learn more about the implementation."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "api-reference",
			children: "API Reference"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The cache handler can implement the following methods: ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "get" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "set" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "revalidateTag" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "resetRequestCache" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "get",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: "get()" })
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Parameter" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Type" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })
		] }) }), (0, import_jsx_runtime.jsx)(_components.tbody, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "key" }) }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "string" }) }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: "The key to the cached value." })
		] }) })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Returns the cached value or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "null" }),
			" if not found."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "set",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: "set()" })
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Parameter" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Type" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "key" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "string" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "The key to store the data under." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "data" }) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: ["Data or ", (0, import_jsx_runtime.jsx)(_components.code, { children: "null" })] }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "The data to be cached." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "ctx" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "{ tags: [] }" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "The cache tags provided." })
			] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Returns ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Promise<void>" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "revalidatetag",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: "revalidateTag()" })
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Parameter" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Type" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })
		] }) }), (0, import_jsx_runtime.jsx)(_components.tbody, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "tag" }) }),
			(0, import_jsx_runtime.jsxs)(_components.td, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "string" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "string[]" })
			] }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: "The cache tags to revalidate." })
		] }) })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Returns ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Promise<void>" }),
			". Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/incremental-static-regeneration",
				children: "revalidating data"
			}),
			" or the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/revalidateTag",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "revalidateTag()" })
			}),
			" function."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "resetrequestcache",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: "resetRequestCache()" })
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This method resets the temporary in-memory cache for a single request before the next request." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Returns ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "void" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know:" }) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "revalidatePath" }),
				" is a convenience layer on top of cache tags. Calling ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "revalidatePath" }),
				" will call your ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "revalidateTag" }),
				" function, which you can then choose if you want to tag cache keys based on the path."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "platform-support",
			children: "Platform Support"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Deployment Option" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Supported" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/getting-started/deploying#nodejs-server",
				children: "Node.js server"
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Yes" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/getting-started/deploying#docker",
				children: "Docker container"
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Yes" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/getting-started/deploying#static-export",
				children: "Static export"
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "No" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/getting-started/deploying#adapters",
				children: "Adapters"
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Platform-specific" })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn how to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/self-hosting#caching-and-isr",
				children: "configure ISR"
			}),
			" when self-hosting Next.js."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "version-history",
			children: "Version History"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Version" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Changes" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "v14.1.0" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
				"Renamed to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "cacheHandler" }),
				" and became stable."
			] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "v13.4.0" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "incrementalCacheHandlerPath" }),
				" support for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "revalidateTag" }),
				"."
			] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "v13.4.0" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "incrementalCacheHandlerPath" }), " support for standalone output."] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "v12.2.0" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
				"Experimental ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "incrementalCacheHandlerPath" }),
				" added."
			] })] })
		] })] })
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
export { toc as a, structuredData as i, frontmatter as n, incrementalCacheHandlerPath_exports as r, MDXContent as t };
