import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/01-installation-DpNO6Zx7.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _01_installation_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Installation",
	"description": "Learn how to create a new Next.js application with the `create-next-app` CLI, and set up TypeScript, ESLint, and Module Path Aliases."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Create a new Next.js app and run it locally."
		},
		{
			"heading": "quick-start",
			"content": "Create a new Next.js app named `my-app`"
		},
		{
			"heading": "quick-start",
			"content": "`cd my-app` and start the dev server."
		},
		{
			"heading": "quick-start",
			"content": "Visit `http://localhost:3000`."
		},
		{
			"heading": "quick-start",
			"content": "`--yes` skips prompts using saved preferences or defaults. The default setup enables TypeScript, Tailwind, App Router, and Turbopack, with import alias `@/*`."
		},
		{
			"heading": "system-requirements",
			"content": "Before you begin, make sure your system meets the following requirements:"
		},
		{
			"heading": "system-requirements",
			"content": "Node.js 18.18 or later."
		},
		{
			"heading": "system-requirements",
			"content": "macOS, Windows (including WSL), or Linux."
		},
		{
			"heading": "create-with-the-cli",
			"content": "The quickest way to create a new Next.js app is using `create-next-app`, which sets up everything automatically for you. To create a project, run:"
		},
		{
			"heading": "create-with-the-cli",
			"content": "On installation, you'll see the following prompts:"
		},
		{
			"heading": "create-with-the-cli",
			"content": "After the prompts, `create-next-app` will create a folder with your project name and install the required dependencies."
		},
		{
			"heading": "manual-installation",
			"content": "To manually create a new Next.js app, install the required packages:"
		},
		{
			"heading": "manual-installation",
			"content": "> **Good to know**: The App Router uses React canary releases built-in, which include all the stable React 19 changes, as well as newer features being validated in frameworks. The Pages Router uses the React version you install in `package.json`."
		},
		{
			"heading": "manual-installation",
			"content": "Then, add the following scripts to your `package.json` file:"
		},
		{
			"heading": "manual-installation",
			"content": "These scripts refer to the different stages of developing an application:"
		},
		{
			"heading": "manual-installation",
			"content": "`next dev --turbopack`: Starts the development server using Turbopack."
		},
		{
			"heading": "manual-installation",
			"content": "`next build`: Builds the application for production."
		},
		{
			"heading": "manual-installation",
			"content": "`next start`: Starts the production server."
		},
		{
			"heading": "manual-installation",
			"content": "`eslint`: Runs ESLint."
		},
		{
			"heading": "manual-installation",
			"content": "Turbopack is stable for `dev`. For production builds, Turbopack is in beta. To try it, run `next build --turbopack`. See the Turbopack docs for status and caveats."
		},
		{
			"heading": "create-the-app-directory",
			"content": "Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files."
		},
		{
			"heading": "create-the-app-directory",
			"content": "Create an `app` folder. Then, inside `app`, create a `layout.tsx` file. This file is the root layout. It's required and must contain the `<html>` and `<body>` tags."
		},
		{
			"heading": "create-the-app-directory",
			"content": "Create a home page `app/page.tsx` with some initial content:"
		},
		{
			"heading": "create-the-app-directory",
			"content": "Both `layout.tsx` and `page.tsx` will be rendered when the user visits the root of your application (`/`)."
		},
		{
			"heading": "create-the-app-directory",
			"content": "> **Good to know**:\n>\n> * If you forget to create the root layout, Next.js will automatically create this file when running the development server with `next dev`.\n> * You can optionally use a `src` folder in the root of your project to separate your application's code from configuration files."
		},
		{
			"heading": "create-the-pages-directory",
			"content": "Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files."
		},
		{
			"heading": "create-the-pages-directory",
			"content": "Create a `pages` directory at the root of your project. Then, add an `index.tsx` file inside your `pages` folder. This will be your home page (`/`):"
		},
		{
			"heading": "create-the-pages-directory",
			"content": "Next, add an `_app.tsx` file inside `pages/` to define the global layout. Learn more about the custom App file."
		},
		{
			"heading": "create-the-pages-directory",
			"content": "Finally, add a `_document.tsx` file inside `pages/` to control the initial response from the server. Learn more about the custom Document file."
		},
		{
			"heading": "create-the-public-folder-optional",
			"content": "Create a `public` folder at the root of your project to store static assets such as images, fonts, etc. Files inside `public` can then be referenced by your code starting from the base URL (`/`)."
		},
		{
			"heading": "create-the-public-folder-optional",
			"content": "You can then reference these assets using the root path (`/`). For example, `public/profile.png` can be referenced as `/profile.png`:"
		},
		{
			"heading": "run-the-development-server",
			"content": "Run `npm run dev` to start the development server."
		},
		{
			"heading": "run-the-development-server",
			"content": "Visit `http://localhost:3000` to view your application."
		},
		{
			"heading": "run-the-development-server",
			"content": "Edit the `app/page.tsx``pages/index.tsx` file and save it to see the updated result in your browser."
		},
		{
			"heading": "set-up-typescript",
			"content": "> Minimum TypeScript version: `v4.5.2`"
		},
		{
			"heading": "set-up-typescript",
			"content": "Next.js comes with built-in TypeScript support. To add TypeScript to your project, rename a file to `.ts` / `.tsx` and run `next dev`. Next.js will automatically install the necessary dependencies and add a `tsconfig.json` file with the recommended config options."
		},
		{
			"heading": "ide-plugin",
			"content": "Next.js includes a custom TypeScript plugin and type checker, which VSCode and other code editors can use for advanced type-checking and auto-completion."
		},
		{
			"heading": "ide-plugin",
			"content": "You can enable the plugin in VS Code by:"
		},
		{
			"heading": "ide-plugin",
			"content": "Opening the command palette (`Ctrl/⌘` + `Shift` + `P`)"
		},
		{
			"heading": "ide-plugin",
			"content": "Searching for \"TypeScript: Select TypeScript Version\""
		},
		{
			"heading": "ide-plugin",
			"content": "Selecting \"Use Workspace Version\""
		},
		{
			"heading": "ide-plugin",
			"content": "See the TypeScript reference page for more information."
		},
		{
			"heading": "set-up-eslint",
			"content": "Next.js comes with built-in ESLint. It automatically installs the necessary packages and configures the proper settings when you create a new project with `create-next-app`."
		},
		{
			"heading": "set-up-eslint",
			"content": "To manually add ESLint to an existing project, add `next lint` as a script to `package.json`:"
		},
		{
			"heading": "set-up-eslint",
			"content": "Then, run `npm run lint` and you will be guided through the installation and configuration process."
		},
		{
			"heading": "set-up-eslint",
			"content": "You'll see a prompt like this:"
		},
		{
			"heading": "set-up-eslint",
			"content": "> ? How would you like to configure ESLint?\n>\n> ❯ Strict (recommended)\n> Base\n> Cancel"
		},
		{
			"heading": "set-up-eslint",
			"content": "**Strict**: Includes Next.js' base ESLint configuration along with a stricter Core Web Vitals rule-set. This is the recommended configuration for developers setting up ESLint for the first time."
		},
		{
			"heading": "set-up-eslint",
			"content": "**Base**: Includes Next.js' base ESLint configuration."
		},
		{
			"heading": "set-up-eslint",
			"content": "**Cancel**: Skip configuration. Select this option if you plan on setting up your own custom ESLint configuration."
		},
		{
			"heading": "set-up-eslint",
			"content": "If `Strict` or `Base` are selected, Next.js will automatically install `eslint` and `eslint-config-next` as dependencies in your application and create a configuration file in the root of your project."
		},
		{
			"heading": "set-up-eslint",
			"content": "The ESLint config generated by `next lint` uses the older `.eslintrc.json` format. ESLint supports both the legacy `.eslintrc.json` and the newer `eslint.config.mjs` format."
		},
		{
			"heading": "set-up-eslint",
			"content": "You can manually replace `.eslintrc.json` with an `eslint.config.mjs` file using the setup recommended in our ESLint API reference, and installing the `@eslint/eslintrc` package. This more closely matches the ESLint setup used by `create-next-app`."
		},
		{
			"heading": "set-up-eslint",
			"content": "You can now run `next lint` every time you want to run ESLint to catch errors. Once ESLint has been set up, it will also automatically run during every build (`next build`). Errors will fail the build, while warnings will not."
		},
		{
			"heading": "set-up-eslint",
			"content": "See the ESLint Plugin page for more information."
		},
		{
			"heading": "set-up-absolute-imports-and-module-path-aliases",
			"content": "Next.js has in-built support for the `\"paths\"` and `\"baseUrl\"` options of `tsconfig.json` and `jsconfig.json` files."
		},
		{
			"heading": "set-up-absolute-imports-and-module-path-aliases",
			"content": "These options allow you to alias project directories to absolute paths, making it easier and cleaner to import modules. For example:"
		},
		{
			"heading": "set-up-absolute-imports-and-module-path-aliases",
			"content": "To configure absolute imports, add the `baseUrl` configuration option to your `tsconfig.json` or `jsconfig.json` file. For example:"
		},
		{
			"heading": "set-up-absolute-imports-and-module-path-aliases",
			"content": "In addition to configuring the `baseUrl` path, you can use the `\"paths\"` option to `\"alias\"` module paths."
		},
		{
			"heading": "set-up-absolute-imports-and-module-path-aliases",
			"content": "For example, the following configuration maps `@/components/*` to `components/*`:"
		},
		{
			"heading": "set-up-absolute-imports-and-module-path-aliases",
			"content": "Each of the `\"paths\"` are relative to the `baseUrl` location."
		}
	],
	"headings": [
		{
			"id": "quick-start",
			"content": "Quick start"
		},
		{
			"id": "system-requirements",
			"content": "System requirements"
		},
		{
			"id": "create-with-the-cli",
			"content": "Create with the CLI"
		},
		{
			"id": "manual-installation",
			"content": "Manual installation"
		},
		{
			"id": "create-the-app-directory",
			"content": "Create the `app` directory"
		},
		{
			"id": "create-the-pages-directory",
			"content": "Create the `pages` directory"
		},
		{
			"id": "create-the-public-folder-optional",
			"content": "Create the `public` folder (optional)"
		},
		{
			"id": "run-the-development-server",
			"content": "Run the development server"
		},
		{
			"id": "set-up-typescript",
			"content": "Set up TypeScript"
		},
		{
			"id": "ide-plugin",
			"content": "IDE Plugin"
		},
		{
			"id": "set-up-eslint",
			"content": "Set up ESLint"
		},
		{
			"id": "set-up-absolute-imports-and-module-path-aliases",
			"content": "Set up Absolute Imports and Module Path Aliases"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#quick-start",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Quick start" })
	},
	{
		depth: 2,
		url: "#system-requirements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "System requirements" })
	},
	{
		depth: 2,
		url: "#create-with-the-cli",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Create with the CLI" })
	},
	{
		depth: 2,
		url: "#manual-installation",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Manual installation" })
	},
	{
		depth: 3,
		url: "#create-the-app-directory",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Create the ",
			(0, import_jsx_runtime.jsx)("code", { children: "app" }),
			" directory"
		] })
	},
	{
		depth: 3,
		url: "#create-the-pages-directory",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Create the ",
			(0, import_jsx_runtime.jsx)("code", { children: "pages" }),
			" directory"
		] })
	},
	{
		depth: 3,
		url: "#create-the-public-folder-optional",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Create the ",
			(0, import_jsx_runtime.jsx)("code", { children: "public" }),
			" folder (optional)"
		] })
	},
	{
		depth: 2,
		url: "#run-the-development-server",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Run the development server" })
	},
	{
		depth: 2,
		url: "#set-up-typescript",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Set up TypeScript" })
	},
	{
		depth: 3,
		url: "#ide-plugin",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "IDE Plugin" })
	},
	{
		depth: 2,
		url: "#set-up-eslint",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Set up ESLint" })
	},
	{
		depth: 2,
		url: "#set-up-absolute-imports-and-module-path-aliases",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Set up Absolute Imports and Module Path Aliases" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { AppOnly, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, Image, PagesOnly } = _components;
	if (!AppOnly) _missingMdxReference("AppOnly", true);
	if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
	if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
	if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
	if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
	if (!Image) _missingMdxReference("Image", true);
	if (!PagesOnly) _missingMdxReference("PagesOnly", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		"\n",
		(0, import_jsx_runtime.jsxs)(AppOnly, { children: [
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Create a new Next.js app and run it locally." }),
			(0, import_jsx_runtime.jsx)(_components.h2, {
				id: "quick-start",
				children: "Quick start"
			}),
			(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Create a new Next.js app named ", (0, import_jsx_runtime.jsx)(_components.code, { children: "my-app" })] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "cd my-app" }), " and start the dev server."] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"Visit ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "http://localhost:3000" }),
					"."
				] }),
				"\n"
			] }),
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
				children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
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
								children: " create"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								},
								children: " next-app@latest"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								},
								children: " my-app"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#005CC5",
									"--shiki-dark": "#79B8FF"
								},
								children: " --yes"
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
							children: "cd"
						}), (0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " my-app"
						})]
					}),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.span, {
						className: "line",
						children: [(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "pnpm"
						}), (0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " dev"
						})]
					})
				] })
			}) }),
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
				children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
					(0, import_jsx_runtime.jsxs)(_components.span, {
						className: "line",
						children: [
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#6F42C1",
									"--shiki-dark": "#B392F0"
								},
								children: "npx"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								},
								children: " create-next-app@latest"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								},
								children: " my-app"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#005CC5",
									"--shiki-dark": "#79B8FF"
								},
								children: " --yes"
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
							children: "cd"
						}), (0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " my-app"
						})]
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
								children: "npm"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								},
								children: " run"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								},
								children: " dev"
							})
						]
					})
				] })
			}) }),
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
				children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
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
								children: " create"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								},
								children: " next-app@latest"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								},
								children: " my-app"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#005CC5",
									"--shiki-dark": "#79B8FF"
								},
								children: " --yes"
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
							children: "cd"
						}), (0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " my-app"
						})]
					}),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.span, {
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
							children: " dev"
						})]
					})
				] })
			}) }),
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
				children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
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
								children: " create"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								},
								children: " next-app@latest"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								},
								children: " my-app"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#005CC5",
									"--shiki-dark": "#79B8FF"
								},
								children: " --yes"
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
							children: "cd"
						}), (0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " my-app"
						})]
					}),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.span, {
						className: "line",
						children: [(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "bun"
						}), (0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " dev"
						})]
					})
				] })
			}) }),
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "--yes" }),
					" skips prompts using saved preferences or defaults. The default setup enables TypeScript, Tailwind, App Router, and Turbopack, with import alias ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "@/*" }),
					"."
				] }),
				"\n"
			] })
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "system-requirements",
			children: "System requirements"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Before you begin, make sure your system meets the following requirements:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nodejs.org/",
				children: "Node.js 18.18"
			}), " or later."] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "macOS, Windows (including WSL), or Linux." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "create-with-the-cli",
			children: "Create with the CLI"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The quickest way to create a new Next.js app is using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/cli/create-next-app",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "create-next-app" })
			}),
			", which sets up everything automatically for you. To create a project, run:"
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
					children: "npx"
				}), (0, import_jsx_runtime.jsx)(_components.span, {
					style: {
						"--shiki-light": "#032F62",
						"--shiki-dark": "#9ECBFF"
					},
					children: " create-next-app@latest"
				})]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "On installation, you'll see the following prompts:" }),
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "What is your project named? my-app" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Would you like to use TypeScript? No / Yes" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Would you like to use ESLint? No / Yes" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Would you like to use Tailwind CSS? No / Yes" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Would you like your code inside a `src/` directory? No / Yes" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Would you like to use App Router? (recommended) No / Yes" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Would you like to use Turbopack? (recommended) No / Yes" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Would you like to customize the import alias (`@/*` by default)? No / Yes" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "What import alias would you like configured? @/*" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"After the prompts, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/cli/create-next-app",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "create-next-app" })
			}),
			" will create a folder with your project name and install the required dependencies."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "manual-installation",
			children: "Manual installation"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To manually create a new Next.js app, install the required packages:" }),
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
						children: " i"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " next@latest"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react@latest"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react-dom@latest"
					})
				]
			}) })
		}) }),
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
						children: " i"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " next@latest"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react@latest"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react-dom@latest"
					})
				]
			}) })
		}) }),
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
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " next@latest"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react@latest"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react-dom@latest"
					})
				]
			}) })
		}) }),
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
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " next@latest"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react@latest"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react-dom@latest"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }),
				": The App Router uses ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://react.dev/blog/2023/05/03/react-canaries",
					children: "React canary releases"
				}),
				" built-in, which include all the stable React 19 changes, as well as newer features being validated in frameworks. The Pages Router uses the React version you install in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "package.json" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Then, add the following scripts to your ",
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
					className: "line",
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
							children: "\"next build\""
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
							children: "\"eslint\""
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "These scripts refer to the different stages of developing an application:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev --turbopack" }), ": Starts the development server using Turbopack."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }), ": Builds the application for production."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }), ": Starts the production server."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint" }), ": Runs ESLint."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Turbopack is stable for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "dev" }),
			". For production builds, Turbopack is in beta. To try it, run ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build --turbopack" }),
			". See the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/turbopack",
				children: "Turbopack docs"
			}),
			" for status and caveats."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(AppOnly, { children: [
			(0, import_jsx_runtime.jsxs)(_components.h3, {
				id: "create-the-app-directory",
				children: [
					"Create the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
					" directory"
				]
			}),
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files." }),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Create an ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
				" folder. Then, inside ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app" }),
				", create a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.tsx" }),
				" file. This file is the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/layout#root-layout",
					children: "root layout"
				}),
				". It's required and must contain the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<html>" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<body>" }),
				" tags."
			] }),
			(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
				defaultValue: "app/layout.tsx",
				children: [
					(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "app/layout.tsx",
						children: "app/layout.tsx"
					}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "app/layout.js",
						children: "app/layout.js"
					})] }),
					(0, import_jsx_runtime.jsx)(CodeBlockTab, {
						value: "app/layout.tsx",
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
											children: " RootLayout"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "({"
										})
									]
								}),
								"\n",
								(0, import_jsx_runtime.jsxs)(_components.span, {
									className: "line",
									children: [(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "  children"
									}), (0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ","
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
											children: "}"
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
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: "  children"
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
											children: " React"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "ReactNode"
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
										children: "}) {"
									})
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
												"--shiki-light": "#22863A",
												"--shiki-dark": "#85E89D"
											},
											children: "html"
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
											children: ">{children}</"
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
												"--shiki-light": "#22863A",
												"--shiki-dark": "#85E89D"
											},
											children: "html"
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
						value: "app/layout.js",
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
											children: " RootLayout"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "({ "
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: "children"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " }) {"
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
												"--shiki-light": "#22863A",
												"--shiki-dark": "#85E89D"
											},
											children: "html"
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
											children: ">{children}</"
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
												"--shiki-light": "#22863A",
												"--shiki-dark": "#85E89D"
											},
											children: "html"
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
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Create a home page ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app/page.tsx" }),
				" with some initial content:"
			] }),
			(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
				defaultValue: "app/page.tsx",
				children: [
					(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "app/page.tsx",
						children: "app/page.tsx"
					}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "app/page.js",
						children: "app/page.js"
					})] }),
					(0, import_jsx_runtime.jsx)(CodeBlockTab, {
						value: "app/page.tsx",
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
											children: " Page"
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
									children: [
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "  return"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " <"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#22863A",
												"--shiki-dark": "#85E89D"
											},
											children: "h1"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: ">Hello, Next.js!</"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#22863A",
												"--shiki-dark": "#85E89D"
											},
											children: "h1"
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
										children: "}"
									})
								})
							] })
						}) })
					}),
					(0, import_jsx_runtime.jsx)(CodeBlockTab, {
						value: "app/page.js",
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
											children: " Page"
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
									children: [
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "  return"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " <"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#22863A",
												"--shiki-dark": "#85E89D"
											},
											children: "h1"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: ">Hello, Next.js!</"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#22863A",
												"--shiki-dark": "#85E89D"
											},
											children: "h1"
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
										children: "}"
									})
								})
							] })
						}) })
					})
				]
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Both ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.tsx" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "page.tsx" }),
				" will be rendered when the user visits the root of your application (",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/" }),
				")."
			] }),
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "App Folder Structure",
				srcLight: "/docs/light/app-getting-started.png",
				srcDark: "/docs/dark/app-getting-started.png",
				width: "1600",
				height: "363"
			}),
			(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }), ":"] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"If you forget to create the root layout, Next.js will automatically create this file when running the development server with ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
						"."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"You can optionally use a ",
						(0, import_jsx_runtime.jsxs)(_components.a, {
							href: "/docs/app/api-reference/file-conventions/src-folder",
							children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "src" }), " folder"]
						}),
						" in the root of your project to separate your application's code from configuration files."
					] }),
					"\n"
				] }),
				"\n"
			] })
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(PagesOnly, { children: [
			(0, import_jsx_runtime.jsxs)(_components.h3, {
				id: "create-the-pages-directory",
				children: [
					"Create the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
					" directory"
				]
			}),
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files." }),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Create a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
				" directory at the root of your project. Then, add an ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "index.tsx" }),
				" file inside your ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
				" folder. This will be your home page (",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/" }),
				"):"
			] }),
			(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
				defaultValue: "pages/index.tsx",
				children: [
					(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "pages/index.tsx",
						children: "pages/index.tsx"
					}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "pages/index.js",
						children: "pages/index.js"
					})] }),
					(0, import_jsx_runtime.jsx)(CodeBlockTab, {
						value: "pages/index.tsx",
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
											children: " Page"
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
									children: [
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "  return"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " <"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#22863A",
												"--shiki-dark": "#85E89D"
											},
											children: "h1"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: ">Hello, Next.js!</"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#22863A",
												"--shiki-dark": "#85E89D"
											},
											children: "h1"
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
										children: "}"
									})
								})
							] })
						}) })
					}),
					(0, import_jsx_runtime.jsx)(CodeBlockTab, {
						value: "pages/index.js",
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
											children: " Page"
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
									children: [
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "  return"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " <"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#22863A",
												"--shiki-dark": "#85E89D"
											},
											children: "h1"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: ">Hello, Next.js!</"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#22863A",
												"--shiki-dark": "#85E89D"
											},
											children: "h1"
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
										children: "}"
									})
								})
							] })
						}) })
					})
				]
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Next, add an ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "_app.tsx" }),
				" file inside ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/" }),
				" to define the global layout. Learn more about the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/routing/custom-app",
					children: "custom App file"
				}),
				"."
			] }),
			(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
				defaultValue: "pages/_app.tsx",
				children: [
					(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "pages/_app.tsx",
						children: "pages/_app.tsx"
					}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "pages/_app.js",
						children: "pages/_app.js"
					})] }),
					(0, import_jsx_runtime.jsx)(CodeBlockTab, {
						value: "pages/_app.tsx",
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
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " type"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " { AppProps } "
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
											children: " 'next/app'"
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
											children: " App"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "({ "
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
											children: ", "
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: "pageProps"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " }"
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
											children: " AppProps"
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
											children: "  return"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " <"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#005CC5",
												"--shiki-dark": "#79B8FF"
											},
											children: "Component"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " {"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "..."
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "pageProps} />"
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
						}) })
					}),
					(0, import_jsx_runtime.jsx)(CodeBlockTab, {
						value: "pages/_app.js",
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
											children: " App"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "({ "
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
											children: ", "
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: "pageProps"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " }) {"
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
											children: "  return"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " <"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#005CC5",
												"--shiki-dark": "#79B8FF"
											},
											children: "Component"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " {"
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "..."
										}),
										(0, import_jsx_runtime.jsx)(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "pageProps} />"
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
						}) })
					})
				]
			}),
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Finally, add a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "_document.tsx" }),
				" file inside ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/" }),
				" to control the initial response from the server. Learn more about the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/routing/custom-document",
					children: "custom Document file"
				}),
				"."
			] }),
			(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
				defaultValue: "pages/_document.tsx",
				children: [
					(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "pages/_document.tsx",
						children: "pages/_document.tsx"
					}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "pages/_document.js",
						children: "pages/_document.js"
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
						value: "pages/_document.js",
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
			})
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "create-the-public-folder-optional",
			children: [
				"Create the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "public" }),
				" folder (optional)"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Create a ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/public-folder",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "public" }), " folder"]
			}),
			" at the root of your project to store static assets such as images, fonts, etc. Files inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "public" }),
			" can then be referenced by your code starting from the base URL (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/" }),
			")."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can then reference these assets using the root path (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/" }),
			"). For example, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "public/profile.png" }),
			" can be referenced as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/profile.png" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "app/page.tsx",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "app/page.tsx",
					children: "app/page.tsx"
				}), (0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
					value: "app/page.js",
					children: "app/page.js"
				})] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "app/page.tsx",
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
										children: " Image "
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
										children: " 'next/image'"
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
										children: " Page"
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
								className: "line highlighted",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Image"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " src"
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
										children: "\"/profile.png\""
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " alt"
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
										children: "\"Profile\""
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " width"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "{"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "100"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "} "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "height"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "{"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "100"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "} />"
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
					}) })
				}),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "app/page.js",
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
										children: " Image "
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
										children: " 'next/image'"
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
										children: " Page"
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
								className: "line highlighted",
								children: [
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "  return"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " <"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "Image"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " src"
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
										children: "\"/profile.png\""
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " alt"
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
										children: "\"Profile\""
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " width"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "{"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "100"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "} "
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "height"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "{"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "100"
									}),
									(0, import_jsx_runtime.jsx)(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "} />"
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
					}) })
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "run-the-development-server",
			children: "Run the development server"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Run ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "npm run dev" }),
				" to start the development server."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Visit ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "http://localhost:3000" }),
				" to view your application."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Edit the ",
				(0, import_jsx_runtime.jsx)(AppOnly, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "app/page.tsx" }) }),
				(0, import_jsx_runtime.jsx)(PagesOnly, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "pages/index.tsx" }) }),
				" file and save it to see the updated result in your browser."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "set-up-typescript",
			children: "Set up TypeScript"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: ["Minimum TypeScript version: ", (0, import_jsx_runtime.jsx)(_components.code, { children: "v4.5.2" })] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js comes with built-in TypeScript support. To add TypeScript to your project, rename a file to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".ts" }),
			" / ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" }),
			" and run ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			". Next.js will automatically install the necessary dependencies and add a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "tsconfig.json" }),
			" file with the recommended config options."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(AppOnly, { children: [
			(0, import_jsx_runtime.jsx)(_components.h3, {
				id: "ide-plugin",
				children: "IDE Plugin"
			}),
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js includes a custom TypeScript plugin and type checker, which VSCode and other code editors can use for advanced type-checking and auto-completion." }),
			(0, import_jsx_runtime.jsx)(_components.p, { children: "You can enable the plugin in VS Code by:" }),
			(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"Opening the command palette (",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "Ctrl/⌘" }),
					" + ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "Shift" }),
					" + ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "P" }),
					")"
				] }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: "Searching for \"TypeScript: Select TypeScript Version\"" }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.li, { children: "Selecting \"Use Workspace Version\"" }),
				"\n"
			] }),
			(0, import_jsx_runtime.jsx)(Image, {
				alt: "TypeScript Command Palette",
				srcLight: "/docs/light/typescript-command-palette.png",
				srcDark: "/docs/dark/typescript-command-palette.png",
				width: "1600",
				height: "637"
			})
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"See the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/config/next-config-js/typescript",
				children: "TypeScript reference"
			}),
			" page for more information."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "set-up-eslint",
			children: "Set up ESLint"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js comes with built-in ESLint. It automatically installs the necessary packages and configures the proper settings when you create a new project with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "create-next-app" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To manually add ESLint to an existing project, add ",
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
			"Then, run ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "npm run lint" }),
			" and you will be guided through the installation and configuration process."
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
						children: "npm"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " run"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " lint"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You'll see a prompt like this:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "? How would you like to configure ESLint?" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "❯ Strict (recommended)\nBase\nCancel" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Strict" }), ": Includes Next.js' base ESLint configuration along with a stricter Core Web Vitals rule-set. This is the recommended configuration for developers setting up ESLint for the first time."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Base" }), ": Includes Next.js' base ESLint configuration."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Cancel" }), ": Skip configuration. Select this option if you plan on setting up your own custom ESLint configuration."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Strict" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Base" }),
			" are selected, Next.js will automatically install ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-config-next" }),
			" as dependencies in your application and create a configuration file in the root of your project."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ESLint config generated by ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }),
			" uses the older ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".eslintrc.json" }),
			" format. ESLint supports both ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://eslint.org/docs/latest/use/configure/configuration-files#configuring-eslint",
				children: [
					"the legacy ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: ".eslintrc.json" }),
					" and the newer ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint.config.mjs" }),
					" format"
				]
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can manually replace ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".eslintrc.json" }),
			" with an ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint.config.mjs" }),
			" file using the setup recommended in our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/config/eslint#with-core-web-vitals",
				children: "ESLint API reference"
			}),
			", and installing the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.npmjs.com/package/@eslint/eslintrc",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "@eslint/eslintrc" })
			}),
			" package. This more closely matches the ESLint setup used by ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "create-next-app" }),
			"."
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"See the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/config/next-config-js/eslint",
				children: "ESLint Plugin"
			}),
			" page for more information."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "set-up-absolute-imports-and-module-path-aliases",
			children: "Set up Absolute Imports and Module Path Aliases"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js has in-built support for the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "\"paths\"" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "\"baseUrl\"" }),
			" options of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "tsconfig.json" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "jsconfig.json" }),
			" files."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "These options allow you to alias project directories to absolute paths, making it easier and cleaner to import modules. For example:" }),
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// Before"
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
							children: "import"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { Button } "
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
							children: " '../../../components/button'"
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
						children: "// After"
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
							children: "import"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { Button } "
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
							children: " '@/components/button'"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To configure absolute imports, add the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "baseUrl" }),
			" configuration option to your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "tsconfig.json" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "jsconfig.json" }),
			" file. For example:"
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
			title: "tsconfig.json or jsconfig.json",
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
						children: "  \"compilerOptions\""
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
							children: "    \"baseUrl\""
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
							children: "\"src/\""
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
			"In addition to configuring the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "baseUrl" }),
			" path, you can use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "\"paths\"" }),
			" option to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "\"alias\"" }),
			" module paths."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, the following configuration maps ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@/components/*" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "components/*" }),
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
			title: "tsconfig.json or jsconfig.json",
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
						children: "  \"compilerOptions\""
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
							children: "    \"baseUrl\""
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
							children: "\"src/\""
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
						children: "    \"paths\""
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
							children: "      \"@/styles/*\""
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
							children: "\"styles/*\""
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "      \"@/components/*\""
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
							children: "\"components/*\""
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
			"Each of the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "\"paths\"" }),
			" are relative to the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "baseUrl" }),
			" location."
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
export { toc as a, structuredData as i, _01_installation_exports as n, frontmatter as r, MDXContent as t };
