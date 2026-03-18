import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/09-assets-metadata-css-layout-component-BuGfI4M6.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _09_assets_metadata_css_layout_component_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Layout Component",
	"image": "https://nextjs.org/api/learn-og?title=Layout%20Component&amp;chapter=9",
	"headline": "Pages Router: Layout Component"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "First, let’s create a **Layout** component which will be shared across all pages."
		},
		{
			"heading": void 0,
			"content": "Create a top-level directory called `components`."
		},
		{
			"heading": void 0,
			"content": "Inside `components`, create a file called `layout.js` with the following content:"
		},
		{
			"heading": void 0,
			"content": "Then, open `pages/posts/first-post.js`, add an import for the `Layout` component, and make it the outermost component:"
		},
		{
			"heading": "adding-css",
			"content": "Now, let’s add some styles to the `Layout` component. To do so, we’ll use CSS Modules, which lets you import CSS files in a React component."
		},
		{
			"heading": "adding-css",
			"content": "Create a file called `components/layout.module.css` with the following content:"
		},
		{
			"heading": "adding-css",
			"content": "> **Important:** To use CSS Modules, the CSS file name must end with `.module.css`."
		},
		{
			"heading": "adding-css",
			"content": "To use this `container` class inside `components/layout.js`, you need to:"
		},
		{
			"heading": "adding-css",
			"content": "Import the CSS file and assign a name to it, like `styles`"
		},
		{
			"heading": "adding-css",
			"content": "Use `styles.container` as the `className`"
		},
		{
			"heading": "adding-css",
			"content": "Open `components/layout.js` and replace its content with the following:"
		},
		{
			"heading": "adding-css",
			"content": "If you go to http\\://localhost:3000/posts/first-post now, you should see that the text is now inside a centered container:"
		},
		{
			"heading": "automatically-generates-unique-class-names",
			"content": "Now, if you take a look at the HTML in your browser’s devtools, you’ll notice that the `div` rendered by the `Layout` component has a class name that looks like `layout_container__...`:"
		},
		{
			"heading": "automatically-generates-unique-class-names",
			"content": "This is what CSS Modules does: *It automatically generates unique class names*. As long as you use CSS Modules, you don’t have to worry about class name collisions."
		},
		{
			"heading": "automatically-generates-unique-class-names",
			"content": "Furthermore, Next.js’s code splitting feature works on CSS Modules as well. It ensures the minimal amount of CSS is loaded for each page. This results in smaller bundle sizes."
		},
		{
			"heading": "automatically-generates-unique-class-names",
			"content": "CSS Modules are extracted from the JavaScript bundles at build time and generate `.css` files that are loaded automatically by Next.js."
		}
	],
	"headings": [{
		"id": "adding-css",
		"content": "Adding CSS"
	}, {
		"id": "automatically-generates-unique-class-names",
		"content": "Automatically Generates Unique Class Names"
	}]
};
var toc = [{
	depth: 3,
	url: "#adding-css",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#adding-css",
		children: "Adding CSS"
	}) })
}, {
	depth: 3,
	url: "#automatically-generates-unique-class-names",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#automatically-generates-unique-class-names",
		children: "Automatically Generates Unique Class Names"
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		em: "em",
		h3: "h3",
		img: "img",
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
			"First, let’s create a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Layout" }),
			" component which will be shared across all pages."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Create a top-level directory called ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "components" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Inside ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "components" }),
				", create a file called ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
				" with the following content:"
			] }),
			"\n"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function Layout({ children }) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return <div>{children}</div>;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Then, open ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/posts/first-post.js" }),
			", add an import for the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Layout" }),
			" component, and make it the outermost component:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import Head from 'next/head';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import Link from 'next/link';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import Layout from '../../components/layout';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function FirstPost() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return (" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <Layout>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <Head>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        <title>First Post</title>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      </Head>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <h1>First Post</h1>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <h2>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        <Link href=\"/\">← Back to home</Link>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      </h2>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    </Layout>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  );" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "adding-css",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#adding-css",
				children: "Adding CSS"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Now, let’s add some styles to the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Layout" }),
			" component. To do so, we’ll use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/built-in-css-support#adding-component-level-css",
				children: "CSS Modules"
			}),
			", which lets you import CSS files in a React component."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Create a file called ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "components/layout.module.css" }),
			" with the following content:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: ".container {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  max-width: 36rem;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  padding: 0 1rem;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  margin: 3rem auto 6rem;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Important:" }),
				" To use ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/built-in-css-support#adding-component-level-css",
					children: "CSS Modules"
				}),
				", the CSS file name must end with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".module.css" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To use this ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "container" }),
			" class inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "components/layout.js" }),
			", you need to:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Import the CSS file and assign a name to it, like ", (0, import_jsx_runtime.jsx)(_components.code, { children: "styles" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "styles.container" }),
				" as the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "className" })
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Open ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "components/layout.js" }),
			" and replace its content with the following:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import styles from './layout.module.css';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function Layout({ children }) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return <div className={styles.container}>{children}</div>;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you go to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://localhost:3000/posts/first-post",
				children: "http://localhost:3000/posts/first-post"
			}),
			" now, you should see that the text is now inside a centered container:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/assets-metadata-css/layout.png",
			alt: "Layout"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "automatically-generates-unique-class-names",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#automatically-generates-unique-class-names",
				children: "Automatically Generates Unique Class Names"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Now, if you take a look at the HTML in your browser’s devtools, you’ll notice that the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "div" }),
			" rendered by the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Layout" }),
			" component has a class name that looks like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "layout_container__..." }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/assets-metadata-css/devtools.png",
			alt: "Devtools"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This is what ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/built-in-css-support#adding-component-level-css",
				children: "CSS Modules"
			}),
			" does: ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "It automatically generates unique class names" }),
			". As long as you use CSS Modules, you don’t have to worry about class name collisions."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Furthermore, Next.js’s code splitting feature works on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/built-in-css-support#adding-component-level-css",
				children: "CSS Modules"
			}),
			" as well. It ensures the minimal amount of CSS is loaded for each page. This results in smaller bundle sizes."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/built-in-css-support#adding-component-level-css",
				children: "CSS Modules"
			}),
			" are extracted from the JavaScript bundles at build time and generate ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".css" }),
			" files that are loaded automatically by Next.js."
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
export { toc as a, structuredData as i, _09_assets_metadata_css_layout_component_exports as n, frontmatter as r, MDXContent as t };
