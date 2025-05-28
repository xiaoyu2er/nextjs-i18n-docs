---
title: Next.js 12.1
description: >-
  Next.js 12.1 introduces on-demand ISR, support for styled-components and
  Relay, zero-config Jest support, and more!
author:
  - name: Balázs Orbán
    image: /static/team/balazs.jpg
  - name: DongYoon Kang
    image: /static/team/kdy.jpg
  - name: Gerald Monaco
    image: /static/team/gerald.jpg
  - name: Javi Velasco
    image: /static/team/javi.jpg
  - name: Jiachi Liu
    image: /static/team/jiachi.png
  - name: JJ Kasper
    image: /static/team/jj.jpg
  - name: Joe Haddad
    image: /static/team/timer.jpg
  - name: Kara Erickson
    image: /static/team/kara.jpg
  - name: Maia Teegarden
    image: /static/team/maia.jpg
  - name: Shu Ding
    image: /static/team/shu.jpg
  - name: Steven
    image: /static/team/styfle.png
  - name: Tim Neutkens
    image: /static/team/tim.jpg
  - name: Tobias Koppers
    image: /static/team/sokra.jpg
date: 2022-02-17T16:00:00.507Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-12-1/twitter-card.png
---

We're excited to release one of our most requested features with Next.js 12.1:

*   [**On-demand ISR (Beta):**](#on-demand-incremental-static-regeneration-beta) Revalidate pages using `getStaticProps` instantly.
*   [**Expanded Support for SWC:**](#improved-swc-support) `styled-components`, Relay, and more.
*   [**`next/jest` Plugin:**](#zero-configuration-jest-plugin) Zero-configuration Jest support using SWC.
*   [**Faster Minification with SWC (RC):**](#faster-minification-with-swc) 7x faster minification than Terser.
*   [**Self-Hosting Improvements:**](#self-hosted-nextjs-improvements) ~80% smaller Docker images.
*   [**React 18 & Server Components (Alpha):**](#react-18-server-components-and-ssr-streaming-alpha) Improved stability and support.
*   [**Developer Survey:**](#nextjs-developer-survey) Help us improve Next.js with your feedback.

Update today by running `npm i next@latest`.

[On-demand Incremental Static Regeneration (Beta)](#on-demand-incremental-static-regeneration-beta)
---------------------------------------------------------------------------------------------------

Next.js now exposes a function `unstable_revalidate()` allowing you to revalidate individual pages that use `getStaticProps`. This was one of our most requested features since we introduced [Incremental Static Regeneration](/docs/pages/building-your-application/data-fetching/incremental-static-regeneration) (ISR) in Next.js 9.5.

Since ISR was released, we've seen companies like [Tripadvisor](https://vercel.com/customers/cruise-critic), [Parachute](https://vercel.com/customers/parachute), HashiCorp, and more drastically improve their build times while retaining incredible performance. However, we've heard your feedback on interval-based revalidations and are excited to provide more flexibility.

Currently, if you set a `revalidate` time of `60`, all visitors will see the same generated version of your site for one minute. The only way to invalidate the cache was from someone visiting that page after the minute had passed. You can now manually purge the Next.js cache for a specific page on-demand.

This makes it easier to update your site when:

*   Content from your headless CMS is created or updated
*   Ecommerce metadata changes (price, description, category, reviews, etc.)

```js filename="pages/api/revalidate.js"
export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }
 
  try {
    await res.unstable_revalidate('/path-to-revalidate');
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}
```

Inside `getStaticProps`, you do not need to specify `revalidate` to use on-demand revalidation. If `revalidate` is omitted, Next.js will use the default value of `false` (no revalidation) and only revalidate the page on-demand when `unstable_revalidate()` is called.

Incremental Static Regeneration works for any providers supporting the [Next.js Build API](/docs/pages/building-your-application/deploying#nextjs-build-api) (`next build`). Starting today when deployed to Vercel, on-demand revalidation propagates globally in ~300ms when pushing pages to the edge.

[View our demo](https://on-demand-isr.vercel.app/) to see on-demand revalidation in action and provide feedback. Svix (enterprise-ready webhooks) and Clerk (authentication) have also [created a demo](https://www.svix.com/blog/vercel-on-demand-isr-and-svix) of on-demand ISR.

[Improved SWC support](#improved-swc-support)
---------------------------------------------

We want to make every Next.js application build faster for production and get instant feedback in local development. [Next.js 12](https://nextjs.org/blog/next-12) introduced a new [Rust-based compiler](/docs/architecture/nextjs-compiler) that takes advantage of native compilation.

With 12.1, we've added support to the Next.js Compiler for:

*   [styled-components](/docs/architecture/nextjs-compiler#styled-components)
*   [importSource](/docs/architecture/nextjs-compiler#importsource)
*   [legacy-decorators](/docs/architecture/nextjs-compiler#legacy-decorators)
*   [relay](/docs/architecture/nextjs-compiler#relay)
*   [remove-react-properties](/docs/architecture/nextjs-compiler#remove-react-properties)
*   [remove-console](/docs/architecture/nextjs-compiler#remove-console)

With the above six transforms added, we have now ported the most common Babel plugins to Rust using the new compiler. If there are other plugins you'd like to see, [let us know on the discussion](https://github.com/vercel/next.js/discussions/30174). Further, we're working on a system for [high-performance WebAssembly plugins](https://twitter.com/swc_rs/status/1492454606118752257) enabled through SWC.

[Zero-configuration Jest plugin](#zero-configuration-jest-plugin)
-----------------------------------------------------------------

Next.js now automatically configures Jest for you (`next/jest`) using the Rust-based Next.js Compiler to transform files, including:

*   Auto mocking stylesheets (`.css`, `.module.css`, and their `.scss` variants) and image imports
*   Loading `.env` (and all variants) into `process.env`
*   Ignoring `node_modules` from test resolving and transforms
*   Ignoring `.next` from test resolving
*   Loading `next.config.js` for flags that enable Next.js compiler transforms

[Check out the documentation](/docs/pages/building-your-application/optimizing/testing#setting-up-jest-with-the-rust-compiler) to learn more or [get started from our Jest example](https://github.com/vercel/next.js/tree/canary/examples/with-jest).

[Faster minification with SWC](#faster-minification-with-swc)
-------------------------------------------------------------

With [Next.js 12](https://nextjs.org/blog/next-12), we introduced minification using SWC as part of the Next.js Compiler. Early results showed it was **7x faster than Terser.** Minification with SWC is now in Release Candidate (RC) with 12.1 and will become the default in 12.2.

You can opt-in to using SWC for minification in `next.config.js`:

```js filename="next.config.js"
module.exports = {
  swcMinify: true,
};
```

Let us know your feedback on the [discussion](https://github.com/vercel/next.js/discussions/30237).

[Faster Image Optimization](#faster-image-optimization)
-------------------------------------------------------

The built-in Image Optimization API has been updated to support the same pattern as [ISR pages](/docs/pages/building-your-application/data-fetching/incremental-static-regeneration), where images are served stale and _revalidate_ in the background (also known as `stale-while-revalidate`).

This is a significant performance improvement for optimizing images. See [Image Caching Behavior](/docs/pages/api-reference/components/image#caching-behavior) to learn more.

[Self-hosted Next.js improvements](#self-hosted-nextjs-improvements)
--------------------------------------------------------------------

Next.js can now automatically create a `standalone` folder that copies _only_ the necessary files for production deployments. This has resulted in **~80% smaller Docker images** for self-hosted Next.js applications.

To leverage this automatic copying you can enable it in your `next.config.js`:

```js filename="next.config.js"
module.exports = {
  experimental: {
    outputStandalone: true,
  },
};
```

This will create a folder at `.next/standalone` which can then be deployed on its own without installing `node_modules`.

[Check out the documentation](/docs/pages/api-reference/next-config-js/output#automatically-copying-traced-files-experimental) or get started from the [Docker example](https://github.com/vercel/next.js/tree/canary/examples/with-docker). We now also have a [multi-env Docker example](https://github.com/vercel/next.js/tree/canary/examples/with-docker-multi-env) with support for loading different `.env` files based on the environment.

[React 18, Server Components, and SSR Streaming (Alpha)](#react-18-server-components-and-ssr-streaming-alpha)
-------------------------------------------------------------------------------------------------------------

As shown at [Next.js Conf](https://www.youtube.com/watch?v=WlP2TB2ORL4), we've been working to bring React 18, Server-Side Suspense, Streaming SSR, and eventually Server Components to Next.js.

Server Components are a new feature in React that let you reduce your JavaScript bundle size by separating server and client-side code. Server Components allow developers to build apps that span the server and client, combining the rich interactivity of client-side apps with the improved performance of traditional server rendering.

For developers [following along](https://github.com/vercel/next.js/discussions/31263) on the Server Components path from alpha to beta in Next.js, here are some of the recent updates:

*   [Inline Server Component responses in the HTML to avoid a second request](https://github.com/vercel/next.js/issues/30994)
*   [Improved script loading when streaming to enable partial hydration with React 18](https://github.com/vercel/next.js/issues/31338)
*   [Support for the new `useId` API in React 18](https://github.com/vercel/next.js/pull/31102)
*   [Support for `_app` as a Server Component](https://github.com/vercel/next.js/issues/30996)
*   [Improved code splitting for Server Components](https://github.com/vercel/next.js/pull/31968)
*   [Improved streaming performance](https://github.com/vercel/next.js/pull/30585)
*   [Ability to change the default runtime between Node.js and Edge](https://github.com/vercel/next.js/pull/34068) ([RFC](https://github.com/vercel/next.js/discussions/34179))

We're working to enable you to run your entire Next.js application server-rendered at the Edge. You can choose which pages should opt into the Edge Runtime, so you can incrementally migrate pages from Node.js as you're ready.

We'll be releasing another post going more in-depth on the Edge Runtime soon. Both of our demos ([next-server-components](https://github.com/vercel/next-server-components) and [next-rsc-demo](https://github.com/vercel/next-rsc-demo)) have been updated with the latest changes.

[Other bug fixes and improvements](#other-bug-fixes-and-improvements)
---------------------------------------------------------------------

*   Using `<a>` with `target="blank"` no longer warns to use `next/link` with ESLint.
*   `.d.ts` files are no longer considered Pages.
*   `document.title` now takes priority over `h1` when announcing page changes to screen readers.
*   Creating `pages/index/[...dynamic].js` now works, which previously was not possible due to `index` being a reserved keyword.
*   When using `dynamic(() => import('./some-component'), { ssr: false })` the import will be automatically treeshaken from the server code.
*   To create a smaller installation size and improve security, we're working to precompile more dependencies. The latest addition was `node-fetch`.
*   Improvements for Fast Refresh when using [Middleware](/docs/pages/building-your-application/routing/middleware).
*   Support for ESLint 8 with our [built-in ESLint Integration](/docs/pages/building-your-application/configuring/eslint).
*   `styled-jsx` has been upgraded to 5.0, including new helpful error links for all `styled-jsx` compilation errors.
*   Edge Runtime: Support for `AbortController` and `AbortSignal`
*   Edge Runtime: `CryptoKey` and `globalThis.CryptoKey` added.
*   Large Next.js applications are seeing ~60% improvements on Fast Refresh times with recent improvements (over 1,000 modules being reloaded).
*   A notification is now shown if Fast Refresh fails and causes a full page reload.
*   Announced routes now correctly skip announcing the initial page load when using React 18 strict mode.
*   We have lowered the number of open issues [by almost 300](https://nextjs-issue-tracker.vercel.app/) on the Next.js repository compared to December 2021 (resolved almost 1000 issues).

[Next.js Developer Survey](#nextjs-developer-survey)
----------------------------------------------------

Share your feedback and help us improve Next.js with our [first Developer Survey](https://vercel.link/nextjs-survey).

There are two parts to this survey: a quick survey of eight questions and an extended survey that dives into feedback for individual features. We'd love it if you could fill out both sections if you have time, but if not, feel free to submit your answers after the first section.

Your answers will be completely anonymous, though you can choose to share your app URLs with us if you like.

Thanks for helping us improve Next.js!

[Thank you, contributors](#thank-you-contributors)
--------------------------------------------------

Next.js is the result of the combined work of **over 2,000 individual developers**, industry partners like Google and Facebook, and our core team.

To make contribution easier, we've migrated the Next.js repository to use [Turborepo](https://turborepo.com) to improve build performance. We've also added scaffolding for tests and error links to make it easier to get started writing tests. Finally, we recorded a [40-minute walkthrough video](https://www.youtube.com/watch?v=cuoNzXFLitc) showing how to contribute to Next.js.

This release was brought to you by the contributions of: @MaedahBatool, @mutebg, @sokra, @huozhi, @hanford, @shuding, @sean6bucks, @jameshfisher, @devknoll, @yuta-ike, @zh-lx, @amandeepmittal, @alunyov, @stefanprobst, @leerob, @balazsorban44, @kdy1, @brittanyrw, @jord1e, @kara, @vvo, @ismaelrumzan, @dlindenkreuz, @MohammadxAli, @nguyenyou, @thibautsabot, @hanneslund, @vertti, @KateKate, @stefee, @mikinovation, @Leticijak, @mohsen1, @ncphillips, @ehowey, @lancechentw, @krychaxp, @fmacherey, @pklawansky, @RyanClementsHax, @lakbychance, @sannajammeh, @oliviertassinari, @alexander-akait, @u-yas, @Cheprer, @msp5382, @chrispat, @getspooky, @Ryz0nd, @klaasman, @midgleyc, @kumard3, @jesstelford, @neeraj3029, @glenngijsberts, @pie6k, @wouterraateland, @timneutkens, @11koukou, @thesyedbasim, @aeneasr, @ijjk, @lfades, @JuniorTour, @xavhan, @mattyocode, @padmaia, @Skn0tt, @gwer, @Nutlope, @styfle, @stipsan, @xhoantran, @eolme, @sespinosa, @zenorocha, @hjaber, @benmvp, @T-O-R-U-S, @dburrows, @atcastle, @kiriny, @molebox, @Vienio99, @kyliau, @PepijnSenders, @krystofex, @PizzaPete, @souljuse, @Schniz, @Nelsonfrank, @Mhmdrza, @hideokamoto-stripe, @Emrin, @gr-qft, @delbaoliveira, @redbar0n, @lxy-yz, @Divlo, @kachkaev, @teleaziz, @OgbeniHMMD, @goncy, @bennettdams, @hsynlms, @callumgare, @jonrosner, @karaggeorge, @rpie3, @MartijnHols, @bashunaimiroy, @NOCELL, @rishabhpoddar, @omariosouto, @theMosaad, @javivelasco, @pierrenel, @lobsterkatie, @tharakabimal, @saevarb, @nbouvrette, @paulnbrd, @ecklf, @renbaoshuo, @chozzz, @tbezman, @karlhorky, @j-mendez, @ffan0811, @arthurfiorette, @chimit, @joperron, @moh12594, @rasmusjp, @bryanrsmith, @TrySound, @josharsh, @thecrypticace, @arturparkhisenko, @segheysens, @thevinter, @AryanBeezadhur, @xiaohp, @tknickman, @oriolcp, @smakosh, @jorrit, @mix3d, @Clecio013, @michielvangendt, @intergalacticspacehighway, @jbraithwaite, @marcelocarmona, @benmerckx, @haykerman, @steven-tey, @jaredpalmer, @pi-guy-in-the-sky, @JuanM04, @apollisa, @D-Pagey, @Kikobeats, @ramosbugs, @dan-weaver, @chris-stytch, @MikevPeeren, @janpio, @emw3, @nubpro, @cmdcolin, @joostdecock, @sgallese, @housseindjirdeh, @minervabot, @cjboco, @Ryuurock, @dm430, @mkarkachov, @nvh95, @gfortaine, @zifeo, @vicente-s, @Rohithgilla12, @brookton, @skirsten, @davidfateh, @DavidBabel, @mannybecerra, @pveyes, @kaykdm, @xhiroga, @mzaien, @losfair, @ykzts, @knezevicdev, @yang-feng-yfeng, @xuchaobei, @elkevinwolf, @fabienheureux, @nilskaspersson, @Andarist, @mathcrln, @dferber90, @FranciscoMoretti, @benschwarz, @wendellhu95, @gazdagergo, @imabp, @ljosberinn, @samuliasmala, @ka2jun8, @monsonjeremy, @pqt, @leoortizz, @michel-kraemer, @ntkoopman, @iicdii, @chentsulin, @ericmatthys, @lennym, @balogunkeji, @wnr, @chemicalkosek, @KittyGiraudel, @OKinane, @KonstHardy, @BrandonRomano, @furcan, @dusanralic, @elliottsj, @hi-ogawa, @panva, @genetschneider, @thundermiracle, @stefano-rainieri, @ericbiewener, @vordgi, @stevejarvis, @ihmpavel, @matamatanot, @dyarfaradj, @iheyunfei, @ascorbic, @fytriht, @emzoumpo, @onurtemiz, @a-ursino, @mxschmitt, @bywo, @OArnarsson, @TurekBot, @gish, @vadymshymko, @kamsar, @skhaz, @Prashoon123, @IrisvanOllefen, @evan-bradley, @ntltd, @EzequielDM, @oBusk, @martpie, @BruceRodrigues, @luke-h1, @lucasvazq, @velocity23, @AkiraTsuboi, @mitheelgajare, @JamiesWhiteShirt, @leroydev, @JulienZD, @leotaku, @mattfwood, and @kripod.
