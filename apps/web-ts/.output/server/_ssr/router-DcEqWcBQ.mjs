import { r as __toESM } from "../_runtime.mjs";
import { _ as require_react, c as lazyRouteComponent, d as Link, f as useParams, i as HeadContent, l as createFileRoute, m as useRouter, o as createRouter, p as useRouterState, r as Scripts, s as Outlet, u as createRootRoute, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as I18nProvider, r as FrameworkProvider } from "./Combination-Gx_g2Nzj.mjs";
import { n as J, s as SearchProvider, t as DirectionProvider } from "./dist-CP9lNkop.mjs";
import { a as Route } from "../_-CBMvbxh4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DcEqWcBQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var app_default = "/assets/app-C-ITrZu9.css";
var DefaultSearchDialog = (0, import_react.lazy)(() => import("./search-default-B-v5C_kg.mjs"));
function RootProvider$1({ children, dir = "ltr", theme = {}, search, i18n }) {
	let body = children;
	if (search?.enabled !== false) body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchProvider, {
		SearchDialog: DefaultSearchDialog,
		...search,
		children: body
	});
	if (theme?.enabled !== false) body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(J, {
		attribute: "class",
		defaultTheme: "system",
		enableSystem: true,
		disableTransitionOnChange: true,
		...theme,
		children: body
	});
	if (i18n) body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, {
		...i18n,
		children: body
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectionProvider, {
		dir,
		children: body
	});
}
var framework = {
	Link({ href, prefetch = true, ...props }) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: href,
			preload: prefetch ? "intent" : false,
			...props,
			children: props.children
		});
	},
	usePathname() {
		const { isLoading, pathname } = useRouterState({ select: (state) => ({
			isLoading: state.isLoading,
			pathname: state.location.pathname
		}) });
		const activePathname = (0, import_react.useRef)(pathname);
		return (0, import_react.useMemo)(() => {
			if (isLoading) return activePathname.current;
			activePathname.current = pathname;
			return pathname;
		}, [isLoading, pathname]);
	},
	useRouter() {
		const router = useRouter();
		return (0, import_react.useMemo)(() => ({
			push(url) {
				router.navigate({ href: url });
			},
			refresh() {
				router.invalidate();
			}
		}), [router]);
	},
	useParams() {
		return useParams({ strict: false });
	}
};
/**
* Fumadocs adapter for Tanstack Router/Start
*/
function TanstackProvider({ children, Link: CustomLink, Image: CustomImage }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FrameworkProvider, {
		...framework,
		Link: CustomLink ?? framework.Link,
		Image: CustomImage ?? framework.Image,
		children
	});
}
function RootProvider({ components, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TanstackProvider, {
		Link: components?.Link,
		Image: components?.Image,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootProvider$1, {
			...props,
			children: props.children
		})
	});
}
var Route$1 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Next.js Documentation" }
		],
		links: [{
			rel: "stylesheet",
			href: app_default
		}]
	}),
	component: RootComponent
});
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "flex flex-col min-h-screen",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
var $$splitComponentImporter = () => import("./routes-3eaQkix9.mjs");
var rootRouteChildren = {
	IndexRoute: createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") }).update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$1
	}),
	DocsSplatRoute: Route.update({
		id: "/docs/$",
		path: "/docs/$",
		getParentRoute: () => Route$1
	})
};
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	return createRouter({
		routeTree,
		defaultPreload: "intent",
		scrollRestoration: true
	});
}
//#endregion
export { getRouter };
