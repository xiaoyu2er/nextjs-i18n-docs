import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/39-api-routes-creating-api-routes-DUlvPM_q.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _39_api_routes_creating_api_routes_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Creating API Routes",
	"image": "https://nextjs.org/api/learn-og?title=Creating%20API%20Routes&amp;chapter=39",
	"headline": "Pages Router: Creating API Routes"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "API Routes let you create an API endpoint inside a Next.js app. You can do so by creating a **function** inside the `pages/api` directory that has the following format:"
		},
		{
			"heading": void 0,
			"content": "> Learn more about the request handler above in the API Routes documentation."
		},
		{
			"heading": void 0,
			"content": "They can be deployed as Serverless Functions (also known as Lambdas)."
		},
		{
			"heading": "creating-a-simple-api-endpoint",
			"content": "Let’s try it out. Create a file called `hello.js` in `pages/api` with the following code:"
		},
		{
			"heading": "creating-a-simple-api-endpoint",
			"content": "Try accessing it at http\\://localhost:3000/api/hello. You should see `{\"text\":\"Hello\"}`. Note that:"
		},
		{
			"heading": "creating-a-simple-api-endpoint",
			"content": "`req` is an instance of http.IncomingMessage, plus some pre-built middlewares."
		},
		{
			"heading": "creating-a-simple-api-endpoint",
			"content": "`res` is an instance of http.ServerResponse, plus some helper functions."
		},
		{
			"heading": "creating-a-simple-api-endpoint",
			"content": "That’s it! Before we wrap up this lesson, let’s talk about some tips for using API Routes on the next page."
		}
	],
	"headings": [{
		"id": "creating-a-simple-api-endpoint",
		"content": "Creating a simple API endpoint"
	}]
};
var toc = [{
	depth: 3,
	url: "#creating-a-simple-api-endpoint",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#creating-a-simple-api-endpoint",
		children: "Creating a simple API endpoint"
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-routes/introduction",
				children: "API Routes"
			}),
			" let you create an API endpoint inside a Next.js app. You can do so by creating a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "function" }),
			" inside the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/api" }),
			" directory that has the following format:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// req = HTTP incoming message, res = HTTP server response" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function handler(req, res) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // ..." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Learn more about the request handler above in the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/api-routes/introduction",
					children: "API Routes documentation"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "They can be deployed as Serverless Functions (also known as Lambdas)." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "creating-a-simple-api-endpoint",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#creating-a-simple-api-endpoint",
				children: "Creating a simple API endpoint"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Let’s try it out. Create a file called ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "hello.js" }),
			" in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/api" }),
			" with the following code:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function handler(req, res) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  res.status(200).json({ text: 'Hello' });" })
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
			"Try accessing it at ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://localhost:3000/api/hello",
				children: "http://localhost:3000/api/hello"
			}),
			". You should see ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "{\"text\":\"Hello\"}" }),
			". Note that:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "req" }),
				" is an instance of ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nodejs.org/api/http.html#http_class_http_incomingmessage",
					children: "http.IncomingMessage"
				}),
				", plus some pre-built ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/api-routes/api-middlewares",
					children: "middlewares"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "res" }),
				" is an instance of ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nodejs.org/api/http.html#http_class_http_serverresponse",
					children: "http.ServerResponse"
				}),
				", plus some ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/api-routes/response-helpers",
					children: "helper functions"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"That’s it! Before we wrap up this lesson, let’s talk about some tips for using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-routes/introduction",
				children: "API Routes"
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
export { toc as a, structuredData as i, _39_api_routes_creating_api_routes_exports as n, frontmatter as r, MDXContent as t };
