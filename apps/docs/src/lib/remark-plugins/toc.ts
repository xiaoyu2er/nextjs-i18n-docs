import { remarkHeading } from 'fumadocs-core/mdx-plugins';
import type { TableOfContents } from 'fumadocs-core/server';
import { remark } from 'remark';

export async function getToc(content: string) {
  const result = remark().use(remarkHeading).process(content);

  return (await result).data.toc as TableOfContents;
}
