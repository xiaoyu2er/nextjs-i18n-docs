import type { Code, Root } from 'mdast';
import { visit } from 'unist-util-visit';

/**
 * Language aliases — converts non-standard language identifiers to standard ones.
 * Ported from packages/const/src/mdx.ts
 */
const LANGUAGE_MAP: Record<string, string> = {
  '.env': 'bash',
  env: 'bash',
  terminal: 'bash',
  mjs: 'javascript',
  '.babelrc': 'bash',
  Terminal: 'bash',
  'Component hierarchy': 'tsx',
};

/**
 * Remark plugin that enhances code blocks:
 *
 * 1. `filename="x" switcher` → `tab="x"` (consecutive blocks become tabs)
 * 2. `filename="x"` → `title="x"` (shows filename as code block title)
 * 3. Language aliases: `.env`→`bash`, `terminal`→`bash`, etc.
 *
 * Ported from apps/docs/src/lib/remark-plugins/remark-convert-code-meta.ts
 */
export function remarkConvertCodeMeta() {
  return (tree: Root) => {
    visit(tree, 'code', (node: Code) => {
      // Convert language aliases
      if (node.lang && LANGUAGE_MAP[node.lang]) {
        node.lang = LANGUAGE_MAP[node.lang];
      }

      if (node.meta && typeof node.meta === 'string') {
        const meta = node.meta;

        const filenameMatch = meta.match(/filename="([^"]+)"/);
        if (filenameMatch?.[1]) {
          const filename = filenameMatch[1];

          if (meta.includes('filename=') && meta.includes('switcher')) {
            // filename + switcher → tab (for TS/JS toggle tabs)
            let newMeta = meta.replace(/\s*switcher\s*/, ' ');
            newMeta = newMeta.replace(
              /filename="([^"]+)"/,
              `tab="${filename}"`,
            );
            node.meta = newMeta.trim();
          } else if (meta.includes('filename=')) {
            // filename only → title (shows as code block header)
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
