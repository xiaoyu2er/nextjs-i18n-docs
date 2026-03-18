import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/webpack-memory-DcuUu2Eo.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var webpack_memory_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 8 Webpack Memory Improvements",
	"description": "Recently Next.js 8 was introduced. The release included a massive build-time memory usage reduction. This blog post will explore how we have helped optimize webpack for the community.",
	"author": [{
		"name": "Connor Davis",
		"image": "/static/team/connor.jpg"
	}, {
		"name": "Tim Neutkens",
		"image": "/static/team/tim.jpg"
	}],
	"date": /* @__PURE__ */ new Date(15505848e5),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/webpack-memory/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Recently Next.js 8 was introduced. The release included a massive build-time memory usage reduction. This blog post will explore how we have helped optimize webpack for the community."
		},
		{
			"heading": void 0,
			"content": "Next.js is zero-configuration and is built on top of tools like webpack and Babel. Its goal is to help you focus on what’s important: your application code."
		},
		{
			"heading": void 0,
			"content": "Modern web applications consist of one or more pages. For example, a homepage, blog, dashboard, or product listing."
		},
		{
			"heading": void 0,
			"content": "With Next.js, these pages become files in a special `pages` directory in the root of your project."
		},
		{
			"heading": void 0,
			"content": "For example: the file `pages/about.js` maps to the URL `/about`."
		},
		{
			"heading": void 0,
			"content": "One of the key design constraints of the framework is that it has to work well for both a single page and thousands of pages."
		},
		{
			"heading": void 0,
			"content": "While implementing Serverless Next.js it quickly became apparent that running `next build` on a project with hundreds of pages caused high memory usage. Sometimes exceeding the approximately 1.4 GB memory heap limit that Node.js has."
		},
		{
			"heading": void 0,
			"content": "We started profiling memory usage of the build process using the Chrome developer tools."
		},
		{
			"heading": void 0,
			"content": "In the resulting profiles we discovered a point at which webpack would allocate a chunk of **548 MB** memory all at once."
		},
		{
			"heading": void 0,
			"content": "The amount of memory allocated directly correlated to the amount of pages, meaning more pages resulted in more memory usage."
		},
		{
			"heading": void 0,
			"content": "The Chrome Developer Tools memory profiler showed 548 MB being allocated at once"
		},
		{
			"heading": void 0,
			"content": "By going through the memory profile's stacktrace we were able to track down the function that caused the memory allocation spike."
		},
		{
			"heading": void 0,
			"content": "The allocation itself came from `source.source()` method being called which generates the resulting file and stores it into memory."
		},
		{
			"heading": void 0,
			"content": "However by looking further up the function that calls the `source()` method you can see that `compilation.assets` was being iterated over using `asyncLib.forEach`. Meaning that the provided function would be called for every file in the `compilation.assets` array at the same time."
		},
		{
			"heading": void 0,
			"content": "So this meant that if there are for example 100 pages, and each page has to be written to disk, above code would try to write all 100 at the same time, including generating all 100 files at the same time."
		},
		{
			"heading": void 0,
			"content": "The solution for this issue is using a semaphore to limit the amount of concurrent writes. Generally we use async-sema for this, but in this case webpack already had a suitable method available on neo-async:"
		},
		{
			"heading": void 0,
			"content": "> Previous code that ran the function concurrently for all assets"
		},
		{
			"heading": void 0,
			"content": "> New code that runs the function concurrently for a maximum of 15 at a time"
		},
		{
			"heading": void 0,
			"content": "After implementing this concurrency limit and profiling the build memory usage again. We could see the memory allocation being split into smaller pieces of **34 MB**."
		},
		{
			"heading": void 0,
			"content": "The profiler now showed chunks of 34 MB being allocated over time"
		},
		{
			"heading": void 0,
			"content": "This change showed very promising results, however in practice the build still ran out of memory, so we kept profiling and investigating the issue."
		},
		{
			"heading": void 0,
			"content": "By further inspecting the memory profile we noticed how after the `source.source()` method was called the memory did not get cleaned up afterwards (garbage collected)."
		},
		{
			"heading": void 0,
			"content": "In webpack assets are generally instances of Source classes. These classes all implement a `source()` method that will generate the file source."
		},
		{
			"heading": void 0,
			"content": "The profile showed that many assets were instances of `CachedSource`. The way `CachedSource` works is that when `source()` is called the result is cached in-memory until the asset is disposed."
		},
		{
			"heading": void 0,
			"content": "Inspecting the webpack plugins Next.js uses showed that we had no plugins that called `source()` after webpack had written the file, meaning that caching the written value had no benefit."
		},
		{
			"heading": void 0,
			"content": "After collaborating with Tobias Koppers he has implemented a new option called `output.futureEmitAssets` which allows opting-in to the new asset writing behavior."
		},
		{
			"heading": void 0,
			"content": "With this new behavior the chunks being allocated were reduced to &#x2A;**182 KB*** over time."
		},
		{
			"heading": void 0,
			"content": "After all optimizations the profiler shows chunks of 184 KB being allocated over time"
		},
		{
			"heading": void 0,
			"content": "Next.js 8 already has all these optimizations built-in. There is no need to change anything when using Next.js."
		},
		{
			"heading": void 0,
			"content": "This optimization was introduced on webpack, meaning not just Next.js users, but all webpack users will benefit from these optimizations."
		},
		{
			"heading": void 0,
			"content": "We will actively continue to improve Next.js and webpack memory usage and performance."
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		em: "em",
		img: "img",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Recently ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-8",
				children: "Next.js 8"
			}),
			" was introduced. The release included a massive build-time memory usage reduction. This blog post will explore how we have helped optimize webpack for the community."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js is zero-configuration and is built on top of tools like ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://webpack.js.org/",
				children: "webpack"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://babeljs.io",
				children: "Babel"
			}),
			". Its goal is to help you focus on what’s important: your application code."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Modern web applications consist of one or more pages. For example, a homepage, blog, dashboard, or product listing." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With Next.js, these pages become files in a special ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
			" directory in the root of your project."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example: the file ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/about.js" }),
			" maps to the URL ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/about" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "One of the key design constraints of the framework is that it has to work well for both a single page and thousands of pages." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"While implementing ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-8#serverless-nextjs",
				children: "Serverless Next.js"
			}),
			" it quickly became apparent that running ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			" on a project with hundreds of pages caused high memory usage. Sometimes exceeding the approximately 1.4 GB memory heap limit that Node.js has."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We started profiling memory usage of the build process using the Chrome developer tools." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In the resulting profiles we discovered a point at which webpack would allocate a chunk of ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "548 MB" }),
			" memory all at once."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The amount of memory allocated directly correlated to the amount of pages, meaning more pages resulted in more memory usage." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/webpack-memory/allocation-before.png",
			alt: "The Chrome Developer Tools memory profiler showed 548 MB being allocated at once"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Chrome Developer Tools memory profiler showed 548 MB being allocated at once" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "By going through the memory profile's stacktrace we were able to track down the function that caused the memory allocation spike." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The allocation itself came from ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://github.com/webpack/webpack/blob/v4.28.4/lib/Compiler.js#L334",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "source.source()" }), " method being called"]
			}),
			" which generates the resulting file and stores it into memory."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"However by looking further up the function that calls the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "source()" }),
			" method you can see that ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/webpack/webpack/blob/v4.28.4/lib/Compiler.js#L316",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "compilation.assets" })
			}),
			" was being iterated over using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "asyncLib.forEach" }),
			". Meaning that the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/webpack/webpack/blob/v4.28.4/lib/Compiler.js#L317",
				children: "provided function"
			}),
			" would be called for every file in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "compilation.assets" }),
			" array at the same time."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "So this meant that if there are for example 100 pages, and each page has to be written to disk, above code would try to write all 100 at the same time, including generating all 100 files at the same time." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The solution for this issue is using a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://en.wikipedia.org/wiki/Semaphore_(programming)",
				children: "semaphore"
			}),
			" to limit the amount of concurrent writes. Generally we use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/async-sema",
				children: "async-sema"
			}),
			" for this, but in this case webpack already had a suitable method available on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/webpack/webpack/blob/v4.28.4/lib/Compiler.js#L8",
				children: "neo-async"
			}),
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "asyncLib.forEach(compilation.assets, (source, file, callback) => {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // etc" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "});" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Previous code that ran the function concurrently for all assets" }),
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "asyncLib.forEachLimit(compilation.assets, 15, (source, file, callback) => {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // etc" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "});" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "New code that runs the function concurrently for a maximum of 15 at a time" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"After implementing this concurrency limit and profiling the build memory usage again. We could see the memory allocation being split into smaller pieces of ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "34 MB" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/webpack-memory/after-limiting.png",
			alt: "The profiler now showed chunks of 34 MB being allocated over time"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The profiler now showed chunks of 34 MB being allocated over time" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This change showed very promising results, however in practice the build still ran out of memory, so we kept profiling and investigating the issue." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"By further inspecting the memory profile we noticed how after the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://github.com/webpack/webpack/blob/v4.28.4/lib/Compiler.js#L334",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "source.source()" }), " method was called"]
			}),
			" the memory did not get cleaned up afterwards (garbage collected)."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In webpack assets are generally instances of ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/webpack/webpack-sources",
				children: "Source classes"
			}),
			". These classes all implement a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "source()" }),
			" method that will generate the file source."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The profile showed that many assets were instances of ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/webpack/webpack-sources#cachedsource",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "CachedSource" })
			}),
			". The way ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "CachedSource" }),
			" works is that when ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "source()" }),
			" is called the result is cached in-memory until the asset is disposed."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Inspecting the webpack plugins Next.js uses showed that we had no plugins that called ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "source()" }),
			" after webpack had written the file, meaning that caching the written value had no benefit."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"After ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/webpack/webpack/pull/8609",
				children: "collaborating"
			}),
			" with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://twitter.com/wSokra",
				children: "Tobias Koppers"
			}),
			" he has ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://github.com/webpack/webpack/pull/8642",
				children: ["implemented a new option called ", (0, import_jsx_runtime.jsx)(_components.code, { children: "output.futureEmitAssets" })]
			}),
			" which allows opting-in to the new asset writing behavior."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With this new behavior the chunks being allocated were reduced to ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.em, { children: "182 KB" }) }),
			" over time."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/webpack-memory/allocation-after.png",
			alt: "After all optimizations the profiler shows chunks of 184 KB being allocated over time"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "After all optimizations the profiler shows chunks of 184 KB being allocated over time" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "/blog/next-8",
			children: "Next.js 8"
		}), " already has all these optimizations built-in. There is no need to change anything when using Next.js."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This optimization was introduced on webpack, meaning not just Next.js users, but all webpack users will benefit from these optimizations." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We will actively continue to improve Next.js and webpack memory usage and performance." })
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
export { webpack_memory_exports as a, toc as i, frontmatter as n, structuredData as r, MDXContent as t };
