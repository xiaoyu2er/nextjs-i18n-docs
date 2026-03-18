import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/local-development-B0Pdeg02.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var local_development_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "How to optimize your local development environment",
	"description": "Learn how to optimize your local development environment with Next.js.",
	"nav_title": "Development Environment"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js is designed to provide a great developer experience. As your application grows, you might notice slower compilation times during local development. This guide will help you identify and fix common compile-time performance issues."
		},
		{
			"heading": "local-dev-vs-production",
			"content": "The development process with `next dev` is different than `next build` and `next start`."
		},
		{
			"heading": "local-dev-vs-production",
			"content": "`next dev` compiles routes in your application as you open or navigate to them. This enables you to start the dev server without waiting for every route in your application to compile, which is both faster and uses less memory. Running a production build applies other optimizations, like minifying files and creating content hashes, which are not needed for local development."
		},
		{
			"heading": "1-check-your-computers-antivirus",
			"content": "Antivirus software can slow down file access."
		},
		{
			"heading": "1-check-your-computers-antivirus",
			"content": "Try adding your project folder to the antivirus exclusion list. While this is more common on Windows machines, we recommend this for any system with an antivirus tool installed."
		},
		{
			"heading": "2-update-nextjs-and-enable-turbopack",
			"content": "Make sure you're using the latest version of Next.js. Each new version often includes performance improvements."
		},
		{
			"heading": "2-update-nextjs-and-enable-turbopack",
			"content": "Turbopack is a new bundler integrated into Next.js that can improve local performance."
		},
		{
			"heading": "2-update-nextjs-and-enable-turbopack",
			"content": "Learn more about Turbopack. See our upgrade guides and codemods for more information."
		},
		{
			"heading": "3-check-your-imports",
			"content": "The way you import code can greatly affect compilation and bundling time. Learn more about optimizing package bundling and explore tools like Dependency Cruiser or Madge."
		},
		{
			"heading": "icon-libraries",
			"content": "Libraries like `@material-ui/icons`, `@phosphor-icons/react`, or `react-icons` can import thousands of icons, even if you only use a few. Try to import only the icons you need:"
		},
		{
			"heading": "icon-libraries",
			"content": "You can often find what import pattern to use in the documentation for the icon library you're using. This example follows `@phosphor-icons/react` recommendation."
		},
		{
			"heading": "icon-libraries",
			"content": "Libraries like `react-icons` includes many different icon sets. Choose one set and stick with that set."
		},
		{
			"heading": "icon-libraries",
			"content": "For example, if your application uses `react-icons` and imports all of these:"
		},
		{
			"heading": "icon-libraries",
			"content": "`pi` (Phosphor Icons)"
		},
		{
			"heading": "icon-libraries",
			"content": "`md` (Material Design Icons)"
		},
		{
			"heading": "icon-libraries",
			"content": "`tb` (tabler-icons)"
		},
		{
			"heading": "icon-libraries",
			"content": "`cg` (cssgg)"
		},
		{
			"heading": "icon-libraries",
			"content": "Combined they will be tens of thousands of modules that the compiler has to handle, even if you only use a single import from each."
		},
		{
			"heading": "barrel-files",
			"content": "\"Barrel files\" are files that export many items from other files. They can slow down builds because the compiler has to parse them to find if there are side-effects in the module scope by using the import."
		},
		{
			"heading": "barrel-files",
			"content": "Try to import directly from specific files when possible. Learn more about barrel files and the built-in optimizations in Next.js."
		},
		{
			"heading": "optimize-package-imports",
			"content": "Next.js can automatically optimize imports for certain packages. If you are using packages that utilize barrel files, add them to your `next.config.js`:"
		},
		{
			"heading": "optimize-package-imports",
			"content": "Turbopack automatically analyzes imports and optimizes them. It does not require this configuration."
		},
		{
			"heading": "4-check-your-tailwind-css-setup",
			"content": "If you're using Tailwind CSS, make sure it's set up correctly."
		},
		{
			"heading": "4-check-your-tailwind-css-setup",
			"content": "A common mistake is configuring your `content` array in a way which includes `node_modules` or other large directories of files that should not be scanned."
		},
		{
			"heading": "4-check-your-tailwind-css-setup",
			"content": "Tailwind CSS version 3.4.8 or newer will warn you about settings that might slow down your build."
		},
		{
			"heading": "4-check-your-tailwind-css-setup",
			"content": "In your `tailwind.config.js`, be specific about which files to scan:"
		},
		{
			"heading": "4-check-your-tailwind-css-setup",
			"content": "Avoid scanning unnecessary files:"
		},
		{
			"heading": "5-check-custom-webpack-settings",
			"content": "If you've added custom webpack settings, they might be slowing down compilation."
		},
		{
			"heading": "5-check-custom-webpack-settings",
			"content": "Consider if you really need them for local development. You can optionally only include certain tools for production builds, or explore moving to Turbopack and using loaders."
		},
		{
			"heading": "6-optimize-memory-usage",
			"content": "If your app is very large, it might need more memory."
		},
		{
			"heading": "6-optimize-memory-usage",
			"content": "Learn more about optimizing memory usage."
		},
		{
			"heading": "7-server-components-and-data-fetching",
			"content": "Changes to Server Components cause the entire page to re-render locally in order to show the new changes, which includes fetching new data for the component."
		},
		{
			"heading": "7-server-components-and-data-fetching",
			"content": "The experimental `serverComponentsHmrCache` option allows you to cache `fetch` responses in Server Components across Hot Module Replacement (HMR) refreshes in local development. This results in faster responses and reduced costs for billed API calls."
		},
		{
			"heading": "7-server-components-and-data-fetching",
			"content": "Learn more about the experimental option."
		},
		{
			"heading": "8-consider-local-development-over-docker",
			"content": "If you're using Docker for development on Mac or Windows, you may experience significantly slower performance compared to running Next.js locally."
		},
		{
			"heading": "8-consider-local-development-over-docker",
			"content": "Docker's filesystem access on Mac and Windows can cause Hot Module Replacement (HMR) to take seconds or even minutes, while the same application runs with fast HMR when developed locally."
		},
		{
			"heading": "8-consider-local-development-over-docker",
			"content": "This performance difference is due to how Docker handles filesystem operations outside of Linux environments. For the best development experience:"
		},
		{
			"heading": "8-consider-local-development-over-docker",
			"content": "Use local development (`npm run dev` or `pnpm dev`) instead of Docker during development"
		},
		{
			"heading": "8-consider-local-development-over-docker",
			"content": "Reserve Docker for production deployments and testing production builds"
		},
		{
			"heading": "8-consider-local-development-over-docker",
			"content": "If you must use Docker for development, consider using Docker on a Linux machine or VM"
		},
		{
			"heading": "8-consider-local-development-over-docker",
			"content": "Learn more about Docker deployment for production use."
		},
		{
			"heading": "detailed-fetch-logging",
			"content": "Use the `logging.fetches` option in your `next.config.js` file, to see more detailed information about what's happening during development:"
		},
		{
			"heading": "detailed-fetch-logging",
			"content": "Learn more about fetch logging."
		},
		{
			"heading": "turbopack-tracing",
			"content": "Turbopack tracing is a tool that helps you understand the performance of your application during local development.\nIt provides detailed information about the time taken for each module to compile and how they are related."
		},
		{
			"heading": "turbopack-tracing",
			"content": "Make sure you have the latest version of Next.js installed."
		},
		{
			"heading": "turbopack-tracing",
			"content": "Generate a Turbopack trace file:"
		},
		{
			"heading": "turbopack-tracing",
			"content": "Navigate around your application or make edits to files to reproduce the problem."
		},
		{
			"heading": "turbopack-tracing",
			"content": "Stop the Next.js development server."
		},
		{
			"heading": "turbopack-tracing",
			"content": "A file called `trace-turbopack` will be available in the `.next` folder."
		},
		{
			"heading": "turbopack-tracing",
			"content": "You can interpret the file using `npx next internal trace [path-to-file]`:"
		},
		{
			"heading": "turbopack-tracing",
			"content": "On versions where `trace` is not available, the command was named `turbo-trace-server`:"
		},
		{
			"heading": "turbopack-tracing",
			"content": "Once the trace server is running you can view the trace at https\\://trace.nextjs.org/."
		},
		{
			"heading": "turbopack-tracing",
			"content": "By default the trace viewer will aggregate timings, in order to see each individual time you can switch from \"Aggregated in order\" to \"Spans in order\" at the top right of the viewer."
		},
		{
			"heading": "still-having-problems",
			"content": "Share the trace file generated in the Turbopack Tracing section and share it on GitHub Discussions or Discord."
		}
	],
	"headings": [
		{
			"id": "local-dev-vs-production",
			"content": "Local dev vs. production"
		},
		{
			"id": "improving-local-dev-performance",
			"content": "Improving local dev performance"
		},
		{
			"id": "1-check-your-computers-antivirus",
			"content": "1\\. Check your computer's antivirus"
		},
		{
			"id": "2-update-nextjs-and-enable-turbopack",
			"content": "2\\. Update Next.js and enable Turbopack"
		},
		{
			"id": "3-check-your-imports",
			"content": "3\\. Check your imports"
		},
		{
			"id": "icon-libraries",
			"content": "Icon libraries"
		},
		{
			"id": "barrel-files",
			"content": "Barrel files"
		},
		{
			"id": "optimize-package-imports",
			"content": "Optimize package imports"
		},
		{
			"id": "4-check-your-tailwind-css-setup",
			"content": "4\\. Check your Tailwind CSS setup"
		},
		{
			"id": "5-check-custom-webpack-settings",
			"content": "5\\. Check custom webpack settings"
		},
		{
			"id": "6-optimize-memory-usage",
			"content": "6\\. Optimize memory usage"
		},
		{
			"id": "7-server-components-and-data-fetching",
			"content": "7\\. Server Components and data fetching"
		},
		{
			"id": "8-consider-local-development-over-docker",
			"content": "8\\. Consider local development over Docker"
		},
		{
			"id": "tools-for-finding-problems",
			"content": "Tools for finding problems"
		},
		{
			"id": "detailed-fetch-logging",
			"content": "Detailed fetch logging"
		},
		{
			"id": "turbopack-tracing",
			"content": "Turbopack tracing"
		},
		{
			"id": "still-having-problems",
			"content": "Still having problems?"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#local-dev-vs-production",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Local dev vs. production" })
	},
	{
		depth: 2,
		url: "#improving-local-dev-performance",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Improving local dev performance" })
	},
	{
		depth: 3,
		url: "#1-check-your-computers-antivirus",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "1. Check your computer's antivirus" })
	},
	{
		depth: 3,
		url: "#2-update-nextjs-and-enable-turbopack",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "2. Update Next.js and enable Turbopack" })
	},
	{
		depth: 3,
		url: "#3-check-your-imports",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "3. Check your imports" })
	},
	{
		depth: 4,
		url: "#icon-libraries",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Icon libraries" })
	},
	{
		depth: 4,
		url: "#barrel-files",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Barrel files" })
	},
	{
		depth: 4,
		url: "#optimize-package-imports",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Optimize package imports" })
	},
	{
		depth: 3,
		url: "#4-check-your-tailwind-css-setup",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "4. Check your Tailwind CSS setup" })
	},
	{
		depth: 3,
		url: "#5-check-custom-webpack-settings",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "5. Check custom webpack settings" })
	},
	{
		depth: 3,
		url: "#6-optimize-memory-usage",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "6. Optimize memory usage" })
	},
	{
		depth: 3,
		url: "#7-server-components-and-data-fetching",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "7. Server Components and data fetching" })
	},
	{
		depth: 3,
		url: "#8-consider-local-development-over-docker",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "8. Consider local development over Docker" })
	},
	{
		depth: 2,
		url: "#tools-for-finding-problems",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Tools for finding problems" })
	},
	{
		depth: 3,
		url: "#detailed-fetch-logging",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Detailed fetch logging" })
	},
	{
		depth: 2,
		url: "#turbopack-tracing",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Turbopack tracing" })
	},
	{
		depth: 2,
		url: "#still-having-problems",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Still having problems?" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		h3: "h3",
		h4: "h4",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js is designed to provide a great developer experience. As your application grows, you might notice slower compilation times during local development. This guide will help you identify and fix common compile-time performance issues." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "local-dev-vs-production",
			children: "Local dev vs. production"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The development process with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			" is different than ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }), " compiles routes in your application as you open or navigate to them. This enables you to start the dev server without waiting for every route in your application to compile, which is both faster and uses less memory. Running a production build applies other optimizations, like minifying files and creating content hashes, which are not needed for local development."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "improving-local-dev-performance",
			children: "Improving local dev performance"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "1-check-your-computers-antivirus",
			children: "1. Check your computer's antivirus"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Antivirus software can slow down file access." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Try adding your project folder to the antivirus exclusion list. While this is more common on Windows machines, we recommend this for any system with an antivirus tool installed." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "2-update-nextjs-and-enable-turbopack",
			children: "2. Update Next.js and enable Turbopack"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Make sure you're using the latest version of Next.js. Each new version often includes performance improvements." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Turbopack is a new bundler integrated into Next.js that can improve local performance." }),
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
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " next@latest"
						})
					]
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
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " --turbopack"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/turbopack-for-development-stable",
				children: "Learn more about Turbopack"
			}),
			". See our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/upgrading",
				children: "upgrade guides"
			}),
			" and codemods for more information."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "3-check-your-imports",
			children: "3. Check your imports"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The way you import code can greatly affect compilation and bundling time. Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/package-bundling",
				children: "optimizing package bundling"
			}),
			" and explore tools like ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/sverweij/dependency-cruiser",
				children: "Dependency Cruiser"
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/pahen/madge",
				children: "Madge"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "icon-libraries",
			children: "Icon libraries"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Libraries like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@material-ui/icons" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@phosphor-icons/react" }),
			", or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "react-icons" }),
			" can import thousands of icons, even if you only use a few. Try to import only the icons you need:"
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// Instead of this:"
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
							children: " { TriangleIcon } "
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
							children: " '@phosphor-icons/react'"
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
						children: "// Do this:"
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
							children: " { TriangleIcon } "
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
							children: " '@phosphor-icons/react/dist/csr/Triangle'"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can often find what import pattern to use in the documentation for the icon library you're using. This example follows ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.npmjs.com/package/@phosphor-icons/react#import-performance-optimization",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "@phosphor-icons/react" })
			}),
			" recommendation."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Libraries like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "react-icons" }),
			" includes many different icon sets. Choose one set and stick with that set."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, if your application uses ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "react-icons" }),
			" and imports all of these:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "pi" }), " (Phosphor Icons)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "md" }), " (Material Design Icons)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "tb" }), " (tabler-icons)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "cg" }), " (cssgg)"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Combined they will be tens of thousands of modules that the compiler has to handle, even if you only use a single import from each." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "barrel-files",
			children: "Barrel files"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "\"Barrel files\" are files that export many items from other files. They can slow down builds because the compiler has to parse them to find if there are side-effects in the module scope by using the import." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Try to import directly from specific files when possible. ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/blog/how-we-optimized-package-imports-in-next-js",
				children: "Learn more about barrel files"
			}),
			" and the built-in optimizations in Next.js."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "optimize-package-imports",
			children: "Optimize package imports"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js can automatically optimize imports for certain packages. If you are using packages that utilize barrel files, add them to your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
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
						children: "  experimental: {"
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
							children: "    optimizePackageImports: ["
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'package-name'"
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Turbopack automatically analyzes imports and optimizes them. It does not require this configuration." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "4-check-your-tailwind-css-setup",
			children: "4. Check your Tailwind CSS setup"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If you're using Tailwind CSS, make sure it's set up correctly." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A common mistake is configuring your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "content" }),
			" array in a way which includes ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "node_modules" }),
			" or other large directories of files that should not be scanned."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Tailwind CSS version 3.4.8 or newer will warn you about settings that might slow down your build." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					"In your ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "tailwind.config.js" }),
					", be specific about which files to scan:"
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
					icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
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
								children: "  content: ["
							})
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
									children: "    './src/**/*.{js,ts,jsx,tsx}'"
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
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "// Good"
								})
							]
						}),
						"\n",
						(0, import_jsx_runtime.jsx)(_components.span, {
							className: "line",
							children: (0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#6A737D",
									"--shiki-dark": "#6A737D"
								},
								children: "    // This might be too broad"
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
								children: "    // It will match `packages/**/node_modules` too"
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
								children: "    // '../../packages/**/*.{js,ts,jsx,tsx}',"
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
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.p, { children: "Avoid scanning unnecessary files:" }),
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
								children: "  content: ["
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
								children: "    // Better - only scans the 'src' folder"
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
								children: "    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'"
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
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "5-check-custom-webpack-settings",
			children: "5. Check custom webpack settings"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If you've added custom webpack settings, they might be slowing down compilation." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Consider if you really need them for local development. You can optionally only include certain tools for production builds, or explore moving to Turbopack and using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/config/next-config-js/turbopack#supported-loaders",
				children: "loaders"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "6-optimize-memory-usage",
			children: "6. Optimize memory usage"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If your app is very large, it might need more memory." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "/docs/app/guides/memory-usage",
			children: "Learn more about optimizing memory usage"
		}), "."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "7-server-components-and-data-fetching",
			children: "7. Server Components and data fetching"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Changes to Server Components cause the entire page to re-render locally in order to show the new changes, which includes fetching new data for the component." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The experimental ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "serverComponentsHmrCache" }),
			" option allows you to cache ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
			" responses in Server Components across Hot Module Replacement (HMR) refreshes in local development. This results in faster responses and reduced costs for billed API calls."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "/docs/app/api-reference/config/next-config-js/serverComponentsHmrCache",
			children: "Learn more about the experimental option"
		}), "."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "8-consider-local-development-over-docker",
			children: "8. Consider local development over Docker"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If you're using Docker for development on Mac or Windows, you may experience significantly slower performance compared to running Next.js locally." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Docker's filesystem access on Mac and Windows can cause Hot Module Replacement (HMR) to take seconds or even minutes, while the same application runs with fast HMR when developed locally." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This performance difference is due to how Docker handles filesystem operations outside of Linux environments. For the best development experience:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Use local development (",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "npm run dev" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pnpm dev" }),
				") instead of Docker during development"
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Reserve Docker for production deployments and testing production builds" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "If you must use Docker for development, consider using Docker on a Linux machine or VM" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "/docs/app/getting-started/deploying#docker",
			children: "Learn more about Docker deployment"
		}), " for production use."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "tools-for-finding-problems",
			children: "Tools for finding problems"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "detailed-fetch-logging",
			children: "Detailed fetch logging"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "logging.fetches" }),
			" option in your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			" file, to see more detailed information about what's happening during development:"
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
						children: "  logging: {"
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
						children: "    fetches: {"
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
							children: "      fullUrl: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "true"
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "/docs/app/api-reference/config/next-config-js/logging",
			children: "Learn more about fetch logging"
		}), "."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "turbopack-tracing",
			children: "Turbopack tracing"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Turbopack tracing is a tool that helps you understand the performance of your application during local development.\nIt provides detailed information about the time taken for each module to compile and how they are related." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.p, { children: "Make sure you have the latest version of Next.js installed." }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.p, { children: "Generate a Turbopack trace file:" }),
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
								children: " npm"
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
					}) })
				}) }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.p, { children: "Navigate around your application or make edits to files to reproduce the problem." }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.p, { children: "Stop the Next.js development server." }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					"A file called ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "trace-turbopack" }),
					" will be available in the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: ".next" }),
					" folder."
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					"You can interpret the file using ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "npx next internal trace [path-to-file]" }),
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
								children: " next"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								},
								children: " internal"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								},
								children: " trace"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								},
								children: " .next/trace-turbopack"
							})
						]
					}) })
				}) }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					"On versions where ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "trace" }),
					" is not available, the command was named ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "turbo-trace-server" }),
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
								children: " next"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								},
								children: " internal"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								},
								children: " turbo-trace-server"
							}),
							(0, import_jsx_runtime.jsx)(_components.span, {
								style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								},
								children: " .next/trace-turbopack"
							})
						]
					}) })
				}) }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					"Once the trace server is running you can view the trace at ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://trace.nextjs.org/",
						children: "https://trace.nextjs.org/"
					}),
					"."
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.p, { children: "By default the trace viewer will aggregate timings, in order to see each individual time you can switch from \"Aggregated in order\" to \"Spans in order\" at the top right of the viewer." }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "still-having-problems",
			children: "Still having problems?"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Share the trace file generated in the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#turbopack-tracing",
				children: "Turbopack Tracing"
			}),
			" section and share it on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions",
				children: "GitHub Discussions"
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/discord",
				children: "Discord"
			}),
			"."
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
export { toc as a, structuredData as i, frontmatter as n, local_development_exports as r, MDXContent as t };
