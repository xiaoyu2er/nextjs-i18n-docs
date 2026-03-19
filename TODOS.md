# TODOS

## Translation Pipeline

- **Translate v15 to remaining 7 languages (incremental, per-language)**
  **Priority:** P1
  After zh-hans quality is validated, run `bun run packages/translate/src/batch.pipeline.ts --docs-root content-v15/en --lang <lang> --output-dir content-v15` for each language one at a time. Each run is incremental — only translates what's missing from cache. Check quality per language before moving to the next. Languages: zh-hant, ja, es, de, fr, ru, ar.
  **Depends on:** zh-hans v15 translation quality validation.

- **Remove old translation config references**
  **Priority:** P2
  The `translation.config.example.mjs` still references `@tanstack-dev/translate-docs` in `docsContext`. Update to reflect the actual project context.

## Completed
