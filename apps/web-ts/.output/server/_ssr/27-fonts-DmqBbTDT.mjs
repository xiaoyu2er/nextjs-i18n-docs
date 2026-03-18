import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/27-fonts-DmqBbTDT.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _27_fonts_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Optimizing Fonts",
	"image": "https://nextjs.org/api/learn-og?title=Optimizing%20Fonts&amp;chapter=27",
	"headline": "SEO: Optimizing Fonts"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "82% of web pages for desktop use web fonts. Custom fonts are important for the branding, design, and cross-browser/device consistency of your site. However, using a web font should not come at the cost of performance."
		},
		{
			"heading": void 0,
			"content": "Next.js has built-in Automatic Webfont Optimization that inlines font CSS at build time, eliminating an extra round trip to fetch font declarations. This results in improvements to First Contentful Paint (FCP) and Largest Contentful Paint (LCP)."
		},
		{
			"heading": void 0,
			"content": "For example, here is the before and after of Next.js optimizing your font."
		},
		{
			"heading": void 0,
			"content": "Before optimizing, an extra network request is needed:"
		},
		{
			"heading": void 0,
			"content": "After optimizing, Next.js inlines the font CSS for you:"
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		p: "p",
		pre: "pre",
		span: "span",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://almanac.httparchive.org/en/2020/fonts",
			children: "82% of web pages for desktop"
		}), " use web fonts. Custom fonts are important for the branding, design, and cross-browser/device consistency of your site. However, using a web font should not come at the cost of performance."] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js has built-in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/font-optimization",
				children: "Automatic Webfont Optimization"
			}),
			" that inlines font CSS at build time, eliminating an extra round trip to fetch font declarations. This results in improvements to First Contentful Paint (FCP) and Largest Contentful Paint (LCP)."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For example, here is the before and after of Next.js optimizing your font." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Before optimizing, an extra network request is needed:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<link href=\"https://fonts.googleapis.com/css2?family=Inter\" rel=\"stylesheet\" />" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "After optimizing, Next.js inlines the font CSS for you:" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<style data-href=\"https://fonts.googleapis.com/css2?family=Inter\">" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  @font-face{font-family:'Inter';font-style:normal; }" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "</style>" })
				})
			] })
		}) })
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
export { toc as a, structuredData as i, _27_fonts_exports as n, frontmatter as r, MDXContent as t };
