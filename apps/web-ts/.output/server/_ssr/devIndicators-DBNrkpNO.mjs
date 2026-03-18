import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/devIndicators-DBNrkpNO.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var devIndicators_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "devIndicators",
	"description": "Configuration options for the on-screen indicator that gives context about the current route you're viewing during development."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`devIndicators` allows you to configure the on-screen indicator that gives context about the current route you're viewing during development."
		},
		{
			"heading": void 0,
			"content": "Setting `devIndicators` to `false` will hide the indicator, however Next.js will continue to surface any build or runtime errors that were encountered."
		},
		{
			"heading": "indicator-not-marking-a-route-as-static",
			"content": "If you expect a route to be static and the indicator has marked it as dynamic, it's likely the route has opted out of static rendering."
		},
		{
			"heading": "indicator-not-marking-a-route-as-static",
			"content": "You can confirm if a route is static or dynamic by building your application using `next build --debug`, and checking the output in your terminal. Static (or prerendered) routes will display a `○` symbol, whereas dynamic routes will display a `ƒ` symbol. For example:"
		},
		{
			"heading": "indicator-not-marking-a-route-as-static",
			"content": "There are two reasons a route might opt out of static rendering:"
		},
		{
			"heading": "indicator-not-marking-a-route-as-static",
			"content": "The presence of Dynamic APIs which rely on runtime information."
		},
		{
			"heading": "indicator-not-marking-a-route-as-static",
			"content": "An uncached data request, like a call to an ORM or database driver."
		},
		{
			"heading": "indicator-not-marking-a-route-as-static",
			"content": "Check your route for any of these conditions, and if you are not able to statically render the route, then consider using `loading.js` or `<Suspense />` to leverage streaming."
		},
		{
			"heading": "indicator-not-marking-a-route-as-static",
			"content": "When exporting `getServerSideProps` or `getInitialProps` from a page, it will be marked as dynamic."
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
			"content": "`v15.2.0`"
		},
		{
			"heading": "version-history",
			"content": "Improved on-screen indicator with new `position` option. `appIsrStatus`, `buildActivity`, and `buildActivityPosition` options have been deprecated."
		},
		{
			"heading": "version-history",
			"content": "`v15.0.0`"
		},
		{
			"heading": "version-history",
			"content": "Static on-screen indicator added with `appIsrStatus` option."
		}
	],
	"headings": [
		{
			"id": "troubleshooting",
			"content": "Troubleshooting"
		},
		{
			"id": "indicator-not-marking-a-route-as-static",
			"content": "Indicator not marking a route as static"
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
		url: "#troubleshooting",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Troubleshooting" })
	},
	{
		depth: 3,
		url: "#indicator-not-marking-a-route-as-static",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Indicator not marking a route as static" })
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
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul",
		...props.components
	}, { AppOnly, PagesOnly } = _components;
	if (!AppOnly) _missingMdxReference("AppOnly", true);
	if (!PagesOnly) _missingMdxReference("PagesOnly", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "devIndicators" }), " allows you to configure the on-screen indicator that gives context about the current route you're viewing during development."] }),
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
			title: "Types",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "  devIndicators"
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "false"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " |"
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
							children: "    position"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "?:"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " 'bottom-right'"
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
						children: "    |"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " 'bottom-left'"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "    |"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " 'top-right'"
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
							children: "    |"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " 'top-left'"
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
							children: "// defaults to 'bottom-left',"
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
						children: "  },"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Setting ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "devIndicators" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "false" }),
			" will hide the indicator, however Next.js will continue to surface any build or runtime errors that were encountered."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "troubleshooting",
			children: "Troubleshooting"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "indicator-not-marking-a-route-as-static",
			children: "Indicator not marking a route as static"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If you expect a route to be static and the indicator has marked it as dynamic, it's likely the route has opted out of static rendering." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can confirm if a route is ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/getting-started/partial-prerendering#static-rendering",
				children: "static"
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/getting-started/partial-prerendering#dynamic-rendering",
				children: "dynamic"
			}),
			" by building your application using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build --debug" }),
			", and checking the output in your terminal. Static (or prerendered) routes will display a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "○" }),
			" symbol, whereas dynamic routes will display a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ƒ" }),
			" symbol. For example:"
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
			title: "Build Output",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "Route"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " (app)                              Size     First Load JS"
					})]
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
							children: "┌"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " ○"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " /_not-found"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "                          0"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " B"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "               0"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " kB"
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
							children: "└"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " ƒ"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " /products/[id]"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "                       0"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " B"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "               0"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " kB"
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
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "○"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  (Static)   prerendered as static content"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "ƒ"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  (Dynamic)  server-rendered on demand"
					})]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(AppOnly, { children: [
			(0, import_jsx_runtime.jsx)(_components.p, { children: "There are two reasons a route might opt out of static rendering:" }),
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"The presence of ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/getting-started/partial-prerendering#dynamic-rendering",
						children: "Dynamic APIs"
					}),
					" which rely on runtime information."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"An ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/getting-started/fetching-data",
						children: "uncached data request"
					}),
					", like a call to an ORM or database driver."
				] }),
				"\n"
			] }),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Check your route for any of these conditions, and if you are not able to statically render the route, then consider using ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/loading",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "loading.js" })
				}),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://react.dev/reference/react/Suspense",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "<Suspense />" })
				}),
				" to leverage ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/getting-started/linking-and-navigating#streaming",
					children: "streaming"
				}),
				"."
			] })
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(PagesOnly, { children: (0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When exporting ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/data-fetching/get-server-side-props",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" })
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/functions/get-initial-props",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getInitialProps" })
			}),
			" from a page, it will be marked as dynamic."
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "version-history",
			children: "Version History"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Version" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Changes" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "v15.2.0" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
			"Improved on-screen indicator with new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "position" }),
			" option. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "appIsrStatus" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "buildActivity" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "buildActivityPosition" }),
			" options have been deprecated."
		] })] }), (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "v15.0.0" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
			"Static on-screen indicator added with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "appIsrStatus" }),
			" option."
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
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { toc as a, structuredData as i, devIndicators_exports as n, frontmatter as r, MDXContent as t };
