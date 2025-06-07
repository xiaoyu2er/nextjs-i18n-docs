import type { TableOfContents } from 'fumadocs-core/server';

export function filterCotent({
  isApp,
  isPages,
  content,
}: {
  isApp: boolean;
  isPages: boolean;
  content: string;
}) {
  if (!isApp && !isPages) return content;
  let finalContent = content;
  if (isApp) {
    finalContent = finalContent.replace(
      /<PagesOnly>([\s\S]*?)<\/PagesOnly>/g,
      '',
    );
  }
  if (isPages) {
    finalContent = finalContent.replace(/<AppOnly>([\s\S]*?)<\/AppOnly>/g, '');
  }
  return finalContent;
}

export function filterToc({
  toc,
  isApp,
  isPages,
  content,
}: {
  toc: TableOfContents;
  isApp: boolean;
  isPages: boolean;
  content: string;
}): TableOfContents {
  if (!isApp && !isPages) return toc;
  let finalContent = content;
  if (isApp) {
    finalContent = finalContent.replace(
      /<PagesOnly>([\s\S]*?)<\/PagesOnly>/g,
      '',
    );
  }
  if (isPages) {
    finalContent = finalContent.replace(/<AppOnly>([\s\S]*?)<\/AppOnly>/g, '');
  }

  console.log('filterToc finalContent', finalContent);
  return toc.filter((item) => {
    const heading = `${'#'.repeat(item.depth)} ${item.url.slice(1)}`;
    return finalContent.includes(heading);
  });
}
