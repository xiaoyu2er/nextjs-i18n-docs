import{r as e}from"./chunk-DECur_0Z.js";import{t}from"./jsx-runtime-Cns_S3nq.js";var n=e(t()),r={title:`URL Structure`,image:`https://nextjs.org/api/learn-og?title=URL%20Structure&amp;chapter=13`,headline:`SEO: URL Structure`},i={contents:[{heading:void 0,content:`URL Structure is an important part of an SEO strategy. While Google doesn't disclose which weight each part of SEO has, great URLs are considered a best practice no matter if they are a big or small ranking factor in the end.`},{heading:void 0,content:`You might want to follow some principles:`},{heading:void 0,content:"**Semantic**: It's best to use URLs that are semantic, meaning that they use words instead of IDs or random numbers. Example: `/learn/basics/create-nextjs-app`is better than `/learn/course-1/lesson-1`"},{heading:void 0,content:`**Patterns that are logical and consistent**: URLs should follow some sort of pattern that is consistent among pages. For example, you want to have a folder that groups all product pages, instead of having different paths for each product that you have.`},{heading:void 0,content:`**Keyword focused**: Google still bases a considerable part of their systems on the keywords a website contains. You might want to use keywords in your URLs to facilitate understanding the purpose of the pages.`},{heading:void 0,content:`**Not parameter-based**: Using parameters to build your URLs is generally not a good idea. They are not semantic in most cases, and search engines might confuse them and demote their rankings in results.`},{heading:`how-are-routes-defined-in-nextjs`,content:"Next.js uses file-system routing built on the file-system routing built on the concept of pages. When a file is added to the `pages` directory, it is automatically available as a route. The files and folders inside the `pages` directory can be used to define most common patterns."},{heading:`how-are-routes-defined-in-nextjs`,content:`Let's take a look at a couple of simple URLs and how you would add them to your Next.js router:`},{heading:`how-are-routes-defined-in-nextjs`,content:"**Homepage**: `https://www.example.com` → `pages/index.js`"},{heading:`how-are-routes-defined-in-nextjs`,content:"**Listings**: `https://www.example.com/products` → `pages/products.js` or `pages/products/index.js`"},{heading:`how-are-routes-defined-in-nextjs`,content:"**Detail**: `https://www.example.com/products/product` → `pages/products/product.js`"},{heading:`how-are-routes-defined-in-nextjs`,content:`For a blog or e-commerce site you will likely want to use the product ID or blog name as the slug for the URL. This is called **dynamic routing**:`},{heading:`how-are-routes-defined-in-nextjs`,content:"**Product:** `https://www.example.com/products/nextjs-shirt` → `pages/products/[product].js`"},{heading:`how-are-routes-defined-in-nextjs`,content:"**Blog:** `https://www.example.com/blog/seo-in-nextjs` → `pages/blog/[blog-name].js`"},{heading:`how-are-routes-defined-in-nextjs`,content:"To use dynamic routing, you can add brackets to a page name inside your `products` or `blogs` subfolder."},{heading:`how-are-routes-defined-in-nextjs`,content:`Here's an example of a page optimized for this using SSG:`},{heading:`how-are-routes-defined-in-nextjs`,content:`Here's another example using SSR:`},{heading:`further-reading`,content:`Next.js: Introduction to Routing`},{heading:`further-reading`,content:`Next.js: Pages`},{heading:`further-reading`,content:`Next.js: Dynamic Routing`}],headings:[{id:`how-are-routes-defined-in-nextjs`,content:`How are Routes Defined in Next.js?`},{id:`further-reading`,content:`Further Reading`}]},a=[{depth:3,url:`#how-are-routes-defined-in-nextjs`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`a`,{href:`#how-are-routes-defined-in-nextjs`,children:`How are Routes Defined in Next.js?`})})},{depth:3,url:`#further-reading`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`a`,{href:`#further-reading`,children:`Further Reading`})})}];function o(e){let t={a:`a`,code:`code`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`URL Structure is an important part of an SEO strategy. While Google doesn't disclose which weight each part of SEO has, great URLs are considered a best practice no matter if they are a big or small ranking factor in the end.`}),`
`,(0,n.jsx)(t.p,{children:`You might want to follow some principles:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Semantic`}),`: It's best to use URLs that are semantic, meaning that they use words instead of IDs or random numbers. Example: `,(0,n.jsx)(t.a,{href:`/learn/basics/create-nextjs-app`,children:(0,n.jsx)(t.code,{children:`/learn/basics/create-nextjs-app`})}),`is better than `,(0,n.jsx)(t.code,{children:`/learn/course-1/lesson-1`})]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Patterns that are logical and consistent`}),`: URLs should follow some sort of pattern that is consistent among pages. For example, you want to have a folder that groups all product pages, instead of having different paths for each product that you have.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Keyword focused`}),`: Google still bases a considerable part of their systems on the keywords a website contains. You might want to use keywords in your URLs to facilitate understanding the purpose of the pages.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Not parameter-based`}),`: Using parameters to build your URLs is generally not a good idea. They are not semantic in most cases, and search engines might confuse them and demote their rankings in results.`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`how-are-routes-defined-in-nextjs`,children:(0,n.jsx)(t.a,{href:`#how-are-routes-defined-in-nextjs`,children:`How are Routes Defined in Next.js?`})}),`
`,(0,n.jsxs)(t.p,{children:[`Next.js uses `,(0,n.jsx)(t.a,{href:`/docs/routing/introduction`,children:`file-system routing`}),` built on the `,(0,n.jsx)(t.a,{href:`/docs/routing/introduction`,children:`file-system routing`}),` built on the concept of `,(0,n.jsx)(t.a,{href:`/docs/basic-features/pages`,children:`pages`}),`. When a file is added to the `,(0,n.jsx)(t.code,{children:`pages`}),` directory, it is automatically available as a route. The files and folders inside the `,(0,n.jsx)(t.code,{children:`pages`}),` directory can be used to define most common patterns.`]}),`
`,(0,n.jsx)(t.p,{children:`Let's take a look at a couple of simple URLs and how you would add them to your Next.js router:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Homepage`}),`: `,(0,n.jsx)(t.code,{children:`https://www.example.com`}),` → `,(0,n.jsx)(t.code,{children:`pages/index.js`})]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Listings`}),`: `,(0,n.jsx)(t.code,{children:`https://www.example.com/products`}),` → `,(0,n.jsx)(t.code,{children:`pages/products.js`}),` or `,(0,n.jsx)(t.code,{children:`pages/products/index.js`})]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Detail`}),`: `,(0,n.jsx)(t.code,{children:`https://www.example.com/products/product`}),` → `,(0,n.jsx)(t.code,{children:`pages/products/product.js`})]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`For a blog or e-commerce site you will likely want to use the product ID or blog name as the slug for the URL. This is called `,(0,n.jsx)(t.a,{href:`/docs/routing/dynamic-routes`,children:(0,n.jsx)(t.strong,{children:`dynamic routing`})}),`:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Product:`}),` `,(0,n.jsx)(t.code,{children:`https://www.example.com/products/nextjs-shirt`}),` → `,(0,n.jsx)(t.code,{children:`pages/products/[product].js`})]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Blog:`}),` `,(0,n.jsx)(t.code,{children:`https://www.example.com/blog/seo-in-nextjs`}),` → `,(0,n.jsx)(t.code,{children:`pages/blog/[blog-name].js`})]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`To use dynamic routing, you can add brackets to a page name inside your `,(0,n.jsx)(t.code,{children:`products`}),` or `,(0,n.jsx)(t.code,{children:`blogs`}),` subfolder.`]}),`
`,(0,n.jsx)(t.p,{children:`Here's an example of a page optimized for this using SSG:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`// pages/blog/[slug].js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`import Head from 'next/head';`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`export async function getStaticPaths() {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  // Call an external API endpoint to get posts`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  const res = await fetch('https://www.example.com/api/posts');`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  const posts = await res.json();`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  // Get the paths we want to pre-render based on posts`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  const paths = posts.map((post) => ({`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    params: { slug: post.slug },`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  }));`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  // Set fallback to blocking. Now any new post added post build will SSR`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  // to ensure SEO. It will then be static for all subsequent requests`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  return { paths, fallback: 'blocking' };`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`export async function getStaticProps({ params }) {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:"  const res = await fetch(`https://www.example.com/api/blog/${params.slug}`);"})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  const data = await res.json();`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  return {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    props: {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      blog: data,`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    },`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  };`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`function BlogPost({ blog }) {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  return (`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    <>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <Head>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <title>{blog.title} | My Site</title>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      </Head>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <div>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <h1>{blog.title}</h1>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <p>{blog.text}</p>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      </div>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    </>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  );`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`export default BlogPost;`})})]})})}),`
`,(0,n.jsx)(t.p,{children:`Here's another example using SSR:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`// pages/blog/[slug].js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`import Head from 'next/head';`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`function BlogPost({ blog }) {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  return (`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    <div>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <Head>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <title>{blog.title} | My Site</title>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      </Head>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      <div>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <h1>{blog.title}</h1>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        <p>{blog.text}</p>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      </div>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    </div>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  );`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`export async function getServerSideProps({ query }) {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:"  const res = await fetch(`https://www.example.com/api/blog/${query.slug}`);"})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  const data = await res.json();`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  return {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    props: {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      blog: data,`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    },`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  };`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` `})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`export default BlogPost;`})})]})})}),`
`,(0,n.jsx)(t.h3,{id:`further-reading`,children:(0,n.jsx)(t.a,{href:`#further-reading`,children:`Further Reading`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Next.js: `,(0,n.jsx)(t.a,{href:`/docs/routing/introduction`,children:`Introduction to Routing`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Next.js: `,(0,n.jsx)(t.a,{href:`/docs/basic-features/pages`,children:`Pages`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Next.js: `,(0,n.jsx)(t.a,{href:`/docs/routing/dynamic-routes`,children:`Dynamic Routing`})]}),`
`]})]})}function s(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}export{s as default,r as frontmatter,i as structuredData,a as toc};