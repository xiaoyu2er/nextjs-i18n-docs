import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/03-multi-zones-DiNjMzLK.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _03_multi_zones_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Multi-Zones",
	"description": "Learn how to build micro-frontends using Next.js Multi-Zones to deploy multiple Next.js apps under a single domain."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "With Zones"
		},
		{
			"heading": void 0,
			"content": "Multi-Zones are an approach to micro-frontends that separate a large application on a domain into smaller Next.js applications that each serve a set of paths. This is useful when there are collections of pages unrelated to the other pages in the application. By moving those pages to a separate zone (i.e., a separate application), you can reduce the size of each application which improves build times and removes code that is only necessary for one of the zones."
		},
		{
			"heading": void 0,
			"content": "For example, let's say you have the following set of pages that you would like to split up:"
		},
		{
			"heading": void 0,
			"content": "`/blog/*` for all blog posts"
		},
		{
			"heading": void 0,
			"content": "`/dashboard/*` for all pages when the user is logged-in to the dashboard"
		},
		{
			"heading": void 0,
			"content": "`/*` for the rest of your website not covered by other zones"
		},
		{
			"heading": void 0,
			"content": "With Multi-Zones support, you can create three applications that all are served on the same domain and look the same to the user, but you can develop and deploy each of the applications independently."
		},
		{
			"heading": void 0,
			"content": "Navigating between pages in the same zone will perform soft navigations, a navigation that does not require reloading the page. For example, in this diagram, navigating from `/` to `/products` will be a soft navigation."
		},
		{
			"heading": void 0,
			"content": "Navigating from a page in one zone to a page in another zone, such as from `/` to `/dashboard`, will perform a hard navigation, unloading the resources of the current page and loading the resources of the new page. Pages that are frequently visited together should live in the same zone to avoid hard navigations."
		},
		{
			"heading": "how-to-define-a-zone",
			"content": "There are no special APIs to define a new zone. A zone is a normal Next.js application where you also configure a basePath to avoid conflicts with pages and static files in other zones."
		},
		{
			"heading": "how-to-define-a-zone",
			"content": "The default application that will handle all paths not sent to a more specific zone does not need a `basePath`."
		},
		{
			"heading": "how-to-define-a-zone",
			"content": "Next.js assets, such as JavaScript and CSS, will also be prefixed with `basePath` to make sure that they don't conflict with assets from other zones. These assets will be served under `/basePath/_next/...` for each of the zones."
		},
		{
			"heading": "how-to-define-a-zone",
			"content": "If the zone serves pages that don't share a common path prefix, such as `/home` and `/blog`, then you can also set `assetPrefix` to ensure that all Next.js assets are served under a unique path prefix for the zone without adding a path prefix to the rest of the routes in your application."
		},
		{
			"heading": "how-to-route-requests-to-the-right-zone",
			"content": "With the Multi Zones set-up, you need to route the paths to the correct zone since they are served by different applications. You can use any HTTP proxy to do this, but one of the Next.js applications can also be used to route requests for the entire domain."
		},
		{
			"heading": "how-to-route-requests-to-the-right-zone",
			"content": "To route to the correct zone using a Next.js application, you can use `rewrites`. For each path served by a different zone, you would add a rewrite rule to send that path to the domain of the other zone. For example:"
		},
		{
			"heading": "how-to-route-requests-to-the-right-zone",
			"content": "`destination` should be a URL that is served by the zone, including scheme and domain. This should point to the zone's production domain, but it can also be used to route requests to `localhost` in local development."
		},
		{
			"heading": "how-to-route-requests-to-the-right-zone",
			"content": "> **Good to know**: URL paths should be unique to a zone. For example, two zones trying to serve `/blog` would create a routing conflict."
		},
		{
			"heading": "linking-between-zones",
			"content": "Links to paths in a different zone should use an `a` tag instead of the Next.js `<Link>` component. This is because Next.js will try to prefetch and soft navigate to any relative path in `<Link>` component, which will not work across zones."
		},
		{
			"heading": "sharing-code",
			"content": "The Next.js applications that make up the different zones can live in any repository. However, it is often convenient to put these zones in a monorepo to more easily share code. For zones that live in different repositories, code can also be shared using public or private NPM packages."
		},
		{
			"heading": "sharing-code",
			"content": "Since the pages in different zones may be released at different times, feature flags can be useful for enabling or disabling features in unison across the different zones."
		},
		{
			"heading": "sharing-code",
			"content": "For Next.js on Vercel applications, you can use a monorepo to deploy all affected zones with a single `git push`."
		}
	],
	"headings": [
		{
			"id": "how-to-define-a-zone",
			"content": "How to define a zone"
		},
		{
			"id": "how-to-route-requests-to-the-right-zone",
			"content": "How to route requests to the right zone"
		},
		{
			"id": "linking-between-zones",
			"content": "Linking between zones"
		},
		{
			"id": "sharing-code",
			"content": "Sharing code"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#how-to-define-a-zone",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "How to define a zone" })
	},
	{
		depth: 2,
		url: "#how-to-route-requests-to-the-right-zone",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "How to route requests to the right zone" })
	},
	{
		depth: 2,
		url: "#linking-between-zones",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Linking between zones" })
	},
	{
		depth: 2,
		url: "#sharing-code",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Sharing code" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { Image } = _components;
	if (!Image) _missingMdxReference("Image", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		"\n",
		(0, import_jsx_runtime.jsxs)("details", {
			open: true,
			children: [(0, import_jsx_runtime.jsx)("summary", { children: "Examples" }), (0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples/with-zones",
					children: "With Zones"
				}) }),
				"\n"
			] })]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Multi-Zones are an approach to micro-frontends that separate a large application on a domain into smaller Next.js applications that each serve a set of paths. This is useful when there are collections of pages unrelated to the other pages in the application. By moving those pages to a separate zone (i.e., a separate application), you can reduce the size of each application which improves build times and removes code that is only necessary for one of the zones." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For example, let's say you have the following set of pages that you would like to split up:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "/blog/*" }), " for all blog posts"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "/dashboard/*" }), " for all pages when the user is logged-in to the dashboard"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "/*" }), " for the rest of your website not covered by other zones"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "With Multi-Zones support, you can create three applications that all are served on the same domain and look the same to the user, but you can develop and deploy each of the applications independently." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Three zones: A, B, C. Showing a hard navigation between routes from different zones, and soft navigations between routes within the same zone.",
			srcLight: "/docs/light/multi-zones.png",
			srcDark: "/docs/dark/multi-zones.png",
			width: "1600",
			height: "750"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Navigating between pages in the same zone will perform soft navigations, a navigation that does not require reloading the page. For example, in this diagram, navigating from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/products" }),
			" will be a soft navigation."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Navigating from a page in one zone to a page in another zone, such as from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/dashboard" }),
			", will perform a hard navigation, unloading the resources of the current page and loading the resources of the new page. Pages that are frequently visited together should live in the same zone to avoid hard navigations."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "how-to-define-a-zone",
			children: "How to define a zone"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"There are no special APIs to define a new zone. A zone is a normal Next.js application where you also configure a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/next-config-js/basePath",
				children: "basePath"
			}),
			" to avoid conflicts with pages and static files in other zones."
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  basePath: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/blog'"
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
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The default application that will handle all paths not sent to a more specific zone does not need a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "basePath" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js assets, such as JavaScript and CSS, will also be prefixed with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "basePath" }),
			" to make sure that they don't conflict with assets from other zones. These assets will be served under ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/basePath/_next/..." }),
			" for each of the zones."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If the zone serves pages that don't share a common path prefix, such as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/home" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/blog" }),
			", then you can also set ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/next-config-js/assetPrefix",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "assetPrefix" })
			}),
			" to ensure that all Next.js assets are served under a unique path prefix for the zone without adding a path prefix to the rest of the routes in your application."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "how-to-route-requests-to-the-right-zone",
			children: "How to route requests to the right zone"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "With the Multi Zones set-up, you need to route the paths to the correct zone since they are served by different applications. You can use any HTTP proxy to do this, but one of the Next.js applications can also be used to route requests for the entire domain." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To route to the correct zone using a Next.js application, you can use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/next-config-js/rewrites",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "rewrites" })
			}),
			". For each path served by a different zone, you would add a rewrite rule to send that path to the domain of the other zone. For example:"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "async "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "rewrites"
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
						children: "    return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ["
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
						children: "        {"
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
							children: "            source: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/blog'"
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
							children: "            destination: "
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
							children: "process"
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
							children: "env"
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "BLOG_DOMAIN"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "}/blog`"
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
						children: "        },"
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
						children: "        {"
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
							children: "            source: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/blog/:path+'"
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
							children: "            destination: "
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
							children: "process"
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
							children: "env"
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "BLOG_DOMAIN"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "}/blog/:path+`"
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
						children: "        }"
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
						children: "    ];"
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
			(0, import_jsx_runtime.jsx)(_components.code, { children: "destination" }),
			" should be a URL that is served by the zone, including scheme and domain. This should point to the zone's production domain, but it can also be used to route requests to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "localhost" }),
			" in local development."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }),
				": URL paths should be unique to a zone. For example, two zones trying to serve ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/blog" }),
				" would create a routing conflict."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "linking-between-zones",
			children: "Linking between zones"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Links to paths in a different zone should use an ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "a" }),
			" tag instead of the Next.js ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/components/link",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "<Link>" })
			}),
			" component. This is because Next.js will try to prefetch and soft navigate to any relative path in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<Link>" }),
			" component, which will not work across zones."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "sharing-code",
			children: "Sharing code"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The Next.js applications that make up the different zones can live in any repository. However, it is often convenient to put these zones in a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://en.wikipedia.org/wiki/Monorepo",
				children: "monorepo"
			}),
			" to more easily share code. For zones that live in different repositories, code can also be shared using public or private NPM packages."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Since the pages in different zones may be released at different times, feature flags can be useful for enabling or disabling features in unison across the different zones." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",
				children: "Next.js on Vercel"
			}),
			" applications, you can use a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/blog/monorepos-are-changing-how-teams-build-software?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",
				children: "monorepo"
			}),
			" to deploy all affected zones with a single ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "git push" }),
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
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { toc as a, structuredData as i, _03_multi_zones_exports as n, frontmatter as r, MDXContent as t };
