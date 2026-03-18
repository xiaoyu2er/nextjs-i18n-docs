import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/06-custom-document-DoWj-dJW.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _06_custom_document_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Custom Document",
	"description": "Extend the default document markup added by Next.js."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "A custom `Document` can update the `<html>` and `<body>` tags used to render a Page."
		},
		{
			"heading": void 0,
			"content": "To override the default `Document`, create the file `pages/_document` as shown below:"
		},
		{
			"heading": void 0,
			"content": "> **Good to know**:\n>\n> * `_document` is only rendered on the server, so event handlers like `onClick` cannot be used in this file.\n> * `<Html>`, `<Head />`, `<Main />` and `<NextScript />` are required for the page to be properly rendered."
		},
		{
			"heading": "caveats",
			"content": "The `<Head />` component used in `_document` is not the same as `next/head`. The `<Head />` component used here should only be used for any `<head>` code that is common for all pages. For all other cases, such as `<title>` tags, we recommend using `next/head` in your pages or components."
		},
		{
			"heading": "caveats",
			"content": "React components outside of `<Main />` will not be initialized by the browser. Do *not* add application logic here or custom CSS (like `styled-jsx`). If you need shared components in all your pages (like a menu or a toolbar), read Layouts instead."
		},
		{
			"heading": "caveats",
			"content": "`Document` currently does not support Next.js Data Fetching methods like `getStaticProps` or `getServerSideProps`."
		},
		{
			"heading": "customizing-renderpage",
			"content": "Customizing `renderPage` is advanced and only needed for libraries like CSS-in-JS to support server-side rendering. This is not needed for built-in `styled-jsx` support."
		},
		{
			"heading": "customizing-renderpage",
			"content": "**We do not recommend using this pattern.** Instead, consider incrementally adopting the App Router, which allows you to more easily fetch data for pages and layouts."
		},
		{
			"heading": "customizing-renderpage",
			"content": "> **Good to know**:\n>\n> * `getInitialProps` in `_document` is not called during client-side transitions.\n> * The `ctx` object for `_document` is equivalent to the one received in `getInitialProps`, with the addition of `renderPage`."
		}
	],
	"headings": [{
		"id": "caveats",
		"content": "Caveats"
	}, {
		"id": "customizing-renderpage",
		"content": "Customizing `renderPage`"
	}]
};
var toc = [{
	depth: 2,
	url: "#caveats",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Caveats" })
}, {
	depth: 2,
	url: "#customizing-renderpage",
	title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Customizing ", (0, import_jsx_runtime.jsx)("code", { children: "renderPage" })] })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		em: "em",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger } = _components;
	if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
	if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
	if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
	if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A custom ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Document" }),
			" can update the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<html>" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<body>" }),
			" tags used to render a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/routing/pages-and-layouts",
				children: "Page"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To override the default ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Document" }),
			", create the file ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_document" }),
			" as shown below:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "pages/_document.tsx",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "pages/_document.tsx",
					children: "pages/_document.tsx"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "pages/_document.jsx",
					children: "pages/_document.jsx"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "pages/_document.tsx",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
						children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "import"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " { Html, Head, Main, NextScript } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "from"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'next/document'"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "export"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " default"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " function"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Document"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "() {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "  return"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: " ("
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Html"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " lang"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "\"en\""
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "      <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Head"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " />"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "      <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "body"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "        <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Main"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " />"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "        <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "NextScript"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " />"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "      </"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "body"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    </"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Html"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  )"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "}"
								})
							})
						] })
					}) })
				}),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "pages/_document.jsx",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
						children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "import"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " { Html, Head, Main, NextScript } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "from"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'next/document'"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "export"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " default"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " function"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Document"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "() {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "  return"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: " ("
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Html"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " lang"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "\"en\""
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "      <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Head"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " />"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "      <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "body"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "        <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Main"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " />"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "        <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "NextScript"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " />"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "      </"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "body"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    </"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Html"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  )"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "}"
								})
							})
						] })
					}) })
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }), ":"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "_document" }),
					" is only rendered on the server, so event handlers like ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "onClick" }),
					" cannot be used in this file."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "<Html>" }),
					", ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "<Head />" }),
					", ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "<Main />" }),
					" and ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "<NextScript />" }),
					" are required for the page to be properly rendered."
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "caveats",
			children: "Caveats"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<Head />" }),
				" component used in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "_document" }),
				" is not the same as ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/api-reference/components/head",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next/head" })
				}),
				". The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<Head />" }),
				" component used here should only be used for any ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<head>" }),
				" code that is common for all pages. For all other cases, such as ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<title>" }),
				" tags, we recommend using ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/api-reference/components/head",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next/head" })
				}),
				" in your pages or components."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"React components outside of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<Main />" }),
				" will not be initialized by the browser. Do ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "not" }),
				" add application logic here or custom CSS (like ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "styled-jsx" }),
				"). If you need shared components in all your pages (like a menu or a toolbar), read ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/routing/pages-and-layouts#layout-pattern",
					children: "Layouts"
				}),
				" instead."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Document" }),
				" currently does not support Next.js ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/data-fetching",
					children: "Data Fetching methods"
				}),
				" like ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/data-fetching/get-static-props",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" })
				}),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/data-fetching/get-server-side-props",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" })
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h2, {
			id: "customizing-renderpage",
			children: ["Customizing ", (0, import_jsx_runtime.jsx)(_components.code, { children: "renderPage" })]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Customizing ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "renderPage" }),
			" is advanced and only needed for libraries like CSS-in-JS to support server-side rendering. This is not needed for built-in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "styled-jsx" }),
			" support."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "We do not recommend using this pattern." }),
			" Instead, consider ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/migrating/app-router-migration",
				children: "incrementally adopting"
			}),
			" the App Router, which allows you to more easily fetch data for pages and layouts."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "pages/_document.tsx",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "pages/_document.tsx",
					children: "pages/_document.tsx"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "pages/_document.jsx",
					children: "pages/_document.jsx"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "pages/_document.tsx",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
						children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "import"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: " Document, {"
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  Html,"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  Head,"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  Main,"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  NextScript,"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  DocumentContext,"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  DocumentInitialProps,"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "} "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "from"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'next/document'"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "class"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " MyDocument"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " extends"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Document"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  static"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " async"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " getInitialProps"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "    ctx"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: ":"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " DocumentContext"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "  )"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: ":"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Promise"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "<"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "DocumentInitialProps"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "> {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "    const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " originalRenderPage"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " ctx.renderPage"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "    // Run the React rendering logic synchronously"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    ctx."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "renderPage"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " () "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "=>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: "      originalRenderPage"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "({"
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "        // Useful for wrapping the whole react tree"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "        enhanceApp"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ": ("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "App"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ") "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "=>"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " App,"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "        // Useful for wrapping in a per-page basis"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "        enhanceComponent"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ": ("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "Component"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ") "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "=>"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " Component,"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "      })"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "    // Run the parent `getInitialProps`, it now includes the custom `renderPage`"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "    const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " initialProps"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " Document."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "getInitialProps"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(ctx)"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "    return"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: " initialProps"
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  }"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: "  render"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "() {"
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "    return"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: " ("
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "      <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Html"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " lang"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "\"en\""
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "        <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Head"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " />"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "        <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "body"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "          <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Main"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " />"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "          <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "NextScript"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " />"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "        </"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "body"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "      </"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Html"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "    )"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  }"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "}"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "export"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " default"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " MyDocument"
									})
								]
							})
						] })
					}) })
				}),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "pages/_document.jsx",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
						children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "import"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " Document, { Html, Head, Main, NextScript } "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "from"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: " 'next/document'"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "class"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " MyDocument"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " extends"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Document"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  static"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " async"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " getInitialProps"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "ctx"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ") {"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "    const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " originalRenderPage"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " ctx.renderPage"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "    // Run the React rendering logic synchronously"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    ctx."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "renderPage"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " () "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "=>"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: "      originalRenderPage"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "({"
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "        // Useful for wrapping the whole react tree"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "        enhanceApp"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ": ("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "App"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ") "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "=>"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " App,"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "        // Useful for wrapping in a per-page basis"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "        enhanceComponent"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ": ("
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "Component"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ") "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "=>"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " Component,"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "      })"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "    // Run the parent `getInitialProps`, it now includes the custom `renderPage`"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "    const"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " initialProps"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " await"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " Document."
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "getInitialProps"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(ctx)"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "    return"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: " initialProps"
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  }"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: "  render"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "() {"
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "    return"
								}), (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: " ("
								})]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "      <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Html"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " lang"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "="
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "\"en\""
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "        <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Head"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " />"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "        <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "body"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "          <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Main"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " />"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "          <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "NextScript"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " />"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "        </"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#22863A",
											"--shiki-dark": "#85E89D"
										},
										children: "body"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "      </"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Html"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">"
									})
								]
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "    )"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "  }"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, {
								className: "line",
								children: (0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "}"
								})
							}),
							"\n",
							(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.span, {
								className: "line",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "export"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " default"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " MyDocument"
									})
								]
							})
						] })
					}) })
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }), ":"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "getInitialProps" }),
					" in ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "_document" }),
					" is not called during client-side transitions."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"The ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "ctx" }),
					" object for ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "_document" }),
					" is equivalent to the one received in ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/pages/api-reference/functions/get-initial-props#context-object",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getInitialProps" })
					}),
					", with the addition of ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "renderPage" }),
					"."
				] }),
				"\n"
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
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { toc as a, structuredData as i, _06_custom_document_exports as n, frontmatter as r, MDXContent as t };
