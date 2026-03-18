import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/30-nextjs-speed-insights-BC1eMmmp.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _30_nextjs_speed_insights_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js Speed Insights",
	"image": "https://nextjs.org/api/learn-og?title=Next.js%20Speed%20Insights&amp;chapter=30",
	"headline": "SEO: Next.js Speed Insights"
};
var structuredData = {
	"contents": [{
		"heading": void 0,
		"content": "Next.js Speed Insights allows you to analyze and measure the performance of pages using Core Web Vitals."
	}, {
		"heading": void 0,
		"content": "You can start collecting your Real Experience Score with zero-configuration on Vercel deployments."
	}],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		img: "img",
		p: "p",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://nextjs.org/analytics",
			children: "Next.js Speed Insights"
		}), " allows you to analyze and measure the performance of pages using Core Web Vitals."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/seo/analytics.png",
			alt: "Next.js Speed Insights"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can start collecting your ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/docs/concepts/speed-insights#metrics",
				children: "Real Experience Score"
			}),
			" with zero-configuration on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/docs/concepts/speed-insights",
				children: "Vercel deployments"
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
export { toc as a, structuredData as i, _30_nextjs_speed_insights_exports as n, frontmatter as r, MDXContent as t };
