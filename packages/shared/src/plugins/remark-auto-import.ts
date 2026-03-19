/**
 * Remark plugin that auto-injects import statements for custom MDX components.
 * This avoids needing to add imports to 10K+ MDX files.
 */
import type { Root } from 'mdast';

const COMPONENTS = [
  'Image',
  'OGImage',
  'Check',
  'Cross',
  'AppOnly',
  'PagesOnly',
  'Video',
  'VideoComponent',
  'VideoSkeleton',
];

export function remarkAutoImport() {
  return (tree: Root) => {
    // Check if any of our components are used in the content
    const content = JSON.stringify(tree);
    const usedComponents = COMPONENTS.filter((c) => content.includes(c));

    if (usedComponents.length === 0) return;

    // Add import statements at the beginning of the tree
    // Use mdxjsEsm node type for MDX imports
    const imports = usedComponents.map((name) => ({
      type: 'mdxjsEsm' as const,
      value: `import ${name} from '@/components/${name}.astro';`,
      data: {
        estree: {
          type: 'Program' as const,
          sourceType: 'module' as const,
          body: [
            {
              type: 'ImportDeclaration' as const,
              source: {
                type: 'Literal' as const,
                value: `@/components/${name}.astro`,
                raw: `'@/components/${name}.astro'`,
              },
              specifiers: [
                {
                  type: 'ImportDefaultSpecifier' as const,
                  local: {
                    type: 'Identifier' as const,
                    name,
                  },
                },
              ],
            },
          ],
        },
      },
    }));

    tree.children.unshift(...(imports as any));
  };
}
