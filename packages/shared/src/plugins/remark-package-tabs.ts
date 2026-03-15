/**
 * Remark plugin that transforms consecutive code blocks with `package="xxx"`
 * metadata into Starlight `<Tabs syncKey="pkg">` + `<TabItem>` components.
 *
 * Recursively processes all nodes with children (including JSX elements
 * like `<AppOnly>`, `<PagesOnly>`, etc.).
 */
import type { Root, Code, Parent } from 'mdast';

function getPackageMeta(node: { type: string; meta?: string | null }): string | null {
  if (node.type !== 'code' || !(node as Code).meta) return null;
  const match = (node as Code).meta!.match(/package="([^"]+)"/);
  return match ? match[1] : null;
}

function stripPackageMeta(meta: string | null | undefined): string | null {
  if (!meta) return null;
  const stripped = meta.replace(/\s*package="[^"]*"/, '').trim();
  return stripped || null;
}

/**
 * Process an array of children in-place, replacing consecutive
 * package= code blocks with Tabs/TabItem nodes.
 * Returns true if any tabs were created.
 */
function processChildren(children: any[]): boolean {
  let hasTabComponents = false;
  let i = 0;

  while (i < children.length) {
    const node = children[i];

    // Recurse into nodes that have children (JSX elements, blockquotes, etc.)
    if (node.children && Array.isArray(node.children)) {
      if (processChildren(node.children)) {
        hasTabComponents = true;
      }
    }

    // Find start of a package tab group
    if (getPackageMeta(node)) {
      const group: Code[] = [];
      let j = i;
      while (j < children.length && getPackageMeta(children[j])) {
        group.push(children[j] as Code);
        j++;
      }

      if (group.length >= 2) {
        hasTabComponents = true;

        const tabItems = group.map((code) => {
          const label = getPackageMeta(code)!;
          return {
            type: 'mdxJsxFlowElement' as const,
            name: 'TabItem',
            attributes: [
              { type: 'mdxJsxAttribute' as const, name: 'label', value: label },
            ],
            children: [{
              type: 'code' as const,
              lang: code.lang,
              meta: stripPackageMeta(code.meta),
              value: code.value,
            }],
          };
        });

        const tabsNode = {
          type: 'mdxJsxFlowElement' as const,
          name: 'Tabs',
          attributes: [
            { type: 'mdxJsxAttribute' as const, name: 'syncKey', value: 'pkg' },
          ],
          children: tabItems,
        };

        children.splice(i, group.length, tabsNode as any);
        i++;
      } else {
        (group[0] as Code).meta = stripPackageMeta(group[0].meta);
        i++;
      }
    } else {
      i++;
    }
  }

  return hasTabComponents;
}

export function remarkPackageTabs() {
  return (tree: Root) => {
    const hasTabComponents = processChildren(tree.children as any[]);

    if (hasTabComponents) {
      const imports = [
        { name: 'Tabs', from: '@astrojs/starlight/components' },
        { name: 'TabItem', from: '@astrojs/starlight/components' },
      ];

      for (const { name, from } of imports) {
        tree.children.unshift({
          type: 'mdxjsEsm' as const,
          value: `import { ${name} } from '${from}';`,
          data: {
            estree: {
              type: 'Program' as const,
              sourceType: 'module' as const,
              body: [{
                type: 'ImportDeclaration' as const,
                source: { type: 'Literal' as const, value: from, raw: `'${from}'` },
                specifiers: [{
                  type: 'ImportSpecifier' as const,
                  imported: { type: 'Identifier' as const, name },
                  local: { type: 'Identifier' as const, name },
                }],
              }],
            },
          },
        } as any);
      }
    }
  };
}
