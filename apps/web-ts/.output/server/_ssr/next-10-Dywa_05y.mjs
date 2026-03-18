import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-10-Dywa_05y.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_10_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Next.js 10",
	"description": "Next.js 10 introduces Built-in Image Optimization, Internationalized Routing, Next.js Analytics, React 17 Support, and more!",
	"author": [
		{
			"name": "Belén Curcio",
			"image": "/static/team/bel.png"
		},
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
			"name": "Steven",
			"image": "/static/team/styfle.png"
		},
		{
			"name": "Tim Neutkens",
			"image": "/static/team/tim.jpg"
		}
	],
	"date": /* @__PURE__ */ new Date(1603807200507),
	"image": "https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/next-10/twitter-card.png"
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "We are excited to introduce Next.js 10, featuring:"
		},
		{
			"heading": void 0,
			"content": "**Built-in Image Component and Automatic Image Optimization**: Automatically optimize images using the new `next/image` component"
		},
		{
			"heading": void 0,
			"content": "**Internationalized Routing**: Start internationalizing your Next.js applications with built-in primitives"
		},
		{
			"heading": void 0,
			"content": "**Next.js Analytics**: Measure and act on real user performance"
		},
		{
			"heading": void 0,
			"content": "**Next.js Commerce**: An all-in-one starter kit for high-performance e-commerce sites"
		},
		{
			"heading": void 0,
			"content": "**React 17 Support**: The latest React release is fully compatible with Next.js"
		},
		{
			"heading": void 0,
			"content": "**`getStaticProps` / `getServerSideProps` Fast Refresh**: Automatic reloading of properties when editing data fetching methods"
		},
		{
			"heading": void 0,
			"content": "**Fast Refresh for MDX**: When using `@next/mdx`, Fast Refresh is now leveraged to apply changes without full page reloads"
		},
		{
			"heading": void 0,
			"content": "**Importing CSS from Third Party React Components**: Importing CSS needed for components from npm is now supported"
		},
		{
			"heading": void 0,
			"content": "**Automatic Resolving of `href`**: The `as` property is no longer needed on `next/link`"
		},
		{
			"heading": void 0,
			"content": "**`@next/codemod` CLI**: Allows for easier access to all Next.js codemods"
		},
		{
			"heading": void 0,
			"content": "**Blocking Fallback for `getStaticPaths`**: Wait on pre-rendering when generating new static pages instead of serving a static fallback page"
		},
		{
			"heading": "built-in-image-component-and-automatic-image-optimization",
			"content": "Our goal with Next.js is to improve two things: Developer Experience and User Experience."
		},
		{
			"heading": "built-in-image-component-and-automatic-image-optimization",
			"content": "This year we've already invested heavily in both Developer Experience and improving performance for all Next.js applications. We focused on reducing the amount of JavaScript the browser has to load."
		},
		{
			"heading": "built-in-image-component-and-automatic-image-optimization",
			"content": "We introduced over **20 new features** that improve performance and developer experience. At the same time, the JavaScript size of the Next.js core has been &#x2A;*reduced by 16%**."
		},
		{
			"heading": "built-in-image-component-and-automatic-image-optimization",
			"content": "In January, we introduced a new best-in-class JavaScript code-splitting strategy in collaboration with the Google Chrome team."
		},
		{
			"heading": "built-in-image-component-and-automatic-image-optimization",
			"content": "For example, Barnebys saw a **23% decrease in application size**, and Sumup had a **70% decrease in their largest Javascript bundle size**. These improvements were achieved **without changing any code** in their Next.js applications."
		},
		{
			"heading": "built-in-image-component-and-automatic-image-optimization",
			"content": "Companies adopted this new strategy automatically by simply upgrading Next.js to the latest version."
		},
		{
			"heading": "images-on-the-web",
			"content": "While our focus on reducing the amount of JavaScript the browser has to load has paid off, the web is not only Javascript: it's also markup and images."
		},
		{
			"heading": "images-on-the-web",
			"content": "Images take up 50% of the total bytes on web pages."
		},
		{
			"heading": "images-on-the-web",
			"content": "Images have a big impact on Largest Contentful Paint as they're often the largest visible element when a page is loaded. Largest Contentful Paint is a Core Web Vital that Google will be using in their search ranking very soon."
		},
		{
			"heading": "images-on-the-web",
			"content": "Half of all images are over one megabyte in size, which means they aren't optimized to be displayed on the web."
		},
		{
			"heading": "images-on-the-web",
			"content": "Nowadays users browse the web using their phones, tablets, and laptops, yet images are still as a one size fits all. For example: sites load a 2000 by 2000 pixel image, but phones are only displaying it as 100 by 100 pixels."
		},
		{
			"heading": "images-on-the-web",
			"content": "Furthermore, 30% of images on web pages are outside of the initial viewport, meaning the browser loads images that a user does not see until they scroll further down the page."
		},
		{
			"heading": "images-on-the-web",
			"content": "Images often don't have a `width` and `height` property, causing them to jump around when the page is loaded. This hurts the Cumulative Layout Shift Core Web Vital."
		},
		{
			"heading": "images-on-the-web",
			"content": "99.7% of images on websites don't use modern image formats like WebP."
		},
		{
			"heading": "images-on-the-web",
			"content": "In order to use images on web pages in a performant way a lot of aspects have to be considered: size, weight, lazy loading, and modern image formats."
		},
		{
			"heading": "images-on-the-web",
			"content": "Developers have to set up complicated build tooling to optimize images, however those tools usually don't cover user-submitted images coming from an external data source, making it impossible to optimize all images."
		},
		{
			"heading": "images-on-the-web",
			"content": "This impossible development task inevitably leads to a frustrating end-user experience."
		},
		{
			"heading": "nextjs-image-component",
			"content": "We're excited to announce our solution to performant images on the web: the Next.js Image Component and Automatic Image Optimization."
		},
		{
			"heading": "nextjs-image-component",
			"content": "At it's most basic the Next.js Image Component is just a drop-in replacement for the HTML `<img>` element, evolved for the modern web."
		},
		{
			"heading": "nextjs-image-component",
			"content": "The Google Chrome team helped create this React Component to improve page performance by making best practices the default."
		},
		{
			"heading": "nextjs-image-component",
			"content": "When using the `next/image` component, images are automatically lazy-loaded, meaning they're only rendered when the user is close to seeing the image. This prevents loading that 30% of images outside of the initial viewport."
		},
		{
			"heading": "nextjs-image-component",
			"content": "Image dimensions are enforced, allowing browsers to immediately render the space needed for the image instead of having it jump in when loaded, preventing layout shift."
		},
		{
			"heading": "nextjs-image-component",
			"content": "While `width` and `height` on the HTML `<img>` element can cause issues with responsive layouts, &#x2A;*this is not the case when using `next/image`**. When using `next/image` the image is automatically made responsive based on the aspect ratio from the provided `width` and `height`."
		},
		{
			"heading": "nextjs-image-component",
			"content": "Developers can mark images that are in the initial viewport, allowing Next.js to automatically preload these images. Preloading images in the initial viewport has shown improvements to the Largest Contentful Paint by up to 50%."
		},
		{
			"heading": "automatic-image-optimization",
			"content": "Even with these improvements compared to the HTML `<img>` element, there's still a major problem. The 2000 by 2000 pixel image is sent to phones that render a smaller image."
		},
		{
			"heading": "automatic-image-optimization",
			"content": "With Next.js 10 we're also solving that problem. The `next/image` component will automatically generate smaller sizes through built-in Image Optimization."
		},
		{
			"heading": "automatic-image-optimization",
			"content": "Built-in Image Optimization automatically serves the images in modern image formats like WebP, which is about 30% smaller than JPEG, if the browser supports it. It also allows Next.js to automatically adopt **future** image formats and serve them to browsers that support those formats."
		},
		{
			"heading": "automatic-image-optimization",
			"content": "Image Optimization works with any image source. Even if images come from an external data source, like a CMS, they are optimized."
		},
		{
			"heading": "automatic-image-optimization",
			"content": "Instead of optimizing images at build time, Next.js 10 optimizes images on-demand, as users request them. Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images."
		},
		{
			"heading": "conclusion",
			"content": "The new `next/image` component and Automatic Image Optimization are powerful new primitives that will massively improve user experience."
		},
		{
			"heading": "conclusion",
			"content": "The `next/image` component handles automatic lazy-loading, preloading of critical images, correct sizing across devices, and automatically supports modern formats. These features work with images from any source."
		},
		{
			"heading": "conclusion",
			"content": "We are looking forward to seeing how much faster your user experience becomes with these new primites."
		},
		{
			"heading": "conclusion",
			"content": "For more details check out the Next.js Image Component and Automatic Image Optimization documentation."
		},
		{
			"heading": "internationalized-routing",
			"content": "This year, several businesses and community members helped our team understand how important internationalization is."
		},
		{
			"heading": "internationalized-routing",
			"content": "For example, we learned that 72% of consumers are more likely to stay on your site if it's been translated and 55% of consumers said they only buy from e-commerce sites in their native language."
		},
		{
			"heading": "internationalized-routing",
			"content": "If you plan to go to market in a different country, internationalizing your project is critical for success."
		},
		{
			"heading": "internationalized-routing",
			"content": "Internationalizing a project has two main pillars: Translations and Routing."
		},
		{
			"heading": "internationalized-routing",
			"content": "Many React libraries prepare applications to be translated, but most of them expect you to handle routing manually, and generally only work with one rendering strategy."
		},
		{
			"heading": "internationalized-routing",
			"content": "That's why, as part of Next.js 10, we're releasing built-in support for internationalized routing and language detection."
		},
		{
			"heading": "internationalized-routing",
			"content": "This built-in support for internationalized routing supports Next.js' hybrid strategy, so you can choose between Static Generation or Server-Rendering on a per-page basis."
		},
		{
			"heading": "internationalized-routing",
			"content": "Next.js 10 supports the two most common routing strategies: subpath routing and domain routing."
		},
		{
			"heading": "internationalized-routing",
			"content": "For both strategies, you start by configuring the locales in the Next.js configuration."
		},
		{
			"heading": "internationalized-routing",
			"content": "Locales are UTS Locale Identifiers, a standardized format for defining locales."
		},
		{
			"heading": "internationalized-routing",
			"content": "Generally a Locale Identifier is made up of a language, region, and script separated by a dash: `language-region-script`. The region and script are optional. An example:"
		},
		{
			"heading": "internationalized-routing",
			"content": "`en-US` - English as spoken in the United States"
		},
		{
			"heading": "internationalized-routing",
			"content": "`nl-NL` - Dutch as spoken in the Netherlands"
		},
		{
			"heading": "internationalized-routing",
			"content": "`nl` - Dutch, no specific region"
		},
		{
			"heading": "internationalized-routing",
			"content": "Once your locales are configured you can choose subpath or domain routing."
		},
		{
			"heading": "subpath-routing",
			"content": "Subpath routing puts the locale in the url. This allows all languages to live on a single domain."
		},
		{
			"heading": "subpath-routing",
			"content": "For example, you can insert the locale in the url like `/nl-nl/blog` and `/en/blog`."
		},
		{
			"heading": "domain-routing",
			"content": "Domain routing enables you to map a locale to a top level domain. For example `example.nl` can be mapped to the `nl` locale and `example.com` can be mapped to the `en` locale."
		},
		{
			"heading": "domain-routing",
			"content": "Domain routing requires some extra configuration to know how to route domains:"
		},
		{
			"heading": "language-detection",
			"content": "Next.js 10 has built-in language detection on the `/` route based on the `Accept-Language` header, which all modern browsers support. The configured locales will be matches against the `Accept-Language` header and then redirect according to the configured strategy."
		},
		{
			"heading": "search-engine-optimization",
			"content": "Since Next.js knows the language of the page visited by the user, it will automatically add the lang attribute to the `<html>` tag."
		},
		{
			"heading": "search-engine-optimization",
			"content": "Next.js doesn't know about variants of a page so it's up to you to add the `hreflang` meta tags using `next/head`. You can learn more about `hreflang` in the Google Webmasters documentation."
		},
		{
			"heading": "the-future-of-internationalization-in-nextjs",
			"content": "Internationalized Routing is the first in a series of features that will make internationalizing and localizing your project easier. Internationalized Routing allows for integrating with the majority of React internationalization libraries."
		},
		{
			"heading": "the-future-of-internationalization-in-nextjs",
			"content": "To learn more about Internationalized Routing check out the Internationalized Routing documentation."
		},
		{
			"heading": "nextjs-speed-insights",
			"content": "At Vercel, we know that you can't fix what you can't measure."
		},
		{
			"heading": "nextjs-speed-insights",
			"content": "Your visitors have grown increasingly sensitive to site performance. More than 50% of them will abandon your website if it takes more than 3 seconds to load. If you're in e-commerce, many have found that improving your load time by 1/10th of a second resulted in a 1% increase in conversion."
		},
		{
			"heading": "nextjs-speed-insights",
			"content": "Because of how critical performance is to your success, we're proud to release Next.js Speed Insights. The solution for tracking real-world performance metrics and feeding those insights back into your development workflow."
		},
		{
			"heading": "nextjs-speed-insights",
			"content": "With Next.js Speed Insights:"
		},
		{
			"heading": "nextjs-speed-insights",
			"content": "Instead of measuring once, &#x2A;*you will now measure continuously.**"
		},
		{
			"heading": "nextjs-speed-insights",
			"content": "Instead of measuring on your development device, &#x2A;*measurements will come from the actual devices that your visitors are using.**"
		},
		{
			"heading": "nextjs-speed-insights",
			"content": "**Next.js Speed Insights is about focusing on the entire picture, deeply understanding your audience, and how your application performs for your users.**"
		},
		{
			"heading": "nextjs-speed-insights",
			"content": "We're so adamant about collecting real data because the causes of poor performance aren't always the most obvious. Performance regressions can result from a variety of places— third-party scripts and stylesheets, or first-party fonts, images, and videos that are oversized or slow."
		},
		{
			"heading": "core-web-vitals",
			"content": "Google, in conjunction with the Web Performance Working Group, have established the set of metrics to accurately measure how users experience the performance of your website: aptly named, Web Vitals. Web Vitals are metrics that track the perceived loading speed, responsiveness, and visual stability of your website—all three essential for website's overall health!"
		},
		{
			"heading": "core-web-vitals",
			"content": "Perceived loading speed can be measured by Largest Contentful Paint, or when all the page's content has been displayed. For example, when I open a link to buy a pair sneakers—the amount of time that passes before I see my sneakers, their price, and the add to cart button is LCP."
		},
		{
			"heading": "core-web-vitals",
			"content": "Page responsiveness can be measured by First Input Delay, which measures how long your users must wait to see the reaction of their first interaction with the page. For example, the amount of time between me clicking Add to Cart and the number of items in my cart incrementing is FID."
		},
		{
			"heading": "core-web-vitals",
			"content": "Finally, visual stability can be measured by Cumulative Layout Shift, or how much elements move after being displayed to the user. For example, we've all experienced the frustration of trying to tap a button that moved because an image loaded late—that's layout shift."
		},
		{
			"heading": "core-web-vitals",
			"content": "The continuous measurement and conformance around these Web Vitals for your real users is crucial. It's the only way to truly know how your site performs for your users. The performance of your site can vary dramatically based on a user's device and their network conditions, or how they're interacting with the page. Sites that load personalized content or ads may also experience wildly different performance from user to user."
		},
		{
			"heading": "core-web-vitals",
			"content": "**An emulated test cannot capture these important signals.**"
		},
		{
			"heading": "core-web-vitals",
			"content": "Next.js Speed Insights allows you to capture real-world insights, instead of synthetic benchmarks. It enables a continuous stream of measurement instead of relying on occasional testing, ensuring it's part of your developer workflow."
		},
		{
			"heading": "core-web-vitals",
			"content": "Next.js Speed Insights allows you to capture **real-world insights**, instead of synthetic benchmarks. It enables a **continuous stream** of measurement instead of relying on occasional testing, **ensuring it's part of your developer workflow**."
		},
		{
			"heading": "core-web-vitals",
			"content": "Visit nextjs.org/analytics to learn how enable it in your application right now."
		},
		{
			"heading": "nextjs-commerce",
			"content": "Ecommerce is one of the most important uses of the web. The new Next.js 10 features are powerful new tools for ecommerce."
		},
		{
			"heading": "nextjs-commerce",
			"content": "That's why today, in collaboration with BigCommerce, we released Next.js Commerce, the all-in-one React starter kit for ecommerce sites. With a few clicks, Next.js developers can clone, deploy, and fully customize it. Start right now at nextjs.org/commerce."
		},
		{
			"heading": "react-17-support",
			"content": "React 17 had no breaking changes for Next.js, however there were some maintenance changes required, for example updating the peer dependencies. The new JSX transform is automatically enabled when React 17 is used, no configuration changes are needed."
		},
		{
			"heading": "react-17-support",
			"content": "All you have to do to start using React 17 is upgrade Next.js and React:"
		},
		{
			"heading": "getstaticprops--getserversideprops-fast-refresh",
			"content": "When making edits to your `getStaticProps` and `getServerSideProps` functions Next.js will now automatically re-run the function and apply the new data. This allows you to iterate quicker without having to refresh the page."
		},
		{
			"heading": "getstaticprops--getserversideprops-fast-refresh",
			"content": "To learn more about `getStaticProps` and `getServerSideProps` you can read the Data Fetching documentation."
		},
		{
			"heading": "fast-refresh-for-mdx",
			"content": "When using Next.js with MDX through `@next/mdx` changing the MDX contents will now leverage Fast Refresh, making sure the browser does not have to reload the page on edits."
		},
		{
			"heading": "fast-refresh-for-mdx",
			"content": "The `@next/mdx` documentation guides you through how to set up MDX with Next.js."
		},
		{
			"heading": "importing-css-from-third-party-react-components",
			"content": "You can now import third party css inside of React components. This allows for code-splitting CSS only meant for a single component. For example you can now use the `react-datepicker` library without needing to import the CSS in `_app.js`:"
		},
		{
			"heading": "importing-css-from-third-party-react-components",
			"content": "You can refer to the built-in CSS support documentation to learn more about how Next.js handles CSS imports."
		},
		{
			"heading": "automatic-resolving-of-href",
			"content": "If you've used dynamic routes before, you've probably ran into a case before where you had to provide both a `href` and `as` property to `next/link`. It would look something like this:"
		},
		{
			"heading": "automatic-resolving-of-href",
			"content": "This allowed Next.js to interpolate the href for the dynamic parameters, however, it caused friction when developers forgot to add the `as` or added the `as` in `href` causing the page transitions to not use client-side routing."
		},
		{
			"heading": "automatic-resolving-of-href",
			"content": "We set out to solve this friction for developers a few months ago, with the main goal to improve developer experience and end user experience. We incrementally worked towards a solution that allows for `href` to be automatically resolved."
		},
		{
			"heading": "automatic-resolving-of-href",
			"content": "We're excited to announce that as part of Next.js 10 you no longer have to use the `as` property for the majority of use-cases. Removing friction from developers and improving the end user experience."
		},
		{
			"heading": "automatic-resolving-of-href",
			"content": "This change is fully backwards compatible, if you currently use both `href` and `as` the existing behavior is preserved."
		},
		{
			"heading": "automatic-resolving-of-href",
			"content": "In order to adopt the automatic `href` resolving all you have to do is change your usage of `next/link` to only use `href` holding the value that you previously had in `as` property."
		},
		{
			"heading": "automatic-resolving-of-href",
			"content": "To learn more about `next/link` and client-side routing you can refer to the `next/link` documentation."
		},
		{
			"heading": "nextcodemod-cli",
			"content": "We're committed to making sure Next.js upgrades are as smooth as possible through extensive backwards compatibility. This commitment starts with very sparingly deprecating features while introducing new and better solutions in their place. On top of this commitment we have extensive integration tests for all Next.js features, including tests that replicate local development."
		},
		{
			"heading": "nextcodemod-cli",
			"content": "When a feature in Next.js is deprecate and requires large codebase changes our team creates a codemod for it. A codemod is an automated code transformation that you can run over your project to update source code."
		},
		{
			"heading": "nextcodemod-cli",
			"content": "For example: We released a codemod for updating arrow functions and anonymous functions to named functions. This transformation is needed because otherwise React Fast Refresh does not detect the function as being a valid React Component. Similarly the React hooks eslint rules would not pick up the function as a React component."
		},
		{
			"heading": "nextcodemod-cli",
			"content": "With Next.js 10 we're releasing a new Next.js codemods CLI tool that allows you run a single command to update your application: `npx @next/codemod <transform> <path>`."
		},
		{
			"heading": "nextcodemod-cli",
			"content": "To learn more about the codemods you can check the Next.js Codemods documentation."
		},
		{
			"heading": "blocking-fallback-for-getstaticpaths",
			"content": "In Next.js 9.3 we introduced `getStaticProps` and `getStaticPaths` along with the ability to return a `fallback` property in `getStaticPaths`. The `fallback` property allows for generating additional static pages without needing a full rebuild, serving a static HTML file initially that is then replaced by the fully rendered content on subsequent requests. The past few months we've received a lot of feedback from companies that wanted a similar but slightly different behavior: a blocking pre-render when a user requests the page for the first time. After that initial render the page would be re-used for subsequent requests."
		},
		{
			"heading": "blocking-fallback-for-getstaticpaths",
			"content": "With Next.js 10 we're solving this case."
		},
		{
			"heading": "blocking-fallback-for-getstaticpaths",
			"content": "We're excited to announce the new `fallback: 'blocking'` mode for `getStaticPaths` that enables the blocking behavior where no static fallback is sent to the browser. Instead the initial request is waited on for pre-rendering."
		},
		{
			"heading": "blocking-fallback-for-getstaticpaths",
			"content": "To learn more about `fallback` behavior for incrementally generating additional static pages you can refer to the `fallback` documentation."
		},
		{
			"heading": "redirect-and-notfound-support-for-getstaticprops--getserversideprops",
			"content": "Since the introduction of `getStaticProps` and `getServerSideProps` we have noticed cases where users are needing to return redirects and 404 responses. To help streamline these cases we now allow returning two new fields from `getStaticProps` and `getServerSideProps`: `notFound` and `redirect`."
		},
		{
			"heading": "notfound-support",
			"content": "When returning the `notFound` field with `true` the default 404 page will be returned with a status code of `404`. This allows you to avoid generating additional pages with SSG and having to handle rendering the 404 page manually."
		},
		{
			"heading": "redirect-support",
			"content": "Redirects can now be returned which contains the `destination` and whether the redirect should be permanent or not e.g. `permanent: true`. An optional `statusCode` can also be returned in place of the `permanent` field for cases where you need to use a specific status over the defaults."
		},
		{
			"heading": "conclusion-1",
			"content": "We're excited to see the continued growth in Next.js adoption:"
		},
		{
			"heading": "conclusion-1",
			"content": "We have had over **1,300** independent contributors, with over **120** new contributors since the 9.5 release"
		},
		{
			"heading": "conclusion-1",
			"content": "On GitHub, the project has been starred over **54,800** times."
		},
		{
			"heading": "conclusion-1",
			"content": "Join the Next.js community on GitHub Discussions. Discussions is a community space that allows you to connect with other Next.js users and freely ask questions or share your work."
		},
		{
			"heading": "credits",
			"content": "We are thankful to our community, including all the external feedback and contributions that helped shape this release."
		},
		{
			"heading": "credits",
			"content": "This release was brought to you by the contributions of: @ijjk, @adebiyial, @elliottsj, @saintmalik, @HaNdTriX, @prateekbh, @amirsaeed671, @paambaati, @imagentleman, @gregrickaby, @Janpot, @atcastle, @Kirkhammetz, @remorses, @davidsonsns, @kmkzt, @slawekkolodziej, @Timer, @styfle, @timneutkens, @ykzts, @ashconnell, @orYoffe, @lfades, @justinwhall, @fbaiodias, @ludofischer, @felipeguilhermefs, @gr-qft, @TasukuUno, @YichiZ, @weichienhung, @seosmmbusiness, @HsuTing, @gsimone, @peduarte, @ztanner, @neighborhood999, @chibicode, @merceyz, @opudalo, @lunchboxav, @mohsen1, @akd-io, @justman00, @helloworld, @devknoll, @borekb, @ArthurMaverick, @sakito21, @TrySound, @omBratteng, @svenheden, @hallaji, @kettanaito, @vvo, @m-lautenbach, @jensmeindertsma, @Zeko369, @longlho, @stefanprobst, @laugharn, @sdornan, @daneroo, @mohd-akram, @austingmhuang, @sphilee, @devinekadeni, @Bacher, @nghiepit, @tomasdisk, @leader22, @paulogdm, @284km, @belgattitude, @geritol, @stigkj, @sampoder, @samrobbins85, @Pitasi, @digitalPlayer1125, @timfee, @plug-n-play, @philihp, @leerob, @dylanjha, @Kerumen, @rdimaio, @jorisw, @zerbinidamata, @jamesgeorge007, @Jashnm, and @futantan!"
		}
	],
	"headings": [
		{
			"id": "built-in-image-component-and-automatic-image-optimization",
			"content": "Built-in Image Component and Automatic Image Optimization"
		},
		{
			"id": "images-on-the-web",
			"content": "Images on the Web"
		},
		{
			"id": "nextjs-image-component",
			"content": "Next.js Image Component"
		},
		{
			"id": "automatic-image-optimization",
			"content": "Automatic Image Optimization"
		},
		{
			"id": "conclusion",
			"content": "Conclusion"
		},
		{
			"id": "internationalized-routing",
			"content": "Internationalized Routing"
		},
		{
			"id": "subpath-routing",
			"content": "Subpath routing"
		},
		{
			"id": "domain-routing",
			"content": "Domain routing"
		},
		{
			"id": "language-detection",
			"content": "Language Detection"
		},
		{
			"id": "search-engine-optimization",
			"content": "Search Engine Optimization"
		},
		{
			"id": "the-future-of-internationalization-in-nextjs",
			"content": "The future of internationalization in Next.js"
		},
		{
			"id": "nextjs-speed-insights",
			"content": "Next.js Speed Insights"
		},
		{
			"id": "core-web-vitals",
			"content": "Core Web Vitals"
		},
		{
			"id": "nextjs-commerce",
			"content": "Next.js Commerce"
		},
		{
			"id": "react-17-support",
			"content": "React 17 Support"
		},
		{
			"id": "getstaticprops--getserversideprops-fast-refresh",
			"content": "`getStaticProps` / `getServerSideProps` Fast Refresh"
		},
		{
			"id": "fast-refresh-for-mdx",
			"content": "Fast Refresh for MDX"
		},
		{
			"id": "importing-css-from-third-party-react-components",
			"content": "Importing CSS from Third Party React Components"
		},
		{
			"id": "automatic-resolving-of-href",
			"content": "Automatic Resolving of `href`"
		},
		{
			"id": "nextcodemod-cli",
			"content": "`@next/codemod` CLI"
		},
		{
			"id": "blocking-fallback-for-getstaticpaths",
			"content": "Blocking Fallback for `getStaticPaths`"
		},
		{
			"id": "redirect-and-notfound-support-for-getstaticprops--getserversideprops",
			"content": "Redirect and notFound Support for `getStaticProps` / `getServerSideProps`"
		},
		{
			"id": "notfound-support",
			"content": "`notFound` Support"
		},
		{
			"id": "redirect-support",
			"content": "`redirect` Support"
		},
		{
			"id": "conclusion-1",
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
		url: "#built-in-image-component-and-automatic-image-optimization",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#built-in-image-component-and-automatic-image-optimization",
			children: "Built-in Image Component and Automatic Image Optimization"
		}) })
	},
	{
		depth: 3,
		url: "#images-on-the-web",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#images-on-the-web",
			children: "Images on the Web"
		}) })
	},
	{
		depth: 3,
		url: "#nextjs-image-component",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#nextjs-image-component",
			children: "Next.js Image Component"
		}) })
	},
	{
		depth: 3,
		url: "#automatic-image-optimization",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#automatic-image-optimization",
			children: "Automatic Image Optimization"
		}) })
	},
	{
		depth: 3,
		url: "#conclusion",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#conclusion",
			children: "Conclusion"
		}) })
	},
	{
		depth: 2,
		url: "#internationalized-routing",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#internationalized-routing",
			children: "Internationalized Routing"
		}) })
	},
	{
		depth: 3,
		url: "#subpath-routing",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#subpath-routing",
			children: "Subpath routing"
		}) })
	},
	{
		depth: 3,
		url: "#domain-routing",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#domain-routing",
			children: "Domain routing"
		}) })
	},
	{
		depth: 3,
		url: "#language-detection",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#language-detection",
			children: "Language Detection"
		}) })
	},
	{
		depth: 3,
		url: "#search-engine-optimization",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#search-engine-optimization",
			children: "Search Engine Optimization"
		}) })
	},
	{
		depth: 3,
		url: "#the-future-of-internationalization-in-nextjs",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#the-future-of-internationalization-in-nextjs",
			children: "The future of internationalization in Next.js"
		}) })
	},
	{
		depth: 2,
		url: "#nextjs-speed-insights",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#nextjs-speed-insights",
			children: "Next.js Speed Insights"
		}) })
	},
	{
		depth: 3,
		url: "#core-web-vitals",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#core-web-vitals",
			children: "Core Web Vitals"
		}) })
	},
	{
		depth: 2,
		url: "#nextjs-commerce",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#nextjs-commerce",
			children: "Next.js Commerce"
		}) })
	},
	{
		depth: 2,
		url: "#react-17-support",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#react-17-support",
			children: "React 17 Support"
		}) })
	},
	{
		depth: 2,
		url: "#getstaticprops--getserversideprops-fast-refresh",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#getstaticprops--getserversideprops-fast-refresh",
			children: [
				(0, import_jsx_runtime.jsx)("code", { children: "getStaticProps" }),
				" / ",
				(0, import_jsx_runtime.jsx)("code", { children: "getServerSideProps" }),
				" Fast Refresh"
			]
		}) })
	},
	{
		depth: 2,
		url: "#fast-refresh-for-mdx",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#fast-refresh-for-mdx",
			children: "Fast Refresh for MDX"
		}) })
	},
	{
		depth: 2,
		url: "#importing-css-from-third-party-react-components",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#importing-css-from-third-party-react-components",
			children: "Importing CSS from Third Party React Components"
		}) })
	},
	{
		depth: 2,
		url: "#automatic-resolving-of-href",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#automatic-resolving-of-href",
			children: ["Automatic Resolving of ", (0, import_jsx_runtime.jsx)("code", { children: "href" })]
		}) })
	},
	{
		depth: 2,
		url: "#nextcodemod-cli",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#nextcodemod-cli",
			children: [(0, import_jsx_runtime.jsx)("code", { children: "@next/codemod" }), " CLI"]
		}) })
	},
	{
		depth: 2,
		url: "#blocking-fallback-for-getstaticpaths",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#blocking-fallback-for-getstaticpaths",
			children: ["Blocking Fallback for ", (0, import_jsx_runtime.jsx)("code", { children: "getStaticPaths" })]
		}) })
	},
	{
		depth: 2,
		url: "#redirect-and-notfound-support-for-getstaticprops--getserversideprops",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#redirect-and-notfound-support-for-getstaticprops--getserversideprops",
			children: [
				"Redirect and notFound Support for ",
				(0, import_jsx_runtime.jsx)("code", { children: "getStaticProps" }),
				" / ",
				(0, import_jsx_runtime.jsx)("code", { children: "getServerSideProps" })
			]
		}) })
	},
	{
		depth: 3,
		url: "#notfound-support",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#notfound-support",
			children: [(0, import_jsx_runtime.jsx)("code", { children: "notFound" }), " Support"]
		}) })
	},
	{
		depth: 3,
		url: "#redirect-support",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("a", {
			href: "#redirect-support",
			children: [(0, import_jsx_runtime.jsx)("code", { children: "redirect" }), " Support"]
		}) })
	},
	{
		depth: 2,
		url: "#conclusion-1",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "#conclusion-1",
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
		code: "code",
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We are excited to introduce Next.js 10, featuring:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "#built-in-image-component-and-automatic-image-optimization",
					children: "Built-in Image Component and Automatic Image Optimization"
				}) }),
				": Automatically optimize images using the new ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
				" component"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#internationalized-routing",
				children: "Internationalized Routing"
			}) }), ": Start internationalizing your Next.js applications with built-in primitives"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nextjs-analytics",
				children: "Next.js Analytics"
			}) }), ": Measure and act on real user performance"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nextjs-commerce",
				children: "Next.js Commerce"
			}) }), ": An all-in-one starter kit for high-performance e-commerce sites"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#react-17-support",
				children: "React 17 Support"
			}) }), ": The latest React release is fully compatible with Next.js"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#getstaticprops--getserversideprops-fast-refresh",
				children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
					" / ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
					" Fast Refresh"
				]
			}) }), ": Automatic reloading of properties when editing data fetching methods"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
					href: "#fast-refresh-for-mdx",
					children: "Fast Refresh for MDX"
				}) }),
				": When using ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "@next/mdx" }),
				", Fast Refresh is now leveraged to apply changes without full page reloads"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#importing-css-from-third-party-react-components",
				children: "Importing CSS from Third Party React Components"
			}) }), ": Importing CSS needed for components from npm is now supported"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsxs)(_components.a, {
					href: "#automatic-resolving-of-href",
					children: ["Automatic Resolving of ", (0, import_jsx_runtime.jsx)(_components.code, { children: "href" })]
				}) }),
				": The ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "as" }),
				" property is no longer needed on ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#nextcodemod-cli",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "@next/codemod" }), " CLI"]
			}) }), ": Allows for easier access to all Next.js codemods"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#blocking-fallback-for-getstaticpaths",
				children: ["Blocking Fallback for ", (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })]
			}) }), ": Wait on pre-rendering when generating new static pages instead of serving a static fallback page"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "built-in-image-component-and-automatic-image-optimization",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#built-in-image-component-and-automatic-image-optimization",
				children: "Built-in Image Component and Automatic Image Optimization"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Our goal with Next.js is to improve two things: Developer Experience and User Experience." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This year we've already invested heavily in both Developer Experience and improving performance for all Next.js applications. We focused on reducing the amount of JavaScript the browser has to load." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We introduced over ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "20 new features" }),
			" that improve performance and developer experience. At the same time, the JavaScript size of the Next.js core has been ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "reduced by 16%" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In January, we introduced a new best-in-class JavaScript code-splitting strategy in collaboration with the Google Chrome team." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, Barnebys saw a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "23% decrease in application size" }),
			", and Sumup had a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "70% decrease in their largest Javascript bundle size" }),
			". These improvements were achieved ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "without changing any code" }),
			" in their Next.js applications."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Companies adopted this new strategy automatically by simply upgrading Next.js to the latest version." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "images-on-the-web",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#images-on-the-web",
				children: "Images on the Web"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "While our focus on reducing the amount of JavaScript the browser has to load has paid off, the web is not only Javascript: it's also markup and images." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Images take up 50% of the total bytes on web pages." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Images have a big impact on Largest Contentful Paint as they're often the largest visible element when a page is loaded. Largest Contentful Paint is a Core Web Vital that Google will be using in their search ranking ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html",
				children: "very soon"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Half of all images are over one megabyte in size, which means they aren't optimized to be displayed on the web." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Nowadays users browse the web using their phones, tablets, and laptops, yet images are still as a one size fits all. For example: sites load a 2000 by 2000 pixel image, but phones are only displaying it as 100 by 100 pixels." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Furthermore, 30% of images on web pages are outside of the initial viewport, meaning the browser loads images that a user does not see until they scroll further down the page." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Images often don't have a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "width" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "height" }),
			" property, causing them to jump around when the page is loaded. This hurts the Cumulative Layout Shift Core Web Vital."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "99.7% of images on websites don't use modern image formats like WebP." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In order to use images on web pages in a performant way a lot of aspects have to be considered: size, weight, lazy loading, and modern image formats." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Developers have to set up complicated build tooling to optimize images, however those tools usually don't cover user-submitted images coming from an external data source, making it impossible to optimize all images." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This impossible development task inevitably leads to a frustrating end-user experience." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "nextjs-image-component",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nextjs-image-component",
				children: "Next.js Image Component"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're excited to announce our solution to performant images on the web: the Next.js Image Component and Automatic Image Optimization." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"At it's most basic the Next.js Image Component is just a drop-in replacement for the HTML ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<img>" }),
			" element, evolved for the modern web."
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<img" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  src=\"/profile-picture.jpg\"" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  width=\"400\"" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  height=\"400\"" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  alt=\"Profile Picture\"" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "/>" })
				})
			] })
		}) }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "import Image from 'next/image';" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<Image" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  src=\"/profile-picture.jpg\"" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  width=\"400\"" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  height=\"400\"" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  alt=\"Profile Picture\"" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "/>;" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Google Chrome team helped create this React Component to improve page performance by making best practices the default." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			" component, images are automatically lazy-loaded, meaning they're only rendered when the user is close to seeing the image. This prevents loading that 30% of images outside of the initial viewport."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Image dimensions are enforced, allowing browsers to immediately render the space needed for the image instead of having it jump in when loaded, preventing layout shift." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"While ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "width" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "height" }),
			" on the HTML ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<img>" }),
			" element can cause issues with responsive layouts, ",
			(0, import_jsx_runtime.jsxs)(_components.strong, { children: ["this is not the case when using ", (0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" })] }),
			". When using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			" the image is automatically made responsive based on the aspect ratio from the provided ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "width" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "height" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Developers can mark images that are in the initial viewport, allowing Next.js to automatically preload these images. Preloading images in the initial viewport has shown improvements to the Largest Contentful Paint by up to 50%." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "automatic-image-optimization",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#automatic-image-optimization",
				children: "Automatic Image Optimization"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Even with these improvements compared to the HTML ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<img>" }),
			" element, there's still a major problem. The 2000 by 2000 pixel image is sent to phones that render a smaller image."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With Next.js 10 we're also solving that problem. The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			" component will automatically generate smaller sizes through built-in Image Optimization."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Built-in Image Optimization automatically serves the images in modern image formats like WebP, which is about 30% smaller than JPEG, if the browser supports it. It also allows Next.js to automatically adopt ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "future" }),
			" image formats and serve them to browsers that support those formats."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Image Optimization works with any image source. Even if images come from an external data source, like a CMS, they are optimized." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Instead of optimizing images at build time, Next.js 10 optimizes images on-demand, as users request them. Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "conclusion",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#conclusion",
				children: "Conclusion"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			" component and Automatic Image Optimization are powerful new primitives that will massively improve user experience."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/image" }),
			" component handles automatic lazy-loading, preloading of critical images, correct sizing across devices, and automatically supports modern formats. These features work with images from any source."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We are looking forward to seeing how much faster your user experience becomes with these new primites." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For more details check out the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/optimizing/images",
				children: "Next.js Image Component and Automatic Image Optimization documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "internationalized-routing",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#internationalized-routing",
				children: "Internationalized Routing"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This year, several businesses and community members helped our team understand how important internationalization is." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For example, we learned that 72% of consumers are more likely to stay on your site if it's been translated and 55% of consumers said they only buy from e-commerce sites in their native language." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If you plan to go to market in a different country, internationalizing your project is critical for success." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Internationalizing a project has two main pillars: Translations and Routing." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Many React libraries prepare applications to be translated, but most of them expect you to handle routing manually, and generally only work with one rendering strategy." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "That's why, as part of Next.js 10, we're releasing built-in support for internationalized routing and language detection." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This built-in support for internationalized routing supports Next.js' hybrid strategy, so you can choose between Static Generation or Server-Rendering on a per-page basis." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js 10 supports the two most common routing strategies: subpath routing and domain routing." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For both strategies, you start by configuring the locales in the Next.js configuration." }),
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
						children: "  i18n: {"
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
							children: "    locales: ["
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'en'"
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
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'nl'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "],"
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
							children: "    defaultLocale: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'en'"
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
			"Locales are ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.unicode.org/reports/tr35/tr35-59/tr35.html#Identifiers",
				children: "UTS Locale Identifiers"
			}),
			", a standardized format for defining locales."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Generally a Locale Identifier is made up of a language, region, and script separated by a dash: ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "language-region-script" }),
			". The region and script are optional. An example:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "en-US" }), " - English as spoken in the United States"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "nl-NL" }), " - Dutch as spoken in the Netherlands"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "nl" }), " - Dutch, no specific region"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Once your locales are configured you can choose subpath or domain routing." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "subpath-routing",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#subpath-routing",
				children: "Subpath routing"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Subpath routing puts the locale in the url. This allows all languages to live on a single domain." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example, you can insert the locale in the url like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/nl-nl/blog" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/en/blog" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "domain-routing",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#domain-routing",
				children: "Domain routing"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Domain routing enables you to map a locale to a top level domain. For example ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://example.nl",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "example.nl" })
			}),
			" can be mapped to the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "nl" }),
			" locale and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://example.com",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "example.com" })
			}),
			" can be mapped to the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "en" }),
			" locale."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Domain routing requires some extra configuration to know how to route domains:" }),
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
						children: "  i18n: {"
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
							children: "    locales: ["
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'en'"
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
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'nl'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "],"
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
						children: "    domains: ["
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
							children: "        domain: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'example.com'"
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
							children: "        defaultLocale: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'en'"
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
							children: "        domain: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'example.nl'"
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
							children: "        defaultLocale: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'nl'"
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
						children: "    ],"
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
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "language-detection",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#language-detection",
				children: "Language Detection"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js 10 has built-in language detection on the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/" }),
			" route based on the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Accept-Language" }),
			" header, which all modern browsers support. The configured locales will be matches against the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Accept-Language" }),
			" header and then redirect according to the configured strategy."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "search-engine-optimization",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#search-engine-optimization",
				children: "Search Engine Optimization"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Since Next.js knows the language of the page visited by the user, it will automatically add the lang attribute to the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<html>" }),
			" tag."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js doesn't know about variants of a page so it's up to you to add the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "hreflang" }),
			" meta tags using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/head" }),
			". You can learn more about ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "hreflang" }),
			" in the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://support.google.com/webmasters/answer/189077",
				children: "Google Webmasters documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "the-future-of-internationalization-in-nextjs",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#the-future-of-internationalization-in-nextjs",
				children: "The future of internationalization in Next.js"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Internationalized Routing is the first in a series of features that will make internationalizing and localizing your project easier. Internationalized Routing allows for integrating with the majority of React internationalization libraries." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To learn more about Internationalized Routing check out the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/routing/internationalization",
				children: "Internationalized Routing documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nextjs-speed-insights",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nextjs-speed-insights",
				children: "Next.js Speed Insights"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "At Vercel, we know that you can't fix what you can't measure." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Your visitors have grown increasingly sensitive to site performance. More than 50% of them will abandon your website ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.blog.google/products/admanager/the-need-for-mobile-speed/",
				children: "if it takes more than 3 seconds to load"
			}),
			". If you're in e-commerce, many have found that improving your load time by 1/10th of a second resulted in a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://robotics.stanford.edu/~ronnyk/2007IEEEComputerOnlineExperiments.pdf",
				children: "1% increase in conversion"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Because of how critical performance is to your success, we're proud to release Next.js Speed Insights. The solution for tracking real-world performance metrics and feeding those insights back into your development workflow." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "With Next.js Speed Insights:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: ["Instead of measuring once, ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "you will now measure continuously." })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: ["Instead of measuring on your development device, ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "measurements will come from the actual devices that your visitors are using." })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Next.js Speed Insights is about focusing on the entire picture, deeply understanding your audience, and how your application performs for your users." }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're so adamant about collecting real data because the causes of poor performance aren't always the most obvious. Performance regressions can result from a variety of places— third-party scripts and stylesheets, or first-party fonts, images, and videos that are oversized or slow." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "core-web-vitals",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#core-web-vitals",
				children: "Core Web Vitals"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Google, in conjunction with the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.w3.org/webperf/",
				children: "Web Performance Working Group"
			}),
			", have established the set of metrics to accurately measure how users experience the performance of your website: aptly named, Web Vitals. Web Vitals are metrics that track the perceived loading speed, responsiveness, and visual stability of your website—all three essential for website's overall health!"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Perceived loading speed can be measured by Largest Contentful Paint, or when all the page's content has been displayed. For example, when I open a link to buy a pair sneakers—the amount of time that passes before I see my sneakers, their price, and the add to cart button is LCP." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Page responsiveness can be measured by First Input Delay, which measures how long your users must wait to see the reaction of their first interaction with the page. For example, the amount of time between me clicking Add to Cart and the number of items in my cart incrementing is FID." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Finally, visual stability can be measured by Cumulative Layout Shift, or how much elements move after being displayed to the user. For example, we've all experienced the frustration of trying to tap a button that moved because an image loaded late—that's layout shift." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The continuous measurement and conformance around these Web Vitals for your real users is crucial. It's the only way to truly know how your site performs for your users. The performance of your site can vary dramatically based on a user's device and their network conditions, or how they're interacting with the page. Sites that load personalized content or ads may also experience wildly different performance from user to user." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "An emulated test cannot capture these important signals." }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js Speed Insights allows you to capture real-world insights, instead of synthetic benchmarks. It enables a continuous stream of measurement instead of relying on occasional testing, ensuring it's part of your developer workflow." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js Speed Insights allows you to capture ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "real-world insights" }),
			", instead of synthetic benchmarks. It enables a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "continuous stream" }),
			" of measurement instead of relying on occasional testing, ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "ensuring it's part of your developer workflow" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Visit ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://nextjs.org/analytics",
				children: "nextjs.org/analytics"
			}),
			" to learn how enable it in your application right now."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nextjs-commerce",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nextjs-commerce",
				children: "Next.js Commerce"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Ecommerce is one of the most important uses of the web. The new Next.js 10 features are powerful new tools for ecommerce." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: ["That's why today, in collaboration with BigCommerce, we released Next.js Commerce, the all-in-one React starter kit for ecommerce sites. With a few clicks, Next.js developers can clone, deploy, and fully customize it. Start right now at ", (0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://nextjs.org/commerce",
			children: "nextjs.org/commerce."
		})] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "react-17-support",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#react-17-support",
				children: "React 17 Support"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"React 17 had no breaking changes for Next.js, however there were some maintenance changes required, for example updating the peer dependencies. The ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html",
				children: "new JSX transform"
			}),
			" is automatically enabled when React 17 is used, no configuration changes are needed."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "All you have to do to start using React 17 is upgrade Next.js and React:" }),
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
						children: " install"
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
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "getstaticprops--getserversideprops-fast-refresh",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#getstaticprops--getserversideprops-fast-refresh",
				children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
					" / ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
					" Fast Refresh"
				]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When making edits to your ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			" functions Next.js will now automatically re-run the function and apply the new data. This allows you to iterate quicker without having to refresh the page."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To learn more about ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			" you can read the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/data-fetching",
				children: "Data Fetching documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "fast-refresh-for-mdx",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#fast-refresh-for-mdx",
				children: "Fast Refresh for MDX"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When using Next.js with MDX through ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@next/mdx" }),
			" changing the MDX contents will now leverage Fast Refresh, making sure the browser does not have to reload the page on edits."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://github.com/vercel/next.js/tree/canary/packages/next-mdx",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "@next/mdx" }), " documentation"]
			}),
			" guides you through how to set up MDX with Next.js."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "importing-css-from-third-party-react-components",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#importing-css-from-third-party-react-components",
				children: "Importing CSS from Third Party React Components"
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can now import third party css inside of React components. This allows for code-splitting CSS only meant for a single component. For example you can now use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "react-datepicker" }),
			" library without needing to import the CSS in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "_app.js" }),
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
							children: " DatePicker "
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
							children: " 'react-datepicker'"
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
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " 'react-datepicker/dist/react-datepicker.css'"
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
							children: "() {}"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can refer to the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/styling",
				children: "built-in CSS support documentation"
			}),
			" to learn more about how Next.js handles CSS imports."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "automatic-resolving-of-href",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#automatic-resolving-of-href",
				children: ["Automatic Resolving of ", (0, import_jsx_runtime.jsx)(_components.code, { children: "href" })]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you've used dynamic routes before, you've probably ran into a case before where you had to provide both a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "href" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "as" }),
			" property to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" }),
			". It would look something like this:"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<Link href=\"/categories/[slug]\" as=\"/categories/books\" />" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This allowed Next.js to interpolate the href for the dynamic parameters, however, it caused friction when developers forgot to add the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "as" }),
			" or added the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "as" }),
			" in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "href" }),
			" causing the page transitions to not use client-side routing."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We set out to solve this friction for developers a few months ago, with the main goal to improve developer experience and end user experience. We incrementally worked towards a solution that allows for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "href" }),
			" to be automatically resolved."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We're excited to announce that as part of Next.js 10 you no longer have to use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "as" }),
			" property for the majority of use-cases. Removing friction from developers and improving the end user experience."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This change is fully backwards compatible, if you currently use both ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "href" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "as" }),
			" the existing behavior is preserved."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In order to adopt the automatic ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "href" }),
			" resolving all you have to do is change your usage of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" }),
			" to only use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "href" }),
			" holding the value that you previously had in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "as" }),
			" property."
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "<Link href=\"/categories/books\" />" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To learn more about ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" }),
			" and client-side routing you can refer to the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/pages/api-reference/components/link",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next/link" }), " documentation"]
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nextcodemod-cli",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#nextcodemod-cli",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "@next/codemod" }), " CLI"]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We're committed to making sure Next.js upgrades are as smooth as possible through extensive backwards compatibility. This commitment starts with very sparingly deprecating features while introducing new and better solutions in their place. On top of this commitment we have extensive integration tests for all Next.js features, including tests that replicate local development." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When a feature in Next.js is deprecate and requires large codebase changes our team creates a codemod for it. A codemod is an automated code transformation that you can run over your project to update source code." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For example: We released a codemod for updating arrow functions and anonymous functions to named functions. ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/upgrading/codemods#name-default-component",
				children: "This transformation"
			}),
			" is needed because otherwise React Fast Refresh does not detect the function as being a valid React Component. Similarly the React hooks eslint rules would not pick up the function as a React component."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With Next.js 10 we're releasing a new Next.js codemods CLI tool that allows you run a single command to update your application: ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "npx @next/codemod <transform> <path>" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To learn more about the codemods you can check the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/upgrading/codemods",
				children: "Next.js Codemods documentation"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "blocking-fallback-for-getstaticpaths",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#blocking-fallback-for-getstaticpaths",
				children: ["Blocking Fallback for ", (0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" })]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In Next.js 9.3 we introduced ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" }),
			" along with the ability to return a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback" }),
			" property in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" }),
			". The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback" }),
			" property allows for generating additional static pages without needing a full rebuild, serving a static HTML file initially that is then replaced by the fully rendered content on subsequent requests. The past few months we've received a lot of feedback from companies that wanted a similar but slightly different behavior: a blocking pre-render when a user requests the page for the first time. After that initial render the page would be re-used for subsequent requests."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "With Next.js 10 we're solving this case." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"We're excited to announce the new ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback: 'blocking'" }),
			" mode for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticPaths" }),
			" that enables the blocking behavior where no static fallback is sent to the browser. Instead the initial request is waited on for pre-rendering."
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
			title: "pages/posts/[id].js",
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
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " getStaticPaths"
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
						children: " {"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "    // enables blocking mode for the fallback behavior"
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
							children: "    fallback: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'blocking'"
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
						children: "  };"
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
			"To learn more about ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback" }),
			" behavior for incrementally generating additional static pages you can refer to the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "/docs/pages/building-your-application/data-fetching#fallback-true",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "fallback" }), " documentation"]
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "redirect-and-notfound-support-for-getstaticprops--getserversideprops",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#redirect-and-notfound-support-for-getstaticprops--getserversideprops",
				children: [
					"Redirect and notFound Support for ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
					" / ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" })
				]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Since the introduction of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			" we have noticed cases where users are needing to return redirects and 404 responses. To help streamline these cases we now allow returning two new fields from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getStaticProps" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "getServerSideProps" }),
			": ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "notFound" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "redirect" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "notfound-support",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#notfound-support",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "notFound" }), " Support"]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When returning the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "notFound" }),
			" field with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "true" }),
			" the default 404 page will be returned with a status code of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "404" }),
			". This allows you to avoid generating additional pages with SSG and having to handle rendering the 404 page manually."
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
			title: "pages/posts/[id].js",
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
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " getStaticProps"
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
						children: " {"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "    // returns the default 404 page with a status code of 404"
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
							children: "    notFound: "
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
						children: "  };"
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
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "redirect-support",
			children: (0, import_jsx_runtime.jsxs)(_components.a, {
				href: "#redirect-support",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "redirect" }), " Support"]
			})
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Redirects can now be returned which contains the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "destination" }),
			" and whether the redirect should be permanent or not e.g. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "permanent: true" }),
			". An optional ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "statusCode" }),
			" can also be returned in place of the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "permanent" }),
			" field for cases where you need to use a specific status over the defaults."
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
			title: "pages/posts/[id].js",
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
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " getStaticProps"
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
						children: " {"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "    // returns a redirect to an internal page `/another-page`"
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
						children: "    redirect: {"
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
							children: "      destination: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'/another-page'"
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
							children: "      permanent: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "false"
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
						children: "    },"
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
						children: "  };"
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
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			title: "pages/posts/[id].js",
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
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " getServerSideProps"
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
						children: " {"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "    // returns a redirect to an external domain `example.com`"
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
						children: "    redirect: {"
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
							children: "      destination: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'https://example.com'"
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
							children: "      permanent: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "false"
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
						children: "    },"
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
						children: "  };"
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
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "conclusion-1",
			children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#conclusion-1",
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
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "1,300" }),
				" independent contributors, with over ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "120" }),
				" new contributors since the 9.5 release"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"On GitHub, the project has been starred over ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "54,800" }),
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
			" Discussions is a community space that allows you to connect with other Next.js users and freely ask questions or share your work."
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This release was brought to you by the contributions of: @ijjk, @adebiyial, @elliottsj, @saintmalik, @HaNdTriX, @prateekbh, @amirsaeed671, @paambaati, @imagentleman, @gregrickaby, @Janpot, @atcastle, @Kirkhammetz, @remorses, @davidsonsns, @kmkzt, @slawekkolodziej, @Timer, @styfle, @timneutkens, @ykzts, @ashconnell, @orYoffe, @lfades, @justinwhall, @fbaiodias, @ludofischer, @felipeguilhermefs, @gr-qft, @TasukuUno, @YichiZ, @weichienhung, @seosmmbusiness, @HsuTing, @gsimone, @peduarte, @ztanner, @neighborhood999, @chibicode, @merceyz, @opudalo, @lunchboxav, @mohsen1, @akd-io, @justman00, @helloworld, @devknoll, @borekb, @ArthurMaverick, @sakito21, @TrySound, @omBratteng, @svenheden, @hallaji, @kettanaito, @vvo, @m-lautenbach, @jensmeindertsma, @Zeko369, @longlho, @stefanprobst, @laugharn, @sdornan, @daneroo, @mohd-akram, @austingmhuang, @sphilee, @devinekadeni, @Bacher, @nghiepit, @tomasdisk, @leader22, @paulogdm, @284km, @belgattitude, @geritol, @stigkj, @sampoder, @samrobbins85, @Pitasi, @digitalPlayer1125, @timfee, @plug-n-play, @philihp, @leerob, @dylanjha, @Kerumen, @rdimaio, @jorisw, @zerbinidamata, @jamesgeorge007, @Jashnm, and @futantan!" })
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
export { toc as a, structuredData as i, frontmatter as n, next_10_exports as r, MDXContent as t };
