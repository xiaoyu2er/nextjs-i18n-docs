import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-14-CNIDUKhM.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_14_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 14",
	"description": "Next.js 14 includes included performance, stability for Server Actions, a new course teaching the App Router, and more.",
	"author": [{
		"name": "Lee Robinson",
		"image": "/static/team/lee.jpg"
	}, {
		"name": "Tim Neutkens",
		"image": "/static/team/tim.jpg"
	}],
	"date": /* @__PURE__ */ new Date(1698336000507),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-14/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "As we announced at Next.js Conf, Next.js 14 is our most focused release with:"
		},
		{
			"heading": void 0,
			"content": "**Turbopack**: 5,000 tests passing for App & Pages Router"
		},
		{
			"heading": void 0,
			"content": "**53% faster** local server startup"
		},
		{
			"heading": void 0,
			"content": "**94% faster** code updates with Fast Refresh"
		},
		{
			"heading": void 0,
			"content": "**Server Actions (Stable)**: Progressively enhanced mutations"
		},
		{
			"heading": void 0,
			"content": "Integrated with caching & revalidating"
		},
		{
			"heading": void 0,
			"content": "Simple function calls, or works natively with forms"
		},
		{
			"heading": void 0,
			"content": "**Partial Prerendering (Preview)**: Fast initial static response + streaming dynamic content"
		},
		{
			"heading": void 0,
			"content": "**Next.js Learn (New)**: Free course teaching the App Router, authentication, databases, and more."
		},
		{
			"heading": void 0,
			"content": "Upgrade today or get started with:"
		},
		{
			"heading": "nextjs-compiler-turbocharged",
			"content": "Since Next.js 13, we've been working to improve local development performance in Next.js in both the Pages and App Router."
		},
		{
			"heading": "nextjs-compiler-turbocharged",
			"content": "Previously, we were rewriting `next dev` and other parts of Next.js to support this effort. We have since changed our approach to be more incremental. This means our Rust-based compiler will reach stability soon, as we've refocused on supporting all Next.js features first."
		},
		{
			"heading": "nextjs-compiler-turbocharged",
			"content": "5,000 integration tests for `next dev` are now passing with Turbopack, our underlying Rust engine. These tests include 7 years of bug fixes and reproductions."
		},
		{
			"heading": "nextjs-compiler-turbocharged",
			"content": "While testing on `vercel.com`, a large Next.js application, we've seen:"
		},
		{
			"heading": "nextjs-compiler-turbocharged",
			"content": "Up to **53.3% faster** local server startup"
		},
		{
			"heading": "nextjs-compiler-turbocharged",
			"content": "Up to **94.7% faster** code updates with Fast Refresh"
		},
		{
			"heading": "nextjs-compiler-turbocharged",
			"content": "This benchmark is a practical result of performance improvements you should expect with a large application (and large module graph). With 90% of tests for `next dev` now passing, you should see faster and more reliable performance consistently when using `next dev --turbo`."
		},
		{
			"heading": "nextjs-compiler-turbocharged",
			"content": "Once we hit 100% of tests passing, we'll move Turbopack to stable in an upcoming minor release. We'll also continue to support using webpack for custom configurations and ecosystem plugins."
		},
		{
			"heading": "nextjs-compiler-turbocharged",
			"content": "You can follow the percentage of tests passing at areweturboyet.com."
		},
		{
			"heading": "forms-and-mutations",
			"content": "Next.js 9 introduced API Routes—a way to quickly build backend endpoints alongside your frontend code."
		},
		{
			"heading": "forms-and-mutations",
			"content": "For example, you would create a new file in the `api/` directory:"
		},
		{
			"heading": "forms-and-mutations",
			"content": "Then, on the client-side, you could use React and an event handler like `onSubmit` to make a `fetch` to your API Route."
		},
		{
			"heading": "forms-and-mutations",
			"content": "Now with Next.js 14, we want to simplify the developer experience of authoring data mutations. Further, we want to improve the user experience when the user has a slow network connection, or when submitting a form from a lower-powered device."
		},
		{
			"heading": "server-actions-stable",
			"content": "What if you didn't need to manually create an API Route? Instead, you could define a function that runs securely on the server, called directly from your React components."
		},
		{
			"heading": "server-actions-stable",
			"content": "The App Router is built on the React `canary` channel, which is stable for frameworks to adopt new features. As of v14, Next.js has upgraded to the latest React `canary`, which includes stable Server Actions."
		},
		{
			"heading": "server-actions-stable",
			"content": "The previous example from the Pages Router can be simplified to one file:"
		},
		{
			"heading": "server-actions-stable",
			"content": "Server Actions should feel familiar for any developers who have previously used server-centric frameworks in the past. It's built on web fundamentals like forms and the FormData Web API."
		},
		{
			"heading": "server-actions-stable",
			"content": "While using Server Actions through a form is helpful for progressive enhancement, it is not a requirement. You can also call them directly as a function, without a form. When using TypeScript, this gives you full end-to-end type-safety between the client and server."
		},
		{
			"heading": "server-actions-stable",
			"content": "Mutating data, re-rendering the page, or redirecting can happen in **one network roundtrip**, ensuring the correct data is displayed on the client, even if the upstream provider is slow. Further, you can compose and reuse different actions, including many different actions in the same route."
		},
		{
			"heading": "caching-revalidating-redirecting-and-more",
			"content": "Server Actions are deeply integrated into the entire App Router model. You can:"
		},
		{
			"heading": "caching-revalidating-redirecting-and-more",
			"content": "Revalidate cached data with `revalidatePath()` or `revalidateTag()`"
		},
		{
			"heading": "caching-revalidating-redirecting-and-more",
			"content": "Redirect to different routes through `redirect()`"
		},
		{
			"heading": "caching-revalidating-redirecting-and-more",
			"content": "Set and read cookies through `cookies()`"
		},
		{
			"heading": "caching-revalidating-redirecting-and-more",
			"content": "Handle optimistic UI updates with `useOptimistic()`"
		},
		{
			"heading": "caching-revalidating-redirecting-and-more",
			"content": "Catch and display errors from the server with `useFormState()`"
		},
		{
			"heading": "caching-revalidating-redirecting-and-more",
			"content": "Display loading states on the client with `useFormStatus()`"
		},
		{
			"heading": "caching-revalidating-redirecting-and-more",
			"content": "Learn more about Forms and Mutations with Server Actions or about the security model and best practices for Server Components and Server Actions."
		},
		{
			"heading": "partial-prerendering-preview",
			"content": "We'd like to share a preview of Partial Prerendering — a compiler optimization for dynamic content with a fast initial static response — that we're working on for Next.js."
		},
		{
			"heading": "partial-prerendering-preview",
			"content": "Partial Prerendering builds on a decade of research and development into server-side rendering (SSR), static-site generation (SSG), and incremental static revalidation (ISR)."
		},
		{
			"heading": "motivation",
			"content": "We've heard your feedback. There's currently too many runtimes, configuration options, and rendering methods to have to consider. You want the speed and reliability of static, while also supporting fully dynamic, personalized responses."
		},
		{
			"heading": "motivation",
			"content": "Having great performance globally *and* personalization shouldn't come at the cost of complexity."
		},
		{
			"heading": "motivation",
			"content": "Our challenge was to create a better developer experience, simplifying the existing model without introducing new APIs for developers to learn. While partial caching of server-side content has existed, these approaches still need to meet the developer experience and composability goals we aim for."
		},
		{
			"heading": "motivation",
			"content": "**Partial Prerendering requires no new APIs to learn.**"
		},
		{
			"heading": "built-on-react-suspense",
			"content": "Partial Prerendering is defined by your Suspense boundaries. Here's how it works. Consider the following ecommerce page:"
		},
		{
			"heading": "built-on-react-suspense",
			"content": "With Partial Prerendering enabled, this page generates a static shell based on your `<Suspense />` boundaries. The `fallback` from React Suspense is prerendered."
		},
		{
			"heading": "built-on-react-suspense",
			"content": "Suspense fallbacks in the shell are then replaced with dynamic components, like reading cookies to determine the cart, or showing a banner based on the user."
		},
		{
			"heading": "built-on-react-suspense",
			"content": "When a request is made, the static HTML shell is immediately served:"
		},
		{
			"heading": "built-on-react-suspense",
			"content": "Since `<ShoppingCart />` reads from `cookies` to look at the user session, this component is then streamed in as part of the same HTTP request as the static shell. There are no extra network roundtrips needed."
		},
		{
			"heading": "built-on-react-suspense",
			"content": "To have the most granular static shell, this may require adding additional Suspense boundaries. However, if you're already using `loading.js` today, this is an implicit Suspense boundary, so no changes would be required to generate the static shell."
		},
		{
			"heading": "coming-soon",
			"content": "Partial prerendering is under active development. We'll be sharing more updates in an upcoming minor release."
		},
		{
			"heading": "metadata-improvements",
			"content": "Before your page content can be streamed from the server, there's important metadata about the viewport, color scheme, and theme that need to be sent to the browser first."
		},
		{
			"heading": "metadata-improvements",
			"content": "Ensuring these `meta` tags are sent with the initial page content helps a smooth user experience, preventing the page from flickering by changing the theme color, or shifting layout due to viewport changes."
		},
		{
			"heading": "metadata-improvements",
			"content": "In Next.js 14, we've decoupled blocking and non-blocking metadata. Only a small subset of metadata options are blocking, and we want to ensure non-blocking metadata will not prevent a partially prerendered page from serving the static shell."
		},
		{
			"heading": "metadata-improvements",
			"content": "The following metadata options are now deprecated and will be removed from `metadata` in a future major version:"
		},
		{
			"heading": "metadata-improvements",
			"content": "`viewport`: Sets the initial zoom and other properties of the viewport"
		},
		{
			"heading": "metadata-improvements",
			"content": "`colorScheme`: Sets the support modes (light/dark) for the viewport"
		},
		{
			"heading": "metadata-improvements",
			"content": "`themeColor`: Sets the color the chrome around the viewport should render with"
		},
		{
			"heading": "metadata-improvements",
			"content": "Starting with Next.js 14, there are new options `viewport` and `generateViewport` to replace these options. All other `metadata` options remain the same."
		},
		{
			"heading": "metadata-improvements",
			"content": "You can start adopting these new APIs today. The existing `metadata` options will continue to work."
		},
		{
			"heading": "nextjs-learn-course",
			"content": "Today we're releasing a brand new, free course on Next.js Learn. This course teaches:"
		},
		{
			"heading": "nextjs-learn-course",
			"content": "The Next.js App Router"
		},
		{
			"heading": "nextjs-learn-course",
			"content": "Styling and Tailwind CSS"
		},
		{
			"heading": "nextjs-learn-course",
			"content": "Optimizing Fonts and Images"
		},
		{
			"heading": "nextjs-learn-course",
			"content": "Creating Layouts and Pages"
		},
		{
			"heading": "nextjs-learn-course",
			"content": "Navigating Between Pages"
		},
		{
			"heading": "nextjs-learn-course",
			"content": "Setting Up Your Postgres Database"
		},
		{
			"heading": "nextjs-learn-course",
			"content": "Fetching Data with Server Components"
		},
		{
			"heading": "nextjs-learn-course",
			"content": "Static and Dynamic Rendering"
		},
		{
			"heading": "nextjs-learn-course",
			"content": "Streaming"
		},
		{
			"heading": "nextjs-learn-course",
			"content": "Partial Prerendering (Optional)"
		},
		{
			"heading": "nextjs-learn-course",
			"content": "Adding Search and Pagination"
		},
		{
			"heading": "nextjs-learn-course",
			"content": "Mutating Data"
		},
		{
			"heading": "nextjs-learn-course",
			"content": "Handling Errors"
		},
		{
			"heading": "nextjs-learn-course",
			"content": "Improving Accessibility"
		},
		{
			"heading": "nextjs-learn-course",
			"content": "Adding Authentication"
		},
		{
			"heading": "nextjs-learn-course",
			"content": "Adding Metadata"
		},
		{
			"heading": "nextjs-learn-course",
			"content": "Next.js Learn has taught millions of developers about the foundations of the framework, and we can't wait to hear your feedback on our new addition. Head to nextjs.org/learn to take the course."
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** Minimum Node.js version is now `18.17`"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** Removes WASM target for `next-swc` build (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** Dropped support for `@next/font` in favor of `next/font` (Codemod)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** Changed `ImageResponse` import from `next/server` to `next/og` (Codemod)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** `next export` command has been removed in favor of `output: 'export'` config (Docs)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Deprecation]** `onLoadingComplete` for `next/image` is deprecated in favor of `onLoad`"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Deprecation]** `domains` for `next/image` is deprecated in favor of `remotePatterns`"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Feature]** More verbose logging around `fetch` caching can be enabled (Docs)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** 80% smaller function size for a basic `create-next-app` application"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Enhanced memory management when using `edge` runtime in development"
		},
		{
			"heading": "contributors",
			"content": "Next.js is the result of the combined work of over 2,900 individual developers, industry partners like Google and Meta, and our core team at Vercel. Join the community on GitHub Discussions, Reddit, and Discord."
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
			"content": "**Next.js Learn**: Delba, Steph, Emil, Balazs, Hector, and Amy."
		},
		{
			"heading": "contributors",
			"content": "And the contributions of: @05lazy, @0xadada, @2-NOW, @aarnadlr, @aaronbrown-vercel, @aaronjy, @abayomi185, @abe1272001, @abhiyandhakal, @abstractvector, @acdlite, @adamjmcgrath, @AdamKatzDev, @adamrhunter, @ademilter, @adictonator, @adilansari, @adtc, @afonsojramos, @agadzik, @agrattan0820, @akd-io, @AkifumiSato, @akshaynox, @alainkaiser, @alantoa, @albertothedev, @AldeonMoriak, @aleksa-codes, @alexanderbluhm, @alexkirsz, @alfred-mountfield, @alpha-xek, @andarist, @Andarist, @andrii-bodnar, @andykenward, @angel1254mc, @anonrig, @anthonyshew, @AntoineBourin, @anujssstw, @apeltop, @aralroca, @aretrace, @artdevgame, @artechventure, @arturbien, @Aryan9592, @AviAvinav, @aziyatali, @BaffinLee, @Banbarashik, @bencmbrook, @benjie, @bennettdams, @bertho-zero, @bigyanse, @Bitbbot, @blue-devil1134, @bot08, @bottxiang, @Bowens20832, @bre30kra69cs, @BrennanColberg, @brkalow, @BrodaNoel, @Brooooooklyn, @brunoeduardodev, @brvnonascimento, @carlos-menezes, @cassidoo, @cattmote, @cesarkohl, @chanceaclark, @charkour, @charlesbdudley, @chibicode, @chrisipanaque, @ChristianIvicevic, @chriswdmr, @chunsch, @ciruz, @cjmling, @clive-h-townsend, @colinhacks, @colinking, @coreyleelarson, @Cow258, @cprussin, @craigwheeler, @cramforce, @cravend, @cristobaldominguez95, @ctjlewis, @cvolant, @cxa, @danger-ahead, @daniel-web-developer, @danmindru, @dante-robinson, @darshanjain-entrepreneur, @darshkpatel, @davecarlson, @David0z, @davidnx, @dciug, @delbaoliveira, @denchance, @DerTimonius, @devagrawal09, @DevEsteves, @devjiwonchoi, @devknoll, @DevLab2425, @devvspaces, @didemkkaslan, @dijonmusters, @dirheimerb, @djreillo, @dlehmhus, @doinki, @dpnolte, @Drblessing, @dtinth, @ducanhgh, @DuCanhGH, @ductnn, @duncanogle, @dunklesToast, @DustinsCode, @dvakatsiienko, @dvoytenko, @dylanjha, @ecklf, @EndangeredMassa, @eps1lon, @ericfennis, @escwxyz, @Ethan-Arrowood, @ethanmick, @ethomson, @fantaasm, @feikerwu, @ferdingler, @FernandVEYRIER, @feugy, @fgiuliani, @fomichroman, @Fonger, @ForsakenHarmony, @franktronics, @FSaldanha, @fsansalvadore, @furkanmavili, @g12i, @gabschne, @gaojude, @gdborton, @gergelyke, @gfgabrielfranca, @gidgudgod, @Gladowar, @Gnadhi, @gnoff, @goguda, @greatSumini, @gruz0, @Guilleo03, @gustavostz, @hanneslund, @HarshaVardhanReddyDuvvuru, @haschikeks, @Heidar-An, @heyitsuzair, @hiddenest, @hiro0218, @hotters, @hsrvms, @hu0p, @hughlilly, @HurSungYun, @hustLer2k, @iamarpitpatidar, @ianldgs, @ianmacartney, @iaurg, @ibash, @ibrahemid, @idoob, @iiegor, @ikryvorotenko, @imranbarbhuiya, @ingovals, @inokawa, @insik-han, @isaackatayev, @ishaqibrahimbot, @ismaelrumzan, @itsmingjie, @ivanhofer, @IvanKiral, @jacobsfletch, @jakemstar, @jamespearson, @JanCizmar, @janicklas-ralph, @jankaifer, @JanKaifer, @jantimon, @jaredpalmer, @javivelasco, @jayair, @jaykch, @Jeffrey-Zutt, @jenewland1999, @jeremydouglas, @JesseKoldewijn, @jessewarren-aa, @jimcresswell, @jiwooIncludeJeong, @jocarrd, @joefreeman, @JohnAdib, @JohnAlbin, @JohnDaly, @johnnyomair, @johnta0, @joliss, @jomeswang, @joostdecock, @Josehower, @josephcsoti, @josh, @joshuabaker, @JoshuaKGoldberg, @joshuaslate, @joulev, @jsteele-stripe, @JTaylor0196, @JuanM04, @jueungrace, @juliusmarminge, @Juneezee, @Just-Moh-it, @juzhiyuan, @jyunhanlin, @kaguya3222, @karlhorky, @kevinmitch14, @keyz, @kijikunnn, @kikobeats, @Kikobeats, @kleintorres, @koba04, @koenpunt, @koltong, @konomae, @kosai106, @krmeda, @kvnang, @kwonoj, @ky1ejs, @kylemcd, @labyrinthitis, @lachlanjc, @lacymorrow, @laityned, @Lantianyou, @leerob, @leodr, @leoortizz, @li-jia-nan, @loettz, @lorenzobloedow, @lubakravche, @lucasassisrosa, @lucasconstantino, @lucgagan, @LukeSchlangen, @LuudJanssen, @lycuid, @M3kH, @m7yue, @manovotny, @maranomynet, @marcus-rise, @MarDi66, @MarkAtOmniux, @martin-wahlberg, @masnormen, @matepapp, @matthew-heath, @mattpr, @maxleiter, @MaxLeiter, @maxproske, @meenie, @meesvandongen, @mhmdrioaf, @michaeloliverx, @mike-plummer, @MiLk, @milovangudelj, @Mingyu-Song, @mirismaili, @mkcy3, @mknichel, @mltsy, @mmaaaaz, @mnajdova, @moetazaneta, @mohanraj-r, @molebox, @morganfeeney, @motopods, @mPaella, @mrkldshv, @mrxbox98, @nabsul, @nathanhammond, @nbouvrette, @nekochantaiwan, @nfinished, @Nick-Mazuk, @nickmccurdy, @niedziolkamichal, @niko20, @nikolovlazar, @nivak-monarch, @nk980113, @nnnnoel, @nocell, @notrab, @nroland013, @nuta, @nutlope, @obusk, @okcoker, @oliviertassinari, @omarhoumz, @opnay, @orionmiz, @ossan-engineer, @patrick91, @pauek, @peraltafederico, @Phiction, @pn-code, @pyjun01, @pythagoras-yamamoto, @qrohlf, @raisedadead, @reconbot, @reshmi-sriram, @reyrodrigez, @ricardofiorani, @rightones, @riqwan, @rishabhpoddar, @rjsdnql123, @rodrigofeijao, @runjuu, @Ryan-Dia, @ryo-manba, @s0h311, @sagarpreet-xflowpay, @sairajchouhan, @samdenty, @samsisle, @sanjaiyan-dev, @saseungmin, @SCG82, @schehata, @Schniz, @sepiropht, @serkanbektas, @sferadev, @ShaunFerris, @shivanshubisht, @shozibabbas, @silvioprog, @simonswiss, @simPod, @sivtu, @SleeplessOne1917, @smaeda-ks, @sonam-serchan, @SonMooSans, @soonoo, @sophiebits, @souporserious, @sp00ls, @sqve, @sreetamdas, @stafyniaksacha, @starunaway, @steebchen, @stefanprobst, @steppefox, @steven-tey, @suhaotian, @sukkaw, @SukkaW, @superbahbi, @SuttonJack, @svarunid, @swaminator, @swarnava, @syedtaqi95, @taep96, @taylorbryant, @teobler, @Terro216, @theevilhead, @thepatrick00, @therealrinku, @thomasballinger, @thorwebdev, @tibi1220, @tim-hanssen, @timeyoutakeit, @tka5, @tknickman, @tomryanx, @trigaten, @tristndev, @tunamagur0, @tvthatsme, @tyhopp, @tyler-lutz, @UnknownMonk, @v1k1, @valentincostam, @valentinh, @valentinpolitov, @vamcs, @vasucp1207, @vicsantizo, @vinaykulk621, @vincenthongzy, @visshaljagtap, @vladikoff, @wherehows, @WhoAmIRUS, @WilderDev, @Willem-Jaap, @williamli, @wiredacorn, @wiscaksono, @wojtekolek, @ws-jm, @wxh06, @wyattfry, @wyattjoh, @xiaolou86, @y-tsubuku, @yagogmaisp, @yangshun, @yasath, @Yash-Singh1, @yigithanyucedag, @ykzts, @Yovach, @yutsuten, @yyuemii, @zek, @zekicaneksi, @zignis, and @zlrlyy"
		}
	],
	"headings": [
		{
			"id": "nextjs-compiler-turbocharged",
			"content": "Next.js Compiler: Turbocharged"
		},
		{
			"id": "forms-and-mutations",
			"content": "Forms and Mutations"
		},
		{
			"id": "server-actions-stable",
			"content": "Server Actions (Stable)"
		},
		{
			"id": "caching-revalidating-redirecting-and-more",
			"content": "Caching, Revalidating, Redirecting, and more"
		},
		{
			"id": "partial-prerendering-preview",
			"content": "Partial Prerendering (Preview)"
		},
		{
			"id": "motivation",
			"content": "Motivation"
		},
		{
			"id": "built-on-react-suspense",
			"content": "Built on React Suspense"
		},
		{
			"id": "coming-soon",
			"content": "Coming soon"
		},
		{
			"id": "metadata-improvements",
			"content": "Metadata Improvements"
		},
		{
			"id": "nextjs-learn-course",
			"content": "Next.js Learn Course"
		},
		{
			"id": "other-changes",
			"content": "Other Changes"
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
		url: "#nextjs-compiler-turbocharged",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#nextjs-compiler-turbocharged",
			children: "Next.js Compiler: Turbocharged"
		}) })
	},
	{
		depth: 2,
		url: "#forms-and-mutations",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#forms-and-mutations",
			children: "Forms and Mutations"
		}) })
	},
	{
		depth: 3,
		url: "#server-actions-stable",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#server-actions-stable",
			children: "Server Actions (Stable)"
		}) })
	},
	{
		depth: 3,
		url: "#caching-revalidating-redirecting-and-more",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#caching-revalidating-redirecting-and-more",
			children: "Caching, Revalidating, Redirecting, and more"
		}) })
	},
	{
		depth: 2,
		url: "#partial-prerendering-preview",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#partial-prerendering-preview",
			children: "Partial Prerendering (Preview)"
		}) })
	},
	{
		depth: 3,
		url: "#motivation",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#motivation",
			children: "Motivation"
		}) })
	},
	{
		depth: 3,
		url: "#built-on-react-suspense",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#built-on-react-suspense",
			children: "Built on React Suspense"
		}) })
	},
	{
		depth: 3,
		url: "#coming-soon",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#coming-soon",
			children: "Coming soon"
		}) })
	},
	{
		depth: 2,
		url: "#metadata-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#metadata-improvements",
			children: "Metadata Improvements"
		}) })
	},
	{
		depth: 2,
		url: "#nextjs-learn-course",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#nextjs-learn-course",
			children: "Next.js Learn Course"
		}) })
	},
	{
		depth: 2,
		url: "#other-changes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#other-changes",
			children: "Other Changes"
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
		em: "em",
		h2: "h2",
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
			"As we announced at ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/conf",
				children: "Next.js Conf"
			}),
			", Next.js 14 is our most focused release with:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#nextjs-compiler-turbocharged",
					children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Turbopack" })
				}),
				": 5,000 tests passing for App & Pages Router",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "53% faster" }), " local server startup"] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "94% faster" }), " code updates with Fast Refresh"] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#forms-and-mutations",
					children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Server Actions (Stable)" })
				}),
				": Progressively enhanced mutations",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Integrated with caching & revalidating" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Simple function calls, or works natively with forms" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#partial-prerendering-preview",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Partial Prerendering (Preview)" })
			}), ": Fast initial static response + streaming dynamic content"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nextjs-learn-course",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Next.js Learn (New)" })
			}), ": Free course teaching the App Router, authentication, databases, and more."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Upgrade today or get started with:" }),
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
				children: [(0, import_jsx_runtime.jsx)(_components.span, {
					style: {
						"--shiki-light": "#6F42C1",
						"--shiki-dark": "#B392F0"
					},
					children: "npx"
				}), (0, import_jsx_runtime.jsx)(_components.span, {
					style: {
						"--shiki-light": "#032F62",
						"--shiki-dark": "#9ECBFF"
					},
					children: " create-next-app@latest"
				})]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nextjs-compiler-turbocharged",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nextjs-compiler-turbocharged",
				children: "Next.js Compiler: Turbocharged"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Since Next.js 13, we've been working to improve local development performance in Next.js in both the Pages and App Router." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Previously, we were rewriting ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			" and other parts of Next.js to support this effort. We have since changed our approach to be more incremental. This means our Rust-based compiler will reach stability soon, as we've refocused on supporting all Next.js features first."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"5,000 integration tests for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			" are now passing with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/api-reference/turbopack",
				children: "Turbopack"
			}),
			", our underlying Rust engine. These tests include 7 years of bug fixes and reproductions."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"While testing on ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "vercel.com" }),
			", a large Next.js application, we've seen:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Up to ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "53.3% faster" }),
				" local server startup"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Up to ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "94.7% faster" }),
				" code updates with Fast Refresh"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This benchmark is a practical result of performance improvements you should expect with a large application (and large module graph). With 90% of tests for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			" now passing, you should see faster and more reliable performance consistently when using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev --turbo" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Once we hit 100% of tests passing, we'll move Turbopack to stable in an upcoming minor release. We'll also continue to support using webpack for custom configurations and ecosystem plugins." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can follow the percentage of tests passing at ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://areweturboyet.com",
				children: "areweturboyet.com"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "forms-and-mutations",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#forms-and-mutations",
				children: "Forms and Mutations"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js 9 introduced API Routes—a way to quickly build backend endpoints alongside your frontend code." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, you would create a new file in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "api/" }),
			" directory:"
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
			title: "pages/api/submit.ts",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " type"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { NextApiRequest, NextApiResponse } "
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
							children: " 'next'"
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
							children: " async"
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
							children: " handler"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "  req"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " NextApiRequest"
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
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "  res"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " NextApiResponse"
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
						children: ") {"
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
							children: "  const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " data"
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
							children: " req.body;"
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " id"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " await"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " createItem"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(data);"
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
							children: "  res."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "status"
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "200"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ")."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "json"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ id });"
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
			"Then, on the client-side, you could use React and an event handler like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onSubmit" }),
			" to make a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
			" to your API Route."
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
			title: "pages/index.tsx",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
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
							children: " { FormEvent } "
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
							children: " 'react'"
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
							children: " Page"
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
							children: "  async"
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
							children: " onSubmit"
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
							children: "event"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " FormEvent"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "<"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "HTMLFormElement"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">) {"
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
							children: "    event."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "preventDefault"
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
							children: "    const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " formData"
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
							children: " FormData"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(event.currentTarget);"
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
							children: "    const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " response"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " await"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " fetch"
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
							children: "'/api/submit'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", {"
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
							children: "      method: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'POST'"
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
						children: "      body: formData,"
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
						children: "    });"
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
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "    // Handle response if necessary"
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
							children: "    const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " data"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " await"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " response."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "json"
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
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "    // ..."
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
						children: "  }"
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
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "form"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " onSubmit"
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
							children: "{onSubmit}>"
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
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "input"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " type"
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
							children: "\"text\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " name"
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
							children: "\"name\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
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
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "button"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " type"
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
							children: "\"submit\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">Submit</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "button"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
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
							children: "    </"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "form"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
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
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Now with Next.js 14, we want to simplify the developer experience of authoring data mutations. Further, we want to improve the user experience when the user has a slow network connection, or when submitting a form from a lower-powered device." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "server-actions-stable",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#server-actions-stable",
				children: "Server Actions (Stable)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "What if you didn't need to manually create an API Route? Instead, you could define a function that runs securely on the server, called directly from your React components." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The App Router is built on the React ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "canary" }),
			" channel, which is ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/blog/2023/05/03/react-canaries",
				children: "stable for frameworks"
			}),
			" to adopt new features. As of v14, Next.js has upgraded to the latest React ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "canary" }),
			", which includes stable Server Actions."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The previous example from the Pages Router can be simplified to one file:" }),
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
			title: "app/page.tsx",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
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
							children: " Page"
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
							children: "  async"
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
							children: " create"
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
							children: "formData"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " FormData"
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
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: "    'use server'"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ";"
					})]
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
							children: "    const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " id"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " await"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " createItem"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(formData);"
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
						children: "  }"
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
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "form"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " action"
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
							children: "{create}>"
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
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "input"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " type"
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
							children: "\"text\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " name"
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
							children: "\"name\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
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
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "button"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " type"
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
							children: "\"submit\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">Submit</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "button"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
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
							children: "    </"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "form"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
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
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Server Actions should feel familiar for any developers who have previously used server-centric frameworks in the past. It's built on web fundamentals like forms and the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/en-US/docs/Web/API/FormData",
				children: "FormData Web API"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "While using Server Actions through a form is helpful for progressive enhancement, it is not a requirement. You can also call them directly as a function, without a form. When using TypeScript, this gives you full end-to-end type-safety between the client and server." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Mutating data, re-rendering the page, or redirecting can happen in ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "one network roundtrip" }),
			", ensuring the correct data is displayed on the client, even if the upstream provider is slow. Further, you can compose and reuse different actions, including many different actions in the same route."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "caching-revalidating-redirecting-and-more",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#caching-revalidating-redirecting-and-more",
				children: "Caching, Revalidating, Redirecting, and more"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Server Actions are deeply integrated into the entire App Router model. You can:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Revalidate cached data with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "revalidatePath()" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "revalidateTag()" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Redirect to different routes through ", (0, import_jsx_runtime.jsx)(_components.code, { children: "redirect()" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Set and read cookies through ", (0, import_jsx_runtime.jsx)(_components.code, { children: "cookies()" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Handle optimistic UI updates with ", (0, import_jsx_runtime.jsx)(_components.code, { children: "useOptimistic()" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Catch and display errors from the server with ", (0, import_jsx_runtime.jsx)(_components.code, { children: "useFormState()" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Display loading states on the client with ", (0, import_jsx_runtime.jsx)(_components.code, { children: "useFormStatus()" })] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations",
				children: "Forms and Mutations with Server Actions"
			}),
			" or about the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/blog/security-nextjs-server-components-actions",
				children: "security model"
			}),
			" and best practices for Server Components and Server Actions."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "partial-prerendering-preview",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#partial-prerendering-preview",
				children: "Partial Prerendering (Preview)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We'd like to share a preview of Partial Prerendering — a compiler optimization for dynamic content with a fast initial static response — that we're working on for Next.js." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Partial Prerendering builds on a decade of research and development into server-side rendering (SSR), static-site generation (SSG), and incremental static revalidation (ISR)." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "motivation",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#motivation",
				children: "Motivation"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've heard your feedback. There's currently too many runtimes, configuration options, and rendering methods to have to consider. You want the speed and reliability of static, while also supporting fully dynamic, personalized responses." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Having great performance globally ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "and" }),
			" personalization shouldn't come at the cost of complexity."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Our challenge was to create a better developer experience, simplifying the existing model without introducing new APIs for developers to learn. While partial caching of server-side content has existed, these approaches still need to meet the developer experience and composability goals we aim for." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Partial Prerendering requires no new APIs to learn." }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "built-on-react-suspense",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#built-on-react-suspense",
				children: "Built on React Suspense"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Partial Prerendering is defined by your Suspense boundaries. Here's how it works. Consider the following ecommerce page:" }),
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
			title: "app/page.tsx",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
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
							children: " Page"
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
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "main"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
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
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "header"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
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
							children: "        <"
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
							children: ">My Store</"
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
							children: ">"
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
							children: "        <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Suspense"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " fallback"
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
							children: "{<"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "CartSkeleton"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />}>"
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
							children: "          <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "ShoppingCart"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
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
							children: "        </"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Suspense"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
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
							children: "      </"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "header"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
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
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Banner"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
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
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Suspense"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " fallback"
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
							children: "{<"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "ProductListSkeleton"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />}>"
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
							children: "        <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Recommendations"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
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
							children: "      </"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "Suspense"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
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
							children: "      <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "NewProducts"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " />"
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
							children: "    </"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "main"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">"
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
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With Partial Prerendering enabled, this page generates a static shell based on your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<Suspense />" }),
			" boundaries. The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback" }),
			" from React Suspense is prerendered."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Suspense fallbacks in the shell are then replaced with dynamic components, like reading cookies to determine the cart, or showing a banner based on the user." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When a request is made, the static HTML shell is immediately served:" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<main>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  <header>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <h1>My Store</h1>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <div class=\"cart-skeleton\">" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <!-- Hole -->" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    </div>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  </header>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  <div class=\"banner\" />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  <div class=\"product-list-skeleton\">" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <!-- Hole -->" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  </div>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  <section class=\"new-products\" />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "</main>" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Since ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<ShoppingCart />" }),
			" reads from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "cookies" }),
			" to look at the user session, this component is then streamed in as part of the same HTTP request as the static shell. There are no extra network roundtrips needed."
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
			title: "app/cart.tsx",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
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
							children: " { cookies } "
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
							children: " 'next/headers'"
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
							children: " ShoppingCart"
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " cookieStore"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " cookies"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "()"
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " session"
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
							children: " cookieStore."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "get"
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
							children: "'session'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ")"
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
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: " ..."
					})]
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
			"To have the most granular static shell, this may require adding additional Suspense boundaries. However, if you're already using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "loading.js" }),
			" today, this is an implicit Suspense boundary, so no changes would be required to generate the static shell."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "coming-soon",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#coming-soon",
				children: "Coming soon"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Partial prerendering is under active development. We'll be sharing more updates in an upcoming minor release." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "metadata-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#metadata-improvements",
				children: "Metadata Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Before your page content can be streamed from the server, there's important metadata about the viewport, color scheme, and theme that need to be sent to the browser first." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Ensuring these ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "meta" }),
			" tags are sent with the initial page content helps a smooth user experience, preventing the page from flickering by changing the theme color, or shifting layout due to viewport changes."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In Next.js 14, we've decoupled blocking and non-blocking metadata. Only a small subset of metadata options are blocking, and we want to ensure non-blocking metadata will not prevent a partially prerendered page from serving the static shell." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The following metadata options are now deprecated and will be removed from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "metadata" }),
			" in a future major version:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "viewport" }), ": Sets the initial zoom and other properties of the viewport"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "colorScheme" }), ": Sets the support modes (light/dark) for the viewport"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "themeColor" }), ": Sets the color the chrome around the viewport should render with"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Starting with Next.js 14, there are new options ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://nextjs.org/docs/app/api-reference/functions/generate-viewport",
				children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "viewport" }),
					" and ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "generateViewport" })
				]
			}),
			" to replace these options. All other ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "metadata" }),
			" options remain the same."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can start adopting these new APIs today. The existing ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "metadata" }),
			" options will continue to work."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nextjs-learn-course",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nextjs-learn-course",
				children: "Next.js Learn Course"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Today we're releasing a brand new, free course on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/learn",
				children: "Next.js Learn"
			}),
			". This course teaches:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The Next.js App Router" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Styling and Tailwind CSS" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Optimizing Fonts and Images" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Creating Layouts and Pages" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Navigating Between Pages" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Setting Up Your Postgres Database" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Fetching Data with Server Components" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Static and Dynamic Rendering" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Streaming" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Partial Prerendering (Optional)" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Adding Search and Pagination" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Mutating Data" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Handling Errors" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Improving Accessibility" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Adding Authentication" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Adding Metadata" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js Learn has taught millions of developers about the foundations of the framework, and we can't wait to hear your feedback on our new addition. Head to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/learn",
				children: "nextjs.org/learn"
			}),
			" to take the course."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "other-changes",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#other-changes",
				children: "Other Changes"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" Minimum Node.js version is now ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "18.17" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" Removes WASM target for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next-swc" }),
				" build (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/57437",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" Dropped support for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "@next/font" }),
				" in favor of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/font" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nextjs.org/docs/app/building-your-application/upgrading/codemods#built-in-next-font",
					children: "Codemod"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" Changed ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "ImageResponse" }),
				" import from ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/server" }),
				" to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/og" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nextjs.org/docs/app/building-your-application/upgrading/codemods#next-og-import",
					children: "Codemod"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next export" }),
				" command has been removed in favor of ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "output: 'export'" }),
				" config (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nextjs.org/docs/app/building-your-application/deploying/static-exports",
					children: "Docs"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Deprecation]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "onLoadingComplete" }),
				" for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
				" is deprecated in favor of ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nextjs.org/docs/app/api-reference/components/image#onload",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "onLoad" })
				})
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Deprecation]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "domains" }),
				" for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
				" is deprecated in favor of ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nextjs.org/docs/app/api-reference/components/image#remotepatterns",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "remotePatterns" })
				})
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Feature]" }),
				" More verbose logging around ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
				" caching can be enabled (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nextjs.org/docs/app/api-reference/next-config-js/logging",
					children: "Docs"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" 80% smaller function size for a basic ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "create-next-app" }),
				" application"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Enhanced memory management when using ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "edge" }),
				" runtime in development"
			] }),
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
			"Next.js is the result of the combined work of over 2,900 individual developers, industry partners like Google and Meta, and our core team at Vercel. Join the community on ",
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
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Next.js Learn" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/delbaoliveira",
					children: "Delba"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/StephDietz",
					children: "Steph"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/emilkowalski",
					children: "Emil"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/balazsorban44",
					children: "Balazs"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/dizzyup",
					children: "Hector"
				}),
				", and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/timeyoutakeit",
					children: "Amy"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "And the contributions of: @05lazy, @0xadada, @2-NOW, @aarnadlr, @aaronbrown-vercel, @aaronjy, @abayomi185, @abe1272001, @abhiyandhakal, @abstractvector, @acdlite, @adamjmcgrath, @AdamKatzDev, @adamrhunter, @ademilter, @adictonator, @adilansari, @adtc, @afonsojramos, @agadzik, @agrattan0820, @akd-io, @AkifumiSato, @akshaynox, @alainkaiser, @alantoa, @albertothedev, @AldeonMoriak, @aleksa-codes, @alexanderbluhm, @alexkirsz, @alfred-mountfield, @alpha-xek, @andarist, @Andarist, @andrii-bodnar, @andykenward, @angel1254mc, @anonrig, @anthonyshew, @AntoineBourin, @anujssstw, @apeltop, @aralroca, @aretrace, @artdevgame, @artechventure, @arturbien, @Aryan9592, @AviAvinav, @aziyatali, @BaffinLee, @Banbarashik, @bencmbrook, @benjie, @bennettdams, @bertho-zero, @bigyanse, @Bitbbot, @blue-devil1134, @bot08, @bottxiang, @Bowens20832, @bre30kra69cs, @BrennanColberg, @brkalow, @BrodaNoel, @Brooooooklyn, @brunoeduardodev, @brvnonascimento, @carlos-menezes, @cassidoo, @cattmote, @cesarkohl, @chanceaclark, @charkour, @charlesbdudley, @chibicode, @chrisipanaque, @ChristianIvicevic, @chriswdmr, @chunsch, @ciruz, @cjmling, @clive-h-townsend, @colinhacks, @colinking, @coreyleelarson, @Cow258, @cprussin, @craigwheeler, @cramforce, @cravend, @cristobaldominguez95, @ctjlewis, @cvolant, @cxa, @danger-ahead, @daniel-web-developer, @danmindru, @dante-robinson, @darshanjain-entrepreneur, @darshkpatel, @davecarlson, @David0z, @davidnx, @dciug, @delbaoliveira, @denchance, @DerTimonius, @devagrawal09, @DevEsteves, @devjiwonchoi, @devknoll, @DevLab2425, @devvspaces, @didemkkaslan, @dijonmusters, @dirheimerb, @djreillo, @dlehmhus, @doinki, @dpnolte, @Drblessing, @dtinth, @ducanhgh, @DuCanhGH, @ductnn, @duncanogle, @dunklesToast, @DustinsCode, @dvakatsiienko, @dvoytenko, @dylanjha, @ecklf, @EndangeredMassa, @eps1lon, @ericfennis, @escwxyz, @Ethan-Arrowood, @ethanmick, @ethomson, @fantaasm, @feikerwu, @ferdingler, @FernandVEYRIER, @feugy, @fgiuliani, @fomichroman, @Fonger, @ForsakenHarmony, @franktronics, @FSaldanha, @fsansalvadore, @furkanmavili, @g12i, @gabschne, @gaojude, @gdborton, @gergelyke, @gfgabrielfranca, @gidgudgod, @Gladowar, @Gnadhi, @gnoff, @goguda, @greatSumini, @gruz0, @Guilleo03, @gustavostz, @hanneslund, @HarshaVardhanReddyDuvvuru, @haschikeks, @Heidar-An, @heyitsuzair, @hiddenest, @hiro0218, @hotters, @hsrvms, @hu0p, @hughlilly, @HurSungYun, @hustLer2k, @iamarpitpatidar, @ianldgs, @ianmacartney, @iaurg, @ibash, @ibrahemid, @idoob, @iiegor, @ikryvorotenko, @imranbarbhuiya, @ingovals, @inokawa, @insik-han, @isaackatayev, @ishaqibrahimbot, @ismaelrumzan, @itsmingjie, @ivanhofer, @IvanKiral, @jacobsfletch, @jakemstar, @jamespearson, @JanCizmar, @janicklas-ralph, @jankaifer, @JanKaifer, @jantimon, @jaredpalmer, @javivelasco, @jayair, @jaykch, @Jeffrey-Zutt, @jenewland1999, @jeremydouglas, @JesseKoldewijn, @jessewarren-aa, @jimcresswell, @jiwooIncludeJeong, @jocarrd, @joefreeman, @JohnAdib, @JohnAlbin, @JohnDaly, @johnnyomair, @johnta0, @joliss, @jomeswang, @joostdecock, @Josehower, @josephcsoti, @josh, @joshuabaker, @JoshuaKGoldberg, @joshuaslate, @joulev, @jsteele-stripe, @JTaylor0196, @JuanM04, @jueungrace, @juliusmarminge, @Juneezee, @Just-Moh-it, @juzhiyuan, @jyunhanlin, @kaguya3222, @karlhorky, @kevinmitch14, @keyz, @kijikunnn, @kikobeats, @Kikobeats, @kleintorres, @koba04, @koenpunt, @koltong, @konomae, @kosai106, @krmeda, @kvnang, @kwonoj, @ky1ejs, @kylemcd, @labyrinthitis, @lachlanjc, @lacymorrow, @laityned, @Lantianyou, @leerob, @leodr, @leoortizz, @li-jia-nan, @loettz, @lorenzobloedow, @lubakravche, @lucasassisrosa, @lucasconstantino, @lucgagan, @LukeSchlangen, @LuudJanssen, @lycuid, @M3kH, @m7yue, @manovotny, @maranomynet, @marcus-rise, @MarDi66, @MarkAtOmniux, @martin-wahlberg, @masnormen, @matepapp, @matthew-heath, @mattpr, @maxleiter, @MaxLeiter, @maxproske, @meenie, @meesvandongen, @mhmdrioaf, @michaeloliverx, @mike-plummer, @MiLk, @milovangudelj, @Mingyu-Song, @mirismaili, @mkcy3, @mknichel, @mltsy, @mmaaaaz, @mnajdova, @moetazaneta, @mohanraj-r, @molebox, @morganfeeney, @motopods, @mPaella, @mrkldshv, @mrxbox98, @nabsul, @nathanhammond, @nbouvrette, @nekochantaiwan, @nfinished, @Nick-Mazuk, @nickmccurdy, @niedziolkamichal, @niko20, @nikolovlazar, @nivak-monarch, @nk980113, @nnnnoel, @nocell, @notrab, @nroland013, @nuta, @nutlope, @obusk, @okcoker, @oliviertassinari, @omarhoumz, @opnay, @orionmiz, @ossan-engineer, @patrick91, @pauek, @peraltafederico, @Phiction, @pn-code, @pyjun01, @pythagoras-yamamoto, @qrohlf, @raisedadead, @reconbot, @reshmi-sriram, @reyrodrigez, @ricardofiorani, @rightones, @riqwan, @rishabhpoddar, @rjsdnql123, @rodrigofeijao, @runjuu, @Ryan-Dia, @ryo-manba, @s0h311, @sagarpreet-xflowpay, @sairajchouhan, @samdenty, @samsisle, @sanjaiyan-dev, @saseungmin, @SCG82, @schehata, @Schniz, @sepiropht, @serkanbektas, @sferadev, @ShaunFerris, @shivanshubisht, @shozibabbas, @silvioprog, @simonswiss, @simPod, @sivtu, @SleeplessOne1917, @smaeda-ks, @sonam-serchan, @SonMooSans, @soonoo, @sophiebits, @souporserious, @sp00ls, @sqve, @sreetamdas, @stafyniaksacha, @starunaway, @steebchen, @stefanprobst, @steppefox, @steven-tey, @suhaotian, @sukkaw, @SukkaW, @superbahbi, @SuttonJack, @svarunid, @swaminator, @swarnava, @syedtaqi95, @taep96, @taylorbryant, @teobler, @Terro216, @theevilhead, @thepatrick00, @therealrinku, @thomasballinger, @thorwebdev, @tibi1220, @tim-hanssen, @timeyoutakeit, @tka5, @tknickman, @tomryanx, @trigaten, @tristndev, @tunamagur0, @tvthatsme, @tyhopp, @tyler-lutz, @UnknownMonk, @v1k1, @valentincostam, @valentinh, @valentinpolitov, @vamcs, @vasucp1207, @vicsantizo, @vinaykulk621, @vincenthongzy, @visshaljagtap, @vladikoff, @wherehows, @WhoAmIRUS, @WilderDev, @Willem-Jaap, @williamli, @wiredacorn, @wiscaksono, @wojtekolek, @ws-jm, @wxh06, @wyattfry, @wyattjoh, @xiaolou86, @y-tsubuku, @yagogmaisp, @yangshun, @yasath, @Yash-Singh1, @yigithanyucedag, @ykzts, @Yovach, @yutsuten, @yyuemii, @zek, @zekicaneksi, @zignis, and @zlrlyy" })
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
export { toc as a, structuredData as i, frontmatter as n, next_14_exports as r, MDXContent as t };
