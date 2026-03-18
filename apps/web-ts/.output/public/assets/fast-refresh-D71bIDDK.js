import{r as e}from"./chunk-DECur_0Z.js";import{t}from"./jsx-runtime-Cns_S3nq.js";var n=e(t()),r={title:`Fast Refresh`,description:`Fast Refresh is a hot module reloading experience that gives you instantaneous feedback on edits made to your React components.`},i={contents:[{heading:void 0,content:`Fast Refresh is a Next.js feature that gives you instantaneous feedback on
edits made to your React components. Fast Refresh is enabled by default in all
Next.js applications on **9.4 or newer**. With Next.js Fast Refresh enabled,
most edits should be visible within a second, **without losing component
state**.`},{heading:`how-it-works`,content:`If you edit a file that &#x2A;*only exports React component(s)**, Fast Refresh will
update the code only for that file, and re-render your component. You can edit
anything in that file, including styles, rendering logic, event handlers, or
effects.`},{heading:`how-it-works`,content:"If you edit a file with exports that *aren't* React components, Fast Refresh\nwill re-run both that file, and the other files importing it. So if both\n`Button.js` and `Modal.js` import `theme.js`, editing `theme.js` will update\nboth components."},{heading:`how-it-works`,content:`Finally, if you **edit a file** that's **imported by files outside of the
React tree**, Fast Refresh **will fall back to doing a full reload**. You
might have a file which renders a React component but also exports a value
that is imported by a **non-React component**. For example, maybe your
component also exports a constant, and a non-React utility file imports it. In
that case, consider migrating the constant to a separate file and importing it
into both files. This will re-enable Fast Refresh to work. Other cases can
usually be solved in a similar way.`},{heading:`syntax-errors`,content:`If you make a syntax error during development, you can fix it and save the file
again. The error will disappear automatically, so you won't need to reload the
app. **You will not lose component state**.`},{heading:`runtime-errors`,content:`If you make a mistake that leads to a runtime error inside your component,
you'll be greeted with a contextual overlay. Fixing the error will automatically
dismiss the overlay, without reloading the app.`},{heading:`runtime-errors`,content:`Component state will be retained if the error did not occur during rendering. If
the error did occur during rendering, React will remount your application using
the updated code.`},{heading:`runtime-errors`,content:`If you have error boundaries
in your app (which is a good idea for graceful failures in production), they
will retry rendering on the next edit after a rendering error. This means having
an error boundary can prevent you from always getting reset to the root app
state. However, keep in mind that error boundaries shouldn't be *too* granular.
They are used by React in production, and should always be designed
intentionally.`},{heading:`limitations`,content:`Fast Refresh tries to preserve local React state in the component you're
editing, but only if it's safe to do so. Here's a few reasons why you might see
local state being reset on every edit to a file:`},{heading:`limitations`,content:`Local state is not preserved for class components (only function components
and Hooks preserve state).`},{heading:`limitations`,content:`The file you're editing might have *other* exports in addition to a React
component.`},{heading:`limitations`,content:`Sometimes, a file would export the result of calling a higher-order component
like \`HOC(WrappedComponent)\`. If the returned component is a
class, its state will be reset.`},{heading:`limitations`,content:"Anonymous arrow functions like `export default () => <div />;` cause Fast Refresh to not preserve local component state. For large codebases you can use our `name-default-component` codemod."},{heading:`limitations`,content:`As more of your codebase moves to function components and Hooks, you can expect
state to be preserved in more cases.`},{heading:`tips`,content:`Fast Refresh preserves React local state in function components (and Hooks) by
default.`},{heading:`tips`,content:`Sometimes you might want to *force* the state to be reset, and a component to
be remounted. For example, this can be handy if you're tweaking an animation
that only happens on mount. To do this, you can add \`// @refresh reset\`
anywhere in the file you're editing. This directive is local to the file, and
instructs Fast Refresh to remount components defined in that file on every
edit.`},{heading:`tips`,content:"You can put `console.log` or `debugger;` into the components you edit during\ndevelopment."},{heading:`tips`,content:"Remember that imports are case sensitive. Both fast and full refresh can fail,\nwhen your import doesn't match the actual filename.\nFor example, `'./header'` vs `'./Header'`."},{heading:`fast-refresh-and-hooks`,content:"When possible, Fast Refresh attempts to preserve the state of your component\nbetween edits. In particular, `useState` and `useRef` preserve their previous\nvalues as long as you don't change their arguments or the order of the Hook\ncalls."},{heading:`fast-refresh-and-hooks`,content:"Hooks with dependencies—such as `useEffect`, `useMemo`, and `useCallback`—will\n*always* update during Fast Refresh. Their list of dependencies will be ignored\nwhile Fast Refresh is happening."},{heading:`fast-refresh-and-hooks`,content:"For example, when you edit `useMemo(() => x * 2, [x])` to\n`useMemo(() => x * 10, [x])`, it will re-run even though `x` (the dependency)\nhas not changed. If React didn't do that, your edit wouldn't reflect on the\nscreen!"},{heading:`fast-refresh-and-hooks`,content:"Sometimes, this can lead to unexpected results. For example, even a `useEffect`\nwith an empty array of dependencies would still re-run once during Fast Refresh."},{heading:`fast-refresh-and-hooks`,content:`However, writing code resilient to occasional re-running of \`useEffect\` is a good practice even
without Fast Refresh. It will make it easier for you to introduce new dependencies to it later on
and it's enforced by React Strict Mode,
which we highly recommend enabling.`}],headings:[{id:`how-it-works`,content:`How It Works`},{id:`error-resilience`,content:`Error Resilience`},{id:`syntax-errors`,content:`Syntax Errors`},{id:`runtime-errors`,content:`Runtime Errors`},{id:`limitations`,content:`Limitations`},{id:`tips`,content:`Tips`},{id:`fast-refresh-and-hooks`,content:`Fast Refresh and Hooks`}]},a=[{depth:2,url:`#how-it-works`,title:(0,n.jsx)(n.Fragment,{children:`How It Works`})},{depth:2,url:`#error-resilience`,title:(0,n.jsx)(n.Fragment,{children:`Error Resilience`})},{depth:3,url:`#syntax-errors`,title:(0,n.jsx)(n.Fragment,{children:`Syntax Errors`})},{depth:3,url:`#runtime-errors`,title:(0,n.jsx)(n.Fragment,{children:`Runtime Errors`})},{depth:2,url:`#limitations`,title:(0,n.jsx)(n.Fragment,{children:`Limitations`})},{depth:2,url:`#tips`,title:(0,n.jsx)(n.Fragment,{children:`Tips`})},{depth:2,url:`#fast-refresh-and-hooks`,title:(0,n.jsx)(n.Fragment,{children:`Fast Refresh and Hooks`})}];function o(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Fast Refresh is a Next.js feature that gives you instantaneous feedback on
edits made to your React components. Fast Refresh is enabled by default in all
Next.js applications on `,(0,n.jsx)(t.strong,{children:`9.4 or newer`}),`. With Next.js Fast Refresh enabled,
most edits should be visible within a second, `,(0,n.jsx)(t.strong,{children:`without losing component
state`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`how-it-works`,children:`How It Works`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`If you edit a file that `,(0,n.jsx)(t.strong,{children:`only exports React component(s)`}),`, Fast Refresh will
update the code only for that file, and re-render your component. You can edit
anything in that file, including styles, rendering logic, event handlers, or
effects.`]}),`
`,(0,n.jsxs)(t.li,{children:[`If you edit a file with exports that `,(0,n.jsx)(t.em,{children:`aren't`}),` React components, Fast Refresh
will re-run both that file, and the other files importing it. So if both
`,(0,n.jsx)(t.code,{children:`Button.js`}),` and `,(0,n.jsx)(t.code,{children:`Modal.js`}),` import `,(0,n.jsx)(t.code,{children:`theme.js`}),`, editing `,(0,n.jsx)(t.code,{children:`theme.js`}),` will update
both components.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Finally, if you `,(0,n.jsx)(t.strong,{children:`edit a file`}),` that's `,(0,n.jsx)(t.strong,{children:`imported by files outside of the
React tree`}),`, Fast Refresh `,(0,n.jsx)(t.strong,{children:`will fall back to doing a full reload`}),`. You
might have a file which renders a React component but also exports a value
that is imported by a `,(0,n.jsx)(t.strong,{children:`non-React component`}),`. For example, maybe your
component also exports a constant, and a non-React utility file imports it. In
that case, consider migrating the constant to a separate file and importing it
into both files. This will re-enable Fast Refresh to work. Other cases can
usually be solved in a similar way.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`error-resilience`,children:`Error Resilience`}),`
`,(0,n.jsx)(t.h3,{id:`syntax-errors`,children:`Syntax Errors`}),`
`,(0,n.jsxs)(t.p,{children:[`If you make a syntax error during development, you can fix it and save the file
again. The error will disappear automatically, so you won't need to reload the
app. `,(0,n.jsx)(t.strong,{children:`You will not lose component state`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`runtime-errors`,children:`Runtime Errors`}),`
`,(0,n.jsx)(t.p,{children:`If you make a mistake that leads to a runtime error inside your component,
you'll be greeted with a contextual overlay. Fixing the error will automatically
dismiss the overlay, without reloading the app.`}),`
`,(0,n.jsx)(t.p,{children:`Component state will be retained if the error did not occur during rendering. If
the error did occur during rendering, React will remount your application using
the updated code.`}),`
`,(0,n.jsxs)(t.p,{children:[`If you have `,(0,n.jsx)(t.a,{href:`https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary`,children:`error boundaries`}),`
in your app (which is a good idea for graceful failures in production), they
will retry rendering on the next edit after a rendering error. This means having
an error boundary can prevent you from always getting reset to the root app
state. However, keep in mind that error boundaries shouldn't be `,(0,n.jsx)(t.em,{children:`too`}),` granular.
They are used by React in production, and should always be designed
intentionally.`]}),`
`,(0,n.jsx)(t.h2,{id:`limitations`,children:`Limitations`}),`
`,(0,n.jsx)(t.p,{children:`Fast Refresh tries to preserve local React state in the component you're
editing, but only if it's safe to do so. Here's a few reasons why you might see
local state being reset on every edit to a file:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Local state is not preserved for class components (only function components
and Hooks preserve state).`}),`
`,(0,n.jsxs)(t.li,{children:[`The file you're editing might have `,(0,n.jsx)(t.em,{children:`other`}),` exports in addition to a React
component.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Sometimes, a file would export the result of calling a higher-order component
like `,(0,n.jsx)(t.code,{children:`HOC(WrappedComponent)`}),`. If the returned component is a
class, its state will be reset.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Anonymous arrow functions like `,(0,n.jsx)(t.code,{children:`export default () => <div />;`}),` cause Fast Refresh to not preserve local component state. For large codebases you can use our `,(0,n.jsxs)(t.a,{href:`/docs/pages/building-your-application/upgrading/codemods#name-default-component`,children:[(0,n.jsx)(t.code,{children:`name-default-component`}),` codemod`]}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`As more of your codebase moves to function components and Hooks, you can expect
state to be preserved in more cases.`}),`
`,(0,n.jsx)(t.h2,{id:`tips`,children:`Tips`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Fast Refresh preserves React local state in function components (and Hooks) by
default.`}),`
`,(0,n.jsxs)(t.li,{children:[`Sometimes you might want to `,(0,n.jsx)(t.em,{children:`force`}),` the state to be reset, and a component to
be remounted. For example, this can be handy if you're tweaking an animation
that only happens on mount. To do this, you can add `,(0,n.jsx)(t.code,{children:`// @refresh reset`}),`
anywhere in the file you're editing. This directive is local to the file, and
instructs Fast Refresh to remount components defined in that file on every
edit.`]}),`
`,(0,n.jsxs)(t.li,{children:[`You can put `,(0,n.jsx)(t.code,{children:`console.log`}),` or `,(0,n.jsx)(t.code,{children:`debugger;`}),` into the components you edit during
development.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Remember that imports are case sensitive. Both fast and full refresh can fail,
when your import doesn't match the actual filename.
For example, `,(0,n.jsx)(t.code,{children:`'./header'`}),` vs `,(0,n.jsx)(t.code,{children:`'./Header'`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fast-refresh-and-hooks`,children:`Fast Refresh and Hooks`}),`
`,(0,n.jsxs)(t.p,{children:[`When possible, Fast Refresh attempts to preserve the state of your component
between edits. In particular, `,(0,n.jsx)(t.code,{children:`useState`}),` and `,(0,n.jsx)(t.code,{children:`useRef`}),` preserve their previous
values as long as you don't change their arguments or the order of the Hook
calls.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Hooks with dependencies—such as `,(0,n.jsx)(t.code,{children:`useEffect`}),`, `,(0,n.jsx)(t.code,{children:`useMemo`}),`, and `,(0,n.jsx)(t.code,{children:`useCallback`}),`—will
`,(0,n.jsx)(t.em,{children:`always`}),` update during Fast Refresh. Their list of dependencies will be ignored
while Fast Refresh is happening.`]}),`
`,(0,n.jsxs)(t.p,{children:[`For example, when you edit `,(0,n.jsx)(t.code,{children:`useMemo(() => x * 2, [x])`}),` to
`,(0,n.jsx)(t.code,{children:`useMemo(() => x * 10, [x])`}),`, it will re-run even though `,(0,n.jsx)(t.code,{children:`x`}),` (the dependency)
has not changed. If React didn't do that, your edit wouldn't reflect on the
screen!`]}),`
`,(0,n.jsxs)(t.p,{children:[`Sometimes, this can lead to unexpected results. For example, even a `,(0,n.jsx)(t.code,{children:`useEffect`}),`
with an empty array of dependencies would still re-run once during Fast Refresh.`]}),`
`,(0,n.jsxs)(t.p,{children:[`However, writing code resilient to occasional re-running of `,(0,n.jsx)(t.code,{children:`useEffect`}),` is a good practice even
without Fast Refresh. It will make it easier for you to introduce new dependencies to it later on
and it's enforced by `,(0,n.jsx)(t.a,{href:`/docs/pages/api-reference/next-config-js/reactStrictMode`,children:`React Strict Mode`}),`,
which we highly recommend enabling.`]})]})}function s(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}export{s as default,r as frontmatter,i as structuredData,a as toc};