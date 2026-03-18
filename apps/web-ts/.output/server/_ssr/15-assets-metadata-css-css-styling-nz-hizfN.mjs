import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/15-assets-metadata-css-css-styling-nz-hizfN.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _15_assets_metadata_css_css_styling_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "CSS Styling",
	"image": "https://nextjs.org/api/learn-og?title=CSS%20Styling&amp;chapter=15",
	"headline": "Pages Router: CSS Styling"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Let’s now talk about **CSS styling**."
		},
		{
			"heading": void 0,
			"content": "As you can see, our index page (http\\://localhost:3000) already has some styles. If you look at your file structure, you'll see a folder called `styles` with two CSS files: a global stylesheet (`global.css`), and a CSS module (`Home.module.css`)."
		},
		{
			"heading": void 0,
			"content": "If your project doesn't have those files, you can download the starter code here:"
		},
		{
			"heading": "css-modules",
			"content": "CSS modules allow you to locally scope CSS at the component-level by automatically creating unique class names. This allows you to use the same CSS class name in different files without worrying about class name collisions."
		},
		{
			"heading": "css-modules",
			"content": "In addition to CSS modules, you can style your Next.js application in a variety of ways, including:"
		},
		{
			"heading": "css-modules",
			"content": "Sass which allows you to import `.css` and `.scss` files."
		},
		{
			"heading": "css-modules",
			"content": "PostCSS libraries like Tailwind CSS."
		},
		{
			"heading": "css-modules",
			"content": "CSS-in-JS libraries such as styled-jsx, styled-components, and emotion"
		},
		{
			"heading": "css-modules",
			"content": "In this lesson, we’ll talk about how to use CSS Modules and Sass in Next.js. Let’s dive in!"
		}
	],
	"headings": [{
		"id": "css-modules",
		"content": "CSS Modules"
	}]
};
var toc = [{
	depth: 3,
	url: "#css-modules",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#css-modules",
		children: "CSS Modules"
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Let’s now talk about ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "CSS styling" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As you can see, our index page (",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://localhost:3000",
				children: "http://localhost:3000"
			}),
			") already has some styles. If you look at your file structure, you'll see a folder called ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "styles" }),
			" with two CSS files: a global stylesheet (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "global.css" }),
			"), and a CSS module (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Home.module.css" }),
			")."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If your project doesn't have those files, you can download the starter code here:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "npx create-next-app nextjs-blog --use-npm --example \"https://github.com/vercel/next-learn/tree/main/basics/assets-metadata-css-starter\"" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "css-modules",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#css-modules",
				children: "CSS Modules"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "/docs/basic-features/built-in-css-support",
			children: "CSS modules"
		}), " allow you to locally scope CSS at the component-level by automatically creating unique class names. This allows you to use the same CSS class name in different files without worrying about class name collisions."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In addition to CSS modules, you can style your Next.js application in a variety of ways, including:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Sass which allows you to import ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".css" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".scss" }),
				" files."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"PostCSS libraries like ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss",
					children: "Tailwind CSS"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"CSS-in-JS libraries such as ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/styled-jsx",
					children: "styled-jsx"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples/with-styled-components",
					children: "styled-components"
				}),
				", and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples/with-emotion",
					children: "emotion"
				})
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In this lesson, we’ll talk about how to use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/built-in-css-support#adding-component-level-css",
				children: "CSS Modules"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/built-in-css-support#sass-support",
				children: "Sass"
			}),
			" in Next.js. Let’s dive in!"
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
export { toc as a, structuredData as i, _15_assets_metadata_css_css_styling_exports as n, frontmatter as r, MDXContent as t };
