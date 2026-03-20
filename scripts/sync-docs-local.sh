#!/usr/bin/env bash
# scripts/sync-docs-local.sh
# Download latest Next.js docs locally.
# Auto-resolves versions from git tags, then syncs all versions (13+).
#
# Usage: bash scripts/sync-docs-local.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
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
    # Latest version → content/en/docs/
    CONTENT_DIR="$PROJECT_ROOT/content/en/docs"
    mkdir -p "$CONTENT_DIR"
    rsync -av --delete "$TMP_DIR/nextjs-v$major/docs/" "$CONTENT_DIR/"
  else
    # Historical version → content-v{major}/en/docs/
    CONTENT_DIR="$PROJECT_ROOT/content-v$major/en/docs"
    mkdir -p "$CONTENT_DIR"
    rsync -av --delete "$TMP_DIR/nextjs-v$major/docs/" "$CONTENT_DIR/"
  fi

  echo "✅ v$major (v$version) synced"
  echo ""
done

# Step 3: Dedup EN + sync locale file structure to match EN
echo "🧹 Cleaning content directories..."
python3 -c "
import os, re
from collections import defaultdict

PROJECT_ROOT = '$PROJECT_ROOT'

# Process each content root (latest + versioned)
content_roots = [os.path.join(PROJECT_ROOT, 'content')]
for v in ['13', '14', '15']:
    d = os.path.join(PROJECT_ROOT, f'content-v{v}')
    if os.path.isdir(d):
        content_roots.append(d)

total_deduped = 0
total_orphans = 0

for content_root in content_roots:
    en_dir = os.path.join(content_root, 'en')
    if not os.path.isdir(en_dir):
        continue

    # 1. Dedup EN: remove duplicate slugs, keep highest numeric prefix
    for root, dirs, files in os.walk(en_dir):
        by_slug = defaultdict(list)
        for f in files:
            if not f.endswith('.mdx'):
                continue
            m = re.match(r'^(\d+)-(.+)$', f)
            if m:
                by_slug[m.group(2)].append((int(m.group(1)), f))
        for slug, entries in by_slug.items():
            if len(entries) <= 1:
                continue
            entries.sort(key=lambda x: x[0])
            keep = entries[-1][1]
            for _, fname in entries[:-1]:
                path = os.path.join(root, fname)
                rel = os.path.relpath(path, PROJECT_ROOT)
                print(f'  dedup: rm {rel} (keeping {keep})')
                os.remove(path)
                total_deduped += 1

    # 2. Build set of EN files (relative paths)
    en_files = set()
    for root, dirs, files in os.walk(en_dir):
        for f in files:
            if f.endswith('.mdx'):
                rel = os.path.relpath(os.path.join(root, f), en_dir)
                en_files.add(rel)

    # 3. Remove orphan locale files not in EN
    for locale_name in os.listdir(content_root):
        if locale_name == 'en':
            continue
        locale_dir = os.path.join(content_root, locale_name)
        if not os.path.isdir(locale_dir):
            continue
        for root, dirs, files in os.walk(locale_dir):
            for f in files:
                if not f.endswith('.mdx'):
                    continue
                rel = os.path.relpath(os.path.join(root, f), locale_dir)
                if rel not in en_files:
                    path = os.path.join(root, f)
                    rel_from_root = os.path.relpath(path, PROJECT_ROOT)
                    print(f'  orphan: rm {rel_from_root}')
                    os.remove(path)
                    total_orphans += 1

    # 4. Remove empty directories
    for root, dirs, files in os.walk(content_root, topdown=False):
        for d in dirs:
            dp = os.path.join(root, d)
            if not os.listdir(dp):
                os.rmdir(dp)

if total_deduped > 0:
    print(f'  Deduped: {total_deduped} files')
if total_orphans > 0:
    print(f'  Orphans removed: {total_orphans} files')
if total_deduped == 0 and total_orphans == 0:
    print('  All clean')
"

# Cleanup
rm -rf "$TMP_DIR"

echo "🎉 Done. English docs updated."
echo "   Latest: content/en/docs/"
echo "   Versioned: content-v{13,14,15}/en/docs/"
echo "   Versions: $(cat "$VERSIONS_FILE" | python3 -c "import json,sys; d=json.load(sys.stdin); print(', '.join(f'v{k}={v}' for k,v in sorted(d['versions'].items(), key=lambda x: int(x[0]))))")"
echo ""
echo "   Run 'bun build:packages && node packages/crawler/dist/index.js' to sync blog & learn."
