import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/default-B5bq7VoF.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var default_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "default.js",
	"description": "API Reference for the default.js file.",
	"related": {
		"title": "Learn more about Parallel Routes",
		"links": ["app/building-your-application/routing/parallel-routes"]
	}
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "The `default.js` file is used to render a fallback within Parallel Routes when Next.js cannot recover a slot's active state after a full-page load."
		},
		{
			"heading": void 0,
			"content": "During soft navigation, Next.js keeps track of the active *state* (subpage) for each slot. However, for hard navigations (full-page load), Next.js cannot recover the active state. In this case, a `default.js` file can be rendered for subpages that don't match the current URL."
		},
		{
			"heading": void 0,
			"content": "Consider the following folder structure. The `@team` slot has a `settings` page, but `@analytics` does not."
		},
		{
			"heading": void 0,
			"content": "When navigating to `/settings`, the `@team` slot will render the `settings` page while maintaining the currently active page for the `@analytics` slot."
		},
		{
			"heading": void 0,
			"content": "On refresh, Next.js will render a `default.js` for `@analytics`. If `default.js` doesn't exist, a `404` is rendered instead."
		},
		{
			"heading": void 0,
			"content": "Additionally, since `children` is an implicit slot, you also need to create a `default.js` file to render a fallback for `children` when Next.js cannot recover the active state of the parent page."
		},
		{
			"heading": "params-optional",
			"content": "An object containing the dynamic route parameters from the root segment down to the slot's subpages. For example:"
		},
		{
			"heading": "params-optional",
			"content": "Example"
		},
		{
			"heading": "params-optional",
			"content": "URL"
		},
		{
			"heading": "params-optional",
			"content": "`params`"
		},
		{
			"heading": "params-optional",
			"content": "`app/@sidebar/[artist]/default.js`"
		},
		{
			"heading": "params-optional",
			"content": "`/zack`"
		},
		{
			"heading": "params-optional",
			"content": "`{ artist: 'zack' }`"
		},
		{
			"heading": "params-optional",
			"content": "`app/@sidebar/[artist]/[album]/default.js`"
		},
		{
			"heading": "params-optional",
			"content": "`/zack/next`"
		},
		{
			"heading": "params-optional",
			"content": "`{ artist: 'zack', album: 'next' }`"
		}
	],
	"headings": [
		{
			"id": "props",
			"content": "Props"
		},
		{
			"id": "params-optional",
			"content": "`params` (optional)"
		},
		{
			"id": "learn-more-about-parallel-routes",
			"content": "Learn more about Parallel Routes"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#props",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Props" })
	},
	{
		depth: 3,
		url: "#params-optional",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("code", { children: "params" }), " (optional)"] })
	},
	{
		depth: 2,
		url: "#learn-more-about-parallel-routes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Learn more about Parallel Routes" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		em: "em",
		h2: "h2",
		h3: "h3",
		p: "p",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		...props.components
	}, { Image } = _components;
	if (!Image) _missingMdxReference("Image", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "default.js" }),
			" file is used to render a fallback within ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/parallel-routes",
				children: "Parallel Routes"
			}),
			" when Next.js cannot recover a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/parallel-routes#slots",
				children: "slot's"
			}),
			" active state after a full-page load."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"During ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/linking-and-navigating#5-soft-navigation",
				children: "soft navigation"
			}),
			", Next.js keeps track of the active ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "state" }),
			" (subpage) for each slot. However, for hard navigations (full-page load), Next.js cannot recover the active state. In this case, a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "default.js" }),
			" file can be rendered for subpages that don't match the current URL."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Consider the following folder structure. The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@team" }),
			" slot has a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "settings" }),
			" page, but ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@analytics" }),
			" does not."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Parallel Routes unmatched routes",
			srcLight: "/docs/light/parallel-routes-unmatched-routes.png",
			srcDark: "/docs/dark/parallel-routes-unmatched-routes.png",
			width: "1600",
			height: "930"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When navigating to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/settings" }),
			", the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@team" }),
			" slot will render the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "settings" }),
			" page while maintaining the currently active page for the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@analytics" }),
			" slot."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"On refresh, Next.js will render a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "default.js" }),
			" for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@analytics" }),
			". If ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "default.js" }),
			" doesn't exist, a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "404" }),
			" is rendered instead."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Additionally, since ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "children" }),
			" is an implicit slot, you also need to create a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "default.js" }),
			" file to render a fallback for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "children" }),
			" when Next.js cannot recover the active state of the parent page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "props",
			children: "Props"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "params-optional",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "params" }), " (optional)"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"An object containing the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/dynamic-routes",
				children: "dynamic route parameters"
			}),
			" from the root segment down to the slot's subpages. For example:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Example" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "URL" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "params" }) })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "app/@sidebar/[artist]/default.js" }) }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "/zack" }) }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "{ artist: 'zack' }" }) })
		] }), (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "app/@sidebar/[artist]/[album]/default.js" }) }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "/zack/next" }) }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "{ artist: 'zack', album: 'next' }" }) })
		] })] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "learn-more-about-parallel-routes",
			children: "Learn more about Parallel Routes"
		})
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
export { toc as a, structuredData as i, default_exports as n, frontmatter as r, MDXContent as t };
