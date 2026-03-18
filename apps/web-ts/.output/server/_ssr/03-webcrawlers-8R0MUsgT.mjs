import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/03-webcrawlers-8R0MUsgT.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _03_webcrawlers_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "What are Web Crawlers?",
	"image": "https://nextjs.org/api/learn-og?title=What%20are%20Web%20Crawlers?&amp;chapter=3",
	"headline": "SEO: What are Web Crawlers?"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "In order for your website to appear in search results, Google (as well as other search engines such as Bing, Yandex, Baidu, Naver, Yahoo or DuckDuckGo) use web crawlers to navigate the website to discover websites and its web pages."
		},
		{
			"heading": void 0,
			"content": "Different search engines have different market shares in each country."
		},
		{
			"heading": void 0,
			"content": "In this guide we cover Google, which is the biggest search engine in most countries. That being said, you might want to check other search engines and their guidelines, especially if your target customers are in China, Russia, Japan or South Korea."
		},
		{
			"heading": void 0,
			"content": "While there are some differences when it comes to Ranking and Rendering, most search engines work in a very similar way when it comes to Crawling and Indexing."
		},
		{
			"heading": void 0,
			"content": "Web crawlers are a type of bot that emulate users and navigate through links found on the websites to index the pages. Web crawlers identify themselves using custom user-agents. Google has several web crawlers, but the ones that are used more often are **Googlebot Desktop** and **Googlebot Smartphone**."
		},
		{
			"heading": "how-does-googlebot-work",
			"content": "The journey the Googlebot makes to index webpages"
		},
		{
			"heading": "how-does-googlebot-work",
			"content": "A general overview of the process can be the following:"
		},
		{
			"heading": "how-does-googlebot-work",
			"content": "**Find URLs**: Google sources URLs from many places, including Google Search Console, links between websites, or XML sitemaps."
		},
		{
			"heading": "how-does-googlebot-work",
			"content": "**Add to Crawl Queue**: These URLs are added to the Crawl Queue for the Googlebot to process. URLs in the Crawl Queue usually last seconds there, but it can be up to a few days depending on the case, especially if the pages need to be rendered, indexed, or – if the URL is already indexed – refreshed. The pages will then enter the Render Queue."
		},
		{
			"heading": "how-does-googlebot-work",
			"content": "**HTTP Request**: The crawler makes an HTTP request to get the headers and acts according to the returned status code:"
		},
		{
			"heading": "how-does-googlebot-work",
			"content": "**200**: It crawls and parses the HTML."
		},
		{
			"heading": "how-does-googlebot-work",
			"content": "**30X**: It follows the redirects."
		},
		{
			"heading": "how-does-googlebot-work",
			"content": "**40X**: It notes the error and does not load the HTML."
		},
		{
			"heading": "how-does-googlebot-work",
			"content": "**50X**: It may come back later to check if the status code has changed."
		},
		{
			"heading": "how-does-googlebot-work",
			"content": "**Render Queue**: The different services and components of the search system process the HTML and parse the content. If the page has some JavaScript client-side based content, the URLs might be added to a Render Queue. Render Queue is more costly for Google as it needs to use more resources to render JavaScript and therefore URLs rendered are a smaller percentage over the total pages out there on the internet. Some other search engines might not have the same rendering capacity as Google, and this is where Next.js can help with your rendering strategy."
		},
		{
			"heading": "how-does-googlebot-work",
			"content": "**Ready to be indexed**: If all criteria are met, the pages may be eligible to be indexed and shown in search results."
		},
		{
			"heading": "how-does-googlebot-work",
			"content": "In the next few sections, we will take a deep dive into each of the main components of a search system's processes: crawling and indexing, and rendering and ranking."
		},
		{
			"heading": "further-reading",
			"content": "**Google**: SEO Starter Guide"
		},
		{
			"heading": "further-reading",
			"content": "**MDN**: MDN: User-Agents"
		}
	],
	"headings": [{
		"id": "how-does-googlebot-work",
		"content": "How Does Googlebot Work?"
	}, {
		"id": "further-reading",
		"content": "Further Reading"
	}]
};
var toc = [{
	depth: 3,
	url: "#how-does-googlebot-work",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#how-does-googlebot-work",
		children: "How Does Googlebot Work?"
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
		h3: "h3",
		img: "img",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In order for your website to appear in search results, Google (as well as other search engines such as Bing, Yandex, Baidu, Naver, Yahoo or DuckDuckGo) use web crawlers to navigate the website to discover websites and its web pages." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Different search engines have different ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://gs.statcounter.com/search-engine-market-share",
				children: "market shares"
			}),
			" in each country."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In this guide we cover Google, which is the biggest search engine in most countries. That being said, you might want to check other search engines and their guidelines, especially if your target customers are in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://gs.statcounter.com/search-engine-market-share/all/china",
				children: "China"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://gs.statcounter.com/search-engine-market-share/all/russian-federation",
				children: "Russia"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://gs.statcounter.com/search-engine-market-share/all/japan",
				children: "Japan"
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://gs.statcounter.com/search-engine-market-share/all/south-korea",
				children: "South Korea"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "While there are some differences when it comes to Ranking and Rendering, most search engines work in a very similar way when it comes to Crawling and Indexing." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Web crawlers are a type of bot that emulate users and navigate through links found on the websites to index the pages. Web crawlers identify themselves using custom ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/HTTP/Headers/User-Agent",
				children: "user-agents"
			}),
			". Google ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers",
				children: "has several web crawlers"
			}),
			", but the ones that are used more often are ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Googlebot Desktop" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Googlebot Smartphone" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "how-does-googlebot-work",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#how-does-googlebot-work",
				children: "How Does Googlebot Work?"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/seo/googlebot.png",
			alt: "Googlebot Flow Chart"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The journey the Googlebot makes to index webpages" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "A general overview of the process can be the following:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Find URLs" }),
				": Google sources URLs from many places, including ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://search.google.com/search-console",
					children: "Google Search Console"
				}),
				", links between websites, or ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developers.google.com/search/docs/advanced/sitemaps/overview",
					children: "XML sitemaps"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Add to Crawl Queue" }),
				": These URLs are added to the Crawl Queue for the Googlebot to process. URLs in the Crawl Queue usually last seconds there, but it can be up to a few days depending on the case, especially if the pages need to be rendered, indexed, or – if the URL is already indexed – refreshed. The pages will then enter the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/learn/seo/rendering-and-ranking",
					children: "Render Queue"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "HTTP Request" }),
				": The crawler makes an HTTP request to get the headers and acts according to the returned status code:",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "200" }), ": It crawls and parses the HTML."] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "30X" }), ": It follows the redirects."] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "40X" }), ": It notes the error and does not load the HTML."] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "50X" }), ": It may come back later to check if the status code has changed."] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Render Queue" }), ": The different services and components of the search system process the HTML and parse the content. If the page has some JavaScript client-side based content, the URLs might be added to a Render Queue. Render Queue is more costly for Google as it needs to use more resources to render JavaScript and therefore URLs rendered are a smaller percentage over the total pages out there on the internet. Some other search engines might not have the same rendering capacity as Google, and this is where Next.js can help with your rendering strategy."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Ready to be indexed" }), ": If all criteria are met, the pages may be eligible to be indexed and shown in search results."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In the next few sections, we will take a deep dive into each of the main components of a search system's processes: ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/learn/seo/crawling-and-indexing",
				children: "crawling and indexing"
			}),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/learn/seo/rendering-and-ranking",
				children: "rendering and ranking"
			}),
			"."
		] }),
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
					href: "https://developers.google.com/search/docs/beginner/seo-starter-guide",
					children: "SEO Starter Guide"
				})
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "MDN" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developer.mozilla.org/docs/Web/HTTP/Headers/User-Agent",
					children: "MDN: User-Agents"
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
export { toc as a, structuredData as i, _03_webcrawlers_exports as n, frontmatter as r, MDXContent as t };
