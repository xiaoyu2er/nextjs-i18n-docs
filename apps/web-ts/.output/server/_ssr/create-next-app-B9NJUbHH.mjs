import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/create-next-app-B9NJUbHH.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var create_next_app_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "create-next-app",
	"description": "Create Next.js apps using one command with the create-next-app CLI."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "The `create-next-app` CLI allow you to create a new Next.js application using the default template or an example from a public GitHub repository. It is the easiest way to get started with Next.js."
		},
		{
			"heading": void 0,
			"content": "Basic usage:"
		},
		{
			"heading": "reference",
			"content": "The following options are available:"
		},
		{
			"heading": "reference",
			"content": "Options"
		},
		{
			"heading": "reference",
			"content": "Description"
		},
		{
			"heading": "reference",
			"content": "`-h` or `--help`"
		},
		{
			"heading": "reference",
			"content": "Show all available options"
		},
		{
			"heading": "reference",
			"content": "`-v` or `--version`"
		},
		{
			"heading": "reference",
			"content": "Output the version number"
		},
		{
			"heading": "reference",
			"content": "`--no-*`"
		},
		{
			"heading": "reference",
			"content": "Negate default options. E.g. `--no-ts`"
		},
		{
			"heading": "reference",
			"content": "`--ts` or `--typescript`"
		},
		{
			"heading": "reference",
			"content": "Initialize as a TypeScript project (default)"
		},
		{
			"heading": "reference",
			"content": "`--js` or `--javascript`"
		},
		{
			"heading": "reference",
			"content": "Initialize as a JavaScript project"
		},
		{
			"heading": "reference",
			"content": "`--tailwind`"
		},
		{
			"heading": "reference",
			"content": "Initialize with Tailwind CSS config (default)"
		},
		{
			"heading": "reference",
			"content": "`--eslint`"
		},
		{
			"heading": "reference",
			"content": "Initialize with ESLint config"
		},
		{
			"heading": "reference",
			"content": "`--biome`"
		},
		{
			"heading": "reference",
			"content": "Initialize with Biome config"
		},
		{
			"heading": "reference",
			"content": "`--no-linter`"
		},
		{
			"heading": "reference",
			"content": "Skip linter configuration"
		},
		{
			"heading": "reference",
			"content": "`--app`"
		},
		{
			"heading": "reference",
			"content": "Initialize as an App Router project"
		},
		{
			"heading": "reference",
			"content": "`--api`"
		},
		{
			"heading": "reference",
			"content": "Initialize a project with only route handlers"
		},
		{
			"heading": "reference",
			"content": "`--src-dir`"
		},
		{
			"heading": "reference",
			"content": "Initialize inside a `src/` directory"
		},
		{
			"heading": "reference",
			"content": "`--turbopack`"
		},
		{
			"heading": "reference",
			"content": "Enable Turbopack by default for development"
		},
		{
			"heading": "reference",
			"content": "`--import-alias <alias-to-configure>`"
		},
		{
			"heading": "reference",
			"content": "Specify import alias to use (default \"@/\\*\")"
		},
		{
			"heading": "reference",
			"content": "`--empty`"
		},
		{
			"heading": "reference",
			"content": "Initialize an empty project"
		},
		{
			"heading": "reference",
			"content": "`--use-npm`"
		},
		{
			"heading": "reference",
			"content": "Explicitly tell the CLI to bootstrap the application using npm"
		},
		{
			"heading": "reference",
			"content": "`--use-pnpm`"
		},
		{
			"heading": "reference",
			"content": "Explicitly tell the CLI to bootstrap the application using pnpm"
		},
		{
			"heading": "reference",
			"content": "`--use-yarn`"
		},
		{
			"heading": "reference",
			"content": "Explicitly tell the CLI to bootstrap the application using Yarn"
		},
		{
			"heading": "reference",
			"content": "`--use-bun`"
		},
		{
			"heading": "reference",
			"content": "Explicitly tell the CLI to bootstrap the application using Bun"
		},
		{
			"heading": "reference",
			"content": "`-e` or `--example [name] [github-url]`"
		},
		{
			"heading": "reference",
			"content": "An example to bootstrap the app with"
		},
		{
			"heading": "reference",
			"content": "`--example-path <path-to-example>`"
		},
		{
			"heading": "reference",
			"content": "Specify the path to the example separately"
		},
		{
			"heading": "reference",
			"content": "`--reset-preferences`"
		},
		{
			"heading": "reference",
			"content": "Explicitly tell the CLI to reset any stored preferences"
		},
		{
			"heading": "reference",
			"content": "`--skip-install`"
		},
		{
			"heading": "reference",
			"content": "Explicitly tell the CLI to skip installing packages"
		},
		{
			"heading": "reference",
			"content": "`--disable-git`"
		},
		{
			"heading": "reference",
			"content": "Explicitly tell the CLI to disable git initialization"
		},
		{
			"heading": "reference",
			"content": "`--yes`"
		},
		{
			"heading": "reference",
			"content": "Use previous preferences or defaults for all options"
		},
		{
			"heading": "with-the-default-template",
			"content": "To create a new app using the default template, run the following command in your terminal:"
		},
		{
			"heading": "with-the-default-template",
			"content": "You will then be asked the following prompts:"
		},
		{
			"heading": "linter-options",
			"content": "**ESLint**: The traditional and most popular JavaScript linter. Includes Next.js-specific rules from `eslint-plugin-next`."
		},
		{
			"heading": "linter-options",
			"content": "**Biome**: A fast, modern linter and formatter that combines the functionality of ESLint and Prettier. Includes built-in Next.js and React domain support for optimal performance."
		},
		{
			"heading": "linter-options",
			"content": "**None**: Skip linter configuration entirely. You can always add a linter later."
		},
		{
			"heading": "linter-options",
			"content": "> **Note**: `next lint` command will be deprecated in Next.js 16. New projects should use the chosen linter directly (e.g., `biome check` or `eslint`)."
		},
		{
			"heading": "linter-options",
			"content": "Once you've answered the prompts, a new project will be created with your chosen configuration."
		},
		{
			"heading": "with-an-official-nextjs-example",
			"content": "To create a new app using an official Next.js example, use the `--example` flag. For example:"
		},
		{
			"heading": "with-an-official-nextjs-example",
			"content": "You can view a list of all available examples along with setup instructions in the Next.js repository."
		},
		{
			"heading": "with-any-public-github-example",
			"content": "To create a new app using any public GitHub example, use the `--example` option with the GitHub repo's URL. For example:"
		}
	],
	"headings": [
		{
			"id": "reference",
			"content": "Reference"
		},
		{
			"id": "examples",
			"content": "Examples"
		},
		{
			"id": "with-the-default-template",
			"content": "With the default template"
		},
		{
			"id": "linter-options",
			"content": "Linter Options"
		},
		{
			"id": "with-an-official-nextjs-example",
			"content": "With an official Next.js example"
		},
		{
			"id": "with-any-public-github-example",
			"content": "With any public GitHub example"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#reference",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Reference" })
	},
	{
		depth: 2,
		url: "#examples",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Examples" })
	},
	{
		depth: 3,
		url: "#with-the-default-template",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "With the default template" })
	},
	{
		depth: 3,
		url: "#linter-options",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Linter Options" })
	},
	{
		depth: 3,
		url: "#with-an-official-nextjs-example",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "With an official Next.js example" })
	},
	{
		depth: 3,
		url: "#with-any-public-github-example",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "With any public GitHub example" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		h3: "h3",
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
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "create-next-app" }),
			" CLI allow you to create a new Next.js application using the default template or an ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/tree/canary/examples",
				children: "example"
			}),
			" from a public GitHub repository. It is the easiest way to get started with Next.js."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Basic usage:" }),
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
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " [project-name] [options]"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "reference",
			children: "Reference"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The following options are available:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Options" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsxs)(_components.td, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "-h" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--help" })
			] }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Show all available options" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsxs)(_components.td, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "-v" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--version" })
			] }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Output the version number" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--no-*" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: ["Negate default options. E.g. ", (0, import_jsx_runtime.jsx)(_components.code, { children: "--no-ts" })] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsxs)(_components.td, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--ts" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--typescript" })
			] }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Initialize as a TypeScript project (default)" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsxs)(_components.td, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--js" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--javascript" })
			] }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Initialize as a JavaScript project" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--tailwind" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Initialize with Tailwind CSS config (default)" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--eslint" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Initialize with ESLint config" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--biome" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Initialize with Biome config" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--no-linter" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Skip linter configuration" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--app" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Initialize as an App Router project" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--api" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Initialize a project with only route handlers" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--src-dir" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
				"Initialize inside a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "src/" }),
				" directory"
			] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--turbopack" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Enable Turbopack by default for development" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--import-alias <alias-to-configure>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Specify import alias to use (default \"@/*\")" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--empty" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Initialize an empty project" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--use-npm" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Explicitly tell the CLI to bootstrap the application using npm" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--use-pnpm" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Explicitly tell the CLI to bootstrap the application using pnpm" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--use-yarn" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Explicitly tell the CLI to bootstrap the application using Yarn" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--use-bun" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Explicitly tell the CLI to bootstrap the application using Bun" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsxs)(_components.td, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "-e" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--example [name] [github-url]" })
			] }), (0, import_jsx_runtime.jsx)(_components.td, { children: "An example to bootstrap the app with" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--example-path <path-to-example>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Specify the path to the example separately" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--reset-preferences" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Explicitly tell the CLI to reset any stored preferences" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--skip-install" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Explicitly tell the CLI to skip installing packages" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--disable-git" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Explicitly tell the CLI to disable git initialization" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--yes" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Use previous preferences or defaults for all options" })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "examples",
			children: "Examples"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "with-the-default-template",
			children: "With the default template"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To create a new app using the default template, run the following command in your terminal:" }),
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You will then be asked the following prompts:" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "What is your project named?  my-app" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Would you like to use TypeScript?  No / Yes" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Which linter would you like to use?  ESLint / Biome / None" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Would you like to use Tailwind CSS?  No / Yes" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Would you like your code inside a `src/` directory?  No / Yes" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Would you like to use App Router? (recommended)  No / Yes" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Would you like to use Turbopack? (recommended)  No / Yes" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Would you like to customize the import alias (`@/*` by default)?  No / Yes" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "linter-options",
			children: "Linter Options"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "ESLint" }),
			": The traditional and most popular JavaScript linter. Includes Next.js-specific rules from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-plugin-next" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Biome" }), ": A fast, modern linter and formatter that combines the functionality of ESLint and Prettier. Includes built-in Next.js and React domain support for optimal performance."] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "None" }), ": Skip linter configuration entirely. You can always add a linter later."] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }),
				" command will be deprecated in Next.js 16. New projects should use the chosen linter directly (e.g., ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "biome check" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint" }),
				")."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Once you've answered the prompts, a new project will be created with your chosen configuration." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "with-an-official-nextjs-example",
			children: "With an official Next.js example"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To create a new app using an official Next.js example, use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--example" }),
			" flag. For example:"
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
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " --example"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " [example-name] [your-project-name]"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can view a list of all available examples along with setup instructions in the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/tree/canary/examples",
				children: "Next.js repository"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "with-any-public-github-example",
			children: "With any public GitHub example"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To create a new app using any public GitHub example, use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--example" }),
			" option with the GitHub repo's URL. For example:"
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
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " --example"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " \"https://github.com/.../\""
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " [your-project-name]"
					})
				]
			}) })
		}) })
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
export { toc as a, structuredData as i, create_next_app_exports as n, frontmatter as r, MDXContent as t };
