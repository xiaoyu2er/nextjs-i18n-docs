//#region node_modules/.nitro/vite/services/ssr/assets/__tanstack-start-server-fn-resolver-BkZFNguf.js
var manifest = { "3754d170b07e5384cb393a7ce01e3317e54e102cb5b75ed0780e1a678ae2d91a": {
	functionName: "serverLoader_createServerFn_handler",
	importer: () => import("./_-IXNHyVcc.mjs")
} };
async function getServerFnById(id) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = await serverFnInfo.importer();
	if (!fnModule) {
		console.info("serverFnInfo", serverFnInfo);
		throw new Error("Server function module not resolved for " + id);
	}
	const action = fnModule[serverFnInfo.functionName];
	if (!action) {
		console.info("serverFnInfo", serverFnInfo);
		console.info("fnModule", fnModule);
		throw new Error(`Server function module export not resolved for serverFn ID: ${id}`);
	}
	return action;
}
//#endregion
export { getServerFnById as t };
