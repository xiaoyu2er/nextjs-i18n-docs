import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/06-robots-txt-Bd6i8DRr.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _06_robots_txt_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "What is a robots.txt File?",
	"image": "https://nextjs.org/api/learn-og?title=What%20is%20a%20robots.txt%20File?&amp;chapter=6",
	"headline": "SEO: What is a robots.txt File?"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "A robots.txt file tells search engine crawlers which pages or files the crawler can or can't request from your site. The `robots.txt` file is a web standard file that most good bots consume before requesting anything from a specific domain."
		},
		{
			"heading": void 0,
			"content": "You might want to protect certain areas from your website from being crawled, and therefore indexed, such as your CMS or admin, user accounts in your e-commerce, or some API routes, to name a few. These files must be served at the root of each host, or alternatively you can redirect the root `/robots.txt` path to a destination URL and most bots will follow."
		},
		{
			"heading": "how-to-add-a-robotstxt-file-to-a-nextjs-project",
			"content": "Thanks to static file serving in Next.js we can easily add a `robots.txt` file. , we would create a new file named `robots.txt` the `public` folder in the root directory. An example of what you could put in this file would be:"
		},
		{
			"heading": "how-to-add-a-robotstxt-file-to-a-nextjs-project",
			"content": "When you run your app with `yarn dev`, it will now be available at http\\://localhost:3000/robots.txt . Note that the `public` folder name is not part of the URL."
		},
		{
			"heading": "how-to-add-a-robotstxt-file-to-a-nextjs-project",
			"content": "Do not name the public directory anything else. The name cannot be changed and is the only directory used to serve static assets."
		},
		{
			"heading": "further-reading",
			"content": "Google: Create and Submit a `robots.txt` File"
		}
	],
	"headings": [{
		"id": "how-to-add-a-robotstxt-file-to-a-nextjs-project",
		"content": "How to add a robots.txt file to a Next.js project"
	}, {
		"id": "further-reading",
		"content": "Further Reading"
	}]
};
var toc = [{
	depth: 3,
	url: "#how-to-add-a-robotstxt-file-to-a-nextjs-project",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#how-to-add-a-robotstxt-file-to-a-nextjs-project",
		children: "How to add a robots.txt file to a Next.js project"
	}) })
}, {
	depth: 3,
	url: "#further-reading",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#further-reading",
		children: "Further Reading"
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/search/docs/advanced/robots/intro",
				children: "robots.txt file"
			}),
			" tells search engine crawlers which pages or files the crawler can or can't request from your site. The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "robots.txt" }),
			" file is a web standard file that most ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.cloudflare.com/learning/bots/how-to-manage-good-bots",
				children: "good bots"
			}),
			" consume before requesting anything from a specific domain."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You might want to protect certain areas from your website from being crawled, and therefore indexed, such as your CMS or admin, user accounts in your e-commerce, or some API routes, to name a few. These files must be served at the root of each host, or alternatively you can redirect the root ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/robots.txt" }),
			" path to a destination URL and most bots will follow."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "how-to-add-a-robotstxt-file-to-a-nextjs-project",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#how-to-add-a-robotstxt-file-to-a-nextjs-project",
				children: "How to add a robots.txt file to a Next.js project"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Thanks to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/static-file-serving",
				children: "static file serving"
			}),
			" in Next.js we can easily add a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "robots.txt" }),
			" file. , we would create a new file named ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "robots.txt" }),
			" the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "public" }),
			" folder in the root directory. An example of what you could put in this file would be:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "//robots.txt" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "# Block all crawlers for /accounts" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "User-agent: *" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Disallow: /accounts" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "# Allow all crawlers" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "User-agent: *" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Allow: /" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When you run your app with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "yarn dev" }),
			", it will now be available at ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://localhost:3000/robots.txt",
				children: "http://localhost:3000/robots.txt"
			}),
			" . Note that the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "public" }),
			" folder name is not part of the URL."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Do not name the public directory anything else. The name cannot be changed and is the only directory used to serve static assets." }),
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
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://developers.google.com/search/docs/advanced/robots/create-robots-txt",
				children: [
					"Google: Create and Submit a ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "robots.txt" }),
					" File"
				]
			}) }),
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
export { toc as a, structuredData as i, _06_robots_txt_exports as n, frontmatter as r, MDXContent as t };
