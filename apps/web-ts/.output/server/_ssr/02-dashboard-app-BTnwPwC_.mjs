import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/02-dashboard-app-BTnwPwC_.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _02_dashboard_app_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "App Router",
	"description": "Learn how to build a full-stack web application with the free, Next.js Foundations course.",
	"image": "https://nextjs.org/api/learn-og?title=App%20Router&amp;chapter=2",
	"headline": "App Router"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Welcome to the Next.js Foundations course! In this free interactive course, you'll learn the main features of Next.js by building a full-stack web application."
		},
		{
			"heading": "what-well-be-building",
			"content": "For this course, we'll build a financial dashboard that has:"
		},
		{
			"heading": "what-well-be-building",
			"content": "A public home page."
		},
		{
			"heading": "what-well-be-building",
			"content": "A login page."
		},
		{
			"heading": "what-well-be-building",
			"content": "Dashboard pages that are protected by authentication."
		},
		{
			"heading": "what-well-be-building",
			"content": "The ability for users to add, edit, and delete invoices."
		},
		{
			"heading": "what-well-be-building",
			"content": "The dashboard will also have an accompanying database, which you'll set up in a later chapter."
		},
		{
			"heading": "what-well-be-building",
			"content": "By the end of the course, you'll have the essential skills needed to start building full-stack Next.js applications."
		},
		{
			"heading": "overview",
			"content": "Here's an overview of features you'll learn about in this course:"
		},
		{
			"heading": "overview",
			"content": "**Styling**: The different ways to style your application in Next.js."
		},
		{
			"heading": "overview",
			"content": "**Optimizations**: How to optimize images, links, and fonts."
		},
		{
			"heading": "overview",
			"content": "**Routing**: How to create nested layouts and pages using file-system routing."
		},
		{
			"heading": "overview",
			"content": "**Data Fetching**: How to set up a Postgres database on Vercel, and best practices for fetching and streaming."
		},
		{
			"heading": "overview",
			"content": "**Search and Pagination**: How to implement search and pagination using URL search params."
		},
		{
			"heading": "overview",
			"content": "**Mutating Data:** How to mutate data using React Server Actions, and revalidate the Next.js cache."
		},
		{
			"heading": "overview",
			"content": "**Error Handling:** How to handle general and `404` not found errors."
		},
		{
			"heading": "overview",
			"content": "**Form Validation and Accessibility:** How to do server-side form validation and tips for improving accessibility."
		},
		{
			"heading": "overview",
			"content": "**Authentication**: How to add authentication to your application using `NextAuth.js` and Middleware."
		},
		{
			"heading": "overview",
			"content": "**Metadata**: How to add metadata and prepare your application for social sharing."
		},
		{
			"heading": "prerequisite-knowledge",
			"content": "This course assumes you have a basic understanding of React and JavaScript. If you're new to React, we recommend going through our React Foundations course first to learn the fundamentals of React, such as components, props, state, and hooks, and newer features like Server Components and Suspense."
		},
		{
			"heading": "system-requirements",
			"content": "Before you start this course, make sure your system meets the following requirements:"
		},
		{
			"heading": "system-requirements",
			"content": "Node.js 18.18.0 or later installed. Download here."
		},
		{
			"heading": "system-requirements",
			"content": "Operating systems: macOS, Windows (including WSL), or Linux."
		},
		{
			"heading": "system-requirements",
			"content": "In addition, you'll also need a GitHub Account and a Vercel Account."
		},
		{
			"heading": "join-the-conversation",
			"content": "If you have questions about this course or would like to provide feedback, you can ask our community on Reddit or GitHub."
		}
	],
	"headings": [
		{
			"id": "what-well-be-building",
			"content": "What we'll be building"
		},
		{
			"id": "overview",
			"content": "Overview"
		},
		{
			"id": "prerequisite-knowledge",
			"content": "Prerequisite knowledge"
		},
		{
			"id": "system-requirements",
			"content": "System requirements"
		},
		{
			"id": "join-the-conversation",
			"content": "Join the conversation"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#what-well-be-building",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#what-well-be-building",
			children: "What we'll be building"
		}) })
	},
	{
		depth: 2,
		url: "#overview",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#overview",
			children: "Overview"
		}) })
	},
	{
		depth: 2,
		url: "#prerequisite-knowledge",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#prerequisite-knowledge",
			children: "Prerequisite knowledge"
		}) })
	},
	{
		depth: 2,
		url: "#system-requirements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#system-requirements",
			children: "System requirements"
		}) })
	},
	{
		depth: 2,
		url: "#join-the-conversation",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#join-the-conversation",
			children: "Join the conversation"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { Image } = _components;
	if (!Image) _missingMdxReference("Image", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Welcome to the Next.js Foundations course! In this free interactive course, you'll learn the main features of Next.js by building a full-stack web application." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "what-well-be-building",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#what-well-be-building",
				children: "What we'll be building"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Screenshots of the dashboard project showing desktop and mobile versions.",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/light/dashboard.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/dark/dashboard.png",
			width: "1378",
			height: "816"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For this course, we'll build a financial dashboard that has:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "A public home page." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "A login page." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Dashboard pages that are protected by authentication." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The ability for users to add, edit, and delete invoices." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The dashboard will also have an accompanying database, which you'll set up in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/learn/dashboard-app/setting-up-your-database",
				children: "a later chapter"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "By the end of the course, you'll have the essential skills needed to start building full-stack Next.js applications." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "overview",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#overview",
				children: "Overview"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Here's an overview of features you'll learn about in this course:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Styling" }), ": The different ways to style your application in Next.js."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Optimizations" }), ": How to optimize images, links, and fonts."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Routing" }), ": How to create nested layouts and pages using file-system routing."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Data Fetching" }), ": How to set up a Postgres database on Vercel, and best practices for fetching and streaming."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Search and Pagination" }), ": How to implement search and pagination using URL search params."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Mutating Data:" }), " How to mutate data using React Server Actions, and revalidate the Next.js cache."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Error Handling:" }),
				" How to handle general and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "404" }),
				" not found errors."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Form Validation and Accessibility:" }), " How to do server-side form validation and tips for improving accessibility."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Authentication" }),
				": How to add authentication to your application using ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://next-auth.js.org/",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "NextAuth.js" })
				}),
				" and Middleware."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Metadata" }), ": How to add metadata and prepare your application for social sharing."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "prerequisite-knowledge",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#prerequisite-knowledge",
				children: "Prerequisite knowledge"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This course assumes you have a basic understanding of React and JavaScript. If you're new to React, we recommend going through our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/learn/react-foundations",
				children: "React Foundations"
			}),
			" course first to learn the fundamentals of React, such as components, props, state, and hooks, and newer features like Server Components and Suspense."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "system-requirements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#system-requirements",
				children: "System requirements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Before you start this course, make sure your system meets the following requirements:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Node.js 18.18.0 or later installed. ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nodejs.org/en",
					children: "Download here"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Operating systems: macOS, Windows (including WSL), or Linux." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In addition, you'll also need a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/join/",
				children: "GitHub Account"
			}),
			" and a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/signup",
				children: "Vercel Account"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "join-the-conversation",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#join-the-conversation",
				children: "Join the conversation"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you have questions about this course or would like to provide feedback, you can ask our community on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://reddit.com/r/vercel",
				children: "Reddit"
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next-learn",
				children: "GitHub"
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
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { toc as a, structuredData as i, _02_dashboard_app_exports as n, frontmatter as r, MDXContent as t };
