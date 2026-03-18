import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-9-Ds1RZTj7.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_9_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 9",
	"description": "Next.js 9 includes TypeScript support, Dynamic Routing, API Routes, Automatic Static Optimization, and more!",
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
			"name": "Lukáš Huvar",
			"image": "/static/team/huvik.jpg"
		},
		{
			"name": "Tim Neutkens",
			"image": "/static/team/tim.jpg"
		}
	],
	"date": /* @__PURE__ */ new Date(15625692e5),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-9/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "After 70 canary releases we are pleased to introduce Next.js 9, featuring:"
		},
		{
			"heading": void 0,
			"content": "**Built-in Zero-Config TypeScript Support**: Build your application with increased confidence, thanks to automatic TypeScript support and integrated type-checking."
		},
		{
			"heading": void 0,
			"content": "**File system-Based Dynamic Routing**: Express complex application routing requirements through the file system without the need for a custom server."
		},
		{
			"heading": void 0,
			"content": "**Automatic Static Optimization**: Create ultra-fast websites that leverage *Server-Side Rendering and Static Prerendering* by default without compromising on features."
		},
		{
			"heading": void 0,
			"content": "**API Routes**: Quickly build back-end application endpoints, leveraging hot-reloading and a unified build-pipeline."
		},
		{
			"heading": void 0,
			"content": "**More Production Optimizations**: Applications are more responsive than ever thanks to in-viewport prefetching and other optimizations."
		},
		{
			"heading": void 0,
			"content": "**Improved DX**: Unobtrusive, ease-of-use improvements to help you develop at your best."
		},
		{
			"heading": void 0,
			"content": "As always, we have strived to ensure all these benefits are backwards compatible. For most Next.js applications, all you need to do is run:"
		},
		{
			"heading": void 0,
			"content": "There are very few cases where your codebase might require changes. See the upgrade guide for more information."
		},
		{
			"heading": void 0,
			"content": "Since our last release, we’re happy to have seen companies like IGN, Bang & Olufsen, Intercom, Buffer, and Ferrari launch with Next.js. Check out the showcase for more!"
		},
		{
			"heading": "built-in-zero-config-typescript-support",
			"content": "One year ago Next.js 6 introduced basic TypeScript support through a plugin called `@zeit/next-typescript`. Users also had to customize their `.babelrc` and enable it in `next.config.js`."
		},
		{
			"heading": "built-in-zero-config-typescript-support",
			"content": "When configured, the plugin would allow `.ts` and `.tsx` files to be built by Next.js. However, it did not integrate type-checking, nor were types provided by Next.js core. This meant a community package had to be maintained separately in DefinitelyTyped that could be out of sync with releases."
		},
		{
			"heading": "built-in-zero-config-typescript-support",
			"content": "While talking with many users, existing and new, it became clear that most were very interested in using TypeScript. They wanted a more reliable and standard solution for easily integrating TypeScript into their existing or new codebase."
		},
		{
			"heading": "built-in-zero-config-typescript-support",
			"content": "For that reason, we set out to integrate TypeScript support into the Next.js core, improving developer experience, and making it faster in the process."
		},
		{
			"heading": "automated-setup",
			"content": "Getting started with TypeScript in Next.js is easy: rename any file, page or component, from `.js` to `.tsx`. Then, run `next dev`!"
		},
		{
			"heading": "automated-setup",
			"content": "This will cause Next.js to detect TypeScript is being used in your project. The Next.js CLI will guide you through installing the necessary types for React and Node.js."
		},
		{
			"heading": "automated-setup",
			"content": "Next.js will also create a default `tsconfig.json` with sensible defaults if not already present. This file allows for integrated type-checking in editors like Visual Studio Code."
		},
		{
			"heading": "automated-setup",
			"content": "Next.js 9 Automated TypeScript Setup"
		},
		{
			"heading": "integrated-type-checking",
			"content": "Next.js handles type-checking for you in both development and building for production."
		},
		{
			"heading": "integrated-type-checking",
			"content": "While in development Next.js will show you type errors after saving a file. Type-checking happens in the background, allowing you to interact with your updated application in the browser instantly. Type errors will propagate to the browser as they become available."
		},
		{
			"heading": "integrated-type-checking",
			"content": "Next.js 9 Development Type-Checking"
		},
		{
			"heading": "integrated-type-checking",
			"content": "Next.js will also automatically fail the production build (i.e. `next build`) if type errors are present. This helps prevent shipping broken code to production."
		},
		{
			"heading": "integrated-type-checking",
			"content": "Next.js 9 Production Type-Checking"
		},
		{
			"heading": "nextjs-core-written-in-typescript",
			"content": "Over the past few months we’ve migrated most of the codebase to TypeScript, this has not only reinforced our code quality, it also allows us to provide types for all core modules."
		},
		{
			"heading": "nextjs-core-written-in-typescript",
			"content": "For example, when you import `next/link`, editors that support TypeScript will show the allowed properties and which values they accept."
		},
		{
			"heading": "nextjs-core-written-in-typescript",
			"content": "Next.js Core Types"
		},
		{
			"heading": "dynamic-route-segments",
			"content": "Dynamic routing (also known as URL Slugs or Pretty/Clean URLs) was one of the first feature requests on GitHub after Next.js was released 2.5 years ago!"
		},
		{
			"heading": "dynamic-route-segments",
			"content": "The issue was \"solved\" in Next.js 2.0 by introducing the custom server API for using Next.js programmatically. This allowed using Next.js as a rendering engine, enabling abstractions and mapping of incoming URLs to render certain pages."
		},
		{
			"heading": "dynamic-route-segments",
			"content": "We spoke with users and examined many of their applications, finding that many of them had a custom server. A pattern emerged: the most prominent reason for the custom server was dynamic routing."
		},
		{
			"heading": "dynamic-route-segments",
			"content": "However, a custom server comes with its own pitfalls: routing is handled at the server level instead of the proxy, it is deployed and scaled as a monolith, and it is prone to performance issues."
		},
		{
			"heading": "dynamic-route-segments",
			"content": "Since a custom server requires the entire application to be available in one instance, it is typically difficult to deploy to a Serverless environment that solves these issues. Serverless requests are routed at the proxy layer and are scaled/executed independently to avoid performance bottlenecks."
		},
		{
			"heading": "dynamic-route-segments",
			"content": "Additionally, we believe we can offer a better Developer Experience! Much of Next.js' magic starts when you create a file named `pages/blog.js` and suddenly have a page accessible at `/blog`."
		},
		{
			"heading": "dynamic-route-segments",
			"content": "Why should a user need to create their own server and learn about Next.js' programmatic API to support a route like `/blog/my-first-post` (`/blog/:id`)?"
		},
		{
			"heading": "dynamic-route-segments",
			"content": "Based on this feedback and vision, we started investigating route mapping solutions, driven by what users already knew: the `pages/` directory."
		},
		{
			"heading": "creating-a-dynamically-routed-page",
			"content": "Next.js supports creating routes with basic named parameters, a pattern popularized by `path-to-regexp` (the library that powers Express)."
		},
		{
			"heading": "creating-a-dynamically-routed-page",
			"content": "Creating a page that matches the route `/post/:pid` can now be achieved by creating a file in your `pages` directory named: `pages/post/[pid].js`!"
		},
		{
			"heading": "creating-a-dynamically-routed-page",
			"content": "Next.js will automatically match requests like `/post/1`, `/post/hello-nextjs`, etc and render the page defined in `pages/post/[pid].js`. The matching URL segment will be passed as a query parameter to your page with the name specified between the `[square-brackets]`."
		},
		{
			"heading": "creating-a-dynamically-routed-page",
			"content": "For example: given the following page and the request `/post/hello-nextjs`, the `query` object will be `{ pid: 'hello-nextjs' }`:"
		},
		{
			"heading": "creating-a-dynamically-routed-page",
			"content": "Multiple dynamic URL segments are also supported!"
		},
		{
			"heading": "creating-a-dynamically-routed-page",
			"content": "The `[param]` syntax is supported for directory names and file names, meaning the following examples work:"
		},
		{
			"heading": "creating-a-dynamically-routed-page",
			"content": "You can read more about this feature in the Next.js Documentation or Next.js Learn section."
		},
		{
			"heading": "automatic-static-optimization",
			"content": "Next.js added support for static website generation in v3, released approximately two years ago. At the time, this was the most requested feature to be added to Next.js."
		},
		{
			"heading": "automatic-static-optimization",
			"content": "And for good reason: there's no denying that static websites are &#x2A;fast!* They require no server-side computation and can be instantly streamed to the end-user from CDN locations."
		},
		{
			"heading": "automatic-static-optimization",
			"content": "However, the choice between a server-side rendered or statically generated application was binary, you either choose for server-side rendering or for static generation. There was no middle ground."
		},
		{
			"heading": "automatic-static-optimization",
			"content": "In reality applications can have different requirements. These requirements require different rendering strategies and trade-offs."
		},
		{
			"heading": "automatic-static-optimization",
			"content": "For example, a homepage and marketing pages typically contain static content and are great candidates for static optimization."
		},
		{
			"heading": "automatic-static-optimization",
			"content": "On the other hand, a product dashboard may benefit from being server-side rendering where the data frequently updates."
		},
		{
			"heading": "automatic-static-optimization",
			"content": "We started exploring how we could give users the best of both worlds and be **fast by default**. How could we give users static marketing pages and dynamic server-rendered pages?"
		},
		{
			"heading": "automatic-static-optimization",
			"content": "Beginning with Next.js 9, users no longer have to make the choice between fully server-rendering or statically exporting their application. Giving you the best of both worlds on a per-page basis."
		},
		{
			"heading": "automatic-partial-static-export",
			"content": "A heuristic was introduced to automatically determine if a page can be prerendered to static HTML."
		},
		{
			"heading": "automatic-partial-static-export",
			"content": "This determination is made by whether or not the page has blocking data requirements through using `getInitialProps`."
		},
		{
			"heading": "automatic-partial-static-export",
			"content": "This heuristic allows Next.js to emit hybrid applications that contain **both server-rendered and statically generated pages**."
		},
		{
			"heading": "automatic-partial-static-export",
			"content": "The built-in Next.js server (`next start`) and programmatic API (`app.getRequestHandler()`) both support this build output **transparently**. There is no configuration or special handling required."
		},
		{
			"heading": "automatic-partial-static-export",
			"content": "Statically generated pages are still reactive: Next.js will hydrate your application client-side to give it full interactivity."
		},
		{
			"heading": "automatic-partial-static-export",
			"content": "Furthermore, Next.js will update your application after hydration if the page relies on query parameters in the URL."
		},
		{
			"heading": "automatic-partial-static-export",
			"content": "Next.js will visually inform you if a page will be statically generated during development. This visual artifact can be hidden by clicking it."
		},
		{
			"heading": "automatic-partial-static-export",
			"content": "Next.js Static Optimization Indicator"
		},
		{
			"heading": "automatic-partial-static-export",
			"content": "Statically generated pages will also be displayed in Next.js' build output:"
		},
		{
			"heading": "automatic-partial-static-export",
			"content": "Next.js Build Output Type Indicator"
		},
		{
			"heading": "api-routes",
			"content": "In many cases when building React applications you end up needing some kind of backend. Either to retrieve data from a database or to process data provided by your users (e.g. a contact form)."
		},
		{
			"heading": "api-routes",
			"content": "We found that many users who needed a backend built their API using a custom server. In doing so, they ran into quite a few issues. For example, Next.js does not compile custom server code, meaning that you couldn't use `import` / `export` or TypeScript."
		},
		{
			"heading": "api-routes",
			"content": "For this reason, many users ended up implementing their own custom compilation pipeline on top of the custom server. While this solved their goal, it is prone to many pitfalls: for example, when configured incorrectly tree shaking would be disabled for their entire application."
		},
		{
			"heading": "api-routes",
			"content": "This raised the question: what if we bring the developer experience Next.js provides to building API backends?"
		},
		{
			"heading": "api-routes",
			"content": "Today we’re excited to introduce API routes, the best-in-class developer experience from Next.js for building your backend."
		},
		{
			"heading": "api-routes",
			"content": "To start using API routes you create a directory called `api/` inside the `pages/` directory."
		},
		{
			"heading": "api-routes",
			"content": "Any file in this directory will be automatically mapped to `/api/<your route>`, in the same way that other page files are mapped to routes."
		},
		{
			"heading": "api-routes",
			"content": "For example, `pages/api/contact.js` will be mapped to `/api/contact`."
		},
		{
			"heading": "api-routes",
			"content": "> **Note**: API Routes also support Dynamic Routes!"
		},
		{
			"heading": "api-routes",
			"content": "All the files inside the `pages/api/` directory export a request handler function instead of a React Component:"
		},
		{
			"heading": "api-routes",
			"content": "`req` refers to NextApiRequest which extends http.IncomingMessage"
		},
		{
			"heading": "api-routes",
			"content": "`res` refers to NextApiResponse which extends http.ServerResponse"
		},
		{
			"heading": "api-routes",
			"content": "Generally API endpoints take in some incoming data, for example the querystring, request body, or cookies and respond with other data."
		},
		{
			"heading": "api-routes",
			"content": "When investigating adding API routes support to Next.js we noticed that in many cases users didn’t use the Node.js request and response objects directly. Instead, they used an abstraction provided by server libraries like Express."
		},
		{
			"heading": "api-routes",
			"content": "The reason for doing this is that in many cases the incoming data is some form of text that has to be parsed first to be useful. So these specific server libraries help remove the burden of manually parsing the data, most commonly through middlewares. The most commonly used ones provide querystring, body, and cookies parsing, however they still require some setup to get started."
		},
		{
			"heading": "api-routes",
			"content": "API routes in Next.js will provide these middlewares by default so that you can be productive creating API endpoints immediately:"
		},
		{
			"heading": "api-routes",
			"content": "Besides using incoming data your API endpoint generally also returns data. Commonly this response will be JSON. Next.js provides `res.json()` by default to make sending data easier:"
		},
		{
			"heading": "api-routes",
			"content": "When making changes to API endpoints in development the code is automatically reloaded, so there is no need to restart the server."
		},
		{
			"heading": "prefetching-in-viewport-links",
			"content": "Next.js 9 will automatically prefetch `<Link>` components as they appear in-viewport."
		},
		{
			"heading": "prefetching-in-viewport-links",
			"content": "This feature improves the responsiveness of your application by making navigations to new pages quicker."
		},
		{
			"heading": "prefetching-in-viewport-links",
			"content": "Next.js uses an Intersection Observer to prefetch the assets necessary in the background."
		},
		{
			"heading": "prefetching-in-viewport-links",
			"content": "These requests have low-priority and yield to `fetch()` or XHR requests. Next.js will avoid automatically prefetching if the user has data-saver enabled."
		},
		{
			"heading": "prefetching-in-viewport-links",
			"content": "You can opt-out of this feature for rarely visited pages by setting the `prefetch` property to `false`:"
		},
		{
			"heading": "optimized-amp-by-default",
			"content": "Next.js 9 now renders optimized AMP by default for AMP-first and hybrid AMP pages."
		},
		{
			"heading": "optimized-amp-by-default",
			"content": "While AMP pages are opt-in, Next.js will automatically optimize their output. These optimizations can result in up to 50% faster rendering speed!"
		},
		{
			"heading": "optimized-amp-by-default",
			"content": "This change was made possible by Sebastian Benz's incredible work on the AMP Optimizer."
		},
		{
			"heading": "dead-code-elimination-for-typeof-window-branches",
			"content": "Next.js 9 replaces `typeof window` with its appropriate value (`undefined` or `object`) during server and client builds. This change allows Next.js to remove dead code from your production built application automatically."
		},
		{
			"heading": "dead-code-elimination-for-typeof-window-branches",
			"content": "Users should see their client-side bundle sizes decrease if they have server-only code in `getInitialProps` or other parts of their application."
		},
		{
			"heading": "compiling-indicator",
			"content": "In versions before 9, the only way to know that hot code replacement was going to happen (and that the Next.js compiler toolchain is doing work) is to look at the developer console."
		},
		{
			"heading": "compiling-indicator",
			"content": "However many times one is looking at the resulting rendering instead, making it hard to know if Next.js is still doing compilation work or not. For example you might be making changes to styles on the page that are subtle and you wouldn't immediately know if they were updated."
		},
		{
			"heading": "compiling-indicator",
			"content": "For this reason we created a RFC / \"good first issue\" to discuss potential solutions for the problem of indicating that work is being done."
		},
		{
			"heading": "compiling-indicator",
			"content": "We received feedback from many designers and engineers on the RFC, for example what they prefer and potential directions for the design of the indicator."
		},
		{
			"heading": "compiling-indicator",
			"content": "Rafael Almeida took this opportunity to collaborate with our team and implement a brand new indicator that is now available by default in Next.js 9."
		},
		{
			"heading": "compiling-indicator",
			"content": "Whenever Next.js is doing compilation work you will see a small triangle show up in the bottom right corner of the page!"
		},
		{
			"heading": "compiling-indicator",
			"content": "Next.js Compilation Indicator"
		},
		{
			"heading": "console-output",
			"content": "Traditionally when making changes in development Next.js would show a compiling indicator state with loading state bars filling up and would continuously clear the screen as you made changes."
		},
		{
			"heading": "console-output",
			"content": "This behavior causes some issues. Most notably it would clear console output from both your application code, for example when you add `console.log` to your components. But also when using external tools that stitch log output together like the Vercel CLI or `docker-compose`."
		},
		{
			"heading": "console-output",
			"content": "Starting from Next.js 9 the log output jumps less and no longer clears the screen. The allows for a better overall experience as your terminal window will have more relevant information and flicker less while Next.js will integrate better with tools that you might already be using."
		},
		{
			"heading": "console-output",
			"content": "Next.js Development Console Output"
		},
		{
			"heading": "console-output",
			"content": "Special thanks to Justin Chase for collaborating on output clearing."
		},
		{
			"heading": "build-output-statistics",
			"content": "Building your application for production using `next build` it will now give you a detailed view of all pages that were built."
		},
		{
			"heading": "build-output-statistics",
			"content": "Every page receives a few statistics automatically."
		},
		{
			"heading": "build-output-statistics",
			"content": "The most prominent one is bundle size. As your application grows your JavaScript bundles will also grow, this build-time indication will help you indicate growth of your production bundles. In the future you will also be able to set performance budgets for pages that will fail the production build."
		},
		{
			"heading": "build-output-statistics",
			"content": "Next.js Built Page Size"
		},
		{
			"heading": "build-output-statistics",
			"content": "Besides bundle sizes we also show how many project components and `node_modules` components are being used in every page. This gives an indication of the page complexity."
		},
		{
			"heading": "build-output-statistics",
			"content": "Next.js Page Package Count"
		},
		{
			"heading": "build-output-statistics",
			"content": "Every page also has an indication of if it's statically optimized or server-side rendered, as every page can behave differently."
		},
		{
			"heading": "build-output-statistics",
			"content": "Next.js Built Page Type"
		},
		{
			"heading": "per-page-configuration-object",
			"content": "Every page can now export a configuration object. Initially this configuration allows you to opt-into AMP, but in the future you will be able to configure more page specific options."
		},
		{
			"heading": "per-page-configuration-object",
			"content": "To opt into hybrid AMP rendering you can use the value `'hybrid'`:"
		},
		{
			"heading": "per-page-configuration-object",
			"content": "The `withAmp` higher order component was removed in favor of this new configuration."
		},
		{
			"heading": "per-page-configuration-object",
			"content": "We've provided a codemod that automatically converts usage of `withAmp` to the new configuration object. You can read more about this in the upgrade guide."
		},
		{
			"heading": "codebase-improvements",
			"content": "We've recently made some changes to our tooling to provide a better experience while contributing to the codebase and ensure stability as the codebase grows."
		},
		{
			"heading": "codebase-improvements",
			"content": "As you've read under the TypeScript section the Next.js core is now written in TypeScript and types are automatically generated for Next.js applications to use. Besides this being useful for applications built using Next.js, it's also useful when working on the core codebase. As you get type errors and autocompletion automatically."
		},
		{
			"heading": "codebase-improvements",
			"content": "Next.js already had quite a large integration test suite that consists of 50+ Next.js applications with tests that run against them. These tests ensure that when a new version is released upgrading is smooth as the features that were available before were tested against the same test suite."
		},
		{
			"heading": "codebase-improvements",
			"content": "Most of our tests are integration tests because in many cases they replicate \"real\" developers using Next.js in development. For example we have tests that replicate making changes to a Next.js application to see if hot module replacement works."
		},
		{
			"heading": "codebase-improvements",
			"content": "Our integration tests are mostly based on Selenium webdriver, which we combined with chromedriver to test in headless Chrome. However as time passed certain issues would arise in other browsers, especially older browsers like Internet Explorer 11."
		},
		{
			"heading": "codebase-improvements",
			"content": "Because we used Selenium we were able to run our tests automatically on multiple browsers."
		},
		{
			"heading": "codebase-improvements",
			"content": "As of right now we are running our test suite on Chrome, Firefox, Safari and Internet Explorer 11."
		},
		{
			"heading": "google-chrome-collaboration",
			"content": "The Google Chrome team has been working on improving Next.js by contributing RFCs and pull-requests."
		},
		{
			"heading": "google-chrome-collaboration",
			"content": "The goal of this collaboration is large-scale performance improvements, focused on bundle sizes, bootup and hydration time."
		},
		{
			"heading": "google-chrome-collaboration",
			"content": "For example these changes will improve the experience of small websites, but also that of massive applications like Hulu, Twitch, and Deliveroo."
		},
		{
			"heading": "module--nomodule",
			"content": "The first area of focus is shipping modern JavaScript to browsers that support modern JavaScript."
		},
		{
			"heading": "module--nomodule",
			"content": "For example currently Next.js has to provide polyfills for `async`/`await` syntax as code might be executed in browsers that do not support `async`/`await` which would break."
		},
		{
			"heading": "module--nomodule",
			"content": "Next.js Module/Nomodule Collaboration RFC"
		},
		{
			"heading": "module--nomodule",
			"content": "To avoid breaking older browsers while still sending modern JavaScript to browsers that support it Next.js will utilize the module/nomodule pattern. The module/nomodule pattern provides a reliable mechanism for serving modern JavaScript to modern browsers while still allowing older browsers to fall back to polyfilled ES5."
		},
		{
			"heading": "module--nomodule",
			"content": "The RFC for module/nomodule in Next.js can be found here."
		},
		{
			"heading": "improved-bundle-splitting",
			"content": "The current bundle splitting strategy in Next.js is based around a ratio-based heuristic for including modules in a single \"commons\" chunk. Because there is very little granularity as there is only one bundle, code is either downloaded unnecessarily (because the commons chunk could include code that's not actually required for a particular route) or the code is duplicated across multiple page bundles."
		},
		{
			"heading": "improved-bundle-splitting",
			"content": "Next.js Chunking Collaboration RFC"
		},
		{
			"heading": "improved-bundle-splitting",
			"content": "The RFC for improved bundle splitting can be found here."
		},
		{
			"heading": "other-improvements",
			"content": "The Chrome team is also working on many other optimizations and changes that will improve Next.js. RFCs for these will be shared soon."
		},
		{
			"heading": "other-improvements",
			"content": "These RFCs and pull-requests are labeled \"Collaboration\" so that they can be easily found in the Next.js issue tracker."
		},
		{
			"heading": "community",
			"content": "We're excited to see the continued growth of the Next.js community."
		},
		{
			"heading": "community",
			"content": "This release had over 65 pull-request authors contributing core improvements or examples."
		},
		{
			"heading": "community",
			"content": "Talking about examples, we now provide over 200 examples on how to integrate Next.js with different libraries and technologies! Including most css-in-js and data-fetching libraries."
		},
		{
			"heading": "community",
			"content": "We've had over **720 contributors** landing at least 1 commit."
		},
		{
			"heading": "community",
			"content": "On GitHub, the project has been starred over **38,600 times**."
		},
		{
			"heading": "community",
			"content": "Over **3,400 pull requests** were submitted since the first release, that is **over 800** since the last major release!"
		},
		{
			"heading": "community",
			"content": "The Next.js community has doubled since the last major release with over **8,600 members**. Join us!"
		},
		{
			"heading": "community",
			"content": "We are thankful to our community and all the external feedback and contributions that helped shape this release."
		}
	],
	"headings": [
		{
			"id": "built-in-zero-config-typescript-support",
			"content": "Built-In Zero-Config TypeScript Support"
		},
		{
			"id": "automated-setup",
			"content": "Automated Setup"
		},
		{
			"id": "integrated-type-checking",
			"content": "Integrated Type-Checking"
		},
		{
			"id": "nextjs-core-written-in-typescript",
			"content": "Next.js Core Written in TypeScript"
		},
		{
			"id": "dynamic-route-segments",
			"content": "Dynamic Route Segments"
		},
		{
			"id": "creating-a-dynamically-routed-page",
			"content": "Creating a Dynamically Routed Page"
		},
		{
			"id": "automatic-static-optimization",
			"content": "Automatic Static Optimization"
		},
		{
			"id": "automatic-partial-static-export",
			"content": "Automatic Partial Static Export"
		},
		{
			"id": "api-routes",
			"content": "API Routes"
		},
		{
			"id": "production-optimizations",
			"content": "Production Optimizations"
		},
		{
			"id": "prefetching-in-viewport-links",
			"content": "Prefetching in-Viewport `<Link>`s"
		},
		{
			"id": "optimized-amp-by-default",
			"content": "Optimized AMP by Default"
		},
		{
			"id": "dead-code-elimination-for-typeof-window-branches",
			"content": "Dead Code Elimination for `typeof window` Branches"
		},
		{
			"id": "developer-experience-improvements",
			"content": "Developer Experience Improvements"
		},
		{
			"id": "compiling-indicator",
			"content": "Compiling Indicator"
		},
		{
			"id": "console-output",
			"content": "Console Output"
		},
		{
			"id": "build-output-statistics",
			"content": "Build Output Statistics"
		},
		{
			"id": "per-page-configuration-object",
			"content": "Per-Page Configuration Object"
		},
		{
			"id": "codebase-improvements",
			"content": "Codebase Improvements"
		},
		{
			"id": "google-chrome-collaboration",
			"content": "Google Chrome Collaboration"
		},
		{
			"id": "module--nomodule",
			"content": "Module / Nomodule"
		},
		{
			"id": "improved-bundle-splitting",
			"content": "Improved Bundle Splitting"
		},
		{
			"id": "other-improvements",
			"content": "Other Improvements"
		},
		{
			"id": "community",
			"content": "Community"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#built-in-zero-config-typescript-support",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#built-in-zero-config-typescript-support",
			children: "Built-In Zero-Config TypeScript Support"
		}) })
	},
	{
		depth: 5,
		url: "#automated-setup",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#automated-setup",
			children: "Automated Setup"
		}) })
	},
	{
		depth: 5,
		url: "#integrated-type-checking",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#integrated-type-checking",
			children: "Integrated Type-Checking"
		}) })
	},
	{
		depth: 5,
		url: "#nextjs-core-written-in-typescript",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#nextjs-core-written-in-typescript",
			children: "Next.js Core Written in TypeScript"
		}) })
	},
	{
		depth: 2,
		url: "#dynamic-route-segments",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#dynamic-route-segments",
			children: "Dynamic Route Segments"
		}) })
	},
	{
		depth: 5,
		url: "#creating-a-dynamically-routed-page",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#creating-a-dynamically-routed-page",
			children: "Creating a Dynamically Routed Page"
		}) })
	},
	{
		depth: 2,
		url: "#automatic-static-optimization",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#automatic-static-optimization",
			children: "Automatic Static Optimization"
		}) })
	},
	{
		depth: 4,
		url: "#automatic-partial-static-export",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#automatic-partial-static-export",
			children: "Automatic Partial Static Export"
		}) })
	},
	{
		depth: 2,
		url: "#api-routes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#api-routes",
			children: "API Routes"
		}) })
	},
	{
		depth: 2,
		url: "#production-optimizations",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#production-optimizations",
			children: "Production Optimizations"
		}) })
	},
	{
		depth: 4,
		url: "#prefetching-in-viewport-links",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#prefetching-in-viewport-links",
			children: [
				"Prefetching in-Viewport ",
				(0, import_jsx_runtime.jsx)("code", { children: "<Link>" }),
				"s"
			]
		}) })
	},
	{
		depth: 4,
		url: "#optimized-amp-by-default",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#optimized-amp-by-default",
			children: "Optimized AMP by Default"
		}) })
	},
	{
		depth: 4,
		url: "#dead-code-elimination-for-typeof-window-branches",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#dead-code-elimination-for-typeof-window-branches",
			children: [
				"Dead Code Elimination for ",
				(0, import_jsx_runtime.jsx)("code", { children: "typeof window" }),
				" Branches"
			]
		}) })
	},
	{
		depth: 2,
		url: "#developer-experience-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#developer-experience-improvements",
			children: "Developer Experience Improvements"
		}) })
	},
	{
		depth: 4,
		url: "#compiling-indicator",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#compiling-indicator",
			children: "Compiling Indicator"
		}) })
	},
	{
		depth: 4,
		url: "#console-output",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#console-output",
			children: "Console Output"
		}) })
	},
	{
		depth: 2,
		url: "#build-output-statistics",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#build-output-statistics",
			children: "Build Output Statistics"
		}) })
	},
	{
		depth: 2,
		url: "#per-page-configuration-object",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#per-page-configuration-object",
			children: "Per-Page Configuration Object"
		}) })
	},
	{
		depth: 2,
		url: "#codebase-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#codebase-improvements",
			children: "Codebase Improvements"
		}) })
	},
	{
		depth: 2,
		url: "#google-chrome-collaboration",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#google-chrome-collaboration",
			children: "Google Chrome Collaboration"
		}) })
	},
	{
		depth: 4,
		url: "#module--nomodule",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#module--nomodule",
			children: "Module / Nomodule"
		}) })
	},
	{
		depth: 4,
		url: "#improved-bundle-splitting",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#improved-bundle-splitting",
			children: "Improved Bundle Splitting"
		}) })
	},
	{
		depth: 4,
		url: "#other-improvements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#other-improvements",
			children: "Other Improvements"
		}) })
	},
	{
		depth: 2,
		url: "#community",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#community",
			children: "Community"
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
		h4: "h4",
		h5: "h5",
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "After 70 canary releases we are pleased to introduce Next.js 9, featuring:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#built-in-zero-config-typescript-support",
				children: "Built-in Zero-Config TypeScript Support"
			}) }), ": Build your application with increased confidence, thanks to automatic TypeScript support and integrated type-checking."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#dynamic-route-segments",
				children: "File system-Based Dynamic Routing"
			}) }), ": Express complex application routing requirements through the file system without the need for a custom server."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "#automatic-static-optimization",
					children: "Automatic Static Optimization"
				}) }),
				": Create ultra-fast websites that leverage ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "Server-Side Rendering and Static Prerendering" }),
				" by default without compromising on features."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#api-routes",
				children: "API Routes"
			}) }), ": Quickly build back-end application endpoints, leveraging hot-reloading and a unified build-pipeline."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#production-optimizations",
				children: "More Production Optimizations"
			}) }), ": Applications are more responsive than ever thanks to in-viewport prefetching and other optimizations."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#developer-experience-improvements",
				children: "Improved DX"
			}) }), ": Unobtrusive, ease-of-use improvements to help you develop at your best."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "As always, we have strived to ensure all these benefits are backwards compatible. For most Next.js applications, all you need to do is run:" }),
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
				children: [
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "npm"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " i"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " next@latest"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react@latest"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " react-dom@latest"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"There are very few cases where your codebase might require changes. See the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/blob/canary/UPGRADING.md",
				children: "upgrade guide"
			}),
			" for more information."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Since our last release, we’re happy to have seen companies like ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://ign.com/",
				children: "IGN"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.bang-olufsen.com/en/",
				children: "Bang & Olufsen"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.intercom.com",
				children: "Intercom"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://buffer.com/",
				children: "Buffer"
			}),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.ferrari.com/",
				children: "Ferrari"
			}),
			" launch with Next.js. Check out the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/showcase",
				children: "showcase"
			}),
			" for more!"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "built-in-zero-config-typescript-support",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#built-in-zero-config-typescript-support",
				children: "Built-In Zero-Config TypeScript Support"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"One year ago ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/blog/next-6",
				children: "Next.js 6"
			}),
			" introduced basic TypeScript support through a plugin called ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@zeit/next-typescript" }),
			". Users also had to customize their ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".babelrc" }),
			" and enable it in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When configured, the plugin would allow ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".ts" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" }),
			" files to be built by Next.js. However, it did not integrate type-checking, nor were types provided by Next.js core. This meant a community package had to be maintained separately in DefinitelyTyped that could be out of sync with releases."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "While talking with many users, existing and new, it became clear that most were very interested in using TypeScript. They wanted a more reliable and standard solution for easily integrating TypeScript into their existing or new codebase." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For that reason, we set out to integrate TypeScript support into the Next.js core, improving developer experience, and making it faster in the process." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h5, {
			id: "automated-setup",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#automated-setup",
				children: "Automated Setup"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Getting started with TypeScript in Next.js is easy: rename any file, page or component, from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".js" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".tsx" }),
			". Then, run ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			"!"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This will cause Next.js to detect TypeScript is being used in your project. The Next.js CLI will guide you through installing the necessary types for React and Node.js." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js will also create a default ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "tsconfig.json" }),
			" with sensible defaults if not already present. This file allows for integrated type-checking in editors like ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://code.visualstudio.com/",
				children: "Visual Studio Code"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js 9 Automated TypeScript Setup" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h5, {
			id: "integrated-type-checking",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#integrated-type-checking",
				children: "Integrated Type-Checking"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js handles type-checking for you in both development and building for production." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "While in development Next.js will show you type errors after saving a file. Type-checking happens in the background, allowing you to interact with your updated application in the browser instantly. Type errors will propagate to the browser as they become available." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js 9 Development Type-Checking" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js will also automatically fail the production build (i.e. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			") if type errors are present. This helps prevent shipping broken code to production."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-9/build-type-error.png",
			alt: "Next.js 9 Production Type-Checking"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js 9 Production Type-Checking" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h5, {
			id: "nextjs-core-written-in-typescript",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nextjs-core-written-in-typescript",
				children: "Next.js Core Written in TypeScript"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Over the past few months we’ve migrated most of the codebase to TypeScript, this has not only reinforced our code quality, it also allows us to provide types for all core modules." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, when you import ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" }),
			", editors that support TypeScript will show the allowed properties and which values they accept."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-9/next-types.png",
			alt: "Next.js Core Types"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js Core Types" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "dynamic-route-segments",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#dynamic-route-segments",
				children: "Dynamic Route Segments"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Dynamic routing (also known as URL Slugs or Pretty/Clean URLs) was one of the first feature requests on GitHub after Next.js was released 2.5 years ago!" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The issue was \"solved\" in Next.js 2.0 by introducing the custom server API for using Next.js programmatically. This allowed using Next.js as a rendering engine, enabling abstractions and mapping of incoming URLs to render certain pages." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We spoke with users and examined many of their applications, finding that many of them had a custom server. A pattern emerged: the most prominent reason for the custom server was dynamic routing." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "However, a custom server comes with its own pitfalls: routing is handled at the server level instead of the proxy, it is deployed and scaled as a monolith, and it is prone to performance issues." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Since a custom server requires the entire application to be available in one instance, it is typically difficult to deploy to a Serverless environment that solves these issues. Serverless requests are routed at the proxy layer and are scaled/executed independently to avoid performance bottlenecks." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Additionally, we believe we can offer a better Developer Experience! Much of Next.js' magic starts when you create a file named ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/blog.js" }),
			" and suddenly have a page accessible at ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/blog" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Why should a user need to create their own server and learn about Next.js' programmatic API to support a route like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/blog/my-first-post" }),
			" (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/blog/:id" }),
			")?"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Based on this feedback and vision, we started investigating route mapping solutions, driven by what users already knew: the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/" }),
			" directory."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h5, {
			id: "creating-a-dynamically-routed-page",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#creating-a-dynamically-routed-page",
				children: "Creating a Dynamically Routed Page"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js supports creating routes with basic named parameters, a pattern popularized by ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.npmjs.com/package/path-to-regexp",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "path-to-regexp" })
			}),
			" (the library that powers ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://expressjs.com",
				children: "Express"
			}),
			")."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Creating a page that matches the route ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/post/:pid" }),
			" can now be achieved by creating a file in your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages" }),
			" directory named: ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/post/[pid].js" }),
			"!"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js will automatically match requests like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/post/1" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/post/hello-nextjs" }),
			", etc and render the page defined in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/post/[pid].js" }),
			". The matching URL segment will be passed as a query parameter to your page with the name specified between the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "[square-brackets]" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example: given the following page and the request ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/post/hello-nextjs" }),
			", the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "query" }),
			" object will be ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "{ pid: 'hello-nextjs' }" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "static async getInitialProps({ query }) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  // pid = 'hello-nextjs'" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const { pid } = query" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  const postContent = await fetch(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    `https://api.example.com/post/${encodeURIComponent(pid)}`" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  ).then(r => r.text())" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: " " })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  return { postContent }" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Multiple dynamic URL segments are also supported!" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "[param]" }),
			" syntax is supported for directory names and file names, meaning the following examples work:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "./pages/blog/[blogId]/comments/[commentId].js" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "./pages/posts/[pid]/index.js" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js#dynamic-routing",
				children: "read more about this feature in the Next.js Documentation"
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/learn/basics/dynamic-routes",
				children: "Next.js Learn section"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "automatic-static-optimization",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#automatic-static-optimization",
				children: "Automatic Static Optimization"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js added support for static website generation in v3, released approximately two years ago. At the time, this was the most requested feature to be added to Next.js." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"And for good reason: there's no denying that static websites are ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "fast!" }),
			" They require no server-side computation and can be instantly streamed to the end-user from CDN locations."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "However, the choice between a server-side rendered or statically generated application was binary, you either choose for server-side rendering or for static generation. There was no middle ground." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In reality applications can have different requirements. These requirements require different rendering strategies and trade-offs." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For example, a homepage and marketing pages typically contain static content and are great candidates for static optimization." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "On the other hand, a product dashboard may benefit from being server-side rendering where the data frequently updates." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We started exploring how we could give users the best of both worlds and be ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "fast by default" }),
			". How could we give users static marketing pages and dynamic server-rendered pages?"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Beginning with Next.js 9, users no longer have to make the choice between fully server-rendering or statically exporting their application. Giving you the best of both worlds on a per-page basis." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "automatic-partial-static-export",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#automatic-partial-static-export",
				children: "Automatic Partial Static Export"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "A heuristic was introduced to automatically determine if a page can be prerendered to static HTML." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This determination is made by whether or not the page has blocking data requirements through using ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js#fetching-data-and-component-lifecycle",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "getInitialProps" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This heuristic allows Next.js to emit hybrid applications that contain ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "both server-rendered and statically generated pages" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The built-in Next.js server (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
			") and programmatic API (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app.getRequestHandler()" }),
			") both support this build output ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "transparently" }),
			". There is no configuration or special handling required."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Statically generated pages are still reactive: Next.js will hydrate your application client-side to give it full interactivity." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Furthermore, Next.js will update your application after hydration if the page relies on query parameters in the URL." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js will visually inform you if a page will be statically generated during development. This visual artifact can be hidden by clicking it." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-9/prerender-indicator.png",
			alt: "Next.js Static Optimization Indicator"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js Static Optimization Indicator" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Statically generated pages will also be displayed in Next.js' build output:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-9/build-types.png",
			alt: "Next.js Build Output Type Indicator"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js Build Output Type Indicator" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "api-routes",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#api-routes",
				children: "API Routes"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In many cases when building React applications you end up needing some kind of backend. Either to retrieve data from a database or to process data provided by your users (e.g. a contact form)." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We found that many users who needed a backend built their API using a custom server. In doing so, they ran into quite a few issues. For example, Next.js does not compile custom server code, meaning that you couldn't use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "import" }),
			" / ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "export" }),
			" or TypeScript."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For this reason, many users ended up implementing their own custom compilation pipeline on top of the custom server. While this solved their goal, it is prone to many pitfalls: for example, when configured incorrectly tree shaking would be disabled for their entire application." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This raised the question: what if we bring the developer experience Next.js provides to building API backends?" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Today we’re excited to introduce API routes, the best-in-class developer experience from Next.js for building your backend." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To start using API routes you create a directory called ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "api/" }),
			" inside the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/" }),
			" directory."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Any file in this directory will be automatically mapped to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/api/<your route>" }),
			", in the same way that other page files are mapped to routes."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/api/contact.js" }),
			" will be mapped to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/api/contact" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note" }),
				": API Routes also support ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#dynamic-route-segments",
					children: "Dynamic Routes"
				}),
				"!"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"All the files inside the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/api/" }),
			" directory export a request handler function instead of a React Component:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function handle(req, res) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  res.end('Hello World');" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "req" }),
				" refers to ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/blob/v9.0.0/packages/next-server/lib/utils.ts#L143-L158",
					children: "NextApiRequest"
				}),
				" which extends ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nodejs.org/api/http.html#http_class_http_incomingmessage",
					children: "http.IncomingMessage"
				})
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "res" }),
				" refers to ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/vercel/next.js/blob/v9.0.0/packages/next-server/lib/utils.ts#L168-L178",
					children: "NextApiResponse"
				}),
				" which extends ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://nodejs.org/api/http.html#http_class_http_serverresponse",
					children: "http.ServerResponse"
				})
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Generally API endpoints take in some incoming data, for example the querystring, request body, or cookies and respond with other data." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When investigating adding API routes support to Next.js we noticed that in many cases users didn’t use the Node.js request and response objects directly. Instead, they used an abstraction provided by server libraries like ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://expressjs.com",
				children: "Express"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The reason for doing this is that in many cases the incoming data is some form of text that has to be parsed first to be useful. So these specific server libraries help remove the burden of manually parsing the data, most commonly through middlewares. The most commonly used ones provide querystring, body, and cookies parsing, however they still require some setup to get started." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "API routes in Next.js will provide these middlewares by default so that you can be productive creating API endpoints immediately:" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function handle(req, res) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  console.log(req.body); // The request body" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  console.log(req.query); // The url querystring" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  console.log(req.cookies); // The passed cookies" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  res.end('Hello World');" })
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
			"Besides using incoming data your API endpoint generally also returns data. Commonly this response will be JSON. Next.js provides ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "res.json()" }),
			" by default to make sending data easier:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "export default function handle(req, res) {" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  res.json({ title: 'Hello World' });" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When making changes to API endpoints in development the code is automatically reloaded, so there is no need to restart the server." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "production-optimizations",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#production-optimizations",
				children: "Production Optimizations"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "prefetching-in-viewport-links",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#prefetching-in-viewport-links",
				children: [
					"Prefetching in-Viewport ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "<Link>" }),
					"s"
				]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js 9 will automatically prefetch ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<Link>" }),
			" components as they appear in-viewport."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This feature improves the responsiveness of your application by making navigations to new pages quicker." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js uses an ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/Intersection_Observer_API",
				children: "Intersection Observer"
			}),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.w3.org/TR/resource-hints/#prefetch",
				children: "prefetch the assets"
			}),
			" necessary in the background."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"These requests have low-priority and yield to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fetch()" }),
			" or XHR requests. Next.js will avoid automatically prefetching if the user has data-saver enabled."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can opt-out of this feature for rarely visited pages by setting the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "prefetch" }),
			" property to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "false" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<Link href=\"/terms\" prefetch={false}>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  <a>Terms of Service</a>" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "</Link>" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "optimized-amp-by-default",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#optimized-amp-by-default",
				children: "Optimized AMP by Default"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js 9 now renders optimized AMP by default for AMP-first and hybrid AMP pages." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"While AMP pages are opt-in, Next.js will automatically optimize their output. These optimizations can result in up to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://blog.amp.dev/2018/10/08/how-to-make-amp-even-faster/",
				children: "50% faster"
			}),
			" rendering speed!"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This change was made possible by ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://twitter.com/sebabenz",
				children: "Sebastian Benz"
			}),
			"'s incredible work on the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/ampproject/amp-toolbox/tree/master/packages/optimizer",
				children: "AMP Optimizer"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "dead-code-elimination-for-typeof-window-branches",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#dead-code-elimination-for-typeof-window-branches",
				children: [
					"Dead Code Elimination for ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "typeof window" }),
					" Branches"
				]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js 9 replaces ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "typeof window" }),
			" with its appropriate value (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "undefined" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "object" }),
			") during server and client builds. This change allows Next.js to remove dead code from your production built application automatically."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Users should see their client-side bundle sizes decrease if they have server-only code in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getInitialProps" }),
			" or other parts of their application."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "developer-experience-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#developer-experience-improvements",
				children: "Developer Experience Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "compiling-indicator",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#compiling-indicator",
				children: "Compiling Indicator"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In versions before 9, the only way to know that hot code replacement was going to happen (and that the Next.js compiler toolchain is doing work) is to look at the developer console." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "However many times one is looking at the resulting rendering instead, making it hard to know if Next.js is still doing compilation work or not. For example you might be making changes to styles on the page that are subtle and you wouldn't immediately know if they were updated." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For this reason we created a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/issues/4626",
				children: "RFC / \"good first issue\""
			}),
			" to discuss potential solutions for the problem of indicating that work is being done."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We received feedback from many designers and engineers on the RFC, for example what they prefer and potential directions for the design of the indicator." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://github.com/rafaelalmeidatk",
			children: "Rafael Almeida"
		}), " took this opportunity to collaborate with our team and implement a brand new indicator that is now available by default in Next.js 9."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Whenever Next.js is doing compilation work you will see a small triangle show up in the bottom right corner of the page!" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js Compilation Indicator" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "console-output",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#console-output",
				children: "Console Output"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Traditionally when making changes in development Next.js would show a compiling indicator state with loading state bars filling up and would continuously clear the screen as you made changes." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This behavior causes some issues. Most notably it would clear console output from both your application code, for example when you add ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "console.log" }),
			" to your components. But also when using external tools that stitch log output together like the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://vercel.com/cli",
				children: "Vercel CLI"
			}),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "docker-compose" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Starting from Next.js 9 the log output jumps less and no longer clears the screen. The allows for a better overall experience as your terminal window will have more relevant information and flicker less while Next.js will integrate better with tools that you might already be using." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js Development Console Output" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Special thanks to ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/justinmchase",
				children: "Justin Chase"
			}),
			" for collaborating on output clearing."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "build-output-statistics",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#build-output-statistics",
				children: "Build Output Statistics"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Building your application for production using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			" it will now give you a detailed view of all pages that were built."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Every page receives a few statistics automatically." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The most prominent one is bundle size. As your application grows your JavaScript bundles will also grow, this build-time indication will help you indicate growth of your production bundles. In the future you will also be able to set ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://addyosmani.com/blog/performance-budgets/",
				children: "performance budgets"
			}),
			" for pages that will fail the production build."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-9/build-size.png",
			alt: "Next.js Built Page Size"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js Built Page Size" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Besides bundle sizes we also show how many project components and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "node_modules" }),
			" components are being used in every page. This gives an indication of the page complexity."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-9/build-packages.png",
			alt: "Next.js Page Package Count"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js Page Package Count" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Every page also has an indication of if it's statically optimized or server-side rendered, as every page can behave differently." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-9/build-page-type.png",
			alt: "Next.js Built Page Type"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js Built Page Type" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "per-page-configuration-object",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#per-page-configuration-object",
				children: "Per-Page Configuration Object"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Every page can now export a configuration object. Initially this configuration allows you to opt-into ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nextjs.org/blog/next-8-1",
				children: "AMP"
			}),
			", but in the future you will be able to configure more page specific options."
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
			title: "pages/about.js",
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
							children: " const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " config"
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
							children: " { amp: "
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
							children: " };"
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
							children: " AboutPage"
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
							children: "props"
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
							children: "h3"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">My AMP About Page!</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "h3"
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To opt into hybrid AMP rendering you can use the value ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "'hybrid'" }),
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
			title: "pages/about.js",
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
							children: " { useAmp } "
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
							children: " 'next/amp'"
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
							children: " const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " config"
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
							children: " { amp: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'hybrid'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " };"
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
							children: " AboutPage"
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
							children: "props"
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
							children: " isAmp"
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
							children: " useAmp"
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
							children: " <"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "h3"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">My About Page!{isAmp "
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
							children: " <> Powered by AMP!</> "
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
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " ''"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "}</"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#22863A",
								"--shiki-dark": "#85E89D"
							},
							children: "h3"
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "withAmp" }),
			" higher order component was removed in favor of this new configuration."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We've provided a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next-codemod#withamp-to-config",
				children: "codemod"
			}),
			" that automatically converts usage of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "withAmp" }),
			" to the new configuration object. You can read more about this in the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/blob/canary/UPGRADING.md",
				children: "upgrade guide"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "codebase-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#codebase-improvements",
				children: "Codebase Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We've recently made some changes to our tooling to provide a better experience while contributing to the codebase and ensure stability as the codebase grows." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "As you've read under the TypeScript section the Next.js core is now written in TypeScript and types are automatically generated for Next.js applications to use. Besides this being useful for applications built using Next.js, it's also useful when working on the core codebase. As you get type errors and autocompletion automatically." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js already had quite a large integration test suite that consists of 50+ Next.js applications with tests that run against them. These tests ensure that when a new version is released upgrading is smooth as the features that were available before were tested against the same test suite." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Most of our tests are integration tests because in many cases they replicate \"real\" developers using Next.js in development. For example we have tests that replicate making changes to a Next.js application to see if hot module replacement works." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Our integration tests are mostly based on Selenium webdriver, which we combined with chromedriver to test in headless Chrome. However as time passed certain issues would arise in other browsers, especially older browsers like Internet Explorer 11." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Because we used Selenium we were able to run our tests automatically on multiple browsers." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "As of right now we are running our test suite on Chrome, Firefox, Safari and Internet Explorer 11." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "google-chrome-collaboration",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#google-chrome-collaboration",
				children: "Google Chrome Collaboration"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Google Chrome team has been working on improving Next.js by contributing RFCs and pull-requests." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The goal of this collaboration is large-scale performance improvements, focused on bundle sizes, bootup and hydration time." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example these changes will improve the experience of small websites, but also that of massive applications like ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://hulu.com",
				children: "Hulu"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://m.twitch.tv",
				children: "Twitch"
			}),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://deliveroo.co.uk/",
				children: "Deliveroo"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "module--nomodule",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#module--nomodule",
				children: "Module / Nomodule"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The first area of focus is shipping modern JavaScript to browsers that support modern JavaScript." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example currently Next.js has to provide polyfills for ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function",
				children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "async" }),
					"/",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "await" })
				]
			}),
			" syntax as code might be executed in browsers that do not support ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function",
				children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "async" }),
					"/",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "await" })
				]
			}),
			" which would break."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-9/first-collab-rfc.png",
			alt: "Next.js Module/Nomodule Collaboration RFC"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js Module/Nomodule Collaboration RFC" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To avoid breaking older browsers while still sending modern JavaScript to browsers that support it Next.js will utilize the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://philipwalton.com/articles/deploying-es2015-code-in-production-today/",
				children: "module/nomodule pattern"
			}),
			". The module/nomodule pattern provides a reliable mechanism for serving modern JavaScript to modern browsers while still allowing older browsers to fall back to polyfilled ES5."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The RFC for module/nomodule in Next.js can be ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/issues/7563",
				children: "found here"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "improved-bundle-splitting",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#improved-bundle-splitting",
				children: "Improved Bundle Splitting"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The current bundle splitting strategy in Next.js is based around a ratio-based heuristic for including modules in a single \"commons\" chunk. Because there is very little granularity as there is only one bundle, code is either downloaded unnecessarily (because the commons chunk could include code that's not actually required for a particular route) or the code is duplicated across multiple page bundles." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.img, {
			src: "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-9/chunking-rfc.png",
			alt: "Next.js Chunking Collaboration RFC"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js Chunking Collaboration RFC" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The RFC for improved bundle splitting can be ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/issues/7631",
				children: "found here"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "other-improvements",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#other-improvements",
				children: "Other Improvements"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Chrome team is also working on many other optimizations and changes that will improve Next.js. RFCs for these will be shared soon." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"These RFCs and pull-requests are ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/labels/Type%3A%20Collaboration",
				children: "labeled \"Collaboration\""
			}),
			" so that they can be easily found in the Next.js issue tracker."
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're excited to see the continued growth of the Next.js community." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This release had over 65 pull-request authors contributing core improvements or examples." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Talking about examples, we now provide over 200 examples on how to integrate Next.js with different libraries and technologies! Including most css-in-js and data-fetching libraries." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"We've had over ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "720 contributors" }),
				" landing at least 1 commit."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"On GitHub, the project has been starred over ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "38,600 times" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Over ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "3,400 pull requests" }),
				" were submitted since the first release, that is ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "over 800" }),
				" since the last major release!"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The Next.js community has doubled since the last major release with over ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "8,600 members" }),
			". ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/discussions",
				children: "Join us!"
			})
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We are thankful to our community and all the external feedback and contributions that helped shape this release." })
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
export { toc as a, structuredData as i, frontmatter as n, next_9_exports as r, MDXContent as t };
