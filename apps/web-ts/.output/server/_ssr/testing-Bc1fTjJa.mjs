import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testing-Bc1fTjJa.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var testing_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Testing",
	"description": "Learn how to set up Next.js with four commonly used testing tools — Cypress, Playwright, Vitest, and Jest."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "In React and Next.js, there are a few different types of tests you can write, each with its own purpose and use cases. This page provides an overview of types and commonly used tools you can use to test your application."
		},
		{
			"heading": "types-of-tests",
			"content": "**Unit Testing** involves testing individual units (or blocks of code) in isolation. In React, a unit can be a single function, hook, or component."
		},
		{
			"heading": "types-of-tests",
			"content": "**Component Testing** is a more focused version of unit testing where the primary subject of the tests is React components. This may involve testing how components are rendered, their interaction with props, and their behavior in response to user events."
		},
		{
			"heading": "types-of-tests",
			"content": "**Integration Testing** involves testing how multiple units work together. This can be a combination of components, hooks, and functions."
		},
		{
			"heading": "types-of-tests",
			"content": "**End-to-End (E2E) Testing** involves testing user flows in an environment that simulates real user scenarios, like the browser. This means testing specific tasks (e.g. signup flow) in a production-like environment."
		},
		{
			"heading": "types-of-tests",
			"content": "**Snapshot Testing** involves capturing the rendered output of a component and saving it to a snapshot file. When tests run, the current rendered output of the component is compared against the saved snapshot. Changes in the snapshot are used to indicate unexpected changes in behavior."
		},
		{
			"heading": "async-server-components",
			"content": "Since `async` Server Components are new to the React ecosystem, some tools do not fully support them. In the meantime, we recommend using **End-to-End Testing** over **Unit Testing** for `async` components."
		},
		{
			"heading": "guides",
			"content": "See the guides below to learn how to set up Next.js with these commonly used testing tools:"
		}
	],
	"headings": [
		{
			"id": "types-of-tests",
			"content": "Types of tests"
		},
		{
			"id": "async-server-components",
			"content": "Async Server Components"
		},
		{
			"id": "guides",
			"content": "Guides"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#types-of-tests",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Types of tests" })
	},
	{
		depth: 2,
		url: "#async-server-components",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Async Server Components" })
	},
	{
		depth: 2,
		url: "#guides",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Guides" })
	}
];
function _createMdxContent(props) {
	const _components = {
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { AppOnly } = _components;
	if (!AppOnly) _missingMdxReference("AppOnly", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In React and Next.js, there are a few different types of tests you can write, each with its own purpose and use cases. This page provides an overview of types and commonly used tools you can use to test your application." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "types-of-tests",
			children: "Types of tests"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Unit Testing" }),
				" involves testing individual units (or blocks of code) in isolation. In React, a unit can be a single function, hook, or component.",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Component Testing" }), " is a more focused version of unit testing where the primary subject of the tests is React components. This may involve testing how components are rendered, their interaction with props, and their behavior in response to user events."] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Integration Testing" }), " involves testing how multiple units work together. This can be a combination of components, hooks, and functions."] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "End-to-End (E2E) Testing" }), " involves testing user flows in an environment that simulates real user scenarios, like the browser. This means testing specific tasks (e.g. signup flow) in a production-like environment."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Snapshot Testing" }), " involves capturing the rendered output of a component and saving it to a snapshot file. When tests run, the current rendered output of the component is compared against the saved snapshot. Changes in the snapshot are used to indicate unexpected changes in behavior."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(AppOnly, { children: [(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "async-server-components",
			children: "Async Server Components"
		}), (0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Since ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "async" }),
			" Server Components are new to the React ecosystem, some tools do not fully support them. In the meantime, we recommend using ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "End-to-End Testing" }),
			" over ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Unit Testing" }),
			" for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "async" }),
			" components."
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "guides",
			children: "Guides"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "See the guides below to learn how to set up Next.js with these commonly used testing tools:" })
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
export { toc as a, testing_exports as i, frontmatter as n, structuredData as r, MDXContent as t };
