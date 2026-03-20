import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { api } from '../lib/api';
import { FLAGS } from '../lib/flags';

interface Props {
  langs: string[];
  versions: string[];
  defaultLang?: string;
  defaultVersion?: string;
  files?: string[];
  onClose: () => void;
}

export function JobDialog({
  langs,
  versions,
  defaultLang,
  defaultVersion,
  files,
  onClose,
}: Props) {
  const [lang, setLang] = useState(defaultLang || langs[0]);
  const [version, setVersion] = useState(defaultVersion || versions[0]);
  const [max, setMax] = useState(files?.length || 50);
  const [concurrency, setConcurrency] = useState(3);
  const [error, setError] = useState<string | null>(null);

  const qc = useQueryClient();
  const create = useMutation({
    mutationFn: () =>
      api.createJob({
        lang,
        version,
        max,
        concurrency,
        files: files?.length ? files : undefined,
      }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['jobs'] });
      onClose();
    },
    onError: (err) => setError(err.message),
  });

  const translatable = langs.filter((l) => l !== 'en');

  return (
    <div
      className="dialog-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="dialog">
        <h3>Start Translation Job</h3>

        {error && (
          <div
            style={{
              color: 'var(--red)',
              fontSize: '0.85rem',
              marginBottom: '0.5rem',
            }}
          >
            {error}
          </div>
        )}

        <label>Language</label>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          {translatable.map((l) => (
            <option key={l} value={l}>
              {FLAGS[l]} {l}
            </option>
          ))}
        </select>

        <label>Version</label>
        <select value={version} onChange={(e) => setVersion(e.target.value)}>
          {versions.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>

        <label>Max files</label>
        <input
          type="number"
          value={max}
          onChange={(e) => setMax(Number(e.target.value))}
        />

        <label>Concurrency</label>
        <input
          type="number"
          value={concurrency}
          onChange={(e) => setConcurrency(Number(e.target.value))}
        />

        {files && files.length > 0 && (
          <div className="file-list-preview">
            <strong>{files.length} files selected:</strong>
            {files.map((f) => (
              <div key={f}>{f}</div>
            ))}
          </div>
        )}

        <div className="actions">
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Cancel
          </button>
          <button
            type="button"
            className="btn"
            disabled={create.isPending}
            onClick={() => create.mutate()}
          >
            {create.isPending ? 'Starting...' : 'Start Job →'}
          </button>
        </div>
      </div>
    </div>
  );
}
