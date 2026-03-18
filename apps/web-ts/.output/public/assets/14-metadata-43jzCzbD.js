import{r as e}from"./chunk-DECur_0Z.js";import{t}from"./jsx-runtime-Cns_S3nq.js";var n=e(t()),r={title:`Metadata`,image:`https://nextjs.org/api/learn-og?title=Metadata&amp;chapter=14`,headline:`SEO: Metadata`},i={contents:[{heading:void 0,content:`Metadata is the abstract of the website's content and is used to attach a title, a description, and an image to the site.`},{heading:`title`,content:`The title tag is one of the most important SEO elements for two main reasons:`},{heading:`title`,content:`Firstly, it's what users see when they click to enter your website from search results.`},{heading:`title`,content:`Secondly, it's one of the main elements Google uses to understand what your page is about. Using keywords in the title is recommended because it usually leads to increased improved ranking positions in search engines.`},{heading:`title`,content:`Here's an example:`},{heading:`title`,content:`This page contains all the main keywords and also makes it attractive for users showing a clear value proposition: Discounts!`},{heading:`description`,content:`The description meta tag is another important SEO element, but less so than the title. According to Google, this element is not taken into account for ranking purposes, but it can affect your click-through-rate on search results.`},{heading:`description`,content:`Use the description meta tag to complement the information in your title. Work in more keywords to the content here if there are some that didn't fit in the title. These keywords will appear in bold if a user's search contains them.`},{heading:`description`,content:`An example of a description meta tag in HTML:`},{heading:`description`,content:`This how it looks on the page when it's part of the search engine results page (SERP):`},{heading:`description`,content:`Example of a SERP snippet with a Title and Description`},{heading:`description`,content:"In Next.js, we set the title and description in the `Head` component. This is how meta title and description tags might look like in Next.js:"},{heading:`description`,content:"The `Head` component can be used on any page in your application to describe or provide information about the page's contents."},{heading:`open-graph`,content:`The Open Graph protocol, originally developed by Facebook, standardizes how metadata is used on any given web page. You can provide as little or as much information as you would like, but all of the open graph pieces fit together to create a representation of the site it's attached to.`},{heading:`open-graph`,content:`Other social media companies (like Pinterest, Twitter, LinkedIn, etc), may also use open graph for displaying rich cards when sharing a URL. Twitter also has tags of its Twitter Cards.`},{heading:`open-graph`,content:`While these Open Graph tags have a lot of similarities with SEO related tags, they do not offer any benefit to search engine rankings, but they are still recommended to use as people might share your content on social media or private messaging tools such as WhatsApp or Telegram.`},{heading:`open-graph`,content:"You can add Open Graph tags by defining the `property` attribute in the meta tags inside the `Head` component. For example:"},{heading:`open-graph`,content:`Having a shareable link that offers a description and title, along with a picture that represents the page's content does not have a direct effect on SEO rankings, but it indirectly increases the clickability of the link, which will ultimately lead to more visitors to your site.`},{heading:`structured-data-and-json-ld`,content:`Structured data facilitates the understanding of your pages to search engines. Over the years, there have been several vocabularies in place, but currently the main one is schema.org.`},{heading:`structured-data-and-json-ld`,content:`According to the website, schema.org is a "collaborative, community activity with a mission to create, maintain, and promote schemas for structured data on the Internet, on web pages, in email messages, and beyond."`},{heading:`structured-data-and-json-ld`,content:`Schema.org's vocabulary can be used with many different encodings, including RDFa, Microdata, and JSON-LD.`},{heading:`structured-data-and-json-ld`,content:`Different search engines might adapt different vocabularies within schema.org, and no search engine covers all the use cases described the website's vocabulary. Be sure to check which vocabularies are accepted in each case.`},{heading:`structured-data-and-json-ld`,content:`An example of a what a product page might look like adding the JSON-LD product schema data:`},{heading:`structured-data-and-json-ld`,content:"In this example, the data is hardcoded as a string, but you can easily pass the data to the `addProductJsonLd` method to make it fully dynamic."},{heading:`further-reading`,content:`Open Graph Protocol: Documentation`},{heading:`further-reading`,content:`Google: Intro to Structured Data`},{heading:`further-reading`,content:`Google: Product Structured Data`},{heading:`further-reading`,content:`Google: Rich Results Tester`}],headings:[{id:`title`,content:`Title`},{id:`description`,content:`Description`},{id:`open-graph`,content:`Open Graph`},{id:`structured-data-and-json-ld`,content:`Structured Data and JSON-LD`},{id:`further-reading`,content:`Further Reading`}]},a=[{depth:3,url:`#title`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`a`,{href:`#title`,children:`Title`})})},{depth:3,url:`#description`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`a`,{href:`#description`,children:`Description`})})},{depth:3,url:`#open-graph`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`a`,{href:`#open-graph`,children:`Open Graph`})})},{depth:3,url:`#structured-data-and-json-ld`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`a`,{href:`#structured-data-and-json-ld`,children:`Structured Data and JSON-LD`})})},{depth:3,url:`#further-reading`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`a`,{href:`#further-reading`,children:`Further Reading`})})}];function o(e){let t={a:`a`,code:`code`,h3:`h3`,img:`img`,li:`li`,p:`p`,pre:`pre`,span:`span`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Metadata is the abstract of the website's content and is used to attach a title, a description, and an image to the site.`}),`
`,(0,n.jsx)(t.h3,{id:`title`,children:(0,n.jsx)(t.a,{href:`#title`,children:`Title`})}),`
`,(0,n.jsx)(t.p,{children:`The title tag is one of the most important SEO elements for two main reasons:`}),`
`,(0,n.jsx)(t.p,{children:`Firstly, it's what users see when they click to enter your website from search results.`}),`
`,(0,n.jsx)(t.p,{children:`Secondly, it's one of the main elements Google uses to understand what your page is about. Using keywords in the title is recommended because it usually leads to increased improved ranking positions in search engines.`}),`
`,(0,n.jsx)(t.p,{children:`Here's an example:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`<title>iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple</title>`})})})})}),`
`,(0,n.jsx)(t.p,{children:`This page contains all the main keywords and also makes it attractive for users showing a clear value proposition: Discounts!`}),`
`,(0,n.jsx)(t.h3,{id:`description`,children:(0,n.jsx)(t.a,{href:`#description`,children:`Description`})}),`
`,(0,n.jsx)(t.p,{children:`The description meta tag is another important SEO element, but less so than the title. According to Google, this element is not taken into account for ranking purposes, but it can affect your click-through-rate on search results.`}),`
`,(0,n.jsx)(t.p,{children:`Use the description meta tag to complement the information in your title. Work in more keywords to the content here if there are some that didn't fit in the title. These keywords will appear in bold if a user's search contains them.`}),`
`,(0,n.jsx)(t.p,{children:`An example of a description meta tag in HTML:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`<meta`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  name="description"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`/>`})})]})})}),`
`,(0,n.jsx)(t.p,{children:`This how it looks on the page when it's part of the search engine results page (SERP):`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:`https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/learn/pages-router/seo/serp-example.png`,alt:`Example of a SERP snippet with a Title and Description`})}),`
`,(0,n.jsx)(t.p,{children:`Example of a SERP snippet with a Title and Description`}),`
`,(0,n.jsxs)(t.p,{children:[`In Next.js, we set the title and description in the `,(0,n.jsxs)(t.a,{href:`https://nextjs.org/docs/api-reference/next/head`,children:[(0,n.jsx)(t.code,{children:`Head`}),` component`]}),`. This is how meta title and description tags might look like in Next.js:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`import Head from 'next/head';`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`function IndexPage() {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  return (`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    <div>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <Head>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <title>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        </title>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <meta`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          name="description"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          key="desc"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        />`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      </Head>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <h1>iPhones for Sale</h1>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <p>insert a list of iPhones for sale.</p>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    </div>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  );`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`export default IndexPage;`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`The `,(0,n.jsx)(t.code,{children:`Head`}),` component can be used on any page in your application to describe or provide information about the page's contents.`]}),`
`,(0,n.jsx)(t.h3,{id:`open-graph`,children:(0,n.jsx)(t.a,{href:`#open-graph`,children:`Open Graph`})}),`
`,(0,n.jsxs)(t.p,{children:[`The `,(0,n.jsx)(t.a,{href:`https://ogp.me/`,children:`Open Graph protocol`}),`, originally developed by Facebook, standardizes how metadata is used on any given web page. You can provide as little or as much information as you would like, but all of the open graph pieces fit together to create a representation of the site it's attached to.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Other social media companies (like Pinterest, Twitter, LinkedIn, etc), may also use open graph for displaying rich cards when sharing a URL. Twitter also has tags of its `,(0,n.jsx)(t.a,{href:`https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup`,children:`Twitter Cards`}),`.`]}),`
`,(0,n.jsx)(t.p,{children:`While these Open Graph tags have a lot of similarities with SEO related tags, they do not offer any benefit to search engine rankings, but they are still recommended to use as people might share your content on social media or private messaging tools such as WhatsApp or Telegram.`}),`
`,(0,n.jsxs)(t.p,{children:[`You can add Open Graph tags by defining the `,(0,n.jsx)(t.code,{children:`property`}),` attribute in the meta tags inside the `,(0,n.jsx)(t.code,{children:`Head`}),` component. For example:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`import Head from 'next/head';`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`function IndexPage() {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  return (`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    <div>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <Head>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <title>Cool Title</title>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <meta name="description" content="Checkout our cool page" key="desc" />`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <meta property="og:title" content="Social Title for Cool Page" />`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <meta`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          property="og:description"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          content="And a social description for our cool page"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        />`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <meta`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          property="og:image"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          content="https://example.com/images/cool-page.jpg"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        />`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      </Head>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <h1>Cool Page</h1>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <p>This is a cool page. It has lots of cool content!</p>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    </div>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  );`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`export default IndexPage;`})})]})})}),`
`,(0,n.jsx)(t.p,{children:`Having a shareable link that offers a description and title, along with a picture that represents the page's content does not have a direct effect on SEO rankings, but it indirectly increases the clickability of the link, which will ultimately lead to more visitors to your site.`}),`
`,(0,n.jsx)(t.h3,{id:`structured-data-and-json-ld`,children:(0,n.jsx)(t.a,{href:`#structured-data-and-json-ld`,children:`Structured Data and JSON-LD`})}),`
`,(0,n.jsxs)(t.p,{children:[`Structured data facilitates the understanding of your pages to search engines. Over the years, there have been several vocabularies in place, but currently the main one is `,(0,n.jsx)(t.a,{href:`https://schema.org/`,children:`schema.org`}),`.`]}),`
`,(0,n.jsx)(t.p,{children:`According to the website, schema.org is a "collaborative, community activity with a mission to create, maintain, and promote schemas for structured data on the Internet, on web pages, in email messages, and beyond."`}),`
`,(0,n.jsxs)(t.p,{children:[`Schema.org's vocabulary can be used with many different encodings, including `,(0,n.jsx)(t.a,{href:`https://www.w3.org/TR/rdfa-primer/`,children:`RDFa`}),`, `,(0,n.jsx)(t.a,{href:`https://www.w3.org/TR/microdata/`,children:`Microdata`}),`, and `,(0,n.jsx)(t.a,{href:`https://www.w3.org/TR/json-ld11/`,children:`JSON-LD`}),`.`]}),`
`,(0,n.jsx)(t.p,{children:`Different search engines might adapt different vocabularies within schema.org, and no search engine covers all the use cases described the website's vocabulary. Be sure to check which vocabularies are accepted in each case.`}),`
`,(0,n.jsx)(t.p,{children:`An example of a what a product page might look like adding the JSON-LD product schema data:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`import Head from 'next/head';`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`function ProductPage() {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  function addProductJsonLd() {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    return {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:"      __html: `{"})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      "@context": "https://schema.org/",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      "@type": "Product",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      "name": "Executive Anvil",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      "image": [`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "https://example.com/photos/1x1/photo.jpg",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "https://example.com/photos/4x3/photo.jpg",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "https://example.com/photos/16x9/photo.jpg"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`       ],`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      "description": "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      "sku": "0446310786",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      "mpn": "925872",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      "brand": {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "@type": "Brand",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "name": "ACME"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      },`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      "review": {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "@type": "Review",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "reviewRating": {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          "@type": "Rating",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          "ratingValue": "4",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          "bestRating": "5"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        },`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "author": {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          "@type": "Person",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          "name": "Fred Benson"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        }`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      },`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      "aggregateRating": {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "@type": "AggregateRating",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "ratingValue": "4.4",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "reviewCount": "89"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      },`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      "offers": {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "@type": "Offer",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "url": "https://example.com/anvil",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "priceCurrency": "USD",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "price": "119.99",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "priceValidUntil": "2020-11-20",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "itemCondition": "https://schema.org/UsedCondition",`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        "availability": "https://schema.org/InStock"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      }`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    }`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:"  `,"})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    };`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  }`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  return (`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    <div>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <Head>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <title>My Product</title>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <meta`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          name="description"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          content="Super product with free shipping."`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          key="desc"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        />`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <script`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          type="application/ld+json"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          dangerouslySetInnerHTML={addProductJsonLd()}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          key="product-jsonld"`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        />`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      </Head>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <h1>My Product</h1>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <p>Super product for sale.</p>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    </div>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  );`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`export default ProductPage;`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`In this example, the data is hardcoded as a string, but you can easily pass the data to the `,(0,n.jsx)(t.code,{children:`addProductJsonLd`}),` method to make it fully dynamic.`]}),`
`,(0,n.jsx)(t.h3,{id:`further-reading`,children:(0,n.jsx)(t.a,{href:`#further-reading`,children:`Further Reading`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Open Graph Protocol: `,(0,n.jsx)(t.a,{href:`https://ogp.me/`,children:`Documentation`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Google: `,(0,n.jsx)(t.a,{href:`https://developers.google.com/search/docs/guides/intro-structured-data`,children:`Intro to Structured Data`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Google: `,(0,n.jsx)(t.a,{href:`https://developers.google.com/search/docs/data-types/product`,children:`Product Structured Data`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Google: `,(0,n.jsx)(t.a,{href:`https://search.google.com/test/rich-results`,children:`Rich Results Tester`})]}),`
`]})]})}function s(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}export{s as default,r as frontmatter,i as structuredData,a as toc};