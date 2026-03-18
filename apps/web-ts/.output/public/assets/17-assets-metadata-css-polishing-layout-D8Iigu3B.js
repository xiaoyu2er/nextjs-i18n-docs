import{r as e}from"./chunk-DECur_0Z.js";import{t}from"./jsx-runtime-Cns_S3nq.js";var n=e(t()),r={title:`Polishing Layout`,image:`https://nextjs.org/api/learn-og?title=Polishing%20Layout&amp;chapter=17`,headline:`Pages Router: Polishing Layout`},i={contents:[{heading:void 0,content:`So far, we’ve only added minimal React and CSS code just to illustrate concepts such as CSS Modules. Before we move on to our next lesson about data fetching, let’s polish our page styling and code.`},{heading:`update-componentslayoutmodulecss`,content:"First, open `components/layout.module.css` and replace its content with the following more polished styles for the layout and profile picture:"},{heading:`create-stylesutilsmodulecss`,content:`Second, let’s create a set of CSS utility classes (for text styles) that can be re-used across multiple components.`},{heading:`create-stylesutilsmodulecss`,content:"Add a new CSS file called `styles/utils.module.css` with the following content:"},{heading:`create-stylesutilsmodulecss`,content:"> You can reuse these utility classes throughout your application, and you may even use utility classes in your `global.css` file. Utility classes refer to an approach of writing CSS selectors rather than a method (e.g. global styles, CSS modules, Sass, etc). Learn more about utility-first CSS."},{heading:`update-componentslayoutjs`,content:"Third, open `components/layout.js` and replace its content with the following code, **changing** `Your Name` to an actual name:"},{heading:`update-componentslayoutjs`,content:`Here’s what’s new:`},{heading:`update-componentslayoutjs`,content:"`meta` tags (like `og:image`), which are used to describe a page's content"},{heading:`update-componentslayoutjs`,content:"Boolean `home` prop which will adjust the size of the title and the image"},{heading:`update-componentslayoutjs`,content:'"Back to home" link at the bottom if `home` is `false`'},{heading:`update-componentslayoutjs`,content:"Added images with `next/image`, which are preloaded with the priority attribute"},{heading:`update-pagesindexjs`,content:`Finally, let's update the homepage.`},{heading:`update-pagesindexjs`,content:"Open `pages/index.js` and replace its content with:"},{heading:`update-pagesindexjs`,content:"Then replace `[Your Self Introduction]` with your self-introduction. Here’s an example with the author’s profile:"},{heading:`update-pagesindexjs`,content:`That’s it! We now have the polished layout code and we're ready to move on to our data fetching lessons.`},{heading:`update-pagesindexjs`,content:`Before we wrap up this lesson, let’s talk about some helpful techniques related to Next.js’s CSS support on the next page.`}],headings:[{id:`update-componentslayoutmodulecss`,content:"Update `components/layout.module.css`"},{id:`create-stylesutilsmodulecss`,content:"Create `styles/utils.module.css`"},{id:`update-componentslayoutjs`,content:"Update `components/layout.js`"},{id:`update-pagesindexjs`,content:"Update `pages/index.js`"}]},a=[{depth:3,url:`#update-componentslayoutmodulecss`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(`a`,{href:`#update-componentslayoutmodulecss`,children:[`Update `,(0,n.jsx)(`code`,{children:`components/layout.module.css`})]})})},{depth:3,url:`#create-stylesutilsmodulecss`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(`a`,{href:`#create-stylesutilsmodulecss`,children:[`Create `,(0,n.jsx)(`code`,{children:`styles/utils.module.css`})]})})},{depth:3,url:`#update-componentslayoutjs`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(`a`,{href:`#update-componentslayoutjs`,children:[`Update `,(0,n.jsx)(`code`,{children:`components/layout.js`})]})})},{depth:3,url:`#update-pagesindexjs`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(`a`,{href:`#update-pagesindexjs`,children:[`Update `,(0,n.jsx)(`code`,{children:`pages/index.js`})]})})}];function o(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h3:`h3`,img:`img`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`So far, we’ve only added minimal React and CSS code just to illustrate concepts such as `,(0,n.jsx)(t.a,{href:`/docs/basic-features/built-in-css-support#adding-component-level-css`,children:`CSS Modules`}),`. Before we move on to our next lesson about `,(0,n.jsx)(t.a,{href:`/docs/basic-features/data-fetching`,children:`data fetching`}),`, let’s polish our page styling and code.`]}),`
`,(0,n.jsx)(t.h3,{id:`update-componentslayoutmodulecss`,children:(0,n.jsxs)(t.a,{href:`#update-componentslayoutmodulecss`,children:[`Update `,(0,n.jsx)(t.code,{children:`components/layout.module.css`})]})}),`
`,(0,n.jsxs)(t.p,{children:[`First, open `,(0,n.jsx)(t.code,{children:`components/layout.module.css`}),` and replace its content with the following more polished styles for the layout and profile picture:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`.container {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  max-width: 36rem;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  padding: 0 1rem;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  margin: 3rem auto 6rem;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`.header {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  display: flex;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  flex-direction: column;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  align-items: center;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`.backToHome {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  margin: 3rem 0 0;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})})]})})}),`
`,(0,n.jsx)(t.h3,{id:`create-stylesutilsmodulecss`,children:(0,n.jsxs)(t.a,{href:`#create-stylesutilsmodulecss`,children:[`Create `,(0,n.jsx)(t.code,{children:`styles/utils.module.css`})]})}),`
`,(0,n.jsx)(t.p,{children:`Second, let’s create a set of CSS utility classes (for text styles) that can be re-used across multiple components.`}),`
`,(0,n.jsxs)(t.p,{children:[`Add a new CSS file called `,(0,n.jsx)(t.code,{children:`styles/utils.module.css`}),` with the following content:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`.heading2Xl {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  font-size: 2.5rem;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  line-height: 1.2;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  font-weight: 800;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  letter-spacing: -0.05rem;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  margin: 1rem 0;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`.headingXl {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  font-size: 2rem;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  line-height: 1.3;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  font-weight: 800;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  letter-spacing: -0.05rem;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  margin: 1rem 0;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`.headingLg {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  font-size: 1.5rem;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  line-height: 1.4;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  margin: 1rem 0;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`.headingMd {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  font-size: 1.2rem;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  line-height: 1.5;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`.borderCircle {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  border-radius: 9999px;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`.colorInherit {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  color: inherit;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`.padding1px {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  padding-top: 1px;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`.list {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  list-style: none;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  padding: 0;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  margin: 0;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`.listItem {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  margin: 0 0 1.25rem;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`.lightText {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  color: #666;`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})})]})})}),`
`,(0,n.jsxs)(t.blockquote,{children:[`
`,(0,n.jsxs)(t.p,{children:[`You can reuse these utility classes throughout your application, and you may even use utility classes in your `,(0,n.jsx)(t.code,{children:`global.css`}),` file. Utility classes refer to an approach of writing CSS selectors rather than a method (e.g. global styles, CSS modules, Sass, etc). Learn more about `,(0,n.jsx)(t.a,{href:`https://tailwindcss.com/docs/utility-first`,children:`utility-first CSS`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`update-componentslayoutjs`,children:(0,n.jsxs)(t.a,{href:`#update-componentslayoutjs`,children:[`Update `,(0,n.jsx)(t.code,{children:`components/layout.js`})]})}),`
`,(0,n.jsxs)(t.p,{children:[`Third, open `,(0,n.jsx)(t.code,{children:`components/layout.js`}),` and replace its content with the following code, `,(0,n.jsx)(t.strong,{children:`changing`}),` `,(0,n.jsx)(t.code,{children:`Your Name`}),` to an actual name:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`import Head from 'next/head';`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`import Image from 'next/image';`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`import styles from './layout.module.css';`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`import utilStyles from '../styles/utils.module.css';`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`import Link from 'next/link';`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`const name = 'Your Name';`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`export const siteTitle = 'Next.js Sample Website';`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`export default function Layout({ children, home }) {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  return (`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    <div className={styles.container}>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <Head>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <link rel="icon" href="/favicon.ico" />`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <meta`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          name="description"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          content="Learn how to build a personal website using Next.js"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        />`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <meta`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          property="og:image"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:"          content={`https://og-image.vercel.app/${encodeURI("})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            siteTitle,`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:"          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}"})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        />`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <meta name="og:title" content={siteTitle} />`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <meta name="twitter:card" content="summary_large_image" />`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      </Head>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <header className={styles.header}>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        {home ? (`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          <>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            <Image`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              priority`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              src="/images/profile.jpg"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              className={utilStyles.borderCircle}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              height={144}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              width={144}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              alt=""`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            />`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            <h1 className={utilStyles.heading2Xl}>{name}</h1>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          </>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ) : (`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          <>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            <Link href="/">`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              <Image`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                priority`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                src="/images/profile.jpg"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                className={utilStyles.borderCircle}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                height={108}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                width={108}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                alt=""`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              />`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            </Link>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            <h2 className={utilStyles.headingLg}>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              <Link href="/" className={utilStyles.colorInherit}>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                {name}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              </Link>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            </h2>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          </>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        )}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      </header>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <main>{children}</main>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      {!home && (`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <div className={styles.backToHome}>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          <Link href="/">← Back to home</Link>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        </div>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      )}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    </div>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  );`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})})]})})}),`
`,(0,n.jsx)(t.p,{children:`Here’s what’s new:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.a,{href:`https://en.wikipedia.org/wiki/Meta_element`,children:[(0,n.jsx)(t.code,{children:`meta`}),` tags`]}),` (like `,(0,n.jsx)(t.code,{children:`og:image`}),`), which are used to describe a page's content`]}),`
`,(0,n.jsxs)(t.li,{children:[`Boolean `,(0,n.jsx)(t.code,{children:`home`}),` prop which will adjust the size of the title and the image`]}),`
`,(0,n.jsxs)(t.li,{children:[`"Back to home" link at the bottom if `,(0,n.jsx)(t.code,{children:`home`}),` is `,(0,n.jsx)(t.code,{children:`false`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Added images with `,(0,n.jsx)(t.code,{children:`next/image`}),`, which are preloaded with the `,(0,n.jsx)(t.a,{href:`/docs/api-reference/next/image#priority`,children:`priority`}),` attribute`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`update-pagesindexjs`,children:(0,n.jsxs)(t.a,{href:`#update-pagesindexjs`,children:[`Update `,(0,n.jsx)(t.code,{children:`pages/index.js`})]})}),`
`,(0,n.jsx)(t.p,{children:`Finally, let's update the homepage.`}),`
`,(0,n.jsxs)(t.p,{children:[`Open `,(0,n.jsx)(t.code,{children:`pages/index.js`}),` and replace its content with:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`import Head from 'next/head';`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`import Layout, { siteTitle } from '../components/layout';`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`import utilStyles from '../styles/utils.module.css';`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`export default function Home() {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  return (`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    <Layout home>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <Head>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <title>{siteTitle}</title>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      </Head>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <section className={utilStyles.headingMd}>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <p>[Your Self Introduction]</p>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <p>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          (This is a sample website - you’ll be building a site like this on{' '}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        </p>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      </section>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    </Layout>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  );`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Then replace `,(0,n.jsx)(t.code,{children:`[Your Self Introduction]`}),` with your self-introduction. Here’s an example with the author’s profile:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:`https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/assets-metadata-css/example.png`,alt:`Example`})}),`
`,(0,n.jsx)(t.p,{children:`That’s it! We now have the polished layout code and we're ready to move on to our data fetching lessons.`}),`
`,(0,n.jsx)(t.p,{children:`Before we wrap up this lesson, let’s talk about some helpful techniques related to Next.js’s CSS support on the next page.`})]})}function s(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}export{s as default,r as frontmatter,i as structuredData,a as toc};