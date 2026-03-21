import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { api } from '../lib/api';
import { FLAGS } from '../lib/flags';

interface Heading {
  id: string;
  level: number;
  text: string;
}

interface ParsedLine {
  html: string;
  isHeading: boolean;
  id?: string;
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function parseContent(content: string, prefix: string) {
  const lines = content.split('\n');
  const headings: Heading[] = [];
  const rendered: ParsedLine[] = [];

  // Skip YAML frontmatter
  let start = 0;
  if (lines[0]?.trim() === '---') {
    for (let j = 1; j < lines.length; j++) {
      if (lines[j].trim() === '---') {
        start = j + 1;
        break;
      }
    }
  }
  for (let i = 0; i < start; i++) {
    rendered.push({ html: escapeHtml(lines[i]), isHeading: false });
  }

  for (let i = start; i < lines.length; i++) {
    const line = lines[i];
    const nextLine = lines[i + 1];

    const m = line.match(/^(#{1,6})\s+(.+)/);
    const setext =
      !m && nextLine && /^[=-]{2,}\s*$/.test(nextLine) && line.trim().length > 0
        ? line
        : null;

    if (m || setext) {
      const level = m
        ? m[1].length
        : (nextLine as string).startsWith('=')
          ? 1
          : 2;
      const raw = m ? m[2] : (setext as string);
      const text = raw
        .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
        .replace(/\[]\(#[^)]*\)/g, '')
        .replace(/[`*[\]]/g, '')
        .trim();
      const id = `${prefix}-h-${i}`;
      headings.push({ id, level, text });
      rendered.push({ html: escapeHtml(line), isHeading: true, id });
    } else {
      rendered.push({ html: escapeHtml(line), isHeading: false });
    }
  }

  return { headings, rendered };
}

function ContentBody({
  rendered,
  bodyRef,
}: {
  rendered: ParsedLine[];
  bodyRef: React.RefObject<HTMLPreElement | null>;
}) {
  return (
    <pre className="preview-body" ref={bodyRef}>
      {rendered.map((line, i) => (
        <span key={line.id ?? i}>
          {line.isHeading ? (
            <span className="hl" id={line.id}>
              <span dangerouslySetInnerHTML={{ __html: line.html }} />
            </span>
          ) : (
            <span dangerouslySetInnerHTML={{ __html: line.html }} />
          )}
          {'\n'}
        </span>
      ))}
    </pre>
  );
}

function truncate(s: string, max: number) {
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

export type ViewMode = 'split' | 'en' | 'lang';

interface Props {
  version: string;
  lang: string;
  file: string;
  viewMode: ViewMode;
  onViewMode: (m: ViewMode) => void;
  showToc: boolean;
  onToggleToc: () => void;
  showNodes: boolean;
  onToggleNodes: () => void;
  onClose?: () => void;
}

export function Preview({
  version,
  lang,
  file,
  viewMode,
  onViewMode,
  showToc,
  onToggleToc,
  showNodes,
  onToggleNodes,
  onClose,
}: Props) {
  const enRef = useRef<HTMLPreElement>(null);
  const transRef = useRef<HTMLPreElement>(null);
  const syncing = useRef(false);

  const isEn = lang === 'en';
  const mode = isEn ? 'en' : viewMode;

  const [expandedNode, setExpandedNode] = useState<string | null>(null);
  const [nodeFilter, setNodeFilter] = useState<
    'all' | 'missing' | 'translated'
  >('all');

  const { data: enData } = useQuery({
    queryKey: ['content', version, 'en', file],
    queryFn: () => api.fileContent(version, 'en', file),
  });

  const { data: transData } = useQuery({
    queryKey: ['content', version, lang, file],
    queryFn: () => api.fileContent(version, lang, file),
    enabled: !isEn,
  });

  const { data: nodes } = useQuery({
    queryKey: ['fileDetail', version, lang, file],
    queryFn: () => api.fileDetail(version, lang, file),
    enabled: !isEn,
  });

  const en = useMemo(
    () => parseContent(enData?.content || '', 'en'),
    [enData?.content],
  );
  const trans = useMemo(
    () => parseContent(transData?.content || '', 'tr'),
    [transData?.content],
  );

  const filteredNodes = useMemo(() => {
    if (!nodes) return [];
    if (nodeFilter === 'missing') return nodes.filter((n) => !n.translation);
    if (nodeFilter === 'translated') return nodes.filter((n) => n.translation);
    return nodes;
  }, [nodes, nodeFilter]);

  const syncScroll = useCallback(
    (source: HTMLElement | null, target: HTMLElement | null) => {
      if (!source || !target || syncing.current) return;
      syncing.current = true;
      const ratio =
        source.scrollTop / (source.scrollHeight - source.clientHeight || 1);
      target.scrollTop =
        ratio * (target.scrollHeight - target.clientHeight || 1);
      requestAnimationFrame(() => {
        syncing.current = false;
      });
    },
    [],
  );

  useEffect(() => {
    if (mode !== 'split') return;
    const enEl = enRef.current;
    const trEl = transRef.current;
    if (!enEl || !trEl) return;

    const onEnScroll = () => syncScroll(enEl, trEl);
    const onTrScroll = () => syncScroll(trEl, enEl);
    enEl.addEventListener('scroll', onEnScroll, { passive: true });
    trEl.addEventListener('scroll', onTrScroll, { passive: true });
    return () => {
      enEl.removeEventListener('scroll', onEnScroll);
      trEl.removeEventListener('scroll', onTrScroll);
    };
  }, [syncScroll, mode]);

  const showEnPane = mode === 'split' || mode === 'en';
  const showTransPane = !isEn && (mode === 'split' || mode === 'lang');

  function scrollToHeading(idx: number) {
    if (showEnPane && en.headings[idx]) {
      const el = document.getElementById(en.headings[idx].id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (showTransPane && trans.headings[idx]) {
      const el = document.getElementById(trans.headings[idx].id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const primaryHeadings = showTransPane ? trans.headings : en.headings;
  const fallbackHeadings = showTransPane ? en.headings : trans.headings;
  const tocHeadings =
    primaryHeadings.length > 0 ? primaryHeadings : fallbackHeadings;

  const hasToc = showToc && tocHeadings.length > 0;
  const paneCount = [showEnPane, showTransPane].filter(Boolean).length;
  const gridCols =
    paneCount === 2
      ? hasToc
        ? '1fr 1fr 180px'
        : '1fr 1fr'
      : hasToc
        ? '1fr 180px'
        : '1fr';

  const translatedCount = nodes?.filter((n) => n.translation).length ?? 0;
  const totalCount = nodes?.length ?? 0;

  return (
    <div className={`preview-wrap${showNodes && !isEn ? ' with-nodes' : ''}`}>
      {/* Header */}
      <div className="preview-hdr">
        <span className="preview-filename">{file}</span>
        {onClose && (
          <button
            type="button"
            className="preview-close"
            onClick={onClose}
            title="Close preview"
          >
            ✕
          </button>
        )}
        <div className="preview-toggle">
          {!isEn && (
            <>
              <button
                type="button"
                className={mode === 'split' ? 'active' : ''}
                onClick={() => onViewMode('split')}
                title="Side by side"
              >
                ◫
              </button>
              <button
                type="button"
                className={mode === 'en' ? 'active' : ''}
                onClick={() => onViewMode('en')}
                title="EN only"
              >
                {FLAGS.en}
              </button>
              <button
                type="button"
                className={mode === 'lang' ? 'active' : ''}
                onClick={() => onViewMode('lang')}
                title={`${lang} only`}
              >
                {FLAGS[lang]}
              </button>
            </>
          )}
          <button
            type="button"
            className={showToc ? 'active' : ''}
            onClick={onToggleToc}
            title="Toggle table of contents"
          >
            ☰
          </button>
          {!isEn && (
            <button
              type="button"
              className={showNodes ? 'active' : ''}
              onClick={onToggleNodes}
              title="Toggle nodes panel"
            >
              🧩
            </button>
          )}
        </div>
      </div>

      {/* Content panels + TOC */}
      <div className="preview-split" style={{ gridTemplateColumns: gridCols }}>
        {showEnPane && (
          <div className="preview-pane">
            <div className="preview-pane-hdr">{FLAGS.en} EN (source)</div>
            {enData ? (
              <ContentBody rendered={en.rendered} bodyRef={enRef} />
            ) : (
              <div className="preview-body loading">Loading...</div>
            )}
          </div>
        )}
        {showTransPane && (
          <div className="preview-pane">
            <div className="preview-pane-hdr">
              {FLAGS[lang]} {lang}
            </div>
            {transData ? (
              <ContentBody rendered={trans.rendered} bodyRef={transRef} />
            ) : (
              <div className="preview-body loading">Loading...</div>
            )}
          </div>
        )}
        {showToc && tocHeadings.length > 0 && (
          <div className="preview-toc">
            <div className="preview-toc-title">On this page</div>
            {tocHeadings.map((h, idx) => (
              <a
                key={h.id}
                href={`#${h.id}`}
                className={`h${h.level}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHeading(idx);
                }}
              >
                {h.text}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Nodes panel (bottom) */}
      {showNodes && !isEn && (
        <div className="nodes-panel">
          <div className="nodes-panel-hdr">
            <span className="nodes-panel-title">
              🧩 Nodes — {translatedCount}/{totalCount} translated
              {totalCount > 0 && (
                <span className="nodes-pct">
                  {' '}
                  ({Math.round((translatedCount / totalCount) * 100)}%)
                </span>
              )}
            </span>
            <div className="nodes-filter">
              <button
                type="button"
                className={nodeFilter === 'all' ? 'active' : ''}
                onClick={() => setNodeFilter('all')}
              >
                All
              </button>
              <button
                type="button"
                className={nodeFilter === 'missing' ? 'active' : ''}
                onClick={() => setNodeFilter('missing')}
              >
                ❌ Missing ({totalCount - translatedCount})
              </button>
              <button
                type="button"
                className={nodeFilter === 'translated' ? 'active' : ''}
                onClick={() => setNodeFilter('translated')}
              >
                ✅ Done ({translatedCount})
              </button>
            </div>
          </div>
          <div className="nodes-table-wrap">
            {!nodes ? (
              <div style={{ padding: '1rem', color: 'var(--fg2)' }}>
                Loading nodes...
              </div>
            ) : (
              <table className="nodes-table">
                <thead>
                  <tr>
                    <th className="col-status" />
                    <th className="col-type">Type</th>
                    <th className="col-md5">MD5</th>
                    <th className="col-line">Line</th>
                    <th className="col-source">EN Source</th>
                    <th className="col-trans">Translation</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredNodes.map((n) => (
                    <tr
                      key={n.key}
                      className={`${n.translation ? 'translated' : 'missing'} ${expandedNode === n.key ? 'expanded' : ''}`}
                      onClick={() =>
                        setExpandedNode(expandedNode === n.key ? null : n.key)
                      }
                    >
                      <td className="col-status">
                        {n.translation ? '✅' : '❌'}
                      </td>
                      <td className="col-type">
                        <span className="type-badge">{n.type}</span>
                      </td>
                      <td className="col-md5">
                        <code title={n.key}>{n.key.slice(0, 8)}</code>
                      </td>
                      <td className="col-line">{n.line}</td>
                      <td className="col-source">
                        <div className="cell-text">
                          {expandedNode === n.key
                            ? n.source
                            : truncate(n.source.replace(/\n/g, ' '), 120)}
                        </div>
                      </td>
                      <td className="col-trans">
                        {n.translation ? (
                          <div className="cell-text">
                            {expandedNode === n.key
                              ? n.translation
                              : truncate(
                                  n.translation.replace(/\n/g, ' '),
                                  120,
                                )}
                          </div>
                        ) : (
                          <span className="cell-empty">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
