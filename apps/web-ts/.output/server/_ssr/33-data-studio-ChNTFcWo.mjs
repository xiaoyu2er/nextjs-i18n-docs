import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/33-data-studio-ChNTFcWo.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _33_data_studio_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Data Studio (Chrome User Experience Report)",
	"image": "https://nextjs.org/api/learn-og?title=Data%20Studio%20(Chrome%20User%20Experience%20Report)&amp;chapter=33",
	"headline": "SEO: Data Studio (Chrome User Experience Report)"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Another great free and open-source way of measuring your performance is to use the Chrome User Experience Report dataset."
		},
		{
			"heading": void 0,
			"content": "The Chrome User Experience Report provides user experience metrics for how real-world Chrome users experience popular destinations on the web."
		},
		{
			"heading": void 0,
			"content": "This dataset is publicly available under BigQuery and you can also consume it under Google Data Studio completely for free."
		},
		{
			"heading": void 0,
			"content": "Luckily for you, there are open-source dashboards available that you can use as a template for tracking the performance of your website."
		},
		{
			"heading": void 0,
			"content": "The only downside of this dataset is that, in order for your website to be included in the CrUX report, it will need to have a meaningful amount of visits otherwise it won't be included in the report due to lack of data. Hence this it may not the best option for work-in-progress or recently created websites."
		},
		{
			"heading": void 0,
			"content": "Also, the data is updated on a monthly basis. Usually around 15 days after the month is finished, so you will see the data with certain delay and that might not be the most practical thing if you plan to work on improving your Core Web Vitals scores."
		},
		{
			"heading": "further-reading",
			"content": "**Google**: Example Dashboard (copy for free)"
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
		h3: "h3",
		img: "img",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Another great free and open-source way of measuring your performance is to use the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/web/tools/chrome-user-experience-report",
				children: "Chrome User Experience Report"
			}),
			" dataset."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/web/tools/chrome-user-experience-report",
				children: "Chrome User Experience Report"
			}),
			" provides user experience metrics for how real-world Chrome users experience popular destinations on the web."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This dataset is publicly available ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://console.cloud.google.com/bigquery?project=chrome-ux-report",
				children: "under BigQuery"
			}),
			" and you can also consume it under ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://datastudio.google.com/overview",
				children: "Google Data Studio"
			}),
			" completely for free."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Luckily for you, there are ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://g.co/chromeuxdash",
				children: "open-source dashboards available"
			}),
			" that you can use as a template for tracking the performance of your website."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The only downside of this dataset is that, in order for your website to be included in the CrUX report, it will need to have a meaningful amount of visits otherwise it won't be included in the report due to lack of data. Hence this it may not the best option for work-in-progress or recently created websites." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Also, the data is updated on a monthly basis. Usually around 15 days after the month is finished, so you will see the data with certain delay and that might not be the most practical thing if you plan to work on improving your Core Web Vitals scores." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/seo/data-studio.png",
			alt: "Data Studio example for chrome user experience report"
		}) }),
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
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Google" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://web.dev/chrome-ux-report-data-studio-dashboard/",
					children: "Example Dashboard (copy for free)"
				})
			] }),
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
export { toc as a, structuredData as i, _33_data_studio_exports as n, frontmatter as r, MDXContent as t };
