import fs$ from 'node:fs/promises';
import path from 'node:path';
import Crawler from 'crawler';
import matter from 'gray-matter';
import jsdom from 'jsdom';
import TurndownService from 'turndown';
import { BLOG_INDEX_URL, NEXT_JS_URL, headers, userAgents } from './const';
import type { Blog, BlogContext } from './type';

const { JSDOM } = jsdom;

const BLOG_FILE_PATH = path.join(
  import.meta.filename,
  '../../../..',
  'apps/docs/content/en',
);

const turndownService = new TurndownService({
  codeBlockStyle: 'fenced',
});

turndownService.keep(['img']);

turndownService.addRule('img', {
  filter: ['img'],
  replacement: (content, node, options) => {
    const srcLight = (node as HTMLImageElement).getAttribute('srclight');
    const srcDark = (node as HTMLImageElement).getAttribute('srcdark');
    const width = (node as HTMLImageElement).getAttribute('width') || '1600';
    const height = (node as HTMLImageElement).getAttribute('height') || '525';
    const alt = (node as HTMLImageElement).getAttribute('alt') || '';
    if (!srcLight || !srcDark) {
      console.warn('Image srcLight or srcDark is missing:', node);
      return content; // Return original content if srcLight or srcDark is missing
    }
    return `<Image
  alt="${alt}"
  srcLight="${srcLight}"
  srcDark="${srcDark}"
  width="${width}"
  height="${height}"
/>`;
  },
});

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
    maxConnections: 10,
    userAgents: userAgents,
    headers: headers,
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

      const contentNode = main.childNodes[
        main.childNodes.length - 1
      ] as HTMLDivElement;

      const codeBlocks = main.querySelectorAll('[data-geist-code-block]');

      for (const codeBlock of codeBlocks) {
        const fileNameNode = codeBlock.querySelector(
          '[class^="code-block_filename"',
        );
        const fileName = fileNameNode?.textContent || '';

        const codeNode = codeBlock.querySelector('code');

        if (fileNameNode && codeNode) {
          fileNameNode.parentNode?.parentNode?.parentNode?.removeChild(
            fileNameNode.parentNode?.parentNode,
          );

          const language =
            fileName.indexOf('.') > -1 ? fileName?.split('.').pop() : 'bash';
          codeNode.classList += `language-${language}===FILE_NAME===filename="${fileName}"`;
        }
      }

      const figureNodes = main.querySelectorAll('figure');
      console.log('Found figure nodes:', figureNodes.length);
      for (const figureNode of figureNodes) {
        const lightImg = figureNode.querySelector('img[class*="dark:hidden"]');
        const darkImg = figureNode.querySelector('img[class*="dark:block"]');
        if (!lightImg || !darkImg) {
          console.log(`No light or dark image found for ${req.href}`);
        } else {
          const lightSrc = lightImg.getAttribute('src');
          const darkSrc = darkImg.getAttribute('src');
          const width = lightImg.getAttribute('width');
          const height = lightImg.getAttribute('height');
          const alt = lightImg.getAttribute('alt') || '';

          if (lightSrc && darkSrc) {
            const lightUrl = decodeURIComponent(
              lightSrc.replace('/_next/image?url=', '').split('&')[0],
            );

            const darkUrl = decodeURIComponent(
              darkSrc.replace('/_next/image?url=', '').split('&')[0],
            );

            const newImage = doc.createElement('img');
            newImage.setAttribute('srcLight', lightUrl);
            newImage.setAttribute('srcDark', darkUrl);
            newImage.setAttribute('width', width || '100%');
            newImage.setAttribute('height', height || '100%');
            newImage.setAttribute('alt', alt);

            figureNode.parentNode?.replaceChild(newImage, figureNode);
          }
        }
      }

      const markdown = turndownService
        .turndown(contentNode.outerHTML)
        .replaceAll('===FILE_NAME===', ' ');

      blogs.push({
        ...context,
        slug: req.pathname.slice(1),
        content: markdown,
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

async function writeBlogs(blogs: Blog[]) {
  for (const blog of blogs) {
    const fileName = path.resolve(BLOG_FILE_PATH, `${blog.slug}.md`);
    const dirname = path.join(BLOG_FILE_PATH, 'blog');
    const content = matter.stringify(`\n${blog.content}`, {
      title: blog.headline,
      description: blog.description,
      author: blog.author?.map((author) => ({
        name: author.name,
        image: author.image,
      })),
      date: new Date(blog.dateCreated),
      image: blog.image,
    });
    try {
      await fs$.mkdir(dirname, { recursive: true });
      await fs$.writeFile(fileName, content);
      console.log(`Written blog to ${fileName}`);
    } catch (error) {
      console.error(`Failed to write blog ${blog.slug}:`, error);
    }
  }
}

export async function main() {
  const links = await parseBlogIndex();
  console.log(`Found ${links.length} blog links.`);
  console.log(links);
  const blogs = await fetchBlogs(links);
  // const blogs = await fetchBlogs(['https://nextjs.org/blog/next-15-2']);
  console.log(`Fetched ${blogs.length} blogs.`);
  await writeBlogs(blogs);
}
