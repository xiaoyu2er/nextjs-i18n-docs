import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/35-dynamic-routes-polishing-index-page-Bv9soH2s.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _35_dynamic_routes_polishing_index_page_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Polishing the Index Page",
	"image": "https://nextjs.org/api/learn-og?title=Polishing%20the%20Index%20Page&amp;chapter=35",
	"headline": "Pages Router: Polishing the Index Page"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next, let’s update our index page (`pages/index.js`). We need to add links to each post page using the `Link` component."
		},
		{
			"heading": void 0,
			"content": "Open `pages/index.js` and add the following imports at the top of the file for `Link` and `Date`:"
		},
		{
			"heading": void 0,
			"content": "Then, near the bottom of the `Home` component in the same file, replace the `li` tag with the following:"
		},
		{
			"heading": void 0,
			"content": "If you go to http\\://localhost:3000, the page now has links to each article:"
		},
		{
			"heading": void 0,
			"content": "> If something is not working, make sure your code looks like this."
		},
		{
			"heading": void 0,
			"content": "That’s it! Before we wrap up this lesson, let’s talk about some tips for dynamic routes on the next page."
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		img: "img",
		p: "p",
		pre: "pre",
		span: "span",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next, let’s update our index page (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/index.js" }),
			"). We need to add links to each post page using the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-reference/next/link",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Link" })
			}),
			" component."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Open ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/index.js" }),
			" and add the following imports at the top of the file for ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-reference/next/link",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Link" })
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Date" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import Link from 'next/link';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import Date from '../components/date';" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Then, near the bottom of the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Home" }),
			" component in the same file, replace the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "li" }),
			" tag with the following:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<li className={utilStyles.listItem} key={id}>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  <Link href={`/posts/${id}`}>{title}</Link>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  <br />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  <small className={utilStyles.lightText}>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <Date dateString={date} />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  </small>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "</li>" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you go to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://localhost:3000",
				children: "http://localhost:3000"
			}),
			", the page now has links to each article:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/dynamic-routes/links.png",
			alt: "Links"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"If something is not working, make sure your code ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next-learn/blob/main/basics/api-routes-starter/pages/posts/%5Bid%5D.js",
					children: "looks like this"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"That’s it! Before we wrap up this lesson, let’s talk about some tips for ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/routing/dynamic-routes",
				children: "dynamic routes"
			}),
			" on the next page."
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
export { toc as a, structuredData as i, _35_dynamic_routes_polishing_index_page_exports as n, frontmatter as r, MDXContent as t };
