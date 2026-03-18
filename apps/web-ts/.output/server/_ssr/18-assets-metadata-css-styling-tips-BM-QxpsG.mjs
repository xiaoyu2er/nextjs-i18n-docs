import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/18-assets-metadata-css-styling-tips-BM-QxpsG.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _18_assets_metadata_css_styling_tips_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Styling Tips",
	"image": "https://nextjs.org/api/learn-og?title=Styling%20Tips&amp;chapter=18",
	"headline": "Pages Router: Styling Tips"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Here are some styling tips that might be helpful."
		},
		{
			"heading": void 0,
			"content": "> You can just **read through** the following sections. No need to make changes to our app!"
		},
		{
			"heading": "using-clsx-library-to-toggle-classes",
			"content": "`clsx` is a simple library that lets you toggle class names easily. You can install it using `npm install clsx` or `yarn add clsx`."
		},
		{
			"heading": "using-clsx-library-to-toggle-classes",
			"content": "Please take a look at its documentation for more details, but here's the basic usage:"
		},
		{
			"heading": "using-clsx-library-to-toggle-classes",
			"content": "Suppose that you want to create an `Alert` component which accepts `type`, which can be `'success'` or `'error'`."
		},
		{
			"heading": "using-clsx-library-to-toggle-classes",
			"content": "If it's `'success'`, you want the text color to be green. If it's `'error'`, you want the text color to be red."
		},
		{
			"heading": "using-clsx-library-to-toggle-classes",
			"content": "You can first write a CSS module (e.g. `alert.module.css`) like this:"
		},
		{
			"heading": "using-clsx-library-to-toggle-classes",
			"content": "And use `clsx` like this:"
		},
		{
			"heading": "customizing-postcss-config",
			"content": "Out of the box, with no configuration, Next.js compiles CSS using PostCSS."
		},
		{
			"heading": "customizing-postcss-config",
			"content": "To customize PostCSS config, you can create a top-level file called `postcss.config.js`. This is useful if you're using libraries like Tailwind CSS."
		},
		{
			"heading": "customizing-postcss-config",
			"content": "Here are the steps to add Tailwind CSS. First, install the packages:"
		},
		{
			"heading": "customizing-postcss-config",
			"content": "Then, create a `postcss.config.js`:"
		},
		{
			"heading": "customizing-postcss-config",
			"content": "We also recommend configuring content sources by specifying the `content` option on `tailwind.config.js`:"
		},
		{
			"heading": "customizing-postcss-config",
			"content": "> To learn more about custom PostCSS configuration, check out the documentation for PostCSS."
		},
		{
			"heading": "customizing-postcss-config",
			"content": "> To easily get started with Tailwind CSS, check out our example."
		},
		{
			"heading": "using-sass",
			"content": "Out of the box, Next.js allows you to import Sass using both the `.scss` and `.sass` extensions. You can use component-level Sass via CSS Modules and the `.module.scss` or `.module.sass` extension."
		},
		{
			"heading": "using-sass",
			"content": "Before you can use Next.js' built-in Sass support, be sure to install `sass`:"
		},
		{
			"heading": "thats-it-for-this-lesson",
			"content": "To learn more about Next.js's built-in CSS Support and CSS Modules, check out the CSS Documentation."
		}
	],
	"headings": [
		{
			"id": "using-clsx-library-to-toggle-classes",
			"content": "Using `clsx` library to toggle classes"
		},
		{
			"id": "customizing-postcss-config",
			"content": "Customizing PostCSS Config"
		},
		{
			"id": "using-sass",
			"content": "Using Sass"
		},
		{
			"id": "thats-it-for-this-lesson",
			"content": "That's it for this lesson!"
		}
	]
};
var toc = [
	{
		depth: 3,
		url: "#using-clsx-library-to-toggle-classes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#using-clsx-library-to-toggle-classes",
			children: [
				"Using ",
				(0, import_jsx_runtime.jsx)("code", { children: "clsx" }),
				" library to toggle classes"
			]
		}) })
	},
	{
		depth: 3,
		url: "#customizing-postcss-config",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#customizing-postcss-config",
			children: "Customizing PostCSS Config"
		}) })
	},
	{
		depth: 3,
		url: "#using-sass",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#using-sass",
			children: "Using Sass"
		}) })
	},
	{
		depth: 3,
		url: "#thats-it-for-this-lesson",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#thats-it-for-this-lesson",
			children: "That's it for this lesson!"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Here are some styling tips that might be helpful." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"You can just ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "read through" }),
				" the following sections. No need to make changes to our app!"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "using-clsx-library-to-toggle-classes",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#using-clsx-library-to-toggle-classes",
				children: [
					"Using ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "clsx" }),
					" library to toggle classes"
				]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.npmjs.com/package/clsx",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "clsx" })
			}),
			" is a simple library that lets you toggle class names easily. You can install it using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "npm install clsx" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "yarn add clsx" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Please take a look at its ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/lukeed/clsx",
				children: "documentation"
			}),
			" for more details, but here's the basic usage:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Suppose that you want to create an ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Alert" }),
				" component which accepts ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "type" }),
				", which can be ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "'success'" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "'error'" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"If it's ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "'success'" }),
				", you want the text color to be green. If it's ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "'error'" }),
				", you want the text color to be red."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can first write a CSS module (e.g. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "alert.module.css" }),
			") like this:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: ".success {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  color: green;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: ".error {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  color: red;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"And use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "clsx" }),
			" like this:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import styles from './alert.module.css';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import { clsx } from 'clsx';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function Alert({ children, type }) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return (" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <div" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      className={clsx({" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        [styles.success]: type === 'success'," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        [styles.error]: type === 'error'," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      })}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    >" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      {children}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    </div>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  );" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "customizing-postcss-config",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#customizing-postcss-config",
				children: "Customizing PostCSS Config"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Out of the box, with no configuration, Next.js compiles CSS using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://postcss.org/",
				children: "PostCSS"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To customize PostCSS config, you can create a top-level file called ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/advanced-features/customizing-postcss-config#customizing-plugins",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "postcss.config.js" })
			}),
			". This is useful if you're using libraries like ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://tailwindcss.com/",
				children: "Tailwind CSS"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Here are the steps to add ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://tailwindcss.com/",
				children: "Tailwind CSS"
			}),
			". First, install the packages:"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "npm install -D tailwindcss autoprefixer postcss" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Then, create a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/advanced-features/customizing-postcss-config#customizing-plugins",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "postcss.config.js" })
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// postcss.config.js" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "module.exports = {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  plugins: {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    tailwindcss: {}," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    autoprefixer: {}," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  }," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "};" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We also recommend ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://tailwindcss.com/docs/content-configuration",
				children: "configuring content sources"
			}),
			" by specifying the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "content" }),
			" option on ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "tailwind.config.js" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// tailwind.config.js" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "module.exports = {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  content: [" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    './pages/**/*.{js,ts,jsx,tsx}'," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    './components/**/*.{js,ts,jsx,tsx}'," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    // For the best performance and to avoid false positives," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    // be as specific as possible with your content configuration." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  ]," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "};" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"To learn more about custom PostCSS configuration, check out the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/advanced-features/customizing-postcss-config",
					children: "documentation for PostCSS"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"To easily get started with Tailwind CSS, ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss",
					children: "check out our example"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "using-sass",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#using-sass",
				children: "Using Sass"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Out of the box, Next.js allows you to import ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/built-in-css-support#sass-support",
				children: "Sass"
			}),
			" using both the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".scss" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".sass" }),
			" extensions. You can use component-level Sass via ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/built-in-css-support#adding-component-level-css",
				children: "CSS Modules"
			}),
			" and the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".module.scss" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".module.sass" }),
			" extension."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Before you can use Next.js' built-in Sass support, be sure to install ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/sass/sass",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "sass" })
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "npm install -D sass" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "thats-it-for-this-lesson",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#thats-it-for-this-lesson",
				children: "That's it for this lesson!"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To learn more about Next.js's built-in CSS Support and CSS Modules, check out the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/built-in-css-support",
				children: "CSS Documentation"
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
export { toc as a, structuredData as i, _18_assets_metadata_css_styling_tips_exports as n, frontmatter as r, MDXContent as t };
