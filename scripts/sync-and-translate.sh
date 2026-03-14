#!/usr/bin/env bash
# scripts/sync-and-translate.sh
#
# Full pipeline: sync latest Next.js docs → translate → replace content/{lang}/
# Works both locally and in CI.
#
# Usage:
#   bash scripts/sync-and-translate.sh [options]
#
# Options:
#   --skip-sync         Skip downloading latest docs (use current content/en/)
#   --lang <code>       Target language (default: zh-hans)
#   --pattern <glob>    File pattern (default: **/*.mdx)
#   --max <n>           Max files to translate
#   --concurrency <n>   Concurrent translations (default: 10)
#   --api-type <type>   openai, anthropic, or pi (default: openai)
#   --api-base-url <u>  API base URL
#   --api-key <key>     API key
#   --model <name>      Model name
#   --provider <name>   Provider (for pi mode)
#   --dry-run           Only assemble, don't translate
#   --skip-replace      Don't replace content/{lang}/, keep output in tmp/

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
DOCS_ROOT="$PROJECT_ROOT/apps/docs/content/en"
CACHE_DIR="$PROJECT_ROOT/apps/docs/cache"
TMP_OUTPUT="$PROJECT_ROOT/tmp/translate-output"

# Parse arguments
SKIP_SYNC=false
SKIP_REPLACE=false
LANG="zh-hans"
TRANSLATE_ARGS=""

while [[ $# -gt 0 ]]; do
  case $1 in
    --skip-sync) SKIP_SYNC=true; shift ;;
    --skip-replace) SKIP_REPLACE=true; shift ;;
    --lang) LANG="$2"; shift 2 ;;
    *) TRANSLATE_ARGS="$TRANSLATE_ARGS $1"; shift ;;
  esac
done

cd "$PROJECT_ROOT"

echo ""
echo "═══════════════════════════════════════════════════════"
echo "  Next.js i18n Docs - Sync & Translate Pipeline"
echo "═══════════════════════════════════════════════════════"
echo ""

# Step 1: Sync latest docs
if [ "$SKIP_SYNC" = false ]; then
  echo "📥 Step 1: Downloading latest Next.js docs..."
  bash scripts/sync-docs-local.sh
  echo ""
else
  echo "📥 Step 1: Skipped (--skip-sync)"
  echo ""
fi

# Step 2: Translate
echo "🔤 Step 2: Translating to $LANG..."
rm -rf "$TMP_OUTPUT"

node --import tsx packages/translate/src/batch.pipeline.ts \
  --docs-root "$DOCS_ROOT" \
  --output-dir "$TMP_OUTPUT" \
  --cache-dir "$CACHE_DIR" \
  --lang "$LANG" \
  $TRANSLATE_ARGS

echo ""

# Step 3: Replace content/{lang}/
LANG_DIR="$PROJECT_ROOT/apps/docs/content/$LANG"
OUTPUT_LANG_DIR="$TMP_OUTPUT/$LANG"

if [ "$SKIP_REPLACE" = false ] && [ -d "$OUTPUT_LANG_DIR" ]; then
  echo "📁 Step 3: Replacing content/$LANG/..."

  FILE_COUNT=$(find "$OUTPUT_LANG_DIR" -name "*.mdx" | wc -l | tr -d ' ')
  echo "   Output files: $FILE_COUNT"

  rm -rf "$LANG_DIR"
  cp -r "$OUTPUT_LANG_DIR" "$LANG_DIR"

  echo "   ✅ content/$LANG/ replaced with $FILE_COUNT files"
  echo ""
else
  if [ "$SKIP_REPLACE" = true ]; then
    echo "📁 Step 3: Skipped (--skip-replace)"
  else
    echo "📁 Step 3: No output to replace"
  fi
  echo ""
fi

# Step 4: Summary
echo "═══════════════════════════════════════════════════════"
echo "  Done!"
echo "  Cache: $CACHE_DIR/$LANG.json"
if [ "$SKIP_REPLACE" = false ] && [ -d "$OUTPUT_LANG_DIR" ]; then
  echo "  Output: $LANG_DIR"
else
  echo "  Output: $OUTPUT_LANG_DIR"
fi
echo "═══════════════════════════════════════════════════════"
