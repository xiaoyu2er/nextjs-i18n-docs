import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-10-1-Caf5saav.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_10_1_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 10.1",
	"description": "Next.js 10.1 introduces 3x faster refresh, 58% smaller install size, 56% less dependencies, WebAssembly Image Optimization, improved next/image support, and more!",
	"author": [
		{
			"name": "Belén Curcio",
			"image": "/static/team/bel.png"
		},
		{
			"name": "JJ Kasper",
			"image": "/static/team/jj.jpg"
		},
		{
			"name": "Joe Haddad",
			"image": "/static/team/timer.jpg"
		},
		{
			"name": "Lee Robinson",
			"image": "/static/team/lee.jpg"
		},
		{
			"name": "Luis Alvarez",
			"image": "/static/team/lfades.jpg"
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
		}
	],
	"date": /* @__PURE__ */ new Date(1617026400507),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-10-1/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "We are excited to introduce Next.js 10.1, featuring:"
		},
		{
			"heading": void 0,
			"content": "**3x Faster Refresh**: 200ms faster refresh with no changes necessary."
		},
		{
			"heading": void 0,
			"content": "**Improved Installation Time**: 58% smaller install size and 56% fewer dependencies."
		},
		{
			"heading": void 0,
			"content": "**`next/image` Improvements**: Apple Silicon (M1) Support, plus more layout and loader options."
		},
		{
			"heading": void 0,
			"content": "**Next.js Commerce Shopify Integration**: Flexible data layer for composable e-commerce apps."
		},
		{
			"heading": void 0,
			"content": "**Custom 500 Page**: Add your own logo and branding to error pages."
		},
		{
			"heading": void 0,
			"content": "**Strict PostCSS Configuration Loading**: Improved caching with Webpack 5."
		},
		{
			"heading": void 0,
			"content": "**Support for `extends` in `tsconfig.json`**: Extensible configuration for large TypeScript apps."
		},
		{
			"heading": void 0,
			"content": "**Detect When Preview Mode Is Enabled**: Conditionally show content when viewing previews."
		},
		{
			"heading": void 0,
			"content": "**Router Methods Scroll to Top**: Automatically scroll to the top, now consistent for all routing."
		},
		{
			"heading": void 0,
			"content": "**Documentation Improvements**: Incremental adoption, migration, and Docker deployment."
		},
		{
			"heading": "3x-faster-refresh",
			"content": "Starting with v9.4, Next.js brought Facebook's Fast Refresh into open-source for instantaneous feedback on edits made to your React components."
		},
		{
			"heading": "3x-faster-refresh",
			"content": "This means Next.js only updates code in the file you edited, and only re-renders that component, without losing component state. This includes styles (inline, CSS-in-JS, or CSS/Sass Modules), markup, event handlers, and effects (via `useEffect`)."
		},
		{
			"heading": "3x-faster-refresh",
			"content": "Today, we're making it **200ms faster** on every edit **without any code changes on your side**. On average, this makes Fast Refresh 3x faster."
		},
		{
			"heading": "3x-faster-refresh",
			"content": "Want even faster performance and better build times? Opt-in to Webpack 5 today with a new `future` flag.This flag is a release candidate (RC) and Webpack 5 will become the default soon. After you've enabled this flag, please share any feedback with us."
		},
		{
			"heading": "3x-faster-refresh",
			"content": "To learn more about how Webpack 5 is being rolled out to your application in a backward-compatible way, check out the documentation."
		},
		{
			"heading": "improved-installation-time",
			"content": "We've optimized Next.js' dependency graph to decrease install time and dependency size. It's now faster than ever to create a Next.js project, both locally and in your CI/CD process."
		},
		{
			"heading": "improved-installation-time",
			"content": "10.0"
		},
		{
			"heading": "improved-installation-time",
			"content": "10.1"
		},
		{
			"heading": "improved-installation-time",
			"content": "delta"
		},
		{
			"heading": "improved-installation-time",
			"content": "Average installation time"
		},
		{
			"heading": "improved-installation-time",
			"content": "\\~15s"
		},
		{
			"heading": "improved-installation-time",
			"content": "\\~5s"
		},
		{
			"heading": "improved-installation-time",
			"content": "3.0x faster"
		},
		{
			"heading": "improved-installation-time",
			"content": "Installation size"
		},
		{
			"heading": "improved-installation-time",
			"content": "96.5MB"
		},
		{
			"heading": "improved-installation-time",
			"content": "39.9MB"
		},
		{
			"heading": "improved-installation-time",
			"content": "58% smaller"
		},
		{
			"heading": "improved-installation-time",
			"content": "Number of dependencies"
		},
		{
			"heading": "improved-installation-time",
			"content": "424"
		},
		{
			"heading": "improved-installation-time",
			"content": "187"
		},
		{
			"heading": "improved-installation-time",
			"content": "56% smaller"
		},
		{
			"heading": "improved-installation-time",
			"content": "As part of our goal to optimize dependencies, we also updated and/or replaced npm packages that were marked as deprecated by their authors – even when they were deeply nested in the dependency tree. A fresh install of Next.js 10.1 will now result in no package warnings."
		},
		{
			"heading": "apple-silicon-support",
			"content": "When Next.js 10 was released, Image Optimization was powered by a native dependency. This led to a slower installation time, with native dependencies consuming 50% of Next.js' total install size. Further, this removes post-install running scripts and causing on-demand compilation."
		},
		{
			"heading": "apple-silicon-support",
			"content": "We're excited to share Automatic Image Optimization through `next/image` is now powered by WebAssembly. This optimization works out of the box using `next dev` and `next start`. By using WASM, we've reduced install size by \\~30MB and **added support for Apple Silicon M1 MacBooks**."
		},
		{
			"heading": "apple-silicon-support",
			"content": "We're continuing to improve our WebAssembly performance by taking advantage of SIMD extensions and multi-threading."
		},
		{
			"heading": "additional-layouts",
			"content": "Based on your feedback, we've added a variety of new layouts and options for `next/image`:"
		},
		{
			"heading": "additional-layouts",
			"content": "`layout=fill`: You don't need to provide `width` and `height`. (Demo)"
		},
		{
			"heading": "additional-layouts",
			"content": "`layout=fixed`: Native `img` behavior. (Demo)"
		},
		{
			"heading": "additional-layouts",
			"content": "`layout=responsive`: Flexible width with fixed aspect ratio. (Demo)"
		},
		{
			"heading": "additional-layouts",
			"content": "`layout=intrinsic`: Won't grow, but can shrink with fixed aspect ratio. (Demo)"
		},
		{
			"heading": "additional-layouts",
			"content": "`objectFit=cover`: Background images. (Demo)"
		},
		{
			"heading": "additional-layouts",
			"content": "For more information, check out the `layout` documentation."
		},
		{
			"heading": "improved-image-optimization-support",
			"content": "We've expanded on the built-in image loaders for `next/image` with the ability to add any custom loader. By using the new `loader` prop, you can **optimize images with any provider or CDN**."
		},
		{
			"heading": "improved-image-optimization-support",
			"content": "For more information, check out the `next/image` documentation."
		},
		{
			"heading": "nextjs-commerce-shopify-integration",
			"content": "E-commerce is one of the fastest-growing industries adopting Next.js. Companies like Apple, Wal-Mart, McDonald's, and Nike trust Next.js."
		},
		{
			"heading": "nextjs-commerce-shopify-integration",
			"content": "We wanted to give you a high-performance starting point for building e-commerce applications, so we released Next.js Commerce. After thousands of requests for Shopify, we've updated Next.js Commerce with a **provider-agnostic UI** — enabling you to bring any headless e-commerce solution of your choice."
		},
		{
			"heading": "nextjs-commerce-shopify-integration",
			"content": "Switching between providers is a single-line change in your configuration. We've also created a Features API, allowing you to toggle functionality based on your use case – all while retaining best-in-class performance."
		},
		{
			"heading": "nextjs-commerce-shopify-integration",
			"content": "Lighthouse metrics for Next.js Commerce around the globe."
		},
		{
			"heading": "nextjs-commerce-shopify-integration",
			"content": "With a few clicks, Next.js developers can clone, deploy, and fully customize their own e-commerce store. Learn more at nextjs.org/commerce and try out our Shopify Demo. Support for more commerce providers is coming soon."
		},
		{
			"heading": "custom-500-page",
			"content": "You can now create a custom `pages/500.js` to add your own logo and branding when displaying errors. Similar to `pages/404.js`, this file is statically generated at build time."
		},
		{
			"heading": "strict-postcss-configuration-loading",
			"content": "If you're using PostCSS and Webpack 5, you can improve performance (through caching) with a new `future` flag."
		},
		{
			"heading": "strict-postcss-configuration-loading",
			"content": "Try it out today and let us know your feedback. For more information, check out the PostCSS Config documentation."
		},
		{
			"heading": "support-for-extends-in-tsconfigjson",
			"content": "You can now use `extends` in the `tsconfig.json` used by Next.js to extend from a different `tsconfig.json` in your project. For example, you can extend from a `tsconfig.base.json` in your project as follows:"
		},
		{
			"heading": "support-for-extends-in-tsconfigjson",
			"content": "For more information, check out the TypeScript documentation."
		},
		{
			"heading": "detect-when-preview-mode-is-enabled",
			"content": "You can now detect when Preview Mode is enabled, allowing you to render certain components only for editors."
		},
		{
			"heading": "detect-when-preview-mode-is-enabled",
			"content": "For more information, check out the Preview Mode documentation."
		},
		{
			"heading": "router-methods-scroll-to-top",
			"content": "When navigating using `next/link`, Next.js will automatically scroll to the top. With Next.js 10.1 `router.push` and `router.replace` will also automatically scroll to the top to match the `next/link` behavior. You can opt-out of the automatic scrolling using the `scroll` option."
		},
		{
			"heading": "router-methods-scroll-to-top",
			"content": "For more information, check out the `next/router` documentation."
		},
		{
			"heading": "documentation-improvements",
			"content": "We've also added a variety of new guides, resources, and documentation, including:"
		},
		{
			"heading": "documentation-improvements",
			"content": "Incrementally Adopting Next.js"
		},
		{
			"heading": "documentation-improvements",
			"content": "Migrating from Gatsby"
		},
		{
			"heading": "documentation-improvements",
			"content": "Migrating from Create React App"
		},
		{
			"heading": "documentation-improvements",
			"content": "Migrating from React Router"
		},
		{
			"heading": "documentation-improvements",
			"content": "Authentication"
		},
		{
			"heading": "documentation-improvements",
			"content": "Deploying with Docker"
		},
		{
			"heading": "community",
			"content": "We're excited to see the continued growth in Next.js adoption:"
		},
		{
			"heading": "community",
			"content": "We have had over **1,540** independent contributors, with over **240** new contributors since the 10.0 release"
		},
		{
			"heading": "community",
			"content": "On GitHub, the project has been starred over **64,950** times."
		},
		{
			"heading": "community",
			"content": "Join the Next.js community on GitHub Discussions. Discussions is a community space that allows you to connect with other Next.js users and freely ask questions or share your work. You can also join the official Next.js Discord."
		},
		{
			"heading": "credits",
			"content": "We are thankful to our community, including all the external feedback and contributions that helped shape this release."
		},
		{
			"heading": "credits",
			"content": "This release was brought to you by the contributions of: @shuding, @edazpotato, @laithyounes, @ijjk, @harshitsan, @selrond, @sromexs, @melono6, @timneutkens, @madou, @mottox2, @leerob, @divmain, @nblthree, @KennethKinLum, @KarthikeyanRanasthala, @alex-safian, @rishabhpoddar, @daviavmello, @jpalmieri, @merceyz, @Segolene-Alquier, @michrome, @janicklas-ralph, @Parnswir, @giraffesyo, @balazsorban44, @Cicada95, @vzaidman, @deniseyu, @eltociear, @unimprobable, @getspooky, @Timer, @armand1m, @alexknipfer, @elitan, @atcastle, @noahfschr, @amille44420, @laanayam333, @spidgorny, @devuxer, @Janpot, @nickbabcock, @rsipakov, @NkxxkN, @dominicfraser, @alevosia, @Kerumen, @CMeeg, @Pomaio, @tim-hanssen, @lachlanjc, @lebreRafael, @AryanBeezadhur, @guybedford, @petecorreia, @kaznak, @sam3d, @fwuensche, @rafaellaurindo, @sphilee, @styxlab, @rexxars, @smitbarmase, @maerzhase, @matamatanot, @lucleray, @jeremybalog, @tarunama, @zainfathoni, @destumme, @VictorAssis, @bhbs, @ciruz, @simnalamburt, @Almad, @frol, @ludofischer, @elliottsj, @Baheya, @Lalit2005, @vldmrkl, @AriFreyr, @kaykdm, @Sharcoux, @ramasilveyra, @devknoll, @botv, @pkellner, @sumanthratna, @sokra, @lfades, @thorwebdev, @berndartmueller, @davidspiessens, @ShashiSrinath, @elsigh, @MMT-LD, @hankandre, @maxnowack, @kmjennison, @darshkpatel, @mohsen1, @DylanRJohnston, @calmonr, @imrobinized, @justintemps, @ncarchedi, @btk, @faizanv, @chulkilee, @ryan-lustre, @dfelber, @Ymirke, @Robogeek95, @mcha-dev, @youngvform, @andrehsu, @Simply007, @rokobekavac0, @ja0n, @mattruby, @xom9ikk, @niko20, @LauraBeatris, @armspkt, @xiaooye, @sungpro, @awareness481, @joebernard, @jensmeindertsma, @donavon, @DaneTheory, @Zertz, @danielyefet, @lfender6445, @tajo, @jorrit, @tvler, @mustafaKamal-fe, @prateekbh, @gregrickaby, @enochndika, @zimv, @lharries, @JstnEdr, @zbialecki, @fredmontet, @leo, @kachkaev, @mongolyy, @justinphilpott, @mjr, @fireairforce, @jvarho, @gr-qft, @thomaswang, @c316, @benbender, @michael, @damusnet, @farhankk360, @smaktacular, @webda2l, @chibicode, @bar7b, @SiTaggart, @lolobosse, @jamesgeorge007, @nikosantis, @mikan3rd, @oshdev, @UnbearableBear, @tunesmith, @jamsinclair, @ivandotv, @Arthie, @louison, @FutureKode, @wesleytian, @dennismorello, @vispaduchuri, @styfle, @caulagi, @berekuk, @jescalan, @cascandaliato, @coetry, @PepijnSenders, @dkempner, @dlackty, @aralroca, @felixmeziere, @bmvantunes, @hideokamoto, @bram-l, @craigdanj, @ErikAugust, @joiglifberg, @blvdmitry, @bragle, @ykdojo, @vitorhsb, @TrySound, @mattfwood, @ka2jun8, @rfinkley, @bannier, @karlhorky, @shihabus, @yakovlevyuri, @dav-is, @lundgren2, @NoobTW, @Cow258, @toshi1127, @jorisw, @rifaidev, @willianjusten, @willheslam, @alexvilchis, @vitordino, @matthewlilley, @Prottoy2938, @brunocrosier, @OriginalEXE, @sidthesloth92, @davidsonsns, @saitolume, @tolfino, @iczero, @WestonThayer, @galanggg, @davidgolden, @weichienhung, @ashconnell, @callumbooth, @lyderichti59, @lukyth, @FredyC, @danielstocks, @valse, @MrJmpl3, @Sm1t, @lucas-varela, @jose-donato, @chr-ge, @pocorschi, @jflayhart, @aried3r, @LittleboyHarry, @Akumzy, @xeust, @tonyspiro, @yordis, @AmrSaber, @Mzaien, @PaulPCIO, @quinnturner, @SebastianTroc, @JipSterk, @developit, @yokinist, @queq1890, @oriverk, @ospira, @danielivert, @huv1k, @minhtule, @shunkakinoki, @khades, @eric-burel, @turadg, @huozhi, and @scottmacdonnell!"
		}
	],
	"headings": [
		{
			"id": "3x-faster-refresh",
			"content": "3x Faster Refresh"
		},
		{
			"id": "improved-installation-time",
			"content": "Improved Installation Time"
		},
		{
			"id": "nextimage-improvements",
			"content": "`next/image` Improvements"
		},
		{
			"id": "apple-silicon-support",
			"content": "Apple Silicon Support"
		},
		{
			"id": "additional-layouts",
			"content": "Additional Layouts"
		},
		{
			"id": "improved-image-optimization-support",
			"content": "Improved Image Optimization Support"
		},
		{
			"id": "nextjs-commerce-shopify-integration",
			"content": "Next.js Commerce Shopify Integration"
		},
		{
			"id": "custom-500-page",
			"content": "Custom 500 Page"
		},
		{
			"id": "strict-postcss-configuration-loading",
			"content": "Strict PostCSS Configuration Loading"
		},
		{
			"id": "support-for-extends-in-tsconfigjson",
			"content": "Support for `extends` in `tsconfig.json`"
		},
		{
			"id": "detect-when-preview-mode-is-enabled",
			"content": "Detect When Preview Mode Is Enabled"
		},
		{
			"id": "router-methods-scroll-to-top",
			"content": "Router Methods Scroll to Top"
		},
		{
			"id": "documentation-improvements",
			"content": "Documentation Improvements"
		},
		{
			"id": "community",
			"content": "Community"
		},
		{
			"id": "credits",
			"content": "Credits"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#3x-faster-refresh",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#3x-faster-refresh",
			children: "3x Faster Refresh"
		}) })
	},
	{
		depth: 2,
		url: "#improved-installation-time",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#improved-installation-time",
			children: "Improved Installation Time"
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
		depth: 3,
		url: "#apple-silicon-support",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#apple-silicon-support",
			children: "Apple Silicon Support"
		}) })
	},
	{
		depth: 4,
		url: "#additional-layouts",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#additional-layouts",
			children: "Additional Layouts"
		}) })
	},
	{
		depth: 4,
		url: "#improved-image-optimization-support",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#improved-image-optimization-support",
			children: "Improved Image Optimization Support"
		}) })
	},
	{
		depth: 2,
		url: "#nextjs-commerce-shopify-integration",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#nextjs-commerce-shopify-integration",
			children: "Next.js Commerce Shopify Integration"
		}) })
	},
	{
		depth: 2,
		url: "#custom-500-page",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#custom-500-page",
			children: "Custom 500 Page"
		}) })
	},
	{
		depth: 2,
		url: "#strict-postcss-configuration-loading",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#strict-postcss-configuration-loading",
			children: "Strict PostCSS Configuration Loading"
		}) })
	},
	{
		depth: 2,
		url: "#support-for-extends-in-tsconfigjson",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#support-for-extends-in-tsconfigjson",
			children: [
				"Support for ",
				(0, import_jsx_runtime.jsx)("code", { children: "extends" }),
				" in ",
				(0, import_jsx_runtime.jsx)("code", { children: "tsconfig.json" })
			]
		}) })
	},
	{
		depth: 2,
		url: "#detect-when-preview-mode-is-enabled",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#detect-when-preview-mode-is-enabled",
			children: "Detect When Preview Mode Is Enabled"
		}) })
	},
	{
		depth: 2,
		url: "#router-methods-scroll-to-top",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#router-methods-scroll-to-top",
			children: "Router Methods Scroll to Top"
		}) })
	},
	{
		depth: 2,
		url: "#documentation-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#documentation-improvements",
			children: "Documentation Improvements"
		}) })
	},
	{
		depth: 2,
		url: "#community",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#community",
			children: "Community"
		}) })
	},
	{
		depth: 3,
		url: "#credits",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#credits",
			children: "Credits"
		}) })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		h3: "h3",
		h4: "h4",
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We are excited to introduce Next.js 10.1, featuring:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#3x-faster-refresh",
				children: "3x Faster Refresh"
			}) }), ": 200ms faster refresh with no changes necessary."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improved-installation-time",
				children: "Improved Installation Time"
			}) }), ": 58% smaller install size and 56% fewer dependencies."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#nextimage-improvements",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }), " Improvements"]
			}) }), ": Apple Silicon (M1) Support, plus more layout and loader options."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nextjs-commerce-shopify-integration",
				children: "Next.js Commerce Shopify Integration"
			}) }), ": Flexible data layer for composable e-commerce apps."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#custom-500-page",
				children: "Custom 500 Page"
			}) }), ": Add your own logo and branding to error pages."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#strict-postcss-configuration-loading",
				children: "Strict PostCSS Configuration Loading"
			}) }), ": Improved caching with Webpack 5."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#support-for-extends-in-tsconfigjson",
				children: [
					"Support for ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "extends" }),
					" in ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "tsconfig.json" })
				]
			}) }), ": Extensible configuration for large TypeScript apps."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#detect-when-preview-mode-is-enabled",
				children: "Detect When Preview Mode Is Enabled"
			}) }), ": Conditionally show content when viewing previews."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#router-methods-scroll-to-top",
				children: "Router Methods Scroll to Top"
			}) }), ": Automatically scroll to the top, now consistent for all routing."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#documentation-improvements",
				children: "Documentation Improvements"
			}) }), ": Incremental adoption, migration, and Docker deployment."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "3x-faster-refresh",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#3x-faster-refresh",
				children: "3x Faster Refresh"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Starting with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/blog/next-9-4",
				children: "v9.4"
			}),
			", Next.js brought Facebook's ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/architecture/fast-refresh",
				children: "Fast Refresh"
			}),
			" into open-source for instantaneous feedback on edits made to your React components."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This means Next.js only updates code in the file you edited, and only re-renders that component, without losing component state. This includes styles (inline, CSS-in-JS, or CSS/Sass Modules), markup, event handlers, and effects (via ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useEffect" }),
			")."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Today, we're making it ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "200ms faster" }),
			" on every edit ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "without any code changes on your side" }),
			". On average, this makes Fast Refresh 3x faster."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Want even faster performance and better build times? Opt-in to Webpack 5 today with a new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "future" }),
			" flag.This flag is a release candidate (RC) and Webpack 5 will become the default soon. After you've enabled this flag, please ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions/23498",
				children: "share any feedback with us"
			}),
			"."
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
						children: "  future: {"
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
							children: "    webpack5: "
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
			"To learn more about how Webpack 5 is being rolled out to your application in a backward-compatible way, check out ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/messages/webpack5",
				children: "the documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "improved-installation-time",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improved-installation-time",
				children: "Improved Installation Time"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've optimized Next.js' dependency graph to decrease install time and dependency size. It's now faster than ever to create a Next.js project, both locally and in your CI/CD process." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, {}),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "10.0" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "10.1" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "delta" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Average installation time" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "~15s" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "~5s" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "3.0x faster" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Installation size" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "96.5MB" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "39.9MB" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "58% smaller" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Number of dependencies" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "424" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "187" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "56% smaller" })
			] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "As part of our goal to optimize dependencies, we also updated and/or replaced npm packages that were marked as deprecated by their authors – even when they were deeply nested in the dependency tree. A fresh install of Next.js 10.1 will now result in no package warnings." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nextimage-improvements",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#nextimage-improvements",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }), " Improvements"]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "apple-silicon-support",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#apple-silicon-support",
				children: "Apple Silicon Support"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/blog/next-10",
				children: "Next.js 10"
			}),
			" was released, Image Optimization was powered by a native dependency. This led to a slower installation time, with native dependencies consuming 50% of Next.js' total install size. Further, this removes post-install running scripts and causing on-demand compilation."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We're excited to share Automatic Image Optimization through ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			" is now powered by ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://web.dev/squoosh-v2/",
				children: "WebAssembly"
			}),
			". This optimization works out of the box using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
			". By using WASM, we've reduced install size by ~30MB and ",
			(0, import_jsx_runtime.jsxs)(_components.strong, { children: [
				"added support for ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://www.apple.com/mac/m1/",
					children: "Apple Silicon"
				}),
				" M1 MacBooks"
			] }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We're continuing to improve our WebAssembly performance by taking advantage of ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://v8.dev/features/simd",
				children: "SIMD"
			}),
			" extensions and multi-threading."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "additional-layouts",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#additional-layouts",
				children: "Additional Layouts"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Based on your feedback, we've added a variety of new layouts and options for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout=fill" }),
				": You don't need to provide ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "width" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "height" }),
				". (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://image-component.nextjs.gallery/layout-fill",
					children: "Demo"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout=fixed" }),
				": Native ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "img" }),
				" behavior. (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://image-component.nextjs.gallery/layout-fixed",
					children: "Demo"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout=responsive" }),
				": Flexible width with fixed aspect ratio. (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://image-component.nextjs.gallery/layout-responsive",
					children: "Demo"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout=intrinsic" }),
				": Won't grow, but can shrink with fixed aspect ratio. (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://image-component.nextjs.gallery/layout-intrinsic",
					children: "Demo"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "objectFit=cover" }),
				": Background images. (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://image-component.nextjs.gallery/background",
					children: "Demo"
				}),
				")"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more information, check out the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/pages/api-reference/components/image#layout",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "layout" }), " documentation"]
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "improved-image-optimization-support",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improved-image-optimization-support",
				children: "Improved Image Optimization Support"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We've expanded on the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/optimizing/images#loader",
				children: "built-in image loaders"
			}),
			" for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			" with the ability to add any custom loader. By using the new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "loader" }),
			" prop, you can ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "optimize images with any provider or CDN" }),
			"."
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
			title: "components/my-image.js",
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
							children: " Image "
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
							children: " 'next/image'"
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
							children: "const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " myLoader"
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
							children: " ({ "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "src"
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
							children: "width"
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
							children: "quality"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }) "
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "  return"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " `https://example.com/${"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "src"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "}?w=${"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "width"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "}&q=${"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "quality"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ||"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " 75"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "}`"
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
						children: "};"
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
							children: "const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " MyImage"
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
							children: " ("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "props"
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
							children: " {"
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "Image"
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
							children: "      loader"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "{myLoader}"
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
							children: "      src"
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
							children: "\"/me.png\""
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
							children: "      alt"
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
							children: "\"Picture of the author\""
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
							children: "      width"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "{"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "500"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "}"
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
							children: "      height"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "{"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "500"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "}"
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
						children: "    />"
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
						children: "};"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more information, check out the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/pages/api-reference/components/image#loader",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }), " documentation"]
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nextjs-commerce-shopify-integration",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nextjs-commerce-shopify-integration",
				children: "Next.js Commerce Shopify Integration"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "E-commerce is one of the fastest-growing industries adopting Next.js. Companies like Apple, Wal-Mart, McDonald's, and Nike trust Next.js." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We wanted to give you a high-performance starting point for building e-commerce applications, so we released ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/commerce",
				children: "Next.js Commerce"
			}),
			". After thousands of requests for Shopify, we've updated Next.js Commerce with a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "provider-agnostic UI" }),
			" — enabling you to bring any headless e-commerce solution of your choice."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Switching between providers is a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/commerce#configuration",
				children: "single-line change"
			}),
			" in your configuration. We've also created a Features API, allowing you to toggle functionality based on your use case – all while retaining best-in-class performance."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-10-1/lighthouse.png",
			alt: "Lighthouse metrics for Next.js Commerce around the globe."
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Lighthouse metrics for Next.js Commerce around the globe." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With a few clicks, Next.js developers can clone, deploy, and fully customize their own e-commerce store. Learn more at ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://nextjs.org/commerce",
				children: "nextjs.org/commerce"
			}),
			" and try out our ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://shopify.demo.vercel.store/",
				children: "Shopify Demo"
			}),
			". Support for more commerce providers is coming soon."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "custom-500-page",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#custom-500-page",
				children: "Custom 500 Page"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can now create a custom ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/500.js" }),
			" to add your own logo and branding when displaying errors. Similar to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/404.js" }),
			", this file is statically generated at build time."
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
			title: "pages/500.js",
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
							children: " Custom500"
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
							children: ">500 - Server-side error occurred</"
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
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "strict-postcss-configuration-loading",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#strict-postcss-configuration-loading",
				children: "Strict PostCSS Configuration Loading"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you're using PostCSS and Webpack 5, you can improve performance (through caching) with a new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "future" }),
			" flag."
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
						children: "  future: {"
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
							children: "    webpack5: "
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
							children: "    strictPostcssConfiguration: "
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
			"Try it out today and let us know your feedback. For more information, check out the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/configuring/post-css",
				children: "PostCSS Config documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "support-for-extends-in-tsconfigjson",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#support-for-extends-in-tsconfigjson",
				children: [
					"Support for ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "extends" }),
					" in ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "tsconfig.json" })
				]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can now use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "extends" }),
			" in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "tsconfig.json" }),
			" used by Next.js to extend from a different ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "tsconfig.json" }),
			" in your project. For example, you can extend from a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "tsconfig.base.json" }),
			" in your project as follows:"
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
			title: "tsconfig.json",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "{"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "  \"extends\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"./tsconfig.base.json\""
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
			"For more information, check out the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/configuring/typescript",
				children: "TypeScript documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "detect-when-preview-mode-is-enabled",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#detect-when-preview-mode-is-enabled",
				children: "Detect When Preview Mode Is Enabled"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can now detect when Preview Mode is enabled, allowing you to render certain components only for editors." }),
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
			title: "components/MyComponent.js",
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
							children: " { useRouter } "
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
							children: " 'next/router'"
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
							children: "function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " MyComponent"
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
							children: "  const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "isPreview"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " } "
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " useRouter"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "();"
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
							children: " <>{isPreview "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "?"
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
							children: ">Preview Mode Enabled</"
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
							children: "> "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: ":"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " null"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "}</>;"
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
			"For more information, check out the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/configuring/preview-mode",
				children: "Preview Mode documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "router-methods-scroll-to-top",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#router-methods-scroll-to-top",
				children: "Router Methods Scroll to Top"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When navigating using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" }),
			", Next.js will automatically scroll to the top. With Next.js 10.1 ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "router.push" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "router.replace" }),
			" will also automatically scroll to the top to match the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" }),
			" behavior. You can opt-out of the automatic scrolling using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "scroll" }),
			" option."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more information, check out the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/pages/api-reference/functions/use-router",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next/router" }), " documentation"]
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "documentation-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#documentation-improvements",
				children: "Documentation Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've also added a variety of new guides, resources, and documentation, including:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/migrating/incremental-adoption",
				children: "Incrementally Adopting Next.js"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/migrating/from-gatsby",
				children: "Migrating from Gatsby"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/upgrading/from-create-react-app",
				children: "Migrating from Create React App"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/migrating/from-react-router",
				children: "Migrating from React Router"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/routing/authenticating",
				children: "Authentication"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/deploying#docker-image",
				children: "Deploying with Docker"
			}) }),
			"\n"
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're excited to see the continued growth in Next.js adoption:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"We have had over ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "1,540" }),
				" independent contributors, with over ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "240" }),
				" new contributors since the 10.0 release"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"On GitHub, the project has been starred over ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "64,950" }),
				" times."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Join the Next.js community on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions",
				children: "GitHub Discussions."
			}),
			" Discussions is a community space that allows you to connect with other Next.js users and freely ask questions or share your work. You can also join the official ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/discord",
				children: "Next.js Discord"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "credits",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#credits",
				children: "Credits"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We are thankful to our community, including all the external feedback and contributions that helped shape this release." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This release was brought to you by the contributions of: @shuding, @edazpotato, @laithyounes, @ijjk, @harshitsan, @selrond, @sromexs, @melono6, @timneutkens, @madou, @mottox2, @leerob, @divmain, @nblthree, @KennethKinLum, @KarthikeyanRanasthala, @alex-safian, @rishabhpoddar, @daviavmello, @jpalmieri, @merceyz, @Segolene-Alquier, @michrome, @janicklas-ralph, @Parnswir, @giraffesyo, @balazsorban44, @Cicada95, @vzaidman, @deniseyu, @eltociear, @unimprobable, @getspooky, @Timer, @armand1m, @alexknipfer, @elitan, @atcastle, @noahfschr, @amille44420, @laanayam333, @spidgorny, @devuxer, @Janpot, @nickbabcock, @rsipakov, @NkxxkN, @dominicfraser, @alevosia, @Kerumen, @CMeeg, @Pomaio, @tim-hanssen, @lachlanjc, @lebreRafael, @AryanBeezadhur, @guybedford, @petecorreia, @kaznak, @sam3d, @fwuensche, @rafaellaurindo, @sphilee, @styxlab, @rexxars, @smitbarmase, @maerzhase, @matamatanot, @lucleray, @jeremybalog, @tarunama, @zainfathoni, @destumme, @VictorAssis, @bhbs, @ciruz, @simnalamburt, @Almad, @frol, @ludofischer, @elliottsj, @Baheya, @Lalit2005, @vldmrkl, @AriFreyr, @kaykdm, @Sharcoux, @ramasilveyra, @devknoll, @botv, @pkellner, @sumanthratna, @sokra, @lfades, @thorwebdev, @berndartmueller, @davidspiessens, @ShashiSrinath, @elsigh, @MMT-LD, @hankandre, @maxnowack, @kmjennison, @darshkpatel, @mohsen1, @DylanRJohnston, @calmonr, @imrobinized, @justintemps, @ncarchedi, @btk, @faizanv, @chulkilee, @ryan-lustre, @dfelber, @Ymirke, @Robogeek95, @mcha-dev, @youngvform, @andrehsu, @Simply007, @rokobekavac0, @ja0n, @mattruby, @xom9ikk, @niko20, @LauraBeatris, @armspkt, @xiaooye, @sungpro, @awareness481, @joebernard, @jensmeindertsma, @donavon, @DaneTheory, @Zertz, @danielyefet, @lfender6445, @tajo, @jorrit, @tvler, @mustafaKamal-fe, @prateekbh, @gregrickaby, @enochndika, @zimv, @lharries, @JstnEdr, @zbialecki, @fredmontet, @leo, @kachkaev, @mongolyy, @justinphilpott, @mjr, @fireairforce, @jvarho, @gr-qft, @thomaswang, @c316, @benbender, @michael, @damusnet, @farhankk360, @smaktacular, @webda2l, @chibicode, @bar7b, @SiTaggart, @lolobosse, @jamesgeorge007, @nikosantis, @mikan3rd, @oshdev, @UnbearableBear, @tunesmith, @jamsinclair, @ivandotv, @Arthie, @louison, @FutureKode, @wesleytian, @dennismorello, @vispaduchuri, @styfle, @caulagi, @berekuk, @jescalan, @cascandaliato, @coetry, @PepijnSenders, @dkempner, @dlackty, @aralroca, @felixmeziere, @bmvantunes, @hideokamoto, @bram-l, @craigdanj, @ErikAugust, @joiglifberg, @blvdmitry, @bragle, @ykdojo, @vitorhsb, @TrySound, @mattfwood, @ka2jun8, @rfinkley, @bannier, @karlhorky, @shihabus, @yakovlevyuri, @dav-is, @lundgren2, @NoobTW, @Cow258, @toshi1127, @jorisw, @rifaidev, @willianjusten, @willheslam, @alexvilchis, @vitordino, @matthewlilley, @Prottoy2938, @brunocrosier, @OriginalEXE, @sidthesloth92, @davidsonsns, @saitolume, @tolfino, @iczero, @WestonThayer, @galanggg, @davidgolden, @weichienhung, @ashconnell, @callumbooth, @lyderichti59, @lukyth, @FredyC, @danielstocks, @valse, @MrJmpl3, @Sm1t, @lucas-varela, @jose-donato, @chr-ge, @pocorschi, @jflayhart, @aried3r, @LittleboyHarry, @Akumzy, @xeust, @tonyspiro, @yordis, @AmrSaber, @Mzaien, @PaulPCIO, @quinnturner, @SebastianTroc, @JipSterk, @developit, @yokinist, @queq1890, @oriverk, @ospira, @danielivert, @huv1k, @minhtule, @shunkakinoki, @khades, @eric-burel, @turadg, @huozhi, and @scottmacdonnell!" })
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
export { toc as a, structuredData as i, frontmatter as n, next_10_1_exports as r, MDXContent as t };
