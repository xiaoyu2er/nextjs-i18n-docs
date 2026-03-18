import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fast-refresh-nPw1Z4SI.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var fast_refresh_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Fast Refresh",
	"description": "Fast Refresh is a hot module reloading experience that gives you instantaneous feedback on edits made to your React components."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Fast refresh is a React feature integrated into Next.js that allows you live reload the browser page while maintaining temporary client-side state when you save changes to a file. It's enabled by default in all Next.js applications on **9.4 or newer**. With Fast Refresh enabled, most edits should be visible within a second."
		},
		{
			"heading": "how-it-works",
			"content": "If you edit a file that &#x2A;*only exports React component(s)**, Fast Refresh will\nupdate the code only for that file, and re-render your component. You can edit\nanything in that file, including styles, rendering logic, event handlers, or\neffects."
		},
		{
			"heading": "how-it-works",
			"content": "If you edit a file with exports that *aren't* React components, Fast Refresh\nwill re-run both that file, and the other files importing it. So if both\n`Button.js` and `Modal.js` import `theme.js`, editing `theme.js` will update\nboth components."
		},
		{
			"heading": "how-it-works",
			"content": "Finally, if you **edit a file** that's **imported by files outside of the\nReact tree**, Fast Refresh **will fall back to doing a full reload**. You\nmight have a file which renders a React component but also exports a value\nthat is imported by a **non-React component**. For example, maybe your\ncomponent also exports a constant, and a non-React utility file imports it. In\nthat case, consider migrating the constant to a separate file and importing it\ninto both files. This will re-enable Fast Refresh to work. Other cases can\nusually be solved in a similar way."
		},
		{
			"heading": "syntax-errors",
			"content": "If you make a syntax error during development, you can fix it and save the file\nagain. The error will disappear automatically, so you won't need to reload the\napp. **You will not lose component state**."
		},
		{
			"heading": "runtime-errors",
			"content": "If you make a mistake that leads to a runtime error inside your component,\nyou'll be greeted with a contextual overlay. Fixing the error will automatically\ndismiss the overlay, without reloading the app."
		},
		{
			"heading": "runtime-errors",
			"content": "Component state will be retained if the error did not occur during rendering. If\nthe error did occur during rendering, React will remount your application using\nthe updated code."
		},
		{
			"heading": "runtime-errors",
			"content": "If you have error boundaries\nin your app (which is a good idea for graceful failures in production), they\nwill retry rendering on the next edit after a rendering error. This means having\nan error boundary can prevent you from always getting reset to the root app\nstate. However, keep in mind that error boundaries shouldn't be *too* granular.\nThey are used by React in production, and should always be designed\nintentionally."
		},
		{
			"heading": "limitations",
			"content": "Fast Refresh tries to preserve local React state in the component you're\nediting, but only if it's safe to do so. Here's a few reasons why you might see\nlocal state being reset on every edit to a file:"
		},
		{
			"heading": "limitations",
			"content": "Local state is not preserved for class components (only function components\nand Hooks preserve state)."
		},
		{
			"heading": "limitations",
			"content": "The file you're editing might have *other* exports in addition to a React\ncomponent."
		},
		{
			"heading": "limitations",
			"content": "Sometimes, a file would export the result of calling a higher-order component\nlike `HOC(WrappedComponent)`. If the returned component is a\nclass, its state will be reset."
		},
		{
			"heading": "limitations",
			"content": "Anonymous arrow functions like `export default () => <div />;` cause Fast Refresh to not preserve local component state. For large codebases you can use our `name-default-component` codemod."
		},
		{
			"heading": "limitations",
			"content": "As more of your codebase moves to function components and Hooks, you can expect\nstate to be preserved in more cases."
		},
		{
			"heading": "tips",
			"content": "Fast Refresh preserves React local state in function components (and Hooks) by\ndefault."
		},
		{
			"heading": "tips",
			"content": "Sometimes you might want to *force* the state to be reset, and a component to\nbe remounted. For example, this can be handy if you're tweaking an animation\nthat only happens on mount. To do this, you can add `// @refresh reset`\nanywhere in the file you're editing. This directive is local to the file, and\ninstructs Fast Refresh to remount components defined in that file on every\nedit."
		},
		{
			"heading": "tips",
			"content": "You can put `console.log` or `debugger;` into the components you edit during\ndevelopment."
		},
		{
			"heading": "tips",
			"content": "Remember that imports are case sensitive. Both fast and full refresh can fail,\nwhen your import doesn't match the actual filename.\nFor example, `'./header'` vs `'./Header'`."
		},
		{
			"heading": "fast-refresh-and-hooks",
			"content": "When possible, Fast Refresh attempts to preserve the state of your component\nbetween edits. In particular, `useState` and `useRef` preserve their previous\nvalues as long as you don't change their arguments or the order of the Hook\ncalls."
		},
		{
			"heading": "fast-refresh-and-hooks",
			"content": "Hooks with dependencies—such as `useEffect`, `useMemo`, and `useCallback`—will\n*always* update during Fast Refresh. Their list of dependencies will be ignored\nwhile Fast Refresh is happening."
		},
		{
			"heading": "fast-refresh-and-hooks",
			"content": "For example, when you edit `useMemo(() => x * 2, [x])` to\n`useMemo(() => x * 10, [x])`, it will re-run even though `x` (the dependency)\nhas not changed. If React didn't do that, your edit wouldn't reflect on the\nscreen!"
		},
		{
			"heading": "fast-refresh-and-hooks",
			"content": "Sometimes, this can lead to unexpected results. For example, even a `useEffect`\nwith an empty array of dependencies would still re-run once during Fast Refresh."
		},
		{
			"heading": "fast-refresh-and-hooks",
			"content": "However, writing code resilient to occasional re-running of `useEffect` is a good practice even\nwithout Fast Refresh. It will make it easier for you to introduce new dependencies to it later on\nand it's enforced by React Strict Mode,\nwhich we highly recommend enabling."
		}
	],
	"headings": [
		{
			"id": "how-it-works",
			"content": "How It Works"
		},
		{
			"id": "error-resilience",
			"content": "Error Resilience"
		},
		{
			"id": "syntax-errors",
			"content": "Syntax Errors"
		},
		{
			"id": "runtime-errors",
			"content": "Runtime Errors"
		},
		{
			"id": "limitations",
			"content": "Limitations"
		},
		{
			"id": "tips",
			"content": "Tips"
		},
		{
			"id": "fast-refresh-and-hooks",
			"content": "Fast Refresh and Hooks"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#how-it-works",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "How It Works" })
	},
	{
		depth: 2,
		url: "#error-resilience",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Error Resilience" })
	},
	{
		depth: 3,
		url: "#syntax-errors",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Syntax Errors" })
	},
	{
		depth: 3,
		url: "#runtime-errors",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Runtime Errors" })
	},
	{
		depth: 2,
		url: "#limitations",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Limitations" })
	},
	{
		depth: 2,
		url: "#tips",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Tips" })
	},
	{
		depth: 2,
		url: "#fast-refresh-and-hooks",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Fast Refresh and Hooks" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		em: "em",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Fast refresh is a React feature integrated into Next.js that allows you live reload the browser page while maintaining temporary client-side state when you save changes to a file. It's enabled by default in all Next.js applications on ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "9.4 or newer" }),
			". With Fast Refresh enabled, most edits should be visible within a second."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "how-it-works",
			children: "How It Works"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"If you edit a file that ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "only exports React component(s)" }),
				", Fast Refresh will\nupdate the code only for that file, and re-render your component. You can edit\nanything in that file, including styles, rendering logic, event handlers, or\neffects."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"If you edit a file with exports that ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "aren't" }),
				" React components, Fast Refresh\nwill re-run both that file, and the other files importing it. So if both\n",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Button.js" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Modal.js" }),
				" import ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "theme.js" }),
				", editing ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "theme.js" }),
				" will update\nboth components."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Finally, if you ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "edit a file" }),
				" that's ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "imported by files outside of the\nReact tree" }),
				", Fast Refresh ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "will fall back to doing a full reload" }),
				". You\nmight have a file which renders a React component but also exports a value\nthat is imported by a ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "non-React component" }),
				". For example, maybe your\ncomponent also exports a constant, and a non-React utility file imports it. In\nthat case, consider migrating the constant to a separate file and importing it\ninto both files. This will re-enable Fast Refresh to work. Other cases can\nusually be solved in a similar way."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "error-resilience",
			children: "Error Resilience"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "syntax-errors",
			children: "Syntax Errors"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you make a syntax error during development, you can fix it and save the file\nagain. The error will disappear automatically, so you won't need to reload the\napp. ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "You will not lose component state" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "runtime-errors",
			children: "Runtime Errors"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If you make a mistake that leads to a runtime error inside your component,\nyou'll be greeted with a contextual overlay. Fixing the error will automatically\ndismiss the overlay, without reloading the app." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Component state will be retained if the error did not occur during rendering. If\nthe error did occur during rendering, React will remount your application using\nthe updated code." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you have ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary",
				children: "error boundaries"
			}),
			"\nin your app (which is a good idea for graceful failures in production), they\nwill retry rendering on the next edit after a rendering error. This means having\nan error boundary can prevent you from always getting reset to the root app\nstate. However, keep in mind that error boundaries shouldn't be ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "too" }),
			" granular.\nThey are used by React in production, and should always be designed\nintentionally."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "limitations",
			children: "Limitations"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Fast Refresh tries to preserve local React state in the component you're\nediting, but only if it's safe to do so. Here's a few reasons why you might see\nlocal state being reset on every edit to a file:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Local state is not preserved for class components (only function components\nand Hooks preserve state)." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The file you're editing might have ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "other" }),
				" exports in addition to a React\ncomponent."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Sometimes, a file would export the result of calling a higher-order component\nlike ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "HOC(WrappedComponent)" }),
				". If the returned component is a\nclass, its state will be reset."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Anonymous arrow functions like ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "export default () => <div />;" }),
				" cause Fast Refresh to not preserve local component state. For large codebases you can use our ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/pages/guides/upgrading/codemods#name-default-component",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "name-default-component" }), " codemod"]
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "As more of your codebase moves to function components and Hooks, you can expect\nstate to be preserved in more cases." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "tips",
			children: "Tips"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Fast Refresh preserves React local state in function components (and Hooks) by\ndefault." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Sometimes you might want to ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "force" }),
				" the state to be reset, and a component to\nbe remounted. For example, this can be handy if you're tweaking an animation\nthat only happens on mount. To do this, you can add ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "// @refresh reset" }),
				"\nanywhere in the file you're editing. This directive is local to the file, and\ninstructs Fast Refresh to remount components defined in that file on every\nedit."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"You can put ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "console.log" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "debugger;" }),
				" into the components you edit during\ndevelopment."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Remember that imports are case sensitive. Both fast and full refresh can fail,\nwhen your import doesn't match the actual filename.\nFor example, ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "'./header'" }),
				" vs ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "'./Header'" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "fast-refresh-and-hooks",
			children: "Fast Refresh and Hooks"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When possible, Fast Refresh attempts to preserve the state of your component\nbetween edits. In particular, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useState" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useRef" }),
			" preserve their previous\nvalues as long as you don't change their arguments or the order of the Hook\ncalls."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Hooks with dependencies—such as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useEffect" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useMemo" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useCallback" }),
			"—will\n",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "always" }),
			" update during Fast Refresh. Their list of dependencies will be ignored\nwhile Fast Refresh is happening."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, when you edit ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useMemo(() => x * 2, [x])" }),
			" to\n",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useMemo(() => x * 10, [x])" }),
			", it will re-run even though ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "x" }),
			" (the dependency)\nhas not changed. If React didn't do that, your edit wouldn't reflect on the\nscreen!"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Sometimes, this can lead to unexpected results. For example, even a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useEffect" }),
			"\nwith an empty array of dependencies would still re-run once during Fast Refresh."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"However, writing code resilient to occasional re-running of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useEffect" }),
			" is a good practice even\nwithout Fast Refresh. It will make it easier for you to introduce new dependencies to it later on\nand it's enforced by ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/config/next-config-js/reactStrictMode",
				children: "React Strict Mode"
			}),
			",\nwhich we highly recommend enabling."
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
export { toc as a, structuredData as i, fast_refresh_exports as n, frontmatter as r, MDXContent as t };
