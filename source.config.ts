import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";

if (!process.env.DOCS_DIR) {
  throw new Error(
    "DOCS_DIR is not set. Please set it in your environment variables."
  );
}
console.log("DOCS_DIR:", process.env.DOCS_DIR);
// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  dir: process.env.DOCS_DIR,
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
