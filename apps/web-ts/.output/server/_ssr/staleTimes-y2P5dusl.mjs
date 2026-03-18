import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/staleTimes-y2P5dusl.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var staleTimes_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "staleTimes",
	"description": "Learn how to override the invalidation time of the Client Router Cache."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`staleTimes` is an experimental feature that enables caching of page segments in the client-side router cache."
		},
		{
			"heading": void 0,
			"content": "You can enable this experimental feature and provide custom revalidation times by setting the experimental `staleTimes` flag:"
		},
		{
			"heading": void 0,
			"content": "The `static` and `dynamic` properties correspond with the time period (in seconds) based on different types of link prefetching."
		},
		{
			"heading": void 0,
			"content": "The `dynamic` property is used when the page is neither statically generated nor fully prefetched (e.g. with `prefetch={true}`)."
		},
		{
			"heading": void 0,
			"content": "Default: 0 seconds (not cached)"
		},
		{
			"heading": void 0,
			"content": "The `static` property is used for statically generated pages, or when the `prefetch` prop on `Link` is set to `true`, or when calling `router.prefetch`."
		},
		{
			"heading": void 0,
			"content": "Default: 5 minutes"
		},
		{
			"heading": void 0,
			"content": "> **Good to know:**\n>\n> * Loading boundaries are considered reusable for the `static` period defined in this configuration.\n> * This doesn't affect partial rendering, &#x2A;*meaning shared layouts won't automatically be refetched on every navigation, only the page segment that changes.**\n> * This doesn't change back/forward caching behavior to prevent layout shift and to prevent losing the browser scroll position."
		},
		{
			"heading": void 0,
			"content": "You can learn more about the Client Router Cache here."
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
			"content": "`v15.0.0`"
		},
		{
			"heading": "version-history",
			"content": "The `dynamic` `staleTimes` default changed from 30s to 0s."
		},
		{
			"heading": "version-history",
			"content": "`v14.2.0`"
		},
		{
			"heading": "version-history",
			"content": "Experimental `staleTimes` introduced."
		}
	],
	"headings": [{
		"id": "version-history",
		"content": "Version History"
	}]
};
var toc = [{
	depth: 3,
	url: "#version-history",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Version History" })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "staleTimes" }),
			" is an experimental feature that enables caching of page segments in the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/deep-dive/caching#client-side-router-cache",
				children: "client-side router cache"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can enable this experimental feature and provide custom revalidation times by setting the experimental ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "staleTimes" }),
			" flag:"
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
			title: "next.config.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "/** "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "@type"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " {import('next').NextConfig}"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: " */"
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
							children: "const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " nextConfig"
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
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  experimental: {"
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
						children: "    staleTimes: {"
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
							children: "      dynamic: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "30"
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
							children: "      static: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "180"
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
						children: "    },"
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
						children: "  },"
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
				(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
				"\n",
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
							children: " nextConfig"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "static" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "dynamic" }),
			" properties correspond with the time period (in seconds) based on different types of ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/components/link#prefetch",
				children: "link prefetching"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "dynamic" }),
				" property is used when the page is neither statically generated nor fully prefetched (e.g. with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "prefetch={true}" }),
				").",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Default: 0 seconds (not cached)" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "static" }),
				" property is used for statically generated pages, or when the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "prefetch" }),
				" prop on ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Link" }),
				" is set to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "true" }),
				", or when calling ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/deep-dive/caching#routerprefetch",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "router.prefetch" })
				}),
				".",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Default: 5 minutes" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know:" }) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/api-reference/file-conventions/loading",
						children: "Loading boundaries"
					}),
					" are considered reusable for the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "static" }),
					" period defined in this configuration."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"This doesn't affect ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/getting-started/linking-and-navigating#client-side-transitions",
						children: "partial rendering"
					}),
					", ",
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "meaning shared layouts won't automatically be refetched on every navigation, only the page segment that changes." })
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"This doesn't change ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/deep-dive/caching#client-side-router-cache",
						children: "back/forward caching"
					}),
					" behavior to prevent layout shift and to prevent losing the browser scroll position."
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can learn more about the Client Router Cache ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/deep-dive/caching#client-side-router-cache",
				children: "here"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "version-history",
			children: "Version History"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Version" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Changes" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "v15.0.0" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "dynamic" }),
			" ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "staleTimes" }),
			" default changed from 30s to 0s."
		] })] }), (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "v14.2.0" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
			"Experimental ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "staleTimes" }),
			" introduced."
		] })] })] })] })
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
export { toc as a, structuredData as i, frontmatter as n, staleTimes_exports as r, MDXContent as t };
