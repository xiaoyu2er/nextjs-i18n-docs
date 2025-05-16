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
  const isApp = slug[0] === 'app';
  const isPages = slug[0] === 'pages';
  const isV14 = slug[0] === '14';
  const isV13 = slug[0] === '13';
  const root = cloneRoot(tree);
  for (const node of tree.children) {
    // App
    if (isApp && node.$id === '01-app' && node.type === 'folder') {
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
    if (
      !isV14 &&
      !isV13 &&
      !isApp &&
      !isPages &&
      node.$id &&
      node.type === 'folder' &&
      !['13', '14'].includes(node.$id)
    ) {
      root.children.push(node);
    }
    // Architecture && Community
    if (
      (isApp || isPages) &&
      node.$id &&
      !['13', '14', '01-app', '02-pages'].includes(node.$id) &&
      node.type === 'folder'
    ) {
      root.children.push(node);
    }

    if (isV13 && node.$id === '13' && node.type === 'folder') {
      const children = node.children;
      const isApp = slug[1] === 'app';
      const isPages = slug[1] === 'pages';
      for (const child of children) {
        const expandChildren = ['13/02-app', '13/03-pages'];
        if (
          child.$id &&
          child.type === 'folder' &&
          expandChildren.includes(child.$id)
        ) {
          for (const item of child.children) {
            if (item.type === 'folder') item.defaultOpen = true;
          }
        }
        if (isApp && child.$id === '13/02-app' && child.type === 'folder') {
          root.children.push(...child.children);
        }
        if (isPages && child.$id === '13/03-pages' && child.type === 'folder') {
          root.children.push(...child.children);
        }
        if (!isApp && !isPages && child.type === 'folder' && child.$id) {
          root.children.push(child);
        }
        if (
          (isApp || isPages) &&
          child.$id &&
          !['13/02-app', '13/03-pages'].includes(child.$id) &&
          child.type === 'folder'
        ) {
          if (child.$id === '13/01-getting-started') {
            child.defaultOpen = true;
          }
          root.children.push(child);
        }
      }
    }

    if (isV14 && node.$id === '14' && node.type === 'folder') {
      const children = node.children;
      const isApp = slug[1] === 'app';
      const isPages = slug[1] === 'pages';
      for (const child of children) {
        const expandChildren = ['14/02-app', '14/03-pages'];
        if (
          child.$id &&
          child.type === 'folder' &&
          expandChildren.includes(child.$id)
        ) {
          for (const item of child.children) {
            if (item.type === 'folder') item.defaultOpen = true;
          }
        }
        if (isApp && child.$id === '14/02-app' && child.type === 'folder') {
          root.children.push(...child.children);
        }
        if (isPages && child.$id === '14/03-pages' && child.type === 'folder') {
          root.children.push(...child.children);
        }
        if (!isApp && !isPages && child.type === 'folder' && child.$id) {
          root.children.push(child);
        }
        if (
          (isApp || isPages) &&
          child.$id &&
          !['14/02-app', '14/03-pages'].includes(child.$id) &&
          child.type === 'folder'
        ) {
          if (child.$id === '14/01-getting-started') {
            child.defaultOpen = true;
          }
          root.children.push(child);
        }
      }
    }
  }
  return root;
}
