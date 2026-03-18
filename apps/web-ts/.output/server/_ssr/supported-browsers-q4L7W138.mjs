import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/supported-browsers-q4L7W138.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var supported_browsers_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Supported Browsers",
	"description": "Browser support and which JavaScript features are supported by Next.js."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js supports **modern browsers** with zero configuration."
		},
		{
			"heading": void 0,
			"content": "Chrome 64+"
		},
		{
			"heading": void 0,
			"content": "Edge 79+"
		},
		{
			"heading": void 0,
			"content": "Firefox 67+"
		},
		{
			"heading": void 0,
			"content": "Opera 51+"
		},
		{
			"heading": void 0,
			"content": "Safari 12+"
		},
		{
			"heading": "browserslist",
			"content": "If you would like to target specific browsers or features, Next.js supports Browserslist configuration in your `package.json` file. Next.js uses the following Browserslist configuration by default:"
		},
		{
			"heading": "polyfills",
			"content": "We inject widely used polyfills, including:"
		},
		{
			"heading": "polyfills",
			"content": "**fetch()** — Replacing: `whatwg-fetch` and `unfetch`."
		},
		{
			"heading": "polyfills",
			"content": "**URL** — Replacing: the `url` package (Node.js API)."
		},
		{
			"heading": "polyfills",
			"content": "**Object.assign()** — Replacing: `object-assign`, `object.assign`, and `core-js/object/assign`."
		},
		{
			"heading": "polyfills",
			"content": "If any of your dependencies include these polyfills, they’ll be eliminated automatically from the production build to avoid duplication."
		},
		{
			"heading": "polyfills",
			"content": "In addition, to reduce bundle size, Next.js will only load these polyfills for browsers that require them. The majority of the web traffic globally will not download these polyfills."
		},
		{
			"heading": "custom-polyfills",
			"content": "If your own code or any external npm dependencies require features not supported by your target browsers (such as IE 11), you need to add polyfills yourself."
		},
		{
			"heading": "custom-polyfills",
			"content": "In this case, you should add a top-level import for the **specific polyfill** you need in your Custom `<App>` or the individual component."
		},
		{
			"heading": "javascript-language-features",
			"content": "Next.js allows you to use the latest JavaScript features out of the box. In addition to ES6 features, Next.js also supports:"
		},
		{
			"heading": "javascript-language-features",
			"content": "Async/await (ES2017)"
		},
		{
			"heading": "javascript-language-features",
			"content": "Object Rest/Spread Properties (ES2018)"
		},
		{
			"heading": "javascript-language-features",
			"content": "Dynamic `import()` (ES2020)"
		},
		{
			"heading": "javascript-language-features",
			"content": "Optional Chaining (ES2020)"
		},
		{
			"heading": "javascript-language-features",
			"content": "Nullish Coalescing (ES2020)"
		},
		{
			"heading": "javascript-language-features",
			"content": "Class Fields and Static Properties (ES2022)"
		},
		{
			"heading": "javascript-language-features",
			"content": "and more!"
		},
		{
			"heading": "typescript-features",
			"content": "Next.js has built-in TypeScript support. Learn more here."
		},
		{
			"heading": "customizing-babel-config-advanced",
			"content": "You can customize babel configuration. Learn more here."
		}
	],
	"headings": [
		{
			"id": "browserslist",
			"content": "Browserslist"
		},
		{
			"id": "polyfills",
			"content": "Polyfills"
		},
		{
			"id": "custom-polyfills",
			"content": "Custom Polyfills"
		},
		{
			"id": "javascript-language-features",
			"content": "JavaScript Language Features"
		},
		{
			"id": "typescript-features",
			"content": "TypeScript Features"
		},
		{
			"id": "customizing-babel-config-advanced",
			"content": "Customizing Babel Config (Advanced)"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#browserslist",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Browserslist" })
	},
	{
		depth: 2,
		url: "#polyfills",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Polyfills" })
	},
	{
		depth: 3,
		url: "#custom-polyfills",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Custom Polyfills" })
	},
	{
		depth: 2,
		url: "#javascript-language-features",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "JavaScript Language Features" })
	},
	{
		depth: 3,
		url: "#typescript-features",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "TypeScript Features" })
	},
	{
		depth: 3,
		url: "#customizing-babel-config-advanced",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Customizing Babel Config (Advanced)" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
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
			"Next.js supports ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "modern browsers" }),
			" with zero configuration."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Chrome 64+" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Edge 79+" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Firefox 67+" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Opera 51+" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Safari 12+" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "browserslist",
			children: "Browserslist"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you would like to target specific browsers or features, Next.js supports ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://browsersl.ist",
				children: "Browserslist"
			}),
			" configuration in your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "package.json" }),
			" file. Next.js uses the following Browserslist configuration by default:"
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
			title: "package.json",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "{"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "  \"browserslist\""
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ": ["
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: "    \"chrome 64\""
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ","
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: "    \"edge 79\""
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ","
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: "    \"firefox 67\""
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ","
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: "    \"opera 51\""
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ","
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: "    \"safari 12\""
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
						children: "  ]"
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
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "polyfills",
			children: "Polyfills"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We inject ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/blob/canary/packages/next-polyfill-nomodule/src/index.js",
				children: "widely used polyfills"
			}),
			", including:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developer.mozilla.org/docs/Web/API/Fetch_API",
					children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "fetch()" })
				}),
				" — Replacing: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "whatwg-fetch" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "unfetch" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developer.mozilla.org/docs/Web/API/URL",
					children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "URL" })
				}),
				" — Replacing: the ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "https://nodejs.org/api/url.html",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "url" }), " package (Node.js API)"]
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",
					children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Object.assign()" })
				}),
				" — Replacing: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "object-assign" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "object.assign" }),
				", and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "core-js/object/assign" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If any of your dependencies include these polyfills, they’ll be eliminated automatically from the production build to avoid duplication." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In addition, to reduce bundle size, Next.js will only load these polyfills for browsers that require them. The majority of the web traffic globally will not download these polyfills." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "custom-polyfills",
			children: "Custom Polyfills"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If your own code or any external npm dependencies require features not supported by your target browsers (such as IE 11), you need to add polyfills yourself." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In this case, you should add a top-level import for the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "specific polyfill" }),
			" you need in your ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/pages/building-your-application/routing/custom-app",
				children: ["Custom ", (0, import_jsx_runtime.jsx)(_components.code, { children: "<App>" })]
			}),
			" or the individual component."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "javascript-language-features",
			children: "JavaScript Language Features"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js allows you to use the latest JavaScript features out of the box. In addition to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/lukehoban/es6features",
				children: "ES6 features"
			}),
			", Next.js also supports:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/tc39/ecmascript-asyncawait",
				children: "Async/await"
			}), " (ES2017)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/tc39/proposal-object-rest-spread",
				children: "Object Rest/Spread Properties"
			}), " (ES2018)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://github.com/tc39/proposal-dynamic-import",
				children: ["Dynamic ", (0, import_jsx_runtime.jsx)(_components.code, { children: "import()" })]
			}), " (ES2020)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/tc39/proposal-optional-chaining",
				children: "Optional Chaining"
			}), " (ES2020)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/tc39/proposal-nullish-coalescing",
				children: "Nullish Coalescing"
			}), " (ES2020)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/tc39/proposal-class-fields",
					children: "Class Fields"
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/tc39/proposal-static-class-features",
					children: "Static Properties"
				}),
				" (ES2022)"
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "and more!" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "typescript-features",
			children: "TypeScript Features"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js has built-in TypeScript support. ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/config/typescript",
				children: "Learn more here"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "customizing-babel-config-advanced",
			children: "Customizing Babel Config (Advanced)"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can customize babel configuration. ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/guides/babel",
				children: "Learn more here"
			}),
			"."
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
export { toc as a, supported_browsers_exports as i, frontmatter as n, structuredData as r, MDXContent as t };
