#!/usr/bin/env bash
# scripts/resolve-versions.sh
# Fetch latest patch version for each Next.js major version (13+)
# Writes to .github/nextjs-versions.json
#
# Usage: bash scripts/resolve-versions.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
OUTPUT_FILE="$PROJECT_ROOT/.github/nextjs-versions.json"

echo "Fetching Next.js release tags..."

# Get latest patch version for each major version from v13+
VERSIONS=$(git ls-remote --tags https://github.com/vercel/next.js.git \
  | grep -E 'refs/tags/v[0-9]+\.[0-9]+\.[0-9]+$' \
  | sed 's|.*refs/tags/v||' \
  | sort -t. -k1,1n -k2,2n -k3,3n \
  | awk -F. '{versions[$1]=$0} END {for (k in versions) if (k+0 >= 13) print k, versions[k]}' \
  | sort -t' ' -k1,1n)

LATEST=""
JSON_ENTRIES=""
while read -r major version; do
  echo "  v$major latest: v$version"
  if [ -z "$LATEST" ] || [ "$major" -gt "$(echo "$LATEST" | cut -d. -f1)" ]; then
    LATEST="$version"
  fi
  if [ -n "$JSON_ENTRIES" ]; then
    JSON_ENTRIES="$JSON_ENTRIES,"
  fi
  JSON_ENTRIES="$JSON_ENTRIES\"$major\":\"$version\""
done <<< "$VERSIONS"

LATEST_MAJOR=$(echo "$LATEST" | cut -d. -f1)

python3 -c "
import json
data = {
    'latest': '$LATEST',
    'latestMajor': '$LATEST_MAJOR',
    'versions': {$JSON_ENTRIES}
}
with open('$OUTPUT_FILE', 'w') as f:
    json.dump(data, f, indent=2)
    f.write('\n')
"

echo ""
echo "✅ Written to $OUTPUT_FILE"
cat "$OUTPUT_FILE"
