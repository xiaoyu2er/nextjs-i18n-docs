import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/01-building-your-application-BuU7doSn.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _01_building_your_application_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Building Your Application",
	"description": "Learn how to use Next.js features to build your application."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js provides the building blocks to create flexible, full-stack web applications. The guides in **Building Your Application** explain how to use these features and how to customize your application's behavior."
		},
		{
			"heading": void 0,
			"content": "The sections and pages are organized sequentially, from basic to advanced, so you can follow them step-by-step when building your Next.js application. However, you can read them in any order or skip to the pages that apply to your use case."
		},
		{
			"heading": void 0,
			"content": "If you're new to Next.js, we recommend starting with the Routing, Rendering, Data Fetching and Styling sections, as they introduce the fundamental Next.js and web concepts to help you get started. Then, you can dive deeper into the other sections such as Optimizing and Configuring. Finally, once you're ready, checkout the Deploying and Upgrading sections."
		},
		{
			"heading": void 0,
			"content": "If you're new to Next.js, we recommend starting with the Routing, Rendering, Data Fetching and Styling sections, as they introduce the fundamental Next.js and web concepts to help you get started. Then, you can dive deeper into the other sections such as Optimizing and Configuring. Finally, once you're ready, checkout the Deploying and Upgrading sections."
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		p: "p",
		strong: "strong",
		...props.components
	}, { AppOnly, PagesOnly } = _components;
	if (!AppOnly) _missingMdxReference("AppOnly", true);
	if (!PagesOnly) _missingMdxReference("PagesOnly", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js provides the building blocks to create flexible, full-stack web applications. The guides in ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Building Your Application" }),
			" explain how to use these features and how to customize your application's behavior."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The sections and pages are organized sequentially, from basic to advanced, so you can follow them step-by-step when building your Next.js application. However, you can read them in any order or skip to the pages that apply to your use case." }),
		"\n",
		(0, import_jsx_runtime.jsx)(AppOnly, { children: (0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you're new to Next.js, we recommend starting with the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing",
				children: "Routing"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/rendering",
				children: "Rendering"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/data-fetching",
				children: "Data Fetching"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/styling",
				children: "Styling"
			}),
			" sections, as they introduce the fundamental Next.js and web concepts to help you get started. Then, you can dive deeper into the other sections such as ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/optimizing",
				children: "Optimizing"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/configuring",
				children: "Configuring"
			}),
			". Finally, once you're ready, checkout the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/deploying",
				children: "Deploying"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/upgrading",
				children: "Upgrading"
			}),
			" sections."
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(PagesOnly, { children: (0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you're new to Next.js, we recommend starting with the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/routing",
				children: "Routing"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/rendering",
				children: "Rendering"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/data-fetching",
				children: "Data Fetching"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/styling",
				children: "Styling"
			}),
			" sections, as they introduce the fundamental Next.js and web concepts to help you get started. Then, you can dive deeper into the other sections such as ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/optimizing",
				children: "Optimizing"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/configuring",
				children: "Configuring"
			}),
			". Finally, once you're ready, checkout the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/deploying",
				children: "Deploying"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/upgrading",
				children: "Upgrading"
			}),
			" sections."
		] }) })
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
export { toc as a, structuredData as i, _01_building_your_application_exports as n, frontmatter as r, MDXContent as t };
