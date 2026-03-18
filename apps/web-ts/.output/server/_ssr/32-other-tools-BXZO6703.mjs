import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/32-other-tools-BXZO6703.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _32_other_tools_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Other Tools",
	"image": "https://nextjs.org/api/learn-og?title=Other%20Tools&amp;chapter=32",
	"headline": "SEO: Other Tools"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "You can find field data collection in the following tools:"
		},
		{
			"heading": void 0,
			"content": "PageSpeed Insights: Google's Page Speed measurement tool."
		},
		{
			"heading": void 0,
			"content": "Chrome User Experience Report: Field data open-source dataset."
		},
		{
			"heading": void 0,
			"content": "Search Console: Google Search, Core Web Vitals report."
		},
		{
			"heading": void 0,
			"content": "If you are looking for lab data, Google also offers several measurement tools:"
		},
		{
			"heading": void 0,
			"content": "Lighthouse: Google's open-source, automated tool for improving the quality of web pages."
		},
		{
			"heading": void 0,
			"content": "Chrome DevTools: Set of web developer tools built directly into the Google Chrome browser."
		},
		{
			"heading": void 0,
			"content": "Note that for both tools, you will need to use Total Blocking Time (TBT) as an alternative to First Input Delay (FID) since FID can only be measured through field data."
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		li: "li",
		p: "p",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can find field data collection in the following tools:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/speed/pagespeed/insights/",
				children: "PageSpeed Insights"
			}), ": Google's Page Speed measurement tool."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/web/tools/chrome-user-experience-report",
				children: "Chrome User Experience Report"
			}), ": Field data open-source dataset."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://support.google.com/webmasters/answer/9205520",
				children: "Search Console"
			}), ": Google Search, Core Web Vitals report."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If you are looking for lab data, Google also offers several measurement tools:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/web/tools/lighthouse?hl=en",
				children: "Lighthouse"
			}), ": Google's open-source, automated tool for improving the quality of web pages."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.chrome.com/docs/devtools/",
				children: "Chrome DevTools"
			}), ": Set of web developer tools built directly into the Google Chrome browser."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Note that for both tools, you will need to use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://web.dev/tbt/",
				children: "Total Blocking Time (TBT)"
			}),
			" as an alternative to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://web.dev/fid/",
				children: "First Input Delay (FID)"
			}),
			" since FID can only be measured through field data."
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
export { toc as a, structuredData as i, _32_other_tools_exports as n, frontmatter as r, MDXContent as t };
