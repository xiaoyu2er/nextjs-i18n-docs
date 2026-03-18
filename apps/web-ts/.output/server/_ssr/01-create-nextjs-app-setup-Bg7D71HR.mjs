import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/01-create-nextjs-app-setup-Bg7D71HR.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _01_create_nextjs_app_setup_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Set up a new Next.js app",
	"image": "https://nextjs.org/api/learn-og?title=Set%20up%20a%20new%20Next.js%20app&amp;chapter=1",
	"headline": "Pages Router: Set up a new Next.js app"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "First, let’s make sure that your development environment is ready."
		},
		{
			"heading": void 0,
			"content": "If you don’t have **Node.js** installed, install it from here. You’ll need Node.js version **18** or higher."
		},
		{
			"heading": void 0,
			"content": "You’ll be using your own text editor and terminal app for this tutorial."
		},
		{
			"heading": void 0,
			"content": "> If you are on Windows, we recommend downloading Git for Windows and use Git Bash that comes with it, which supports the UNIX-specific commands in this tutorial. Windows Subsystem for Linux (WSL) is another option."
		},
		{
			"heading": "create-a-nextjs-app",
			"content": "To create a Next.js app, open your terminal, `cd` into the directory you’d like to create the app in, and run the following command:"
		},
		{
			"heading": "create-a-nextjs-app",
			"content": "> Under the hood, this uses the tool called `create-next-app`, which bootstraps a Next.js app for you. It uses this template through the `--example` flag.\n>\n> If it doesn’t work, please take a look at this page."
		},
		{
			"heading": "run-the-development-server",
			"content": "You now have a new directory called `nextjs-blog`. Let’s `cd` into it:"
		},
		{
			"heading": "run-the-development-server",
			"content": "Then, run the following command:"
		},
		{
			"heading": "run-the-development-server",
			"content": "This starts your Next.js app’s \"development server\" (more on this later) on port **3000**."
		},
		{
			"heading": "run-the-development-server",
			"content": "Let’s check to see if it’s working. Open http\\://localhost:3000 from your browser."
		}
	],
	"headings": [{
		"id": "create-a-nextjs-app",
		"content": "Create a Next.js app"
	}, {
		"id": "run-the-development-server",
		"content": "Run the development server"
	}]
};
var toc = [{
	depth: 3,
	url: "#create-a-nextjs-app",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#create-a-nextjs-app",
		children: "Create a Next.js app"
	}) })
}, {
	depth: 3,
	url: "#run-the-development-server",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#run-the-development-server",
		children: "Run the development server"
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "First, let’s make sure that your development environment is ready." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"If you don’t have ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Node.js" }),
				" installed, ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nodejs.org/en/",
					children: "install it from here"
				}),
				". You’ll need Node.js version ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "18" }),
				" or higher."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "You’ll be using your own text editor and terminal app for this tutorial." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"If you are on Windows, we recommend ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://gitforwindows.org/",
					children: "downloading Git for Windows"
				}),
				" and use Git Bash that comes with it, which supports the UNIX-specific commands in this tutorial. ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://docs.microsoft.com/en-us/windows/wsl/install-win10",
					children: "Windows Subsystem for Linux (WSL)"
				}),
				" is another option."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "create-a-nextjs-app",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#create-a-nextjs-app",
				children: "Create a Next.js app"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To create a Next.js app, open your terminal, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "cd" }),
			" into the directory you’d like to create the app in, and run the following command:"
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "npx create-next-app@latest nextjs-blog --use-npm --example \"https://github.com/vercel/next-learn/tree/main/basics/learn-starter\"" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Under the hood, this uses the tool called ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/api-reference/create-next-app",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "create-next-app" })
				}),
				", which bootstraps a Next.js app for you. It uses ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next-learn/tree/main/basics/learn-starter",
					children: "this template"
				}),
				" through the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--example" }),
				" flag."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"If it doesn’t work, please take a look at ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next-learn/blob/main/basics/errors/install.md",
					children: "this page"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "run-the-development-server",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#run-the-development-server",
				children: "Run the development server"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You now have a new directory called ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "nextjs-blog" }),
			". Let’s ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "cd" }),
			" into it:"
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "cd nextjs-blog" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Then, run the following command:" }),
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "npm run dev" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This starts your Next.js app’s \"development server\" (more on this later) on port ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "3000" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Let’s check to see if it’s working. Open ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://localhost:3000",
				children: "http://localhost:3000"
			}),
			" from your browser."
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
export { toc as a, structuredData as i, _01_create_nextjs_app_setup_exports as n, frontmatter as r, MDXContent as t };
