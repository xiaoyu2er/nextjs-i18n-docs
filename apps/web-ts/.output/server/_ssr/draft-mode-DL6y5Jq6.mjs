import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/draft-mode-DL6y5Jq6.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var draft_mode_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "How to preview content with Draft Mode in Next.js",
	"description": "Next.js has draft mode to toggle between static and dynamic pages. You can learn how it works with App Router here.",
	"nav_title": "Draft Mode",
	"related": {
		"title": "Next Steps",
		"description": "See the API reference for more information on how to use Draft Mode.",
		"links": ["app/api-reference/functions/draft-mode"]
	}
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "**Draft Mode** allows you to preview draft content from your headless CMS in your Next.js application. This is useful for static pages that are generated at build time as it allows you to switch to dynamic rendering and see the draft changes without having to rebuild your entire site."
		},
		{
			"heading": void 0,
			"content": "This page walks through how to enable and use Draft Mode."
		},
		{
			"heading": "step-1-create-a-route-handler",
			"content": "Create a Route Handler. It can have any name, for example, `app/api/draft/route.ts`."
		},
		{
			"heading": "step-1-create-a-route-handler",
			"content": "Then, import the `draftMode` function and call the `enable()` method."
		},
		{
			"heading": "step-1-create-a-route-handler",
			"content": "This will set a **cookie** to enable draft mode. Subsequent requests containing this cookie will trigger draft mode and change the behavior of statically generated pages."
		},
		{
			"heading": "step-1-create-a-route-handler",
			"content": "You can test this manually by visiting `/api/draft` and looking at your browser’s developer tools. Notice the `Set-Cookie` response header with a cookie named `__prerender_bypass`."
		},
		{
			"heading": "step-2-access-the-route-handler-from-your-headless-cms",
			"content": "> These steps assume that the headless CMS you’re using supports setting **custom draft URLs**. If it doesn’t, you can still use this method to secure your draft URLs, but you’ll need to construct and access the draft URL manually. The specific steps will vary depending on which headless CMS you’re using."
		},
		{
			"heading": "step-2-access-the-route-handler-from-your-headless-cms",
			"content": "To securely access the Route Handler from your headless CMS:"
		},
		{
			"heading": "step-2-access-the-route-handler-from-your-headless-cms",
			"content": "Create a **secret token string** using a token generator of your choice. This secret will only be known by your Next.js app and your headless CMS."
		},
		{
			"heading": "step-2-access-the-route-handler-from-your-headless-cms",
			"content": "If your headless CMS supports setting custom draft URLs, specify a draft URL (this assumes that your Route Handler is located at `app/api/draft/route.ts`). For example:"
		},
		{
			"heading": "step-2-access-the-route-handler-from-your-headless-cms",
			"content": "> * `<your-site>` should be your deployment domain.\n> * `<token>` should be replaced with the secret token you generated.\n> * `<path>` should be the path for the page that you want to view. If you want to view `/posts/one`, then you should use `&slug=/posts/one`.\n>\n> Your headless CMS might allow you to include a variable in the draft URL so that `<path>` can be set dynamically based on the CMS’s data like so: `&slug=/posts/{entry.fields.slug}`"
		},
		{
			"heading": "step-2-access-the-route-handler-from-your-headless-cms",
			"content": "In your Route Handler, check that the secret matches and that the `slug` parameter exists (if not, the request should fail), call `draftMode.enable()` to set the cookie. Then, redirect the browser to the path specified by `slug`:"
		},
		{
			"heading": "step-2-access-the-route-handler-from-your-headless-cms",
			"content": "If it succeeds, then the browser will be redirected to the path you want to view with the draft mode cookie."
		},
		{
			"heading": "step-3-preview-the-draft-content",
			"content": "The next step is to update your page to check the value of `draftMode().isEnabled`."
		},
		{
			"heading": "step-3-preview-the-draft-content",
			"content": "If you request a page which has the cookie set, then data will be fetched at **request time** (instead of at build time)."
		},
		{
			"heading": "step-3-preview-the-draft-content",
			"content": "Furthermore, the value of `isEnabled` will be `true`."
		},
		{
			"heading": "step-3-preview-the-draft-content",
			"content": "If you access the draft Route Handler (with `secret` and `slug`) from your headless CMS or manually using the URL, you should now be able to see the draft content. And, if you update your draft without publishing, you should be able to view the draft."
		},
		{
			"heading": "next-steps",
			"content": "See the API reference for more information on how to use Draft Mode."
		}
	],
	"headings": [
		{
			"id": "step-1-create-a-route-handler",
			"content": "Step 1: Create a Route Handler"
		},
		{
			"id": "step-2-access-the-route-handler-from-your-headless-cms",
			"content": "Step 2: Access the Route Handler from your Headless CMS"
		},
		{
			"id": "step-3-preview-the-draft-content",
			"content": "Step 3: Preview the Draft Content"
		},
		{
			"id": "next-steps",
			"content": "Next Steps"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#step-1-create-a-route-handler",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Step 1: Create a Route Handler" })
	},
	{
		depth: 2,
		url: "#step-2-access-the-route-handler-from-your-headless-cms",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Step 2: Access the Route Handler from your Headless CMS" })
	},
	{
		depth: 2,
		url: "#step-3-preview-the-draft-content",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Step 3: Preview the Draft Content" })
	},
	{
		depth: 2,
		url: "#next-steps",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Next Steps" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger } = _components;
	if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
	if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
	if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
	if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Draft Mode" }),
			" allows you to preview draft content from your headless CMS in your Next.js application. This is useful for static pages that are generated at build time as it allows you to switch to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/getting-started/partial-prerendering#dynamic-rendering",
				children: "dynamic rendering"
			}),
			" and see the draft changes without having to rebuild your entire site."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This page walks through how to enable and use Draft Mode." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "step-1-create-a-route-handler",
			children: "Step 1: Create a Route Handler"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Create a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/route",
				children: "Route Handler"
			}),
			". It can have any name, for example, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app/api/draft/route.ts" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "app/api/draft/route.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "app/api/draft/route.ts",
					children: "app/api/draft/route.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "app/api/draft/route.js",
					children: "app/api/draft/route.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "app/api/draft/route.ts",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
						children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "export"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " async"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " function"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " GET"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: ":"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Request"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ") {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Response"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "''"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ")"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "}"
								})
							})
						] })
					}) })
				}),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "app/api/draft/route.js",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
						children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "export"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " async"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " function"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " GET"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "() {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Response"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "''"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ")"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "}"
								})
							})
						] })
					}) })
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Then, import the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/draft-mode",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "draftMode" })
			}),
			" function and call the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "enable()" }),
			" method."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "app/api/draft/route.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "app/api/draft/route.ts",
					children: "app/api/draft/route.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "app/api/draft/route.js",
					children: "app/api/draft/route.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "app/api/draft/route.ts",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
						children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "import"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " { draftMode } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "from"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'next/headers'"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "export"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " async"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " function"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " GET"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: ":"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Request"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ") {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " draft"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " draftMode"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "  draft."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "enable"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Response"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'Draft mode is enabled'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ")"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "}"
								})
							})
						] })
					}) })
				}),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "app/api/draft/route.js",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
						children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "import"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " { draftMode } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "from"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'next/headers'"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "export"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " async"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " function"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " GET"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ") {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " draft"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " draftMode"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "  draft."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "enable"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Response"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'Draft mode is enabled'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ")"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "}"
								})
							})
						] })
					}) })
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This will set a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "cookie" }),
			" to enable draft mode. Subsequent requests containing this cookie will trigger draft mode and change the behavior of statically generated pages."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can test this manually by visiting ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/api/draft" }),
			" and looking at your browser’s developer tools. Notice the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Set-Cookie" }),
			" response header with a cookie named ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "__prerender_bypass" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "step-2-access-the-route-handler-from-your-headless-cms",
			children: "Step 2: Access the Route Handler from your Headless CMS"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"These steps assume that the headless CMS you’re using supports setting ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "custom draft URLs" }),
				". If it doesn’t, you can still use this method to secure your draft URLs, but you’ll need to construct and access the draft URL manually. The specific steps will vary depending on which headless CMS you’re using."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To securely access the Route Handler from your headless CMS:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Create a ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "secret token string" }),
				" using a token generator of your choice. This secret will only be known by your Next.js app and your headless CMS."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"If your headless CMS supports setting custom draft URLs, specify a draft URL (this assumes that your Route Handler is located at ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app/api/draft/route.ts" }),
				"). For example:"
			] }),
			"\n"
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
			title: "Terminal",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
				className: "line",
				children: [
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "https://"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "<your-site>/api/draft?secret=<token>&slug"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "=<"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: "path"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: ">"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "<your-site>" }), " should be your deployment domain."] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "<token>" }), " should be replaced with the secret token you generated."] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "<path>" }),
					" should be the path for the page that you want to view. If you want to view ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "/posts/one" }),
					", then you should use ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "&slug=/posts/one" }),
					"."
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Your headless CMS might allow you to include a variable in the draft URL so that ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<path>" }),
				" can be set dynamically based on the CMS’s data like so: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "&slug=/posts/{entry.fields.slug}" })
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, {
			start: "3",
			children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"In your Route Handler, check that the secret matches and that the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "slug" }),
					" parameter exists (if not, the request should fail), call ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "draftMode.enable()" }),
					" to set the cookie. Then, redirect the browser to the path specified by ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "slug" }),
					":"
				] }),
				"\n"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "app/api/draft/route.ts",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "app/api/draft/route.ts",
					children: "app/api/draft/route.ts"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "app/api/draft/route.js",
					children: "app/api/draft/route.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "app/api/draft/route.ts",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
						children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "import"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " { draftMode } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "from"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'next/headers'"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "import"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " { redirect } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "from"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'next/navigation'"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "export"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " async"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " function"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " GET"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: ":"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Request"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ") {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // Parse query string parameters"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " { "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "searchParams"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " URL"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(request.url)"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " secret"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " searchParams."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'secret'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ")"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " slug"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " searchParams."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'slug'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ")"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // Check the secret and next parameters"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // This secret should only be known to this Route Handler and the CMS"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  if"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (secret "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "!=="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'MY_SECRET_TOKEN'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ||"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " !"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "slug) {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Response"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'Invalid token'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "401"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " })"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  }"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // Fetch the headless CMS to check if the provided `slug` exists"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // getPostBySlug would implement the required fetching logic to the headless CMS"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " post"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " getPostBySlug"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(slug)"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // If the slug doesn't exist prevent draft mode from being enabled"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  if"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " ("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "!"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "post) {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Response"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'Invalid slug'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "401"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " })"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  }"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // Enable Draft Mode by setting the cookie"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " draft"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " draftMode"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "  draft."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "enable"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // Redirect to the path from the fetched post"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: "  redirect"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(post.slug)"
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "}"
								})
							})
						] })
					}) })
				}),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "app/api/draft/route.js",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
						children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "import"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " { draftMode } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "from"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'next/headers'"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "import"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " { redirect } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "from"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'next/navigation'"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "export"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " async"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " function"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " GET"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "request"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ") {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // Parse query string parameters"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " { "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "searchParams"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " URL"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(request.url)"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " secret"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " searchParams."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'secret'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ")"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " slug"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " searchParams."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "get"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'slug'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ")"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // Check the secret and next parameters"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // This secret should only be known to this Route Handler and the CMS"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  if"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " (secret "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "!=="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'MY_SECRET_TOKEN'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ||"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " !"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "slug) {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Response"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'Invalid token'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "401"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " })"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  }"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // Fetch the headless CMS to check if the provided `slug` exists"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // getPostBySlug would implement the required fetching logic to the headless CMS"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " post"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " getPostBySlug"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(slug)"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // If the slug doesn't exist prevent draft mode from being enabled"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  if"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " ("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "!"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "post) {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "    return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " new"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Response"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "'Invalid slug'"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", { status: "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "401"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " })"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  }"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // Enable Draft Mode by setting the cookie"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " draft"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " draftMode"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "  draft."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "enable"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // Redirect to the path from the fetched post"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: "  redirect"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(post.slug)"
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "}"
								})
							})
						] })
					}) })
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If it succeeds, then the browser will be redirected to the path you want to view with the draft mode cookie." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "step-3-preview-the-draft-content",
			children: "Step 3: Preview the Draft Content"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The next step is to update your page to check the value of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "draftMode().isEnabled" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you request a page which has the cookie set, then data will be fetched at ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "request time" }),
			" (instead of at build time)."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Furthermore, the value of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "isEnabled" }),
			" will be ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "true" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "app/page.tsx",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "app/page.tsx",
					children: "app/page.tsx"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "app/page.js",
					children: "app/page.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "app/page.tsx",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
						children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "// page that fetches data"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "import"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " { draftMode } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "from"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'next/headers'"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "async"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " function"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " getData"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "() {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " { "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "isEnabled"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " draftMode"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " url"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " isEnabled"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "    ?"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " 'https://draft.example.com'"
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "    :"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " 'https://production.example.com'"
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " res"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " fetch"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(url)"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " res."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "}"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "export"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " default"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " async"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " function"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Page"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "() {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " { "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "title"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "desc"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " getData"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "  return"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: " ("
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "main"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "      <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "h1"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">{title}</"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "h1"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "      <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "p"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">{desc}</"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "p"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    </"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "main"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  )"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "}"
								})
							})
						] })
					}) })
				}),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "app/page.js",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
						children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "// page that fetches data"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "import"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " { draftMode } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "from"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'next/headers'"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "async"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " function"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " getData"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "() {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " { "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "isEnabled"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " draftMode"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " url"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " isEnabled"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "    ?"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " 'https://draft.example.com'"
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "    :"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " 'https://production.example.com'"
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " res"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " fetch"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(url)"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " res."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "json"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "}"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "export"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " default"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " async"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " function"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Page"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "() {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " { "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "title"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "desc"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " getData"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "  return"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: " ("
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "main"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "      <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "h1"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">{title}</"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "h1"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "      <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "p"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">{desc}</"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "p"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    </"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "main"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  )"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "}"
								})
							})
						] })
					}) })
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you access the draft Route Handler (with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "secret" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "slug" }),
			") from your headless CMS or manually using the URL, you should now be able to see the draft content. And, if you update your draft without publishing, you should be able to view the draft."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "next-steps",
			children: "Next Steps"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "See the API reference for more information on how to use Draft Mode." })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { toc as a, structuredData as i, draft_mode_exports as n, frontmatter as r, MDXContent as t };
