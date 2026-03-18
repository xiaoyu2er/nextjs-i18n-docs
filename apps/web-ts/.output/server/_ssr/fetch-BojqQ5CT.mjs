//#region node_modules/.nitro/vite/services/ssr/assets/fetch-BojqQ5CT.js
var globalCache = /* @__PURE__ */ new Map();
function fetchClient({ api = "/api/search", locale, tag, cache = globalCache } = {}) {
	return {
		deps: [
			api,
			locale,
			tag
		],
		async search(query) {
			const url = new URL(api, window.location.origin);
			url.searchParams.set("query", query);
			if (locale) url.searchParams.set("locale", locale);
			if (tag) url.searchParams.set("tag", Array.isArray(tag) ? tag.join(",") : tag);
			const key = url.toString();
			const cached = cache.get(key);
			if (cached) return cached;
			const res = await fetch(url);
			if (!res.ok) throw new Error(await res.text());
			const result = await res.json();
			cache.set(key, result);
			return result;
		}
	};
}
//#endregion
export { fetchClient };
