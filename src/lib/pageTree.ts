import { PageTree } from "fumadocs-core/server";



/**
 * Get other page tree nodes that lives under the same parent
 */
export function getPageTreePeers(
  tree: PageTree.Root,
  url: string
): PageTree.Item[] {
  const parent = findParentFromTree(tree, url);
  if (!parent) return [];

  return parent.children
    .map((item) => {
      if (item.type === "page" && item.url !== url) return item;
      if (item.type === "folder" && item.index?.url) {
        return item.index;
      }
      return undefined;
    })
    .filter(Boolean) as PageTree.Item[];
}

export function findParentFromTree(
  node: PageTree.Root | PageTree.Folder,
  url: string
): PageTree.Root | PageTree.Folder | undefined {
  if ("index" in node && node.index?.url === url) {
    return node;
  }

  for (const child of node.children) {
    if (child.type === "folder") {
      const parent = findParentFromTree(child, url);
      if (parent) return parent;
    }

    if (child.type === "page" && child.url === url) {
      return node;
    }
  }
}