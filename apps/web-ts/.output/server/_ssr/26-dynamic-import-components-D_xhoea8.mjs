import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/26-dynamic-import-components-D_xhoea8.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _26_dynamic_import_components_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Dynamic Imports for Components",
	"image": "https://nextjs.org/api/learn-og?title=Dynamic%20Imports%20for%20Components&amp;chapter=26",
	"headline": "SEO: Dynamic Imports for Components"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next, let's turn our attention to a React component that is not needed on the initial page load."
		},
		{
			"heading": void 0,
			"content": "React components can also be imported using dynamic imports, but in this case we use it in conjunction with `next/dynamic` to make sure it works just like any other React Component."
		},
		{
			"heading": void 0,
			"content": "We will use this method to delay the loading of our modal with the `Hello World` code sample. By doing this we also remove two further third party libraries from the initial page load."
		},
		{
			"heading": void 0,
			"content": "Open the `pages/index.js` file and add an import for `dynamic` from `next/dynamic` at the beginning of the file:"
		},
		{
			"heading": void 0,
			"content": "We should also remove this line:"
		},
		{
			"heading": void 0,
			"content": "We can now import it as a dynamic component by adding the following at the beginning of the file:"
		},
		{
			"heading": void 0,
			"content": "`CodeSampleModal` will be the default component returned by `../components/CodeSampleModal`. It works like a regular React Component, and you can pass props to it as you normally would."
		},
		{
			"heading": void 0,
			"content": "As we do not need this component on the server, we have used `ssr: false` to disable it."
		},
		{
			"heading": void 0,
			"content": "Next, we want to defer the loading of this component until it's required by the user. To do this, we can wrap the component in a conditional that checks if the modal should be open, and if so, it will be loaded."
		},
		{
			"heading": void 0,
			"content": "Wrap the `CodeSampleModal` component like so:"
		},
		{
			"heading": void 0,
			"content": "Now, when `isModalOpen` is toggled to `true` for the first time, the JavaScript required will be requested."
		},
		{
			"heading": void 0,
			"content": "With these optimizations the vitals should now look healthier. Let's run another Lighthouse report in Chrome DevTools to verify."
		},
		{
			"heading": void 0,
			"content": "We are left with this two optimization suggestions:"
		},
		{
			"heading": void 0,
			"content": "**Use HTTP2**: to solve this problem, we can deploy to somewhere that supports HTTP2 (e.g. Vercel)."
		},
		{
			"heading": void 0,
			"content": "**Image elements do no have explicit `width` and `height`**: This is actually a bug in lighthouse and does not affect site performance."
		},
		{
			"heading": "further-reading",
			"content": "Next.js: Dynamic Imports Documentation"
		}
	],
	"headings": [{
		"id": "further-reading",
		"content": "Further Reading"
	}]
};
var toc = [{
	depth: 3,
	url: "#further-reading",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#further-reading",
		children: "Further Reading"
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next, let's turn our attention to a React component that is not needed on the initial page load." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"React components can also be imported using dynamic imports, but in this case we use it in conjunction with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/dynamic" }),
			" to make sure it works just like any other React Component."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We will use this method to delay the loading of our modal with the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Hello World" }),
			" code sample. By doing this we also remove two further third party libraries from the initial page load."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Open the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/index.js" }),
			" file and add an import for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "dynamic" }),
			" from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/dynamic" }),
			" at the beginning of the file:"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import dynamic from 'next/dynamic';" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We should also remove this line:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import CodeSampleModal from '../components/CodeSampleModal';" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We can now import it as a dynamic component by adding the following at the beginning of the file:" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "const CodeSampleModal = dynamic(() => import('../components/CodeSampleModal'), {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  ssr: false," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "});" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "CodeSampleModal" }),
			" will be the default component returned by ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "../components/CodeSampleModal" }),
			". It works like a regular React Component, and you can pass props to it as you normally would."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As we do not need this component on the server, we have used ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ssr: false" }),
			" to disable it."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next, we want to defer the loading of this component until it's required by the user. To do this, we can wrap the component in a conditional that checks if the modal should be open, and if so, it will be loaded." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Wrap the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "CodeSampleModal" }),
			" component like so:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "{" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  isModalOpen && (" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <CodeSampleModal" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      isOpen={isModalOpen}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      closeModal={() => setIsModalOpen(false)}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    />" })
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Now, when ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "isModalOpen" }),
			" is toggled to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "true" }),
			" for the first time, the JavaScript required will be requested."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "With these optimizations the vitals should now look healthier. Let's run another Lighthouse report in Chrome DevTools to verify." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We are left with this two optimization suggestions:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Use HTTP2" }),
				": to solve this problem, we can deploy to somewhere that supports HTTP2 (e.g. ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://www.vercel.com",
					children: "Vercel"
				}),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [
					"Image elements do no have explicit ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "width" }),
					" and ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "height" })
				] }),
				": This is actually a ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/GoogleChrome/lighthouse/issues/11631",
					children: "bug in lighthouse"
				}),
				" and does not affect site performance."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "further-reading",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#further-reading",
				children: "Further Reading"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Next.js: ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/advanced-features/dynamic-import#basic-usage",
				children: "Dynamic Imports Documentation"
			})] }),
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
export { toc as a, structuredData as i, _26_dynamic_import_components_exports as n, frontmatter as r, MDXContent as t };
