import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-12-DPXQO31M.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_12_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 12",
	"description": "Next.js 12 introduces a brand-new Rust compiler, Middleware (beta), React 18 Support, Native ESM Support, URL Imports, React Server Components (alpha), and more!",
	"author": [
		{
			"name": "Connor Davis",
			"image": "/static/team/connor.jpg"
		},
		{
			"name": "DongYoon Kang",
			"image": "/static/team/kdy.jpg"
		},
		{
			"name": "Gerald Monaco",
			"image": "/static/team/gerald.jpg"
		},
		{
			"name": "Javi Velasco",
			"image": "/static/team/javi.jpg"
		},
		{
			"name": "Jiachi Liu",
			"image": "/static/team/jiachi.png"
		},
		{
			"name": "JJ Kasper",
			"image": "/static/team/jj.jpg"
		},
		{
			"name": "Kara Erickson",
			"image": "/static/team/kara.jpg"
		},
		{
			"name": "Maia Teegarden",
			"image": "/static/team/maia.jpg"
		},
		{
			"name": "Shu Ding",
			"image": "/static/team/shu.jpg"
		},
		{
			"name": "Steven",
			"image": "/static/team/styfle.png"
		},
		{
			"name": "Tim Neutkens",
			"image": "/static/team/tim.jpg"
		},
		{
			"name": "Tobias Koppers",
			"image": "/static/team/sokra.jpg"
		}
	],
	"date": /* @__PURE__ */ new Date(1635264000507),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-12/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "As we announced at\xA0Next.js Conf, Next.js 12 is our biggest release ever:"
		},
		{
			"heading": void 0,
			"content": "**Rust Compiler**: \\~3x faster Fast Refresh and \\~5x faster builds"
		},
		{
			"heading": void 0,
			"content": "**Middleware (beta)**: Enabling full flexibility in Next.js with code over configuration"
		},
		{
			"heading": void 0,
			"content": "**React 18 Support**: Native Next.js APIs are now supported, as well as Suspense"
		},
		{
			"heading": void 0,
			"content": "**`<Image />` AVIF Support**: Opt-in for 20% smaller images"
		},
		{
			"heading": void 0,
			"content": "**Bot-aware ISR Fallback**: Optimized SEO for web crawlers"
		},
		{
			"heading": void 0,
			"content": "**Native ES Modules Support**: Aligning with the standardized module system"
		},
		{
			"heading": void 0,
			"content": "**URL Imports (alpha)**: Import packages from any URL, no installs required"
		},
		{
			"heading": void 0,
			"content": "**React Server Components (alpha)**: Try it today, including SSR streaming"
		},
		{
			"heading": void 0,
			"content": "Update today by running `npm i next@latest`."
		},
		{
			"heading": "faster-builds-and-fast-refresh-with-rust-compiler",
			"content": "We want to make every Next.js application build faster for production, and get instant feedback in local development. Next.js 12 includes a brand new Rust compiler that takes advantage of native compilation."
		},
		{
			"heading": "faster-builds-and-fast-refresh-with-rust-compiler",
			"content": "Our Rust compiler is built on **SWC**, an open platform for the next generation of fast tooling. We've optimized bundling and compiling with \\~**3x faster refresh** locally and \\~**5x faster builds** for production. Other improvements and features include:"
		},
		{
			"heading": "faster-builds-and-fast-refresh-with-rust-compiler",
			"content": "Results from using the new Rust compiler with large Next.js codebases."
		},
		{
			"heading": "faster-builds-and-fast-refresh-with-rust-compiler",
			"content": "**Further speed improvements for large codebases:** We've validated the Rust compiler with some of the largest Next.js codebases in the world."
		},
		{
			"heading": "faster-builds-and-fast-refresh-with-rust-compiler",
			"content": "**Improved observability into performance:** Next.js now outputs Fast Refresh timing in the console for both client and server compilation, including the number of modules and files compiled."
		},
		{
			"heading": "faster-builds-and-fast-refresh-with-rust-compiler",
			"content": "**Underlying webpack improvements:** We've made numerous improvements to webpack, including optimizing Fast Refresh and making on-demand entries more reliable."
		},
		{
			"heading": "faster-builds-and-fast-refresh-with-rust-compiler",
			"content": "Compilation using Rust is **17x faster than Babel** and enabled by default using Next.js 12, replacing transforming JavaScript and TypeScript files. This meant we had to port the Babel transformations in Next.js to Rust, including a **brand new CSS parser in Rust** used to implement the `styled-jsx` transform."
		},
		{
			"heading": "faster-builds-and-fast-refresh-with-rust-compiler",
			"content": "The new Rust compiler is backwards compatible. If you have an existing Babel configuration, you will automatically be opted out. We have plans to port parsing for popular libraries like `styled-components`, `emotion`, and `relay` soon. If you're using a custom Babel setup, please share your configuration."
		},
		{
			"heading": "faster-builds-and-fast-refresh-with-rust-compiler",
			"content": "You can also opt-in to using the Rust compiler for minification. This is **7x faster than Terser**. Minification is opt-in until it’s thoroughly validated as it replaces multi-year infrastructure."
		},
		{
			"heading": "faster-builds-and-fast-refresh-with-rust-compiler",
			"content": "On top of hiring DongYoon Kang, the creator of SWC, and Maia Teegarden, a contributor to Parcel, we are continuing to invest in the Rust ecosystem. If you have experience working with Rust, please apply to join our team."
		},
		{
			"heading": "faster-builds-and-fast-refresh-with-rust-compiler",
			"content": "For more information, watch our demo from Next.js Conf."
		},
		{
			"heading": "introducing-middleware",
			"content": "Middleware enables you to use code over configuration. This gives you full flexibility in Next.js because you can run code before a request is completed. Based on the user's incoming request, you can modify the response by rewriting, redirecting, adding headers, or even streaming HTML."
		},
		{
			"heading": "introducing-middleware",
			"content": "Middleware gives you complete flexibility inside Next.js."
		},
		{
			"heading": "introducing-middleware",
			"content": "Middleware can be used for anything that shares logic for a set of pages, including:"
		},
		{
			"heading": "introducing-middleware",
			"content": "Authentication"
		},
		{
			"heading": "introducing-middleware",
			"content": "Bot protection"
		},
		{
			"heading": "introducing-middleware",
			"content": "Redirects"
		},
		{
			"heading": "introducing-middleware",
			"content": "Rewrites"
		},
		{
			"heading": "introducing-middleware",
			"content": "Feature flags and A/B tests"
		},
		{
			"heading": "introducing-middleware",
			"content": "Advanced i18n routing requirements"
		},
		{
			"heading": "introducing-middleware",
			"content": "And more!"
		},
		{
			"heading": "introducing-middleware",
			"content": "Middleware uses a strict runtime that supports standard Web APIs like &#x2A;*`fetch`**. This works out of the box using `next start`, as well as on Edge platforms like Vercel, which use Edge Middleware."
		},
		{
			"heading": "introducing-middleware",
			"content": "To use Middleware in Next.js, you can create a file `pages/_middleware.js`. In this example, we use the standard Web API Response (MDN):"
		},
		{
			"heading": "introducing-middleware",
			"content": "For more information, watch our demo from Next.js Conf and check out the documentation."
		},
		{
			"heading": "preparing-for-react-18",
			"content": "React 18 will add features like Suspense, automatic batching of updates, APIs like `startTransition`, and a new streaming API for server rendering with support for `React.lazy`."
		},
		{
			"heading": "preparing-for-react-18",
			"content": "We've been working closely with the React team at Facebook to prepare Next.js for React 18 as it moves towards a stable release. We're making these features available to try today in Next.js 12 under an experimental flag."
		},
		{
			"heading": "server-side-streaming",
			"content": "Concurrent features in React 18 include built-in support for server-side Suspense and SSR streaming support. This allows you to server-render pages using HTTP streaming. This is an experimental feature in Next.js 12, but once enabled, SSR will use the same strict runtime as Middleware."
		},
		{
			"heading": "server-side-streaming",
			"content": "To enable, use the experimental flag `concurrentFeatures: true`:"
		},
		{
			"heading": "react-server-components",
			"content": "React Server Components allow us to render everything, including the components themselves, on the server. This is fundamentally different from server-side rendering where you're pre-generating HTML on the server. With Server Components, there's **zero client-side JavaScript needed**, making page rendering faster. This improves the user experience of your application, pairing the best parts of server-rendering with client-side interactivity."
		},
		{
			"heading": "react-server-components",
			"content": "Next.js now enables you to do data fetching at *the component level*, all expressed as JSX. By using React Server components, we can simplify things. Special functions like `getServerSideProps` or `getStaticProps` are no longer needed. This aligns with the React Hooks model of colocating data fetching with your components."
		},
		{
			"heading": "react-server-components",
			"content": "You can rename any Next.js page to `.server.js` to create a Server Component and import client components directly inside your Server Components. These client components will hydrate and become interactive, so you add functionality like upvotes."
		},
		{
			"heading": "react-server-components",
			"content": "We're currently working on server-side Suspense, selective hydration, and streaming rendering in Next.js and will share our progress in a future blog post."
		},
		{
			"heading": "react-server-components",
			"content": "Special thanks to our collaborators Kara Erickson and Gerald Monaco on the Google Aurora team for their work on React 18 and Server Components."
		},
		{
			"heading": "react-server-components",
			"content": "For more information, watch our demo from Next.js Conf and check out the documentation."
		},
		{
			"heading": "es-modules-support-and-url-imports",
			"content": "ES modules bring an official, standardized module system to JavaScript. They're supported by all major browsers as well as Node.js."
		},
		{
			"heading": "es-modules-support-and-url-imports",
			"content": "This standard pushes the web ecosystem forward by enabling smaller package sizes and JavaScript bundles, ultimately leading to a better user experience. As the JavaScript ecosystem transitions from Common JS (the old standard) to ES modules, we're committed to helping developers incrementally adopt these improvements without unnecessary breaking changes."
		},
		{
			"heading": "es-modules-support-and-url-imports",
			"content": "Starting with Next.js 11.1, we added experimental support for ES modules being prioritized over CommonJS modules. In Next.js 12, this is now the default. Importing NPM modules that only provide CommonJS is still supported."
		},
		{
			"heading": "url-imports",
			"content": "Next.js 12 includes experimental support for importing ES Modules through URLs, no install or separate build step is required."
		},
		{
			"heading": "url-imports",
			"content": "URL imports allow you to use *any* package directly through a URL. This enables Next.js to process remote HTTP(S) resources exactly like local dependencies."
		},
		{
			"heading": "url-imports",
			"content": "If a URL import is detected, Next.js will generate a `next.lock` file to track remote resources. URL imports are cached locally to ensure you can still work offline. Next.js supports both client and server URL imports."
		},
		{
			"heading": "url-imports",
			"content": "To opt-in, add the allowed URL prefixes inside `next.config.js`:"
		},
		{
			"heading": "url-imports",
			"content": "Then, you can import modules directly from URLs:"
		},
		{
			"heading": "url-imports",
			"content": "Any CDN that serves ES modules will work, including no-code and design tools like Framer:"
		},
		{
			"heading": "url-imports",
			"content": "Skypack"
		},
		{
			"heading": "url-imports",
			"content": "esm.sh"
		},
		{
			"heading": "url-imports",
			"content": "jsDelivr"
		},
		{
			"heading": "url-imports",
			"content": "JSPM"
		},
		{
			"heading": "url-imports",
			"content": "unpkg"
		},
		{
			"heading": "url-imports",
			"content": "For more information, watch our demo from Next.js Conf and check out the documentation."
		},
		{
			"heading": "bot-aware-isr-fallback",
			"content": "Currently, Incremental Static Regeneration with `fallback: true` renders a fallback state before rendering the page contents on the first request to a page that was not generated yet. To block the page from loading (server-rendering), you would need to use `fallback: 'blocking'`."
		},
		{
			"heading": "bot-aware-isr-fallback",
			"content": "In Next.js 12, web crawlers (e.g. search bots) will automatically server-render ISR pages using `fallback: true`, while still serving the previous behavior of the fallback state to non-crawler User-Agents. This prevents crawlers from indexing loading states."
		},
		{
			"heading": "smaller-images-using-avif",
			"content": "The built-in Image Optimization API now supports AVIF images, enabling 20% smaller images compared to WebP."
		},
		{
			"heading": "smaller-images-using-avif",
			"content": "AVIF images can take longer to optimize compared to WebP, so we're making this feature opt-in using the new `images.formats` property in `next.config.js`:"
		},
		{
			"heading": "smaller-images-using-avif",
			"content": "This list of formats is used to determine the optimized image format on-demand using the request's `Accept` header. Since AVIF is first, it will be served if the browser supports AVIF. If not, WebP will be served if the browser supports WebP. If neither format is supported, the original image format will be served."
		},
		{
			"heading": "output-file-tracing",
			"content": "In Next.js 8, we introduced the `target` option. This allowed for outputting Next.js pages as standalone JavaScript bundles by bundling all dependencies using webpack during the build. We quickly realized this wasn't ideal and instead created `@vercel/nft`. `@vercel/nft` has been used for over 2 years on all deployments on the Vercel platform."
		},
		{
			"heading": "output-file-tracing",
			"content": "Now, we're bringing these improvements directly into the Next.js framework by default, **for all deployment platforms**, providing a significantly improved approach over the `target` option."
		},
		{
			"heading": "output-file-tracing",
			"content": "Next.js 12 automatically traces which files are needed by each page and API route using `@vercel/nft`, and outputs these trace results next to the `next build` output, allowing integrators to leverage the traces Next.js provides automatically."
		},
		{
			"heading": "output-file-tracing",
			"content": "These changes also optimize applications deploying using tools like Docker through `next start`. By leveraging `@vercel/nft`, we will be able to make the Next.js output standalone in the future. No dependencies will be required to be installed to run the application, massively reducing the Docker image size."
		},
		{
			"heading": "output-file-tracing",
			"content": "Bringing `@vercel/nft` into Next.js supersedes the `target` approach, making `target` deprecated in Next.js 12. Check out the documentation for more info."
		},
		{
			"heading": "other-improvements",
			"content": "Adding `pages/_app.js` or `pages/_document.js` to your application now automatically replaces the built-in version without requiring a reboot of the Next.js CLI."
		},
		{
			"heading": "other-improvements",
			"content": "The ESLint integration now supports single-file linting in `next lint` with the `--file` flag."
		},
		{
			"heading": "other-improvements",
			"content": "Next.js 12 now supports setting a custom `tsconfig.json` path."
		},
		{
			"heading": "other-improvements",
			"content": "`next.config.mjs` is now supported for writing the configuration as ES modules."
		},
		{
			"heading": "other-improvements",
			"content": "In-flight requests are now de-duped for getStaticProps."
		},
		{
			"heading": "other-improvements",
			"content": "Checking for static pages now runs using a shared worker pool."
		},
		{
			"heading": "other-improvements",
			"content": "Fast Refresh now uses a WebSocket connection instead of a EventSource connection."
		},
		{
			"heading": "breaking-changes",
			"content": "After making webpack 5 the default in Next.js 11, we've now officially removed webpack 4. We've worked closely with the community to ensure a smooth transition to webpack 5."
		},
		{
			"heading": "breaking-changes",
			"content": "`target` in `next.config.js` is no longer needed."
		},
		{
			"heading": "breaking-changes",
			"content": "`next/image` now uses a `span` as the wrapping element instead of a `div`."
		},
		{
			"heading": "breaking-changes",
			"content": "The minimum Node.js version has been bumped from `12.0.0` to `12.22.0`, which is the first version of Node.js with native ES modules support."
		},
		{
			"heading": "breaking-changes",
			"content": "To learn more, check out the upgrade guide."
		},
		{
			"heading": "community",
			"content": "Five years ago, we released Next.js to the public. We set out to build a zero-configuration React framework that simplifies your developer experience. Looking back, it's incredible to see how the community has grown, and what we've been able to ship together. Let's keep going."
		},
		{
			"heading": "community",
			"content": "Next.js is the result of the combined work of **over 1,800 individual developers**, industry partners like Google and Facebook, and our core team."
		},
		{
			"heading": "community",
			"content": "This release was brought to you by the contributions of: @ka2n, @housseindjirdeh, @rojserbest, @lobsterkatie, @thibautsabot, @javivelasco, @sokra, @rishabhpoddar, @kdy1, @huozhi, @georgegach, @ionut-botizan, @paul-creates, @TimBarley, @kimizuy, @devknoll, @matamatanot, @christianvuerings, @pgrodrigues, @mohamedbhy, @AlfonzAlfonz, @kara, @molebox, @angelopoole, @oste, @genetschneider, @jantimon, @kyliau, @mxschmitt, @PhattOZ, @finn-orsini, @kriswuollett, @harryheman, @GustavoEdinger, @AryanBeezadhur, @Blevs, @colevscode, @atcastle, @ijjk, @velocity23, @jonowu, @timneutkens, @whitep4nth3r, @micro-chipset, @TyMick, @padmaia, @arthurdenner, @vitorbal, @zNeb, @jacksonhardaker, @shuding, @kylemh, @Bundy-Mundi, @ctjlewis, @thien-do, @leerob, @Dev-CasperTheGhost, @janicklas-ralph, @rezathematic, @KonstHardy, @fracture91, @lorensr, @Sheraff, @HaNdTriX, @emilio, @oluan, @ddzieduch, @colinclerk, @x4th, @volcareso, @oiva, @sinchang, @scottrepreneur, @smakosh, @catnose99, @adrienharnay, @donsn, @andersonleite, @msp5382, @tim-hanssen, @appsplash99, @alexvilchis, @RobEasthope, @royal, @Perry-Olsson, @well-balanced, @mrmckeb, @buraksakalli, @espipj, @prateekbh, @AleksaC, @eungyeole, and @rgabs"
		}
	],
	"headings": [
		{
			"id": "faster-builds-and-fast-refresh-with-rust-compiler",
			"content": "Faster builds and Fast Refresh with Rust compiler"
		},
		{
			"id": "introducing-middleware",
			"content": "Introducing Middleware"
		},
		{
			"id": "preparing-for-react-18",
			"content": "Preparing for React 18"
		},
		{
			"id": "server-side-streaming",
			"content": "Server-Side Streaming"
		},
		{
			"id": "react-server-components",
			"content": "React Server Components"
		},
		{
			"id": "es-modules-support-and-url-imports",
			"content": "ES Modules Support and URL Imports"
		},
		{
			"id": "url-imports",
			"content": "URL Imports"
		},
		{
			"id": "bot-aware-isr-fallback",
			"content": "Bot-Aware ISR Fallback"
		},
		{
			"id": "smaller-images-using-avif",
			"content": "Smaller images using AVIF"
		},
		{
			"id": "output-file-tracing",
			"content": "Output File Tracing"
		},
		{
			"id": "other-improvements",
			"content": "Other Improvements"
		},
		{
			"id": "breaking-changes",
			"content": "Breaking Changes"
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
		url: "#faster-builds-and-fast-refresh-with-rust-compiler",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#faster-builds-and-fast-refresh-with-rust-compiler",
			children: "Faster builds and Fast Refresh with Rust compiler"
		}) })
	},
	{
		depth: 2,
		url: "#introducing-middleware",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#introducing-middleware",
			children: "Introducing Middleware"
		}) })
	},
	{
		depth: 2,
		url: "#preparing-for-react-18",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#preparing-for-react-18",
			children: "Preparing for React 18"
		}) })
	},
	{
		depth: 3,
		url: "#server-side-streaming",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#server-side-streaming",
			children: "Server-Side Streaming"
		}) })
	},
	{
		depth: 3,
		url: "#react-server-components",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#react-server-components",
			children: "React Server Components"
		}) })
	},
	{
		depth: 2,
		url: "#es-modules-support-and-url-imports",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#es-modules-support-and-url-imports",
			children: "ES Modules Support and URL Imports"
		}) })
	},
	{
		depth: 2,
		url: "#url-imports",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#url-imports",
			children: "URL Imports"
		}) })
	},
	{
		depth: 2,
		url: "#bot-aware-isr-fallback",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#bot-aware-isr-fallback",
			children: "Bot-Aware ISR Fallback"
		}) })
	},
	{
		depth: 2,
		url: "#smaller-images-using-avif",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#smaller-images-using-avif",
			children: "Smaller images using AVIF"
		}) })
	},
	{
		depth: 2,
		url: "#output-file-tracing",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#output-file-tracing",
			children: "Output File Tracing"
		}) })
	},
	{
		depth: 2,
		url: "#other-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#other-improvements",
			children: "Other Improvements"
		}) })
	},
	{
		depth: 2,
		url: "#breaking-changes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#breaking-changes",
			children: "Breaking Changes"
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
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As we announced at\xA0",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/conf",
				children: "Next.js Conf"
			}),
			", Next.js 12 is our biggest release ever:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#faster-builds-and-fast-refresh-with-rust-compiler",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Rust Compiler" })
			}), ": ~3x faster Fast Refresh and ~5x faster builds"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#introducing-middleware",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Middleware (beta)" })
			}), ": Enabling full flexibility in Next.js with code over configuration"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#preparing-for-react-18",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "React 18 Support" })
			}), ": Native Next.js APIs are now supported, as well as Suspense"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#smaller-images-using-avif",
				children: (0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "<Image />" }), " AVIF Support"] })
			}), ": Opt-in for 20% smaller images"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#bot-aware-isr-fallback",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Bot-aware ISR Fallback" })
			}), ": Optimized SEO for web crawlers"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#es-modules-support-and-url-imports",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Native ES Modules Support" })
			}), ": Aligning with the standardized module system"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#url-imports",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "URL Imports (alpha)" })
			}), ": Import packages from any URL, no installs required"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#react-server-components",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "React Server Components (alpha)" })
			}), ": Try it today, including SSR streaming"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Update today by running ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "npm i next@latest" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "faster-builds-and-fast-refresh-with-rust-compiler",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#faster-builds-and-fast-refresh-with-rust-compiler",
				children: "Faster builds and Fast Refresh with Rust compiler"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We want to make every Next.js application build faster for production, and get instant feedback in local development. Next.js 12 includes a brand new Rust compiler that takes advantage of native compilation." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Our Rust compiler is built on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://swc.rs/",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "SWC" })
			}),
			", an open platform for the next generation of fast tooling. We've optimized bundling and compiling with ~",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "3x faster refresh" }),
			" locally and ~",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "5x faster builds" }),
			" for production. Other improvements and features include:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-12/swc.png",
			alt: "Results from using the new Rust compiler with large Next.js codebases."
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Results from using the new Rust compiler with large Next.js codebases." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Further speed improvements for large codebases:" }), " We've validated the Rust compiler with some of the largest Next.js codebases in the world."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Improved observability into performance:" }), " Next.js now outputs Fast Refresh timing in the console for both client and server compilation, including the number of modules and files compiled."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Underlying webpack improvements:" }), " We've made numerous improvements to webpack, including optimizing Fast Refresh and making on-demand entries more reliable."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Compilation using Rust is ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "17x faster than Babel" }),
			" and enabled by default using Next.js 12, replacing transforming JavaScript and TypeScript files. This meant we had to port the Babel transformations in Next.js to Rust, including a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "brand new CSS parser in Rust" }),
			" used to implement the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "styled-jsx" }),
			" transform."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The new Rust compiler is backwards compatible. If you have an existing Babel configuration, you will automatically be opted out. We have plans to port parsing for popular libraries like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "styled-components" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "emotion" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "relay" }),
			" soon. If you're using a custom Babel setup, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions/30174",
				children: "please share your configuration"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can also opt-in to using the Rust compiler for minification. This is ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "7x faster than Terser" }),
			". Minification is opt-in until it’s thoroughly validated as it replaces multi-year infrastructure."
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
							children: "  swcMinify: "
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
						children: "};"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"On top of hiring ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://twitter.com/kdy1dev",
				children: "DongYoon Kang"
			}),
			", the creator of SWC, and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://twitter.com/padmaia",
				children: "Maia Teegarden"
			}),
			", a contributor to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://parceljs.org/",
				children: "Parcel"
			}),
			", we are continuing to invest in the Rust ecosystem. If you have experience working with Rust, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/careers",
				children: "please apply to join our team"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more information, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.youtube.com/watch?v=_WNeAubn92U",
				children: "watch our demo"
			}),
			" from Next.js Conf."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "introducing-middleware",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#introducing-middleware",
				children: "Introducing Middleware"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Middleware enables you to use code over configuration. This gives you full flexibility in Next.js because you can run code before a request is completed. Based on the user's incoming request, you can modify the response by rewriting, redirecting, adding headers, or even streaming HTML." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-12/middleware.png",
			alt: "Middleware gives you complete flexibility inside Next.js."
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Middleware gives you complete flexibility inside Next.js." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Middleware can be used for anything that shares logic for a set of pages, including:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/templates/next.js/jwt-authentication",
				children: "Authentication"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/templates/next.js/bot-protection-datadome",
				children: "Bot protection"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/templates/next.js/edge-redirects-upstash",
				children: "Redirects"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/templates/next.js/hostname-rewrites",
				children: "Rewrites"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/templates/next.js/ab-testing-simple",
				children: "Feature flags and A/B tests"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/templates/next.js/edge-functions-i18n",
				children: "Advanced i18n routing requirements"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"And ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://vercel.com/templates?type=edge-functions",
					children: "more"
				}),
				"!"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Middleware uses a strict runtime that supports standard Web APIs like ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }) }),
			". This works out of the box using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
			", as well as on Edge platforms like Vercel, which use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://www.vercel.com/edge",
				children: "Edge Middleware"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To use Middleware in Next.js, you can create a file ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_middleware.js" }),
			". In this example, we use the standard Web API Response (",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/Response",
				children: "MDN"
			}),
			"):"
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
			title: "pages/_middleware.js",
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
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " middleware"
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
							children: "ev"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " new"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Response"
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
							children: "'Hello, world!'"
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
			"For more information, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.youtube.com/watch?v=WlP2TB2ORL4",
				children: "watch our demo"
			}),
			" from Next.js Conf and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/routing/middleware",
				children: "check out the documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "preparing-for-react-18",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#preparing-for-react-18",
				children: "Preparing for React 18"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html",
				children: "React 18"
			}),
			" will add features like Suspense, automatic batching of updates, APIs like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "startTransition" }),
			", and a new streaming API for server rendering with support for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "React.lazy" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've been working closely with the React team at Facebook to prepare Next.js for React 18 as it moves towards a stable release. We're making these features available to try today in Next.js 12 under an experimental flag." }),
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
						children: " install"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react@alpha"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react-dom@alpha"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "server-side-streaming",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#server-side-streaming",
				children: "Server-Side Streaming"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Concurrent features in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html",
				children: "React 18"
			}),
			" include built-in support for server-side Suspense and SSR streaming support. This allows you to server-render pages using HTTP streaming. This is an experimental feature in Next.js 12, but once enabled, SSR will use the same strict runtime as Middleware."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To enable, use the experimental flag ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "concurrentFeatures: true" }),
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
							children: "    concurrentFeatures: "
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
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "react-server-components",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#react-server-components",
				children: "React Server Components"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"React Server Components allow us to render everything, including the components themselves, on the server. This is fundamentally different from server-side rendering where you're pre-generating HTML on the server. With Server Components, there's ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "zero client-side JavaScript needed" }),
			", making page rendering faster. This improves the user experience of your application, pairing the best parts of server-rendering with client-side interactivity."
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
							children: "    concurrentFeatures: "
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    serverComponents: "
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
			"Next.js now enables you to do data fetching at ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "the component level" }),
			", all expressed as JSX. By using React Server components, we can simplify things. Special functions like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			" are no longer needed. This aligns with the React Hooks model of colocating data fetching with your components."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can rename any Next.js page to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".server.js" }),
			" to create a Server Component and import client components directly inside your Server Components. These client components will hydrate and become interactive, so you add functionality like upvotes."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're currently working on server-side Suspense, selective hydration, and streaming rendering in Next.js and will share our progress in a future blog post." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Special thanks to our collaborators ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://twitter.com/karaforthewin",
				children: "Kara Erickson"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://twitter.com/devknoll",
				children: "Gerald Monaco"
			}),
			" on the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://web.dev/introducing-aurora/",
				children: "Google Aurora"
			}),
			" team for their work on React 18 and Server Components."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more information, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.youtube.com/watch?v=WlP2TB2ORL4",
				children: "watch our demo"
			}),
			" from Next.js Conf and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.link/react-18",
				children: "check out the documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "es-modules-support-and-url-imports",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#es-modules-support-and-url-imports",
				children: "ES Modules Support and URL Imports"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "ES modules bring an official, standardized module system to JavaScript. They're supported by all major browsers as well as Node.js." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This standard pushes the web ecosystem forward by enabling smaller package sizes and JavaScript bundles, ultimately leading to a better user experience. As the JavaScript ecosystem transitions from Common JS (the old standard) to ES modules, we're committed to helping developers incrementally adopt these improvements without unnecessary breaking changes." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Starting with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/blog/next-11-1",
				children: "Next.js 11.1"
			}),
			", we added experimental support for ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nodejs.org/docs/latest/api/esm.html",
				children: "ES modules"
			}),
			" being prioritized over CommonJS modules. In Next.js 12, this is now the default. Importing NPM modules that only provide CommonJS is still supported."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "url-imports",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#url-imports",
				children: "URL Imports"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js 12 includes experimental support for importing ES Modules through URLs, no install or separate build step is required." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"URL imports allow you to use ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "any" }),
			" package directly through a URL. This enables Next.js to process remote HTTP(S) resources exactly like local dependencies."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If a URL import is detected, Next.js will generate a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.lock" }),
			" file to track remote resources. URL imports are cached locally to ensure you can still work offline. Next.js supports both client and server URL imports."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To opt-in, add the allowed URL prefixes inside ",
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
							children: "    urlImports: ["
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'https://cdn.skypack.dev'"
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
						children: "};"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Then, you can import modules directly from URLs:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import confetti from 'https://cdn.skypack.dev/canvas-confetti';" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Any CDN that serves ES modules will work, including no-code and design tools like Framer:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://skypack.dev",
				children: "Skypack"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://esm.sh/",
				children: "esm.sh"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.jsdelivr.com/",
				children: "jsDelivr"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://jspm.org/",
				children: "JSPM"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://unpkg.com/",
				children: "unpkg"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more information, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.youtube.com/watch?v=_WNeAubn92U",
				children: "watch our demo"
			}),
			" from Next.js Conf and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/urlImports",
				children: "check out the documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "bot-aware-isr-fallback",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#bot-aware-isr-fallback",
				children: "Bot-Aware ISR Fallback"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Currently, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/docs/concepts/incremental-static-regeneration/overview",
				children: "Incremental Static Regeneration"
			}),
			" with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback: true" }),
			" renders a fallback state before rendering the page contents on the first request to a page that was not generated yet. To block the page from loading (server-rendering), you would need to use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback: 'blocking'" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In Next.js 12, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/learn/seo/introduction-to-seo/webcrawlers",
				children: "web crawlers (e.g. search bots)"
			}),
			" will automatically server-render ISR pages using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback: true" }),
			", while still serving the previous behavior of the fallback state to non-crawler User-Agents. This prevents crawlers from indexing loading states."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "smaller-images-using-avif",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#smaller-images-using-avif",
				children: "Smaller images using AVIF"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The built-in Image Optimization API now supports AVIF images, enabling 20% smaller images compared to WebP." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"AVIF images can take longer to optimize compared to WebP, so we're making this feature opt-in using the new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "images.formats" }),
			" property in ",
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
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  images: {"
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
							children: "    formats: ["
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'image/avif'"
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
							children: "'image/webp'"
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
						children: "};"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This list of formats is used to determine the optimized image format on-demand using the request's ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Accept" }),
			" header. Since AVIF is first, it will be served if the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://caniuse.com/avif",
				children: "browser supports AVIF"
			}),
			". If not, WebP will be served if the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://caniuse.com/webp",
				children: "browser supports WebP"
			}),
			". If neither format is supported, the original image format will be served."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "output-file-tracing",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#output-file-tracing",
				children: "Output File Tracing"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In Next.js 8, we introduced the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "target" }),
			" option. This allowed for outputting Next.js pages as standalone JavaScript bundles by bundling all dependencies using webpack during the build. We quickly realized this wasn't ideal and instead created ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@vercel/nft" }),
			". ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@vercel/nft" }),
			" has been used for over 2 years on all deployments on the Vercel platform."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Now, we're bringing these improvements directly into the Next.js framework by default, ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "for all deployment platforms" }),
			", providing a significantly improved approach over the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "target" }),
			" option."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js 12 automatically traces which files are needed by each page and API route using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@vercel/nft" }),
			", and outputs these trace results next to the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			" output, allowing integrators to leverage the traces Next.js provides automatically."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"These changes also optimize applications deploying using tools like Docker through ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
			". By leveraging ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@vercel/nft" }),
			", we will be able to make the Next.js output standalone in the future. No dependencies will be required to be installed to run the application, massively reducing the Docker image size."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Bringing ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@vercel/nft" }),
			" into Next.js supersedes the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "target" }),
			" approach, making ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "target" }),
			" deprecated in Next.js 12. ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/output",
				children: "Check out the documentation"
			}),
			" for more info."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "other-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#other-improvements",
				children: "Other Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Adding ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_app.js" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_document.js" }),
				" to your application now automatically replaces the built-in version without requiring a reboot of the Next.js CLI."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ESLint integration now supports ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/28042",
					children: "single-file linting"
				}),
				" in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }),
				" with the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--file" }),
				" flag."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Next.js 12 now supports setting a custom ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "tsconfig.json" }),
				" path."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.mjs" }), " is now supported for writing the configuration as ES modules."] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "In-flight requests are now de-duped for getStaticProps." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Checking for static pages now runs using a shared worker pool." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Fast Refresh now uses a WebSocket connection instead of a EventSource connection." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "breaking-changes",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#breaking-changes",
				children: "Breaking Changes"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"After making webpack 5 the default in ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nextjs.org/blog/next-11#webpack-5",
					children: "Next.js 11"
				}),
				", we've now officially removed webpack 4. We've worked closely with the community to ensure a smooth transition to webpack 5."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "target" }),
				" in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
				" is no longer needed."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
				" now uses a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "span" }),
				" as the wrapping element instead of a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "div" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The minimum Node.js version has been bumped from ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "12.0.0" }),
				" to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "12.22.0" }),
				", which is the first version of Node.js with native ES modules support."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To learn more, check out the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/upgrading",
				children: "upgrade guide"
			}),
			"."
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Five years ago, we released Next.js to the public. We set out to build a zero-configuration React framework that simplifies your developer experience. Looking back, it's incredible to see how the community has grown, and what we've been able to ship together. Let's keep going." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js is the result of the combined work of ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "over 1,800 individual developers" }),
			", industry partners like Google and Facebook, and our core team."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This release was brought to you by the contributions of: @ka2n, @housseindjirdeh, @rojserbest, @lobsterkatie, @thibautsabot, @javivelasco, @sokra, @rishabhpoddar, @kdy1, @huozhi, @georgegach, @ionut-botizan, @paul-creates, @TimBarley, @kimizuy, @devknoll, @matamatanot, @christianvuerings, @pgrodrigues, @mohamedbhy, @AlfonzAlfonz, @kara, @molebox, @angelopoole, @oste, @genetschneider, @jantimon, @kyliau, @mxschmitt, @PhattOZ, @finn-orsini, @kriswuollett, @harryheman, @GustavoEdinger, @AryanBeezadhur, @Blevs, @colevscode, @atcastle, @ijjk, @velocity23, @jonowu, @timneutkens, @whitep4nth3r, @micro-chipset, @TyMick, @padmaia, @arthurdenner, @vitorbal, @zNeb, @jacksonhardaker, @shuding, @kylemh, @Bundy-Mundi, @ctjlewis, @thien-do, @leerob, @Dev-CasperTheGhost, @janicklas-ralph, @rezathematic, @KonstHardy, @fracture91, @lorensr, @Sheraff, @HaNdTriX, @emilio, @oluan, @ddzieduch, @colinclerk, @x4th, @volcareso, @oiva, @sinchang, @scottrepreneur, @smakosh, @catnose99, @adrienharnay, @donsn, @andersonleite, @msp5382, @tim-hanssen, @appsplash99, @alexvilchis, @RobEasthope, @royal, @Perry-Olsson, @well-balanced, @mrmckeb, @buraksakalli, @espipj, @prateekbh, @AleksaC, @eungyeole, and @rgabs" })
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
export { toc as a, structuredData as i, frontmatter as n, next_12_exports as r, MDXContent as t };
