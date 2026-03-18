import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/07-xml-sitemaps-DOClHp7B.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _07_xml_sitemaps_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "XML Sitemaps",
	"image": "https://nextjs.org/api/learn-og?title=XML%20Sitemaps&amp;chapter=7",
	"headline": "SEO: XML Sitemaps"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "**Sitemaps** are the easiest way to communicate with Google. They indicate the URLs that belong to your website and when they update so that Google can easily detect new content and crawl your website more efficiently."
		},
		{
			"heading": void 0,
			"content": "Even though XML Sitemaps are the most known and used ones, they can also be created via RSS or Atom, or even via Text files if you prefer maximum simplicity."
		},
		{
			"heading": void 0,
			"content": "A sitemap is a file where you provide information about the pages, videos, and other files on your site, and the relationships between them. Search engines like Google read this file to more intelligently crawl your site."
		},
		{
			"heading": void 0,
			"content": "According to Google:"
		},
		{
			"heading": void 0,
			"content": "You might need a sitemap if:"
		},
		{
			"heading": void 0,
			"content": "**Your site is really large.** As a result, it's more likely Google web crawlers might overlook crawling some of your new or recently updated pages."
		},
		{
			"heading": void 0,
			"content": "**Your site has a large archive of content pages that are isolated or not well linked to each other.** If your site pages don't naturally reference each other, you can list them in a sitemap to ensure that Google doesn't overlook some of your pages."
		},
		{
			"heading": void 0,
			"content": "**Your site is new and has few external links to it.** Googlebot and other web crawlers navigate the web by following links from one page to another. As a result, Google might not discover your pages if no other sites link to them."
		},
		{
			"heading": void 0,
			"content": "**Your site has a lot of rich media content (video, images) or is shown in Google News.** If provided, Google can take additional information from sitemaps into account for search, where appropriate."
		},
		{
			"heading": void 0,
			"content": "While sitemaps are not mandatory for great search engine performance, they can facilitate crawling and indexing to bots and hence your content will be picked up faster and rank accordingly."
		},
		{
			"heading": void 0,
			"content": "It's strongly recommended to use sitemaps and make them dynamic as new content is populated across your website. Static sitemaps are also valid, but they might be less useful to Google as it won't serve for constant discovery purposes."
		},
		{
			"heading": "how-to-add-sitemaps-to-a-nextjs-project",
			"content": "There are two options:"
		},
		{
			"heading": "how-to-add-sitemaps-to-a-nextjs-project",
			"content": "**Manual**: If you have a relatively simple and static site, you can manually create a `sitemap.xml` in the `public` directory of your project:"
		},
		{
			"heading": "how-to-add-sitemaps-to-a-nextjs-project",
			"content": "**Dynamic**: If your site is dynamic, you can leverage `getServerSideProps` to generate an XML sitemap on-demand."
		},
		{
			"heading": "how-to-add-sitemaps-to-a-nextjs-project",
			"content": "We can create a new page inside the pages directory such as `pages/sitemap.xml.js`. The goal of this page will be to hit our API to get data that will allow us to know the URLs of our dynamic pages. We will then write an XML file as the response for `/sitemap.xml`"
		},
		{
			"heading": "how-to-add-sitemaps-to-a-nextjs-project",
			"content": "Here is an example if you could try out for yourself:"
		},
		{
			"heading": "further-reading",
			"content": "**Google**: Learn about Sitemaps"
		},
		{
			"heading": "further-reading",
			"content": "**Google**: Overview of crawling and indexing topics"
		}
	],
	"headings": [{
		"id": "how-to-add-sitemaps-to-a-nextjs-project",
		"content": "How to Add Sitemaps to a Next.js Project"
	}, {
		"id": "further-reading",
		"content": "Further Reading"
	}]
};
var toc = [{
	depth: 3,
	url: "#how-to-add-sitemaps-to-a-nextjs-project",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#how-to-add-sitemaps-to-a-nextjs-project",
		children: "How to Add Sitemaps to a Next.js Project"
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
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Sitemaps" }), " are the easiest way to communicate with Google. They indicate the URLs that belong to your website and when they update so that Google can easily detect new content and crawl your website more efficiently."] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Even though XML Sitemaps are the most known and used ones, they can also be created via ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap",
				children: "RSS"
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap",
				children: "Atom"
			}),
			", or even via ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap",
				children: "Text"
			}),
			" files if you prefer maximum simplicity."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "A sitemap is a file where you provide information about the pages, videos, and other files on your site, and the relationships between them. Search engines like Google read this file to more intelligently crawl your site." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"According to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/search/docs/advanced/sitemaps/overview",
				children: "Google"
			}),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You might need a sitemap if:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Your site is really large." }), " As a result, it's more likely Google web crawlers might overlook crawling some of your new or recently updated pages."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Your site has a large archive of content pages that are isolated or not well linked to each other." }), " If your site pages don't naturally reference each other, you can list them in a sitemap to ensure that Google doesn't overlook some of your pages."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Your site is new and has few external links to it." }), " Googlebot and other web crawlers navigate the web by following links from one page to another. As a result, Google might not discover your pages if no other sites link to them."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Your site has a lot of rich media content (video, images) or is shown in Google News." }), " If provided, Google can take additional information from sitemaps into account for search, where appropriate."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "While sitemaps are not mandatory for great search engine performance, they can facilitate crawling and indexing to bots and hence your content will be picked up faster and rank accordingly." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "It's strongly recommended to use sitemaps and make them dynamic as new content is populated across your website. Static sitemaps are also valid, but they might be less useful to Google as it won't serve for constant discovery purposes." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "how-to-add-sitemaps-to-a-nextjs-project",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#how-to-add-sitemaps-to-a-nextjs-project",
				children: "How to Add Sitemaps to a Next.js Project"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "There are two options:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Manual" }),
			": If you have a relatively simple and static site, you can manually create a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "sitemap.xml" }),
			" in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "public" }),
			" directory of your project:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "   <!-- public/sitemap.xml -->" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "   <xml version=\"1.0\" encoding=\"UTF-8\">" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "   <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "     <url>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "       <loc>http://www.example.com/foo</loc>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "       <lastmod>2021-06-01</lastmod>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "     </url>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "   </urlset>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "   </xml>" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Dynamic" }),
			": If your site is dynamic, you can leverage ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			" to generate an XML sitemap on-demand."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We can create a new page inside the pages directory such as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/sitemap.xml.js" }),
			". The goal of this page will be to hit our API to get data that will allow us to know the URLs of our dynamic pages. We will then write an XML file as the response for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/sitemap.xml" })
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Here is an example if you could try out for yourself:" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "//pages/sitemap.xml.js" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "function generateSiteMap(posts) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return `<?xml version=\"1.0\" encoding=\"UTF-8\"?>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "   <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "     <!--We manually set the two URLs we know already-->" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "     <url>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "       <loc>https://jsonplaceholder.typicode.com</loc>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "     </url>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "     <url>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "       <loc>https://jsonplaceholder.typicode.com/guide</loc>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "     </url>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "     ${posts" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "       .map(({ id }) => {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "         return `" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "       <url>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "       </url>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "     `;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "       })" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "       .join('')}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "   </urlset>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " `;" })
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "function SiteMap() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // getServerSideProps will do the heavy lifting" })
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function getServerSideProps({ res }) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // We make an API call to gather the URLs for our site" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const request = await fetch(EXTERNAL_DATA_URL);" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const posts = await request.json();" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // We generate the XML sitemap with the posts data" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const sitemap = generateSiteMap(posts);" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  res.setHeader('Content-Type', 'text/xml');" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // we send the XML to the browser" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  res.write(sitemap);" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  res.end();" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    props: {}," })
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
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default SiteMap;" })
				})
			] })
		}) }),
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
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Google" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developers.google.com/search/docs/advanced/sitemaps/overview",
					children: "Learn about Sitemaps"
				})
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Google" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developers.google.com/search/docs/advanced/crawling/overview",
					children: "Overview of crawling and indexing topics"
				})
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
export { toc as a, structuredData as i, _07_xml_sitemaps_exports as n, frontmatter as r, MDXContent as t };
