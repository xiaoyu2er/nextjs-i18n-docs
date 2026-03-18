import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/26-data-fetching-getstaticprops-details-DuhDlxyF.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _26_data_fetching_getstaticprops_details_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "getStaticProps Details",
	"image": "https://nextjs.org/api/learn-og?title=getStaticProps%20Details&amp;chapter=26",
	"headline": "Pages Router: getStaticProps Details"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Here is some essential information you should know about `getStaticProps`."
		},
		{
			"heading": "fetch-external-api-or-query-database",
			"content": "In `lib/posts.js`, we’ve implemented `getSortedPostsData` which fetches data from the file system. But you can fetch the data from other sources, like an external API endpoint, and it’ll work just fine:"
		},
		{
			"heading": "fetch-external-api-or-query-database",
			"content": "> **Note**: Next.js polyfills `fetch()` on both the client and server. You don't need to import it."
		},
		{
			"heading": "fetch-external-api-or-query-database",
			"content": "You can also query the database directly:"
		},
		{
			"heading": "fetch-external-api-or-query-database",
			"content": "This is possible because `getStaticProps` only **runs on the server-side**. It will never run on the client-side. It won’t even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers."
		},
		{
			"heading": "development-vs-production",
			"content": "In **development** (`npm run dev` or `yarn dev`), `getStaticProps` runs on *every request*."
		},
		{
			"heading": "development-vs-production",
			"content": "In **production**, `getStaticProps` runs at *build time*. However, this behavior can be enhanced using the `fallback` key returned by `getStaticPaths`"
		},
		{
			"heading": "development-vs-production",
			"content": "Because it’s meant to be run at build time, you won’t be able to use data that’s only available during request time, such as query parameters or HTTP headers."
		},
		{
			"heading": "only-allowed-in-a-page",
			"content": "`getStaticProps` can only be exported from a **page**. You can’t export it from non-page files."
		},
		{
			"heading": "only-allowed-in-a-page",
			"content": "One of the reasons for this restriction is that React needs to have all the required data before the page is rendered."
		},
		{
			"heading": "what-if-i-need-to-fetch-data-at-request-time",
			"content": "Since Static Generation happens once at build time, it's not suitable for data that updates frequently or changes on every user request."
		},
		{
			"heading": "what-if-i-need-to-fetch-data-at-request-time",
			"content": "In cases like this, where your data is likely to change, you can use **Server-side Rendering**. Let's learn more about server-side rendering in the next section."
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
			"id": "only-allowed-in-a-page",
			"content": "Only Allowed in a Page"
		},
		{
			"id": "what-if-i-need-to-fetch-data-at-request-time",
			"content": "What If I Need to Fetch Data at Request Time?"
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
		url: "#only-allowed-in-a-page",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#only-allowed-in-a-page",
			children: "Only Allowed in a Page"
		}) })
	},
	{
		depth: 3,
		url: "#what-if-i-need-to-fetch-data-at-request-time",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#what-if-i-need-to-fetch-data-at-request-time",
			children: "What If I Need to Fetch Data at Request Time?"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
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
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
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
			"In ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "lib/posts.js" }),
			", we’ve implemented ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getSortedPostsData" }),
			" which fetches data from the file system. But you can fetch the data from other sources, like an external API endpoint, and it’ll work just fine:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function getSortedPostsData() {" })
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return res.json();" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note" }),
				": Next.js polyfills ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/supported-browsers-features",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "fetch()" })
				}),
				" on both the client and server. You don't need to import it."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can also query the database directly:" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import someDatabaseSDK from 'someDatabaseSDK'" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "const databaseClient = someDatabaseSDK.createClient(...)" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function getSortedPostsData() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // Instead of the file system," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // fetch post data from a database" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return databaseClient.query('SELECT posts...')" })
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
			"This is possible because ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			" only ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "runs on the server-side" }),
			". It will never run on the client-side. It won’t even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers."
		] }),
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
					href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
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
					href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
				}),
				" runs at ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "build time" }),
				". However, this behavior can be enhanced using the ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/api-reference/data-fetching/get-static-paths#fallback-false",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback" }), " key"]
				}),
				" returned by ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/data-fetching#getstaticpaths-static-generation",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
				})
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Because it’s meant to be run at build time, you won’t be able to use data that’s only available during request time, such as query parameters or HTTP headers." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "only-allowed-in-a-page",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#only-allowed-in-a-page",
				children: "Only Allowed in a Page"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			" can only be exported from a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "page" })
			}),
			". You can’t export it from non-page files."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "One of the reasons for this restriction is that React needs to have all the required data before the page is rendered." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "what-if-i-need-to-fetch-data-at-request-time",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#what-if-i-need-to-fetch-data-at-request-time",
				children: "What If I Need to Fetch Data at Request Time?"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Since ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#static-generation-recommended",
				children: "Static Generation"
			}),
			" happens once at build time, it's not suitable for data that updates frequently or changes on every user request."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In cases like this, where your data is likely to change, you can use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#server-side-rendering",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Server-side Rendering" })
			}),
			". Let's learn more about server-side rendering in the next section."
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
export { toc as a, structuredData as i, _26_data_fetching_getstaticprops_details_exports as n, frontmatter as r, MDXContent as t };
