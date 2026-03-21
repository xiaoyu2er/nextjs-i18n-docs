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
  if (price < 0.01) return `$${price.toFixed(4)}`;
  return `$${price.toFixed(2)}`;
}

function ctxLabel(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  return `${(n / 1000).toFixed(0)}k`;
}

type SortKey = 'price-asc' | 'price-desc' | 'context-desc' | 'name';
type Mode = 'file' | 'md5';

const CTX_STEPS = [0, 8, 16, 32, 64, 128, 200, 512, 1024, 2048];

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
  const [mode, setMode] = useState<Mode>(files?.length ? 'file' : 'md5');
  const [max, setMax] = useState(files?.length || 10);
  const [concurrency, setConcurrency] = useState(3);
  const [error, setError] = useState<string | null>(null);

  // Model selection
  const [selectedModel, setSelectedModel] = useState('');
  const [search, setSearch] = useState('');

  // Filters
  const [sort, setSort] = useState<SortKey>('context-desc');
  const [ctxSlider, setCtxSlider] = useState(0);
  const [freeOnly, setFreeOnly] = useState(true);
  const [jsonOnly, setJsonOnly] = useState(false);

  const minCtx = CTX_STEPS[ctxSlider] * 1000;

  const { data: models, isLoading: modelsLoading } = useQuery({
    queryKey: ['models'],
    queryFn: api.models,
    staleTime: 5 * 60 * 1000,
  });

  const filtered = useMemo(() => {
    if (!models) return [];
    let result = models.filter((m) => {
      if (search) {
        const q = search.toLowerCase();
        if (
          !m.id.toLowerCase().includes(q) &&
          !m.name.toLowerCase().includes(q)
        )
          return false;
      }
      if (freeOnly && !m.isFree) return false;
      if (minCtx > 0 && m.contextLength < minCtx) return false;
      if (jsonOnly && !m.supportsJson) return false;
      return true;
    });

    result = [...result];
    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.promptPrice - b.promptPrice);
        break;
      case 'price-desc':
        result.sort((a, b) => b.promptPrice - a.promptPrice);
        break;
      case 'context-desc':
        result.sort((a, b) => b.contextLength - a.contextLength);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    return result;
  }, [models, search, freeOnly, minCtx, jsonOnly, sort]);

  const qc = useQueryClient();
  const create = useMutation({
    mutationFn: () => {
      return api.createJob({
        lang,
        version,
        max,
        concurrency,
        model: selectedModel || undefined,
        md5: mode === 'md5',
        files: files?.length ? files : undefined,
      });
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['jobs'] });
      onClose();
    },
    onError: (err) => setError(err.message),
  });

  const translatable = langs.filter((l) => l !== 'en');
  const selectedModelInfo = selectedModel
    ? models?.find((m) => m.id === selectedModel)
    : null;

  return (
    <div
      className="dialog-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="dialog dialog-wide">
        <h3>Start Translation Job</h3>

        {error && <div className="dialog-error">{error}</div>}

        {/* Mode toggle */}
        <div className="dialog-mode-toggle">
          <button
            type="button"
            className={mode === 'file' ? 'active' : ''}
            onClick={() => {
              setMode('file');
              setMax(files?.length || 50);
            }}
          >
            📄 File mode
          </button>
          <button
            type="button"
            className={mode === 'md5' ? 'active' : ''}
            onClick={() => {
              setMode('md5');
              setMax(10);
            }}
          >
            🔑 MD5 mode
          </button>
        </div>
        <div className="dialog-mode-hint">
          {mode === 'file'
            ? 'Translate file by file. --max = number of files.'
            : 'Batch translate uncached keys from DB. --max = API calls (~100 keys each).'}
        </div>

        {/* Job config */}
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
            <label>{mode === 'file' ? 'Max files' : 'Max API calls'}</label>
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

        {/* Model mode toggle */}
        <div className="dialog-section-hdr">
          <span>Model</span>
        </div>

        {/* Filters */}
        <div className="model-filters">
          <input
            type="text"
            placeholder="Search models..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="model-search-input"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
          >
            <option value="context-desc">Context ↓</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
            <option value="name">Name A-Z</option>
          </select>
          <label className="model-filter-check">
            <input
              type="checkbox"
              checked={freeOnly}
              onChange={(e) => setFreeOnly(e.target.checked)}
            />
            Free
          </label>
          <label
            className="model-filter-check"
            title="Structured JSON output — required for best translation quality"
          >
            <input
              type="checkbox"
              checked={jsonOnly}
              onChange={(e) => setJsonOnly(e.target.checked)}
            />
            JSON mode
          </label>
        </div>

        {/* Context slider */}
        <div className="model-slider-row">
          <span className="model-slider-label">
            Context ≥ {minCtx === 0 ? 'any' : ctxLabel(minCtx)}
          </span>
          <input
            type="range"
            min={0}
            max={CTX_STEPS.length - 1}
            value={ctxSlider}
            onChange={(e) => setCtxSlider(Number(e.target.value))}
            className="model-slider"
          />
        </div>

        {/* Model list */}
        <div className="model-list">
          <div
            className={`model-item${selectedModel === '' ? ' active' : ''}`}
            onClick={() => setSelectedModel('')}
          >
            <span className="model-name">Default (from .env)</span>
          </div>
          {modelsLoading && (
            <div className="model-item disabled">Loading models...</div>
          )}
          {filtered.map((m) => (
            <ModelRow
              key={m.id}
              m={m}
              mode="single"
              active={selectedModel === m.id}
              onClick={() => setSelectedModel(m.id)}
            />
          ))}
          {!modelsLoading && filtered.length === 0 && (
            <div className="model-item disabled">No models match filters</div>
          )}
        </div>
        <div className="model-count">
          {filtered.length} model{filtered.length !== 1 ? 's' : ''}
          {models ? ` / ${models.length} total` : ''}
        </div>

        {/* Selected model info */}
        {selectedModelInfo && (
          <div className="model-info">
            <strong>{selectedModelInfo.name}</strong>
            {selectedModelInfo.isFree && (
              <span className="badge-free">FREE</span>
            )}
            {selectedModelInfo.supportsJson && (
              <span className="badge-json">JSON</span>
            )}
            <br />
            In: {formatPrice(selectedModelInfo.promptPrice)}/M · Out:{' '}
            {formatPrice(selectedModelInfo.completionPrice)}/M · Ctx:{' '}
            {ctxLabel(selectedModelInfo.contextLength)}
            {selectedModelInfo.maxOutput > 0 &&
              ` · Max out: ${ctxLabel(selectedModelInfo.maxOutput)}`}
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

function ModelRow({
  m,
  mode,
  active,
  onClick,
}: {
  m: Model;
  mode: 'single' | 'rotate';
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`model-item${active ? ' active' : ''}`} onClick={onClick}>
      {mode === 'rotate' && (
        <input
          type="checkbox"
          checked={active}
          readOnly
          className="model-check"
        />
      )}
      <span className="model-name">
        {m.isFree && '🆓 '}
        {m.name}
      </span>
      <span className="model-meta">
        {m.supportsJson ? '✓ ' : ''}
        {ctxLabel(m.contextLength)} ·{' '}
        {m.isFree
          ? 'Free'
          : `${formatPrice(m.promptPrice)}/${formatPrice(m.completionPrice)}`}
      </span>
    </div>
  );
}
