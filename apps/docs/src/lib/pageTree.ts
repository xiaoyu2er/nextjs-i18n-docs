import type { PageTree } from 'fumadocs-core/server';

/**
 * Get other page tree nodes that lives under the same parent
 */
export function getPageTreePeers(
  tree: PageTree.Root,
  url: string,
): PageTree.Item[] {
  const parent = findParentFromTree(tree, url);
  if (!parent) return [];

  return parent.children
    .map((item) => {
      if (item.type === 'page' && item.url !== url) return item;
      if (item.type === 'folder' && item.index?.url) {
        return item.index;
      }
      return undefined;
    })
    .filter(Boolean) as PageTree.Item[];
}

export function findParentFromTree(
  node: PageTree.Root | PageTree.Folder,
  url: string,
): PageTree.Root | PageTree.Folder | undefined {
  if ('index' in node && node.index?.url === url) {
    return node;
  }

  for (const child of node.children) {
    if (child.type === 'folder') {
      const parent = findParentFromTree(child, url);
      if (parent) return parent;
    }

    if (child.type === 'page' && child.url === url) {
      return node;
    }
  }
}

export function cloneRoot(tree: PageTree.Root) {
  return {
    $id: tree.$id,
    name: tree.name,
    children: [] as PageTree.Node[],
  };
}

export function getDocsLayoutTree(tree: PageTree.Root, slug: string[]) {
  const isV14 = slug[0] === '14';
  const isV13 = slug[0] === '13';
  const isLatest = !isV14 && !isV13;

  const root = cloneRoot(tree);
  for (const node of tree.children) {
    if (isLatest) {
      const isPages = slug[0] === 'pages';
      // App
      if (!isPages && node.$id === '01-app' && node.type === 'folder') {
        const children = node.children;
        if (children[0].type === 'folder') {
          children[0].defaultOpen = true;
        }
        root.children.push(...children);
      }
      // Pages
      if (isPages && node.$id === '02-pages' && node.type === 'folder') {
        const children = node.children;
        if (children[0].type === 'folder') {
          children[0].defaultOpen = true;
        }
        root.children.push(...children);
      }

      // Architecture && Community
      if (
        node.$id &&
        !['13', '14', '01-app', '02-pages'].includes(node.$id) &&
        node.type === 'folder'
      ) {
        root.children.push(node);
      }
    }

    if (isV13 || isV14) {
      const version = isV14 ? '14' : '13';
      const gettingStarted = `${version}/01-getting-started`;
      const appFolder = `${version}/02-app`;
      const pagesFolder = `${version}/03-pages`;
      if (node.$id === version && node.type === 'folder') {
        const children = node.children;

        const isPages = slug[1] === 'pages';
        for (const child of children) {
          const expandChildren = [appFolder, pagesFolder];
          if (
            child.$id &&
            child.type === 'folder' &&
            expandChildren.includes(child.$id)
          ) {
            for (const item of child.children) {
              if (item.type === 'folder') item.defaultOpen = true;
            }
          }
          if (!isPages && child.$id === appFolder && child.type === 'folder') {
            root.children.push(...child.children);
          }
          if (isPages && child.$id === pagesFolder && child.type === 'folder') {
            root.children.push(...child.children);
          }

          if (
            child.$id &&
            ![appFolder, pagesFolder].includes(child.$id) &&
            child.type === 'folder'
          ) {
            if (child.$id === gettingStarted) {
              child.defaultOpen = true;
            }
            root.children.push(child);
          }
        }
      }
    }
  }
  return root;
}
