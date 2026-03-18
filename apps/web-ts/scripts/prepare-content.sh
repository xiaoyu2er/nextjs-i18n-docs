#!/bin/bash
# Prepare content structure for fumadocs i18n (dir parser)
LOCALES="en zh-hans zh-hant ja ar de es fr ru"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
APP_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
ROOT="$(cd "$APP_DIR/../.." && pwd)"

cd "$APP_DIR"
rm -rf content

for section in docs blog learn; do
  for locale in $LOCALES; do
    src="${ROOT}/content/${locale}/${section}"
    dst="content/${section}/${locale}"
    if [ -d "$src" ]; then
      mkdir -p "$dst"
      cp -r "$src"/. "$dst"/ 2>/dev/null || true
    fi
  done
done

echo "Content prepared:"
for section in docs blog learn; do
  total=0
  for locale in $LOCALES; do
    count=$(find "content/${section}/${locale}" -name "*.mdx" 2>/dev/null | wc -l | tr -d ' ')
    total=$((total + count))
  done
  echo "  ${section}: ${total} MDX files"
done
