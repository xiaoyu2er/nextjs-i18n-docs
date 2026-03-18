import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/07-edge-CCsAicU_.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var _07_edge_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Edge Runtime",
	"description": "API Reference for the Edge Runtime."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Next.js has two server runtimes you can use in your application:"
		},
		{
			"heading": void 0,
			"content": "The **Node.js Runtime** (default), which has access to all Node.js APIs and is used for rendering your application."
		},
		{
			"heading": void 0,
			"content": "The **Edge Runtime** which contains a more limited set of APIs, used in Middleware."
		},
		{
			"heading": "caveats",
			"content": "The Edge Runtime does not support all Node.js APIs. Some packages may not work as expected."
		},
		{
			"heading": "caveats",
			"content": "The Edge Runtime does not support Incremental Static Regeneration (ISR)."
		},
		{
			"heading": "caveats",
			"content": "Both runtimes can support streaming depending on your deployment adapter."
		},
		{
			"heading": "reference",
			"content": "The Edge Runtime supports the following APIs:"
		},
		{
			"heading": "network-apis",
			"content": "API"
		},
		{
			"heading": "network-apis",
			"content": "Description"
		},
		{
			"heading": "network-apis",
			"content": "`Blob`"
		},
		{
			"heading": "network-apis",
			"content": "Represents a blob"
		},
		{
			"heading": "network-apis",
			"content": "`fetch`"
		},
		{
			"heading": "network-apis",
			"content": "Fetches a resource"
		},
		{
			"heading": "network-apis",
			"content": "`FetchEvent`"
		},
		{
			"heading": "network-apis",
			"content": "Represents a fetch event"
		},
		{
			"heading": "network-apis",
			"content": "`File`"
		},
		{
			"heading": "network-apis",
			"content": "Represents a file"
		},
		{
			"heading": "network-apis",
			"content": "`FormData`"
		},
		{
			"heading": "network-apis",
			"content": "Represents form data"
		},
		{
			"heading": "network-apis",
			"content": "`Headers`"
		},
		{
			"heading": "network-apis",
			"content": "Represents HTTP headers"
		},
		{
			"heading": "network-apis",
			"content": "`Request`"
		},
		{
			"heading": "network-apis",
			"content": "Represents an HTTP request"
		},
		{
			"heading": "network-apis",
			"content": "`Response`"
		},
		{
			"heading": "network-apis",
			"content": "Represents an HTTP response"
		},
		{
			"heading": "network-apis",
			"content": "`URLSearchParams`"
		},
		{
			"heading": "network-apis",
			"content": "Represents URL search parameters"
		},
		{
			"heading": "network-apis",
			"content": "`WebSocket`"
		},
		{
			"heading": "network-apis",
			"content": "Represents a websocket connection"
		},
		{
			"heading": "encoding-apis",
			"content": "API"
		},
		{
			"heading": "encoding-apis",
			"content": "Description"
		},
		{
			"heading": "encoding-apis",
			"content": "`atob`"
		},
		{
			"heading": "encoding-apis",
			"content": "Decodes a base-64 encoded string"
		},
		{
			"heading": "encoding-apis",
			"content": "`btoa`"
		},
		{
			"heading": "encoding-apis",
			"content": "Encodes a string in base-64"
		},
		{
			"heading": "encoding-apis",
			"content": "`TextDecoder`"
		},
		{
			"heading": "encoding-apis",
			"content": "Decodes a Uint8Array into a string"
		},
		{
			"heading": "encoding-apis",
			"content": "`TextDecoderStream`"
		},
		{
			"heading": "encoding-apis",
			"content": "Chainable decoder for streams"
		},
		{
			"heading": "encoding-apis",
			"content": "`TextEncoder`"
		},
		{
			"heading": "encoding-apis",
			"content": "Encodes a string into a Uint8Array"
		},
		{
			"heading": "encoding-apis",
			"content": "`TextEncoderStream`"
		},
		{
			"heading": "encoding-apis",
			"content": "Chainable encoder for streams"
		},
		{
			"heading": "stream-apis",
			"content": "API"
		},
		{
			"heading": "stream-apis",
			"content": "Description"
		},
		{
			"heading": "stream-apis",
			"content": "`ReadableStream`"
		},
		{
			"heading": "stream-apis",
			"content": "Represents a readable stream"
		},
		{
			"heading": "stream-apis",
			"content": "`ReadableStreamBYOBReader`"
		},
		{
			"heading": "stream-apis",
			"content": "Represents a reader of a ReadableStream"
		},
		{
			"heading": "stream-apis",
			"content": "`ReadableStreamDefaultReader`"
		},
		{
			"heading": "stream-apis",
			"content": "Represents a reader of a ReadableStream"
		},
		{
			"heading": "stream-apis",
			"content": "`TransformStream`"
		},
		{
			"heading": "stream-apis",
			"content": "Represents a transform stream"
		},
		{
			"heading": "stream-apis",
			"content": "`WritableStream`"
		},
		{
			"heading": "stream-apis",
			"content": "Represents a writable stream"
		},
		{
			"heading": "stream-apis",
			"content": "`WritableStreamDefaultWriter`"
		},
		{
			"heading": "stream-apis",
			"content": "Represents a writer of a WritableStream"
		},
		{
			"heading": "crypto-apis",
			"content": "API"
		},
		{
			"heading": "crypto-apis",
			"content": "Description"
		},
		{
			"heading": "crypto-apis",
			"content": "`crypto`"
		},
		{
			"heading": "crypto-apis",
			"content": "Provides access to the cryptographic functionality of the platform"
		},
		{
			"heading": "crypto-apis",
			"content": "`CryptoKey`"
		},
		{
			"heading": "crypto-apis",
			"content": "Represents a cryptographic key"
		},
		{
			"heading": "crypto-apis",
			"content": "`SubtleCrypto`"
		},
		{
			"heading": "crypto-apis",
			"content": "Provides access to common cryptographic primitives, like hashing, signing, encryption or decryption"
		},
		{
			"heading": "web-standard-apis",
			"content": "API"
		},
		{
			"heading": "web-standard-apis",
			"content": "Description"
		},
		{
			"heading": "web-standard-apis",
			"content": "`AbortController`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Allows you to abort one or more DOM requests as and when desired"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Array`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents an array of values"
		},
		{
			"heading": "web-standard-apis",
			"content": "`ArrayBuffer`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a generic, fixed-length raw binary data buffer"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Atomics`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Provides atomic operations as static methods"
		},
		{
			"heading": "web-standard-apis",
			"content": "`BigInt`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a whole number with arbitrary precision"
		},
		{
			"heading": "web-standard-apis",
			"content": "`BigInt64Array`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a typed array of 64-bit signed integers"
		},
		{
			"heading": "web-standard-apis",
			"content": "`BigUint64Array`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a typed array of 64-bit unsigned integers"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Boolean`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a logical entity and can have two values: `true` and `false`"
		},
		{
			"heading": "web-standard-apis",
			"content": "`clearInterval`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Cancels a timed, repeating action which was previously established by a call to `setInterval()`"
		},
		{
			"heading": "web-standard-apis",
			"content": "`clearTimeout`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Cancels a timed, repeating action which was previously established by a call to `setTimeout()`"
		},
		{
			"heading": "web-standard-apis",
			"content": "`console`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Provides access to the browser's debugging console"
		},
		{
			"heading": "web-standard-apis",
			"content": "`DataView`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a generic view of an `ArrayBuffer`"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Date`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a single moment in time in a platform-independent format"
		},
		{
			"heading": "web-standard-apis",
			"content": "`decodeURI`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Decodes a Uniform Resource Identifier (URI) previously created by `encodeURI` or by a similar routine"
		},
		{
			"heading": "web-standard-apis",
			"content": "`decodeURIComponent`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Decodes a Uniform Resource Identifier (URI) component previously created by `encodeURIComponent` or by a similar routine"
		},
		{
			"heading": "web-standard-apis",
			"content": "`DOMException`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents an error that occurs in the DOM"
		},
		{
			"heading": "web-standard-apis",
			"content": "`encodeURI`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character"
		},
		{
			"heading": "web-standard-apis",
			"content": "`encodeURIComponent`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Error`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents an error when trying to execute a statement or accessing a property"
		},
		{
			"heading": "web-standard-apis",
			"content": "`EvalError`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents an error that occurs regarding the global function `eval()`"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Float32Array`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a typed array of 32-bit floating point numbers"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Float64Array`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a typed array of 64-bit floating point numbers"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Function`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a function"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Infinity`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents the mathematical Infinity value"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Int8Array`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a typed array of 8-bit signed integers"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Int16Array`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a typed array of 16-bit signed integers"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Int32Array`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a typed array of 32-bit signed integers"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Intl`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Provides access to internationalization and localization functionality"
		},
		{
			"heading": "web-standard-apis",
			"content": "`isFinite`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Determines whether a value is a finite number"
		},
		{
			"heading": "web-standard-apis",
			"content": "`isNaN`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Determines whether a value is `NaN` or not"
		},
		{
			"heading": "web-standard-apis",
			"content": "`JSON`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Provides functionality to convert JavaScript values to and from the JSON format"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Map`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a collection of values, where each value may occur only once"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Math`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Provides access to mathematical functions and constants"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Number`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a numeric value"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Object`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents the object that is the base of all JavaScript objects"
		},
		{
			"heading": "web-standard-apis",
			"content": "`parseFloat`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Parses a string argument and returns a floating point number"
		},
		{
			"heading": "web-standard-apis",
			"content": "`parseInt`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Parses a string argument and returns an integer of the specified radix"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Promise`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents the eventual completion (or failure) of an asynchronous operation, and its resulting value"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Proxy`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents an object that is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc)"
		},
		{
			"heading": "web-standard-apis",
			"content": "`queueMicrotask`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Queues a microtask to be executed"
		},
		{
			"heading": "web-standard-apis",
			"content": "`RangeError`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents an error when a value is not in the set or range of allowed values"
		},
		{
			"heading": "web-standard-apis",
			"content": "`ReferenceError`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents an error when a non-existent variable is referenced"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Reflect`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Provides methods for interceptable JavaScript operations"
		},
		{
			"heading": "web-standard-apis",
			"content": "`RegExp`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a regular expression, allowing you to match combinations of characters"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Set`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a collection of values, where each value may occur only once"
		},
		{
			"heading": "web-standard-apis",
			"content": "`setInterval`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Repeatedly calls a function, with a fixed time delay between each call"
		},
		{
			"heading": "web-standard-apis",
			"content": "`setTimeout`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Calls a function or evaluates an expression after a specified number of milliseconds"
		},
		{
			"heading": "web-standard-apis",
			"content": "`SharedArrayBuffer`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a generic, fixed-length raw binary data buffer"
		},
		{
			"heading": "web-standard-apis",
			"content": "`String`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a sequence of characters"
		},
		{
			"heading": "web-standard-apis",
			"content": "`structuredClone`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Creates a deep copy of a value"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Symbol`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a unique and immutable data type that is used as the key of an object property"
		},
		{
			"heading": "web-standard-apis",
			"content": "`SyntaxError`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents an error when trying to interpret syntactically invalid code"
		},
		{
			"heading": "web-standard-apis",
			"content": "`TypeError`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents an error when a value is not of the expected type"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Uint8Array`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a typed array of 8-bit unsigned integers"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Uint8ClampedArray`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a typed array of 8-bit unsigned integers clamped to 0-255"
		},
		{
			"heading": "web-standard-apis",
			"content": "`Uint32Array`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a typed array of 32-bit unsigned integers"
		},
		{
			"heading": "web-standard-apis",
			"content": "`URIError`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents an error when a global URI handling function was used in a wrong way"
		},
		{
			"heading": "web-standard-apis",
			"content": "`URL`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents an object providing static methods used for creating object URLs"
		},
		{
			"heading": "web-standard-apis",
			"content": "`URLPattern`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a URL pattern"
		},
		{
			"heading": "web-standard-apis",
			"content": "`URLSearchParams`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a collection of key/value pairs"
		},
		{
			"heading": "web-standard-apis",
			"content": "`WeakMap`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a collection of key/value pairs in which the keys are weakly referenced"
		},
		{
			"heading": "web-standard-apis",
			"content": "`WeakSet`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Represents a collection of objects in which each object may occur only once"
		},
		{
			"heading": "web-standard-apis",
			"content": "`WebAssembly`"
		},
		{
			"heading": "web-standard-apis",
			"content": "Provides access to WebAssembly"
		},
		{
			"heading": "nextjs-specific-polyfills",
			"content": "`AsyncLocalStorage`"
		},
		{
			"heading": "environment-variables",
			"content": "You can use `process.env` to access Environment Variables for both `next dev` and `next build`."
		},
		{
			"heading": "unsupported-apis",
			"content": "The Edge Runtime has some restrictions including:"
		},
		{
			"heading": "unsupported-apis",
			"content": "Native Node.js APIs **are not supported**. For example, you can't read or write to the filesystem."
		},
		{
			"heading": "unsupported-apis",
			"content": "`node_modules` *can* be used, as long as they implement ES Modules and do not use native Node.js APIs."
		},
		{
			"heading": "unsupported-apis",
			"content": "Calling `require` directly is **not allowed**. Use ES Modules instead."
		},
		{
			"heading": "unsupported-apis",
			"content": "The following JavaScript language features are disabled, and &#x2A;*will not work:**"
		},
		{
			"heading": "unsupported-apis",
			"content": "API"
		},
		{
			"heading": "unsupported-apis",
			"content": "Description"
		},
		{
			"heading": "unsupported-apis",
			"content": "`eval`"
		},
		{
			"heading": "unsupported-apis",
			"content": "Evaluates JavaScript code represented as a string"
		},
		{
			"heading": "unsupported-apis",
			"content": "`new Function(evalString)`"
		},
		{
			"heading": "unsupported-apis",
			"content": "Creates a new function with the code provided as an argument"
		},
		{
			"heading": "unsupported-apis",
			"content": "`WebAssembly.compile`"
		},
		{
			"heading": "unsupported-apis",
			"content": "Compiles a WebAssembly module from a buffer source"
		},
		{
			"heading": "unsupported-apis",
			"content": "`WebAssembly.instantiate`"
		},
		{
			"heading": "unsupported-apis",
			"content": "Compiles and instantiates a WebAssembly module from a buffer source"
		},
		{
			"heading": "unsupported-apis",
			"content": "In rare cases, your code could contain (or import) some dynamic code evaluation statements which *can not be reached at runtime* and which can not be removed by treeshaking.\nYou can relax the check to allow specific files with your Middleware configuration:"
		},
		{
			"heading": "unsupported-apis",
			"content": "`unstable_allowDynamic` is a glob, or an array of globs, ignoring dynamic code evaluation for specific files. The globs are relative to your application root folder."
		},
		{
			"heading": "unsupported-apis",
			"content": "Be warned that if these statements are executed on the Edge, *they will throw and cause a runtime error*."
		}
	],
	"headings": [
		{
			"id": "caveats",
			"content": "Caveats"
		},
		{
			"id": "reference",
			"content": "Reference"
		},
		{
			"id": "network-apis",
			"content": "Network APIs"
		},
		{
			"id": "encoding-apis",
			"content": "Encoding APIs"
		},
		{
			"id": "stream-apis",
			"content": "Stream APIs"
		},
		{
			"id": "crypto-apis",
			"content": "Crypto APIs"
		},
		{
			"id": "web-standard-apis",
			"content": "Web Standard APIs"
		},
		{
			"id": "nextjs-specific-polyfills",
			"content": "Next.js Specific Polyfills"
		},
		{
			"id": "environment-variables",
			"content": "Environment Variables"
		},
		{
			"id": "unsupported-apis",
			"content": "Unsupported APIs"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#caveats",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Caveats" })
	},
	{
		depth: 2,
		url: "#reference",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Reference" })
	},
	{
		depth: 3,
		url: "#network-apis",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Network APIs" })
	},
	{
		depth: 3,
		url: "#encoding-apis",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Encoding APIs" })
	},
	{
		depth: 3,
		url: "#stream-apis",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Stream APIs" })
	},
	{
		depth: 3,
		url: "#crypto-apis",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Crypto APIs" })
	},
	{
		depth: 3,
		url: "#web-standard-apis",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Web Standard APIs" })
	},
	{
		depth: 3,
		url: "#nextjs-specific-polyfills",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Next.js Specific Polyfills" })
	},
	{
		depth: 3,
		url: "#environment-variables",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Environment Variables" })
	},
	{
		depth: 3,
		url: "#unsupported-apis",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Unsupported APIs" })
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
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Next.js has two server runtimes you can use in your application:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Node.js Runtime" }),
				" (default), which has access to all Node.js APIs and is used for rendering your application."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Edge Runtime" }),
				" which contains a more limited ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#reference",
					children: "set of APIs"
				}),
				", used in ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/middleware",
					children: "Middleware"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "caveats",
			children: "Caveats"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The Edge Runtime does not support all Node.js APIs. Some packages may not work as expected." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The Edge Runtime does not support Incremental Static Regeneration (ISR)." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Both runtimes can support ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/file-conventions/loading",
					children: "streaming"
				}),
				" depending on your deployment adapter."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "reference",
			children: "Reference"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Edge Runtime supports the following APIs:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "network-apis",
			children: "Network APIs"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "API" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/Blob",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Blob" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a blob" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/Fetch_API",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "fetch" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Fetches a resource" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/FetchEvent",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "FetchEvent" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a fetch event" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/File",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "File" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a file" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/FormData",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "FormData" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents form data" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/Headers",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Headers" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents HTTP headers" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/Request",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Request" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents an HTTP request" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/Response",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Response" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents an HTTP response" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/URLSearchParams",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "URLSearchParams" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents URL search parameters" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/WebSocket",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "WebSocket" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a websocket connection" })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "encoding-apis",
			children: "Encoding APIs"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "API" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/en-US/docs/Web/API/atob",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "atob" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Decodes a base-64 encoded string" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/en-US/docs/Web/API/btoa",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "btoa" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Encodes a string in base-64" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/TextDecoder",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "TextDecoder" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Decodes a Uint8Array into a string" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/TextDecoderStream",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "TextDecoderStream" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Chainable decoder for streams" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/TextEncoder",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "TextEncoder" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Encodes a string into a Uint8Array" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/TextEncoderStream",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "TextEncoderStream" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Chainable encoder for streams" })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "stream-apis",
			children: "Stream APIs"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "API" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/ReadableStream",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "ReadableStream" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a readable stream" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "ReadableStreamBYOBReader" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a reader of a ReadableStream" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultReader",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "ReadableStreamDefaultReader" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a reader of a ReadableStream" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/TransformStream",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "TransformStream" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a transform stream" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/WritableStream",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "WritableStream" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a writable stream" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "WritableStreamDefaultWriter" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a writer of a WritableStream" })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "crypto-apis",
			children: "Crypto APIs"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "API" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/Window/crypto",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "crypto" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Provides access to the cryptographic functionality of the platform" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/CryptoKey",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "CryptoKey" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a cryptographic key" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/SubtleCrypto",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "SubtleCrypto" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Provides access to common cryptographic primitives, like hashing, signing, encryption or decryption" })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "web-standard-apis",
			children: "Web Standard APIs"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "API" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/AbortController",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "AbortController" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Allows you to abort one or more DOM requests as and when desired" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Array" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents an array of values" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "ArrayBuffer" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a generic, fixed-length raw binary data buffer" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Atomics",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Atomics" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Provides atomic operations as static methods" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigInt",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "BigInt" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a whole number with arbitrary precision" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "BigInt64Array" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a typed array of 64-bit signed integers" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "BigUint64Array" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a typed array of 64-bit unsigned integers" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Boolean" })
			}) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
				"Represents a logical entity and can have two values: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "true" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "false" })
			] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "clearInterval" })
			}) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: ["Cancels a timed, repeating action which was previously established by a call to ", (0, import_jsx_runtime.jsx)(_components.code, { children: "setInterval()" })] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "clearTimeout" })
			}) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: ["Cancels a timed, repeating action which was previously established by a call to ", (0, import_jsx_runtime.jsx)(_components.code, { children: "setTimeout()" })] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/Console",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "console" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Provides access to the browser's debugging console" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/DataView",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "DataView" })
			}) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: ["Represents a generic view of an ", (0, import_jsx_runtime.jsx)(_components.code, { children: "ArrayBuffer" })] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Date" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a single moment in time in a platform-independent format" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/decodeURI",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "decodeURI" })
			}) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
				"Decodes a Uniform Resource Identifier (URI) previously created by ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "encodeURI" }),
				" or by a similar routine"
			] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "decodeURIComponent" })
			}) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
				"Decodes a Uniform Resource Identifier (URI) component previously created by ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "encodeURIComponent" }),
				" or by a similar routine"
			] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/DOMException",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "DOMException" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents an error that occurs in the DOM" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/encodeURI",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "encodeURI" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "encodeURIComponent" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Error" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents an error when trying to execute a statement or accessing a property" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/EvalError",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "EvalError" })
			}) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: ["Represents an error that occurs regarding the global function ", (0, import_jsx_runtime.jsx)(_components.code, { children: "eval()" })] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Float32Array" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a typed array of 32-bit floating point numbers" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float64Array",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Float64Array" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a typed array of 64-bit floating point numbers" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Function" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a function" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Infinity",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Infinity" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents the mathematical Infinity value" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int8Array",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Int8Array" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a typed array of 8-bit signed integers" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int16Array",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Int16Array" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a typed array of 16-bit signed integers" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int32Array",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Int32Array" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a typed array of 32-bit signed integers" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Intl" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Provides access to internationalization and localization functionality" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/isFinite",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "isFinite" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Determines whether a value is a finite number" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/isNaN",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "isNaN" })
			}) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
				"Determines whether a value is ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NaN" }),
				" or not"
			] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "JSON" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Provides functionality to convert JavaScript values to and from the JSON format" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Map" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a collection of values, where each value may occur only once" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Math" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Provides access to mathematical functions and constants" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Number" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a numeric value" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Object" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents the object that is the base of all JavaScript objects" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/parseFloat",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "parseFloat" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Parses a string argument and returns a floating point number" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/parseInt",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "parseInt" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Parses a string argument and returns an integer of the specified radix" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Promise" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents the eventual completion (or failure) of an asynchronous operation, and its resulting value" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Proxy" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents an object that is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc)" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/queueMicrotask",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "queueMicrotask" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Queues a microtask to be executed" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RangeError",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "RangeError" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents an error when a value is not in the set or range of allowed values" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "ReferenceError" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents an error when a non-existent variable is referenced" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Reflect" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Provides methods for interceptable JavaScript operations" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "RegExp" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a regular expression, allowing you to match combinations of characters" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Set" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a collection of values, where each value may occur only once" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/setInterval",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "setInterval" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Repeatedly calls a function, with a fixed time delay between each call" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/setTimeout",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "setTimeout" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Calls a function or evaluates an expression after a specified number of milliseconds" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "SharedArrayBuffer" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a generic, fixed-length raw binary data buffer" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "String" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a sequence of characters" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/Web_Workers_API/Structured_clone_algorithm",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "structuredClone" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Creates a deep copy of a value" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Symbol" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a unique and immutable data type that is used as the key of an object property" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "SyntaxError" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents an error when trying to interpret syntactically invalid code" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "TypeError" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents an error when a value is not of the expected type" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Uint8Array" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a typed array of 8-bit unsigned integers" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Uint8ClampedArray" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a typed array of 8-bit unsigned integers clamped to 0-255" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Uint32Array" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a typed array of 32-bit unsigned integers" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/URIError",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "URIError" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents an error when a global URI handling function was used in a wrong way" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/URL",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "URL" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents an object providing static methods used for creating object URLs" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/URLPattern",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "URLPattern" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a URL pattern" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/API/URLSearchParams",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "URLSearchParams" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a collection of key/value pairs" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakMap",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "WeakMap" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a collection of key/value pairs in which the keys are weakly referenced" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakSet",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "WeakSet" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Represents a collection of objects in which each object may occur only once" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "WebAssembly" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Provides access to WebAssembly" })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "nextjs-specific-polyfills",
			children: "Next.js Specific Polyfills"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nodejs.org/api/async_context.html#class-asynclocalstorage",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "AsyncLocalStorage" })
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "environment-variables",
			children: "Environment Variables"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "process.env" }),
			" to access ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/guides/environment-variables",
				children: "Environment Variables"
			}),
			" for both ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "unsupported-apis",
			children: "Unsupported APIs"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Edge Runtime has some restrictions including:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Native Node.js APIs ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "are not supported" }),
				". For example, you can't read or write to the filesystem."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "node_modules" }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.em, { children: "can" }),
				" be used, as long as they implement ES Modules and do not use native Node.js APIs."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Calling ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "require" }),
				" directly is ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "not allowed" }),
				". Use ES Modules instead."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: ["The following JavaScript language features are disabled, and ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "will not work:" })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "API" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/eval",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "eval" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Evaluates JavaScript code represented as a string" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "new Function(evalString)" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Creates a new function with the code provided as an argument" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compile",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "WebAssembly.compile" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Compiles a WebAssembly module from a buffer source" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "WebAssembly.instantiate" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Compiles and instantiates a WebAssembly module from a buffer source" })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In rare cases, your code could contain (or import) some dynamic code evaluation statements which ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "can not be reached at runtime" }),
			" and which can not be removed by treeshaking.\nYou can relax the check to allow specific files with your Middleware configuration:"
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
			title: "middleware.ts",
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
						children: "  unstable_allowDynamic: ["
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "    // allows a single file"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: "    '/lib/utilities.js'"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ","
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
						children: "    // use a glob to allow anything in the function-bind 3rd party module"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: "    '**/node_modules/function-bind/**'"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ","
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
						children: "  ],"
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
			(0, import_jsx_runtime.jsx)(_components.code, { children: "unstable_allowDynamic" }),
			" is a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/micromatch/micromatch#matching-features",
				children: "glob"
			}),
			", or an array of globs, ignoring dynamic code evaluation for specific files. The globs are relative to your application root folder."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Be warned that if these statements are executed on the Edge, ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "they will throw and cause a runtime error" }),
			"."
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
//#endregion
export { toc as a, structuredData as i, _07_edge_exports as n, frontmatter as r, MDXContent as t };
