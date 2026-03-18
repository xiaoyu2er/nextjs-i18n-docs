import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-9-5-CiUEah3I.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_9_5_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 9.5",
	"description": "Next.js 9.5 introduces Stable Incremental Static Regeneration, Custom Base Path, Redirects and Rewrites, Webpack 5 Beta, and more!",
	"author": [
		{
			"name": "Connor Davis",
			"image": "/static/team/connor.jpg"
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
			"name": "Luis Alvarez",
			"image": "/static/team/lfades.jpg"
		},
		{
			"name": "Shu Uesugi",
			"image": "/static/team/chibicode.jpg"
		},
		{
			"name": "Tim Neutkens",
			"image": "/static/team/tim.jpg"
		}
	],
	"date": /* @__PURE__ */ new Date(1595867013431),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-9-5/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "We are excited today to introduce Next.js 9.5, featuring:"
		},
		{
			"heading": void 0,
			"content": "**Stable Incremental Static Regeneration**: re-build static pages after you've deployed, in milliseconds"
		},
		{
			"heading": void 0,
			"content": "**Customizable Base Path**: easily host Next.js projects on subpaths of your domain"
		},
		{
			"heading": void 0,
			"content": "**Support for Rewrites, Redirects, and Headers**: rewrite vanity URLs, redirect old URLs, and add headers to static pages"
		},
		{
			"heading": void 0,
			"content": "**Optional Trailing Slash in URLs**: consistently enforce the absence or presence of a trailing slash"
		},
		{
			"heading": void 0,
			"content": "**Persistent Caching for Page Bundles**: unchanged pages' JavaScript files now carry forward across builds"
		},
		{
			"heading": void 0,
			"content": "**Fast Refresh Enhancements**: improved reliability of the Next.js live-editing experience"
		},
		{
			"heading": void 0,
			"content": "**Production React Profiling**: a new flag to measure your project's \"cost\" of rendering"
		},
		{
			"heading": void 0,
			"content": "**Optional Catch All Routes**: dynamic routes now provide more flexibility for SEO-driven use-cases"
		},
		{
			"heading": void 0,
			"content": "**Webpack 5 Support (beta)**: optionally opt-into the next version of webpack 5 for improved build size and speed"
		},
		{
			"heading": "stable-incremental-static-regeneration",
			"content": "Next.js introduced Static Site Generation methods in 9.3 with a clear goal in mind: we should get the benefits of static (always fast, always online, globally replicated), but with excellent support for dynamic data, which Next.js is known for."
		},
		{
			"heading": "stable-incremental-static-regeneration",
			"content": "To get the best of both worlds, Next.js introduced **Incremental Static Generation**, updating static content after you have already built your site. By using the `fallback: true` option in `getStaticPaths`, you can **register** **new static pages** &#x2A;*at *runtime***."
		},
		{
			"heading": "stable-incremental-static-regeneration",
			"content": "Next.js can statically pre-render an infinite number of pages this way, on-demand, no matter how large your dataset is."
		},
		{
			"heading": "stable-incremental-static-regeneration",
			"content": "Today, we are announcing the *general availability* of **Incremental Static Re-generation**, which is a mechanism **to update *existing* pages**, by re-rendering them in the background as traffic comes in."
		},
		{
			"heading": "stable-incremental-static-regeneration",
			"content": "Inspired by stale-while-revalidate, background regeneration ensures traffic is served uninterruptedly, always from static storage, and the newly built page is pushed only *after it's done generating*."
		},
		{
			"heading": "stable-incremental-static-regeneration",
			"content": "> The revalidate flag is the number of seconds during which at most one generation will happen, to prevent a https\\://en.wikipedia.org/wiki/Cache\\_stampede."
		},
		{
			"heading": "stable-incremental-static-regeneration",
			"content": "Unlike traditional SSR, Incremental Static Regeneration ensures you retain the benefits of static:"
		},
		{
			"heading": "stable-incremental-static-regeneration",
			"content": "No spikes in latency. Pages are served consistently fast."
		},
		{
			"heading": "stable-incremental-static-regeneration",
			"content": "Pages never go offline. If the background page re-generation fails, the old page remains unaltered."
		},
		{
			"heading": "stable-incremental-static-regeneration",
			"content": "Low database and backend load. Pages are re-computed at most once \\`concurrently."
		},
		{
			"heading": "stable-incremental-static-regeneration",
			"content": "Both incremental features (adding pages and lazily updating them), as well as preview mode, are now stable and already fully supported by both `next start` and the Vercel edge platform out of the box."
		},
		{
			"heading": "stable-incremental-static-regeneration",
			"content": "To showcase this new feature we have created an example showing regenerating a static page that shows the count of various GitHub reactions of a specific issue: https\\://reactions-demo.vercel.app/"
		},
		{
			"heading": "stable-incremental-static-regeneration",
			"content": "After the first visit following our emoji reaction, a new page generation kicks off in the background. Every single request throughout is served from static cache."
		},
		{
			"heading": "stable-incremental-static-regeneration",
			"content": "Up next, we will be working on a supplemental RFC to address two additional incremental static generation capabilities:"
		},
		{
			"heading": "stable-incremental-static-regeneration",
			"content": "Re-generating and invalidating multiple pages at once (like your blog index and a certain blog post)"
		},
		{
			"heading": "stable-incremental-static-regeneration",
			"content": "Re-generating by listening to events (like CMS webhooks), ahead of user traffic"
		},
		{
			"heading": "stable-incremental-static-regeneration",
			"content": "For more details, check out the `getStaticProps` documentation."
		},
		{
			"heading": "customizable-base-path",
			"content": "Next.js projects are not always served from the root a domain. Sometimes you might want to host your Next.js project under a subpath like `/docs` so that the Next.js project only covers that subsection of the domain."
		},
		{
			"heading": "customizable-base-path",
			"content": "While this has been possible so far, it was at the expense of quite a bit of extra configuration. For example, adding the prefix to every single `<Link>` and making sure Next.js was serving the JavaScript bundles from the right path."
		},
		{
			"heading": "customizable-base-path",
			"content": "To address this pain point, we're introducing a new configuration option. `basePath` allows you to easily host your Next.js project on a subpath of your domain."
		},
		{
			"heading": "customizable-base-path",
			"content": "To get started using `basePath` you can add it to `next.config.js`:"
		},
		{
			"heading": "customizable-base-path",
			"content": "After configuring the `basePath` your project will automatically be routed from the provided path. In this case, `/docs`."
		},
		{
			"heading": "customizable-base-path",
			"content": "When linking to other pages in the project with `next/link` or `next/router` the `basePath` will be automatically prefixed. This allows you to change the `basePath` without changing your project."
		},
		{
			"heading": "customizable-base-path",
			"content": "An example of this would be using `next/link` to route to another page:"
		},
		{
			"heading": "customizable-base-path",
			"content": "Using `next/link` in this way will result in the following HTML rendered to the web browser:"
		},
		{
			"heading": "customizable-base-path",
			"content": "For more details, check out the `basePath` documentation."
		},
		{
			"heading": "rewrites",
			"content": "When building a Next.js project you might want to proxy certain routes to another URL. For example, if you want to incrementally adopt Next.js into your stack you would want to route pages that exist in your Next.js project and then everything that was not matched to the old project that you're migrating off of."
		},
		{
			"heading": "rewrites",
			"content": "With Next.js 9.5 we're introducing a new configuration option named `rewrites`, which allows you to map an incoming request path to a different destination path, including external URLs."
		},
		{
			"heading": "rewrites",
			"content": "For example, you might want to rewrite a certain route to `example.com`:"
		},
		{
			"heading": "rewrites",
			"content": "In this case, all paths under `/backend` would be routed to `example.com`."
		},
		{
			"heading": "rewrites",
			"content": "You can also check if your Next.js project routes matched and then rewrite to the previous project if there is no match. This is incredibly useful for **incremental adoption of Next.js**:"
		},
		{
			"heading": "rewrites",
			"content": "In this case, we first match all paths. If none match we proxy to `example.com` which would be the previous project."
		},
		{
			"heading": "rewrites",
			"content": "To learn more about `rewrites` feature check out the rewrites documentation."
		},
		{
			"heading": "redirects",
			"content": "Most websites need at least some redirects. Especially when changing the structure of your project routes. For example, when moving `/blog` to `/news` or similar transitions."
		},
		{
			"heading": "redirects",
			"content": "Previously having a list of redirects in your Next.js project required setting up a custom server or a custom `_error` page to check if there are redirects set for the route. However, this came at the expense of invalidating key static and serverless optimizations (by having a server) or wasn't ergonomic enough."
		},
		{
			"heading": "redirects",
			"content": "Starting from Next.js 9.5 you are now able to create a list of redirects in `next.config.js` under the `redirects` key:"
		},
		{
			"heading": "redirects",
			"content": "To learn more about `redirects` feature check out the redirects documentation."
		},
		{
			"heading": "headers",
			"content": "Next.js allows you to build hybrid projects that use both Static Generation and Server-Side Rendering. With Server-Side rendering, you can set headers for the incoming request. For static pages, setting headers was not possible until now."
		},
		{
			"heading": "headers",
			"content": "We now have introduced a `headers` property in `next.config.js` that applies to all Next.js routes:"
		},
		{
			"heading": "headers",
			"content": "The `headers` option allows you to set commonly needed headers like `Feature-Policy` and `Content-Security-Policy`."
		},
		{
			"heading": "headers",
			"content": "To learn more about `headers` feature check out the headers documentation."
		},
		{
			"heading": "optional-trailing-slash-in-urls",
			"content": "When Next.js was introduced 3 years ago, its default behavior was for all URLs with a trailing slash to always return a 404 page."
		},
		{
			"heading": "optional-trailing-slash-in-urls",
			"content": "While effective, some users have requested the ability to change this behavior. For example, when migrating an existing project to Next.js that previously always had trailing slashes enforced."
		},
		{
			"heading": "optional-trailing-slash-in-urls",
			"content": "With Next.js 9.5 we have introduced a new option called `trailingSlash` to `next.config.js`."
		},
		{
			"heading": "optional-trailing-slash-in-urls",
			"content": "This new option ensures Next.js is automatically handling the trailing slash behavior:"
		},
		{
			"heading": "optional-trailing-slash-in-urls",
			"content": "Automatically redirect trailing slash URLs to the URL without the trailing slash, for example: `/about/` to `/about`"
		},
		{
			"heading": "optional-trailing-slash-in-urls",
			"content": "When `trailingSlash` is set to `true` the URL without trailing slash will be redirected to the URL with a trailing slash, for example: `/about` to `/about/`"
		},
		{
			"heading": "optional-trailing-slash-in-urls",
			"content": "Ensures `next/link` has the trailing slash automatically applied/removed to avoid needless redirects."
		},
		{
			"heading": "optional-trailing-slash-in-urls",
			"content": "To learn more about the `trailingSlash` feature check out the trailingSlash documentation"
		},
		{
			"heading": "persistent-caching-for-page-bundles",
			"content": "When writing Next.js pages, the creation of all script bundles, CSS stylesheets, and HTML is fully automatic and abstracted away from you. If you inspect the generated `<script>` tags before Next.js 9.5, you'll notice their URLs follow a pattern like this:"
		},
		{
			"heading": "persistent-caching-for-page-bundles",
			"content": "The path segment `ovgxWYrvKyjnlM15qtz7h` above is what we called the *build ID*. While these files were easily cacheable at the edge and on the user's machine, after re-building your app, the build ID would change and all caches would be busted."
		},
		{
			"heading": "persistent-caching-for-page-bundles",
			"content": "For most projects this trade-off was fine, however, we wanted to optimize this behavior even further by no longer invalidating the browser cache for pages that had not been changed."
		},
		{
			"heading": "persistent-caching-for-page-bundles",
			"content": "The introduction of the improved code-splitting strategy in Next.js 9.2 that was developed in collaboration with the Google Chrome team laid some groundwork for these improvements to the Next.js page bundle generation."
		},
		{
			"heading": "persistent-caching-for-page-bundles",
			"content": "Starting with Next.js 9.5 **all page JavaScript bundles will use content hashes instead of the build ID**. This allows for pages that have not changed between deploys to remain in the browser and edge cache without needing to be downloaded again."
		},
		{
			"heading": "persistent-caching-for-page-bundles",
			"content": "In contrast, the URL pattern after these changes looks something like:"
		},
		{
			"heading": "persistent-caching-for-page-bundles",
			"content": "Instead of a global build ID, the `qzfS4o5gIEXRME6sTEahL` portion is a deterministic hash of the `about.js` bundle, which will be stable insomuch the code for that section of your site doesn't change. Further, **it's now cached long-term across re-deploys** via `Cache-Control: public,max-age=31536000,immutable` which Next.js automatically sets for you."
		},
		{
			"heading": "fast-refresh-enhancements",
			"content": "We introduced Fast Refresh in Next.js 9.4, a new hot reloading experience that gives you instantaneous feedback on edits made to your React components."
		},
		{
			"heading": "fast-refresh-enhancements",
			"content": "Next.js 9.5 further refines our Fast Refresh implementation and gives you the tools you need to succeed:"
		},
		{
			"heading": "fast-refresh-enhancements",
			"content": "**Easy to understand errors**: All compile and runtime errors were updated to only show **relevant information, including a code frame** of whatever code caused the error."
		},
		{
			"heading": "fast-refresh-enhancements",
			"content": "**Development-time tips to keep component state**: Next.js now provides you with helpful tips to ensure Fast Refresh will keep your component state in as many scenarios as possible. Each tip Next.js provides is **fully actionable** and accompanied by a before and after example!"
		},
		{
			"heading": "fast-refresh-enhancements",
			"content": "**Warnings when component state is reset**: We'll now print a detailed warning when Next.js is unable to keep component state after a file is edited. This warning will help you diagnose why the project had to reset component state, allowing you to fix it and utilize Fast Refresh to its full potential."
		},
		{
			"heading": "fast-refresh-enhancements",
			"content": "**New documentation**: We've added extensive documentation that explains what Fast Refresh is, how it works, and what to expect! The documentation will also teach you how to better leverage Fast Refresh by explaining how its error recovery works."
		},
		{
			"heading": "fast-refresh-enhancements",
			"content": "**User-code troubleshooting guide**: The new documentation also includes common troubleshooting steps and tips on how to get the most out of Fast Refresh in development."
		},
		{
			"heading": "production-react-profiling",
			"content": "React introduced the Profiler API a while ago which allows you to track down performance issues in your React components. While this feature works automatically in development it requires a separate version of ReactDOM to be used to profile in production."
		},
		{
			"heading": "production-react-profiling",
			"content": "With Next.js 9.5, you can now **enable production profiling for React** with the `--profile` flag in `next build`:"
		},
		{
			"heading": "production-react-profiling",
			"content": "After that, you can use the profiler in the same way as you would in development."
		},
		{
			"heading": "production-react-profiling",
			"content": "To learn more about profiling React you can read the post on the React Profiler by the React team. Special thanks to TODOrTotev and @darshkpatel for contributing this feature."
		},
		{
			"heading": "optional-catch-all-routes",
			"content": "Next.js 9.2 added support for catch-all dynamic routes which have been widely adopted by the community for various use cases. Catch-all routes give you the flexibility to create highly dynamic routing structures powered by Headless CMS, GraphQL APIs, filesystem, etc."
		},
		{
			"heading": "optional-catch-all-routes",
			"content": "In listening to feedback, we heard users wanted to have even more flexibility to *match the root-most level of a route*. Today, we're happy to unveil **optional catch-all dynamic routes** for these advanced scenarios."
		},
		{
			"heading": "optional-catch-all-routes",
			"content": "To create an optional catch-all route, you can create a page using the `[[...slug]]` syntax."
		},
		{
			"heading": "optional-catch-all-routes",
			"content": "For example, `pages/blog/[[...slug]].js` will match `/blog`, as well as any route underneath it, such as: `/blog/a`, `/blog/a/b/c`, and so on."
		},
		{
			"heading": "optional-catch-all-routes",
			"content": "Like catch-all routes, `slug` will be provided in the router query object as an array of path parts. So, for the path `/blog/foo/bar`, the query object will be `{ slug: ['foo', 'bar'] }`. For the path `/blog`, the query object will omit the slug key: `{ }`."
		},
		{
			"heading": "optional-catch-all-routes",
			"content": "You can learn more about optional catch all routes in our documentation."
		},
		{
			"heading": "webpack-5-support-beta",
			"content": "Webpack 5 is currently in beta. It includes some major improvements:"
		},
		{
			"heading": "webpack-5-support-beta",
			"content": "Improved Tree-Shaking: Nested exports, inner-module, and CommonJS are tree shaken"
		},
		{
			"heading": "webpack-5-support-beta",
			"content": "Persistent Caching: Allows for reuse of work from previous builds"
		},
		{
			"heading": "webpack-5-support-beta",
			"content": "Deterministic chunk and module ids: solves cases where webpack module ids would change between builds"
		},
		{
			"heading": "webpack-5-support-beta",
			"content": "We're excited today to announce the beta availability of webpack 5 for Next.js."
		},
		{
			"heading": "webpack-5-support-beta",
			"content": "To try out webpack 5 you can use Yarn resolutions in your `package.json`:"
		},
		{
			"heading": "webpack-5-support-beta",
			"content": "The Webpack 5 beta has already been rolled out to nextjs.org and vercel.com in production. We encourage you to try it out in a progressive manner and report back your findings on GitHub."
		},
		{
			"heading": "compilation-infrastructure-improvements",
			"content": "To support webpack 5 we have rewritten a lot of the compilation pipeline to be more tailored to Next.js:"
		},
		{
			"heading": "compilation-infrastructure-improvements",
			"content": "Next.js no longer relies on `webpack-hot-middleware` and `webpack-dev-middleware`, instead we now use webpack directly and optimize specifically for Next.js projects. This translates into a simpler architecture and faster development compilation."
		},
		{
			"heading": "compilation-infrastructure-improvements",
			"content": "On-demand-entries, which is the system Next.js has to allow it to compile on the pages that you visit at a given time during development, has also been rewritten and is now even more reliable by leveraging new webpack behavior specifically tailored for our use case."
		},
		{
			"heading": "compilation-infrastructure-improvements",
			"content": "React Fast Refresh and the Next.js Error Overlay are now fully compatible with webpack 5"
		},
		{
			"heading": "compilation-infrastructure-improvements",
			"content": "Disk caching will be enabled in a future beta release."
		},
		{
			"heading": "backwards-compatibility",
			"content": "We are always committed to ensuring that Next.js is backwards compatible with previous versions."
		},
		{
			"heading": "backwards-compatibility",
			"content": "Webpack 4 will continue to be fully supported. We are working closely with the webpack team to ensure the migration from webpack 4 to 5 is as smooth as possible."
		},
		{
			"heading": "backwards-compatibility",
			"content": "If your Next.js project has no custom webpack configuration, no project changes will be needed to fully leverage webpack 5."
		},
		{
			"heading": "backwards-compatibility",
			"content": "**Important:** if your project has custom webpack configuration, some changes might be needed to transition to webpack 5. We recommend keeping an eye out for our migration instructions or minimize your usage of webpack extensions altogether for seamless future upgrades."
		},
		{
			"heading": "improved-file-watching-on-macos",
			"content": "We recently found an issue with webpack where file watching on macOS would stop after making a few changes to your code. You'd have to restart your project manually to see updates again. After a few changes, the cycle would repeat."
		},
		{
			"heading": "improved-file-watching-on-macos",
			"content": "Furthermore, we found that this issue didn't just happen in Next.js projects but all projects and frameworks that build on top of webpack."
		},
		{
			"heading": "improved-file-watching-on-macos",
			"content": "After several days of debugging the issue, we tracked down its root cause to the file watching implementation that webpack uses called chokidar, which is a file watching implementation widely used in the Node.js ecosystem."
		},
		{
			"heading": "improved-file-watching-on-macos",
			"content": "We sent a patch to chokidar to fix the issue. After the patch was released we worked with Tobias Koppers to roll out this patch in a new webpack version."
		},
		{
			"heading": "improved-file-watching-on-macos",
			"content": "This patched webpack version is automatically used when you upgrade to Next.js 9.5."
		},
		{
			"heading": "conclusion",
			"content": "We're excited to see the continued growth in Next.js adoption:"
		},
		{
			"heading": "conclusion",
			"content": "We have had over **1,200** independent contributors\\*\\*,\\*\\* with over **135** new contributors since the 9.4 release."
		},
		{
			"heading": "conclusion",
			"content": "On GitHub, the project has been starred over **51,100** times."
		},
		{
			"heading": "conclusion",
			"content": "Join the Next.js community on GitHub Discussions. Discussions is a community space that allows you to connect with other Next.js users and freely ask questions or share your work."
		},
		{
			"heading": "conclusion",
			"content": "For example, you might want to start by sharing your project URL with everyone."
		},
		{
			"heading": "conclusion",
			"content": "If you want to give back but unsure how, we encourage you to try experimental features like our Webpack support and report back your findings!"
		},
		{
			"heading": "credits",
			"content": "We are thankful to our community, including all the external feedback and contributions that helped shape this release."
		},
		{
			"heading": "credits",
			"content": "Special thanks to Jan Potoms, a long-time Next.js community member who contributed to multiple features in this release."
		},
		{
			"heading": "credits",
			"content": "Special thanks to Tobias Koppers, the author of webpack, who helped land webpack 5 support in Next.js."
		},
		{
			"heading": "credits",
			"content": "This release was brought to you by the contributions of: @chandan-reddy-k, @Timer, @aralroca, @artemisart, @sospedra, @prateekbh, @Prioe, @Janpot, @merceyz, @ijjk, @PavelK27, @marbiano, @MichelleLucero, @thorsten-stripe, @TODOrTotev, @Skn0tt, @lfades, @timneutkens, @akhila-ariyachandra, @chibicode, @rafaelalmeidatk, @kirill-konshin, @jamesvidler, @JeffersonBledsoe, @tylev, @jamesmosier, @filipemarins, @Remeic, @vvo, @timothyis, @jazibsawar, @coetry, @adam-zacharski, @danwilliams, @tywmick, @matamatanot, @goldins, @mvllow, @its-tayo, @sshyam-gupta, @wilbert-abreu, @sebastianbenz, @jaydenseric, @developit, @dylanjha, @darshkpatel, @spinks, @stefanprobst, @moh12594, @jasonmerino, @cristiand391, @HyunSangHan, @mcsdevv, @M1ck0, @hydRAnger, @alexej-d, @valmassoi, @motleydev, @eKhattak, @jpedroschmitz, @JerryGoyal, @bowen31337, @phillip055, @balazsorban44, @chuabingquan, @youhosi, @andresz1, @bell-steven, @areai51, @Wssn, @ndom91, @anthonyshort, @zxzl, @jbowes, @IamLizu, @PascalPixel, @ralphilius, @ysun62, @muslax, @elsigh, @AsherFoster, @botv, @tomdohnal, @christianalfoni, @tomasztunik, @gsimone, @illuminist, @jplew, @OskarKaminski, @RickyAbell, @steph-query, @ericgoe, @MalvinJay, @cristianbote, @Ashikpaul, @jensmeindertsma, @amorriscode, @abhik-b, @awareness481, @LukasPolak, @arvigeus, @romMidnight, @jackyef, @drumm2k, @kuldeepkeshwar, @bogy0, @Belco90, @wawjr3d, @tanmaylaud, @SarKurd, @kevinsproles, @dstotijn, @styfle, @blackwright, @BrunoBernardino, @heyAyushh, @Necmttn, @TrySound, @obedparla, @NyashaNziramasanga, @tonyspiro, @kukicado, @ceorourke, @MehediH, @robintom, @karlhorky, and @tcK1!"
		}
	],
	"headings": [
		{
			"id": "stable-incremental-static-regeneration",
			"content": "Stable Incremental Static Regeneration"
		},
		{
			"id": "customizable-base-path",
			"content": "Customizable Base Path"
		},
		{
			"id": "support-for-rewrites-redirects-and-headers",
			"content": "Support for Rewrites, Redirects, and Headers"
		},
		{
			"id": "rewrites",
			"content": "Rewrites"
		},
		{
			"id": "redirects",
			"content": "Redirects"
		},
		{
			"id": "headers",
			"content": "Headers"
		},
		{
			"id": "optional-trailing-slash-in-urls",
			"content": "Optional Trailing Slash in URLs"
		},
		{
			"id": "persistent-caching-for-page-bundles",
			"content": "Persistent Caching for Page Bundles"
		},
		{
			"id": "fast-refresh-enhancements",
			"content": "Fast Refresh Enhancements"
		},
		{
			"id": "production-react-profiling",
			"content": "Production React Profiling"
		},
		{
			"id": "optional-catch-all-routes",
			"content": "Optional Catch All Routes"
		},
		{
			"id": "webpack-5-support-beta",
			"content": "Webpack 5 Support (beta)"
		},
		{
			"id": "compilation-infrastructure-improvements",
			"content": "Compilation infrastructure improvements"
		},
		{
			"id": "backwards-compatibility",
			"content": "Backwards compatibility"
		},
		{
			"id": "improved-file-watching-on-macos",
			"content": "Improved file watching on macOS"
		},
		{
			"id": "conclusion",
			"content": "Conclusion"
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
		url: "#stable-incremental-static-regeneration",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#stable-incremental-static-regeneration",
			children: "Stable Incremental Static Regeneration"
		}) })
	},
	{
		depth: 2,
		url: "#customizable-base-path",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#customizable-base-path",
			children: "Customizable Base Path"
		}) })
	},
	{
		depth: 2,
		url: "#support-for-rewrites-redirects-and-headers",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#support-for-rewrites-redirects-and-headers",
			children: "Support for Rewrites, Redirects, and Headers"
		}) })
	},
	{
		depth: 3,
		url: "#rewrites",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#rewrites",
			children: "Rewrites"
		}) })
	},
	{
		depth: 3,
		url: "#redirects",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#redirects",
			children: "Redirects"
		}) })
	},
	{
		depth: 3,
		url: "#headers",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#headers",
			children: "Headers"
		}) })
	},
	{
		depth: 2,
		url: "#optional-trailing-slash-in-urls",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#optional-trailing-slash-in-urls",
			children: "Optional Trailing Slash in URLs"
		}) })
	},
	{
		depth: 2,
		url: "#persistent-caching-for-page-bundles",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#persistent-caching-for-page-bundles",
			children: "Persistent Caching for Page Bundles"
		}) })
	},
	{
		depth: 2,
		url: "#fast-refresh-enhancements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#fast-refresh-enhancements",
			children: "Fast Refresh Enhancements"
		}) })
	},
	{
		depth: 2,
		url: "#production-react-profiling",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#production-react-profiling",
			children: "Production React Profiling"
		}) })
	},
	{
		depth: 2,
		url: "#optional-catch-all-routes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#optional-catch-all-routes",
			children: "Optional Catch All Routes"
		}) })
	},
	{
		depth: 2,
		url: "#webpack-5-support-beta",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#webpack-5-support-beta",
			children: "Webpack 5 Support (beta)"
		}) })
	},
	{
		depth: 3,
		url: "#compilation-infrastructure-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#compilation-infrastructure-improvements",
			children: "Compilation infrastructure improvements"
		}) })
	},
	{
		depth: 3,
		url: "#backwards-compatibility",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#backwards-compatibility",
			children: "Backwards compatibility"
		}) })
	},
	{
		depth: 3,
		url: "#improved-file-watching-on-macos",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#improved-file-watching-on-macos",
			children: "Improved file watching on macOS"
		}) })
	},
	{
		depth: 2,
		url: "#conclusion",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#conclusion",
			children: "Conclusion"
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
		blockquote: "blockquote",
		code: "code",
		em: "em",
		h2: "h2",
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We are excited today to introduce Next.js 9.5, featuring:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#stable-incremental-static-regeneration",
				children: "Stable Incremental Static Regeneration"
			}) }), ": re-build static pages after you've deployed, in milliseconds"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#customizable-base-path",
				children: "Customizable Base Path"
			}) }), ": easily host Next.js projects on subpaths of your domain"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#support-for-rewrites-redirects-and-headers",
				children: "Support for Rewrites, Redirects, and Headers"
			}) }), ": rewrite vanity URLs, redirect old URLs, and add headers to static pages"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#optional-trailing-slash-in-urls",
				children: "Optional Trailing Slash in URLs"
			}) }), ": consistently enforce the absence or presence of a trailing slash"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#persistent-caching-for-page-bundles",
				children: "Persistent Caching for Page Bundles"
			}) }), ": unchanged pages' JavaScript files now carry forward across builds"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#fast-refresh-enhancements",
				children: "Fast Refresh Enhancements"
			}) }), ": improved reliability of the Next.js live-editing experience"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#production-react-profiling",
				children: "Production React Profiling"
			}) }), ": a new flag to measure your project's \"cost\" of rendering"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#optional-catch-all-routes",
				children: "Optional Catch All Routes"
			}) }), ": dynamic routes now provide more flexibility for SEO-driven use-cases"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#webpack-5-support-beta",
				children: "Webpack 5 Support (beta)"
			}) }), ": optionally opt-into the next version of webpack 5 for improved build size and speed"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "stable-incremental-static-regeneration",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#stable-incremental-static-regeneration",
				children: "Stable Incremental Static Regeneration"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js introduced ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/blog/next-9-3#next-gen-static-site-generation-ssg-support",
				children: "Static Site Generation methods in 9.3"
			}),
			" with a clear goal in mind: we should get ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://rauchg.com/2020/2019-in-review#static-is-the-new-dynamic",
				children: "the benefits of static"
			}),
			" (always fast, always online, ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://rauchg.com/2020/static-hoisting#hoist-to-the-edge",
				children: "globally replicated"
			}),
			"), but with excellent support for dynamic data, which Next.js is known for."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To get the best of both worlds, Next.js introduced ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Incremental Static Generation" }),
			", updating static content after you have already built your site. By using the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/api-reference/data-fetching/get-static-paths#fallback-false",
				children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback: true" }),
					" option in ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })
				]
			}),
			", you can ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "register" }),
			" ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "new static pages" }),
			" ",
			(0, import_jsx_runtime.jsxs)(_components.strong, { children: ["at ", (0, import_jsx_runtime.jsx)(_components.em, { children: "runtime" })] }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js can statically pre-render an infinite number of pages this way, on-demand, no matter how large your dataset is." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Today, we are announcing the ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "general availability" }),
			" of ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Incremental Static Re-generation" }),
			", which is a mechanism ",
			(0, import_jsx_runtime.jsxs)(_components.strong, { children: [
				"to update ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "existing" }),
				" pages"
			] }),
			", by re-rendering them in the background as traffic comes in."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Inspired by ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://tools.ietf.org/html/rfc5861",
				children: "stale-while-revalidate"
			}),
			", background regeneration ensures traffic is served uninterruptedly, always from static storage, and the newly built page is pushed only ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "after it's done generating" }),
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function getStaticProps() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    props: await getDataFromCMS()," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    // we will attempt to re-generate the page:" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    // - when a request comes in" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    // - at most once every second" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    revalidate: 1," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  };" })
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
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"The revalidate flag is the number of seconds during which at most one generation will happen, to prevent a ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://en.wikipedia.org/wiki/Cache_stampede",
					children: "https://en.wikipedia.org/wiki/Cache_stampede"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Unlike traditional SSR, Incremental Static Regeneration ensures you retain the benefits of static:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "No spikes in latency. Pages are served consistently fast." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Pages never go offline. If the background page re-generation fails, the old page remains unaltered." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Low database and backend load. Pages are re-computed at most once `concurrently." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Both incremental features (adding pages and lazily updating them), as well as ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/configuring/preview-mode",
				children: "preview mode"
			}),
			", are now stable and already fully supported by both ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
			" and the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com",
				children: "Vercel edge platform"
			}),
			" out of the box."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: ["To showcase this new feature we have created an example showing regenerating a static page that shows the count of various GitHub reactions of a specific issue: ", (0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://reactions-demo.vercel.app/",
			children: "https://reactions-demo.vercel.app/"
		})] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-9-5/reactions-demo.gif",
			alt: "After the first visit following our emoji reaction, a new page generation kicks off in the background. Every single request throughout is served from static cache."
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "After the first visit following our emoji reaction, a new page generation kicks off in the background. Every single request throughout is served from static cache." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Up next, we will be working on a supplemental RFC to address two additional incremental static generation capabilities:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Re-generating and invalidating multiple pages at once (like your blog index and a certain blog post)" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Re-generating by listening to events (like CMS webhooks), ahead of user traffic" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more details, check out ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/pages/building-your-application/data-fetching#getstaticprops-static-generation",
				children: [
					"the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
					" documentation"
				]
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "customizable-base-path",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#customizable-base-path",
				children: "Customizable Base Path"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js projects are not always served from the root a domain. Sometimes you might want to host your Next.js project under a subpath like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/docs" }),
			" so that the Next.js project only covers that subsection of the domain."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"While this has been possible so far, it was at the expense of quite a bit of extra configuration. For example, adding the prefix to every single ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<Link>" }),
			" and making sure Next.js was serving the JavaScript bundles from the right path."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To address this pain point, we're introducing a new configuration option. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "basePath" }),
			" allows you to easily host your Next.js project on a subpath of your domain."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To get started using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "basePath" }),
			" you can add it to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  basePath: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/docs'"
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
						children: "};"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"After configuring the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "basePath" }),
			" your project will automatically be routed from the provided path. In this case, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/docs" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When linking to other pages in the project with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/router" }),
			" the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "basePath" }),
			" will be automatically prefixed. This allows you to change the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "basePath" }),
			" without changing your project."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"An example of this would be using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" }),
			" to route to another page:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import Link from 'next/link';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function HomePage() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return (" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <Link href=\"/documentation-page\">" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        <a>Documentation page</a>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      </Link>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    </>" })
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
			"Using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" }),
			" in this way will result in the following HTML rendered to the web browser:"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<a href=\"/docs/documentation-page\">Documentation page</a>" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more details, check out ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/basePath",
				children: [
					"the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "basePath" }),
					" documentation"
				]
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "support-for-rewrites-redirects-and-headers",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#support-for-rewrites-redirects-and-headers",
				children: "Support for Rewrites, Redirects, and Headers"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "rewrites",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#rewrites",
				children: "Rewrites"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When building a Next.js project you might want to proxy certain routes to another URL. For example, if you want to incrementally adopt Next.js into your stack you would want to route pages that exist in your Next.js project and then everything that was not matched to the old project that you're migrating off of." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With Next.js 9.5 we're introducing a new configuration option named ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "rewrites" }),
			", which allows you to map an incoming request path to a different destination path, including external URLs."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, you might want to rewrite a certain route to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "example.com" }),
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " rewrites"
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
						children: "    return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ["
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
							children: "      { source: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/backend/:path*'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", destination: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'https://example.com/:path*'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " },"
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
						children: "    ];"
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
			"In this case, all paths under ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/backend" }),
			" would be routed to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "example.com" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can also check if your Next.js project routes matched and then rewrite to the previous project if there is no match. This is incredibly useful for ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "incremental adoption of Next.js" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "module.exports = {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  async rewrites() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    return [" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      // check if Next.js project routes match before we attempt proxying" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        source: '/:path*'," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        destination: '/:path*'," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      }," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        source: '/:path*'," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        destination: `https://example.com/:path*`," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      }," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    ];" })
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
			"In this case, we first match all paths. If none match we proxy to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "example.com" }),
			" which would be the previous project."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To learn more about ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "rewrites" }),
			" feature check out the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/rewrites",
				children: "rewrites documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "redirects",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#redirects",
				children: "Redirects"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Most websites need at least some redirects. Especially when changing the structure of your project routes. For example, when moving ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/blog" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/news" }),
			" or similar transitions."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Previously having a list of redirects in your Next.js project required setting up a custom server or a custom ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "_error" }),
			" page to check if there are redirects set for the route. However, this came at the expense of invalidating key static and serverless optimizations (by having a server) or wasn't ergonomic enough."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Starting from Next.js 9.5 you are now able to create a list of redirects in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			" under the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "redirects" }),
			" key:"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " redirects"
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
						children: "    return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ["
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
						children: "      {"
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
							children: "        source: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/about'"
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
							children: "        destination: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/'"
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
							children: "        permanent: "
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
						children: "      },"
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
						children: "    ];"
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
			"To learn more about ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "redirects" }),
			" feature check out the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/redirects",
				children: "redirects documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "headers",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#headers",
				children: "Headers"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js allows you to build hybrid projects that use both Static Generation and Server-Side Rendering. With Server-Side rendering, you can set headers for the incoming request. For static pages, setting headers was not possible until now." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We now have introduced a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "headers" }),
			" property in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			" that applies to all Next.js routes:"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " headers"
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
						children: "    return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ["
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
						children: "      {"
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
							children: "        source: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/:path*'"
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
						children: "        headers: ["
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
						children: "          {"
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
							children: "            key: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'Feature-Policy'"
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
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "            // Disable microphone and geolocation"
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
							children: "            value: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"microphone 'none'; geolocation 'none'\""
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
						children: "          },"
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
						children: "        ],"
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
						children: "      },"
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
						children: "    ];"
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
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "headers" }),
			" option allows you to set commonly needed headers like ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/HTTP/Headers/Feature-Policy",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Feature-Policy" })
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/HTTP/CSP",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Content-Security-Policy" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To learn more about ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "headers" }),
			" feature check out the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/headers",
				children: "headers documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "optional-trailing-slash-in-urls",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#optional-trailing-slash-in-urls",
				children: "Optional Trailing Slash in URLs"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When Next.js was introduced 3 years ago, its default behavior was for all URLs with a trailing slash to always return a 404 page." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "While effective, some users have requested the ability to change this behavior. For example, when migrating an existing project to Next.js that previously always had trailing slashes enforced." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With Next.js 9.5 we have introduced a new option called ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "trailingSlash" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This new option ensures Next.js is automatically handling the trailing slash behavior:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Automatically redirect trailing slash URLs to the URL without the trailing slash, for example: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/about/" }),
				" to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/about" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"When ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "trailingSlash" }),
				" is set to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "true" }),
				" the URL without trailing slash will be redirected to the URL with a trailing slash, for example: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/about" }),
				" to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/about/" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Ensures ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" }),
				" has the trailing slash automatically applied/removed to avoid needless redirects."
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
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "  // Force a trailing slash, the default value is no trailing slash (false)"
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
							children: "  trailingSlash: "
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
						children: "};"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To learn more about the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "trailingSlash" }),
			" feature check out the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/trailingSlash",
				children: "trailingSlash documentation"
			})
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "persistent-caching-for-page-bundles",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#persistent-caching-for-page-bundles",
				children: "Persistent Caching for Page Bundles"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When writing Next.js pages, the creation of all script bundles, CSS stylesheets, and HTML is fully automatic and abstracted away from you. If you inspect the generated ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<script>" }),
			" tags before Next.js 9.5, you'll notice their URLs follow a pattern like this:"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "/_next/static/ovgxWYrvKyjnlM15qtz7h/pages/about.js" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The path segment ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ovgxWYrvKyjnlM15qtz7h" }),
			" above is what we called the ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "build ID" }),
			". While these files were easily cacheable at the edge and on the user's machine, after re-building your app, the build ID would change and all caches would be busted."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For most projects this trade-off was fine, however, we wanted to optimize this behavior even further by no longer invalidating the browser cache for pages that had not been changed." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The introduction of the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/blog/next-9-2#improved-code-splitting-strategy",
				children: "improved code-splitting strategy in Next.js 9.2"
			}),
			" that was developed in collaboration with the Google Chrome team laid some groundwork for these improvements to the Next.js page bundle generation."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Starting with Next.js 9.5 ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "all page JavaScript bundles will use content hashes instead of the build ID" }),
			". This allows for pages that have not changed between deploys to remain in the browser and edge cache without needing to be downloaded again."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In contrast, the URL pattern after these changes looks something like:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "/_next/static/chunks/pages/about.qzfS4o5gIEXRME6sTEahL.js" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Instead of a global build ID, the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "qzfS4o5gIEXRME6sTEahL" }),
			" portion is a deterministic hash of the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "about.js" }),
			" bundle, which will be stable insomuch the code for that section of your site doesn't change. Further, ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "it's now cached long-term across re-deploys" }),
			" via ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Cache-Control: public,max-age=31536000,immutable" }),
			" which Next.js automatically sets for you."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "fast-refresh-enhancements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#fast-refresh-enhancements",
				children: "Fast Refresh Enhancements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/blog/next-9-4#fast-refresh",
				children: "introduced Fast Refresh in Next.js 9.4"
			}),
			", a new hot reloading experience that gives you instantaneous feedback on edits made to your React components."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js 9.5 further refines our Fast Refresh implementation and gives you the tools you need to succeed:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Easy to understand errors" }),
				": All compile and runtime errors were updated to ",
				(0, import_jsx_runtime.jsxs)(_components.a, {
					href: "https://twitter.com/timer150/status/1263689549898829829",
					children: [
						"only show ",
						(0, import_jsx_runtime.jsx)(_components.strong, { children: "relevant information, including a code frame" }),
						" of whatever code caused the error"
					]
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Development-time tips to keep component state" }),
				": Next.js now provides you with helpful tips to ensure Fast Refresh will keep your component state in as many scenarios as possible. Each tip Next.js provides is ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "fully actionable" }),
				" and accompanied by a before and after example!"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Warnings when component state is reset" }), ": We'll now print a detailed warning when Next.js is unable to keep component state after a file is edited. This warning will help you diagnose why the project had to reset component state, allowing you to fix it and utilize Fast Refresh to its full potential."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "New documentation" }),
				": We've ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/architecture/fast-refresh",
					children: "added extensive documentation"
				}),
				" that explains what Fast Refresh is, how it works, and what to expect! The documentation will also teach you how to better leverage Fast Refresh by explaining how its error recovery works."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "User-code troubleshooting guide" }),
				": The new documentation also includes ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/architecture/fast-refresh#tips",
					children: "common troubleshooting steps and tips"
				}),
				" on how to get the most out of Fast Refresh in development."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "production-react-profiling",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#production-react-profiling",
				children: "Production React Profiling"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"React introduced the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/reactjs/rfcs/pull/51",
				children: "Profiler API"
			}),
			" a while ago which allows you to track down performance issues in your React components. While this feature works automatically in development it requires a separate version of ReactDOM to be used to profile in production."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With Next.js 9.5, you can now ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "enable production profiling for React" }),
			" with the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--profile" }),
			" flag in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "next build --profile" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "After that, you can use the profiler in the same way as you would in development." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To learn more about profiling React you can read ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html",
				children: "the post on the React Profiler by the React team"
			}),
			". Special thanks to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/TodorTotev",
				children: "TODOrTotev"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/darshkpatel",
				children: "@darshkpatel"
			}),
			" for contributing this feature."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "optional-catch-all-routes",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#optional-catch-all-routes",
				children: "Optional Catch All Routes"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js 9.2 added ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/blog/next-9-2#catch-all-dynamic-routes",
				children: "support for catch-all dynamic routes"
			}),
			" which have been widely adopted by the community for various use cases. Catch-all routes give you the flexibility to create highly dynamic routing structures powered by Headless CMS, GraphQL APIs, filesystem, etc."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In listening to feedback, we heard users wanted to have even more flexibility to ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "match the root-most level of a route" }),
			". Today, we're happy to unveil ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "optional catch-all dynamic routes" }),
			" for these advanced scenarios."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To create an optional catch-all route, you can create a page using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "[[...slug]]" }),
			" syntax."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/blog/[[...slug]].js" }),
			" will match ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/blog" }),
			", as well as any route underneath it, such as: ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/blog/a" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/blog/a/b/c" }),
			", and so on."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Like catch-all routes, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "slug" }),
			" will be provided in the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/functions/use-router#router-object",
				children: "router query object"
			}),
			" as an array of path parts. So, for the path ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/blog/foo/bar" }),
			", the query object will be ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "{ slug: ['foo', 'bar'] }" }),
			". For the path ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/blog" }),
			", the query object will omit the slug key: ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "{ }" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-routes",
				children: "learn more about optional catch all routes in our documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "webpack-5-support-beta",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#webpack-5-support-beta",
				children: "Webpack 5 Support (beta)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Webpack 5 is currently in beta. It includes some major improvements:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/webpack/changelog-v5#nested-tree-shaking",
				children: "Improved Tree-Shaking"
			}), ": Nested exports, inner-module, and CommonJS are tree shaken"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/webpack/changelog-v5#persistent-caching",
				children: "Persistent Caching"
			}), ": Allows for reuse of work from previous builds"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/webpack/changelog-v5#deterministic-chunk-and-module-ids",
				children: "Deterministic chunk and module ids"
			}), ": solves cases where webpack module ids would change between builds"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're excited today to announce the beta availability of webpack 5 for Next.js." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To try out webpack 5 you can use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://classic.yarnpkg.com/en/docs/selective-version-resolutions/",
				children: "Yarn resolutions"
			}),
			" in your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "package.json" }),
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
			title: "package.json",
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
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "  \"resolutions\""
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ": {"
					})]
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
							children: "    \"webpack\""
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
							children: "\"^5.0.0-beta.30\""
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
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The Webpack 5 beta has already been rolled out to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://nextjs.org",
				children: "nextjs.org"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com",
				children: "vercel.com"
			}),
			" in production. We encourage you to try it out in a progressive manner and report back your findings on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/issues/13341",
				children: "GitHub"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "compilation-infrastructure-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#compilation-infrastructure-improvements",
				children: "Compilation infrastructure improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To support webpack 5 we have rewritten a lot of the compilation pipeline to be more tailored to Next.js:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Next.js no longer relies on ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "webpack-hot-middleware" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "webpack-dev-middleware" }),
				", instead we now use webpack directly and optimize specifically for Next.js projects. This translates into a simpler architecture and faster development compilation."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/blog/next-8#improved-on-demand-entries",
				children: "On-demand-entries"
			}), ", which is the system Next.js has to allow it to compile on the pages that you visit at a given time during development, has also been rewritten and is now even more reliable by leveraging new webpack behavior specifically tailored for our use case."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/blog/next-9-4#fast-refresh",
				children: "React Fast Refresh and the Next.js Error Overlay"
			}), " are now fully compatible with webpack 5"] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Disk caching will be enabled in a future beta release." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "backwards-compatibility",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#backwards-compatibility",
				children: "Backwards compatibility"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We are always committed to ensuring that Next.js is backwards compatible with previous versions." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Webpack 4 will continue to be fully supported. We are working closely with the webpack team to ensure the migration from webpack 4 to 5 is as smooth as possible." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If your Next.js project has no custom webpack configuration, no project changes will be needed to fully leverage webpack 5." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Important:" }),
			" if your project has ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/api-reference/next-config-js/webpack",
				children: "custom webpack configuration"
			}),
			", some changes might be needed to transition to webpack 5. We recommend keeping an eye out for our migration instructions or minimize your usage of webpack extensions altogether for seamless future upgrades."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "improved-file-watching-on-macos",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improved-file-watching-on-macos",
				children: "Improved file watching on macOS"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We recently found an issue with webpack where file watching on macOS would stop after making a few changes to your code. You'd have to restart your project manually to see updates again. After a few changes, the cycle would repeat." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Furthermore, we found that this issue didn't just happen in Next.js projects but all projects and frameworks that build on top of webpack." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "After several days of debugging the issue, we tracked down its root cause to the file watching implementation that webpack uses called chokidar, which is a file watching implementation widely used in the Node.js ecosystem." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We sent a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/paulmillr/chokidar/pull/1018",
				children: "patch to chokidar"
			}),
			" to fix the issue. After the patch was released we worked with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/sokra",
				children: "Tobias Koppers"
			}),
			" to roll out this patch in a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/webpack/webpack/releases/tag/v4.44.0",
				children: "new webpack version"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This patched webpack version is automatically used when you upgrade to Next.js 9.5." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "conclusion",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#conclusion",
				children: "Conclusion"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're excited to see the continued growth in Next.js adoption:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"We have had over ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "1,200" }),
				" independent contributors**,** with over ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "135" }),
				" new contributors since the 9.4 release."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"On GitHub, the project has been starred over ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "51,100" }),
				" times."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Join the Next.js community on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions",
				children: "GitHub Discussions"
			}),
			". Discussions is a community space that allows you to connect with other Next.js users and freely ask questions or share your work."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, you might want to start by ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions/10640",
				children: "sharing your project URL"
			}),
			" with everyone."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If you want to give back but unsure how, we encourage you to try experimental features like our Webpack support and report back your findings!" }),
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Special thanks to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/janpot",
				children: "Jan Potoms"
			}),
			", a long-time Next.js community member who contributed to multiple features in this release."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Special thanks to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://twitter.com/wsokra",
				children: "Tobias Koppers"
			}),
			", the author of webpack, who helped land webpack 5 support in Next.js."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This release was brought to you by the contributions of: @chandan-reddy-k, @Timer, @aralroca, @artemisart, @sospedra, @prateekbh, @Prioe, @Janpot, @merceyz, @ijjk, @PavelK27, @marbiano, @MichelleLucero, @thorsten-stripe, @TODOrTotev, @Skn0tt, @lfades, @timneutkens, @akhila-ariyachandra, @chibicode, @rafaelalmeidatk, @kirill-konshin, @jamesvidler, @JeffersonBledsoe, @tylev, @jamesmosier, @filipemarins, @Remeic, @vvo, @timothyis, @jazibsawar, @coetry, @adam-zacharski, @danwilliams, @tywmick, @matamatanot, @goldins, @mvllow, @its-tayo, @sshyam-gupta, @wilbert-abreu, @sebastianbenz, @jaydenseric, @developit, @dylanjha, @darshkpatel, @spinks, @stefanprobst, @moh12594, @jasonmerino, @cristiand391, @HyunSangHan, @mcsdevv, @M1ck0, @hydRAnger, @alexej-d, @valmassoi, @motleydev, @eKhattak, @jpedroschmitz, @JerryGoyal, @bowen31337, @phillip055, @balazsorban44, @chuabingquan, @youhosi, @andresz1, @bell-steven, @areai51, @Wssn, @ndom91, @anthonyshort, @zxzl, @jbowes, @IamLizu, @PascalPixel, @ralphilius, @ysun62, @muslax, @elsigh, @AsherFoster, @botv, @tomdohnal, @christianalfoni, @tomasztunik, @gsimone, @illuminist, @jplew, @OskarKaminski, @RickyAbell, @steph-query, @ericgoe, @MalvinJay, @cristianbote, @Ashikpaul, @jensmeindertsma, @amorriscode, @abhik-b, @awareness481, @LukasPolak, @arvigeus, @romMidnight, @jackyef, @drumm2k, @kuldeepkeshwar, @bogy0, @Belco90, @wawjr3d, @tanmaylaud, @SarKurd, @kevinsproles, @dstotijn, @styfle, @blackwright, @BrunoBernardino, @heyAyushh, @Necmttn, @TrySound, @obedparla, @NyashaNziramasanga, @tonyspiro, @kukicado, @ceorourke, @MehediH, @robintom, @karlhorky, and @tcK1!" })
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
export { toc as a, structuredData as i, frontmatter as n, next_9_5_exports as r, MDXContent as t };
