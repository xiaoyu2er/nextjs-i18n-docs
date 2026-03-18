import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/30-dynamic-routes-page-path-external-data-CGHcV3Jw.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _30_dynamic_routes_page_path_external_data_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Page Path Depends on External Data",
	"image": "https://nextjs.org/api/learn-og?title=Page%20Path%20Depends%20on%20External%20Data&amp;chapter=30",
	"headline": "Pages Router: Page Path Depends on External Data"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "In the previous lesson, we covered the case where the **page content** depends on external data. We used `getStaticProps` to fetch required data to render the index page."
		},
		{
			"heading": void 0,
			"content": "In this lesson, we’ll talk about the case where each **page path** depends on external data. Next.js allows you to statically generate pages with paths that depend on external data. This enables **dynamic URLs** in Next.js."
		},
		{
			"heading": "how-to-statically-generate-pages-with-dynamic-routes",
			"content": "In our case, we want to create dynamic routes for blog posts:"
		},
		{
			"heading": "how-to-statically-generate-pages-with-dynamic-routes",
			"content": "We want each post to have the path `/posts/<id>`, where `<id>` is the name of the markdown file under the top-level `posts` directory."
		},
		{
			"heading": "how-to-statically-generate-pages-with-dynamic-routes",
			"content": "Since we have `ssg-ssr.md` and `pre-rendering.md`, we’d like the paths to be `/posts/ssg-ssr` and `/posts/pre-rendering`."
		},
		{
			"heading": "overview-of-the-steps",
			"content": "We can do this by taking the following steps. **You don’t have to make these changes yet** — we’ll do it all on the next page."
		},
		{
			"heading": "overview-of-the-steps",
			"content": "First, we’ll create a page called &#x2A;*`[id].js`** under `pages/posts`. Pages that begin with `[` and end with `]` are dynamic routes in Next.js."
		},
		{
			"heading": "overview-of-the-steps",
			"content": "In `pages/posts/[id].js`, we’ll write code that will render a post page — just like other pages we’ve created."
		},
		{
			"heading": "overview-of-the-steps",
			"content": "Now, here’s what’s new: We’ll export an async function called `getStaticPaths` from this page. In this function, we need to return a list of **possible values** for `id`."
		},
		{
			"heading": "overview-of-the-steps",
			"content": "Finally, we need to implement `getStaticProps` again - this time, to fetch necessary data for the blog post with a given `id`. `getStaticProps` is given `params`, which contains `id` (because the file name is `[id].js`)."
		},
		{
			"heading": "overview-of-the-steps",
			"content": "Here’s a graphic summary of what we just talked about:"
		},
		{
			"heading": "overview-of-the-steps",
			"content": "Let’s try this on the next page!"
		}
	],
	"headings": [{
		"id": "how-to-statically-generate-pages-with-dynamic-routes",
		"content": "How to Statically Generate Pages with Dynamic Routes"
	}, {
		"id": "overview-of-the-steps",
		"content": "Overview of the Steps"
	}]
};
var toc = [{
	depth: 3,
	url: "#how-to-statically-generate-pages-with-dynamic-routes",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#how-to-statically-generate-pages-with-dynamic-routes",
		children: "How to Statically Generate Pages with Dynamic Routes"
	}) })
}, {
	depth: 3,
	url: "#overview-of-the-steps",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#overview-of-the-steps",
		children: "Overview of the Steps"
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
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
			"In the previous lesson, we covered the case where the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "page content" }),
			" depends on external data. We used ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			" to fetch required data to render the index page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In this lesson, we’ll talk about the case where each ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "page path" }),
			" depends on external data. Next.js allows you to statically generate pages with paths that depend on external data. This enables ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "dynamic URLs" }),
			" in Next.js."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/dynamic-routes/page-path-external-data.png",
			alt: "Page Path Depends on External Data"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "how-to-statically-generate-pages-with-dynamic-routes",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#how-to-statically-generate-pages-with-dynamic-routes",
				children: "How to Statically Generate Pages with Dynamic Routes"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In our case, we want to create ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/routing/dynamic-routes",
				children: "dynamic routes"
			}),
			" for blog posts:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"We want each post to have the path ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/posts/<id>" }),
				", where ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<id>" }),
				" is the name of the markdown file under the top-level ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "posts" }),
				" directory."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Since we have ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "ssg-ssr.md" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pre-rendering.md" }),
				", we’d like the paths to be ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/posts/ssg-ssr" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/posts/pre-rendering" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "overview-of-the-steps",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#overview-of-the-steps",
				children: "Overview of the Steps"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We can do this by taking the following steps. ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "You don’t have to make these changes yet" }),
			" — we’ll do it all on the next page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"First, we’ll create a page called ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "[id].js" }) }),
			" under ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/posts" }),
			". Pages that begin with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "[" }),
			" and end with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "]" }),
			" are ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/routing/dynamic-routes",
				children: "dynamic routes"
			}),
			" in Next.js."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/posts/[id].js" }),
			", we’ll write code that will render a post page — just like other pages we’ve created."
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import Layout from '../../components/layout';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function Post() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return <Layout>...</Layout>;" })
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
			"Now, here’s what’s new: We’ll export an async function called ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticpaths-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
			}),
			" from this page. In this function, we need to return a list of ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "possible values" }),
			" for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "id" }),
			"."
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import Layout from '../../components/layout';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function Post() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return <Layout>...</Layout>;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function getStaticPaths() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // Return a list of possible value for id" })
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
			"Finally, we need to implement ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			" again - this time, to fetch necessary data for the blog post with a given ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "id" }),
			". ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			" is given ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "params" }),
			", which contains ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "id" }),
			" (because the file name is ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "[id].js" }),
			")."
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import Layout from '../../components/layout';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function Post() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return <Layout>...</Layout>;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function getStaticPaths() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // Return a list of possible value for id" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function getStaticProps({ params }) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // Fetch necessary data for the blog post using params.id" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Here’s a graphic summary of what we just talked about:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/dynamic-routes/how-to-dynamic-routes.png",
			alt: "How to Statically Generate Pages with Dynamic Routes"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Let’s try this on the next page!" })
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
export { toc as a, structuredData as i, _30_dynamic_routes_page_path_external_data_exports as n, frontmatter as r, MDXContent as t };
