import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { api, type FileBlock } from '../lib/api';
import { FLAGS } from '../lib/flags';

interface Heading {
  id: string;
  level: number;
  text: string;
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function extractHeading(text: string, prefix: string, idx: number) {
  const firstLine = text.split('\n')[0];
  const m = firstLine.match(/^(#{1,6})\s+(.+)/);
  if (m) {
    const clean = m[2]
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/\[]\(#[^)]*\)/g, '')
      .replace(/[`*[\]]/g, '')
      .trim();
    return { id: `${prefix}-h-${idx}`, level: m[1].length, text: clean };
  }
  return null;
}

/** Extract headings from blocks */
function getHeadings(blocks: FileBlock[], prefix: string): Heading[] {
  const headings: Heading[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    if (b.type === 'heading' || b.type === 'gap') {
      const h = extractHeading(b.source, prefix, i);
      if (h) headings.push(h);
    }
  }
  return headings;
}

function truncate(s: string, max: number) {
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

/** Render a single pane (EN or translated) from blocks */
function BlockPane({
  blocks,
  side,
  showGutter,
  highlightMd5,
  paneRef,
}: {
  blocks: FileBlock[];
  side: 'source' | 'translation';
  showGutter: boolean;
  highlightMd5: string | null;
  paneRef: React.RefObject<HTMLDivElement | null>;
}) {
  if (!showGutter) {
    // Simple pre without gutter
    return (
      <pre
        className="preview-body"
        ref={paneRef as unknown as React.RefObject<HTMLPreElement>}
      >
        {blocks.map((block, i) => {
          const text =
            side === 'translation' && block.translation != null
              ? block.translation
              : block.source;
          const h = extractHeading(
            block.source,
            side === 'source' ? 'en' : 'tr',
            i,
          );
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: static block order
            <span key={i}>
              {h ? (
                <span className="hl" id={h.id}>
                  {escapeHtml(text)}
                </span>
              ) : (
                <span>{escapeHtml(text)}</span>
              )}
            </span>
          );
        })}
      </pre>
    );
  }

  // Gutter layout: each block is a row
  const prefix = side === 'source' ? 'en' : 'tr';
  return (
    <div className="preview-body-gutter" ref={paneRef}>
      {blocks.map((block, i) => {
        const text =
          side === 'translation' && block.translation != null
            ? block.translation
            : block.source;
        const isHighlighted = block.md5 && block.md5 === highlightMd5;
        const h = extractHeading(block.source, prefix, i);
        const anchorId = block.md5
          ? `${prefix}-n-${block.md5.slice(0, 8)}`
          : undefined;

        return (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: static block order
            key={i}
            className={`gutter-row${isHighlighted ? ' line-highlight' : ''}`}
            id={anchorId}
          >
            <span className="gutter-cell">
              {block.md5 && (
                <code
                  className={`gutter-md5 ${block.translation != null ? 'done' : 'miss'}`}
                  title={`${block.type} · ${block.md5}`}
                >
                  {block.md5.slice(0, 6)}
                </code>
              )}
            </span>
            <pre className="content-cell">
              {h ? (
                <span className="hl" id={h.id}>
                  {escapeHtml(text)}
                </span>
              ) : (
                <span>{escapeHtml(text)}</span>
              )}
            </pre>
          </div>
        );
      })}
    </div>
  );
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
  const enRef = useRef<HTMLDivElement>(null);
  const transRef = useRef<HTMLDivElement>(null);
  const syncing = useRef(false);

  const isEn = lang === 'en';
  const mode = isEn ? 'en' : viewMode;

  const [expandedNode, setExpandedNode] = useState<string | null>(null);
  const [highlightMd5, setHighlightMd5] = useState<string | null>(null);
  const [nodeFilter, setNodeFilter] = useState<
    'all' | 'missing' | 'translated'
  >('all');

  // Single API call returns both EN source and translations as blocks
  const { data: blocksData } = useQuery({
    queryKey: ['fileBlocks', version, lang, file],
    queryFn: () => api.fileBlocks(version, lang, file),
  });

  const blocks = blocksData?.blocks ?? [];

  const enHeadings = useMemo(() => getHeadings(blocks, 'en'), [blocks]);
  const transHeadings = useMemo(() => getHeadings(blocks, 'tr'), [blocks]);

  // Node stats from blocks
  const translatableBlocks = useMemo(
    () => blocks.filter((b) => b.md5),
    [blocks],
  );
  const translatedCount = translatableBlocks.filter(
    (b) => b.translation != null,
  ).length;
  const totalCount = translatableBlocks.length;

  const filteredNodes = useMemo(() => {
    if (nodeFilter === 'missing')
      return translatableBlocks.filter((b) => b.translation == null);
    if (nodeFilter === 'translated')
      return translatableBlocks.filter((b) => b.translation != null);
    return translatableBlocks;
  }, [translatableBlocks, nodeFilter]);

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
    if (showEnPane && enHeadings[idx]) {
      document
        .getElementById(enHeadings[idx].id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (showTransPane && transHeadings[idx]) {
      document
        .getElementById(transHeadings[idx].id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function scrollToNode(md5: string) {
    setHighlightMd5(md5);
    const short = md5.slice(0, 8);
    if (showEnPane) {
      document
        .getElementById(`en-n-${short}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (showTransPane) {
      document
        .getElementById(`tr-n-${short}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setTimeout(() => setHighlightMd5(null), 3000);
  }

  const primaryHeadings = showTransPane ? transHeadings : enHeadings;
  const tocHeadings = primaryHeadings.length > 0 ? primaryHeadings : enHeadings;

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

  const showGutter = showNodes && blocks.length > 0;

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
            title="Toggle TOC"
          >
            ☰
          </button>
          {!isEn && (
            <button
              type="button"
              className={showNodes ? 'active' : ''}
              onClick={onToggleNodes}
              title="Toggle nodes"
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
            {blocks.length > 0 ? (
              <BlockPane
                blocks={blocks}
                side="source"
                showGutter={showGutter}
                highlightMd5={highlightMd5}
                paneRef={enRef}
              />
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
            {blocks.length > 0 ? (
              <BlockPane
                blocks={blocks}
                side="translation"
                showGutter={showGutter}
                highlightMd5={highlightMd5}
                paneRef={transRef}
              />
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
            {blocks.length === 0 ? (
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
                    <th className="col-source">EN Source</th>
                    <th className="col-trans">Translation</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredNodes.map((n) => (
                    <tr
                      key={n.md5}
                      className={`${n.translation != null ? 'translated' : 'missing'} ${expandedNode === n.md5 ? 'expanded' : ''} ${highlightMd5 === n.md5 ? 'highlighted' : ''}`}
                      onClick={() => {
                        setExpandedNode(expandedNode === n.md5 ? null : n.md5);
                        if (n.md5) scrollToNode(n.md5);
                      }}
                    >
                      <td className="col-status">
                        {n.translation != null ? '✅' : '❌'}
                      </td>
                      <td className="col-type">
                        <span className="type-badge">{n.type}</span>
                      </td>
                      <td className="col-md5">
                        <code title={n.md5 ?? ''}>{n.md5?.slice(0, 8)}</code>
                      </td>
                      <td className="col-source">
                        <div className="cell-text">
                          {expandedNode === n.md5
                            ? n.source
                            : truncate(n.source.replace(/\n/g, ' '), 120)}
                        </div>
                      </td>
                      <td className="col-trans">
                        {n.translation != null ? (
                          <div className="cell-text">
                            {expandedNode === n.md5
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
