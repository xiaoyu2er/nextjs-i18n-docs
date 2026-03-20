import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { api, type Model } from '../lib/api';
import { FLAGS } from '../lib/flags';

interface Props {
  langs: string[];
  versions: string[];
  defaultLang?: string;
  defaultVersion?: string;
  files?: string[];
  onClose: () => void;
}

function formatPrice(price: number) {
  if (price === 0) return 'Free';
  return `$${price.toFixed(2)}/M`;
}

function ModelOption({ m }: { m: Model }) {
  return (
    <option value={m.id}>
      {m.isFree ? '🆓 ' : ''}
      {m.name} — in: {formatPrice(m.promptPrice)} · out:{' '}
      {formatPrice(m.completionPrice)} · {(m.contextLength / 1000).toFixed(0)}k
    </option>
  );
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
  const [model, setModel] = useState('');
  const [modelFilter, setModelFilter] = useState('');
  const [error, setError] = useState<string | null>(null);

  const { data: models, isLoading: modelsLoading } = useQuery({
    queryKey: ['models'],
    queryFn: api.models,
    staleTime: 5 * 60 * 1000,
  });

  const filteredModels = useMemo(() => {
    if (!models) return [];
    if (!modelFilter) return models;
    const q = modelFilter.toLowerCase();
    return models.filter(
      (m) => m.id.toLowerCase().includes(q) || m.name.toLowerCase().includes(q),
    );
  }, [models, modelFilter]);

  const freeModels = useMemo(
    () => filteredModels.filter((m) => m.isFree),
    [filteredModels],
  );
  const paidModels = useMemo(
    () => filteredModels.filter((m) => !m.isFree),
    [filteredModels],
  );

  const qc = useQueryClient();
  const create = useMutation({
    mutationFn: () =>
      api.createJob({
        lang,
        version,
        max,
        concurrency,
        model: model || undefined,
        files: files?.length ? files : undefined,
      }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['jobs'] });
      onClose();
    },
    onError: (err) => setError(err.message),
  });

  const translatable = langs.filter((l) => l !== 'en');
  const selectedModel = models?.find((m) => m.id === model);

  return (
    <div
      className="dialog-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="dialog dialog-wide">
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

        <div className="dialog-grid">
          <div>
            <label>Language</label>
            <select value={lang} onChange={(e) => setLang(e.target.value)}>
              {translatable.map((l) => (
                <option key={l} value={l}>
                  {FLAGS[l]} {l}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Version</label>
            <select
              value={version}
              onChange={(e) => setVersion(e.target.value)}
            >
              {versions.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Max files</label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Concurrency</label>
            <input
              type="number"
              value={concurrency}
              onChange={(e) => setConcurrency(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Model selector */}
        <label>Model</label>
        <input
          type="text"
          placeholder="Search models..."
          value={modelFilter}
          onChange={(e) => setModelFilter(e.target.value)}
          className="model-search"
        />
        <select
          className="model-select"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          size={8}
        >
          <option value="">Default (from .env)</option>
          {modelsLoading && <option disabled>Loading models...</option>}
          {freeModels.length > 0 && (
            <optgroup label="🆓 Free">
              {freeModels.map((m) => (
                <ModelOption key={m.id} m={m} />
              ))}
            </optgroup>
          )}
          {paidModels.length > 0 && (
            <optgroup label="💰 Paid">
              {paidModels.map((m) => (
                <ModelOption key={m.id} m={m} />
              ))}
            </optgroup>
          )}
        </select>
        {selectedModel && (
          <div className="model-info">
            <strong>{selectedModel.name}</strong>
            {selectedModel.isFree && <span className="badge-free">FREE</span>}
            <br />
            <span>
              Input: {formatPrice(selectedModel.promptPrice)} · Output:{' '}
              {formatPrice(selectedModel.completionPrice)} · Context:{' '}
              {(selectedModel.contextLength / 1000).toFixed(0)}k
            </span>
          </div>
        )}

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
