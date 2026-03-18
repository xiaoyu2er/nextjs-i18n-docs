import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-server-B5lGKnPG.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_server_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "NextRequest and NextResponse",
	"description": "Learn about the server-only helpers for Middleware and Edge API Routes."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`next/server` provides server-only helpers for use in Middleware and Edge API Routes."
		},
		{
			"heading": "nextrequest",
			"content": "The `NextRequest` object is an extension of the native `Request` interface, with the following added methods and properties:"
		},
		{
			"heading": "nextrequest",
			"content": "`cookies` - A RequestCookies instance with cookies from the `Request`. It reads/mutates the `Cookie` header of the request. See also Using cookies in Middleware."
		},
		{
			"heading": "nextrequest",
			"content": "`get` - A method that takes a cookie `name` and returns an object with `name` and `value`. If a cookie with `name` isn't found, it returns `undefined`. If multiple cookies match, it will only return the first match."
		},
		{
			"heading": "nextrequest",
			"content": "`getAll` - A method that is similar to `get`, but returns a list of all the cookies with a matching `name`. If `name` is unspecified, it returns all the available cookies."
		},
		{
			"heading": "nextrequest",
			"content": "`set` - A method that takes an object with properties of `CookieListItem` as defined in the W3C CookieStore API spec."
		},
		{
			"heading": "nextrequest",
			"content": "`delete` - A method that takes either a cookie `name` or a list of names. and removes the cookies matching the name(s). Returns `true` for deleted and `false` for undeleted cookies."
		},
		{
			"heading": "nextrequest",
			"content": "`has` - A method that takes a cookie `name` and returns a `boolean` based on if the cookie exists (`true`) or not (`false`)."
		},
		{
			"heading": "nextrequest",
			"content": "`clear` - A method that takes no argument and will effectively remove the `Cookie` header."
		},
		{
			"heading": "nextrequest",
			"content": "`nextUrl`: Includes an extended, parsed, URL object that gives you access to Next.js specific properties such as `pathname`, `basePath`, `trailingSlash` and `i18n`. Includes the following properties:"
		},
		{
			"heading": "nextrequest",
			"content": "`basePath` (`string`)"
		},
		{
			"heading": "nextrequest",
			"content": "`buildId` (`string || undefined`)"
		},
		{
			"heading": "nextrequest",
			"content": "`defaultLocale` (`string || undefined`)"
		},
		{
			"heading": "nextrequest",
			"content": "`domainLocale`"
		},
		{
			"heading": "nextrequest",
			"content": "`defaultLocale`: (`string`)"
		},
		{
			"heading": "nextrequest",
			"content": "`domain`: (`string`)"
		},
		{
			"heading": "nextrequest",
			"content": "`http`: (`boolean || undefined`)"
		},
		{
			"heading": "nextrequest",
			"content": "`locales`: (`string[] || undefined`)"
		},
		{
			"heading": "nextrequest",
			"content": "`locale` (`string || undefined`)"
		},
		{
			"heading": "nextrequest",
			"content": "`url` (`URL`)"
		},
		{
			"heading": "nextrequest",
			"content": "`ip`: (`string || undefined`) - Has the IP address of the `Request`. This information is provided by your hosting platform."
		},
		{
			"heading": "nextrequest",
			"content": "`geo` - Has the geographic location from the `Request`. This information is provided by your hosting platform. Includes the following properties:"
		},
		{
			"heading": "nextrequest",
			"content": "`city` (`string || undefined`)"
		},
		{
			"heading": "nextrequest",
			"content": "`country` (`string || undefined`)"
		},
		{
			"heading": "nextrequest",
			"content": "`region` (`string || undefined`)"
		},
		{
			"heading": "nextrequest",
			"content": "`latitude` (`string || undefined`)"
		},
		{
			"heading": "nextrequest",
			"content": "`longitude` (`string || undefined`)"
		},
		{
			"heading": "nextrequest",
			"content": "You can use the `NextRequest` object as a direct replacement for the native `Request` interface, giving you more control over how you manipulate the request."
		},
		{
			"heading": "nextrequest",
			"content": "`NextRequest` can be imported from `next/server`:"
		},
		{
			"heading": "nextfetchevent",
			"content": "The `NextFetchEvent` object extends the native `FetchEvent` object, and includes the `waitUntil()` method."
		},
		{
			"heading": "nextfetchevent",
			"content": "The `waitUntil()` method can be used to prolong the execution of the function if you have other background work to make."
		},
		{
			"heading": "nextfetchevent",
			"content": "The `NextFetchEvent` object can be imported from `next/server`:"
		},
		{
			"heading": "nextresponse",
			"content": "The `NextResponse` class extends the native `Response` interface, with the following:"
		},
		{
			"heading": "public-methods",
			"content": "Public methods are available on an instance of the `NextResponse` class. Depending on your use case, you can create an instance and assign to a variable, then access the following public methods:"
		},
		{
			"heading": "public-methods",
			"content": "`cookies` - A ResponseCookies instance with the cookies from the `Response`. It reads/mutates the `Set-Cookie` header of the response. See also Using cookies in Middleware."
		},
		{
			"heading": "public-methods",
			"content": "`get` - A method that takes a cookie `name` and returns an object with `name` and `value`. If a cookie with `name` isn't found, it returns `undefined`. If multiple cookies match, it will only return the first match."
		},
		{
			"heading": "public-methods",
			"content": "`getAll` - A method that is similar to `get`, but returns a list of all the cookies with a matching `name`. If `name` is unspecified, it returns all the available cookies."
		},
		{
			"heading": "public-methods",
			"content": "`set` - A method that takes an object with properties of `CookieListItem` as defined in the W3C CookieStore API spec."
		},
		{
			"heading": "public-methods",
			"content": "`delete` - A method that takes either a cookie `name` or a list of names. and removes the cookies matching the name(s). Returns `true` for deleted and `false` for undeleted cookies."
		},
		{
			"heading": "static-methods",
			"content": "The following static methods are available on the `NextResponse` class directly:"
		},
		{
			"heading": "static-methods",
			"content": "`redirect()` - Returns a `NextResponse` with a redirect set"
		},
		{
			"heading": "static-methods",
			"content": "`rewrite()` - Returns a `NextResponse` with a rewrite set"
		},
		{
			"heading": "static-methods",
			"content": "`next()` - Returns a `NextResponse` that will continue the middleware chain"
		},
		{
			"heading": "static-methods",
			"content": "To use the methods above, **you must return the `NextResponse` object** returned. `NextResponse` can be imported from `next/server`:"
		},
		{
			"heading": "useragent",
			"content": "The `userAgent` helper allows you to interact with the user agent object from the request. It is abstracted from the native `Request` object, and is an opt in feature. It has the following properties:"
		},
		{
			"heading": "useragent",
			"content": "`isBot`: (`boolean`) Whether the request comes from a known bot"
		},
		{
			"heading": "useragent",
			"content": "`browser`"
		},
		{
			"heading": "useragent",
			"content": "`name`: (`string || undefined`) The name of the browser"
		},
		{
			"heading": "useragent",
			"content": "`version`: (`string || undefined`) The version of the browser, determined dynamically"
		},
		{
			"heading": "useragent",
			"content": "`device`"
		},
		{
			"heading": "useragent",
			"content": "`model`: (`string || undefined`) The model of the device, determined dynamically"
		},
		{
			"heading": "useragent",
			"content": "`type`: (`string || undefined`) The type of the browser, can be one of the following values: `console`, `mobile`, `tablet`, `smarttv`, `wearable`, `embedded`, or `undefined`"
		},
		{
			"heading": "useragent",
			"content": "`vendor`: (`string || undefined`) The vendor of the device, determined dynamically"
		},
		{
			"heading": "useragent",
			"content": "`engine`"
		},
		{
			"heading": "useragent",
			"content": "`name`: (`string || undefined`) The name of the browser engine, could be one of the following values: `Amaya`, `Blink`, `EdgeHTML`, `Flow`, `Gecko`, `Goanna`, `iCab`, `KHTML`, `Links`, `Lynx`, `NetFront`, `NetSurf`, `Presto`, `Tasman`, `Trident`, `w3m`, `WebKit` or `undefined`"
		},
		{
			"heading": "useragent",
			"content": "`version`: (`string || undefined`) The version of the browser engine, determined dynamically, or `undefined`"
		},
		{
			"heading": "useragent",
			"content": "`os`"
		},
		{
			"heading": "useragent",
			"content": "`name`: (`string || undefined`) The name of the OS, could be `undefined`"
		},
		{
			"heading": "useragent",
			"content": "`version`: (`string || undefined`) The version of the OS, determined dynamically, or `undefined`"
		},
		{
			"heading": "useragent",
			"content": "`cpu`"
		},
		{
			"heading": "useragent",
			"content": "`architecture`: (`string || undefined`) The architecture of the CPU, could be one of the following values: `68k`, `amd64`, `arm`, `arm64`, `armhf`, `avr`, `ia32`, `ia64`, `irix`, `irix64`, `mips`, `mips64`, `pa-risc`, `ppc`, `sparc`, `sparc64` or `undefined`"
		},
		{
			"heading": "useragent",
			"content": "`userAgent` can be imported from `next/server`:"
		},
		{
			"heading": "why-does-redirect-use-307-and-308",
			"content": "When using `redirect()` you may notice that the status codes used are `307` for a temporary redirect, and `308` for a permanent redirect. While traditionally a `302` was used for a temporary redirect, and a `301` for a permanent redirect, many browsers changed the request method of the redirect, from a `POST` to `GET` request when using a `302`, regardless of the origins request method."
		},
		{
			"heading": "why-does-redirect-use-307-and-308",
			"content": "Taking the following example of a redirect from `/users` to `/people`, if you make a `POST` request to `/users` to create a new user, and are conforming to a `302` temporary redirect, the request method will be changed from a `POST` to a `GET` request. This doesn't make sense, as to create a new user, you should be making a `POST` request to `/people`, and not a `GET` request."
		},
		{
			"heading": "why-does-redirect-use-307-and-308",
			"content": "The introduction of the `307` status code means that the request method is preserved as `POST`."
		},
		{
			"heading": "why-does-redirect-use-307-and-308",
			"content": "`302` - Temporary redirect, will change the request method from `POST` to `GET`"
		},
		{
			"heading": "why-does-redirect-use-307-and-308",
			"content": "`307` - Temporary redirect, will preserve the request method as `POST`"
		},
		{
			"heading": "why-does-redirect-use-307-and-308",
			"content": "The `redirect()` method uses a `307` by default, instead of a `302` temporary redirect, meaning your requests will *always* be preserved as `POST` requests."
		},
		{
			"heading": "why-does-redirect-use-307-and-308",
			"content": "If you want to cause a `GET` response to a `POST` request, use `303`."
		},
		{
			"heading": "why-does-redirect-use-307-and-308",
			"content": "Learn more about HTTP Redirects."
		},
		{
			"heading": "how-do-i-access-environment-variables",
			"content": "`process.env` can be used to access Environment Variables from Edge Middleware. They are evaluated during `next build`:"
		},
		{
			"heading": "how-do-i-access-environment-variables",
			"content": "Works"
		},
		{
			"heading": "how-do-i-access-environment-variables",
			"content": "Does **not** work"
		},
		{
			"heading": "how-do-i-access-environment-variables",
			"content": "`console.log(process.env.MY_ENV_VARIABLE)`"
		},
		{
			"heading": "how-do-i-access-environment-variables",
			"content": "`const getEnv = name => process.env[name]`"
		},
		{
			"heading": "how-do-i-access-environment-variables",
			"content": "`const { MY_ENV_VARIABLE } = process.env`"
		},
		{
			"heading": "how-do-i-access-environment-variables",
			"content": "`const { \"MY-ENV-VARIABLE\": MY_ENV_VARIABLE } = process.env`"
		}
	],
	"headings": [
		{
			"id": "nextrequest",
			"content": "NextRequest"
		},
		{
			"id": "nextfetchevent",
			"content": "NextFetchEvent"
		},
		{
			"id": "nextresponse",
			"content": "NextResponse"
		},
		{
			"id": "public-methods",
			"content": "Public Methods"
		},
		{
			"id": "static-methods",
			"content": "Static Methods"
		},
		{
			"id": "useragent",
			"content": "userAgent"
		},
		{
			"id": "faq",
			"content": "FAQ"
		},
		{
			"id": "why-does-redirect-use-307-and-308",
			"content": "Why does `redirect` use 307 and 308?"
		},
		{
			"id": "how-do-i-access-environment-variables",
			"content": "How do I access Environment Variables?"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#nextrequest",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "NextRequest" })
	},
	{
		depth: 2,
		url: "#nextfetchevent",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "NextFetchEvent" })
	},
	{
		depth: 2,
		url: "#nextresponse",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "NextResponse" })
	},
	{
		depth: 3,
		url: "#public-methods",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Public Methods" })
	},
	{
		depth: 3,
		url: "#static-methods",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Static Methods" })
	},
	{
		depth: 2,
		url: "#useragent",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "userAgent" })
	},
	{
		depth: 2,
		url: "#faq",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "FAQ" })
	},
	{
		depth: 3,
		url: "#why-does-redirect-use-307-and-308",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Why does ",
			(0, import_jsx_runtime.jsx)("code", { children: "redirect" }),
			" use 307 and 308?"
		] })
	},
	{
		depth: 3,
		url: "#how-do-i-access-environment-variables",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "How do I access Environment Variables?" })
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
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/server" }),
			" provides server-only helpers for use in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/routing/middleware",
				children: "Middleware"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/routing/api-routes",
				children: "Edge API Routes"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nextrequest",
			children: "NextRequest"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NextRequest" }),
			" object is an extension of the native ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/Request",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Request" })
			}),
			" interface, with the following added methods and properties:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "cookies" }),
					" - A ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "https://edge-runtime.vercel.app/packages/cookies#for-request",
						children: "RequestCookies"
					}),
					" instance with cookies from the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "Request" }),
					". It reads/mutates the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "Cookie" }),
					" header of the request. See also ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/docs/app/building-your-application/routing/middleware#using-cookies",
						children: "Using cookies in Middleware"
					}),
					"."
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "get" }),
						" - A method that takes a cookie ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
						" and returns an object with ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
						" and ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "value" }),
						". If a cookie with ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
						" isn't found, it returns ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "undefined" }),
						". If multiple cookies match, it will only return the first match."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "getAll" }),
						" - A method that is similar to ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "get" }),
						", but returns a list of all the cookies with a matching ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
						". If ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
						" is unspecified, it returns all the available cookies."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "set" }),
						" - A method that takes an object with properties of ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "CookieListItem" }),
						" as defined in the ",
						(0, import_jsx_runtime.jsx)(_components.a, {
							href: "https://wicg.github.io/cookie-store/#dictdef-cookielistitem",
							children: "W3C CookieStore API"
						}),
						" spec."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "delete" }),
						" - A method that takes either a cookie ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
						" or a list of names. and removes the cookies matching the name(s). Returns ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "true" }),
						" for deleted and ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "false" }),
						" for undeleted cookies."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "has" }),
						" - A method that takes a cookie ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
						" and returns a ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "boolean" }),
						" based on if the cookie exists (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "true" }),
						") or not (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "false" }),
						")."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "clear" }),
						" - A method that takes no argument and will effectively remove the ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "Cookie" }),
						" header."
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "nextUrl" }),
					": Includes an extended, parsed, URL object that gives you access to Next.js specific properties such as ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "pathname" }),
					", ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "basePath" }),
					", ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "trailingSlash" }),
					" and ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "i18n" }),
					". Includes the following properties:"
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "basePath" }),
						" (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string" }),
						")"
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "buildId" }),
						" (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						")"
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "defaultLocale" }),
						" (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						")"
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "domainLocale" }),
						"\n",
						(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.li, { children: [
								(0, import_jsx_runtime.jsx)(_components.code, { children: "defaultLocale" }),
								": (",
								(0, import_jsx_runtime.jsx)(_components.code, { children: "string" }),
								")"
							] }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.li, { children: [
								(0, import_jsx_runtime.jsx)(_components.code, { children: "domain" }),
								": (",
								(0, import_jsx_runtime.jsx)(_components.code, { children: "string" }),
								")"
							] }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.li, { children: [
								(0, import_jsx_runtime.jsx)(_components.code, { children: "http" }),
								": (",
								(0, import_jsx_runtime.jsx)(_components.code, { children: "boolean || undefined" }),
								")"
							] }),
							"\n",
							(0, import_jsx_runtime.jsxs)(_components.li, { children: [
								(0, import_jsx_runtime.jsx)(_components.code, { children: "locales" }),
								": (",
								(0, import_jsx_runtime.jsx)(_components.code, { children: "string[] || undefined" }),
								")"
							] }),
							"\n"
						] }),
						"\n"
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "locale" }),
						" (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						")"
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "url" }),
						" (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "URL" }),
						")"
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "ip" }),
					": (",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
					") - Has the IP address of the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "Request" }),
					". This information is provided by your hosting platform."
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "geo" }),
					" - Has the geographic location from the ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "Request" }),
					". This information is provided by your hosting platform. Includes the following properties:"
				] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "city" }),
						" (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						")"
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "country" }),
						" (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						")"
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "region" }),
						" (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						")"
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "latitude" }),
						" (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						")"
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "longitude" }),
						" (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						")"
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can use the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NextRequest" }),
			" object as a direct replacement for the native ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Request" }),
			" interface, giving you more control over how you manipulate the request."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NextRequest" }),
			" can be imported from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/server" }),
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
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
						children: " { NextRequest } "
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
						children: " 'next/server'"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nextfetchevent",
			children: "NextFetchEvent"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NextFetchEvent" }),
			" object extends the native ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/FetchEvent",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "FetchEvent" })
			}),
			" object, and includes the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/ExtendableEvent/waitUntil",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "waitUntil()" })
			}),
			" method."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "waitUntil()" }),
			" method can be used to prolong the execution of the function if you have other background work to make."
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { NextResponse } "
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
							children: " 'next/server'"
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
							children: " { NextFetchEvent, NextRequest } "
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
							children: " 'next/server'"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
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
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " middleware"
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
							children: "req"
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
							children: " NextRequest"
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
							children: " NextFetchEvent"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "  event."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "waitUntil"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "    fetch"
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
							children: "'https://my-analytics-platform.com'"
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
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "      body: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "JSON"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "stringify"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({ pathname: req.nextUrl.pathname }),"
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
						children: "    })"
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
						children: "  )"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
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
							children: " NextResponse."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "next"
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
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NextFetchEvent" }),
			" object can be imported from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/server" }),
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
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
						children: " { NextFetchEvent } "
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
						children: " 'next/server'"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "nextresponse",
			children: "NextResponse"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NextResponse" }),
			" class extends the native ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/Response",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Response" })
			}),
			" interface, with the following:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "public-methods",
			children: "Public Methods"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Public methods are available on an instance of the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NextResponse" }),
			" class. Depending on your use case, you can create an instance and assign to a variable, then access the following public methods:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "cookies" }),
				" - A ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://edge-runtime.vercel.app/packages/cookies#for-response",
					children: "ResponseCookies"
				}),
				" instance with the cookies from the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Response" }),
				". It reads/mutates the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Set-Cookie" }),
				" header of the response. See also ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/building-your-application/routing/middleware#using-cookies",
					children: "Using cookies in Middleware"
				}),
				".",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "get" }),
						" - A method that takes a cookie ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
						" and returns an object with ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
						" and ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "value" }),
						". If a cookie with ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
						" isn't found, it returns ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "undefined" }),
						". If multiple cookies match, it will only return the first match."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "getAll" }),
						" - A method that is similar to ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "get" }),
						", but returns a list of all the cookies with a matching ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
						". If ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
						" is unspecified, it returns all the available cookies."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "set" }),
						" - A method that takes an object with properties of ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "CookieListItem" }),
						" as defined in the ",
						(0, import_jsx_runtime.jsx)(_components.a, {
							href: "https://wicg.github.io/cookie-store/#dictdef-cookielistitem",
							children: "W3C CookieStore API"
						}),
						" spec."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "delete" }),
						" - A method that takes either a cookie ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
						" or a list of names. and removes the cookies matching the name(s). Returns ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "true" }),
						" for deleted and ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "false" }),
						" for undeleted cookies."
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "static-methods",
			children: "Static Methods"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The following static methods are available on the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NextResponse" }),
			" class directly:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "redirect()" }),
				" - Returns a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NextResponse" }),
				" with a redirect set"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "rewrite()" }),
				" - Returns a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NextResponse" }),
				" with a rewrite set"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next()" }),
				" - Returns a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NextResponse" }),
				" that will continue the middleware chain"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To use the methods above, ",
			(0, import_jsx_runtime.jsxs)(_components.strong, { children: [
				"you must return the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NextResponse" }),
				" object"
			] }),
			" returned. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "NextResponse" }),
			" can be imported from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/server" }),
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
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
						children: " { NextResponse } "
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
						children: " 'next/server'"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "useragent",
			children: "userAgent"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "userAgent" }),
			" helper allows you to interact with the user agent object from the request. It is abstracted from the native ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Request" }),
			" object, and is an opt in feature. It has the following properties:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "isBot" }),
				": (",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "boolean" }),
				") Whether the request comes from a known bot"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "browser" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
						": (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						") The name of the browser"
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "version" }),
						": (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						") The version of the browser, determined dynamically"
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "device" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "model" }),
						": (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						") The model of the device, determined dynamically"
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "type" }),
						": (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						") The type of the browser, can be one of the following values: ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "console" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "mobile" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "tablet" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "smarttv" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "wearable" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "embedded" }),
						", or ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "undefined" })
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "vendor" }),
						": (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						") The vendor of the device, determined dynamically"
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "engine" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
						": (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						") The name of the browser engine, could be one of the following values: ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "Amaya" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "Blink" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "EdgeHTML" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "Flow" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "Gecko" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "Goanna" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "iCab" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "KHTML" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "Links" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "Lynx" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "NetFront" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "NetSurf" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "Presto" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "Tasman" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "Trident" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "w3m" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "WebKit" }),
						" or ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "undefined" })
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "version" }),
						": (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						") The version of the browser engine, determined dynamically, or ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "undefined" })
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "os" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "name" }),
						": (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						") The name of the OS, could be ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "undefined" })
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "version" }),
						": (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						") The version of the OS, determined dynamically, or ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "undefined" })
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "cpu" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						(0, import_jsx_runtime.jsx)(_components.code, { children: "architecture" }),
						": (",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "string || undefined" }),
						") The architecture of the CPU, could be one of the following values: ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "68k" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "amd64" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "arm" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "arm64" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "armhf" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "avr" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "ia32" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "ia64" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "irix" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "irix64" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "mips" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "mips64" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "pa-risc" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "ppc" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "sparc" }),
						", ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "sparc64" }),
						" or ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "undefined" })
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "userAgent" }),
			" can be imported from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next/server" }),
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
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
						children: " { userAgent } "
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
						children: " 'next/server'"
					})
				]
			}) })
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { NextRequest, NextResponse, userAgent } "
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
							children: " 'next/server'"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
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
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " middleware"
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
							children: "request"
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
							children: " NextRequest"
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
							children: " url"
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
							children: " request.nextUrl"
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
							children: "device"
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
							children: " userAgent"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(request)"
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
							children: " viewport"
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
							children: " device.type "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "==="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " 'mobile'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ?"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " 'mobile'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " :"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " 'desktop'"
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
							children: "  url.searchParams."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "set"
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
							children: "'viewport'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", viewport)"
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
							children: " NextResponse."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "rewrite"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(url)"
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
			id: "faq",
			children: "FAQ"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "why-does-redirect-use-307-and-308",
			children: [
				"Why does ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "redirect" }),
				" use 307 and 308?"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "redirect()" }),
			" you may notice that the status codes used are ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "307" }),
			" for a temporary redirect, and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "308" }),
			" for a permanent redirect. While traditionally a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "302" }),
			" was used for a temporary redirect, and a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "301" }),
			" for a permanent redirect, many browsers changed the request method of the redirect, from a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "POST" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }),
			" request when using a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "302" }),
			", regardless of the origins request method."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Taking the following example of a redirect from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/users" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/people" }),
			", if you make a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "POST" }),
			" request to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/users" }),
			" to create a new user, and are conforming to a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "302" }),
			" temporary redirect, the request method will be changed from a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "POST" }),
			" to a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }),
			" request. This doesn't make sense, as to create a new user, you should be making a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "POST" }),
			" request to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "/people" }),
			", and not a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }),
			" request."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The introduction of the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "307" }),
			" status code means that the request method is preserved as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "POST" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "302" }),
				" - Temporary redirect, will change the request method from ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "POST" }),
				" to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "307" }),
				" - Temporary redirect, will preserve the request method as ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "POST" })
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "redirect()" }),
			" method uses a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "307" }),
			" by default, instead of a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "302" }),
			" temporary redirect, meaning your requests will ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "always" }),
			" be preserved as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "POST" }),
			" requests."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you want to cause a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }),
			" response to a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "POST" }),
			" request, use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "303" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://developer.mozilla.org/docs/Web/HTTP/Redirections",
			children: "Learn more"
		}), " about HTTP Redirects."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "how-do-i-access-environment-variables",
			children: "How do I access Environment Variables?"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "process.env" }),
			" can be used to access ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/pages/building-your-application/configuring/environment-variables",
				children: "Environment Variables"
			}),
			" from Edge Middleware. They are evaluated during ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Works" }), (0, import_jsx_runtime.jsxs)(_components.th, { children: [
			"Does ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "not" }),
			" work"
		] })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "console.log(process.env.MY_ENV_VARIABLE)" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "const getEnv = name => process.env[name]" }) })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "const { MY_ENV_VARIABLE } = process.env" }) }), (0, import_jsx_runtime.jsx)(_components.td, {})] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "const { \"MY-ENV-VARIABLE\": MY_ENV_VARIABLE } = process.env" }) }), (0, import_jsx_runtime.jsx)(_components.td, {})] })
		] })] })
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
export { toc as a, structuredData as i, frontmatter as n, next_server_exports as r, MDXContent as t };
