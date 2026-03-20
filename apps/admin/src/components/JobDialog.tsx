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
  if (price < 0.01) return `$${price.toFixed(4)}/M`;
  return `$${price.toFixed(2)}/M`;
}

function ctxLabel(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  return `${(n / 1000).toFixed(0)}k`;
}

type PriceFilter = 'all' | 'free' | 'cheap' | 'mid';
type CtxFilter = 'all' | '32k' | '64k' | '128k';

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
  const [search, setSearch] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [priceFilter, setPriceFilter] = useState<PriceFilter>('all');
  const [ctxFilter, setCtxFilter] = useState<CtxFilter>('all');
  const [jsonOnly, setJsonOnly] = useState(false);
  const [providerFilter, setProviderFilter] = useState('all');

  const { data: models, isLoading: modelsLoading } = useQuery({
    queryKey: ['models'],
    queryFn: api.models,
    staleTime: 5 * 60 * 1000,
  });

  // Unique providers
  const providers = useMemo(() => {
    if (!models) return [];
    const set = new Set(models.map((m) => m.provider));
    return [...set].sort();
  }, [models]);

  const filtered = useMemo(() => {
    if (!models) return [];
    return models.filter((m) => {
      // Search
      if (search) {
        const q = search.toLowerCase();
        if (
          !m.id.toLowerCase().includes(q) &&
          !m.name.toLowerCase().includes(q)
        )
          return false;
      }
      // Price
      if (priceFilter === 'free' && !m.isFree) return false;
      if (priceFilter === 'cheap' && m.promptPrice > 0.5) return false;
      if (priceFilter === 'mid' && m.promptPrice > 5) return false;
      // Context
      if (ctxFilter === '32k' && m.contextLength < 32_000) return false;
      if (ctxFilter === '64k' && m.contextLength < 64_000) return false;
      if (ctxFilter === '128k' && m.contextLength < 128_000) return false;
      // JSON support
      if (jsonOnly && !m.supportsJson) return false;
      // Provider
      if (providerFilter !== 'all' && m.provider !== providerFilter)
        return false;
      return true;
    });
  }, [models, search, priceFilter, ctxFilter, jsonOnly, providerFilter]);

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
  const selected = models?.find((m) => m.id === model);

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

        {/* Model section */}
        <label>Model</label>

        {/* Filters row */}
        <div className="model-filters">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="model-search-input"
          />
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value as PriceFilter)}
          >
            <option value="all">Any price</option>
            <option value="free">🆓 Free only</option>
            <option value="cheap">≤$0.50/M</option>
            <option value="mid">≤$5/M</option>
          </select>
          <select
            value={ctxFilter}
            onChange={(e) => setCtxFilter(e.target.value as CtxFilter)}
          >
            <option value="all">Any context</option>
            <option value="32k">≥32k</option>
            <option value="64k">≥64k</option>
            <option value="128k">≥128k</option>
          </select>
          <select
            value={providerFilter}
            onChange={(e) => setProviderFilter(e.target.value)}
          >
            <option value="all">All providers</option>
            {providers.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <label className="model-filter-check">
            <input
              type="checkbox"
              checked={jsonOnly}
              onChange={(e) => setJsonOnly(e.target.checked)}
            />
            JSON
          </label>
        </div>

        {/* Model list */}
        <div className="model-list">
          <div
            className={`model-item${model === '' ? ' active' : ''}`}
            onClick={() => setModel('')}
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
              active={model === m.id}
              onClick={() => setModel(m.id)}
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
        {selected && (
          <div className="model-info">
            <strong>{selected.name}</strong>
            {selected.isFree && <span className="badge-free">FREE</span>}
            {selected.supportsJson && <span className="badge-json">JSON</span>}
            <br />
            In: {formatPrice(selected.promptPrice)} · Out:{' '}
            {formatPrice(selected.completionPrice)} · Ctx:{' '}
            {ctxLabel(selected.contextLength)}
            {selected.maxOutput > 0 &&
              ` · Max out: ${ctxLabel(selected.maxOutput)}`}
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
  active,
  onClick,
}: {
  m: Model;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`model-item${active ? ' active' : ''}`} onClick={onClick}>
      <span className="model-name">
        {m.isFree && '🆓 '}
        {m.name}
      </span>
      <span className="model-meta">
        {m.supportsJson && '📋 '}
        {ctxLabel(m.contextLength)} ·{' '}
        {m.isFree
          ? 'Free'
          : `$${m.promptPrice.toFixed(2)}/$${m.completionPrice.toFixed(2)}`}
      </span>
    </div>
  );
}
