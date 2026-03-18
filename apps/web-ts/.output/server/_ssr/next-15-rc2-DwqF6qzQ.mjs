import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-15-rc2-DwqF6qzQ.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_15_rc2_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 15 RC 2",
	"description": "The second Next.js 15 Release Candidate (RC) is now available. This version allows you to test the latest features before the upcoming stable release.",
	"author": [
		{
			"name": "Delba de Oliveira",
			"image": "/static/team/delba.jpg"
		},
		{
			"name": "Jiachi Liu",
			"image": "/static/team/jiachi.png"
		},
		{
			"name": "Jiwon Choi",
			"image": "/static/team/jiwon.png"
		},
		{
			"name": "Josh Story",
			"image": "/static/team/josh.jpg"
		},
		{
			"name": "Sebastian Silbermann",
			"image": "/static/team/sebbie.png"
		},
		{
			"name": "Zack Tanner",
			"image": "/static/team/zack.jpg"
		}
	],
	"date": /* @__PURE__ */ new Date(17289576e5),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc2/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Following the announcement of the first Next.js 15 Release Candidate back in May, we’ve been preparing a second Release Candidate based on your feedback. Here’s what we’ve been working on:"
		},
		{
			"heading": void 0,
			"content": "**`@next/codemod upgrade`**: Easily upgrade to the latest Next.js and React versions."
		},
		{
			"heading": void 0,
			"content": "**Turbopack for development**: Performance improvements and Next.js 15 stability target."
		},
		{
			"heading": void 0,
			"content": "**Async Request APIs (Breaking)**: Incremental step towards a simplified rendering and caching model."
		},
		{
			"heading": void 0,
			"content": "**Server Actions**: Enhanced security with unguessable endpoints and removal of unused actions."
		},
		{
			"heading": void 0,
			"content": "**Static Indicator**: New visual indicator shows static routes during development."
		},
		{
			"heading": void 0,
			"content": "**`next/form`**: Enhance HTML forms with client-side navigation."
		},
		{
			"heading": void 0,
			"content": "**`next.config.ts`**: TypeScript support for the Next.js configuration file."
		},
		{
			"heading": void 0,
			"content": "**`instrumentation.js` (Stable)**: New API for server lifecycle observability."
		},
		{
			"heading": void 0,
			"content": "**Development and Build improvements**: Improved build times and Faster Fast Refresh."
		},
		{
			"heading": void 0,
			"content": "**Self-hosting**: More control over `Cache-Control` headers."
		},
		{
			"heading": void 0,
			"content": "**Linting**: Added support for ESLint 9."
		},
		{
			"heading": void 0,
			"content": "Try the Next.js 15 Release Candidate (RC2) today:"
		},
		{
			"heading": void 0,
			"content": "> **Note:** This Release Candidate includes all changes from the previous RC."
		},
		{
			"heading": "smooth-upgrades-with-codemod-cli",
			"content": "We include codemods (automated code transformations) with every major Next.js release to help automate upgrading breaking changes."
		},
		{
			"heading": "smooth-upgrades-with-codemod-cli",
			"content": "To make upgrades even smoother, we've released an enhanced codemod CLI:"
		},
		{
			"heading": "smooth-upgrades-with-codemod-cli",
			"content": "This tool helps you upgrade your codebase to the latest stable or prerelease versions. The CLI will update your dependencies, show available codemods, and guide you through applying them. The specified dist tag on the command line (`@rc`, `@canary`, etc.) determines the version to upgrade to."
		},
		{
			"heading": "smooth-upgrades-with-codemod-cli",
			"content": "Learn more about Next.js codemods."
		},
		{
			"heading": "turbopack-for-development",
			"content": "Turbopack for local development will become stable in the general release of Next.js 15, while remaining opt-in. You can try it today by running:"
		},
		{
			"heading": "turbopack-for-development",
			"content": "Thanks to the thousands of developers who participated in testing, reporting issues, and verifying fixes throughout the Turbopack beta and release candidate phases, we've resolved 54 GitHub issues since the first Next.js 15 Release Candidate. Alongside this community effort, our internal testing on vercel.com, v0.dev, and nextjs.org helped identify numerous additional improvements."
		},
		{
			"heading": "turbopack-for-development",
			"content": "In the last three months, we've focused on optimizing cold compilation performance. Compared to the previous release, we've seen:"
		},
		{
			"heading": "turbopack-for-development",
			"content": "**25–35% reduction** in memory usage."
		},
		{
			"heading": "turbopack-for-development",
			"content": "**30–50% faster** compilation for large pages with thousands of modules."
		},
		{
			"heading": "turbopack-for-development",
			"content": "We will continue to optimize these areas in future releases."
		},
		{
			"heading": "turbopack-for-development",
			"content": "Looking ahead, the Turbopack team is making significant progress on persistent caching, memory usage reduction, and Turbopack for `next build`—with 96% of tests passing."
		},
		{
			"heading": "turbopack-for-development",
			"content": "> **Note:** See all of the supported and unsupported features of Turbopack."
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "In traditional Server-Side Rendering, the server waits for a request before rendering any content. However, not all components depend on request-specific data, so it's unnecessary to wait for the request to render them. Ideally, the server would prepare as much as possible before a request arrives. To enable this, and set the stage for future optimizations, we need to know when to wait for the request."
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "Therefore, we are transitioning APIs that rely on request-specific data—such as `headers`, `cookies`, `params`, and `searchParams`—to be **asynchronous**."
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "This is a **breaking change** and affects the following APIs:"
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "`cookies`"
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "`headers`"
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "`draftMode`"
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "`params` in `layout.js`, `page.js`, `route.js`, `default.js`, `generateMetadata`, and `generateViewport`"
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "`searchParams` in `page.js`"
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "For an easier migration, these APIs can temporarily be accessed synchronously, but will show warnings in development and production until the next major version. A codemod is available to automate the migration:"
		},
		{
			"heading": "async-request-apis-breaking-change",
			"content": "For cases where the codemod can't fully migrate your code, please read the upgrade guide. We have also provided an example of how to migrate a Next.js application to the new APIs."
		},
		{
			"heading": "enhanced-security-for-server-actions",
			"content": "Server Actions are server-side functions that can be called from the client. They are defined by adding the `'use server'` directive at the top of a file and exporting an async function."
		},
		{
			"heading": "enhanced-security-for-server-actions",
			"content": "Even if a Server Action or utility function is not imported elsewhere in your code, it’s still a publicly accessible HTTP endpoint. While this behavior is technically correct, it can lead to unintentional exposure of such functions."
		},
		{
			"heading": "enhanced-security-for-server-actions",
			"content": "To improve security, we’ve introduced the following enhancements:"
		},
		{
			"heading": "enhanced-security-for-server-actions",
			"content": "**Dead code elimination:** Unused Server Actions won’t have their IDs exposed to the client-side JavaScript bundle, reducing bundle size and improving performance."
		},
		{
			"heading": "enhanced-security-for-server-actions",
			"content": "**Secure action IDs:** Next.js now creates unguessable, non-deterministic IDs to allow the client to reference and call the Server Action. These IDs are periodically recalculated between builds for enhanced security."
		},
		{
			"heading": "enhanced-security-for-server-actions",
			"content": "You should still treat Server Actions as public HTTP endpoints. Learn more about securing Server Actions."
		},
		{
			"heading": "static-route-indicator",
			"content": "Next.js now displays a Static Route Indicator during development to help you identify which routes are static or dynamic. This visual cue makes it easier to optimize performance by understanding how your pages are rendered."
		},
		{
			"heading": "static-route-indicator",
			"content": "You can also use the next build output to view the rendering strategy for all routes."
		},
		{
			"heading": "static-route-indicator",
			"content": "This update is part of our ongoing efforts to enhance observability in Next.js, making it easier for developers to monitor, debug, and optimize their applications. We're also working on dedicated developer tools, with more details to come soon."
		},
		{
			"heading": "static-route-indicator",
			"content": "Learn more about the Static Route Indicator, which can be disabled."
		},
		{
			"heading": "form-component",
			"content": "The new\xA0`<Form>`\xA0component extends the HTML\xA0`<form>`\xA0element with\xA0prefetching, client-side navigation, and progressive enhancement."
		},
		{
			"heading": "form-component",
			"content": "It is useful for forms that navigate to a new page, such as a search form that leads to a results page."
		},
		{
			"heading": "form-component",
			"content": "The `<Form>` component comes with:"
		},
		{
			"heading": "form-component",
			"content": "**Prefetching**: When the form is in view, the layout and loading UI are prefetched, making navigation fast."
		},
		{
			"heading": "form-component",
			"content": "**Client-side Navigation:** On submission, shared layouts and client-side state are preserved."
		},
		{
			"heading": "form-component",
			"content": "**Progressive Enhancement**: If JavaScript hasn’t loaded yet, the form still works via full-page navigation."
		},
		{
			"heading": "form-component",
			"content": "Previously, achieving these features required a lot of manual boilerplate. For example:"
		},
		{
			"heading": "form-component",
			"content": "Example"
		},
		{
			"heading": "form-component",
			"content": "Learn more about the `<Form>` Component."
		},
		{
			"heading": "support-for-nextconfigts",
			"content": "Next.js now supports the TypeScript `next.config.ts` file type and provides a `NextConfig` type for autocomplete and type-safe options:"
		},
		{
			"heading": "support-for-nextconfigts",
			"content": "Learn more about TypeScript support in Next.js."
		},
		{
			"heading": "instrumentationjs-stable",
			"content": "The `instrumentation` file, with the `register()` API, allows users to tap into the Next.js server lifecycle to monitor performance, track the source of errors, and deeply integrate with observability libraries like OpenTelemetry."
		},
		{
			"heading": "instrumentationjs-stable",
			"content": "This feature is now **stable** and the `experimental.instrumentationHook` config option can be removed."
		},
		{
			"heading": "instrumentationjs-stable",
			"content": "In addition, we’ve collaborated with Sentry on designing a new `onRequestError` hook that can be used to:"
		},
		{
			"heading": "instrumentationjs-stable",
			"content": "Capture important context about all errors thrown on the server, including:"
		},
		{
			"heading": "instrumentationjs-stable",
			"content": "Router: Pages Router or App Router"
		},
		{
			"heading": "instrumentationjs-stable",
			"content": "Server context: Server Component, Server Action, Route Handler, or Middleware"
		},
		{
			"heading": "instrumentationjs-stable",
			"content": "Report the errors to your favorite observability provider."
		},
		{
			"heading": "instrumentationjs-stable",
			"content": "Learn more about the `onRequestError` function."
		},
		{
			"heading": "server-components-hmr",
			"content": "During development, Server components are re-executed when saved. This means, any `fetch` requests to your API endpoints or third-party services are also called."
		},
		{
			"heading": "server-components-hmr",
			"content": "To improve local development performance and reduce potential costs for billed API calls, we now ensure Hot Module Replacement (HMR) can re-use\xA0`fetch`\xA0responses from previous renders."
		},
		{
			"heading": "server-components-hmr",
			"content": "Learn more about the Server Components HMR Cache."
		},
		{
			"heading": "faster-static-generation-for-the-app-router",
			"content": "We've optimized static generation to improve build times, especially for pages with slow network requests."
		},
		{
			"heading": "faster-static-generation-for-the-app-router",
			"content": "Previously, our static optimization process rendered pages twice—once to generate data for client-side navigation and a second time to render the HTML for the initial page visit. Now, we reuse the first render, cutting out the second pass, reducing workload and build times."
		},
		{
			"heading": "faster-static-generation-for-the-app-router",
			"content": "Additionally, static generation workers now share the `fetch` cache across pages. If a `fetch` call doesn’t opt out of caching, its results are reused by other pages handled by the same worker. This reduces the number of requests for the same data."
		},
		{
			"heading": "advanced-static-generation-control-experimental",
			"content": "We’ve added experimental support for more control over static generation process for advanced use cases that would benefit from greater control."
		},
		{
			"heading": "advanced-static-generation-control-experimental",
			"content": "We recommend sticking to the current defaults unless you have specific requirements as these options can lead to increased resource usage and potential out-of-memory errors due to increased concurrency."
		},
		{
			"heading": "advanced-static-generation-control-experimental",
			"content": "Learn more about the Static Generation options."
		},
		{
			"heading": "improvements-for-self-hosting",
			"content": "When self-hosting applications, you may need more control over `Cache-Control` directives."
		},
		{
			"heading": "improvements-for-self-hosting",
			"content": "One common case is controlling the `stale-while-revalidate` period sent for ISR pages. We've implemented two improvements:"
		},
		{
			"heading": "improvements-for-self-hosting",
			"content": "You can now configure the `expireTime` value in `next.config`. This was previously the `experimental.swrDelta` option."
		},
		{
			"heading": "improvements-for-self-hosting",
			"content": "Updated the default value to one year, ensuring most CDNs can fully apply the `stale-while-revalidate` semantics as intended."
		},
		{
			"heading": "improvements-for-self-hosting",
			"content": "We also no longer override custom `Cache-Control` values with our default values, allowing full control and ensuring compatibility with any CDN setup."
		},
		{
			"heading": "improvements-for-self-hosting",
			"content": "Finally, we've improved image optimization when self-hosting. Previously, we recommended you install `sharp` for optimizing images on your Next.js server. This recommendation was sometimes missed. With Next.js 15, you no longer need to manually install `sharp` — Next.js will use `sharp` automatically when using `next start` or running with standalone output mode."
		},
		{
			"heading": "improvements-for-self-hosting",
			"content": "To learn more, see our new demo and tutorial video on self-hosting Next.js."
		},
		{
			"heading": "eslint-9-support",
			"content": "Next.js 15 also introduces support for ESLint 9, following the end-of-life for ESLint 8 on October 5, 2024."
		},
		{
			"heading": "eslint-9-support",
			"content": "To ensure a smooth transition, Next.js remain backwards compatible, meaning you can continue using either ESLint 8 or 9."
		},
		{
			"heading": "eslint-9-support",
			"content": "If you upgrade to ESLint 9, and we detect that you haven’t yet adopted the new config format, Next.js will automatically apply the `ESLINT_USE_FLAT_CONFIG=false` escape hatch to ease migration."
		},
		{
			"heading": "eslint-9-support",
			"content": "Additionally, deprecated options like `—ext` and `—ignore-path` will be removed when running `next lint`. Please note that ESLint will eventually disallow these older configurations in ESLint 10, so we recommend starting your migration soon."
		},
		{
			"heading": "eslint-9-support",
			"content": "For more details on these changes, check out the migration guide."
		},
		{
			"heading": "eslint-9-support",
			"content": "As part of this update, we’ve also upgraded `eslint-plugin-react-hooks` to `v5.0.0`, which introduces new rules for React Hooks usage. You can review all changes in the changelog for eslint-plugin-react-hooks\\@5.0.0."
		},
		{
			"heading": "other-changes",
			"content": "All of the changes previously described in the RC 1 blog post"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** We’ve deprecated exporting `export const runtime = \"experimental-edge\"` in the App Router. Users should now switch to `export const runtime = \"edge\"`. We’ve added a codemod to perform this (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** Calling `revalidateTag` and `revalidatePath` during render will now throw an error (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** The `instrumentation.js` and `middleware.js` files will now use the vendored React packages (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** The minimum required Node.js version has been updated to 18.18.0 (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** `next/dynamic`: the deprecated `suspense` prop has been removed and when the component is used in the App Router, it won't insert an empty Suspense boundary anymore (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** When resolving modules on the Edge Runtime, the `worker` module condition will not be applied (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Breaking]** Disallow using `ssr: false` option with `next/dynamic` in Server Components (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** The `outputFileTracingRoot`, `outputFileTracingIncludes` and `outputFileTracingExcludes` have been upgraded from experimental and are now stable (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Avoid merging global CSS files with CSS module files deeper in the tree (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** The cache handler can be specified via the `NEXT_CACHE_HANDLER_PATH` environment variable (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** The Pages Router now supports both React 18 and React 19 (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** The Error Overlay now displays a button to copy the Node.js Inspector URL if the inspector is enabled (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Client prefetches on the App Router now use the `priority` attribute (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Next.js now provides an `unstable_rethrow` function to rethrow Next.js internal errors in the App Router (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** `unstable_after` can now be used in static pages (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** If a `next/dynamic` component is used during SSR, the chunk will be prefetched (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** The `esmExternals` option is now supported on the App Router (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** The `experimental.allowDevelopmentBuild` option can be used to allow `NODE_ENV=development` with `next build` for debugging purposes (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** The Server Action transforms are now disabled in the Pages Router (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Build workers will now stop the build from hanging when they exit (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** When redirecting from a Server Action, revalidations will now apply correctly (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Dynamic params are now handled correctly for parallel routes on the Edge Runtime (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Static pages will now respect staleTime after initial load (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** `vercel/og` updated with a memory leak fix (PR)"
		},
		{
			"heading": "other-changes",
			"content": "**\\[Improvement]** Patch timings updated to allow usage of packages like `msw` for APIs mocking (PR)"
		},
		{
			"heading": "contributors",
			"content": "Next.js is the result of the combined work of over 3,000 individual developers, and our core team at Vercel. This release was brought to you by:"
		},
		{
			"heading": "contributors",
			"content": "The\xA0**Next.js**\xA0team:\xA0Andrew,\xA0Hendrik,\xA0Janka,\xA0Jiachi,\xA0Jimmy,\xA0Jiwon,\xA0JJ,\xA0Josh, Sam,\xA0Sebastian, Sebbie,\xA0Shu,\xA0Wyatt, and Zack."
		},
		{
			"heading": "contributors",
			"content": "The\xA0**Turbopack**\xA0team:\xA0Alex, Benjamin, Donny,\xA0Maia,\xA0Niklas,\xA0Tim,\xA0Tobias, and\xA0Will."
		},
		{
			"heading": "contributors",
			"content": "The **Next.js Docs**\xA0 team:\xA0Delba,\xA0Rich,\xA0Ismael, and\xA0Lee."
		},
		{
			"heading": "contributors",
			"content": "Huge thanks to @huozhi, @shuding, @wyattjoh, @PaulAsjes, @mcnaveen, @timneutkens, @stipsan, @aktoriukas, @sirTangale, @greatvivek11, @sokra, @anatoliik-lyft, @wbinnssmith, @coltonehrman, @hungdoansy, @kxlow, @ztanner, @manovotny, @leerob, @ryota-murakami, @ijjk, @pnutmath, @feugy, @Jeffrey-Zutt, @wiesson, @eps1lon, @devjiwonchoi, @Ethan-Arrowood, @kenji-webdev, @domdomegg, @samcx, @Jaaneek, @evanwinter, @kdy1, @balazsorban44, @feedthejim, @ForsakenHarmony, @kwonoj, @delbaoliveira, @xiaohanyu, @dvoytenko, @bobaaaaa, @bgw, @gaspar09, @souporserious, @unflxw, @kiner-tang, @Ehren12, @EffectDoplera, @IAmKushagraSharma, @Auxdible, @sean-rallycry, @jeanmax1me, @unstubbable, @NilsJacobsen, @adiguno, @ryan-nauman, @zsh77, @KagamiChan, @steveluscher, @MehfoozurRehman, @vkryachko, @chentsulin, @samijaber, @begalinsaf, @FluxCapacitor2, @lukahartwig, @brianshano, @pavelglac, @styfle, @symant233, @HristovCodes, @karlhorky, @jonluca, @jonathan-ingram, @mknichel, @sopranopillow, @Gomah, @imddc, @notrab, @gabrielrolfsen, @remorses, @AbhiShake1, @agadzik, @rishabhpoddar, @rezamauliadi, @IncognitoTGT, @webtinax, @BunsDev, @nisabmohd, @z0n, @bennettdams, @joeshub, @n1ckoates, @srkirkland, @RiskyMH, @coopbri, @okoyecharles, @diogocapela, @dnhn, @typeofweb, @davidsa03, @imranolas, @lubieowoce, @maxhaomh, @mirasayon, @blvdmitry, @hwangstar156, @lforst, @emmerich, @christian-bromann, @Lsnsh, @datner, @hiro0218, @flybayer, @ianmacartney, @ypessoa, @ryohidaka, @icyJoseph, @Arinji2, @lovell, @nsams, @Nayeem-XTREME, @JamBalaya56562, @Arindam200, @gaojude, @qqww08, @todor0v, @tokkiyaa, @arlyon, @lorensr, @Juneezee, @Sayakie, @IGassmann, @bosconian-dynamics, @phryneas, @akazwz, @atik-persei, @shubh73, @alpedia0, @chogyejin, @notomo, @ArnoldVanN, @dhruv-kaushik, @kevva, @Kahitar, @anay-208, @boris-szl, @devnyxie, @LorisSigrist, @M-YasirGhaffar, @Lada496, @kippmr, @torresgol10, @pkiv, @Netail, @jontewks, @ArnaudFavier, @chrisjstott, @mratlamwala, @mayank1513, @karlkeefer, @kshehadeh, @Marukome0743, @a89529294, @anku255, @KeisukeNagakawa, @andrii-bodnar, @aldosch, @versecafe, @steadily-worked, @cfrank, @QiuranHu, @farsabbutt, @joostmeijles, @saltcod, @archanaagivale30, @crutchcorn, @crebelskydico, @Maaz-Ahmed007, @jophy-ye, @remcohaszing, @JoshuaKGoldberg, @creativoma, @GyoHeon, @SukkaW, @MaxLeiter, @neila-a, @stylessh, @Teddir, @ManuLpz4, @Julian-Louis, @syi0808, @mert-duzgun, @amannn, @MonstraG, @hamirmahal, @tariknh, @Kikobeats, @LichuAcu, @Kuboczoch, @himself65, @Sam-Phillemon9493, @Shruthireddy04, @Hemanshu-Upadhyay, @timfuhrmann, @controversial, @pathliving, @mischnic, @mauroaccornero, @NavidNourani, @allanchau, @ekremkenter, @yurivangeffen, @gnoff, @darthmaim, @gdborton, @Willem-Jaap, @KentoMoriwaki, @TrevorSayre, @marlier, @Luluno01, @xixixao, @domin-mnd, @niketchandivade, @N2D4, @kjugi, @luciancah, @mud-ali, @codeSTACKr, @luojiyin1987, @mehmetozguldev, @ronanru, @tknickman, @joelhooks, @khawajaJunaid, @rubyisrust, @abdull-haseeb, @bewinsnw, @housseindjirdeh, @li-jia-nan, @aralroca, @s-ekai, @ah100101, @jantimon, @jordienr, @iscekic, @Strift, @slimbde, @nauvalazhar, @HughHzyb, @guisehn, @wesbos, @OlyaPolya, @paarthmadan, @AhmedBaset, @dineshh-m, @avdeev, @Bhavya031, @MildTomato, @Bjornnyborg, @amikofalvy, @yosefbeder, @kjac, @woutvanderploeg, @Ocheretovich, @ProchaLu, @luismiramirez, @omahs, @theoludwig, @abhi12299, @sommeeeer, @lumirlumir, @royalfig, @iampoul, @molebox, @txxxxc, @zce, @mamuso, @kahlstrm, @vercel-release-bot, @zhawtof, @PapatMayuri, @PlagueFPS, @IDNK2203, @jericopulvera, @liby, @CannonLock, @timfish, @whatisagi, @none23, @haouvw, @Pyr33x, @SouthLink, @frydj, @CrutchTheClutch, @sleevezip, @r34son, @yunsii, @md-rejoyan-islam, @kartheesan05, @nattui, @KonkenBonken, @weicheng95, @brekk, @Francoscopic, @B33fb0n3, @ImDR, @nurullah, @hdodov, @ebCrypto, @soedirgo, @floriangosse, @Tim-Zj, @raeyoung-kim, @erwannbst, @DerTimonius, @hirotomoyamada, @Develliot, @chandanpasunoori, @vicb, @ankur-dwivedi, @kidonng, @baeharam, @AnaTofuZ, @coderfin, @xugetsu, @alessiomaffeis, @kutsan, @jordyfontoura, @sebmarkbage, @tranvanhieu01012002, @jlbovenzo, @Luk-z, @jaredhan418, @bangseongbeom, @penicillin0, @neoFinch, @DeepakBalaraman, @Manoj-M-S, @Unsleeping, @lonr, @Aerilym, @ytori, @acdlite, @actopas, @n-ii-ma, @adcichowski, @mobeigi, @JohnGemstone, and @jjm2317 for helping!"
		}
	],
	"headings": [
		{
			"id": "smooth-upgrades-with-codemod-cli",
			"content": "Smooth upgrades with codemod CLI"
		},
		{
			"id": "turbopack-for-development",
			"content": "Turbopack for Development"
		},
		{
			"id": "async-request-apis-breaking-change",
			"content": "Async Request APIs (Breaking Change)"
		},
		{
			"id": "enhanced-security-for-server-actions",
			"content": "Enhanced Security for Server Actions"
		},
		{
			"id": "static-route-indicator",
			"content": "Static Route Indicator"
		},
		{
			"id": "form-component",
			"content": "`<Form>` Component"
		},
		{
			"id": "support-for-nextconfigts",
			"content": "Support for `next.config.ts`"
		},
		{
			"id": "instrumentationjs-stable",
			"content": "`instrumentation.js` (Stable)"
		},
		{
			"id": "development-and-build-improvements",
			"content": "Development and Build Improvements"
		},
		{
			"id": "server-components-hmr",
			"content": "Server Components HMR"
		},
		{
			"id": "faster-static-generation-for-the-app-router",
			"content": "Faster Static Generation for the App Router"
		},
		{
			"id": "advanced-static-generation-control-experimental",
			"content": "Advanced Static Generation Control (Experimental)"
		},
		{
			"id": "improvements-for-self-hosting",
			"content": "Improvements for self-hosting"
		},
		{
			"id": "eslint-9-support",
			"content": "ESLint 9 Support"
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
		url: "#smooth-upgrades-with-codemod-cli",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#smooth-upgrades-with-codemod-cli",
			children: "Smooth upgrades with codemod CLI"
		}) })
	},
	{
		depth: 2,
		url: "#turbopack-for-development",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#turbopack-for-development",
			children: "Turbopack for Development"
		}) })
	},
	{
		depth: 2,
		url: "#async-request-apis-breaking-change",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#async-request-apis-breaking-change",
			children: "Async Request APIs (Breaking Change)"
		}) })
	},
	{
		depth: 2,
		url: "#enhanced-security-for-server-actions",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#enhanced-security-for-server-actions",
			children: "Enhanced Security for Server Actions"
		}) })
	},
	{
		depth: 2,
		url: "#static-route-indicator",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#static-route-indicator",
			children: "Static Route Indicator"
		}) })
	},
	{
		depth: 2,
		url: "#form-component",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#form-component",
			children: [(0, import_jsx_runtime.jsx)("code", { children: "<Form>" }), " Component"]
		}) })
	},
	{
		depth: 2,
		url: "#support-for-nextconfigts",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#support-for-nextconfigts",
			children: ["Support for ", (0, import_jsx_runtime.jsx)("code", { children: "next.config.ts" })]
		}) })
	},
	{
		depth: 2,
		url: "#instrumentationjs-stable",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#instrumentationjs-stable",
			children: [(0, import_jsx_runtime.jsx)("code", { children: "instrumentation.js" }), " (Stable)"]
		}) })
	},
	{
		depth: 2,
		url: "#development-and-build-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#development-and-build-improvements",
			children: "Development and Build Improvements"
		}) })
	},
	{
		depth: 3,
		url: "#server-components-hmr",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#server-components-hmr",
			children: "Server Components HMR"
		}) })
	},
	{
		depth: 3,
		url: "#faster-static-generation-for-the-app-router",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#faster-static-generation-for-the-app-router",
			children: "Faster Static Generation for the App Router"
		}) })
	},
	{
		depth: 3,
		url: "#advanced-static-generation-control-experimental",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#advanced-static-generation-control-experimental",
			children: "Advanced Static Generation Control (Experimental)"
		}) })
	},
	{
		depth: 2,
		url: "#improvements-for-self-hosting",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#improvements-for-self-hosting",
			children: "Improvements for self-hosting"
		}) })
	},
	{
		depth: 2,
		url: "#eslint-9-support",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#eslint-9-support",
			children: "ESLint 9 Support"
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
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { Image } = _components;
	if (!Image) _missingMdxReference("Image", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Following the announcement of the first Next.js 15 Release Candidate ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/blog/next-15-rc",
				children: "back in May,"
			}),
			" we’ve been preparing a second Release Candidate based on your feedback. Here’s what we’ve been working on:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#smooth-upgrades-with-codemod-cli",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "@next/codemod upgrade" }) })
			}), ": Easily upgrade to the latest Next.js and React versions."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#turbopack-for-development",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Turbopack for development" })
			}), ": Performance improvements and Next.js 15 stability target."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#async-request-apis-breaking-change",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Async Request APIs (Breaking)" })
			}), ": Incremental step towards a simplified rendering and caching model."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#enhanced-security-for-server-actions",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Server Actions" })
			}), ": Enhanced security with unguessable endpoints and removal of unused actions."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#static-route-indicator",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Static Indicator" })
			}), ": New visual indicator shows static routes during development."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#form-component",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next/form" }) })
			}), ": Enhance HTML forms with client-side navigation."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#support-for-nextconfigts",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.ts" }) })
			}), ": TypeScript support for the Next.js configuration file."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#instrumentationjs-stable",
				children: (0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation.js" }), " (Stable)"] })
			}), ": New API for server lifecycle observability."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#development-and-build-improvements",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Development and Build improvements" })
			}), ": Improved build times and Faster Fast Refresh."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#improvements-for-self-hosting",
					children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Self-hosting" })
				}),
				": More control over ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Cache-Control" }),
				" headers."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#eslint-9-support",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Linting" })
			}), ": Added support for ESLint 9."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Try the Next.js 15 Release Candidate (RC2) today:" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "# Use the new automated upgrade CLI" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "npx @next/codemod@canary upgrade rc" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "# ...or upgrade manually" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "npm install next@rc react@rc react-dom@rc" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }),
				" This Release Candidate includes all changes from the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/blog/next-15-rc",
					children: "previous RC"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "smooth-upgrades-with-codemod-cli",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#smooth-upgrades-with-codemod-cli",
				children: "Smooth upgrades with codemod CLI"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We include codemods (automated code transformations) with every major Next.js release to help automate upgrading breaking changes." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To make upgrades even smoother, we've released an enhanced codemod CLI:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "npx @next/codemod@canary upgrade rc" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This tool helps you upgrade your codebase to the latest stable or prerelease versions. The CLI will update your dependencies, show available codemods, and guide you through applying them. The specified dist tag on the command line (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@rc" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@canary" }),
			", etc.) determines the version to upgrade to."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/canary/app/building-your-application/upgrading/codemods",
				children: "Next.js codemods"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "turbopack-for-development",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#turbopack-for-development",
				children: "Turbopack for Development"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Turbopack for local development will become stable in the general release of Next.js 15, while remaining opt-in. You can try it today by running:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "next dev --turbo" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Thanks to the thousands of developers who participated in testing, reporting issues, and verifying fixes throughout the Turbopack beta and release candidate phases, we've resolved ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/issues?q=is:issue+is:closed+label:Turbopack+created:%3E%3D2024-05-23+",
				children: "54 GitHub issues"
			}),
			" since the first Next.js 15 Release Candidate. Alongside this community effort, our internal testing on ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://vercel.com/",
				children: "vercel.com"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://v0.dev",
				children: "v0.dev"
			}),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://nextjs.org/",
				children: "nextjs.org"
			}),
			" helped identify numerous additional improvements."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In the last three months, we've focused on optimizing cold compilation performance. Compared to the previous release, we've seen:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "25–35% reduction" }), " in memory usage."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "30–50% faster" }), " compilation for large pages with thousands of modules."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We will continue to optimize these areas in future releases." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Looking ahead, the Turbopack team is making significant progress on persistent caching, memory usage reduction, and Turbopack for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			"—with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://areweturboyet.com/build",
				children: "96% of tests passing"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }),
				" See all of the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/architecture/turbopack#unsupported-features",
					children: "supported and unsupported features"
				}),
				" of Turbopack."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "async-request-apis-breaking-change",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#async-request-apis-breaking-change",
				children: "Async Request APIs (Breaking Change)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In traditional Server-Side Rendering, the server waits for a request before rendering any content. However, not all components depend on request-specific data, so it's unnecessary to wait for the request to render them. Ideally, the server would prepare as much as possible before a request arrives. To enable this, and set the stage for future optimizations, we need to know when to wait for the request." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Therefore, we are transitioning APIs that rely on request-specific data—such as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "headers" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "cookies" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "params" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "searchParams" }),
			"—to be ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "asynchronous" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import { cookies } from 'next/headers';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function AdminPanel() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const cookieStore = await cookies();" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const token = cookieStore.get('token');" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // ..." })
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
			"This is a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "breaking change" }),
			" and affects the following APIs:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "cookies" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "headers" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "draftMode" }) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "params" }),
				" in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "layout.js" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "route.js" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "default.js" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "generateMetadata" }),
				", and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "generateViewport" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "searchParams" }),
				" in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "page.js" })
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For an easier migration, these APIs can temporarily be accessed synchronously, but will show warnings in development and production until the next major version. A ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/canary/app/building-your-application/upgrading/codemods",
				children: "codemod"
			}),
			" is available to automate the migration:"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "npx @next/codemod@canary next-async-request-api ." })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For cases where the codemod can't fully migrate your code, please read the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/canary/app/building-your-application/upgrading/version-15",
				children: "upgrade guide"
			}),
			". We have also provided an ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/leerob/next-saas-starter/pull/62",
				children: "example"
			}),
			" of how to migrate a Next.js application to the new APIs."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "enhanced-security-for-server-actions",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#enhanced-security-for-server-actions",
				children: "Enhanced Security for Server Actions"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://react.dev/reference/rsc/server-actions",
				children: "Server Actions"
			}),
			" are server-side functions that can be called from the client. They are defined by adding the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "'use server'" }),
			" directive at the top of a file and exporting an async function."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Even if a Server Action or utility function is not imported elsewhere in your code, it’s still a publicly accessible HTTP endpoint. While this behavior is technically correct, it can lead to unintentional exposure of such functions." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To improve security, we’ve introduced the following enhancements:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Dead code elimination:" }), " Unused Server Actions won’t have their IDs exposed to the client-side JavaScript bundle, reducing bundle size and improving performance."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Secure action IDs:" }), " Next.js now creates unguessable, non-deterministic IDs to allow the client to reference and call the Server Action. These IDs are periodically recalculated between builds for enhanced security."] }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// app/actions.js" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "'use server';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// This action **is** used in our application, so Next.js" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// will create a secure ID to allow the client to reference" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// and call the Server Action." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function updateUserAction(formData) {}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// This action **is not** used in our application, so Next.js" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// will automatically remove this code during `next build`" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// and will not create a public endpoint." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function deleteUserAction(formData) {}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You should still treat Server Actions as public HTTP endpoints. Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/blog/security-nextjs-server-components-actions#write",
				children: "securing Server Actions"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "static-route-indicator",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#static-route-indicator",
				children: "Static Route Indicator"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js now displays a Static Route Indicator during development to help you identify which routes are static or dynamic. This visual cue makes it easier to optimize performance by understanding how your pages are rendered." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "",
			srcLight: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc2/static-route-light.png",
			srcDark: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-15-rc2/static-route-dark.png",
			width: "1720",
			height: "516"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can also use the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/cli/next#next-build-options",
				children: "next build"
			}),
			" output to view the rendering strategy for all routes."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This update is part of our ongoing efforts to enhance observability in Next.js, making it easier for developers to monitor, debug, and optimize their applications. We're also working on dedicated developer tools, with more details to come soon." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/canary/app/api-reference/next-config-js/devIndicators#appisrstatus-static-indicator",
				children: "Static Route Indicator"
			}),
			", which can be disabled."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "form-component",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#form-component",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "<Form>" }), " Component"]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The new\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<Form>" }),
			"\xA0component extends the HTML\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<form>" }),
			"\xA0element with\xA0",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching",
				children: "prefetching"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/routing/linking-and-navigating#5-soft-navigation",
				children: "client-side navigation"
			}),
			", and progressive enhancement."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "It is useful for forms that navigate to a new page, such as a search form that leads to a results page." }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import Form from 'next/form';" })
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return (" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    <Form action=\"/search\">" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <input name=\"query\" />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      <button type=\"submit\">Submit</button>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    </Form>" })
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
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<Form>" }),
			" component comes with:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Prefetching" }),
				": When the form is in view, the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/layout",
					children: "layout"
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/loading",
					children: "loading"
				}),
				" UI are prefetched, making navigation fast."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Client-side Navigation:" }), " On submission, shared layouts and client-side state are preserved."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Progressive Enhancement" }), ": If JavaScript hasn’t loaded yet, the form still works via full-page navigation."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Previously, achieving these features required a lot of manual boilerplate. For example:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Example" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// Note: This is abbreviated for demonstration purposes." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "// Not recommended for use in production code." })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "'use client'" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import { useEffect } from 'react'" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import { useRouter } from 'next/navigation'" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function Form(props) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const action = props.action" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const router = useRouter()" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  useEffect(() => {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    // if form target is a URL, prefetch it" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    if (typeof action === 'string') {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      router.prefetch(action)" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    }" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  }, [action, router])" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  function onSubmit(event) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    event.preventDefault()" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    // grab all of the form fields and trigger a `router.push` with the data URL encoded" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    const formData = new FormData(event.currentTarget)" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    const data = new URLSearchParams()" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    for (const [name, value] of formData) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      data.append(name, value as string)" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    }" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    router.push(`${action}?${data.toString()}`)" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  }" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  if (typeof action === 'string') {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    return <form onSubmit={onSubmit} {...props} />" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  }" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return <form {...props} />" })
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
			"Learn more about the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/canary/app/api-reference/components/form",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "<Form>" }), " Component"]
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "support-for-nextconfigts",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#support-for-nextconfigts",
				children: ["Support for ", (0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.ts" })]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js now supports the TypeScript ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.ts" }),
			" file type and provides a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NextConfig" }),
			" type for autocomplete and type-safe options:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import type { NextConfig } from 'next';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "const nextConfig: NextConfig = {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  /* config options here */" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "};" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default nextConfig;" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/canary/app/building-your-application/configuring/typescript#type-checking-nextconfigts",
				children: "TypeScript support"
			}),
			" in Next.js."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "instrumentationjs-stable",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#instrumentationjs-stable",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation.js" }), " (Stable)"]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation" }),
			" file, with the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "register()" }),
			" API, allows users to tap into the Next.js server lifecycle to monitor performance, track the source of errors, and deeply integrate with observability libraries like ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://opentelemetry.io/",
				children: "OpenTelemetry"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This feature is now ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "stable" }),
			" and the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.instrumentationHook" }),
			" config option can be removed."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In addition, we’ve collaborated with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://sentry.io/",
				children: "Sentry"
			}),
			" on designing a new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onRequestError" }),
			" hook that can be used to:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Capture important context about all errors thrown on the server, including:",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Router: Pages Router or App Router" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Server context: Server Component, Server Action, Route Handler, or Middleware" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Report the errors to your favorite observability provider." }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function onRequestError(err, request, context) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  await fetch('https://...', {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    method: 'POST'," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    body: JSON.stringify({ message: err.message, request, context })," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    headers: { 'Content-Type': 'application/json' }," })
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
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export async function register() {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // init your favorite observability provider SDK" })
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
			"Learn more about the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onRequestError" }),
			" ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/canary/app/api-reference/file-conventions/instrumentation#onrequesterror-optional",
				children: "function"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "development-and-build-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#development-and-build-improvements",
				children: "Development and Build Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "server-components-hmr",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#server-components-hmr",
				children: "Server Components HMR"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"During development, Server components are re-executed when saved. This means, any ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
			" requests to your API endpoints or third-party services are also called."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To improve local development performance and reduce potential costs for billed API calls, we now ensure Hot Module Replacement (HMR) can re-use\xA0",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
			"\xA0responses from previous renders."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/canary/app/api-reference/next-config-js/serverComponentsHmrCache",
				children: "Server Components HMR Cache"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "faster-static-generation-for-the-app-router",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#faster-static-generation-for-the-app-router",
				children: "Faster Static Generation for the App Router"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've optimized static generation to improve build times, especially for pages with slow network requests." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Previously, our static optimization process rendered pages twice—once to generate data for client-side navigation and a second time to render the HTML for the initial page visit. Now, we reuse the first render, cutting out the second pass, reducing workload and build times." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Additionally, static generation workers now share the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
			" cache across pages. If a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" }),
			" call doesn’t opt out of caching, its results are reused by other pages handled by the same worker. This reduces the number of requests for the same data."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "advanced-static-generation-control-experimental",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#advanced-static-generation-control-experimental",
				children: "Advanced Static Generation Control (Experimental)"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We’ve added experimental support for more control over static generation process for advanced use cases that would benefit from greater control." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We recommend sticking to the current defaults unless you have specific requirements as these options can lead to increased resource usage and potential out-of-memory errors due to increased concurrency." }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "const nextConfig = {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  experimental: {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "	  // how many times Next.js will retry failed page generation attempts" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "	  // before failing the build" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    staticGenerationRetryCount: 1" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    // how many pages will be processed per worker" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    staticGenerationMaxConcurrency: 8" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    // the minimum number of pages before spinning up a new export worker" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    staticGenerationMinPagesPerWorker: 25" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  }," })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default nextConfig;" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/canary/app/api-reference/next-config-js/staticGeneration",
				children: "Static Generation options"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "improvements-for-self-hosting",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improvements-for-self-hosting",
				children: "Improvements for self-hosting"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When self-hosting applications, you may need more control over ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Cache-Control" }),
			" directives."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"One common case is controlling the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "stale-while-revalidate" }),
			" period sent for ISR pages. We've implemented two improvements:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"You can now configure the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/canary/app/api-reference/next-config-js/expireTime",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "expireTime" })
				}),
				" value in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config" }),
				". This was previously the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.swrDelta" }),
				" option."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Updated the default value to one year, ensuring most CDNs can fully apply the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "stale-while-revalidate" }),
				" semantics as intended."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We also no longer override custom ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Cache-Control" }),
			" values with our default values, allowing full control and ensuring compatibility with any CDN setup."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Finally, we've improved image optimization when self-hosting. Previously, we recommended you install ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "sharp" }),
			" for optimizing images on your Next.js server. This recommendation was sometimes missed. With Next.js 15, you no longer need to manually install ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "sharp" }),
			" — Next.js will use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "sharp" }),
			" automatically when using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
			" or running with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/next-config-js/output",
				children: "standalone output mode"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To learn more, see our new ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://x.com/leeerob/status/1843796169173995544",
				children: "demo and tutorial video"
			}),
			" on self-hosting Next.js."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "eslint-9-support",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#eslint-9-support",
				children: "ESLint 9 Support"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js 15 also introduces support for ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://eslint.org/blog/2024/04/eslint-v9.0.0-released",
				children: "ESLint 9"
			}),
			", following the end-of-life for ESLint 8 on October 5, 2024."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To ensure a smooth transition, Next.js remain backwards compatible, meaning you can continue using either ESLint 8 or 9." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you upgrade to ESLint 9, and we detect that you haven’t yet adopted ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://eslint.org/blog/2024/04/eslint-v9.0.0-released/#flat-config-is-now-the-default-and-has-some-changes",
				children: "the new config format"
			}),
			", Next.js will automatically apply the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ESLINT_USE_FLAT_CONFIG=false" }),
			" escape hatch to ease migration."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Additionally, deprecated options like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "—ext" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "—ignore-path" }),
			" will be removed when running ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }),
			". Please note that ESLint will eventually disallow these older configurations in ESLint 10, so we recommend starting your migration soon."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more details on these changes, check out the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://eslint.org/docs/latest/use/migrate-to-9.0.0",
				children: "migration guide"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"As part of this update, we’ve also upgraded ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint-plugin-react-hooks" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "v5.0.0" }),
			", which introduces new rules for React Hooks usage. You can review all changes in the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/facebook/react/releases/tag/eslint-plugin-react-hooks%405.0.0",
				children: "changelog for eslint-plugin-react-hooks@5.0.0"
			}),
			"."
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
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["All of the changes previously described in the RC 1 ", (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/next-15-rc",
				children: "blog post"
			})] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" We’ve deprecated exporting ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "export const runtime = \"experimental-edge\"" }),
				" in the App Router. Users should now switch to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "export const runtime = \"edge\"" }),
				". We’ve added a ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/canary/app/building-your-application/upgrading/codemods#app-dir-runtime-config-experimental-edge",
					children: "codemod"
				}),
				" to perform this (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/70480",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" Calling ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "revalidateTag" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "revalidatePath" }),
				" during render will now throw an error (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/71093",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "instrumentation.js" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "middleware.js" }),
				" files will now use the vendored React packages (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/69619",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" The minimum required Node.js version has been updated to 18.18.0 (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/67274",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/dynamic" }),
				": the deprecated ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "suspense" }),
				" prop has been removed and when the component is used in the App Router, it won't insert an empty Suspense boundary anymore (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/67014",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" When resolving modules on the Edge Runtime, the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "worker" }),
				" module condition will not be applied (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/66808",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Breaking]" }),
				" Disallow using ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "ssr: false" }),
				" option with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/dynamic" }),
				" in Server Components (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/70378",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "outputFileTracingRoot" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "outputFileTracingIncludes" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "outputFileTracingExcludes" }),
				" have been upgraded from experimental and are now stable (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/68464",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Avoid merging global CSS files with CSS module files deeper in the tree (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/67373",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" The cache handler can be specified via the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NEXT_CACHE_HANDLER_PATH" }),
				" environment variable (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/70537/",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" The Pages Router now supports both React 18 and React 19 (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/69484",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" The Error Overlay now displays a button to copy the Node.js Inspector URL if the inspector is enabled (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/69357",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Client prefetches on the App Router now use the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "priority" }),
				" attribute (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/67356",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Next.js now provides an ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "unstable_rethrow" }),
				" function to rethrow Next.js internal errors in the App Router (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65831",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "unstable_after" }),
				" can now be used in static pages (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/71231",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" If a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/dynamic" }),
				" component is used during SSR, the chunk will be prefetched (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65486",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "esmExternals" }),
				" option is now supported on the App Router (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65041",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.allowDevelopmentBuild" }),
				" option can be used to allow ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NODE_ENV=development" }),
				" with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
				" for debugging purposes (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/65463",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" The Server Action transforms are now disabled in the Pages Router (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/71028",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Build workers will now stop the build from hanging when they exit (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/70997",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" When redirecting from a Server Action, revalidations will now apply correctly (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/70715",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Dynamic params are now handled correctly for parallel routes on the Edge Runtime (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/70667",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Static pages will now respect staleTime after initial load (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/70640",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "vercel/og" }),
				" updated with a memory leak fix (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/70214",
					children: "PR"
				}),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "[Improvement]" }),
				" Patch timings updated to allow usage of packages like ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "msw" }),
				" for APIs mocking (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/pull/68193",
					children: "PR"
				}),
				")"
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js is the result of the combined work of over 3,000 individual developers, and our core team at Vercel. This release was brought to you by:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The\xA0",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Next.js" }),
				"\xA0team:\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/acdlite",
					children: "Andrew"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/unstubbable",
					children: "Hendrik"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/lubieowoce",
					children: "Janka"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/huozhi",
					children: "Jiachi"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/feedthejim",
					children: "Jimmy"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/devjiwonchoi",
					children: "Jiwon"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/ijjk",
					children: "JJ"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/gnoff",
					children: "Josh"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/samcx",
					children: "Sam"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/sebmarkbage",
					children: "Sebastian"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/eps1lon",
					children: "Sebbie"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/shuding",
					children: "Shu"
				}),
				",\xA0",
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
				"The\xA0",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Turbopack" }),
				"\xA0team:\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/arlyon",
					children: "Alex"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/bgw",
					children: "Benjamin"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/kdy1",
					children: "Donny"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/padmaia",
					children: "Maia"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/mischnic",
					children: "Niklas"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/timneutkens",
					children: "Tim"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/sokra",
					children: "Tobias"
				}),
				", and\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/wbinnssmith",
					children: "Will"
				}),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Next.js Docs" }),
				"\xA0 team:\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/delbaoliveira",
					children: "Delba"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/molebox",
					children: "Rich"
				}),
				",\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/ismaelrumzan",
					children: "Ismael"
				}),
				", and\xA0",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/leerob",
					children: "Lee"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Huge thanks to @huozhi, @shuding, @wyattjoh, @PaulAsjes, @mcnaveen, @timneutkens, @stipsan, @aktoriukas, @sirTangale, @greatvivek11, @sokra, @anatoliik-lyft, @wbinnssmith, @coltonehrman, @hungdoansy, @kxlow, @ztanner, @manovotny, @leerob, @ryota-murakami, @ijjk, @pnutmath, @feugy, @Jeffrey-Zutt, @wiesson, @eps1lon, @devjiwonchoi, @Ethan-Arrowood, @kenji-webdev, @domdomegg, @samcx, @Jaaneek, @evanwinter, @kdy1, @balazsorban44, @feedthejim, @ForsakenHarmony, @kwonoj, @delbaoliveira, @xiaohanyu, @dvoytenko, @bobaaaaa, @bgw, @gaspar09, @souporserious, @unflxw, @kiner-tang, @Ehren12, @EffectDoplera, @IAmKushagraSharma, @Auxdible, @sean-rallycry, @jeanmax1me, @unstubbable, @NilsJacobsen, @adiguno, @ryan-nauman, @zsh77, @KagamiChan, @steveluscher, @MehfoozurRehman, @vkryachko, @chentsulin, @samijaber, @begalinsaf, @FluxCapacitor2, @lukahartwig, @brianshano, @pavelglac, @styfle, @symant233, @HristovCodes, @karlhorky, @jonluca, @jonathan-ingram, @mknichel, @sopranopillow, @Gomah, @imddc, @notrab, @gabrielrolfsen, @remorses, @AbhiShake1, @agadzik, @rishabhpoddar, @rezamauliadi, @IncognitoTGT, @webtinax, @BunsDev, @nisabmohd, @z0n, @bennettdams, @joeshub, @n1ckoates, @srkirkland, @RiskyMH, @coopbri, @okoyecharles, @diogocapela, @dnhn, @typeofweb, @davidsa03, @imranolas, @lubieowoce, @maxhaomh, @mirasayon, @blvdmitry, @hwangstar156, @lforst, @emmerich, @christian-bromann, @Lsnsh, @datner, @hiro0218, @flybayer, @ianmacartney, @ypessoa, @ryohidaka, @icyJoseph, @Arinji2, @lovell, @nsams, @Nayeem-XTREME, @JamBalaya56562, @Arindam200, @gaojude, @qqww08, @todor0v, @tokkiyaa, @arlyon, @lorensr, @Juneezee, @Sayakie, @IGassmann, @bosconian-dynamics, @phryneas, @akazwz, @atik-persei, @shubh73, @alpedia0, @chogyejin, @notomo, @ArnoldVanN, @dhruv-kaushik, @kevva, @Kahitar, @anay-208, @boris-szl, @devnyxie, @LorisSigrist, @M-YasirGhaffar, @Lada496, @kippmr, @torresgol10, @pkiv, @Netail, @jontewks, @ArnaudFavier, @chrisjstott, @mratlamwala, @mayank1513, @karlkeefer, @kshehadeh, @Marukome0743, @a89529294, @anku255, @KeisukeNagakawa, @andrii-bodnar, @aldosch, @versecafe, @steadily-worked, @cfrank, @QiuranHu, @farsabbutt, @joostmeijles, @saltcod, @archanaagivale30, @crutchcorn, @crebelskydico, @Maaz-Ahmed007, @jophy-ye, @remcohaszing, @JoshuaKGoldberg, @creativoma, @GyoHeon, @SukkaW, @MaxLeiter, @neila-a, @stylessh, @Teddir, @ManuLpz4, @Julian-Louis, @syi0808, @mert-duzgun, @amannn, @MonstraG, @hamirmahal, @tariknh, @Kikobeats, @LichuAcu, @Kuboczoch, @himself65, @Sam-Phillemon9493, @Shruthireddy04, @Hemanshu-Upadhyay, @timfuhrmann, @controversial, @pathliving, @mischnic, @mauroaccornero, @NavidNourani, @allanchau, @ekremkenter, @yurivangeffen, @gnoff, @darthmaim, @gdborton, @Willem-Jaap, @KentoMoriwaki, @TrevorSayre, @marlier, @Luluno01, @xixixao, @domin-mnd, @niketchandivade, @N2D4, @kjugi, @luciancah, @mud-ali, @codeSTACKr, @luojiyin1987, @mehmetozguldev, @ronanru, @tknickman, @joelhooks, @khawajaJunaid, @rubyisrust, @abdull-haseeb, @bewinsnw, @housseindjirdeh, @li-jia-nan, @aralroca, @s-ekai, @ah100101, @jantimon, @jordienr, @iscekic, @Strift, @slimbde, @nauvalazhar, @HughHzyb, @guisehn, @wesbos, @OlyaPolya, @paarthmadan, @AhmedBaset, @dineshh-m, @avdeev, @Bhavya031, @MildTomato, @Bjornnyborg, @amikofalvy, @yosefbeder, @kjac, @woutvanderploeg, @Ocheretovich, @ProchaLu, @luismiramirez, @omahs, @theoludwig, @abhi12299, @sommeeeer, @lumirlumir, @royalfig, @iampoul, @molebox, @txxxxc, @zce, @mamuso, @kahlstrm, @vercel-release-bot, @zhawtof, @PapatMayuri, @PlagueFPS, @IDNK2203, @jericopulvera, @liby, @CannonLock, @timfish, @whatisagi, @none23, @haouvw, @Pyr33x, @SouthLink, @frydj, @CrutchTheClutch, @sleevezip, @r34son, @yunsii, @md-rejoyan-islam, @kartheesan05, @nattui, @KonkenBonken, @weicheng95, @brekk, @Francoscopic, @B33fb0n3, @ImDR, @nurullah, @hdodov, @ebCrypto, @soedirgo, @floriangosse, @Tim-Zj, @raeyoung-kim, @erwannbst, @DerTimonius, @hirotomoyamada, @Develliot, @chandanpasunoori, @vicb, @ankur-dwivedi, @kidonng, @baeharam, @AnaTofuZ, @coderfin, @xugetsu, @alessiomaffeis, @kutsan, @jordyfontoura, @sebmarkbage, @tranvanhieu01012002, @jlbovenzo, @Luk-z, @jaredhan418, @bangseongbeom, @penicillin0, @neoFinch, @DeepakBalaraman, @Manoj-M-S, @Unsleeping, @lonr, @Aerilym, @ytori, @acdlite, @actopas, @n-ii-ma, @adcichowski, @mobeigi, @JohnGemstone, and @jjm2317 for helping!" })
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
export { toc as a, structuredData as i, frontmatter as n, next_15_rc2_exports as r, MDXContent as t };
