import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/29-monitor-B2OFuW-T.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _29_monitor_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Monitoring your Core Web Vitals",
	"image": "https://nextjs.org/api/learn-og?title=Monitoring%20your%20Core%20Web%20Vitals&amp;chapter=29",
	"headline": "SEO: Monitoring your Core Web Vitals"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Once you have optimized your site, it's important to monitor while in production so you can continue to iterate. When monitoring Core Web Vitals, tracking over time is key rather than relying on one-off lab tests."
		},
		{
			"heading": void 0,
			"content": "In this lesson, you’ll learn more about:"
		},
		{
			"heading": void 0,
			"content": "Next.js Speed Insights"
		},
		{
			"heading": void 0,
			"content": "Next.js Custom Reporting"
		},
		{
			"heading": void 0,
			"content": "CrUX Report"
		},
		{
			"heading": void 0,
			"content": "Other tools for measurement"
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		li: "li",
		p: "p",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Once you have optimized your site, it's important to monitor while in production so you can continue to iterate. When monitoring Core Web Vitals, tracking over time is key rather than relying on one-off lab tests." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In this lesson, you’ll learn more about:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Next.js Speed Insights" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Next.js Custom Reporting" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "CrUX Report" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Other tools for measurement" }),
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
export { toc as a, structuredData as i, _29_monitor_exports as n, frontmatter as r, MDXContent as t };
