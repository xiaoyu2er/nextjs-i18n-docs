import { LANGUAGE_MAP } from '@next-i18n/const';
import type { Code, Heading, Paragraph, Root } from 'mdast';
import { visit } from 'unist-util-visit';

/**
 * Remark plugin that enhances code blocks in the following ways:
 *
 * 1. Converts code blocks with both `filename` and `switcher` attributes to use `tab` attribute format
 * 2. Converts code blocks with only `filename` attribute to use `title` attribute format
 * 3. Automatically converts specific language identifiers (e.g., ".env") to more appropriate ones (e.g., "bash")
 *
 */
export function convertCodeMeta() {
  return (tree: Root) => {
    visit(tree, 'code', (node: Code) => {
      // Convert language to bash
      if (node.lang && LANGUAGE_MAP[node.lang]) {
        node.lang = LANGUAGE_MAP[node.lang];
      }
      // Check if node has meta with filename
      if (node.meta && typeof node.meta === 'string') {
        const meta = node.meta;

        // Extract the filename if it exists
        const filenameMatch = meta.match(/filename="([^"]+)"/);
        if (filenameMatch?.[1]) {
          const filename = filenameMatch[1];

          // Check if meta contains both filename and switcher
          if (meta.includes('filename=') && meta.includes('switcher')) {
            // If it has both, convert to tab attribute and remove switcher
            // First remove the switcher attribute
            let newMeta = meta.replace(/\s*switcher\s*/, ' ');
            // Then replace the filename attribute with tab attribute
            newMeta = newMeta.replace(
              /filename="([^"]+)"/,
              `tab="${filename}"`,
            );
            // Cleanup any extra spaces
            node.meta = newMeta.trim();
            // console.log(`Converted to tab: ${node.meta}`);
          } else if (meta.includes('filename=')) {
            // If only filename, convert to title attribute
            node.meta = meta.replace(
              /filename="([^"]+)"/,
              `title="${filename}"`,
            );
          }
        }
      }
    });
  };
}
