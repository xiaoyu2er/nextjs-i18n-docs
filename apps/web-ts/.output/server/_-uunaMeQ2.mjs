import { r as __toESM } from "./_runtime.mjs";
import { _ as require_react, v as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { r as visit } from "./_ssr/utils-6GexS7iX-BaZEp7pz.mjs";
import { t as twMerge } from "./_libs/tailwind-merge.mjs";
import { D as useLayoutEffect2, O as usePathname, S as useComposedRefs, f as buttonVariants, g as createContextScope, l as Presence, p as composeEventHandlers, u as Primitive, v as cva, x as useCallbackRef$1 } from "./_ssr/Combination-DoPQMWre.mjs";
import { d as useDirection, l as isActive } from "./_ssr/dist-DE7Znuq2.mjs";
import { a as PanelLeft, l as Languages } from "./_libs/lucide-react.mjs";
import { C as useFolderDepth, S as useFolder, T as useTreePath, _ as SidebarTabsDropdown, a as Route, b as clientLoader, c as SidebarDrawerContent, d as SidebarFolderContent$1, f as SidebarFolderLink$1, g as SidebarSeparator$1, h as SidebarProvider, i as LayoutTabs, l as SidebarDrawerOverlay, m as SidebarItem$1, n as LayoutContextProvider, o as SidebarCollapseTrigger$1, p as SidebarFolderTrigger$1, r as LayoutHeader, s as SidebarContent$1, t as LayoutBody, u as SidebarFolder$1, v as SidebarTrigger$1, w as useTreeContext, x as mergeRefs$1, y as TreeContextProvider } from "./_-BViFWFv2.mjs";
import { a as SearchToggle, c as renderTitleNav, i as LinkItem, l as useLinkItemActive, n as LanguageToggleText, o as ThemeToggle, r as LargeSearchToggle, s as baseOptions, t as LanguageToggle, u as useLinkItems } from "./_ssr/layout.shared-BBx9oQ17.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_-uunaMeQ2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function createLinkItemRenderer({ SidebarFolder, SidebarFolderContent, SidebarFolderLink, SidebarFolderTrigger, SidebarItem }) {
	/**
	* Render sidebar items from page tree
	*/
	return function SidebarLinkItem({ item, ...props }) {
		const active = useLinkItemActive(item);
		if (item.type === "custom") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			...props,
			children: item.children
		});
		if (item.type === "menu") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarFolder, {
			...props,
			children: [item.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarFolderLink, {
				href: item.url,
				active,
				external: item.external,
				children: [item.icon, item.text]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarFolderTrigger, { children: [item.icon, item.text] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarFolderContent, { children: item.items.map((child, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarLinkItem, { item: child }, i)) })]
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarItem, {
			href: item.url,
			icon: item.icon,
			external: item.external,
			active,
			...props,
			children: item.text
		});
	};
}
var RendererContext = (0, import_react.createContext)(null);
function createPageTreeRenderer({ SidebarFolder, SidebarFolderContent, SidebarFolderLink, SidebarFolderTrigger, SidebarSeparator, SidebarItem }) {
	function renderList(nodes) {
		return nodes.map((node, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTreeNode, { node }, i));
	}
	function PageTreeNode({ node }) {
		const { Separator, Item, Folder, pathname } = (0, import_react.use)(RendererContext);
		if (node.type === "separator") {
			if (Separator) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { item: node });
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarSeparator, { children: [node.icon, node.name] });
		}
		if (node.type === "folder") {
			const path = useTreePath();
			if (Folder) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, {
				item: node,
				children: renderList(node.children)
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarFolder, {
				collapsible: node.collapsible,
				active: path.includes(node),
				defaultOpen: node.defaultOpen,
				children: [node.index ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarFolderLink, {
					href: node.index.url,
					active: isActive(node.index.url, pathname),
					external: node.index.external,
					children: [node.icon, node.name]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarFolderTrigger, { children: [node.icon, node.name] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarFolderContent, { children: renderList(node.children) })]
			});
		}
		if (Item) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { item: node });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarItem, {
			href: node.url,
			external: node.external,
			active: isActive(node.url, pathname),
			icon: node.icon,
			children: node.name
		});
	}
	/**
	* Render sidebar items from page tree
	*/
	return function SidebarPageTree(components) {
		const { Folder, Item, Separator } = components;
		const { root } = useTreeContext();
		const pathname = usePathname();
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RendererContext, {
			value: (0, import_react.useMemo)(() => ({
				Folder,
				Item,
				Separator,
				pathname
			}), [
				Folder,
				Item,
				Separator,
				pathname
			]),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: renderList(root.children) }, root.$id)
		});
	};
}
function clamp(value, [min, max]) {
	return Math.min(max, Math.max(min, value));
}
function useStateMachine(initialState, machine) {
	return import_react.useReducer((state, event) => {
		return machine[state][event] ?? state;
	}, initialState);
}
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeScrollArea, type = "hover", dir, scrollHideDelay = 600, ...scrollAreaProps } = props;
	const [scrollArea, setScrollArea] = import_react.useState(null);
	const [viewport, setViewport] = import_react.useState(null);
	const [content, setContent] = import_react.useState(null);
	const [scrollbarX, setScrollbarX] = import_react.useState(null);
	const [scrollbarY, setScrollbarY] = import_react.useState(null);
	const [cornerWidth, setCornerWidth] = import_react.useState(0);
	const [cornerHeight, setCornerHeight] = import_react.useState(0);
	const [scrollbarXEnabled, setScrollbarXEnabled] = import_react.useState(false);
	const [scrollbarYEnabled, setScrollbarYEnabled] = import_react.useState(false);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setScrollArea(node));
	const direction = useDirection(dir);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaProvider, {
		scope: __scopeScrollArea,
		type,
		dir: direction,
		scrollHideDelay,
		scrollArea,
		viewport,
		onViewportChange: setViewport,
		content,
		onContentChange: setContent,
		scrollbarX,
		onScrollbarXChange: setScrollbarX,
		scrollbarXEnabled,
		onScrollbarXEnabledChange: setScrollbarXEnabled,
		scrollbarY,
		onScrollbarYChange: setScrollbarY,
		scrollbarYEnabled,
		onScrollbarYEnabledChange: setScrollbarYEnabled,
		onCornerWidthChange: setCornerWidth,
		onCornerHeightChange: setCornerHeight,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			dir: direction,
			...scrollAreaProps,
			ref: composedRefs,
			style: {
				position: "relative",
				["--radix-scroll-area-corner-width"]: cornerWidth + "px",
				["--radix-scroll-area-corner-height"]: cornerHeight + "px",
				...props.style
			}
		})
	});
});
ScrollArea$1.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport";
var ScrollAreaViewport = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeScrollArea, children, nonce, ...viewportProps } = props;
	const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
	const composedRefs = useComposedRefs(forwardedRef, import_react.useRef(null), context.onViewportChange);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
		dangerouslySetInnerHTML: { __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}` },
		nonce
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-radix-scroll-area-viewport": "",
		...viewportProps,
		ref: composedRefs,
		style: {
			overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
			overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
			...props.style
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: context.onContentChange,
			style: {
				minWidth: "100%",
				display: "table"
			},
			children
		})
	})] });
});
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
	const isHorizontal = props.orientation === "horizontal";
	import_react.useEffect(() => {
		isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
		return () => {
			isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
		};
	}, [
		isHorizontal,
		onScrollbarXEnabledChange,
		onScrollbarYEnabledChange
	]);
	return context.type === "hover" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarHover, {
		...scrollbarProps,
		ref: forwardedRef,
		forceMount
	}) : context.type === "scroll" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarScroll, {
		...scrollbarProps,
		ref: forwardedRef,
		forceMount
	}) : context.type === "auto" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarAuto, {
		...scrollbarProps,
		ref: forwardedRef,
		forceMount
	}) : context.type === "always" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
		...scrollbarProps,
		ref: forwardedRef
	}) : null;
});
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const [visible, setVisible] = import_react.useState(false);
	import_react.useEffect(() => {
		const scrollArea = context.scrollArea;
		let hideTimer = 0;
		if (scrollArea) {
			const handlePointerEnter = () => {
				window.clearTimeout(hideTimer);
				setVisible(true);
			};
			const handlePointerLeave = () => {
				hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
			};
			scrollArea.addEventListener("pointerenter", handlePointerEnter);
			scrollArea.addEventListener("pointerleave", handlePointerLeave);
			return () => {
				window.clearTimeout(hideTimer);
				scrollArea.removeEventListener("pointerenter", handlePointerEnter);
				scrollArea.removeEventListener("pointerleave", handlePointerLeave);
			};
		}
	}, [context.scrollArea, context.scrollHideDelay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || visible,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarAuto, {
			"data-state": visible ? "visible" : "hidden",
			...scrollbarProps,
			ref: forwardedRef
		})
	});
});
var ScrollAreaScrollbarScroll = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const isHorizontal = props.orientation === "horizontal";
	const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
	const [state, send] = useStateMachine("hidden", {
		hidden: { SCROLL: "scrolling" },
		scrolling: {
			SCROLL_END: "idle",
			POINTER_ENTER: "interacting"
		},
		interacting: {
			SCROLL: "interacting",
			POINTER_LEAVE: "idle"
		},
		idle: {
			HIDE: "hidden",
			SCROLL: "scrolling",
			POINTER_ENTER: "interacting"
		}
	});
	import_react.useEffect(() => {
		if (state === "idle") {
			const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
			return () => window.clearTimeout(hideTimer);
		}
	}, [
		state,
		context.scrollHideDelay,
		send
	]);
	import_react.useEffect(() => {
		const viewport = context.viewport;
		const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
		if (viewport) {
			let prevScrollPos = viewport[scrollDirection];
			const handleScroll = () => {
				const scrollPos = viewport[scrollDirection];
				if (prevScrollPos !== scrollPos) {
					send("SCROLL");
					debounceScrollEnd();
				}
				prevScrollPos = scrollPos;
			};
			viewport.addEventListener("scroll", handleScroll);
			return () => viewport.removeEventListener("scroll", handleScroll);
		}
	}, [
		context.viewport,
		isHorizontal,
		send,
		debounceScrollEnd
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || state !== "hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
			"data-state": state === "hidden" ? "hidden" : "visible",
			...scrollbarProps,
			ref: forwardedRef,
			onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
			onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
		})
	});
});
var ScrollAreaScrollbarAuto = import_react.forwardRef((props, forwardedRef) => {
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const { forceMount, ...scrollbarProps } = props;
	const [visible, setVisible] = import_react.useState(false);
	const isHorizontal = props.orientation === "horizontal";
	const handleResize = useDebounceCallback(() => {
		if (context.viewport) {
			const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
			const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
			setVisible(isHorizontal ? isOverflowX : isOverflowY);
		}
	}, 10);
	useResizeObserver(context.viewport, handleResize);
	useResizeObserver(context.content, handleResize);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || visible,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
			"data-state": visible ? "visible" : "hidden",
			...scrollbarProps,
			ref: forwardedRef
		})
	});
});
var ScrollAreaScrollbarVisible = import_react.forwardRef((props, forwardedRef) => {
	const { orientation = "vertical", ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const thumbRef = import_react.useRef(null);
	const pointerOffsetRef = import_react.useRef(0);
	const [sizes, setSizes] = import_react.useState({
		content: 0,
		viewport: 0,
		scrollbar: {
			size: 0,
			paddingStart: 0,
			paddingEnd: 0
		}
	});
	const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
	const commonProps = {
		...scrollbarProps,
		sizes,
		onSizesChange: setSizes,
		hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
		onThumbChange: (thumb) => thumbRef.current = thumb,
		onThumbPointerUp: () => pointerOffsetRef.current = 0,
		onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
	};
	function getScrollPosition(pointerPos, dir) {
		return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
	}
	if (orientation === "horizontal") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarX, {
		...commonProps,
		ref: forwardedRef,
		onThumbPositionChange: () => {
			if (context.viewport && thumbRef.current) {
				const scrollPos = context.viewport.scrollLeft;
				const offset = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
				thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
			}
		},
		onWheelScroll: (scrollPos) => {
			if (context.viewport) context.viewport.scrollLeft = scrollPos;
		},
		onDragScroll: (pointerPos) => {
			if (context.viewport) context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
		}
	});
	if (orientation === "vertical") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarY, {
		...commonProps,
		ref: forwardedRef,
		onThumbPositionChange: () => {
			if (context.viewport && thumbRef.current) {
				const scrollPos = context.viewport.scrollTop;
				const offset = getThumbOffsetFromScroll(scrollPos, sizes);
				thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
			}
		},
		onWheelScroll: (scrollPos) => {
			if (context.viewport) context.viewport.scrollTop = scrollPos;
		},
		onDragScroll: (pointerPos) => {
			if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
		}
	});
	return null;
});
var ScrollAreaScrollbarX = import_react.forwardRef((props, forwardedRef) => {
	const { sizes, onSizesChange, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const [computedStyle, setComputedStyle] = import_react.useState();
	const ref = import_react.useRef(null);
	const composeRefs = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
	import_react.useEffect(() => {
		if (ref.current) setComputedStyle(getComputedStyle(ref.current));
	}, [ref]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarImpl, {
		"data-orientation": "horizontal",
		...scrollbarProps,
		ref: composeRefs,
		sizes,
		style: {
			bottom: 0,
			left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
			right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
			["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
			...props.style
		},
		onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
		onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
		onWheelScroll: (event, maxScrollPos) => {
			if (context.viewport) {
				const scrollPos = context.viewport.scrollLeft + event.deltaX;
				props.onWheelScroll(scrollPos);
				if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) event.preventDefault();
			}
		},
		onResize: () => {
			if (ref.current && context.viewport && computedStyle) onSizesChange({
				content: context.viewport.scrollWidth,
				viewport: context.viewport.offsetWidth,
				scrollbar: {
					size: ref.current.clientWidth,
					paddingStart: toInt(computedStyle.paddingLeft),
					paddingEnd: toInt(computedStyle.paddingRight)
				}
			});
		}
	});
});
var ScrollAreaScrollbarY = import_react.forwardRef((props, forwardedRef) => {
	const { sizes, onSizesChange, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
	const [computedStyle, setComputedStyle] = import_react.useState();
	const ref = import_react.useRef(null);
	const composeRefs = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
	import_react.useEffect(() => {
		if (ref.current) setComputedStyle(getComputedStyle(ref.current));
	}, [ref]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarImpl, {
		"data-orientation": "vertical",
		...scrollbarProps,
		ref: composeRefs,
		sizes,
		style: {
			top: 0,
			right: context.dir === "ltr" ? 0 : void 0,
			left: context.dir === "rtl" ? 0 : void 0,
			bottom: "var(--radix-scroll-area-corner-height)",
			["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
			...props.style
		},
		onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
		onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
		onWheelScroll: (event, maxScrollPos) => {
			if (context.viewport) {
				const scrollPos = context.viewport.scrollTop + event.deltaY;
				props.onWheelScroll(scrollPos);
				if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) event.preventDefault();
			}
		},
		onResize: () => {
			if (ref.current && context.viewport && computedStyle) onSizesChange({
				content: context.viewport.scrollHeight,
				viewport: context.viewport.offsetHeight,
				scrollbar: {
					size: ref.current.clientHeight,
					paddingStart: toInt(computedStyle.paddingTop),
					paddingEnd: toInt(computedStyle.paddingBottom)
				}
			});
		}
	});
});
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeScrollArea, sizes, hasThumb, onThumbChange, onThumbPointerUp, onThumbPointerDown, onThumbPositionChange, onDragScroll, onWheelScroll, onResize, ...scrollbarProps } = props;
	const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
	const [scrollbar, setScrollbar] = import_react.useState(null);
	const composeRefs = useComposedRefs(forwardedRef, (node) => setScrollbar(node));
	const rectRef = import_react.useRef(null);
	const prevWebkitUserSelectRef = import_react.useRef("");
	const viewport = context.viewport;
	const maxScrollPos = sizes.content - sizes.viewport;
	const handleWheelScroll = useCallbackRef$1(onWheelScroll);
	const handleThumbPositionChange = useCallbackRef$1(onThumbPositionChange);
	const handleResize = useDebounceCallback(onResize, 10);
	function handleDragScroll(event) {
		if (rectRef.current) onDragScroll({
			x: event.clientX - rectRef.current.left,
			y: event.clientY - rectRef.current.top
		});
	}
	import_react.useEffect(() => {
		const handleWheel = (event) => {
			const element = event.target;
			if (scrollbar?.contains(element)) handleWheelScroll(event, maxScrollPos);
		};
		document.addEventListener("wheel", handleWheel, { passive: false });
		return () => document.removeEventListener("wheel", handleWheel, { passive: false });
	}, [
		viewport,
		scrollbar,
		maxScrollPos,
		handleWheelScroll
	]);
	import_react.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
	useResizeObserver(scrollbar, handleResize);
	useResizeObserver(context.content, handleResize);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollbarProvider, {
		scope: __scopeScrollArea,
		scrollbar,
		hasThumb,
		onThumbChange: useCallbackRef$1(onThumbChange),
		onThumbPointerUp: useCallbackRef$1(onThumbPointerUp),
		onThumbPositionChange: handleThumbPositionChange,
		onThumbPointerDown: useCallbackRef$1(onThumbPointerDown),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			...scrollbarProps,
			ref: composeRefs,
			style: {
				position: "absolute",
				...scrollbarProps.style
			},
			onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
				if (event.button === 0) {
					event.target.setPointerCapture(event.pointerId);
					rectRef.current = scrollbar.getBoundingClientRect();
					prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
					document.body.style.webkitUserSelect = "none";
					if (context.viewport) context.viewport.style.scrollBehavior = "auto";
					handleDragScroll(event);
				}
			}),
			onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
			onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
				const element = event.target;
				if (element.hasPointerCapture(event.pointerId)) element.releasePointerCapture(event.pointerId);
				document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
				if (context.viewport) context.viewport.style.scrollBehavior = "";
				rectRef.current = null;
			})
		})
	});
});
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...thumbProps } = props;
	const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || scrollbarContext.hasThumb,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumbImpl, {
			ref: forwardedRef,
			...thumbProps
		})
	});
});
var ScrollAreaThumbImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeScrollArea, style, ...thumbProps } = props;
	const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
	const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
	const { onThumbPositionChange } = scrollbarContext;
	const composedRef = useComposedRefs(forwardedRef, (node) => scrollbarContext.onThumbChange(node));
	const removeUnlinkedScrollListenerRef = import_react.useRef(void 0);
	const debounceScrollEnd = useDebounceCallback(() => {
		if (removeUnlinkedScrollListenerRef.current) {
			removeUnlinkedScrollListenerRef.current();
			removeUnlinkedScrollListenerRef.current = void 0;
		}
	}, 100);
	import_react.useEffect(() => {
		const viewport = scrollAreaContext.viewport;
		if (viewport) {
			const handleScroll = () => {
				debounceScrollEnd();
				if (!removeUnlinkedScrollListenerRef.current) {
					removeUnlinkedScrollListenerRef.current = addUnlinkedScrollListener(viewport, onThumbPositionChange);
					onThumbPositionChange();
				}
			};
			onThumbPositionChange();
			viewport.addEventListener("scroll", handleScroll);
			return () => viewport.removeEventListener("scroll", handleScroll);
		}
	}, [
		scrollAreaContext.viewport,
		debounceScrollEnd,
		onThumbPositionChange
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
		...thumbProps,
		ref: composedRef,
		style: {
			width: "var(--radix-scroll-area-thumb-width)",
			height: "var(--radix-scroll-area-thumb-height)",
			...style
		},
		onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
			const thumbRect = event.target.getBoundingClientRect();
			const x = event.clientX - thumbRect.left;
			const y = event.clientY - thumbRect.top;
			scrollbarContext.onThumbPointerDown({
				x,
				y
			});
		}),
		onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
	});
});
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = import_react.forwardRef((props, forwardedRef) => {
	const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
	const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
	return context.type !== "scroll" && hasBothScrollbarsVisible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaCornerImpl, {
		...props,
		ref: forwardedRef
	}) : null;
});
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeScrollArea, ...cornerProps } = props;
	const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
	const [width, setWidth] = import_react.useState(0);
	const [height, setHeight] = import_react.useState(0);
	const hasSize = Boolean(width && height);
	useResizeObserver(context.scrollbarX, () => {
		const height2 = context.scrollbarX?.offsetHeight || 0;
		context.onCornerHeightChange(height2);
		setHeight(height2);
	});
	useResizeObserver(context.scrollbarY, () => {
		const width2 = context.scrollbarY?.offsetWidth || 0;
		context.onCornerWidthChange(width2);
		setWidth(width2);
	});
	return hasSize ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...cornerProps,
		ref: forwardedRef,
		style: {
			width,
			height,
			position: "absolute",
			right: context.dir === "ltr" ? 0 : void 0,
			left: context.dir === "rtl" ? 0 : void 0,
			bottom: 0,
			...props.style
		}
	}) : null;
});
function toInt(value) {
	return value ? parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
	const ratio = viewportSize / contentSize;
	return isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
	const ratio = getThumbRatio(sizes.viewport, sizes.content);
	const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
	const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
	return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
	const thumbSizePx = getThumbSize(sizes);
	const thumbCenter = thumbSizePx / 2;
	const offset = pointerOffset || thumbCenter;
	const thumbOffsetFromEnd = thumbSizePx - offset;
	const minPointerPos = sizes.scrollbar.paddingStart + offset;
	const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
	const maxScrollPos = sizes.content - sizes.viewport;
	const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
	return linearScale([minPointerPos, maxPointerPos], scrollRange)(pointerPos);
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
	const thumbSizePx = getThumbSize(sizes);
	const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
	const scrollbar = sizes.scrollbar.size - scrollbarPadding;
	const maxScrollPos = sizes.content - sizes.viewport;
	const maxThumbPos = scrollbar - thumbSizePx;
	const scrollWithoutMomentum = clamp(scrollPos, dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0]);
	return linearScale([0, maxScrollPos], [0, maxThumbPos])(scrollWithoutMomentum);
}
function linearScale(input, output) {
	return (value) => {
		if (input[0] === input[1] || output[0] === output[1]) return output[0];
		const ratio = (output[1] - output[0]) / (input[1] - input[0]);
		return output[0] + ratio * (value - input[0]);
	};
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
	return scrollPos > 0 && scrollPos < maxScrollPos;
}
var addUnlinkedScrollListener = (node, handler = () => {}) => {
	let prevPosition = {
		left: node.scrollLeft,
		top: node.scrollTop
	};
	let rAF = 0;
	(function loop() {
		const position = {
			left: node.scrollLeft,
			top: node.scrollTop
		};
		const isHorizontalScroll = prevPosition.left !== position.left;
		const isVerticalScroll = prevPosition.top !== position.top;
		if (isHorizontalScroll || isVerticalScroll) handler();
		prevPosition = position;
		rAF = window.requestAnimationFrame(loop);
	})();
	return () => window.cancelAnimationFrame(rAF);
};
function useDebounceCallback(callback, delay) {
	const handleCallback = useCallbackRef$1(callback);
	const debounceTimerRef = import_react.useRef(0);
	import_react.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
	return import_react.useCallback(() => {
		window.clearTimeout(debounceTimerRef.current);
		debounceTimerRef.current = window.setTimeout(handleCallback, delay);
	}, [handleCallback, delay]);
}
function useResizeObserver(element, onResize) {
	const handleResize = useCallbackRef$1(onResize);
	useLayoutEffect2(() => {
		let rAF = 0;
		if (element) {
			const resizeObserver = new ResizeObserver(() => {
				cancelAnimationFrame(rAF);
				rAF = window.requestAnimationFrame(handleResize);
			});
			resizeObserver.observe(element);
			return () => {
				window.cancelAnimationFrame(rAF);
				resizeObserver.unobserve(element);
			};
		}
	}, [element, handleResize]);
}
var Root = ScrollArea$1;
var Viewport = ScrollAreaViewport;
var Scrollbar = ScrollAreaScrollbar;
var Corner = ScrollAreaCorner;
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
	ref,
	type: "scroll",
	className: twMerge("overflow-hidden", className),
	...props,
	children: [
		children,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corner, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollBar, { orientation: "vertical" })
	]
}));
ScrollArea.displayName = Root.displayName;
var ScrollViewport = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
	ref,
	className: twMerge("size-full rounded-[inherit]", className),
	...props,
	children
}));
ScrollViewport.displayName = Viewport.displayName;
var ScrollBar = import_react.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scrollbar, {
	ref,
	orientation,
	className: twMerge("flex select-none data-[state=hidden]:animate-fd-fade-out", orientation === "vertical" && "h-full w-1.5", orientation === "horizontal" && "h-1.5 flex-col", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-fd-border" })
}));
ScrollBar.displayName = Scrollbar.displayName;
var itemVariants = cva("relative flex flex-row items-center gap-2 rounded-lg p-2 text-start text-fd-muted-foreground wrap-anywhere [&_svg]:size-4 [&_svg]:shrink-0", { variants: {
	variant: {
		link: "transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none data-[active=true]:bg-fd-primary/10 data-[active=true]:text-fd-primary data-[active=true]:hover:transition-colors",
		button: "transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"
	},
	highlight: { true: "data-[active=true]:before:content-[''] data-[active=true]:before:bg-fd-primary data-[active=true]:before:absolute data-[active=true]:before:w-px data-[active=true]:before:inset-y-2.5 data-[active=true]:before:start-2.5" }
} });
function getItemOffset(depth) {
	return `calc(${2 + 3 * depth} * var(--spacing))`;
}
function Sidebar$1(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarProvider, { ...props });
}
function SidebarFolder(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarFolder$1, { ...props });
}
function SidebarCollapseTrigger(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarCollapseTrigger$1, { ...props });
}
function SidebarViewport(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
		...props,
		className: twMerge("min-h-0 flex-1", props.className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollViewport, {
			className: "*:flex! *:flex-col! *:gap-0.5! p-4 overscroll-contain",
			style: { maskImage: "linear-gradient(to bottom, transparent, white 12px, white calc(100% - 12px), transparent)" },
			children: props.children
		})
	});
}
function SidebarTrigger(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarTrigger$1, { ...props });
}
function SidebarContent({ ref: refProp, className, children, ...props }) {
	const ref = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent$1, { children: ({ collapsed, hovered, ref: asideRef, ...rest }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-sidebar-placeholder": "",
		className: "sticky top-(--fd-docs-row-1) z-20 [grid-area:sidebar] pointer-events-none *:pointer-events-auto h-[calc(var(--fd-docs-height)-var(--fd-docs-row-1))] md:layout:[--fd-sidebar-width:268px] max-md:hidden",
		children: [collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute start-0 inset-y-0 w-4",
			...rest
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			id: "nd-sidebar",
			ref: mergeRefs$1(ref, refProp, asideRef),
			"data-collapsed": collapsed,
			"data-hovered": collapsed && hovered,
			className: twMerge("absolute flex flex-col w-full start-0 inset-y-0 items-end bg-fd-card text-sm border-e duration-250 *:w-(--fd-sidebar-width)", collapsed && ["inset-y-2 rounded-xl transition-transform border w-(--fd-sidebar-width)", hovered ? "shadow-lg translate-x-2 rtl:-translate-x-2" : "-translate-x-(--fd-sidebar-width) rtl:translate-x-full"], ref.current && ref.current.getAttribute("data-collapsed") === "true" !== collapsed && "transition-[width,inset-block,translate,background-color]", className),
			...props,
			...rest,
			children
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-sidebar-panel": "",
		className: twMerge("fixed flex top-[calc(--spacing(4)+var(--fd-docs-row-3))] start-4 shadow-lg transition-opacity rounded-xl p-0.5 border bg-fd-muted text-fd-muted-foreground z-10", (!collapsed || hovered) && "pointer-events-none opacity-0"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarCollapseTrigger$1, {
			className: twMerge(buttonVariants({
				color: "ghost",
				size: "icon-sm",
				className: "rounded-lg"
			})),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeft, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchToggle, {
			className: "rounded-lg",
			hideIfDisabled: true
		})]
	})] }) });
}
function SidebarDrawer({ children, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarDrawerOverlay, { className: "fixed z-40 inset-0 backdrop-blur-xs data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarDrawerContent, {
		className: twMerge("fixed text-[0.9375rem] flex flex-col shadow-lg border-s end-0 inset-y-0 w-[85%] max-w-[380px] z-40 bg-fd-background data-[state=open]:animate-fd-sidebar-in data-[state=closed]:animate-fd-sidebar-out", className),
		...props,
		children
	})] });
}
function SidebarSeparator({ className, style, children, ...props }) {
	const depth = useFolderDepth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarSeparator$1, {
		className: twMerge("inline-flex items-center gap-2 mb-1 px-2 mt-6 empty:mb-0 [&_svg]:size-4 [&_svg]:shrink-0", depth === 0 && "first:mt-0", className),
		style: {
			paddingInlineStart: getItemOffset(depth),
			...style
		},
		...props,
		children
	});
}
function SidebarItem({ className, style, children, ...props }) {
	const depth = useFolderDepth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarItem$1, {
		className: twMerge(itemVariants({
			variant: "link",
			highlight: depth >= 1
		}), className),
		style: {
			paddingInlineStart: getItemOffset(depth),
			...style
		},
		...props,
		children
	});
}
function SidebarFolderTrigger({ className, style, ...props }) {
	const { depth, collapsible } = useFolder();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarFolderTrigger$1, {
		className: twMerge(itemVariants({ variant: collapsible ? "button" : null }), "w-full", className),
		style: {
			paddingInlineStart: getItemOffset(depth - 1),
			...style
		},
		...props,
		children: props.children
	});
}
function SidebarFolderLink({ className, style, ...props }) {
	const depth = useFolderDepth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarFolderLink$1, {
		className: twMerge(itemVariants({
			variant: "link",
			highlight: depth > 1
		}), "w-full", className),
		style: {
			paddingInlineStart: getItemOffset(depth - 1),
			...style
		},
		...props,
		children: props.children
	});
}
function SidebarFolderContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarFolderContent$1, {
		className: twMerge("relative flex flex-col gap-0.5 *:first:mt-0.5", useFolderDepth() === 1 && "before:content-[''] before:absolute before:w-px before:inset-y-1 before:bg-fd-border before:start-2.5", className),
		...props,
		children
	});
}
var SidebarPageTree = createPageTreeRenderer({
	SidebarFolder,
	SidebarFolderContent,
	SidebarFolderLink,
	SidebarFolderTrigger,
	SidebarItem,
	SidebarSeparator
});
var SidebarLinkItem = createLinkItemRenderer({
	SidebarFolder,
	SidebarFolderContent,
	SidebarFolderLink,
	SidebarFolderTrigger,
	SidebarItem
});
var defaultTransform = (option, node) => {
	if (!node.icon) return option;
	return {
		...option,
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "size-full [&_svg]:size-full max-md:p-1.5 max-md:rounded-md max-md:border max-md:bg-fd-secondary",
			children: node.icon
		})
	};
};
function getSidebarTabs(tree, { transform = defaultTransform } = {}) {
	const results = [];
	function scanOptions(node, unlisted) {
		if ("root" in node && node.root) {
			const urls = getFolderUrls(node);
			if (urls.size > 0) {
				const option = {
					url: urls.values().next().value ?? "",
					title: node.name,
					icon: node.icon,
					unlisted,
					description: node.description,
					urls
				};
				const mapped = transform ? transform(option, node) : option;
				if (mapped) results.push(mapped);
			}
		}
		for (const child of node.children) if (child.type === "folder") scanOptions(child, unlisted);
	}
	scanOptions(tree);
	if (tree.fallback) scanOptions(tree.fallback, true);
	return results;
}
function getFolderUrls(folder, output = /* @__PURE__ */ new Set()) {
	if (folder.index) output.add(folder.index.url);
	for (const child of folder.children) {
		if (child.type === "page" && !child.external) output.add(child.url);
		if (child.type === "folder") getFolderUrls(child, output);
	}
	return output;
}
function DocsLayout({ nav: { transparentMode, ...nav } = {}, sidebar: { tabs: sidebarTabs, enabled: sidebarEnabled = true, defaultOpenLevel, prefetch, ...sidebarProps } = {}, searchToggle = {}, themeSwitch = {}, tabMode = "auto", i18n = false, children, tree, ...props }) {
	const tabs = (0, import_react.useMemo)(() => {
		if (Array.isArray(sidebarTabs)) return sidebarTabs;
		if (typeof sidebarTabs === "object") return getSidebarTabs(tree, sidebarTabs);
		if (sidebarTabs !== false) return getSidebarTabs(tree);
		return [];
	}, [tree, sidebarTabs]);
	const { menuItems } = useLinkItems(props);
	function sidebar() {
		const { footer, banner, collapsible = true, component, components, ...rest } = sidebarProps;
		if (component) return component;
		const iconLinks = menuItems.filter((item) => item.type === "icon");
		const viewport = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarViewport, { children: [menuItems.filter((v) => v.type !== "icon").map((item, i, list) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarLinkItem, {
			item,
			className: twMerge(i === list.length - 1 && "mb-4")
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarPageTree, { ...components })] });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarContent, {
			...rest,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 p-4 pb-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex",
							children: [
								renderTitleNav(nav, { className: "inline-flex text-[0.9375rem] items-center gap-2.5 font-medium me-auto" }),
								nav.children,
								collapsible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarCollapseTrigger, {
									className: twMerge(buttonVariants({
										color: "ghost",
										size: "icon-sm",
										className: "mb-auto text-fd-muted-foreground"
									})),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeft, {})
								})
							]
						}),
						searchToggle.enabled !== false && (searchToggle.components?.lg ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LargeSearchToggle, { hideIfDisabled: true })),
						tabs.length > 0 && tabMode === "auto" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarTabsDropdown, { options: tabs }),
						banner
					]
				}),
				viewport,
				(i18n || iconLinks.length > 0 || themeSwitch?.enabled !== false || footer) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col border-t p-4 pt-2 empty:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex text-fd-muted-foreground items-center empty:hidden",
						children: [
							i18n && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageToggle, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "size-4.5" }) }),
							iconLinks.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkItem, {
								item,
								className: twMerge(buttonVariants({
									size: "icon-sm",
									color: "ghost"
								})),
								"aria-label": item.label,
								children: item.icon
							}, i)),
							themeSwitch.enabled !== false && (themeSwitch.component ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {
								className: "ms-auto p-0",
								mode: themeSwitch.mode
							}))
						]
					}), footer]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarDrawer, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 p-4 pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex text-fd-muted-foreground items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-1",
								children: iconLinks.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkItem, {
									item,
									className: twMerge(buttonVariants({
										size: "icon-sm",
										color: "ghost",
										className: "p-2"
									})),
									"aria-label": item.label,
									children: item.icon
								}, i))
							}),
							i18n && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LanguageToggle, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "size-4.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageToggleText, {})] }),
							themeSwitch.enabled !== false && (themeSwitch.component ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {
								className: "p-0",
								mode: themeSwitch.mode
							})),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarTrigger, {
								className: twMerge(buttonVariants({
									color: "ghost",
									size: "icon-sm",
									className: "p-2"
								})),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeft, {})
							})
						]
					}),
					tabs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarTabsDropdown, { options: tabs }),
					banner
				]
			}),
			viewport,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col border-t p-4 pt-2 empty:hidden",
				children: footer
			})
		] })] });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreeContextProvider, {
		tree,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutContextProvider, {
			navTransparentMode: transparentMode,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar$1, {
				defaultOpenLevel,
				prefetch,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LayoutBody, {
					...props.containerProps,
					children: [
						nav.enabled !== false && (nav.component ?? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LayoutHeader, {
							id: "nd-subnav",
							className: "[grid-area:header] sticky top-(--fd-docs-row-1) z-30 flex items-center ps-4 pe-2.5 border-b transition-colors backdrop-blur-sm h-(--fd-header-height) md:hidden max-md:layout:[--fd-header-height:--spacing(14)] data-[transparent=false]:bg-fd-background/80",
							children: [
								renderTitleNav(nav, { className: "inline-flex items-center gap-2.5 font-semibold" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex-1",
									children: nav.children
								}),
								searchToggle.enabled !== false && (searchToggle.components?.sm ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchToggle, {
									className: "p-2",
									hideIfDisabled: true
								})),
								sidebarEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarTrigger, {
									className: twMerge(buttonVariants({
										color: "ghost",
										size: "icon-sm",
										className: "p-2"
									})),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeft, {})
								})
							]
						})),
						sidebarEnabled && sidebar(),
						tabMode === "top" && tabs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutTabs, {
							options: tabs,
							className: "z-10 bg-fd-background border-b px-6 pt-3 xl:px-8 max-md:hidden"
						}),
						children
					]
				})
			})
		})
	});
}
function deserializeHTML(html) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { dangerouslySetInnerHTML: { __html: html } });
}
function deserializePageTree(serialized) {
	const root = serialized.data;
	visit(root, (item) => {
		if ("icon" in item && typeof item.icon === "string") item.icon = deserializeHTML(item.icon);
		if (typeof item.name === "string") item.name = deserializeHTML(item.name);
	});
	return root;
}
/**
* Deserialize loader data that is serialized by the server-side Fumadocs `loader()`, supported:
* - Page Tree
*
* other unrelated properties are kept in the output.
*/
function useFumadocsLoader(serialized) {
	return (0, import_react.useMemo)(() => {
		const out = {};
		for (const k in serialized) {
			const v = serialized[k];
			if (isSerializedPageTree(v)) out[k] = deserializePageTree(v);
			else out[k] = v;
		}
		return out;
	}, [serialized]);
}
function isSerializedPageTree(v) {
	return typeof v === "object" && v !== null && "$fumadocs_loader" in v && v.$fumadocs_loader === "page-tree";
}
function Page() {
	const data = useFumadocsLoader(Route.useLoaderData());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocsLayout, {
		...baseOptions(),
		tree: data.pageTree,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, { children: clientLoader.useContent(data.path) })
	});
}
//#endregion
export { Page as component };
