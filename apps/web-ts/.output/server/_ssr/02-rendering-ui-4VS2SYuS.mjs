import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/02-rendering-ui-4VS2SYuS.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _02_rendering_ui_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Rendering User Interfaces (UI)",
	"description": "Learn what the DOM is and how user interfaces are rendered.",
	"image": "https://nextjs.org/api/learn-og?title=Rendering%20User%20Interfaces%20(UI)&amp;chapter=2",
	"headline": "React Foundations: Rendering User Interfaces (UI)"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "To understand how React works, we first need a basic understanding of how browsers interpret your code to create (or render) user interfaces (UI)."
		},
		{
			"heading": void 0,
			"content": "When a user visits a web page, the server returns an HTML file to the browser that may look like this:"
		},
		{
			"heading": void 0,
			"content": "The browser then reads the HTML and constructs the Document Object Model (DOM)."
		},
		{
			"heading": "what-is-the-dom",
			"content": "The DOM is an object representation of the HTML elements. It acts as a bridge between your code and the user interface, and has a tree-like structure with parent and child relationships."
		},
		{
			"heading": "what-is-the-dom",
			"content": "You can use DOM methods and JavaScript, to listen to user events and manipulate the DOM by selecting, adding, updating, and deleting specific elements in the user interface. DOM manipulation allows you to not only target specific elements, but also change their style and content."
		},
		{
			"heading": "what-is-the-dom",
			"content": "In the next section you'll learn how to use JavaScript and DOM methods."
		},
		{
			"heading": "what-is-the-dom",
			"content": "> **Additional Resources:**\n>\n> * Introduction to the DOM\n> * How to view the DOM in Google Chrome\n> * How to view the DOM in Firefox"
		}
	],
	"headings": [{
		"id": "what-is-the-dom",
		"content": "What is the DOM?"
	}]
};
var toc = [{
	depth: 3,
	url: "#what-is-the-dom",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#what-is-the-dom",
		children: "What is the DOM?"
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
	}, { Image } = _components;
	if (!Image) _missingMdxReference("Image", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To understand how React works, we first need a basic understanding of how browsers interpret your code to create (or render) user interfaces (UI)." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When a user visits a web page, the server returns an HTML file to the browser that may look like this:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Two side-by-side diagrams, left showing the HTML code, and right showing the DOM tree.",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/light/learn-html-and-dom.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/dark/learn-html-and-dom.png",
			width: "1600",
			height: "759"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The browser then reads the HTML and constructs the Document Object Model (DOM)." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "what-is-the-dom",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#what-is-the-dom",
				children: "What is the DOM?"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The DOM is an object representation of the HTML elements. It acts as a bridge between your code and the user interface, and has a tree-like structure with parent and child relationships." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Two side-by-side diagrams, left showing the DOM tree, and right showing the rendered UI.",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/light/learn-dom-and-ui.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/dark/learn-dom-and-ui.png",
			width: "1600",
			height: "759"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can use DOM methods and JavaScript, to listen to user events and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents",
				children: "manipulate the DOM"
			}),
			" by selecting, adding, updating, and deleting specific elements in the user interface. DOM manipulation allows you to not only target specific elements, but also change their style and content."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In the next section you'll learn how to use JavaScript and DOM methods." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Additional Resources:" }) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction",
					children: "Introduction to the DOM"
				}) }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developer.chrome.com/docs/devtools/dom/",
					children: "How to view the DOM in Google Chrome"
				}) }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/highlight_and_inspect_dom_nodes/index.html",
					children: "How to view the DOM in Firefox"
				}) }),
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
export { toc as a, structuredData as i, _02_rendering_ui_exports as n, frontmatter as r, MDXContent as t };
