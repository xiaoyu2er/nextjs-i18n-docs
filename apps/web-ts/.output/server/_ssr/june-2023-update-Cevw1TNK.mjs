import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/june-2023-update-Cevw1TNK.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var june_2023_update_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js App Router Update",
	"description": "The Next.js team is focused on performance, stability, and developer experience for the upcoming months.",
	"author": [{
		"name": "Delba de Oliveira",
		"image": "/static/team/delba.jpg"
	}, {
		"name": "Lee Robinson",
		"image": "/static/team/lee.jpg"
	}],
	"date": /* @__PURE__ */ new Date(1687442400507),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/june-2023-update/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "The App Router represents a new foundation for the future of Next.js, but we recognize there are opportunities to make the experience better. We'd like to give an update on what our current priorities are."
		},
		{
			"heading": void 0,
			"content": "For the upcoming releases of Next.js, we are focusing on the following areas:"
		},
		{
			"heading": void 0,
			"content": "**Improving Performance**"
		},
		{
			"heading": void 0,
			"content": "**Improving Stability**"
		},
		{
			"heading": void 0,
			"content": "**Improving Developer Education**"
		},
		{
			"heading": "the-app-router",
			"content": "First, it's helpful to provide some context on how the App Router has been designed."
		},
		{
			"heading": "growing-beyond-the-pages-router-by-aligning-with-react",
			"content": "As we saw increased adoption and larger scale applications being built with Next.js, we received feedback from the community and identified areas where we started to reach the limits of the Pages Router."
		},
		{
			"heading": "growing-beyond-the-pages-router-by-aligning-with-react",
			"content": "Most notably, the Next.js Pages Router was not designed for streaming, a cornerstone primitive in modern React, that helps us address the limitations we were facing and realize our long-term vision for Next.js."
		},
		{
			"heading": "growing-beyond-the-pages-router-by-aligning-with-react",
			"content": "Making streaming-friendly framework APIs for data fetching, asset loading, and page metadata, as well as taking advantage of React's newer primitives required large changes to the core architecture of Next.js."
		},
		{
			"heading": "growing-beyond-the-pages-router-by-aligning-with-react",
			"content": "We took the opportunity to build on top of the latest React concurrent features, like Server Components, Suspense, and more, which have been designed for streaming architectures."
		},
		{
			"heading": "incremental-adoption-is-non-negotiable",
			"content": "We didn't want our community to have to rebuild their entire applications from the ground up to update to the latest version of Next.js. We believe incremental adoption is the best strategy for evolving applications over time."
		},
		{
			"heading": "incremental-adoption-is-non-negotiable",
			"content": "**Per-route incremental migration**: Without a major rewrite of your application, you can move a single route of your application over the App Router and start to take advantage of new features at your own pace. See our incremental adoption guide or watch a tutorial."
		},
		{
			"heading": "incremental-adoption-is-non-negotiable",
			"content": "**Easily rollback**: If you are not satisifed with the performance or developer experience of the App Router, you can easily rollback to the Pages Router for that specific route."
		},
		{
			"heading": "incremental-adoption-is-non-negotiable",
			"content": "We are exploring further opportunities to make incremental adoption even easier."
		},
		{
			"heading": "road-to-stability",
			"content": "We began building the Next.js App Router over a year ago and have been steadily releasing new features and improvements since then."
		},
		{
			"heading": "road-to-stability",
			"content": "**Initial Announcement**: In May of that year, we released an RFC to outline our plans for making routing and layouts more flexible."
		},
		{
			"heading": "road-to-stability",
			"content": "**Early Beta**: In Next.js 13, we released the first version of the App Router, allowing the community to try it out and provide early feedback."
		},
		{
			"heading": "road-to-stability",
			"content": "**Stable API**: Responding to feedback, we focused our efforts on finalizing the core API. In 13.4, we marked the core API of the App Router as stable and ready for wider adoption."
		},
		{
			"heading": "our-current-focus",
			"content": "Marking stability signaled to the community that the core API was settled and would not go through major breaking changes that would require rewrites."
		},
		{
			"heading": "our-current-focus",
			"content": "Since then, we've received lots of valuable feedback and increased adoption has inevitably revealed bugs and opportunities for further improvement."
		},
		{
			"heading": "our-current-focus",
			"content": "We want you to know that we are **not yet satisfied** with the experience of using the App Router and it is our top priority moving forward. So, let's talk about the work we're doing to make this experience better."
		},
		{
			"heading": "improving-performance",
			"content": "Over the coming months, we're focused on three aspects of performance: local iteration speed, production build times, and serverless performance."
		},
		{
			"heading": "local-development-performance",
			"content": "As Next.js has matured, and the size of applications built with it have grown, we've slowly and incrementally been replacing pieces of its underlying architecture with faster, more scalable tools."
		},
		{
			"heading": "local-development-performance",
			"content": "**Migration Progress*&#x2A;: We started with replacing Babel &#x2A;(compilation)&#x2A; and Terser &#x2A;(minification)* with SWC. This has helped improve local iteration speeds and production build times."
		},
		{
			"heading": "local-development-performance",
			"content": "**Long-term Investment**: Keeping great Fast Refresh performance regardless of an applications size means making Next.js operate as incremental as possible during local development, by only bundling and compiling code as needed."
		},
		{
			"heading": "local-development-performance",
			"content": "This is why we're currently working on replacing webpack &#x2A;(bundling)* with Turbopack, which is built on a low-level incremental computation engine that enables caching down to the level of individual functions."
		},
		{
			"heading": "local-development-performance",
			"content": "Next.js applications that move to Turbopack will see sustained improvements in Fast Refresh speed even as they grow in size."
		},
		{
			"heading": "local-development-performance",
			"content": "In the past few months, the Turbo team has been focused on improving Turbopack performance and support for all Next.js features and App Router APIs."
		},
		{
			"heading": "local-development-performance",
			"content": "Turbopack is currently available in beta (`next dev --turbo`)."
		},
		{
			"heading": "local-development-performance",
			"content": "**Improving Today's Architecture**: In addition to investing in the future, we are continuing to make performance improvements to our existing webpack architecture."
		},
		{
			"heading": "local-development-performance",
			"content": "For certain Next.js applications, especially those refreshing thousands of modules, we have seen reports of flakiness with local development and Fast Refresh. We're working to improve performance and reliability here. For example, we recently added in pre-configured settings (`modularizeImports`) to handle large icon libraries that might accidentally force thousands of modules to reload on every request."
		},
		{
			"heading": "build-time-performance",
			"content": "We are also working on production builds with Turbopack (`next build --turbo`) and have started to land the first pieces of this work. Expect more updates on this in the coming releases."
		},
		{
			"heading": "production-performance",
			"content": "Finally, on Vercel, we're working to optimize the performance and memory usage of Vercel Functions defined through Next.js application code, ensuring minimal cold starts while retaining the benefits of a scalable serverless architecture. This work has resulted in new tracing capabilities (experimental) in Next.js and early explorations into server-side developer tools."
		},
		{
			"heading": "improving-stability",
			"content": "The Pages Router has been around for six years now. The release of the App Router meant the introduction of new APIs which are still young, with just six months of usage. We've come a long way in a short amount of time, but there are still opportunities to improve as we learn more from our community and how they're using it."
		},
		{
			"heading": "improving-stability",
			"content": "We appreciate the community's willingness to eagerly adopt the App Router and provide feedback. There's been a number of bug reports we're investigating and we're thankful for the minimal reproductions you have created to help isolate issues and verify fixes."
		},
		{
			"heading": "improving-stability",
			"content": "Since 13.4, we've already patched a number of high impact bugs around stability that are available in the latest patch release (`13.4.7`). We will be continuing to focus on performance and stability with high intensity."
		},
		{
			"heading": "improving-developer-education",
			"content": "While we believe the new features of the App Router and modern React are powerful, they also require additional education and documentation to help teach these new concepts."
		},
		{
			"heading": "nextjs-features",
			"content": "We've been working over the past year to re-write the Next.js documentation from scratch. This work is now live on nextjs.org/docs. We'd like to highlight some important pieces:"
		},
		{
			"heading": "nextjs-features",
			"content": "**Pages and App toggles:** You can switch between learning the Pages Router or App Router documentation using the button on the left side of the documentation. Further, you can filter search results based on your router choice."
		},
		{
			"heading": "nextjs-features",
			"content": "**Improved content and information architecture:** Almost every single page of the App Router documentation has been refreshed, including more clear structure and cohesiveness between pages, and hundreds of new illustrations to visually explain how Next.js works."
		},
		{
			"heading": "nextjs-features",
			"content": "**More to come**: We have more work to do here. The Developer Experience team at Vercel is working hard to provide additional learning resources (including an updated course on `/learn` teaching the App Router) and real world codebase examples (including a rewrite of Next.js Commerce)."
		},
		{
			"heading": "nextjs-features",
			"content": "We'll be releasing new content in the documentation, on Twitter, YouTube, and more."
		},
		{
			"heading": "new-react-features",
			"content": "We've also heard your feedback about the education around new React features that are available in the Next.js App Router."
		},
		{
			"heading": "new-react-features",
			"content": "**Server Components**: It's important to note that features like Server Components and conventions like the `\"use client\"` directive are not Next.js specific, but a larger part of the React ecosystem."
		},
		{
			"heading": "new-react-features",
			"content": "Our team, our partners at Meta, and other independent contributors are working to provide more education around these topics. It's early days for these concepts, but we're confident in the React ecosystem and continued education."
		},
		{
			"heading": "new-react-features",
			"content": "**Client Components**: With the recent conversation around Server Components, it's important to note the client components are *not* a de-optimization. The client is a valid part of the React model and is not going away."
		},
		{
			"heading": "new-react-features",
			"content": "You can think of client components as the existing Next.js ecosystem today, where your favorite libraries and tools continue to work. For example, a common question we've seen is whether `\"use client\"` needs to be added to every single file to make it a client component. This is not necessary, but we understand these concepts are new and will take time to learn. You only need to mark the top level boundary where you code moves between the server to the client. This architecture allows you to interweave server and client components together."
		},
		{
			"heading": "new-react-features",
			"content": "**Growing third-party ecosystem**: In addition to education, the ecosystem around React's newer features is still growing. For example, Panda CSS, a CSS-in-JS library from the makers of Chakra UI, just announced support for React Server Components."
		},
		{
			"heading": "new-react-features",
			"content": "**Server Actions (Alpha)**: Server Actions enable server-side data mutations, reduced client-side JavaScript, and progressively enhanced forms. We do not recommend using Server Actions in production yet. We appreciate early feedback from alpha testers helping us shape the future of this feature."
		},
		{
			"heading": "thank-you",
			"content": "We're thankful many of you have chosen to learn and build with Next.js."
		},
		{
			"heading": "thank-you",
			"content": "Our focus on performance, stability, and developer experience will be reflected in the upcoming releases of Next.js. We want using Next.js to be delightful—and to make you (and your team) more productive."
		},
		{
			"heading": "thank-you",
			"content": "As always, we greatly appreciate your feedback. If you are experiencing any issues with Next.js, please open an issue, or start a new discussion, and we will investigate."
		}
	],
	"headings": [
		{
			"id": "the-app-router",
			"content": "The App Router"
		},
		{
			"id": "growing-beyond-the-pages-router-by-aligning-with-react",
			"content": "Growing Beyond the Pages Router by Aligning with React"
		},
		{
			"id": "incremental-adoption-is-non-negotiable",
			"content": "Incremental Adoption is Non-Negotiable"
		},
		{
			"id": "road-to-stability",
			"content": "Road to Stability"
		},
		{
			"id": "our-current-focus",
			"content": "Our Current Focus"
		},
		{
			"id": "improving-performance",
			"content": "Improving Performance"
		},
		{
			"id": "local-development-performance",
			"content": "Local development performance"
		},
		{
			"id": "build-time-performance",
			"content": "Build-time performance"
		},
		{
			"id": "production-performance",
			"content": "Production performance"
		},
		{
			"id": "improving-stability",
			"content": "Improving Stability"
		},
		{
			"id": "improving-developer-education",
			"content": "Improving Developer Education"
		},
		{
			"id": "nextjs-features",
			"content": "Next.js features"
		},
		{
			"id": "new-react-features",
			"content": "New React features"
		},
		{
			"id": "thank-you",
			"content": "Thank you"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#the-app-router",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#the-app-router",
			children: "The App Router"
		}) })
	},
	{
		depth: 3,
		url: "#growing-beyond-the-pages-router-by-aligning-with-react",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#growing-beyond-the-pages-router-by-aligning-with-react",
			children: "Growing Beyond the Pages Router by Aligning with React"
		}) })
	},
	{
		depth: 3,
		url: "#incremental-adoption-is-non-negotiable",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#incremental-adoption-is-non-negotiable",
			children: "Incremental Adoption is Non-Negotiable"
		}) })
	},
	{
		depth: 3,
		url: "#road-to-stability",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#road-to-stability",
			children: "Road to Stability"
		}) })
	},
	{
		depth: 2,
		url: "#our-current-focus",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#our-current-focus",
			children: "Our Current Focus"
		}) })
	},
	{
		depth: 3,
		url: "#improving-performance",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#improving-performance",
			children: "Improving Performance"
		}) })
	},
	{
		depth: 4,
		url: "#local-development-performance",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#local-development-performance",
			children: "Local development performance"
		}) })
	},
	{
		depth: 4,
		url: "#build-time-performance",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#build-time-performance",
			children: "Build-time performance"
		}) })
	},
	{
		depth: 4,
		url: "#production-performance",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#production-performance",
			children: "Production performance"
		}) })
	},
	{
		depth: 2,
		url: "#improving-stability",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#improving-stability",
			children: "Improving Stability"
		}) })
	},
	{
		depth: 2,
		url: "#improving-developer-education",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#improving-developer-education",
			children: "Improving Developer Education"
		}) })
	},
	{
		depth: 3,
		url: "#nextjs-features",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#nextjs-features",
			children: "Next.js features"
		}) })
	},
	{
		depth: 3,
		url: "#new-react-features",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#new-react-features",
			children: "New React features"
		}) })
	},
	{
		depth: 2,
		url: "#thank-you",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#thank-you",
			children: "Thank you"
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
		h4: "h4",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The App Router represents a new foundation for the future of Next.js, but we recognize there are opportunities to make the experience better. We'd like to give an update on what our current priorities are." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For the upcoming releases of Next.js, we are focusing on the following areas:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Improving Performance" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Improving Stability" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Improving Developer Education" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "the-app-router",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#the-app-router",
				children: "The App Router"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "First, it's helpful to provide some context on how the App Router has been designed." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "growing-beyond-the-pages-router-by-aligning-with-react",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#growing-beyond-the-pages-router-by-aligning-with-react",
				children: "Growing Beyond the Pages Router by Aligning with React"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "As we saw increased adoption and larger scale applications being built with Next.js, we received feedback from the community and identified areas where we started to reach the limits of the Pages Router." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Most notably, the Next.js Pages Router was not designed for streaming, a cornerstone primitive in modern React, that helps us address the limitations we were facing and realize our long-term vision for Next.js." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Making streaming-friendly framework APIs for data fetching, asset loading, and page metadata, as well as taking advantage of React's newer primitives required large changes to the core architecture of Next.js." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We took the opportunity to build on top of the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/blog/2023/05/03/react-canaries",
				children: "latest React concurrent features"
			}),
			", like Server Components, Suspense, and more, which have been ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/reactwg/react-18/discussions/37",
				children: "designed for streaming architectures"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "incremental-adoption-is-non-negotiable",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#incremental-adoption-is-non-negotiable",
				children: "Incremental Adoption is Non-Negotiable"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We didn't want our community to have to rebuild their entire applications from the ground up to update to the latest version of Next.js. We believe incremental adoption is the best strategy for evolving applications over time." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Per-route incremental migration" }),
				": Without a major rewrite of your application, you can move a single route of your application over the App Router and start to take advantage of new features at your own pace. See our ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/upgrading/app-router-migration",
					children: "incremental adoption guide"
				}),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://www.youtube.com/watch?v=YQMSietiFm0",
					children: "watch a tutorial"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Easily rollback" }), ": If you are not satisifed with the performance or developer experience of the App Router, you can easily rollback to the Pages Router for that specific route."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We are exploring further opportunities to make incremental adoption even easier." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "road-to-stability",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#road-to-stability",
				children: "Road to Stability"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We began building the Next.js App Router over a year ago and have been steadily releasing new features and improvements since then." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Initial Announcement" }),
				": In May of that year, we ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/blog/layouts-rfc",
					children: "released an RFC"
				}),
				" to outline our plans for making routing and layouts more flexible."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Early Beta" }), ": In Next.js 13, we released the first version of the App Router, allowing the community to try it out and provide early feedback."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Stable API" }), ": Responding to feedback, we focused our efforts on finalizing the core API. In 13.4, we marked the core API of the App Router as stable and ready for wider adoption."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "our-current-focus",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#our-current-focus",
				children: "Our Current Focus"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Marking stability signaled to the community that the core API was settled and would not go through major breaking changes that would require rewrites." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Since then, we've received lots of valuable feedback and increased adoption has inevitably revealed bugs and opportunities for further improvement." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We want you to know that we are ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "not yet satisfied" }),
			" with the experience of using the App Router and it is our top priority moving forward. So, let's talk about the work we're doing to make this experience better."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "improving-performance",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improving-performance",
				children: "Improving Performance"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Over the coming months, we're focused on three aspects of performance: local iteration speed, production build times, and serverless performance." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "local-development-performance",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#local-development-performance",
				children: "Local development performance"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "As Next.js has matured, and the size of applications built with it have grown, we've slowly and incrementally been replacing pieces of its underlying architecture with faster, more scalable tools." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "Migration Progress" }),
					": We started with replacing Babel ",
					(0, import_jsx_runtime.jsx)(_components.em, { children: "(compilation)" }),
					" and Terser ",
					(0, import_jsx_runtime.jsx)(_components.em, { children: "(minification)" }),
					" with ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/architecture/nextjs-compiler",
						children: "SWC"
					}),
					". This has helped improve local iteration speeds and production build times."
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Long-term Investment" }), ": Keeping great Fast Refresh performance regardless of an applications size means making Next.js operate as incremental as possible during local development, by only bundling and compiling code as needed."] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					"This is why we're currently working on replacing webpack ",
					(0, import_jsx_runtime.jsx)(_components.em, { children: "(bundling)" }),
					" with ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://nextjs.org/docs/app/api-reference/turbopack",
						children: "Turbopack"
					}),
					", which is built on a low-level incremental computation engine that enables caching down to the level of individual functions."
				] }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js applications that move to Turbopack will see sustained improvements in Fast Refresh speed even as they grow in size." }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.p, { children: "In the past few months, the Turbo team has been focused on improving Turbopack performance and support for all Next.js features and App Router APIs." }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					"Turbopack is currently ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/architecture/turbopack",
						children: "available in beta"
					}),
					" (",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev --turbo" }),
					")."
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Improving Today's Architecture" }), ": In addition to investing in the future, we are continuing to make performance improvements to our existing webpack architecture."] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					"For certain Next.js applications, especially those refreshing thousands of modules, we have seen reports of flakiness with local development and Fast Refresh. We're working to improve performance and reliability here. For example, we recently added in pre-configured settings (",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "modularizeImports" }),
					") to handle ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://github.com/vercel/next.js/pull/50900",
						children: "large icon libraries"
					}),
					" that might accidentally force thousands of modules to reload on every request."
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "build-time-performance",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#build-time-performance",
				children: "Build-time performance"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We are also working on production builds with Turbopack (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build --turbo" }),
			") and have ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/pull/51546",
				children: "started to land"
			}),
			" the first pieces of this work. Expect more updates on this in the coming releases."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "production-performance",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#production-performance",
				children: "Production performance"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Finally, on Vercel, we're working to optimize the performance and memory usage of Vercel Functions ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/blog/framework-defined-infrastructure",
				children: "defined through Next.js application code"
			}),
			", ensuring minimal cold starts while retaining the benefits of a scalable serverless architecture. This work has resulted in new ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/optimizing/open-telemetry",
				children: "tracing capabilities"
			}),
			" (experimental) in Next.js and early explorations into server-side developer tools."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "improving-stability",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improving-stability",
				children: "Improving Stability"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Pages Router has been around for six years now. The release of the App Router meant the introduction of new APIs which are still young, with just six months of usage. We've come a long way in a short amount of time, but there are still opportunities to improve as we learn more from our community and how they're using it." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We appreciate the community's willingness to eagerly adopt the App Router and provide feedback. There's been a number of bug reports we're investigating and we're thankful for the minimal reproductions you have created to help isolate issues and verify fixes." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Since 13.4, we've already patched a number of high impact bugs around stability that are available in the latest patch release (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "13.4.7" }),
			"). We will be continuing to focus on performance and stability with high intensity."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "improving-developer-education",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improving-developer-education",
				children: "Improving Developer Education"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "While we believe the new features of the App Router and modern React are powerful, they also require additional education and documentation to help teach these new concepts." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "nextjs-features",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nextjs-features",
				children: "Next.js features"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We've been working over the past year to re-write the Next.js documentation from scratch. This work is now live on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs",
				children: "nextjs.org/docs"
			}),
			". We'd like to highlight some ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://twitter.com/delba_oliveira/status/1664323492077256704",
				children: "important pieces"
			}),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Pages and App toggles:" }), " You can switch between learning the Pages Router or App Router documentation using the button on the left side of the documentation. Further, you can filter search results based on your router choice."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Improved content and information architecture:" }), " Almost every single page of the App Router documentation has been refreshed, including more clear structure and cohesiveness between pages, and hundreds of new illustrations to visually explain how Next.js works."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "More to come" }),
				": We have more work to do here. The Developer Experience team at Vercel is working hard to provide additional learning resources (including an updated course on ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/learn" }),
				" teaching the App Router) and real world codebase examples (including a rewrite of ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/commerce",
					children: "Next.js Commerce"
				}),
				")."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We'll be releasing new content in the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs",
				children: "documentation"
			}),
			", on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://twitter.com/nextjs",
				children: "Twitter"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.youtube.com/c/VercelHQ",
				children: "YouTube"
			}),
			", and more."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "new-react-features",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#new-react-features",
				children: "New React features"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've also heard your feedback about the education around new React features that are available in the Next.js App Router." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "Server Components" }),
					": It's important to note that features like Server Components and conventions like the ",
					(0, import_jsx_runtime.jsxs)(_components.a, {
						href: "https://github.com/reactjs/rfcs/blob/main/text/0227-server-module-conventions.md",
						children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "\"use client\"" }), " directive"]
					}),
					" are not Next.js specific, but a larger part of the React ecosystem."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					"Our team, our partners at Meta, and other independent contributors are working to provide more education around these topics. It's early days for these concepts, but we're confident in the React ecosystem and ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://github.com/reactwg/server-components/discussions/5",
						children: "continued education"
					}),
					"."
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "Client Components" }),
					": With the recent conversation around Server Components, it's important to note the client components are ",
					(0, import_jsx_runtime.jsx)(_components.em, { children: "not" }),
					" a de-optimization. The client is a valid part of the React model and is not going away."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					"You can think of client components as the existing Next.js ecosystem today, where your favorite libraries and tools continue to work. For example, a common question we've seen is whether ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "\"use client\"" }),
					" needs to be added to every single file to make it a client component. This is not necessary, but we understand these concepts are new and will take time to learn. You only need to ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/getting-started/react-essentials#the-use-client-directive",
						children: "mark the top level boundary"
					}),
					" where you code moves between the server to the client. This architecture allows you to ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://github.com/reactwg/server-components/discussions/5",
						children: "interweave server and client components together"
					}),
					"."
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "Growing third-party ecosystem" }),
					": In addition to education, the ecosystem around React's newer features is still growing. For example, ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://panda-css.com/",
						children: "Panda CSS"
					}),
					", a CSS-in-JS library from the makers of Chakra UI, just announced support for React Server Components."
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "Server Actions (Alpha)" }),
					": ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/building-your-application/data-fetching/server-actions",
						children: "Server Actions"
					}),
					" enable server-side data mutations, reduced client-side JavaScript, and progressively enhanced forms. We do not recommend using Server Actions in production yet. We appreciate early feedback from alpha testers helping us shape the future of this feature."
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "thank-you",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#thank-you",
				children: "Thank you"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're thankful many of you have chosen to learn and build with Next.js." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Our focus on performance, stability, and developer experience will be reflected in the upcoming releases of Next.js. We want using Next.js to be delightful—and to make you (and your team) more productive." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As always, we greatly appreciate your feedback. If you are experiencing any issues with Next.js, please ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/issues/new/choose",
				children: "open an issue"
			}),
			", or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions",
				children: "start a new discussion"
			}),
			", and we will investigate."
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
export { toc as a, structuredData as i, frontmatter as n, june_2023_update_exports as r, MDXContent as t };
