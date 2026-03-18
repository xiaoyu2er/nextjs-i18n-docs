import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/31-custom-reporting-g2RVSGl3.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _31_custom_reporting_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Custom Reporting",
	"image": "https://nextjs.org/api/learn-og?title=Custom%20Reporting&amp;chapter=31",
	"headline": "SEO: Custom Reporting"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "It is also possible to use the built-in relayer Next.js Speed Insights uses and send the data to your own service or push them to Google Analytics."
		},
		{
			"heading": void 0,
			"content": "Let's look at how we might add that now. We can add it to the demo app we have been optimizing."
		},
		{
			"heading": void 0,
			"content": "We will use a `console.log` to look at the metrics in real time."
		},
		{
			"heading": void 0,
			"content": "To do this we can leverage the `reportWebVitals` function provided by Next.js"
		},
		{
			"heading": void 0,
			"content": "**Note:** This is NOT necessary if you’ve just finished the previous lessons."
		},
		{
			"heading": void 0,
			"content": "Open `pages/\\_app.js` and export the following function:"
		},
		{
			"heading": void 0,
			"content": "Then build and start your application:"
		},
		{
			"heading": void 0,
			"content": "If you open up Chrome, you will see the metrics inside the DevTools console. You will also notice that **FID** will only trigger once you interact with the page."
		},
		{
			"heading": "further-reading",
			"content": "Next.js: Measuring Performance"
		}
	],
	"headings": [{
		"id": "further-reading",
		"content": "Further Reading"
	}]
};
var toc = [{
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "It is also possible to use the built-in relayer Next.js Speed Insights uses and send the data to your own service or push them to Google Analytics." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Let's look at how we might add that now. We can add it to the demo app we have been optimizing." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We will use a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "console.log" }),
			" to look at the metrics in real time."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To do this we can leverage the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "reportWebVitals" }),
			" function provided by Next.js"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }), " This is NOT necessary if you’ve just finished the previous lessons."] }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "npx create-next-app@latest nextjs-lighthouse --use-npm --example \"https://github.com/vercel/next-learn/tree/main/seo\"" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Open ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/\\_app.js" }),
			" and export the following function:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export function reportWebVitals(metric) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  console.log(metric);" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Then build and start your application:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "npm run build && npm run start" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you open up Chrome, you will see the metrics inside the DevTools console. You will also notice that ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "FID" }),
			" will only trigger once you interact with the page."
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
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Next.js: ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/advanced-features/measuring-performance",
				children: "Measuring Performance"
			})] }),
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
export { toc as a, structuredData as i, _31_custom_reporting_exports as n, frontmatter as r, MDXContent as t };
