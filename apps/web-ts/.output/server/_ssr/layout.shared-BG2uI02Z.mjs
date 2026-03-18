import { r as __toESM } from "../_runtime.mjs";
import { _ as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { O as usePathname, T as useI18n, f as buttonVariants, v as cva } from "./Combination-Gx_g2Nzj.mjs";
import { a as PopoverContent, i as Popover, l as isActive, m as z, o as PopoverTrigger, p as useSearchContext, r as Link } from "./dist-CP9lNkop.mjs";
import { i as Search, o as Moon, r as Sun, x as Airplay } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/layout.shared-BG2uI02Z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function LinkItem({ ref, item, ...props }) {
	const active = useLinkItemActive(item);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		ref,
		href: item.url,
		external: item.external,
		...props,
		"data-active": active,
		children: props.children
	});
}
function useLinkItemActive(link) {
	const pathname = usePathname();
	if (link.type === "custom" || !link.url) return false;
	if (link.active === "none") return false;
	return isActive(link.url, pathname, link.active === "nested-url");
}
function SearchToggle({ hideIfDisabled, size = "icon-sm", color = "ghost", ...props }) {
	const { setOpenSearch, enabled } = useSearchContext();
	if (hideIfDisabled && !enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: twMerge(buttonVariants({
			size,
			color
		}), props.className),
		"data-search": "",
		"aria-label": "Open Search",
		onClick: () => {
			setOpenSearch(true);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {})
	});
}
function LargeSearchToggle({ hideIfDisabled, ...props }) {
	const { enabled, hotKey, setOpenSearch } = useSearchContext();
	const { text } = useI18n();
	if (hideIfDisabled && !enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"data-search-full": "",
		...props,
		className: twMerge("inline-flex items-center gap-2 rounded-lg border bg-fd-secondary/50 p-1.5 ps-2 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground", props.className),
		onClick: () => {
			setOpenSearch(true);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }),
			text.search,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ms-auto inline-flex gap-0.5",
				children: hotKey.map((k, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
					className: "rounded-md border bg-fd-background px-1.5",
					children: k.display
				}, i))
			})
		]
	});
}
/**
* Get link items with shortcuts
*/
function resolveLinkItems({ links = [], githubUrl }) {
	const result = [...links];
	if (githubUrl) result.push({
		type: "icon",
		url: githubUrl,
		text: "Github",
		label: "GitHub",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			role: "img",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" })
		}),
		external: true
	});
	return result;
}
function renderTitleNav({ title, url = "/" }, props) {
	if (typeof title === "function") return title({
		href: url,
		...props
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		href: url,
		...props,
		children: title
	});
}
function useLinkItems({ githubUrl, links }) {
	return (0, import_react.useMemo)(() => {
		const all = resolveLinkItems({
			links,
			githubUrl
		});
		const navItems = [];
		const menuItems = [];
		for (const item of all) switch (item.on) {
			case "menu":
				menuItems.push(item);
				break;
			case "nav":
				navItems.push(item);
				break;
			default:
				navItems.push(item);
				menuItems.push(item);
		}
		return {
			navItems,
			menuItems,
			all
		};
	}, [links, githubUrl]);
}
function LanguageToggle(props) {
	const context = useI18n();
	if (!context.locales) throw new Error("Missing `<I18nProvider />`");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
		"aria-label": context.text.chooseLanguage,
		...props,
		className: twMerge(buttonVariants({
			color: "ghost",
			className: "gap-1.5 p-1.5"
		}), props.className),
		children: props.children
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
		className: "flex flex-col overflow-x-hidden p-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1 p-2 text-xs font-medium text-fd-muted-foreground",
			children: context.text.chooseLanguage
		}), context.locales.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: twMerge("p-2 text-start text-sm", item.locale === context.locale ? "bg-fd-primary/10 font-medium text-fd-primary" : "hover:bg-fd-accent hover:text-fd-accent-foreground"),
			onClick: () => {
				context.onChange?.(item.locale);
			},
			children: item.name
		}, item.locale))]
	})] });
}
function LanguageToggleText(props) {
	const context = useI18n();
	const text = context.locales?.find((item) => item.locale === context.locale)?.name;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		...props,
		children: text
	});
}
var itemVariants = cva("size-6.5 p-1.5 text-fd-muted-foreground", { variants: { active: {
	true: "bg-fd-accent text-fd-accent-foreground",
	false: "text-fd-muted-foreground"
} } });
var full = [
	["light", Sun],
	["dark", Moon],
	["system", Airplay]
];
function ThemeToggle({ className, mode = "light-dark", ...props }) {
	const { setTheme, theme, resolvedTheme } = z();
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	const container = twMerge("inline-flex items-center rounded-full border p-1 *:rounded-full", className);
	if (mode === "light-dark") {
		const value = mounted ? resolvedTheme : null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: container,
			"aria-label": `Toggle Theme`,
			onClick: () => setTheme(value === "light" ? "dark" : "light"),
			"data-theme-toggle": "",
			children: full.map(([key, Icon]) => {
				if (key === "system") return;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					fill: "currentColor",
					className: twMerge(itemVariants({ active: value === key }))
				}, key);
			})
		});
	}
	const value = mounted ? theme : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: container,
		"data-theme-toggle": "",
		...props,
		children: full.map(([key, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			"aria-label": key,
			className: twMerge(itemVariants({ active: value === key })),
			onClick: () => setTheme(key),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-full",
				fill: "currentColor"
			})
		}, key))
	});
}
function baseOptions() {
	return { nav: { title: "Next.js Docs" } };
}
//#endregion
export { SearchToggle as a, renderTitleNav as c, LinkItem as i, useLinkItemActive as l, LanguageToggleText as n, ThemeToggle as o, LargeSearchToggle as r, baseOptions as s, LanguageToggle as t, useLinkItems as u };
