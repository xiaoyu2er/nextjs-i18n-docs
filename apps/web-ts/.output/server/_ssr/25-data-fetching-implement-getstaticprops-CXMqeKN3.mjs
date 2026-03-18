import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/25-data-fetching-implement-getstaticprops-CXMqeKN3.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _25_data_fetching_implement_getstaticprops_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Implement getStaticProps",
	"image": "https://nextjs.org/api/learn-og?title=Implement%20getStaticProps&amp;chapter=25",
	"headline": "Pages Router: Implement getStaticProps"
};
var structuredData = {
	"contents": [
		{
			"heading": "pre-rendering-in-nextjs",
			"content": "Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page."
		},
		{
			"heading": "pre-rendering-in-nextjs",
			"content": "**Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then *reused* on each request."
		},
		{
			"heading": "pre-rendering-in-nextjs",
			"content": "**Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**."
		},
		{
			"heading": "pre-rendering-in-nextjs",
			"content": "Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a \"hybrid\" Next.js app by using Static Generation for most pages and using Server-side Rendering for others."
		},
		{
			"heading": "using-static-generation-getstaticprops",
			"content": "Now, we need to add an import for `getSortedPostsData` and call it inside `getStaticProps` in `pages/index.js`."
		},
		{
			"heading": "using-static-generation-getstaticprops",
			"content": "Open `pages/index.js` in your editor and add the following code above the exported `Home` component:"
		},
		{
			"heading": "using-static-generation-getstaticprops",
			"content": "By returning `allPostsData` inside the `props` object in `getStaticProps`, the blog posts will be passed to the `Home` component as a prop. Now you can access the blog posts like so:"
		},
		{
			"heading": "using-static-generation-getstaticprops",
			"content": "To display the blog posts, let's update the `Home` component to add another `<section>` tag with the data below the section with your self introduction. Don't forget to also change the props from `()` to `({ allPostsData })`:"
		},
		{
			"heading": "using-static-generation-getstaticprops",
			"content": "You should now see the blog data if you access http\\://localhost:3000."
		},
		{
			"heading": "using-static-generation-getstaticprops",
			"content": "Congratulations! We’ve successfully fetched external data (from the file system) and pre-rendered the index page with this data."
		},
		{
			"heading": "using-static-generation-getstaticprops",
			"content": "Let’s talk about some tips for using `getStaticProps` on the next page."
		}
	],
	"headings": [{
		"id": "pre-rendering-in-nextjs",
		"content": "Pre-rendering in Next.js"
	}, {
		"id": "using-static-generation-getstaticprops",
		"content": "Using Static Generation (`getStaticProps()`)"
	}]
};
var toc = [{
	depth: 3,
	url: "#pre-rendering-in-nextjs",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#pre-rendering-in-nextjs",
		children: "Pre-rendering in Next.js"
	}) })
}, {
	depth: 3,
	url: "#using-static-generation-getstaticprops",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
		href: "#using-static-generation-getstaticprops",
		children: [
			"Using Static Generation (",
			(0, import_jsx_runtime.jsx)("code", { children: "getStaticProps()" }),
			")"
		]
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
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
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "pre-rendering-in-nextjs",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#pre-rendering-in-nextjs",
				children: "Pre-rendering in Next.js"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js has two forms of pre-rendering: ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Static Generation" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Server-side Rendering" }),
			". The difference is in ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "when" }),
			" it generates the HTML for a page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Static Generation" }),
				" is the pre-rendering method that generates the HTML at ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "build time" }),
				". The pre-rendered HTML is then ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "reused" }),
				" on each request."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Server-side Rendering" }),
				" is the pre-rendering method that generates the HTML on ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "each request" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Importantly, Next.js lets you ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "choose" }),
			" which pre-rendering form to use for each page. You can create a \"hybrid\" Next.js app by using Static Generation for most pages and using Server-side Rendering for others."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "using-static-generation-getstaticprops",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#using-static-generation-getstaticprops",
				children: [
					"Using Static Generation (",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps()" }),
					")"
				]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Now, we need to add an import for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getSortedPostsData" }),
			" and call it inside ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			" in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/index.js" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Open ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/index.js" }),
			" in your editor and add the following code above the exported ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Home" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import { getSortedPostsData } from '../lib/posts';" })
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const allPostsData = getSortedPostsData();" })
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      allPostsData," })
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
			"By returning ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "allPostsData" }),
			" inside the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "props" }),
			" object in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			", the blog posts will be passed to the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Home" }),
			" component as a prop. Now you can access the blog posts like so:"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function Home ({ allPostsData }) { ... }" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To display the blog posts, let's update the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Home" }),
			" component to add another ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<section>" }),
			" tag with the data below the section with your self introduction. Don't forget to also change the props from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "()" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "({ allPostsData })" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function Home({ allPostsData }) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return (" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <Layout home>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      {/* Keep the existing code here */}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      {/* Add this <section> tag below the existing <section> tag */}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        <h2 className={utilStyles.headingLg}>Blog</h2>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        <ul className={utilStyles.list}>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "          {allPostsData.map(({ id, date, title }) => (" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "            <li className={utilStyles.listItem} key={id}>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "              {title}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "              <br />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "              {id}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "              <br />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "              {date}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "            </li>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "          ))}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        </ul>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      </section>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    </Layout>" })
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
			"You should now see the blog data if you access ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://localhost:3000",
				children: "http://localhost:3000"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/data-fetching/blog-data.png",
			alt: "Blog Data"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Congratulations! We’ve successfully fetched external data (from the file system) and pre-rendered the index page with this data." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/data-fetching/index-page.png",
			alt: "Index Page"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Let’s talk about some tips for using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
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
export { toc as a, structuredData as i, _25_data_fetching_implement_getstaticprops_exports as n, frontmatter as r, MDXContent as t };
