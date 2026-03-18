import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/08-metatags-B6vr7I_9.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _08_metatags_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Special Meta Tags for Search Engines",
	"image": "https://nextjs.org/api/learn-og?title=Special%20Meta%20Tags%20for%20Search%20Engines&amp;chapter=8",
	"headline": "SEO: Special Meta Tags for Search Engines"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "**Meta robot tags** are directives that search engines will always respect. Adding these robots tags can make the indexation of your website easier."
		},
		{
			"heading": void 0,
			"content": "There is a difference between directives and suggestions."
		},
		{
			"heading": void 0,
			"content": "**Meta robots tags** or `robots.txt` files are **directives** and will always be obeyed. \\*\\* Canonical tags \\*\\* are **recommendations** that Google can decide to obey or not."
		},
		{
			"heading": void 0,
			"content": "There are many options when it comes to page-level meta tags, but the following are examples commonly associated with SEO:"
		},
		{
			"heading": void 0,
			"content": "The robots tag is probably the most common tag you will see. By default it will have the value `index,follow` so it does not need to specified, `all` is also a valid alternative version:"
		},
		{
			"heading": void 0,
			"content": "By setting a robots tag to `noindex,nofollow` as in the example above, it will indicate to search engines:"
		},
		{
			"heading": void 0,
			"content": "**noindex**: To not show this page in search results. Omitting `noindex` will indicate the page can be indexed and shown in search results. When building a website, you might not want to index certain pages. Common use cases include settings pages, internal search pages, policies, and more."
		},
		{
			"heading": void 0,
			"content": "**nofollow**: To not follow links on this page. Omitting this will allow robots to crawl and follow links on this page. Links found on other pages may enable crawling, so omitting `nofollow` will allow Google to crawl and follow links on this page. Links found on other pages may enable crawling, so if `link A` appears in pages `X` and `Y`, and `X` has a `nofollow` robots tag, but `Y` doesn't, Google may decide to crawl the link."
		},
		{
			"heading": void 0,
			"content": "**Note:** You can see a full list of directives in the Google official documentation."
		},
		{
			"heading": "googlebot-tag",
			"content": "You may also see the `googlebot` tag sometimes. In most cases the `robots` is all you will need. The `googlebot` tag is specific to Google. Use this tag if you want to have a separate rule for Googlebot, and a general one for the rest of the search bots."
		},
		{
			"heading": "googlebot-tag",
			"content": "In the case there is conflicting tags, the more restrictive tag applies."
		},
		{
			"heading": "googlebot-tag",
			"content": "You may be wondering why we need these tags if you can add URLs to your `robots.txt` that you do not want crawled. The meta tag gives you flexibility to mark pages as `noindex` on demand."
		},
		{
			"heading": "googlebot-tag",
			"content": "For example, if you apply filters to a products page and you end up with no results, it would be common practice to `noindex` this page."
		},
		{
			"heading": "googlebot-tag",
			"content": "URLs that are restricted from bots crawling via robots.txt file will never be crawled by Google, but if the rules are added after pages are already indexed, pages might remain indexed. The best way to make sure that a page is not indexed is using the `noindex` tag."
		},
		{
			"heading": "googlebot-tag",
			"content": "**Note:** Google can decide to index a page without crawling it. This is extremely rare, but happens when Google wants a page to fulfill a specific search result and has certainty that the page contains what users expect."
		},
		{
			"heading": "nositelinkssearchbox",
			"content": "When users search for your site, Google Search results sometimes display a search box specific to your site, along with other direct links to your site. This tag tells Google not to show the sitelinks search box."
		},
		{
			"heading": "notranslate",
			"content": "When Google recognizes that the site contents are not in the language that the user is likely to want to read, Google often provides a link to a translation in the search results."
		},
		{
			"heading": "notranslate",
			"content": "In general, this gives you the chance to provide your unique and compelling content to a much larger group of users. However, there may be situations where this is not desired. This meta tag tells Google that you don't want them to provide a translation for this page."
		},
		{
			"heading": "example",
			"content": "Now that we have given a run through of some of the common tags you might come across, here is an example of a page putting some of them to use:"
		},
		{
			"heading": "example",
			"content": "As you can see in the example, we are using next/head which is a built-in component for appending elements to the `head` of a page. To avoid duplicate tags in your `head` you can use the `key` property, which will make sure the tag is only rendered once."
		}
	],
	"headings": [
		{
			"id": "googlebot-tag",
			"content": "Googlebot tag"
		},
		{
			"id": "google-tags",
			"content": "Google tags"
		},
		{
			"id": "nositelinkssearchbox",
			"content": "nositelinkssearchbox"
		},
		{
			"id": "notranslate",
			"content": "notranslate"
		},
		{
			"id": "example",
			"content": "Example"
		}
	]
};
var toc = [
	{
		depth: 3,
		url: "#googlebot-tag",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#googlebot-tag",
			children: "Googlebot tag"
		}) })
	},
	{
		depth: 3,
		url: "#google-tags",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#google-tags",
			children: "Google tags"
		}) })
	},
	{
		depth: 4,
		url: "#nositelinkssearchbox",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#nositelinkssearchbox",
			children: "nositelinkssearchbox"
		}) })
	},
	{
		depth: 4,
		url: "#notranslate",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#notranslate",
			children: "notranslate"
		}) })
	},
	{
		depth: 3,
		url: "#example",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#example",
			children: "Example"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h3: "h3",
		h4: "h4",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Meta robot tags" }), " are directives that search engines will always respect. Adding these robots tags can make the indexation of your website easier."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "There is a difference between directives and suggestions." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Meta robots tags" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/learn/seo/crawling-and-indexing/robots-txt",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "robots.txt" })
			}),
			" files are ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "directives" }),
			" and will always be obeyed. ** Canonical tags ** are ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "recommendations" }),
			" that Google can decide to obey or not."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "There are many options when it comes to page-level meta tags, but the following are examples commonly associated with SEO:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<meta name=\"robots\" content=\"noindex,nofollow\" />" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The robots tag is probably the most common tag you will see. By default it will have the value ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "index,follow" }),
			" so it does not need to specified, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "all" }),
			" is also a valid alternative version:"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<meta name=\"robots\" content=\"all\" />" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"By setting a robots tag to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "noindex,nofollow" }),
			" as in the example above, it will indicate to search engines:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "noindex" }),
				": To not show this page in search results. Omitting ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "noindex" }),
				" will indicate the page can be indexed and shown in search results. When building a website, you might not want to index certain pages. Common use cases include settings pages, internal search pages, policies, and more."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "nofollow" }),
				": To not follow links on this page. Omitting this will allow robots to crawl and follow links on this page. Links found on other pages may enable crawling, so omitting ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "nofollow" }),
				" will allow Google to crawl and follow links on this page. Links found on other pages may enable crawling, so if ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "link A" }),
				" appears in pages ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "X" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Y" }),
				", and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "X" }),
				" has a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "nofollow" }),
				" robots tag, but ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Y" }),
				" doesn't, Google may decide to crawl the link."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }),
			" You can see a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives",
				children: "full list of directives"
			}),
			" in the Google official documentation."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "googlebot-tag",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#googlebot-tag",
				children: "Googlebot tag"
			})
		}),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<meta name=\"googlebot\" content=\"noindex,nofollow\" />" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You may also see the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "googlebot" }),
			" tag sometimes. In most cases the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "robots" }),
			" is all you will need. The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "googlebot" }),
			" tag is specific to Google. Use this tag if you want to have a separate rule for Googlebot, and a general one for the rest of the search bots."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In the case there is conflicting tags, the more restrictive tag applies." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You may be wondering why we need these tags if you can add URLs to your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "robots.txt" }),
			" that you do not want crawled. The meta tag gives you flexibility to mark pages as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "noindex" }),
			" on demand."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, if you apply filters to a products page and you end up with no results, it would be common practice to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "noindex" }),
			" this page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"URLs that are restricted from bots crawling via robots.txt file will never be crawled by Google, but if the rules are added after pages are already indexed, pages might remain indexed. The best way to make sure that a page is not indexed is using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "noindex" }),
			" tag."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }), " Google can decide to index a page without crawling it. This is extremely rare, but happens when Google wants a page to fulfill a specific search result and has certainty that the page contains what users expect."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "google-tags",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#google-tags",
				children: "Google tags"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "nositelinkssearchbox",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nositelinkssearchbox",
				children: "nositelinkssearchbox"
			})
		}),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<meta name=\"google\" content=\"nositelinkssearchbox\" />" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When users search for your site, Google Search results sometimes display a search box specific to your site, along with other direct links to your site. This tag tells Google not to show the sitelinks search box." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "notranslate",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#notranslate",
				children: "notranslate"
			})
		}),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<meta name=\"google\" content=\"notranslate\" />" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When Google recognizes that the site contents are not in the language that the user is likely to want to read, Google often provides a link to a translation in the search results." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In general, this gives you the chance to provide your unique and compelling content to a much larger group of users. However, there may be situations where this is not desired. This meta tag tells Google that you don't want them to provide a translation for this page." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "example",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#example",
				children: "Example"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Now that we have given a run through of some of the common tags you might come across, here is an example of a page putting some of them to use:" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import Head from 'next/head';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "function IndexPage() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return (" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <div>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <Head>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        <title>Meta Tag Example</title>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        <meta name=\"google\" content=\"nositelinkssearchbox\" key=\"sitelinks\" />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        <meta name=\"google\" content=\"notranslate\" key=\"notranslate\" />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      </Head>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <p>Here we show some meta tags off!</p>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    </div>" })
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default IndexPage;" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As you can see in the example, we are using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/api-reference/next/head",
				children: "next/head"
			}),
			" which is a built-in component for appending elements to the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "head" }),
			" of a page. To avoid duplicate tags in your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "head" }),
			" you can use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "key" }),
			" property, which will make sure the tag is only rendered once."
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
export { toc as a, structuredData as i, _08_metatags_exports as n, frontmatter as r, MDXContent as t };
