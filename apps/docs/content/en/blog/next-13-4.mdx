---
title: Next.js 13.4
description: >-
  Next.js 13.4 moves App Router to stable, Turbopack to beta, and introduces
  experimental support for Server Actions.
author:
  - name: Sebastian Markbåge
    image: /static/team/seb.jpg
  - name: Tim Neutkens
    image: /static/team/tim.jpg
date: 2023-05-04T18:00:00.507Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-13-4/twitter-card.png
---

Next.js 13.4 is a foundational release, marking stability for the App Router:

*   [**App Router (Stable)**](#nextjs-app-router):
    *   React Server Components
    *   Nested Routes & Layouts
    *   Simplified Data Fetching
    *   Streaming & Suspense
    *   Built-in SEO Support
*   [**Turbopack (Beta)**](#turbopack-beta): Your local dev server, faster and with improved stability
*   [**Server Actions (Alpha)**](#server-actions-alpha): Mutate data on the server with zero client JavaScript

Since the release of [Next.js 13](/blog/next-13) six months ago, we've been focused on building the foundations for the future of Next.js—App Router—in a way that can be incrementally adopted without unnecessary breaking changes.

Today, with the release of 13.4, you can now start adopting the App Router for production.

```bash filename="Terminal"
npm i next@latest react@latest react-dom@latest eslint-config-next@latest
```

[Next.js App Router](#nextjs-app-router)
----------------------------------------

We released Next.js in 2016 to provide an easy way to server-render React applications, with our goal to create a more dynamic, personalized, and global web.

[In the original announcement post](https://vercel.com/blog/next), we shared some design principles of Next.js:

*   **Zero setup. Use the filesystem as an API**
*   **Only JavaScript. Everything is a function**
*   **Automatic server rendering and code splitting**
*   **Data fetching is up to the developer**

Next.js is now six years old. Our original design principles have remained—and as Next.js has been adopted by more developers and companies, we have been working on a foundational upgrade to the framework to better achieve these principles.

We've been working on the next generation of Next.js, and today with `13.4`, this next generation is stable and ready for adoption. This post will share more about our design decisions and choices for the App Router.

### [Zero setup. Use the filesystem as an API](#zero-setup-use-the-filesystem-as-an-api)

[File-system based routing](/docs/app/building-your-application/routing) has been a core feature of Next.js. In our original post, we showed this example of creating a route from a single React component:

```js filename="pages/about.js"
// Pages Router
 
import React from 'react';
export default () => <h1>About us</h1>;
```

There was nothing additional to configure. Drop a file inside `pages/` and the Next.js router would take care of the rest. We still love this simplicity with routing. But as usage of the framework grew, so have the types of interfaces developers are looking to build with it.

Developers have asked for improved support for defining layouts, nesting pieces of UI as layouts, and having more flexibility over defining loading and error states. This wasn't an easy thing to retrofit into the existing Next.js router.

Every part of the framework has to be designed around the router. Page transitions, data fetching, caching, mutating and revalidating data, streaming, styling content, and more.

To make our router compatible with streaming, and to solve these requests for enhanced support for layouts, we set out to build a new version of our router.

This is where we landed after our initial release of our [Layouts RFC](/blog/layouts-rfc).

```js filename="app/layout.js"
// New: App Router ✨
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

```js filename="app/page.js"
export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}
```

What's more important than what you see here is what you _don't_ see. This new router (which can be incrementally adopted through the `app/` directory) has an entirely different architecture, built on the foundation of [React Server Components](/docs/getting-started/react-essentials) and [Suspense](/docs/app/building-your-application/routing/loading-ui-and-streaming).

This foundation has allowed us to remove Next.js specific APIs that were initially developed to extend the React primitives. For example, you no longer have to use a custom `_app` file to customize the global shared layout:

```js filename="pages/_app.js"
// Pages Router
 
// This "global layout" wraps all routes. There's no way to
// compose other layout components, and you cannot fetch global
// data from this file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

With the Pages Router, layouts were not able to be composed, and data fetching could not be colocated with the component. With the new App Router, this is now supported.

```js filename="app/layout.js"
// New: App Router ✨
// The root layout is shared for the entire application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

```js filename="app/dashboard/layout.js"
// Layouts can be nested and composed
export default function DashboardLayout({ children }) {
  return (
    <section>
      <h1>Dashboard</h1>
      {children}
    </section>
  );
}
```

With the Pages Router, `_document` was used to customize the initial payload from the server.

```js filename="pages/_document.js"
// Pages Router
 
// This file allows you to customize the <html> and <body> tags
// for the server request, but adds framework-specific features
// rather than writing HTML elements.
import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

With the App Router, you no longer need to import `<Html>`, `<Head>`, and `<Body>` from Next.js. Instead, you just use React.

```js filename="app/layout.js"
// New: App Router ✨
// The root layout is shared for the entire application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

The opportunity to build a new file-system router was also the right time to address many other related feature requests with our routing system. For example:

*   Previously, you could only import global stylesheets from external npm packages (like component libraries) in `_app.js`. This was a less-than-ideal developer experience. With the App Router, you can import (and colocate) any CSS file in any component.
*   Previously, opt-ing into server-side rendering with Next.js (through `getServerSideProps`) meant that interacting with your application was blocked until the entire page was hydrated. With the App Router, we've refactored the architecture to be deeply integrated with React Suspense, meaning we can selectively hydrate parts of the page, without blocking other components in the UI from being interactive. Content can be instantly streamed from the server, improving the perceived loading performance of a page.

The [router](/docs/app/building-your-application/routing) is the core of what makes Next.js work. But it's not about the router itself, but how it integrates the rest of the pieces of the framework—like [data fetching](/docs/app/building-your-application/data-fetching).

### [Only JavaScript. Everything is a function](#only-javascript-everything-is-a-function)

Next.js and React developers want to write JavaScript and TypeScript code and compose application components together. From our original post:

```js filename="pages/index.js"
import React from 'react';
import Head from 'next/head';
 
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <h1>Hi. I'm mobile-ready!</h1>
  </div>
);
```

> In future versions of Next.js, we added a DX improvement to automatically import React for you.

This component encapsulates logic that can be reused and composed anywhere in your application. Paired with file-system routing, this meant an easy way to get started building React applications that felt like writing JavaScript and HTML.

For example, if you wanted to fetch some data, the original version of Next.js looked like this:

```js filename="pages/index.js"
import React from 'react';
import 'isomorphic-fetch';
 
export default class extends React.Component {
  static async getInitialProps() {
    const res = await fetch('https://api.company.com/user/123');
    const data = await res.json();
    return { username: data.profile.username };
  }
}
```

> In future versions of Next.js, we added a DX improvement that polyfilled fetch so you didn't need to import `isomorphic-fetch` or `node-fetch`, and could use the Web `fetch API` on both the client and server.

As adoption grew and the framework matured, we explored new patterns for data fetching.

`getInitialProps` ran both the server _and_ client. This API extended the React component, allowing you to make a `Promise` and forward the results to the component's `props`.

While `getInitialProps` does still work today, we then iterated forward on the next generation of data fetching APIs based on customer feedback: `getServerSideProps` and `getStaticProps`.

```js filename="pages/index.js"
// Generate a static version of the route
export async function getStaticProps(context) {
  return { props: {} };
}
// Or dynamically server-render the route
export async function getServerSideProps(context) {
  return { props: {} };
}
```

These APIs made it more clear where your code was running, either the client or server, and allowed Next.js applications to be [automatically statically optimized](/docs/pages/building-your-application/rendering/automatic-static-optimization). Further, it allowed for [static exports](/docs/app/building-your-application/deploying/static-exports), enabling Next.js to be deployed to places that don't support a server (e.g. AWS S3 bucket).

However, this was not "just JavaScript", and we wanted to adhere closer to our original design principle.

Since Next.js was created, we've worked closely with the React core team at Meta to build framework features on top of React primitives. Our partnership, in combination with the years of research and development from the React core team, has led to an opportunity for Next.js to achieve our goals through the latest version of the React architecture, including [Server Components](/docs/getting-started/react-essentials).

With the App Router, you [fetch data](/docs/app/building-your-application/data-fetching) using the familiar `async` and `await` syntax. There are no new APIs to learn. By default, all components are React Server Components, so data fetching happens securely on the server. For example:

```js filename="app/page.js"
export default async function Page() {
  const res = await fetch('https://api.example.com/...');
  // The return value is *not* serialized
  // You can use Date, Map, Set, etc.
  const data = res.json();
 
  return '...';
}
```

Critically, the "data fetching is up to the developer" principle is realized. You can fetch data and compose _any_ component. And not just first-party components, but _any_ component in the Server Components ecosystem, like a [Twitter embed](https://github.com/vercel-labs/react-tweet) `react-tweet`, which has been designed to integrate with Server Components and run entirely on the server.

```js filename="app/page.js"
import { Tweet } from 'react-tweet';
 
export default async function Page() {
  return <Tweet id="790942692909916160" />;
}
```

Since the router is integrated with [React Suspense](https://react.dev/reference/react/Suspense), you can more fluidly display fallback content while parts of your content are loading, and progressively reveal content as desired.

```js filename="app/page.js"
import { Suspense } from 'react';
import { PostFeed, Weather } from './components';
 
export default function Page() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  );
}
```

Further, the router marks page navigations as [transitions](https://react.dev/reference/react/useTransition), enabling route transitions to be interruptible.

### [Automatic server rendering and code splitting](#automatic-server-rendering-and-code-splitting)

When we created Next.js, it was still common for developers to manually configure webpack, babel, and other tooling to get a React application running. Adding further optimizations like server rendering or code splitting was often not implemented in custom solutions. Next.js, as well as other React frameworks, created an abstraction layer to implement and force these best practices.

Route-based code splitting meant that each file in your `pages/` directory would be code split into its own JavaScript bundle, helping reduce the file system and improve initial page load performance.

This was beneficial for both server-rendered applications as well as single-page applications with Next.js, as the latter often loaded a single large JavaScript bundle on application startup. However, to implement component-level code splitting, developers needed to use `next/dynamic` to dynamically import components.

```tsx filename="app/page.tsx"
import dynamic from 'next/dynamic';
 
const DynamicHeader = dynamic(() => import('../components/header'), {
  loading: () => <p>Loading...</p>,
});
 
export default function Home() {
  return <DynamicHeader />;
}
```

With the App Router, Server Components are not included in the JavaScript bundle for the browser. [Client components](/docs/getting-started/react-essentials#client-components) are automatically code split by default (either with webpack or Turbopack in Next.js). Further, since the entire router architecture is streaming and Suspense enabled, you can progressively send parts of your UI from the server to the client.

For example, you can code split entire code paths with conditional logic. In this example, you would not need to load the dashboard's client-side JavaScript for logged-out users.

```tsx filename="app/layout.tsx"
import { getUser } from './auth';
import { Dashboard, Landing } from './components';
 
export default async function Layout() {
  const isLoggedIn = await getUser();
  return isLoggedIn ? <Dashboard /> : <Landing />;
}
```

[Turbopack (Beta)](#turbopack-beta)
-----------------------------------

[Turbopack](https://nextjs.org/docs/app/api-reference/turbopack), our new bundler we're testing and stabilizing through Next.js, helps speed up local iterations while working on your Next.js application (through `next dev --turbo`) and soon your production builds (`next build --turbo`).

Since the alpha release in Next.js 13, we've seen a steady growth in adoption as we've worked to patch bugs and add support for missing features. We've been dogfooding Turbopack on [Vercel.com](https://vercel.com) and with many Vercel customers operating large Next.js websites to gather feedback and improve stability. We are grateful for the community's support in testing and reporting bugs to our team.

Now six months later, we're ready to move forward into the beta phase.

Turbopack does not yet have full feature parity with webpack and Next.js. We are tracking support for those features in [this issue](https://github.com/vercel/next.js/issues/49174). However, the majority of use cases should now be supported. Our goal with this beta is to continue addressing remaining bugs from increased adoption and prepare for stability in a future version.

Our investment into improving the incremental engine and caching layer of Turbopack will not only speed up local development, but also production builds soon. Stay tuned for a future Next.js version where you'll be able to run `next build --turbo` for instant builds.

Try out the [Turbopack](/docs/architecture/turbopack) beta today in Next.js 13.4 with `next dev --turbo`.

[Server Actions (Alpha)](#server-actions-alpha)
-----------------------------------------------

The React ecosystem has seen a lot of innovation and exploration of ideas around forms, managing form state, and caching and revalidating of data. Over time, React has become more opinionated about some of these patterns. For example, recommended ["uncontrolled components"](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components) for form state.

The current ecosystem of solutions has either been reusable client-side solutions or primitives built into frameworks. Until now, there hasn't been a way to compose server mutations and data primitives. The React team [has been working](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023) on a first-party solution for mutations.

We're excited to announce support for experimental **Server Actions in Next.js**, enabling you to mutate data on the server, calling functions directly _without_ needing to create an in-between API layer.

```tsx
import kv from './kv';
 
export default function Page({ params }) {
  async function increment() {
    'use server';
    await kv.incr(`post:id:${params.id}`);
  }
 
  return (
    <form action={increment}>
      <button type="submit">Like</button>
    </form>
  );
}
```

With Server Actions, you have powerful server-first data mutations, less client-side JavaScript, and progressively enhanced forms.

```tsx
import db from './db';
import { redirect } from 'next/navigation';
 
async function create(formData: FormData) {
  'use server';
  const post = await db.post.insert({
    title: formData.get('title'),
    content: formData.get('content'),
  });
  redirect(`/blog/${post.slug}`);
}
 
export default function Page() {
  return (
    <form action={create}>
      <input type="text" name="title" />
      <textarea name="content" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

Server Actions in Next.js have been designed for deep integration with the rest of the data lifecycle, including the Next.js Cache, Incremental Static Regeneration (ISR), and the client router.

Revalidating data through new APIs `revalidatePath` and `revalidateTag` mean that mutating, re-rendering the page, or redirecting can happen in **one network roundtrip**, ensuring the correct data is displayed on the client, even if the upstream provider is slow.

```tsx
import db from './db';
import { revalidateTag } from 'next/cache';
 
async function update(formData: FormData) {
  'use server';
  await db.post.update({
    title: formData.get('title'),
  });
  revalidateTag('posts');
}
 
export default async function Page() {
  const res = await fetch('https://...', { next: { tags: ['posts'] } });
  const data = await res.json();
  // ...
}
```

Server Actions are designed to be composable. Anyone in the React community can build and publish Server Actions and distribute them in the ecosystem. Just like Server Components, we're excited about the new era of composable primitives for both the client and the server.

[Server Actions](/docs/app/building-your-application/data-fetching/server-actions) are available today in alpha with Next.js 13.4. By opting into using Server Actions, Next.js will use the experimental release channel of React.

```js filename="next.config.js"
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};
 
module.exports = nextConfig;
```

[Other Improvements](#other-improvements)
-----------------------------------------

*   [Draft Mode](/docs/app/building-your-application/configuring/draft-mode): Fetch and render draft content from your headless CMS. Draft mode works in both `pages` and `app`. We've enhanced and simplified the existing Preview Mode API, which continues to work for `pages`. Preview Mode does _not_ work in `app`—you should use Draft Mode.

[Frequently Asked Questions](#frequently-asked-questions)
---------------------------------------------------------

### [What does App Router stability mean?](#what-does-app-router-stability-mean)

Marking the App Router as stable today does not mean our work is done. Stability means that the core of the App Router is ready for production and has been validated by both our own internal testing, as well as many Next.js early adopters.

There are still additional optimizations we'd like to make in the future, including Server Actions reaching full stability. It was important for us to push towards core stability to help provide clarity for the community on where they should begin learning and building applications today.

The App Router is built on top of the React `canary` channel, which is now ready for framework adoption of features like Server Components. [Learn more](https://react.dev/blog/2023/05/03/react-canaries).

### [What does this mean for the Next.js beta docs?](#what-does-this-mean-for-the-nextjs-beta-docs)

Starting today, we recommend building new applications with the App Router. The Next.js beta documentation, which has been used to explain the App Router and re-written from the ground up, is now merged back into the [stable Next.js documentation](/docs). You can now easily toggle between the App or Pages Router.

We recommend reading the [App Router Incremental Adoption Guide](/docs/app/building-your-application/upgrading/app-router-migration) to learn how to adopt the App Router.

### [Is the Pages Router going away?](#is-the-pages-router-going-away)

No. We are committed to supporting `pages/` development, including bug fixes, improvements, and security patches, for multiple major versions moving forward. We want to ensure developers have enough time to incrementally adopt the App Router as they're ready.

Using both `pages/` and `app/` in production together is supported and encouraged. The App Router can be adopted on a [per-route basis](/docs/app/building-your-application/upgrading/app-router-migration).

### [Does this mean Server Components are "complete"?](#does-this-mean-server-components-are-complete)

Next.js is one framework that is choosing the build on the React architecture, which includes Server Components. We hope that the experience provided with the App Router will encourage other frameworks (or new frameworks) to consider using this architecture, as well.

There are still patterns yet to be defined in this ecosystem, like handling infinite scroll. For now, we recommend using client solutions for these patterns while the ecosystem grows and libraries are created or updated.

[Community](#community)
-----------------------

Next.js is the result of the combined work of over 2,600 individual developers, industry partners like Google and Meta, and our core team at Vercel. Join the community on [GitHub Discussions](https://github.com/vercel/next.js/discussions), [Reddit](https://www.reddit.com/r/nextjs/), and [Discord](/discord).

This release was brought to you by:

*   The **Next.js** team: [Andrew](https://github.com/acdlite), [Balazs](https://github.com/balazsorban44), [Jan](https://github.com/jankaifer), [Jiachi](https://github.com/huozhi), [Jimmy](https://github.com/feedthejim), [JJ](https://github.com/ijjk), [Josh](https://github.com/gnoff), [Sebastian](https://github.com/sebmarkbage), [Shu](https://github.com/shuding), [Steven](https://github.com/styfle), [Tim](https://github.com/timneutkens), and [Wyatt](https://github.com/wyattjoh).
*   The **Turbopack** team: [Alex](https://github.com/alexkirsz), [Donny](https://github.com/kdy1), [Justin](https://github.com/jridgewell), [Leah](https://github.com/forsakenharmony), [Maia](https://github.com/padmaia), [OJ](https://github.com/kwonoj), [Tobias](https://github.com/sokra), and [Will](https://github.com/wbinnssmith).

And the contributions of: @shuding, @huozhi, @wyattfry, @styfle, @sreetamdas, @afonsojramos, @timneutkens, @alexkirsz, @chriswdmr, @jankaifer, @pn-code, @kdy1, @sokra, @kwonoj, @martin-wahlberg, @Kikobeats, @JTaylor0196, @sebmarkbage, @ijjk, @gnoff, @jridgewell, @sagarpreet-xflowpay, @balazsorban44, @cprussin, @ForsakenHarmony, @li-jia-nan, @dciug, @albertothedev, @DuCanhGH, @feedthejim, @patrick91, @padmaia, @sophiebits, @eps1lon, @reconbot, @acdlite, @cjmling, @nabsul, @motopods, @hanneslund, @tunamagur0, @devknoll, @apeltop, @maranomynet, @y-tsubuku, @EndangeredMassa, @ykzts, @AviAvinav, @adilansari, @wyattjoh, @charkour, @delbaoliveira, @agadzik, @Just-Moh-it, @rodrigofeijao, @leerob, @juliusmarminge, @koba04, @Phiction, @jessewarren-aa, @ryo-manba, @Yovach, and @dylanjha.
