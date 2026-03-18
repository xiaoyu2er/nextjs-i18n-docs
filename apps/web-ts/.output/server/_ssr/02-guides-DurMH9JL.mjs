import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/02-guides-DurMH9JL.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _02_guides_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Guides",
	"description": "Learn how to implement common UI patterns and use cases using Next.js"
};
var structuredData = {
	"contents": [
		{
			"heading": "data-fetching",
			"content": "Using the `fetch` API"
		},
		{
			"heading": "data-fetching",
			"content": "Using an ORM or database client"
		},
		{
			"heading": "data-fetching",
			"content": "Reading search params on the server"
		},
		{
			"heading": "data-fetching",
			"content": "Reading search params on the client"
		},
		{
			"heading": "revalidating-data",
			"content": "Using ISR to revalidate data after a certain time"
		},
		{
			"heading": "revalidating-data",
			"content": "Using ISR to revalidate data on-demand"
		},
		{
			"heading": "forms",
			"content": "Showing a pending state while submitting a form"
		},
		{
			"heading": "forms",
			"content": "Server-side form validation"
		},
		{
			"heading": "forms",
			"content": "Handling expected errors"
		},
		{
			"heading": "forms",
			"content": "Handling unexpected exceptions"
		},
		{
			"heading": "forms",
			"content": "Showing optimistic UI updates"
		},
		{
			"heading": "forms",
			"content": "Programmatic form submission"
		},
		{
			"heading": "server-actions",
			"content": "Passing additional values"
		},
		{
			"heading": "server-actions",
			"content": "Revalidating data"
		},
		{
			"heading": "server-actions",
			"content": "Redirecting"
		},
		{
			"heading": "server-actions",
			"content": "Setting cookies"
		},
		{
			"heading": "server-actions",
			"content": "Deleting cookies"
		},
		{
			"heading": "metadata",
			"content": "Creating an RSS feed"
		},
		{
			"heading": "metadata",
			"content": "Creating an Open Graph image"
		},
		{
			"heading": "metadata",
			"content": "Creating a sitemap"
		},
		{
			"heading": "metadata",
			"content": "Creating a robots.txt file"
		},
		{
			"heading": "metadata",
			"content": "Creating a custom 404 page"
		},
		{
			"heading": "metadata",
			"content": "Creating a custom 500 page"
		},
		{
			"heading": "auth",
			"content": "Creating a sign-up form"
		},
		{
			"heading": "auth",
			"content": "Stateless, cookie-based session management"
		},
		{
			"heading": "auth",
			"content": "Stateful, database-backed session management"
		},
		{
			"heading": "auth",
			"content": "Managing authorization"
		},
		{
			"heading": "testing",
			"content": "Vitest"
		},
		{
			"heading": "testing",
			"content": "Jest"
		},
		{
			"heading": "testing",
			"content": "Playwright"
		},
		{
			"heading": "testing",
			"content": "Cypress"
		},
		{
			"heading": "deployment",
			"content": "Creating a Dockerfile"
		},
		{
			"heading": "deployment",
			"content": "Creating a static export (SPA)"
		},
		{
			"heading": "deployment",
			"content": "Configuring caching when self-hosting"
		},
		{
			"heading": "deployment",
			"content": "Configuring Image Optimization when self-hosting"
		}
	],
	"headings": [
		{
			"id": "data-fetching",
			"content": "Data Fetching"
		},
		{
			"id": "revalidating-data",
			"content": "Revalidating Data"
		},
		{
			"id": "forms",
			"content": "Forms"
		},
		{
			"id": "server-actions",
			"content": "Server Actions"
		},
		{
			"id": "metadata",
			"content": "Metadata"
		},
		{
			"id": "auth",
			"content": "Auth"
		},
		{
			"id": "testing",
			"content": "Testing"
		},
		{
			"id": "deployment",
			"content": "Deployment"
		}
	]
};
var toc = [
	{
		depth: 3,
		url: "#data-fetching",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Data Fetching" })
	},
	{
		depth: 3,
		url: "#revalidating-data",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Revalidating Data" })
	},
	{
		depth: 3,
		url: "#forms",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Forms" })
	},
	{
		depth: 3,
		url: "#server-actions",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Server Actions" })
	},
	{
		depth: 3,
		url: "#metadata",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Metadata" })
	},
	{
		depth: 3,
		url: "#auth",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Auth" })
	},
	{
		depth: 3,
		url: "#testing",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Testing" })
	},
	{
		depth: 3,
		url: "#deployment",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Deployment" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h3: "h3",
		li: "li",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "data-fetching",
			children: "Data Fetching"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/app/getting-started/fetching-data#with-the-fetch-api",
				children: [
					"Using the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
					" API"
				]
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/getting-started/fetching-data#with-an-orm-or-database",
				children: "Using an ORM or database client"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/page",
				children: "Reading search params on the server"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/use-search-params",
				children: "Reading search params on the client"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "revalidating-data",
			children: "Revalidating Data"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/incremental-static-regeneration#time-based-revalidation",
				children: "Using ISR to revalidate data after a certain time"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/incremental-static-regeneration#on-demand-revalidation-with-revalidatepath",
				children: "Using ISR to revalidate data on-demand"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "forms",
			children: "Forms"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/forms",
				children: "Showing a pending state while submitting a form"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/forms",
				children: "Server-side form validation"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/getting-started/error-handling#handling-expected-errors",
				children: "Handling expected errors"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/getting-started/error-handling#handling-uncaught-exceptions",
				children: "Handling unexpected exceptions"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/forms#optimistic-updates",
				children: "Showing optimistic UI updates"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/forms#programmatic-form-submission",
				children: "Programmatic form submission"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "server-actions",
			children: "Server Actions"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/forms",
				children: "Passing additional values"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/data-fetching/server-actions-and-mutations#revalidating-data",
				children: "Revalidating data"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/data-fetching/server-actions-and-mutations#redirecting",
				children: "Redirecting"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/cookies#setting-a-cookie",
				children: "Setting cookies"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/cookies#deleting-cookies",
				children: "Deleting cookies"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "metadata",
			children: "Metadata"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/route-handlers#non-ui-responses",
				children: "Creating an RSS feed"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/metadata/opengraph-image",
				children: "Creating an Open Graph image"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/metadata/sitemap",
				children: "Creating a sitemap"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/metadata/robots",
				children: "Creating a robots.txt file"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/not-found",
				children: "Creating a custom 404 page"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/error",
				children: "Creating a custom 500 page"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "auth",
			children: "Auth"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/authentication#sign-up-and-login-functionality",
				children: "Creating a sign-up form"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/authentication#stateless-sessions",
				children: "Stateless, cookie-based session management"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/authentication#database-sessions",
				children: "Stateful, database-backed session management"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/authentication#authorization",
				children: "Managing authorization"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "testing",
			children: "Testing"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/testing/vitest",
				children: "Vitest"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/testing/jest",
				children: "Jest"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/testing/playwright",
				children: "Playwright"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/testing/cypress",
				children: "Cypress"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "deployment",
			children: "Deployment"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/getting-started/deploying#docker",
				children: "Creating a Dockerfile"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/static-exports",
				children: "Creating a static export (SPA)"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/self-hosting#configuring-caching",
				children: "Configuring caching when self-hosting"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/self-hosting#image-optimization",
				children: "Configuring Image Optimization when self-hosting"
			}) }),
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
export { toc as a, structuredData as i, _02_guides_exports as n, frontmatter as r, MDXContent as t };
