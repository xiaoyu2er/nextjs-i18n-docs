import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/09-canonical-Cxo8J6Ma.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _09_canonical_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "What are Canonical Tags?",
	"image": "https://nextjs.org/api/learn-og?title=What%20are%20Canonical%20Tags?&amp;chapter=9",
	"headline": "SEO: What are Canonical Tags?"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "A **canonical** URL is the URL of the page that search engines think is most representative from a set of duplicate pages on your site."
		},
		{
			"heading": void 0,
			"content": "While you can directly communicate canonical URLs to search engines, they can also decide to group several URLs without you notifying it. This might happen automatically if Google can find a URL under several different paths."
		},
		{
			"heading": void 0,
			"content": "While Google does a great job at detecting those, their systems work at massive scale and don't cover all edge cases. Canonical tags are an important aspect to cover for your website to ensure great performance."
		},
		{
			"heading": void 0,
			"content": "If Google finds several URLs that have the same content, it might decide to demote them in search results because they can be considered duplicated."
		},
		{
			"heading": void 0,
			"content": "This also happens across domains, if you run two different websites and post the same content in each one, search engines can decide to pick one of them to be ranked, or directly demote both."
		},
		{
			"heading": void 0,
			"content": "This is where canonical tags are extremely useful. They let Google know which URLs are the original source of truth and which are duplicated. Lots of duplicated pages across same or different domains can lead to bad rankings or even penalizations."
		},
		{
			"heading": void 0,
			"content": "Let's imagine that our e-commerce shop allows products to be accessible via example.com/products/phone and example.com/phone."
		},
		{
			"heading": void 0,
			"content": "Both are valid, working URLs, but we use canonical to prevent the detection of duplicate content that we own. If we decided that `https://example.com/products/phone` should be considered for rankings, we would create a canonical tag:"
		},
		{
			"heading": void 0,
			"content": "Canonical tags are fundamental in SEO performance, because not only can you create different URLs, but users or marketing tools can also create them."
		},
		{
			"heading": void 0,
			"content": "Imagine that you are running some marketing campaigns on Google, then Google decides to add some UTM parameters. It's possible that this new, unique URL will be indexed by Googlebot so you want to be sure you are still showing your canonical tags to unify duplicate pages."
		},
		{
			"heading": "further-reading",
			"content": "Google: Consolidate Duplicate URLs"
		},
		{
			"heading": "further-reading",
			"content": "Next.js: i18n Routing"
		}
	],
	"headings": [{
		"id": "example",
		"content": "Example"
	}, {
		"id": "further-reading",
		"content": "Further Reading"
	}]
};
var toc = [{
	depth: 4,
	url: "#example",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#example",
		children: "Example"
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "canonical" }),
			" URL is the URL of the page that search engines think is most representative from a set of duplicate pages on your site."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "While you can directly communicate canonical URLs to search engines, they can also decide to group several URLs without you notifying it. This might happen automatically if Google can find a URL under several different paths." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "While Google does a great job at detecting those, their systems work at massive scale and don't cover all edge cases. Canonical tags are an important aspect to cover for your website to ensure great performance." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If Google finds several URLs that have the same content, it might decide to demote them in search results because they can be considered duplicated." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This also happens across domains, if you run two different websites and post the same content in each one, search engines can decide to pick one of them to be ranked, or directly demote both." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This is where canonical tags are extremely useful. They let Google know which URLs are the original source of truth and which are duplicated. Lots of duplicated pages across same or different domains can lead to bad rankings or even penalizations." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Let's imagine that our e-commerce shop allows products to be accessible via ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://example.com/products/phone",
				children: "example.com/products/phone"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://example.com/phone",
				children: "example.com/phone"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Both are valid, working URLs, but we use canonical to prevent the detection of duplicate content that we own. If we decided that ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "https://example.com/products/phone" }),
			" should be considered for rankings, we would create a canonical tag:"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<link rel=\"canonical\" href=\"https://example.com/products/phone\" />" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Canonical tags are fundamental in SEO performance, because not only can you create different URLs, but users or marketing tools can also create them." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Imagine that you are running some marketing campaigns on Google, then Google decides to add some ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://ga-dev-tools.appspot.com/campaign-url-builder/",
				children: "UTM parameters"
			}),
			". It's possible that this new, unique URL will be indexed by Googlebot so you want to be sure you are still showing your canonical tags to unify duplicate pages."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "example",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#example",
				children: "Example"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        <title>Canonical Tag Example</title>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        <link" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "          rel=\"canonical\"" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "          href=\"https://example.com/blog/original-post\"" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "          key=\"canonical\"" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      </Head>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <p>This post exists on two URLs.</p>" })
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
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls",
				children: "Google: Consolidate Duplicate URLs"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/advanced-features/i18n-routing",
				children: "Next.js: i18n Routing"
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
export { toc as a, structuredData as i, _09_canonical_exports as n, frontmatter as r, MDXContent as t };
