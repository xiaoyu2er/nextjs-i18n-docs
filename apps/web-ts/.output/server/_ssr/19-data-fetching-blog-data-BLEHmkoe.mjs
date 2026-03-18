import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/19-data-fetching-blog-data-BLEHmkoe.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _19_data_fetching_blog_data_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Creating a simple blog architecture",
	"image": "https://nextjs.org/api/learn-og?title=Creating%20a%20simple%20blog%20architecture&amp;chapter=19",
	"headline": "Pages Router: Creating a simple blog architecture"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "The blog posts in our example will be stored as local markdown files in our application's directory (not fetched from an external data source), so we'll need to read the data from the file system."
		},
		{
			"heading": void 0,
			"content": "In this section, we'll go through the steps of creating a blog that reads markdown data from the file system."
		},
		{
			"heading": "creating-the-markdown-files",
			"content": "First, create a new top-level directory called &#x2A;*`posts`** (this is not the same as `pages/posts`) in your root folder. Inside `posts&#x60;, create two files: &#x2A;*`pre-rendering.md`*&#x2A; and &#x2A;*`ssg-ssr.md`**."
		},
		{
			"heading": "creating-the-markdown-files",
			"content": "Now, copy the following code to `posts/pre-rendering.md`:"
		},
		{
			"heading": "creating-the-markdown-files",
			"content": "Then, copy the following code to `posts/ssg-ssr.md`:"
		},
		{
			"heading": "creating-the-markdown-files",
			"content": "> You might have noticed that each markdown file has a metadata section at the top containing `title` and `date`. This is called YAML Front Matter, which can be parsed using a library called gray-matter."
		},
		{
			"heading": "installing-gray-matter",
			"content": "First, install gray-matter which lets us parse the metadata in each markdown file."
		},
		{
			"heading": "creating-the-utility-function-to-read-the-file-system",
			"content": "Next, we’ll create a utility function for parsing data from the file system. With this utility function, we’d like to:"
		},
		{
			"heading": "creating-the-utility-function-to-read-the-file-system",
			"content": "Parse each markdown file and get `title`, `date`, and file name (which will be used as `id` for the post URL)."
		},
		{
			"heading": "creating-the-utility-function-to-read-the-file-system",
			"content": "List the data on the index page, sorted by date."
		},
		{
			"heading": "creating-the-utility-function-to-read-the-file-system",
			"content": "Create a top-level directory called `lib` in the root directory. Then, inside `lib`, create a file called `posts.js`, and copy and paste this code:"
		},
		{
			"heading": "creating-the-utility-function-to-read-the-file-system",
			"content": "> **Note:**\n>\n> You don't need to understand what the code above is doing in order to learn Next.js, the function is to make the blog example functional. But if you'd like to learn more:\n>\n> * `fs` is a Node.js module that lets you read files from the file system.\n> * `path` is a Node.js module that lets you manipulate file paths.\n> * `matter` is a library that lets you parse the metadata in each markdown file.\n> * In Next.js, the `lib` folder does not have an assigned name like the `pages` folder, so you can name it anything. It's usually convention to use `lib` or `utils`."
		},
		{
			"heading": "fetching-the-blog-data",
			"content": "Now that the blog data is parsed, we need to add it to our index page (`pages/index.js`). We can do this with a Next.js data fetching method called `getStaticProps()`. In the next section, we'll learn how to implement `getStaticProps()`."
		},
		{
			"heading": "fetching-the-blog-data",
			"content": "Let’s do it on the next page!"
		}
	],
	"headings": [
		{
			"id": "creating-the-markdown-files",
			"content": "Creating the markdown files"
		},
		{
			"id": "installing-gray-matter",
			"content": "Installing gray-matter"
		},
		{
			"id": "creating-the-utility-function-to-read-the-file-system",
			"content": "Creating the utility function to read the file system"
		},
		{
			"id": "fetching-the-blog-data",
			"content": "Fetching the blog data"
		}
	]
};
var toc = [
	{
		depth: 3,
		url: "#creating-the-markdown-files",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#creating-the-markdown-files",
			children: "Creating the markdown files"
		}) })
	},
	{
		depth: 3,
		url: "#installing-gray-matter",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#installing-gray-matter",
			children: "Installing gray-matter"
		}) })
	},
	{
		depth: 3,
		url: "#creating-the-utility-function-to-read-the-file-system",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#creating-the-utility-function-to-read-the-file-system",
			children: "Creating the utility function to read the file system"
		}) })
	},
	{
		depth: 3,
		url: "#fetching-the-blog-data",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#fetching-the-blog-data",
			children: "Fetching the blog data"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The blog posts in our example will be stored as local markdown files in our application's directory (not fetched from an external data source), so we'll need to read the data from the file system." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In this section, we'll go through the steps of creating a blog that reads markdown data from the file system." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "creating-the-markdown-files",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#creating-the-markdown-files",
				children: "Creating the markdown files"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"First, create a new top-level directory called ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "posts" }) }),
			" (this is not the same as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/posts" }),
			") in your root folder. Inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "posts" }),
			", create two files: ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "pre-rendering.md" }) }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "ssg-ssr.md" }) }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Now, copy the following code to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "posts/pre-rendering.md" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "---" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "title: 'Two Forms of Pre-rendering'" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "date: '2020-01-01'" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "---" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a \"hybrid\" Next.js app by using Static Generation for most pages and using Server-side Rendering for others." })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Then, copy the following code to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "posts/ssg-ssr.md" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "---" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "title: 'When to Use Static Generation v.s. Server-side Rendering'" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "date: '2020-01-02'" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "---" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "You can use Static Generation for many types of pages, including:" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "- Marketing pages" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "- Blog posts" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "- E-commerce product listings" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "- Help and documentation" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "You should ask yourself: \"Can I pre-render this page **ahead** of a user's request?\" If the answer is yes, then you should choose Static Generation." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data." })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"You might have noticed that each markdown file has a metadata section at the top containing ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "title" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "date" }),
				". This is called YAML Front Matter, which can be parsed using a library called ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/jonschlinkert/gray-matter",
					children: "gray-matter"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "installing-gray-matter",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#installing-gray-matter",
				children: "Installing gray-matter"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"First, install ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/jonschlinkert/gray-matter",
				children: "gray-matter"
			}),
			" which lets us parse the metadata in each markdown file."
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "npm install gray-matter" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "creating-the-utility-function-to-read-the-file-system",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#creating-the-utility-function-to-read-the-file-system",
				children: "Creating the utility function to read the file system"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next, we’ll create a utility function for parsing data from the file system. With this utility function, we’d like to:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Parse each markdown file and get ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "title" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "date" }),
				", and file name (which will be used as ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "id" }),
				" for the post URL)."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "List the data on the index page, sorted by date." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Create a top-level directory called ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "lib" }),
			" in the root directory. Then, inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "lib" }),
			", create a file called ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "posts.js" }),
			", and copy and paste this code:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import fs from 'fs';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import path from 'path';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import matter from 'gray-matter';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "const postsDirectory = path.join(process.cwd(), 'posts');" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export function getSortedPostsData() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // Get file names under /posts" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const fileNames = fs.readdirSync(postsDirectory);" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const allPostsData = fileNames.map((fileName) => {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    // Remove \".md\" from file name to get id" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    const id = fileName.replace(/\\.md$/, '');" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    // Read markdown file as string" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    const fullPath = path.join(postsDirectory, fileName);" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    const fileContents = fs.readFileSync(fullPath, 'utf8');" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    // Use gray-matter to parse the post metadata section" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    const matterResult = matter(fileContents);" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    // Combine the data with the id" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    return {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      id," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      ...matterResult.data," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    };" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  });" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // Sort posts by date" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return allPostsData.sort((a, b) => {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    if (a.date < b.date) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      return 1;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    } else {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      return -1;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    }" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  });" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "You don't need to understand what the code above is doing in order to learn Next.js, the function is to make the blog example functional. But if you'd like to learn more:" }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nodejs.org/api/fs.html#fsreaddirsyncpath-options",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "fs" })
				}), " is a Node.js module that lets you read files from the file system."] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nodejs.org/api/path.html#pathjoinpaths",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "path" })
				}), " is a Node.js module that lets you manipulate file paths."] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://www.npmjs.com/package/gray-matter",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "matter" })
				}), " is a library that lets you parse the metadata in each markdown file."] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"In Next.js, the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "lib" }),
					" folder does not have an assigned name like the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
					" folder, so you can name it anything. It's usually convention to use ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "lib" }),
					" or ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "utils" }),
					"."
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "fetching-the-blog-data",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#fetching-the-blog-data",
				children: "Fetching the blog data"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Now that the blog data is parsed, we need to add it to our index page (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/index.js" }),
			"). We can do this with a Next.js data fetching method called ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/data-fetching#getstaticprops-static-generation",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps()" })
			}),
			". In the next section, we'll learn how to implement ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps()" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/data-fetching/index-page.png",
			alt: "Index Page"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Let’s do it on the next page!" })
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
export { toc as a, structuredData as i, _19_data_fetching_blog_data_exports as n, frontmatter as r, MDXContent as t };
