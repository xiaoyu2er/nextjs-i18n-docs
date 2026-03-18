import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/incremental-adoption-yxlZWCpk.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var incremental_adoption_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Incrementally Adopting Next.js",
	"description": "Learn different strategies for incrementally adopting Next.js into your development workflow.",
	"author": [{
		"name": "Lee Robinson",
		"image": "/static/team/lee.jpg"
	}],
	"date": /* @__PURE__ */ new Date(1605708000507),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/incremental-adoption/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js has been designed for gradual adoption. With Next.js, you can continue using your existing code and add as much (or as little) React as you need. By starting small and incrementally adding more pages, you can prevent derailing feature work by avoiding a complete rewrite."
		},
		{
			"heading": void 0,
			"content": "Many companies need to modernize their tech stack to reduce costs, increase developer productivity, and provide the best experience for their customers. Component-driven development has greatly improved the deployment velocity and reusability of modern codebases."
		},
		{
			"heading": void 0,
			"content": "And with over 8 million downloads/month, React is the leading component-driven choice for developers. Next.js, the React framework for production, enables you to incrementally adopt React."
		},
		{
			"heading": "motivation",
			"content": "In an increasingly mobile world, improving and tracking your Core Web Vitals is critical for success. Your customers are likely distributed across the world with varying internet speeds. Every second (or millisecond) of additional time spent waiting for a page to load or an action to complete could be the difference between a sale, impression, or conversion."
		},
		{
			"heading": "motivation",
			"content": "If you're modernizing your tech stack, you might be facing challenges like:"
		},
		{
			"heading": "motivation",
			"content": "Your application has years of legacy code that is difficult to reason about and would take years (and millions of dollars) to rewrite completely."
		},
		{
			"heading": "motivation",
			"content": "Your page load times continue to increase as the size and complexity of the application grows. Simple marketing pages are as slow as the most complex pages."
		},
		{
			"heading": "motivation",
			"content": "You're trying to scale your development team, but are facing issues adding more developers into the existing codebase."
		},
		{
			"heading": "motivation",
			"content": "You have outdated CI/CD and DevOps processes, which decrease developer productivity and make it difficult to safely and reliably roll out new changes."
		},
		{
			"heading": "motivation",
			"content": "Your application is not responsive for mobile devices and it's impossible to update the global page styling without breaking other parts of the application."
		},
		{
			"heading": "motivation",
			"content": "You know you need to do &#x2A;something,* but it can be overwhelming to understand where to start. By incrementally adopting Next.js, you can begin to solve the above issues and transform your application. Let's discuss a few different strategies for adopting Next.js into your existing tech stack."
		},
		{
			"heading": "subpath",
			"content": "The first strategy is to configure your server or proxy such that, everything under a specific subpath points to a Next.js app. For example, your existing website might be at `example.com`, and you might configure your proxy such that `example.com/store` serves a Next.js e-commerce store."
		},
		{
			"heading": "subpath",
			"content": "Using `basePath`, you can configure your Next.js application's assets and links to automatically work with your new subpath `/store`. Since each page in Next.js is its own standalone route, pages like `pages/products.js` will route to `example.com/store/products` in your application."
		},
		{
			"heading": "subpath",
			"content": "To learn more about `basePath`, take a look at our documentation."
		},
		{
			"heading": "subpath",
			"content": "(&#x2A;*Note:** This feature was introduced in Next.js 9.5 and up. If you’re using older versions of Next.js, please upgrade before trying it out.)"
		},
		{
			"heading": "rewrites",
			"content": "The second strategy is to create a new Next.js app that points to the root URL of your domain. Then, you can use `rewrites` inside `next.config.js` to have some subpaths to be proxied to your existing app."
		},
		{
			"heading": "rewrites",
			"content": "For example, let's say you created a Next.js app to be served from `example.com` with the following `next.config.js`. Now, requests for the pages you’ve added to this Next.js app (e.g. `/about` if you’ve added `pages/about.js`) will be handled by Next.js, and requests for any other route (e.g. `/dashboard`) will be proxied to `proxy.example.com`."
		},
		{
			"heading": "rewrites",
			"content": "To learn more about rewrites, take a look at our documentation."
		},
		{
			"heading": "micro-frontends-with-monorepos-and-subdomains",
			"content": "Next.js and Vercel make it easy to adopt micro-frontends and deploy as a Monorepo. This allows you to use subdomains to adopt new applications incrementally. Some benefits of micro-frontends:"
		},
		{
			"heading": "micro-frontends-with-monorepos-and-subdomains",
			"content": "Smaller, more cohesive and maintainable codebases."
		},
		{
			"heading": "micro-frontends-with-monorepos-and-subdomains",
			"content": "More scalable organizations with decoupled, autonomous teams."
		},
		{
			"heading": "micro-frontends-with-monorepos-and-subdomains",
			"content": "The ability to upgrade, update, or even rewrite parts of the frontend in a more incremental fashion."
		},
		{
			"heading": "micro-frontends-with-monorepos-and-subdomains",
			"content": "> The architecture of a monorepo deployed to Vercel."
		},
		{
			"heading": "micro-frontends-with-monorepos-and-subdomains",
			"content": "Once your monorepo is set up, push changes to your Git repository as usual and you'll see the commits deployed to the Vercel projects you've connected. Say goodbye to outdated CI/CD processes."
		},
		{
			"heading": "micro-frontends-with-monorepos-and-subdomains",
			"content": "> An example of Deployment URLs provided by a Git Integration."
		},
		{
			"heading": "conclusion",
			"content": "Next.js was designed for incremental adoption into your existing tech stack. The Vercel platform makes it a collaborative experience with deploy previews for every code change, by seamlessly integrating with GitHub, GitLab, and Bitbucket."
		},
		{
			"heading": "conclusion",
			"content": "Instantly preview changes locally with Fast Refresh, increasing developer productivity."
		},
		{
			"heading": "conclusion",
			"content": "Push changes to create a Branch Preview, optimized for collaboration with stakeholders."
		},
		{
			"heading": "conclusion",
			"content": "Deploy to production with Vercel by merging the PR. No complicated DevOps."
		},
		{
			"heading": "conclusion",
			"content": "To learn more, read about subpaths and rewrites or deploy an example with micro-frontends."
		}
	],
	"headings": [
		{
			"id": "motivation",
			"content": "Motivation"
		},
		{
			"id": "strategies",
			"content": "Strategies"
		},
		{
			"id": "subpath",
			"content": "Subpath"
		},
		{
			"id": "rewrites",
			"content": "Rewrites"
		},
		{
			"id": "micro-frontends-with-monorepos-and-subdomains",
			"content": "Micro-Frontends with Monorepos and Subdomains"
		},
		{
			"id": "conclusion",
			"content": "Conclusion"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#motivation",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#motivation",
			children: "Motivation"
		}) })
	},
	{
		depth: 2,
		url: "#strategies",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#strategies",
			children: "Strategies"
		}) })
	},
	{
		depth: 3,
		url: "#subpath",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#subpath",
			children: "Subpath"
		}) })
	},
	{
		depth: 3,
		url: "#rewrites",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#rewrites",
			children: "Rewrites"
		}) })
	},
	{
		depth: 3,
		url: "#micro-frontends-with-monorepos-and-subdomains",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#micro-frontends-with-monorepos-and-subdomains",
			children: "Micro-Frontends with Monorepos and Subdomains"
		}) })
	},
	{
		depth: 2,
		url: "#conclusion",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#conclusion",
			children: "Conclusion"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		em: "em",
		h2: "h2",
		h3: "h3",
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://nextjs.org/",
			children: "Next.js"
		}), " has been designed for gradual adoption. With Next.js, you can continue using your existing code and add as much (or as little) React as you need. By starting small and incrementally adding more pages, you can prevent derailing feature work by avoiding a complete rewrite."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Many companies need to modernize their tech stack to reduce costs, increase developer productivity, and provide the best experience for their customers. Component-driven development has greatly improved the deployment velocity and reusability of modern codebases." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"And with over ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.npmtrends.com/react",
				children: "8 million downloads/month"
			}),
			", React is the leading component-driven choice for developers. Next.js, the React framework for production, enables you to incrementally adopt React."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "motivation",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#motivation",
				children: "Motivation"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In an increasingly mobile world, improving and tracking your ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/analytics",
				children: "Core Web Vitals"
			}),
			" is critical for success. Your customers are likely distributed across the world with varying internet speeds. Every second (or millisecond) of additional time spent waiting for a page to load or an action to complete could be the difference between a sale, impression, or conversion."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If you're modernizing your tech stack, you might be facing challenges like:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Your application has years of legacy code that is difficult to reason about and would take years (and millions of dollars) to rewrite completely." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Your page load times continue to increase as the size and complexity of the application grows. Simple marketing pages are as slow as the most complex pages." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "You're trying to scale your development team, but are facing issues adding more developers into the existing codebase." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "You have outdated CI/CD and DevOps processes, which decrease developer productivity and make it difficult to safely and reliably roll out new changes." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Your application is not responsive for mobile devices and it's impossible to update the global page styling without breaking other parts of the application." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You know you need to do ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "something," }),
			" but it can be overwhelming to understand ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.psychologytoday.com/us/blog/mindfully-present-fully-alive/201804/the-only-way-eat-elephant",
				children: "where to start"
			}),
			". By incrementally adopting Next.js, you can begin to solve the above issues and transform your application. Let's discuss a few different strategies for adopting Next.js into your existing tech stack."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "strategies",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#strategies",
				children: "Strategies"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "subpath",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#subpath",
				children: "Subpath"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The first strategy is to configure your server or proxy such that, everything under a specific subpath points to a Next.js app. For example, your existing website might be at ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "example.com" }),
			", and you might configure your proxy such that ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "example.com/store" }),
			" serves a Next.js e-commerce store."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/basePath",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "basePath" })
			}),
			", you can configure your Next.js application's assets and links to automatically work with your new subpath ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/store" }),
			". Since each page in Next.js is its own ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/routing",
				children: "standalone route"
			}),
			", pages like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/products.js" }),
			" will route to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "example.com/store/products" }),
			" in your application."
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  basePath: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/store'"
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
						children: "};"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To learn more about ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "basePath" }),
			", take a look at our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/basePath",
				children: "documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"(",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }),
			" This feature was introduced in Next.js 9.5 and up. If you’re using older versions of Next.js, please upgrade before trying it out.)"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "rewrites",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#rewrites",
				children: "Rewrites"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The second strategy is to create a new Next.js app that points to the root URL of your domain. Then, you can use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/rewrites",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "rewrites" })
			}),
			" inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			" to have some subpaths to be proxied to your existing app."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, let's say you created a Next.js app to be served from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "example.com" }),
			" with the following ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			". Now, requests for the pages you’ve added to this Next.js app (e.g. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/about" }),
			" if you’ve added ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/about.js" }),
			") will be handled by Next.js, and requests for any other route (e.g. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/dashboard" }),
			") will be proxied to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "proxy.example.com" }),
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "  async"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " rewrites"
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
						children: "    return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ["
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "      // we need to define a no-op rewrite to trigger checking"
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
						children: "      // all pages/static files before we attempt proxying"
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
						children: "      {"
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
							children: "        source: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/:path*'"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "        destination: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/:path*'"
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
						children: "      },"
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
						children: "      {"
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
							children: "        source: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/:path*'"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "        destination: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "`https://proxy.example.com/:path*`"
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
						children: "      },"
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
						children: "    ];"
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
						children: "};"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To learn more about rewrites, take a look at our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/rewrites",
				children: "documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "micro-frontends-with-monorepos-and-subdomains",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#micro-frontends-with-monorepos-and-subdomains",
				children: "Micro-Frontends with Monorepos and Subdomains"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com",
				children: "Vercel"
			}),
			" make it easy to adopt ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://martinfowler.com/articles/micro-frontends.html",
				children: "micro-frontends"
			}),
			" and deploy as a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/blog/monorepos",
				children: "Monorepo"
			}),
			". This allows you to use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://en.wikipedia.org/wiki/Subdomain",
				children: "subdomains"
			}),
			" to adopt new applications incrementally. Some benefits of micro-frontends:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Smaller, more cohesive and maintainable codebases." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "More scalable organizations with decoupled, autonomous teams." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The ability to upgrade, update, or even rewrite parts of the frontend in a more incremental fashion." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/incremental-adoption/light-arch.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "The architecture of a monorepo deployed to Vercel." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Once your monorepo is set up, push changes to your Git repository as usual and you'll see the commits deployed to the Vercel projects you've connected. Say goodbye to outdated CI/CD processes." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/incremental-adoption/dark-comment.png",
			alt: ""
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "An example of Deployment URLs provided by a Git Integration." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "conclusion",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#conclusion",
				children: "Conclusion"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js was designed for incremental adoption into your existing tech stack. The Vercel platform makes it a collaborative experience with deploy previews for every code change, by seamlessly integrating with GitHub, GitLab, and Bitbucket." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Instantly preview changes locally with ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/architecture/fast-refresh",
					children: "Fast Refresh"
				}),
				", increasing developer productivity."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Push changes to create a ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://vercel.com/github",
					children: "Branch Preview"
				}),
				", optimized for collaboration with stakeholders."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Deploy to production with ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://vercel.com",
					children: "Vercel"
				}),
				" by merging the PR. No complicated DevOps."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To learn more, read about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/basePath",
				children: "subpaths"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/rewrites",
				children: "rewrites"
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-zones",
				children: "deploy an example with micro-frontends"
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
export { toc as a, structuredData as i, frontmatter as n, incremental_adoption_exports as r, MDXContent as t };
