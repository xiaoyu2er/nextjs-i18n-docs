import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import { FileList } from './components/FileList';
import { JobDialog } from './components/JobDialog';
import { JobPanel } from './components/JobPanel';
import { LangGrid } from './components/LangGrid';
import { Preview } from './components/Preview';
import { api } from './lib/api';

type ViewMode = 'split' | 'en' | 'lang';
type StatusFilter = 'all' | 'complete' | 'partial' | 'missing';
type SectionFilter = 'all' | 'docs' | 'blog' | 'learn';

// ── URL state helpers ──

function readParams() {
  const p = new URLSearchParams(window.location.search);
  return {
    version: p.get('v') || 'latest',
    lang: p.get('lang') || null,
    file: p.get('file') || null,
    showFiles: p.get('files') !== '0',
    view: (p.get('view') as ViewMode) || 'lang',
    toc: p.get('toc') !== '0',
    nodes: p.get('nodes') === '1',
    status: (p.get('status') as StatusFilter) || 'all',
    section: (p.get('section') as SectionFilter) || 'all',
  };
}

function setParams(updates: Record<string, string | null>) {
  const next = new URLSearchParams(window.location.search);
  for (const [k, v] of Object.entries(updates)) {
    if (v === null || v === '') next.delete(k);
    else next.set(k, v);
  }
  const qs = next.toString();
  window.history.replaceState(null, '', qs ? `?${qs}` : '/');
}

export function App() {
  // bump to force re-read from URL
  const [, rerender] = useState(0);
  const bump = useCallback(() => rerender((n) => n + 1), []);

  // Theme
  const [theme, setThemeState] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light' ? 'light' : 'dark';
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const { version, lang, file, showFiles, view, toc, nodes, status, section } =
    readParams();

  // ── URL setters ──

  const setVersion = useCallback(
    (v: string) => {
      setParams({
        v: v === 'latest' ? null : v,
        file: null,
      });
      bump();
    },
    [bump],
  );

  const setLang = useCallback(
    (l: string | null) => {
      setParams({ lang: l });
      bump();
    },
    [bump],
  );

  const setFile = useCallback(
    (f: string | null) => {
      setParams({ file: f });
      bump();
    },
    [bump],
  );

  const setShowFiles = useCallback(
    (show: boolean) => {
      setParams({ files: show ? null : '0' });
      bump();
    },
    [bump],
  );

  const setView = useCallback(
    (m: ViewMode) => {
      setParams({ view: m === 'lang' ? null : m });
      bump();
    },
    [bump],
  );

  const setNodes = useCallback(
    (show: boolean) => {
      setParams({ nodes: show ? '1' : null });
      bump();
    },
    [bump],
  );

  const setToc = useCallback(
    (show: boolean) => {
      setParams({ toc: show ? null : '0' });
      bump();
    },
    [bump],
  );

  const setStatusFilter = useCallback(
    (s: StatusFilter) => {
      setParams({ status: s === 'all' ? null : s });
      bump();
    },
    [bump],
  );

  const setSectionFilter = useCallback(
    (s: SectionFilter) => {
      setParams({ section: s === 'all' ? null : s });
      bump();
    },
    [bump],
  );

  // ── Non-URL state ──
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showDialog, setShowDialog] = useState(false);
  const [dialogFiles, setDialogFiles] = useState<string[] | undefined>();

  // ── Queries ──
  const { data: statusData } = useQuery({
    queryKey: ['status'],
    queryFn: api.status,
  });

  const { data: files } = useQuery({
    queryKey: ['files', version, lang],
    queryFn: () => api.fileCoverage(version, lang as string),
    enabled: !!lang,
  });

  // ── Handlers ──
  const handleSelectVersion = useCallback(
    (v: string) => {
      setVersion(v);
      setSelected(new Set());
    },
    [setVersion],
  );

  const handleSelectLang = useCallback(
    (l: string) => {
      setLang(l);
      setSelected(new Set());
    },
    [setLang],
  );

  const handleToggle = useCallback((f: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(f)) next.delete(f);
      else next.add(f);
      return next;
    });
  }, []);

  const handleSelectAll = useCallback(
    (fileList: string[]) => setSelected(new Set(fileList)),
    [],
  );

  const handleClear = useCallback(() => setSelected(new Set()), []);

  const handleTranslateSelected = useCallback(() => {
    setDialogFiles([...selected]);
    setShowDialog(true);
  }, [selected]);

  const handleNewJob = useCallback(() => {
    setDialogFiles(undefined);
    setShowDialog(true);
  }, []);

  if (!statusData) return <div className="loading">Loading...</div>;

  return (
    <>
      <nav>
        <h1>🌐 Translation Admin</h1>
        <span className="spacer" />
        <button type="button" className="btn" onClick={handleNewJob}>
          + New Job
        </button>
        <button
          type="button"
          className="btn btn-icon"
          onClick={() => {
            const next = theme === 'light' ? 'dark' : 'light';
            setThemeState(next);
            localStorage.setItem('theme', next);
          }}
          title="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>

      <div className="container">
        {/* Version tabs */}
        <div className="tabs">
          {statusData.versions.map((v) => (
            <button
              key={v}
              type="button"
              className={`tab${v === version ? ' active' : ''}`}
              onClick={() => handleSelectVersion(v)}
            >
              {v}
            </button>
          ))}
        </div>

        {/* Language cards */}
        <LangGrid
          data={statusData}
          version={version}
          selectedLang={lang}
          onSelect={handleSelectLang}
        />

        {/* Jobs */}
        <JobPanel />

        {/* File list + Preview */}
        {lang && files && (
          <>
            <div className="file-panel-toolbar">
              <button
                type="button"
                className={`btn btn-sm${showFiles ? ' active' : ''}`}
                onClick={() => setShowFiles(!showFiles)}
              >
                {showFiles ? '◀ Hide files' : '▶ Show files'}
              </button>
              {file && <span className="file-panel-current">{file}</span>}
            </div>
            <div
              className={`file-panel${!showFiles ? ' no-list' : ''}${!file ? ' no-preview' : ''}`}
            >
              {showFiles && (
                <FileList
                  files={files}
                  lang={lang}
                  activeFile={file}
                  selected={selected}
                  statusFilter={status}
                  sectionFilter={section}
                  onStatusFilter={setStatusFilter}
                  onSectionFilter={setSectionFilter}
                  onSelect={setFile}
                  onToggle={handleToggle}
                  onSelectAll={handleSelectAll}
                  onClear={handleClear}
                  onTranslateSelected={handleTranslateSelected}
                />
              )}
              {file && (
                <Preview
                  version={version}
                  lang={lang}
                  file={file}
                  viewMode={view}
                  onViewMode={setView}
                  showToc={toc}
                  onToggleToc={() => setToc(!toc)}
                  showNodes={nodes}
                  onToggleNodes={() => setNodes(!nodes)}
                  onClose={() => setFile(null)}
                />
              )}
            </div>
          </>
        )}
      </div>

      {/* Job dialog */}
      {showDialog && (
        <JobDialog
          langs={statusData.langs}
          versions={statusData.versions}
          defaultLang={lang || undefined}
          defaultVersion={version}
          files={dialogFiles}
          onClose={() => setShowDialog(false)}
        />
      )}
    </>
  );
}
