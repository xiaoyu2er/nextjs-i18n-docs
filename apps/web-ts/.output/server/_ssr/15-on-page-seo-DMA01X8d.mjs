import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/15-on-page-seo-DMA01X8d.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _15_on_page_seo_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "On Page SEO",
	"image": "https://nextjs.org/api/learn-og?title=On%20Page%20SEO&amp;chapter=15",
	"headline": "SEO: On Page SEO"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "At a high level, on page SEO refers to the headings and links that make up the overall structure of the page. Headings indicate importance in the document and links connect the web together."
		},
		{
			"heading": "headings-and-h1",
			"content": "Headings help users understand the structure of a page and what they are going to read in the next paragraphs. They also facilitate the search engine's job of understanding which parts of the page are the most important."
		},
		{
			"heading": "headings-and-h1",
			"content": "Headings go from 1-6 and Heading 1 tends to be thought of as the most important. It's recommended to use the H1 heading tag in each page. H1 should represent what the page is about and be similar to your `title` tag."
		},
		{
			"heading": "internal-links",
			"content": "The internet is connected by links. Without links from one website to another, the internet probably wouldn't exist. Websites that receive more links tend to represent websites that are more trusted by users."
		},
		{
			"heading": "internal-links",
			"content": "Google started this principle with the invention of the PageRank Algorithm ."
		},
		{
			"heading": "internal-links",
			"content": "The PageRank algorithm, at a high level, is an algorithm that goes through every link on a database and scores domains based on how many links they receive (quantity) and from which domains (quality). Lots of links from spam websites most likely have little to no value."
		},
		{
			"heading": "internal-links",
			"content": "A link from a big national press website, however, is likely very valuable for search engines. This is why links are important and you should always include them both internally between your page, and also externally to other websites. Links always need to use `href` in order to be used for PageRank calculations."
		},
		{
			"heading": "nextlink",
			"content": "Next.js provides the `Link` component that enables client-side transitions between routes. A simple use case would look something like the following:"
		},
		{
			"heading": "nextlink",
			"content": "The `href` prop is required and will correctly add the link to the anchor tag, which is vital for SEO. When Google crawls a page, it will crawl and follow this link without relying on JavaScript."
		},
		{
			"heading": "nextlink",
			"content": "However, if the child of `Link` is a custom component that wraps an `a` tag, you must add `passHref` to `Link`. This is necessary if you’re using libraries like `styled-components`. Without this, the `a` tag will not have the `href` attribute, which affects your site’s SEO."
		},
		{
			"heading": "nextlink",
			"content": "How to use `passHref`:"
		},
		{
			"heading": "nextlink",
			"content": "If you use ESLint, Next.js has a rule to protect against this happening."
		},
		{
			"heading": "further-reading",
			"content": "Next.js: Link"
		},
		{
			"heading": "further-reading",
			"content": "Next.js: eslint-plugin-next"
		}
	],
	"headings": [
		{
			"id": "headings-and-h1",
			"content": "Headings and H1"
		},
		{
			"id": "internal-links",
			"content": "Internal Links"
		},
		{
			"id": "nextlink",
			"content": "next/link"
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
		url: "#headings-and-h1",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#headings-and-h1",
			children: "Headings and H1"
		}) })
	},
	{
		depth: 3,
		url: "#internal-links",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#internal-links",
			children: "Internal Links"
		}) })
	},
	{
		depth: 3,
		url: "#nextlink",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#nextlink",
			children: "next/link"
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "At a high level, on page SEO refers to the headings and links that make up the overall structure of the page. Headings indicate importance in the document and links connect the web together." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "headings-and-h1",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#headings-and-h1",
				children: "Headings and H1"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Headings help users understand the structure of a page and what they are going to read in the next paragraphs. They also facilitate the search engine's job of understanding which parts of the page are the most important." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Headings go from 1-6 and Heading 1 tends to be thought of as the most important. It's recommended to use the H1 heading tag in each page. H1 should represent what the page is about and be similar to your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "title" }),
			" tag."
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "function Page() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return <h1>Your Main Page Heading</h1>;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "internal-links",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#internal-links",
				children: "Internal Links"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The internet is connected by links. Without links from one website to another, the internet probably wouldn't exist. Websites that receive more links tend to represent websites that are more trusted by users." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Google started this principle with the invention of the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://web.stanford.edu/class/cs54n/handouts/24-GooglePageRankAlgorithm.pdf",
				children: "PageRank Algorithm"
			}),
			" ."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The PageRank algorithm, at a high level, is an algorithm that goes through every link on a database and scores domains based on how many links they receive (quantity) and from which domains (quality). Lots of links from spam websites most likely have little to no value." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A link from a big national press website, however, is likely very valuable for search engines. This is why links are important and you should always include them both internally between your page, and also externally to other websites. Links always need to use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "href" }),
			" in order to be used for PageRank calculations."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "nextlink",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nextlink",
				children: "next/link"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js provides the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://nextjs.org/docs/api-reference/next/link",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "Link" }), " component"]
			}),
			" that enables client-side transitions between routes. A simple use case would look something like the following:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "function NavLink({ href, name }) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return (" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <Link href={href}>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <a>{name}</a>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    </Link>" })
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
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default NavLink;" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "href" }),
			" prop is required and will correctly add the link to the anchor tag, which is vital for SEO. When Google crawls a page, it will crawl and follow this link without relying on JavaScript."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"However, if the child of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Link" }),
			" is a custom component that wraps an ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "a" }),
			" tag, you must add ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "passHref" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Link" }),
			". This is necessary if you’re using libraries like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "styled-components" }),
			". Without this, the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "a" }),
			" tag will not have the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "href" }),
			" attribute, which affects your site’s SEO."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"How to use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "passHref" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import styled from 'styled-components';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// This creates a custom component that wraps an <a> tag" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "const RedLink = styled.a`" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  color: red;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "`;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "function NavLink({ href, name }) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // Must add passHref to Link" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return (" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <Link href={href} passHref>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <RedLink>{name}</RedLink>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    </Link>" })
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
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default NavLink;" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If you use ESLint, Next.js has a rule to protect against this happening." }),
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
				href: "https://nextjs.org/docs/api-reference/next/link",
				children: "Link"
			})] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Next.js: ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/basic-features/eslint",
				children: "eslint-plugin-next"
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
export { toc as a, structuredData as i, _15_on_page_seo_exports as n, frontmatter as r, MDXContent as t };
