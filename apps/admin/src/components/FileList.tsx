import { useMemo } from 'react';
import type { FileCoverage } from '../lib/api';
import { getSection, statusIcon } from '../lib/flags';

export type StatusFilter = 'all' | 'complete' | 'partial' | 'missing';
export type SectionFilter = 'all' | 'docs' | 'blog' | 'learn';

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
        {filtered.map((f) => {
          const missing = f.total - f.translated;
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
              {missing > 0 && <span className="miss">{missing} miss</span>}
              <div className="mini-bar">
                <div
                  className="mini-fill"
                  style={{ width: `${f.pct}%`, background: color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
