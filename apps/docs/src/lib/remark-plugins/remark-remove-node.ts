import type { Root } from 'mdast';

export interface RemarkRemoveNodesOptions {
  /**
   * Names of MDX JSX components to remove
   * @default []
   */
  nodeNames: string[];

  /**
   * Log operations for debugging
   * @default false
   */
  debug?: boolean;
}

export function remarkRemoveNodes(options: RemarkRemoveNodesOptions) {
  const { nodeNames = [], debug = false } = options;

  return (tree: Root) => {
    if (debug) console.log('remarkRemoveNodes', nodeNames);
    // If no node names specified, do nothing
    if (nodeNames.length === 0) return;

    // Keep track of nodes to remove and their ranges
    type NodeRange = {
      startIndex: number;
      endIndex: number;
      name: string;
    };

    const ranges: NodeRange[] = [];
    let currentOpenTag: { name: string; index: number } | null = null;

    // First, identify HTML tags that match our component names
    tree.children.forEach((node, index) => {
      if (node.type === 'html') {
        // Check for opening tags like <AppOnly> or <PagesOnly>
        const openMatch = node.value.match(/<(\w+)>/);
        if (openMatch && nodeNames.includes(openMatch[1])) {
          currentOpenTag = { name: openMatch[1], index };
          if (debug)
            console.log(`Found opening tag ${openMatch[1]} at index ${index}`);
        }

        // Check for closing tags like </AppOnly> or </PagesOnly>
        const closeMatch = node.value.match(/<\/(\w+)>/);
        if (
          closeMatch &&
          currentOpenTag &&
          closeMatch[1] === currentOpenTag.name
        ) {
          ranges.push({
            startIndex: currentOpenTag.index,
            endIndex: index,
            name: currentOpenTag.name,
          });
          if (debug)
            console.log(`Found closing tag ${closeMatch[1]} at index ${index}`);
          currentOpenTag = null;
        }
      }
    });

    // Remove the ranges in reverse order to avoid index shifting issues
    ranges.sort((a, b) => b.endIndex - a.endIndex);

    for (const range of ranges) {
      const count = range.endIndex - range.startIndex + 1;
      if (debug) {
        console.log(
          `Removing ${range.name} from index ${range.startIndex} to ${range.endIndex}`,
        );
      }
      tree.children.splice(range.startIndex, count);
    }
  };
}

// For backward compatibility
export const remarkRouterFilter = remarkRemoveNodes;
