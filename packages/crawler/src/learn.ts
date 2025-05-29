import Crawler from 'crawler';
import matter from 'gray-matter';
import jsdom from 'jsdom';
import {
  convertHtmlToMarkdown,
  modifyCodeBlocks,
  modifyImages,
} from './common';
import { NEXT_JS_URL, crawlerOptions } from './const';
import type { Learn, LearnContext } from './type';

import {
  removeEmptyValues,
  removeLeadingSlash,
  removeTrailingSlash,
  writeFiles,
} from './util';

const { JSDOM } = jsdom;

type Config = {
  prefix: string;
  dir: string;
};

const configs: Config[] = [
  {
    prefix: '/learn/react-foundations',
    dir: '/learn/01-react-foundations',
  },
  {
    prefix: '/learn/dashboard-app',
    dir: '/learn/02-dashboard-app',
  },
  {
    prefix: '/learn/pages-router',
    dir: '/learn/03-pages-router',
  },
  {
    prefix: '/learn/seo',
    dir: '/learn/04-seo',
  },
];

export async function parseLearn(config: Config) {
  const { prefix, dir } = config;
  const { promise, resolve } = Promise.withResolvers<Learn[]>();
  const learns: Learn[] = [];

  const crawler = new Crawler({
    ...crawlerOptions,
    callback: async (error, res, done) => {
      const req = res.requestUrl;
      const url = req.href;

      console.log(`Processing ${url}`);
      if (error) {
        console.error(`Error fetching ${url}:`, error);
        done();
        return;
      }

      const { document } = new JSDOM(res.body).window;

      const main = document.querySelector('main');

      if (!main) {
        console.log(`No main element found for ${url}`);
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
      ) as LearnContext;

      if (!context.image) {
        console.warn(`No image found for ${url}`);
        done();
        return;
      }

      const article = main.querySelector('article');
      if (!article) {
        console.log(`No article found for ${url}`);
        done();
        return;
      }
      const next = (
        article.querySelector('a[type="submit"]') as HTMLAnchorElement
      )?.href;

      if (!next?.startsWith(prefix)) {
        console.log(`No next link found for ${url}`);
        done();
        return;
      }

      crawler.add(`${NEXT_JS_URL}${next}`);

      modifyCodeBlocks(main);
      modifyImages(main);

      const image = new URL(context.image);
      const title = image.searchParams.get('title') || context.headline;
      const chapter = image.searchParams.get('amp;chapter') || '';

      // The first div in the article is usually the content node
      const contentNode = article.querySelector('div') as HTMLDivElement;
      contentNode.removeChild(contentNode.childNodes[0]); // Remove the first child, which is usually the title
      const markdown = convertHtmlToMarkdown(contentNode.outerHTML || '');

      const pathname = removeTrailingSlash(req.pathname);
      const filename =
        pathname === prefix
          ? `${dir}/index.mdx`
          : `${dir}/${chapter.padStart(2, '0')}-${removeLeadingSlash(req.pathname.replace(prefix, ''))}.mdx`;

      const formatter = {
        title,
        headline: context.headline,
        description: context.description,
        image: encodeURI(context.image || ''),
      };

      try {
        const content = matter.stringify(
          `\n${markdown}`,
          removeEmptyValues(formatter),
        );
        learns.push({
          ...formatter,
          filename: removeLeadingSlash(filename),
          content,
        });
      } catch (error) {
        console.error(`Error processing ${url}:`, error);
        console.log(formatter);
      }

      done();
    },
  });

  // crawler.add(`${NEXT_JS_URL}${prefix}`);
  crawler.add(`${NEXT_JS_URL}${prefix}`);

  crawler.on('drain', () => {
    console.log('All links processed.');
    resolve(learns);
  });

  return promise;
}

export async function main() {
  await Promise.all(
    configs.map(async (config) => {
      const learns = await parseLearn(config);
      console.log(`Parsed ${learns.length} learns from ${config.prefix}`);
      await writeFiles(learns);
    }),
  );
}
