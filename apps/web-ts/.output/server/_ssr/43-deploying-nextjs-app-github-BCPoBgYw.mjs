import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/43-deploying-nextjs-app-github-BCPoBgYw.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _43_deploying_nextjs_app_github_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Push to GitHub",
	"image": "https://nextjs.org/api/learn-og?title=Push%20to%20GitHub&amp;chapter=43",
	"headline": "Pages Router: Push to GitHub"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Before we deploy, let’s push our Next.js app to GitHub if you haven’t done so already. This will make deployment easier."
		},
		{
			"heading": void 0,
			"content": "On your personal GitHub account, create a new repository called `nextjs-blog`."
		},
		{
			"heading": void 0,
			"content": "The repository can be public or private. You do **not** need to initialize it with a README or other files."
		},
		{
			"heading": void 0,
			"content": "If you need help setting up your repo, take a look at this guide on GitHub."
		},
		{
			"heading": void 0,
			"content": "Then:"
		},
		{
			"heading": void 0,
			"content": "If you haven’t initialized the git repository locally for your Next.js app, do so now."
		},
		{
			"heading": void 0,
			"content": "Push the Next.js app to your GitHub repository."
		},
		{
			"heading": void 0,
			"content": "To push to GitHub, you can run the following commands (replace `<username>` with your GitHub username):"
		},
		{
			"heading": void 0,
			"content": "Once your GitHub repository is ready, continue to the next page."
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Before we deploy, let’s push our Next.js app to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js",
				children: "GitHub"
			}),
			" if you haven’t done so already. This will make deployment easier."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"On your personal GitHub account, create a new repository called ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "nextjs-blog" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The repository can be public or private. You do ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "not" }),
				" need to initialize it with a README or other files."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"If you need help setting up your repo, take a look at ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://help.github.com/en/github/getting-started-with-github/create-a-repo",
					children: "this guide on GitHub"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Then:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "If you haven’t initialized the git repository locally for your Next.js app, do so now." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Push the Next.js app to your GitHub repository." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To push to GitHub, you can run the following commands (replace ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<username>" }),
			" with your GitHub username):"
		] }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "git remote add origin https://github.com/<username>/nextjs-blog.git" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "git push -u origin main" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Once your GitHub repository is ready, continue to the next page." })
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
export { toc as a, structuredData as i, _43_deploying_nextjs_app_github_exports as n, frontmatter as r, MDXContent as t };
