//#region node_modules/.nitro/vite/services/ssr/assets/remove-undefined-Bfj4SlGF-CbBuT4VC.js
function removeUndefined(value, deep = false) {
	const obj = value;
	for (const key in obj) {
		if (obj[key] === void 0) delete obj[key];
		if (!deep) continue;
		const entry = obj[key];
		if (typeof entry === "object" && entry !== null) {
			removeUndefined(entry, deep);
			continue;
		}
		if (Array.isArray(entry)) for (const item of entry) removeUndefined(item, deep);
	}
	return value;
}
//#endregion
export { removeUndefined as t };
