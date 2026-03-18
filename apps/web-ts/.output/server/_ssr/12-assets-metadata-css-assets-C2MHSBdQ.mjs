import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/12-assets-metadata-css-assets-C2MHSBdQ.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _12_assets_metadata_css_assets_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Assets",
	"image": "https://nextjs.org/api/learn-og?title=Assets&amp;chapter=12",
	"headline": "Pages Router: Assets"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js can serve **static assets**, like images, under **the top-level `public` directory**. Files inside `public` can be referenced from the root of the application similar to `pages`."
		},
		{
			"heading": void 0,
			"content": "The `public` directory is also useful for `robots.txt`, Google Site Verification, and any other static assets. Check out the documentation for Static File Serving to learn more."
		},
		{
			"heading": "download-your-profile-picture",
			"content": "First, let's retrieve your profile picture."
		},
		{
			"heading": "download-your-profile-picture",
			"content": "**Download** your profile picture in `.jpg` format (or use this file)."
		},
		{
			"heading": "download-your-profile-picture",
			"content": "Create an `images` directory inside of the `public` directory."
		},
		{
			"heading": "download-your-profile-picture",
			"content": "Save the picture as `profile.jpg` in the `public/images` directory."
		},
		{
			"heading": "download-your-profile-picture",
			"content": "The image size can be around 400px by 400px."
		},
		{
			"heading": "download-your-profile-picture",
			"content": "You may remove the unused SVG logo file directly under the `public` directory."
		},
		{
			"heading": "unoptimized-image",
			"content": "With regular HTML, you would add your profile picture as follows:"
		},
		{
			"heading": "unoptimized-image",
			"content": "However, this means you have to manually handle:"
		},
		{
			"heading": "unoptimized-image",
			"content": "Ensuring your image is responsive on different screen sizes"
		},
		{
			"heading": "unoptimized-image",
			"content": "Optimizing your images with a third-party tool or library"
		},
		{
			"heading": "unoptimized-image",
			"content": "Only loading images when they enter the viewport"
		},
		{
			"heading": "unoptimized-image",
			"content": "And more. Instead, Next.js provides an `Image` component out of the box to handle this for you."
		},
		{
			"heading": "image-component-and-image-optimization",
			"content": "`next/image` is an extension of the HTML `<img>` element, evolved for the modern web."
		},
		{
			"heading": "image-component-and-image-optimization",
			"content": "Next.js also has support for Image Optimization by default. This allows for resizing, optimizing, and serving images in modern formats like WebP when the browser supports it. This avoids shipping large images to devices with a smaller viewport. It also allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats."
		},
		{
			"heading": "image-component-and-image-optimization",
			"content": "Automatic Image Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized."
		},
		{
			"heading": "using-the-image-component",
			"content": "Instead of optimizing images at build time, Next.js optimizes images on-demand, as users request them. Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images."
		},
		{
			"heading": "using-the-image-component",
			"content": "Images are lazy loaded by default. That means your page speed isn't penalized for images outside the viewport. Images load as they are scrolled into viewport."
		},
		{
			"heading": "using-the-image-component",
			"content": "Images are always rendered in such a way as to avoid Cumulative Layout Shift, a Core Web Vital that Google is going to use in search ranking."
		},
		{
			"heading": "using-the-image-component",
			"content": "Here's an example using `next/image` to display our profile picture. The `height` and `width` props should be the desired rendering size, with an aspect ratio identical to the source image."
		},
		{
			"heading": "using-the-image-component",
			"content": "**Note:** We'll use this component later in \"Polishing Layout\", no need to copy it yet."
		},
		{
			"heading": "using-the-image-component",
			"content": "> To learn more about Automatic Image Optimization, check out the documentation.\n>\n> To learn more about the `Image` component, check out the API reference for `next/image`."
		}
	],
	"headings": [
		{
			"id": "download-your-profile-picture",
			"content": "Download Your Profile Picture"
		},
		{
			"id": "unoptimized-image",
			"content": "Unoptimized Image"
		},
		{
			"id": "image-component-and-image-optimization",
			"content": "Image Component and Image Optimization"
		},
		{
			"id": "using-the-image-component",
			"content": "Using the Image Component"
		}
	]
};
var toc = [
	{
		depth: 3,
		url: "#download-your-profile-picture",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#download-your-profile-picture",
			children: "Download Your Profile Picture"
		}) })
	},
	{
		depth: 3,
		url: "#unoptimized-image",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#unoptimized-image",
			children: "Unoptimized Image"
		}) })
	},
	{
		depth: 3,
		url: "#image-component-and-image-optimization",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#image-component-and-image-optimization",
			children: "Image Component and Image Optimization"
		}) })
	},
	{
		depth: 3,
		url: "#using-the-image-component",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#using-the-image-component",
			children: "Using the Image Component"
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js can serve ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "static assets" }),
			", like images, under ",
			(0, import_jsx_runtime.jsxs)(_components.strong, { children: ["the top-level ", (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/basic-features/static-file-serving",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "public" }), " directory"]
			})] }),
			". Files inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "public" }),
			" can be referenced from the root of the application similar to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/pages",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "pages" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "public" }),
			" directory is also useful for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "robots.txt" }),
			", Google Site Verification, and any other static assets. Check out the documentation for ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/basic-features/static-file-serving",
				children: "Static File Serving"
			}),
			" to learn more."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "download-your-profile-picture",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#download-your-profile-picture",
				children: "Download Your Profile Picture"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "First, let's retrieve your profile picture." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Download" }),
				" your profile picture in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".jpg" }),
				" format (or ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next-learn/blob/main/basics/basics-final/public/images/profile.jpg",
					children: "use this file"
				}),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Create an ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "images" }),
				" directory inside of the ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/basic-features/static-file-serving",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "public" }), " directory"]
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Save the picture as ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "profile.jpg" }),
				" in the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "public/images" }),
				" directory."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The image size can be around 400px by 400px." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"You may remove the unused SVG logo file directly under the ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/basic-features/static-file-serving",
					children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "public" }), " directory"]
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "unoptimized-image",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#unoptimized-image",
				children: "Unoptimized Image"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "With regular HTML, you would add your profile picture as follows:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<img src=\"/images/profile.jpg\" alt=\"Your Name\" />" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "However, this means you have to manually handle:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Ensuring your image is responsive on different screen sizes" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Optimizing your images with a third-party tool or library" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Only loading images when they enter the viewport" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"And more. Instead, Next.js provides an ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Image" }),
			" component out of the box to handle this for you."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "image-component-and-image-optimization",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#image-component-and-image-optimization",
				children: "Image Component and Image Optimization"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-reference/next/image",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" })
			}),
			" is an extension of the HTML ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<img>" }),
			" element, evolved for the modern web."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js also has support for Image Optimization by default. This allows for resizing, optimizing, and serving images in modern formats like ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/Media/Formats/Image_types#webp",
				children: "WebP"
			}),
			" when the browser supports it. This avoids shipping large images to devices with a smaller viewport. It also allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Automatic Image Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "using-the-image-component",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#using-the-image-component",
				children: "Using the Image Component"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Instead of optimizing images at build time, Next.js optimizes images on-demand, as users request them. Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Images are lazy loaded by default. That means your page speed isn't penalized for images outside the viewport. Images load as they are scrolled into viewport." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Images are always rendered in such a way as to avoid ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://web.dev/cls/",
				children: "Cumulative Layout Shift"
			}),
			", a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://web.dev/vitals/#core-web-vitals",
				children: "Core Web Vital"
			}),
			" that Google is going to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html",
				children: "use in search ranking"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Here's an example using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/api-reference/next/image",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" })
			}),
			" to display our profile picture. The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "height" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "width" }),
			" props should be the desired rendering size, with an aspect ratio identical to the source image."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }), " We'll use this component later in \"Polishing Layout\", no need to copy it yet."] }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import Image from 'next/image';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "const YourComponent = () => (" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  <Image" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    src=\"/images/profile.jpg\" // Route of the image file" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    height={144} // Desired size with correct aspect ratio" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    width={144} // Desired size with correct aspect ratio" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    alt=\"Your Name\"" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: ");" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"To learn more about Automatic Image Optimization, check out the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/image-optimization",
					children: "documentation"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"To learn more about the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Image" }),
				" component, check out the ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "/docs/api-reference/next/image",
					children: ["API reference for ", (0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" })]
				}),
				"."
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
export { toc as a, structuredData as i, _12_assets_metadata_css_assets_exports as n, frontmatter as r, MDXContent as t };
