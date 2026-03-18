import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/41-deploying-nextjs-app-1Au0sq4g.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _41_deploying_nextjs_app_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Deploying Your Next.js App",
	"image": "https://nextjs.org/api/learn-og?title=Deploying%20Your%20Next.js%20App&amp;chapter=41",
	"headline": "Pages Router: Deploying Your Next.js App"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "In this final basics lesson, we’ll deploy our Next.js app to production."
		},
		{
			"heading": void 0,
			"content": "We’ll learn how to deploy Next.js to Vercel, the platform built by the creators of Next.js. We’ll also talk about other deployment options."
		},
		{
			"heading": void 0,
			"content": "> **Pre-requisite**: You need to have a GitHub account for this lesson."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "In this lesson, you’ll learn:"
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "How to deploy your Next.js app to Vercel."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "The **DPS** Workflow: **D**evelop, **P**review, and **S**hip."
		},
		{
			"heading": "what-youll-learn-in-this-lesson",
			"content": "How to deploy your Next.js app to your own hosting provider."
		}
	],
	"headings": [{
		"id": "what-youll-learn-in-this-lesson",
		"content": "What You’ll Learn in This Lesson"
	}]
};
var toc = [{
	depth: 3,
	url: "#what-youll-learn-in-this-lesson",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#what-youll-learn-in-this-lesson",
		children: "What You’ll Learn in This Lesson"
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In this final basics lesson, we’ll deploy our Next.js app to production." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We’ll learn how to deploy Next.js to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com",
				children: "Vercel"
			}),
			", the platform built by the creators of Next.js. We’ll also talk about other deployment options."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Pre-requisite" }),
				": You need to have a ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/",
					children: "GitHub account"
				}),
				" for this lesson."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "what-youll-learn-in-this-lesson",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#what-youll-learn-in-this-lesson",
				children: "What You’ll Learn in This Lesson"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In this lesson, you’ll learn:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"How to deploy your Next.js app to ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://vercel.com",
					children: "Vercel"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "DPS" }),
				" Workflow: ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "D" }),
				"evelop, ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "P" }),
				"review, and ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "S" }),
				"hip."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "How to deploy your Next.js app to your own hosting provider." }),
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
export { toc as a, structuredData as i, _41_deploying_nextjs_app_exports as n, frontmatter as r, MDXContent as t };
