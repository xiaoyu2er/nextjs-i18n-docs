import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/08-deploying-BI4XKMzt.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _08_deploying_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Deploying",
	"description": "Learn how to deploy your Next.js app to production, either managed or self-hosted."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Congratulations! You're here because you are ready to deploy your Next.js application. This page will show how to deploy either managed or self-hosted using the Next.js Build API."
		},
		{
			"heading": "nextjs-build-api",
			"content": "`next build` generates an optimized version of your application for production. This standard output includes:"
		},
		{
			"heading": "nextjs-build-api",
			"content": "HTML files for pages using `getStaticProps` or Automatic Static Optimization"
		},
		{
			"heading": "nextjs-build-api",
			"content": "CSS files for global styles or for individually scoped styles"
		},
		{
			"heading": "nextjs-build-api",
			"content": "JavaScript for pre-rendering dynamic content from the Next.js server"
		},
		{
			"heading": "nextjs-build-api",
			"content": "JavaScript for interactivity on the client-side through React"
		},
		{
			"heading": "nextjs-build-api",
			"content": "This output is generated inside the `.next` folder:"
		},
		{
			"heading": "nextjs-build-api",
			"content": "`.next/static/chunks/pages` – Each JavaScript file inside this folder relates to the route with the same name. For example, `.next/static/chunks/pages/about.js` would be the JavaScript file loaded when viewing the `/about` route in your application"
		},
		{
			"heading": "nextjs-build-api",
			"content": "`.next/static/media` – Statically imported images from `next/image` are hashed and copied here"
		},
		{
			"heading": "nextjs-build-api",
			"content": "`.next/static/css` – Global CSS files for all pages in your application"
		},
		{
			"heading": "nextjs-build-api",
			"content": "`.next/server/pages` – The HTML and JavaScript entry points prerendered from the server. The `.nft.json` files are created when Output File Tracing is enabled and contain all the file paths that depend on a given page."
		},
		{
			"heading": "nextjs-build-api",
			"content": "`.next/server/chunks` – Shared JavaScript chunks used in multiple places throughout your application"
		},
		{
			"heading": "nextjs-build-api",
			"content": "`.next/cache` – Output for the build cache and cached images, responses, and pages from the Next.js server. Using a cache helps decrease build times and improve performance of loading images"
		},
		{
			"heading": "nextjs-build-api",
			"content": "All JavaScript code inside `.next` has been **compiled** and browser bundles have been **minified** to help achieve the best performance and support all modern browsers."
		},
		{
			"heading": "managed-nextjs-with-vercel",
			"content": "Vercel is the fastest way to deploy your Next.js application with zero configuration."
		},
		{
			"heading": "managed-nextjs-with-vercel",
			"content": "When deploying to Vercel, the platform automatically detects Next.js, runs `next build`, and optimizes the build output for you, including:"
		},
		{
			"heading": "managed-nextjs-with-vercel",
			"content": "Persisting cached assets across deployments if unchanged"
		},
		{
			"heading": "managed-nextjs-with-vercel",
			"content": "Immutable deployments with a unique URL for every commit"
		},
		{
			"heading": "managed-nextjs-with-vercel",
			"content": "Pages are automatically statically optimized, if possible"
		},
		{
			"heading": "managed-nextjs-with-vercel",
			"content": "Assets (JavaScript, CSS, images, fonts) are compressed and served from a Global Edge Network"
		},
		{
			"heading": "managed-nextjs-with-vercel",
			"content": "API Routes are automatically optimized as isolated Serverless Functions that can scale infinitely"
		},
		{
			"heading": "managed-nextjs-with-vercel",
			"content": "Middleware is automatically optimized as Edge Functions that have zero cold starts and boot instantly"
		},
		{
			"heading": "managed-nextjs-with-vercel",
			"content": "In addition, Vercel provides features like:"
		},
		{
			"heading": "managed-nextjs-with-vercel",
			"content": "Automatic performance monitoring with Next.js Speed Insights"
		},
		{
			"heading": "managed-nextjs-with-vercel",
			"content": "Automatic HTTPS and SSL certificates"
		},
		{
			"heading": "managed-nextjs-with-vercel",
			"content": "Automatic CI/CD (through GitHub, GitLab, Bitbucket, etc.)"
		},
		{
			"heading": "managed-nextjs-with-vercel",
			"content": "Support for Environment Variables"
		},
		{
			"heading": "managed-nextjs-with-vercel",
			"content": "Support for Custom Domains"
		},
		{
			"heading": "managed-nextjs-with-vercel",
			"content": "Support for Image Optimization with `next/image`"
		},
		{
			"heading": "managed-nextjs-with-vercel",
			"content": "Instant global deployments via `git push`"
		},
		{
			"heading": "managed-nextjs-with-vercel",
			"content": "Deploy a Next.js application to Vercel for free to try it out."
		},
		{
			"heading": "self-hosting",
			"content": "You can self-host Next.js with support for all features using Node.js or Docker. You can also do a Static HTML Export, which has some limitations."
		},
		{
			"heading": "nodejs-server",
			"content": "Next.js can be deployed to any hosting provider that supports Node.js. For example, AWS EC2 or a DigitalOcean Droplet."
		},
		{
			"heading": "nodejs-server",
			"content": "First, ensure your `package.json` has the `\"build\"` and `\"start\"` scripts:"
		},
		{
			"heading": "nodejs-server",
			"content": "Then, run `npm run build` to build your application. Finally, run `npm run start` to start the Node.js server. This server supports all features of Next.js."
		},
		{
			"heading": "nodejs-server",
			"content": "> If you are using `next/image`, consider adding `sharp` for more performant Image Optimization in your production environment by running `npm install sharp` in your project directory. On Linux platforms, `sharp` may require additional configuration to prevent excessive memory usage."
		},
		{
			"heading": "docker-image",
			"content": "Next.js can be deployed to any hosting provider that supports Docker containers. You can use this approach when deploying to container orchestrators such as Kubernetes or HashiCorp Nomad, or when running inside a single node in any cloud provider."
		},
		{
			"heading": "docker-image",
			"content": "Install Docker on your machine"
		},
		{
			"heading": "docker-image",
			"content": "Clone the with-docker example"
		},
		{
			"heading": "docker-image",
			"content": "Build your container: `docker build -t nextjs-docker .`"
		},
		{
			"heading": "docker-image",
			"content": "Run your container: `docker run -p 3000:3000 nextjs-docker`"
		},
		{
			"heading": "docker-image",
			"content": "If you need to use different Environment Variables across multiple environments, check out our with-docker-multi-env example."
		},
		{
			"heading": "static-html-export",
			"content": "If you’d like to do a static HTML export of your Next.js app, follow the directions on our Static HTML Export documentation."
		},
		{
			"heading": "other-services",
			"content": "The following services support Next.js `v12+`. Below, you’ll find examples or guides to deploy Next.js to each service."
		},
		{
			"heading": "managed-server",
			"content": "AWS Copilot"
		},
		{
			"heading": "managed-server",
			"content": "Digital Ocean App Platform"
		},
		{
			"heading": "managed-server",
			"content": "Google Cloud Run"
		},
		{
			"heading": "managed-server",
			"content": "Heroku"
		},
		{
			"heading": "managed-server",
			"content": "Railway"
		},
		{
			"heading": "managed-server",
			"content": "Render"
		},
		{
			"heading": "managed-server",
			"content": "> **Good to know**: There are also managed platforms that allow you to use a Dockerfile as shown in the example above."
		},
		{
			"heading": "static-only",
			"content": "The following services only support deploying Next.js using `output: 'export'`."
		},
		{
			"heading": "static-only",
			"content": "GitHub Pages"
		},
		{
			"heading": "static-only",
			"content": "You can also manually deploy the output from `output: 'export'` to any static hosting provider, often through your CI/CD pipeline like GitHub Actions, Jenkins, AWS CodeBuild, Circle CI, Azure Pipelines, and more."
		},
		{
			"heading": "serverless",
			"content": "AWS Amplify"
		},
		{
			"heading": "serverless",
			"content": "Azure Static Web Apps"
		},
		{
			"heading": "serverless",
			"content": "Cloudflare Pages"
		},
		{
			"heading": "serverless",
			"content": "Firebase"
		},
		{
			"heading": "serverless",
			"content": "Netlify"
		},
		{
			"heading": "serverless",
			"content": "Terraform"
		},
		{
			"heading": "serverless",
			"content": "SST"
		},
		{
			"heading": "serverless",
			"content": "> **Good to know**: Not all serverless providers implement the Next.js Build API from `next start`. Please check with the provider to see what features are supported."
		},
		{
			"heading": "automatic-updates",
			"content": "When you deploy your Next.js application, you want to see the latest version without needing to reload."
		},
		{
			"heading": "automatic-updates",
			"content": "Next.js will automatically load the latest version of your application in the background when routing. For client-side navigations, `next/link` will temporarily function as a normal `<a>` tag."
		},
		{
			"heading": "automatic-updates",
			"content": "> **Good to know**: If a new page (with an old version) has already been prefetched by `next/link`, Next.js will use the old version. Navigating to a page that has *not* been prefetched (and is not cached at the CDN level) will load the latest version."
		},
		{
			"heading": "manual-graceful-shutdowns",
			"content": "When self-hosting, you might want to run code when the server shuts down on `SIGTERM` or `SIGINT` signals."
		},
		{
			"heading": "manual-graceful-shutdowns",
			"content": "You can set the env variable `NEXT_MANUAL_SIG_HANDLE` to `true` and then register a handler for that signal inside your `_document.js` file. You will need to register the env variable directly in the `package.json` script, not in the `.env` file."
		},
		{
			"heading": "manual-graceful-shutdowns",
			"content": "> **Good to know**: Manual signal handling is not available in `next dev`."
		}
	],
	"headings": [
		{
			"id": "nextjs-build-api",
			"content": "Next.js Build API"
		},
		{
			"id": "managed-nextjs-with-vercel",
			"content": "Managed Next.js with Vercel"
		},
		{
			"id": "self-hosting",
			"content": "Self-Hosting"
		},
		{
			"id": "nodejs-server",
			"content": "Node.js Server"
		},
		{
			"id": "docker-image",
			"content": "Docker Image"
		},
		{
			"id": "static-html-export",
			"content": "Static HTML Export"
		},
		{
			"id": "other-services",
			"content": "Other Services"
		},
		{
			"id": "managed-server",
			"content": "Managed Server"
		},
		{
			"id": "static-only",
			"content": "Static Only"
		},
		{
			"id": "serverless",
			"content": "Serverless"
		},
		{
			"id": "automatic-updates",
			"content": "Automatic Updates"
		},
		{
			"id": "manual-graceful-shutdowns",
			"content": "Manual Graceful shutdowns"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#nextjs-build-api",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Next.js Build API" })
	},
	{
		depth: 2,
		url: "#managed-nextjs-with-vercel",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Managed Next.js with Vercel" })
	},
	{
		depth: 2,
		url: "#self-hosting",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Self-Hosting" })
	},
	{
		depth: 3,
		url: "#nodejs-server",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Node.js Server" })
	},
	{
		depth: 3,
		url: "#docker-image",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Docker Image" })
	},
	{
		depth: 3,
		url: "#static-html-export",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Static HTML Export" })
	},
	{
		depth: 2,
		url: "#other-services",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Other Services" })
	},
	{
		depth: 3,
		url: "#managed-server",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Managed Server" })
	},
	{
		depth: 3,
		url: "#static-only",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Static Only" })
	},
	{
		depth: 3,
		url: "#serverless",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Serverless" })
	},
	{
		depth: 2,
		url: "#automatic-updates",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Automatic Updates" })
	},
	{
		depth: 2,
		url: "#manual-graceful-shutdowns",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Manual Graceful shutdowns" })
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
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Congratulations! You're here because you are ready to deploy your Next.js application. This page will show how to deploy either managed or self-hosted using the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nextjs-build-api",
				children: "Next.js Build API"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nextjs-build-api",
			children: "Next.js Build API"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }), " generates an optimized version of your application for production. This standard output includes:"] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"HTML files for pages using ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/rendering/automatic-static-optimization",
					children: "Automatic Static Optimization"
				})
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "CSS files for global styles or for individually scoped styles" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "JavaScript for pre-rendering dynamic content from the Next.js server" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "JavaScript for interactivity on the client-side through React" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This output is generated inside the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".next" }),
			" folder:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".next/static/chunks/pages" }),
				" – Each JavaScript file inside this folder relates to the route with the same name. For example, ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".next/static/chunks/pages/about.js" }),
				" would be the JavaScript file loaded when viewing the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/about" }),
				" route in your application"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".next/static/media" }),
				" – Statically imported images from ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
				" are hashed and copied here"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: ".next/static/css" }), " – Global CSS files for all pages in your application"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".next/server/pages" }),
				" – The HTML and JavaScript entry points prerendered from the server. The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".nft.json" }),
				" files are created when ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/api-reference/next-config-js/output",
					children: "Output File Tracing"
				}),
				" is enabled and contain all the file paths that depend on a given page."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: ".next/server/chunks" }), " – Shared JavaScript chunks used in multiple places throughout your application"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: ".next/cache" }), " – Output for the build cache and cached images, responses, and pages from the Next.js server. Using a cache helps decrease build times and improve performance of loading images"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"All JavaScript code inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".next" }),
			" has been ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "compiled" }),
			" and browser bundles have been ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "minified" }),
			" to help achieve the best performance and support ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/architecture/supported-browsers",
				children: "all modern browsers"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "managed-nextjs-with-vercel",
			children: "Managed Next.js with Vercel"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://vercel.com?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",
			children: "Vercel"
		}), " is the fastest way to deploy your Next.js application with zero configuration."] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When deploying to Vercel, the platform ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/solutions/nextjs?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",
				children: "automatically detects Next.js"
			}),
			", runs ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			", and optimizes the build output for you, including:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Persisting cached assets across deployments if unchanged" }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/features/previews?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",
				children: "Immutable deployments"
			}), " with a unique URL for every commit"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/rendering/automatic-static-optimization",
				children: "Pages"
			}), " are automatically statically optimized, if possible"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Assets (JavaScript, CSS, images, fonts) are compressed and served from a ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/features/infrastructure?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",
				children: "Global Edge Network"
			})] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/routing/api-routes",
					children: "API Routes"
				}),
				" are automatically optimized as isolated ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://vercel.com/features/infrastructure?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",
					children: "Serverless Functions"
				}),
				" that can scale infinitely"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/routing/middleware",
					children: "Middleware"
				}),
				" is automatically optimized as ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://vercel.com/features/edge-functions?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",
					children: "Edge Functions"
				}),
				" that have zero cold starts and boot instantly"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In addition, Vercel provides features like:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Automatic performance monitoring with ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/analytics?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",
				children: "Next.js Speed Insights"
			})] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Automatic HTTPS and SSL certificates" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Automatic CI/CD (through GitHub, GitLab, Bitbucket, etc.)" }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Support for ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/docs/environment-variables?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",
				children: "Environment Variables"
			})] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Support for ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/docs/custom-domains?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",
				children: "Custom Domains"
			})] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Support for ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/optimizing/images",
					children: "Image Optimization"
				}),
				" with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Instant global deployments via ", (0, import_jsx_runtime.jsx)(_components.code, { children: "git push" })] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/hello-world&project-name=hello-world&repository-name=hello-world&utm_source=next-site&utm_medium=docs&utm_campaign=next-website",
			children: "Deploy a Next.js application to Vercel"
		}), " for free to try it out."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "self-hosting",
			children: "Self-Hosting"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can self-host Next.js with support for all features using Node.js or Docker. You can also do a Static HTML Export, which ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/deploying/static-exports",
				children: "has some limitations"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "nodejs-server",
			children: "Node.js Server"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js can be deployed to any hosting provider that supports Node.js. For example, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://aws.amazon.com/ec2/",
				children: "AWS EC2"
			}),
			" or a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.digitalocean.com/products/droplets/",
				children: "DigitalOcean Droplet"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"First, ensure your ",
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
			" to build your application. Finally, run ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "npm run start" }),
			" to start the Node.js server. This server supports all features of Next.js."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"If you are using ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/optimizing/images",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" })
				}),
				", consider adding ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "sharp" }),
				" for more performant ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/pages/building-your-application/optimizing/images",
					children: "Image Optimization"
				}),
				" in your production environment by running ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "npm install sharp" }),
				" in your project directory. On Linux platforms, ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "sharp" }),
				" may require ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://sharp.pixelplumbing.com/install#linux-memory-allocator",
					children: "additional configuration"
				}),
				" to prevent excessive memory usage."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "docker-image",
			children: "Docker Image"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js can be deployed to any hosting provider that supports ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.docker.com/",
				children: "Docker"
			}),
			" containers. You can use this approach when deploying to container orchestrators such as ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://kubernetes.io/",
				children: "Kubernetes"
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.nomadproject.io/",
				children: "HashiCorp Nomad"
			}),
			", or when running inside a single node in any cloud provider."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://docs.docker.com/get-docker/",
				children: "Install Docker"
			}), " on your machine"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Clone the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples/with-docker",
					children: "with-docker"
				}),
				" example"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Build your container: ", (0, import_jsx_runtime.jsx)(_components.code, { children: "docker build -t nextjs-docker ." })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Run your container: ", (0, import_jsx_runtime.jsx)(_components.code, { children: "docker run -p 3000:3000 nextjs-docker" })] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you need to use different Environment Variables across multiple environments, check out our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/tree/canary/examples/with-docker-multi-env",
				children: "with-docker-multi-env"
			}),
			" example."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "static-html-export",
			children: "Static HTML Export"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you’d like to do a static HTML export of your Next.js app, follow the directions on our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/deploying/static-exports",
				children: "Static HTML Export documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "other-services",
			children: "Other Services"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The following services support Next.js ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "v12+" }),
			". Below, you’ll find examples or guides to deploy Next.js to each service."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "managed-server",
			children: "Managed Server"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://aws.github.io/copilot-cli/",
				children: "AWS Copilot"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://docs.digitalocean.com/tutorials/app-nextjs-deploy/",
				children: "Digital Ocean App Platform"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/tree/canary/examples/with-docker",
				children: "Google Cloud Run"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://elements.heroku.com/buildpacks/mars/heroku-nextjs",
				children: "Heroku"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://docs.railway.app/getting-started",
				children: "Railway"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://render.com/docs/deploy-nextjs-app",
				children: "Render"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }),
				": There are also managed platforms that allow you to use a Dockerfile as shown in the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#docker-image",
					children: "example above"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "static-only",
			children: "Static Only"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The following services only support deploying Next.js using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/deploying/static-exports",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "output: 'export'" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/tree/canary/examples/github-pages",
				children: "GitHub Pages"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can also manually deploy the output from ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/deploying/static-exports",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "output: 'export'" })
			}),
			" to any static hosting provider, often through your CI/CD pipeline like GitHub Actions, Jenkins, AWS CodeBuild, Circle CI, Azure Pipelines, and more."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "serverless",
			children: "Serverless"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://aws.amazon.com/blogs/mobile/amplify-next-js-13/",
				children: "AWS Amplify"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://learn.microsoft.com/en-us/azure/static-web-apps/nextjs",
				children: "Azure Static Web Apps"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/",
				children: "Cloudflare Pages"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://firebase.google.com/docs/hosting/nextjs",
				children: "Firebase"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://docs.netlify.com/integrations/frameworks/next-js",
				children: "Netlify"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/milliHQ/terraform-aws-next-js",
				children: "Terraform"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://docs.sst.dev/start/nextjs",
				children: "SST"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }),
				": Not all serverless providers implement the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#nextjs-build-api",
					children: "Next.js Build API"
				}),
				" from ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
				". Please check with the provider to see what features are supported."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "automatic-updates",
			children: "Automatic Updates"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When you deploy your Next.js application, you want to see the latest version without needing to reload." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js will automatically load the latest version of your application in the background when routing. For client-side navigations, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" }),
			" will temporarily function as a normal ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<a>" }),
			" tag."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }),
				": If a new page (with an old version) has already been prefetched by ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" }),
				", Next.js will use the old version. Navigating to a page that has ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "not" }),
				" been prefetched (and is not cached at the CDN level) will load the latest version."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "manual-graceful-shutdowns",
			children: "Manual Graceful shutdowns"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When self-hosting, you might want to run code when the server shuts down on ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "SIGTERM" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "SIGINT" }),
			" signals."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can set the env variable ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NEXT_MANUAL_SIG_HANDLE" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "true" }),
			" and then register a handler for that signal inside your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "_document.js" }),
			" file. You will need to register the env variable directly in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "package.json" }),
			" script, not in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".env" }),
			" file."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }),
				": Manual signal handling is not available in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
				"."
			] }),
			"\n"
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
							children: "\"NEXT_MANUAL_SIG_HANDLE=true next start\""
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
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			title: "pages/_document.js",
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
							children: "if"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " (process.env."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "NEXT_MANUAL_SIG_HANDLE"
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
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "  // this should be added in your custom _document"
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
							children: "  process."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "on"
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
							children: "'SIGTERM'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", () "
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
							children: "    console."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "log"
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
							children: "'Received SIGTERM: '"
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
							children: "'cleaning up'"
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    process."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "exit"
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "0"
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
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  })"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  process."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "on"
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
							children: "'SIGINT'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", () "
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
							children: "    console."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "log"
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
							children: "'Received SIGINT: '"
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
							children: "'cleaning up'"
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    process."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "exit"
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "0"
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
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  })"
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
export { toc as a, structuredData as i, _08_deploying_exports as n, frontmatter as r, MDXContent as t };
