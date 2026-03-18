import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/31-dynamic-routes-implement-getstaticpaths-BUMcJNr3.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _31_dynamic_routes_implement_getstaticpaths_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Implement getStaticPaths",
	"image": "https://nextjs.org/api/learn-og?title=Implement%20getStaticPaths&amp;chapter=31",
	"headline": "Pages Router: Implement getStaticPaths"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "First, let’s set up the files:"
		},
		{
			"heading": void 0,
			"content": "Create a file called &#x2A;*`[id].js`** inside the `pages/posts` directory."
		},
		{
			"heading": void 0,
			"content": "Also, &#x2A;*remove `first-post.js`** inside the `pages/posts` directory — we’ll no longer use this."
		},
		{
			"heading": void 0,
			"content": "Then, open `pages/posts/[id].js` in your editor and paste the following code. We’ll fill in `...` later:"
		},
		{
			"heading": void 0,
			"content": "Then, open `lib/posts.js` and add the following `getAllPostIds` function at the bottom. It will return the list of file names (excluding `.md`) in the `posts` directory:"
		},
		{
			"heading": void 0,
			"content": "**Important**: The returned list is *not* just an array of strings — it **must** be an array of objects that look like the comment above. Each object must have the `params` key and contain an object with the `id` key (because we’re using `[id]` in the file name). Otherwise, `getStaticPaths` will fail."
		},
		{
			"heading": void 0,
			"content": "Finally, we'll import the `getAllPostIds` function and use it inside `getStaticPaths`. Open `pages/posts/[id].js` and copy the following code above the exported `Post` component:"
		},
		{
			"heading": void 0,
			"content": "`paths` contains the array of known paths returned by `getAllPostIds()`, which include the params defined by `pages/posts/[id].js`. Learn more in the `paths` key documentation"
		},
		{
			"heading": void 0,
			"content": "Ignore `fallback: false` for now — we’ll explain that later."
		},
		{
			"heading": void 0,
			"content": "We’re almost done — but we still need to implement `getStaticProps`. Let’s do that on the next page!"
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		em: "em",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "First, let’s set up the files:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Create a file called ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "[id].js" }) }),
				" inside the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/posts" }),
				" directory."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Also, ",
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: ["remove ", (0, import_jsx_runtime.jsx)(_components.code, { children: "first-post.js" })] }),
				" inside the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/posts" }),
				" directory — we’ll no longer use this."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Then, open ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/posts/[id].js" }),
			" in your editor and paste the following code. We’ll fill in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "..." }),
			" later:"
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
			"Then, open ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "lib/posts.js" }),
			" and add the following ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getAllPostIds" }),
			" function at the bottom. It will return the list of file names (excluding ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".md" }),
			") in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "posts" }),
			" directory:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export function getAllPostIds() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const fileNames = fs.readdirSync(postsDirectory);" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // Returns an array that looks like this:" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // [" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  //   {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  //     params: {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  //       id: 'ssg-ssr'" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  //     }" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  //   }," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  //   {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  //     params: {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  //       id: 'pre-rendering'" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  //     }" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  //   }" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // ]" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return fileNames.map((fileName) => {" })
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        id: fileName.replace(/\\.md$/, '')," })
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Important" }),
			": The returned list is ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "not" }),
			" just an array of strings — it ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "must" }),
			" be an array of objects that look like the comment above. Each object must have the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "params" }),
			" key and contain an object with the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "id" }),
			" key (because we’re using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "[id]" }),
			" in the file name). Otherwise, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/data-fetching/get-static-paths",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
			}),
			" will fail."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Finally, we'll import the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getAllPostIds" }),
			" function and use it inside ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/data-fetching/get-static-paths",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
			}),
			". Open ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/posts/[id].js" }),
			" and copy the following code above the exported ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Post" }),
			" component:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import { getAllPostIds } from '../../lib/posts';" })
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const paths = getAllPostIds();" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    paths," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    fallback: false," })
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
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "paths" }),
				" contains the array of known paths returned by ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "getAllPostIds()" }),
				", which include the params defined by ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/posts/[id].js" }),
				". Learn more in the ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/pages/api-reference/functions/get-static-paths#paths",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "paths" }), " key documentation"]
				})
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Ignore ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback: false" }),
				" for now — we’ll explain that later."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We’re almost done — but we still need to implement ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/data-fetching/get-static-props",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			". Let’s do that on the next page!"
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
export { toc as a, structuredData as i, _31_dynamic_routes_implement_getstaticpaths_exports as n, frontmatter as r, MDXContent as t };
