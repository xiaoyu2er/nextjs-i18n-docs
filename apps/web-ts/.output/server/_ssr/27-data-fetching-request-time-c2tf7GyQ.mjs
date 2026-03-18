import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/27-data-fetching-request-time-c2tf7GyQ.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _27_data_fetching_request_time_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Fetching Data at Request Time",
	"image": "https://nextjs.org/api/learn-og?title=Fetching%20Data%20at%20Request%20Time&amp;chapter=27",
	"headline": "Pages Router: Fetching Data at Request Time"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "If you need to fetch data at **request time** instead of at build time, you can try **Server-side Rendering**:"
		},
		{
			"heading": void 0,
			"content": "To use Server-side Rendering, you need to export `getServerSideProps` instead of `getStaticProps` from your page."
		},
		{
			"heading": "using-getserversideprops",
			"content": "Here’s the starter code for `getServerSideProps`. It’s not necessary for our blog example, so we won’t be implementing it."
		},
		{
			"heading": "using-getserversideprops",
			"content": "Because `getServerSideProps` is called at request time, its parameter (`context`) contains request specific parameters."
		},
		{
			"heading": "using-getserversideprops",
			"content": "You should use `getServerSideProps` only if you need to pre-render a page whose data must be fetched at request time. Time to first byte (TTFB) will be slower than `getStaticProps` because the server must compute the result on every request, and the result cannot be cached by a CDN without extra configuration."
		},
		{
			"heading": "client-side-rendering",
			"content": "If you **do not** need to pre-render the data, you can also use the following strategy (called **Client-side Rendering**):"
		},
		{
			"heading": "client-side-rendering",
			"content": "Statically generate (pre-render) parts of the page that do not require external data."
		},
		{
			"heading": "client-side-rendering",
			"content": "When the page loads, fetch external data from the client using JavaScript and populate the remaining parts."
		},
		{
			"heading": "client-side-rendering",
			"content": "This approach works well for user dashboard pages, for example. Because a dashboard is a private, user-specific page, SEO is not relevant, and the page doesn’t need to be pre-rendered. The data is frequently updated, which requires request-time data fetching."
		},
		{
			"heading": "swr",
			"content": "The team behind Next.js has created a React hook for data fetching called **SWR**. We highly recommend it if you’re fetching data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more. We won’t cover the details here, but here’s an example usage:"
		},
		{
			"heading": "swr",
			"content": "Check out the SWR documentation to learn more."
		},
		{
			"heading": "thats-it",
			"content": "In the next lesson, we’ll create pages for each blog post using **dynamic routes**."
		},
		{
			"heading": "thats-it",
			"content": "> Again, you can get in-depth information about `getStaticProps` and `getServerSideProps` in the Data Fetching documentation."
		}
	],
	"headings": [
		{
			"id": "using-getserversideprops",
			"content": "Using `getServerSideProps`"
		},
		{
			"id": "client-side-rendering",
			"content": "Client-side Rendering"
		},
		{
			"id": "swr",
			"content": "SWR"
		},
		{
			"id": "thats-it",
			"content": "That’s It!"
		}
	]
};
var toc = [
	{
		depth: 3,
		url: "#using-getserversideprops",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#using-getserversideprops",
			children: ["Using ", (0, import_jsx_runtime.jsx)("code", { children: "getServerSideProps" })]
		}) })
	},
	{
		depth: 3,
		url: "#client-side-rendering",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#client-side-rendering",
			children: "Client-side Rendering"
		}) })
	},
	{
		depth: 3,
		url: "#swr",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#swr",
			children: "SWR"
		}) })
	},
	{
		depth: 3,
		url: "#thats-it",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#thats-it",
			children: "That’s It!"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		h3: "h3",
		img: "img",
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
			"If you need to fetch data at ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "request time" }),
			" instead of at build time, you can try ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#server-side-rendering",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Server-side Rendering" })
			}),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/data-fetching/server-side-rendering-with-data.png",
			alt: "Server-side Rendering"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#server-side-rendering",
				children: "Server-side Rendering"
			}),
			", you need to export ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getserversideprops-server-side-rendering",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" })
			}),
			" instead of ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			" from your page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "using-getserversideprops",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#using-getserversideprops",
				children: ["Using ", (0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" })]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Here’s the starter code for ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getserversideprops-server-side-rendering",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" })
			}),
			". It’s not necessary for our blog example, so we won’t be implementing it."
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function getServerSideProps(context) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    props: {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      // props for your component" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    }," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  };" })
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
			"Because ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getserversideprops-server-side-rendering",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" })
			}),
			" is called at request time, its parameter (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "context" }),
			") contains request specific parameters."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You should use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getserversideprops-server-side-rendering",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" })
			}),
			" only if you need to pre-render a page whose data must be fetched at request time. Time to first byte (",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://web.dev/time-to-first-byte/",
				children: "TTFB"
			}),
			") will be slower than ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			" because the server must compute the result on every request, and the result cannot be cached by a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/docs/edge-network/overview",
				children: "CDN"
			}),
			" without extra configuration."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "client-side-rendering",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#client-side-rendering",
				children: "Client-side Rendering"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "do not" }),
			" need to pre-render the data, you can also use the following strategy (called ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#fetching-data-on-the-client-side",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Client-side Rendering" })
			}),
			"):"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Statically generate (pre-render) parts of the page that do not require external data." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "When the page loads, fetch external data from the client using JavaScript and populate the remaining parts." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/data-fetching/client-side-rendering.png",
			alt: "Client-side Rendering"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This approach works well for user dashboard pages, for example. Because a dashboard is a private, user-specific page, SEO is not relevant, and the page doesn’t need to be ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#pre-rendering",
				children: "pre-rendered"
			}),
			". The data is frequently updated, which requires request-time data fetching."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "swr",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#swr",
				children: "SWR"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The team behind Next.js has created a React hook for data fetching called ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://swr.vercel.app/",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "SWR" })
			}),
			". We highly recommend it if you’re fetching data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more. We won’t cover the details here, but here’s an example usage:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import useSWR from 'swr';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "function Profile() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const { data, error } = useSWR('/api/user', fetch);" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  if (error) return <div>failed to load</div>;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  if (!data) return <div>loading...</div>;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return <div>hello {data.name}!</div>;" })
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
			"Check out the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://swr.vercel.app/",
				children: "SWR documentation"
			}),
			" to learn more."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "thats-it",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#thats-it",
				children: "That’s It!"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In the next lesson, we’ll create pages for each blog post using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/routing/dynamic-routes",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "dynamic routes" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Again, you can get in-depth information about ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/data-fetching#getserversideprops-server-side-rendering",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" })
				}),
				" in the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/data-fetching",
					children: "Data Fetching documentation"
				}),
				"."
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
//#endregion
export { toc as a, structuredData as i, _27_data_fetching_request_time_exports as n, frontmatter as r, MDXContent as t };
