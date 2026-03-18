import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/45-deploying-nextjs-app-platform-details-BYZVB3-G.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _45_deploying_nextjs_app_platform_details_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js and Vercel",
	"image": "https://nextjs.org/api/learn-og?title=Next.js%20and%20Vercel&amp;chapter=45",
	"headline": "Pages Router: Next.js and Vercel"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Vercel is made by the creators of Next.js and has first-class support for Next.js. When you deploy your Next.js app to Vercel, the following happens by default:"
		},
		{
			"heading": void 0,
			"content": "Pages that use Static Generation and assets (JS, CSS, images, fonts, etc) will automatically be served from the Vercel CDN, which is blazingly fast."
		},
		{
			"heading": void 0,
			"content": "Pages that use Server-Side Rendering and API routes will automatically become isolated Serverless Functions. This allows page rendering and API requests to scale infinitely."
		},
		{
			"heading": void 0,
			"content": "Vercel has many more features, such as:"
		},
		{
			"heading": void 0,
			"content": "**Custom Domains:** Once deployed on Vercel, you can assign a custom domain to your Next.js app. Take a look at our documentation here."
		},
		{
			"heading": void 0,
			"content": "**Environment Variables:** You can also set environment variables on Vercel. Take a look at our documentation here. You can then use those environment variables in your Next.js app."
		},
		{
			"heading": void 0,
			"content": "**Automatic HTTPS:** HTTPS is enabled by default (including custom domains) and doesn't require extra configuration. We auto-renew SSL certificates."
		},
		{
			"heading": void 0,
			"content": "You can learn more about the platform in the Vercel documentation."
		},
		{
			"heading": "preview-deployment-for-every-push",
			"content": "> The steps below are **optional** — you can try it or just read it through."
		},
		{
			"heading": "preview-deployment-for-every-push",
			"content": "After deploying to Vercel, try doing the following if you can:"
		},
		{
			"heading": "preview-deployment-for-every-push",
			"content": "Create a new **branch** on your app."
		},
		{
			"heading": "preview-deployment-for-every-push",
			"content": "Make some changes and push to GitHub."
		},
		{
			"heading": "preview-deployment-for-every-push",
			"content": "Create a new **pull request** (GitHub help page)."
		},
		{
			"heading": "preview-deployment-for-every-push",
			"content": "You should see a comment by the `vercel` bot on the pull request page."
		},
		{
			"heading": "preview-deployment-for-every-push",
			"content": "Try clicking on the **Preview** URL inside this comment. You should see the changes you just made."
		},
		{
			"heading": "preview-deployment-for-every-push",
			"content": "When you have a pull request open, Vercel automatically creates a **preview deployment** for that branch on every push. The preview URL will always point to the latest preview deployment."
		},
		{
			"heading": "preview-deployment-for-every-push",
			"content": "You can share this preview URL with your collaborators and get immediate feedback."
		},
		{
			"heading": "preview-deployment-for-every-push",
			"content": "If your preview deployment looks good, &#x2A;*merge it to `main`**. When you do this, Vercel automatically creates a production deployment."
		},
		{
			"heading": "develop-preview-ship",
			"content": "We’ve just gone through the workflow we call **DPS**: **D**evelop, **P**review, and **S**hip."
		},
		{
			"heading": "develop-preview-ship",
			"content": "**Develop**: We’ve written code in Next.js and used the Next.js development server running to take advantage of its hot reloading feature."
		},
		{
			"heading": "develop-preview-ship",
			"content": "**Preview**: We’ve pushed changes to a branch on GitHub, and Vercel created a preview deployment that’s available via a URL. We can share this preview URL with others for feedback. In addition to doing *code reviews*, you can do *deployment previews*."
		},
		{
			"heading": "develop-preview-ship",
			"content": "**Ship**: We’ve merged the pull request to `main` to ship to production."
		},
		{
			"heading": "develop-preview-ship",
			"content": "We strongly recommend using this workflow when developing Next.js apps — it will help you iterate on your app faster."
		}
	],
	"headings": [{
		"id": "preview-deployment-for-every-push",
		"content": "Preview Deployment for Every Push"
	}, {
		"id": "develop-preview-ship",
		"content": "Develop, Preview, Ship"
	}]
};
var toc = [{
	depth: 3,
	url: "#preview-deployment-for-every-push",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#preview-deployment-for-every-push",
		children: "Preview Deployment for Every Push"
	}) })
}, {
	depth: 3,
	url: "#develop-preview-ship",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
		href: "#develop-preview-ship",
		children: "Develop, Preview, Ship"
	}) })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		em: "em",
		h3: "h3",
		img: "img",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://vercel.com",
			children: "Vercel"
		}), " is made by the creators of Next.js and has first-class support for Next.js. When you deploy your Next.js app to Vercel, the following happens by default:"] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Pages that use ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/pages#static-generation-recommended",
					children: "Static Generation"
				}),
				" and assets (JS, CSS, images, fonts, etc) will automatically be served from the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://vercel.com",
					children: "Vercel CDN"
				}),
				", which is blazingly fast."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Pages that use ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/basic-features/pages#server-side-rendering",
					children: "Server-Side Rendering"
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/api-routes/introduction",
					children: "API routes"
				}),
				" will automatically become isolated ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://vercel.com/docs/serverless-functions/introduction",
					children: "Serverless Functions"
				}),
				". This allows page rendering and API requests to scale infinitely."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Vercel has many more features, such as:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "Custom Domains:" }),
					" Once deployed on Vercel, you can assign a custom domain to your Next.js app. Take a look at ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://vercel.com/docs/concepts/projects/custom-domains",
						children: "our documentation"
					}),
					" here."
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "Environment Variables:" }),
					" You can also set environment variables on Vercel. Take a look at ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://vercel.com/docs/build-step#environment-variables",
						children: "our documentation"
					}),
					" here. You can then ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/basic-features/environment-variables#loading-environment-variables",
						children: "use those environment variables"
					}),
					" in your Next.js app."
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Automatic HTTPS:" }), " HTTPS is enabled by default (including custom domains) and doesn't require extra configuration. We auto-renew SSL certificates."] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can learn more about the platform in the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/docs",
				children: "Vercel documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "preview-deployment-for-every-push",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#preview-deployment-for-every-push",
				children: "Preview Deployment for Every Push"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"The steps below are ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "optional" }),
				" — you can try it or just read it through."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "After deploying to Vercel, try doing the following if you can:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Create a new ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "branch" }),
				" on your app."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Make some changes and push to GitHub." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Create a new ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "pull request" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request",
					children: "GitHub help page"
				}),
				")."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You should see a comment by the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "vercel" }),
			" bot on the pull request page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/deploying-nextjs-app/vercel-bot.png",
			alt: "Preview Deployment URL"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Try clicking on the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Preview" }),
			" URL inside this comment. You should see the changes you just made."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When you have a pull request open, Vercel automatically creates a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "preview deployment" }),
			" for that branch on every push. The preview URL will always point to the latest preview deployment."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can share this preview URL with your collaborators and get immediate feedback." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If your preview deployment looks good, ",
			(0, import_jsx_runtime.jsxs)(_components.strong, { children: ["merge it to ", (0, import_jsx_runtime.jsx)(_components.code, { children: "main" })] }),
			". When you do this, Vercel automatically creates a production deployment."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "develop-preview-ship",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#develop-preview-ship",
				children: "Develop, Preview, Ship"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We’ve just gone through the workflow we call ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "DPS" }),
			": ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "D" }),
			"evelop, ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "P" }),
			"review, and ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "S" }),
			"hip."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Develop" }), ": We’ve written code in Next.js and used the Next.js development server running to take advantage of its hot reloading feature."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Preview" }),
				": We’ve pushed changes to a branch on GitHub, and Vercel created a preview deployment that’s available via a URL. We can share this preview URL with others for feedback. In addition to doing ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "code reviews" }),
				", you can do ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "deployment previews" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Ship" }),
				": We’ve merged the pull request to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "main" }),
				" to ship to production."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We strongly recommend using this workflow when developing Next.js apps — it will help you iterate on your app faster." })
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
export { toc as a, structuredData as i, _45_deploying_nextjs_app_platform_details_exports as n, frontmatter as r, MDXContent as t };
