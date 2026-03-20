import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { FileList } from './components/FileList';
import { JobDialog } from './components/JobDialog';
import { JobPanel } from './components/JobPanel';
import { LangGrid } from './components/LangGrid';
import { Preview } from './components/Preview';
import { api } from './lib/api';

export function App() {
  const [version, setVersion] = useState('latest');
  const [lang, setLang] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [previewFile, setPreviewFile] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogFiles, setDialogFiles] = useState<string[] | undefined>();

  const { data: status } = useQuery({
    queryKey: ['status'],
    queryFn: api.status,
  });

  const { data: files } = useQuery({
    queryKey: ['files', version, lang],
    queryFn: () => api.fileCoverage(version, lang!),
    enabled: !!lang,
  });

  const handleSelectVersion = useCallback((v: string) => {
    setVersion(v);
    setLang(null);
    setPreviewFile(null);
    setSelected(new Set());
  }, []);

  const handleSelectLang = useCallback((l: string) => {
    setLang(l);
    setPreviewFile(null);
    setSelected(new Set());
  }, []);

  const handleToggle = useCallback((file: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(file)) next.delete(file);
      else next.add(file);
      return next;
    });
  }, []);

  const handleSelectAll = useCallback((fileList: string[]) => {
    setSelected(new Set(fileList));
  }, []);

  const handleClear = useCallback(() => setSelected(new Set()), []);

  const handleTranslateSelected = useCallback(() => {
    setDialogFiles([...selected]);
    setShowDialog(true);
  }, [selected]);

  const handleNewJob = useCallback(() => {
    setDialogFiles(undefined);
    setShowDialog(true);
  }, []);

  if (!status) return <div className="loading">Loading...</div>;

  return (
    <>
      <nav>
        <h1>🌐 Translation Admin</h1>
        <span className="spacer" />
        <button type="button" className="btn" onClick={handleNewJob}>
          + New Job
        </button>
      </nav>

      <div className="container">
        {/* Version tabs */}
        <div className="tabs">
          {status.versions.map((v) => (
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
          data={status}
          version={version}
          selectedLang={lang}
          onSelect={handleSelectLang}
        />

        {/* Jobs */}
        <JobPanel />

        {/* File list + Preview */}
        {lang && files && (
          <div className={`file-panel${previewFile ? '' : ' no-preview'}`}>
            <FileList
              files={files}
              lang={lang}
              activeFile={previewFile}
              selected={selected}
              onSelect={setPreviewFile}
              onToggle={handleToggle}
              onSelectAll={handleSelectAll}
              onClear={handleClear}
              onTranslateSelected={handleTranslateSelected}
            />
            {previewFile && (
              <Preview version={version} lang={lang} file={previewFile} />
            )}
          </div>
        )}
      </div>

      {/* Job dialog */}
      {showDialog && (
        <JobDialog
          langs={status.langs}
          versions={status.versions}
          defaultLang={lang || undefined}
          defaultVersion={version}
          files={dialogFiles}
          onClose={() => setShowDialog(false)}
        />
      )}
    </>
  );
}
