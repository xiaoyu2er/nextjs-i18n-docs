import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/23-lighthouse-DbhmXUkc.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _23_lighthouse_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Introducing Lighthouse",
	"image": "https://nextjs.org/api/learn-og?title=Introducing%20Lighthouse&amp;chapter=23",
	"headline": "SEO: Introducing Lighthouse"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "As we saw in the previous section, Core Web Vitals focus on aspects of the user experience via loading performance (Largest Contentful Paint), interactivity (First Input Delay), and visual stability (Cumulative Layout Shift)."
		},
		{
			"heading": void 0,
			"content": "In this lesson, we'll focus on how to measure Core Web Vitals through the use of a simulated environment called Lighthouse."
		},
		{
			"heading": void 0,
			"content": "**Note**: For this lesson we will be using Chrome Dev Tools. However, there are many ways to run Lighthouse."
		},
		{
			"heading": void 0,
			"content": "Lighthouse works by running a series of audits on a provided URL. Based on these audits, it generates a report on how well the page performed. If there are areas that need improvement, the report will provide insight on how to improve."
		},
		{
			"heading": void 0,
			"content": "Let's take a look at two examples of a Lighthouse report to see the difference between a site that has healthy Core Web Vitals and one that does not."
		},
		{
			"heading": "optimized-example",
			"content": "To see an example of how Lighthouse works, we will use our homepage."
		},
		{
			"heading": "optimized-example",
			"content": "Open Chrome."
		},
		{
			"heading": "optimized-example",
			"content": "In an incognito window, navigate to `https://nextjs.org`."
		},
		{
			"heading": "optimized-example",
			"content": "Open DevTools and click on **Lighthouse** tab."
		},
		{
			"heading": "optimized-example",
			"content": "Click **Generate Report**."
		},
		{
			"heading": "optimized-example",
			"content": "This will now run a report which should take less than 60 seconds."
		},
		{
			"heading": "optimized-example",
			"content": "**Note**: It is important to run reports in an incognito window, as third-party plugins will affect your report."
		},
		{
			"heading": "optimized-example",
			"content": "In addition, ad blockers can block scripts from loading, which would give an incomplete audit. Consider setting a clean persona to measure performance."
		},
		{
			"heading": "optimized-example",
			"content": "Here's an example report:"
		},
		{
			"heading": "unoptimized-example",
			"content": "For the purpose of this tutorial, we have created an application without any optimizations."
		},
		{
			"heading": "project-setup",
			"content": "This is a basic unoptimized application that allows visitors to do two things: search for a country to retrieve its population and click on a button to read a pop-up modal. This application is meant to mimic the reality of working on large applications where the use of third-party libraries cannot be avoided."
		},
		{
			"heading": "run-production-build",
			"content": "To get accurate reports from Lighthouse, your application should always be tested with a production build. To run a production build, change into the project directory:"
		},
		{
			"heading": "run-production-build",
			"content": "Build your application by running `next build` and start the server in production mode by running `next start`."
		},
		{
			"heading": "run-production-build",
			"content": "Let's run a Lighthouse report with Chrome DevTools. Once the report has completed, let's start to optimize the site and improve the vitals."
		},
		{
			"heading": "further-reading",
			"content": "Google Chrome: Lighthouse Scoring Calculator"
		}
	],
	"headings": [
		{
			"id": "optimized-example",
			"content": "Optimized Example"
		},
		{
			"id": "unoptimized-example",
			"content": "Unoptimized Example"
		},
		{
			"id": "project-setup",
			"content": "Project Setup"
		},
		{
			"id": "download-starter-code",
			"content": "Download Starter Code"
		},
		{
			"id": "run-production-build",
			"content": "Run Production Build"
		},
		{
			"id": "further-reading",
			"content": "Further Reading"
		}
	]
};
var toc = [
	{
		depth: 3,
		url: "#optimized-example",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#optimized-example",
			children: "Optimized Example"
		}) })
	},
	{
		depth: 3,
		url: "#unoptimized-example",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#unoptimized-example",
			children: "Unoptimized Example"
		}) })
	},
	{
		depth: 4,
		url: "#project-setup",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#project-setup",
			children: "Project Setup"
		}) })
	},
	{
		depth: 4,
		url: "#download-starter-code",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#download-starter-code",
			children: "Download Starter Code"
		}) })
	},
	{
		depth: 4,
		url: "#run-production-build",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#run-production-build",
			children: "Run Production Build"
		}) })
	},
	{
		depth: 3,
		url: "#further-reading",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#further-reading",
			children: "Further Reading"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h3: "h3",
		h4: "h4",
		img: "img",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "As we saw in the previous section, Core Web Vitals focus on aspects of the user experience via loading performance (Largest Contentful Paint), interactivity (First Input Delay), and visual stability (Cumulative Layout Shift)." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In this lesson, we'll focus on how to measure Core Web Vitals through the use of a simulated environment called ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-reference/cli#production",
				children: "Lighthouse"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note" }),
			": For this lesson we will be using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/web/tools/lighthouse?hl=en#devtools",
				children: "Chrome Dev Tools"
			}),
			". However, there are ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-reference/cli#production",
				children: "many ways"
			}),
			" to run Lighthouse."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Lighthouse works by running a series of audits on a provided URL. Based on these audits, it generates a report on how well the page performed. If there are areas that need improvement, the report will provide insight on how to improve." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Let's take a look at two examples of a Lighthouse report to see the difference between a site that has healthy Core Web Vitals and one that does not." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "optimized-example",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#optimized-example",
				children: "Optimized Example"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To see an example of how Lighthouse works, we will use our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org",
				children: "homepage"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Open ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://www.google.com/chrome/",
					children: "Chrome"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"In an incognito window, navigate to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "https://nextjs.org" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Open DevTools and click on ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Lighthouse" }),
				" tab."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Click ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Generate Report" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This will now run a report which should take less than 60 seconds." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note" }), ": It is important to run reports in an incognito window, as third-party plugins will affect your report."] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In addition, ad blockers can block scripts from loading, which would give an incomplete audit. Consider setting a clean ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-reference/cli#production",
				children: "persona"
			}),
			" to measure performance."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Here's an example report:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/seo/lighthouse.png",
			alt: "Lighthouse Report for Next.js homepage"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "unoptimized-example",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#unoptimized-example",
				children: "Unoptimized Example"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For the purpose of this tutorial, we have created an application without any optimizations." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "project-setup",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#project-setup",
				children: "Project Setup"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This is a basic unoptimized application that allows visitors to do two things: search for a country to retrieve its population and click on a button to read a pop-up modal. This application is meant to mimic the reality of working on large applications where the use of third-party libraries cannot be avoided." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "download-starter-code",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#download-starter-code",
				children: "Download Starter Code"
			})
		}),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "npx create-next-app@latest nextjs-lighthouse --use-npm --example \"https://github.com/vercel/next-learn/tree/main/seo\"" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "run-production-build",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#run-production-build",
				children: "Run Production Build"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To get accurate reports from Lighthouse, your application should always be tested with a production build. To run a production build, change into the project directory:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "cd nextjs-lighthouse" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Build your application by running ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			" and start the server in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-reference/cli#production",
				children: "production mode"
			}),
			" by running ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
			"."
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "npm run build && npm run start" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Let's run a Lighthouse report with Chrome DevTools. Once the report has completed, let's start to optimize the site and improve the vitals." }),
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
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Google Chrome: ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://googlechrome.github.io/lighthouse/scorecalc/",
				children: "Lighthouse Scoring Calculator"
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
export { toc as a, structuredData as i, _23_lighthouse_exports as n, frontmatter as r, MDXContent as t };
