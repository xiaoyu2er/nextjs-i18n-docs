#!/usr/bin/env bash
# scripts/sync-docs-local.sh
# Download latest Next.js docs locally.
# Auto-resolves versions from git tags, then syncs all versions (13+).
#
# Usage: bash scripts/sync-docs-local.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
CONTENT_EN="$PROJECT_ROOT/apps/docs/content/en/docs"
TMP_DIR=$(mktemp -d)

cd "$PROJECT_ROOT"

# Step 1: Resolve versions
echo "🔍 Resolving Next.js versions..."
bash scripts/resolve-versions.sh
echo ""

VERSIONS_FILE="$PROJECT_ROOT/.github/nextjs-versions.json"
LATEST_MAJOR=$(python3 -c "import json; print(json.load(open('$VERSIONS_FILE'))['latestMajor'])")

echo "📦 Downloading docs to temp: $TMP_DIR"
echo ""

# Step 2: Sync each version
python3 -c "
import json
data = json.load(open('$VERSIONS_FILE'))
for major, version in sorted(data['versions'].items(), key=lambda x: int(x[0])):
    print(f'{major} {version}')
" | while read -r major version; do
  echo "⏳ Cloning v$version..."
  git clone --depth 1 --branch "v$version" --single-branch https://github.com/vercel/next.js.git "$TMP_DIR/nextjs-v$major" 2>/dev/null

  if [ "$major" = "$LATEST_MAJOR" ]; then
    # Latest version → root docs/ (exclude old version dirs)
    mkdir -p "$CONTENT_EN"
    EXCLUDES=$(python3 -c "
import json
data = json.load(open('$VERSIONS_FILE'))
for m in data['versions']:
    if m != '$LATEST_MAJOR':
        print('--exclude=' + m, end=' ')
")
    rsync -av --delete "$TMP_DIR/nextjs-v$major/docs/" "$CONTENT_EN/" $EXCLUDES
  else
    # Historical version → docs/{major}/
    mkdir -p "$CONTENT_EN/$major"
    rsync -av --delete "$TMP_DIR/nextjs-v$major/docs/" "$CONTENT_EN/$major/"
  fi

  echo "✅ v$major (v$version) synced"
  echo ""
done

# Cleanup
rm -rf "$TMP_DIR"

echo "🎉 Done. English docs updated in: $CONTENT_EN"
echo "   Versions: $(cat "$VERSIONS_FILE" | python3 -c "import json,sys; d=json.load(sys.stdin); print(', '.join(f'v{k}={v}' for k,v in sorted(d['versions'].items(), key=lambda x: int(x[0]))))")"
echo ""
echo "   Run 'pnpm build:packages && node packages/crawler/dist/index.js' to sync blog & learn."
