import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/turbopack-B8YfFMWF.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var turbopack_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Turbopack",
	"description": "Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Turbopack (beta) is an incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js."
		},
		{
			"heading": "usage",
			"content": "Turbopack can be used in Next.js in both the `pages` and `app` directories for faster local development. To enable Turbopack, use the `--turbo` flag when running the Next.js development server."
		},
		{
			"heading": "supported-features",
			"content": "Turbopack in Next.js requires zero-configuration for most users and can be extended for more advanced use cases. To learn more about the currently supported features for Turbopack, view the API Reference."
		},
		{
			"heading": "unsupported-features",
			"content": "Turbopack currently only supports `next dev` and does not support `next build`. We are currently working on support for builds as we move closer towards stability."
		},
		{
			"heading": "unsupported-features",
			"content": "These features are currently not supported:"
		},
		{
			"heading": "unsupported-features",
			"content": "`webpack()` configuration in `next.config.js`"
		},
		{
			"heading": "unsupported-features",
			"content": "Turbopack replaces Webpack, this means that webpack configuration is not supported."
		},
		{
			"heading": "unsupported-features",
			"content": "To configure Turbopack, see the documentation."
		},
		{
			"heading": "unsupported-features",
			"content": "A subset of Webpack loaders are supported in Turbopack."
		},
		{
			"heading": "unsupported-features",
			"content": "Babel (`.babelrc`)"
		},
		{
			"heading": "unsupported-features",
			"content": "Turbopack leverages the SWC compiler for all transpilation and optimizations. This means that Babel is not included by default."
		},
		{
			"heading": "unsupported-features",
			"content": "If you have a `.babelrc` file, you might no longer need it because Next.js includes common Babel plugins as SWC transforms that can be enabled. You can read more about this in the compiler documentation."
		},
		{
			"heading": "unsupported-features",
			"content": "If you still need to use Babel after verifying your particular use case is not covered, you can leverage Turbopack's support for custom webpack loaders to include `babel-loader`."
		},
		{
			"heading": "unsupported-features",
			"content": "Creating a root layout automatically in App Router."
		},
		{
			"heading": "unsupported-features",
			"content": "This behavior is currently not supported since it changes input files, instead, an error will be shown for you manually add a root layout in the desired location."
		},
		{
			"heading": "unsupported-features",
			"content": "`@next/font` (legacy font support)."
		},
		{
			"heading": "unsupported-features",
			"content": "`@next/font` is deprecated in favor of `next/font`. `next/font` is fully supported with Turbopack."
		},
		{
			"heading": "unsupported-features",
			"content": "`new Worker('file', import.meta.url)`."
		},
		{
			"heading": "unsupported-features",
			"content": "We are planning to implement this in the future."
		},
		{
			"heading": "unsupported-features",
			"content": "Relay transforms"
		},
		{
			"heading": "unsupported-features",
			"content": "We are planning to implement this in the future."
		},
		{
			"heading": "unsupported-features",
			"content": "`experimental.nextScriptWorkers`"
		},
		{
			"heading": "unsupported-features",
			"content": "We are planning to implement this in the future."
		},
		{
			"heading": "unsupported-features",
			"content": "AMP."
		},
		{
			"heading": "unsupported-features",
			"content": "We are currently not planning to support AMP in Next.js with Turbopack."
		},
		{
			"heading": "unsupported-features",
			"content": "Yarn PnP"
		},
		{
			"heading": "unsupported-features",
			"content": "We are currently not planning to support Yarn PnP in Next.js with Turbopack."
		},
		{
			"heading": "unsupported-features",
			"content": "`experimental.urlImports`"
		},
		{
			"heading": "unsupported-features",
			"content": "We are currently not planning to support `experimental.urlImports` in Next.js with Turbopack."
		},
		{
			"heading": "generating-trace-files",
			"content": "Trace files allow the Next.js team to investigate and improve performance metrics and memory usage. To generate a trace file, append `NEXT_TURBOPACK_TRACING=1` to the `next dev --turbo` command, this will generate a `.next/trace.log` file."
		},
		{
			"heading": "generating-trace-files",
			"content": "When reporting issues related to Turbopack performance and memory usage, please include the trace file in your GitHub issue."
		}
	],
	"headings": [
		{
			"id": "usage",
			"content": "Usage"
		},
		{
			"id": "supported-features",
			"content": "Supported features"
		},
		{
			"id": "unsupported-features",
			"content": "Unsupported features"
		},
		{
			"id": "generating-trace-files",
			"content": "Generating Trace Files"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#usage",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Usage" })
	},
	{
		depth: 2,
		url: "#supported-features",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Supported features" })
	},
	{
		depth: 2,
		url: "#unsupported-features",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Unsupported features" })
	},
	{
		depth: 2,
		url: "#generating-trace-files",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Generating Trace Files" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://turbo.build/pack",
			children: "Turbopack"
		}), " (beta) is an incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "usage",
			children: "Usage"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Turbopack can be used in Next.js in both the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" directories for faster local development. To enable Turbopack, use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--turbo" }),
			" flag when running the Next.js development server."
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
			title: "package.json",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "{"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "  \"scripts\""
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ": {"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line highlighted",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "    \"dev\""
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
							children: "\"next dev --turbo\""
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "    \"build\""
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
							children: "\"next build\""
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "    \"start\""
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
							children: "\"next start\""
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "    \"lint\""
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
							children: "\"next lint\""
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
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "supported-features",
			children: "Supported features"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Turbopack in Next.js requires zero-configuration for most users and can be extended for more advanced use cases. To learn more about the currently supported features for Turbopack, view the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/next-config-js/turbo",
				children: "API Reference"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "unsupported-features",
			children: "Unsupported features"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Turbopack currently only supports ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			" and does not support ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			". We are currently working on support for builds as we move closer towards stability."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "These features are currently not supported:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/next-config-js/webpack",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "webpack()" })
				}),
				" configuration in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Turbopack replaces Webpack, this means that webpack configuration is not supported." }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"To configure Turbopack, ",
						(0, import_jsx_runtime.jsx)(_components.a, {
							href: "/docs/app/api-reference/next-config-js/turbo",
							children: "see the documentation"
						}),
						"."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"A subset of ",
						(0, import_jsx_runtime.jsx)(_components.a, {
							href: "/docs/app/api-reference/next-config-js/turbo#webpack-loaders",
							children: "Webpack loaders"
						}),
						" are supported in Turbopack."
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Babel (",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".babelrc" }),
				")",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"Turbopack leverages the ",
						(0, import_jsx_runtime.jsx)(_components.a, {
							href: "/docs/architecture/nextjs-compiler#why-swc",
							children: "SWC"
						}),
						" compiler for all transpilation and optimizations. This means that Babel is not included by default."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"If you have a ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".babelrc" }),
						" file, you might no longer need it because Next.js includes common Babel plugins as SWC transforms that can be enabled. You can read more about this in the ",
						(0, import_jsx_runtime.jsx)(_components.a, {
							href: "docs/architecture/nextjs-compiler#supported-features",
							children: "compiler documentation"
						}),
						"."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"If you still need to use Babel after verifying your particular use case is not covered, you can leverage Turbopack's ",
						(0, import_jsx_runtime.jsx)(_components.a, {
							href: "/docs/app/api-reference/next-config-js/turbo#webpack-loaders",
							children: "support for custom webpack loaders"
						}),
						" to include ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "babel-loader" }),
						"."
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Creating a root layout automatically in App Router.",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "This behavior is currently not supported since it changes input files, instead, an error will be shown for you manually add a root layout in the desired location." }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "@next/font" }),
				" (legacy font support).",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "@next/font" }),
						" is deprecated in favor of ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "next/font" }),
						". ",
						(0, import_jsx_runtime.jsx)(_components.a, {
							href: "/docs/app/building-your-application/optimizing/fonts",
							children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next/font" })
						}),
						" is fully supported with Turbopack."
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "new Worker('file', import.meta.url)" }),
				".",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "We are planning to implement this in the future." }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/architecture/nextjs-compiler#relay",
					children: "Relay transforms"
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "We are planning to implement this in the future." }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.nextScriptWorkers" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "We are planning to implement this in the future." }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/configuring/amp",
					children: "AMP"
				}),
				".",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "We are currently not planning to support AMP in Next.js with Turbopack." }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Yarn PnP",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "We are currently not planning to support Yarn PnP in Next.js with Turbopack." }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/next-config-js/urlImports",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.urlImports" })
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"We are currently not planning to support ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.urlImports" }),
						" in Next.js with Turbopack."
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "generating-trace-files",
			children: "Generating Trace Files"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Trace files allow the Next.js team to investigate and improve performance metrics and memory usage. To generate a trace file, append ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NEXT_TURBOPACK_TRACING=1" }),
			" to the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev --turbo" }),
			" command, this will generate a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".next/trace.log" }),
			" file."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When reporting issues related to Turbopack performance and memory usage, please include the trace file in your ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js",
				children: "GitHub"
			}),
			" issue."
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
//#endregion
export { turbopack_exports as a, toc as i, frontmatter as n, structuredData as r, MDXContent as t };
