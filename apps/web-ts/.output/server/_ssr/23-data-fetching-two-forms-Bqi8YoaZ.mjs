import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/23-data-fetching-two-forms-Bqi8YoaZ.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _23_data_fetching_two_forms_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Two Forms of Pre-rendering",
	"image": "https://nextjs.org/api/learn-og?title=Two%20Forms%20of%20Pre-rendering&amp;chapter=23",
	"headline": "Pages Router: Two Forms of Pre-rendering"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page."
		},
		{
			"heading": void 0,
			"content": "**Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then *reused* on each request."
		},
		{
			"heading": void 0,
			"content": "**Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**."
		},
		{
			"heading": void 0,
			"content": "> In development mode (when you run `npm run dev` or `yarn dev`), pages are pre-rendered on every request. This also applies to Static Generation to make it easier to develop. When going to production, Static Generation will happen once, at build time, and **not** on every request."
		},
		{
			"heading": "per-page-basis",
			"content": "Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a \"hybrid\" Next.js app by using Static Generation for most pages and using Server-side Rendering for others."
		},
		{
			"heading": "when-to-use-static-generation-vs-server-side-rendering",
			"content": "We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request."
		},
		{
			"heading": "when-to-use-static-generation-vs-server-side-rendering",
			"content": "You can use Static Generation for many types of pages, including:"
		},
		{
			"heading": "when-to-use-static-generation-vs-server-side-rendering",
			"content": "Marketing pages"
		},
		{
			"heading": "when-to-use-static-generation-vs-server-side-rendering",
			"content": "Blog posts"
		},
		{
			"heading": "when-to-use-static-generation-vs-server-side-rendering",
			"content": "E-commerce product listings"
		},
		{
			"heading": "when-to-use-static-generation-vs-server-side-rendering",
			"content": "Help and documentation"
		},
		{
			"heading": "when-to-use-static-generation-vs-server-side-rendering",
			"content": "You should ask yourself: \"Can I pre-render this page **ahead** of a user's request?\" If the answer is yes, then you should choose Static Generation."
		},
		{
			"heading": "when-to-use-static-generation-vs-server-side-rendering",
			"content": "On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request."
		},
		{
			"heading": "when-to-use-static-generation-vs-server-side-rendering",
			"content": "In that case, you can use **Server-side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate frequently updated data."
		},
		{
			"heading": "well-focus-on-static-generation",
			"content": "In this lesson, we’ll focus on Static Generation. On the next page, we’ll talk about Static Generation **with and without data**."
		}
	],
	"headings": [
		{
			"id": "per-page-basis",
			"content": "Per-page Basis"
		},
		{
			"id": "when-to-use-static-generation-vs-server-side-rendering",
			"content": "When to Use Static Generation v.s. Server-side Rendering"
		},
		{
			"id": "well-focus-on-static-generation",
			"content": "We’ll Focus on Static Generation"
		}
	]
};
var toc = [
	{
		depth: 3,
		url: "#per-page-basis",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#per-page-basis",
			children: "Per-page Basis"
		}) })
	},
	{
		depth: 3,
		url: "#when-to-use-static-generation-vs-server-side-rendering",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			(0, import_jsx_runtime.jsx)("a", {
				href: "#when-to-use-static-generation-vs-server-side-rendering",
				children: "When to Use"
			}),
			" ",
			(0, import_jsx_runtime.jsx)("a", {
				href: "/docs/basic-features/pages#static-generation-recommended",
				children: "Static Generation"
			}),
			" v.s. ",
			(0, import_jsx_runtime.jsx)("a", {
				href: "/docs/basic-features/pages#server-side-rendering",
				children: "Server-side Rendering"
			})
		] })
	},
	{
		depth: 3,
		url: "#well-focus-on-static-generation",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#well-focus-on-static-generation",
			children: "We’ll Focus on Static Generation"
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
		img: "img",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js has two forms of pre-rendering: ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#static-generation-recommended",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Static Generation" })
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#server-side-rendering",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Server-side Rendering" })
			}),
			". The difference is in ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "when" }),
			" it generates the HTML for a page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/pages#static-generation-recommended",
					children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Static Generation" })
				}),
				" is the pre-rendering method that generates the HTML at ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "build time" }),
				". The pre-rendered HTML is then ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "reused" }),
				" on each request."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/pages#server-side-rendering",
					children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Server-side Rendering" })
				}),
				" is the pre-rendering method that generates the HTML on ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "each request" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/data-fetching/static-generation.png",
			alt: "Static Generation"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/data-fetching/server-side-rendering.png",
			alt: "Server-side Rendering"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"In development mode (when you run ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "npm run dev" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "yarn dev" }),
				"), pages are ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/pages#pre-rendering",
					children: "pre-rendered"
				}),
				" on every request. This also applies to ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nextjs.org/docs/basic-features/data-fetching/get-static-props#runs-on-every-request-in-development",
					children: "Static Generation"
				}),
				" to make it easier to develop. When going to production, Static Generation will happen once, at build time, and ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "not" }),
				" on every request."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "per-page-basis",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#per-page-basis",
				children: "Per-page Basis"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Importantly, Next.js lets you ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "choose" }),
			" which pre-rendering form to use for each page. You can create a \"hybrid\" Next.js app by using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#static-generation-recommended",
				children: "Static Generation"
			}),
			" for most pages and using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#server-side-rendering",
				children: "Server-side Rendering"
			}),
			" for others."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/data-fetching/per-page-basis.png",
			alt: "Per-page Basis"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "when-to-use-static-generation-vs-server-side-rendering",
			children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#when-to-use-static-generation-vs-server-side-rendering",
					children: "When to Use"
				}),
				" ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/pages#static-generation-recommended",
					children: "Static Generation"
				}),
				" v.s. ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/pages#server-side-rendering",
					children: "Server-side Rendering"
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We recommend using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#static-generation-recommended",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Static Generation" })
			}),
			" (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#static-generation-recommended",
				children: "Static Generation"
			}),
			" for many types of pages, including:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Marketing pages" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Blog posts" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "E-commerce product listings" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Help and documentation" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You should ask yourself: \"Can I pre-render this page ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "ahead" }),
			" of a user's request?\" If the answer is yes, then you should choose ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#static-generation-recommended",
				children: "Static Generation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"On the other hand, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#static-generation-recommended",
				children: "Static Generation"
			}),
			" is ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "not" }),
			" a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In that case, you can use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#server-side-rendering",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Server-side Rendering" })
			}),
			". It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate frequently updated data."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "well-focus-on-static-generation",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#well-focus-on-static-generation",
				children: "We’ll Focus on Static Generation"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In this lesson, we’ll focus on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#static-generation-recommended",
				children: "Static Generation"
			}),
			". On the next page, we’ll talk about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#static-generation-recommended",
				children: "Static Generation"
			}),
			" ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "with and without data" }),
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
//#endregion
export { toc as a, structuredData as i, _23_data_fetching_two_forms_exports as n, frontmatter as r, MDXContent as t };
