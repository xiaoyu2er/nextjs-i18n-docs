import{r as e}from"./chunk-DECur_0Z.js";import{t}from"./jsx-runtime-Cns_S3nq.js";var n=e(t()),r={title:`Turbopack`,description:`Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js.`},i={contents:[{heading:void 0,content:`Turbopack (beta) is an incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js.`},{heading:`usage`,content:"Turbopack can be used in Next.js in both the `pages` and `app` directories for faster local development. To enable Turbopack, use the `--turbo` flag when running the Next.js development server."},{heading:`supported-features`,content:`Turbopack in Next.js requires zero-configuration for most users and can be extended for more advanced use cases. To learn more about the currently supported features for Turbopack, view the API Reference.`},{heading:`unsupported-features`,content:"Turbopack currently only supports `next dev` and does not support `next build`. We are currently working on support for builds as we move closer towards stability."},{heading:`unsupported-features`,content:`These features are currently not supported:`},{heading:`unsupported-features`,content:"`webpack()` configuration in `next.config.js`"},{heading:`unsupported-features`,content:`Turbopack replaces Webpack, this means that webpack configuration is not supported.`},{heading:`unsupported-features`,content:`To configure Turbopack, see the documentation.`},{heading:`unsupported-features`,content:`A subset of Webpack loaders are supported in Turbopack.`},{heading:`unsupported-features`,content:"Babel (`.babelrc`)"},{heading:`unsupported-features`,content:`Turbopack leverages the SWC compiler for all transpilation and optimizations. This means that Babel is not included by default.`},{heading:`unsupported-features`,content:"If you have a `.babelrc` file, you might no longer need it because Next.js includes common Babel plugins as SWC transforms that can be enabled. You can read more about this in the compiler documentation."},{heading:`unsupported-features`,content:"If you still need to use Babel after verifying your particular use case is not covered, you can leverage Turbopack's support for custom webpack loaders to include `babel-loader`."},{heading:`unsupported-features`,content:`Creating a root layout automatically in App Router.`},{heading:`unsupported-features`,content:`This behavior is currently not supported since it changes input files, instead, an error will be shown for you manually add a root layout in the desired location.`},{heading:`unsupported-features`,content:"`@next/font` (legacy font support)."},{heading:`unsupported-features`,content:"`@next/font` is deprecated in favor of `next/font`. `next/font` is fully supported with Turbopack."},{heading:`unsupported-features`,content:"`new Worker('file', import.meta.url)`."},{heading:`unsupported-features`,content:`We are planning to implement this in the future.`},{heading:`unsupported-features`,content:`Relay transforms`},{heading:`unsupported-features`,content:`We are planning to implement this in the future.`},{heading:`unsupported-features`,content:"`experimental.nextScriptWorkers`"},{heading:`unsupported-features`,content:`We are planning to implement this in the future.`},{heading:`unsupported-features`,content:`AMP.`},{heading:`unsupported-features`,content:`We are currently not planning to support AMP in Next.js with Turbopack.`},{heading:`unsupported-features`,content:`Yarn PnP`},{heading:`unsupported-features`,content:`We are currently not planning to support Yarn PnP in Next.js with Turbopack.`},{heading:`unsupported-features`,content:"`experimental.urlImports`"},{heading:`unsupported-features`,content:"We are currently not planning to support `experimental.urlImports` in Next.js with Turbopack."},{heading:`generating-trace-files`,content:"Trace files allow the Next.js team to investigate and improve performance metrics and memory usage. To generate a trace file, append `NEXT_TURBOPACK_TRACING=1` to the `next dev --turbo` command, this will generate a `.next/trace.log` file."},{heading:`generating-trace-files`,content:`When reporting issues related to Turbopack performance and memory usage, please include the trace file in your GitHub issue.`}],headings:[{id:`usage`,content:`Usage`},{id:`supported-features`,content:`Supported features`},{id:`unsupported-features`,content:`Unsupported features`},{id:`generating-trace-files`,content:`Generating Trace Files`}]},a=[{depth:2,url:`#usage`,title:(0,n.jsx)(n.Fragment,{children:`Usage`})},{depth:2,url:`#supported-features`,title:(0,n.jsx)(n.Fragment,{children:`Supported features`})},{depth:2,url:`#unsupported-features`,title:(0,n.jsx)(n.Fragment,{children:`Unsupported features`})},{depth:2,url:`#generating-trace-files`,title:(0,n.jsx)(n.Fragment,{children:`Generating Trace Files`})}];function o(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:`https://turbo.build/pack`,children:`Turbopack`}),` (beta) is an incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js.`]}),`
`,(0,n.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,n.jsxs)(t.p,{children:[`Turbopack can be used in Next.js in both the `,(0,n.jsx)(t.code,{children:`pages`}),` and `,(0,n.jsx)(t.code,{children:`app`}),` directories for faster local development. To enable Turbopack, use the `,(0,n.jsx)(t.code,{children:`--turbo`}),` flag when running the Next.js development server.`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,title:`package.json`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  "scripts"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line highlighted`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    "dev"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"next dev --turbo"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    "build"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"next build"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    "start"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"next start"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    "lint"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"next lint"`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  }`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`supported-features`,children:`Supported features`}),`
`,(0,n.jsxs)(t.p,{children:[`Turbopack in Next.js requires zero-configuration for most users and can be extended for more advanced use cases. To learn more about the currently supported features for Turbopack, view the `,(0,n.jsx)(t.a,{href:`/docs/app/api-reference/next-config-js/turbo`,children:`API Reference`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`unsupported-features`,children:`Unsupported features`}),`
`,(0,n.jsxs)(t.p,{children:[`Turbopack currently only supports `,(0,n.jsx)(t.code,{children:`next dev`}),` and does not support `,(0,n.jsx)(t.code,{children:`next build`}),`. We are currently working on support for builds as we move closer towards stability.`]}),`
`,(0,n.jsx)(t.p,{children:`These features are currently not supported:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`/docs/app/api-reference/next-config-js/webpack`,children:(0,n.jsx)(t.code,{children:`webpack()`})}),` configuration in `,(0,n.jsx)(t.code,{children:`next.config.js`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Turbopack replaces Webpack, this means that webpack configuration is not supported.`}),`
`,(0,n.jsxs)(t.li,{children:[`To configure Turbopack, `,(0,n.jsx)(t.a,{href:`/docs/app/api-reference/next-config-js/turbo`,children:`see the documentation`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`A subset of `,(0,n.jsx)(t.a,{href:`/docs/app/api-reference/next-config-js/turbo#webpack-loaders`,children:`Webpack loaders`}),` are supported in Turbopack.`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[`Babel (`,(0,n.jsx)(t.code,{children:`.babelrc`}),`)`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Turbopack leverages the `,(0,n.jsx)(t.a,{href:`/docs/architecture/nextjs-compiler#why-swc`,children:`SWC`}),` compiler for all transpilation and optimizations. This means that Babel is not included by default.`]}),`
`,(0,n.jsxs)(t.li,{children:[`If you have a `,(0,n.jsx)(t.code,{children:`.babelrc`}),` file, you might no longer need it because Next.js includes common Babel plugins as SWC transforms that can be enabled. You can read more about this in the `,(0,n.jsx)(t.a,{href:`docs/architecture/nextjs-compiler#supported-features`,children:`compiler documentation`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`If you still need to use Babel after verifying your particular use case is not covered, you can leverage Turbopack's `,(0,n.jsx)(t.a,{href:`/docs/app/api-reference/next-config-js/turbo#webpack-loaders`,children:`support for custom webpack loaders`}),` to include `,(0,n.jsx)(t.code,{children:`babel-loader`}),`.`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[`Creating a root layout automatically in App Router.`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`This behavior is currently not supported since it changes input files, instead, an error will be shown for you manually add a root layout in the desired location.`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`@next/font`}),` (legacy font support).`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`@next/font`}),` is deprecated in favor of `,(0,n.jsx)(t.code,{children:`next/font`}),`. `,(0,n.jsx)(t.a,{href:`/docs/app/building-your-application/optimizing/fonts`,children:(0,n.jsx)(t.code,{children:`next/font`})}),` is fully supported with Turbopack.`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`new Worker('file', import.meta.url)`}),`.`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`We are planning to implement this in the future.`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`/docs/architecture/nextjs-compiler#relay`,children:`Relay transforms`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`We are planning to implement this in the future.`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`experimental.nextScriptWorkers`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`We are planning to implement this in the future.`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`/docs/pages/building-your-application/configuring/amp`,children:`AMP`}),`.`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`We are currently not planning to support AMP in Next.js with Turbopack.`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[`Yarn PnP`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`We are currently not planning to support Yarn PnP in Next.js with Turbopack.`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`/docs/app/api-reference/next-config-js/urlImports`,children:(0,n.jsx)(t.code,{children:`experimental.urlImports`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`We are currently not planning to support `,(0,n.jsx)(t.code,{children:`experimental.urlImports`}),` in Next.js with Turbopack.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`generating-trace-files`,children:`Generating Trace Files`}),`
`,(0,n.jsxs)(t.p,{children:[`Trace files allow the Next.js team to investigate and improve performance metrics and memory usage. To generate a trace file, append `,(0,n.jsx)(t.code,{children:`NEXT_TURBOPACK_TRACING=1`}),` to the `,(0,n.jsx)(t.code,{children:`next dev --turbo`}),` command, this will generate a `,(0,n.jsx)(t.code,{children:`.next/trace.log`}),` file.`]}),`
`,(0,n.jsxs)(t.p,{children:[`When reporting issues related to Turbopack performance and memory usage, please include the trace file in your `,(0,n.jsx)(t.a,{href:`https://github.com/vercel/next.js`,children:`GitHub`}),` issue.`]})]})}function s(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}export{s as default,r as frontmatter,i as structuredData,a as toc};