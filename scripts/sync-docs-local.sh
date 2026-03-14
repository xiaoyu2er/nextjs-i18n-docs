#!/usr/bin/env bash
# scripts/sync-docs-local.sh
# Download latest Next.js docs locally (replicates sync-docs.yml CI workflow)
#
# Usage: bash scripts/sync-docs-local.sh
#
# What it does:
#   1. Clones Next.js repo (canary, v14, v13) into temp dirs
#   2. Rsyncs docs into apps/docs/content/en/docs/
#   3. Cleans up temp dirs

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
CONTENT_EN="$PROJECT_ROOT/apps/docs/content/en/docs"
TMP_DIR=$(mktemp -d)

echo "📦 Downloading Next.js docs to temp: $TMP_DIR"

# Canary (latest)
echo "⏳ Cloning canary branch..."
git clone --depth 1 --branch canary --single-branch https://github.com/vercel/next.js.git "$TMP_DIR/nextjs-canary" 2>/dev/null
mkdir -p "$CONTENT_EN"
rsync -av --delete "$TMP_DIR/nextjs-canary/docs/" "$CONTENT_EN/" --exclude="13" --exclude="14" --exclude="15"
echo "✅ Canary docs synced"

# v15
echo "⏳ Cloning v15.5.12..."
git clone --depth 1 --branch v15.5.12 --single-branch https://github.com/vercel/next.js.git "$TMP_DIR/nextjs-v15" 2>/dev/null
mkdir -p "$CONTENT_EN/15"
rsync -av --delete "$TMP_DIR/nextjs-v15/docs/" "$CONTENT_EN/15/"
echo "✅ v15 docs synced"

# v14
echo "⏳ Cloning v14.2.35..."
git clone --depth 1 --branch v14.2.35 --single-branch https://github.com/vercel/next.js.git "$TMP_DIR/nextjs-v14" 2>/dev/null
mkdir -p "$CONTENT_EN/14"
rsync -av --delete "$TMP_DIR/nextjs-v14/docs/" "$CONTENT_EN/14/"
echo "✅ v14 docs synced"

# v13
echo "⏳ Cloning v13.5.11..."
git clone --depth 1 --branch v13.5.11 --single-branch https://github.com/vercel/next.js.git "$TMP_DIR/nextjs-v13" 2>/dev/null
mkdir -p "$CONTENT_EN/13"
rsync -av --delete "$TMP_DIR/nextjs-v13/docs/" "$CONTENT_EN/13/"
echo "✅ v13 docs synced"

# Cleanup
rm -rf "$TMP_DIR"
echo ""
echo "🎉 Done. English docs updated in: $CONTENT_EN"
echo "   Run 'pnpm build:packages && node packages/crawler/dist/index.js' to sync blog & learn."
