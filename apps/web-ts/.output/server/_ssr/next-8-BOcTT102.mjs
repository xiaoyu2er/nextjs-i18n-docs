import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-8-BOcTT102.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_8_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 8",
	"description": "Next.js 8 introduces Serverless Mode, smaller bundles, performance improvements, and more.",
	"author": [
		{
			"name": "Connor Davis",
			"image": "/static/team/connor.jpg"
		},
		{
			"name": "Shu Ding",
			"image": "/static/team/shu.jpg"
		},
		{
			"name": "Tim Neutkens",
			"image": "/static/team/tim.jpg"
		}
	],
	"date": /* @__PURE__ */ new Date(1549872035009),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-8/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "We are proud today to introduce the production-ready Next.js 8, featuring:"
		},
		{
			"heading": void 0,
			"content": "Serverless Next.js"
		},
		{
			"heading": void 0,
			"content": "Massive build-time memory usage reduction"
		},
		{
			"heading": void 0,
			"content": "Build-time environment configuration"
		},
		{
			"heading": void 0,
			"content": "Prefetch performance improvements"
		},
		{
			"heading": void 0,
			"content": "Smaller initial HTML size"
		},
		{
			"heading": void 0,
			"content": "Improved on-demand entries"
		},
		{
			"heading": void 0,
			"content": "Faster port listening in development"
		},
		{
			"heading": void 0,
			"content": "Faster Static Export"
		},
		{
			"heading": void 0,
			"content": "Head element deduplication"
		},
		{
			"heading": void 0,
			"content": "New crossOrigin config option"
		},
		{
			"heading": void 0,
			"content": "Removed inline Javascript"
		},
		{
			"heading": void 0,
			"content": "Example of API Authentication"
		},
		{
			"heading": void 0,
			"content": "As always, we have strived to ensure all these benefits are **completely backwards compatible**. For most Next.js applications, all you need to do is run:"
		},
		{
			"heading": void 0,
			"content": "We are thankful to our community and everyone who has bet on our success. Since our last blog post, we have seen companies like AT\\&T, Starbucks and Twitch relaunch their public-facing websites and apps with Next.js."
		},
		{
			"heading": "serverless-nextjs",
			"content": "The Next.js serverless target outputs Serverless functions from pages"
		},
		{
			"heading": "serverless-nextjs",
			"content": "Serverless deployment dramatically improves reliability and scalability by splitting your application into smaller parts (also called **lambdas**). In the case of Next.js, each page in the `pages` directory becomes a serverless lambda."
		},
		{
			"heading": "serverless-nextjs",
			"content": "There are a number of benefits to serverless. The referenced link talks about some of them in the context of Express, but the principles apply universally: serverless allows for distributed points of failure, infinite scalability, and is incredibly affordable with a \"pay for what you use\" model."
		},
		{
			"heading": "serverless-nextjs",
			"content": "To enable **serverless mode** in Next.js, add the `serverless` build `target` in `next.config.js`:"
		},
		{
			"heading": "serverless-nextjs",
			"content": "The `serverless` target will output a single lambda per page. This file is completely standalone and does not require any dependencies to run:"
		},
		{
			"heading": "serverless-nextjs",
			"content": "`pages/index.js` => `.next/serverless/pages/index.js`"
		},
		{
			"heading": "serverless-nextjs",
			"content": "`pages/about.js` => `.next/serverless/pages/about.js`"
		},
		{
			"heading": "serverless-nextjs",
			"content": "The signature of the Next.js Serverless function is similar to the Node.js HTTP server callback:"
		},
		{
			"heading": "serverless-nextjs",
			"content": "http.IncomingMessage"
		},
		{
			"heading": "serverless-nextjs",
			"content": "http.ServerResponse"
		},
		{
			"heading": "serverless-nextjs",
			"content": "`void` refers to the function not having a return value and is equivalent to JavaScript's `undefined`. Calling the function will finish the request."
		},
		{
			"heading": "serverless-nextjs",
			"content": "Next.js provides low-level APIs for serverless deployments as hosting platforms have different function signatures. In general you will want to wrap the output of a Next.js serverless build with a compatibility layer."
		},
		{
			"heading": "serverless-nextjs",
			"content": "For example if the platform supports the Node.js http.Server class:"
		},
		{
			"heading": "summary",
			"content": "Low-level API for implementing serverless deployment"
		},
		{
			"heading": "summary",
			"content": "Every page in the `pages` directory becomes a serverless function (lambda)"
		},
		{
			"heading": "summary",
			"content": "Creates the smallest possible serverless function (**50 KB** base zip size)"
		},
		{
			"heading": "summary",
			"content": "Optimized for fast cold start of the function"
		},
		{
			"heading": "summary",
			"content": "The serverless function has 0 dependencies (they are included in the function bundle)"
		},
		{
			"heading": "summary",
			"content": "Uses the http.IncomingMessage and http.ServerResponse from Node.js"
		},
		{
			"heading": "summary",
			"content": "opt-in using `target: 'serverless'` in `next.config.js`"
		},
		{
			"heading": "summary",
			"content": "The `server` target is still fully supported and maintained"
		},
		{
			"heading": "summary",
			"content": "`publicRuntimeConfig` and `serverRuntimeConfig` are not supported in the `serverless` mode. Use build-time configuration instead."
		},
		{
			"heading": "massive-build-time-memory-usage-reduction",
			"content": "We have contributed to webpack to improve Next.js's (and the rest of the webpack ecosystem's!) build performance and resource utilization."
		},
		{
			"heading": "massive-build-time-memory-usage-reduction",
			"content": "This effort has resulted in up to **16 times better memory usage with no degradation in performance**."
		},
		{
			"heading": "massive-build-time-memory-usage-reduction",
			"content": "Memory gets released much more quickly and processes don't crash anymore under lots of stress (many pages)."
		},
		{
			"heading": "massive-build-time-memory-usage-reduction",
			"content": "We will be going in-depth on how we've achieved this optimization soon. Keep an eye out on the Next.js blog."
		},
		{
			"heading": "build-time-environment-configuration",
			"content": "While reviewing Next.js applications an often reoccurring pattern we observed was adding `babel-plugin-transform-define` or `webpack.DefinePlugin` to provide configuration values to the application."
		},
		{
			"heading": "build-time-environment-configuration",
			"content": "With Next.js 8 we are introducing a new key to `next.config.js` named `env` to provide the same functionality in a backward compatible way:"
		},
		{
			"heading": "build-time-environment-configuration",
			"content": "This will allow you to use `process.env.customKey` in your code. For example:"
		},
		{
			"heading": "build-time-environment-configuration",
			"content": "`process.env.customKey` will be replaced with `'MyValue'` at build time."
		},
		{
			"heading": "prefetch-performance-improvements",
			"content": "The Next.js router allows you to prefetch pages for faster navigation:"
		},
		{
			"heading": "prefetch-performance-improvements",
			"content": "It works by prefetching the Javascript bundle of every link that has a `prefetch` attribute."
		},
		{
			"heading": "prefetch-performance-improvements",
			"content": "In versions before Next.js 8 this would mean injecting a `<script>` tag into the document `<body>`."
		},
		{
			"heading": "prefetch-performance-improvements",
			"content": "However, this introduced some overhead while opening pages, most notably the browser \"loading\" indication would show longer than you would expect even though the page could be interacted with already."
		},
		{
			"heading": "prefetch-performance-improvements",
			"content": "In Next.js 8 `prefetch` uses `<link rel=\"preload\">` instead of a `<script>` tag. It also only starts prefetching after `onload` to allow the browser to manage resources."
		},
		{
			"heading": "prefetch-performance-improvements",
			"content": "Additionally, Next.js now detects 2G internet and `navigator.connection.saveData` mode to disable prefetch on slower network connections."
		},
		{
			"heading": "smaller-initial-html-size",
			"content": "As Next.js pre-renders HTML, it wraps pages into a default structure with `<html>`, `<head>`, `<body>` and the JavaScript files needed to render the page."
		},
		{
			"heading": "smaller-initial-html-size",
			"content": "With Next.js 7 we optimized the initial payload to 1.50KB, which was a 7.4% reduction from the previous version."
		},
		{
			"heading": "smaller-initial-html-size",
			"content": "We were able to further reduce the initial payload size to 1.16KB a further 23% reduction:"
		},
		{
			"heading": "smaller-initial-html-size",
			"content": "7.0"
		},
		{
			"heading": "smaller-initial-html-size",
			"content": "8.0"
		},
		{
			"heading": "smaller-initial-html-size",
			"content": "delta"
		},
		{
			"heading": "smaller-initial-html-size",
			"content": "Document size (server rendered)"
		},
		{
			"heading": "smaller-initial-html-size",
			"content": "1.50KB"
		},
		{
			"heading": "smaller-initial-html-size",
			"content": "1.16KB"
		},
		{
			"heading": "smaller-initial-html-size",
			"content": "**23%** *smaller*"
		},
		{
			"heading": "smaller-initial-html-size",
			"content": "The main ways we have reduced size are:"
		},
		{
			"heading": "smaller-initial-html-size",
			"content": "The page initialization inline script was removed"
		},
		{
			"heading": "smaller-initial-html-size",
			"content": "The `/_error` page is no longer included on every page load"
		},
		{
			"heading": "on-demand-loading-of-_error",
			"content": "Whenever an error occurs in production the `/_error` page is rendered to display that an error occurred."
		},
		{
			"heading": "on-demand-loading-of-_error",
			"content": "Ever since the first release of Next.js the `/_error` page script tag was part of the initial HTML, meaning it was loaded even though it wouldn't be used if there were no runtime errors."
		},
		{
			"heading": "on-demand-loading-of-_error",
			"content": "Starting with Next.js 8 the `/_error` page is loaded on-demand when an error occurs."
		},
		{
			"heading": "on-demand-loading-of-_error",
			"content": "Meaning that there is less code to be loaded, parsed, and executed by default."
		},
		{
			"heading": "dx-improvements",
			"content": "One of Next.js's primary goals is to provide the best production performance with **the best possible developer experience**. This release includes many subtle improvements based on user feedback."
		},
		{
			"heading": "improved-on-demand-entries",
			"content": "Out of the box, Next.js automatically compiles only pages that are *actively* being developed. Next.js does not compile all pages in the pages directory each time `next dev` is run. Instead, it compiles pages as you access them."
		},
		{
			"heading": "improved-on-demand-entries",
			"content": "For example, when visiting `http://localhost:3000/my-page`, the `pages/my-page.js` file is compiled on-demand, after which the page is rendered."
		},
		{
			"heading": "improved-on-demand-entries",
			"content": "This ensures the developer does not have to wait for all pages to compile when launching the development server, which can take quite some time on larger apps. It keeps memory usage low and the compiler fast since the compiler is not required to take all pages into account when bundling."
		},
		{
			"heading": "improved-on-demand-entries",
			"content": "The on-demand entries flow"
		},
		{
			"heading": "improved-on-demand-entries",
			"content": "When a page has not been accessed for 25 seconds, it will be disposed from the compiler's build cache to keep the compiler fast and reduce memory usage."
		},
		{
			"heading": "improved-on-demand-entries",
			"content": "The way Next.js keeps track of pages being accessed is using a polling mechanism. Every 5 seconds, an \"on-demand-entries-ping\" is sent to make the Next.js development server aware that a given page is being accessed."
		},
		{
			"heading": "improved-on-demand-entries",
			"content": "Since the initial release of this feature, the ping was done using a `window.fetch` call, meaning that every time the ping was triggered, it would show up in browser development tools on the `console` and `network` tab."
		},
		{
			"heading": "improved-on-demand-entries",
			"content": "One of the most requested features is the ability to hide these requests from the browser developer tools since these requests can add unnecessary noise."
		},
		{
			"heading": "improved-on-demand-entries",
			"content": "We are excited to announce that in Next.js 8, the `fetch` based ping has been replaced by a WebSockets-based approach, meaning that pings still happen but are only visible when inspecting the WebSocket connection."
		},
		{
			"heading": "improved-on-demand-entries",
			"content": "Special thanks to JJ Kasper for collaborating on the conversion to WebSockets."
		},
		{
			"heading": "faster-port-listening-in-development",
			"content": "When starting the Next.js development server, it has to run some initial compilation to be able to serve requests, by default, Next.js would wait for this compilation step to finish before starting the HTTP server, meaning that if you ran `next dev` and then went to your browser it could sometimes happen that you'd get a \"This site can’t be reached\" message because the HTTP server was not listening for connections yet."
		},
		{
			"heading": "faster-port-listening-in-development",
			"content": "With Next.js 8 the HTTP will be listening for connections before the compilation starts, meaning that if you go to `http://localhost:3000/` before compilation has finished the request will wait for the initial compilation to finish before serving the request, instead of having to refresh the page until it becomes available."
		},
		{
			"heading": "faster-port-listening-in-development",
			"content": "Special thanks to Brian Beck for implementing this feature."
		},
		{
			"heading": "faster-static-export",
			"content": "Next.js focuses on the idea of **pre-rendering** as a means to achieve high performance. Pre-rendering comes in two forms:"
		},
		{
			"heading": "faster-static-export",
			"content": "**Server rendering** where each request triggers a render. As a result, the end-user doesn't have to wait for any JS to be downloaded to start consuming data"
		},
		{
			"heading": "faster-static-export",
			"content": "**Static rendering** where we output static files that can be served directly without any code execution on the server"
		},
		{
			"heading": "faster-static-export",
			"content": "Starting from Next.js 8, static rendering through `next export` will have speed improvements if your machine has multiple CPUs."
		},
		{
			"heading": "faster-static-export",
			"content": "Based on tests with a 4 CPU cores MacBook the exporting speed went from approximately 25 pages per second to 75 pages per second by taking advantage of all cores to pre-rendering pages."
		},
		{
			"heading": "faster-static-export",
			"content": "Next.js will automatically detect the number of CPU cores and distribute the pages accordingly, no need for any code changes."
		},
		{
			"heading": "faster-static-export",
			"content": "Special thanks to Benjamin Kniffler for implementing this feature."
		},
		{
			"heading": "head-element-deduplication",
			"content": "A common need when building applications is updating the `<head>` element of a page. For example to set the `<title>` or `<meta name=\"viewport\">` for responsive design."
		},
		{
			"heading": "head-element-deduplication",
			"content": "Next.js exposes a built-in component to introduce changes to the `<head>`:"
		},
		{
			"heading": "head-element-deduplication",
			"content": "The `<Head>` component can even be used multiple times in different components, for example your layout component could set some default head tags."
		},
		{
			"heading": "head-element-deduplication",
			"content": "However, you might want to override the default head tags with a different value, in older versions of Next.js this would cause the tag to be duplicated in the output, as there was no way to deduplicate tags."
		},
		{
			"heading": "head-element-deduplication",
			"content": "For this reason, it is now possible to provide a `key` property to every element inside the `<Head>` component which will automatically deduplicate tags with the same `key` value."
		},
		{
			"heading": "head-element-deduplication",
			"content": "When setting `key=\"viewport\"` on two tags only the last one is rendered."
		},
		{
			"heading": "new-crossorigin-config-option",
			"content": "In Next.js 6 we introduced the option to add a `crossOrigin` attribute to `<Head>` and `<NextScript>` in `pages/_document.js`, however this did not cover all use cases for setting `cross-origin`."
		},
		{
			"heading": "new-crossorigin-config-option",
			"content": "Next.js has a client-side router that dynamically injects `<script>` tags, these tags were missing the `cross-origin` attribute when injected."
		},
		{
			"heading": "new-crossorigin-config-option",
			"content": "To ensure all `<script>` tags have the `cross-origin` set, we have introduced a new configuration option in `next.config.js`"
		},
		{
			"heading": "new-crossorigin-config-option",
			"content": "Another benefit of introducing this option is that a custom `pages/_document.js` is no longer needed to set up `cross-origin` in your application."
		},
		{
			"heading": "new-crossorigin-config-option",
			"content": "The previous behavior is still supported but will emit a warning in development to aid developers in moving to the newly introduced option."
		},
		{
			"heading": "removed-inline-javascript",
			"content": "When using Next.js 7 and below, to enable Content Security Policy (CSP) the user had to include `script-src 'unsafe-inline'` in their policy because Next.js would create an inline `<script>` tag to pass data, for example, to pass the result of `getInitialProps` to the client side."
		},
		{
			"heading": "removed-inline-javascript",
			"content": "With Next.js 8 we have changed this inline script tag to a JSON tag for safe transfer to the client. This means that there are no inline scripts included by Next.js anymore."
		},
		{
			"heading": "removed-inline-javascript",
			"content": "With careful consideration `script-src 'self'` can now be used."
		},
		{
			"heading": "example-of-api-authentication",
			"content": "One of the most requested examples of all time has been how to do authentication in Next.js against an external API, any API, in any programming language."
		},
		{
			"heading": "example-of-api-authentication",
			"content": "With the introduction of Next.js 8, we are also introducing a newly created example: with-cookie-auth"
		},
		{
			"heading": "example-of-api-authentication",
			"content": "This example shows how to authenticate against an external Node.js API, but the concepts applied work for any stateless API."
		},
		{
			"heading": "example-of-api-authentication",
			"content": "The example uses a cookie to share the token between the server-side and client-side rendering."
		},
		{
			"heading": "example-of-api-authentication",
			"content": "That way if the app is rendered on the server, it can still fetch authenticated data on the user's behalf."
		},
		{
			"heading": "example-of-api-authentication",
			"content": "Special thanks to Juan Olvera who contributed the example."
		},
		{
			"heading": "community",
			"content": "Ever since its first release, Next.js has been used in everything from Fortune 500 companies to personal blogs. We're very excited to see the continued growth in Next.js adoption."
		},
		{
			"heading": "community",
			"content": "We've had over **600 contributors** landing at least 1 commit."
		},
		{
			"heading": "community",
			"content": "On GitHub, the project has been starred over **34,400 times**."
		},
		{
			"heading": "community",
			"content": "Over **2600 pull requests** were submitted since the first release."
		},
		{
			"heading": "community",
			"content": "The Next.js community has over **4,570 members**. Join us!"
		}
	],
	"headings": [
		{
			"id": "serverless-nextjs",
			"content": "Serverless Next.js"
		},
		{
			"id": "summary",
			"content": "**Summary**"
		},
		{
			"id": "massive-build-time-memory-usage-reduction",
			"content": "Massive build-time memory usage reduction"
		},
		{
			"id": "build-time-environment-configuration",
			"content": "Build-time environment configuration"
		},
		{
			"id": "prefetch-performance-improvements",
			"content": "Prefetch performance improvements"
		},
		{
			"id": "smaller-initial-html-size",
			"content": "Smaller initial HTML size"
		},
		{
			"id": "on-demand-loading-of-_error",
			"content": "On-demand loading of /_error"
		},
		{
			"id": "dx-improvements",
			"content": "DX Improvements"
		},
		{
			"id": "improved-on-demand-entries",
			"content": "Improved on-demand entries"
		},
		{
			"id": "faster-port-listening-in-development",
			"content": "Faster port listening in development"
		},
		{
			"id": "faster-static-export",
			"content": "Faster Static Export"
		},
		{
			"id": "head-element-deduplication",
			"content": "Head element deduplication"
		},
		{
			"id": "security-improvements",
			"content": "Security improvements"
		},
		{
			"id": "new-crossorigin-config-option",
			"content": "New `crossOrigin` config option"
		},
		{
			"id": "removed-inline-javascript",
			"content": "Removed inline Javascript"
		},
		{
			"id": "example-of-api-authentication",
			"content": "Example of API Authentication"
		},
		{
			"id": "community",
			"content": "Community"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#serverless-nextjs",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#serverless-nextjs",
			children: "Serverless Next.js"
		}) })
	},
	{
		depth: 3,
		url: "#summary",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#summary",
			children: (0, import_jsx_runtime.jsx)("strong", { children: "Summary" })
		}) })
	},
	{
		depth: 2,
		url: "#massive-build-time-memory-usage-reduction",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#massive-build-time-memory-usage-reduction",
			children: "Massive build-time memory usage reduction"
		}) })
	},
	{
		depth: 2,
		url: "#build-time-environment-configuration",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#build-time-environment-configuration",
			children: "Build-time environment configuration"
		}) })
	},
	{
		depth: 2,
		url: "#prefetch-performance-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#prefetch-performance-improvements",
			children: "Prefetch performance improvements"
		}) })
	},
	{
		depth: 2,
		url: "#smaller-initial-html-size",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#smaller-initial-html-size",
			children: "Smaller initial HTML size"
		}) })
	},
	{
		depth: 3,
		url: "#on-demand-loading-of-_error",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#on-demand-loading-of-_error",
			children: "On-demand loading of /_error"
		}) })
	},
	{
		depth: 2,
		url: "#dx-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#dx-improvements",
			children: "DX Improvements"
		}) })
	},
	{
		depth: 3,
		url: "#improved-on-demand-entries",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#improved-on-demand-entries",
			children: "Improved on-demand entries"
		}) })
	},
	{
		depth: 3,
		url: "#faster-port-listening-in-development",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#faster-port-listening-in-development",
			children: "Faster port listening in development"
		}) })
	},
	{
		depth: 2,
		url: "#faster-static-export",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#faster-static-export",
			children: "Faster Static Export"
		}) })
	},
	{
		depth: 2,
		url: "#head-element-deduplication",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#head-element-deduplication",
			children: "Head element deduplication"
		}) })
	},
	{
		depth: 2,
		url: "#security-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#security-improvements",
			children: "Security improvements"
		}) })
	},
	{
		depth: 3,
		url: "#new-crossorigin-config-option",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#new-crossorigin-config-option",
			children: [
				"New ",
				(0, import_jsx_runtime.jsx)("code", { children: "crossOrigin" }),
				" config option"
			]
		}) })
	},
	{
		depth: 3,
		url: "#removed-inline-javascript",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#removed-inline-javascript",
			children: "Removed inline Javascript"
		}) })
	},
	{
		depth: 3,
		url: "#example-of-api-authentication",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#example-of-api-authentication",
			children: "Example of API Authentication"
		}) })
	},
	{
		depth: 2,
		url: "#community",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#community",
			children: "Community"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We are proud today to introduce the production-ready Next.js 8, featuring:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#serverless-nextjs",
				children: "Serverless Next.js"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#massive-build-time-memory-usage-reduction",
				children: "Massive build-time memory usage reduction"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#build-time-environment-configuration",
				children: "Build-time environment configuration"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#prefetch-performance-improvements",
				children: "Prefetch performance improvements"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#smaller-initial-html-size",
				children: "Smaller initial HTML size"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improved-on-demand-entries",
				children: "Improved on-demand entries"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#faster-port-listening-in-development",
				children: "Faster port listening in development"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#faster-static-export",
				children: "Faster Static Export"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#head-element-deduplication",
				children: "Head element deduplication"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#new-crossorigin-config-option",
				children: "New crossOrigin config option"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#removed-inline-javascript",
				children: "Removed inline Javascript"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#example-of-api-authentication",
				children: "Example of API Authentication"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As always, we have strived to ensure all these benefits are ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "completely backwards compatible" }),
			". For most Next.js applications, all you need to do is run:"
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We are thankful to our community and everyone who has bet on our success. Since our last blog post, we have seen companies like ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://att.com",
				children: "AT&T"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.starbucksreserve.com/en-us",
				children: "Starbucks"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://m.twitch.tv/",
				children: "Twitch"
			}),
			" relaunch their public-facing websites and apps with Next.js."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "serverless-nextjs",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#serverless-nextjs",
				children: "Serverless Next.js"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Next.js serverless target outputs Serverless functions from pages" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Serverless deployment dramatically improves reliability and scalability by splitting your application into smaller parts (also called ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "lambdas" }),
			"). In the case of Next.js, each page in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
			" directory becomes a serverless lambda."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"There are ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/docs/serverless-functions/conceptual-model",
				children: "a number of benefits"
			}),
			" to serverless. The referenced link talks about some of them in the context of Express, but the principles apply universally: serverless allows for distributed points of failure, infinite scalability, and is incredibly affordable with a \"pay for what you use\" model."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To enable ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "serverless mode" }),
			" in Next.js, add the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "serverless" }),
			" build ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "target" }),
			" in ",
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
							children: "  target: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'serverless'"
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
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "serverless" }),
			" target will output a single lambda per page. This file is completely standalone and does not require any dependencies to run:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/index.js" }),
				" => ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".next/serverless/pages/index.js" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/about.js" }),
				" => ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".next/serverless/pages/about.js" })
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The signature of the Next.js Serverless function is similar to the Node.js HTTP server callback:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "type Function = (req: http.IncomingMessage, res: http.ServerResponse) => void;" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nodejs.org/api/http.html#http_class_http_incomingmessage",
				children: "http.IncomingMessage"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nodejs.org/api/http.html#http_class_http_serverresponse",
				children: "http.ServerResponse"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "void" }),
				" refers to the function not having a return value and is equivalent to JavaScript's ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "undefined" }),
				". Calling the function will finish the request."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js provides low-level APIs for serverless deployments as hosting platforms have different function signatures. In general you will want to wrap the output of a Next.js serverless build with a compatibility layer." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example if the platform supports the Node.js ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nodejs.org/api/http.html#http_class_http_server",
				children: "http.Server"
			}),
			" class:"
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
			title: "server.js",
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
							children: "const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " http"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " require"
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
							children: "'http'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ");"
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
							children: "const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " page"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " require"
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
							children: "'./.next/serverless/about.js'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ");"
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
							children: "const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " server"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " new"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " http."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "Server"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "req"
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
							children: "res"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ") "
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
							children: " page."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "render"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(req, res));"
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
							children: "server."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "listen"
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
							children: "3000"
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
							children: " console."
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
							children: "'Listening on http://localhost:3000'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "));"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "summary",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#summary",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Summary" })
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Low-level API for implementing serverless deployment" }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Every page in the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
				" directory becomes a serverless function (lambda)"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Creates the smallest possible serverless function (",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "50 KB" }),
				" base zip size)"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Optimized for fast ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://vercel.com/docs/serverless-functions/conceptual-model",
					children: "cold start"
				}),
				" of the function"
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The serverless function has 0 dependencies (they are included in the function bundle)" }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Uses the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nodejs.org/api/http.html#http_class_http_incomingmessage",
					children: "http.IncomingMessage"
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nodejs.org/api/http.html#http_class_http_serverresponse",
					children: "http.ServerResponse"
				}),
				" from Node.js"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"opt-in using ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "target: 'serverless'" }),
				" in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "server" }),
				" target is still fully supported and maintained"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "publicRuntimeConfig" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "serverRuntimeConfig" }),
				" are not supported in the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "serverless" }),
				" mode. Use build-time configuration instead."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "massive-build-time-memory-usage-reduction",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#massive-build-time-memory-usage-reduction",
				children: "Massive build-time memory usage reduction"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We have contributed to webpack to improve Next.js's (and the rest of the webpack ecosystem's!) build performance and resource utilization." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This effort has resulted in up to ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "16 times better memory usage with no degradation in performance" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Memory gets released much more quickly and processes don't crash anymore under lots of stress (many pages)." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We will be going in-depth on how we've achieved this optimization soon. Keep an eye out on the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog",
				children: "Next.js blog"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "build-time-environment-configuration",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#build-time-environment-configuration",
				children: "Build-time environment configuration"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"While reviewing Next.js applications an often reoccurring pattern we observed was adding ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "babel-plugin-transform-define" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "webpack.DefinePlugin" }),
			" to provide configuration values to the application."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With Next.js 8 we are introducing a new key to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			" named ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "env" }),
			" to provide the same functionality in a backward compatible way:"
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
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  env: {"
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
							children: "    customKey: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'MyValue'"
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
			"This will allow you to use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "process.env.customKey" }),
			" in your code. For example:"
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
			title: "pages/index.js",
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
							children: " IndexPage"
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
							children: ">The value of customKey is: {process.env.customKey}</"
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
							children: ">;"
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
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "process.env.customKey" }),
			" will be replaced with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "'MyValue'" }),
			" at build time."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "prefetch-performance-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#prefetch-performance-improvements",
				children: "Prefetch performance improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Next.js router allows you to prefetch pages for faster navigation:" }),
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
			title: "pages/index.js",
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
							children: "import"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " Link "
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
							children: " 'next/link'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ";"
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
						children: " "
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
							children: " IndexPage"
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
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <>"
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
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Link"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " href"
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
							children: "\"/about\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " prefetch"
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
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "a"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">To About Page</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "a"
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
							children: "      </"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Link"
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
						children: "    </>"
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
						children: "  );"
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
			"It works by prefetching the Javascript bundle of every link that has a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "prefetch" }),
			" attribute."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In versions before Next.js 8 this would mean injecting a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<script>" }),
			" tag into the document ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<body>" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "However, this introduced some overhead while opening pages, most notably the browser \"loading\" indication would show longer than you would expect even though the page could be interacted with already." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In Next.js 8 ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "prefetch" }),
			" uses ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<link rel=\"preload\">" }),
			" instead of a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<script>" }),
			" tag. It also only starts prefetching after ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onload" }),
			" to allow the browser to manage resources."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Additionally, Next.js now detects 2G internet and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "navigator.connection.saveData" }),
			" mode to disable prefetch on slower network connections."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "smaller-initial-html-size",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#smaller-initial-html-size",
				children: "Smaller initial HTML size"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As Next.js pre-renders HTML, it wraps pages into a default structure with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<html>" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<head>" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<body>" }),
			" and the JavaScript files needed to render the page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/blog/next-7/#smaller-initial-html-payload",
				children: "Next.js 7 we optimized the initial payload to 1.50KB"
			}),
			", which was a 7.4% reduction from the previous version."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We were able to further reduce the initial payload size to 1.16KB a further 23% reduction:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, {}),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "7.0" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "8.0" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "delta" })
		] }) }), (0, import_jsx_runtime.jsx)(_components.tbody, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.td, { children: "Document size (server rendered)" }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: "1.50KB" }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: "1.16KB" }),
			(0, import_jsx_runtime.jsxs)(_components.td, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "23%" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "smaller" })
			] })
		] }) })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The main ways we have reduced size are:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The page initialization inline script was removed" }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/_error" }),
				" page is no longer included on every page load"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "on-demand-loading-of-_error",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#on-demand-loading-of-_error",
				children: "On-demand loading of /_error"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Whenever an error occurs in production the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/_error" }),
			" page is rendered to display that an error occurred."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Ever since the first release of Next.js the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/_error" }),
			" page script tag was part of the initial HTML, meaning it was loaded even though it wouldn't be used if there were no runtime errors."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Starting with Next.js 8 the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/_error" }),
			" page is loaded on-demand when an error occurs."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Meaning that there is less code to be loaded, parsed, and executed by default." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "dx-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#dx-improvements",
				children: "DX Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"One of Next.js's primary goals is to provide the best production performance with ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "the best possible developer experience" }),
			". This release includes many subtle improvements based on user feedback."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "improved-on-demand-entries",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improved-on-demand-entries",
				children: "Improved on-demand entries"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Out of the box, Next.js automatically compiles only pages that are ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "actively" }),
			" being developed. Next.js does not compile all pages in the pages directory each time ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			" is run. Instead, it compiles pages as you access them."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, when visiting ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "http://localhost:3000/my-page" }),
			", the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/my-page.js" }),
			" file is compiled on-demand, after which the page is rendered."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This ensures the developer does not have to wait for all pages to compile when launching the development server, which can take quite some time on larger apps. It keeps memory usage low and the compiler fast since the compiler is not required to take all pages into account when bundling." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-8/flow.jpg",
			alt: "The on-demand entries flow"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The on-demand entries flow" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When a page has not been accessed for 25 seconds, it will be disposed from the compiler's build cache to keep the compiler fast and reduce memory usage." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The way Next.js keeps track of pages being accessed is using a polling mechanism. Every 5 seconds, an \"on-demand-entries-ping\" is sent to make the Next.js development server aware that a given page is being accessed." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Since the initial release of this feature, the ping was done using a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "window.fetch" }),
			" call, meaning that every time the ping was triggered, it would show up in browser development tools on the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "console" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "network" }),
			" tab."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "One of the most requested features is the ability to hide these requests from the browser developer tools since these requests can add unnecessary noise." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We are excited to announce that in Next.js 8, the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
			" based ping has been replaced by a WebSockets-based approach, meaning that pings still happen but are only visible when inspecting the WebSocket connection."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Special thanks to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/ijjk",
				children: "JJ Kasper"
			}),
			" for collaborating on the conversion to WebSockets."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "faster-port-listening-in-development",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#faster-port-listening-in-development",
				children: "Faster port listening in development"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When starting the Next.js development server, it has to run some initial compilation to be able to serve requests, by default, Next.js would wait for this compilation step to finish before starting the HTTP server, meaning that if you ran ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			" and then went to your browser it could sometimes happen that you'd get a \"This site can’t be reached\" message because the HTTP server was not listening for connections yet."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With Next.js 8 the HTTP will be listening for connections before the compilation starts, meaning that if you go to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "http://localhost:3000/" }),
			" before compilation has finished the request will wait for the initial compilation to finish before serving the request, instead of having to refresh the page until it becomes available."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Special thanks to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/exogen",
				children: "Brian Beck"
			}),
			" for implementing this feature."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "faster-static-export",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#faster-static-export",
				children: "Faster Static Export"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js focuses on the idea of ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "pre-rendering" }),
			" as a means to achieve high performance. Pre-rendering comes in two forms:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Server rendering" }), " where each request triggers a render. As a result, the end-user doesn't have to wait for any JS to be downloaded to start consuming data"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Static rendering" }), " where we output static files that can be served directly without any code execution on the server"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Starting from Next.js 8, static rendering through ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next export" }),
			" will have speed improvements if your machine has multiple CPUs."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Based on tests with a 4 CPU cores MacBook the exporting speed went from approximately 25 pages per second to 75 pages per second by taking advantage of all cores to pre-rendering pages." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js will automatically detect the number of CPU cores and distribute the pages accordingly, no need for any code changes." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Special thanks to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/bkniffler",
				children: "Benjamin Kniffler"
			}),
			" for implementing this feature."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "head-element-deduplication",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#head-element-deduplication",
				children: "Head element deduplication"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A common need when building applications is updating the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<head>" }),
			" element of a page. For example to set the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<title>" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<meta name=\"viewport\">" }),
			" for responsive design."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js exposes a built-in component to introduce changes to the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<head>" }),
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
			title: "pages/index.js",
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
							children: "import"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " Head "
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
							children: " 'next/head'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ";"
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
						children: " "
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
							children: " IndexPage"
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
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <>"
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
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "title"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">My page title</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "title"
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
							children: "      </"
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
						children: "    </>"
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
						children: "  );"
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
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<Head>" }),
			" component can even be used multiple times in different components, for example your layout component could set some default head tags."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "However, you might want to override the default head tags with a different value, in older versions of Next.js this would cause the tag to be duplicated in the output, as there was no way to deduplicate tags." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For this reason, it is now possible to provide a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "key" }),
			" property to every element inside the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<Head>" }),
			" component which will automatically deduplicate tags with the same ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "key" }),
			" value."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When setting ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "key=\"viewport\"" }),
			" on two tags only the last one is rendered."
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
			title: "pages/index.js",
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
							children: "import"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " Head "
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
							children: " 'next/head'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ";"
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
							children: " IndexPage"
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
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <>"
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
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "title"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">My page title</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "title"
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
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "        <"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#22863A",
							"--shiki-dark": "#85E89D"
						},
						children: "meta"
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
							children: "          name"
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
							children: "\"viewport\""
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
							children: "          content"
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
							children: "\"initial-scale=1.0, width=device-width\""
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
							children: "          key"
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
							children: "\"viewport\""
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
						children: "        />"
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
							children: "      </"
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
							children: ">"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "        <"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#22863A",
							"--shiki-dark": "#85E89D"
						},
						children: "meta"
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
							children: "          name"
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
							children: "\"viewport\""
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
							children: "          content"
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
							children: "\"initial-scale=1.2, width=device-width\""
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
							children: "          key"
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
							children: "\"viewport\""
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
						children: "        />"
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
							children: "      </"
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
						children: "    </>"
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
						children: "  );"
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
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "security-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#security-improvements",
				children: "Security improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "new-crossorigin-config-option",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#new-crossorigin-config-option",
				children: [
					"New ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "crossOrigin" }),
					" config option"
				]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In Next.js 6 we introduced the option to add a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "crossOrigin" }),
			" attribute to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<Head>" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<NextScript>" }),
			" in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_document.js" }),
			", however this did not cover all use cases for setting ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "cross-origin" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js has a client-side router that dynamically injects ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<script>" }),
			" tags, these tags were missing the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "cross-origin" }),
			" attribute when injected."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To ensure all ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<script>" }),
			" tags have the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "cross-origin" }),
			" set, we have introduced a new configuration option in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" })
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
							children: "  crossOrigin: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'anonymous'"
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
			"Another benefit of introducing this option is that a custom ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_document.js" }),
			" is no longer needed to set up ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "cross-origin" }),
			" in your application."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The previous behavior is still supported but will emit a warning in development to aid developers in moving to the newly introduced option." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "removed-inline-javascript",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#removed-inline-javascript",
				children: "Removed inline Javascript"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When using Next.js 7 and below, to enable ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/HTTP/CSP",
				children: "Content Security Policy (CSP)"
			}),
			" the user had to include ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "script-src 'unsafe-inline'" }),
			" in their policy because Next.js would create an inline ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<script>" }),
			" tag to pass data, for example, to pass the result of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getInitialProps" }),
			" to the client side."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "With Next.js 8 we have changed this inline script tag to a JSON tag for safe transfer to the client. This means that there are no inline scripts included by Next.js anymore." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With careful consideration ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "script-src 'self'" }),
			" can now be used."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "example-of-api-authentication",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#example-of-api-authentication",
				children: "Example of API Authentication"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"One of the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/issues/153",
				children: "most requested examples of all time"
			}),
			" has been how to do authentication in Next.js against an external API, any API, in any programming language."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: ["With the introduction of Next.js 8, we are also introducing a newly created example: ", (0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://github.com/vercel/next.js/tree/canary/examples/with-cookie-auth",
			children: "with-cookie-auth"
		})] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This example shows how to authenticate against an external Node.js API, but the concepts applied work for any stateless API." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The example uses a cookie to share the token between the server-side and client-side rendering." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "That way if the app is rendered on the server, it can still fetch authenticated data on the user's behalf." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Special thanks to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/j0lv3r4",
				children: "Juan Olvera"
			}),
			" who contributed the example."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "community",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#community",
				children: "Community"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Ever since its first release, Next.js has been used in everything from Fortune 500 companies to personal blogs. We're very excited to see the continued growth in Next.js adoption." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"We've had over ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "600 contributors" }),
				" landing at least 1 commit."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"On GitHub, the project has been starred over ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "34,400 times" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Over ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "2600 pull requests" }),
				" were submitted since the first release."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The Next.js community has over ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "4,570 members" }),
			". ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions",
				children: "Join us!"
			})
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
export { toc as a, structuredData as i, frontmatter as n, next_8_exports as r, MDXContent as t };
