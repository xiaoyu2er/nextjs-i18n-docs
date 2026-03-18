import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/24-data-fetching-with-data-BMSCkiuS.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _24_data_fetching_with_data_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Static Generation with and without Data",
	"image": "https://nextjs.org/api/learn-og?title=Static%20Generation%20with%20and%20without%20Data&amp;chapter=24",
	"headline": "Pages Router: Static Generation with and without Data"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Static Generation can be done with and without data."
		},
		{
			"heading": void 0,
			"content": "So far, all the pages we’ve created do not require fetching external data. Those pages will automatically be statically generated when the app is built for production."
		},
		{
			"heading": void 0,
			"content": "However, for some pages, you might not be able to render the HTML without first fetching some external data. Maybe you need to access the file system, fetch external API, or query your database at build time. Next.js supports this case — Static Generation **with data** — out of the box."
		},
		{
			"heading": "static-generation-with-data-using-getstaticprops",
			"content": "How does it work? Well, in Next.js, when you export a page component, you can also export an `async` function called `getStaticProps`. If you do this, then:"
		},
		{
			"heading": "static-generation-with-data-using-getstaticprops",
			"content": "`getStaticProps` runs at build time in production, and…"
		},
		{
			"heading": "static-generation-with-data-using-getstaticprops",
			"content": "Inside the function, you can fetch external data and send it as props to the page."
		},
		{
			"heading": "static-generation-with-data-using-getstaticprops",
			"content": "Essentially, `getStaticProps&#x60; allows you to tell Next.js: &#x2A;\"Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!\"*"
		},
		{
			"heading": "static-generation-with-data-using-getstaticprops",
			"content": "> **Note**: In development mode, `getStaticProps` runs on each request instead."
		},
		{
			"heading": "lets-use-getstaticprops",
			"content": "It’s easier to learn by doing, so starting from the next page, we’ll use `getStaticProps` to implement our blog."
		}
	],
	"headings": [{
		"id": "static-generation-with-data-using-getstaticprops",
		"content": "Static Generation with Data using `getStaticProps`"
	}, {
		"id": "lets-use-getstaticprops",
		"content": "Let’s Use `getStaticProps`"
	}]
};
var toc = [{
	depth: 3,
	url: "#static-generation-with-data-using-getstaticprops",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
		href: "#static-generation-with-data-using-getstaticprops",
		children: ["Static Generation with Data using ", (0, import_jsx_runtime.jsx)("code", { children: "getStaticProps" })]
	}) })
}, {
	depth: 3,
	url: "#lets-use-getstaticprops",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
		href: "#lets-use-getstaticprops",
		children: ["Let’s Use ", (0, import_jsx_runtime.jsx)("code", { children: "getStaticProps" })]
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		em: "em",
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "/docs/pages/building-your-application/rendering/static-site-generation",
			children: "Static Generation"
		}), " can be done with and without data."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "So far, all the pages we’ve created do not require fetching external data. Those pages will automatically be statically generated when the app is built for production." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/data-fetching/static-generation-without-data.png",
			alt: "Static Generation without Data"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"However, for some pages, you might not be able to render the HTML without first fetching some external data. Maybe you need to access the file system, fetch external API, or query your database at build time. Next.js supports this case — ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://nextjs.org/docs/basic-features/pages#static-generation-with-data",
				children: ["Static Generation ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "with data" })]
			}),
			" — out of the box."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/data-fetching/static-generation-with-data.png",
			alt: "Static Generation with Data"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "static-generation-with-data-using-getstaticprops",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#static-generation-with-data-using-getstaticprops",
				children: ["Static Generation with Data using ", (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"How does it work? Well, in Next.js, when you export a page component, you can also export an ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "async" }),
			" function called ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			". If you do this, then:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}), " runs at build time in production, and…"] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Inside the function, you can fetch external data and send it as props to the page." }),
			"\n"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function Home(props) { ... }" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function getStaticProps() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // Get external data from the file system, API, DB, etc." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const data = ..." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // The value of the `props` key will be" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  //  passed to the `Home` component" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    props: ..." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  }" })
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
			"Essentially, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			" allows you to tell Next.js: ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "\"Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!\"" })
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note" }),
				": In development mode, ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
				}),
				" runs on each request instead."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "lets-use-getstaticprops",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#lets-use-getstaticprops",
				children: ["Let’s Use ", (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"It’s easier to learn by doing, so starting from the next page, we’ll use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			" to implement our blog."
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
export { toc as a, structuredData as i, _24_data_fetching_with_data_exports as n, frontmatter as r, MDXContent as t };
