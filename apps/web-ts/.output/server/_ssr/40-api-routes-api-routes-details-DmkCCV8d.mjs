import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/40-api-routes-api-routes-details-DmkCCV8d.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _40_api_routes_api_routes_details_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "API Routes Details",
	"image": "https://nextjs.org/api/learn-og?title=API%20Routes%20Details&amp;chapter=40",
	"headline": "Pages Router: API Routes Details"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Here is some essential information you should know about API Routes."
		},
		{
			"heading": "do-not-fetch-an-api-route-from-getstaticprops-or-getstaticpaths",
			"content": "You should **not** fetch an API Route from `getStaticProps` or `getStaticPaths`. Instead, write your server-side code directly in `getStaticProps` or `getStaticPaths` (or call a helper function)."
		},
		{
			"heading": "do-not-fetch-an-api-route-from-getstaticprops-or-getstaticpaths",
			"content": "Here’s why: `getStaticProps` and `getStaticPaths` run only on the server-side and will never run on the client-side. Moreover, these functions will not be included in the JS bundle for the browser. That means you can write code such as direct database queries without sending them to browsers. Read the Writing Server-Side code documentation to learn more."
		},
		{
			"heading": "a-good-use-case-handling-form-input",
			"content": "A good use case for API Routes is handling form input. For example, you can create a form on your page and have it send a `POST` request to your API Route. You can then write code to directly save it to your database. The API Route code will not be part of your client bundle, so you can safely write server-side code."
		},
		{
			"heading": "preview-mode",
			"content": "Static Generation is useful when your pages fetch data from a headless CMS. However, it’s not ideal when you’re writing a draft on your headless CMS and want to **preview** the draft immediately on your page. You’d want Next.js to render these pages at **request time** instead of build time and fetch the draft content instead of the published content. You’d want Next.js to bypass Static Generation only for this specific case."
		},
		{
			"heading": "preview-mode",
			"content": "Next.js has a feature called **Preview Mode** to solve the problem above, and it utilizes API Routes. To learn more about it take a look at our Preview Mode documentation."
		},
		{
			"heading": "dynamic-api-routes",
			"content": "API Routes can be dynamic, just like regular pages. Take a look at our Dynamic API Routes documentation to learn more."
		},
		{
			"heading": "thats-it",
			"content": "In the next and final basic lesson, we’ll talk about how to deploy your Next.js app to production."
		}
	],
	"headings": [
		{
			"id": "do-not-fetch-an-api-route-from-getstaticprops-or-getstaticpaths",
			"content": "Do Not Fetch an API Route from `getStaticProps` or `getStaticPaths`"
		},
		{
			"id": "a-good-use-case-handling-form-input",
			"content": "A Good Use Case: Handling Form Input"
		},
		{
			"id": "preview-mode",
			"content": "Preview Mode"
		},
		{
			"id": "dynamic-api-routes",
			"content": "Dynamic API Routes"
		},
		{
			"id": "thats-it",
			"content": "That’s It!"
		}
	]
};
var toc = [
	{
		depth: 3,
		url: "#do-not-fetch-an-api-route-from-getstaticprops-or-getstaticpaths",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#do-not-fetch-an-api-route-from-getstaticprops-or-getstaticpaths",
			children: [
				"Do Not Fetch an API Route from ",
				(0, import_jsx_runtime.jsx)("code", { children: "getStaticProps" }),
				" or ",
				(0, import_jsx_runtime.jsx)("code", { children: "getStaticPaths" })
			]
		}) })
	},
	{
		depth: 3,
		url: "#a-good-use-case-handling-form-input",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#a-good-use-case-handling-form-input",
			children: "A Good Use Case: Handling Form Input"
		}) })
	},
	{
		depth: 3,
		url: "#preview-mode",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#preview-mode",
			children: "Preview Mode"
		}) })
	},
	{
		depth: 3,
		url: "#dynamic-api-routes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#dynamic-api-routes",
			children: "Dynamic API Routes"
		}) })
	},
	{
		depth: 3,
		url: "#thats-it",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#thats-it",
			children: "That’s It!"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h3: "h3",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Here is some essential information you should know about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-routes/introduction",
				children: "API Routes"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "do-not-fetch-an-api-route-from-getstaticprops-or-getstaticpaths",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#do-not-fetch-an-api-route-from-getstaticprops-or-getstaticpaths",
				children: [
					"Do Not Fetch an API Route from ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
					" or ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
				]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You should ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "not" }),
			" fetch an API Route from ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticpaths-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
			}),
			". Instead, write your server-side code directly in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticpaths-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
			}),
			" (or call a helper function)."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Here’s why: ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticpaths-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
			}),
			" run only on the server-side and will never run on the client-side. Moreover, these functions will not be included in the JS bundle for the browser. That means you can write code such as direct database queries without sending them to browsers. Read the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching/get-static-props#write-server-side-code-directly",
				children: "Writing Server-Side code"
			}),
			" documentation to learn more."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "a-good-use-case-handling-form-input",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#a-good-use-case-handling-form-input",
				children: "A Good Use Case: Handling Form Input"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A good use case for API Routes is handling form input. For example, you can create a form on your page and have it send a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "POST" }),
			" request to your API Route. You can then write code to directly save it to your database. The API Route code will not be part of your client bundle, so you can safely write server-side code."
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const email = req.body.email;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // Then save email to your database, etc..." })
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
			id: "preview-mode",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#preview-mode",
				children: "Preview Mode"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages#static-generation-recommended",
				children: "Static Generation"
			}),
			" is useful when your pages fetch data from a headless CMS. However, it’s not ideal when you’re writing a draft on your headless CMS and want to ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "preview" }),
			" the draft immediately on your page. You’d want Next.js to render these pages at ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "request time" }),
			" instead of build time and fetch the draft content instead of the published content. You’d want Next.js to bypass Static Generation only for this specific case."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js has a feature called ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Preview Mode" }),
			" to solve the problem above, and it utilizes ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-routes/introduction",
				children: "API Routes"
			}),
			". To learn more about it take a look at our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/advanced-features/preview-mode",
				children: "Preview Mode"
			}),
			" documentation."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "dynamic-api-routes",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#dynamic-api-routes",
				children: "Dynamic API Routes"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"API Routes can be dynamic, just like regular pages. Take a look at our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-routes/dynamic-api-routes",
				children: "Dynamic API Routes"
			}),
			" documentation to learn more."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "thats-it",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#thats-it",
				children: "That’s It!"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In the next and final basic lesson, we’ll talk about how to deploy your Next.js app to production." })
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
export { toc as a, structuredData as i, _40_api_routes_api_routes_details_exports as n, frontmatter as r, MDXContent as t };
