import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/36-dynamic-routes-dynamic-routes-details-CncQSgTa.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _36_dynamic_routes_dynamic_routes_details_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Dynamic Routes Details",
	"image": "https://nextjs.org/api/learn-og?title=Dynamic%20Routes%20Details&amp;chapter=36",
	"headline": "Pages Router: Dynamic Routes Details"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Here is some essential information you should know about dynamic routes."
		},
		{
			"heading": "fetch-external-api-or-query-database",
			"content": "Like `getStaticProps`, `getStaticPaths` can fetch data from any data source. In our example, `getAllPostIds` (which is used by `getStaticPaths`) may fetch from an external API endpoint:"
		},
		{
			"heading": "development-vs-production",
			"content": "In **development** (`npm run dev` or `yarn dev`), `getStaticPaths` runs on *every request*."
		},
		{
			"heading": "development-vs-production",
			"content": "In **production**, `getStaticPaths` runs at *build time*."
		},
		{
			"heading": "fallback",
			"content": "Recall that we returned `fallback: false` from `getStaticPaths`. What does this mean?"
		},
		{
			"heading": "fallback",
			"content": "If `fallback` is `false`, then any paths not returned by `getStaticPaths` will result in a **404 page**."
		},
		{
			"heading": "fallback",
			"content": "If `fallback` is `true`, then the behavior of `getStaticProps` changes:"
		},
		{
			"heading": "fallback",
			"content": "The paths returned from `getStaticPaths` will be rendered to HTML at build time."
		},
		{
			"heading": "fallback",
			"content": "The paths that have not been generated at build time will **not** result in a 404 page. Instead, Next.js will serve a \"fallback\" version of the page on the first request to such a path."
		},
		{
			"heading": "fallback",
			"content": "In the background, Next.js will statically generate the requested path. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time."
		},
		{
			"heading": "fallback",
			"content": "If `fallback` is `blocking`, then new paths will be server-side rendered with `getStaticProps`, and cached for future requests so it only happens once per path."
		},
		{
			"heading": "fallback",
			"content": "This is beyond the scope of our lessons, but you can learn more about `fallback: true` and `fallback: 'blocking'` in the `fallback` documentation."
		},
		{
			"heading": "catch-all-routes",
			"content": "Dynamic routes can be extended to catch all paths by adding three dots (`...`) inside the brackets. For example:"
		},
		{
			"heading": "catch-all-routes",
			"content": "`pages/posts/[...id].js` matches `/posts/a`, but also `/posts/a/b`, `/posts/a/b/c` and so on."
		},
		{
			"heading": "catch-all-routes",
			"content": "If you do this, in `getStaticPaths`, you must return an array as the value of the `id` key like so:"
		},
		{
			"heading": "catch-all-routes",
			"content": "And `params.id` will be an array in `getStaticProps`:"
		},
		{
			"heading": "catch-all-routes",
			"content": "Take a look at the catch all routes documentation to learn more."
		},
		{
			"heading": "router",
			"content": "If you want to access the Next.js router, you can do so by importing the `useRouter` hook from `next/router`."
		},
		{
			"heading": "404-pages",
			"content": "To create a custom 404 page, create `pages/404.js`. This file is statically generated at build time."
		},
		{
			"heading": "404-pages",
			"content": "Take a look at our Error Pages documentation to learn more."
		},
		{
			"heading": "more-examples",
			"content": "We have created several examples to illustrate `getStaticProps` and `getStaticPaths` — take a look at their source code to learn more:"
		},
		{
			"heading": "more-examples",
			"content": "Blog Starter using markdown files (Demo)"
		},
		{
			"heading": "more-examples",
			"content": "WordPress Example (Demo)"
		},
		{
			"heading": "more-examples",
			"content": "DatoCMS Example (Demo)"
		},
		{
			"heading": "more-examples",
			"content": "TakeShape Example (Demo)"
		},
		{
			"heading": "more-examples",
			"content": "Sanity Example (Demo)"
		},
		{
			"heading": "thats-it",
			"content": "In the next lesson, we’ll talk about API Routes in Next.js."
		}
	],
	"headings": [
		{
			"id": "fetch-external-api-or-query-database",
			"content": "Fetch External API or Query Database"
		},
		{
			"id": "development-vs-production",
			"content": "Development vs. Production"
		},
		{
			"id": "fallback",
			"content": "Fallback"
		},
		{
			"id": "catch-all-routes",
			"content": "Catch-all Routes"
		},
		{
			"id": "router",
			"content": "Router"
		},
		{
			"id": "404-pages",
			"content": "404 Pages"
		},
		{
			"id": "more-examples",
			"content": "More Examples"
		},
		{
			"id": "thats-it",
			"content": "That’s it!"
		}
	]
};
var toc = [
	{
		depth: 3,
		url: "#fetch-external-api-or-query-database",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#fetch-external-api-or-query-database",
			children: "Fetch External API or Query Database"
		}) })
	},
	{
		depth: 3,
		url: "#development-vs-production",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#development-vs-production",
			children: "Development vs. Production"
		}) })
	},
	{
		depth: 3,
		url: "#fallback",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#fallback",
			children: "Fallback"
		}) })
	},
	{
		depth: 3,
		url: "#catch-all-routes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#catch-all-routes",
			children: "Catch-all Routes"
		}) })
	},
	{
		depth: 3,
		url: "#router",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#router",
			children: "Router"
		}) })
	},
	{
		depth: 3,
		url: "#404-pages",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#404-pages",
			children: "404 Pages"
		}) })
	},
	{
		depth: 3,
		url: "#more-examples",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#more-examples",
			children: "More Examples"
		}) })
	},
	{
		depth: 3,
		url: "#thats-it",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#thats-it",
			children: "That’s it!"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		em: "em",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Here is some essential information you should know about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/routing/dynamic-routes",
				children: "dynamic routes"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "fetch-external-api-or-query-database",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#fetch-external-api-or-query-database",
				children: "Fetch External API or Query Database"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Like ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticpaths-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
			}),
			" can fetch data from any data source. In our example, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getAllPostIds" }),
			" (which is used by ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticpaths-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
			}),
			") may fetch from an external API endpoint:"
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function getAllPostIds() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // Instead of the file system," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // fetch post data from an external API endpoint" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const res = await fetch('..');" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const posts = await res.json();" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return posts.map((post) => {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    return {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      params: {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        id: post.id," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      }," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    };" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  });" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "development-vs-production",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#development-vs-production",
				children: "Development vs. Production"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"In ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "development" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "npm run dev" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "yarn dev" }),
				"), ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/data-fetching#getstaticpaths-static-generation",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
				}),
				" runs on ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "every request" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"In ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "production" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/data-fetching#getstaticpaths-static-generation",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
				}),
				" runs at ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "build time" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "fallback",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#fallback",
				children: "Fallback"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Recall that we returned ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback: false" }),
			" from ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticpaths-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
			}),
			". What does this mean?"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/basic-features/data-fetching#fallback-false",
				children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback" }),
					" is ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "false" })
				]
			}),
			", then any paths not returned by ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticpaths-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
			}),
			" will result in a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "404 page" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/basic-features/data-fetching#fallback-true",
				children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback" }),
					" is ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "true" })
				]
			}),
			", then the behavior of ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			" changes:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The paths returned from ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/data-fetching#getstaticpaths-static-generation",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
				}),
				" will be rendered to HTML at build time."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The paths that have not been generated at build time will ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "not" }),
				" result in a 404 page. Instead, Next.js will serve a \"fallback\" version of the page on the first request to such a path."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "In the background, Next.js will statically generate the requested path. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/basic-features/data-fetching#fallback-blocking",
				children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback" }),
					" is ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "blocking" })
				]
			}),
			", then new paths will be server-side rendered with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			", and cached for future requests so it only happens once per path."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This is beyond the scope of our lessons, but you can learn more about ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback: true" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback: 'blocking'" }),
			" in the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/api-reference/data-fetching/get-static-paths#fallback-false",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback" }), " documentation"]
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "catch-all-routes",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#catch-all-routes",
				children: "Catch-all Routes"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Dynamic routes can be extended to catch all paths by adding three dots (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "..." }),
			") inside the brackets. For example:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/posts/[...id].js" }),
				" matches ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/posts/a" }),
				", but also ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/posts/a/b" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/posts/a/b/c" }),
				" and so on."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you do this, in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticpaths-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
			}),
			", you must return an array as the value of the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "id" }),
			" key like so:"
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "return [" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    params: {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      // Statically Generates /posts/a/b/c" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      id: ['a', 'b', 'c']," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    }," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  }," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  //..." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "];" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"And ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "params.id" }),
			" will be an array in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			":"
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function getStaticProps({ params }) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // params.id will be like ['a', 'b', 'c']" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Take a look at the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/routing/dynamic-routes#catch-all-routes",
				children: "catch all routes documentation"
			}),
			" to learn more."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "router",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#router",
				children: "Router"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you want to access the Next.js router, you can do so by importing the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-reference/next/router#userouter",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "useRouter" })
			}),
			" hook from ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-reference/next/router",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next/router" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "404-pages",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#404-pages",
				children: "404 Pages"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To create a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/advanced-features/custom-error-page#404-page",
				children: "custom 404 page"
			}),
			", create ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/404.js" }),
			". This file is statically generated at build time."
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// pages/404.js" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function Custom404() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return <h1>404 - Page Not Found</h1>;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Take a look at our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/advanced-features/custom-error-page",
				children: "Error Pages"
			}),
			" documentation to learn more."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "more-examples",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#more-examples",
				children: "More Examples"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We have created several examples to illustrate ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticpaths-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
			}),
			" — take a look at their source code to learn more:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples/blog-starter",
					children: "Blog Starter using markdown files"
				}),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://next-blog-starter.vercel.app/",
					children: "Demo"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress",
					children: "WordPress Example"
				}),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://next-blog-wordpress.vercel.app/",
					children: "Demo"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples/cms-datocms",
					children: "DatoCMS Example"
				}),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://next-blog-datocms.vercel.app/",
					children: "Demo"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples/cms-takeshape",
					children: "TakeShape Example"
				}),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://next-blog-takeshape.vercel.app/",
					children: "Demo"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples/cms-sanity",
					children: "Sanity Example"
				}),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://next-blog-sanity.vercel.app/",
					children: "Demo"
				}),
				")"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "thats-it",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#thats-it",
				children: "That’s it!"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In the next lesson, we’ll talk about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-routes/introduction",
				children: "API Routes"
			}),
			" in Next.js."
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
export { toc as a, structuredData as i, _36_dynamic_routes_dynamic_routes_details_exports as n, frontmatter as r, MDXContent as t };
