import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/06-src-directory-DVM0SbyU.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _06_src_directory_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "src Directory",
	"description": "Save pages under the `src` directory as an alternative to the root `pages` directory.",
	"related": { "links": ["app/building-your-application/routing/colocation"] }
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "As an alternative to having the special Next.js `app` or `pages` directories in the root of your project, Next.js also supports the common pattern of placing application code under the `src` directory."
		},
		{
			"heading": void 0,
			"content": "This separates application code from project configuration files which mostly live in the root of a project, which is preferred by some individuals and teams."
		},
		{
			"heading": void 0,
			"content": "To use the `src` directory, move the `app` Router folder or `pages` Router folder to `src/app` or `src/pages` respectively."
		},
		{
			"heading": void 0,
			"content": "> **Good to know**\n>\n> * The `/public` directory should remain in the root of your project.\n> * Config files like `package.json`, `next.config.js` and `tsconfig.json` should remain in the root of your project.\n> * `.env.*` files should remain in the root of your project.\n> * `src/app` or `src/pages` will be ignored if `app` or `pages` are present in the root directory.\n> * If you're using `src`, you'll probably also move other application folders such as `/components` or `/lib`.\n> * If you're using Tailwind CSS, you'll need to add the `/src` prefix to the `tailwind.config.js` file in the content section."
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { Image } = _components;
	if (!Image) _missingMdxReference("Image", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As an alternative to having the special Next.js ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
			" directories in the root of your project, Next.js also supports the common pattern of placing application code under the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "src" }),
			" directory."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This separates application code from project configuration files which mostly live in the root of a project, which is preferred by some individuals and teams." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "src" }),
			" directory, move the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
			" Router folder or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
			" Router folder to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "src/app" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "src/pages" }),
			" respectively."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "An example folder structure with the `src` directory",
			srcLight: "/docs/light/project-organization-src-directory.png",
			srcDark: "/docs/dark/project-organization-src-directory.png",
			width: "1600",
			height: "687"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"The ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "/public" }),
					" directory should remain in the root of your project."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"Config files like ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "package.json" }),
					", ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
					" and ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "tsconfig.json" }),
					" should remain in the root of your project."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: ".env.*" }), " files should remain in the root of your project."] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "src/app" }),
					" or ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "src/pages" }),
					" will be ignored if ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
					" or ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
					" are present in the root directory."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"If you're using ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "src" }),
					", you'll probably also move other application folders such as ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "/components" }),
					" or ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "/lib" }),
					"."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"If you're using Tailwind CSS, you'll need to add the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "/src" }),
					" prefix to the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "tailwind.config.js" }),
					" file in the ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://tailwindcss.com/docs/content-configuration",
						children: "content section"
					}),
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
export { toc as a, structuredData as i, _06_src_directory_exports as n, frontmatter as r, MDXContent as t };
