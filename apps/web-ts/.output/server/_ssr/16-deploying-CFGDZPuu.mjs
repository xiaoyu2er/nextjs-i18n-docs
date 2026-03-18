import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/16-deploying-CFGDZPuu.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _16_deploying_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Deploying",
	"description": "Learn how to deploy your Next.js application."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js can be deployed as a Node.js server, Docker container, static export, or adapted to run on different platforms."
		},
		{
			"heading": void 0,
			"content": "Deployment Option"
		},
		{
			"heading": void 0,
			"content": "Feature Support"
		},
		{
			"heading": void 0,
			"content": "Node.js server"
		},
		{
			"heading": void 0,
			"content": "All"
		},
		{
			"heading": void 0,
			"content": "Docker container"
		},
		{
			"heading": void 0,
			"content": "All"
		},
		{
			"heading": void 0,
			"content": "Static export"
		},
		{
			"heading": void 0,
			"content": "Limited"
		},
		{
			"heading": void 0,
			"content": "Adapters"
		},
		{
			"heading": void 0,
			"content": "Platform-specific"
		},
		{
			"heading": "nodejs-server",
			"content": "Next.js can be deployed to any provider that supports Node.js. Ensure your `package.json` has the `\"build\"` and `\"start\"` scripts:"
		},
		{
			"heading": "nodejs-server",
			"content": "Then, run `npm run build` to build your application and `npm run start` to start the Node.js server. This server supports all Next.js features. If needed, you can also eject to a custom server."
		},
		{
			"heading": "nodejs-server",
			"content": "Node.js deployments support all Next.js features. Learn how to configure them for your infrastructure."
		},
		{
			"heading": "templates",
			"content": "Flightcontrol"
		},
		{
			"heading": "templates",
			"content": "Railway"
		},
		{
			"heading": "templates",
			"content": "Replit"
		},
		{
			"heading": "docker",
			"content": "Next.js can be deployed to any provider that supports Docker containers. This includes container orchestrators like Kubernetes or a cloud provider that runs Docker."
		},
		{
			"heading": "docker",
			"content": "Docker deployments support all Next.js features. Learn how to configure them for your infrastructure."
		},
		{
			"heading": "docker",
			"content": "> **Note for development:** While Docker is excellent for production deployments, consider using local development (`npm run dev`) instead of Docker during development on Mac and Windows for better performance. Learn more about optimizing local development."
		},
		{
			"heading": "templates-1",
			"content": "Docker"
		},
		{
			"heading": "templates-1",
			"content": "Docker Multi-Environment"
		},
		{
			"heading": "templates-1",
			"content": "DigitalOcean"
		},
		{
			"heading": "templates-1",
			"content": "Fly.io"
		},
		{
			"heading": "templates-1",
			"content": "Google Cloud Run"
		},
		{
			"heading": "templates-1",
			"content": "Render"
		},
		{
			"heading": "templates-1",
			"content": "SST"
		},
		{
			"heading": "static-export",
			"content": "Next.js enables starting as a static site or Single-Page Application (SPA), then later optionally upgrading to use features that require a server."
		},
		{
			"heading": "static-export",
			"content": "Since Next.js supports static exports, it can be deployed and hosted on any web server that can serve HTML/CSS/JS static assets. This includes tools like AWS S3, Nginx, or Apache."
		},
		{
			"heading": "static-export",
			"content": "Running as a static export **does not** support Next.js features that require a server. Learn more."
		},
		{
			"heading": "templates-2",
			"content": "GitHub Pages"
		},
		{
			"heading": "adapters",
			"content": "Next.js can be adapted to run on different platforms to support their infrastructure capabilities."
		},
		{
			"heading": "adapters",
			"content": "Refer to each provider's documentation for information on supported Next.js features:"
		},
		{
			"heading": "adapters",
			"content": "AWS Amplify Hosting"
		},
		{
			"heading": "adapters",
			"content": "Cloudflare"
		},
		{
			"heading": "adapters",
			"content": "Deno Deploy"
		},
		{
			"heading": "adapters",
			"content": "Netlify"
		},
		{
			"heading": "adapters",
			"content": "Vercel"
		},
		{
			"heading": "adapters",
			"content": "> **Note:** We are working on a Deployment Adapters API for all platforms to adopt. After completion, we will add documentation on how to write your own adapters."
		}
	],
	"headings": [
		{
			"id": "nodejs-server",
			"content": "Node.js server"
		},
		{
			"id": "templates",
			"content": "Templates"
		},
		{
			"id": "docker",
			"content": "Docker"
		},
		{
			"id": "templates-1",
			"content": "Templates"
		},
		{
			"id": "static-export",
			"content": "Static export"
		},
		{
			"id": "templates-2",
			"content": "Templates"
		},
		{
			"id": "adapters",
			"content": "Adapters"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#nodejs-server",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Node.js server" })
	},
	{
		depth: 3,
		url: "#templates",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Templates" })
	},
	{
		depth: 2,
		url: "#docker",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Docker" })
	},
	{
		depth: 3,
		url: "#templates-1",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Templates" })
	},
	{
		depth: 2,
		url: "#static-export",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Static export" })
	},
	{
		depth: 3,
		url: "#templates-2",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Templates" })
	},
	{
		depth: 2,
		url: "#adapters",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Adapters" })
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js can be deployed as a Node.js server, Docker container, static export, or adapted to run on different platforms." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Deployment Option" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Feature Support" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nodejs-server",
				children: "Node.js server"
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "All" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#docker",
				children: "Docker container"
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "All" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#static-export",
				children: "Static export"
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Limited" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#adapters",
				children: "Adapters"
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Platform-specific" })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nodejs-server",
			children: "Node.js server"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js can be deployed to any provider that supports Node.js. Ensure your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "package.json" }),
			" has the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "\"build\"" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "\"start\"" }),
			" scripts:"
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
							children: "\"next dev\""
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
			(0, import_jsx_runtime.jsx)(_components.code, { children: "npm run build" }),
			" to build your application and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "npm run start" }),
			" to start the Node.js server. This server supports all Next.js features. If needed, you can also eject to a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/custom-server",
				children: "custom server"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Node.js deployments support all Next.js features. Learn how to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/self-hosting",
				children: "configure them"
			}),
			" for your infrastructure."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "templates",
			children: "Templates"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/nextjs/deploy-flightcontrol",
				children: "Flightcontrol"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/nextjs/deploy-railway",
				children: "Railway"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/nextjs/deploy-replit",
				children: "Replit"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "docker",
			children: "Docker"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js can be deployed to any provider that supports ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.docker.com/",
				children: "Docker"
			}),
			" containers. This includes container orchestrators like Kubernetes or a cloud provider that runs Docker."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Docker deployments support all Next.js features. Learn how to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/self-hosting",
				children: "configure them"
			}),
			" for your infrastructure."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note for development:" }),
				" While Docker is excellent for production deployments, consider using local development (",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "npm run dev" }),
				") instead of Docker during development on Mac and Windows for better performance. ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/guides/local-development",
					children: "Learn more about optimizing local development"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "templates-1",
			children: "Templates"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/tree/canary/examples/with-docker",
				children: "Docker"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/tree/canary/examples/with-docker-multi-env",
				children: "Docker Multi-Environment"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/nextjs/deploy-digitalocean",
				children: "DigitalOcean"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/nextjs/deploy-fly",
				children: "Fly.io"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/nextjs/deploy-google-cloud-run",
				children: "Google Cloud Run"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/nextjs/deploy-render",
				children: "Render"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/nextjs/deploy-sst",
				children: "SST"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "static-export",
			children: "Static export"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js enables starting as a static site or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/single-page-applications",
				children: "Single-Page Application (SPA)"
			}),
			", then later optionally upgrading to use features that require a server."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Since Next.js supports ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/static-exports",
				children: "static exports"
			}),
			", it can be deployed and hosted on any web server that can serve HTML/CSS/JS static assets. This includes tools like AWS S3, Nginx, or Apache."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Running as a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/static-exports",
				children: "static export"
			}),
			" ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "does not" }),
			" support Next.js features that require a server. ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/static-exports#unsupported-features",
				children: "Learn more"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "templates-2",
			children: "Templates"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/nextjs/deploy-github-pages",
				children: "GitHub Pages"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "adapters",
			children: "Adapters"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js can be adapted to run on different platforms to support their infrastructure capabilities." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Refer to each provider's documentation for information on supported Next.js features:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components",
				children: "AWS Amplify Hosting"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.cloudflare.com/workers/frameworks/framework-guides/nextjs",
				children: "Cloudflare"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://docs.deno.com/examples/next_tutorial",
				children: "Deno Deploy"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://docs.netlify.com/frameworks/next-js/overview/#next-js-support-on-netlify",
				children: "Netlify"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/docs/frameworks/nextjs",
				children: "Vercel"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }),
				" We are working on a ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/discussions/77740",
					children: "Deployment Adapters API"
				}),
				" for all platforms to adopt. After completion, we will add documentation on how to write your own adapters."
			] }),
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
export { toc as a, structuredData as i, _16_deploying_exports as n, frontmatter as r, MDXContent as t };
