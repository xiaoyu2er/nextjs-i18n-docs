#!/usr/bin/env bash
# scripts/clean-content.sh
# Dedup EN files + remove orphan locale files that don't exist in EN.
# Safe to run anytime — idempotent.
#
# Usage: bash scripts/clean-content.sh

set -euo pipefail
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "🧹 Cleaning content directories..."

python3 -c "
import os, re
from collections import defaultdict

PROJECT_ROOT = '$PROJECT_ROOT'

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

    # 1. Dedup EN
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

    # 2. Build EN file set
    en_files = set()
    for root, dirs, files in os.walk(en_dir):
        for f in files:
            if f.endswith('.mdx'):
                en_files.add(os.path.relpath(os.path.join(root, f), en_dir))

    # 3. Remove orphan locale files
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
                    print(f'  orphan: rm {os.path.relpath(path, PROJECT_ROOT)}')
                    os.remove(path)
                    total_orphans += 1

    # 4. Remove empty directories
    for root, dirs, files in os.walk(content_root, topdown=False):
        for d in dirs:
            dp = os.path.join(root, d)
            if not os.listdir(dp):
                os.rmdir(dp)

print()
print(f'Deduped: {total_deduped}, Orphans removed: {total_orphans}')
"
