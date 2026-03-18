import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/05-status-codes-CZaJGEij.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _05_status_codes_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "What are HTTP Status Codes?",
	"image": "https://nextjs.org/api/learn-og?title=What%20are%20HTTP%20Status%20Codes?&amp;chapter=5",
	"headline": "SEO: What are HTTP Status Codes?"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "HTTP response status codes indicate whether a specific HTTP request has been successfully completed. There are many status codes, but only a handful are meaningful in an SEO context."
		},
		{
			"heading": void 0,
			"content": "Let's take a look at them now."
		},
		{
			"heading": "200",
			"content": "The `HTTP 200 OK` success status response code indicates that the request has succeeded."
		},
		{
			"heading": "200",
			"content": "In order for a page to be indexed on Google it must return status code `200`. This is what you typically want to look for in your pages in order for them to receive organic traffic. This is the default code that will be set when Next.js renders a page successfully."
		},
		{
			"heading": "301308",
			"content": "The `HTTP 301 Moved Permanently` redirect status response code indicates that the resource requested has been definitively moved to the destination URL."
		},
		{
			"heading": "301308",
			"content": "This is a permanent redirect. In general, this is the most widely used redirect type."
		},
		{
			"heading": "301308",
			"content": "Redirects can be used for a variety of reasons, but the main one is to indicate that a URL has been moved from point A to point B. Redirects are needed to ensure that, if a content is moved from one place to the other, you do not lose current and potential clients and that the bots can continue to index your site."
		},
		{
			"heading": "301308",
			"content": "**Note**: Next.js permanent redirects use 308 by default instead of 301 as it is the newer version and considered the better option."
		},
		{
			"heading": "301308",
			"content": "The main difference between the two status codes is that a `301` allows for changing the request method from `POST` to `GET`, whereas a `308` does not."
		},
		{
			"heading": "301308",
			"content": "You can trigger a `308` redirect in Next.js by returning a redirect instead of props in the `getStaticProps()` function."
		},
		{
			"heading": "301308",
			"content": "You can also use the `permanent: true` key in redirects set in `next.config.js`."
		},
		{
			"heading": "302",
			"content": "The `HTTP 302 Found` redirect status response code indicates that the resource requested has been temporarily moved to the destination URL."
		},
		{
			"heading": "302",
			"content": "In most cases, `302` redirects should be `301` redirects. This may not be the case if you are redirecting users temporarily to a certain page (e.g. a promotion page) or if you are redirecting users based on location."
		},
		{
			"heading": "404",
			"content": "The `HTTP 404 Not Found` client error response code indicates that the server can't find the requested resource."
		},
		{
			"heading": "404",
			"content": "As noted above, pages that are moved should be redirected with a `HTTP 301` status code to the new location. When this doesn't happen, URLs may return a `404` status code. `404` Status Codes are not necessarily bad by default, as it's the desired outcome if a user happens to visit a URL that doesn't exist, but they shouldn't be a frequent error within your pages as it could lead to lackluster search rankings."
		},
		{
			"heading": "404",
			"content": "Next.js will automatically return a `404` status code for URLs that do not exist in your application."
		},
		{
			"heading": "404",
			"content": "In some cases, you might also want to return a `404` status code from page. You can do this by returning the following in place of props:"
		},
		{
			"heading": "404",
			"content": "You can create a custom 404 page that is statically generated at build time by creating `pages/404.js`."
		},
		{
			"heading": "404",
			"content": "Example:"
		},
		{
			"heading": "410",
			"content": "The `HTTP 410 Gone` client error response code indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent."
		},
		{
			"heading": "410",
			"content": "This is not used very often, but you might want to look for this status code if you are deleting content on your website that won't exist any more."
		},
		{
			"heading": "410",
			"content": "Examples where a `HTTP 410 Gone` might be wise to use include:"
		},
		{
			"heading": "410",
			"content": "**E-Commerce**: Products permanently removed from inventory."
		},
		{
			"heading": "410",
			"content": "**Forum**: Threads that have been deleted by the user."
		},
		{
			"heading": "410",
			"content": "**Blog**: Blog post removed from site."
		},
		{
			"heading": "410",
			"content": "This status code informs bots that they should never return to crawl this content."
		},
		{
			"heading": "500",
			"content": "The `HTTP 500 Internal Server Error` response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request."
		},
		{
			"heading": "500",
			"content": "Next.js will automatically return a `500` status code for an unexpected application error. You can create a custom `500` error page that is statically generated at build time by creating `pages/500.js`."
		},
		{
			"heading": "500",
			"content": "Example:"
		},
		{
			"heading": "503",
			"content": "The `HTTP 503 Service Unavailable` server error response code indicates that the server is not ready to handle the request."
		},
		{
			"heading": "503",
			"content": "It's recommended to return this status code when your website is down and you predict that the website will be down by an extended period of time. This prevents losing rankings on a long-term basis."
		}
	],
	"headings": [
		{
			"id": "200",
			"content": "200"
		},
		{
			"id": "301308",
			"content": "301/308"
		},
		{
			"id": "302",
			"content": "302"
		},
		{
			"id": "404",
			"content": "404"
		},
		{
			"id": "410",
			"content": "410"
		},
		{
			"id": "500",
			"content": "500"
		},
		{
			"id": "503",
			"content": "503"
		}
	]
};
var toc = [
	{
		depth: 3,
		url: "#200",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#200",
			children: "200"
		}) })
	},
	{
		depth: 3,
		url: "#301308",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#301308",
			children: "301/308"
		}) })
	},
	{
		depth: 3,
		url: "#302",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#302",
			children: "302"
		}) })
	},
	{
		depth: 3,
		url: "#404",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#404",
			children: "404"
		}) })
	},
	{
		depth: 3,
		url: "#410",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#410",
			children: "410"
		}) })
	},
	{
		depth: 3,
		url: "#500",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#500",
			children: "500"
		}) })
	},
	{
		depth: 3,
		url: "#503",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#503",
			children: "503"
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
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://developer.mozilla.org/docs/Web/HTTP/Status",
			children: "HTTP response status codes"
		}), " indicate whether a specific HTTP request has been successfully completed. There are many status codes, but only a handful are meaningful in an SEO context."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Let's take a look at them now." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "200",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#200",
				children: "200"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/HTTP/Status/200",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "HTTP 200 OK" })
			}),
			" success status response code indicates that the request has succeeded."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In order for a page to be indexed on Google it must return status code ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "200" }),
			". This is what you typically want to look for in your pages in order for them to receive organic traffic. This is the default code that will be set when Next.js renders a page successfully."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "301308",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#301308",
				children: "301/308"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/HTTP/Status/301",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "HTTP 301 Moved Permanently" })
			}),
			" redirect status response code indicates that the resource requested has been definitively moved to the destination URL."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This is a permanent redirect. In general, this is the most widely used redirect type." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Redirects can be used for a variety of reasons, but the main one is to indicate that a URL has been moved from point A to point B. Redirects are needed to ensure that, if a content is moved from one place to the other, you do not lose current and potential clients and that the bots can continue to index your site." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note" }),
			": Next.js ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-reference/next.config.js/redirects",
				children: "permanent redirects"
			}),
			" use 308 by default instead of 301 as it is the newer version and considered the better option."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The main difference between the two status codes is that a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "301" }),
			" allows for changing the request method from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "POST" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }),
			", whereas a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "308" }),
			" does not."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can trigger a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "308" }),
			" redirect in Next.js by returning a redirect instead of props in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps()" }),
			" function."
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "//  pages/about.js" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function getStaticProps(context) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    redirect: {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      destination: '/'," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      permanent: true, // triggers 308" })
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
			"You can also use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "permanent: true" }),
			" key in redirects set in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			"."
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "//next.config.js" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "module.exports = {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  async redirects() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    return [" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        source: '/about'," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        destination: '/'," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        permanent: true, // triggers 308" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      }," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    ];" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  }," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "};" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "302",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#302",
				children: "302"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/HTTP/Status/302",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "HTTP 302 Found" })
			}),
			" redirect status response code indicates that the resource requested has been temporarily moved to the destination URL."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In most cases, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "302" }),
			" redirects should be ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "301" }),
			" redirects. This may not be the case if you are redirecting users temporarily to a certain page (e.g. a promotion page) or if you are redirecting users based on location."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "404",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#404",
				children: "404"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/HTTP/Status/404",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "HTTP 404 Not Found" })
			}),
			" client error response code indicates that the server can't find the requested resource."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As noted above, pages that are moved should be redirected with a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "HTTP 301" }),
			" status code to the new location. When this doesn't happen, URLs may return a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "404" }),
			" status code. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "404" }),
			" Status Codes are not necessarily bad by default, as it's the desired outcome if a user happens to visit a URL that doesn't exist, but they shouldn't be a frequent error within your pages as it could lead to lackluster search rankings."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js will automatically return a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "404" }),
			" status code for URLs that do not exist in your application."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In some cases, you might also want to return a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "404" }),
			" status code from page. You can do this by returning the following in place of props:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function getStaticProps(context) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    notFound: true, // triggers 404" })
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
			"You can ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/advanced-features/custom-error-page#404-page",
				children: "create a custom 404 page"
			}),
			" that is statically generated at build time by creating ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/404.js" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Example:" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// pages/404.js" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function Custom404() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return <h1>404 - Page Not Found</h1>;" })
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
			id: "410",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#410",
				children: "410"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/HTTP/Status/410",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "HTTP 410 Gone" })
			}),
			" client error response code indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This is not used very often, but you might want to look for this status code if you are deleting content on your website that won't exist any more." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Examples where a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "HTTP 410 Gone" }),
			" might be wise to use include:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "E-Commerce" }), ": Products permanently removed from inventory."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Forum" }), ": Threads that have been deleted by the user."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Blog" }), ": Blog post removed from site."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This status code informs bots that they should never return to crawl this content." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "500",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#500",
				children: "500"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/HTTP/Status/500",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "HTTP 500 Internal Server Error" })
			}),
			" response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js will automatically return a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "500" }),
			" status code for an unexpected application error. You can ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/advanced-features/custom-error-page#500-page",
				children: [
					"create a custom ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "500" }),
					" error page"
				]
			}),
			" that is statically generated at build time by creating ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/500.js" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Example:" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// pages/500.js" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function Custom500() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return <h1>500 - Server-side error occurred</h1>;" })
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
			id: "503",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#503",
				children: "503"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/HTTP/Status/503",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "HTTP 503 Service Unavailable" })
			}),
			" server error response code indicates that the server is not ready to handle the request."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "It's recommended to return this status code when your website is down and you predict that the website will be down by an extended period of time. This prevents losing rankings on a long-term basis." })
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
export { toc as a, structuredData as i, _05_status_codes_exports as n, frontmatter as r, MDXContent as t };
