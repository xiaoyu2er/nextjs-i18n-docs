import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/03-multi-zones-CxK9gUp0.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _03_multi_zones_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Multi Zones",
	"description": "Learn how to use multi zones to deploy multiple Next.js apps as a single app."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "With Zones"
		},
		{
			"heading": void 0,
			"content": "A zone is a single deployment of a Next.js app. You can have multiple zones and merge them as a single app."
		},
		{
			"heading": void 0,
			"content": "For example, let's say you have the following apps:"
		},
		{
			"heading": void 0,
			"content": "An app for serving `/blog/**`"
		},
		{
			"heading": void 0,
			"content": "Another app for serving all other pages"
		},
		{
			"heading": void 0,
			"content": "With multi zones support, you can merge both these apps into a single one allowing your customers to browse it using a single URL, but you can develop and deploy both apps independently."
		},
		{
			"heading": "how-to-define-a-zone",
			"content": "There are no zone related APIs. You only need to do the following:"
		},
		{
			"heading": "how-to-define-a-zone",
			"content": "Make sure to keep only the pages you need in your app, meaning that an app can't have pages from another app, if app `A` has `/blog` then app `B` shouldn't have it too."
		},
		{
			"heading": "how-to-define-a-zone",
			"content": "Make sure to configure a basePath to avoid conflicts with pages and static files."
		},
		{
			"heading": "how-to-merge-zones",
			"content": "You can merge zones using `rewrites` in one of the apps or any HTTP proxy."
		},
		{
			"heading": "how-to-merge-zones",
			"content": "For Next.js on Vercel applications, you can use a monorepo to deploy both apps with a single `git push`."
		}
	],
	"headings": [{
		"id": "how-to-define-a-zone",
		"content": "How to define a zone"
	}, {
		"id": "how-to-merge-zones",
		"content": "How to merge zones"
	}]
};
var toc = [{
	depth: 2,
	url: "#how-to-define-a-zone",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "How to define a zone" })
}, {
	depth: 2,
	url: "#how-to-merge-zones",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "How to merge zones" })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)("details", {
			open: true,
			children: [(0, import_jsx_runtime.jsx)("summary", { children: "Examples" }), (0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples/with-zones",
					children: "With Zones"
				}) }),
				"\n"
			] })]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "A zone is a single deployment of a Next.js app. You can have multiple zones and merge them as a single app." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For example, let's say you have the following apps:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["An app for serving ", (0, import_jsx_runtime.jsx)(_components.code, { children: "/blog/**" })] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Another app for serving all other pages" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "With multi zones support, you can merge both these apps into a single one allowing your customers to browse it using a single URL, but you can develop and deploy both apps independently." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "how-to-define-a-zone",
			children: "How to define a zone"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "There are no zone related APIs. You only need to do the following:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Make sure to keep only the pages you need in your app, meaning that an app can't have pages from another app, if app ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "A" }),
				" has ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/blog" }),
				" then app ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "B" }),
				" shouldn't have it too."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Make sure to configure a ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/next-config-js/basePath",
					children: "basePath"
				}),
				" to avoid conflicts with pages and static files."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "how-to-merge-zones",
			children: "How to merge zones"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can merge zones using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/rewrites",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "rewrites" })
			}),
			" in one of the apps or any HTTP proxy."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",
				children: "Next.js on Vercel"
			}),
			" applications, you can use a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/blog/monorepos-are-changing-how-teams-build-software?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",
				children: "monorepo"
			}),
			" to deploy both apps with a single ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "git push" }),
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
export { toc as a, structuredData as i, _03_multi_zones_exports as n, frontmatter as r, MDXContent as t };
