---
title: Next.js 14
description: >-
  Next.js 14 includes included performance, stability for Server Actions, a new
  course teaching the App Router, and more.
author:
  - name: Lee Robinson
    image: /static/team/lee.jpg
  - name: Tim Neutkens
    image: /static/team/tim.jpg
date: 2023-10-26T16:00:00.507Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-14/twitter-card.png
---

As we announced at [Next.js Conf](https://nextjs.org/conf), Next.js 14 is our most focused release with:

*   [**Turbopack**](#nextjs-compiler-turbocharged): 5,000 tests passing for App & Pages Router
    *   **53% faster** local server startup
    *   **94% faster** code updates with Fast Refresh
*   [**Server Actions (Stable)**](#forms-and-mutations): Progressively enhanced mutations
    *   Integrated with caching & revalidating
    *   Simple function calls, or works natively with forms
*   [**Partial Prerendering (Preview)**](#partial-prerendering-preview): Fast initial static response + streaming dynamic content
*   [**Next.js Learn (New)**](#nextjs-learn-course): Free course teaching the App Router, authentication, databases, and more.

Upgrade today or get started with:

```bash filename="Terminal"
npx create-next-app@latest
```

[Next.js Compiler: Turbocharged](#nextjs-compiler-turbocharged)
---------------------------------------------------------------

Since Next.js 13, we've been working to improve local development performance in Next.js in both the Pages and App Router.

Previously, we were rewriting `next dev` and other parts of Next.js to support this effort. We have since changed our approach to be more incremental. This means our Rust-based compiler will reach stability soon, as we've refocused on supporting all Next.js features first.

5,000 integration tests for `next dev` are now passing with [Turbopack](https://nextjs.org/docs/app/api-reference/turbopack), our underlying Rust engine. These tests include 7 years of bug fixes and reproductions.

While testing on `vercel.com`, a large Next.js application, we've seen:

*   Up to **53.3% faster** local server startup
*   Up to **94.7% faster** code updates with Fast Refresh

This benchmark is a practical result of performance improvements you should expect with a large application (and large module graph). With 90% of tests for `next dev` now passing, you should see faster and more reliable performance consistently when using `next dev --turbo`.

Once we hit 100% of tests passing, we'll move Turbopack to stable in an upcoming minor release. We'll also continue to support using webpack for custom configurations and ecosystem plugins.

You can follow the percentage of tests passing at [areweturboyet.com](https://areweturboyet.com).

[Forms and Mutations](#forms-and-mutations)
-------------------------------------------

Next.js 9 introduced API Routes—a way to quickly build backend endpoints alongside your frontend code.

For example, you would create a new file in the `api/` directory:

```ts filename="pages/api/submit.ts"
import type { NextApiRequest, NextApiResponse } from 'next';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = req.body;
  const id = await createItem(data);
  res.status(200).json({ id });
}
```

Then, on the client-side, you could use React and an event handler like `onSubmit` to make a `fetch` to your API Route.

```tsx filename="pages/index.tsx"
import { FormEvent } from 'react';
 
export default function Page() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
 
    const formData = new FormData(event.currentTarget);
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    });
 
    // Handle response if necessary
    const data = await response.json();
    // ...
  }
 
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

Now with Next.js 14, we want to simplify the developer experience of authoring data mutations. Further, we want to improve the user experience when the user has a slow network connection, or when submitting a form from a lower-powered device.

### [Server Actions (Stable)](#server-actions-stable)

What if you didn't need to manually create an API Route? Instead, you could define a function that runs securely on the server, called directly from your React components.

The App Router is built on the React `canary` channel, which is [stable for frameworks](https://react.dev/blog/2023/05/03/react-canaries) to adopt new features. As of v14, Next.js has upgraded to the latest React `canary`, which includes stable Server Actions.

The previous example from the Pages Router can be simplified to one file:

```tsx filename="app/page.tsx"
export default function Page() {
  async function create(formData: FormData) {
    'use server';
    const id = await createItem(formData);
  }
 
  return (
    <form action={create}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

Server Actions should feel familiar for any developers who have previously used server-centric frameworks in the past. It's built on web fundamentals like forms and the [FormData Web API](https://developer.mozilla.org/en-US/docs/Web/API/FormData).

While using Server Actions through a form is helpful for progressive enhancement, it is not a requirement. You can also call them directly as a function, without a form. When using TypeScript, this gives you full end-to-end type-safety between the client and server.

Mutating data, re-rendering the page, or redirecting can happen in **one network roundtrip**, ensuring the correct data is displayed on the client, even if the upstream provider is slow. Further, you can compose and reuse different actions, including many different actions in the same route.

### [Caching, Revalidating, Redirecting, and more](#caching-revalidating-redirecting-and-more)

Server Actions are deeply integrated into the entire App Router model. You can:

*   Revalidate cached data with `revalidatePath()` or `revalidateTag()`
*   Redirect to different routes through `redirect()`
*   Set and read cookies through `cookies()`
*   Handle optimistic UI updates with `useOptimistic()`
*   Catch and display errors from the server with `useFormState()`
*   Display loading states on the client with `useFormStatus()`

Learn more about [Forms and Mutations with Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations) or about the [security model](https://nextjs.org/blog/security-nextjs-server-components-actions) and best practices for Server Components and Server Actions.

[Partial Prerendering (Preview)](#partial-prerendering-preview)
---------------------------------------------------------------

We'd like to share a preview of Partial Prerendering — a compiler optimization for dynamic content with a fast initial static response — that we're working on for Next.js.

Partial Prerendering builds on a decade of research and development into server-side rendering (SSR), static-site generation (SSG), and incremental static revalidation (ISR).

### [Motivation](#motivation)

We've heard your feedback. There's currently too many runtimes, configuration options, and rendering methods to have to consider. You want the speed and reliability of static, while also supporting fully dynamic, personalized responses.

Having great performance globally _and_ personalization shouldn't come at the cost of complexity.

Our challenge was to create a better developer experience, simplifying the existing model without introducing new APIs for developers to learn. While partial caching of server-side content has existed, these approaches still need to meet the developer experience and composability goals we aim for.

**Partial Prerendering requires no new APIs to learn.**

### [Built on React Suspense](#built-on-react-suspense)

Partial Prerendering is defined by your Suspense boundaries. Here's how it works. Consider the following ecommerce page:

```tsx filename="app/page.tsx"
export default function Page() {
  return (
    <main>
      <header>
        <h1>My Store</h1>
        <Suspense fallback={<CartSkeleton />}>
          <ShoppingCart />
        </Suspense>
      </header>
      <Banner />
      <Suspense fallback={<ProductListSkeleton />}>
        <Recommendations />
      </Suspense>
      <NewProducts />
    </main>
  );
}
```

With Partial Prerendering enabled, this page generates a static shell based on your `<Suspense />` boundaries. The `fallback` from React Suspense is prerendered.

Suspense fallbacks in the shell are then replaced with dynamic components, like reading cookies to determine the cart, or showing a banner based on the user.

When a request is made, the static HTML shell is immediately served:

```
<main>
  <header>
    <h1>My Store</h1>
    <div class="cart-skeleton">
      <!-- Hole -->
    </div>
  </header>
  <div class="banner" />
  <div class="product-list-skeleton">
    <!-- Hole -->
  </div>
  <section class="new-products" />
</main>
```

Since `<ShoppingCart />` reads from `cookies` to look at the user session, this component is then streamed in as part of the same HTTP request as the static shell. There are no extra network roundtrips needed.

```tsx filename="app/cart.tsx"
import { cookies } from 'next/headers'
 
export default function ShoppingCart() {
  const cookieStore = cookies()
  const session = cookieStore.get('session')
  return ...
}
```

To have the most granular static shell, this may require adding additional Suspense boundaries. However, if you're already using `loading.js` today, this is an implicit Suspense boundary, so no changes would be required to generate the static shell.

### [Coming soon](#coming-soon)

Partial prerendering is under active development. We'll be sharing more updates in an upcoming minor release.

[Metadata Improvements](#metadata-improvements)
-----------------------------------------------

Before your page content can be streamed from the server, there's important metadata about the viewport, color scheme, and theme that need to be sent to the browser first.

Ensuring these `meta` tags are sent with the initial page content helps a smooth user experience, preventing the page from flickering by changing the theme color, or shifting layout due to viewport changes.

In Next.js 14, we've decoupled blocking and non-blocking metadata. Only a small subset of metadata options are blocking, and we want to ensure non-blocking metadata will not prevent a partially prerendered page from serving the static shell.

The following metadata options are now deprecated and will be removed from `metadata` in a future major version:

*   `viewport`: Sets the initial zoom and other properties of the viewport
*   `colorScheme`: Sets the support modes (light/dark) for the viewport
*   `themeColor`: Sets the color the chrome around the viewport should render with

Starting with Next.js 14, there are new options [`viewport` and `generateViewport`](https://nextjs.org/docs/app/api-reference/functions/generate-viewport) to replace these options. All other `metadata` options remain the same.

You can start adopting these new APIs today. The existing `metadata` options will continue to work.

[Next.js Learn Course](#nextjs-learn-course)
--------------------------------------------

Today we're releasing a brand new, free course on [Next.js Learn](https://nextjs.org/learn). This course teaches:

*   The Next.js App Router
*   Styling and Tailwind CSS
*   Optimizing Fonts and Images
*   Creating Layouts and Pages
*   Navigating Between Pages
*   Setting Up Your Postgres Database
*   Fetching Data with Server Components
*   Static and Dynamic Rendering
*   Streaming
*   Partial Prerendering (Optional)
*   Adding Search and Pagination
*   Mutating Data
*   Handling Errors
*   Improving Accessibility
*   Adding Authentication
*   Adding Metadata

Next.js Learn has taught millions of developers about the foundations of the framework, and we can't wait to hear your feedback on our new addition. Head to [nextjs.org/learn](https://nextjs.org/learn) to take the course.

[Other Changes](#other-changes)
-------------------------------

*   **\[Breaking\]** Minimum Node.js version is now `18.17`
*   **\[Breaking\]** Removes WASM target for `next-swc` build ([PR](https://github.com/vercel/next.js/pull/57437))
*   **\[Breaking\]** Dropped support for `@next/font` in favor of `next/font` ([Codemod](https://nextjs.org/docs/app/building-your-application/upgrading/codemods#built-in-next-font))
*   **\[Breaking\]** Changed `ImageResponse` import from `next/server` to `next/og` ([Codemod](https://nextjs.org/docs/app/building-your-application/upgrading/codemods#next-og-import))
*   **\[Breaking\]** `next export` command has been removed in favor of `output: 'export'` config ([Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports))
*   **\[Deprecation\]** `onLoadingComplete` for `next/image` is deprecated in favor of [`onLoad`](https://nextjs.org/docs/app/api-reference/components/image#onload)
*   **\[Deprecation\]** `domains` for `next/image` is deprecated in favor of [`remotePatterns`](https://nextjs.org/docs/app/api-reference/components/image#remotepatterns)
*   **\[Feature\]** More verbose logging around `fetch` caching can be enabled ([Docs](https://nextjs.org/docs/app/api-reference/next-config-js/logging))
*   **\[Improvement\]** 80% smaller function size for a basic `create-next-app` application
*   **\[Improvement\]** Enhanced memory management when using `edge` runtime in development

[Contributors](#contributors)
-----------------------------

Next.js is the result of the combined work of over 2,900 individual developers, industry partners like Google and Meta, and our core team at Vercel. Join the community on [GitHub Discussions](https://github.com/vercel/next.js/discussions), [Reddit](https://www.reddit.com/r/nextjs/), and [Discord](/discord).

This release was brought to you by:

*   The **Next.js** team: [Andrew](https://github.com/acdlite), [Balazs](https://github.com/balazsorban44), [Jiachi](https://github.com/huozhi), [Jimmy](https://github.com/feedthejim), [JJ](https://github.com/ijjk), [Josh](https://github.com/gnoff), [Sebastian](https://github.com/sebmarkbage), [Shu](https://github.com/shuding), [Steven](https://github.com/styfle), [Tim](https://github.com/timneutkens), [Wyatt](https://github.com/wyattjoh), and [Zack](https://github.com/ztanner).
*   The **Turbopack** team: [Donny](https://github.com/kdy1), [Justin](https://github.com/jridgewell), [Leah](https://github.com/forsakenharmony), [Maia](https://github.com/padmaia), [OJ](https://github.com/kwonoj), [Tobias](https://github.com/sokra), and [Will](https://github.com/wbinnssmith).
*   **Next.js Learn**: [Delba](https://github.com/delbaoliveira), [Steph](https://github.com/StephDietz), [Emil](https://github.com/emilkowalski), [Balazs](https://github.com/balazsorban44), [Hector](https://github.com/dizzyup), and [Amy](https://github.com/timeyoutakeit).

And the contributions of: @05lazy, @0xadada, @2-NOW, @aarnadlr, @aaronbrown-vercel, @aaronjy, @abayomi185, @abe1272001, @abhiyandhakal, @abstractvector, @acdlite, @adamjmcgrath, @AdamKatzDev, @adamrhunter, @ademilter, @adictonator, @adilansari, @adtc, @afonsojramos, @agadzik, @agrattan0820, @akd-io, @AkifumiSato, @akshaynox, @alainkaiser, @alantoa, @albertothedev, @AldeonMoriak, @aleksa-codes, @alexanderbluhm, @alexkirsz, @alfred-mountfield, @alpha-xek, @andarist, @Andarist, @andrii-bodnar, @andykenward, @angel1254mc, @anonrig, @anthonyshew, @AntoineBourin, @anujssstw, @apeltop, @aralroca, @aretrace, @artdevgame, @artechventure, @arturbien, @Aryan9592, @AviAvinav, @aziyatali, @BaffinLee, @Banbarashik, @bencmbrook, @benjie, @bennettdams, @bertho-zero, @bigyanse, @Bitbbot, @blue-devil1134, @bot08, @bottxiang, @Bowens20832, @bre30kra69cs, @BrennanColberg, @brkalow, @BrodaNoel, @Brooooooklyn, @brunoeduardodev, @brvnonascimento, @carlos-menezes, @cassidoo, @cattmote, @cesarkohl, @chanceaclark, @charkour, @charlesbdudley, @chibicode, @chrisipanaque, @ChristianIvicevic, @chriswdmr, @chunsch, @ciruz, @cjmling, @clive-h-townsend, @colinhacks, @colinking, @coreyleelarson, @Cow258, @cprussin, @craigwheeler, @cramforce, @cravend, @cristobaldominguez95, @ctjlewis, @cvolant, @cxa, @danger-ahead, @daniel-web-developer, @danmindru, @dante-robinson, @darshanjain-entrepreneur, @darshkpatel, @davecarlson, @David0z, @davidnx, @dciug, @delbaoliveira, @denchance, @DerTimonius, @devagrawal09, @DevEsteves, @devjiwonchoi, @devknoll, @DevLab2425, @devvspaces, @didemkkaslan, @dijonmusters, @dirheimerb, @djreillo, @dlehmhus, @doinki, @dpnolte, @Drblessing, @dtinth, @ducanhgh, @DuCanhGH, @ductnn, @duncanogle, @dunklesToast, @DustinsCode, @dvakatsiienko, @dvoytenko, @dylanjha, @ecklf, @EndangeredMassa, @eps1lon, @ericfennis, @escwxyz, @Ethan-Arrowood, @ethanmick, @ethomson, @fantaasm, @feikerwu, @ferdingler, @FernandVEYRIER, @feugy, @fgiuliani, @fomichroman, @Fonger, @ForsakenHarmony, @franktronics, @FSaldanha, @fsansalvadore, @furkanmavili, @g12i, @gabschne, @gaojude, @gdborton, @gergelyke, @gfgabrielfranca, @gidgudgod, @Gladowar, @Gnadhi, @gnoff, @goguda, @greatSumini, @gruz0, @Guilleo03, @gustavostz, @hanneslund, @HarshaVardhanReddyDuvvuru, @haschikeks, @Heidar-An, @heyitsuzair, @hiddenest, @hiro0218, @hotters, @hsrvms, @hu0p, @hughlilly, @HurSungYun, @hustLer2k, @iamarpitpatidar, @ianldgs, @ianmacartney, @iaurg, @ibash, @ibrahemid, @idoob, @iiegor, @ikryvorotenko, @imranbarbhuiya, @ingovals, @inokawa, @insik-han, @isaackatayev, @ishaqibrahimbot, @ismaelrumzan, @itsmingjie, @ivanhofer, @IvanKiral, @jacobsfletch, @jakemstar, @jamespearson, @JanCizmar, @janicklas-ralph, @jankaifer, @JanKaifer, @jantimon, @jaredpalmer, @javivelasco, @jayair, @jaykch, @Jeffrey-Zutt, @jenewland1999, @jeremydouglas, @JesseKoldewijn, @jessewarren-aa, @jimcresswell, @jiwooIncludeJeong, @jocarrd, @joefreeman, @JohnAdib, @JohnAlbin, @JohnDaly, @johnnyomair, @johnta0, @joliss, @jomeswang, @joostdecock, @Josehower, @josephcsoti, @josh, @joshuabaker, @JoshuaKGoldberg, @joshuaslate, @joulev, @jsteele-stripe, @JTaylor0196, @JuanM04, @jueungrace, @juliusmarminge, @Juneezee, @Just-Moh-it, @juzhiyuan, @jyunhanlin, @kaguya3222, @karlhorky, @kevinmitch14, @keyz, @kijikunnn, @kikobeats, @Kikobeats, @kleintorres, @koba04, @koenpunt, @koltong, @konomae, @kosai106, @krmeda, @kvnang, @kwonoj, @ky1ejs, @kylemcd, @labyrinthitis, @lachlanjc, @lacymorrow, @laityned, @Lantianyou, @leerob, @leodr, @leoortizz, @li-jia-nan, @loettz, @lorenzobloedow, @lubakravche, @lucasassisrosa, @lucasconstantino, @lucgagan, @LukeSchlangen, @LuudJanssen, @lycuid, @M3kH, @m7yue, @manovotny, @maranomynet, @marcus-rise, @MarDi66, @MarkAtOmniux, @martin-wahlberg, @masnormen, @matepapp, @matthew-heath, @mattpr, @maxleiter, @MaxLeiter, @maxproske, @meenie, @meesvandongen, @mhmdrioaf, @michaeloliverx, @mike-plummer, @MiLk, @milovangudelj, @Mingyu-Song, @mirismaili, @mkcy3, @mknichel, @mltsy, @mmaaaaz, @mnajdova, @moetazaneta, @mohanraj-r, @molebox, @morganfeeney, @motopods, @mPaella, @mrkldshv, @mrxbox98, @nabsul, @nathanhammond, @nbouvrette, @nekochantaiwan, @nfinished, @Nick-Mazuk, @nickmccurdy, @niedziolkamichal, @niko20, @nikolovlazar, @nivak-monarch, @nk980113, @nnnnoel, @nocell, @notrab, @nroland013, @nuta, @nutlope, @obusk, @okcoker, @oliviertassinari, @omarhoumz, @opnay, @orionmiz, @ossan-engineer, @patrick91, @pauek, @peraltafederico, @Phiction, @pn-code, @pyjun01, @pythagoras-yamamoto, @qrohlf, @raisedadead, @reconbot, @reshmi-sriram, @reyrodrigez, @ricardofiorani, @rightones, @riqwan, @rishabhpoddar, @rjsdnql123, @rodrigofeijao, @runjuu, @Ryan-Dia, @ryo-manba, @s0h311, @sagarpreet-xflowpay, @sairajchouhan, @samdenty, @samsisle, @sanjaiyan-dev, @saseungmin, @SCG82, @schehata, @Schniz, @sepiropht, @serkanbektas, @sferadev, @ShaunFerris, @shivanshubisht, @shozibabbas, @silvioprog, @simonswiss, @simPod, @sivtu, @SleeplessOne1917, @smaeda-ks, @sonam-serchan, @SonMooSans, @soonoo, @sophiebits, @souporserious, @sp00ls, @sqve, @sreetamdas, @stafyniaksacha, @starunaway, @steebchen, @stefanprobst, @steppefox, @steven-tey, @suhaotian, @sukkaw, @SukkaW, @superbahbi, @SuttonJack, @svarunid, @swaminator, @swarnava, @syedtaqi95, @taep96, @taylorbryant, @teobler, @Terro216, @theevilhead, @thepatrick00, @therealrinku, @thomasballinger, @thorwebdev, @tibi1220, @tim-hanssen, @timeyoutakeit, @tka5, @tknickman, @tomryanx, @trigaten, @tristndev, @tunamagur0, @tvthatsme, @tyhopp, @tyler-lutz, @UnknownMonk, @v1k1, @valentincostam, @valentinh, @valentinpolitov, @vamcs, @vasucp1207, @vicsantizo, @vinaykulk621, @vincenthongzy, @visshaljagtap, @vladikoff, @wherehows, @WhoAmIRUS, @WilderDev, @Willem-Jaap, @williamli, @wiredacorn, @wiscaksono, @wojtekolek, @ws-jm, @wxh06, @wyattfry, @wyattjoh, @xiaolou86, @y-tsubuku, @yagogmaisp, @yangshun, @yasath, @Yash-Singh1, @yigithanyucedag, @ykzts, @Yovach, @yutsuten, @yyuemii, @zek, @zekicaneksi, @zignis, and @zlrlyy
