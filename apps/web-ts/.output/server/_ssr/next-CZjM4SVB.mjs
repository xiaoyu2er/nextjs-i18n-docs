import { r as __toESM } from "../_runtime.mjs";
import { n as __exportAll } from "./chunk-BnRpC7BT.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/next-CZjM4SVB.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var next_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "next CLI",
	"description": "Learn how to run and build your application with the Next.js CLI."
};
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "The Next.js CLI allows you to develop, build, start your application, and more."
		},
		{
			"heading": void 0,
			"content": "Basic usage:"
		},
		{
			"heading": "reference",
			"content": "The following options are available:"
		},
		{
			"heading": "reference",
			"content": "Options"
		},
		{
			"heading": "reference",
			"content": "Description"
		},
		{
			"heading": "reference",
			"content": "`-h` or `--help`"
		},
		{
			"heading": "reference",
			"content": "Shows all available options"
		},
		{
			"heading": "reference",
			"content": "`-v` or `--version`"
		},
		{
			"heading": "reference",
			"content": "Outputs the Next.js version number"
		},
		{
			"heading": "commands",
			"content": "The following commands are available:"
		},
		{
			"heading": "commands",
			"content": "Command"
		},
		{
			"heading": "commands",
			"content": "Description"
		},
		{
			"heading": "commands",
			"content": "`dev`"
		},
		{
			"heading": "commands",
			"content": "Starts Next.js in development mode with Hot Module Reloading, error reporting, and more."
		},
		{
			"heading": "commands",
			"content": "`build`"
		},
		{
			"heading": "commands",
			"content": "Creates an optimized production build of your application. Displaying information about each route."
		},
		{
			"heading": "commands",
			"content": "`start`"
		},
		{
			"heading": "commands",
			"content": "Starts Next.js in production mode. The application should be compiled with `next build` first."
		},
		{
			"heading": "commands",
			"content": "`info`"
		},
		{
			"heading": "commands",
			"content": "Prints relevant details about the current system which can be used to report Next.js bugs."
		},
		{
			"heading": "commands",
			"content": "`lint`"
		},
		{
			"heading": "commands",
			"content": "Runs ESLint for all files in the `/src`, `/app`, `/pages`, `/components`, and `/lib` directories. It also provides a guided setup to install any required dependencies if ESLint it is not already configured in your application."
		},
		{
			"heading": "commands",
			"content": "`telemetry`"
		},
		{
			"heading": "commands",
			"content": "Allows you to enable or disable Next.js' completely anonymous telemetry collection."
		},
		{
			"heading": "commands",
			"content": "`typegen`"
		},
		{
			"heading": "commands",
			"content": "Generates TypeScript definitions for routes, pages, layouts, and route handlers without running a full build."
		},
		{
			"heading": "commands",
			"content": "> **Good to know**: Running `next` without a command is an alias for `next dev`."
		},
		{
			"heading": "next-dev-options",
			"content": "`next dev` starts the application in development mode with Hot Module Reloading (HMR), error reporting, and more. The following options are available when running `next dev`:"
		},
		{
			"heading": "next-dev-options",
			"content": "Option"
		},
		{
			"heading": "next-dev-options",
			"content": "Description"
		},
		{
			"heading": "next-dev-options",
			"content": "`-h, --help`"
		},
		{
			"heading": "next-dev-options",
			"content": "Show all available options."
		},
		{
			"heading": "next-dev-options",
			"content": "`[directory]`"
		},
		{
			"heading": "next-dev-options",
			"content": "A directory in which to build the application. If not provided, current directory is used."
		},
		{
			"heading": "next-dev-options",
			"content": "`--turbopack`"
		},
		{
			"heading": "next-dev-options",
			"content": "Starts development mode using Turbopack. Also available as `--turbo`."
		},
		{
			"heading": "next-dev-options",
			"content": "`-p` or `--port <port>`"
		},
		{
			"heading": "next-dev-options",
			"content": "Specify a port number on which to start the application. Default: 3000, env: PORT"
		},
		{
			"heading": "next-dev-options",
			"content": "`-H`or `--hostname <hostname>`"
		},
		{
			"heading": "next-dev-options",
			"content": "Specify a hostname on which to start the application. Useful for making the application available for other devices on the network. Default: 0.0.0.0"
		},
		{
			"heading": "next-dev-options",
			"content": "`--experimental-https`"
		},
		{
			"heading": "next-dev-options",
			"content": "Starts the server with HTTPS and generates a self-signed certificate."
		},
		{
			"heading": "next-dev-options",
			"content": "`--experimental-https-key <path>`"
		},
		{
			"heading": "next-dev-options",
			"content": "Path to a HTTPS key file."
		},
		{
			"heading": "next-dev-options",
			"content": "`--experimental-https-cert <path>`"
		},
		{
			"heading": "next-dev-options",
			"content": "Path to a HTTPS certificate file."
		},
		{
			"heading": "next-dev-options",
			"content": "`--experimental-https-ca <path>`"
		},
		{
			"heading": "next-dev-options",
			"content": "Path to a HTTPS certificate authority file."
		},
		{
			"heading": "next-dev-options",
			"content": "`--experimental-upload-trace <traceUrl>`"
		},
		{
			"heading": "next-dev-options",
			"content": "Reports a subset of the debugging trace to a remote HTTP URL."
		},
		{
			"heading": "next-build-options",
			"content": "`next build` creates an optimized production build of your application. The output displays information about each route. For example:"
		},
		{
			"heading": "next-build-options",
			"content": "**Size**: The size of assets downloaded when navigating to the page client-side. The size for each route only includes its dependencies."
		},
		{
			"heading": "next-build-options",
			"content": "**First Load JS**: The size of assets downloaded when visiting the page from the server. The amount of JS shared by all is shown as a separate metric."
		},
		{
			"heading": "next-build-options",
			"content": "Both of these values are **compressed with gzip**. The first load is indicated by green, yellow, or red. Aim for green for performant applications."
		},
		{
			"heading": "next-build-options",
			"content": "The following options are available for the `next build` command:"
		},
		{
			"heading": "next-build-options",
			"content": "Option"
		},
		{
			"heading": "next-build-options",
			"content": "Description"
		},
		{
			"heading": "next-build-options",
			"content": "`-h, --help`"
		},
		{
			"heading": "next-build-options",
			"content": "Show all available options."
		},
		{
			"heading": "next-build-options",
			"content": "`[directory]`"
		},
		{
			"heading": "next-build-options",
			"content": "A directory on which to build the application. If not provided, the current directory will be used."
		},
		{
			"heading": "next-build-options",
			"content": "`--turbopack`"
		},
		{
			"heading": "next-build-options",
			"content": "Build using Turbopack (beta). Also available as `--turbo`."
		},
		{
			"heading": "next-build-options",
			"content": "`-d` or `--debug`"
		},
		{
			"heading": "next-build-options",
			"content": "Enables a more verbose build output. With this flag enabled additional build output like rewrites, redirects, and headers will be shown."
		},
		{
			"heading": "next-build-options",
			"content": "`--profile`"
		},
		{
			"heading": "next-build-options",
			"content": "Enables production profiling for React."
		},
		{
			"heading": "next-build-options",
			"content": "`--no-lint`"
		},
		{
			"heading": "next-build-options",
			"content": "Disables linting. &#x2A;Note: linting will be removed from `next build` in Next 16. If you're using Next 15.5+ with a linter other than `eslint`, linting during build will not occur.*"
		},
		{
			"heading": "next-build-options",
			"content": "`--no-mangling`"
		},
		{
			"heading": "next-build-options",
			"content": "Disables mangling. This may affect performance and should only be used for debugging purposes."
		},
		{
			"heading": "next-build-options",
			"content": "`--experimental-app-only`"
		},
		{
			"heading": "next-build-options",
			"content": "Builds only App Router routes."
		},
		{
			"heading": "next-build-options",
			"content": "`--experimental-build-mode [mode]`"
		},
		{
			"heading": "next-build-options",
			"content": "Uses an experimental build mode. (choices: \"compile\", \"generate\", default: \"default\")"
		},
		{
			"heading": "next-build-options",
			"content": "`--debug-prerender`"
		},
		{
			"heading": "next-build-options",
			"content": "Debug prerender errors in development."
		},
		{
			"heading": "next-start-options",
			"content": "`next start` starts the application in production mode. The application should be compiled with `next build` first."
		},
		{
			"heading": "next-start-options",
			"content": "The following options are available for the `next start` command:"
		},
		{
			"heading": "next-start-options",
			"content": "Option"
		},
		{
			"heading": "next-start-options",
			"content": "Description"
		},
		{
			"heading": "next-start-options",
			"content": "`-h` or `--help`"
		},
		{
			"heading": "next-start-options",
			"content": "Show all available options."
		},
		{
			"heading": "next-start-options",
			"content": "`[directory]`"
		},
		{
			"heading": "next-start-options",
			"content": "A directory on which to start the application. If no directory is provided, the current directory will be used."
		},
		{
			"heading": "next-start-options",
			"content": "`-p` or `--port <port>`"
		},
		{
			"heading": "next-start-options",
			"content": "Specify a port number on which to start the application. (default: 3000, env: PORT)"
		},
		{
			"heading": "next-start-options",
			"content": "`-H` or `--hostname <hostname>`"
		},
		{
			"heading": "next-start-options",
			"content": "Specify a hostname on which to start the application (default: 0.0.0.0)."
		},
		{
			"heading": "next-start-options",
			"content": "`--keepAliveTimeout <keepAliveTimeout>`"
		},
		{
			"heading": "next-start-options",
			"content": "Specify the maximum amount of milliseconds to wait before closing the inactive connections."
		},
		{
			"heading": "next-info-options",
			"content": "`next info` prints relevant details about the current system which can be used to report Next.js bugs when opening a GitHub issue. This information includes Operating System platform/arch/version, Binaries (Node.js, npm, Yarn, pnpm), package versions (`next`, `react`, `react-dom`), and more."
		},
		{
			"heading": "next-info-options",
			"content": "The output should look like this:"
		},
		{
			"heading": "next-info-options",
			"content": "The following options are available for the `next info` command:"
		},
		{
			"heading": "next-info-options",
			"content": "Option"
		},
		{
			"heading": "next-info-options",
			"content": "Description"
		},
		{
			"heading": "next-info-options",
			"content": "`-h` or `--help`"
		},
		{
			"heading": "next-info-options",
			"content": "Show all available options"
		},
		{
			"heading": "next-info-options",
			"content": "`--verbose`"
		},
		{
			"heading": "next-info-options",
			"content": "Collects additional information for debugging."
		},
		{
			"heading": "next-lint-options",
			"content": "> **Warning**: This option is deprecated and will be removed in Next 16. A codemod is available to migrate to ESLint CLI."
		},
		{
			"heading": "next-lint-options",
			"content": "`next lint` runs ESLint for all files in the `pages/`, `app/`, `components/`, `lib/`, and `src/` directories. It also provides a guided setup to install any required dependencies if ESLint is not already configured in your application."
		},
		{
			"heading": "next-lint-options",
			"content": "The following options are available for the `next lint` command:"
		},
		{
			"heading": "next-lint-options",
			"content": "Option"
		},
		{
			"heading": "next-lint-options",
			"content": "Description"
		},
		{
			"heading": "next-lint-options",
			"content": "`[directory]`"
		},
		{
			"heading": "next-lint-options",
			"content": "A base directory on which to lint the application. If not provided, the current directory will be used."
		},
		{
			"heading": "next-lint-options",
			"content": "`-d, --dir, <dirs...>`"
		},
		{
			"heading": "next-lint-options",
			"content": "Include directory, or directories, to run ESLint."
		},
		{
			"heading": "next-lint-options",
			"content": "`--file, <files...>`"
		},
		{
			"heading": "next-lint-options",
			"content": "Include file, or files, to run ESLint."
		},
		{
			"heading": "next-lint-options",
			"content": "`--ext, [exts...]`"
		},
		{
			"heading": "next-lint-options",
			"content": "Specify JavaScript file extensions. (default: \\[\".js\", \".mjs\", \".cjs\", \".jsx\", \".ts\", \".mts\", \".cts\", \".tsx\"])"
		},
		{
			"heading": "next-lint-options",
			"content": "`-c, --config, <config>`"
		},
		{
			"heading": "next-lint-options",
			"content": "Uses this configuration file, overriding all other configuration options."
		},
		{
			"heading": "next-lint-options",
			"content": "`--resolve-plugins-relative-to, <rprt>`"
		},
		{
			"heading": "next-lint-options",
			"content": "Specify a directory where plugins should be resolved from."
		},
		{
			"heading": "next-lint-options",
			"content": "`--strict`"
		},
		{
			"heading": "next-lint-options",
			"content": "Creates a `.eslintrc.json` file using the Next.js strict configuration."
		},
		{
			"heading": "next-lint-options",
			"content": "`--rulesdir, <rulesdir...>`"
		},
		{
			"heading": "next-lint-options",
			"content": "Uses additional rules from this directory(s)."
		},
		{
			"heading": "next-lint-options",
			"content": "`--fix`"
		},
		{
			"heading": "next-lint-options",
			"content": "Automatically fix linting issues."
		},
		{
			"heading": "next-lint-options",
			"content": "`--fix-type <fixType>`"
		},
		{
			"heading": "next-lint-options",
			"content": "Specify the types of fixes to apply (e.g., problem, suggestion, layout)."
		},
		{
			"heading": "next-lint-options",
			"content": "`--ignore-path <path>`"
		},
		{
			"heading": "next-lint-options",
			"content": "Specify a file to ignore."
		},
		{
			"heading": "next-lint-options",
			"content": "`--no-ignore <path>`"
		},
		{
			"heading": "next-lint-options",
			"content": "Disables the `--ignore-path` option."
		},
		{
			"heading": "next-lint-options",
			"content": "`--quiet`"
		},
		{
			"heading": "next-lint-options",
			"content": "Reports errors only."
		},
		{
			"heading": "next-lint-options",
			"content": "`--max-warnings [maxWarnings]`"
		},
		{
			"heading": "next-lint-options",
			"content": "Specify the number of warnings before triggering a non-zero exit code. (default: -1)"
		},
		{
			"heading": "next-lint-options",
			"content": "`-o, --output-file, <outputFile>`"
		},
		{
			"heading": "next-lint-options",
			"content": "Specify a file to write report to."
		},
		{
			"heading": "next-lint-options",
			"content": "`-f, --format, <format>`"
		},
		{
			"heading": "next-lint-options",
			"content": "Uses a specific output format."
		},
		{
			"heading": "next-lint-options",
			"content": "`--no-inline-config`"
		},
		{
			"heading": "next-lint-options",
			"content": "Prevents comments from changing config or rules."
		},
		{
			"heading": "next-lint-options",
			"content": "`--report-unused-disable-directives-severity <level>`"
		},
		{
			"heading": "next-lint-options",
			"content": "Specify severity level for unused eslint-disable directives. (choices: \"error\", \"off\", \"warn\")"
		},
		{
			"heading": "next-lint-options",
			"content": "`--no-cache`"
		},
		{
			"heading": "next-lint-options",
			"content": "Disables caching."
		},
		{
			"heading": "next-lint-options",
			"content": "`--cache-location, <cacheLocation>`"
		},
		{
			"heading": "next-lint-options",
			"content": "Specify a location for cache."
		},
		{
			"heading": "next-lint-options",
			"content": "`--cache-strategy, [cacheStrategy]`"
		},
		{
			"heading": "next-lint-options",
			"content": "Specify a strategy to use for detecting changed files in the cache. (default: \"metadata\")"
		},
		{
			"heading": "next-lint-options",
			"content": "`--error-on-unmatched-pattern`"
		},
		{
			"heading": "next-lint-options",
			"content": "Reports errors when any file patterns are unmatched."
		},
		{
			"heading": "next-lint-options",
			"content": "`-h, --help`"
		},
		{
			"heading": "next-lint-options",
			"content": "Displays this message."
		},
		{
			"heading": "next-telemetry-options",
			"content": "Next.js collects **completely anonymous** telemetry data about general usage. Participation in this anonymous program is optional, and you can opt-out if you prefer not to share information."
		},
		{
			"heading": "next-telemetry-options",
			"content": "The following options are available for the `next telemetry` command:"
		},
		{
			"heading": "next-telemetry-options",
			"content": "Option"
		},
		{
			"heading": "next-telemetry-options",
			"content": "Description"
		},
		{
			"heading": "next-telemetry-options",
			"content": "`-h, --help`"
		},
		{
			"heading": "next-telemetry-options",
			"content": "Show all available options."
		},
		{
			"heading": "next-telemetry-options",
			"content": "`--enable`"
		},
		{
			"heading": "next-telemetry-options",
			"content": "Enables Next.js' telemetry collection."
		},
		{
			"heading": "next-telemetry-options",
			"content": "`--disable`"
		},
		{
			"heading": "next-telemetry-options",
			"content": "Disables Next.js' telemetry collection."
		},
		{
			"heading": "next-telemetry-options",
			"content": "Learn more about Telemetry."
		},
		{
			"heading": "next-typegen-options",
			"content": "`next typegen` generates TypeScript definitions for your application's routes without performing a full build. This is useful for IDE autocomplete and CI type-checking of route usage."
		},
		{
			"heading": "next-typegen-options",
			"content": "Previously, route types were only generated during `next dev` or `next build`, which meant running `tsc --noEmit` directly wouldn't validate your route types. Now you can generate types independently and validate them externally:"
		},
		{
			"heading": "next-typegen-options",
			"content": "The following options are available for the `next typegen` command:"
		},
		{
			"heading": "next-typegen-options",
			"content": "Option"
		},
		{
			"heading": "next-typegen-options",
			"content": "Description"
		},
		{
			"heading": "next-typegen-options",
			"content": "`-h, --help`"
		},
		{
			"heading": "next-typegen-options",
			"content": "Show all available options."
		},
		{
			"heading": "next-typegen-options",
			"content": "`[directory]`"
		},
		{
			"heading": "next-typegen-options",
			"content": "A directory on which to generate types. If not provided, the current directory will be used."
		},
		{
			"heading": "next-typegen-options",
			"content": "Output files are written to `<distDir>/types` (default: `.next/types`):"
		},
		{
			"heading": "next-typegen-options",
			"content": "> **Good to know**: `next typegen` loads your Next.js config (`next.config.js`, `next.config.mjs`, or `next.config.ts`) using the production build phase. Ensure any required environment variables and dependencies are available so the config can load correctly."
		},
		{
			"heading": "debugging-prerender-errors",
			"content": "If you encounter prerendering errors during `next build`, you can pass the `--debug-prerender` flag to get more detailed output:"
		},
		{
			"heading": "debugging-prerender-errors",
			"content": "This enables several experimental options to make debugging easier:"
		},
		{
			"heading": "debugging-prerender-errors",
			"content": "Disables server code minification:"
		},
		{
			"heading": "debugging-prerender-errors",
			"content": "`experimental.serverMinification = false`"
		},
		{
			"heading": "debugging-prerender-errors",
			"content": "`experimental.turbopackMinify = false`"
		},
		{
			"heading": "debugging-prerender-errors",
			"content": "Generates source maps for server bundles:"
		},
		{
			"heading": "debugging-prerender-errors",
			"content": "`experimental.serverSourceMaps = true`"
		},
		{
			"heading": "debugging-prerender-errors",
			"content": "Enables source map consumption in child processes used for prerendering:"
		},
		{
			"heading": "debugging-prerender-errors",
			"content": "`experimental.enablePrerenderSourceMaps = true`"
		},
		{
			"heading": "debugging-prerender-errors",
			"content": "Continues building even after the first prerender error, so you can see all issues at once:"
		},
		{
			"heading": "debugging-prerender-errors",
			"content": "`experimental.prerenderEarlyExit = false`"
		},
		{
			"heading": "debugging-prerender-errors",
			"content": "This helps surface more readable stack traces and code frames in the build output."
		},
		{
			"heading": "debugging-prerender-errors",
			"content": "> **Warning**: `--debug-prerender` is for debugging in development only. Do not deploy builds generated with `--debug-prerender` to production, as it may impact performance."
		},
		{
			"heading": "changing-the-default-port",
			"content": "By default, Next.js uses `http://localhost:3000` during development and with `next start`. The default port can be changed with the `-p` option, like so:"
		},
		{
			"heading": "changing-the-default-port",
			"content": "Or using the `PORT` environment variable:"
		},
		{
			"heading": "changing-the-default-port",
			"content": "> **Good to know**: `PORT` cannot be set in `.env` as booting up the HTTP server happens before any other code is initialized."
		},
		{
			"heading": "using-https-during-development",
			"content": "For certain use cases like webhooks or authentication, you can use HTTPS to have a secure environment on `localhost`. Next.js can generate a self-signed certificate with `next dev` using the `--experimental-https` flag:"
		},
		{
			"heading": "using-https-during-development",
			"content": "With the generated certificate, the Next.js development server will exist at `https://localhost:3000`. The default port `3000` is used unless a port is specified with `-p`, `--port`, or `PORT`."
		},
		{
			"heading": "using-https-during-development",
			"content": "You can also provide a custom certificate and key with `--experimental-https-key` and `--experimental-https-cert`. Optionally, you can provide a custom CA certificate with `--experimental-https-ca` as well."
		},
		{
			"heading": "using-https-during-development",
			"content": "`next dev --experimental-https` is only intended for development and creates a locally trusted certificate with `mkcert`. In production, use properly issued certificates from trusted authorities."
		},
		{
			"heading": "configuring-a-timeout-for-downstream-proxies",
			"content": "When deploying Next.js behind a downstream proxy (e.g. a load-balancer like AWS ELB/ALB), it's important to configure Next's underlying HTTP server with keep-alive timeouts that are *larger* than the downstream proxy's timeouts. Otherwise, once a keep-alive timeout is reached for a given TCP connection, Node.js will immediately terminate that connection without notifying the downstream proxy. This results in a proxy error whenever it attempts to reuse a connection that Node.js has already terminated."
		},
		{
			"heading": "configuring-a-timeout-for-downstream-proxies",
			"content": "To configure the timeout values for the production Next.js server, pass `--keepAliveTimeout` (in milliseconds) to `next start`, like so:"
		},
		{
			"heading": "passing-nodejs-arguments",
			"content": "You can pass any node arguments to `next` commands. For example:"
		},
		{
			"heading": "passing-nodejs-arguments",
			"content": "Version"
		},
		{
			"heading": "passing-nodejs-arguments",
			"content": "Changes"
		},
		{
			"heading": "passing-nodejs-arguments",
			"content": "`v15.5.0`"
		},
		{
			"heading": "passing-nodejs-arguments",
			"content": "Add the `next typegen` command"
		},
		{
			"heading": "passing-nodejs-arguments",
			"content": "`v15.4.0`"
		},
		{
			"heading": "passing-nodejs-arguments",
			"content": "Add `--debug-prerender` option for `next build` to help debug prerender errors."
		}
	],
	"headings": [
		{
			"id": "reference",
			"content": "Reference"
		},
		{
			"id": "commands",
			"content": "Commands"
		},
		{
			"id": "next-dev-options",
			"content": "`next dev` options"
		},
		{
			"id": "next-build-options",
			"content": "`next build` options"
		},
		{
			"id": "next-start-options",
			"content": "`next start` options"
		},
		{
			"id": "next-info-options",
			"content": "`next info` options"
		},
		{
			"id": "next-lint-options",
			"content": "`next lint` options"
		},
		{
			"id": "next-telemetry-options",
			"content": "`next telemetry` options"
		},
		{
			"id": "next-typegen-options",
			"content": "`next typegen` Options"
		},
		{
			"id": "examples",
			"content": "Examples"
		},
		{
			"id": "debugging-prerender-errors",
			"content": "Debugging prerender errors"
		},
		{
			"id": "changing-the-default-port",
			"content": "Changing the default port"
		},
		{
			"id": "using-https-during-development",
			"content": "Using HTTPS during development"
		},
		{
			"id": "configuring-a-timeout-for-downstream-proxies",
			"content": "Configuring a timeout for downstream proxies"
		},
		{
			"id": "passing-nodejs-arguments",
			"content": "Passing Node.js arguments"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#reference",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Reference" })
	},
	{
		depth: 3,
		url: "#commands",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Commands" })
	},
	{
		depth: 3,
		url: "#next-dev-options",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("code", { children: "next dev" }), " options"] })
	},
	{
		depth: 3,
		url: "#next-build-options",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("code", { children: "next build" }), " options"] })
	},
	{
		depth: 3,
		url: "#next-start-options",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("code", { children: "next start" }), " options"] })
	},
	{
		depth: 3,
		url: "#next-info-options",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("code", { children: "next info" }), " options"] })
	},
	{
		depth: 3,
		url: "#next-lint-options",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("code", { children: "next lint" }), " options"] })
	},
	{
		depth: 3,
		url: "#next-telemetry-options",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("code", { children: "next telemetry" }), " options"] })
	},
	{
		depth: 3,
		url: "#next-typegen-options",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("code", { children: "next typegen" }), " Options"] })
	},
	{
		depth: 2,
		url: "#examples",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Examples" })
	},
	{
		depth: 3,
		url: "#debugging-prerender-errors",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Debugging prerender errors" })
	},
	{
		depth: 3,
		url: "#changing-the-default-port",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Changing the default port" })
	},
	{
		depth: 3,
		url: "#using-https-during-development",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Using HTTPS during development" })
	},
	{
		depth: 3,
		url: "#configuring-a-timeout-for-downstream-proxies",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Configuring a timeout for downstream proxies" })
	},
	{
		depth: 3,
		url: "#passing-nodejs-arguments",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Passing Node.js arguments" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
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
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The Next.js CLI allows you to develop, build, start your application, and more." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Basic usage:" }),
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
						children: "npx"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " next"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " [command] [options]"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "reference",
			children: "Reference"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The following options are available:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Options" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsxs)(_components.td, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "-h" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--help" })
		] }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Shows all available options" })] }), (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsxs)(_components.td, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "-v" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--version" })
		] }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Outputs the Next.js version number" })] })] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "commands",
			children: "Commands"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The following commands are available:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Command" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#next-dev-options",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "dev" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Starts Next.js in development mode with Hot Module Reloading, error reporting, and more." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#next-build-options",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "build" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Creates an optimized production build of your application. Displaying information about each route." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#next-start-options",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "start" })
			}) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
				"Starts Next.js in production mode. The application should be compiled with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
				" first."
			] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#next-info-options",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "info" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Prints relevant details about the current system which can be used to report Next.js bugs." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#next-lint-options",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "lint" })
			}) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
				"Runs ESLint for all files in the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/src" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/app" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/pages" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/components" }),
				", and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "/lib" }),
				" directories. It also provides a guided setup to install any required dependencies if ESLint it is not already configured in your application."
			] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#next-telemetry-options",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "telemetry" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Allows you to enable or disable Next.js' completely anonymous telemetry collection." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#next-typegen-options",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "typegen" })
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Generates TypeScript definitions for routes, pages, layouts, and route handlers without running a full build." })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }),
				": Running ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next" }),
				" without a command is an alias for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "next-dev-options",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }), " options"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			" starts the application in development mode with Hot Module Reloading (HMR), error reporting, and more. The following options are available when running ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Option" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "-h, --help" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Show all available options." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "[directory]" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "A directory in which to build the application. If not provided, current directory is used." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--turbopack" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
				"Starts development mode using ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/turbopack",
					children: "Turbopack"
				}),
				". Also available as ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--turbo" }),
				"."
			] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsxs)(_components.td, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "-p" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--port <port>" })
			] }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Specify a port number on which to start the application. Default: 3000, env: PORT" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsxs)(_components.td, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "-H" }),
				"or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--hostname <hostname>" })
			] }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Specify a hostname on which to start the application. Useful for making the application available for other devices on the network. Default: 0.0.0.0" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--experimental-https" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Starts the server with HTTPS and generates a self-signed certificate." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--experimental-https-key <path>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Path to a HTTPS key file." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--experimental-https-cert <path>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Path to a HTTPS certificate file." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--experimental-https-ca <path>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Path to a HTTPS certificate authority file." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--experimental-upload-trace <traceUrl>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Reports a subset of the debugging trace to a remote HTTP URL." })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "next-build-options",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }), " options"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }), " creates an optimized production build of your application. The output displays information about each route. For example:"] }),
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
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "Route"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " (app)                              Size     First Load JS"
					})]
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
							children: "┌"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " ○"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " /_not-found"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "                          0"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " B"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "               0"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " kB"
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
							children: "└"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " ƒ"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " /products/[id]"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "                       0"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " B"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "               0"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " kB"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "○"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  (Static)   prerendered as static content"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "ƒ"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  (Dynamic)  server-rendered on demand"
					})]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Size" }), ": The size of assets downloaded when navigating to the page client-side. The size for each route only includes its dependencies."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "First Load JS" }), ": The size of assets downloaded when visiting the page from the server. The amount of JS shared by all is shown as a separate metric."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Both of these values are ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/app/api-reference/config/next-config-js/compress",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "compressed with gzip" })
			}),
			". The first load is indicated by green, yellow, or red. Aim for green for performant applications."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The following options are available for the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			" command:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Option" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "-h, --help" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Show all available options." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "[directory]" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "A directory on which to build the application. If not provided, the current directory will be used." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--turbopack" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
				"Build using ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/docs/app/api-reference/turbopack",
					children: "Turbopack"
				}),
				" (beta). Also available as ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--turbo" }),
				"."
			] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsxs)(_components.td, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "-d" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--debug" })
			] }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Enables a more verbose build output. With this flag enabled additional build output like rewrites, redirects, and headers will be shown." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, {}), (0, import_jsx_runtime.jsx)(_components.td, {})] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--profile" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
				"Enables production ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://react.dev/reference/react/Profiler",
					children: "profiling for React"
				}),
				"."
			] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--no-lint" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: ["Disables linting. ", (0, import_jsx_runtime.jsxs)(_components.em, { children: [
				"Note: linting will be removed from ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
				" in Next 16. If you're using Next 15.5+ with a linter other than ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "eslint" }),
				", linting during build will not occur."
			] })] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--no-mangling" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
				"Disables ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://en.wikipedia.org/wiki/Name_mangling",
					children: "mangling"
				}),
				". This may affect performance and should only be used for debugging purposes."
			] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--experimental-app-only" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Builds only App Router routes." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--experimental-build-mode [mode]" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Uses an experimental build mode. (choices: \"compile\", \"generate\", default: \"default\")" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--debug-prerender" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Debug prerender errors in development." })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "next-start-options",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }), " options"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
			" starts the application in production mode. The application should be compiled with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#next-build-options",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "next build" })
			}),
			" first."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The following options are available for the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
			" command:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Option" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsxs)(_components.td, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "-h" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--help" })
			] }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Show all available options." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "[directory]" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "A directory on which to start the application. If no directory is provided, the current directory will be used." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsxs)(_components.td, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "-p" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--port <port>" })
			] }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Specify a port number on which to start the application. (default: 3000, env: PORT)" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsxs)(_components.td, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "-H" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--hostname <hostname>" })
			] }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Specify a hostname on which to start the application (default: 0.0.0.0)." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--keepAliveTimeout <keepAliveTimeout>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Specify the maximum amount of milliseconds to wait before closing the inactive connections." })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "next-info-options",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next info" }), " options"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next info" }),
			" prints relevant details about the current system which can be used to report Next.js bugs when opening a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/vercel/next.js/issues",
				children: "GitHub issue"
			}),
			". This information includes Operating System platform/arch/version, Binaries (Node.js, npm, Yarn, pnpm), package versions (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "react" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "react-dom" }),
			"), and more."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The output should look like this:" }),
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
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "Operating"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " System:"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "  Platform:"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " darwin"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "  Arch:"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " arm64"
					})]
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
							children: "  Version:"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " Darwin"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " Kernel"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " Version"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " 23.6.0"
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
							children: "  Available"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " memory"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " (MB): 65536"
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
							children: "  Available"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " CPU"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " cores:"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " 10"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "Binaries:"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "  Node:"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " 20.12.0"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "  npm:"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " 10.5.0"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "  Yarn:"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " 1.22.19"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "  pnpm:"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " 9.6.0"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "Relevant"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " Packages:"
					})]
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
							children: "  next:"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " 15.0.0-canary.115"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " //"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " Latest"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " available"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " version"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " is"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " detected"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " (15.0.0-canary.115)."
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "  eslint-config-next:"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " 14.2.5"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "  react:"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " 19.0.0-rc"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "  react-dom:"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " 19.0.0"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "  typescript:"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " 5.5.4"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "Next.js"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " Config:"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "  output:"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " N/A"
					})]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The following options are available for the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next info" }),
			" command:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Option" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsxs)(_components.td, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "-h" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--help" })
		] }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Show all available options" })] }), (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--verbose" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Collects additional information for debugging." })] })] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "next-lint-options",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }), " options"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Warning" }),
				": This option is deprecated and will be removed in Next 16. A ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/blog/next-15-5#next-lint-deprecation",
					children: "codemod"
				}),
				" is available to migrate to ESLint CLI."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }),
			" runs ESLint for all files in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "pages/" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "app/" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "components/" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "lib/" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "src/" }),
			" directories. It also provides a guided setup to install any required dependencies if ESLint is not already configured in your application."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The following options are available for the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next lint" }),
			" command:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Option" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "[directory]" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "A base directory on which to lint the application. If not provided, the current directory will be used." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "-d, --dir, <dirs...>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Include directory, or directories, to run ESLint." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--file, <files...>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Include file, or files, to run ESLint." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--ext, [exts...]" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Specify JavaScript file extensions. (default: [\".js\", \".mjs\", \".cjs\", \".jsx\", \".ts\", \".mts\", \".cts\", \".tsx\"])" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "-c, --config, <config>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Uses this configuration file, overriding all other configuration options." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--resolve-plugins-relative-to, <rprt>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Specify a directory where plugins should be resolved from." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--strict" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
				"Creates a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".eslintrc.json" }),
				" file using the Next.js strict configuration."
			] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--rulesdir, <rulesdir...>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Uses additional rules from this directory(s)." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--fix" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Automatically fix linting issues." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--fix-type <fixType>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Specify the types of fixes to apply (e.g., problem, suggestion, layout)." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--ignore-path <path>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Specify a file to ignore." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--no-ignore <path>" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
				"Disables the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--ignore-path" }),
				" option."
			] })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--quiet" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Reports errors only." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--max-warnings [maxWarnings]" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Specify the number of warnings before triggering a non-zero exit code. (default: -1)" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "-o, --output-file, <outputFile>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Specify a file to write report to." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "-f, --format, <format>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Uses a specific output format." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--no-inline-config" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Prevents comments from changing config or rules." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--report-unused-disable-directives-severity <level>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Specify severity level for unused eslint-disable directives. (choices: \"error\", \"off\", \"warn\")" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--no-cache" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Disables caching." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--cache-location, <cacheLocation>" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Specify a location for cache." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--cache-strategy, [cacheStrategy]" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Specify a strategy to use for detecting changed files in the cache. (default: \"metadata\")" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--error-on-unmatched-pattern" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Reports errors when any file patterns are unmatched." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "-h, --help" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Displays this message." })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "next-telemetry-options",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next telemetry" }), " options"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Next.js collects ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "completely anonymous" }),
			" telemetry data about general usage. Participation in this anonymous program is optional, and you can opt-out if you prefer not to share information."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The following options are available for the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next telemetry" }),
			" command:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Option" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "-h, --help" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Show all available options." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--enable" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Enables Next.js' telemetry collection." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "--disable" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Disables Next.js' telemetry collection." })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Learn more about ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/telemetry",
				children: "Telemetry"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "next-typegen-options",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next typegen" }), " Options"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "next typegen" }), " generates TypeScript definitions for your application's routes without performing a full build. This is useful for IDE autocomplete and CI type-checking of route usage."] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Previously, route types were only generated during ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			", which meant running ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "tsc --noEmit" }),
			" directly wouldn't validate your route types. Now you can generate types independently and validate them externally:"
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
			title: "Terminal",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "# Generate route types first, then validate with TypeScript"
					})
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
							children: "next"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " typegen"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " && "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "tsc"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " --noEmit"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "# Or in CI workflows for type checking without building"
					})
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
							children: "next"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " typegen"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " && "
						}),
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
							children: " run"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " type-check"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The following options are available for the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next typegen" }),
			" command:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Option" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "-h, --help" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Show all available options." })] }), (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "[directory]" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "A directory on which to generate types. If not provided, the current directory will be used." })] })] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Output files are written to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<distDir>/types" }),
			" (default: ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".next/types" }),
			"):"
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
			title: "Terminal",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "next"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " typegen"
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
						children: "# or for a specific app"
					})
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
							children: "next"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " typegen"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " ./apps/web"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next typegen" }),
				" loads your Next.js config (",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.js" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.mjs" }),
				", or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "next.config.ts" }),
				") using the production build phase. Ensure any required environment variables and dependencies are available so the config can load correctly."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "examples",
			children: "Examples"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "debugging-prerender-errors",
			children: "Debugging prerender errors"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you encounter prerendering errors during ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			", you can pass the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--debug-prerender" }),
			" flag to get more detailed output:"
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
						children: "next"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " build"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " --debug-prerender"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This enables several experimental options to make debugging easier:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Disables server code minification:",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.serverMinification = false" }) }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.turbopackMinify = false" }) }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Generates source maps for server bundles:",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.serverSourceMaps = true" }) }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Enables source map consumption in child processes used for prerendering:",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.enablePrerenderSourceMaps = true" }) }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Continues building even after the first prerender error, so you can see all issues at once:",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "experimental.prerenderEarlyExit = false" }) }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This helps surface more readable stack traces and code frames in the build output." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Warning" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--debug-prerender" }),
				" is for debugging in development only. Do not deploy builds generated with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "--debug-prerender" }),
				" to production, as it may impact performance."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "changing-the-default-port",
			children: "Changing the default port"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"By default, Next.js uses ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "http://localhost:3000" }),
			" during development and with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
			". The default port can be changed with the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "-p" }),
			" option, like so:"
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
						children: "next"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " dev"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " -p"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " 4000"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Or using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "PORT" }),
			" environment variable:"
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
			title: "Terminal",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
				className: "line",
				children: [
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "PORT"
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
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: "4000"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: " next"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " dev"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Good to know" }),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "PORT" }),
				" cannot be set in ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: ".env" }),
				" as booting up the HTTP server happens before any other code is initialized."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "using-https-during-development",
			children: "Using HTTPS during development"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For certain use cases like webhooks or authentication, you can use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.mozilla.org/en-US/docs/Glossary/HTTPS",
				children: "HTTPS"
			}),
			" to have a secure environment on ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "localhost" }),
			". Next.js can generate a self-signed certificate with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev" }),
			" using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--experimental-https" }),
			" flag:"
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
						children: "next"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " dev"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " --experimental-https"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"With the generated certificate, the Next.js development server will exist at ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "https://localhost:3000" }),
			". The default port ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "3000" }),
			" is used unless a port is specified with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "-p" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--port" }),
			", or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "PORT" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can also provide a custom certificate and key with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--experimental-https-key" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--experimental-https-cert" }),
			". Optionally, you can provide a custom CA certificate with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--experimental-https-ca" }),
			" as well."
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
						children: "next"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " dev"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " --experimental-https"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " --experimental-https-key"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " ./certificates/localhost-key.pem"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " --experimental-https-cert"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " ./certificates/localhost.pem"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next dev --experimental-https" }),
			" is only intended for development and creates a locally trusted certificate with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/FiloSottile/mkcert",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "mkcert" })
			}),
			". In production, use properly issued certificates from trusted authorities."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "configuring-a-timeout-for-downstream-proxies",
			children: "Configuring a timeout for downstream proxies"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When deploying Next.js behind a downstream proxy (e.g. a load-balancer like AWS ELB/ALB), it's important to configure Next's underlying HTTP server with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nodejs.org/api/http.html#http_server_keepalivetimeout",
				children: "keep-alive timeouts"
			}),
			" that are ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "larger" }),
			" than the downstream proxy's timeouts. Otherwise, once a keep-alive timeout is reached for a given TCP connection, Node.js will immediately terminate that connection without notifying the downstream proxy. This results in a proxy error whenever it attempts to reuse a connection that Node.js has already terminated."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To configure the timeout values for the production Next.js server, pass ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--keepAliveTimeout" }),
			" (in milliseconds) to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next start" }),
			", like so:"
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
						children: "next"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " start"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " --keepAliveTimeout"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " 70000"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "passing-nodejs-arguments",
			children: "Passing Node.js arguments"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You can pass any ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://nodejs.org/api/cli.html#cli_node_options_options",
				children: "node arguments"
			}),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next" }),
			" commands. For example:"
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
			title: "Terminal",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "NODE_OPTIONS"
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
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'--throw-deprecation'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " next"
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
							children: "NODE_OPTIONS"
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
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'-r esm'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " next"
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
							children: "NODE_OPTIONS"
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
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'--inspect'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " next"
						})
					]
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Version" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Changes" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "v15.5.0" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
			"Add the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next typegen" }),
			" command"
		] })] }), (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "v15.4.0" }) }), (0, import_jsx_runtime.jsxs)(_components.td, { children: [
			"Add ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "--debug-prerender" }),
			" option for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "next build" }),
			" to help debug prerender errors."
		] })] })] })] })
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
export { toc as a, structuredData as i, frontmatter as n, next_exports as r, MDXContent as t };
