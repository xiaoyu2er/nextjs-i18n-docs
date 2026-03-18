import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/02-eslint-BjneZ4mT.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _02_eslint_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "ESLint",
	"description": "Next.js provides an integrated ESLint experience by default. These conformance rules help you use Next.js in an optimal way."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js provides an integrated ESLint experience out of the box. Add `next lint` as a script to `package.json`:"
		},
		{
			"heading": void 0,
			"content": "Then run `npm run lint` or `yarn lint`:"
		},
		{
			"heading": void 0,
			"content": "If you don't already have ESLint configured in your application, you will be guided through the installation and configuration process."
		},
		{
			"heading": void 0,
			"content": "> You'll see a prompt like this:\n>\n> ? How would you like to configure ESLint?\n>\n> ❯ Strict (recommended)\\\n> Base\\\n> Cancel"
		},
		{
			"heading": void 0,
			"content": "One of the following three options can be selected:"
		},
		{
			"heading": void 0,
			"content": "**Strict**: Includes Next.js' base ESLint configuration along with a stricter Core Web Vitals rule-set. This is the recommended configuration for developers setting up ESLint for the first time."
		},
		{
			"heading": void 0,
			"content": "**Base**: Includes Next.js' base ESLint configuration."
		},
		{
			"heading": void 0,
			"content": "**Cancel**: Does not include any ESLint configuration. Only select this option if you plan on setting up your own custom ESLint configuration."
		},
		{
			"heading": void 0,
			"content": "If either of the two configuration options are selected, Next.js will automatically install `eslint` and `eslint-config-next` as dependencies in your application and create an `.eslintrc.json` file in the root of your project that includes your selected configuration."
		},
		{
			"heading": void 0,
			"content": "You can now run `next lint` every time you want to run ESLint to catch errors. Once ESLint has been set up, it will also automatically run during every build (`next build`). Errors will fail the build, while warnings will not."
		},
		{
			"heading": void 0,
			"content": "> If you do not want ESLint to run during `next build`, refer to the documentation for Ignoring ESLint."
		},
		{
			"heading": void 0,
			"content": "> If you do not want ESLint to run during `next build`, refer to the documentation for Ignoring ESLint."
		},
		{
			"heading": void 0,
			"content": "We recommend using an appropriate integration to view warnings and errors directly in your code editor during development."
		},
		{
			"heading": "eslint-config",
			"content": "The default configuration (`eslint-config-next`) includes everything you need to have an optimal out-of-the-box linting experience in Next.js. If you do not have ESLint already configured in your application, we recommend using `next lint` to set up ESLint along with this configuration."
		},
		{
			"heading": "eslint-config",
			"content": "> If you would like to use `eslint-config-next` along with other ESLint configurations, refer to the Additional Configurations section to learn how to do so without causing any conflicts."
		},
		{
			"heading": "eslint-config",
			"content": "Recommended rule-sets from the following ESLint plugins are all used within `eslint-config-next`:"
		},
		{
			"heading": "eslint-config",
			"content": "`eslint-plugin-react`"
		},
		{
			"heading": "eslint-config",
			"content": "`eslint-plugin-react-hooks`"
		},
		{
			"heading": "eslint-config",
			"content": "`eslint-plugin-next`"
		},
		{
			"heading": "eslint-config",
			"content": "This will take precedence over the configuration from `next.config.js`."
		},
		{
			"heading": "eslint-plugin",
			"content": "Next.js provides an ESLint plugin, `eslint-plugin-next`, already bundled within the base configuration that makes it possible to catch common issues and problems in a Next.js application. The full set of rules is as follows:"
		},
		{
			"heading": "eslint-plugin",
			"content": "Enabled in the recommended configuration"
		},
		{
			"heading": "eslint-plugin",
			"content": "Rule"
		},
		{
			"heading": "eslint-plugin",
			"content": "Description"
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/google-font-display"
		},
		{
			"heading": "eslint-plugin",
			"content": "Enforce font-display behavior with Google Fonts."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/google-font-preconnect"
		},
		{
			"heading": "eslint-plugin",
			"content": "Ensure `preconnect` is used with Google Fonts."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/inline-script-id"
		},
		{
			"heading": "eslint-plugin",
			"content": "Enforce `id` attribute on `next/script` components with inline content."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/next-script-for-ga"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prefer `next/script` component when using the inline script for Google Analytics."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/no-assign-module-variable"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prevent assignment to the `module` variable."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/no-async-client-component"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prevent client components from being async functions."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/no-before-interactive-script-outside-document"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prevent usage of `next/script`'s `beforeInteractive` strategy outside of `pages/_document.js`."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/no-css-tags"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prevent manual stylesheet tags."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/no-document-import-in-page"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prevent importing `next/document` outside of `pages/_document.js`."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/no-duplicate-head"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prevent duplicate usage of `<Head>` in `pages/_document.js`."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/no-head-element"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prevent usage of `<head>` element."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/no-head-import-in-document"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prevent usage of `next/head` in `pages/_document.js`."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/no-html-link-for-pages"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prevent usage of `<a>` elements to navigate to internal Next.js pages."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/no-img-element"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prevent usage of `<img>` element due to slower LCP and higher bandwidth."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/no-page-custom-font"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prevent page-only custom fonts."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/no-script-component-in-head"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prevent usage of `next/script` in `next/head` component."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/no-styled-jsx-in-document"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prevent usage of `styled-jsx` in `pages/_document.js`."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/no-sync-scripts"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prevent synchronous scripts."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/no-title-in-document-head"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prevent usage of `<title>` with `Head` component from `next/document`."
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/no-typos"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prevent common typos in Next.js's data fetching functions"
		},
		{
			"heading": "eslint-plugin",
			"content": "@next/next/no-unwanted-polyfillio"
		},
		{
			"heading": "eslint-plugin",
			"content": "Prevent duplicate polyfills from Polyfill.io."
		},
		{
			"heading": "eslint-plugin",
			"content": "If you already have ESLint configured in your application, we recommend extending from this plugin directly instead of including `eslint-config-next` unless a few conditions are met. Refer to the Recommended Plugin Ruleset to learn more."
		},
		{
			"heading": "rootdir",
			"content": "If you're using `eslint-plugin-next` in a project where Next.js isn't installed in your root directory (such as a monorepo), you can tell `eslint-plugin-next` where to find your Next.js application using the `settings` property in your `.eslintrc`:"
		},
		{
			"heading": "rootdir",
			"content": "`rootDir` can be a path (relative or absolute), a glob (i.e. `\"packages/*/\"`), or an array of paths and/or globs."
		},
		{
			"heading": "linting-custom-directories-and-files",
			"content": "By default, Next.js will run ESLint for all files in the `pages/`, `app/`, `components/`, `lib/`, and `src/` directories. However, you can specify which directories using the `dirs` option in the `eslint` config in `next.config.js` for production builds:"
		},
		{
			"heading": "linting-custom-directories-and-files",
			"content": "Similarly, the `--dir` and `--file` flags can be used for `next lint` to lint specific directories and files:"
		},
		{
			"heading": "caching",
			"content": "To improve performance, information of files processed by ESLint are cached by default. This is stored in `.next/cache` or in your defined build directory. If you include any ESLint rules that depend on more than the contents of a single source file and need to disable the cache, use the `--no-cache` flag with `next lint`."
		},
		{
			"heading": "caching",
			"content": "To improve performance, information of files processed by ESLint are cached by default. This is stored in `.next/cache` or in your defined build directory. If you include any ESLint rules that depend on more than the contents of a single source file and need to disable the cache, use the `--no-cache` flag with `next lint`."
		},
		{
			"heading": "disabling-rules",
			"content": "If you would like to modify or disable any rules provided by the supported plugins (`react`, `react-hooks`, `next`), you can directly change them using the `rules` property in your `.eslintrc`:"
		},
		{
			"heading": "core-web-vitals",
			"content": "The `next/core-web-vitals` rule set is enabled when `next lint` is run for the first time and the **strict** option is selected."
		},
		{
			"heading": "core-web-vitals",
			"content": "`next/core-web-vitals` updates `eslint-plugin-next` to error on a number of rules that are warnings by default if they affect Core Web Vitals."
		},
		{
			"heading": "core-web-vitals",
			"content": "> The `next/core-web-vitals` entry point is automatically included for new applications built with Create Next App."
		},
		{
			"heading": "typescript",
			"content": "In addition to the Next.js ESLint rules, `create-next-app --typescript` will also add TypeScript-specific lint rules with `next/typescript` to your config:"
		},
		{
			"heading": "typescript",
			"content": "Those rules are based on `plugin:@typescript-eslint/recommended`.\nSee typescript-eslint > Configs for more details."
		},
		{
			"heading": "prettier",
			"content": "ESLint also contains code formatting rules, which can conflict with your existing Prettier setup. We recommend including eslint-config-prettier in your ESLint config to make ESLint and Prettier work together."
		},
		{
			"heading": "prettier",
			"content": "First, install the dependency:"
		},
		{
			"heading": "prettier",
			"content": "Then, add `prettier` to your existing ESLint config:"
		},
		{
			"heading": "lint-staged",
			"content": "If you would like to use `next lint` with lint-staged to run the linter on staged git files, you'll have to add the following to the `.lintstagedrc.js` file in the root of your project in order to specify usage of the `--file` flag."
		},
		{
			"heading": "recommended-plugin-ruleset",
			"content": "If you already have ESLint configured in your application and any of the following conditions are true:"
		},
		{
			"heading": "recommended-plugin-ruleset",
			"content": "You have one or more of the following plugins already installed (either separately or through a different config such as `airbnb` or `react-app`):"
		},
		{
			"heading": "recommended-plugin-ruleset",
			"content": "`react`"
		},
		{
			"heading": "recommended-plugin-ruleset",
			"content": "`react-hooks`"
		},
		{
			"heading": "recommended-plugin-ruleset",
			"content": "`jsx-a11y`"
		},
		{
			"heading": "recommended-plugin-ruleset",
			"content": "`import`"
		},
		{
			"heading": "recommended-plugin-ruleset",
			"content": "You've defined specific `parserOptions` that are different from how Babel is configured within Next.js (this is not recommended unless you have customized your Babel configuration)"
		},
		{
			"heading": "recommended-plugin-ruleset",
			"content": "You have `eslint-plugin-import` installed with Node.js and/or TypeScript resolvers defined to handle imports"
		},
		{
			"heading": "recommended-plugin-ruleset",
			"content": "Then we recommend either removing these settings if you prefer how these properties have been configured within `eslint-config-next` or extending directly from the Next.js ESLint plugin instead:"
		},
		{
			"heading": "recommended-plugin-ruleset",
			"content": "The plugin can be installed normally in your project without needing to run `next lint`:"
		},
		{
			"heading": "recommended-plugin-ruleset",
			"content": "This eliminates the risk of collisions or errors that can occur due to importing the same plugin or parser across multiple configurations."
		},
		{
			"heading": "additional-configurations",
			"content": "If you already use a separate ESLint configuration and want to include `eslint-config-next`, ensure that it is extended last after other configurations. For example:"
		},
		{
			"heading": "additional-configurations",
			"content": "The `next` configuration already handles setting default values for the `parser`, `plugins` and `settings` properties. There is no need to manually re-declare any of these properties unless you need a different configuration for your use case."
		},
		{
			"heading": "additional-configurations",
			"content": "If you include any other shareable configurations, **you will need to make sure that these properties are not overwritten or modified**. Otherwise, we recommend removing any configurations that share behavior with the `next` configuration or extending directly from the Next.js ESLint plugin as mentioned above."
		}
	],
	"headings": [
		{
			"id": "eslint-config",
			"content": "ESLint Config"
		},
		{
			"id": "eslint-plugin",
			"content": "ESLint Plugin"
		},
		{
			"id": "custom-settings",
			"content": "Custom Settings"
		},
		{
			"id": "rootdir",
			"content": "`rootDir`"
		},
		{
			"id": "linting-custom-directories-and-files",
			"content": "Linting Custom Directories and Files"
		},
		{
			"id": "caching",
			"content": "Caching"
		},
		{
			"id": "disabling-rules",
			"content": "Disabling Rules"
		},
		{
			"id": "core-web-vitals",
			"content": "Core Web Vitals"
		},
		{
			"id": "typescript",
			"content": "TypeScript"
		},
		{
			"id": "usage-with-other-tools",
			"content": "Usage With Other Tools"
		},
		{
			"id": "prettier",
			"content": "Prettier"
		},
		{
			"id": "lint-staged",
			"content": "lint-staged"
		},
		{
			"id": "migrating-existing-config",
			"content": "Migrating Existing Config"
		},
		{
			"id": "recommended-plugin-ruleset",
			"content": "Recommended Plugin Ruleset"
		},
		{
			"id": "additional-configurations",
			"content": "Additional Configurations"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#eslint-config",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "ESLint Config" })
	},
	{
		depth: 2,
		url: "#eslint-plugin",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "ESLint Plugin" })
	},
	{
		depth: 3,
		url: "#custom-settings",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Custom Settings" })
	},
	{
		depth: 4,
		url: "#rootdir",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("code", { children: "rootDir" }) })
	},
	{
		depth: 2,
		url: "#linting-custom-directories-and-files",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Linting Custom Directories and Files" })
	},
	{
		depth: 2,
		url: "#caching",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Caching" })
	},
	{
		depth: 2,
		url: "#disabling-rules",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Disabling Rules" })
	},
	{
		depth: 3,
		url: "#core-web-vitals",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Core Web Vitals" })
	},
	{
		depth: 3,
		url: "#typescript",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "TypeScript" })
	},
	{
		depth: 2,
		url: "#usage-with-other-tools",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Usage With Other Tools" })
	},
	{
		depth: 3,
		url: "#prettier",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Prettier" })
	},
	{
		depth: 3,
		url: "#lint-staged",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "lint-staged" })
	},
	{
		depth: 2,
		url: "#migrating-existing-config",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Migrating Existing Config" })
	},
	{
		depth: 3,
		url: "#recommended-plugin-ruleset",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Recommended Plugin Ruleset" })
	},
	{
		depth: 3,
		url: "#additional-configurations",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Additional Configurations" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		br: "br",
		code: "code",
		h2: "h2",
		h3: "h3",
		h4: "h4",
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
	}, { AppOnly, Check, PagesOnly } = _components;
	if (!AppOnly) _missingMdxReference("AppOnly", true);
	if (!Check) _missingMdxReference("Check", true);
	if (!PagesOnly) _missingMdxReference("PagesOnly", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js provides an integrated ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://eslint.org/",
				children: "ESLint"
			}),
			" experience out of the box. Add ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }),
			" as a script to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "package.json" }),
			":"
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
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "    \"lint\""
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
							children: "\"next lint\""
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
			"Then run ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "npm run lint" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "yarn lint" }),
			":"
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
			title: "Terminal",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
				className: "line",
				children: [(0, import_jsx_runtime.jsx)(_components.span, {
					style: {
						"--shiki-light": "#6F42C1",
						"--shiki-dark": "#B392F0"
					},
					children: "yarn"
				}), (0, import_jsx_runtime.jsx)(_components.span, {
					style: {
						"--shiki-light": "#032F62",
						"--shiki-dark": "#9ECBFF"
					},
					children: " lint"
				})]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If you don't already have ESLint configured in your application, you will be guided through the installation and configuration process." }),
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
			title: "Terminal",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
				className: "line",
				children: [(0, import_jsx_runtime.jsx)(_components.span, {
					style: {
						"--shiki-light": "#6F42C1",
						"--shiki-dark": "#B392F0"
					},
					children: "yarn"
				}), (0, import_jsx_runtime.jsx)(_components.span, {
					style: {
						"--shiki-light": "#032F62",
						"--shiki-dark": "#9ECBFF"
					},
					children: " lint"
				})]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "You'll see a prompt like this:" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "? How would you like to configure ESLint?" }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"❯ Strict (recommended)",
				(0, import_jsx_runtime.jsx)(_components.br, {}),
				"\n",
				"Base",
				(0, import_jsx_runtime.jsx)(_components.br, {}),
				"\n",
				"Cancel"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "One of the following three options can be selected:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "Strict" }),
					": Includes Next.js' base ESLint configuration along with a stricter ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "#core-web-vitals",
						children: "Core Web Vitals rule-set"
					}),
					". This is the recommended configuration for developers setting up ESLint for the first time."
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
					title: ".eslintrc.json",
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
							children: [
								(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "  \"extends\""
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
									children: "\"next/core-web-vitals\""
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
								children: "}"
							})
						})
					] })
				}) }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Base" }), ": Includes Next.js' base ESLint configuration."] }),
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
					title: ".eslintrc.json",
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
							children: [
								(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "  \"extends\""
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
									children: "\"next\""
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
								children: "}"
							})
						})
					] })
				}) }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Cancel" }), ": Does not include any ESLint configuration. Only select this option if you plan on setting up your own custom ESLint configuration."] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If either of the two configuration options are selected, Next.js will automatically install ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-config-next" }),
			" as dependencies in your application and create an ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".eslintrc.json" }),
			" file in the root of your project that includes your selected configuration."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can now run ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }),
			" every time you want to run ESLint to catch errors. Once ESLint has been set up, it will also automatically run during every build (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			"). Errors will fail the build, while warnings will not."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(AppOnly, { children: (0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"If you do not want ESLint to run during ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
				", refer to the documentation for ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/next-config-js/eslint",
					children: "Ignoring ESLint"
				}),
				"."
			] }),
			"\n"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(PagesOnly, { children: (0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"If you do not want ESLint to run during ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
				", refer to the documentation for ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/api-reference/next-config-js/eslint",
					children: "Ignoring ESLint"
				}),
				"."
			] }),
			"\n"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We recommend using an appropriate ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://eslint.org/docs/user-guide/integrations#editors",
				children: "integration"
			}),
			" to view warnings and errors directly in your code editor during development."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "eslint-config",
			children: "ESLint Config"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The default configuration (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-config-next" }),
			") includes everything you need to have an optimal out-of-the-box linting experience in Next.js. If you do not have ESLint already configured in your application, we recommend using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }),
			" to set up ESLint along with this configuration."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"If you would like to use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-config-next" }),
				" along with other ESLint configurations, refer to the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#additional-configurations",
					children: "Additional Configurations"
				}),
				" section to learn how to do so without causing any conflicts."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Recommended rule-sets from the following ESLint plugins are all used within ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-config-next" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.npmjs.com/package/eslint-plugin-react",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-plugin-react" })
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.npmjs.com/package/eslint-plugin-react-hooks",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-plugin-react-hooks" })
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.npmjs.com/package/@next/eslint-plugin-next",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-plugin-next" })
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This will take precedence over the configuration from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "eslint-plugin",
			children: "ESLint Plugin"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js provides an ESLint plugin, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.npmjs.com/package/@next/eslint-plugin-next",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-plugin-next" })
			}),
			", already bundled within the base configuration that makes it possible to catch common issues and problems in a Next.js application. The full set of rules is as follows:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(Check, { size: 18 }), " Enabled in the recommended configuration"] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { style: { textAlign: "center" } }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Rule" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/google-font-display",
					children: "@next/next/google-font-display"
				}) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Enforce font-display behavior with Google Fonts." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/google-font-preconnect",
					children: "@next/next/google-font-preconnect"
				}) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Ensure ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "preconnect" }),
					" is used with Google Fonts."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/inline-script-id",
					children: "@next/next/inline-script-id"
				}) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Enforce ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "id" }),
					" attribute on ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "next/script" }),
					" components with inline content."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/next-script-for-ga",
					children: "@next/next/next-script-for-ga"
				}) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Prefer ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "next/script" }),
					" component when using the inline script for Google Analytics."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/no-assign-module-variable",
					children: "@next/next/no-assign-module-variable"
				}) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Prevent assignment to the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "module" }),
					" variable."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/no-async-client-component",
					children: "@next/next/no-async-client-component"
				}) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Prevent client components from being async functions." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/no-before-interactive-script-outside-document",
					children: "@next/next/no-before-interactive-script-outside-document"
				}) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Prevent usage of ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "next/script" }),
					"'s ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "beforeInteractive" }),
					" strategy outside of ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_document.js" }),
					"."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/no-css-tags",
					children: "@next/next/no-css-tags"
				}) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Prevent manual stylesheet tags." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/no-document-import-in-page",
					children: "@next/next/no-document-import-in-page"
				}) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Prevent importing ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "next/document" }),
					" outside of ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_document.js" }),
					"."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/no-duplicate-head",
					children: "@next/next/no-duplicate-head"
				}) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Prevent duplicate usage of ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "<Head>" }),
					" in ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_document.js" }),
					"."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/no-head-element",
					children: "@next/next/no-head-element"
				}) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Prevent usage of ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "<head>" }),
					" element."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/no-head-import-in-document",
					children: "@next/next/no-head-import-in-document"
				}) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Prevent usage of ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "next/head" }),
					" in ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_document.js" }),
					"."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/no-html-link-for-pages",
					children: "@next/next/no-html-link-for-pages"
				}) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Prevent usage of ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "<a>" }),
					" elements to navigate to internal Next.js pages."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/no-img-element",
					children: "@next/next/no-img-element"
				}) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Prevent usage of ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "<img>" }),
					" element due to slower LCP and higher bandwidth."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/no-page-custom-font",
					children: "@next/next/no-page-custom-font"
				}) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Prevent page-only custom fonts." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/no-script-component-in-head",
					children: "@next/next/no-script-component-in-head"
				}) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Prevent usage of ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "next/script" }),
					" in ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "next/head" }),
					" component."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/no-styled-jsx-in-document",
					children: "@next/next/no-styled-jsx-in-document"
				}) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Prevent usage of ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "styled-jsx" }),
					" in ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_document.js" }),
					"."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/no-sync-scripts",
					children: "@next/next/no-sync-scripts"
				}) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Prevent synchronous scripts." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/no-title-in-document-head",
					children: "@next/next/no-title-in-document-head"
				}) }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					"Prevent usage of ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "<title>" }),
					" with ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "Head" }),
					" component from ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "next/document" }),
					"."
				] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "@next/next/no-typos" }),
				(0, import_jsx_runtime.jsxs)(_components.td, { children: ["Prevent common typos in ", (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/data-fetching",
					children: "Next.js's data fetching functions"
				})] })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, {
					style: { textAlign: "center" },
					children: (0, import_jsx_runtime.jsx)(Check, { size: 18 })
				}),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/messages/no-unwanted-polyfillio",
					children: "@next/next/no-unwanted-polyfillio"
				}) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Prevent duplicate polyfills from Polyfill.io." })
			] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you already have ESLint configured in your application, we recommend extending from this plugin directly instead of including ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-config-next" }),
			" unless a few conditions are met. Refer to the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#recommended-plugin-ruleset",
				children: "Recommended Plugin Ruleset"
			}),
			" to learn more."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "custom-settings",
			children: "Custom Settings"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "rootdir",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: "rootDir" })
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you're using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-plugin-next" }),
			" in a project where Next.js isn't installed in your root directory (such as a monorepo), you can tell ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-plugin-next" }),
			" where to find your Next.js application using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "settings" }),
			" property in your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".eslintrc" }),
			":"
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
			title: ".eslintrc.json",
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
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "  \"extends\""
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
							children: "\"next\""
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
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "  \"settings\""
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
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "    \"next\""
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
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "      \"rootDir\""
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
							children: "\"packages/my-app/\""
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
						children: "    }"
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
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "rootDir" }),
			" can be a path (relative or absolute), a glob (i.e. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "\"packages/*/\"" }),
			"), or an array of paths and/or globs."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "linting-custom-directories-and-files",
			children: "Linting Custom Directories and Files"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"By default, Next.js will run ESLint for all files in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app/" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "components/" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "lib/" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "src/" }),
			" directories. However, you can specify which directories using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "dirs" }),
			" option in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint" }),
			" config in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			" for production builds:"
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
						children: "  eslint: {"
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
							children: "    dirs: ["
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'pages'"
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
							children: "'utils'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "], "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "// Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)"
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
			"Similarly, the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--dir" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--file" }),
			" flags can be used for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }),
			" to lint specific directories and files:"
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
			title: "Terminal",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
				className: "line",
				children: [
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "next"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " lint"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " --dir"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " pages"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " --dir"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " utils"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " --file"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " bar.js"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "caching",
			children: "Caching"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(AppOnly, { children: (0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To improve performance, information of files processed by ESLint are cached by default. This is stored in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".next/cache" }),
			" or in your defined ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/next-config-js/distDir",
				children: "build directory"
			}),
			". If you include any ESLint rules that depend on more than the contents of a single source file and need to disable the cache, use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--no-cache" }),
			" flag with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }),
			"."
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(PagesOnly, { children: (0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To improve performance, information of files processed by ESLint are cached by default. This is stored in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".next/cache" }),
			" or in your defined ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/distDir",
				children: "build directory"
			}),
			". If you include any ESLint rules that depend on more than the contents of a single source file and need to disable the cache, use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--no-cache" }),
			" flag with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }),
			"."
		] }) }),
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
			title: "Terminal",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
				className: "line",
				children: [
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "next"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " lint"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " --no-cache"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "disabling-rules",
			children: "Disabling Rules"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you would like to modify or disable any rules provided by the supported plugins (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "react" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "react-hooks" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next" }),
			"), you can directly change them using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "rules" }),
			" property in your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".eslintrc" }),
			":"
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
			title: ".eslintrc.json",
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
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "  \"extends\""
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
							children: "\"next\""
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
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "  \"rules\""
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
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "    \"react/no-unescaped-entities\""
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
							children: "\"off\""
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
							children: "    \"@next/next/no-page-custom-font\""
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
							children: "\"off\""
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
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "core-web-vitals",
			children: "Core Web Vitals"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/core-web-vitals" }),
			" rule set is enabled when ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }),
			" is run for the first time and the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "strict" }),
			" option is selected."
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
			title: ".eslintrc.json",
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
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "  \"extends\""
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
							children: "\"next/core-web-vitals\""
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
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/core-web-vitals" }),
			" updates ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-plugin-next" }),
			" to error on a number of rules that are warnings by default if they affect ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://web.dev/vitals/",
				children: "Core Web Vitals"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/core-web-vitals" }),
				" entry point is automatically included for new applications built with ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/cli/create-next-app",
					children: "Create Next App"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "typescript",
			children: "TypeScript"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In addition to the Next.js ESLint rules, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "create-next-app --typescript" }),
			" will also add TypeScript-specific lint rules with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/typescript" }),
			" to your config:"
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
			title: ".eslintrc.json",
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
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "  \"extends\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": ["
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"next/core-web-vitals\""
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
							children: "\"next/typescript\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "]"
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
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Those rules are based on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://typescript-eslint.io/linting/configs#recommended",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "plugin:@typescript-eslint/recommended" })
			}),
			".\nSee ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://typescript-eslint.io/linting/configs",
				children: "typescript-eslint > Configs"
			}),
			" for more details."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "usage-with-other-tools",
			children: "Usage With Other Tools"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "prettier",
			children: "Prettier"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"ESLint also contains code formatting rules, which can conflict with your existing ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://prettier.io/",
				children: "Prettier"
			}),
			" setup. We recommend including ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/prettier/eslint-config-prettier",
				children: "eslint-config-prettier"
			}),
			" in your ESLint config to make ESLint and Prettier work together."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "First, install the dependency:" }),
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
			title: "Terminal",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "npm"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " install"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " --save-dev"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " eslint-config-prettier"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "yarn"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " add"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " --dev"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " eslint-config-prettier"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "pnpm"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " add"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " --save-dev"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " eslint-config-prettier"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "bun"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " add"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " --dev"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " eslint-config-prettier"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Then, add ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "prettier" }),
			" to your existing ESLint config:"
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
			title: ".eslintrc.json",
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
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "  \"extends\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": ["
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"next\""
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
							children: "\"prettier\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "]"
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
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "lint-staged",
			children: "lint-staged"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you would like to use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }),
			" with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/okonet/lint-staged",
				children: "lint-staged"
			}),
			" to run the linter on staged git files, you'll have to add the following to the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".lintstagedrc.js" }),
			" file in the root of your project in order to specify usage of the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--file" }),
			" flag."
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
			title: ".lintstagedrc.js",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " path"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " require"
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
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'path'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ")"
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
							children: "const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " buildEslintCommand"
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
							children: " ("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "filenames"
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
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: "  `next lint --fix --file ${"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "filenames"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "    ."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "map"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "(("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "f"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
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
							children: " path"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "relative"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "process"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "cwd"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "(), "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "f"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "))"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "    ."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "join"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "' --file '"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: ")"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "}`"
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: "  '*.{js,jsx,ts,tsx}'"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ": [buildEslintCommand],"
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
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "migrating-existing-config",
			children: "Migrating Existing Config"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "recommended-plugin-ruleset",
			children: "Recommended Plugin Ruleset"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If you already have ESLint configured in your application and any of the following conditions are true:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"You have one or more of the following plugins already installed (either separately or through a different config such as ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "airbnb" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "react-app" }),
				"):",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "react" }) }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "react-hooks" }) }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "jsx-a11y" }) }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "import" }) }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"You've defined specific ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "parserOptions" }),
				" that are different from how Babel is configured within Next.js (this is not recommended unless you have ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/configuring/babel",
					children: "customized your Babel configuration"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"You have ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-plugin-import" }),
				" installed with Node.js and/or TypeScript ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/benmosher/eslint-plugin-import#resolvers",
					children: "resolvers"
				}),
				" defined to handle imports"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Then we recommend either removing these settings if you prefer how these properties have been configured within ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-config-next" })
			}),
			" or extending directly from the Next.js ESLint plugin instead:"
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
						children: "  extends: ["
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
						children: "    //..."
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: "    'plugin:@next/next/recommended'"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ","
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
						children: "  ],"
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
			"The plugin can be installed normally in your project without needing to run ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }),
			":"
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
			title: "Terminal",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "npm"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " install"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " --save-dev"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " @next/eslint-plugin-next"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "yarn"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " add"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " --dev"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " @next/eslint-plugin-next"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "pnpm"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " add"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " --save-dev"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " @next/eslint-plugin-next"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "bun"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " add"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " --dev"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " @next/eslint-plugin-next"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This eliminates the risk of collisions or errors that can occur due to importing the same plugin or parser across multiple configurations." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "additional-configurations",
			children: "Additional Configurations"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you already use a separate ESLint configuration and want to include ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-config-next" }),
			", ensure that it is extended last after other configurations. For example:"
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
			title: ".eslintrc.json",
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
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "  \"extends\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": ["
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"eslint:recommended\""
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
							children: "\"next\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "]"
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
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next" }),
			" configuration already handles setting default values for the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "parser" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "plugins" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "settings" }),
			" properties. There is no need to manually re-declare any of these properties unless you need a different configuration for your use case."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you include any other shareable configurations, ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "you will need to make sure that these properties are not overwritten or modified" }),
			". Otherwise, we recommend removing any configurations that share behavior with the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next" }),
			" configuration or extending directly from the Next.js ESLint plugin as mentioned above."
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
export { toc as a, structuredData as i, _02_eslint_exports as n, frontmatter as r, MDXContent as t };
