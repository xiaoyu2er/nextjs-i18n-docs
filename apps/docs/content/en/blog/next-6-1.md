---
title: Next.js 6.1
description: Next.js 6.1 features improved reliability and consistency in development
author:
  - name: Tim Neutkens
    image: /static/team/tim.jpg
date: 2018-06-27T19:50:15.699Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-6-1/twitter-card.png
---

We are proud today to introduce the production-ready **Next.js 6.1**, featuring:

*   Increased hot reloading reliability
*   Codebase improvements
*   Next.js codemods

In addition to the Next.js 6.1 release, we're excited to announce that [nextjs.org](https://nextjs.org) is now [open source](https://github.com/vercel/next-site)

[Improved hot reloading reliability](#improved-hot-reloading-reliability)
-------------------------------------------------------------------------

In versions before Next.js 6.1 Next.js implemented `react-hot-loader` on behalf of the user. This library keeps React state between hot reloads.

In doing so `react-hot-loader` adds a few non-standard behaviors to React, for example, it will ignore `shouldComponentUpdate` and the element `type` ended up being a proxy component instead of the actual React component.

To make sure Next.js is as close to default React as possible we have removed `react-hot-loader` as a dependency, this makes sure development and production mode are closer to each other in behavior. Do note that Next.js's hot reloading feature was **not** removed, hot reloading has always been handled by Next.js internally.

[Hot reloading Typescript and other custom extensions](#hot-reloading-typescript-and-other-custom-extensions)
-------------------------------------------------------------------------------------------------------------

By default, Next.js automatically looks for any `.js` or `.jsx` file inside the `pages` directory to define routes.

With the introduction of universal webpack in Next.js 5 came the possibility to have compile-to-js top-level pages. A good example is Typescript, which uses `.ts` and `.tsx`.

`pageExtensions` is a configuration key in `next.config.js` aimed at allowing Next.js plugins to define extensions that should be considered pages. For example [`@zeit/next-typescript`](https://github.com/vercel/next-plugins/tree/master/packages/next-typescript) defines `.ts` and `.tsx` or [`@zeit/next-mdx`](https://github.com/vercel/next-plugins/tree/master/packages/next-mdx) which [documents](https://github.com/vercel/next-plugins/tree/master/packages/next-mdx#top-level-mdx-pages) how to have top level `.mdx` pages.

Previously when implementing `pageExtensions` Next.js plugins were required to implement the `hot-self-accept-loader` that is used for hot reloading. This is no longer required, when adding an extension to `pageExtensions` the `hot-self-accept-loader` is automatically applied.

[Codebase improvements](#codebase-improvements)
-----------------------------------------------

Recently we've been paving the way for upcoming features, this involved some under the hood changes that will improve code quality in the long run.

One of these changes is that the `server/build` directory is moved to the top level `build`. This makes the webpack and babel configuration easier to find for new contributors.

We have also been focusing on adding [Flow](https://flow.org/) types throughout the codebase.

A change we've made that is more visible to users is that `.next/dist` has been renamed to `.next/server`. The `.next` directory that holds build output. For example when you run `next build` the result will be stored in `.next`.

> The pre-rendering files are now in the `server` directory

Occurrences of the same constants have been moved into a common file: [`constants.js`](https://github.com/vercel/next.js/blob/canary/lib/constants.js)

[Next.js codemods](#nextjs-codemods)
------------------------------------

When Next.js 6.0 was released the magically injected `url` property on page components was deprecated. The reason `url` is going away is that we want to make things very predictable and explicit. Having a magical url property coming out of nowhere doesn't aid that goal.

The recommended way to get the same properties the `url` property had is using `withRouter`:

```js filename="page.js"
// old
class Page extends React.Component {
  render() {
    const { url } = this.props;
    return <div>{url.pathname}</div>;
  }
}
export default Page;
```

> How the pathname was accessed in versions before Next.js 6 using `url`

```js filename="page.js"
// new
import { withRouter } from 'next/router';
class Page extends React.Component {
  render() {
    const { router } = this.props;
    return <div>{router.pathname}</div>;
  }
}
export default withRouter(Page);
```

> How the pathname should be accessed in versions after Next.js 6 using `router` injected by `withRouter`

As we are committed to keeping the upgrade path for Next.js applications simple, so we set out to create an easy way of upgrading usages of `url` to `withRouter`.

The result of this effort is [next‑codemod](https://github.com/vercel/next-codemod), a library of codemods that make upgrading specific deprecated features to their new usage as easy as running one command.

The first codemod we're providing is `url-to-withrouter` which automatically transforms many cases where `url` was used to `withRouter`.

```bash filename="Terminal"
  jscodeshift -t ./url-to-withrouter.js pages/**/*.js
```

> This will transform uses of `url` to `withRouter`.

[Read more here](https://github.com/vercel/next-codemod#url-to-withrouter)

[Contributing to Next.js](#contributing-to-nextjs)
--------------------------------------------------

The Next.js community is growing, with more than 450 contributors that already landed at least 1 commit into the Next.js core or examples.

There's many ways to contribute back to Next.js:

*   Joining the community and giving advice on [GitHub](https://github.com/vercel/next.js/discussions)
    
*   Contributing examples of common use cases: [examples directory](https://github.com/vercel/next.js/tree/canary/examples)
    
*   Checking the [good first issue](https://github.com/vercel/next.js/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22good+first+issue%22) and [help wanted](https://github.com/vercel/next.js/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22help+wanted%22) labels on [GitHub](https://github.com/vercel/next.js)
    
    > There's 30 open issues with the [good first issue](https://github.com/vercel/next.js/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22good+first+issue%22) label. Giving new contributors the opportunity to contribute.
    

[nextjs.org open source](#nextjsorg-open-source)
------------------------------------------------

We're excited to announce that [nextjs.org](https://nextjs.org) is now [open source](https://github.com/vercel/next-site) so that it can serve as a reference Nextjs implementation and issues/improvements can be filed directly on the project.

[Future](#future)
-----------------

We've been working on a few new features to increase reliability and performance, here are a few highlights:

### [Webpack 4](#webpack-4)

Webpack 4 brings a lot of improvements: better code-splitting, less configuration is needed by default, and most importantly faster build times. In initial tests we did on an app with over 200 pages `next build` went from taking 100 seconds to 70 seconds on average. On a second run (with caches) a `next build` took 21 seconds on average.

### [Serverless Next.js](#serverless-nextjs)

We are incrementally making changes to prepare to move `next start` out into its own package: `next-server`. This package will be heavily optimized for install size and bootup time. These optimizations are needed for the "serverless" use case where a new instance of the app is executed every request or every few requests. Meaning the "cold start" of an application has to be optimized to be as fast as possible.
