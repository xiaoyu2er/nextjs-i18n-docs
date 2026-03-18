import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/12-amp-IY2tTSET.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _12_amp_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "What about AMP?",
	"image": "https://nextjs.org/api/learn-og?title=What%20about%20AMP?&amp;chapter=12",
	"headline": "SEO: What about AMP?"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "In 2016, Google began giving search ranking preference to web pages using\xA0AMP\xA0– a technology that enables developers to create web pages that load faster on mobile devices – at the cost of building and maintaining them over time."
		},
		{
			"heading": void 0,
			"content": "With the Core Web Vitals page experience update, Google dropped AMP pages as a requirement to appear in search carousels. This is one of the last main benefits that Google had for AMP in terms of SEO purposes."
		},
		{
			"heading": void 0,
			"content": "Since the introduction of AMP, newer technology, such as Next.js, has proven its ability to improve website experience without sacrificing Developer Experience (DX)."
		},
		{
			"heading": void 0,
			"content": "While Next.js offers AMP support, consider weighing the costs and benefits of having an AMP implementation in your website if it already has great Core Web Vitals scores."
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		p: "p",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In 2016, Google began giving ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/search/docs/guides/about-amp",
				children: "search ranking preference"
			}),
			" to web pages using\xA0",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://amp.dev/",
				children: "AMP"
			}),
			"\xA0– a technology that enables developers to create web pages that load faster on mobile devices – at the cost of building and maintaining them over time."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://web.dev/vitals/",
				children: "Core Web Vitals"
			}),
			" page experience update, Google ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/search/blog/2021/04/more-details-page-experience#details",
				children: "dropped AMP pages as a requirement"
			}),
			" to appear in search carousels. This is one of the last main benefits that Google had for AMP in terms of SEO purposes."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Since the introduction of AMP, newer technology, such as Next.js, has proven its ability to improve website experience without sacrificing Developer Experience (DX)." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"While Next.js offers ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/advanced-features/amp-support/introduction",
				children: "AMP support"
			}),
			", consider weighing the costs and benefits of having an AMP implementation in your website if it already has great Core Web Vitals scores."
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
export { toc as a, structuredData as i, _12_amp_exports as n, frontmatter as r, MDXContent as t };
