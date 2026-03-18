import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/exportPathMap-CmtKF3Wk.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var exportPathMap_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "exportPathMap",
	"description": "Customize the pages that will be exported as HTML files when using `next export`."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "> This feature is exclusive to `next export` and currently **deprecated** in favor of `getStaticPaths` with `pages` or `generateStaticParams` with `app`."
		},
		{
			"heading": void 0,
			"content": "`exportPathMap` allows you to specify a mapping of request paths to page destinations, to be used during export. Paths defined in `exportPathMap` will also be available when using `next dev`."
		},
		{
			"heading": void 0,
			"content": "Let's start with an example, to create a custom `exportPathMap` for an app with the following pages:"
		},
		{
			"heading": void 0,
			"content": "`pages/index.js`"
		},
		{
			"heading": void 0,
			"content": "`pages/about.js`"
		},
		{
			"heading": void 0,
			"content": "`pages/post.js`"
		},
		{
			"heading": void 0,
			"content": "Open `next.config.js` and add the following `exportPathMap` config:"
		},
		{
			"heading": void 0,
			"content": "> **Good to know**: the `query` field in `exportPathMap` cannot be used with automatically statically optimized pages or `getStaticProps` pages as they are rendered to HTML files at build-time and additional query information cannot be provided during `next export`."
		},
		{
			"heading": void 0,
			"content": "The pages will then be exported as HTML files, for example, `/about` will become `/about.html`."
		},
		{
			"heading": void 0,
			"content": "`exportPathMap` is an `async` function that receives 2 arguments: the first one is `defaultPathMap`, which is the default map used by Next.js. The second argument is an object with:"
		},
		{
			"heading": void 0,
			"content": "`dev` - `true` when `exportPathMap` is being called in development. `false` when running `next export`. In development `exportPathMap` is used to define routes."
		},
		{
			"heading": void 0,
			"content": "`dir` - Absolute path to the project directory"
		},
		{
			"heading": void 0,
			"content": "`outDir` - Absolute path to the `out/` directory (configurable with `-o`). When `dev` is `true` the value of `outDir` will be `null`."
		},
		{
			"heading": void 0,
			"content": "`distDir` - Absolute path to the `.next/` directory (configurable with the `distDir` config)"
		},
		{
			"heading": void 0,
			"content": "`buildId` - The generated build id"
		},
		{
			"heading": void 0,
			"content": "The returned object is a map of pages where the `key` is the `pathname` and the `value` is an object that accepts the following fields:"
		},
		{
			"heading": void 0,
			"content": "`page`: `String` - the page inside the `pages` directory to render"
		},
		{
			"heading": void 0,
			"content": "`query`: `Object` - the `query` object passed to `getInitialProps` when prerendering. Defaults to `{}`"
		},
		{
			"heading": void 0,
			"content": "> The exported `pathname` can also be a filename (for example, `/readme.md`), but you may need to set the `Content-Type` header to `text/html` when serving its content if it is different than `.html`."
		},
		{
			"heading": "adding-a-trailing-slash",
			"content": "It is possible to configure Next.js to export pages as `index.html` files and require trailing slashes, `/about` becomes `/about/index.html` and is routable via `/about/`. This was the default behavior prior to Next.js 9."
		},
		{
			"heading": "adding-a-trailing-slash",
			"content": "To switch back and add a trailing slash, open `next.config.js` and enable the `trailingSlash` config:"
		},
		{
			"heading": "customizing-the-output-directory",
			"content": "`next export` will use `out` as the default output directory, you can customize this using the `-o` argument, like so:"
		},
		{
			"heading": "customizing-the-output-directory",
			"content": "`next export` will use `out` as the default output directory, you can customize this using the `-o` argument, like so:"
		},
		{
			"heading": "customizing-the-output-directory",
			"content": "> **Warning**: Using `exportPathMap` is deprecated and is overridden by `getStaticPaths` inside `pages`. We don't recommend using them together."
		}
	],
	"headings": [{
		"id": "adding-a-trailing-slash",
		"content": "Adding a trailing slash"
	}, {
		"id": "customizing-the-output-directory",
		"content": "Customizing the output directory"
	}]
};
var toc = [{
	depth: 2,
	url: "#adding-a-trailing-slash",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Adding a trailing slash" })
}, {
	depth: 2,
	url: "#customizing-the-output-directory",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Customizing the output directory" })
}];
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
	}, { AppOnly, PagesOnly } = _components;
	if (!AppOnly) _missingMdxReference("AppOnly", true);
	if (!PagesOnly) _missingMdxReference("PagesOnly", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"This feature is exclusive to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next export" }),
				" and currently ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "deprecated" }),
				" in favor of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" }),
				" with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "generateStaticParams" }),
				" with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "exportPathMap" }),
			" allows you to specify a mapping of request paths to page destinations, to be used during export. Paths defined in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "exportPathMap" }),
			" will also be available when using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/cli/next#next-dev-options",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Let's start with an example, to create a custom ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "exportPathMap" }),
			" for an app with the following pages:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "pages/index.js" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "pages/about.js" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "pages/post.js" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Open ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			" and add the following ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "exportPathMap" }),
			" config:"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "  exportPathMap"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "async"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " ("
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#E36209",
							"--shiki-dark": "#FFAB70"
						},
						children: "    defaultPathMap"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ","
					})]
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
							children: "    { "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "dev"
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
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "dir"
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
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "outDir"
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
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "distDir"
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
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "buildId"
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
						children: "  ) {"
					})
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
						children: " {"
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
							children: "      '/'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": { page: "
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
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "      '/about'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": { page: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/about'"
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
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "      '/p/hello-nextjs'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": { page: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/post'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", query: { title: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'hello-nextjs'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " } },"
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
							children: "      '/p/learn-nextjs'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": { page: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/post'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", query: { title: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'learn-nextjs'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " } },"
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
							children: "      '/p/deploy-nextjs'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": { page: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/post'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", query: { title: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'deploy-nextjs'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " } },"
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
						children: "    }"
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
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }),
				": the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "query" }),
				" field in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "exportPathMap" }),
				" cannot be used with ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/rendering/automatic-static-optimization",
					children: "automatically statically optimized pages"
				}),
				" or ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/pages/building-your-application/data-fetching/get-static-props",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }), " pages"]
				}),
				" as they are rendered to HTML files at build-time and additional query information cannot be provided during ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next export" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The pages will then be exported as HTML files, for example, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/about" }),
			" will become ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/about.html" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "exportPathMap" }),
			" is an ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "async" }),
			" function that receives 2 arguments: the first one is ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "defaultPathMap" }),
			", which is the default map used by Next.js. The second argument is an object with:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "dev" }),
				" - ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "true" }),
				" when ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "exportPathMap" }),
				" is being called in development. ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "false" }),
				" when running ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next export" }),
				". In development ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "exportPathMap" }),
				" is used to define routes."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "dir" }), " - Absolute path to the project directory"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "outDir" }),
				" - Absolute path to the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "out/" }),
				" directory (",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "#customizing-the-output-directory",
					children: ["configurable with ", (0, import_jsx_runtime.jsx)(_components.code, { children: "-o" })]
				}),
				"). When ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "dev" }),
				" is ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "true" }),
				" the value of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "outDir" }),
				" will be ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "null" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "distDir" }),
				" - Absolute path to the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".next/" }),
				" directory (configurable with the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/api-reference/config/next-config-js/distDir",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "distDir" })
				}),
				" config)"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "buildId" }), " - The generated build id"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The returned object is a map of pages where the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "key" }),
			" is the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pathname" }),
			" and the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value" }),
			" is an object that accepts the following fields:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "page" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "String" }),
				" - the page inside the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
				" directory to render"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "query" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Object" }),
				" - the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "query" }),
				" object passed to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "getInitialProps" }),
				" when prerendering. Defaults to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "{}" })
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"The exported ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pathname" }),
				" can also be a filename (for example, ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/readme.md" }),
				"), but you may need to set the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Content-Type" }),
				" header to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "text/html" }),
				" when serving its content if it is different than ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".html" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "adding-a-trailing-slash",
			children: "Adding a trailing slash"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"It is possible to configure Next.js to export pages as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "index.html" }),
			" files and require trailing slashes, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/about" }),
			" becomes ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/about/index.html" }),
			" and is routable via ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/about/" }),
			". This was the default behavior prior to Next.js 9."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To switch back and add a trailing slash, open ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			" and enable the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "trailingSlash" }),
			" config:"
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
							children: "  trailingSlash: "
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
			id: "customizing-the-output-directory",
			children: "Customizing the output directory"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(AppOnly, { children: (0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/static-exports",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next export" })
			}),
			" will use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "out" }),
			" as the default output directory, you can customize this using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "-o" }),
			" argument, like so:"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(PagesOnly, { children: (0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/guides/static-exports",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next export" })
			}),
			" will use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "out" }),
			" as the default output directory, you can customize this using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "-o" }),
			" argument, like so:"
		] }) }),
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
						children: "next"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " export"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " -o"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " outdir"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Warning" }),
				": Using ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "exportPathMap" }),
				" is deprecated and is overridden by ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" }),
				" inside ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
				". We don't recommend using them together."
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
export { toc as a, structuredData as i, exportPathMap_exports as n, frontmatter as r, MDXContent as t };
