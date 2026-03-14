#!/usr/bin/env bash
# scripts/translate.sh
# Run batch translation with real-time output.
#
# Usage:
#   bash scripts/translate.sh [batch.pipeline.ts options...]
#
# Examples:
#   # Translate all 01-app docs with concurrency 10
#   bash scripts/translate.sh --pattern "docs/01-app/**/*.mdx" --concurrency 10 \
#     --api-type openai --api-base-url "https://openrouter.ai/api/v1" \
#     --api-key "YOUR_KEY" --model "openrouter/hunter-alpha"
#
#   # Dry run
#   bash scripts/translate.sh --pattern "docs/01-app/**/*.mdx" --dry-run

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

cd "$PROJECT_ROOT"
exec node --import tsx packages/translate/src/batch.pipeline.ts "$@"
