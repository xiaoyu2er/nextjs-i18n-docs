import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/02-app-DtygDG_W.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _02_app_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "App Router",
	"description": "Use the new App Router with Next.js' and React's latest features, including Layouts, Server Components, Suspense, and more."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "The Next.js App Router introduces a new model for building applications using React's latest features such as Server Components, Streaming with Suspense, and Server Actions."
		},
		{
			"heading": void 0,
			"content": "Get started with the App Router by creating your first page."
		},
		{
			"heading": "how-can-i-access-the-request-object-in-a-layout",
			"content": "You intentionally cannot access the raw request object. However, you can access `headers` and `cookies` through server-only functions. You can also set cookies."
		},
		{
			"heading": "how-can-i-access-the-request-object-in-a-layout",
			"content": "Layouts do not rerender. They can be cached and reused to avoid unnecessary computation when navigating between pages. By restricting layouts from accessing the raw request, Next.js can prevent the execution of potentially slow or expensive user code within the layout, which could negatively impact performance."
		},
		{
			"heading": "how-can-i-access-the-request-object-in-a-layout",
			"content": "This design also enforces consistent and predictable behavior for layouts across different pages, which simplifies development and debugging."
		},
		{
			"heading": "how-can-i-access-the-request-object-in-a-layout",
			"content": "Depending on the UI pattern you're building, Parallel Routes allow you to render multiple pages in the same layout, and pages have access to the route segments as well as the URL search params."
		},
		{
			"heading": "how-can-i-access-the-url-on-a-page",
			"content": "By default, pages are Server Components. You can access the route segments through the `params` prop and the URL search params through the `searchParams` prop for a given page."
		},
		{
			"heading": "how-can-i-access-the-url-on-a-page",
			"content": "If you are using Client Components, you can use `usePathname`, `useSelectedLayoutSegment`, and `useSelectedLayoutSegments` for more complex routes."
		},
		{
			"heading": "how-can-i-access-the-url-on-a-page",
			"content": "Further, depending on the UI pattern you're building, Parallel Routes allow you to render multiple pages in the same layout, and pages have access to the route segments as well as the URL search params."
		},
		{
			"heading": "how-can-i-redirect-from-a-server-component",
			"content": "You can use `redirect` to redirect from a page to a relative or absolute URL. `redirect` is a temporary (307) redirect, while `permanentRedirect` is a permanent (308) redirect. When these functions are used while streaming UI, they will insert a meta tag to emit the redirect on the client side."
		},
		{
			"heading": "how-can-i-handle-authentication-with-the-app-router",
			"content": "Here are some common authentication solutions that support the App Router:"
		},
		{
			"heading": "how-can-i-handle-authentication-with-the-app-router",
			"content": "NextAuth.js"
		},
		{
			"heading": "how-can-i-handle-authentication-with-the-app-router",
			"content": "Clerk"
		},
		{
			"heading": "how-can-i-handle-authentication-with-the-app-router",
			"content": "Lucia"
		},
		{
			"heading": "how-can-i-handle-authentication-with-the-app-router",
			"content": "Auth0"
		},
		{
			"heading": "how-can-i-handle-authentication-with-the-app-router",
			"content": "Stytch"
		},
		{
			"heading": "how-can-i-handle-authentication-with-the-app-router",
			"content": "Kinde"
		},
		{
			"heading": "how-can-i-handle-authentication-with-the-app-router",
			"content": "Or manually handling sessions or JWTs"
		},
		{
			"heading": "how-can-i-set-cookies",
			"content": "You can set cookies in Server Actions or Route Handlers using the `cookies` function."
		},
		{
			"heading": "how-can-i-set-cookies",
			"content": "Since HTTP does not allow setting cookies after streaming starts, you cannot set cookies from a page or layout directly. You can also set cookies from Middleware."
		},
		{
			"heading": "how-can-i-build-multi-tenant-apps",
			"content": "If you are looking to build a single Next.js application that serves multiple tenants, we have built an example showing our recommended architecture."
		},
		{
			"heading": "how-can-i-invalidate-the-app-router-cache",
			"content": "There are multiple layers of caching in Next.js, and thus, multiple ways to invalidate different parts of the cache. Learn more about caching."
		},
		{
			"heading": "are-there-any-comprehensive-open-source-applications-built-on-the-app-router",
			"content": "Yes. You can view Next.js Commerce or the Platforms Starter Kit for two larger examples of using the App Router that are open-source."
		},
		{
			"heading": "learn-more",
			"content": "Routing Fundamentals"
		},
		{
			"heading": "learn-more",
			"content": "Data Fetching, Caching, and Revalidating"
		},
		{
			"heading": "learn-more",
			"content": "Forms and Mutations"
		},
		{
			"heading": "learn-more",
			"content": "Caching"
		},
		{
			"heading": "learn-more",
			"content": "Rendering Fundamentals"
		},
		{
			"heading": "learn-more",
			"content": "Server Components"
		},
		{
			"heading": "learn-more",
			"content": "Client Components"
		}
	],
	"headings": [
		{
			"id": "frequently-asked-questions",
			"content": "Frequently Asked Questions"
		},
		{
			"id": "how-can-i-access-the-request-object-in-a-layout",
			"content": "How can I access the request object in a layout?"
		},
		{
			"id": "how-can-i-access-the-url-on-a-page",
			"content": "How can I access the URL on a page?"
		},
		{
			"id": "how-can-i-redirect-from-a-server-component",
			"content": "How can I redirect from a Server Component?"
		},
		{
			"id": "how-can-i-handle-authentication-with-the-app-router",
			"content": "How can I handle authentication with the App Router?"
		},
		{
			"id": "how-can-i-set-cookies",
			"content": "How can I set cookies?"
		},
		{
			"id": "how-can-i-build-multi-tenant-apps",
			"content": "How can I build multi-tenant apps?"
		},
		{
			"id": "how-can-i-invalidate-the-app-router-cache",
			"content": "How can I invalidate the App Router cache?"
		},
		{
			"id": "are-there-any-comprehensive-open-source-applications-built-on-the-app-router",
			"content": "Are there any comprehensive, open-source applications built on the App Router?"
		},
		{
			"id": "learn-more",
			"content": "Learn More"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#frequently-asked-questions",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Frequently Asked Questions" })
	},
	{
		depth: 3,
		url: "#how-can-i-access-the-request-object-in-a-layout",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "How can I access the request object in a layout?" })
	},
	{
		depth: 3,
		url: "#how-can-i-access-the-url-on-a-page",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "How can I access the URL on a page?" })
	},
	{
		depth: 3,
		url: "#how-can-i-redirect-from-a-server-component",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "How can I redirect from a Server Component?" })
	},
	{
		depth: 3,
		url: "#how-can-i-handle-authentication-with-the-app-router",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "How can I handle authentication with the App Router?" })
	},
	{
		depth: 3,
		url: "#how-can-i-set-cookies",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "How can I set cookies?" })
	},
	{
		depth: 3,
		url: "#how-can-i-build-multi-tenant-apps",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "How can I build multi-tenant apps?" })
	},
	{
		depth: 3,
		url: "#how-can-i-invalidate-the-app-router-cache",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "How can I invalidate the App Router cache?" })
	},
	{
		depth: 3,
		url: "#are-there-any-comprehensive-open-source-applications-built-on-the-app-router",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Are there any comprehensive, open-source applications built on the App Router?" })
	},
	{
		depth: 2,
		url: "#learn-more",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Learn More" })
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
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The Next.js App Router introduces a new model for building applications using React's latest features such as ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/rendering/server-components",
				children: "Server Components"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense",
				children: "Streaming with Suspense"
			}),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/data-fetching/server-actions-and-mutations",
				children: "Server Actions"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Get started with the App Router by ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/pages-and-layouts",
				children: "creating your first page"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "frequently-asked-questions",
			children: "Frequently Asked Questions"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "how-can-i-access-the-request-object-in-a-layout",
			children: "How can I access the request object in a layout?"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You intentionally cannot access the raw request object. However, you can access ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/headers",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "headers" })
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/cookies",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "cookies" })
			}),
			" through server-only functions. You can also ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#how-can-i-set-cookies",
				children: "set cookies"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "/docs/app/building-your-application/routing/pages-and-layouts#layouts",
			children: "Layouts"
		}), " do not rerender. They can be cached and reused to avoid unnecessary computation when navigating between pages. By restricting layouts from accessing the raw request, Next.js can prevent the execution of potentially slow or expensive user code within the layout, which could negatively impact performance."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This design also enforces consistent and predictable behavior for layouts across different pages, which simplifies development and debugging." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Depending on the UI pattern you're building, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/parallel-routes",
				children: "Parallel Routes"
			}),
			" allow you to render multiple pages in the same layout, and pages have access to the route segments as well as the URL search params."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "how-can-i-access-the-url-on-a-page",
			children: "How can I access the URL on a page?"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"By default, pages are Server Components. You can access the route segments through the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/page#params-optional",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "params" })
			}),
			" prop and the URL search params through the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/file-conventions/page#searchparams-optional",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "searchParams" })
			}),
			" prop for a given page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you are using Client Components, you can use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/use-pathname",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "usePathname" })
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/use-selected-layout-segment",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "useSelectedLayoutSegment" })
			}),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/use-selected-layout-segments",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "useSelectedLayoutSegments" })
			}),
			" for more complex routes."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Further, depending on the UI pattern you're building, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/parallel-routes",
				children: "Parallel Routes"
			}),
			" allow you to render multiple pages in the same layout, and pages have access to the route segments as well as the URL search params."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "how-can-i-redirect-from-a-server-component",
			children: "How can I redirect from a Server Component?"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/redirect",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "redirect" })
			}),
			" to redirect from a page to a relative or absolute URL. ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/redirect",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "redirect" })
			}),
			" is a temporary (307) redirect, while ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/permanentRedirect",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "permanentRedirect" })
			}),
			" is a permanent (308) redirect. When these functions are used while streaming UI, they will insert a meta tag to emit the redirect on the client side."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "how-can-i-handle-authentication-with-the-app-router",
			children: "How can I handle authentication with the App Router?"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Here are some common authentication solutions that support the App Router:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://next-auth.js.org/configuration/nextjs#in-app-router",
				children: "NextAuth.js"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://clerk.com/docs/quickstarts/nextjs",
				children: "Clerk"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://lucia-auth.com/getting-started/nextjs-app",
				children: "Lucia"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/auth0/nextjs-auth0#app-router",
				children: "Auth0"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://stytch.com/docs/example-apps/frontend/nextjs",
				children: "Stytch"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://kinde.com/docs/developer-tools/nextjs-sdk/",
				children: "Kinde"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Or manually handling sessions or JWTs" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "how-can-i-set-cookies",
			children: "How can I set cookies?"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can set cookies in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/data-fetching/server-actions-and-mutations#cookies",
				children: "Server Actions"
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/route-handlers",
				children: "Route Handlers"
			}),
			" using the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/functions/cookies",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "cookies" })
			}),
			" function."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Since HTTP does not allow setting cookies after streaming starts, you cannot set cookies from a page or layout directly. You can also set cookies from ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/middleware#using-cookies",
				children: "Middleware"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "how-can-i-build-multi-tenant-apps",
			children: "How can I build multi-tenant apps?"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you are looking to build a single Next.js application that serves multiple tenants, we have ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/templates/next.js/platforms-starter-kit",
				children: "built an example"
			}),
			" showing our recommended architecture."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "how-can-i-invalidate-the-app-router-cache",
			children: "How can I invalidate the App Router cache?"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"There are multiple layers of caching in Next.js, and thus, multiple ways to invalidate different parts of the cache. ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/caching",
				children: "Learn more about caching"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "are-there-any-comprehensive-open-source-applications-built-on-the-app-router",
			children: "Are there any comprehensive, open-source applications built on the App Router?"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Yes. You can view ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/templates/next.js/nextjs-commerce",
				children: "Next.js Commerce"
			}),
			" or the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/templates/next.js/platforms-starter-kit",
				children: "Platforms Starter Kit"
			}),
			" for two larger examples of using the App Router that are open-source."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "learn-more",
			children: "Learn More"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing",
				children: "Routing Fundamentals"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating",
				children: "Data Fetching, Caching, and Revalidating"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/data-fetching/server-actions-and-mutations",
				children: "Forms and Mutations"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/caching",
				children: "Caching"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/rendering",
				children: "Rendering Fundamentals"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/rendering/server-components",
				children: "Server Components"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/rendering/client-components",
				children: "Client Components"
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
export { toc as a, structuredData as i, _02_app_exports as n, frontmatter as r, MDXContent as t };
