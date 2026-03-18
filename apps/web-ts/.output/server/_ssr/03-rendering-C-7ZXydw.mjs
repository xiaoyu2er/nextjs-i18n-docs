import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/03-rendering-C-7ZXydw.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _03_rendering_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Rendering",
	"description": "Learn the differences between Next.js rendering environments, strategies, and runtimes."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Rendering converts the code you write into user interfaces. React and Next.js allow you to create hybrid web applications where parts of your code can be rendered on the server or the client. This section will help you understand the differences between these rendering environments, strategies, and runtimes."
		},
		{
			"heading": "fundamentals",
			"content": "To start, it's helpful to be familiar with three foundational web concepts:"
		},
		{
			"heading": "fundamentals",
			"content": "The Environments your application code can be executed in: the server and the client."
		},
		{
			"heading": "fundamentals",
			"content": "The Request-Response Lifecycle that's initiated when a user visits or interacts with your application."
		},
		{
			"heading": "fundamentals",
			"content": "The Network Boundary that separates server and client code."
		},
		{
			"heading": "rendering-environments",
			"content": "There are two environments where web applications can be rendered: the client and the server."
		},
		{
			"heading": "rendering-environments",
			"content": "The **client** refers to the browser on a user's device that sends a request to a server for your application code. It then turns the response from the server into a user interface."
		},
		{
			"heading": "rendering-environments",
			"content": "The **server** refers to the computer in a data center that stores your application code, receives requests from a client, and sends back an appropriate response."
		},
		{
			"heading": "rendering-environments",
			"content": "Historically, developers had to use different languages (e.g. JavaScript, PHP) and frameworks when writing code for the server and the client. With React, developers can use the **same language** (JavaScript), and the **same framework** (e.g. Next.js or your framework of choice). This flexibility allows you to seamlessly write code for both environments without context switching."
		},
		{
			"heading": "rendering-environments",
			"content": "However, each environment has its own set of capabilities and constraints. Therefore, the code you write for the server and the client is not always the same. There are certain operations (e.g. data fetching or managing user state) that are better suited for one environment over the other."
		},
		{
			"heading": "rendering-environments",
			"content": "Understanding these differences is key to effectively using React and Next.js. We'll cover the differences and use cases in more detail on the Server and Client Components pages, for now, let's continue building on our foundation."
		},
		{
			"heading": "request-response-lifecycle",
			"content": "Broadly speaking, all websites follow the same **Request-Response Lifecycle**:"
		},
		{
			"heading": "request-response-lifecycle",
			"content": "**User Action:** The user interacts with a web application. This could be clicking a link, submitting a form, or typing a URL directly into the browser's address bar."
		},
		{
			"heading": "request-response-lifecycle",
			"content": "**HTTP Request:** The client sends an HTTP request to the server that contains necessary information about what resources are being requested, what method is being used (e.g. `GET`, `POST`), and additional data if necessary."
		},
		{
			"heading": "request-response-lifecycle",
			"content": "**Server:** The server processes the request and responds with the appropriate resources. This process may take a couple of steps like routing, fetching data, etc."
		},
		{
			"heading": "request-response-lifecycle",
			"content": "**HTTP Response:** After processing the request, the server sends an HTTP response back to the client. This response contains a status code (which tells the client whether the request was successful or not) and requested resources (e.g. HTML, CSS, JavaScript, static assets, etc)."
		},
		{
			"heading": "request-response-lifecycle",
			"content": "**Client:** The client parses the resources to render the user interface."
		},
		{
			"heading": "request-response-lifecycle",
			"content": "**User Action:** Once the user interface is rendered, the user can interact with it, and the whole process starts again."
		},
		{
			"heading": "request-response-lifecycle",
			"content": "A major part of building a hybrid web application is deciding how to split the work in the lifecycle, and where to place the Network Boundary."
		},
		{
			"heading": "network-boundary",
			"content": "In web development, the **Network Boundary** is a conceptual line that separates the different environments. For example, the client and the server, or the server and the data store."
		},
		{
			"heading": "network-boundary",
			"content": "In React, you choose where to place the client-server network boundary wherever it makes the most sense."
		},
		{
			"heading": "network-boundary",
			"content": "Behind the scenes, the work is split into two parts: the **client module graph** and the **server module graph**. The server module graph contains all the components that are rendered on the server, and the client module graph contains all components that are rendered on the client."
		},
		{
			"heading": "network-boundary",
			"content": "It may be helpful to think about module graphs as a visual representation of how files in your application depend on each other."
		},
		{
			"heading": "network-boundary",
			"content": "You can use the React `\"use client\"` convention to define the boundary. There's also a `\"use server\"` convention, which tells React to do some computational work on the server."
		},
		{
			"heading": "building-hybrid-applications",
			"content": "When working in these environments, it's helpful to think of the flow of the code in your application as **unidirectional**. In other words, during a response, your application code flows in one direction: from the server to the client."
		},
		{
			"heading": "building-hybrid-applications",
			"content": "If you need to access the server from the client, you send a **new** request to the server rather than re-use the same request. This makes it easier to understand where to render your components and where to place the Network Boundary."
		},
		{
			"heading": "building-hybrid-applications",
			"content": "In practice, this model encourages developers to think about what they want to execute on the server first, before sending the result to the client and making the application interactive."
		},
		{
			"heading": "building-hybrid-applications",
			"content": "This concept will become clearer when we look at how you can interleave client and server components in the same component tree."
		}
	],
	"headings": [
		{
			"id": "fundamentals",
			"content": "Fundamentals"
		},
		{
			"id": "rendering-environments",
			"content": "Rendering Environments"
		},
		{
			"id": "request-response-lifecycle",
			"content": "Request-Response Lifecycle"
		},
		{
			"id": "network-boundary",
			"content": "Network Boundary"
		},
		{
			"id": "building-hybrid-applications",
			"content": "Building Hybrid Applications"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#fundamentals",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Fundamentals" })
	},
	{
		depth: 3,
		url: "#rendering-environments",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Rendering Environments" })
	},
	{
		depth: 3,
		url: "#request-response-lifecycle",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Request-Response Lifecycle" })
	},
	{
		depth: 3,
		url: "#network-boundary",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Network Boundary" })
	},
	{
		depth: 2,
		url: "#building-hybrid-applications",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Building Hybrid Applications" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { Image } = _components;
	if (!Image) _missingMdxReference("Image", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Rendering converts the code you write into user interfaces. React and Next.js allow you to create hybrid web applications where parts of your code can be rendered on the server or the client. This section will help you understand the differences between these rendering environments, strategies, and runtimes." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "fundamentals",
			children: "Fundamentals"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To start, it's helpful to be familiar with three foundational web concepts:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#rendering-environments",
					children: "Environments"
				}),
				" your application code can be executed in: the server and the client."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#request-response-lifecycle",
					children: "Request-Response Lifecycle"
				}),
				" that's initiated when a user visits or interacts with your application."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#network-boundary",
					children: "Network Boundary"
				}),
				" that separates server and client code."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "rendering-environments",
			children: "Rendering Environments"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "There are two environments where web applications can be rendered: the client and the server." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Image, {
			alt: "Client and Server Environments",
			srcLight: "/docs/light/client-and-server-environments.png",
			srcDark: "/docs/dark/client-and-server-environments.png",
			width: "1600",
			height: "672"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "client" }),
				" refers to the browser on a user's device that sends a request to a server for your application code. It then turns the response from the server into a user interface."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "server" }),
				" refers to the computer in a data center that stores your application code, receives requests from a client, and sends back an appropriate response."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Historically, developers had to use different languages (e.g. JavaScript, PHP) and frameworks when writing code for the server and the client. With React, developers can use the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "same language" }),
			" (JavaScript), and the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "same framework" }),
			" (e.g. Next.js or your framework of choice). This flexibility allows you to seamlessly write code for both environments without context switching."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "However, each environment has its own set of capabilities and constraints. Therefore, the code you write for the server and the client is not always the same. There are certain operations (e.g. data fetching or managing user state) that are better suited for one environment over the other." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Understanding these differences is key to effectively using React and Next.js. We'll cover the differences and use cases in more detail on the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/rendering/server-components",
				children: "Server"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/rendering/client-components",
				children: "Client"
			}),
			" Components pages, for now, let's continue building on our foundation."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "request-response-lifecycle",
			children: "Request-Response Lifecycle"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Broadly speaking, all websites follow the same ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Request-Response Lifecycle" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "User Action:" }), " The user interacts with a web application. This could be clicking a link, submitting a form, or typing a URL directly into the browser's address bar."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "HTTP Request:" }),
				" The client sends an ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developer.mozilla.org/docs/Web/HTTP",
					children: "HTTP"
				}),
				" request to the server that contains necessary information about what resources are being requested, what method is being used (e.g. ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "GET" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "POST" }),
				"), and additional data if necessary."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Server:" }), " The server processes the request and responds with the appropriate resources. This process may take a couple of steps like routing, fetching data, etc."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "HTTP Response:" }), " After processing the request, the server sends an HTTP response back to the client. This response contains a status code (which tells the client whether the request was successful or not) and requested resources (e.g. HTML, CSS, JavaScript, static assets, etc)."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Client:" }), " The client parses the resources to render the user interface."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "User Action:" }), " Once the user interface is rendered, the user can interact with it, and the whole process starts again."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "A major part of building a hybrid web application is deciding how to split the work in the lifecycle, and where to place the Network Boundary." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "network-boundary",
			children: "Network Boundary"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In web development, the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Network Boundary" }),
			" is a conceptual line that separates the different environments. For example, the client and the server, or the server and the data store."
		] }),
		"\n",
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In React, you choose where to place the client-server network boundary wherever it makes the most sense." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Behind the scenes, the work is split into two parts: the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "client module graph" }),
			" and the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "server module graph" }),
			". The server module graph contains all the components that are rendered on the server, and the client module graph contains all components that are rendered on the client."
		] }),
		"\n",
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "It may be helpful to think about module graphs as a visual representation of how files in your application depend on each other." }),
		"\n",
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can use the React ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "\"use client\"" }),
			" convention to define the boundary. There's also a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "\"use server\"" }),
			" convention, which tells React to do some computational work on the server."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "building-hybrid-applications",
			children: "Building Hybrid Applications"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When working in these environments, it's helpful to think of the flow of the code in your application as ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "unidirectional" }),
			". In other words, during a response, your application code flows in one direction: from the server to the client."
		] }),
		"\n",
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you need to access the server from the client, you send a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "new" }),
			" request to the server rather than re-use the same request. This makes it easier to understand where to render your components and where to place the Network Boundary."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In practice, this model encourages developers to think about what they want to execute on the server first, before sending the result to the client and making the application interactive." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This concept will become clearer when we look at how you can ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/building-your-application/rendering/composition-patterns",
				children: "interleave client and server components"
			}),
			" in the same component tree."
		] })
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
export { toc as a, structuredData as i, _03_rendering_exports as n, frontmatter as r, MDXContent as t };
