import Crawler from 'crawler';
import matter from 'gray-matter';
import jsdom from 'jsdom';

import {
  convertHtmlToMarkdown,
  modifyCodeBlocks,
  modifyImages,
} from './common';
import { BLOG_INDEX_URL, NEXT_JS_URL, crawlerOptions, headers } from './const';
import type { Blog, BlogContext } from './type';
import { removeLeadingSlash, removeTrailingSlash, writeFiles } from './util';

const { JSDOM } = jsdom;

async function parseBlogIndex() {
  const res = await fetch(BLOG_INDEX_URL, {
    headers: headers,
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch blog index: ${res.statusText}`);
  }
  const body = await res.text();
  const { document: doc } = new JSDOM(body).window;
  const links = [];
  const articles = doc.querySelectorAll('article');
  for (const article of articles) {
    const link = article.querySelector('a')?.getAttribute('href');
    if (link) {
      links.push(`${NEXT_JS_URL}${link}`);
    }
  }

  return links;
}

async function fetchBlogs(links: string[]) {
  const { promise, resolve } = Promise.withResolvers<Blog[]>();
  const blogs: Blog[] = [];

  const c = new Crawler({
    ...crawlerOptions,
    // @ts-ignore
    callback: (error, res, done: () => void) => {
      const req = res.requestUrl;
      console.log(`Processing ${req.href}`);

      if (error) {
        console.error(error);
        done();
        return;
      }

      const { document: doc } = new JSDOM(res.body).window;
      const main = doc.querySelector('main article');
      if (!main) {
        console.log(`No main article found for ${req.href}`);
        done();
        return;
      }

      const contextScript = main.querySelector(
        'script[type="application/ld+json"]',
      );
      if (!contextScript) {
        console.log(`No context script found for ${req.href}`);
        done();
        return;
      }

      const context = JSON.parse(
        contextScript.textContent || '{}',
      ) as BlogContext;

      modifyCodeBlocks(main);
      modifyImages(main);

      const contentNode = main.childNodes[
        main.childNodes.length - 1
      ] as HTMLDivElement;

      const markdown = convertHtmlToMarkdown(contentNode.outerHTML);
      const filename = `${removeLeadingSlash(removeTrailingSlash(req.pathname))}.mdx`;

      const content = matter.stringify(`\n${markdown}`, {
        title: context.headline,
        description: context.description,
        author: context.author?.map((author) => ({
          name: author.name,
          image: author.image,
        })),
        date: new Date(context.dateCreated),
        image: context.image,
      });

      blogs.push({
        ...context,
        filename,
        content,
      });

      done();
    },
  });

  c.queue(
    links.map((link) => {
      return {
        uri: link,
      };
    }),
  );

  c.on('drain', () => {
    console.log('All links processed.');
    resolve(blogs);
  });

  return promise;
}

export async function main() {
  const links = await parseBlogIndex();
  console.log(`Found ${links.length} blog links.`);
  console.log(links);
  const blogs = await fetchBlogs(links);
  // const blogs = await fetchBlogs(['https://nextjs.org/blog/next-15-2']);
  console.log(`Fetched ${blogs.length} blogs.`);
  await writeFiles(blogs);
}
