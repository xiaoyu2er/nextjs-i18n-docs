import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/accessibility-tsSIMSaj.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var accessibility_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Accessibility",
	"description": "The built-in accessibility features of Next.js."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "The Next.js team is committed to making Next.js accessible to all developers (and their end-users). By adding accessibility features to Next.js by default, we aim to make the Web more inclusive for everyone."
		},
		{
			"heading": "route-announcements",
			"content": "When transitioning between pages rendered on the server (e.g. using the `<a href>` tag) screen readers and other assistive technology announce the page title when the page loads so that users understand that the page has changed."
		},
		{
			"heading": "route-announcements",
			"content": "In addition to traditional page navigations, Next.js also supports client-side transitions for improved performance (using `next/link`). To ensure that client-side transitions are also announced to assistive technology, Next.js includes a route announcer by default."
		},
		{
			"heading": "route-announcements",
			"content": "The Next.js route announcer looks for the page name to announce by first inspecting `document.title`, then the `<h1>` element, and finally the URL pathname. For the most accessible user experience, ensure that each page in your application has a unique and descriptive title."
		},
		{
			"heading": "linting",
			"content": "Next.js provides an integrated ESLint experience out of the box, including custom rules for Next.js. By default, Next.js includes `eslint-plugin-jsx-a11y` to help catch accessibility issues early, including warning on:"
		},
		{
			"heading": "linting",
			"content": "aria-props"
		},
		{
			"heading": "linting",
			"content": "aria-proptypes"
		},
		{
			"heading": "linting",
			"content": "aria-unsupported-elements"
		},
		{
			"heading": "linting",
			"content": "role-has-required-aria-props"
		},
		{
			"heading": "linting",
			"content": "role-supports-aria-props"
		},
		{
			"heading": "linting",
			"content": "For example, this plugin helps ensure you add alt text to `img` tags, use correct `aria-*` attributes, use correct `role` attributes, and more."
		},
		{
			"heading": "accessibility-resources",
			"content": "WebAIM WCAG checklist"
		},
		{
			"heading": "accessibility-resources",
			"content": "WCAG 2.2 Guidelines"
		},
		{
			"heading": "accessibility-resources",
			"content": "The A11y Project"
		},
		{
			"heading": "accessibility-resources",
			"content": "Check color contrast ratios between foreground and background elements"
		},
		{
			"heading": "accessibility-resources",
			"content": "Use `prefers-reduced-motion` when working with animations"
		}
	],
	"headings": [
		{
			"id": "route-announcements",
			"content": "Route Announcements"
		},
		{
			"id": "linting",
			"content": "Linting"
		},
		{
			"id": "accessibility-resources",
			"content": "Accessibility Resources"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#route-announcements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Route Announcements" })
	},
	{
		depth: 2,
		url: "#linting",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Linting" })
	},
	{
		depth: 2,
		url: "#accessibility-resources",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Accessibility Resources" })
	}
];
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Next.js team is committed to making Next.js accessible to all developers (and their end-users). By adding accessibility features to Next.js by default, we aim to make the Web more inclusive for everyone." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "route-announcements",
			children: "Route Announcements"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When transitioning between pages rendered on the server (e.g. using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<a href>" }),
			" tag) screen readers and other assistive technology announce the page title when the page loads so that users understand that the page has changed."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In addition to traditional page navigations, Next.js also supports client-side transitions for improved performance (using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" }),
			"). To ensure that client-side transitions are also announced to assistive technology, Next.js includes a route announcer by default."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The Next.js route announcer looks for the page name to announce by first inspecting ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "document.title" }),
			", then the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<h1>" }),
			" element, and finally the URL pathname. For the most accessible user experience, ensure that each page in your application has a unique and descriptive title."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "linting",
			children: "Linting"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js provides an ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/configuring/eslint",
				children: "integrated ESLint experience"
			}),
			" out of the box, including custom rules for Next.js. By default, Next.js includes ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-plugin-jsx-a11y" }),
			" to help catch accessibility issues early, including warning on:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-props.md?rgh-link-date=2021-06-04T02%3A10%3A36Z",
				children: "aria-props"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-proptypes.md?rgh-link-date=2021-06-04T02%3A10%3A36Z",
				children: "aria-proptypes"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-unsupported-elements.md?rgh-link-date=2021-06-04T02%3A10%3A36Z",
				children: "aria-unsupported-elements"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-has-required-aria-props.md?rgh-link-date=2021-06-04T02%3A10%3A36Z",
				children: "role-has-required-aria-props"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-supports-aria-props.md?rgh-link-date=2021-06-04T02%3A10%3A36Z",
				children: "role-supports-aria-props"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, this plugin helps ensure you add alt text to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "img" }),
			" tags, use correct ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-*" }),
			" attributes, use correct ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "role" }),
			" attributes, and more."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "accessibility-resources",
			children: "Accessibility Resources"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://webaim.org/standards/wcag/checklist",
				children: "WebAIM WCAG checklist"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.w3.org/TR/WCAG22/",
				children: "WCAG 2.2 Guidelines"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.a11yproject.com/",
				children: "The A11y Project"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Check ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developer.mozilla.org/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast",
					children: "color contrast ratios"
				}),
				" between foreground and background elements"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Use ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://web.dev/prefers-reduced-motion/",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "prefers-reduced-motion" })
				}),
				" when working with animations"
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
//#endregion
export { toc as a, structuredData as i, accessibility_exports as n, frontmatter as r, MDXContent as t };
