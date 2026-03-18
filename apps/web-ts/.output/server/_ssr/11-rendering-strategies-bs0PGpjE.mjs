import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/11-rendering-strategies-bs0PGpjE.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _11_rendering_strategies_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Rendering Strategies",
	"image": "https://nextjs.org/api/learn-og?title=Rendering%20Strategies&amp;chapter=11",
	"headline": "SEO: Rendering Strategies"
};
var structuredData = {
	"contents": [
		{
			"heading": "static-site-generation-ssg",
			"content": "Static site generation is where your HTML is generated at build time. This HTML is then used for each request. Static site generation is probably the best type of rendering strategy for SEO as not only do you have all the HTML on page load because it's pre-rendered, but it also helps with page performance – now another ranking factor when it comes to SEO."
		},
		{
			"heading": "server-side-rendering-ssr",
			"content": "Like SSG, Server-Side Rendering (SSR) is pre-rendered, which also makes it great for SEO. Instead of being generated at build time, as in SSG, SSR's HTML is generated at request time. This is great for when you have pages that are very dynamic."
		},
		{
			"heading": "incremental-static-regeneration-isr",
			"content": "If you have a very large amount of pages, generating them all at build time may not be feasible. Next.js allows you to create or update static pages after you have built your site."
		},
		{
			"heading": "incremental-static-regeneration-isr",
			"content": "Incremental Static Regeneration enables developers and content editors to use static generation on a per-page basis, without needing to rebuild the entire site. With ISR, you can retain the benefits of static while scaling to millions of pages."
		},
		{
			"heading": "client-side-rendering-csr",
			"content": "Client-Side Rendering allows developers to make their websites entirely rendered in the browser with JavaScript. On initial page load a single HTML file is generally served with little to no content until you fetch the JavaScript and the browser compiles everything."
		},
		{
			"heading": "client-side-rendering-csr",
			"content": "As we commented above, in general Client-Side Rendering is **not** recommended for optimal SEO."
		},
		{
			"heading": "client-side-rendering-csr",
			"content": "CSR is perfect for data heavy dashboards, account pages or any page that you do not require to be in any search engine index."
		},
		{
			"heading": "summary",
			"content": "The most important thing for SEO is that page data and metadata is available on page load without JavaScript. In this case SSG or SSR are going to be your best options."
		},
		{
			"heading": "summary",
			"content": "One of the major strengths of Next.js is that each one of the above rendering methods can be done on a per-page basis. You might want your blog posts statically generated, your customers account dashboard client side rendered and then perhaps you have a news feed you want to server-side render."
		},
		{
			"heading": "further-reading",
			"content": "Next.js: Data Fetching"
		},
		{
			"heading": "further-reading",
			"content": "Smashing Magazine: A Complete Guide to Incremental Static Regeneration with Next.js"
		},
		{
			"heading": "further-reading",
			"content": "Vercel: Next.js: Server-side Rendering vs. Static Generation"
		}
	],
	"headings": [
		{
			"id": "static-site-generation-ssg",
			"content": "Static Site Generation (SSG)"
		},
		{
			"id": "server-side-rendering-ssr",
			"content": "Server-Side Rendering (SSR)"
		},
		{
			"id": "incremental-static-regeneration-isr",
			"content": "Incremental Static Regeneration (ISR)"
		},
		{
			"id": "client-side-rendering-csr",
			"content": "Client Side Rendering (CSR)"
		},
		{
			"id": "summary",
			"content": "Summary"
		},
		{
			"id": "further-reading",
			"content": "Further Reading"
		}
	]
};
var toc = [
	{
		depth: 3,
		url: "#static-site-generation-ssg",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#static-site-generation-ssg",
			children: "Static Site Generation (SSG)"
		}) })
	},
	{
		depth: 3,
		url: "#server-side-rendering-ssr",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#server-side-rendering-ssr",
			children: "Server-Side Rendering (SSR)"
		}) })
	},
	{
		depth: 3,
		url: "#incremental-static-regeneration-isr",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#incremental-static-regeneration-isr",
			children: "Incremental Static Regeneration (ISR)"
		}) })
	},
	{
		depth: 3,
		url: "#client-side-rendering-csr",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#client-side-rendering-csr",
			children: "Client Side Rendering (CSR)"
		}) })
	},
	{
		depth: 3,
		url: "#summary",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#summary",
			children: "Summary"
		}) })
	},
	{
		depth: 3,
		url: "#further-reading",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#further-reading",
			children: "Further Reading"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "static-site-generation-ssg",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#static-site-generation-ssg",
				children: "Static Site Generation (SSG)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/basic-features/pages#static-generation-recommended",
				children: "Static site generation"
			}),
			" is where your HTML is generated at build time. This HTML is then used for each request. Static site generation is probably the best type of rendering strategy for SEO as not only do you have all the HTML on page load because it's ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/basic-features/pages#pre-rendering",
				children: "pre-rendered"
			}),
			", but it also helps with page performance – now another ranking factor when it comes to SEO."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "server-side-rendering-ssr",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#server-side-rendering-ssr",
				children: "Server-Side Rendering (SSR)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Like SSG, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/basic-features/pages#server-side-rendering",
				children: "Server-Side Rendering"
			}),
			" (SSR) is pre-rendered, which also makes it great for SEO. Instead of being generated at build time, as in SSG, SSR's HTML is generated at request time. This is great for when you have pages that are very dynamic."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "incremental-static-regeneration-isr",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#incremental-static-regeneration-isr",
				children: "Incremental Static Regeneration (ISR)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If you have a very large amount of pages, generating them all at build time may not be feasible. Next.js allows you to create or update static pages after you have built your site." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration",
			children: "Incremental Static Regeneration"
		}), " enables developers and content editors to use static generation on a per-page basis, without needing to rebuild the entire site. With ISR, you can retain the benefits of static while scaling to millions of pages."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "client-side-rendering-csr",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#client-side-rendering-csr",
				children: "Client Side Rendering (CSR)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://nextjs.org/docs/basic-features/data-fetching#fetching-data-on-the-client-side",
			children: "Client-Side Rendering"
		}), " allows developers to make their websites entirely rendered in the browser with JavaScript. On initial page load a single HTML file is generally served with little to no content until you fetch the JavaScript and the browser compiles everything."] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As we commented above, in general Client-Side Rendering is ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "not" }),
			" recommended for optimal SEO."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "CSR is perfect for data heavy dashboards, account pages or any page that you do not require to be in any search engine index." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "summary",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#summary",
				children: "Summary"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The most important thing for SEO is that page data and metadata is available on page load without JavaScript. In this case SSG or SSR are going to be your best options." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "One of the major strengths of Next.js is that each one of the above rendering methods can be done on a per-page basis. You might want your blog posts statically generated, your customers account dashboard client side rendered and then perhaps you have a news feed you want to server-side render." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "further-reading",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#further-reading",
				children: "Further Reading"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Next.js: ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/basic-features/data-fetching",
				children: "Data Fetching"
			})] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Smashing Magazine: ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.smashingmagazine.com/2021/04/incremental-static-regeneration-nextjs",
				children: "A Complete Guide to Incremental Static Regeneration with Next.js"
			})] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Vercel: ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/blog/nextjs-server-side-rendering-vs-static-generation",
				children: "Next.js: Server-side Rendering vs. Static Generation"
			})] }),
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
export { toc as a, structuredData as i, _11_rendering_strategies_exports as n, frontmatter as r, MDXContent as t };
