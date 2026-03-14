#!/usr/bin/env bash
# scripts/generate-md5-map.sh
# Generate MD5 map for all translatable nodes in content/en/.
# Outputs to apps/docs/translation-cache/en.jsonl
#
# Usage: bash scripts/generate-md5-map.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

cd "$PROJECT_ROOT"
echo "📝 Generating MD5 map for all English source files..."

node --import tsx packages/translate/src/generate-md5-map.ts "$@"
