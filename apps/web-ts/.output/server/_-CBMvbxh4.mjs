import { r as __toESM } from "./_runtime.mjs";
import { _ as require_react, c as lazyRouteComponent, l as createFileRoute, v as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as twMerge } from "./_libs/tailwind-merge.mjs";
import { C as useControllableState, D as useLayoutEffect2, E as useId, O as usePathname, S as useComposedRefs, T as useI18n, f as buttonVariants, g as createContextScope, i as I18nLabel, l as Presence, o as Image$2, p as composeEventHandlers, u as Primitive, x as useCallbackRef$1 } from "./_ssr/Combination-Gx_g2Nzj.mjs";
import { a as PopoverContent, c as createCollection, d as useDirection, f as useIsScrollTop, i as Popover, l as isActive, o as PopoverTrigger, r as Link, u as normalize } from "./_ssr/dist-CP9lNkop.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./_ssr/createServerFn-DnkWHxBI.mjs";
import { t as getServerFnById } from "./__tanstack-start-server-fn-resolver-BkZFNguf.mjs";
import { n as useOnChange, t as e } from "./_ssr/use-on-change-B8PHvoum.mjs";
import { n as normalizeUrl, t as findPath } from "./_ssr/utils-6GexS7iX-BaZEp7pz.mjs";
import { n as browser } from "./_libs/fumadocs-mdx.mjs";
import { _ as ChevronRight, b as Check, c as Lightbulb, f as ExternalLink, g as ChevronsUpDown, h as CircleCheck, m as CircleX, n as Text, p as Clipboard, s as Link$1, t as TriangleAlert, u as Info, v as ChevronLeft, y as ChevronDown } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_-CBMvbxh4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var create = browser();
var browserCollections = {
	blog: create.doc("blog", /* @__PURE__ */ Object.assign({
		"./building-apis-with-nextjs.mdx": () => import("./_ssr/building-apis-with-nextjs-C-k2kQ7F.mjs"),
		"./composable-caching.mdx": () => import("./_ssr/composable-caching-WcOoDo0y.mjs"),
		"./create-next-app.mdx": () => import("./_ssr/create-next-app-DK4CMKWu.mjs"),
		"./incremental-adoption.mdx": () => import("./_ssr/incremental-adoption-Fz4k3sm2.mjs"),
		"./june-2023-update.mdx": () => import("./_ssr/june-2023-update--zIHFCJG.mjs"),
		"./layouts-rfc.mdx": () => import("./_ssr/layouts-rfc-DMnY8mg4.mjs"),
		"./next-10-1.mdx": () => import("./_ssr/next-10-1-DX9uv3mg.mjs"),
		"./next-10-2.mdx": () => import("./_ssr/next-10-2-B5kTQm14.mjs"),
		"./next-10.mdx": () => import("./_ssr/next-10-BJ9xSku9.mjs"),
		"./next-11-1.mdx": () => import("./_ssr/next-11-1-h2qWs-V9.mjs"),
		"./next-11.mdx": () => import("./_ssr/next-11-C4YSF9VM.mjs"),
		"./next-12-1.mdx": () => import("./_ssr/next-12-1-B9rvnoYw.mjs"),
		"./next-12-2.mdx": () => import("./_ssr/next-12-2-ClfIbO4k.mjs"),
		"./next-12-3.mdx": () => import("./_ssr/next-12-3-D_vI3XpI.mjs"),
		"./next-12.mdx": () => import("./_ssr/next-12-BrWPfdSq.mjs"),
		"./next-13-1.mdx": () => import("./_ssr/next-13-1-Ds8P9k1L.mjs"),
		"./next-13-2.mdx": () => import("./_ssr/next-13-2-DZYT0KGI.mjs"),
		"./next-13-3.mdx": () => import("./_ssr/next-13-3-rNd-POXk.mjs"),
		"./next-13-4.mdx": () => import("./_ssr/next-13-4-CgUejJ1g.mjs"),
		"./next-13-5.mdx": () => import("./_ssr/next-13-5-cSchhu3f.mjs"),
		"./next-13.mdx": () => import("./_ssr/next-13-fZhmVLgi.mjs"),
		"./next-14-1.mdx": () => import("./_ssr/next-14-1-BjRS4pKU.mjs"),
		"./next-14-2.mdx": () => import("./_ssr/next-14-2-Bdmr87Ra.mjs"),
		"./next-14.mdx": () => import("./_ssr/next-14-Dcq4DXRa.mjs"),
		"./next-15-1.mdx": () => import("./_ssr/next-15-1-6Oowlr3Q.mjs"),
		"./next-15-2.mdx": () => import("./_ssr/next-15-2-CvusmkSg.mjs"),
		"./next-15-3.mdx": () => import("./_ssr/next-15-3-uZHwnK1A.mjs"),
		"./next-15-rc.mdx": () => import("./_ssr/next-15-rc-D9xVBRuo.mjs"),
		"./next-15-rc2.mdx": () => import("./_ssr/next-15-rc2-BfRtQjI_.mjs"),
		"./next-15.mdx": () => import("./_ssr/next-15-LJ_peAYy.mjs"),
		"./next-5-1.mdx": () => import("./_ssr/next-5-1-BP7a1tz-.mjs"),
		"./next-5.mdx": () => import("./_ssr/next-5-DFiPgBO0.mjs"),
		"./next-6-1.mdx": () => import("./_ssr/next-6-1-DkpXzHHY.mjs"),
		"./next-6.mdx": () => import("./_ssr/next-6-Z7j7jlAN.mjs"),
		"./next-7.mdx": () => import("./_ssr/next-7-DqkXLCx6.mjs"),
		"./next-8-0-4.mdx": () => import("./_ssr/next-8-0-4-DWjy5Kq8.mjs"),
		"./next-8-1.mdx": () => import("./_ssr/next-8-1-gKB9TMUA.mjs"),
		"./next-8.mdx": () => import("./_ssr/next-8-DU3CrnQS.mjs"),
		"./next-9-0-7.mdx": () => import("./_ssr/next-9-0-7-DRd5OYw0.mjs"),
		"./next-9-1-7.mdx": () => import("./_ssr/next-9-1-7-BBeop074.mjs"),
		"./next-9-1.mdx": () => import("./_ssr/next-9-1-BBnwQ5wg.mjs"),
		"./next-9-2.mdx": () => import("./_ssr/next-9-2-HUT_MtR9.mjs"),
		"./next-9-3.mdx": () => import("./_ssr/next-9-3-D9xfXrbS.mjs"),
		"./next-9-4.mdx": () => import("./_ssr/next-9-4-DlDawfjf.mjs"),
		"./next-9-5.mdx": () => import("./_ssr/next-9-5-Buv51Szd.mjs"),
		"./next-9.mdx": () => import("./_ssr/next-9-Chl1mSzf.mjs"),
		"./our-journey-with-caching.mdx": () => import("./_ssr/our-journey-with-caching-DoggECJZ.mjs"),
		"./security-nextjs-server-components-actions.mdx": () => import("./_ssr/security-nextjs-server-components-actions-f9-45gUt.mjs"),
		"./styling-next-with-styled-jsx.mdx": () => import("./_ssr/styling-next-with-styled-jsx-C69NZG4T.mjs"),
		"./turbopack-for-development-stable.mdx": () => import("./_ssr/turbopack-for-development-stable-CnpZGoXr.mjs"),
		"./webpack-memory.mdx": () => import("./_ssr/webpack-memory-D4pYEoEt.mjs")
	})),
	docs: create.doc("docs", /* @__PURE__ */ Object.assign({
		"./01-app/01-getting-started/01-installation.mdx": () => import("./_ssr/01-installation-D5_uFJss.mjs"),
		"./01-app/01-getting-started/02-project-structure.mdx": () => import("./_ssr/02-project-structure-CWZieAaA.mjs"),
		"./01-app/01-getting-started/03-layouts-and-pages.mdx": () => import("./_ssr/03-layouts-and-pages-BFK3SmfH.mjs"),
		"./01-app/01-getting-started/04-linking-and-navigating.mdx": () => import("./_ssr/04-linking-and-navigating-BrV31p02.mjs"),
		"./01-app/01-getting-started/05-images.mdx": () => import("./_ssr/05-images-D8n6yyFw.mjs"),
		"./01-app/01-getting-started/06-fonts.mdx": () => import("./_ssr/06-fonts-5Z97S93I.mjs"),
		"./01-app/01-getting-started/07-css.mdx": () => import("./_ssr/07-css-Dxxo9lYV.mjs"),
		"./01-app/01-getting-started/08-server-and-client-components.mdx": () => import("./_ssr/08-server-and-client-components-4qWeJBgA.mjs"),
		"./01-app/01-getting-started/09-fetching-data.mdx": () => import("./_ssr/09-fetching-data-DZVshGOL.mjs"),
		"./01-app/01-getting-started/10-caching-and-revalidating.mdx": () => import("./_ssr/10-caching-and-revalidating-52bNnBFZ.mjs"),
		"./01-app/01-getting-started/11-updating-data.mdx": () => import("./_ssr/11-updating-data-ClwLkncE.mjs"),
		"./01-app/01-getting-started/12-error-handling.mdx": () => import("./_ssr/12-error-handling-CIFCfEql.mjs"),
		"./01-app/01-getting-started/13-partial-prerendering.mdx": () => import("./_ssr/13-partial-prerendering-B9RR4b-6.mjs"),
		"./01-app/01-getting-started/14-metadata-and-og-images.mdx": () => import("./_ssr/14-metadata-and-og-images-rtvWAdm1.mjs"),
		"./01-app/01-getting-started/15-deploying.mdx": () => import("./_ssr/15-deploying-PcYH5e1X.mjs"),
		"./01-app/01-getting-started/16-upgrading.mdx": () => import("./_ssr/16-upgrading-DeINOBuZ.mjs"),
		"./01-app/01-getting-started/index.mdx": () => import("./_ssr/01-getting-started-D2STAgkl.mjs"),
		"./01-app/02-guides/analytics.mdx": () => import("./_ssr/analytics-B_iHy-vG.mjs"),
		"./01-app/02-guides/authentication.mdx": () => import("./_ssr/authentication-DXYgMLzA.mjs"),
		"./01-app/02-guides/ci-build-caching.mdx": () => import("./_ssr/ci-build-caching-CgGXph0Y.mjs"),
		"./01-app/02-guides/content-security-policy.mdx": () => import("./_ssr/content-security-policy-DoLaqUPd.mjs"),
		"./01-app/02-guides/css-in-js.mdx": () => import("./_ssr/css-in-js-BDBVuuLm.mjs"),
		"./01-app/02-guides/custom-server.mdx": () => import("./_ssr/custom-server-fYicXv3v.mjs"),
		"./01-app/02-guides/debugging.mdx": () => import("./_ssr/debugging-DyGSVt0b.mjs"),
		"./01-app/02-guides/draft-mode.mdx": () => import("./_ssr/draft-mode-CJ3rnEAR.mjs"),
		"./01-app/02-guides/environment-variables.mdx": () => import("./_ssr/environment-variables-Bow8bcg_.mjs"),
		"./01-app/02-guides/forms.mdx": () => import("./_ssr/forms-DBMjxgY6.mjs"),
		"./01-app/02-guides/incremental-static-regeneration.mdx": () => import("./_ssr/incremental-static-regeneration-Be960MC9.mjs"),
		"./01-app/02-guides/index.mdx": () => import("./_ssr/02-guides-CrbQfYP2.mjs"),
		"./01-app/02-guides/instrumentation.mdx": () => import("./_ssr/instrumentation-1MjnmIpj.mjs"),
		"./01-app/02-guides/internationalization.mdx": () => import("./_ssr/internationalization-YFCadeRW.mjs"),
		"./01-app/02-guides/json-ld.mdx": () => import("./_ssr/json-ld-CxvozYlL.mjs"),
		"./01-app/02-guides/lazy-loading.mdx": () => import("./_ssr/lazy-loading-BFrqjWjr.mjs"),
		"./01-app/02-guides/local-development.mdx": () => import("./_ssr/local-development-BRKGgTYW.mjs"),
		"./01-app/02-guides/mdx.mdx": () => import("./_ssr/mdx-vhBOvv-f.mjs"),
		"./01-app/02-guides/memory-usage.mdx": () => import("./_ssr/memory-usage-BmvSpDnn.mjs"),
		"./01-app/02-guides/migrating/app-router-migration.mdx": () => import("./_ssr/app-router-migration-CeEX0P98.mjs"),
		"./01-app/02-guides/migrating/from-create-react-app.mdx": () => import("./_ssr/from-create-react-app-C3WeYL6Y.mjs"),
		"./01-app/02-guides/migrating/from-vite.mdx": () => import("./_ssr/from-vite-Dlv5upE_.mjs"),
		"./01-app/02-guides/migrating/index.mdx": () => import("./_ssr/migrating-C3haZ4HK.mjs"),
		"./01-app/02-guides/multi-tenant.mdx": () => import("./_ssr/multi-tenant-B_Og3TZR.mjs"),
		"./01-app/02-guides/multi-zones.mdx": () => import("./_ssr/multi-zones-B3rSp2B4.mjs"),
		"./01-app/02-guides/open-telemetry.mdx": () => import("./_ssr/open-telemetry-DkjXX8Si.mjs"),
		"./01-app/02-guides/package-bundling.mdx": () => import("./_ssr/package-bundling-B_46fr1a.mjs"),
		"./01-app/02-guides/production-checklist.mdx": () => import("./_ssr/production-checklist--RT0oS5D.mjs"),
		"./01-app/02-guides/progressive-web-apps.mdx": () => import("./_ssr/progressive-web-apps-l26riSHW.mjs"),
		"./01-app/02-guides/redirecting.mdx": () => import("./_ssr/redirecting-DpP-oeSc.mjs"),
		"./01-app/02-guides/sass.mdx": () => import("./_ssr/sass-B12c5cZw.mjs"),
		"./01-app/02-guides/scripts.mdx": () => import("./_ssr/scripts-iYjFoO9q.mjs"),
		"./01-app/02-guides/self-hosting.mdx": () => import("./_ssr/self-hosting-CQGJ4FH_.mjs"),
		"./01-app/02-guides/single-page-applications.mdx": () => import("./_ssr/single-page-applications-Bxv8uv_O.mjs"),
		"./01-app/02-guides/static-exports.mdx": () => import("./_ssr/static-exports--QrVcyhp.mjs"),
		"./01-app/02-guides/tailwind-css.mdx": () => import("./_ssr/tailwind-css-KTEWb6dc.mjs"),
		"./01-app/02-guides/testing/cypress.mdx": () => import("./_ssr/cypress-CuTrI8Og.mjs"),
		"./01-app/02-guides/testing/index.mdx": () => import("./_ssr/testing-C22vh9ga.mjs"),
		"./01-app/02-guides/testing/jest.mdx": () => import("./_ssr/jest-DDxihjo0.mjs"),
		"./01-app/02-guides/testing/playwright.mdx": () => import("./_ssr/playwright-v0cjz1qP.mjs"),
		"./01-app/02-guides/testing/vitest.mdx": () => import("./_ssr/vitest-z8wZV1tB.mjs"),
		"./01-app/02-guides/third-party-libraries.mdx": () => import("./_ssr/third-party-libraries-BnhSNHB5.mjs"),
		"./01-app/02-guides/upgrading/codemods.mdx": () => import("./_ssr/codemods-Cn9AkerT.mjs"),
		"./01-app/02-guides/upgrading/index.mdx": () => import("./_ssr/upgrading-BeZD33sw.mjs"),
		"./01-app/02-guides/upgrading/version-14.mdx": () => import("./_ssr/version-14-ByF9--sg.mjs"),
		"./01-app/02-guides/upgrading/version-15.mdx": () => import("./_ssr/version-15-yS5VAyqo.mjs"),
		"./01-app/02-guides/videos.mdx": () => import("./_ssr/videos-Bp_pt1qI.mjs"),
		"./01-app/03-building-your-application/01-routing/13-route-handlers.mdx": () => import("./_ssr/13-route-handlers-CcoTzDce.mjs"),
		"./01-app/03-building-your-application/01-routing/14-middleware.mdx": () => import("./_ssr/14-middleware-DyQRWf2y.mjs"),
		"./01-app/03-building-your-application/01-routing/index.mdx": () => import("./_ssr/01-routing-D-FoVKue.mjs"),
		"./01-app/03-building-your-application/02-data-fetching/03-server-actions-and-mutations.mdx": () => import("./_ssr/03-server-actions-and-mutations-cGJX1r3F.mjs"),
		"./01-app/03-building-your-application/02-data-fetching/index.mdx": () => import("./_ssr/02-data-fetching-DWUECcHf.mjs"),
		"./01-app/03-building-your-application/index.mdx": () => import("./_ssr/03-building-your-application-CAXNmTOj.mjs"),
		"./01-app/04-deep-dive/caching.mdx": () => import("./_ssr/caching-C01-0bQv.mjs"),
		"./01-app/04-deep-dive/index.mdx": () => import("./_ssr/04-deep-dive-LdwTAf8a.mjs"),
		"./01-app/05-api-reference/01-directives/index.mdx": () => import("./_ssr/01-directives-CG6ugQiu.mjs"),
		"./01-app/05-api-reference/01-directives/use-cache.mdx": () => import("./_ssr/use-cache-47NZFE0y.mjs"),
		"./01-app/05-api-reference/01-directives/use-client.mdx": () => import("./_ssr/use-client-BQYkT7k6.mjs"),
		"./01-app/05-api-reference/01-directives/use-server.mdx": () => import("./_ssr/use-server-BSGhwYwi.mjs"),
		"./01-app/05-api-reference/02-components/font.mdx": () => import("./_ssr/font-BRtuU96O.mjs"),
		"./01-app/05-api-reference/02-components/form.mdx": () => import("./_ssr/form-sKwVN7nH.mjs"),
		"./01-app/05-api-reference/02-components/image.mdx": () => import("./_ssr/image-wrbW8er-.mjs"),
		"./01-app/05-api-reference/02-components/index.mdx": () => import("./_ssr/02-components-BW8OFVpN.mjs"),
		"./01-app/05-api-reference/02-components/link.mdx": () => import("./_ssr/link-BmO0CXYp.mjs"),
		"./01-app/05-api-reference/02-components/script.mdx": () => import("./_ssr/script-DLDhbEEc.mjs"),
		"./01-app/05-api-reference/03-file-conventions/01-metadata/app-icons.mdx": () => import("./_ssr/app-icons-tt9intuV.mjs"),
		"./01-app/05-api-reference/03-file-conventions/01-metadata/index.mdx": () => import("./_ssr/01-metadata-DU6iddps.mjs"),
		"./01-app/05-api-reference/03-file-conventions/01-metadata/manifest.mdx": () => import("./_ssr/manifest-DFNfgWVY.mjs"),
		"./01-app/05-api-reference/03-file-conventions/01-metadata/opengraph-image.mdx": () => import("./_ssr/opengraph-image-CySZvDbu.mjs"),
		"./01-app/05-api-reference/03-file-conventions/01-metadata/robots.mdx": () => import("./_ssr/robots-IzcxvVH3.mjs"),
		"./01-app/05-api-reference/03-file-conventions/01-metadata/sitemap.mdx": () => import("./_ssr/sitemap-Ce2-ZcSK.mjs"),
		"./01-app/05-api-reference/03-file-conventions/default.mdx": () => import("./_ssr/default-D0XNxDF2.mjs"),
		"./01-app/05-api-reference/03-file-conventions/dynamic-routes.mdx": () => import("./_ssr/dynamic-routes-C_iVNtzy.mjs"),
		"./01-app/05-api-reference/03-file-conventions/error.mdx": () => import("./_ssr/error-BWZI065j.mjs"),
		"./01-app/05-api-reference/03-file-conventions/forbidden.mdx": () => import("./_ssr/forbidden-DtHAyLRc.mjs"),
		"./01-app/05-api-reference/03-file-conventions/index.mdx": () => import("./_ssr/03-file-conventions-BQNb7YjX.mjs"),
		"./01-app/05-api-reference/03-file-conventions/instrumentation-client.mdx": () => import("./_ssr/instrumentation-client-BmofJGhJ.mjs"),
		"./01-app/05-api-reference/03-file-conventions/instrumentation.mdx": () => import("./_ssr/instrumentation-BSejUIaN.mjs"),
		"./01-app/05-api-reference/03-file-conventions/intercepting-routes.mdx": () => import("./_ssr/intercepting-routes-BOPnsZZ5.mjs"),
		"./01-app/05-api-reference/03-file-conventions/layout.mdx": () => import("./_ssr/layout-D5A2h61w.mjs"),
		"./01-app/05-api-reference/03-file-conventions/loading.mdx": () => import("./_ssr/loading-MRpxMQGd.mjs"),
		"./01-app/05-api-reference/03-file-conventions/mdx-components.mdx": () => import("./_ssr/mdx-components-CDyXoq71.mjs"),
		"./01-app/05-api-reference/03-file-conventions/middleware.mdx": () => import("./_ssr/middleware-Cs34uGLb.mjs"),
		"./01-app/05-api-reference/03-file-conventions/not-found.mdx": () => import("./_ssr/not-found-C4fEWR8Y.mjs"),
		"./01-app/05-api-reference/03-file-conventions/page.mdx": () => import("./_ssr/page-DZyewEyY.mjs"),
		"./01-app/05-api-reference/03-file-conventions/parallel-routes.mdx": () => import("./_ssr/parallel-routes-Bw-xzECM.mjs"),
		"./01-app/05-api-reference/03-file-conventions/public-folder.mdx": () => import("./_ssr/public-folder-C_S8elrl.mjs"),
		"./01-app/05-api-reference/03-file-conventions/route-groups.mdx": () => import("./_ssr/route-groups-COkeKj-3.mjs"),
		"./01-app/05-api-reference/03-file-conventions/route-segment-config.mdx": () => import("./_ssr/route-segment-config-BtsyND_q.mjs"),
		"./01-app/05-api-reference/03-file-conventions/route.mdx": () => import("./_ssr/route-CnZgHl-T.mjs"),
		"./01-app/05-api-reference/03-file-conventions/src-folder.mdx": () => import("./_ssr/src-folder-DP57Txeg.mjs"),
		"./01-app/05-api-reference/03-file-conventions/template.mdx": () => import("./_ssr/template-BCNTjOEy.mjs"),
		"./01-app/05-api-reference/03-file-conventions/unauthorized.mdx": () => import("./_ssr/unauthorized-DKjT_J9k.mjs"),
		"./01-app/05-api-reference/04-functions/after.mdx": () => import("./_ssr/after-C0y7qhs3.mjs"),
		"./01-app/05-api-reference/04-functions/cacheLife.mdx": () => import("./_ssr/cacheLife-DstQSo87.mjs"),
		"./01-app/05-api-reference/04-functions/cacheTag.mdx": () => import("./_ssr/cacheTag-3FTVG4Si.mjs"),
		"./01-app/05-api-reference/04-functions/connection.mdx": () => import("./_ssr/connection-BmHCpttq.mjs"),
		"./01-app/05-api-reference/04-functions/cookies.mdx": () => import("./_ssr/cookies-Cy9u_KZa.mjs"),
		"./01-app/05-api-reference/04-functions/draft-mode.mdx": () => import("./_ssr/draft-mode-BzlMFv8Z.mjs"),
		"./01-app/05-api-reference/04-functions/fetch.mdx": () => import("./_ssr/fetch-CYFPx0p9.mjs"),
		"./01-app/05-api-reference/04-functions/forbidden.mdx": () => import("./_ssr/forbidden-CwPNTjYZ.mjs"),
		"./01-app/05-api-reference/04-functions/generate-image-metadata.mdx": () => import("./_ssr/generate-image-metadata-BUUzS3xr.mjs"),
		"./01-app/05-api-reference/04-functions/generate-metadata.mdx": () => import("./_ssr/generate-metadata-CcqBCjJT.mjs"),
		"./01-app/05-api-reference/04-functions/generate-sitemaps.mdx": () => import("./_ssr/generate-sitemaps-_VI0UZQ6.mjs"),
		"./01-app/05-api-reference/04-functions/generate-static-params.mdx": () => import("./_ssr/generate-static-params-yrdfo7YO.mjs"),
		"./01-app/05-api-reference/04-functions/generate-viewport.mdx": () => import("./_ssr/generate-viewport-D_XJ5bRK.mjs"),
		"./01-app/05-api-reference/04-functions/headers.mdx": () => import("./_ssr/headers-Ds6w_noM.mjs"),
		"./01-app/05-api-reference/04-functions/image-response.mdx": () => import("./_ssr/image-response-CghpTa3K.mjs"),
		"./01-app/05-api-reference/04-functions/index.mdx": () => import("./_ssr/04-functions-Bj0gXc2C.mjs"),
		"./01-app/05-api-reference/04-functions/next-request.mdx": () => import("./_ssr/next-request-gxsQsIAk.mjs"),
		"./01-app/05-api-reference/04-functions/next-response.mdx": () => import("./_ssr/next-response-nrVjc1sM.mjs"),
		"./01-app/05-api-reference/04-functions/not-found.mdx": () => import("./_ssr/not-found-BTWHV_ny.mjs"),
		"./01-app/05-api-reference/04-functions/permanentRedirect.mdx": () => import("./_ssr/permanentRedirect-9emDqJsL.mjs"),
		"./01-app/05-api-reference/04-functions/redirect.mdx": () => import("./_ssr/redirect-DAJoI5y9.mjs"),
		"./01-app/05-api-reference/04-functions/revalidatePath.mdx": () => import("./_ssr/revalidatePath-DQCp5Lyn.mjs"),
		"./01-app/05-api-reference/04-functions/revalidateTag.mdx": () => import("./_ssr/revalidateTag-BQDpRFs4.mjs"),
		"./01-app/05-api-reference/04-functions/unauthorized.mdx": () => import("./_ssr/unauthorized-BiZbmqDK.mjs"),
		"./01-app/05-api-reference/04-functions/unstable_cache.mdx": () => import("./_ssr/unstable_cache-BYjpy2he.mjs"),
		"./01-app/05-api-reference/04-functions/unstable_noStore.mdx": () => import("./_ssr/unstable_noStore-4oU22zWb.mjs"),
		"./01-app/05-api-reference/04-functions/unstable_rethrow.mdx": () => import("./_ssr/unstable_rethrow-CKNpQGAe.mjs"),
		"./01-app/05-api-reference/04-functions/use-link-status.mdx": () => import("./_ssr/use-link-status-Dbbh9Z-_.mjs"),
		"./01-app/05-api-reference/04-functions/use-params.mdx": () => import("./_ssr/use-params-BsX_9hKv.mjs"),
		"./01-app/05-api-reference/04-functions/use-pathname.mdx": () => import("./_ssr/use-pathname-Jx1Bv2v4.mjs"),
		"./01-app/05-api-reference/04-functions/use-report-web-vitals.mdx": () => import("./_ssr/use-report-web-vitals-DCkGvtVf.mjs"),
		"./01-app/05-api-reference/04-functions/use-router.mdx": () => import("./_ssr/use-router-ux7Kp7ad.mjs"),
		"./01-app/05-api-reference/04-functions/use-search-params.mdx": () => import("./_ssr/use-search-params-0FeIfb4H.mjs"),
		"./01-app/05-api-reference/04-functions/use-selected-layout-segment.mdx": () => import("./_ssr/use-selected-layout-segment-DdZxjh64.mjs"),
		"./01-app/05-api-reference/04-functions/use-selected-layout-segments.mdx": () => import("./_ssr/use-selected-layout-segments-BDpEfYGz.mjs"),
		"./01-app/05-api-reference/04-functions/userAgent.mdx": () => import("./_ssr/userAgent-gCsRb5PT.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/allowedDevOrigins.mdx": () => import("./_ssr/allowedDevOrigins-Do9rLfDi.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/appDir.mdx": () => import("./_ssr/appDir-C60G_4DP.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/assetPrefix.mdx": () => import("./_ssr/assetPrefix-ByRrn-9n.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/authInterrupts.mdx": () => import("./_ssr/authInterrupts-MvG99SLo.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/basePath.mdx": () => import("./_ssr/basePath-DEYY2ELf.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/cacheLife.mdx": () => import("./_ssr/cacheLife-CDV4w2i6.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/compress.mdx": () => import("./_ssr/compress-CuyqV3KF.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/crossOrigin.mdx": () => import("./_ssr/crossOrigin-BB8GjbWG.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/cssChunking.mdx": () => import("./_ssr/cssChunking-Cg9AcSgn.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/devIndicators.mdx": () => import("./_ssr/devIndicators-BQKPZpV9.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/distDir.mdx": () => import("./_ssr/distDir-r32J5Mi0.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/dynamicIO.mdx": () => import("./_ssr/dynamicIO-BgrJ4ER7.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/env.mdx": () => import("./_ssr/env-CC0GGJZ4.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/eslint.mdx": () => import("./_ssr/eslint-Dcq-xC6J.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/expireTime.mdx": () => import("./_ssr/expireTime-YOUPz8iK.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/exportPathMap.mdx": () => import("./_ssr/exportPathMap-BbkNSaXm.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/generateBuildId.mdx": () => import("./_ssr/generateBuildId-5JtODHZ_.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/generateEtags.mdx": () => import("./_ssr/generateEtags-CGvG7Wvw.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/headers.mdx": () => import("./_ssr/headers-CgetK9bJ.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/htmlLimitedBots.mdx": () => import("./_ssr/htmlLimitedBots-VmCj0Yh1.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/httpAgentOptions.mdx": () => import("./_ssr/httpAgentOptions-Dv-aKPli.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/images.mdx": () => import("./_ssr/images-CycNfgp9.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/incrementalCacheHandlerPath.mdx": () => import("./_ssr/incrementalCacheHandlerPath-DQhg2saC.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/index.mdx": () => import("./_ssr/01-next-config-js-CnjA4H1B.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/inlineCss.mdx": () => import("./_ssr/inlineCss-BmHDllv4.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/logging.mdx": () => import("./_ssr/logging-cUbN7WxJ.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/mdxRs.mdx": () => import("./_ssr/mdxRs-DA2fJ0pD.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/onDemandEntries.mdx": () => import("./_ssr/onDemandEntries-CJ9HLoSY.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/optimizePackageImports.mdx": () => import("./_ssr/optimizePackageImports-B7uRL2xZ.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/output.mdx": () => import("./_ssr/output-CPLZj1b3.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/pageExtensions.mdx": () => import("./_ssr/pageExtensions-B9xuIHk7.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/poweredByHeader.mdx": () => import("./_ssr/poweredByHeader-BJFkL3d0.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/ppr.mdx": () => import("./_ssr/ppr-DMEWmlw6.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/productionBrowserSourceMaps.mdx": () => import("./_ssr/productionBrowserSourceMaps-91vdpZIg.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/reactCompiler.mdx": () => import("./_ssr/reactCompiler-CPyo9GRZ.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/reactMaxHeadersLength.mdx": () => import("./_ssr/reactMaxHeadersLength-aa4ioCUY.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/reactStrictMode.mdx": () => import("./_ssr/reactStrictMode-BLXSlRlo.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/redirects.mdx": () => import("./_ssr/redirects-DMC9fv7w.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/rewrites.mdx": () => import("./_ssr/rewrites-DtgEVPkL.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/sassOptions.mdx": () => import("./_ssr/sassOptions-CYCwKPsw.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/serverActions.mdx": () => import("./_ssr/serverActions-C2nFPSrC.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/serverComponentsHmrCache.mdx": () => import("./_ssr/serverComponentsHmrCache-BQHbsEu3.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/serverExternalPackages.mdx": () => import("./_ssr/serverExternalPackages-BQIxnh2g.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/staleTimes.mdx": () => import("./_ssr/staleTimes-CQRWrJc0.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/staticGeneration.mdx": () => import("./_ssr/staticGeneration-C7ZuJnlU.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/taint.mdx": () => import("./_ssr/taint-Du5xwIBP.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/trailingSlash.mdx": () => import("./_ssr/trailingSlash-B-y4VFqx.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/transpilePackages.mdx": () => import("./_ssr/transpilePackages-mr0RSfwl.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/turbopack.mdx": () => import("./_ssr/turbopack-BdwtXG6A.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/typedRoutes.mdx": () => import("./_ssr/typedRoutes-skUBL_To.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/typescript.mdx": () => import("./_ssr/typescript-DbmBDRGS.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/urlImports.mdx": () => import("./_ssr/urlImports-DFcWtqFV.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/useCache.mdx": () => import("./_ssr/useCache-D8EQm6tn.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/useLightningcss.mdx": () => import("./_ssr/useLightningcss-CymUNehI.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/viewTransition.mdx": () => import("./_ssr/viewTransition-Dx2KGMXR.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/webVitalsAttribution.mdx": () => import("./_ssr/webVitalsAttribution-p_5YXAhx.mjs"),
		"./01-app/05-api-reference/05-config/01-next-config-js/webpack.mdx": () => import("./_ssr/webpack-ZUDcr9h3.mjs"),
		"./01-app/05-api-reference/05-config/02-typescript.mdx": () => import("./_ssr/02-typescript-B8x4xrc1.mjs"),
		"./01-app/05-api-reference/05-config/03-eslint.mdx": () => import("./_ssr/03-eslint-BiqvQ6Q5.mjs"),
		"./01-app/05-api-reference/05-config/index.mdx": () => import("./_ssr/05-config-Cpi20vU7.mjs"),
		"./01-app/05-api-reference/06-cli/create-next-app.mdx": () => import("./_ssr/create-next-app-BrOoEZAg.mjs"),
		"./01-app/05-api-reference/06-cli/index.mdx": () => import("./_ssr/06-cli-TMBV9ZYB.mjs"),
		"./01-app/05-api-reference/06-cli/next.mdx": () => import("./_ssr/next-DPAxmT3O.mjs"),
		"./01-app/05-api-reference/07-edge.mdx": () => import("./_ssr/07-edge-rjojvGe3.mjs"),
		"./01-app/05-api-reference/08-turbopack.mdx": () => import("./_ssr/08-turbopack-DPqbVWNS.mjs"),
		"./01-app/05-api-reference/index.mdx": () => import("./_ssr/05-api-reference-C1hlZp7t.mjs"),
		"./01-app/index.mdx": () => import("./_ssr/01-app-D4gJpF1k.mjs"),
		"./02-pages/01-getting-started/01-installation.mdx": () => import("./_ssr/01-installation-ZcNsDNOE.mjs"),
		"./02-pages/01-getting-started/02-project-structure.mdx": () => import("./_ssr/02-project-structure-CY_JMa8g.mjs"),
		"./02-pages/01-getting-started/04-images.mdx": () => import("./_ssr/04-images-C8_nh1Gr.mjs"),
		"./02-pages/01-getting-started/05-fonts.mdx": () => import("./_ssr/05-fonts-CzYUHYgr.mjs"),
		"./02-pages/01-getting-started/06-css.mdx": () => import("./_ssr/06-css-D5CbgZu2.mjs"),
		"./02-pages/01-getting-started/11-deploying.mdx": () => import("./_ssr/11-deploying-BwH8QnKR.mjs"),
		"./02-pages/01-getting-started/index.mdx": () => import("./_ssr/01-getting-started-CvYLL_bn.mjs"),
		"./02-pages/02-guides/amp.mdx": () => import("./_ssr/amp-B2aMhPv0.mjs"),
		"./02-pages/02-guides/analytics.mdx": () => import("./_ssr/analytics-BAGBWqDb.mjs"),
		"./02-pages/02-guides/authentication.mdx": () => import("./_ssr/authentication-_bX-WnT_.mjs"),
		"./02-pages/02-guides/babel.mdx": () => import("./_ssr/babel-nC_BDDrr.mjs"),
		"./02-pages/02-guides/ci-build-caching.mdx": () => import("./_ssr/ci-build-caching-aylVMlU7.mjs"),
		"./02-pages/02-guides/content-security-policy.mdx": () => import("./_ssr/content-security-policy-09wOwkIZ.mjs"),
		"./02-pages/02-guides/css-in-js.mdx": () => import("./_ssr/css-in-js-Dr9gfBZL.mjs"),
		"./02-pages/02-guides/custom-server.mdx": () => import("./_ssr/custom-server-DOsyKP9w.mjs"),
		"./02-pages/02-guides/debugging.mdx": () => import("./_ssr/debugging-DSBvn70H.mjs"),
		"./02-pages/02-guides/draft-mode.mdx": () => import("./_ssr/draft-mode-BV4uuupu.mjs"),
		"./02-pages/02-guides/environment-variables.mdx": () => import("./_ssr/environment-variables-Cyvz5QL-.mjs"),
		"./02-pages/02-guides/forms.mdx": () => import("./_ssr/forms-BAjNUMHD.mjs"),
		"./02-pages/02-guides/incremental-static-regeneration.mdx": () => import("./_ssr/incremental-static-regeneration-Bug5pgWA.mjs"),
		"./02-pages/02-guides/index.mdx": () => import("./_ssr/02-guides-Bd8TvRsL.mjs"),
		"./02-pages/02-guides/instrumentation.mdx": () => import("./_ssr/instrumentation-830JnroY.mjs"),
		"./02-pages/02-guides/internationalization.mdx": () => import("./_ssr/internationalization-DmFl-2wA.mjs"),
		"./02-pages/02-guides/lazy-loading.mdx": () => import("./_ssr/lazy-loading-BtjWoypw.mjs"),
		"./02-pages/02-guides/mdx.mdx": () => import("./_ssr/mdx-D-RHjTaR.mjs"),
		"./02-pages/02-guides/migrating/app-router-migration.mdx": () => import("./_ssr/app-router-migration-CClE6YpH.mjs"),
		"./02-pages/02-guides/migrating/from-create-react-app.mdx": () => import("./_ssr/from-create-react-app-Bgg4O3ak.mjs"),
		"./02-pages/02-guides/migrating/from-vite.mdx": () => import("./_ssr/from-vite-DKhqwD0P.mjs"),
		"./02-pages/02-guides/migrating/index.mdx": () => import("./_ssr/migrating-DLFq6egp.mjs"),
		"./02-pages/02-guides/multi-zones.mdx": () => import("./_ssr/multi-zones-D0M0a3j_.mjs"),
		"./02-pages/02-guides/open-telemetry.mdx": () => import("./_ssr/open-telemetry-WT9V-qIo.mjs"),
		"./02-pages/02-guides/package-bundling.mdx": () => import("./_ssr/package-bundling-CF38vWMo.mjs"),
		"./02-pages/02-guides/post-css.mdx": () => import("./_ssr/post-css-Blhbtth8.mjs"),
		"./02-pages/02-guides/preview-mode.mdx": () => import("./_ssr/preview-mode-DYag6k_3.mjs"),
		"./02-pages/02-guides/production-checklist.mdx": () => import("./_ssr/production-checklist-BjEnlpEb.mjs"),
		"./02-pages/02-guides/redirecting.mdx": () => import("./_ssr/redirecting-DBOWS7iI.mjs"),
		"./02-pages/02-guides/sass.mdx": () => import("./_ssr/sass-BZYLQNMy.mjs"),
		"./02-pages/02-guides/scripts.mdx": () => import("./_ssr/scripts-Dd4_xmHi.mjs"),
		"./02-pages/02-guides/self-hosting.mdx": () => import("./_ssr/self-hosting-BR3UQ02z.mjs"),
		"./02-pages/02-guides/static-exports.mdx": () => import("./_ssr/static-exports-B28vHzw6.mjs"),
		"./02-pages/02-guides/tailwind-css.mdx": () => import("./_ssr/tailwind-css-BN8_WLla.mjs"),
		"./02-pages/02-guides/testing/cypress.mdx": () => import("./_ssr/cypress-C6zpK8qr.mjs"),
		"./02-pages/02-guides/testing/index.mdx": () => import("./_ssr/testing-VZ94l17D.mjs"),
		"./02-pages/02-guides/testing/jest.mdx": () => import("./_ssr/jest-BcIl-4r0.mjs"),
		"./02-pages/02-guides/testing/playwright.mdx": () => import("./_ssr/playwright-Dp2J-f5A.mjs"),
		"./02-pages/02-guides/testing/vitest.mdx": () => import("./_ssr/vitest-D9b5oiKX.mjs"),
		"./02-pages/02-guides/third-party-libraries.mdx": () => import("./_ssr/third-party-libraries-DYMLhIGG.mjs"),
		"./02-pages/02-guides/upgrading/codemods.mdx": () => import("./_ssr/codemods-BH7llxdk.mjs"),
		"./02-pages/02-guides/upgrading/index.mdx": () => import("./_ssr/upgrading-yzuakbQj.mjs"),
		"./02-pages/02-guides/upgrading/version-10.mdx": () => import("./_ssr/version-10-BgcvrRQF.mjs"),
		"./02-pages/02-guides/upgrading/version-11.mdx": () => import("./_ssr/version-11-CY40-jZQ.mjs"),
		"./02-pages/02-guides/upgrading/version-12.mdx": () => import("./_ssr/version-12-BCpvS5wJ.mjs"),
		"./02-pages/02-guides/upgrading/version-13.mdx": () => import("./_ssr/version-13-CRfjjGHa.mjs"),
		"./02-pages/02-guides/upgrading/version-14.mdx": () => import("./_ssr/version-14-BYM_0fNI.mjs"),
		"./02-pages/02-guides/upgrading/version-9.mdx": () => import("./_ssr/version-9-4FMrnVGt.mjs"),
		"./02-pages/03-building-your-application/01-routing/01-pages-and-layouts.mdx": () => import("./_ssr/01-pages-and-layouts-pagQlxAY.mjs"),
		"./02-pages/03-building-your-application/01-routing/02-dynamic-routes.mdx": () => import("./_ssr/02-dynamic-routes-AJZ7XQW2.mjs"),
		"./02-pages/03-building-your-application/01-routing/03-linking-and-navigating.mdx": () => import("./_ssr/03-linking-and-navigating-COnRAhyq.mjs"),
		"./02-pages/03-building-your-application/01-routing/05-custom-app.mdx": () => import("./_ssr/05-custom-app-CJ_KLu71.mjs"),
		"./02-pages/03-building-your-application/01-routing/06-custom-document.mdx": () => import("./_ssr/06-custom-document-03Jc4wWz.mjs"),
		"./02-pages/03-building-your-application/01-routing/07-api-routes.mdx": () => import("./_ssr/07-api-routes-58BX-A4R.mjs"),
		"./02-pages/03-building-your-application/01-routing/08-custom-error.mdx": () => import("./_ssr/08-custom-error-BdPTmalk.mjs"),
		"./02-pages/03-building-your-application/01-routing/11-middleware.mdx": () => import("./_ssr/11-middleware-CRW6BFk9.mjs"),
		"./02-pages/03-building-your-application/01-routing/index.mdx": () => import("./_ssr/01-routing-6ZZeXVaH.mjs"),
		"./02-pages/03-building-your-application/02-rendering/01-server-side-rendering.mdx": () => import("./_ssr/01-server-side-rendering-BFv0v4PN.mjs"),
		"./02-pages/03-building-your-application/02-rendering/02-static-site-generation.mdx": () => import("./_ssr/02-static-site-generation-BwNE5YcG.mjs"),
		"./02-pages/03-building-your-application/02-rendering/04-automatic-static-optimization.mdx": () => import("./_ssr/04-automatic-static-optimization-DvmS8R_8.mjs"),
		"./02-pages/03-building-your-application/02-rendering/05-client-side-rendering.mdx": () => import("./_ssr/05-client-side-rendering-BzINYxNj.mjs"),
		"./02-pages/03-building-your-application/02-rendering/index.mdx": () => import("./_ssr/02-rendering-D7V0MIIB.mjs"),
		"./02-pages/03-building-your-application/03-data-fetching/01-get-static-props.mdx": () => import("./_ssr/01-get-static-props-B3qYRtI8.mjs"),
		"./02-pages/03-building-your-application/03-data-fetching/02-get-static-paths.mdx": () => import("./_ssr/02-get-static-paths-C_x6NWm0.mjs"),
		"./02-pages/03-building-your-application/03-data-fetching/03-forms-and-mutations.mdx": () => import("./_ssr/03-forms-and-mutations-DytUjPCG.mjs"),
		"./02-pages/03-building-your-application/03-data-fetching/03-get-server-side-props.mdx": () => import("./_ssr/03-get-server-side-props-BdJmGdc6.mjs"),
		"./02-pages/03-building-your-application/03-data-fetching/05-client-side.mdx": () => import("./_ssr/05-client-side--V3U4ifI.mjs"),
		"./02-pages/03-building-your-application/03-data-fetching/index.mdx": () => import("./_ssr/03-data-fetching-CzxC4B-m.mjs"),
		"./02-pages/03-building-your-application/06-configuring/12-error-handling.mdx": () => import("./_ssr/12-error-handling-D4WqzmwX.mjs"),
		"./02-pages/03-building-your-application/06-configuring/index.mdx": () => import("./_ssr/06-configuring-DkPJKhTS.mjs"),
		"./02-pages/03-building-your-application/index.mdx": () => import("./_ssr/03-building-your-application-BEmFF43a.mjs"),
		"./02-pages/04-api-reference/01-components/font.mdx": () => import("./_ssr/font-CdqQV0Cg.mjs"),
		"./02-pages/04-api-reference/01-components/form.mdx": () => import("./_ssr/form-CDSUmeZL.mjs"),
		"./02-pages/04-api-reference/01-components/head.mdx": () => import("./_ssr/head-XdZCRlst.mjs"),
		"./02-pages/04-api-reference/01-components/image-legacy.mdx": () => import("./_ssr/image-legacy-BRF3nGky.mjs"),
		"./02-pages/04-api-reference/01-components/image.mdx": () => import("./_ssr/image-Dyr91spy.mjs"),
		"./02-pages/04-api-reference/01-components/index.mdx": () => import("./_ssr/01-components-9STeIrTv.mjs"),
		"./02-pages/04-api-reference/01-components/link.mdx": () => import("./_ssr/link-cudEdr3Q.mjs"),
		"./02-pages/04-api-reference/01-components/script.mdx": () => import("./_ssr/script-CRwYNZDp.mjs"),
		"./02-pages/04-api-reference/02-file-conventions/index.mdx": () => import("./_ssr/02-file-conventions-CSppdG49.mjs"),
		"./02-pages/04-api-reference/02-file-conventions/instrumentation.mdx": () => import("./_ssr/instrumentation-D8eZ1wgS.mjs"),
		"./02-pages/04-api-reference/02-file-conventions/public-folder.mdx": () => import("./_ssr/public-folder-PLbgPio0.mjs"),
		"./02-pages/04-api-reference/02-file-conventions/src-folder.mdx": () => import("./_ssr/src-folder-DFoIk-it.mjs"),
		"./02-pages/04-api-reference/03-functions/get-initial-props.mdx": () => import("./_ssr/get-initial-props-Ct4pf3xQ.mjs"),
		"./02-pages/04-api-reference/03-functions/get-server-side-props.mdx": () => import("./_ssr/get-server-side-props-BDdS6X2n.mjs"),
		"./02-pages/04-api-reference/03-functions/get-static-paths.mdx": () => import("./_ssr/get-static-paths-BcSgJPOO.mjs"),
		"./02-pages/04-api-reference/03-functions/get-static-props.mdx": () => import("./_ssr/get-static-props-CkQwg6Ud.mjs"),
		"./02-pages/04-api-reference/03-functions/index.mdx": () => import("./_ssr/03-functions-DKMXPGzy.mjs"),
		"./02-pages/04-api-reference/03-functions/next-request.mdx": () => import("./_ssr/next-request-zaupmMjf.mjs"),
		"./02-pages/04-api-reference/03-functions/next-response.mdx": () => import("./_ssr/next-response-DhHuIgcs.mjs"),
		"./02-pages/04-api-reference/03-functions/use-amp.mdx": () => import("./_ssr/use-amp-Bijc_IgQ.mjs"),
		"./02-pages/04-api-reference/03-functions/use-report-web-vitals.mdx": () => import("./_ssr/use-report-web-vitals-xJTl8JN6.mjs"),
		"./02-pages/04-api-reference/03-functions/use-router.mdx": () => import("./_ssr/use-router-D0GMH4mi.mjs"),
		"./02-pages/04-api-reference/03-functions/userAgent.mdx": () => import("./_ssr/userAgent-BrpANMPD.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/allowedDevOrigins.mdx": () => import("./_ssr/allowedDevOrigins-DlgjmHGD.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/assetPrefix.mdx": () => import("./_ssr/assetPrefix-BpIKTwsT.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/basePath.mdx": () => import("./_ssr/basePath-CC8aZh_1.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/bundlePagesRouterDependencies.mdx": () => import("./_ssr/bundlePagesRouterDependencies-B7NWOL-L.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/compress.mdx": () => import("./_ssr/compress-BdMOoZRU.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/crossOrigin.mdx": () => import("./_ssr/crossOrigin-BVnVSbCp.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/devIndicators.mdx": () => import("./_ssr/devIndicators-DY59OX7_.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/distDir.mdx": () => import("./_ssr/distDir-Bci8KxPC.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/env.mdx": () => import("./_ssr/env-BQsm8FyK.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/eslint.mdx": () => import("./_ssr/eslint-BzOUkHxO.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/exportPathMap.mdx": () => import("./_ssr/exportPathMap-CWwdPQYz.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/generateBuildId.mdx": () => import("./_ssr/generateBuildId-B9gTeb7e.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/generateEtags.mdx": () => import("./_ssr/generateEtags-Dcww2WL7.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/headers.mdx": () => import("./_ssr/headers-BEb8ijDg.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/httpAgentOptions.mdx": () => import("./_ssr/httpAgentOptions-JM7RgvTY.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/images.mdx": () => import("./_ssr/images-qc7oGUWi.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/index.mdx": () => import("./_ssr/01-next-config-js-Bf3dJ9mU.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/onDemandEntries.mdx": () => import("./_ssr/onDemandEntries-CyD0eOP0.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/optimizePackageImports.mdx": () => import("./_ssr/optimizePackageImports-Cz5KmPVZ.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/output.mdx": () => import("./_ssr/output-Y94yu0sp.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/pageExtensions.mdx": () => import("./_ssr/pageExtensions-BY6wf_As.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/poweredByHeader.mdx": () => import("./_ssr/poweredByHeader-Cx-CT9da.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/productionBrowserSourceMaps.mdx": () => import("./_ssr/productionBrowserSourceMaps-BDv7wphY.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/reactStrictMode.mdx": () => import("./_ssr/reactStrictMode-C1wFY9kC.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/redirects.mdx": () => import("./_ssr/redirects-CgIeQ6ZU.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/rewrites.mdx": () => import("./_ssr/rewrites-jf4wQcvy.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/runtime-configuration.mdx": () => import("./_ssr/runtime-configuration-CZY1DWV2.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/serverExternalPackages.mdx": () => import("./_ssr/serverExternalPackages-iJzaBH45.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/trailingSlash.mdx": () => import("./_ssr/trailingSlash-CoZK1Cau.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/transpilePackages.mdx": () => import("./_ssr/transpilePackages-BYCTy9g6.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/turbo.mdx": () => import("./_ssr/turbo-DGJnZ3D2.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/typescript.mdx": () => import("./_ssr/typescript-BdwH7D2M.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/urlImports.mdx": () => import("./_ssr/urlImports-Daa472Eg.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/useLightningcss.mdx": () => import("./_ssr/useLightningcss-BpcPqZ5g.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/webVitalsAttribution.mdx": () => import("./_ssr/webVitalsAttribution-D3K9BWiW.mjs"),
		"./02-pages/04-api-reference/04-config/01-next-config-js/webpack.mdx": () => import("./_ssr/webpack-BNIzeR3B.mjs"),
		"./02-pages/04-api-reference/04-config/01-typescript.mdx": () => import("./_ssr/01-typescript-CK1fhVqU.mjs"),
		"./02-pages/04-api-reference/04-config/02-eslint.mdx": () => import("./_ssr/02-eslint-Bgm5-lAU.mjs"),
		"./02-pages/04-api-reference/04-config/index.mdx": () => import("./_ssr/04-config-CsLOQ9cn.mjs"),
		"./02-pages/04-api-reference/05-cli/create-next-app.mdx": () => import("./_ssr/create-next-app-DABicKsp.mjs"),
		"./02-pages/04-api-reference/05-cli/index.mdx": () => import("./_ssr/05-cli-BTOHqXaQ.mjs"),
		"./02-pages/04-api-reference/05-cli/next.mdx": () => import("./_ssr/next-DdVESdgL.mjs"),
		"./02-pages/04-api-reference/06-edge.mdx": () => import("./_ssr/06-edge-CYvRH-5c.mjs"),
		"./02-pages/04-api-reference/08-turbopack.mdx": () => import("./_ssr/08-turbopack-D3phw55c.mjs"),
		"./02-pages/04-api-reference/index.mdx": () => import("./_ssr/04-api-reference-BDW_C3-5.mjs"),
		"./02-pages/index.mdx": () => import("./_ssr/02-pages-D-mDcmXx.mjs"),
		"./03-architecture/accessibility.mdx": () => import("./_ssr/accessibility-DMRWg8DD.mjs"),
		"./03-architecture/fast-refresh.mdx": () => import("./_ssr/fast-refresh-uPlB8YOO.mjs"),
		"./03-architecture/index.mdx": () => import("./_ssr/03-architecture-CEi9_U6G.mjs"),
		"./03-architecture/nextjs-compiler.mdx": () => import("./_ssr/nextjs-compiler-BdXhv51e.mjs"),
		"./03-architecture/supported-browsers.mdx": () => import("./_ssr/supported-browsers-KCLhSiJX.mjs"),
		"./04-community/01-contribution-guide.mdx": () => import("./_ssr/01-contribution-guide-CUkJ8Icl.mjs"),
		"./04-community/02-rspack.mdx": () => import("./_ssr/02-rspack-DkID65Mj.mjs"),
		"./04-community/index.mdx": () => import("./_ssr/04-community-Ct8BKvo1.mjs"),
		"./13/01-getting-started/01-installation.mdx": () => import("./_ssr/01-installation-DDu79emw.mjs"),
		"./13/01-getting-started/02-project-structure.mdx": () => import("./_ssr/02-project-structure-DWtIjA4u.mjs"),
		"./13/01-getting-started/index.mdx": () => import("./_ssr/01-getting-started-CRDIvBuP.mjs"),
		"./13/02-app/01-building-your-application/01-routing/01-defining-routes.mdx": () => import("./_ssr/01-defining-routes-CrRjRwdW.mjs"),
		"./13/02-app/01-building-your-application/01-routing/02-pages-and-layouts.mdx": () => import("./_ssr/02-pages-and-layouts-LZ0xAuKl.mjs"),
		"./13/02-app/01-building-your-application/01-routing/03-linking-and-navigating.mdx": () => import("./_ssr/03-linking-and-navigating-wYu-ksKQ.mjs"),
		"./13/02-app/01-building-your-application/01-routing/04-route-groups.mdx": () => import("./_ssr/04-route-groups-D-sgVtaF.mjs"),
		"./13/02-app/01-building-your-application/01-routing/05-dynamic-routes.mdx": () => import("./_ssr/05-dynamic-routes-DulgwU6z.mjs"),
		"./13/02-app/01-building-your-application/01-routing/06-loading-ui-and-streaming.mdx": () => import("./_ssr/06-loading-ui-and-streaming-DWnVcsRd.mjs"),
		"./13/02-app/01-building-your-application/01-routing/07-error-handling.mdx": () => import("./_ssr/07-error-handling-CJ57Ntqi.mjs"),
		"./13/02-app/01-building-your-application/01-routing/08-parallel-routes.mdx": () => import("./_ssr/08-parallel-routes-CBUn_Rti.mjs"),
		"./13/02-app/01-building-your-application/01-routing/09-intercepting-routes.mdx": () => import("./_ssr/09-intercepting-routes-IXiSWkfN.mjs"),
		"./13/02-app/01-building-your-application/01-routing/10-route-handlers.mdx": () => import("./_ssr/10-route-handlers-BH9gnVa2.mjs"),
		"./13/02-app/01-building-your-application/01-routing/11-middleware.mdx": () => import("./_ssr/11-middleware-CrpX8fY9.mjs"),
		"./13/02-app/01-building-your-application/01-routing/12-colocation.mdx": () => import("./_ssr/12-colocation-CWcDzPDR.mjs"),
		"./13/02-app/01-building-your-application/01-routing/13-internationalization.mdx": () => import("./_ssr/13-internationalization-DqW0ePIc.mjs"),
		"./13/02-app/01-building-your-application/01-routing/index.mdx": () => import("./_ssr/01-routing-BiBgVzY-.mjs"),
		"./13/02-app/01-building-your-application/02-data-fetching/01-fetching-caching-and-revalidating.mdx": () => import("./_ssr/01-fetching-caching-and-revalidating-B1Qy1lQh.mjs"),
		"./13/02-app/01-building-your-application/02-data-fetching/02-patterns.mdx": () => import("./_ssr/02-patterns-Y_B1gYlA.mjs"),
		"./13/02-app/01-building-your-application/02-data-fetching/03-forms-and-mutations.mdx": () => import("./_ssr/03-forms-and-mutations-CeTogg4M.mjs"),
		"./13/02-app/01-building-your-application/02-data-fetching/index.mdx": () => import("./_ssr/02-data-fetching-L-bV5-v5.mjs"),
		"./13/02-app/01-building-your-application/03-rendering/01-server-components.mdx": () => import("./_ssr/01-server-components-DpNqKkwh.mjs"),
		"./13/02-app/01-building-your-application/03-rendering/02-client-components.mdx": () => import("./_ssr/02-client-components-BW4SvJRf.mjs"),
		"./13/02-app/01-building-your-application/03-rendering/03-composition-patterns.mdx": () => import("./_ssr/03-composition-patterns-CeKQpQC6.mjs"),
		"./13/02-app/01-building-your-application/03-rendering/04-edge-and-nodejs-runtimes.mdx": () => import("./_ssr/04-edge-and-nodejs-runtimes-q2CkdfPz.mjs"),
		"./13/02-app/01-building-your-application/03-rendering/index.mdx": () => import("./_ssr/03-rendering-DQCpa0wm.mjs"),
		"./13/02-app/01-building-your-application/04-caching/index.mdx": () => import("./_ssr/04-caching-DjKBRhru.mjs"),
		"./13/02-app/01-building-your-application/05-styling/01-css-modules.mdx": () => import("./_ssr/01-css-modules-B8Tks2la.mjs"),
		"./13/02-app/01-building-your-application/05-styling/02-tailwind-css.mdx": () => import("./_ssr/02-tailwind-css-D2Afpal-.mjs"),
		"./13/02-app/01-building-your-application/05-styling/03-css-in-js.mdx": () => import("./_ssr/03-css-in-js-UUYr4lzB.mjs"),
		"./13/02-app/01-building-your-application/05-styling/04-sass.mdx": () => import("./_ssr/04-sass-Dpl_XMPu.mjs"),
		"./13/02-app/01-building-your-application/05-styling/index.mdx": () => import("./_ssr/05-styling-DBQFVSRw.mjs"),
		"./13/02-app/01-building-your-application/06-optimizing/01-images.mdx": () => import("./_ssr/01-images-Dr01Tp2W.mjs"),
		"./13/02-app/01-building-your-application/06-optimizing/02-fonts.mdx": () => import("./_ssr/02-fonts-gZF3n86u.mjs"),
		"./13/02-app/01-building-your-application/06-optimizing/03-scripts.mdx": () => import("./_ssr/03-scripts-BDcfMjxB.mjs"),
		"./13/02-app/01-building-your-application/06-optimizing/04-metadata.mdx": () => import("./_ssr/04-metadata-C5WeuErJ.mjs"),
		"./13/02-app/01-building-your-application/06-optimizing/05-static-assets.mdx": () => import("./_ssr/05-static-assets-CodJ-tP7.mjs"),
		"./13/02-app/01-building-your-application/06-optimizing/06-lazy-loading.mdx": () => import("./_ssr/06-lazy-loading-rlDHYtFR.mjs"),
		"./13/02-app/01-building-your-application/06-optimizing/07-analytics.mdx": () => import("./_ssr/07-analytics-DlEauj2f.mjs"),
		"./13/02-app/01-building-your-application/06-optimizing/08-open-telemetry.mdx": () => import("./_ssr/08-open-telemetry-DKXgwizr.mjs"),
		"./13/02-app/01-building-your-application/06-optimizing/09-instrumentation.mdx": () => import("./_ssr/09-instrumentation-f-fy2Ysu.mjs"),
		"./13/02-app/01-building-your-application/06-optimizing/index.mdx": () => import("./_ssr/06-optimizing-D5jQO79z.mjs"),
		"./13/02-app/01-building-your-application/07-configuring/01-typescript.mdx": () => import("./_ssr/01-typescript-CAaPawUi.mjs"),
		"./13/02-app/01-building-your-application/07-configuring/02-eslint.mdx": () => import("./_ssr/02-eslint-CTAL1IYm.mjs"),
		"./13/02-app/01-building-your-application/07-configuring/03-environment-variables.mdx": () => import("./_ssr/03-environment-variables-DukZ6Ojv.mjs"),
		"./13/02-app/01-building-your-application/07-configuring/04-absolute-imports-and-module-aliases.mdx": () => import("./_ssr/04-absolute-imports-and-module-aliases-dLE3Yugd.mjs"),
		"./13/02-app/01-building-your-application/07-configuring/05-mdx.mdx": () => import("./_ssr/05-mdx-DbJeszDS.mjs"),
		"./13/02-app/01-building-your-application/07-configuring/06-src-directory.mdx": () => import("./_ssr/06-src-directory-Cp_QaQHk.mjs"),
		"./13/02-app/01-building-your-application/07-configuring/11-draft-mode.mdx": () => import("./_ssr/11-draft-mode-DMTjJsej.mjs"),
		"./13/02-app/01-building-your-application/07-configuring/15-content-security-policy.mdx": () => import("./_ssr/15-content-security-policy-Ba47wJkt.mjs"),
		"./13/02-app/01-building-your-application/07-configuring/index.mdx": () => import("./_ssr/07-configuring-BfDAi57z.mjs"),
		"./13/02-app/01-building-your-application/08-deploying/01-static-exports.mdx": () => import("./_ssr/01-static-exports-DBDtN8FR.mjs"),
		"./13/02-app/01-building-your-application/08-deploying/index.mdx": () => import("./_ssr/08-deploying-DTfPcjOj.mjs"),
		"./13/02-app/01-building-your-application/08-upgrading/03-from-vite.mdx": () => import("./_ssr/03-from-vite-DIqFQ2Ju.mjs"),
		"./13/02-app/01-building-your-application/09-upgrading/01-codemods.mdx": () => import("./_ssr/01-codemods-BTJ8HjH0.mjs"),
		"./13/02-app/01-building-your-application/09-upgrading/02-app-router-migration.mdx": () => import("./_ssr/02-app-router-migration-CQNg0WB1.mjs"),
		"./13/02-app/01-building-your-application/09-upgrading/index.mdx": () => import("./_ssr/09-upgrading-C_FACYJR.mjs"),
		"./13/02-app/01-building-your-application/index.mdx": () => import("./_ssr/01-building-your-application-BZqGWim2.mjs"),
		"./13/02-app/02-api-reference/01-components/font.mdx": () => import("./_ssr/font-D12WUI1u.mjs"),
		"./13/02-app/02-api-reference/01-components/image.mdx": () => import("./_ssr/image-Z4Brbjkd.mjs"),
		"./13/02-app/02-api-reference/01-components/index.mdx": () => import("./_ssr/01-components-bWqmnYNB.mjs"),
		"./13/02-app/02-api-reference/01-components/link.mdx": () => import("./_ssr/link-DZT6FR2p.mjs"),
		"./13/02-app/02-api-reference/01-components/script.mdx": () => import("./_ssr/script-CmOCpg_i.mjs"),
		"./13/02-app/02-api-reference/02-file-conventions/01-metadata/app-icons.mdx": () => import("./_ssr/app-icons-cVl7rkyk.mjs"),
		"./13/02-app/02-api-reference/02-file-conventions/01-metadata/index.mdx": () => import("./_ssr/01-metadata-BnOrGlXO.mjs"),
		"./13/02-app/02-api-reference/02-file-conventions/01-metadata/manifest.mdx": () => import("./_ssr/manifest-D19ds8Jq.mjs"),
		"./13/02-app/02-api-reference/02-file-conventions/01-metadata/opengraph-image.mdx": () => import("./_ssr/opengraph-image-DOE63R_Z.mjs"),
		"./13/02-app/02-api-reference/02-file-conventions/01-metadata/robots.mdx": () => import("./_ssr/robots-D9gZX-dk.mjs"),
		"./13/02-app/02-api-reference/02-file-conventions/01-metadata/sitemap.mdx": () => import("./_ssr/sitemap-YGc5hcFC.mjs"),
		"./13/02-app/02-api-reference/02-file-conventions/default.mdx": () => import("./_ssr/default-CZXH7-85.mjs"),
		"./13/02-app/02-api-reference/02-file-conventions/error.mdx": () => import("./_ssr/error-C3cFQQGR.mjs"),
		"./13/02-app/02-api-reference/02-file-conventions/index.mdx": () => import("./_ssr/02-file-conventions-BZ3KvL7H.mjs"),
		"./13/02-app/02-api-reference/02-file-conventions/layout.mdx": () => import("./_ssr/layout-CzCSTcZv.mjs"),
		"./13/02-app/02-api-reference/02-file-conventions/loading.mdx": () => import("./_ssr/loading-DPaykoal.mjs"),
		"./13/02-app/02-api-reference/02-file-conventions/not-found.mdx": () => import("./_ssr/not-found-CMIHzHBm.mjs"),
		"./13/02-app/02-api-reference/02-file-conventions/page.mdx": () => import("./_ssr/page-DUb41wzT.mjs"),
		"./13/02-app/02-api-reference/02-file-conventions/route-segment-config.mdx": () => import("./_ssr/route-segment-config-Da36YYJI.mjs"),
		"./13/02-app/02-api-reference/02-file-conventions/route.mdx": () => import("./_ssr/route-DTyJwIM7.mjs"),
		"./13/02-app/02-api-reference/02-file-conventions/template.mdx": () => import("./_ssr/template-Bnd_dEWI.mjs"),
		"./13/02-app/02-api-reference/04-functions/cookies.mdx": () => import("./_ssr/cookies-BHOlwlUs.mjs"),
		"./13/02-app/02-api-reference/04-functions/draft-mode.mdx": () => import("./_ssr/draft-mode-CEtPVVv_.mjs"),
		"./13/02-app/02-api-reference/04-functions/fetch.mdx": () => import("./_ssr/fetch-DsYTN2jv.mjs"),
		"./13/02-app/02-api-reference/04-functions/generate-image-metadata.mdx": () => import("./_ssr/generate-image-metadata-ChsRcbJR.mjs"),
		"./13/02-app/02-api-reference/04-functions/generate-metadata.mdx": () => import("./_ssr/generate-metadata-nUPt5Hl8.mjs"),
		"./13/02-app/02-api-reference/04-functions/generate-static-params.mdx": () => import("./_ssr/generate-static-params-B7P39Dhp.mjs"),
		"./13/02-app/02-api-reference/04-functions/headers.mdx": () => import("./_ssr/headers-CZyPFjQG.mjs"),
		"./13/02-app/02-api-reference/04-functions/image-response.mdx": () => import("./_ssr/image-response-CG9mzqJG.mjs"),
		"./13/02-app/02-api-reference/04-functions/index.mdx": () => import("./_ssr/04-functions-DWMG_Gfs.mjs"),
		"./13/02-app/02-api-reference/04-functions/next-request.mdx": () => import("./_ssr/next-request-DHBfDeId.mjs"),
		"./13/02-app/02-api-reference/04-functions/next-response.mdx": () => import("./_ssr/next-response-yv2iQEtL.mjs"),
		"./13/02-app/02-api-reference/04-functions/not-found.mdx": () => import("./_ssr/not-found-BHc4ccp9.mjs"),
		"./13/02-app/02-api-reference/04-functions/permanentRedirect.mdx": () => import("./_ssr/permanentRedirect-B9KNAVBj.mjs"),
		"./13/02-app/02-api-reference/04-functions/redirect.mdx": () => import("./_ssr/redirect-BfQM7Ucx.mjs"),
		"./13/02-app/02-api-reference/04-functions/revalidatePath.mdx": () => import("./_ssr/revalidatePath-o72KyFVv.mjs"),
		"./13/02-app/02-api-reference/04-functions/revalidateTag.mdx": () => import("./_ssr/revalidateTag-BufJ6mKb.mjs"),
		"./13/02-app/02-api-reference/04-functions/server-actions.mdx": () => import("./_ssr/server-actions-C95Fpgo-.mjs"),
		"./13/02-app/02-api-reference/04-functions/use-params.mdx": () => import("./_ssr/use-params-BvV27_9r.mjs"),
		"./13/02-app/02-api-reference/04-functions/use-pathname.mdx": () => import("./_ssr/use-pathname-f37378qo.mjs"),
		"./13/02-app/02-api-reference/04-functions/use-report-web-vitals.mdx": () => import("./_ssr/use-report-web-vitals-C0CM6WGR.mjs"),
		"./13/02-app/02-api-reference/04-functions/use-router.mdx": () => import("./_ssr/use-router-syPvMaKX.mjs"),
		"./13/02-app/02-api-reference/04-functions/use-search-params.mdx": () => import("./_ssr/use-search-params-D0srBVho.mjs"),
		"./13/02-app/02-api-reference/04-functions/use-selected-layout-segment.mdx": () => import("./_ssr/use-selected-layout-segment-_1nWCmY-.mjs"),
		"./13/02-app/02-api-reference/04-functions/use-selected-layout-segments.mdx": () => import("./_ssr/use-selected-layout-segments-CUDy8FWK.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/appDir.mdx": () => import("./_ssr/appDir-A1P9K-zV.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/assetPrefix.mdx": () => import("./_ssr/assetPrefix-Cz73pmeg.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/basePath.mdx": () => import("./_ssr/basePath-B9nsqhmF.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/compress.mdx": () => import("./_ssr/compress-D0VwDKz9.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/devIndicators.mdx": () => import("./_ssr/devIndicators-D5en5xK9.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/distDir.mdx": () => import("./_ssr/distDir-C0bq34tu.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/env.mdx": () => import("./_ssr/env-faK9J6pL.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/eslint.mdx": () => import("./_ssr/eslint-CwF_T62f.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/exportPathMap.mdx": () => import("./_ssr/exportPathMap-9iJtiObW.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/generateBuildId.mdx": () => import("./_ssr/generateBuildId-B8qdNKMU.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/generateEtags.mdx": () => import("./_ssr/generateEtags-ChOuPx8Q.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/headers.mdx": () => import("./_ssr/headers-BU3ls-3e.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/httpAgentOptions.mdx": () => import("./_ssr/httpAgentOptions-h56TO4qW.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/images.mdx": () => import("./_ssr/images-BAMwsL4R.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/incrementalCacheHandlerPath.mdx": () => import("./_ssr/incrementalCacheHandlerPath-Bmh4edYD.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/index.mdx": () => import("./_ssr/05-next-config-js-BXQQNiPU.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/mdxRs.mdx": () => import("./_ssr/mdxRs-bzQaU8Bq.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/onDemandEntries.mdx": () => import("./_ssr/onDemandEntries-n5zfK3UB.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/optimizePackageImports.mdx": () => import("./_ssr/optimizePackageImports-DQH8bcQg.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/output.mdx": () => import("./_ssr/output-BGNDaWuj.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/pageExtensions.mdx": () => import("./_ssr/pageExtensions-BDbdaH1l.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/poweredByHeader.mdx": () => import("./_ssr/poweredByHeader-DA3EfJaq.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/productionBrowserSourceMaps.mdx": () => import("./_ssr/productionBrowserSourceMaps-C7bJzuJl.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/reactStrictMode.mdx": () => import("./_ssr/reactStrictMode-BQZuSmsp.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/redirects.mdx": () => import("./_ssr/redirects-CIn6DizS.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/rewrites.mdx": () => import("./_ssr/rewrites-D_Sp3FCJ.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/serverComponentsExternalPackages.mdx": () => import("./_ssr/serverComponentsExternalPackages-D7mW4skw.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/trailingSlash.mdx": () => import("./_ssr/trailingSlash-CJU0WXX4.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/transpilePackages.mdx": () => import("./_ssr/transpilePackages-B6WFtQFw.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/turbo.mdx": () => import("./_ssr/turbo-izCLlsNv.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/typedRoutes.mdx": () => import("./_ssr/typedRoutes-Bs3paxPm.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/typescript.mdx": () => import("./_ssr/typescript-DJqRk8E0.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/urlImports.mdx": () => import("./_ssr/urlImports-BSjpAdfU.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/webVitalsAttribution.mdx": () => import("./_ssr/webVitalsAttribution-DLAnVMfB.mjs"),
		"./13/02-app/02-api-reference/05-next-config-js/webpack.mdx": () => import("./_ssr/webpack-DusqJJGk.mjs"),
		"./13/02-app/02-api-reference/06-create-next-app.mdx": () => import("./_ssr/06-create-next-app-B3apnOGk.mjs"),
		"./13/02-app/02-api-reference/07-edge.mdx": () => import("./_ssr/07-edge-Dm7PujXY.mjs"),
		"./13/02-app/02-api-reference/08-next-cli.mdx": () => import("./_ssr/08-next-cli-CZlDzz7H.mjs"),
		"./13/02-app/02-api-reference/index.mdx": () => import("./_ssr/02-api-reference-DjqzmkIm.mjs"),
		"./13/02-app/index.mdx": () => import("./_ssr/02-app-Du5-yHIQ.mjs"),
		"./13/03-pages/01-building-your-application/01-routing/01-pages-and-layouts.mdx": () => import("./_ssr/01-pages-and-layouts-3GkZNH_i.mjs"),
		"./13/03-pages/01-building-your-application/01-routing/02-dynamic-routes.mdx": () => import("./_ssr/02-dynamic-routes-DmJvIKJ2.mjs"),
		"./13/03-pages/01-building-your-application/01-routing/03-linking-and-navigating.mdx": () => import("./_ssr/03-linking-and-navigating-DrIpDa2x.mjs"),
		"./13/03-pages/01-building-your-application/01-routing/04-custom-app.mdx": () => import("./_ssr/04-custom-app-BwpXrUNC.mjs"),
		"./13/03-pages/01-building-your-application/01-routing/05-custom-document.mdx": () => import("./_ssr/05-custom-document-BgY2VFqj.mjs"),
		"./13/03-pages/01-building-your-application/01-routing/06-custom-error.mdx": () => import("./_ssr/06-custom-error-cHujrnSc.mjs"),
		"./13/03-pages/01-building-your-application/01-routing/07-api-routes.mdx": () => import("./_ssr/07-api-routes-4PsigedP.mjs"),
		"./13/03-pages/01-building-your-application/01-routing/08-internationalization.mdx": () => import("./_ssr/08-internationalization-BQX34ZLp.mjs"),
		"./13/03-pages/01-building-your-application/01-routing/09-authenticating.mdx": () => import("./_ssr/09-authenticating-D7SZTY6h.mjs"),
		"./13/03-pages/01-building-your-application/01-routing/10-middleware.mdx": () => import("./_ssr/10-middleware-CZxycwGI.mjs"),
		"./13/03-pages/01-building-your-application/01-routing/index.mdx": () => import("./_ssr/01-routing-BOqTKsf1.mjs"),
		"./13/03-pages/01-building-your-application/02-rendering/01-server-side-rendering.mdx": () => import("./_ssr/01-server-side-rendering-BrFgWomE.mjs"),
		"./13/03-pages/01-building-your-application/02-rendering/02-static-site-generation.mdx": () => import("./_ssr/02-static-site-generation-Dat3-Zul.mjs"),
		"./13/03-pages/01-building-your-application/02-rendering/03-incremental-static-regeneration.mdx": () => import("./_ssr/03-incremental-static-regeneration-BRmowRiR.mjs"),
		"./13/03-pages/01-building-your-application/02-rendering/04-automatic-static-optimization.mdx": () => import("./_ssr/04-automatic-static-optimization-xt4iPeFA.mjs"),
		"./13/03-pages/01-building-your-application/02-rendering/05-client-side-rendering.mdx": () => import("./_ssr/05-client-side-rendering-DN1amT5O.mjs"),
		"./13/03-pages/01-building-your-application/02-rendering/06-edge-and-nodejs-runtimes.mdx": () => import("./_ssr/06-edge-and-nodejs-runtimes-CRXe5xVN.mjs"),
		"./13/03-pages/01-building-your-application/02-rendering/index.mdx": () => import("./_ssr/02-rendering-DHCln2Fm.mjs"),
		"./13/03-pages/01-building-your-application/03-data-fetching/01-get-static-props.mdx": () => import("./_ssr/01-get-static-props-Co8fmOgv.mjs"),
		"./13/03-pages/01-building-your-application/03-data-fetching/02-get-static-paths.mdx": () => import("./_ssr/02-get-static-paths-Cp4blb6a.mjs"),
		"./13/03-pages/01-building-your-application/03-data-fetching/03-forms-and-mutations.mdx": () => import("./_ssr/03-forms-and-mutations-CRTm1JoZ.mjs"),
		"./13/03-pages/01-building-your-application/03-data-fetching/03-get-server-side-props.mdx": () => import("./_ssr/03-get-server-side-props-BXcZBd-h.mjs"),
		"./13/03-pages/01-building-your-application/03-data-fetching/04-incremental-static-regeneration.mdx": () => import("./_ssr/04-incremental-static-regeneration-BROpB_Ik.mjs"),
		"./13/03-pages/01-building-your-application/03-data-fetching/05-client-side.mdx": () => import("./_ssr/05-client-side-DYFYi8zF.mjs"),
		"./13/03-pages/01-building-your-application/03-data-fetching/index.mdx": () => import("./_ssr/03-data-fetching-CqNU5AI7.mjs"),
		"./13/03-pages/01-building-your-application/04-styling/01-css-modules.mdx": () => import("./_ssr/01-css-modules-CxbiUmsz.mjs"),
		"./13/03-pages/01-building-your-application/04-styling/02-tailwind-css.mdx": () => import("./_ssr/02-tailwind-css-5kB-8Yb1.mjs"),
		"./13/03-pages/01-building-your-application/04-styling/03-css-in-js.mdx": () => import("./_ssr/03-css-in-js-Dgq2F2Cr.mjs"),
		"./13/03-pages/01-building-your-application/04-styling/04-sass.mdx": () => import("./_ssr/04-sass-ToZ7_j3y.mjs"),
		"./13/03-pages/01-building-your-application/04-styling/index.mdx": () => import("./_ssr/04-styling-BouQF1W1.mjs"),
		"./13/03-pages/01-building-your-application/05-optimizing/01-images.mdx": () => import("./_ssr/01-images-C3la43md.mjs"),
		"./13/03-pages/01-building-your-application/05-optimizing/02-fonts.mdx": () => import("./_ssr/02-fonts-vsrKTupZ.mjs"),
		"./13/03-pages/01-building-your-application/05-optimizing/03-scripts.mdx": () => import("./_ssr/03-scripts-Cn0cW_62.mjs"),
		"./13/03-pages/01-building-your-application/05-optimizing/05-static-assets.mdx": () => import("./_ssr/05-static-assets-lWWgwshh.mjs"),
		"./13/03-pages/01-building-your-application/05-optimizing/06-lazy-loading.mdx": () => import("./_ssr/06-lazy-loading-BxGnauMW.mjs"),
		"./13/03-pages/01-building-your-application/05-optimizing/07-analytics.mdx": () => import("./_ssr/07-analytics-CA525rEf.mjs"),
		"./13/03-pages/01-building-your-application/05-optimizing/08-open-telemetry.mdx": () => import("./_ssr/08-open-telemetry-C_DV0m6M.mjs"),
		"./13/03-pages/01-building-your-application/05-optimizing/09-instrumentation.mdx": () => import("./_ssr/09-instrumentation-C6KJdjra.mjs"),
		"./13/03-pages/01-building-your-application/05-optimizing/10-testing.mdx": () => import("./_ssr/10-testing-Cpt8UfRW.mjs"),
		"./13/03-pages/01-building-your-application/05-optimizing/index.mdx": () => import("./_ssr/05-optimizing-DqFq7-Gi.mjs"),
		"./13/03-pages/01-building-your-application/06-configuring/01-typescript.mdx": () => import("./_ssr/01-typescript-CFF-FLq-.mjs"),
		"./13/03-pages/01-building-your-application/06-configuring/02-eslint.mdx": () => import("./_ssr/02-eslint-D2TZHUgb.mjs"),
		"./13/03-pages/01-building-your-application/06-configuring/03-environment-variables.mdx": () => import("./_ssr/03-environment-variables-BiLfsB0L.mjs"),
		"./13/03-pages/01-building-your-application/06-configuring/04-absolute-imports-and-module-aliases.mdx": () => import("./_ssr/04-absolute-imports-and-module-aliases-CkqPnP46.mjs"),
		"./13/03-pages/01-building-your-application/06-configuring/05-src-directory.mdx": () => import("./_ssr/05-src-directory-CfimHPR4.mjs"),
		"./13/03-pages/01-building-your-application/06-configuring/06-mdx.mdx": () => import("./_ssr/06-mdx-D1pGvOeO.mjs"),
		"./13/03-pages/01-building-your-application/06-configuring/07-amp.mdx": () => import("./_ssr/07-amp-B8G86zrn.mjs"),
		"./13/03-pages/01-building-your-application/06-configuring/08-babel.mdx": () => import("./_ssr/08-babel-DKumxDXM.mjs"),
		"./13/03-pages/01-building-your-application/06-configuring/09-post-css.mdx": () => import("./_ssr/09-post-css-BsxBGNDx.mjs"),
		"./13/03-pages/01-building-your-application/06-configuring/10-custom-server.mdx": () => import("./_ssr/10-custom-server-CSA7TeRP.mjs"),
		"./13/03-pages/01-building-your-application/06-configuring/11-draft-mode.mdx": () => import("./_ssr/11-draft-mode-DkLyrCsx.mjs"),
		"./13/03-pages/01-building-your-application/06-configuring/12-error-handling.mdx": () => import("./_ssr/12-error-handling-BxR7lXnJ.mjs"),
		"./13/03-pages/01-building-your-application/06-configuring/13-debugging.mdx": () => import("./_ssr/13-debugging-BymAVqRd.mjs"),
		"./13/03-pages/01-building-your-application/06-configuring/14-preview-mode.mdx": () => import("./_ssr/14-preview-mode-CImJCEYO.mjs"),
		"./13/03-pages/01-building-your-application/06-configuring/15-content-security-policy.mdx": () => import("./_ssr/15-content-security-policy-DdAGTkrX.mjs"),
		"./13/03-pages/01-building-your-application/06-configuring/index.mdx": () => import("./_ssr/06-configuring-e1k5MUq_.mjs"),
		"./13/03-pages/01-building-your-application/07-deploying/01-production-checklist.mdx": () => import("./_ssr/01-production-checklist-C4g7JH9I.mjs"),
		"./13/03-pages/01-building-your-application/07-deploying/02-static-exports.mdx": () => import("./_ssr/02-static-exports-7xo7u6B3.mjs"),
		"./13/03-pages/01-building-your-application/07-deploying/03-multi-zones.mdx": () => import("./_ssr/03-multi-zones-C17FvrB8.mjs"),
		"./13/03-pages/01-building-your-application/07-deploying/04-ci-build-caching.mdx": () => import("./_ssr/04-ci-build-caching-BjuZm8p8.mjs"),
		"./13/03-pages/01-building-your-application/07-deploying/index.mdx": () => import("./_ssr/07-deploying-CbwdOXnW.mjs"),
		"./13/03-pages/01-building-your-application/08-upgrading/01-codemods.mdx": () => import("./_ssr/01-codemods-DBIankdQ.mjs"),
		"./13/03-pages/01-building-your-application/08-upgrading/02-app-router-migration.mdx": () => import("./_ssr/02-app-router-migration-DtFLvJaV.mjs"),
		"./13/03-pages/01-building-your-application/08-upgrading/03-version-13.mdx": () => import("./_ssr/03-version-13-CT1Le9uA.mjs"),
		"./13/03-pages/01-building-your-application/08-upgrading/04-version-12.mdx": () => import("./_ssr/04-version-12-CMwikDGS.mjs"),
		"./13/03-pages/01-building-your-application/08-upgrading/05-version-11.mdx": () => import("./_ssr/05-version-11-UvS5_Lnv.mjs"),
		"./13/03-pages/01-building-your-application/08-upgrading/06-version-10.mdx": () => import("./_ssr/06-version-10-DOLvBT34.mjs"),
		"./13/03-pages/01-building-your-application/08-upgrading/07-version-9.mdx": () => import("./_ssr/07-version-9-DK93og2q.mjs"),
		"./13/03-pages/01-building-your-application/08-upgrading/index.mdx": () => import("./_ssr/08-upgrading-BiEP16OF.mjs"),
		"./13/03-pages/01-building-your-application/index.mdx": () => import("./_ssr/01-building-your-application-DmX0eXMr.mjs"),
		"./13/03-pages/02-api-reference/01-components/font.mdx": () => import("./_ssr/font-DOC_zh9i.mjs"),
		"./13/03-pages/02-api-reference/01-components/head.mdx": () => import("./_ssr/head-vRueQkMo.mjs"),
		"./13/03-pages/02-api-reference/01-components/image-legacy.mdx": () => import("./_ssr/image-legacy-BjlwjJPL.mjs"),
		"./13/03-pages/02-api-reference/01-components/image.mdx": () => import("./_ssr/image-BW71VS41.mjs"),
		"./13/03-pages/02-api-reference/01-components/index.mdx": () => import("./_ssr/01-components-BtYhxgtx.mjs"),
		"./13/03-pages/02-api-reference/01-components/link.mdx": () => import("./_ssr/link-cb1fZA0o.mjs"),
		"./13/03-pages/02-api-reference/01-components/script.mdx": () => import("./_ssr/script-CV7DtBCR.mjs"),
		"./13/03-pages/02-api-reference/02-functions/get-initial-props.mdx": () => import("./_ssr/get-initial-props-6NyLS1Va.mjs"),
		"./13/03-pages/02-api-reference/02-functions/get-server-side-props.mdx": () => import("./_ssr/get-server-side-props-nPo_gYm6.mjs"),
		"./13/03-pages/02-api-reference/02-functions/get-static-paths.mdx": () => import("./_ssr/get-static-paths-mPSl75zv.mjs"),
		"./13/03-pages/02-api-reference/02-functions/get-static-props.mdx": () => import("./_ssr/get-static-props-sgz6Nm80.mjs"),
		"./13/03-pages/02-api-reference/02-functions/index.mdx": () => import("./_ssr/02-functions-BxSpFhhZ.mjs"),
		"./13/03-pages/02-api-reference/02-functions/next-server.mdx": () => import("./_ssr/next-server-DZwDqP69.mjs"),
		"./13/03-pages/02-api-reference/02-functions/use-amp.mdx": () => import("./_ssr/use-amp-BcfqUcKu.mjs"),
		"./13/03-pages/02-api-reference/02-functions/use-report-web-vitals.mdx": () => import("./_ssr/use-report-web-vitals-BG6y_tZq.mjs"),
		"./13/03-pages/02-api-reference/02-functions/use-router.mdx": () => import("./_ssr/use-router-B59PBXKR.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/assetPrefix.mdx": () => import("./_ssr/assetPrefix-CTmkwNeR.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/basePath.mdx": () => import("./_ssr/basePath-C6uMmE4a.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/compress.mdx": () => import("./_ssr/compress-B_TtCzVX.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/devIndicators.mdx": () => import("./_ssr/devIndicators-BN9vC3vO.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/distDir.mdx": () => import("./_ssr/distDir-MwACNpht.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/env.mdx": () => import("./_ssr/env-jr1h1V9M.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/eslint.mdx": () => import("./_ssr/eslint-Dm578SOn.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/exportPathMap.mdx": () => import("./_ssr/exportPathMap-DuzWDzZi.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/generateBuildId.mdx": () => import("./_ssr/generateBuildId-CToqTNuX.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/generateEtags.mdx": () => import("./_ssr/generateEtags-BBBZWKQg.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/headers.mdx": () => import("./_ssr/headers-Dde7m1k9.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/httpAgentOptions.mdx": () => import("./_ssr/httpAgentOptions-DsPuiigG.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/images.mdx": () => import("./_ssr/images-BPqihwbH.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/index.mdx": () => import("./_ssr/03-next-config-js-DDWUrNWV.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/onDemandEntries.mdx": () => import("./_ssr/onDemandEntries-DIzG8RzX.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/output.mdx": () => import("./_ssr/output-cyFNbo33.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/pageExtensions.mdx": () => import("./_ssr/pageExtensions-BD_9GRLf.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/poweredByHeader.mdx": () => import("./_ssr/poweredByHeader-CrtGZvH1.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/productionBrowserSourceMaps.mdx": () => import("./_ssr/productionBrowserSourceMaps-CaFAwhB2.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/reactStrictMode.mdx": () => import("./_ssr/reactStrictMode-BQ-vhNcK.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/redirects.mdx": () => import("./_ssr/redirects-B-FX6tXO.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/rewrites.mdx": () => import("./_ssr/rewrites-Dl_xoR52.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/runtime-configuration.mdx": () => import("./_ssr/runtime-configuration-DP4rj1xT.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/trailingSlash.mdx": () => import("./_ssr/trailingSlash-C9HskHz2.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/transpilePackages.mdx": () => import("./_ssr/transpilePackages-C9TY5k7Q.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/turbo.mdx": () => import("./_ssr/turbo-DWRNV2P9.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/typescript.mdx": () => import("./_ssr/typescript-B8NpU-pD.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/urlImports.mdx": () => import("./_ssr/urlImports-Chs3u13E.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/webVitalsAttribution.mdx": () => import("./_ssr/webVitalsAttribution-Ds_ojBWY.mjs"),
		"./13/03-pages/02-api-reference/03-next-config-js/webpack.mdx": () => import("./_ssr/webpack-BPvaplmk.mjs"),
		"./13/03-pages/02-api-reference/04-create-next-app.mdx": () => import("./_ssr/04-create-next-app-Dkpupkzm.mjs"),
		"./13/03-pages/02-api-reference/05-next-cli.mdx": () => import("./_ssr/05-next-cli-D50kvmGC.mjs"),
		"./13/03-pages/02-api-reference/06-edge.mdx": () => import("./_ssr/06-edge-DyatPZ-I.mjs"),
		"./13/03-pages/02-api-reference/index.mdx": () => import("./_ssr/02-api-reference-BHw_hfq4.mjs"),
		"./13/03-pages/index.mdx": () => import("./_ssr/03-pages-rJpqg0Lx.mjs"),
		"./13/04-architecture/accessibility.mdx": () => import("./_ssr/accessibility-_NmqKCjA.mjs"),
		"./13/04-architecture/fast-refresh.mdx": () => import("./_ssr/fast-refresh--7ms_wqv.mjs"),
		"./13/04-architecture/index.mdx": () => import("./_ssr/04-architecture-BXwiqGuL.mjs"),
		"./13/04-architecture/nextjs-compiler.mdx": () => import("./_ssr/nextjs-compiler-D80aQ4OJ.mjs"),
		"./13/04-architecture/supported-browsers.mdx": () => import("./_ssr/supported-browsers-Di6zvlsN.mjs"),
		"./13/04-architecture/turbopack.mdx": () => import("./_ssr/turbopack-DKS3J8aj.mjs"),
		"./13/05-community/01-contribution-guide.mdx": () => import("./_ssr/01-contribution-guide-mY8ske3O.mjs"),
		"./13/05-community/index.mdx": () => import("./_ssr/05-community-zLf5cF8e.mjs"),
		"./13/index.mdx": () => import("./_ssr/13-XKh0gywE.mjs"),
		"./14/01-getting-started/01-installation.mdx": () => import("./_ssr/01-installation-BPCCAtSr.mjs"),
		"./14/01-getting-started/02-project-structure.mdx": () => import("./_ssr/02-project-structure-BNcXzSYG.mjs"),
		"./14/01-getting-started/index.mdx": () => import("./_ssr/01-getting-started-DrH-Rk2-.mjs"),
		"./14/02-app/01-building-your-application/01-routing/01-defining-routes.mdx": () => import("./_ssr/01-defining-routes-pTQcAIUl.mjs"),
		"./14/02-app/01-building-your-application/01-routing/02-pages-and-layouts.mdx": () => import("./_ssr/02-pages-and-layouts-BsxDWm8E.mjs"),
		"./14/02-app/01-building-your-application/01-routing/03-linking-and-navigating.mdx": () => import("./_ssr/03-linking-and-navigating-BrfXF4ZY.mjs"),
		"./14/02-app/01-building-your-application/01-routing/04-loading-ui-and-streaming.mdx": () => import("./_ssr/04-loading-ui-and-streaming-D5pCqOSu.mjs"),
		"./14/02-app/01-building-your-application/01-routing/05-error-handling.mdx": () => import("./_ssr/05-error-handling-uD8gQfeI.mjs"),
		"./14/02-app/01-building-your-application/01-routing/06-redirecting.mdx": () => import("./_ssr/06-redirecting-IeBmt_vP.mjs"),
		"./14/02-app/01-building-your-application/01-routing/07-route-groups.mdx": () => import("./_ssr/07-route-groups-BtYZkRPp.mjs"),
		"./14/02-app/01-building-your-application/01-routing/08-colocation.mdx": () => import("./_ssr/08-colocation-A0oR3IvB.mjs"),
		"./14/02-app/01-building-your-application/01-routing/09-dynamic-routes.mdx": () => import("./_ssr/09-dynamic-routes-DS0v0v5s.mjs"),
		"./14/02-app/01-building-your-application/01-routing/10-parallel-routes.mdx": () => import("./_ssr/10-parallel-routes-Cin3GNuU.mjs"),
		"./14/02-app/01-building-your-application/01-routing/11-intercepting-routes.mdx": () => import("./_ssr/11-intercepting-routes-C0lm_GPH.mjs"),
		"./14/02-app/01-building-your-application/01-routing/12-route-handlers.mdx": () => import("./_ssr/12-route-handlers-hz5axj2B.mjs"),
		"./14/02-app/01-building-your-application/01-routing/13-middleware.mdx": () => import("./_ssr/13-middleware-Ck1_-SmF.mjs"),
		"./14/02-app/01-building-your-application/01-routing/14-internationalization.mdx": () => import("./_ssr/14-internationalization-DU7rOpUJ.mjs"),
		"./14/02-app/01-building-your-application/01-routing/index.mdx": () => import("./_ssr/01-routing-l3hEtSOw.mjs"),
		"./14/02-app/01-building-your-application/02-data-fetching/01-fetching-caching-and-revalidating.mdx": () => import("./_ssr/01-fetching-caching-and-revalidating-CFjfauPz.mjs"),
		"./14/02-app/01-building-your-application/02-data-fetching/02-server-actions-and-mutations.mdx": () => import("./_ssr/02-server-actions-and-mutations-B50CvodQ.mjs"),
		"./14/02-app/01-building-your-application/02-data-fetching/03-patterns.mdx": () => import("./_ssr/03-patterns-AtjA_BgN.mjs"),
		"./14/02-app/01-building-your-application/02-data-fetching/index.mdx": () => import("./_ssr/02-data-fetching-Cz4RkIr7.mjs"),
		"./14/02-app/01-building-your-application/03-rendering/01-server-components.mdx": () => import("./_ssr/01-server-components-CUfX7paw.mjs"),
		"./14/02-app/01-building-your-application/03-rendering/02-client-components.mdx": () => import("./_ssr/02-client-components-CjXRO6-g.mjs"),
		"./14/02-app/01-building-your-application/03-rendering/03-composition-patterns.mdx": () => import("./_ssr/03-composition-patterns-BJK2F7rc.mjs"),
		"./14/02-app/01-building-your-application/03-rendering/04-edge-and-nodejs-runtimes.mdx": () => import("./_ssr/04-edge-and-nodejs-runtimes-V4cKSadi.mjs"),
		"./14/02-app/01-building-your-application/03-rendering/index.mdx": () => import("./_ssr/03-rendering-DAw_irG4.mjs"),
		"./14/02-app/01-building-your-application/04-caching/index.mdx": () => import("./_ssr/04-caching-CBII2Z8X.mjs"),
		"./14/02-app/01-building-your-application/05-styling/01-css-modules.mdx": () => import("./_ssr/01-css-modules-bv-lzg5R.mjs"),
		"./14/02-app/01-building-your-application/05-styling/02-tailwind-css.mdx": () => import("./_ssr/02-tailwind-css-Nc98fy9W.mjs"),
		"./14/02-app/01-building-your-application/05-styling/03-css-in-js.mdx": () => import("./_ssr/03-css-in-js-DzsZSJKw.mjs"),
		"./14/02-app/01-building-your-application/05-styling/04-sass.mdx": () => import("./_ssr/04-sass-agIy8ESm.mjs"),
		"./14/02-app/01-building-your-application/05-styling/index.mdx": () => import("./_ssr/05-styling-BSzRJ69t.mjs"),
		"./14/02-app/01-building-your-application/06-optimizing/01-images.mdx": () => import("./_ssr/01-images-BhsXXzE6.mjs"),
		"./14/02-app/01-building-your-application/06-optimizing/02-videos.mdx": () => import("./_ssr/02-videos-4G_JGVHw.mjs"),
		"./14/02-app/01-building-your-application/06-optimizing/03-fonts.mdx": () => import("./_ssr/03-fonts-Di6_VSez.mjs"),
		"./14/02-app/01-building-your-application/06-optimizing/04-metadata.mdx": () => import("./_ssr/04-metadata-BI3A0g4C.mjs"),
		"./14/02-app/01-building-your-application/06-optimizing/05-scripts.mdx": () => import("./_ssr/05-scripts-DW5xpmL9.mjs"),
		"./14/02-app/01-building-your-application/06-optimizing/06-bundle-analyzer.mdx": () => import("./_ssr/06-bundle-analyzer-hppPeFZG.mjs"),
		"./14/02-app/01-building-your-application/06-optimizing/07-lazy-loading.mdx": () => import("./_ssr/07-lazy-loading-CP0uwKEi.mjs"),
		"./14/02-app/01-building-your-application/06-optimizing/08-analytics.mdx": () => import("./_ssr/08-analytics-BQP2gIsC.mjs"),
		"./14/02-app/01-building-your-application/06-optimizing/09-instrumentation.mdx": () => import("./_ssr/09-instrumentation-0rc5X_mW.mjs"),
		"./14/02-app/01-building-your-application/06-optimizing/10-open-telemetry.mdx": () => import("./_ssr/10-open-telemetry-DXVzoviZ.mjs"),
		"./14/02-app/01-building-your-application/06-optimizing/11-static-assets.mdx": () => import("./_ssr/11-static-assets-Bw033hsf.mjs"),
		"./14/02-app/01-building-your-application/06-optimizing/12-third-party-libraries.mdx": () => import("./_ssr/12-third-party-libraries-C4xSdJOM.mjs"),
		"./14/02-app/01-building-your-application/06-optimizing/13-memory-usage.mdx": () => import("./_ssr/13-memory-usage-C0r8x4qn.mjs"),
		"./14/02-app/01-building-your-application/06-optimizing/index.mdx": () => import("./_ssr/06-optimizing-WLWxD7-N.mjs"),
		"./14/02-app/01-building-your-application/07-configuring/01-typescript.mdx": () => import("./_ssr/01-typescript-BJLqHfF2.mjs"),
		"./14/02-app/01-building-your-application/07-configuring/02-eslint.mdx": () => import("./_ssr/02-eslint-Bfl919Fg.mjs"),
		"./14/02-app/01-building-your-application/07-configuring/03-environment-variables.mdx": () => import("./_ssr/03-environment-variables-pXVAuKba.mjs"),
		"./14/02-app/01-building-your-application/07-configuring/04-absolute-imports-and-module-aliases.mdx": () => import("./_ssr/04-absolute-imports-and-module-aliases-ADUZSJ2Q.mjs"),
		"./14/02-app/01-building-your-application/07-configuring/05-mdx.mdx": () => import("./_ssr/05-mdx-BAHunXiO.mjs"),
		"./14/02-app/01-building-your-application/07-configuring/06-src-directory.mdx": () => import("./_ssr/06-src-directory-gSXFoZzQ.mjs"),
		"./14/02-app/01-building-your-application/07-configuring/11-draft-mode.mdx": () => import("./_ssr/11-draft-mode-BMzVs5ot.mjs"),
		"./14/02-app/01-building-your-application/07-configuring/15-content-security-policy.mdx": () => import("./_ssr/15-content-security-policy-CL5oJIGw.mjs"),
		"./14/02-app/01-building-your-application/07-configuring/index.mdx": () => import("./_ssr/07-configuring-s_9Kit3L.mjs"),
		"./14/02-app/01-building-your-application/08-testing/01-vitest.mdx": () => import("./_ssr/01-vitest-VwRm_oGY.mjs"),
		"./14/02-app/01-building-your-application/08-testing/02-jest.mdx": () => import("./_ssr/02-jest-DXx7v1o1.mjs"),
		"./14/02-app/01-building-your-application/08-testing/03-playwright.mdx": () => import("./_ssr/03-playwright-8JUQx2ju.mjs"),
		"./14/02-app/01-building-your-application/08-testing/04-cypress.mdx": () => import("./_ssr/04-cypress-CRGghWdX.mjs"),
		"./14/02-app/01-building-your-application/08-testing/index.mdx": () => import("./_ssr/08-testing-BHByCXx4.mjs"),
		"./14/02-app/01-building-your-application/09-authentication/index.mdx": () => import("./_ssr/09-authentication-DWzfRCyw.mjs"),
		"./14/02-app/01-building-your-application/10-deploying/01-production-checklist.mdx": () => import("./_ssr/01-production-checklist-DTaEU3Pj.mjs"),
		"./14/02-app/01-building-your-application/10-deploying/02-static-exports.mdx": () => import("./_ssr/02-static-exports-n1TK3Yhw.mjs"),
		"./14/02-app/01-building-your-application/10-deploying/03-multi-zones.mdx": () => import("./_ssr/03-multi-zones-Cb546h5f.mjs"),
		"./14/02-app/01-building-your-application/10-deploying/index.mdx": () => import("./_ssr/10-deploying-DLPCmN-J.mjs"),
		"./14/02-app/01-building-your-application/11-upgrading/01-codemods.mdx": () => import("./_ssr/01-codemods-BNXGtXHv.mjs"),
		"./14/02-app/01-building-your-application/11-upgrading/02-app-router-migration.mdx": () => import("./_ssr/02-app-router-migration-CpYYINRn.mjs"),
		"./14/02-app/01-building-your-application/11-upgrading/03-version-14.mdx": () => import("./_ssr/03-version-14-CJG_4N3_.mjs"),
		"./14/02-app/01-building-your-application/11-upgrading/04-from-vite.mdx": () => import("./_ssr/04-from-vite-D410gLpa.mjs"),
		"./14/02-app/01-building-your-application/11-upgrading/05-from-create-react-app.mdx": () => import("./_ssr/05-from-create-react-app-DmGBuKaO.mjs"),
		"./14/02-app/01-building-your-application/11-upgrading/index.mdx": () => import("./_ssr/11-upgrading-BEz_jNFw.mjs"),
		"./14/02-app/01-building-your-application/index.mdx": () => import("./_ssr/01-building-your-application-CUxblseW.mjs"),
		"./14/02-app/02-api-reference/01-components/font.mdx": () => import("./_ssr/font-6lWgSzuf.mjs"),
		"./14/02-app/02-api-reference/01-components/image.mdx": () => import("./_ssr/image-BA3-i3h2.mjs"),
		"./14/02-app/02-api-reference/01-components/index.mdx": () => import("./_ssr/01-components-BMgRCZMF.mjs"),
		"./14/02-app/02-api-reference/01-components/link.mdx": () => import("./_ssr/link-CX-DG6NC.mjs"),
		"./14/02-app/02-api-reference/01-components/script.mdx": () => import("./_ssr/script-BB1bBODP.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/01-metadata/app-icons.mdx": () => import("./_ssr/app-icons-BqNMUVoR.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/01-metadata/index.mdx": () => import("./_ssr/01-metadata-ClrsdN4U.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/01-metadata/manifest.mdx": () => import("./_ssr/manifest-lzXGXv_L.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/01-metadata/opengraph-image.mdx": () => import("./_ssr/opengraph-image-BvLI2ryC.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/01-metadata/robots.mdx": () => import("./_ssr/robots-CxRqS27i.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/01-metadata/sitemap.mdx": () => import("./_ssr/sitemap-DlNW77Vq.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/default.mdx": () => import("./_ssr/default-B7l5VYDU.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/error.mdx": () => import("./_ssr/error-B2xEl9y9.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/index.mdx": () => import("./_ssr/02-file-conventions-C2t1inHN.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/instrumentation.mdx": () => import("./_ssr/instrumentation-DJDMI9ak.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/layout.mdx": () => import("./_ssr/layout-DbZE43yA.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/loading.mdx": () => import("./_ssr/loading-BlI6Az4l.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/middleware.mdx": () => import("./_ssr/middleware-BwZmV7-Q.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/not-found.mdx": () => import("./_ssr/not-found-BCDLQ3za.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/page.mdx": () => import("./_ssr/page-BaL2NlWo.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/route-segment-config.mdx": () => import("./_ssr/route-segment-config-FEbErT5_.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/route.mdx": () => import("./_ssr/route-CC6w_HV9.mjs"),
		"./14/02-app/02-api-reference/02-file-conventions/template.mdx": () => import("./_ssr/template-CZVnQpdc.mjs"),
		"./14/02-app/02-api-reference/04-functions/cookies.mdx": () => import("./_ssr/cookies-BalT0lxM.mjs"),
		"./14/02-app/02-api-reference/04-functions/draft-mode.mdx": () => import("./_ssr/draft-mode-TIctSPVB.mjs"),
		"./14/02-app/02-api-reference/04-functions/fetch.mdx": () => import("./_ssr/fetch-BEkJtIR1.mjs"),
		"./14/02-app/02-api-reference/04-functions/generate-image-metadata.mdx": () => import("./_ssr/generate-image-metadata-ICnDN97t.mjs"),
		"./14/02-app/02-api-reference/04-functions/generate-metadata.mdx": () => import("./_ssr/generate-metadata-Dx6kjQTy.mjs"),
		"./14/02-app/02-api-reference/04-functions/generate-sitemaps.mdx": () => import("./_ssr/generate-sitemaps-BogO3mgy.mjs"),
		"./14/02-app/02-api-reference/04-functions/generate-static-params.mdx": () => import("./_ssr/generate-static-params-CAHdLMN6.mjs"),
		"./14/02-app/02-api-reference/04-functions/generate-viewport.mdx": () => import("./_ssr/generate-viewport-DsomIUmR.mjs"),
		"./14/02-app/02-api-reference/04-functions/headers.mdx": () => import("./_ssr/headers-Bgy4kBSN.mjs"),
		"./14/02-app/02-api-reference/04-functions/image-response.mdx": () => import("./_ssr/image-response-Dz8zSVko.mjs"),
		"./14/02-app/02-api-reference/04-functions/index.mdx": () => import("./_ssr/04-functions-BC4ubpvU.mjs"),
		"./14/02-app/02-api-reference/04-functions/next-request.mdx": () => import("./_ssr/next-request-BlJgPClv.mjs"),
		"./14/02-app/02-api-reference/04-functions/next-response.mdx": () => import("./_ssr/next-response-Dk57O0yI.mjs"),
		"./14/02-app/02-api-reference/04-functions/not-found.mdx": () => import("./_ssr/not-found-BgtsDBN0.mjs"),
		"./14/02-app/02-api-reference/04-functions/permanentRedirect.mdx": () => import("./_ssr/permanentRedirect-B_VmQQIM.mjs"),
		"./14/02-app/02-api-reference/04-functions/redirect.mdx": () => import("./_ssr/redirect-BiyRRr1d.mjs"),
		"./14/02-app/02-api-reference/04-functions/revalidatePath.mdx": () => import("./_ssr/revalidatePath-Dsnq5aRE.mjs"),
		"./14/02-app/02-api-reference/04-functions/revalidateTag.mdx": () => import("./_ssr/revalidateTag-DDCBoxLv.mjs"),
		"./14/02-app/02-api-reference/04-functions/unstable_cache.mdx": () => import("./_ssr/unstable_cache-ClZd_D00.mjs"),
		"./14/02-app/02-api-reference/04-functions/unstable_noStore.mdx": () => import("./_ssr/unstable_noStore-CtIihcYy.mjs"),
		"./14/02-app/02-api-reference/04-functions/use-params.mdx": () => import("./_ssr/use-params-LvIDHZtQ.mjs"),
		"./14/02-app/02-api-reference/04-functions/use-pathname.mdx": () => import("./_ssr/use-pathname-VCZ9sANu.mjs"),
		"./14/02-app/02-api-reference/04-functions/use-report-web-vitals.mdx": () => import("./_ssr/use-report-web-vitals-ChFzdUnK.mjs"),
		"./14/02-app/02-api-reference/04-functions/use-router.mdx": () => import("./_ssr/use-router-CzB0N-My.mjs"),
		"./14/02-app/02-api-reference/04-functions/use-search-params.mdx": () => import("./_ssr/use-search-params-DbJyXXOb.mjs"),
		"./14/02-app/02-api-reference/04-functions/use-selected-layout-segment.mdx": () => import("./_ssr/use-selected-layout-segment-D5IrYnBm.mjs"),
		"./14/02-app/02-api-reference/04-functions/use-selected-layout-segments.mdx": () => import("./_ssr/use-selected-layout-segments-wSRyVnwA.mjs"),
		"./14/02-app/02-api-reference/04-functions/userAgent.mdx": () => import("./_ssr/userAgent-tiyTzpAQ.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/appDir.mdx": () => import("./_ssr/appDir-BNWH4j2X.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/assetPrefix.mdx": () => import("./_ssr/assetPrefix-C91f09ZH.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/basePath.mdx": () => import("./_ssr/basePath-BVgoonfd.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/compress.mdx": () => import("./_ssr/compress-BQIKelzz.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/crossOrigin.mdx": () => import("./_ssr/crossOrigin-Cv8MijW_.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/devIndicators.mdx": () => import("./_ssr/devIndicators-CpSIJVIJ.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/distDir.mdx": () => import("./_ssr/distDir-mC7JEtDY.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/env.mdx": () => import("./_ssr/env-D1Bdc7MP.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/eslint.mdx": () => import("./_ssr/eslint-DEZyc9Oa.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/exportPathMap.mdx": () => import("./_ssr/exportPathMap-Dhf-c5kq.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/generateBuildId.mdx": () => import("./_ssr/generateBuildId-87WDXokm.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/generateEtags.mdx": () => import("./_ssr/generateEtags-CdjgNILM.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/headers.mdx": () => import("./_ssr/headers-BLDcr47z.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/httpAgentOptions.mdx": () => import("./_ssr/httpAgentOptions-nQm1wnMA.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/images.mdx": () => import("./_ssr/images-BVWdpYuQ.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/incrementalCacheHandlerPath.mdx": () => import("./_ssr/incrementalCacheHandlerPath-CFx6jjod.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/index.mdx": () => import("./_ssr/05-next-config-js-kvZAlANA.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/instrumentationHook.mdx": () => import("./_ssr/instrumentationHook-Dv-sikVX.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/logging.mdx": () => import("./_ssr/logging-BoRVG0Ar.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/mdxRs.mdx": () => import("./_ssr/mdxRs-BZX1YO-e.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/onDemandEntries.mdx": () => import("./_ssr/onDemandEntries-BMzCBBj_.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/optimizePackageImports.mdx": () => import("./_ssr/optimizePackageImports-2o9U7-jl.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/output.mdx": () => import("./_ssr/output-CMyGgI0-.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/pageExtensions.mdx": () => import("./_ssr/pageExtensions-BOD9KVGh.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/partial-prerendering.mdx": () => import("./_ssr/partial-prerendering-Bvxg1Rh-.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/poweredByHeader.mdx": () => import("./_ssr/poweredByHeader-DR4Jd9Iy.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/productionBrowserSourceMaps.mdx": () => import("./_ssr/productionBrowserSourceMaps-BP3Qqd-R.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/reactStrictMode.mdx": () => import("./_ssr/reactStrictMode-Cdl02Bau.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/redirects.mdx": () => import("./_ssr/redirects-CjqMrWzs.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/rewrites.mdx": () => import("./_ssr/rewrites-AIze_A0X.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/serverActions.mdx": () => import("./_ssr/serverActions-DKaXVkZD.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/serverComponentsExternalPackages.mdx": () => import("./_ssr/serverComponentsExternalPackages-BTa8ds6W.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/staleTimes.mdx": () => import("./_ssr/staleTimes-rlKrxzFW.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/trailingSlash.mdx": () => import("./_ssr/trailingSlash-32dc__bw.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/transpilePackages.mdx": () => import("./_ssr/transpilePackages-BYo3FoUm.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/turbo.mdx": () => import("./_ssr/turbo-qXuKofzJ.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/typedRoutes.mdx": () => import("./_ssr/typedRoutes-BtdB8Bb5.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/typescript.mdx": () => import("./_ssr/typescript-hSzuJqCP.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/urlImports.mdx": () => import("./_ssr/urlImports-Dd_N3Pef.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/webVitalsAttribution.mdx": () => import("./_ssr/webVitalsAttribution-u1ahGIaZ.mjs"),
		"./14/02-app/02-api-reference/05-next-config-js/webpack.mdx": () => import("./_ssr/webpack-C2yLISmi.mjs"),
		"./14/02-app/02-api-reference/06-cli/create-next-app.mdx": () => import("./_ssr/create-next-app-DomRczn5.mjs"),
		"./14/02-app/02-api-reference/06-cli/index.mdx": () => import("./_ssr/06-cli-BoK-DM4T.mjs"),
		"./14/02-app/02-api-reference/06-cli/next.mdx": () => import("./_ssr/next-DKN-FknV.mjs"),
		"./14/02-app/02-api-reference/07-edge.mdx": () => import("./_ssr/07-edge-CVmPzkCv.mjs"),
		"./14/02-app/02-api-reference/index.mdx": () => import("./_ssr/02-api-reference-Dk8XA-q-.mjs"),
		"./14/02-app/index.mdx": () => import("./_ssr/02-app-C4Gtoz0K.mjs"),
		"./14/03-pages/01-building-your-application/01-routing/01-pages-and-layouts.mdx": () => import("./_ssr/01-pages-and-layouts-BFi00ugK.mjs"),
		"./14/03-pages/01-building-your-application/01-routing/02-dynamic-routes.mdx": () => import("./_ssr/02-dynamic-routes-Dv3sEBIN.mjs"),
		"./14/03-pages/01-building-your-application/01-routing/03-linking-and-navigating.mdx": () => import("./_ssr/03-linking-and-navigating-DdJDEzXP.mjs"),
		"./14/03-pages/01-building-your-application/01-routing/04-redirecting.mdx": () => import("./_ssr/04-redirecting-BLdZKd7Z.mjs"),
		"./14/03-pages/01-building-your-application/01-routing/05-custom-app.mdx": () => import("./_ssr/05-custom-app-BUE8_6n-.mjs"),
		"./14/03-pages/01-building-your-application/01-routing/06-custom-document.mdx": () => import("./_ssr/06-custom-document-D2oLo3oD.mjs"),
		"./14/03-pages/01-building-your-application/01-routing/07-api-routes.mdx": () => import("./_ssr/07-api-routes-BrjSt600.mjs"),
		"./14/03-pages/01-building-your-application/01-routing/08-custom-error.mdx": () => import("./_ssr/08-custom-error-B2X_w5do.mjs"),
		"./14/03-pages/01-building-your-application/01-routing/10-internationalization.mdx": () => import("./_ssr/10-internationalization-DBAumfFK.mjs"),
		"./14/03-pages/01-building-your-application/01-routing/11-middleware.mdx": () => import("./_ssr/11-middleware-nVzd4YBB.mjs"),
		"./14/03-pages/01-building-your-application/01-routing/index.mdx": () => import("./_ssr/01-routing-BcbedPz0.mjs"),
		"./14/03-pages/01-building-your-application/02-rendering/01-server-side-rendering.mdx": () => import("./_ssr/01-server-side-rendering-BgOc6Xw1.mjs"),
		"./14/03-pages/01-building-your-application/02-rendering/02-static-site-generation.mdx": () => import("./_ssr/02-static-site-generation-oVpckcO9.mjs"),
		"./14/03-pages/01-building-your-application/02-rendering/04-automatic-static-optimization.mdx": () => import("./_ssr/04-automatic-static-optimization-CY7G4Jlv.mjs"),
		"./14/03-pages/01-building-your-application/02-rendering/05-client-side-rendering.mdx": () => import("./_ssr/05-client-side-rendering-BkDgVwyj.mjs"),
		"./14/03-pages/01-building-your-application/02-rendering/06-edge-and-nodejs-runtimes.mdx": () => import("./_ssr/06-edge-and-nodejs-runtimes-CqOmlIkN.mjs"),
		"./14/03-pages/01-building-your-application/02-rendering/index.mdx": () => import("./_ssr/02-rendering-Ca6NFyOU.mjs"),
		"./14/03-pages/01-building-your-application/03-data-fetching/01-get-static-props.mdx": () => import("./_ssr/01-get-static-props-Cpv80oV3.mjs"),
		"./14/03-pages/01-building-your-application/03-data-fetching/02-get-static-paths.mdx": () => import("./_ssr/02-get-static-paths-CpQEfAfo.mjs"),
		"./14/03-pages/01-building-your-application/03-data-fetching/03-forms-and-mutations.mdx": () => import("./_ssr/03-forms-and-mutations-DtcMEe18.mjs"),
		"./14/03-pages/01-building-your-application/03-data-fetching/03-get-server-side-props.mdx": () => import("./_ssr/03-get-server-side-props-DucGeFb6.mjs"),
		"./14/03-pages/01-building-your-application/03-data-fetching/04-incremental-static-regeneration.mdx": () => import("./_ssr/04-incremental-static-regeneration-ZlrqUS95.mjs"),
		"./14/03-pages/01-building-your-application/03-data-fetching/05-client-side.mdx": () => import("./_ssr/05-client-side-BGJkGZgy.mjs"),
		"./14/03-pages/01-building-your-application/03-data-fetching/index.mdx": () => import("./_ssr/03-data-fetching-j3xGVTpI.mjs"),
		"./14/03-pages/01-building-your-application/04-styling/01-css-modules.mdx": () => import("./_ssr/01-css-modules-CKNTzQS5.mjs"),
		"./14/03-pages/01-building-your-application/04-styling/02-tailwind-css.mdx": () => import("./_ssr/02-tailwind-css-C4m8HxoH.mjs"),
		"./14/03-pages/01-building-your-application/04-styling/03-css-in-js.mdx": () => import("./_ssr/03-css-in-js-42MKRs3c.mjs"),
		"./14/03-pages/01-building-your-application/04-styling/04-sass.mdx": () => import("./_ssr/04-sass-ti93shqp.mjs"),
		"./14/03-pages/01-building-your-application/04-styling/index.mdx": () => import("./_ssr/04-styling-BFVNulR4.mjs"),
		"./14/03-pages/01-building-your-application/05-optimizing/01-images.mdx": () => import("./_ssr/01-images-CWtU18r_.mjs"),
		"./14/03-pages/01-building-your-application/05-optimizing/02-fonts.mdx": () => import("./_ssr/02-fonts-kzzd26vY.mjs"),
		"./14/03-pages/01-building-your-application/05-optimizing/03-scripts.mdx": () => import("./_ssr/03-scripts-BOqsLIYx.mjs"),
		"./14/03-pages/01-building-your-application/05-optimizing/05-static-assets.mdx": () => import("./_ssr/05-static-assets-C4vuDO_X.mjs"),
		"./14/03-pages/01-building-your-application/05-optimizing/06-bundle-analyzer.mdx": () => import("./_ssr/06-bundle-analyzer-C4vrQLEk.mjs"),
		"./14/03-pages/01-building-your-application/05-optimizing/07-analytics.mdx": () => import("./_ssr/07-analytics-D4S_rdB2.mjs"),
		"./14/03-pages/01-building-your-application/05-optimizing/08-lazy-loading.mdx": () => import("./_ssr/08-lazy-loading-D0FrNHXe.mjs"),
		"./14/03-pages/01-building-your-application/05-optimizing/09-instrumentation.mdx": () => import("./_ssr/09-instrumentation-BDzuZ9rY.mjs"),
		"./14/03-pages/01-building-your-application/05-optimizing/10-open-telemetry.mdx": () => import("./_ssr/10-open-telemetry-CDklzEmq.mjs"),
		"./14/03-pages/01-building-your-application/05-optimizing/11-third-party-libraries.mdx": () => import("./_ssr/11-third-party-libraries-C8_sJkCP.mjs"),
		"./14/03-pages/01-building-your-application/05-optimizing/index.mdx": () => import("./_ssr/05-optimizing-B3kjdCc7.mjs"),
		"./14/03-pages/01-building-your-application/06-configuring/01-typescript.mdx": () => import("./_ssr/01-typescript-AvINAVwQ.mjs"),
		"./14/03-pages/01-building-your-application/06-configuring/02-eslint.mdx": () => import("./_ssr/02-eslint-DouU2Cnk.mjs"),
		"./14/03-pages/01-building-your-application/06-configuring/03-environment-variables.mdx": () => import("./_ssr/03-environment-variables-CnQD8I86.mjs"),
		"./14/03-pages/01-building-your-application/06-configuring/04-absolute-imports-and-module-aliases.mdx": () => import("./_ssr/04-absolute-imports-and-module-aliases-CmK4CcOk.mjs"),
		"./14/03-pages/01-building-your-application/06-configuring/05-src-directory.mdx": () => import("./_ssr/05-src-directory-CHKKx7yd.mjs"),
		"./14/03-pages/01-building-your-application/06-configuring/06-mdx.mdx": () => import("./_ssr/06-mdx-vgymz1TF.mjs"),
		"./14/03-pages/01-building-your-application/06-configuring/07-amp.mdx": () => import("./_ssr/07-amp-C1s596_r.mjs"),
		"./14/03-pages/01-building-your-application/06-configuring/08-babel.mdx": () => import("./_ssr/08-babel-6LXD4IvT.mjs"),
		"./14/03-pages/01-building-your-application/06-configuring/09-post-css.mdx": () => import("./_ssr/09-post-css-KWckaQJ4.mjs"),
		"./14/03-pages/01-building-your-application/06-configuring/10-custom-server.mdx": () => import("./_ssr/10-custom-server-UNpctWaa.mjs"),
		"./14/03-pages/01-building-your-application/06-configuring/11-draft-mode.mdx": () => import("./_ssr/11-draft-mode-CHRYlOPE.mjs"),
		"./14/03-pages/01-building-your-application/06-configuring/12-error-handling.mdx": () => import("./_ssr/12-error-handling-41e3JuNf.mjs"),
		"./14/03-pages/01-building-your-application/06-configuring/13-debugging.mdx": () => import("./_ssr/13-debugging-AK3c_hrB.mjs"),
		"./14/03-pages/01-building-your-application/06-configuring/14-preview-mode.mdx": () => import("./_ssr/14-preview-mode-BlbMChQy.mjs"),
		"./14/03-pages/01-building-your-application/06-configuring/15-content-security-policy.mdx": () => import("./_ssr/15-content-security-policy-BUgDT7RK.mjs"),
		"./14/03-pages/01-building-your-application/06-configuring/index.mdx": () => import("./_ssr/06-configuring-D8QTZqEm.mjs"),
		"./14/03-pages/01-building-your-application/07-testing/01-vitest.mdx": () => import("./_ssr/01-vitest-5T9daZHh.mjs"),
		"./14/03-pages/01-building-your-application/07-testing/02-jest.mdx": () => import("./_ssr/02-jest-DD1PJwrs.mjs"),
		"./14/03-pages/01-building-your-application/07-testing/03-playwright.mdx": () => import("./_ssr/03-playwright-Rux0Bao6.mjs"),
		"./14/03-pages/01-building-your-application/07-testing/04-cypress.mdx": () => import("./_ssr/04-cypress-C55A8-9C.mjs"),
		"./14/03-pages/01-building-your-application/07-testing/index.mdx": () => import("./_ssr/07-testing-BR57Cii0.mjs"),
		"./14/03-pages/01-building-your-application/08-authentication/index.mdx": () => import("./_ssr/08-authentication-BTfmOiEZ.mjs"),
		"./14/03-pages/01-building-your-application/09-deploying/01-production-checklist.mdx": () => import("./_ssr/01-production-checklist-6uGhtuT5.mjs"),
		"./14/03-pages/01-building-your-application/09-deploying/02-static-exports.mdx": () => import("./_ssr/02-static-exports-Bxm8A_R8.mjs"),
		"./14/03-pages/01-building-your-application/09-deploying/03-multi-zones.mdx": () => import("./_ssr/03-multi-zones-CeGI20kn.mjs"),
		"./14/03-pages/01-building-your-application/09-deploying/04-ci-build-caching.mdx": () => import("./_ssr/04-ci-build-caching-eqQCLiyW.mjs"),
		"./14/03-pages/01-building-your-application/09-deploying/index.mdx": () => import("./_ssr/09-deploying-BPSoX0rY.mjs"),
		"./14/03-pages/01-building-your-application/10-upgrading/01-codemods.mdx": () => import("./_ssr/01-codemods-Cu_E3pgG.mjs"),
		"./14/03-pages/01-building-your-application/10-upgrading/02-app-router-migration.mdx": () => import("./_ssr/02-app-router-migration-DldUP8sr.mjs"),
		"./14/03-pages/01-building-your-application/10-upgrading/03-from-vite.mdx": () => import("./_ssr/03-from-vite-CUGgIP5x.mjs"),
		"./14/03-pages/01-building-your-application/10-upgrading/04-from-create-react-app.mdx": () => import("./_ssr/04-from-create-react-app-DRcf89O3.mjs"),
		"./14/03-pages/01-building-your-application/10-upgrading/05-version-14.mdx": () => import("./_ssr/05-version-14-Ct0MW5Q0.mjs"),
		"./14/03-pages/01-building-your-application/10-upgrading/06-version-13.mdx": () => import("./_ssr/06-version-13-CWgJbWRL.mjs"),
		"./14/03-pages/01-building-your-application/10-upgrading/07-version-12.mdx": () => import("./_ssr/07-version-12-lvWJbYhD.mjs"),
		"./14/03-pages/01-building-your-application/10-upgrading/08-version-11.mdx": () => import("./_ssr/08-version-11-DalOOdIM.mjs"),
		"./14/03-pages/01-building-your-application/10-upgrading/09-version-10.mdx": () => import("./_ssr/09-version-10-CdE7J_ZY.mjs"),
		"./14/03-pages/01-building-your-application/10-upgrading/10-version-9.mdx": () => import("./_ssr/10-version-9-C56x8luZ.mjs"),
		"./14/03-pages/01-building-your-application/10-upgrading/index.mdx": () => import("./_ssr/10-upgrading-WM9oG2Xj.mjs"),
		"./14/03-pages/01-building-your-application/index.mdx": () => import("./_ssr/01-building-your-application-CcXVN3Id.mjs"),
		"./14/03-pages/02-api-reference/01-components/font.mdx": () => import("./_ssr/font-BRzxfgW_.mjs"),
		"./14/03-pages/02-api-reference/01-components/head.mdx": () => import("./_ssr/head-C9faaW4n.mjs"),
		"./14/03-pages/02-api-reference/01-components/image-legacy.mdx": () => import("./_ssr/image-legacy-CwQC8fvj.mjs"),
		"./14/03-pages/02-api-reference/01-components/image.mdx": () => import("./_ssr/image-MqbkW-K4.mjs"),
		"./14/03-pages/02-api-reference/01-components/index.mdx": () => import("./_ssr/01-components-CwY7_Lxi.mjs"),
		"./14/03-pages/02-api-reference/01-components/link.mdx": () => import("./_ssr/link-C1fJX9zv.mjs"),
		"./14/03-pages/02-api-reference/01-components/script.mdx": () => import("./_ssr/script-Bt7WwUGk.mjs"),
		"./14/03-pages/02-api-reference/02-functions/get-initial-props.mdx": () => import("./_ssr/get-initial-props-BLiq5Eam.mjs"),
		"./14/03-pages/02-api-reference/02-functions/get-server-side-props.mdx": () => import("./_ssr/get-server-side-props-3g1rksmK.mjs"),
		"./14/03-pages/02-api-reference/02-functions/get-static-paths.mdx": () => import("./_ssr/get-static-paths-BYoE409f.mjs"),
		"./14/03-pages/02-api-reference/02-functions/get-static-props.mdx": () => import("./_ssr/get-static-props-CRHTM2Bf.mjs"),
		"./14/03-pages/02-api-reference/02-functions/index.mdx": () => import("./_ssr/02-functions-GAqcTHNZ.mjs"),
		"./14/03-pages/02-api-reference/02-functions/next-request.mdx": () => import("./_ssr/next-request-ChZCOqwD.mjs"),
		"./14/03-pages/02-api-reference/02-functions/next-response.mdx": () => import("./_ssr/next-response-7JTgkD-E.mjs"),
		"./14/03-pages/02-api-reference/02-functions/use-amp.mdx": () => import("./_ssr/use-amp-DwDlziba.mjs"),
		"./14/03-pages/02-api-reference/02-functions/use-report-web-vitals.mdx": () => import("./_ssr/use-report-web-vitals-3ZuhRN5k.mjs"),
		"./14/03-pages/02-api-reference/02-functions/use-router.mdx": () => import("./_ssr/use-router-DQeBi__f.mjs"),
		"./14/03-pages/02-api-reference/02-functions/userAgent.mdx": () => import("./_ssr/userAgent-GfbrBPaF.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/assetPrefix.mdx": () => import("./_ssr/assetPrefix-2S8wKOOd.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/basePath.mdx": () => import("./_ssr/basePath-DOE01Z08.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/compress.mdx": () => import("./_ssr/compress-BR4epM8m.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/crossOrigin.mdx": () => import("./_ssr/crossOrigin-Cog6HOkC.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/devIndicators.mdx": () => import("./_ssr/devIndicators-CNUQTy8t.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/distDir.mdx": () => import("./_ssr/distDir-CDYZJsPh.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/env.mdx": () => import("./_ssr/env-DEP40XBa.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/eslint.mdx": () => import("./_ssr/eslint-BeIBQC7L.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/exportPathMap.mdx": () => import("./_ssr/exportPathMap-BYXnLEqx.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/generateBuildId.mdx": () => import("./_ssr/generateBuildId-BmRaDraw.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/generateEtags.mdx": () => import("./_ssr/generateEtags-97fs33R2.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/headers.mdx": () => import("./_ssr/headers-B3EsBwh0.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/httpAgentOptions.mdx": () => import("./_ssr/httpAgentOptions-CoBvAJvZ.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/images.mdx": () => import("./_ssr/images-WdcAZImu.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/index.mdx": () => import("./_ssr/03-next-config-js-CIi0klhW.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/instrumentationHook.mdx": () => import("./_ssr/instrumentationHook-DTV0rb0A.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/onDemandEntries.mdx": () => import("./_ssr/onDemandEntries-DSH3DfBA.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/optimizePackageImports.mdx": () => import("./_ssr/optimizePackageImports-B_Ksn6FS.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/output.mdx": () => import("./_ssr/output-BDwK89n3.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/pageExtensions.mdx": () => import("./_ssr/pageExtensions-C1TVPfVg.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/poweredByHeader.mdx": () => import("./_ssr/poweredByHeader-DtlyphHc.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/productionBrowserSourceMaps.mdx": () => import("./_ssr/productionBrowserSourceMaps-BZI7lvrx.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/reactStrictMode.mdx": () => import("./_ssr/reactStrictMode-Ckc6SPf4.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/redirects.mdx": () => import("./_ssr/redirects-DaRw_brI.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/rewrites.mdx": () => import("./_ssr/rewrites-CJuuh4Ra.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/runtime-configuration.mdx": () => import("./_ssr/runtime-configuration-DwcQrOHl.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/trailingSlash.mdx": () => import("./_ssr/trailingSlash-Cqx0VP0H.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/transpilePackages.mdx": () => import("./_ssr/transpilePackages-DJPmRonj.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/turbo.mdx": () => import("./_ssr/turbo-C3rCXThs.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/typescript.mdx": () => import("./_ssr/typescript--PoUYQpm.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/urlImports.mdx": () => import("./_ssr/urlImports-DoOZGuu5.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/webVitalsAttribution.mdx": () => import("./_ssr/webVitalsAttribution-DRG7zrvy.mjs"),
		"./14/03-pages/02-api-reference/03-next-config-js/webpack.mdx": () => import("./_ssr/webpack-C_4cwQq6.mjs"),
		"./14/03-pages/02-api-reference/05-edge.mdx": () => import("./_ssr/05-edge-S1VIrkkS.mjs"),
		"./14/03-pages/02-api-reference/06-cli/create-next-app.mdx": () => import("./_ssr/create-next-app-DvaCiTTW.mjs"),
		"./14/03-pages/02-api-reference/06-cli/index.mdx": () => import("./_ssr/06-cli-D4m39mkf.mjs"),
		"./14/03-pages/02-api-reference/06-cli/next.mdx": () => import("./_ssr/next-DbDJXYip.mjs"),
		"./14/03-pages/02-api-reference/index.mdx": () => import("./_ssr/02-api-reference-hnY0oiPO.mjs"),
		"./14/03-pages/index.mdx": () => import("./_ssr/03-pages-BgjTFqqp.mjs"),
		"./14/04-architecture/accessibility.mdx": () => import("./_ssr/accessibility-fFJ80Pew.mjs"),
		"./14/04-architecture/fast-refresh.mdx": () => import("./_ssr/fast-refresh-K4ppqcBy.mjs"),
		"./14/04-architecture/index.mdx": () => import("./_ssr/04-architecture-OaTSDCR2.mjs"),
		"./14/04-architecture/nextjs-compiler.mdx": () => import("./_ssr/nextjs-compiler-JMaFPYXD.mjs"),
		"./14/04-architecture/supported-browsers.mdx": () => import("./_ssr/supported-browsers-BxWZpIVn.mjs"),
		"./14/04-architecture/turbopack.mdx": () => import("./_ssr/turbopack-CeAhoex7.mjs"),
		"./14/05-community/01-contribution-guide.mdx": () => import("./_ssr/01-contribution-guide-BzWSrwA5.mjs"),
		"./14/05-community/index.mdx": () => import("./_ssr/05-community-Cr3yQMLG.mjs"),
		"./14/index.mdx": () => import("./_ssr/14-eGkUP1mj.mjs"),
		"./15/01-app/01-getting-started/01-installation.mdx": () => import("./_ssr/01-installation-Cq1vuxZt.mjs"),
		"./15/01-app/01-getting-started/02-project-structure.mdx": () => import("./_ssr/02-project-structure-Cngh1Ooh.mjs"),
		"./15/01-app/01-getting-started/03-layouts-and-pages.mdx": () => import("./_ssr/03-layouts-and-pages-zbMpcug2.mjs"),
		"./15/01-app/01-getting-started/04-linking-and-navigating.mdx": () => import("./_ssr/04-linking-and-navigating-CosDilTJ.mjs"),
		"./15/01-app/01-getting-started/05-server-and-client-components.mdx": () => import("./_ssr/05-server-and-client-components-CdkRWT9t.mjs"),
		"./15/01-app/01-getting-started/06-partial-prerendering.mdx": () => import("./_ssr/06-partial-prerendering-F1JWwSAX.mjs"),
		"./15/01-app/01-getting-started/07-fetching-data.mdx": () => import("./_ssr/07-fetching-data-DqHG5MLY.mjs"),
		"./15/01-app/01-getting-started/08-updating-data.mdx": () => import("./_ssr/08-updating-data-Uhh_eN7N.mjs"),
		"./15/01-app/01-getting-started/09-caching-and-revalidating.mdx": () => import("./_ssr/09-caching-and-revalidating-DrNMJqci.mjs"),
		"./15/01-app/01-getting-started/10-error-handling.mdx": () => import("./_ssr/10-error-handling-DgdxzOQb.mjs"),
		"./15/01-app/01-getting-started/11-css.mdx": () => import("./_ssr/11-css-B-xTbipi.mjs"),
		"./15/01-app/01-getting-started/12-images.mdx": () => import("./_ssr/12-images-CbtlYgkY.mjs"),
		"./15/01-app/01-getting-started/13-fonts.mdx": () => import("./_ssr/13-fonts-mmYulg6M.mjs"),
		"./15/01-app/01-getting-started/14-metadata-and-og-images.mdx": () => import("./_ssr/14-metadata-and-og-images-DZapqFwL.mjs"),
		"./15/01-app/01-getting-started/15-route-handlers-and-middleware.mdx": () => import("./_ssr/15-route-handlers-and-middleware-CgIK-U2a.mjs"),
		"./15/01-app/01-getting-started/16-deploying.mdx": () => import("./_ssr/16-deploying-t56YxwZ2.mjs"),
		"./15/01-app/01-getting-started/17-upgrading.mdx": () => import("./_ssr/17-upgrading-DpWulEhR.mjs"),
		"./15/01-app/01-getting-started/index.mdx": () => import("./_ssr/01-getting-started-uoNVvRT4.mjs"),
		"./15/01-app/02-guides/analytics.mdx": () => import("./_ssr/analytics-C6hiVpmv.mjs"),
		"./15/01-app/02-guides/authentication.mdx": () => import("./_ssr/authentication-lbt3crny.mjs"),
		"./15/01-app/02-guides/backend-for-frontend.mdx": () => import("./_ssr/backend-for-frontend-B3AURe0l.mjs"),
		"./15/01-app/02-guides/caching.mdx": () => import("./_ssr/caching-FbgVUlZr.mjs"),
		"./15/01-app/02-guides/ci-build-caching.mdx": () => import("./_ssr/ci-build-caching-BV0OrFsk.mjs"),
		"./15/01-app/02-guides/content-security-policy.mdx": () => import("./_ssr/content-security-policy-h306_USy.mjs"),
		"./15/01-app/02-guides/css-in-js.mdx": () => import("./_ssr/css-in-js-DzW-0dzV.mjs"),
		"./15/01-app/02-guides/custom-server.mdx": () => import("./_ssr/custom-server-B4r2ahec.mjs"),
		"./15/01-app/02-guides/data-security.mdx": () => import("./_ssr/data-security-CpxwsRp6.mjs"),
		"./15/01-app/02-guides/debugging.mdx": () => import("./_ssr/debugging-D03iHjL1.mjs"),
		"./15/01-app/02-guides/draft-mode.mdx": () => import("./_ssr/draft-mode-BtNcRF60.mjs"),
		"./15/01-app/02-guides/environment-variables.mdx": () => import("./_ssr/environment-variables-humX9YwW.mjs"),
		"./15/01-app/02-guides/forms.mdx": () => import("./_ssr/forms-BqkRxTd6.mjs"),
		"./15/01-app/02-guides/incremental-static-regeneration.mdx": () => import("./_ssr/incremental-static-regeneration-BWbBJTUN.mjs"),
		"./15/01-app/02-guides/index.mdx": () => import("./_ssr/02-guides-_gM7dRm_.mjs"),
		"./15/01-app/02-guides/instrumentation.mdx": () => import("./_ssr/instrumentation-BvF3eKi6.mjs"),
		"./15/01-app/02-guides/internationalization.mdx": () => import("./_ssr/internationalization-BNm-b45x.mjs"),
		"./15/01-app/02-guides/json-ld.mdx": () => import("./_ssr/json-ld-CUmAH0ZE.mjs"),
		"./15/01-app/02-guides/lazy-loading.mdx": () => import("./_ssr/lazy-loading-BKdxncG5.mjs"),
		"./15/01-app/02-guides/local-development.mdx": () => import("./_ssr/local-development-CAIfXB3h.mjs"),
		"./15/01-app/02-guides/mdx.mdx": () => import("./_ssr/mdx-BZ7Kvmls.mjs"),
		"./15/01-app/02-guides/memory-usage.mdx": () => import("./_ssr/memory-usage-BVZvDeUI.mjs"),
		"./15/01-app/02-guides/migrating/app-router-migration.mdx": () => import("./_ssr/app-router-migration-CE3oOyQr.mjs"),
		"./15/01-app/02-guides/migrating/from-create-react-app.mdx": () => import("./_ssr/from-create-react-app-DG_O0ry3.mjs"),
		"./15/01-app/02-guides/migrating/from-vite.mdx": () => import("./_ssr/from-vite-D1_o0BCu.mjs"),
		"./15/01-app/02-guides/migrating/index.mdx": () => import("./_ssr/migrating-odknII1q.mjs"),
		"./15/01-app/02-guides/multi-tenant.mdx": () => import("./_ssr/multi-tenant-DLY6CccK.mjs"),
		"./15/01-app/02-guides/multi-zones.mdx": () => import("./_ssr/multi-zones-gE9DBF3Q.mjs"),
		"./15/01-app/02-guides/open-telemetry.mdx": () => import("./_ssr/open-telemetry-DBGyLQ-T.mjs"),
		"./15/01-app/02-guides/package-bundling.mdx": () => import("./_ssr/package-bundling-CVSpu3YH.mjs"),
		"./15/01-app/02-guides/prefetching.mdx": () => import("./_ssr/prefetching-C8IDRMZm.mjs"),
		"./15/01-app/02-guides/production-checklist.mdx": () => import("./_ssr/production-checklist-d6Di4iX_.mjs"),
		"./15/01-app/02-guides/progressive-web-apps.mdx": () => import("./_ssr/progressive-web-apps-CS8Dgxnp.mjs"),
		"./15/01-app/02-guides/redirecting.mdx": () => import("./_ssr/redirecting-CGsDO2UM.mjs"),
		"./15/01-app/02-guides/sass.mdx": () => import("./_ssr/sass-CirjtKk3.mjs"),
		"./15/01-app/02-guides/scripts.mdx": () => import("./_ssr/scripts-BieK16nH.mjs"),
		"./15/01-app/02-guides/self-hosting.mdx": () => import("./_ssr/self-hosting-DztimT1n.mjs"),
		"./15/01-app/02-guides/single-page-applications.mdx": () => import("./_ssr/single-page-applications-DS9VILi_.mjs"),
		"./15/01-app/02-guides/static-exports.mdx": () => import("./_ssr/static-exports-BTpiZgDN.mjs"),
		"./15/01-app/02-guides/tailwind-v3-css.mdx": () => import("./_ssr/tailwind-v3-css-BofodNCB.mjs"),
		"./15/01-app/02-guides/testing/cypress.mdx": () => import("./_ssr/cypress-IeRoOyAq.mjs"),
		"./15/01-app/02-guides/testing/index.mdx": () => import("./_ssr/testing-DgwRDkdN.mjs"),
		"./15/01-app/02-guides/testing/jest.mdx": () => import("./_ssr/jest-1loxogF3.mjs"),
		"./15/01-app/02-guides/testing/playwright.mdx": () => import("./_ssr/playwright-DE-ZUciI.mjs"),
		"./15/01-app/02-guides/testing/vitest.mdx": () => import("./_ssr/vitest-DfH3JPPP.mjs"),
		"./15/01-app/02-guides/third-party-libraries.mdx": () => import("./_ssr/third-party-libraries-Baq283-E.mjs"),
		"./15/01-app/02-guides/upgrading/codemods.mdx": () => import("./_ssr/codemods-ChSbA5yo.mjs"),
		"./15/01-app/02-guides/upgrading/index.mdx": () => import("./_ssr/upgrading-CXplgqaw.mjs"),
		"./15/01-app/02-guides/upgrading/version-14.mdx": () => import("./_ssr/version-14-gE9hmB40.mjs"),
		"./15/01-app/02-guides/upgrading/version-15.mdx": () => import("./_ssr/version-15-N3GZEBBo.mjs"),
		"./15/01-app/02-guides/videos.mdx": () => import("./_ssr/videos-Cdb4K5fo.mjs"),
		"./15/01-app/03-api-reference/01-directives/index.mdx": () => import("./_ssr/01-directives-CFQx8TSk.mjs"),
		"./15/01-app/03-api-reference/01-directives/use-cache.mdx": () => import("./_ssr/use-cache-Eflrglgq.mjs"),
		"./15/01-app/03-api-reference/01-directives/use-client.mdx": () => import("./_ssr/use-client-Bw_oGhnT.mjs"),
		"./15/01-app/03-api-reference/01-directives/use-server.mdx": () => import("./_ssr/use-server-C_gHuCpd.mjs"),
		"./15/01-app/03-api-reference/02-components/font.mdx": () => import("./_ssr/font-C8Ln27NJ.mjs"),
		"./15/01-app/03-api-reference/02-components/form.mdx": () => import("./_ssr/form-NsJCNQ2l.mjs"),
		"./15/01-app/03-api-reference/02-components/image.mdx": () => import("./_ssr/image-PGrqe7ij.mjs"),
		"./15/01-app/03-api-reference/02-components/index.mdx": () => import("./_ssr/02-components-1F0wW-WH.mjs"),
		"./15/01-app/03-api-reference/02-components/link.mdx": () => import("./_ssr/link-dyosXL1q.mjs"),
		"./15/01-app/03-api-reference/02-components/script.mdx": () => import("./_ssr/script-DneAtsy7.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/01-metadata/app-icons.mdx": () => import("./_ssr/app-icons-D9jWGRQG.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/01-metadata/index.mdx": () => import("./_ssr/01-metadata-BgUCY9pA.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/01-metadata/manifest.mdx": () => import("./_ssr/manifest-BMnvbN_g.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/01-metadata/opengraph-image.mdx": () => import("./_ssr/opengraph-image-Bq9thCtR.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/01-metadata/robots.mdx": () => import("./_ssr/robots-AIgv5UBl.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/01-metadata/sitemap.mdx": () => import("./_ssr/sitemap-D-I6NdH7.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/default.mdx": () => import("./_ssr/default-D4b-X0Uw.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/dynamic-routes.mdx": () => import("./_ssr/dynamic-routes-DQHp4W-2.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/error.mdx": () => import("./_ssr/error-nIXbsCaY.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/forbidden.mdx": () => import("./_ssr/forbidden-DjGtmlKr.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/index.mdx": () => import("./_ssr/03-file-conventions-BYQG-6Mk.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/instrumentation-client.mdx": () => import("./_ssr/instrumentation-client-Dsq2MuxD.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/instrumentation.mdx": () => import("./_ssr/instrumentation-IvmOGo2K.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/intercepting-routes.mdx": () => import("./_ssr/intercepting-routes-DyQwUVZj.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/layout.mdx": () => import("./_ssr/layout-DCt9737s.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/loading.mdx": () => import("./_ssr/loading-QDwOfbt3.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/mdx-components.mdx": () => import("./_ssr/mdx-components-Ca3Fl78H.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/middleware.mdx": () => import("./_ssr/middleware-0Yoe91QZ.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/not-found.mdx": () => import("./_ssr/not-found-B5ZtcIx5.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/page.mdx": () => import("./_ssr/page-MYYKFGo9.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/parallel-routes.mdx": () => import("./_ssr/parallel-routes-BEgWQKWt.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/public-folder.mdx": () => import("./_ssr/public-folder-BtMReRbr.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/route-groups.mdx": () => import("./_ssr/route-groups-C8WJwkE3.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/route-segment-config.mdx": () => import("./_ssr/route-segment-config-Bn1heBHt.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/route.mdx": () => import("./_ssr/route-XK23KyzP.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/src-folder.mdx": () => import("./_ssr/src-folder-DXK5XgSa.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/template.mdx": () => import("./_ssr/template-C38mwask.mjs"),
		"./15/01-app/03-api-reference/03-file-conventions/unauthorized.mdx": () => import("./_ssr/unauthorized-CCepxxbt.mjs"),
		"./15/01-app/03-api-reference/04-functions/after.mdx": () => import("./_ssr/after-LbLebyJe.mjs"),
		"./15/01-app/03-api-reference/04-functions/cacheLife.mdx": () => import("./_ssr/cacheLife-ib2lWPrC.mjs"),
		"./15/01-app/03-api-reference/04-functions/cacheTag.mdx": () => import("./_ssr/cacheTag-D-izSJ-c.mjs"),
		"./15/01-app/03-api-reference/04-functions/connection.mdx": () => import("./_ssr/connection-CRb9xZFD.mjs"),
		"./15/01-app/03-api-reference/04-functions/cookies.mdx": () => import("./_ssr/cookies-C_d559-A.mjs"),
		"./15/01-app/03-api-reference/04-functions/draft-mode.mdx": () => import("./_ssr/draft-mode-CLvDPA3I.mjs"),
		"./15/01-app/03-api-reference/04-functions/fetch.mdx": () => import("./_ssr/fetch-CMKW9WPd.mjs"),
		"./15/01-app/03-api-reference/04-functions/forbidden.mdx": () => import("./_ssr/forbidden-D5vcQ92p.mjs"),
		"./15/01-app/03-api-reference/04-functions/generate-image-metadata.mdx": () => import("./_ssr/generate-image-metadata-DkylDpTA.mjs"),
		"./15/01-app/03-api-reference/04-functions/generate-metadata.mdx": () => import("./_ssr/generate-metadata-CTaqokXE.mjs"),
		"./15/01-app/03-api-reference/04-functions/generate-sitemaps.mdx": () => import("./_ssr/generate-sitemaps-CXwjh0gM.mjs"),
		"./15/01-app/03-api-reference/04-functions/generate-static-params.mdx": () => import("./_ssr/generate-static-params-BZvlzt8N.mjs"),
		"./15/01-app/03-api-reference/04-functions/generate-viewport.mdx": () => import("./_ssr/generate-viewport-CWBvKjjm.mjs"),
		"./15/01-app/03-api-reference/04-functions/headers.mdx": () => import("./_ssr/headers--B1RP4XS.mjs"),
		"./15/01-app/03-api-reference/04-functions/image-response.mdx": () => import("./_ssr/image-response-BS2fw4bS.mjs"),
		"./15/01-app/03-api-reference/04-functions/index.mdx": () => import("./_ssr/04-functions-Cmj-ENHl.mjs"),
		"./15/01-app/03-api-reference/04-functions/next-request.mdx": () => import("./_ssr/next-request-Cn0YyUx7.mjs"),
		"./15/01-app/03-api-reference/04-functions/next-response.mdx": () => import("./_ssr/next-response-BRr_iNk_.mjs"),
		"./15/01-app/03-api-reference/04-functions/not-found.mdx": () => import("./_ssr/not-found-IqmooI88.mjs"),
		"./15/01-app/03-api-reference/04-functions/permanentRedirect.mdx": () => import("./_ssr/permanentRedirect-CMVj5v8-.mjs"),
		"./15/01-app/03-api-reference/04-functions/redirect.mdx": () => import("./_ssr/redirect-BfoV9yGZ.mjs"),
		"./15/01-app/03-api-reference/04-functions/revalidatePath.mdx": () => import("./_ssr/revalidatePath-CvcLQYU4.mjs"),
		"./15/01-app/03-api-reference/04-functions/revalidateTag.mdx": () => import("./_ssr/revalidateTag-CKHgy3IA.mjs"),
		"./15/01-app/03-api-reference/04-functions/unauthorized.mdx": () => import("./_ssr/unauthorized-BM8w43jZ.mjs"),
		"./15/01-app/03-api-reference/04-functions/unstable_cache.mdx": () => import("./_ssr/unstable_cache-C5ZrDJ93.mjs"),
		"./15/01-app/03-api-reference/04-functions/unstable_noStore.mdx": () => import("./_ssr/unstable_noStore-0ZwSVs9Y.mjs"),
		"./15/01-app/03-api-reference/04-functions/unstable_rethrow.mdx": () => import("./_ssr/unstable_rethrow-CV4mEkJz.mjs"),
		"./15/01-app/03-api-reference/04-functions/use-link-status.mdx": () => import("./_ssr/use-link-status-BR4aGwSn.mjs"),
		"./15/01-app/03-api-reference/04-functions/use-params.mdx": () => import("./_ssr/use-params-CourZft1.mjs"),
		"./15/01-app/03-api-reference/04-functions/use-pathname.mdx": () => import("./_ssr/use-pathname-CY8qzCDx.mjs"),
		"./15/01-app/03-api-reference/04-functions/use-report-web-vitals.mdx": () => import("./_ssr/use-report-web-vitals-pZ-_HXd5.mjs"),
		"./15/01-app/03-api-reference/04-functions/use-router.mdx": () => import("./_ssr/use-router-4rFi8Olw.mjs"),
		"./15/01-app/03-api-reference/04-functions/use-search-params.mdx": () => import("./_ssr/use-search-params-BFg2-7Lj.mjs"),
		"./15/01-app/03-api-reference/04-functions/use-selected-layout-segment.mdx": () => import("./_ssr/use-selected-layout-segment-BjQIVhMA.mjs"),
		"./15/01-app/03-api-reference/04-functions/use-selected-layout-segments.mdx": () => import("./_ssr/use-selected-layout-segments-C5cVCXjq.mjs"),
		"./15/01-app/03-api-reference/04-functions/userAgent.mdx": () => import("./_ssr/userAgent-DL64TcHk.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/allowedDevOrigins.mdx": () => import("./_ssr/allowedDevOrigins-CpExsOVh.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/appDir.mdx": () => import("./_ssr/appDir-BeTDuOSr.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/assetPrefix.mdx": () => import("./_ssr/assetPrefix-CAaEsSJj.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/authInterrupts.mdx": () => import("./_ssr/authInterrupts-B-MT-dxi.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/basePath.mdx": () => import("./_ssr/basePath-DpKApbRm.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/browserDebugInfoInTerminal.mdx": () => import("./_ssr/browserDebugInfoInTerminal-6VLtzdT0.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/cacheComponents.mdx": () => import("./_ssr/cacheComponents-BMqbYl5-.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/cacheLife.mdx": () => import("./_ssr/cacheLife-DEeBRIhV.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/compress.mdx": () => import("./_ssr/compress-C1Wmw8W0.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/crossOrigin.mdx": () => import("./_ssr/crossOrigin-CdT0MuoQ.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/cssChunking.mdx": () => import("./_ssr/cssChunking-BG9u4w1H.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/devIndicators.mdx": () => import("./_ssr/devIndicators-C25PRnY4.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/distDir.mdx": () => import("./_ssr/distDir-CPZtjfYP.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/env.mdx": () => import("./_ssr/env-C5w5DKNF.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/eslint.mdx": () => import("./_ssr/eslint-B0Es-4Td.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/expireTime.mdx": () => import("./_ssr/expireTime-DBXaIFpP.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/exportPathMap.mdx": () => import("./_ssr/exportPathMap-C2Fwifgr.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/generateBuildId.mdx": () => import("./_ssr/generateBuildId-CbrlliiO.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/generateEtags.mdx": () => import("./_ssr/generateEtags-CAlvY0vT.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/headers.mdx": () => import("./_ssr/headers-CmVb7qIL.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/htmlLimitedBots.mdx": () => import("./_ssr/htmlLimitedBots-DjNfZQUG.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/httpAgentOptions.mdx": () => import("./_ssr/httpAgentOptions-BE9neSZx.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/images.mdx": () => import("./_ssr/images-BHVrFN4O.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/incrementalCacheHandlerPath.mdx": () => import("./_ssr/incrementalCacheHandlerPath-OXvl8wyY.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/index.mdx": () => import("./_ssr/01-next-config-js-BJhjXT3D.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/inlineCss.mdx": () => import("./_ssr/inlineCss-CTn7QlGu.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/logging.mdx": () => import("./_ssr/logging-C1FoF96y.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/mdxRs.mdx": () => import("./_ssr/mdxRs-BJpyNZhM.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/middlewareClientMaxBodySize.mdx": () => import("./_ssr/middlewareClientMaxBodySize-DkbY8UD_.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/onDemandEntries.mdx": () => import("./_ssr/onDemandEntries-SUknUsRK.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/optimizePackageImports.mdx": () => import("./_ssr/optimizePackageImports-osVRtkhm.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/output.mdx": () => import("./_ssr/output-CgsfTlqO.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/pageExtensions.mdx": () => import("./_ssr/pageExtensions-UWpiUKJw.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/poweredByHeader.mdx": () => import("./_ssr/poweredByHeader-BSr1AYjo.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/ppr.mdx": () => import("./_ssr/ppr-DsjwFv1C.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/productionBrowserSourceMaps.mdx": () => import("./_ssr/productionBrowserSourceMaps-CIzL9L-2.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/reactCompiler.mdx": () => import("./_ssr/reactCompiler-zBmrvsOr.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/reactMaxHeadersLength.mdx": () => import("./_ssr/reactMaxHeadersLength-Curu1QNE.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/reactStrictMode.mdx": () => import("./_ssr/reactStrictMode-CdNfD8y2.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/redirects.mdx": () => import("./_ssr/redirects-CM1jUaqC.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/rewrites.mdx": () => import("./_ssr/rewrites-D2NRAU4x.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/sassOptions.mdx": () => import("./_ssr/sassOptions-WvFTL4Aw.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/serverActions.mdx": () => import("./_ssr/serverActions-DxBhVBzB.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/serverComponentsHmrCache.mdx": () => import("./_ssr/serverComponentsHmrCache-CYv3Tkkv.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/serverExternalPackages.mdx": () => import("./_ssr/serverExternalPackages-Cfb2NLyg.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/staleTimes.mdx": () => import("./_ssr/staleTimes-CLVoKUTM.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/staticGeneration.mdx": () => import("./_ssr/staticGeneration-DZigyxUv.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/taint.mdx": () => import("./_ssr/taint-0NqShwsi.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/trailingSlash.mdx": () => import("./_ssr/trailingSlash-C9aU94m6.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/transpilePackages.mdx": () => import("./_ssr/transpilePackages-EIoGStUc.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/turbopack.mdx": () => import("./_ssr/turbopack-DNiki2ji.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/turbopackPersistentCaching.mdx": () => import("./_ssr/turbopackPersistentCaching-BdPA5mgI.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/typedRoutes.mdx": () => import("./_ssr/typedRoutes-D5PT9Emg.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/typescript.mdx": () => import("./_ssr/typescript-PI9p7YXl.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/urlImports.mdx": () => import("./_ssr/urlImports-zt2TQVif.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/useCache.mdx": () => import("./_ssr/useCache-FMaqPPTA.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/useLightningcss.mdx": () => import("./_ssr/useLightningcss-R4Y5njlK.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/viewTransition.mdx": () => import("./_ssr/viewTransition-CNAI6bf9.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/webVitalsAttribution.mdx": () => import("./_ssr/webVitalsAttribution-DS0huxXG.mjs"),
		"./15/01-app/03-api-reference/05-config/01-next-config-js/webpack.mdx": () => import("./_ssr/webpack-DWOOvgXL.mjs"),
		"./15/01-app/03-api-reference/05-config/02-typescript.mdx": () => import("./_ssr/02-typescript-CcsazahF.mjs"),
		"./15/01-app/03-api-reference/05-config/03-eslint.mdx": () => import("./_ssr/03-eslint-l01vF-rh.mjs"),
		"./15/01-app/03-api-reference/05-config/index.mdx": () => import("./_ssr/05-config-BBxmi_lg.mjs"),
		"./15/01-app/03-api-reference/06-cli/create-next-app.mdx": () => import("./_ssr/create-next-app-Bi0YH4qb.mjs"),
		"./15/01-app/03-api-reference/06-cli/index.mdx": () => import("./_ssr/06-cli-vjoP2gDD.mjs"),
		"./15/01-app/03-api-reference/06-cli/next.mdx": () => import("./_ssr/next-CWtbOlt6.mjs"),
		"./15/01-app/03-api-reference/07-edge.mdx": () => import("./_ssr/07-edge-B_7A9SKz.mjs"),
		"./15/01-app/03-api-reference/08-turbopack.mdx": () => import("./_ssr/08-turbopack-BZ3j75VJ.mjs"),
		"./15/01-app/03-api-reference/index.mdx": () => import("./_ssr/03-api-reference-BLFhozKj.mjs"),
		"./15/01-app/index.mdx": () => import("./_ssr/01-app-61Yly6Xa.mjs"),
		"./15/02-pages/01-getting-started/01-installation.mdx": () => import("./_ssr/01-installation-Cu4ohgsY.mjs"),
		"./15/02-pages/01-getting-started/02-project-structure.mdx": () => import("./_ssr/02-project-structure-Dlv6Tg4-.mjs"),
		"./15/02-pages/01-getting-started/04-images.mdx": () => import("./_ssr/04-images-CqvKR29_.mjs"),
		"./15/02-pages/01-getting-started/05-fonts.mdx": () => import("./_ssr/05-fonts-C0RLSGQ3.mjs"),
		"./15/02-pages/01-getting-started/06-css.mdx": () => import("./_ssr/06-css-DCkgFN8p.mjs"),
		"./15/02-pages/01-getting-started/11-deploying.mdx": () => import("./_ssr/11-deploying-Bzvuxobv.mjs"),
		"./15/02-pages/01-getting-started/index.mdx": () => import("./_ssr/01-getting-started-CHnyQY11.mjs"),
		"./15/02-pages/02-guides/amp.mdx": () => import("./_ssr/amp-CvltQcXy.mjs"),
		"./15/02-pages/02-guides/analytics.mdx": () => import("./_ssr/analytics-BWWN8jgs.mjs"),
		"./15/02-pages/02-guides/authentication.mdx": () => import("./_ssr/authentication-BrwKsyp3.mjs"),
		"./15/02-pages/02-guides/babel.mdx": () => import("./_ssr/babel-OsZy6XV7.mjs"),
		"./15/02-pages/02-guides/ci-build-caching.mdx": () => import("./_ssr/ci-build-caching-DVt9AGFT.mjs"),
		"./15/02-pages/02-guides/content-security-policy.mdx": () => import("./_ssr/content-security-policy-jcCpcnHo.mjs"),
		"./15/02-pages/02-guides/css-in-js.mdx": () => import("./_ssr/css-in-js-zw6ywU5U.mjs"),
		"./15/02-pages/02-guides/custom-server.mdx": () => import("./_ssr/custom-server-CcSOdAUg.mjs"),
		"./15/02-pages/02-guides/debugging.mdx": () => import("./_ssr/debugging-DY0zUT5q.mjs"),
		"./15/02-pages/02-guides/draft-mode.mdx": () => import("./_ssr/draft-mode-BuAs002N.mjs"),
		"./15/02-pages/02-guides/environment-variables.mdx": () => import("./_ssr/environment-variables-3yiiQ2i6.mjs"),
		"./15/02-pages/02-guides/forms.mdx": () => import("./_ssr/forms-159yFyHZ.mjs"),
		"./15/02-pages/02-guides/incremental-static-regeneration.mdx": () => import("./_ssr/incremental-static-regeneration-DJhJQxAU.mjs"),
		"./15/02-pages/02-guides/index.mdx": () => import("./_ssr/02-guides-DVUd_UwW.mjs"),
		"./15/02-pages/02-guides/instrumentation.mdx": () => import("./_ssr/instrumentation-CkhRwLbk.mjs"),
		"./15/02-pages/02-guides/internationalization.mdx": () => import("./_ssr/internationalization-ScVwj2DJ.mjs"),
		"./15/02-pages/02-guides/lazy-loading.mdx": () => import("./_ssr/lazy-loading-Cb9ZJ9gJ.mjs"),
		"./15/02-pages/02-guides/mdx.mdx": () => import("./_ssr/mdx-DplRtMHb.mjs"),
		"./15/02-pages/02-guides/migrating/app-router-migration.mdx": () => import("./_ssr/app-router-migration-DQSoraRw.mjs"),
		"./15/02-pages/02-guides/migrating/from-create-react-app.mdx": () => import("./_ssr/from-create-react-app-h2Szk3PJ.mjs"),
		"./15/02-pages/02-guides/migrating/from-vite.mdx": () => import("./_ssr/from-vite-CimGiXrr.mjs"),
		"./15/02-pages/02-guides/migrating/index.mdx": () => import("./_ssr/migrating-CD2lMh7P.mjs"),
		"./15/02-pages/02-guides/multi-zones.mdx": () => import("./_ssr/multi-zones-ChUVsS5E.mjs"),
		"./15/02-pages/02-guides/open-telemetry.mdx": () => import("./_ssr/open-telemetry-BvdxHNt8.mjs"),
		"./15/02-pages/02-guides/package-bundling.mdx": () => import("./_ssr/package-bundling-BFn8Jn7H.mjs"),
		"./15/02-pages/02-guides/post-css.mdx": () => import("./_ssr/post-css-BJzyWupl.mjs"),
		"./15/02-pages/02-guides/preview-mode.mdx": () => import("./_ssr/preview-mode-UxTdFlUv.mjs"),
		"./15/02-pages/02-guides/production-checklist.mdx": () => import("./_ssr/production-checklist-F60RKl3z.mjs"),
		"./15/02-pages/02-guides/redirecting.mdx": () => import("./_ssr/redirecting-jCR4mhbn.mjs"),
		"./15/02-pages/02-guides/sass.mdx": () => import("./_ssr/sass-BJkPiCw4.mjs"),
		"./15/02-pages/02-guides/scripts.mdx": () => import("./_ssr/scripts-DJunHXYf.mjs"),
		"./15/02-pages/02-guides/self-hosting.mdx": () => import("./_ssr/self-hosting-BkouzejW.mjs"),
		"./15/02-pages/02-guides/static-exports.mdx": () => import("./_ssr/static-exports-CSRH1XWm.mjs"),
		"./15/02-pages/02-guides/tailwind-v3-css.mdx": () => import("./_ssr/tailwind-v3-css-BRklPiKH.mjs"),
		"./15/02-pages/02-guides/testing/cypress.mdx": () => import("./_ssr/cypress-CCAn0Xwz.mjs"),
		"./15/02-pages/02-guides/testing/index.mdx": () => import("./_ssr/testing-Dw7FbKPA.mjs"),
		"./15/02-pages/02-guides/testing/jest.mdx": () => import("./_ssr/jest-Brkcc8kE.mjs"),
		"./15/02-pages/02-guides/testing/playwright.mdx": () => import("./_ssr/playwright-DgIXfzYw.mjs"),
		"./15/02-pages/02-guides/testing/vitest.mdx": () => import("./_ssr/vitest-CCgKmAkX.mjs"),
		"./15/02-pages/02-guides/third-party-libraries.mdx": () => import("./_ssr/third-party-libraries-Bmmtc9sF.mjs"),
		"./15/02-pages/02-guides/upgrading/codemods.mdx": () => import("./_ssr/codemods-CkWeX1cp.mjs"),
		"./15/02-pages/02-guides/upgrading/index.mdx": () => import("./_ssr/upgrading-D0oJHv8z.mjs"),
		"./15/02-pages/02-guides/upgrading/version-10.mdx": () => import("./_ssr/version-10-CTH74n8E.mjs"),
		"./15/02-pages/02-guides/upgrading/version-11.mdx": () => import("./_ssr/version-11-BsGo3GGV.mjs"),
		"./15/02-pages/02-guides/upgrading/version-12.mdx": () => import("./_ssr/version-12-DSv4bF_5.mjs"),
		"./15/02-pages/02-guides/upgrading/version-13.mdx": () => import("./_ssr/version-13-EJNWp6ed.mjs"),
		"./15/02-pages/02-guides/upgrading/version-14.mdx": () => import("./_ssr/version-14-CPhqaKjo.mjs"),
		"./15/02-pages/02-guides/upgrading/version-9.mdx": () => import("./_ssr/version-9-B3acgF7t.mjs"),
		"./15/02-pages/03-building-your-application/01-routing/01-pages-and-layouts.mdx": () => import("./_ssr/01-pages-and-layouts-CBWFtMgd.mjs"),
		"./15/02-pages/03-building-your-application/01-routing/02-dynamic-routes.mdx": () => import("./_ssr/02-dynamic-routes-Ccoxu8gF.mjs"),
		"./15/02-pages/03-building-your-application/01-routing/03-linking-and-navigating.mdx": () => import("./_ssr/03-linking-and-navigating-BwXBheWL.mjs"),
		"./15/02-pages/03-building-your-application/01-routing/05-custom-app.mdx": () => import("./_ssr/05-custom-app-wrzG5Y7d.mjs"),
		"./15/02-pages/03-building-your-application/01-routing/06-custom-document.mdx": () => import("./_ssr/06-custom-document-DGEv2yPX.mjs"),
		"./15/02-pages/03-building-your-application/01-routing/07-api-routes.mdx": () => import("./_ssr/07-api-routes-B4Ay2lLA.mjs"),
		"./15/02-pages/03-building-your-application/01-routing/08-custom-error.mdx": () => import("./_ssr/08-custom-error-CIzruNhp.mjs"),
		"./15/02-pages/03-building-your-application/01-routing/index.mdx": () => import("./_ssr/01-routing-CPrP0-YT.mjs"),
		"./15/02-pages/03-building-your-application/02-rendering/01-server-side-rendering.mdx": () => import("./_ssr/01-server-side-rendering-DdhQZBsT.mjs"),
		"./15/02-pages/03-building-your-application/02-rendering/02-static-site-generation.mdx": () => import("./_ssr/02-static-site-generation-DhVJ1PXL.mjs"),
		"./15/02-pages/03-building-your-application/02-rendering/04-automatic-static-optimization.mdx": () => import("./_ssr/04-automatic-static-optimization-DKHJEbZP.mjs"),
		"./15/02-pages/03-building-your-application/02-rendering/05-client-side-rendering.mdx": () => import("./_ssr/05-client-side-rendering-CrzDoSLT.mjs"),
		"./15/02-pages/03-building-your-application/02-rendering/index.mdx": () => import("./_ssr/02-rendering-C9pzrHS3.mjs"),
		"./15/02-pages/03-building-your-application/03-data-fetching/01-get-static-props.mdx": () => import("./_ssr/01-get-static-props-XcSQw9RA.mjs"),
		"./15/02-pages/03-building-your-application/03-data-fetching/02-get-static-paths.mdx": () => import("./_ssr/02-get-static-paths-vCRr8FCf.mjs"),
		"./15/02-pages/03-building-your-application/03-data-fetching/03-forms-and-mutations.mdx": () => import("./_ssr/03-forms-and-mutations-C7ckWQnx.mjs"),
		"./15/02-pages/03-building-your-application/03-data-fetching/03-get-server-side-props.mdx": () => import("./_ssr/03-get-server-side-props-C4kor4Bb.mjs"),
		"./15/02-pages/03-building-your-application/03-data-fetching/05-client-side.mdx": () => import("./_ssr/05-client-side-Dsfun_57.mjs"),
		"./15/02-pages/03-building-your-application/03-data-fetching/index.mdx": () => import("./_ssr/03-data-fetching-BcVzwebn.mjs"),
		"./15/02-pages/03-building-your-application/06-configuring/12-error-handling.mdx": () => import("./_ssr/12-error-handling-BBAR_Vcc.mjs"),
		"./15/02-pages/03-building-your-application/06-configuring/index.mdx": () => import("./_ssr/06-configuring-xA_-aWKd.mjs"),
		"./15/02-pages/03-building-your-application/index.mdx": () => import("./_ssr/03-building-your-application-OHVwutNT.mjs"),
		"./15/02-pages/04-api-reference/01-components/font.mdx": () => import("./_ssr/font-kfUQm6Oz.mjs"),
		"./15/02-pages/04-api-reference/01-components/form.mdx": () => import("./_ssr/form-BSRYXjxg.mjs"),
		"./15/02-pages/04-api-reference/01-components/head.mdx": () => import("./_ssr/head-Bd6HleRq.mjs"),
		"./15/02-pages/04-api-reference/01-components/image-legacy.mdx": () => import("./_ssr/image-legacy-DmPMADTz.mjs"),
		"./15/02-pages/04-api-reference/01-components/image.mdx": () => import("./_ssr/image-DyU7uVWJ.mjs"),
		"./15/02-pages/04-api-reference/01-components/index.mdx": () => import("./_ssr/01-components-BXlUpKX-.mjs"),
		"./15/02-pages/04-api-reference/01-components/link.mdx": () => import("./_ssr/link-i7p_G3Zg.mjs"),
		"./15/02-pages/04-api-reference/01-components/script.mdx": () => import("./_ssr/script-DpdoNWsH.mjs"),
		"./15/02-pages/04-api-reference/02-file-conventions/index.mdx": () => import("./_ssr/02-file-conventions-DqEE93UA.mjs"),
		"./15/02-pages/04-api-reference/02-file-conventions/instrumentation.mdx": () => import("./_ssr/instrumentation-D1XMyn66.mjs"),
		"./15/02-pages/04-api-reference/02-file-conventions/middleware.mdx": () => import("./_ssr/middleware-hQrvN9ks.mjs"),
		"./15/02-pages/04-api-reference/02-file-conventions/public-folder.mdx": () => import("./_ssr/public-folder-DBvWEjwy.mjs"),
		"./15/02-pages/04-api-reference/02-file-conventions/src-folder.mdx": () => import("./_ssr/src-folder-BYg6t7to.mjs"),
		"./15/02-pages/04-api-reference/03-functions/get-initial-props.mdx": () => import("./_ssr/get-initial-props-fis79cUv.mjs"),
		"./15/02-pages/04-api-reference/03-functions/get-server-side-props.mdx": () => import("./_ssr/get-server-side-props-hPtXn6So.mjs"),
		"./15/02-pages/04-api-reference/03-functions/get-static-paths.mdx": () => import("./_ssr/get-static-paths-CAsRykmt.mjs"),
		"./15/02-pages/04-api-reference/03-functions/get-static-props.mdx": () => import("./_ssr/get-static-props-vxzkw1fs.mjs"),
		"./15/02-pages/04-api-reference/03-functions/index.mdx": () => import("./_ssr/03-functions-B9aaYPVO.mjs"),
		"./15/02-pages/04-api-reference/03-functions/next-request.mdx": () => import("./_ssr/next-request-u7VLi8H2.mjs"),
		"./15/02-pages/04-api-reference/03-functions/next-response.mdx": () => import("./_ssr/next-response-DKWWUjoN.mjs"),
		"./15/02-pages/04-api-reference/03-functions/use-amp.mdx": () => import("./_ssr/use-amp-CmZaLrSK.mjs"),
		"./15/02-pages/04-api-reference/03-functions/use-report-web-vitals.mdx": () => import("./_ssr/use-report-web-vitals-Dbdr_hCz.mjs"),
		"./15/02-pages/04-api-reference/03-functions/use-router.mdx": () => import("./_ssr/use-router-g_D-Fu9F.mjs"),
		"./15/02-pages/04-api-reference/03-functions/userAgent.mdx": () => import("./_ssr/userAgent-CmwKLt8a.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/allowedDevOrigins.mdx": () => import("./_ssr/allowedDevOrigins-CljFTrQo.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/assetPrefix.mdx": () => import("./_ssr/assetPrefix-CdnGAAQ4.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/basePath.mdx": () => import("./_ssr/basePath-BmD6sK8E.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/bundlePagesRouterDependencies.mdx": () => import("./_ssr/bundlePagesRouterDependencies-Sg0rDQzR.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/compress.mdx": () => import("./_ssr/compress-CmxMkkTh.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/crossOrigin.mdx": () => import("./_ssr/crossOrigin-DayQZmGG.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/devIndicators.mdx": () => import("./_ssr/devIndicators-B1cBZppT.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/distDir.mdx": () => import("./_ssr/distDir-RYED7lNn.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/env.mdx": () => import("./_ssr/env-DzqyvX7x.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/eslint.mdx": () => import("./_ssr/eslint-CARtOt2m.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/exportPathMap.mdx": () => import("./_ssr/exportPathMap-C331nIWC.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/generateBuildId.mdx": () => import("./_ssr/generateBuildId-DukWsurR.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/generateEtags.mdx": () => import("./_ssr/generateEtags-C1hqvhi8.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/headers.mdx": () => import("./_ssr/headers-CqmwYoYh.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/httpAgentOptions.mdx": () => import("./_ssr/httpAgentOptions-DWkwjrtj.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/images.mdx": () => import("./_ssr/images-DGs2PmgB.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/index.mdx": () => import("./_ssr/01-next-config-js-D9zF0qaA.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/middlewareClientMaxBodySize.mdx": () => import("./_ssr/middlewareClientMaxBodySize-BMVM8ma7.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/onDemandEntries.mdx": () => import("./_ssr/onDemandEntries-B3SfJn1A.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/optimizePackageImports.mdx": () => import("./_ssr/optimizePackageImports-BHiGV25f.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/output.mdx": () => import("./_ssr/output-BicEJIsv.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/pageExtensions.mdx": () => import("./_ssr/pageExtensions-DBPchfiB.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/poweredByHeader.mdx": () => import("./_ssr/poweredByHeader-D7JY3xRl.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/productionBrowserSourceMaps.mdx": () => import("./_ssr/productionBrowserSourceMaps-BcM6RyZd.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/reactStrictMode.mdx": () => import("./_ssr/reactStrictMode-jWBxu28P.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/redirects.mdx": () => import("./_ssr/redirects-tO1SXP6X.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/rewrites.mdx": () => import("./_ssr/rewrites-Dw-7U_kP.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/runtime-configuration.mdx": () => import("./_ssr/runtime-configuration-BzwgamK7.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/serverExternalPackages.mdx": () => import("./_ssr/serverExternalPackages-BYb2n1ZF.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/trailingSlash.mdx": () => import("./_ssr/trailingSlash-DJwdDvNy.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/transpilePackages.mdx": () => import("./_ssr/transpilePackages-DpGxErQv.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/turbo.mdx": () => import("./_ssr/turbo-BWIvI065.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/typescript.mdx": () => import("./_ssr/typescript-A2BTYs4k.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/urlImports.mdx": () => import("./_ssr/urlImports-BCE9gjXI.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/useLightningcss.mdx": () => import("./_ssr/useLightningcss-DfpNfITq.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/webVitalsAttribution.mdx": () => import("./_ssr/webVitalsAttribution-DJnVZVqh.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-next-config-js/webpack.mdx": () => import("./_ssr/webpack-CkzhD_e0.mjs"),
		"./15/02-pages/04-api-reference/04-config/01-typescript.mdx": () => import("./_ssr/01-typescript-B7ErS659.mjs"),
		"./15/02-pages/04-api-reference/04-config/02-eslint.mdx": () => import("./_ssr/02-eslint-vXXe64Qm.mjs"),
		"./15/02-pages/04-api-reference/04-config/index.mdx": () => import("./_ssr/04-config-DV6DQvVJ.mjs"),
		"./15/02-pages/04-api-reference/05-cli/create-next-app.mdx": () => import("./_ssr/create-next-app-DGZKPyJM.mjs"),
		"./15/02-pages/04-api-reference/05-cli/index.mdx": () => import("./_ssr/05-cli-BWbVfKea.mjs"),
		"./15/02-pages/04-api-reference/05-cli/next.mdx": () => import("./_ssr/next-BZf1_aNr.mjs"),
		"./15/02-pages/04-api-reference/06-edge.mdx": () => import("./_ssr/06-edge-IwqawEuR.mjs"),
		"./15/02-pages/04-api-reference/08-turbopack.mdx": () => import("./_ssr/08-turbopack-BYQzPP93.mjs"),
		"./15/02-pages/04-api-reference/index.mdx": () => import("./_ssr/04-api-reference-AAX5dhRt.mjs"),
		"./15/02-pages/index.mdx": () => import("./_ssr/02-pages-B7IoXDTQ.mjs"),
		"./15/03-architecture/accessibility.mdx": () => import("./_ssr/accessibility-CAyvfmAh.mjs"),
		"./15/03-architecture/fast-refresh.mdx": () => import("./_ssr/fast-refresh-D3z-edw1.mjs"),
		"./15/03-architecture/index.mdx": () => import("./_ssr/03-architecture-BsKb0xQH.mjs"),
		"./15/03-architecture/nextjs-compiler.mdx": () => import("./_ssr/nextjs-compiler-CrQ3_Lpf.mjs"),
		"./15/03-architecture/supported-browsers.mdx": () => import("./_ssr/supported-browsers-adLGjrV-.mjs"),
		"./15/04-community/01-contribution-guide.mdx": () => import("./_ssr/01-contribution-guide-DeLntIJy.mjs"),
		"./15/04-community/02-rspack.mdx": () => import("./_ssr/02-rspack-BIiN8v3A.mjs"),
		"./15/04-community/index.mdx": () => import("./_ssr/04-community-DgshyUqq.mjs"),
		"./15/index.mdx": () => import("./_ssr/15-BEDyECUk.mjs"),
		"./index.mdx": () => import("./_ssr/docs-BnJ0L7Ok.mjs")
	})),
	learn: create.doc("learn", /* @__PURE__ */ Object.assign({
		"./01-react-foundations/01-what-is-react-and-nextjs.mdx": () => import("./_ssr/01-what-is-react-and-nextjs-DeUyY2gw.mjs"),
		"./01-react-foundations/02-rendering-ui.mdx": () => import("./_ssr/02-rendering-ui-IUzYoTDx.mjs"),
		"./01-react-foundations/03-updating-ui-with-javascript.mdx": () => import("./_ssr/03-updating-ui-with-javascript-BpKllOx7.mjs"),
		"./01-react-foundations/04-getting-started-with-react.mdx": () => import("./_ssr/04-getting-started-with-react-YBZmMwOk.mjs"),
		"./01-react-foundations/05-building-ui-with-components.mdx": () => import("./_ssr/05-building-ui-with-components-CmQo849l.mjs"),
		"./01-react-foundations/06-displaying-data-with-props.mdx": () => import("./_ssr/06-displaying-data-with-props-BmNQn1Wr.mjs"),
		"./01-react-foundations/07-updating-state.mdx": () => import("./_ssr/07-updating-state-BgFbviS7.mjs"),
		"./01-react-foundations/08-from-react-to-nextjs.mdx": () => import("./_ssr/08-from-react-to-nextjs-COYhtch6.mjs"),
		"./01-react-foundations/09-installation.mdx": () => import("./_ssr/09-installation-BYsSTh6n.mjs"),
		"./01-react-foundations/10-server-and-client-components.mdx": () => import("./_ssr/10-server-and-client-components-MBurcLNF.mjs"),
		"./01-react-foundations/index.mdx": () => import("./_ssr/01-react-foundations-JwM3J2eH.mjs"),
		"./02-dashboard-app/01-getting-started.mdx": () => import("./_ssr/01-getting-started-C3YHJctl.mjs"),
		"./02-dashboard-app/02-css-styling.mdx": () => import("./_ssr/02-css-styling-B2GLEwpH.mjs"),
		"./02-dashboard-app/03-optimizing-fonts-images.mdx": () => import("./_ssr/03-optimizing-fonts-images-kuZl3QhY.mjs"),
		"./02-dashboard-app/04-creating-layouts-and-pages.mdx": () => import("./_ssr/04-creating-layouts-and-pages-DITFdFPg.mjs"),
		"./02-dashboard-app/05-navigating-between-pages.mdx": () => import("./_ssr/05-navigating-between-pages-MPnqS1Hz.mjs"),
		"./02-dashboard-app/06-setting-up-your-database.mdx": () => import("./_ssr/06-setting-up-your-database-CpgZHSd8.mjs"),
		"./02-dashboard-app/07-fetching-data.mdx": () => import("./_ssr/07-fetching-data-CFx4K6TQ.mjs"),
		"./02-dashboard-app/08-static-and-dynamic-rendering.mdx": () => import("./_ssr/08-static-and-dynamic-rendering-Dm7RILdh.mjs"),
		"./02-dashboard-app/09-streaming.mdx": () => import("./_ssr/09-streaming-DnmBCEab.mjs"),
		"./02-dashboard-app/10-partial-prerendering.mdx": () => import("./_ssr/10-partial-prerendering-BrJMzWmh.mjs"),
		"./02-dashboard-app/11-adding-search-and-pagination.mdx": () => import("./_ssr/11-adding-search-and-pagination-CiAO4shJ.mjs"),
		"./02-dashboard-app/12-mutating-data.mdx": () => import("./_ssr/12-mutating-data-Nvcu4t7K.mjs"),
		"./02-dashboard-app/13-error-handling.mdx": () => import("./_ssr/13-error-handling-B2ocgmn7.mjs"),
		"./02-dashboard-app/14-improving-accessibility.mdx": () => import("./_ssr/14-improving-accessibility-JyXzFDPY.mjs"),
		"./02-dashboard-app/15-adding-authentication.mdx": () => import("./_ssr/15-adding-authentication-Vx2QnZHd.mjs"),
		"./02-dashboard-app/16-adding-metadata.mdx": () => import("./_ssr/16-adding-metadata-1rFZKpdr.mjs"),
		"./02-dashboard-app/index.mdx": () => import("./_ssr/02-dashboard-app-Dvwiqvqu.mjs"),
		"./03-pages-router/01-create-nextjs-app-setup.mdx": () => import("./_ssr/01-create-nextjs-app-setup-DaZd97c8.mjs"),
		"./03-pages-router/02-create-nextjs-app-welcome-to-nextjs.mdx": () => import("./_ssr/02-create-nextjs-app-welcome-to-nextjs-CAldMNLF.mjs"),
		"./03-pages-router/03-create-nextjs-app-editing-the-page.mdx": () => import("./_ssr/03-create-nextjs-app-editing-the-page-DtAMklox.mjs"),
		"./03-pages-router/04-navigate-between-pages.mdx": () => import("./_ssr/04-navigate-between-pages-DhOU3wgE.mjs"),
		"./03-pages-router/05-navigate-between-pages-setup.mdx": () => import("./_ssr/05-navigate-between-pages-setup-DUQhzbgp.mjs"),
		"./03-pages-router/06-navigate-between-pages-pages-in-nextjs.mdx": () => import("./_ssr/06-navigate-between-pages-pages-in-nextjs-CSVYfMBG.mjs"),
		"./03-pages-router/07-navigate-between-pages-link-component.mdx": () => import("./_ssr/07-navigate-between-pages-link-component-CSHCYjft.mjs"),
		"./03-pages-router/08-navigate-between-pages-client-side.mdx": () => import("./_ssr/08-navigate-between-pages-client-side-DaIWGuRF.mjs"),
		"./03-pages-router/09-assets-metadata-css-layout-component.mdx": () => import("./_ssr/09-assets-metadata-css-layout-component-DloU8lvL.mjs"),
		"./03-pages-router/10-assets-metadata-css.mdx": () => import("./_ssr/10-assets-metadata-css-CyYcVprv.mjs"),
		"./03-pages-router/11-assets-metadata-css-setup.mdx": () => import("./_ssr/11-assets-metadata-css-setup-Dxn5nT_J.mjs"),
		"./03-pages-router/12-assets-metadata-css-assets.mdx": () => import("./_ssr/12-assets-metadata-css-assets-DVo6pnYs.mjs"),
		"./03-pages-router/13-assets-metadata-css-metadata.mdx": () => import("./_ssr/13-assets-metadata-css-metadata-CCOwEqtM.mjs"),
		"./03-pages-router/14-assets-metadata-css-third-party-javascript.mdx": () => import("./_ssr/14-assets-metadata-css-third-party-javascript-C4Epkpcg.mjs"),
		"./03-pages-router/15-assets-metadata-css-css-styling.mdx": () => import("./_ssr/15-assets-metadata-css-css-styling-BHWBIZzp.mjs"),
		"./03-pages-router/16-assets-metadata-css-global-styles.mdx": () => import("./_ssr/16-assets-metadata-css-global-styles-DlSXDvKo.mjs"),
		"./03-pages-router/17-assets-metadata-css-polishing-layout.mdx": () => import("./_ssr/17-assets-metadata-css-polishing-layout-Dkt3RL5N.mjs"),
		"./03-pages-router/18-assets-metadata-css-styling-tips.mdx": () => import("./_ssr/18-assets-metadata-css-styling-tips-Diavcrku.mjs"),
		"./03-pages-router/19-data-fetching-blog-data.mdx": () => import("./_ssr/19-data-fetching-blog-data-BdVGxFi6.mjs"),
		"./03-pages-router/20-data-fetching.mdx": () => import("./_ssr/20-data-fetching-Dw40l3Hr.mjs"),
		"./03-pages-router/21-data-fetching-setup.mdx": () => import("./_ssr/21-data-fetching-setup-D315dlsp.mjs"),
		"./03-pages-router/22-data-fetching-pre-rendering.mdx": () => import("./_ssr/22-data-fetching-pre-rendering-BWBV4P9E.mjs"),
		"./03-pages-router/23-data-fetching-two-forms.mdx": () => import("./_ssr/23-data-fetching-two-forms-DXOti2CI.mjs"),
		"./03-pages-router/24-data-fetching-with-data.mdx": () => import("./_ssr/24-data-fetching-with-data-B3s-E3TN.mjs"),
		"./03-pages-router/25-data-fetching-implement-getstaticprops.mdx": () => import("./_ssr/25-data-fetching-implement-getstaticprops-ly6EcnvP.mjs"),
		"./03-pages-router/26-data-fetching-getstaticprops-details.mdx": () => import("./_ssr/26-data-fetching-getstaticprops-details-BVeD2ktX.mjs"),
		"./03-pages-router/27-data-fetching-request-time.mdx": () => import("./_ssr/27-data-fetching-request-time-D3P_dI-X.mjs"),
		"./03-pages-router/28-dynamic-routes.mdx": () => import("./_ssr/28-dynamic-routes-Q3IFoVyW.mjs"),
		"./03-pages-router/29-dynamic-routes-setup.mdx": () => import("./_ssr/29-dynamic-routes-setup-MJJYltJ2.mjs"),
		"./03-pages-router/30-dynamic-routes-page-path-external-data.mdx": () => import("./_ssr/30-dynamic-routes-page-path-external-data-DUZd-x8M.mjs"),
		"./03-pages-router/31-dynamic-routes-implement-getstaticpaths.mdx": () => import("./_ssr/31-dynamic-routes-implement-getstaticpaths-C79Crteq.mjs"),
		"./03-pages-router/32-dynamic-routes-implement-getstaticprops.mdx": () => import("./_ssr/32-dynamic-routes-implement-getstaticprops-Dx1Zuwpc.mjs"),
		"./03-pages-router/33-dynamic-routes-render-markdown.mdx": () => import("./_ssr/33-dynamic-routes-render-markdown-Bl51h4Al.mjs"),
		"./03-pages-router/34-dynamic-routes-polishing-post-page.mdx": () => import("./_ssr/34-dynamic-routes-polishing-post-page-LnFMRKhg.mjs"),
		"./03-pages-router/35-dynamic-routes-polishing-index-page.mdx": () => import("./_ssr/35-dynamic-routes-polishing-index-page-DrRI0n-P.mjs"),
		"./03-pages-router/36-dynamic-routes-dynamic-routes-details.mdx": () => import("./_ssr/36-dynamic-routes-dynamic-routes-details-B2Lp4Eo9.mjs"),
		"./03-pages-router/37-api-routes.mdx": () => import("./_ssr/37-api-routes-CyUeEB1K.mjs"),
		"./03-pages-router/38-api-routes-setup.mdx": () => import("./_ssr/38-api-routes-setup-CxyiiNes.mjs"),
		"./03-pages-router/39-api-routes-creating-api-routes.mdx": () => import("./_ssr/39-api-routes-creating-api-routes-C5h1GJYr.mjs"),
		"./03-pages-router/40-api-routes-api-routes-details.mdx": () => import("./_ssr/40-api-routes-api-routes-details-C19_XwHo.mjs"),
		"./03-pages-router/41-deploying-nextjs-app.mdx": () => import("./_ssr/41-deploying-nextjs-app-BA5Y4KXU.mjs"),
		"./03-pages-router/42-deploying-nextjs-app-setup.mdx": () => import("./_ssr/42-deploying-nextjs-app-setup-DZLuPWY5.mjs"),
		"./03-pages-router/43-deploying-nextjs-app-github.mdx": () => import("./_ssr/43-deploying-nextjs-app-github-_Ra9bRHz.mjs"),
		"./03-pages-router/44-deploying-nextjs-app-deploy.mdx": () => import("./_ssr/44-deploying-nextjs-app-deploy-BsVjdtCD.mjs"),
		"./03-pages-router/45-deploying-nextjs-app-platform-details.mdx": () => import("./_ssr/45-deploying-nextjs-app-platform-details-BciIFubO.mjs"),
		"./03-pages-router/46-deploying-nextjs-app-other-hosting-options.mdx": () => import("./_ssr/46-deploying-nextjs-app-other-hosting-options-BCYBu_ir.mjs"),
		"./03-pages-router/index.mdx": () => import("./_ssr/03-pages-router-Bv81IC7c.mjs"),
		"./04-seo/01-importance-of-seo.mdx": () => import("./_ssr/01-importance-of-seo-BvKHcngC.mjs"),
		"./04-seo/02-search-systems.mdx": () => import("./_ssr/02-search-systems-AqTVRJjF.mjs"),
		"./04-seo/03-webcrawlers.mdx": () => import("./_ssr/03-webcrawlers-55ljIzqg.mjs"),
		"./04-seo/04-crawling-and-indexing.mdx": () => import("./_ssr/04-crawling-and-indexing-D5Z5VXRI.mjs"),
		"./04-seo/05-status-codes.mdx": () => import("./_ssr/05-status-codes-JugzwGjr.mjs"),
		"./04-seo/06-robots-txt.mdx": () => import("./_ssr/06-robots-txt-CXGeHLt-.mjs"),
		"./04-seo/07-xml-sitemaps.mdx": () => import("./_ssr/07-xml-sitemaps-kwxLIGoC.mjs"),
		"./04-seo/08-metatags.mdx": () => import("./_ssr/08-metatags-JYqUkqW6.mjs"),
		"./04-seo/09-canonical.mdx": () => import("./_ssr/09-canonical-CZaAjp_h.mjs"),
		"./04-seo/10-rendering-and-ranking.mdx": () => import("./_ssr/10-rendering-and-ranking-DXuk60Mw.mjs"),
		"./04-seo/11-rendering-strategies.mdx": () => import("./_ssr/11-rendering-strategies-yRksZHyb.mjs"),
		"./04-seo/12-amp.mdx": () => import("./_ssr/12-amp-DqeN12ci.mjs"),
		"./04-seo/13-url-structure.mdx": () => import("./_ssr/13-url-structure-D18z6L6c.mjs"),
		"./04-seo/14-metadata.mdx": () => import("./_ssr/14-metadata-B3fvDAF3.mjs"),
		"./04-seo/15-on-page-seo.mdx": () => import("./_ssr/15-on-page-seo-CAzoAPGU.mjs"),
		"./04-seo/16-web-performance.mdx": () => import("./_ssr/16-web-performance-DsAK_Stb.mjs"),
		"./04-seo/17-vitals-overview.mdx": () => import("./_ssr/17-vitals-overview-CVbZm2XR.mjs"),
		"./04-seo/18-lcp.mdx": () => import("./_ssr/18-lcp-CL5EWdpz.mjs"),
		"./04-seo/19-fid.mdx": () => import("./_ssr/19-fid-Cr1twtqw.mjs"),
		"./04-seo/20-cls.mdx": () => import("./_ssr/20-cls-C4XCXHlm.mjs"),
		"./04-seo/21-seo-impact.mdx": () => import("./_ssr/21-seo-impact-SZXgruzf.mjs"),
		"./04-seo/22-improve.mdx": () => import("./_ssr/22-improve-D5VnAFAd.mjs"),
		"./04-seo/23-lighthouse.mdx": () => import("./_ssr/23-lighthouse-DeuSaCZ7.mjs"),
		"./04-seo/24-images.mdx": () => import("./_ssr/24-images-CG1qjWLU.mjs"),
		"./04-seo/25-dynamic-imports.mdx": () => import("./_ssr/25-dynamic-imports-CPEwjRN-.mjs"),
		"./04-seo/26-dynamic-import-components.mdx": () => import("./_ssr/26-dynamic-import-components-Dqesd5zw.mjs"),
		"./04-seo/27-fonts.mdx": () => import("./_ssr/27-fonts-C-J-x1Uy.mjs"),
		"./04-seo/28-third-party-scripts.mdx": () => import("./_ssr/28-third-party-scripts-DYF3c5sY.mjs"),
		"./04-seo/29-monitor.mdx": () => import("./_ssr/29-monitor-BLokr7Zj.mjs"),
		"./04-seo/30-nextjs-speed-insights.mdx": () => import("./_ssr/30-nextjs-speed-insights-B_IjG_kO.mjs"),
		"./04-seo/31-custom-reporting.mdx": () => import("./_ssr/31-custom-reporting-BtNkrIj0.mjs"),
		"./04-seo/32-other-tools.mdx": () => import("./_ssr/32-other-tools-BD-90YEc.mjs"),
		"./04-seo/33-data-studio.mdx": () => import("./_ssr/33-data-studio-D14Bkh_z.mjs"),
		"./04-seo/index.mdx": () => import("./_ssr/04-seo-DAUlAjGd.mjs")
	}))
};
function mergeRefs$1(...refs) {
	return (value) => {
		refs.forEach((ref) => {
			if (typeof ref === "function") ref(value);
			else if (ref) ref.current = value;
		});
	};
}
function mergeRefs(...refs) {
	return (value) => {
		refs.forEach((ref) => {
			if (typeof ref === "function") ref(value);
			else if (ref != null) ref.current = value;
		});
	};
}
var ActiveAnchorContext = (0, import_react.createContext)([]);
var ScrollContext = (0, import_react.createContext)({ current: null });
/**
* The estimated active heading ID
*/
function useActiveAnchor() {
	return (0, import_react.useContext)(ActiveAnchorContext)[0];
}
/**
* The id of visible anchors
*/
function useActiveAnchors() {
	return (0, import_react.useContext)(ActiveAnchorContext);
}
function ScrollProvider({ containerRef, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollContext.Provider, {
		value: containerRef,
		children
	});
}
function AnchorProvider({ toc, single = false, children }) {
	const headings = (0, import_react.useMemo)(() => {
		return toc.map((item) => item.url.split("#")[1]);
	}, [toc]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveAnchorContext.Provider, {
		value: useAnchorObserver(headings, single),
		children
	});
}
function TOCItem$2({ ref, onActiveChange = () => null, ...props }) {
	const containerRef = (0, import_react.useContext)(ScrollContext);
	const anchorRef = (0, import_react.useRef)(null);
	const activeOrder = useActiveAnchors().indexOf(props.href.slice(1));
	const isActive = activeOrder !== -1;
	const shouldScroll = activeOrder === 0;
	const onActiveChangeEvent = (0, import_react.useEffectEvent)(onActiveChange);
	(0, import_react.useLayoutEffect)(() => {
		const anchor = anchorRef.current;
		const container = containerRef.current;
		if (container && anchor && shouldScroll) e(anchor, {
			behavior: "smooth",
			block: "center",
			inline: "center",
			scrollMode: "always",
			boundary: container
		});
	}, [containerRef, shouldScroll]);
	(0, import_react.useEffect)(() => {
		return () => onActiveChangeEvent(isActive);
	}, [isActive]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		ref: mergeRefs(anchorRef, ref),
		"data-active": isActive,
		...props,
		children: props.children
	});
}
/**
* Find the active heading of page
*
* It selects the top heading by default, and the last item when reached the bottom of page.
*
* @param watch - An array of element ids to watch
* @param single - only one active item at most
* @returns Active anchor
*/
function useAnchorObserver(watch, single) {
	const observerRef = (0, import_react.useRef)(null);
	const [activeAnchor, setActiveAnchor] = (0, import_react.useState)(() => []);
	const stateRef = (0, import_react.useRef)(null);
	const onChange = (0, import_react.useEffectEvent)((entries) => {
		stateRef.current ??= { visible: /* @__PURE__ */ new Set() };
		const state = stateRef.current;
		for (const entry of entries) if (entry.isIntersecting) state.visible.add(entry.target.id);
		else state.visible.delete(entry.target.id);
		if (state.visible.size === 0) {
			const viewTop = entries.length > 0 ? entries[0]?.rootBounds?.top ?? 0 : 0;
			let fallback;
			let min = -1;
			for (const id of watch) {
				const element = document.getElementById(id);
				if (!element) continue;
				const d = Math.abs(viewTop - element.getBoundingClientRect().top);
				if (min === -1 || d < min) {
					fallback = element;
					min = d;
				}
			}
			setActiveAnchor(fallback ? [fallback.id] : []);
		} else {
			const items = watch.filter((item) => state.visible.has(item));
			setActiveAnchor(single ? items.slice(0, 1) : items);
		}
	});
	(0, import_react.useEffect)(() => {
		if (observerRef.current) return;
		observerRef.current = new IntersectionObserver(onChange, {
			rootMargin: "0px",
			threshold: .98
		});
		return () => {
			observerRef.current?.disconnect();
			observerRef.current = null;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const observer = observerRef.current;
		if (!observer) return;
		const elements = watch.flatMap((heading) => document.getElementById(heading) ?? []);
		for (const element of elements) observer.observe(element);
		return () => {
			for (const element of elements) observer.unobserve(element);
		};
	}, [watch]);
	return activeAnchor;
}
var TOCContext = (0, import_react.createContext)([]);
function useTOCItems() {
	return (0, import_react.use)(TOCContext);
}
function TOCProvider({ toc, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCContext, {
		value: toc,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnchorProvider, {
			toc,
			...props,
			children
		})
	});
}
function TOCScrollArea({ ref, className, ...props }) {
	const viewRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: mergeRefs$1(viewRef, ref),
		className: twMerge("relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] mask-[linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProvider, {
			containerRef: viewRef,
			children: props.children
		})
	});
}
function TocThumb({ containerRef, ...props }) {
	const thumbRef = (0, import_react.useRef)(null);
	const active = useActiveAnchors();
	function update(info) {
		const element = thumbRef.current;
		if (!element) return;
		element.style.setProperty("--fd-top", `${info[0]}px`);
		element.style.setProperty("--fd-height", `${info[1]}px`);
	}
	const onPrint = (0, import_react.useEffectEvent)(() => {
		if (containerRef.current) update(calc(containerRef.current, active));
	});
	(0, import_react.useEffect)(() => {
		if (!containerRef.current) return;
		const container = containerRef.current;
		const observer = new ResizeObserver(onPrint);
		observer.observe(container);
		return () => {
			observer.disconnect();
		};
	}, [containerRef]);
	useOnChange(active, () => {
		if (containerRef.current) update(calc(containerRef.current, active));
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: thumbRef,
		"data-hidden": active.length === 0,
		...props
	});
}
function calc(container, active) {
	if (active.length === 0 || container.clientHeight === 0) return [0, 0];
	let upper = Number.MAX_VALUE, lower = 0;
	for (const item of active) {
		const element = container.querySelector(`a[href="#${item}"]`);
		if (!element) continue;
		const styles = getComputedStyle(element);
		upper = Math.min(upper, element.offsetTop + parseFloat(styles.paddingTop));
		lower = Math.max(lower, element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom));
	}
	return [upper, lower - upper];
}
function getBreadcrumbItemsFromPath(tree, path, options) {
	const { includePage = false, includeSeparator = false, includeRoot = false } = options;
	let items = [];
	for (let i = 0; i < path.length; i++) {
		const item = path[i];
		switch (item.type) {
			case "page":
				if (includePage) items.push({
					name: item.name,
					url: item.url
				});
				break;
			case "folder":
				if (item.root) {
					items = [];
					if (includeRoot) items.push({
						name: tree.name,
						url: typeof includeRoot === "object" ? includeRoot.url : item.index?.url
					});
					break;
				}
				if (i === path.length - 1 || item.index !== path[i + 1]) items.push({
					name: item.name,
					url: item.index?.url
				});
				break;
			case "separator":
				if (item.name && includeSeparator) items.push({ name: item.name });
				break;
		}
	}
	return items;
}
/**
* Search the path of a node in the tree by a specified url
*
* - When the page doesn't exist, return null
*
* @returns The path to the target node from root
* @internal Don't use this on your own
*/
function searchPath(nodes, url) {
	const normalizedUrl = normalizeUrl(url);
	return findPath(nodes, (node) => node.type === "page" && node.url === normalizedUrl);
}
var TreeContext = (0, import_react.createContext)(null);
var PathContext = (0, import_react.createContext)([]);
function TreeContextProvider({ tree: rawTree, children }) {
	const nextIdRef = (0, import_react.useRef)(0);
	const pathname = usePathname();
	const tree = (0, import_react.useMemo)(() => rawTree, [rawTree.$id ?? rawTree]);
	const path = (0, import_react.useMemo)(() => {
		return searchPath(tree.children, pathname) ?? (tree.fallback ? searchPath(tree.fallback.children, pathname) : null) ?? [];
	}, [tree, pathname]);
	const root = path.findLast((item) => item.type === "folder" && item.root) ?? tree;
	root.$id ??= String(nextIdRef.current++);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreeContext, {
		value: (0, import_react.useMemo)(() => ({
			root,
			full: tree
		}), [root, tree]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathContext, {
			value: path,
			children
		})
	});
}
function useTreePath() {
	return (0, import_react.use)(PathContext);
}
function useTreeContext() {
	const ctx = (0, import_react.use)(TreeContext);
	if (!ctx) throw new Error("You must wrap this component under <DocsLayout />");
	return ctx;
}
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeCollapsible, open: openProp, defaultOpen, disabled, onOpenChange, ...collapsibleProps } = props;
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: COLLAPSIBLE_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleProvider, {
		scope: __scopeCollapsible,
		disabled,
		contentId: useId(),
		open,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState(open),
			"data-disabled": disabled ? "" : void 0,
			...collapsibleProps,
			ref: forwardedRef
		})
	});
});
Collapsible$1.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME$1 = "CollapsibleTrigger";
var CollapsibleTrigger$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeCollapsible, ...triggerProps } = props;
	const context = useCollapsibleContext(TRIGGER_NAME$1, __scopeCollapsible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-controls": context.contentId,
		"aria-expanded": context.open || false,
		"data-state": getState(context.open),
		"data-disabled": context.disabled ? "" : void 0,
		disabled: context.disabled,
		...triggerProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
	});
});
CollapsibleTrigger$1.displayName = TRIGGER_NAME$1;
var CONTENT_NAME$1 = "CollapsibleContent";
var CollapsibleContent$1 = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...contentProps } = props;
	const context = useCollapsibleContext(CONTENT_NAME$1, props.__scopeCollapsible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContentImpl, {
			...contentProps,
			ref: forwardedRef,
			present
		})
	});
});
CollapsibleContent$1.displayName = CONTENT_NAME$1;
var CollapsibleContentImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeCollapsible, present, children, ...contentProps } = props;
	const context = useCollapsibleContext(CONTENT_NAME$1, __scopeCollapsible);
	const [isPresent, setIsPresent] = import_react.useState(present);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const heightRef = import_react.useRef(0);
	const height = heightRef.current;
	const widthRef = import_react.useRef(0);
	const width = widthRef.current;
	const isOpen = context.open || isPresent;
	const isMountAnimationPreventedRef = import_react.useRef(isOpen);
	const originalStylesRef = import_react.useRef(void 0);
	import_react.useEffect(() => {
		const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
		return () => cancelAnimationFrame(rAF);
	}, []);
	useLayoutEffect2(() => {
		const node = ref.current;
		if (node) {
			originalStylesRef.current = originalStylesRef.current || {
				transitionDuration: node.style.transitionDuration,
				animationName: node.style.animationName
			};
			node.style.transitionDuration = "0s";
			node.style.animationName = "none";
			const rect = node.getBoundingClientRect();
			heightRef.current = rect.height;
			widthRef.current = rect.width;
			if (!isMountAnimationPreventedRef.current) {
				node.style.transitionDuration = originalStylesRef.current.transitionDuration;
				node.style.animationName = originalStylesRef.current.animationName;
			}
			setIsPresent(present);
		}
	}, [context.open, present]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": getState(context.open),
		"data-disabled": context.disabled ? "" : void 0,
		id: context.contentId,
		hidden: !isOpen,
		...contentProps,
		ref: composedRefs,
		style: {
			[`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
			[`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
			...props.style
		},
		children: isOpen && children
	});
});
function getState(open) {
	return open ? "open" : "closed";
}
var Collapsible = Collapsible$1;
var CollapsibleTrigger = CollapsibleTrigger$1;
var CollapsibleContent = (0, import_react.forwardRef)(({ children, ...props }, ref) => {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent$1, {
		ref,
		...props,
		className: twMerge("overflow-hidden", mounted && "data-[state=closed]:animate-fd-collapsible-up data-[state=open]:animate-fd-collapsible-down", props.className),
		children
	});
});
CollapsibleContent.displayName = CollapsibleContent$1.displayName;
function useMediaQuery(query, disabled = false) {
	const [isMatch, setMatch] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (disabled) return;
		const mediaQueryList = window.matchMedia(query);
		const handleChange = () => {
			setMatch(mediaQueryList.matches);
		};
		handleChange();
		mediaQueryList.addEventListener("change", handleChange);
		return () => {
			mediaQueryList.removeEventListener("change", handleChange);
		};
	}, [disabled, query]);
	return isMatch;
}
var SidebarContext = (0, import_react.createContext)(null);
var FolderContext = (0, import_react.createContext)(null);
function SidebarProvider({ defaultOpenLevel = 0, prefetch, children }) {
	const closeOnRedirect = (0, import_react.useRef)(true);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	const pathname = usePathname();
	const mode = useMediaQuery("(width < 768px)") ? "drawer" : "full";
	useOnChange(pathname, () => {
		if (closeOnRedirect.current) setOpen(false);
		closeOnRedirect.current = true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContext, {
		value: (0, import_react.useMemo)(() => ({
			open,
			setOpen,
			collapsed,
			setCollapsed,
			closeOnRedirect,
			defaultOpenLevel,
			prefetch,
			mode
		}), [
			open,
			collapsed,
			defaultOpenLevel,
			prefetch,
			mode
		]),
		children
	});
}
function useSidebar() {
	const ctx = (0, import_react.use)(SidebarContext);
	if (!ctx) throw new Error("Missing SidebarContext, make sure you have wrapped the component in <DocsLayout /> and the context is available.");
	return ctx;
}
function useFolder() {
	return (0, import_react.use)(FolderContext);
}
function useFolderDepth() {
	return (0, import_react.use)(FolderContext)?.depth ?? 0;
}
function SidebarContent({ mode: allowedMode = "full", children }) {
	const { collapsed, mode } = useSidebar();
	const [hover, setHover] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	const timerRef = (0, import_react.useRef)(0);
	useOnChange(collapsed, () => {
		if (collapsed) setHover(false);
	});
	if (allowedMode !== true && allowedMode !== mode) return;
	function shouldIgnoreHover(e) {
		const element = ref.current;
		if (!element) return true;
		return !collapsed || e.pointerType === "touch" || element.getAnimations().length > 0;
	}
	return children({
		ref,
		collapsed,
		hovered: hover,
		onPointerEnter(e) {
			if (shouldIgnoreHover(e)) return;
			window.clearTimeout(timerRef.current);
			setHover(true);
		},
		onPointerLeave(e) {
			if (shouldIgnoreHover(e)) return;
			window.clearTimeout(timerRef.current);
			timerRef.current = window.setTimeout(() => setHover(false), Math.min(e.clientX, document.body.clientWidth - e.clientX) > 100 ? 0 : 500);
		}
	});
}
function SidebarDrawerOverlay(props) {
	const { open, setOpen, mode } = useSidebar();
	if (mode !== "drawer") return;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-state": open ? "open" : "closed",
			onClick: () => setOpen(false),
			...props
		})
	});
}
function SidebarDrawerContent({ className, children, ...props }) {
	const { open, mode } = useSidebar();
	const state = open ? "open" : "closed";
	if (mode !== "drawer") return;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: open,
		children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			id: "nd-sidebar-mobile",
			"data-state": state,
			className: twMerge(!present && "invisible", className),
			...props,
			children
		})
	});
}
function SidebarSeparator(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { ...props });
}
function SidebarItem({ icon, active = false, children, ...props }) {
	const ref = (0, import_react.useRef)(null);
	const { prefetch } = useSidebar();
	useAutoScroll(active, ref);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		ref,
		"data-active": active,
		prefetch,
		...props,
		children: [icon ?? (props.external ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {}) : null), children]
	});
}
function SidebarFolder({ defaultOpen: defaultOpenProp, collapsible = true, active = false, children, ...props }) {
	const { defaultOpenLevel } = useSidebar();
	const depth = useFolderDepth() + 1;
	const defaultOpen = collapsible === false || active || (defaultOpenProp ?? defaultOpenLevel >= depth);
	const [open, setOpen] = (0, import_react.useState)(defaultOpen);
	useOnChange(defaultOpen, (v) => {
		if (v) setOpen(v);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collapsible, {
		open,
		onOpenChange: setOpen,
		disabled: !collapsible,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderContext, {
			value: (0, import_react.useMemo)(() => ({
				open,
				setOpen,
				depth,
				collapsible
			}), [
				collapsible,
				depth,
				open
			]),
			children
		})
	});
}
function SidebarFolderTrigger({ children, ...props }) {
	const { open, collapsible } = (0, import_react.use)(FolderContext);
	if (collapsible) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CollapsibleTrigger, {
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
			"data-icon": true,
			className: twMerge("ms-auto transition-transform", !open && "-rotate-90 rtl:rotate-90")
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...props,
		children
	});
}
function SidebarFolderLink({ children, active = false, ...props }) {
	const ref = (0, import_react.useRef)(null);
	const { open, setOpen, collapsible } = (0, import_react.use)(FolderContext);
	const { prefetch } = useSidebar();
	useAutoScroll(active, ref);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		ref,
		"data-active": active,
		onClick: (e) => {
			if (!collapsible) return;
			if (e.target instanceof Element && e.target.matches("[data-icon], [data-icon] *")) {
				setOpen(!open);
				e.preventDefault();
			} else setOpen(active ? !open : true);
		},
		prefetch,
		...props,
		children: [children, collapsible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
			"data-icon": true,
			className: twMerge("ms-auto transition-transform", !open && "-rotate-90 rtl:rotate-90")
		})]
	});
}
function SidebarFolderContent(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, {
		...props,
		children: props.children
	});
}
function SidebarTrigger({ children, ...props }) {
	const { setOpen } = useSidebar();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		"aria-label": "Open Sidebar",
		onClick: () => setOpen((prev) => !prev),
		...props,
		children
	});
}
function SidebarCollapseTrigger(props) {
	const { collapsed, setCollapsed } = useSidebar();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": "Collapse Sidebar",
		"data-collapsed": collapsed,
		onClick: () => {
			setCollapsed((prev) => !prev);
		},
		...props,
		children: props.children
	});
}
/**
* scroll to the element if `active` is true
*/
function useAutoScroll(active, ref) {
	const { mode } = useSidebar();
	(0, import_react.useEffect)(() => {
		if (active && ref.current) e(ref.current, {
			boundary: document.getElementById(mode === "drawer" ? "nd-sidebar-mobile" : "nd-sidebar"),
			scrollMode: "if-needed"
		});
	}, [
		active,
		mode,
		ref
	]);
}
function SidebarTabsDropdown({ options, placeholder, ...props }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { closeOnRedirect } = useSidebar();
	const pathname = usePathname();
	const selected = (0, import_react.useMemo)(() => {
		return options.findLast((item) => isTabActive(item, pathname));
	}, [options, pathname]);
	const onClick = () => {
		closeOnRedirect.current = false;
		setOpen(false);
	};
	const item = selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "size-9 shrink-0 empty:hidden md:size-5",
		children: selected.icon
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm font-medium",
		children: selected.title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-fd-muted-foreground empty:hidden md:hidden",
		children: selected.description
	})] })] }) : placeholder;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
		open,
		onOpenChange: setOpen,
		children: [item && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverTrigger, {
			...props,
			className: twMerge("flex items-center gap-2 rounded-lg p-2 border bg-fd-secondary/50 text-start text-fd-secondary-foreground transition-colors hover:bg-fd-accent data-[state=open]:bg-fd-accent data-[state=open]:text-fd-accent-foreground", props.className),
			children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUpDown, { className: "shrink-0 ms-auto size-4 text-fd-muted-foreground" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
			className: "flex flex-col gap-1 w-(--radix-popover-trigger-width) p-1 fd-scroll-container",
			children: options.map((item) => {
				const isActive = selected && item.url === selected.url;
				if (!isActive && item.unlisted) return;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					href: item.url,
					onClick,
					...item.props,
					className: twMerge("flex items-center gap-2 rounded-lg p-1.5 hover:bg-fd-accent hover:text-fd-accent-foreground", item.props?.className),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shrink-0 size-9 md:mb-auto md:size-5 empty:hidden",
							children: item.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium leading-none",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.8125rem] text-fd-muted-foreground mt-1 empty:hidden",
							children: item.description
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: twMerge("shrink-0 ms-auto size-3.5 text-fd-primary", !isActive && "invisible") })
					]
				}, item.url);
			})
		})]
	});
}
function isTabActive(tab, pathname) {
	if (tab.urls) return tab.urls.has(normalize(pathname));
	return isActive(tab.url, pathname, true);
}
var LayoutContext = (0, import_react.createContext)(null);
function useDocsLayout() {
	const context = (0, import_react.use)(LayoutContext);
	if (!context) throw new Error("Please use <DocsPage /> (`fumadocs-ui/layouts/docs/page`) under <DocsLayout /> (`fumadocs-ui/layouts/docs`).");
	return context;
}
function LayoutContextProvider({ navTransparentMode = "none", children }) {
	const isTop = useIsScrollTop({ enabled: navTransparentMode === "top" }) ?? true;
	const isNavTransparent = navTransparentMode === "top" ? isTop : navTransparentMode === "always";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutContext, {
		value: (0, import_react.useMemo)(() => ({ isNavTransparent }), [isNavTransparent]),
		children
	});
}
function LayoutHeader(props) {
	const { isNavTransparent } = useDocsLayout();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		"data-transparent": isNavTransparent,
		...props,
		children: props.children
	});
}
function LayoutBody({ className, style, children, ...props }) {
	const { collapsed } = useSidebar();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		id: "nd-docs-layout",
		className: twMerge("grid transition-[grid-template-columns] overflow-x-clip min-h-(--fd-docs-height) [--fd-docs-height:100dvh] [--fd-header-height:0px] [--fd-toc-popover-height:0px] [--fd-sidebar-width:0px] [--fd-toc-width:0px]", className),
		"data-sidebar-collapsed": collapsed,
		style: {
			gridTemplate: `"sidebar sidebar header toc toc"
        "sidebar sidebar toc-popover toc toc"
        "sidebar sidebar main toc toc" 1fr / minmax(min-content, 1fr) var(--fd-sidebar-col) minmax(0, calc(var(--fd-layout-width,97rem) - var(--fd-sidebar-width) - var(--fd-toc-width))) var(--fd-toc-width) minmax(min-content, 1fr)`,
			"--fd-docs-row-1": "var(--fd-banner-height, 0px)",
			"--fd-docs-row-2": "calc(var(--fd-docs-row-1) + var(--fd-header-height))",
			"--fd-docs-row-3": "calc(var(--fd-docs-row-2) + var(--fd-toc-popover-height))",
			"--fd-sidebar-col": collapsed ? "0px" : "var(--fd-sidebar-width)",
			...style
		},
		...props,
		children
	});
}
function LayoutTabs({ options, ...props }) {
	const pathname = usePathname();
	const selected = (0, import_react.useMemo)(() => {
		return options.findLast((option) => isTabActive(option, pathname));
	}, [options, pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...props,
		className: twMerge("flex flex-row items-end gap-6 overflow-auto [grid-area:main]", props.className),
		children: options.map((option, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			href: option.url,
			className: twMerge("inline-flex border-b-2 border-transparent transition-colors items-center pb-1.5 font-medium gap-2 text-fd-muted-foreground text-sm text-nowrap hover:text-fd-accent-foreground", option.unlisted && selected !== option && "hidden", selected === option && "border-fd-primary text-fd-primary"),
			children: option.title
		}, i))
	});
}
var footerCache = /* @__PURE__ */ new Map();
/**
* @returns a list of page tree items (linear), that you can obtain footer items
*/
function useFooterItems() {
	const { root } = useTreeContext();
	const cached = footerCache.get(root.$id);
	if (cached) return cached;
	const list = [];
	function onNode(node) {
		if (node.type === "folder") {
			if (node.index) onNode(node.index);
			for (const child of node.children) onNode(child);
		} else if (node.type === "page" && !node.external) list.push(node);
	}
	for (const child of root.children) onNode(child);
	footerCache.set(root.$id, list);
	return list;
}
var TocPopoverContext = (0, import_react.createContext)(null);
function PageTOCPopover({ className, children, ...rest }) {
	const ref = (0, import_react.useRef)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const { isNavTransparent } = useDocsLayout();
	const onClick = (0, import_react.useEffectEvent)((e) => {
		if (!open) return;
		if (ref.current && !ref.current.contains(e.target)) setOpen(false);
	});
	(0, import_react.useEffect)(() => {
		window.addEventListener("click", onClick);
		return () => {
			window.removeEventListener("click", onClick);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TocPopoverContext, {
		value: (0, import_react.useMemo)(() => ({
			open,
			setOpen
		}), [setOpen, open]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collapsible, {
			open,
			onOpenChange: setOpen,
			"data-toc-popover": "",
			className: twMerge("sticky top-(--fd-docs-row-2) z-10 [grid-area:toc-popover] h-(--fd-toc-popover-height) xl:hidden max-xl:layout:[--fd-toc-popover-height:--spacing(10)]", className),
			...rest,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				ref,
				className: twMerge("border-b backdrop-blur-sm transition-colors", (!isNavTransparent || open) && "bg-fd-background/80", open && "shadow-lg"),
				children
			})
		})
	});
}
function PageTOCPopoverTrigger({ className, ...props }) {
	const { text } = useI18n();
	const { open } = (0, import_react.use)(TocPopoverContext);
	const items = useTOCItems();
	const active = useActiveAnchor();
	const selected = (0, import_react.useMemo)(() => items.findIndex((item) => active === item.url.slice(1)), [items, active]);
	const path = useTreePath().at(-1);
	const showItem = selected !== -1 && !open;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CollapsibleTrigger, {
		className: twMerge("flex w-full h-10 items-center text-sm text-fd-muted-foreground gap-2.5 px-4 py-2.5 text-start focus-visible:outline-none [&_svg]:size-4 md:px-6", className),
		"data-toc-popover-trigger": "",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressCircle, {
				value: (selected + 1) / Math.max(1, items.length),
				max: 1,
				className: twMerge("shrink-0", open && "text-fd-primary")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "grid flex-1 *:my-auto *:row-start-1 *:col-start-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: twMerge("truncate transition-[opacity,translate,color]", open && "text-fd-foreground", showItem && "opacity-0 -translate-y-full pointer-events-none"),
					children: path?.name ?? text.toc
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: twMerge("truncate transition-[opacity,translate]", !showItem && "opacity-0 translate-y-full pointer-events-none"),
					children: items[selected]?.title
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: twMerge("shrink-0 transition-transform mx-0.5", open && "rotate-180") })
		]
	});
}
function clamp(input, min, max) {
	if (input < min) return min;
	if (input > max) return max;
	return input;
}
function ProgressCircle({ value, strokeWidth = 2, size = 24, min = 0, max = 100, ...restSvgProps }) {
	const normalizedValue = clamp(value, min, max);
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const progress = normalizedValue / max * circumference;
	const circleProps = {
		cx: size / 2,
		cy: size / 2,
		r: radius,
		fill: "none",
		strokeWidth
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		role: "progressbar",
		viewBox: `0 0 ${size} ${size}`,
		"aria-valuenow": normalizedValue,
		"aria-valuemin": min,
		"aria-valuemax": max,
		...restSvgProps,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			...circleProps,
			className: "stroke-current/25"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			...circleProps,
			stroke: "currentColor",
			strokeDasharray: circumference,
			strokeDashoffset: circumference - progress,
			strokeLinecap: "round",
			transform: `rotate(-90 ${size / 2} ${size / 2})`,
			className: "transition-all"
		})]
	});
}
function PageTOCPopoverContent(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, {
		"data-toc-popover-content": "",
		...props,
		className: twMerge("flex flex-col px-4 max-h-[50vh] md:px-6", props.className),
		children: props.children
	});
}
function PageFooter({ items, children, className, ...props }) {
	const footerList = useFooterItems();
	const pathname = usePathname();
	const { previous, next } = (0, import_react.useMemo)(() => {
		if (items) return items;
		const idx = footerList.findIndex((item) => isActive(item.url, pathname));
		if (idx === -1) return {};
		return {
			previous: footerList[idx - 1],
			next: footerList[idx + 1]
		};
	}, [
		footerList,
		items,
		pathname
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: twMerge("@container grid gap-4", previous && next ? "grid-cols-2" : "grid-cols-1", className),
		...props,
		children: [previous && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterItem, {
			item: previous,
			index: 0
		}), next && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterItem, {
			item: next,
			index: 1
		})]
	}), children] });
}
function FooterItem({ item, index }) {
	const { text } = useI18n();
	const Icon = index === 0 ? ChevronLeft : ChevronRight;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		href: item.url,
		className: twMerge("flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground @max-lg:col-span-full", index === 1 && "text-end"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: twMerge("inline-flex items-center gap-1.5 font-medium", index === 1 && "flex-row-reverse"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "-mx-1 size-4 shrink-0 rtl:rotate-180" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.name })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-fd-muted-foreground truncate",
			children: item.description ?? (index === 0 ? text.previousPage : text.nextPage)
		})]
	});
}
function PageBreadcrumb({ includeRoot, includeSeparator, includePage, ...props }) {
	const path = useTreePath();
	const { root } = useTreeContext();
	const items = (0, import_react.useMemo)(() => {
		return getBreadcrumbItemsFromPath(root, path, {
			includePage,
			includeSeparator,
			includeRoot
		});
	}, [
		includePage,
		includeRoot,
		includeSeparator,
		path,
		root
	]);
	if (items.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...props,
		className: twMerge("flex items-center gap-1.5 text-sm text-fd-muted-foreground", props.className),
		children: items.map((item, i) => {
			const className = twMerge("truncate", i === items.length - 1 && "text-fd-primary font-medium");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [i !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5 shrink-0" }), item.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				href: item.url,
				className: twMerge(className, "transition-opacity hover:opacity-80"),
				children: item.name
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className,
				children: item.name
			})] }, i);
		})
	});
}
function TOCItems$1({ ref, className, ...props }) {
	const containerRef = (0, import_react.useRef)(null);
	const items = useTOCItems();
	const { text } = useI18n();
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",
		children: text.tocNoHeadings
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TocThumb, {
		containerRef,
		className: "absolute top-(--fd-top) h-(--fd-height) w-0.5 rounded-e-sm bg-fd-primary transition-[top,height] ease-linear"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: mergeRefs$1(ref, containerRef),
		className: twMerge("flex flex-col border-s border-fd-foreground/10", className),
		...props,
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCItem$1, { item }, item.url))
	})] });
}
function TOCItem$1({ item }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCItem$2, {
		href: item.url,
		className: twMerge("prose py-1.5 text-sm text-fd-muted-foreground transition-colors wrap-anywhere first:pt-0 last:pb-0 data-[active=true]:text-fd-primary", item.depth <= 2 && "ps-3", item.depth === 3 && "ps-6", item.depth >= 4 && "ps-8"),
		children: item.title
	});
}
function TOCItems({ ref, className, ...props }) {
	const containerRef = (0, import_react.useRef)(null);
	const items = useTOCItems();
	const { text } = useI18n();
	const [svg, setSvg] = (0, import_react.useState)();
	(0, import_react.useEffect)(() => {
		if (!containerRef.current) return;
		const container = containerRef.current;
		function onResize() {
			if (container.clientHeight === 0) return;
			let w = 0, h = 0;
			const d = [];
			for (let i = 0; i < items.length; i++) {
				const element = container.querySelector(`a[href="#${items[i].url.slice(1)}"]`);
				if (!element) continue;
				const styles = getComputedStyle(element);
				const offset = getLineOffset(items[i].depth) + 1, top = element.offsetTop + parseFloat(styles.paddingTop), bottom = element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom);
				w = Math.max(offset, w);
				h = Math.max(h, bottom);
				d.push(`${i === 0 ? "M" : "L"}${offset} ${top}`);
				d.push(`L${offset} ${bottom}`);
			}
			setSvg({
				path: d.join(" "),
				width: w + 1,
				height: h
			});
		}
		const observer = new ResizeObserver(onResize);
		onResize();
		observer.observe(container);
		return () => {
			observer.disconnect();
		};
	}, [items]);
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",
		children: text.tocNoHeadings
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [svg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute start-0 top-0 rtl:-scale-x-100",
		style: {
			width: svg.width,
			height: svg.height,
			maskImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svg.width} ${svg.height}"><path d="${svg.path}" stroke="black" stroke-width="1" fill="none" /></svg>`)}")`
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TocThumb, {
			containerRef,
			className: "absolute w-full top-(--fd-top) h-(--fd-height) bg-fd-primary transition-[top,height]"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: mergeRefs$1(containerRef, ref),
		className: twMerge("flex flex-col", className),
		...props,
		children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCItem, {
			item,
			upper: items[i - 1]?.depth,
			lower: items[i + 1]?.depth
		}, item.url))
	})] });
}
function getItemOffset(depth) {
	if (depth <= 2) return 14;
	if (depth === 3) return 26;
	return 36;
}
function getLineOffset(depth) {
	return depth >= 3 ? 10 : 0;
}
function TOCItem({ item, upper = item.depth, lower = item.depth }) {
	const offset = getLineOffset(item.depth), upperOffset = getLineOffset(upper), lowerOffset = getLineOffset(lower);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TOCItem$2, {
		href: item.url,
		style: { paddingInlineStart: getItemOffset(item.depth) },
		className: "prose relative py-1.5 text-sm text-fd-muted-foreground hover:text-fd-accent-foreground transition-colors wrap-anywhere first:pt-0 last:pb-0 data-[active=true]:text-fd-primary",
		children: [
			offset !== upperOffset && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				className: "absolute -top-1.5 start-0 size-4 rtl:-scale-x-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: upperOffset,
					y1: "0",
					x2: offset,
					y2: "12",
					className: "stroke-fd-foreground/10",
					strokeWidth: "1"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: twMerge("absolute inset-y-0 w-px bg-fd-foreground/10", offset !== upperOffset && "top-1.5", offset !== lowerOffset && "bottom-1.5"),
				style: { insetInlineStart: offset }
			}),
			item.title
		]
	});
}
function useCopyButton(onCopy) {
	const [checked, setChecked] = (0, import_react.useState)(false);
	const callbackRef = (0, import_react.useRef)(onCopy);
	const timeoutRef = (0, import_react.useRef)(null);
	callbackRef.current = onCopy;
	const onClick = (0, import_react.useCallback)(() => {
		if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
		Promise.resolve(callbackRef.current()).then(() => {
			setChecked(true);
			timeoutRef.current = window.setTimeout(() => {
				setChecked(false);
			}, 1500);
		});
	}, []);
	(0, import_react.useEffect)(() => {
		return () => {
			if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
		};
	}, []);
	return [checked, onClick];
}
function DocsPage({ breadcrumb: { enabled: breadcrumbEnabled = true, component: breadcrumb, ...breadcrumbProps } = {}, footer: { enabled: footerEnabled, component: footerReplace, ...footerProps } = {}, full = false, tableOfContentPopover: { enabled: tocPopoverEnabled, component: tocPopover, ...tocPopoverOptions } = {}, tableOfContent: { enabled: tocEnabled, component: tocReplace, ...tocOptions } = {}, toc = [], children, className }) {
	tocEnabled ??= !full && (toc.length > 0 || tocOptions.footer !== void 0 || tocOptions.header !== void 0);
	tocPopoverEnabled ??= toc.length > 0 || tocPopoverOptions.header !== void 0 || tocPopoverOptions.footer !== void 0;
	let wrapper = (children) => children;
	if (tocEnabled || tocPopoverEnabled) wrapper = (children) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCProvider, {
		single: tocOptions.single,
		toc,
		children
	});
	return wrapper(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		tocPopoverEnabled && (tocPopover ?? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTOCPopover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTOCPopoverTrigger, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTOCPopoverContent, { children: [
			tocPopoverOptions.header,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCScrollArea, { children: tocPopoverOptions.style === "clerk" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCItems, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCItems$1, {}) }),
			tocPopoverOptions.footer
		] })] })),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			id: "nd-page",
			"data-full": full,
			className: twMerge("flex flex-col w-full max-w-[900px] mx-auto [grid-area:main] px-4 py-6 gap-4 md:px-6 md:pt-8 xl:px-8 xl:pt-14", full ? "max-w-[1168px]" : "xl:layout:[--fd-toc-width:268px]", className),
			children: [
				breadcrumbEnabled && (breadcrumb ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBreadcrumb, { ...breadcrumbProps })),
				children,
				footerEnabled !== false && (footerReplace ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageFooter, { ...footerProps }))
			]
		}),
		tocEnabled && (tocReplace ?? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "nd-toc",
			className: "sticky top-(--fd-docs-row-1) h-[calc(var(--fd-docs-height)-var(--fd-docs-row-1))] flex flex-col [grid-area:toc] w-(--fd-toc-width) pt-12 pe-4 pb-2 max-xl:hidden",
			children: [
				tocOptions.header,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					id: "toc-title",
					className: "inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nLabel, { label: "toc" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCScrollArea, { children: tocOptions.style === "clerk" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCItems, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TOCItems$1, {}) }),
				tocOptions.footer
			]
		}))
	] }));
}
/**
* Add typography styles
*/
function DocsBody({ children, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...props,
		className: twMerge("prose flex-1", className),
		children
	});
}
function DocsDescription({ children, className, ...props }) {
	if (children === void 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		...props,
		className: twMerge("mb-8 text-lg text-fd-muted-foreground", className),
		children
	});
}
function DocsTitle({ children, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		...props,
		className: twMerge("text-[1.75em] font-semibold", className),
		children
	});
}
function Cards(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...props,
		className: twMerge("grid grid-cols-2 gap-3 @container", props.className),
		children: props.children
	});
}
function Card({ icon, title, description, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(props.href ? Link : "div", {
		...props,
		"data-card": true,
		className: twMerge("block rounded-xl border bg-fd-card p-4 text-fd-card-foreground transition-colors @max-lg:col-span-full", props.href && "hover:bg-fd-accent/80", props.className),
		children: [
			icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "not-prose mb-2 w-fit shadow-md rounded-lg border bg-fd-muted p-1.5 text-fd-muted-foreground [&_svg]:size-4",
				children: icon
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "not-prose mb-1 text-sm font-medium",
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "my-0! text-sm text-fd-muted-foreground",
				children: description
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm text-fd-muted-foreground prose-no-margin empty:hidden",
				children: props.children
			})
		]
	});
}
var iconClass = "size-5 -me-0.5 fill-(--callout-color) text-fd-card";
function Callout({ children, title, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CalloutContainer, {
		...props,
		children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalloutTitle, { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalloutDescription, { children })]
	});
}
function resolveAlias(type) {
	if (type === "warn") return "warning";
	if (type === "tip") return "info";
	return type;
}
function CalloutContainer({ type: inputType = "info", icon, children, className, style, ...props }) {
	const type = resolveAlias(inputType);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: twMerge("flex gap-2 my-4 rounded-xl border bg-fd-card p-3 ps-1 text-sm text-fd-card-foreground shadow-md", className),
		style: {
			"--callout-color": `var(--color-fd-${type}, var(--color-fd-muted))`,
			...style
		},
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "none",
				className: "w-0.5 bg-(--callout-color)/50 rounded-sm"
			}),
			icon ?? {
				info: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: iconClass }),
				warning: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: iconClass }),
				error: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: iconClass }),
				success: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: iconClass }),
				idea: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "size-5 -me-0.5 fill-(--callout-color) text-(--callout-color)" })
			}[type],
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2 min-w-0 flex-1",
				children
			})
		]
	});
}
function CalloutTitle({ children, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: twMerge("font-medium my-0!", className),
		...props,
		children
	});
}
function CalloutDescription({ children, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: twMerge("text-fd-muted-foreground prose-no-margin empty:hidden", className),
		...props,
		children
	});
}
function Heading({ as, className, ...props }) {
	const As = as ?? "h1";
	if (!props.id) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
		className,
		...props
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(As, {
		className: twMerge("flex scroll-m-28 flex-row items-center gap-2", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			"data-card": "",
			href: `#${props.id}`,
			className: "peer",
			children: props.children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
			"aria-hidden": true,
			className: "size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100"
		})]
	});
}
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = {
	bubbles: false,
	cancelable: true
};
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(GROUP_NAME, [createCollectionScope]);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = import_react.forwardRef((props, forwardedRef) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
		scope: props.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
			scope: props.__scopeRovingFocusGroup,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroupImpl, {
				...props,
				ref: forwardedRef
			})
		})
	});
});
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, preventScrollOnEntryFocus = false, ...groupProps } = props;
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const direction = useDirection(dir);
	const [currentTabStopId, setCurrentTabStopId] = useControllableState({
		prop: currentTabStopIdProp,
		defaultProp: defaultCurrentTabStopId ?? null,
		onChange: onCurrentTabStopIdChange,
		caller: GROUP_NAME
	});
	const [isTabbingBackOut, setIsTabbingBackOut] = import_react.useState(false);
	const handleEntryFocus = useCallbackRef$1(onEntryFocus);
	const getItems = useCollection(__scopeRovingFocusGroup);
	const isClickFocusRef = import_react.useRef(false);
	const [focusableItemsCount, setFocusableItemsCount] = import_react.useState(0);
	import_react.useEffect(() => {
		const node = ref.current;
		if (node) {
			node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
			return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
		}
	}, [handleEntryFocus]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusProvider, {
		scope: __scopeRovingFocusGroup,
		orientation,
		dir: direction,
		loop,
		currentTabStopId,
		onItemFocus: import_react.useCallback((tabStopId) => setCurrentTabStopId(tabStopId), [setCurrentTabStopId]),
		onItemShiftTab: import_react.useCallback(() => setIsTabbingBackOut(true), []),
		onFocusableItemAdd: import_react.useCallback(() => setFocusableItemsCount((prevCount) => prevCount + 1), []),
		onFocusableItemRemove: import_react.useCallback(() => setFocusableItemsCount((prevCount) => prevCount - 1), []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
			"data-orientation": orientation,
			...groupProps,
			ref: composedRefs,
			style: {
				outline: "none",
				...props.style
			},
			onMouseDown: composeEventHandlers(props.onMouseDown, () => {
				isClickFocusRef.current = true;
			}),
			onFocus: composeEventHandlers(props.onFocus, (event) => {
				const isKeyboardFocus = !isClickFocusRef.current;
				if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
					const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
					event.currentTarget.dispatchEvent(entryFocusEvent);
					if (!entryFocusEvent.defaultPrevented) {
						const items = getItems().filter((item) => item.focusable);
						focusFirst([
							items.find((item) => item.active),
							items.find((item) => item.id === currentTabStopId),
							...items
						].filter(Boolean).map((item) => item.ref.current), preventScrollOnEntryFocus);
					}
				}
				isClickFocusRef.current = false;
			}),
			onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
		})
	});
});
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, children, ...itemProps } = props;
	const autoId = useId();
	const id = tabStopId || autoId;
	const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
	const isCurrentTabStop = context.currentTabStopId === id;
	const getItems = useCollection(__scopeRovingFocusGroup);
	const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
	import_react.useEffect(() => {
		if (focusable) {
			onFocusableItemAdd();
			return () => onFocusableItemRemove();
		}
	}, [
		focusable,
		onFocusableItemAdd,
		onFocusableItemRemove
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
		scope: __scopeRovingFocusGroup,
		id,
		focusable,
		active,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			tabIndex: isCurrentTabStop ? 0 : -1,
			"data-orientation": context.orientation,
			...itemProps,
			ref: forwardedRef,
			onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
				if (!focusable) event.preventDefault();
				else context.onItemFocus(id);
			}),
			onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if (event.key === "Tab" && event.shiftKey) {
					context.onItemShiftTab();
					return;
				}
				if (event.target !== event.currentTarget) return;
				const focusIntent = getFocusIntent(event, context.orientation, context.dir);
				if (focusIntent !== void 0) {
					if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
					event.preventDefault();
					let candidateNodes = getItems().filter((item) => item.focusable).map((item) => item.ref.current);
					if (focusIntent === "last") candidateNodes.reverse();
					else if (focusIntent === "prev" || focusIntent === "next") {
						if (focusIntent === "prev") candidateNodes.reverse();
						const currentIndex = candidateNodes.indexOf(event.currentTarget);
						candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
					}
					setTimeout(() => focusFirst(candidateNodes));
				}
			}),
			children: typeof children === "function" ? children({
				isCurrentTabStop,
				hasTabStop: currentTabStopId != null
			}) : children
		})
	});
});
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function getDirectionAwareKey(key, dir) {
	if (dir !== "rtl") return key;
	return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
	const key = getDirectionAwareKey(event.key, dir);
	if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
	if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
	return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst(candidates, preventScroll = false) {
	const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
	for (const candidate of candidates) {
		if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
		candidate.focus({ preventScroll });
		if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
	}
}
function wrapArray(array, startIndex) {
	return array.map((_, index) => array[(startIndex + index) % array.length]);
}
var Root = RovingFocusGroup;
var Item = RovingFocusGroupItem;
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [createRovingFocusGroupScope]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTabs, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", dir, activationMode = "automatic", ...tabsProps } = props;
	const direction = useDirection(dir);
	const [value, setValue] = useControllableState({
		prop: valueProp,
		onChange: onValueChange,
		defaultProp: defaultValue ?? "",
		caller: TABS_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsProvider, {
		scope: __scopeTabs,
		baseId: useId(),
		value,
		onValueChange: setValue,
		orientation,
		dir: direction,
		activationMode,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			dir: direction,
			"data-orientation": orientation,
			...tabsProps,
			ref: forwardedRef
		})
	});
});
Tabs$1.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTabs, loop = true, ...listProps } = props;
	const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		asChild: true,
		...useRovingFocusGroupScope(__scopeTabs),
		orientation: context.orientation,
		dir: context.dir,
		loop,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			role: "tablist",
			"aria-orientation": context.orientation,
			...listProps,
			ref: forwardedRef
		})
	});
});
TabsList$1.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
	const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
	const triggerId = makeTriggerId(context.baseId, value);
	const contentId = makeContentId(context.baseId, value);
	const isSelected = value === context.value;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		asChild: true,
		...rovingFocusGroupScope,
		focusable: !disabled,
		active: isSelected,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "tab",
			"aria-selected": isSelected,
			"aria-controls": contentId,
			"data-state": isSelected ? "active" : "inactive",
			"data-disabled": disabled ? "" : void 0,
			disabled,
			id: triggerId,
			...triggerProps,
			ref: forwardedRef,
			onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
				if (!disabled && event.button === 0 && event.ctrlKey === false) context.onValueChange(value);
				else event.preventDefault();
			}),
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
			}),
			onFocus: composeEventHandlers(props.onFocus, () => {
				const isAutomaticActivation = context.activationMode !== "manual";
				if (!isSelected && !disabled && isAutomaticActivation) context.onValueChange(value);
			})
		})
	});
});
TabsTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "TabsContent";
var TabsContent$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
	const context = useTabsContext(CONTENT_NAME, __scopeTabs);
	const triggerId = makeTriggerId(context.baseId, value);
	const contentId = makeContentId(context.baseId, value);
	const isSelected = value === context.value;
	const isMountAnimationPreventedRef = import_react.useRef(isSelected);
	import_react.useEffect(() => {
		const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
		return () => cancelAnimationFrame(rAF);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || isSelected,
		children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": isSelected ? "active" : "inactive",
			"data-orientation": context.orientation,
			role: "tabpanel",
			"aria-labelledby": triggerId,
			hidden: !present,
			id: contentId,
			tabIndex: 0,
			...contentProps,
			ref: forwardedRef,
			style: {
				...props.style,
				animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
			},
			children: present && children
		})
	});
});
TabsContent$1.displayName = CONTENT_NAME;
function makeTriggerId(baseId, value) {
	return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
	return `${baseId}-content-${value}`;
}
var listeners = /* @__PURE__ */ new Map();
var TabsContext$1 = (0, import_react.createContext)(null);
function useTabContext() {
	const ctx = (0, import_react.use)(TabsContext$1);
	if (!ctx) throw new Error("You must wrap your component in <Tabs>");
	return ctx;
}
var TabsList = TabsList$1;
var TabsTrigger = TabsTrigger$1;
function Tabs({ ref, groupId, persist = false, updateAnchor = false, defaultValue, value: _value, onValueChange: _onValueChange, ...props }) {
	const tabsRef = (0, import_react.useRef)(null);
	const valueToIdMap = (0, import_react.useMemo)(() => /* @__PURE__ */ new Map(), []);
	const [value, setValue] = _value === void 0 ? (0, import_react.useState)(defaultValue) : [_value, (0, import_react.useEffectEvent)((v) => _onValueChange?.(v))];
	(0, import_react.useLayoutEffect)(() => {
		if (!groupId) return;
		let previous = sessionStorage.getItem(groupId);
		if (persist) previous ??= localStorage.getItem(groupId);
		if (previous) setValue(previous);
		const groupListeners = listeners.get(groupId) ?? /* @__PURE__ */ new Set();
		groupListeners.add(setValue);
		listeners.set(groupId, groupListeners);
		return () => {
			groupListeners.delete(setValue);
		};
	}, [
		groupId,
		persist,
		setValue
	]);
	(0, import_react.useLayoutEffect)(() => {
		const hash = window.location.hash.slice(1);
		if (!hash) return;
		for (const [value, id] of valueToIdMap.entries()) if (id === hash) {
			setValue(value);
			tabsRef.current?.scrollIntoView();
			break;
		}
	}, [setValue, valueToIdMap]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs$1, {
		ref: mergeRefs$1(ref, tabsRef),
		value,
		onValueChange: (v) => {
			if (updateAnchor) {
				const id = valueToIdMap.get(v);
				if (id) window.history.replaceState(null, "", `#${id}`);
			}
			if (groupId) {
				const groupListeners = listeners.get(groupId);
				if (groupListeners) for (const listener of groupListeners) listener(v);
				sessionStorage.setItem(groupId, v);
				if (persist) localStorage.setItem(groupId, v);
			} else setValue(v);
		},
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContext$1, {
			value: (0, import_react.useMemo)(() => ({ valueToIdMap }), [valueToIdMap]),
			children: props.children
		})
	});
}
function TabsContent({ value, ...props }) {
	const { valueToIdMap } = useTabContext();
	if (props.id) valueToIdMap.set(value, props.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent$1, {
		value,
		...props,
		children: props.children
	});
}
var TabsContext = (0, import_react.createContext)(null);
function Pre(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		...props,
		className: twMerge("min-w-full w-max *:flex *:flex-col", props.className),
		children: props.children
	});
}
function CodeBlock({ ref, title, allowCopy = true, keepBackground = false, icon, viewportProps = {}, children, Actions = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	...props,
	className: twMerge("empty:hidden", props.className)
}), ...props }) {
	const inTab = (0, import_react.use)(TabsContext) !== null;
	const areaRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		ref,
		dir: "ltr",
		...props,
		tabIndex: -1,
		className: twMerge(inTab ? "bg-fd-secondary -mx-px -mb-px last:rounded-b-xl" : "my-4 bg-fd-card rounded-xl", keepBackground && "bg-(--shiki-light-bg) dark:bg-(--shiki-dark-bg)", "shiki relative border shadow-sm not-prose overflow-hidden text-sm", props.className),
		children: [title ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex text-fd-muted-foreground items-center gap-2 h-9.5 border-b px-4",
			children: [
				typeof icon === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "[&_svg]:size-3.5",
					dangerouslySetInnerHTML: { __html: icon }
				}) : icon,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "flex-1 truncate",
					children: title
				}),
				Actions({
					className: "-me-2",
					children: allowCopy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { containerRef: areaRef })
				})
			]
		}) : Actions({
			className: "absolute top-3 right-2 z-2 backdrop-blur-lg rounded-lg text-fd-muted-foreground",
			children: allowCopy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { containerRef: areaRef })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: areaRef,
			...viewportProps,
			role: "region",
			tabIndex: 0,
			className: twMerge("text-[0.8125rem] py-3.5 overflow-auto max-h-[600px] fd-scroll-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fd-ring", viewportProps.className),
			style: {
				"--padding-right": !title ? "calc(var(--spacing) * 8)" : void 0,
				counterSet: props["data-line-numbers"] ? `line ${Number(props["data-line-numbers-start"] ?? 1) - 1}` : void 0,
				...viewportProps.style
			},
			children
		})]
	});
}
function CopyButton({ className, containerRef, ...props }) {
	const [checked, onClick] = useCopyButton(() => {
		const pre = containerRef.current?.getElementsByTagName("pre").item(0);
		if (!pre) return;
		const clone = pre.cloneNode(true);
		clone.querySelectorAll(".nd-copy-ignore").forEach((node) => {
			node.replaceWith("\n");
		});
		navigator.clipboard.writeText(clone.textContent ?? "");
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"data-checked": checked || void 0,
		className: twMerge(buttonVariants({
			className: "hover:text-fd-accent-foreground data-checked:text-fd-accent-foreground",
			size: "icon-xs"
		}), className),
		"aria-label": checked ? "Copied Text" : "Copy Text",
		onClick,
		...props,
		children: checked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clipboard, {})
	});
}
function CodeBlockTabs({ ref, ...props }) {
	const containerRef = (0, import_react.useRef)(null);
	const nested = (0, import_react.use)(TabsContext) !== null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
		ref: mergeRefs$1(containerRef, ref),
		...props,
		className: twMerge("bg-fd-card rounded-xl border", !nested && "my-4", props.className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContext, {
			value: (0, import_react.useMemo)(() => ({
				containerRef,
				nested
			}), [nested]),
			children: props.children
		})
	});
}
function CodeBlockTabsList(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
		...props,
		className: twMerge("flex flex-row px-2 overflow-x-auto text-fd-muted-foreground", props.className),
		children: props.children
	});
}
function CodeBlockTabsTrigger({ children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
		...props,
		className: twMerge("relative group inline-flex text-sm font-medium text-nowrap items-center transition-colors gap-2 px-2 py-1.5 hover:text-fd-accent-foreground data-[state=active]:text-fd-primary [&_svg]:size-3.5", props.className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-2 bottom-0 h-px group-data-[state=active]:bg-fd-primary" }), children]
	});
}
function CodeBlockTab(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, { ...props });
}
function Image$1(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image$2, {
		sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px",
		...props,
		className: twMerge("rounded-lg", props.className)
	});
}
function Table(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-auto prose-no-margin my-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", { ...props })
	});
}
var defaultMdxComponents = {
	CodeBlockTab,
	CodeBlockTabs,
	CodeBlockTabsList,
	CodeBlockTabsTrigger,
	pre: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pre, { children: props.children })
	}),
	Card,
	Cards,
	a: Link,
	img: Image$1,
	h1: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
		as: "h1",
		...props
	}),
	h2: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
		as: "h2",
		...props
	}),
	h3: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
		as: "h3",
		...props
	}),
	h4: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
		as: "h4",
		...props
	}),
	h5: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
		as: "h5",
		...props
	}),
	h6: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
		as: "h6",
		...props
	}),
	table: Table,
	Callout,
	CalloutContainer,
	CalloutTitle,
	CalloutDescription
};
function AppOnly({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function PagesOnly({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: { display: "none" },
		children
	});
}
function Check$1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		style: { color: "green" },
		children: "✓"
	});
}
function Cross() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		style: { color: "red" },
		children: "✗"
	});
}
function Image({ src, srcLight, srcDark, alt, width, height, ...rest }) {
	const imgSrc = src || srcLight || srcDark || "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: imgSrc.startsWith("/") ? `https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com${imgSrc}` : imgSrc,
		alt: alt || "",
		width,
		height,
		loading: "lazy"
	});
}
function OGImage() {
	return null;
}
function VideoComponent() {
	return null;
}
function VideoSkeleton() {
	return null;
}
function getMDXComponents(components) {
	return {
		...defaultMdxComponents,
		AppOnly,
		PagesOnly,
		Check: Check$1,
		Cross,
		Image,
		img: Image,
		OGImage,
		VideoComponent,
		VideoSkeleton,
		...components
	};
}
var useMDXComponents = getMDXComponents;
var clientLoader = browserCollections.docs.createClientLoader({ component({ toc, frontmatter, default: MDX }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DocsPage, {
		toc,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocsTitle, { children: frontmatter.title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocsDescription, { children: frontmatter.description }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocsBody, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MDX, { components: useMDXComponents() }) })
		]
	});
} });
var createSsrRpc = (functionId, importer) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (importer ? await importer() : await getServerFnById(functionId))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var $$splitComponentImporter = () => import("./_-BLA6-CEH.mjs");
var Route = createFileRoute("/docs/$")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async ({ params }) => {
		const data = await serverLoader({ data: params._splat?.split("/") ?? [] });
		await clientLoader.preload(data.path);
		return data;
	}
});
var serverLoader = createServerFn({ method: "GET" }).inputValidator((slugs) => slugs).handler(createSsrRpc("3754d170b07e5384cb393a7ce01e3317e54e102cb5b75ed0780e1a678ae2d91a"));
//#endregion
export { useFolderDepth as C, useFolder as S, useTreePath as T, SidebarTabsDropdown as _, Route as a, clientLoader as b, SidebarDrawerContent as c, SidebarFolderContent as d, SidebarFolderLink as f, SidebarSeparator as g, SidebarProvider as h, LayoutTabs as i, SidebarDrawerOverlay as l, SidebarItem as m, LayoutContextProvider as n, SidebarCollapseTrigger as o, SidebarFolderTrigger as p, LayoutHeader as r, SidebarContent as s, LayoutBody as t, SidebarFolder as u, SidebarTrigger as v, useTreeContext as w, mergeRefs$1 as x, TreeContextProvider as y };
