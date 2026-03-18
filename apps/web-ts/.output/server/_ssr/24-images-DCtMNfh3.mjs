import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/24-images-DCtMNfh3.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _24_images_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Automatic Image Optimization",
	"image": "https://nextjs.org/api/learn-og?title=Automatic%20Image%20Optimization&amp;chapter=24",
	"headline": "SEO: Automatic Image Optimization"
};
var structuredData = {
	"contents": [
		{
			"heading": "unoptimized-images",
			"content": "Using regular HTML, we have added our Hero image like so:"
		},
		{
			"heading": "unoptimized-images",
			"content": "However, this means we have to manually optimize a few things like:"
		},
		{
			"heading": "unoptimized-images",
			"content": "Ensuring our image is responsive on different screen sizes."
		},
		{
			"heading": "unoptimized-images",
			"content": "Optimizing our images with a third-party tool or library."
		},
		{
			"heading": "unoptimized-images",
			"content": "Lazy-loading images as they enter the viewport"
		},
		{
			"heading": "the-image-component",
			"content": "Next provides a Image component that can handle these optimizations out-of-the-box for us."
		},
		{
			"heading": "the-image-component",
			"content": "`next/image` is an extension of the HTML `img` element, evolved for the modern web."
		},
		{
			"heading": "the-image-component",
			"content": "This means that resizing, optimizing, and serving images in modern formats like WebP (when the browser supports it) can be done automatically using `next/image`."
		},
		{
			"heading": "the-image-component",
			"content": "The component avoids shipping large images to devices with a smaller viewport and allows Next.js to adopt future image formats and serve those images to browsers that support them."
		},
		{
			"heading": "the-image-component",
			"content": "Automatic Image Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized."
		},
		{
			"heading": "on-demand-optimization",
			"content": "Instead of optimizing images at build time, Next.js optimizes images on-demand as users request them. Unlike static site generators and static-only solutions, build times don't increase, whether shipping ten images or ten million images."
		},
		{
			"heading": "lazy-loaded-images",
			"content": "Images are lazy loaded by default. Page speed won't be penalized for images housed outside of the viewport. Images only load when they come into view."
		},
		{
			"heading": "avoids-cls",
			"content": "Images are always rendered to avoid Cumulative Layout Shift (CLS)."
		},
		{
			"heading": "using-the-image-component",
			"content": "Let's update the app using `next/image` to display our hero image. The height and width props should be the desired rendering size, with an aspect ratio identical to the source image."
		},
		{
			"heading": "using-the-image-component",
			"content": "Open the `pages/index.js` file and add an import for"
		},
		{
			"heading": "using-the-image-component",
			"content": "`Image` from `next/image` at the beginning of the file:"
		},
		{
			"heading": "using-the-image-component",
			"content": "Then, replace the hero `img` with the `Image` component:"
		},
		{
			"heading": "using-the-image-component",
			"content": "There's also an image in the footer. Let's replace this as well:"
		},
		{
			"heading": "using-the-image-component",
			"content": "Finally, run another Lighthouse report in Chrome DevTools and compare your results."
		},
		{
			"heading": "further-reading",
			"content": "Next.js: Automatic Image Optimization Documentation"
		},
		{
			"heading": "further-reading",
			"content": "Next.js: API Reference for `next/image`"
		}
	],
	"headings": [
		{
			"id": "unoptimized-images",
			"content": "Unoptimized Images"
		},
		{
			"id": "the-image-component",
			"content": "The Image Component"
		},
		{
			"id": "how-does-automatic-image-optimization-work",
			"content": "How does Automatic Image Optimization Work?"
		},
		{
			"id": "on-demand-optimization",
			"content": "On-demand Optimization"
		},
		{
			"id": "lazy-loaded-images",
			"content": "Lazy Loaded Images"
		},
		{
			"id": "avoids-cls",
			"content": "Avoids CLS"
		},
		{
			"id": "using-the-image-component",
			"content": "Using the Image Component"
		},
		{
			"id": "further-reading",
			"content": "Further Reading"
		}
	]
};
var toc = [
	{
		depth: 3,
		url: "#unoptimized-images",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#unoptimized-images",
			children: "Unoptimized Images"
		}) })
	},
	{
		depth: 3,
		url: "#the-image-component",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#the-image-component",
			children: "The Image Component"
		}) })
	},
	{
		depth: 3,
		url: "#how-does-automatic-image-optimization-work",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#how-does-automatic-image-optimization-work",
			children: "How does Automatic Image Optimization Work?"
		}) })
	},
	{
		depth: 4,
		url: "#on-demand-optimization",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#on-demand-optimization",
			children: "On-demand Optimization"
		}) })
	},
	{
		depth: 4,
		url: "#lazy-loaded-images",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#lazy-loaded-images",
			children: "Lazy Loaded Images"
		}) })
	},
	{
		depth: 4,
		url: "#avoids-cls",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#avoids-cls",
			children: "Avoids CLS"
		}) })
	},
	{
		depth: 3,
		url: "#using-the-image-component",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#using-the-image-component",
			children: "Using the Image Component"
		}) })
	},
	{
		depth: 3,
		url: "#further-reading",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#further-reading",
			children: "Further Reading"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h3: "h3",
		h4: "h4",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "unoptimized-images",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#unoptimized-images",
				children: "Unoptimized Images"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Using regular HTML, we have added our Hero image like so:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<img src=\"large-image.jpg\" alt=\"Large Image\" />" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "However, this means we have to manually optimize a few things like:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Ensuring our image is responsive on different screen sizes." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Optimizing our images with a third-party tool or library." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Lazy-loading images as they enter the viewport" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "the-image-component",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#the-image-component",
				children: "The Image Component"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next provides a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-reference/next/image",
				children: "Image component"
			}),
			" that can handle these optimizations out-of-the-box for us."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			" is an extension of the HTML ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "img" }),
			" element, evolved for the modern web."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This means that resizing, optimizing, and serving images in modern formats like WebP (when the browser supports it) can be done automatically using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The component avoids shipping large images to devices with a smaller viewport and allows Next.js to adopt future image formats and serve those images to browsers that support them." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Automatic Image Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "how-does-automatic-image-optimization-work",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#how-does-automatic-image-optimization-work",
				children: "How does Automatic Image Optimization Work?"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "on-demand-optimization",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#on-demand-optimization",
				children: "On-demand Optimization"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Instead of optimizing images at build time, Next.js optimizes images on-demand as users request them. Unlike static site generators and static-only solutions, build times don't increase, whether shipping ten images or ten million images." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "lazy-loaded-images",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#lazy-loaded-images",
				children: "Lazy Loaded Images"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Images are lazy loaded by default. Page speed won't be penalized for images housed outside of the viewport. Images only load when they come into view." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "avoids-cls",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#avoids-cls",
				children: "Avoids CLS"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Images are always rendered to avoid Cumulative Layout Shift (CLS)." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "using-the-image-component",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#using-the-image-component",
				children: "Using the Image Component"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Let's update the app using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			" to display our hero image. The height and width props should be the desired rendering size, with an aspect ratio identical to the source image."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Open the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/index.js" }),
			" file and add an import for"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Image" }),
			" from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			" at the beginning of the file:"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import Image from 'next/image';" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Then, replace the hero ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "img" }),
			" with the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Image" }),
			" component:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// Before" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<img src=\"large-image.jpg\" alt=\"Large Image\" />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// After" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<Image src=\"/large-image.jpg\" alt=\"Large Image\" width={3048} height={2024} />" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "There's also an image in the footer. Let's replace this as well:" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// Before" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<img src=\"/vercel.svg\" alt=\"Vercel Logo\" />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// After" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<Image src=\"/vercel.svg\" alt=\"Vercel Logo\" width={72} height={16} />" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Finally, run another Lighthouse report in Chrome DevTools and compare your results." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "further-reading",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#further-reading",
				children: "Further Reading"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Next.js: ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/image-optimization",
				children: "Automatic Image Optimization Documentation"
			})] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Next.js: ", (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/api-reference/next/image",
				children: ["API Reference for ", (0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" })]
			})] }),
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
export { toc as a, structuredData as i, _24_images_exports as n, frontmatter as r, MDXContent as t };
