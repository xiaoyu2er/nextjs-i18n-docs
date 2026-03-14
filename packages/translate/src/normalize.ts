/**
 * Preprocess MDX content to ensure JSX tags (<AppOnly>, <PagesOnly>, <details>, <div>)
 * are separated from surrounding content by blank lines.
 * This ensures remark parses them as independent HTML nodes,
 * not merged with adjacent text content.
 */
export function normalize(content: string): string {
  let result = content;

  // After opening tags: ensure blank line follows
  result = result.replace(
    /^(<(?:AppOnly|PagesOnly|details[^>]*|div[^>]*)>)\n(?!\n)/gm,
    '$1\n\n',
  );

  // Before closing tags: ensure blank line precedes
  result = result.replace(
    /(?<!\n)\n(<\/(?:AppOnly|PagesOnly|details|div)>)/gm,
    '\n\n$1',
  );

  // After closing tags: ensure blank line follows
  result = result.replace(
    /^(<\/(?:AppOnly|PagesOnly|details|div)>)\n(?!\n)/gm,
    '$1\n\n',
  );

  return result;
}
