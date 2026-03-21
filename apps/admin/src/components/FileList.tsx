import { useMemo, useState } from 'react';
import type { FileCoverage } from '../lib/api';
import { getSection, statusIcon } from '../lib/flags';

export type StatusFilter = 'all' | 'complete' | 'partial' | 'missing';
export type SectionFilter = 'all' | 'docs' | 'blog' | 'learn';
type ViewMode = 'list' | 'tree';

interface Props {
  files: FileCoverage[];
  lang: string;
  activeFile: string | null;
  selected: Set<string>;
  statusFilter: StatusFilter;
  sectionFilter: SectionFilter;
  onStatusFilter: (f: StatusFilter) => void;
  onSectionFilter: (f: SectionFilter) => void;
  onSelect: (file: string) => void;
  onToggle: (file: string) => void;
  onSelectAll: (files: string[]) => void;
  onClear: () => void;
  onTranslateSelected: () => void;
}

function filePct(f: FileCoverage) {
  return f.total > 0 ? (f.translated / f.total) * 100 : 100;
}

function fileStatus(f: FileCoverage): 'complete' | 'partial' | 'missing' {
  const pct = filePct(f);
  if (pct >= 100) return 'complete';
  if (pct > 0) return 'partial';
  return 'missing';
}

interface TreeNode {
  name: string;
  path: string;
  children: Map<string, TreeNode>;
  file?: FileCoverage & { pct: number; status: string; section: string };
}

function buildTree(
  files: (FileCoverage & { pct: number; status: string; section: string })[],
): TreeNode {
  const root: TreeNode = { name: '', path: '', children: new Map() };
  for (const f of files) {
    const parts = f.file.split('/');
    let node = root;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (!node.children.has(part)) {
        node.children.set(part, {
          name: part,
          path: parts.slice(0, i + 1).join('/'),
          children: new Map(),
        });
      }
      // biome-ignore lint/style/noNonNullAssertion: just created above
      node = node.children.get(part)!;
    }
    node.file = f;
  }
  return root;
}

function dirPct(node: TreeNode): { translated: number; total: number } {
  let translated = 0;
  let total = 0;
  if (node.file) {
    translated += node.file.translated;
    total += node.file.total;
  }
  for (const child of node.children.values()) {
    const sub = dirPct(child);
    translated += sub.translated;
    total += sub.total;
  }
  return { translated, total };
}

function TreeRow({
  node,
  depth,
  activeFile,
  selected,
  isEn,
  collapsed,
  onToggleCollapse,
  onSelect,
  onToggle,
}: {
  node: TreeNode;
  depth: number;
  activeFile: string | null;
  selected: Set<string>;
  isEn: boolean;
  collapsed: Set<string>;
  onToggleCollapse: (path: string) => void;
  onSelect: (file: string) => void;
  onToggle: (file: string) => void;
}) {
  const isDir = node.children.size > 0 && !node.file;
  const isCollapsed = collapsed.has(node.path);
  const children = [...node.children.values()].sort((a, b) => {
    // Dirs first, then files
    const aDir = a.children.size > 0 && !a.file;
    const bDir = b.children.size > 0 && !b.file;
    if (aDir !== bDir) return aDir ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  if (isDir) {
    const { translated, total } = dirPct(node);
    const pct = total > 0 ? (translated / total) * 100 : 100;
    const color =
      pct >= 100 ? 'var(--green)' : pct > 0 ? 'var(--yellow)' : 'var(--red)';

    return (
      <>
        <div
          className="file-row tree-dir"
          style={{ paddingLeft: `${depth + 0.25}rem` }}
          onClick={() => onToggleCollapse(node.path)}
        >
          <span className="tree-arrow">{isCollapsed ? '▶' : '▼'}</span>
          <span className="icon">📁</span>
          <span className="path" title={node.path}>
            {node.name}/
          </span>
          <span className="pct">{pct.toFixed(0)}%</span>
          <div className="mini-bar">
            <div
              className="mini-fill"
              style={{ width: `${pct}%`, background: color }}
            />
          </div>
        </div>
        {!isCollapsed &&
          children.map((child) => (
            <TreeRow
              key={child.path}
              node={child}
              depth={depth + 1}
              activeFile={activeFile}
              selected={selected}
              isEn={isEn}
              collapsed={collapsed}
              onToggleCollapse={onToggleCollapse}
              onSelect={onSelect}
              onToggle={onToggle}
            />
          ))}
      </>
    );
  }

  // File node (leaf or file with children like index.mdx in a dir)
  const f = node.file;
  if (!f) return null;

  const _missing = f.total - f.translated;
  const color =
    f.status === 'complete'
      ? 'var(--green)'
      : f.status === 'partial'
        ? 'var(--yellow)'
        : 'var(--red)';

  return (
    <>
      <div
        className={`file-row${activeFile === f.file ? ' active' : ''}`}
        style={{ paddingLeft: `${depth + 0.25}rem` }}
        onClick={() => onSelect(f.file)}
      >
        {!isEn && (
          <input
            type="checkbox"
            checked={selected.has(f.file)}
            onChange={(e) => {
              e.stopPropagation();
              onToggle(f.file);
            }}
            onClick={(e) => e.stopPropagation()}
          />
        )}
        <span className="icon">{statusIcon(f.pct)}</span>
        <span className="path" title={f.file}>
          {node.name}
        </span>
        <span className="pct">{f.pct.toFixed(0)}%</span>
        <div className="mini-bar">
          <div
            className="mini-fill"
            style={{ width: `${f.pct}%`, background: color }}
          />
        </div>
      </div>
      {/* Render any children (e.g., file is also a dir parent) */}
      {!isCollapsed &&
        children.map((child) => (
          <TreeRow
            key={child.path}
            node={child}
            depth={depth + 1}
            activeFile={activeFile}
            selected={selected}
            isEn={isEn}
            collapsed={collapsed}
            onToggleCollapse={onToggleCollapse}
            onSelect={onSelect}
            onToggle={onToggle}
          />
        ))}
    </>
  );
}

export function FileList({
  files,
  lang,
  activeFile,
  selected,
  statusFilter,
  sectionFilter,
  onStatusFilter,
  onSectionFilter,
  onSelect,
  onToggle,
  onSelectAll,
  onClear,
  onTranslateSelected,
}: Props) {
  const [viewMode, setViewMode] = useState<ViewMode>('tree');
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    let result = files.map((f) => ({
      ...f,
      pct: filePct(f),
      status: fileStatus(f),
      section: getSection(f.file),
    }));
    if (statusFilter !== 'all')
      result = result.filter((f) => f.status === statusFilter);
    if (sectionFilter !== 'all')
      result = result.filter((f) => f.section === sectionFilter);
    return result;
  }, [files, statusFilter, sectionFilter]);

  const tree = useMemo(() => buildTree(filtered), [filtered]);

  const toggleCollapse = (path: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  };

  const isEn = lang === 'en';

  return (
    <div className="file-list-wrap">
      {/* Selection bar */}
      {!isEn && selected.size > 0 && (
        <div className="sel-bar">
          <span>{selected.size} selected</span>
          <button
            type="button"
            className="btn btn-sm"
            onClick={onTranslateSelected}
          >
            Translate Selected
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline"
            onClick={onClear}
          >
            Clear
          </button>
        </div>
      )}

      {/* Header */}
      <div className="file-list-hdr">
        {!isEn && (
          <input
            type="checkbox"
            checked={
              filtered.length > 0 && filtered.every((f) => selected.has(f.file))
            }
            onChange={(e) => {
              if (e.target.checked) {
                onSelectAll(filtered.map((f) => f.file));
              } else {
                onClear();
              }
            }}
            title="Select all visible"
          />
        )}
        <strong>
          {lang} · {filtered.length} files
        </strong>
        <span className="spacer" />
        <button
          type="button"
          className={`btn btn-xs${viewMode === 'list' ? ' active' : ''}`}
          onClick={() => setViewMode('list')}
          title="List view"
        >
          ☰
        </button>
        <button
          type="button"
          className={`btn btn-xs${viewMode === 'tree' ? ' active' : ''}`}
          onClick={() => setViewMode('tree')}
          title="Tree view"
        >
          🌲
        </button>
        <select
          value={statusFilter}
          onChange={(e) => onStatusFilter(e.target.value as StatusFilter)}
        >
          <option value="all">All</option>
          <option value="complete">✅ Complete</option>
          <option value="partial">🟡 Partial</option>
          <option value="missing">🔴 Missing</option>
        </select>
        <select
          value={sectionFilter}
          onChange={(e) => onSectionFilter(e.target.value as SectionFilter)}
        >
          <option value="all">All sections</option>
          <option value="docs">docs</option>
          <option value="blog">blog</option>
          <option value="learn">learn</option>
        </select>
      </div>

      {/* File rows */}
      <div className="file-list-body">
        {filtered.length === 0 && (
          <div className="loading">No files match filter</div>
        )}

        {viewMode === 'list' &&
          filtered.map((f) => {
            const _missing = f.total - f.translated;
            const color =
              f.status === 'complete'
                ? 'var(--green)'
                : f.status === 'partial'
                  ? 'var(--yellow)'
                  : 'var(--red)';

            return (
              <div
                key={f.file}
                className={`file-row${activeFile === f.file ? ' active' : ''}`}
                onClick={() => onSelect(f.file)}
              >
                {!isEn && (
                  <input
                    type="checkbox"
                    checked={selected.has(f.file)}
                    onChange={(e) => {
                      e.stopPropagation();
                      onToggle(f.file);
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
                <span className="icon">{statusIcon(f.pct)}</span>
                <span className="path" title={f.file}>
                  {f.file}
                </span>
                <span className="pct">{f.pct.toFixed(0)}%</span>
                <div className="mini-bar">
                  <div
                    className="mini-fill"
                    style={{ width: `${f.pct}%`, background: color }}
                  />
                </div>
              </div>
            );
          })}

        {viewMode === 'tree' &&
          [...tree.children.values()]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((child) => (
              <TreeRow
                key={child.path}
                node={child}
                depth={0}
                activeFile={activeFile}
                selected={selected}
                isEn={isEn}
                collapsed={collapsed}
                onToggleCollapse={toggleCollapse}
                onSelect={onSelect}
                onToggle={onToggle}
              />
            ))}
      </div>
    </div>
  );
}
