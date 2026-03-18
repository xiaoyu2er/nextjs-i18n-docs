import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/08-turbopack-Dqdnav9d.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _08_turbopack_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Turbopack",
	"description": "Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Turbopack is an **incremental bundler** optimized for JavaScript and TypeScript, written in Rust, and built into **Next.js**. You can use Turbopack with both the Pages and App Router for a **much faster** local development experience."
		},
		{
			"heading": "why-turbopack",
			"content": "We built Turbopack to push the performance of Next.js, including:"
		},
		{
			"heading": "why-turbopack",
			"content": "**Unified Graph:** Next.js supports multiple output environments (e.g., client and server). Managing multiple compilers and stitching bundles together can be tedious. Turbopack uses a **single, unified graph** for all environments."
		},
		{
			"heading": "why-turbopack",
			"content": "**Bundling vs Native ESM:** Some tools skip bundling in development and rely on the browser's native ESM. This works well for small apps but can slow down large apps due to excessive network requests. Turbopack **bundles** in dev, but in an optimized way to keep large apps fast."
		},
		{
			"heading": "why-turbopack",
			"content": "**Incremental Computation:** Turbopack parallelizes work across cores and **caches** results down to the function level. Once a piece of work is done, Turbopack won’t repeat it."
		},
		{
			"heading": "why-turbopack",
			"content": "**Lazy Bundling:** Turbopack only bundles what is actually requested by the dev server. This lazy approach can reduce initial compile times and memory usage."
		},
		{
			"heading": "getting-started",
			"content": "To enable Turbopack in your Next.js project, add the `--turbopack` flag to the `dev` and `build` scripts in your `package.json` file:"
		},
		{
			"heading": "getting-started",
			"content": "Currently, Turbopack for `dev` is stable, while `build` is in alpha. We are actively working on production support as Turbopack moves closer to stability."
		},
		{
			"heading": "supported-features",
			"content": "Turbopack in Next.js has **zero-configuration** for the common use cases. Below is a summary of what is supported out of the box, plus some references to how you can configure Turbopack further when needed."
		},
		{
			"heading": "language-features",
			"content": "Feature"
		},
		{
			"heading": "language-features",
			"content": "Status"
		},
		{
			"heading": "language-features",
			"content": "Notes"
		},
		{
			"heading": "language-features",
			"content": "**JavaScript & TypeScript**"
		},
		{
			"heading": "language-features",
			"content": "**Supported**"
		},
		{
			"heading": "language-features",
			"content": "Uses SWC under the hood. Type-checking is not done by Turbopack (run `tsc --watch` or rely on your IDE for type checks)."
		},
		{
			"heading": "language-features",
			"content": "**ECMAScript (ESNext)**"
		},
		{
			"heading": "language-features",
			"content": "**Supported**"
		},
		{
			"heading": "language-features",
			"content": "Turbopack supports the latest ECMAScript features, matching SWC’s coverage."
		},
		{
			"heading": "language-features",
			"content": "**CommonJS**"
		},
		{
			"heading": "language-features",
			"content": "**Supported**"
		},
		{
			"heading": "language-features",
			"content": "`require()` syntax is handled out of the box."
		},
		{
			"heading": "language-features",
			"content": "**ESM**"
		},
		{
			"heading": "language-features",
			"content": "**Supported**"
		},
		{
			"heading": "language-features",
			"content": "Static and dynamic `import` are fully supported."
		},
		{
			"heading": "language-features",
			"content": "**Babel**"
		},
		{
			"heading": "language-features",
			"content": "Partially Unsupported"
		},
		{
			"heading": "language-features",
			"content": "Turbopack does not include Babel by default. However, you can configure `babel-loader` via the Turbopack config."
		},
		{
			"heading": "framework-and-react-features",
			"content": "Feature"
		},
		{
			"heading": "framework-and-react-features",
			"content": "Status"
		},
		{
			"heading": "framework-and-react-features",
			"content": "Notes"
		},
		{
			"heading": "framework-and-react-features",
			"content": "**JSX / TSX**"
		},
		{
			"heading": "framework-and-react-features",
			"content": "**Supported**"
		},
		{
			"heading": "framework-and-react-features",
			"content": "SWC handles JSX/TSX compilation."
		},
		{
			"heading": "framework-and-react-features",
			"content": "**Fast Refresh**"
		},
		{
			"heading": "framework-and-react-features",
			"content": "**Supported**"
		},
		{
			"heading": "framework-and-react-features",
			"content": "No configuration needed."
		},
		{
			"heading": "framework-and-react-features",
			"content": "**React Server Components (RSC)**"
		},
		{
			"heading": "framework-and-react-features",
			"content": "**Supported**"
		},
		{
			"heading": "framework-and-react-features",
			"content": "For the Next.js App Router. Turbopack ensures correct server/client bundling."
		},
		{
			"heading": "framework-and-react-features",
			"content": "**Root layout creation**"
		},
		{
			"heading": "framework-and-react-features",
			"content": "Unsupported"
		},
		{
			"heading": "framework-and-react-features",
			"content": "Automatic creation of a root layout in App Router is not supported. Turbopack will instruct you to create it manually."
		},
		{
			"heading": "css-and-styling",
			"content": "Feature"
		},
		{
			"heading": "css-and-styling",
			"content": "Status"
		},
		{
			"heading": "css-and-styling",
			"content": "Notes"
		},
		{
			"heading": "css-and-styling",
			"content": "**Global CSS**"
		},
		{
			"heading": "css-and-styling",
			"content": "**Supported**"
		},
		{
			"heading": "css-and-styling",
			"content": "Import `.css` files directly in your application."
		},
		{
			"heading": "css-and-styling",
			"content": "**CSS Modules**"
		},
		{
			"heading": "css-and-styling",
			"content": "**Supported**"
		},
		{
			"heading": "css-and-styling",
			"content": "`.module.css` files work natively (Lightning CSS)."
		},
		{
			"heading": "css-and-styling",
			"content": "**CSS Nesting**"
		},
		{
			"heading": "css-and-styling",
			"content": "**Supported**"
		},
		{
			"heading": "css-and-styling",
			"content": "Lightning CSS supports modern CSS nesting."
		},
		{
			"heading": "css-and-styling",
			"content": "**@import syntax**"
		},
		{
			"heading": "css-and-styling",
			"content": "**Supported**"
		},
		{
			"heading": "css-and-styling",
			"content": "Combine multiple CSS files."
		},
		{
			"heading": "css-and-styling",
			"content": "**PostCSS**"
		},
		{
			"heading": "css-and-styling",
			"content": "**Supported**"
		},
		{
			"heading": "css-and-styling",
			"content": "Automatically processes `postcss.config.js` in a Node.js worker pool. Useful for Tailwind, Autoprefixer, etc."
		},
		{
			"heading": "css-and-styling",
			"content": "**Sass / SCSS**"
		},
		{
			"heading": "css-and-styling",
			"content": "**Supported** (Next.js)"
		},
		{
			"heading": "css-and-styling",
			"content": "For Next.js, Sass is supported out of the box. In the future, Turbopack standalone usage will likely require a loader config."
		},
		{
			"heading": "css-and-styling",
			"content": "**Less**"
		},
		{
			"heading": "css-and-styling",
			"content": "Planned via plugins"
		},
		{
			"heading": "css-and-styling",
			"content": "Not yet supported by default. Will likely require a loader config once custom loaders are stable."
		},
		{
			"heading": "css-and-styling",
			"content": "**Lightning CSS**"
		},
		{
			"heading": "css-and-styling",
			"content": "**In Use**"
		},
		{
			"heading": "css-and-styling",
			"content": "Handles CSS transformations. Some low-usage CSS Modules features (like `:local/:global` as standalone pseudo-classes) are not yet supported. See below for more details."
		},
		{
			"heading": "assets",
			"content": "Feature"
		},
		{
			"heading": "assets",
			"content": "Status"
		},
		{
			"heading": "assets",
			"content": "Notes"
		},
		{
			"heading": "assets",
			"content": "**Static Assets** (images, fonts)"
		},
		{
			"heading": "assets",
			"content": "**Supported**"
		},
		{
			"heading": "assets",
			"content": "Importing `import img from './img.png'` works out of the box. In Next.js, returns an object for the `<Image />` component."
		},
		{
			"heading": "assets",
			"content": "**JSON Imports**"
		},
		{
			"heading": "assets",
			"content": "**Supported**"
		},
		{
			"heading": "assets",
			"content": "Named or default imports from `.json` are supported."
		},
		{
			"heading": "module-resolution",
			"content": "Feature"
		},
		{
			"heading": "module-resolution",
			"content": "Status"
		},
		{
			"heading": "module-resolution",
			"content": "Notes"
		},
		{
			"heading": "module-resolution",
			"content": "**Path Aliases**"
		},
		{
			"heading": "module-resolution",
			"content": "**Supported**"
		},
		{
			"heading": "module-resolution",
			"content": "Reads `tsconfig.json`'s `paths` and `baseUrl`, matching Next.js behavior."
		},
		{
			"heading": "module-resolution",
			"content": "**Manual Aliases**"
		},
		{
			"heading": "module-resolution",
			"content": "**Supported**"
		},
		{
			"heading": "module-resolution",
			"content": "Configure `resolveAlias` in `next.config.js` (similar to `webpack.resolve.alias`)."
		},
		{
			"heading": "module-resolution",
			"content": "**Custom Extensions**"
		},
		{
			"heading": "module-resolution",
			"content": "**Supported**"
		},
		{
			"heading": "module-resolution",
			"content": "Configure `resolveExtensions` in `next.config.js`."
		},
		{
			"heading": "module-resolution",
			"content": "**AMD**"
		},
		{
			"heading": "module-resolution",
			"content": "Partially Supported"
		},
		{
			"heading": "module-resolution",
			"content": "Basic transforms work; advanced AMD usage is limited."
		},
		{
			"heading": "performance-and-fast-refresh",
			"content": "Feature"
		},
		{
			"heading": "performance-and-fast-refresh",
			"content": "Status"
		},
		{
			"heading": "performance-and-fast-refresh",
			"content": "Notes"
		},
		{
			"heading": "performance-and-fast-refresh",
			"content": "**Fast Refresh**"
		},
		{
			"heading": "performance-and-fast-refresh",
			"content": "**Supported**"
		},
		{
			"heading": "performance-and-fast-refresh",
			"content": "Updates JavaScript, TypeScript, and CSS without a full refresh."
		},
		{
			"heading": "performance-and-fast-refresh",
			"content": "**Incremental Bundling**"
		},
		{
			"heading": "performance-and-fast-refresh",
			"content": "**Supported**"
		},
		{
			"heading": "performance-and-fast-refresh",
			"content": "Turbopack lazily builds only what’s requested by the dev server, speeding up large apps."
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "Some features are not yet implemented or not planned:"
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "**Legacy CSS Modules features**"
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "Standalone `:local` and `:global` pseudo-classes (only the function variant `:global(...)` is supported)."
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "The `@value` rule (superseded by CSS variables)."
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "`:import` and `:export` ICSS rules."
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "`composes` in `.module.css` composing a `.css` file. In webpack this would treat the `.css` file as a CSS Module, with Turbopack the `.css` file will always be global. This means that if you want to use `composes` in a CSS Module, you need to change the `.css` file to a `.module.css` file."
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "`@import` in CSS Modules importing `.css` as a CSS Module. In webpack this would treat the `.css` file as a CSS Module, with Turbopack the `.css` file will always be global. This means that if you want to use `@import` in a CSS Module, you need to change the `.css` file to a `.module.css` file."
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "**`webpack()` configuration** in `next.config.js`\nTurbopack replaces webpack, so `webpack()` configs are not recognized. Use the `turbopack` config instead."
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "**AMP**\nNot planned for Turbopack support in Next.js."
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "**Yarn PnP**\nNot planned for Turbopack support in Next.js."
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "**`experimental.urlImports`**\nNot planned for Turbopack."
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "**`experimental.esmExternals`**\nNot planned. Turbopack does not support the legacy `esmExternals` configuration in Next.js."
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "**Some Next.js Experimental Flags**"
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "`experimental.typedRoutes`"
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "`experimental.nextScriptWorkers`"
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "`experimental.sri.algorithm`"
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "`experimental.fallbackNodePolyfills`\nWe plan to implement these in the future."
		},
		{
			"heading": "unsupported-and-unplanned-features",
			"content": "For a full, detailed breakdown of each feature flag and its status, see the Turbopack API Reference."
		},
		{
			"heading": "configuration",
			"content": "Turbopack can be configured via `next.config.js` (or `next.config.ts`) under the `turbopack` key. Configuration options include:"
		},
		{
			"heading": "configuration",
			"content": "**`rules`**\nDefine additional webpack loaders for file transformations."
		},
		{
			"heading": "configuration",
			"content": "**`resolveAlias`**\nCreate manual aliases (like `resolve.alias` in webpack)."
		},
		{
			"heading": "configuration",
			"content": "**`resolveExtensions`**\nChange or extend file extensions for module resolution."
		},
		{
			"heading": "configuration",
			"content": "**`moduleIds`**\nSet how module IDs are generated (`'named'` vs `'deterministic'`)."
		},
		{
			"heading": "configuration",
			"content": "**`treeShaking`**\nEnable or disable tree shaking in dev and future production builds."
		},
		{
			"heading": "configuration",
			"content": "**`memoryLimit`**\nSet a memory limit (in bytes) for Turbopack."
		},
		{
			"heading": "configuration",
			"content": "For more in-depth configuration examples, see the Turbopack config documentation."
		},
		{
			"heading": "generating-trace-files-for-performance-debugging",
			"content": "If you encounter performance or memory issues and want to help the Next.js team diagnose them, you can generate a trace file by appending `NEXT_TURBOPACK_TRACING=1` to your dev command:"
		},
		{
			"heading": "generating-trace-files-for-performance-debugging",
			"content": "This will produce a `.next/trace-turbopack` file. Include that file when creating a GitHub issue on the Next.js repo to help us investigate."
		},
		{
			"heading": "summary",
			"content": "Turbopack is a **Rust-based**, **incremental** bundler designed to make local development and builds fast—especially for large applications. It is integrated into Next.js, offering zero-config CSS, React, and TypeScript support."
		},
		{
			"heading": "summary",
			"content": "Stay tuned for more updates as we continue to improve Turbopack and add production build support. In the meantime, give it a try with `next dev --turbopack` and let us know your feedback."
		},
		{
			"heading": "version-changes",
			"content": "Version"
		},
		{
			"heading": "version-changes",
			"content": "Changes"
		},
		{
			"heading": "version-changes",
			"content": "`v15.3.0`"
		},
		{
			"heading": "version-changes",
			"content": "Experimental support for `build`"
		},
		{
			"heading": "version-changes",
			"content": "`v15.0.0`"
		},
		{
			"heading": "version-changes",
			"content": "Turbopack for `dev` stable"
		}
	],
	"headings": [
		{
			"id": "why-turbopack",
			"content": "Why Turbopack?"
		},
		{
			"id": "getting-started",
			"content": "Getting started"
		},
		{
			"id": "supported-features",
			"content": "Supported features"
		},
		{
			"id": "language-features",
			"content": "Language features"
		},
		{
			"id": "framework-and-react-features",
			"content": "Framework and React features"
		},
		{
			"id": "css-and-styling",
			"content": "CSS and styling"
		},
		{
			"id": "assets",
			"content": "Assets"
		},
		{
			"id": "module-resolution",
			"content": "Module resolution"
		},
		{
			"id": "performance-and-fast-refresh",
			"content": "Performance and Fast Refresh"
		},
		{
			"id": "unsupported-and-unplanned-features",
			"content": "Unsupported and unplanned features"
		},
		{
			"id": "configuration",
			"content": "Configuration"
		},
		{
			"id": "generating-trace-files-for-performance-debugging",
			"content": "Generating trace files for performance debugging"
		},
		{
			"id": "summary",
			"content": "Summary"
		},
		{
			"id": "version-changes",
			"content": "Version Changes"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#why-turbopack",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Why Turbopack?" })
	},
	{
		depth: 2,
		url: "#getting-started",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Getting started" })
	},
	{
		depth: 2,
		url: "#supported-features",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Supported features" })
	},
	{
		depth: 3,
		url: "#language-features",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Language features" })
	},
	{
		depth: 3,
		url: "#framework-and-react-features",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Framework and React features" })
	},
	{
		depth: 3,
		url: "#css-and-styling",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "CSS and styling" })
	},
	{
		depth: 3,
		url: "#assets",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Assets" })
	},
	{
		depth: 3,
		url: "#module-resolution",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Module resolution" })
	},
	{
		depth: 3,
		url: "#performance-and-fast-refresh",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Performance and Fast Refresh" })
	},
	{
		depth: 2,
		url: "#unsupported-and-unplanned-features",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Unsupported and unplanned features" })
	},
	{
		depth: 2,
		url: "#configuration",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Configuration" })
	},
	{
		depth: 2,
		url: "#generating-trace-files-for-performance-debugging",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Generating trace files for performance debugging" })
	},
	{
		depth: 2,
		url: "#summary",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Summary" })
	},
	{
		depth: 2,
		url: "#version-changes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Version Changes" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Turbopack is an ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "incremental bundler" }),
			" optimized for JavaScript and TypeScript, written in Rust, and built into ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Next.js" }),
			". You can use Turbopack with both the Pages and App Router for a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "much faster" }),
			" local development experience."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "why-turbopack",
			children: "Why Turbopack?"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We built Turbopack to push the performance of Next.js, including:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Unified Graph:" }),
				" Next.js supports multiple output environments (e.g., client and server). Managing multiple compilers and stitching bundles together can be tedious. Turbopack uses a ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "single, unified graph" }),
				" for all environments."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Bundling vs Native ESM:" }),
				" Some tools skip bundling in development and rely on the browser's native ESM. This works well for small apps but can slow down large apps due to excessive network requests. Turbopack ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "bundles" }),
				" in dev, but in an optimized way to keep large apps fast."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Incremental Computation:" }),
				" Turbopack parallelizes work across cores and ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "caches" }),
				" results down to the function level. Once a piece of work is done, Turbopack won’t repeat it."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Lazy Bundling:" }), " Turbopack only bundles what is actually requested by the dev server. This lazy approach can reduce initial compile times and memory usage."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "getting-started",
			children: "Getting started"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To enable Turbopack in your Next.js project, add the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--turbopack" }),
			" flag to the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "dev" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "build" }),
			" scripts in your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "package.json" }),
			" file:"
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
			title: "package.json",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "{"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "  \"scripts\""
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ": {"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line highlighted",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "    \"dev\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"next dev --turbopack\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ","
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "    \"build\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"next build --turbopack\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ","
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "    \"start\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"next start\""
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
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Currently, Turbopack for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "dev" }),
			" is stable, while ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "build" }),
			" is in alpha. We are actively working on production support as Turbopack moves closer to stability."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "supported-features",
			children: "Supported features"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Turbopack in Next.js has ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "zero-configuration" }),
			" for the common use cases. Below is a summary of what is supported out of the box, plus some references to how you can configure Turbopack further when needed."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "language-features",
			children: "Language features"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Feature" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Status" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Notes" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "JavaScript & TypeScript" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Uses SWC under the hood. Type-checking is not done by Turbopack (run ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "tsc --watch" }),
					" or rely on your IDE for type checks)."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "ECMAScript (ESNext)" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Turbopack supports the latest ECMAScript features, matching SWC’s coverage." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "CommonJS" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "require()" }), " syntax is handled out of the box."] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "ESM" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Static and dynamic ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "import" }),
					" are fully supported."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Babel" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Partially Unsupported" }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Turbopack does not include Babel by default. However, you can ",
					(0, import_jsx_runtime.jsxs)(_components.a, {
						href: "/docs/app/api-reference/config/next-config-js/turbopack#configuring-webpack-loaders",
						children: [
							"configure ",
							(0, import_jsx_runtime.jsx)(_components.code, { children: "babel-loader" }),
							" via the Turbopack config"
						]
					}),
					"."
				] })
			] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "framework-and-react-features",
			children: "Framework and React features"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Feature" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Status" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Notes" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "JSX / TSX" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "SWC handles JSX/TSX compilation." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Fast Refresh" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "No configuration needed." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "React Server Components (RSC)" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "For the Next.js App Router. Turbopack ensures correct server/client bundling." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Root layout creation" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Unsupported" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Automatic creation of a root layout in App Router is not supported. Turbopack will instruct you to create it manually." })
			] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "css-and-styling",
			children: "CSS and styling"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Feature" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Status" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Notes" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Global CSS" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Import ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: ".css" }),
					" files directly in your application."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "CSS Modules" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: ".module.css" }), " files work natively (Lightning CSS)."] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "CSS Nesting" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Lightning CSS supports ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://lightningcss.dev/",
						children: "modern CSS nesting"
					}),
					"."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "@import syntax" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Combine multiple CSS files." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "PostCSS" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Automatically processes ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "postcss.config.js" }),
					" in a Node.js worker pool. Useful for Tailwind, Autoprefixer, etc."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Sass / SCSS" }) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }), " (Next.js)"] }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "For Next.js, Sass is supported out of the box. In the future, Turbopack standalone usage will likely require a loader config." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Less" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Planned via plugins" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Not yet supported by default. Will likely require a loader config once custom loaders are stable." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Lightning CSS" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "In Use" }) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Handles CSS transformations. Some low-usage CSS Modules features (like ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: ":local/:global" }),
					" as standalone pseudo-classes) are not yet supported. ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "#unsupported-and-unplanned-features",
						children: "See below for more details."
					})
				] })
			] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "assets",
			children: "Assets"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Feature" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Status" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Notes" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsxs)(_components.td, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Static Assets" }), " (images, fonts)"] }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
			(0, import_jsx_runtime.jsxs)(_components.td, { children: [
				"Importing ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "import img from './img.png'" }),
				" works out of the box. In Next.js, returns an object for the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<Image />" }),
				" component."
			] })
		] }), (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "JSON Imports" }) }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
			(0, import_jsx_runtime.jsxs)(_components.td, { children: [
				"Named or default imports from ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".json" }),
				" are supported."
			] })
		] })] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "module-resolution",
			children: "Module resolution"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Feature" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Status" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Notes" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Path Aliases" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Reads ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "tsconfig.json" }),
					"'s ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "paths" }),
					" and ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "baseUrl" }),
					", matching Next.js behavior."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Manual Aliases" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					(0, import_jsx_runtime.jsxs)(_components.a, {
						href: "/docs/app/api-reference/config/next-config-js/turbopack#resolving-aliases",
						children: [
							"Configure ",
							(0, import_jsx_runtime.jsx)(_components.code, { children: "resolveAlias" }),
							" in ",
							(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" })
						]
					}),
					" (similar to ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "webpack.resolve.alias" }),
					")."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Custom Extensions" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/app/api-reference/config/next-config-js/turbopack#resolving-custom-extensions",
					children: [
						"Configure ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "resolveExtensions" }),
						" in ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" })
					]
				}), "."] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "AMD" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Partially Supported" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Basic transforms work; advanced AMD usage is limited." })
			] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "performance-and-fast-refresh",
			children: "Performance and Fast Refresh"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Feature" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Status" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Notes" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Fast Refresh" }) }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: "Updates JavaScript, TypeScript, and CSS without a full refresh." })
		] }), (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Incremental Bundling" }) }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Supported" }) }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: "Turbopack lazily builds only what’s requested by the dev server, speeding up large apps." })
		] })] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "unsupported-and-unplanned-features",
			children: "Unsupported and unplanned features"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Some features are not yet implemented or not planned:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Legacy CSS Modules features" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"Standalone ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ":local" }),
						" and ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ":global" }),
						" pseudo-classes (only the function variant ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ":global(...)" }),
						" is supported)."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"The ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "@value" }),
						" rule (superseded by CSS variables)."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: ":import" }),
						" and ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ":export" }),
						" ICSS rules."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "composes" }),
						" in ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".module.css" }),
						" composing a ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".css" }),
						" file. In webpack this would treat the ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".css" }),
						" file as a CSS Module, with Turbopack the ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".css" }),
						" file will always be global. This means that if you want to use ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "composes" }),
						" in a CSS Module, you need to change the ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".css" }),
						" file to a ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".module.css" }),
						" file."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "@import" }),
						" in CSS Modules importing ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".css" }),
						" as a CSS Module. In webpack this would treat the ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".css" }),
						" file as a CSS Module, with Turbopack the ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".css" }),
						" file will always be global. This means that if you want to use ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "@import" }),
						" in a CSS Module, you need to change the ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".css" }),
						" file to a ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: ".module.css" }),
						" file."
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "webpack()" }), " configuration"] }),
				" in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
				"\nTurbopack replaces webpack, so ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "webpack()" }),
				" configs are not recognized. Use the ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/app/api-reference/config/next-config-js/turbopack",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "turbopack" }), " config"]
				}),
				" instead."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "AMP" }), "\nNot planned for Turbopack support in Next.js."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Yarn PnP" }), "\nNot planned for Turbopack support in Next.js."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.urlImports" }) }), "\nNot planned for Turbopack."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.esmExternals" }) }),
				"\nNot planned. Turbopack does not support the legacy ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "esmExternals" }),
				" configuration in Next.js."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Some Next.js Experimental Flags" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.typedRoutes" }) }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.nextScriptWorkers" }) }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.sri.algorithm" }) }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.fallbackNodePolyfills" }), "\nWe plan to implement these in the future."] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For a full, detailed breakdown of each feature flag and its status, see the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/config/next-config-js/turbopack",
				children: "Turbopack API Reference"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "configuration",
			children: "Configuration"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Turbopack can be configured via ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			" (or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.ts" }),
			") under the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "turbopack" }),
			" key. Configuration options include:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "rules" }) }),
				"\nDefine additional ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/config/next-config-js/turbopack#configuring-webpack-loaders",
					children: "webpack loaders"
				}),
				" for file transformations."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "resolveAlias" }) }),
				"\nCreate manual aliases (like ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "resolve.alias" }),
				" in webpack)."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "resolveExtensions" }) }), "\nChange or extend file extensions for module resolution."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "moduleIds" }) }),
				"\nSet how module IDs are generated (",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "'named'" }),
				" vs ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "'deterministic'" }),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "treeShaking" }) }), "\nEnable or disable tree shaking in dev and future production builds."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "memoryLimit" }) }), "\nSet a memory limit (in bytes) for Turbopack."] }),
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
			title: "next.config.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "module"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "exports"
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
							children: " {"
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
						children: "  turbopack: {"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "    // Example: adding an alias and custom file extension"
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
						children: "    resolveAlias: {"
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
							children: "      underscore: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'lodash'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ","
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
						children: "    },"
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
							children: "    resolveExtensions: ["
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'.mdx'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'.tsx'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'.ts'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'.jsx'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'.js'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'.json'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "],"
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
						children: "  },"
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
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more in-depth configuration examples, see the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/config/next-config-js/turbopack",
				children: "Turbopack config documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "generating-trace-files-for-performance-debugging",
			children: "Generating trace files for performance debugging"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you encounter performance or memory issues and want to help the Next.js team diagnose them, you can generate a trace file by appending ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NEXT_TURBOPACK_TRACING=1" }),
			" to your dev command:"
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
				className: "line",
				children: [
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "NEXT_TURBOPACK_TRACING"
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
						children: "1"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: " next"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " dev"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " --turbopack"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This will produce a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".next/trace-turbopack" }),
			" file. Include that file when creating a GitHub issue on the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js",
				children: "Next.js repo"
			}),
			" to help us investigate."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "summary",
			children: "Summary"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Turbopack is a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Rust-based" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "incremental" }),
			" bundler designed to make local development and builds fast—especially for large applications. It is integrated into Next.js, offering zero-config CSS, React, and TypeScript support."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Stay tuned for more updates as we continue to improve Turbopack and add production build support. In the meantime, give it a try with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev --turbopack" }),
			" and let us know your feedback."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "version-changes",
			children: "Version Changes"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Version" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Changes" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "v15.3.0" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: ["Experimental support for ", (0, import_jsx_runtime.jsx)(_components.code, { children: "build" })] })] }), (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "v15.0.0" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
			"Turbopack for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "dev" }),
			" stable"
		] })] })] })] })
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
export { toc as a, structuredData as i, _08_turbopack_exports as n, frontmatter as r, MDXContent as t };
