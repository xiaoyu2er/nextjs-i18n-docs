import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-13-5-B-Xk9W9P.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_13_5_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 13.5",
	"description": "Next.js 13.5 includes 22% faster local server startup, 29% faster HMR (Fast Refresh), 40% less memory usage, and more.",
	"author": [
		{
			"name": "Jimmy Lai",
			"image": "/static/team/jimmy.jpg"
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
	"date": /* @__PURE__ */ new Date(1695146400507),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-13-5/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js 13.5 improves local dev performance and reliability with:"
		},
		{
			"heading": void 0,
			"content": "**22% faster local server startup:** Iterate faster with the App & Pages Router"
		},
		{
			"heading": void 0,
			"content": "**29% faster HMR (Fast Refresh):** For faster iterations when saving changes"
		},
		{
			"heading": void 0,
			"content": "**40% less memory usage:** Measured when running `next start`"
		},
		{
			"heading": void 0,
			"content": "**Optimized Package Imports:** Faster updates when using popular icon and component libraries"
		},
		{
			"heading": void 0,
			"content": "**`next/image` Improvements:** `<picture>`, art direction, and dark mode support"
		},
		{
			"heading": void 0,
			"content": "**And over 438 bugs patched!**"
		},
		{
			"heading": void 0,
			"content": "Upgrade today and register for Next.js Conf on Oct 26:"
		},
		{
			"heading": "improving-startup-and-fast-refresh-time",
			"content": "We're excited to see the continued adoption of the App Router, now **growing 80% MoM** when looking at the top 10 million origins crawled by the HTTP Archive."
		},
		{
			"heading": "improving-startup-and-fast-refresh-time",
			"content": "Since Next.js 13.4, our focus has been on improving performance and reliability for App Router applications. Comparing 13.4 to 13.5, we've seen the following improvements on a new application:"
		},
		{
			"heading": "improving-startup-and-fast-refresh-time",
			"content": "**22% faster** local server startup"
		},
		{
			"heading": "improving-startup-and-fast-refresh-time",
			"content": "**29% faster** HMR (Fast Refresh)"
		},
		{
			"heading": "improving-startup-and-fast-refresh-time",
			"content": "**40% less** memory usage"
		},
		{
			"heading": "improving-startup-and-fast-refresh-time",
			"content": "We were able to achieve this performance increase through optimizations like:"
		},
		{
			"heading": "improving-startup-and-fast-refresh-time",
			"content": "Doing less work by caching or minimizing slow operations"
		},
		{
			"heading": "improving-startup-and-fast-refresh-time",
			"content": "Optimizing expensive file system operations"
		},
		{
			"heading": "improving-startup-and-fast-refresh-time",
			"content": "Better incremental tree traversal during compilation"
		},
		{
			"heading": "improving-startup-and-fast-refresh-time",
			"content": "Moving unnecessary blocking synchronous calls to be lazy"
		},
		{
			"heading": "improving-startup-and-fast-refresh-time",
			"content": "Automatically configuring large icon libraries"
		},
		{
			"heading": "improving-startup-and-fast-refresh-time",
			"content": "Next.js user Lattice reported between 87-92% faster compilation in their testing."
		},
		{
			"heading": "improving-startup-and-fast-refresh-time",
			"content": "While we continue to iterate and improve our current bundler performance, we're also working on Turbopack (Beta) in parallel to further increase performance. With 13.5, `next dev --turbo` now supports more features."
		},
		{
			"heading": "optimized-package-imports",
			"content": "We've made an exciting breakthrough to optimize package imports, improving both local dev performance and production cold starts, when using large icon or component libraries or other dependencies that re-export hundreds or thousands of modules."
		},
		{
			"heading": "optimized-package-imports",
			"content": "Previously, we added support for `modularizeImports`, enabling you to configure how imports should resolve when using these libraries. In 13.5, we have superseeded this option with `optimizePackageImports`, which doesn't require you to specify the mapping of imports, but instead will automatically optimize imports for you."
		},
		{
			"heading": "optimized-package-imports",
			"content": "Libraries like `@mui/icons-material`, `@mui/material`, `date-fns`, `lodash`, `lodash-es`, `ramda`, `react-bootstrap`, `@headlessui/react` ,`@heroicons/react` , and `lucide-react` are now automatically optimized, only loading the modules you are actually using, while still giving you the convenience of writing `import` statements with many named exports."
		},
		{
			"heading": "optimized-package-imports",
			"content": "View the PR or learn more about `optimizePackageImports` in our documentation."
		},
		{
			"heading": "nextimage-improvements",
			"content": "Based on community feedback, we've added a new experimental function `unstable_getImgProps()` to support advanced use cases without using the `<Image>` component directly, including:"
		},
		{
			"heading": "nextimage-improvements",
			"content": "Working with `background-image` or `image-set`"
		},
		{
			"heading": "nextimage-improvements",
			"content": "Working with canvas `context.drawImage()` or `new Image()`"
		},
		{
			"heading": "nextimage-improvements",
			"content": "Working with `<picture>` media queries to implement Art Direction or Light/Dark Mode images"
		},
		{
			"heading": "nextimage-improvements",
			"content": "Additionally, the `placeholder` prop now supports providing arbitrary `data:image/` for placeholder images that shouldn't be blurred (demo)."
		},
		{
			"heading": "nextimage-improvements",
			"content": "Learn more about `next/image` in our documentation."
		},
		{
			"heading": "other-improvements",
			"content": "Since `13.4.0`, we've fixed over 438 bugs and made various improvements including:"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Docs]** New documentation on Forms and Mutations"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Docs]** New documentation on Server and Client Components"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Docs]** New documentation on Content Security Policy and Nonces"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Docs]** New documentation on Caching and Revalidating"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Feature]** `useParams` and `useSearchParams` from `next/navigation` now work in the Pages Router for incremental adoption"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Feature]** Support for `scroll: false` on `router.push` / `router.replace`"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Feature]** Support for `scroll={false}` on `next/link`"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Feature]** HTTPS support for development: `next dev --experimental-https`"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Feature]** Added support for `cookies().has()` (Docs)"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Feature]** Added support for IPv6 hostnames"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Feature]** Added support for Yarn PnP with the App Router"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Feature]** Added support for `redirect()` in Server Actions"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Feature]** Added support for using Bun with creating projects: `bunx create-next-app` (Docs)"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Feature]** Draft Mode support for use inside Middleware and the Edge Runtime"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Feature]** `cookies()` and `headers()` are now supported inside Middleware"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Feature]** Metadata API now supports `summary_large_image` in Twitter cards"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Feature]** `RedirectType` is now exported from `next/navigation`"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Feature]** Added experimental test mode for Playwright (Docs)"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Refactored `next start` to handle 1062% more requests/second"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Optimized Next.js internals to improve cold starts (up to 40% faster, tested on Vercel)"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Better Jest support for the App Router (PR)"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Redesigned `next dev` output (PR)"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Server Actions now work with fully static routes (including revalidating data with ISR)"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Server Actions no longer block navigation between routes"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Server Actions can no longer trigger multiple concurrent actions"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Server Actions calling `redirect()` now push into the history stack instead of replacing the current entry to ensure the back button works"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Server Actions add `no-cache, no-store` `cache-control` header to prevent browser caching"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Fixed a bug where Server Actions could be called twice after navigating"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Improved support for Emotion CSS with Server Components"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Support for `scroll-behavior: smooth` for hash url changes"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Added polyfill for `Array.prototype.at` in all browsers"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Fixed race condition in `next dev` cache when handling multiple parallel requests"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** `fetch` output in console now shows requests that skipped cache with `cache: SKIP`"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** `usePathname` now properly strips `basePath`"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** `next/image` now properly preloads images in App Router"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** `not-found` no longer renders the root layout twice"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** `NextRequest` can now be cloned (i.e `new NextRequest(request)`)"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** `app/children/page.tsx` now properly works for literal `/children` routes"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Content Security Policy now supports `nonce` for preinitialized scripts"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Using `redirect` from `next/navigation` now supports `basePath`"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Fixed `process.env` not being available during rendering in `output: 'standalone'` mode"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Improved error message when using a Static Export with unsupported features"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Improved recursive readdir implementation (\\~3x faster)"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Fixed `fallback: false` with dynamic route segments previously causing hanging requests"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Fixed error where `signal` was passed to revalidate requests, causing them to fail when the request was already aborted"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Removed `fetch` polling on 404 page in favor of websocket events, preventing unnecessary reloads when running `next dev`"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** `performance.measure` no longer can cause a hydration mismatch"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Fixed cases where an unexpected full reload could happen editing `pages/_app`"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** `ImageResponse` now extends `Response` for improved type checking (PR)"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** `pages` is no longer shown when there is no `pages` output in `next build`"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Fixed `skipTrailingSlashRedirect` being ignored in `<Link>`"
		},
		{
			"heading": "other-improvements",
			"content": "**\\[Improvement]** Fixed duplicated dynamic metadata routes in dev mode"
		},
		{
			"heading": "contributors",
			"content": "Next.js is the result of the combined work of over 2,800 individual developers, industry partners like Google and Meta, and our core team at Vercel. Join the community on GitHub Discussions, Reddit, and Discord."
		},
		{
			"heading": "contributors",
			"content": "This release was brought to you by:"
		},
		{
			"heading": "contributors",
			"content": "The **Next.js** team: Andrew, Balazs, Jiachi, Jimmy, JJ, Josh, Sebastian, Shu, Steven, Tim, Wyatt, and Zack."
		},
		{
			"heading": "contributors",
			"content": "The **Turbopack** team: Donny, Justin, Leah, Maia, OJ, Tobias, and Will."
		},
		{
			"heading": "contributors",
			"content": "And the contributions of: @opnay, @vinaykulk621, @goguda, @coreyleelarson, @bencmbrook, @cramforce, @williamli, @stefanprobst, @feugy, @Kikobeats, @dvoytenko, @MaxLeiter, @devjiwonchoi, @lacymorrow, @kylemcd, @tibi1220, @iamarpitpatidar, @pythagoras-yamamoto, @alexkirsz, @jsteele-stripe, @tknickman, @gaojude, @janicklas-ralph, @ericfennis, @JohnAdib, @MiLk, @delbaoliveira, @leerob, @LuudJanssen, @lucasconstantino, @davecarlson, @colinhacks, @jantimon, @Banbarashik, @ForsakenHarmony, @arturbien, @gnoff, @hsrvms, @DuCanhGH, @tim-hanssen, @Aryan9592, @rishabhpoddar, @Lantianyou, @joulev, @AkifumiSato, @trigaten, @HurSungYun, @DevLab2425, @SukkaW, @daniel-web-developer, @ky1ejs, @wyattjoh, @ShaunFerris, @syedtaqi95, @Heidar-An, @Jeffrey-Zutt, @Ryan-Dia, @steppefox, @hiro0218, @rjsdnql123, @fgiuliani, @steven-tey, @AntoineBourin, @adamrhunter, @darshanjain-entrepreneur, @s0h311, @djreillo, @dijonmusters, @cassidoo, @anonrig, @gfgabrielfranca, @Bitbbot, @BrennanColberg, @Nick-Mazuk, @thomasballinger, @lucgagan, @nroland013, @SonMooSans, @jenewland1999, @thorwebdev, @jyunhanlin, @Gnadhi, @yagogmaisp, @carlos-menezes, @ryo-manba, @vamcs, @matepapp, @SleeplessOne1917, @ecklf, @karlhorky, @starunaway, @FernandVEYRIER, @Terro216, @anthonyshew, @suhaotian, @simonswiss, @feikerwu, @lubakravche, @masnormen, @bottxiang, @mhmdrioaf, @tyler-lutz, @vincenthongzy, @yigithanyucedag, @doinki, @danger-ahead, @bre30kra69cs, @Yash-Singh1, @krmeda, @bigyanse, @2-NOW, @Mingyu-Song, @morganfeeney, @aralroca, @nickmccurdy, @adamjmcgrath, @angel1254mc, @cxa, @ibash, @mohanraj-r, @kevinmitch14, @iaurg, @steebchen, @Cow258, @charlesbdudley, @tyhopp, @Drblessing, @milovangudelj, @jacobsfletch, @JoshuaKGoldberg, @zignis, @ChristianIvicevic, @mrxbox98, @oliviertassinari, @fsansalvadore, @tvthatsme, @dvakatsiienko, @brunoeduardodev, @sonam-serchan, @vicsantizo, @leodr, @wiscaksono, @hustLer2k, @joshuabaker, @shozibabbas, @omarhoumz, @jamespearson, @tristndev, @AldeonMoriak, @manovotny, @mirismaili, @SuttonJack, @jeremydouglas, @JanCizmar, @mltsy, @WilderDev, @Guilleo03, @Willem-Jaap, @escwxyz, @wiredacorn, @Ethan-Arrowood, @BaffinLee, @greatSumini, @ciruz, @kijikunnn, @DustinsCode, @riqwan, @joostdecock, @nikolovlazar, @Bowens20832, @JohnAlbin, @gidgudgod, @maxproske, @dunklesToast, @yyuemii, @mPaella, @mknichel, @niko20, @mkcy3, @valentinpolitov, @smaeda-ks, @keyz, @Schniz, @koba04, @jiwooIncludeJeong, @ethanmick, @didemkkaslan, @itsmingjie, @v1k1, @thepatrick00, @taylorbryant, @kvnang, @alainkaiser, @simPod, @svarunid, @pauek, @lycuid, @MarkAtOmniux, @darshkpatel, @johnta0, @devagrawal09, @ibrahemid, @JesseKoldewijn, @javivelasco, @05lazy, @alexanderbluhm, @Fonger, @souporserious, @DevEsteves, @sanjaiyan-dev, @g12i, @cesarkohl, @josh, @li-jia-nan, @gabschne, @akd-io, @runjuu, @jocarrd, @nnnnoel, @ferdingler, and @ikryvorotenko"
		}
	],
	"headings": [
		{
			"id": "improving-startup-and-fast-refresh-time",
			"content": "Improving startup and Fast Refresh time"
		},
		{
			"id": "optimized-package-imports",
			"content": "Optimized Package Imports"
		},
		{
			"id": "nextimage-improvements",
			"content": "`next/image` Improvements"
		},
		{
			"id": "other-improvements",
			"content": "Other Improvements"
		},
		{
			"id": "contributors",
			"content": "Contributors"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#improving-startup-and-fast-refresh-time",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#improving-startup-and-fast-refresh-time",
			children: "Improving startup and Fast Refresh time"
		}) })
	},
	{
		depth: 2,
		url: "#optimized-package-imports",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#optimized-package-imports",
			children: "Optimized Package Imports"
		}) })
	},
	{
		depth: 2,
		url: "#nextimage-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#nextimage-improvements",
			children: [(0, import_jsx_runtime.jsx)("code", { children: "next/image" }), " Improvements"]
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
		url: "#contributors",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#contributors",
			children: "Contributors"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { Image } = _components;
	if (!Image) _missingMdxReference("Image", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js 13.5 improves local dev performance and reliability with:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improving-startup-and-fast-refresh-time",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "22% faster local server startup:" })
			}), " Iterate faster with the App & Pages Router"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improving-startup-and-fast-refresh-time",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "29% faster HMR (Fast Refresh):" })
			}), " For faster iterations when saving changes"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#improving-startup-and-fast-refresh-time",
					children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "40% less memory usage:" })
				}),
				" Measured when running ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#optimized-package-imports",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Optimized Package Imports:" })
			}), " Faster updates when using popular icon and component libraries"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#nextimage-improvements",
					children: (0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }), " Improvements:"] })
				}),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<picture>" }),
				", art direction, and dark mode support"
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#other-improvements",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "And over 438 bugs patched!" })
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Upgrade today and register for ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/conf",
				children: "Next.js Conf"
			}),
			" on Oct 26:"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "npm i next@latest react@latest react-dom@latest eslint-config-next@latest" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "improving-startup-and-fast-refresh-time",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improving-startup-and-fast-refresh-time",
				children: "Improving startup and Fast Refresh time"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We're excited to see the continued adoption of the App Router, now ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "growing 80% MoM" }),
			" when looking at the top 10 million origins crawled by the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://httparchive.org/",
				children: "HTTP Archive"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "2023 CRuX Dataset for Top 1 Million Mobile Sites on the Web",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-13-5/crux-light.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-13-5/crux.png",
			width: "1712",
			height: "788"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Since Next.js 13.4, our focus has been on improving performance and reliability for App Router applications. Comparing 13.4 to 13.5, we've seen the following improvements on a new application:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "22% faster" }), " local server startup"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "29% faster" }), " HMR (Fast Refresh)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "40% less" }), " memory usage"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We were able to achieve this performance increase through optimizations like:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Doing less work by caching or minimizing slow operations" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Optimizing expensive file system operations" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Better incremental tree traversal during compilation" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Moving unnecessary blocking synchronous calls to be lazy" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#optimized-package-imports",
				children: "Automatically configuring large icon libraries"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js user Lattice reported between ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/issues/48748#issuecomment-1638742497",
				children: "87-92% faster compilation"
			}),
			" in their testing."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"While we continue to iterate and improve our current bundler performance, we're also ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/api-reference/turbopack",
				children: "working on Turbopack (Beta)"
			}),
			" in parallel to further increase performance. With 13.5, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev --turbo" }),
			" now supports more features."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "optimized-package-imports",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#optimized-package-imports",
				children: "Optimized Package Imports"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've made an exciting breakthrough to optimize package imports, improving both local dev performance and production cold starts, when using large icon or component libraries or other dependencies that re-export hundreds or thousands of modules." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Previously, we added support for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "modularizeImports" }),
			", enabling you to configure how imports should resolve when using these libraries. In 13.5, we have superseeded this option with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "optimizePackageImports" }),
			", which doesn't require you to specify the mapping of imports, but instead will automatically optimize imports for you."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Libraries like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@mui/icons-material" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@mui/material" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "date-fns" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "lodash" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "lodash-es" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ramda" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "react-bootstrap" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@headlessui/react" }),
			" ,",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@heroicons/react" }),
			" , and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "lucide-react" }),
			" are now automatically optimized, only loading the modules you are actually using, while still giving you the convenience of writing ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "import" }),
			" statements with many named exports."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/pull/54695",
				children: "View the PR"
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/next-config-js/optimizePackageImports",
				children: "learn more"
			}),
			" about ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "optimizePackageImports" }),
			" in our documentation."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nextimage-improvements",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#nextimage-improvements",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }), " Improvements"]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Based on community feedback, we've added a new experimental function ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "unstable_getImgProps()" }),
			" to support advanced use cases without using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<Image>" }),
			" component directly, including:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Working with ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developer.mozilla.org/docs/Web/CSS/background-image",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "background-image" })
				}),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developer.mozilla.org/docs/Web/CSS/image/image-set",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "image-set" })
				})
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Working with canvas ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Using_images",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "context.drawImage()" })
				}),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "new Image()" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Working with ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developer.mozilla.org/docs/Web/HTML/Element/picture",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "<picture>" })
				}),
				" media queries to implement ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developer.mozilla.org/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#art_direction",
					children: "Art Direction"
				}),
				" or Light/Dark Mode images"
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import { unstable_getImgProps as getImgProps } from 'next/image';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function Page() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const common = { alt: 'Hero', width: 800, height: 400 };" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    props: { srcSet: dark }," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  } = getImgProps({ ...common, src: '/dark.png' });" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    props: { srcSet: light, ...rest }," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  } = getImgProps({ ...common, src: '/light.png' });" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return (" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <picture>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <source media=\"(prefers-color-scheme: dark)\" srcSet={dark} />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <source media=\"(prefers-color-scheme: light)\" srcSet={light} />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <img {...rest} />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    </picture>" })
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Additionally, the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "placeholder" }),
			" prop now supports providing arbitrary ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "data:image/" }),
			" for placeholder images that shouldn't be blurred (",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/blob/86d2ead1fe612432f7aee73f295a3753bd421ebe/examples/image-component/pages/shimmer.tsx#L30",
				children: "demo"
			}),
			")."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/optimizing/images",
				children: "Learn more"
			}),
			" about ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			" in our documentation."
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Since ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "13.4.0" }),
			", we've fixed over 438 bugs and made various improvements including:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Docs]" }),
				" New documentation on ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/data-fetching/forms-and-mutations",
					children: "Forms and Mutations"
				})
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Docs]" }),
				" New documentation on ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/rendering/server-components",
					children: "Server"
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/rendering/client-components",
					children: "Client Components"
				})
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Docs]" }),
				" New documentation on ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/configuring/content-security-policy",
					children: "Content Security Policy and Nonces"
				})
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Docs]" }),
				" New documentation on ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/caching",
					children: "Caching"
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating",
					children: "Revalidating"
				})
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "useParams" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "useSearchParams" }),
				" from ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/navigation" }),
				" now work in the Pages Router for incremental adoption"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" Support for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "scroll: false" }),
				" on ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "router.push" }),
				" / ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "router.replace" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" Support for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "scroll={false}" }),
				" on ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" HTTPS support for development: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev --experimental-https" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" Added support for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "cookies().has()" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/functions/cookies#cookieshasname",
					children: "Docs"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }), " Added support for IPv6 hostnames"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }), " Added support for Yarn PnP with the App Router"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" Added support for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "redirect()" }),
				" in Server Actions"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" Added support for using Bun with creating projects: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "bunx create-next-app" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/create-next-app",
					children: "Docs"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }), " Draft Mode support for use inside Middleware and the Edge Runtime"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "cookies()" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "headers()" }),
				" are now supported inside Middleware"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" Metadata API now supports ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "summary_large_image" }),
				" in Twitter cards"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "RedirectType" }),
				" is now exported from ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/navigation" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" Added experimental test mode for Playwright (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/blob/canary/packages/next/src/experimental/testmode/playwright/README.md",
					children: "Docs"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Refactored ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
				" to handle 1062% more requests/second"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }), " Optimized Next.js internals to improve cold starts (up to 40% faster, tested on Vercel)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Better Jest support for the App Router (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/54891",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Redesigned ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
				" output (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/54713",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }), " Server Actions now work with fully static routes (including revalidating data with ISR)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }), " Server Actions no longer block navigation between routes"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }), " Server Actions can no longer trigger multiple concurrent actions"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Server Actions calling ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "redirect()" }),
				" now push into the history stack instead of replacing the current entry to ensure the back button works"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Server Actions add ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "no-cache, no-store" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "cache-control" }),
				" header to prevent browser caching"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }), " Fixed a bug where Server Actions could be called twice after navigating"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }), " Improved support for Emotion CSS with Server Components"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Support for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "scroll-behavior: smooth" }),
				" for hash url changes"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Added polyfill for ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "http://array.prototype.at",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Array.prototype.at" })
				}),
				" in all browsers"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Fixed race condition in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
				" cache when handling multiple parallel requests"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
				" output in console now shows requests that skipped cache with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "cache: SKIP" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "usePathname" }),
				" now properly strips ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "basePath" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
				" now properly preloads images in App Router"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "not-found" }),
				" no longer renders the root layout twice"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NextRequest" }),
				" can now be cloned (i.e ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "new NextRequest(request)" }),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "app/children/page.tsx" }),
				" now properly works for literal ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/children" }),
				" routes"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Content Security Policy now supports ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "nonce" }),
				" for preinitialized scripts"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Using ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "redirect" }),
				" from ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/navigation" }),
				" now supports ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "basePath" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Fixed ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "process.env" }),
				" not being available during rendering in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "output: 'standalone'" }),
				" mode"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Improved error message when using a ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/deploying/static-exports",
					children: "Static Export"
				}),
				" with unsupported features"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }), " Improved recursive readdir implementation (~3x faster)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Fixed ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback: false" }),
				" with dynamic route segments previously causing hanging requests"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Fixed error where ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "signal" }),
				" was passed to revalidate requests, causing them to fail when the request was already aborted"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Removed ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
				" polling on 404 page in favor of websocket events, preventing unnecessary reloads when running ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "performance.measure" }),
				" no longer can cause a hydration mismatch"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Fixed cases where an unexpected full reload could happen editing ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/_app" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "ImageResponse" }),
				" now extends ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Response" }),
				" for improved type checking (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/55187",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
				" is no longer shown when there is no ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
				" output in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Fixed ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "skipTrailingSlashRedirect" }),
				" being ignored in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<Link>" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }), " Fixed duplicated dynamic metadata routes in dev mode"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "contributors",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#contributors",
				children: "Contributors"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js is the result of the combined work of over 2,800 individual developers, industry partners like Google and Meta, and our core team at Vercel. Join the community on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions",
				children: "GitHub Discussions"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.reddit.com/r/nextjs/",
				children: "Reddit"
			}),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/discord",
				children: "Discord"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This release was brought to you by:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Next.js" }),
				" team: ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/acdlite",
					children: "Andrew"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/balazsorban44",
					children: "Balazs"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/huozhi",
					children: "Jiachi"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/feedthejim",
					children: "Jimmy"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/ijjk",
					children: "JJ"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/gnoff",
					children: "Josh"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/sebmarkbage",
					children: "Sebastian"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/shuding",
					children: "Shu"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/styfle",
					children: "Steven"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/timneutkens",
					children: "Tim"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/wyattjoh",
					children: "Wyatt"
				}),
				", and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/ztanner",
					children: "Zack"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Turbopack" }),
				" team: ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/kdy1",
					children: "Donny"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/jridgewell",
					children: "Justin"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/forsakenharmony",
					children: "Leah"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/padmaia",
					children: "Maia"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/kwonoj",
					children: "OJ"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/sokra",
					children: "Tobias"
				}),
				", and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/wbinnssmith",
					children: "Will"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "And the contributions of: @opnay, @vinaykulk621, @goguda, @coreyleelarson, @bencmbrook, @cramforce, @williamli, @stefanprobst, @feugy, @Kikobeats, @dvoytenko, @MaxLeiter, @devjiwonchoi, @lacymorrow, @kylemcd, @tibi1220, @iamarpitpatidar, @pythagoras-yamamoto, @alexkirsz, @jsteele-stripe, @tknickman, @gaojude, @janicklas-ralph, @ericfennis, @JohnAdib, @MiLk, @delbaoliveira, @leerob, @LuudJanssen, @lucasconstantino, @davecarlson, @colinhacks, @jantimon, @Banbarashik, @ForsakenHarmony, @arturbien, @gnoff, @hsrvms, @DuCanhGH, @tim-hanssen, @Aryan9592, @rishabhpoddar, @Lantianyou, @joulev, @AkifumiSato, @trigaten, @HurSungYun, @DevLab2425, @SukkaW, @daniel-web-developer, @ky1ejs, @wyattjoh, @ShaunFerris, @syedtaqi95, @Heidar-An, @Jeffrey-Zutt, @Ryan-Dia, @steppefox, @hiro0218, @rjsdnql123, @fgiuliani, @steven-tey, @AntoineBourin, @adamrhunter, @darshanjain-entrepreneur, @s0h311, @djreillo, @dijonmusters, @cassidoo, @anonrig, @gfgabrielfranca, @Bitbbot, @BrennanColberg, @Nick-Mazuk, @thomasballinger, @lucgagan, @nroland013, @SonMooSans, @jenewland1999, @thorwebdev, @jyunhanlin, @Gnadhi, @yagogmaisp, @carlos-menezes, @ryo-manba, @vamcs, @matepapp, @SleeplessOne1917, @ecklf, @karlhorky, @starunaway, @FernandVEYRIER, @Terro216, @anthonyshew, @suhaotian, @simonswiss, @feikerwu, @lubakravche, @masnormen, @bottxiang, @mhmdrioaf, @tyler-lutz, @vincenthongzy, @yigithanyucedag, @doinki, @danger-ahead, @bre30kra69cs, @Yash-Singh1, @krmeda, @bigyanse, @2-NOW, @Mingyu-Song, @morganfeeney, @aralroca, @nickmccurdy, @adamjmcgrath, @angel1254mc, @cxa, @ibash, @mohanraj-r, @kevinmitch14, @iaurg, @steebchen, @Cow258, @charlesbdudley, @tyhopp, @Drblessing, @milovangudelj, @jacobsfletch, @JoshuaKGoldberg, @zignis, @ChristianIvicevic, @mrxbox98, @oliviertassinari, @fsansalvadore, @tvthatsme, @dvakatsiienko, @brunoeduardodev, @sonam-serchan, @vicsantizo, @leodr, @wiscaksono, @hustLer2k, @joshuabaker, @shozibabbas, @omarhoumz, @jamespearson, @tristndev, @AldeonMoriak, @manovotny, @mirismaili, @SuttonJack, @jeremydouglas, @JanCizmar, @mltsy, @WilderDev, @Guilleo03, @Willem-Jaap, @escwxyz, @wiredacorn, @Ethan-Arrowood, @BaffinLee, @greatSumini, @ciruz, @kijikunnn, @DustinsCode, @riqwan, @joostdecock, @nikolovlazar, @Bowens20832, @JohnAlbin, @gidgudgod, @maxproske, @dunklesToast, @yyuemii, @mPaella, @mknichel, @niko20, @mkcy3, @valentinpolitov, @smaeda-ks, @keyz, @Schniz, @koba04, @jiwooIncludeJeong, @ethanmick, @didemkkaslan, @itsmingjie, @v1k1, @thepatrick00, @taylorbryant, @kvnang, @alainkaiser, @simPod, @svarunid, @pauek, @lycuid, @MarkAtOmniux, @darshkpatel, @johnta0, @devagrawal09, @ibrahemid, @JesseKoldewijn, @javivelasco, @05lazy, @alexanderbluhm, @Fonger, @souporserious, @DevEsteves, @sanjaiyan-dev, @g12i, @cesarkohl, @josh, @li-jia-nan, @gabschne, @akd-io, @runjuu, @jocarrd, @nnnnoel, @ferdingler, and @ikryvorotenko" })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { toc as a, structuredData as i, frontmatter as n, next_13_5_exports as r, MDXContent as t };
