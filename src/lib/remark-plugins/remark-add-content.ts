import type { Code, Heading, Paragraph, Root } from 'mdast';

/**
 * Remark plugin that adds content to the document based on frontmatter data
 */
export function addMdxContent() {
  return async (tree: Root, file: unknown) => {
    const frontmatter =
      (
        file as {
          data: {
            frontmatter?: {
              related?: {
                title?: string;
                description?: string;
                links?: string[];
              };
            };
          };
        }
      ).data.frontmatter || {};

    if (frontmatter.related?.title) {
      const relatedTitle: Heading = {
        type: 'heading',
        depth: 2,
        children: [
          {
            type: 'text',
            value: frontmatter.related.title,
          },
        ],
      };
      tree.children.push(relatedTitle);

      if (frontmatter.related.description) {
        const descriptionParagraph: Paragraph = {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: frontmatter.related.description,
            },
          ],
          data: {
            // @ts-ignore
            related: true,
          },
        };
        tree.children.push(descriptionParagraph);
      }
    }
  };
}
