import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/13-assets-metadata-css-metadata-BbMQYni-.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _13_assets_metadata_css_metadata_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Metadata",
	"image": "https://nextjs.org/api/learn-og?title=Metadata&amp;chapter=13",
	"headline": "Pages Router: Metadata"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "What if we wanted to modify the metadata of the page, such as the `<title>` HTML tag?"
		},
		{
			"heading": void 0,
			"content": "`<title>` is part of the `<head>` HTML tag, so let's dive into how we can modify the `<head>` tag in a Next.js page."
		},
		{
			"heading": void 0,
			"content": "Open `pages/index.js` in your editor and find the following lines:"
		},
		{
			"heading": void 0,
			"content": "Notice that `<Head>` is used instead of the lowercase `<head>`. `<Head>` is a React Component that is built into Next.js. It allows you to modify the `<head>` of a page."
		},
		{
			"heading": void 0,
			"content": "You can import the `Head` component from the `next/head` module."
		},
		{
			"heading": "adding-head-to-first-postjs",
			"content": "We haven't added a `<title>` to our `/posts/first-post` route. Let's add one."
		},
		{
			"heading": "adding-head-to-first-postjs",
			"content": "Open the `pages/posts/first-post.js` file and add an import for `Head` from `next/head` at the beginning of the file:"
		},
		{
			"heading": "adding-head-to-first-postjs",
			"content": "Then, update the exported `FirstPost` component to include the `Head` component. For now, we‘ll add just the `title` tag:"
		},
		{
			"heading": "adding-head-to-first-postjs",
			"content": "Try accessing http\\://localhost:3000/posts/first-post. The browser tab should now say \"First Post\". By using your browser’s developer tools, you should see that the `title` tag is added to `<head>`."
		},
		{
			"heading": "adding-head-to-first-postjs",
			"content": "> To learn more about the `Head` component, check out the API reference for `next/head`.\n>\n> If you want to customize the `<html>` tag, for example to add the `lang` attribute, you can do so by creating a `pages/_document.js` file. Learn more in the custom `Document` documentation."
		}
	],
	"headings": [{
		"id": "adding-head-to-first-postjs",
		"content": "Adding `Head` to `first-post.js`"
	}]
};
var toc = [{
	depth: 3,
	url: "#adding-head-to-first-postjs",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
		href: "#adding-head-to-first-postjs",
		children: [
			"Adding ",
			(0, import_jsx_runtime.jsx)("code", { children: "Head" }),
			" to ",
			(0, import_jsx_runtime.jsx)("code", { children: "first-post.js" })
		]
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		h3: "h3",
		p: "p",
		pre: "pre",
		span: "span",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"What if we wanted to modify the metadata of the page, such as the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<title>" }),
			" HTML tag?"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<title>" }),
			" is part of the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<head>" }),
			" HTML tag, so let's dive into how we can modify the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<head>" }),
			" tag in a Next.js page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Open ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/index.js" }),
			" in your editor and find the following lines:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<Head>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  <title>Create Next App</title>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  <link rel=\"icon\" href=\"/favicon.ico\" />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "</Head>" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Notice that ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<Head>" }),
			" is used instead of the lowercase ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<head>" }),
			". ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<Head>" }),
			" is a React Component that is built into Next.js. It allows you to modify the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<head>" }),
			" of a page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can import the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Head" }),
			" component from the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-reference/next/head",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next/head" })
			}),
			" module."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "adding-head-to-first-postjs",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#adding-head-to-first-postjs",
				children: [
					"Adding ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "Head" }),
					" to ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "first-post.js" })
				]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We haven't added a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<title>" }),
			" to our ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/posts/first-post" }),
			" route. Let's add one."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Open the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/posts/first-post.js" }),
			" file and add an import for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Head" }),
			" from ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-reference/next/head",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next/head" })
			}),
			" at the beginning of the file:"
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import Head from 'next/head';" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Then, update the exported ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "FirstPost" }),
			" component to include the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Head" }),
			" component. For now, we‘ll add just the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "title" }),
			" tag:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function FirstPost() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return (" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <Head>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        <title>First Post</title>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      </Head>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <h1>First Post</h1>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <h2>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        <Link href=\"/\">← Back to home</Link>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      </h2>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    </>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  );" })
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
			"Try accessing ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://localhost:3000/posts/first-post",
				children: "http://localhost:3000/posts/first-post"
			}),
			". The browser tab should now say \"First Post\". By using your browser’s developer tools, you should see that the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "title" }),
			" tag is added to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<head>" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"To learn more about the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Head" }),
				" component, check out the ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/api-reference/next/head",
					children: ["API reference for ", (0, import_jsx_runtime.jsx)(_components.code, { children: "next/head" })]
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"If you want to customize the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<html>" }),
				" tag, for example to add the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "lang" }),
				" attribute, you can do so by creating a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_document.js" }),
				" file. Learn more in the ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/advanced-features/custom-document",
					children: [
						"custom ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "Document" }),
						" documentation"
					]
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
export { toc as a, structuredData as i, _13_assets_metadata_css_metadata_exports as n, frontmatter as r, MDXContent as t };
