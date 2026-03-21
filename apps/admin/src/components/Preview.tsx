import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { api, type FileNode } from '../lib/api';
import { FLAGS } from '../lib/flags';

interface Heading {
  id: string;
  level: number;
  text: string;
}

/** A block of consecutive lines, optionally linked to a node */
interface Block {
  lines: string[];
  headingId?: string;
  headingLevel?: number;
  headingText?: string;
  md5?: string;
  nodeType?: string;
  hasTranslation?: boolean;
  anchorId?: string;
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function extractHeading(line: string, nextLine?: string) {
  const m = line.match(/^(#{1,6})\s+(.+)/);
  if (m) {
    const text = m[2]
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/\[]\(#[^)]*\)/g, '')
      .replace(/[`*[\]]/g, '')
      .trim();
    return { level: m[1].length, text };
  }
  if (nextLine && /^[=-]{2,}\s*$/.test(nextLine) && line.trim().length > 0) {
    const text = line
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/[`*[\]]/g, '')
      .trim();
    return { level: nextLine.startsWith('=') ? 1 : 2, text };
  }
  return null;
}

/**
 * Parse content into blocks. Each block is either:
 * - A node (has md5, may span multiple lines)
 * - Gap lines between nodes (no md5)
 */
function parseContent(content: string, prefix: string, nodes?: FileNode[]) {
  const lines = content.split('\n');
  const headings: Heading[] = [];
  const blocks: Block[] = [];

  // Build sorted node list by line number
  const sortedNodes = nodes ? [...nodes].sort((a, b) => a.line - b.line) : [];

  // Find node boundaries: each node starts at its line and ends before the next node
  // (or at the end of content)
  const nodeStarts = sortedNodes.map((n) => n.line - 1); // 0-indexed
  const nodeMap = new Map<number, FileNode>(); // 0-indexed start → node
  for (let i = 0; i < sortedNodes.length; i++) {
    nodeMap.set(sortedNodes[i].line - 1, sortedNodes[i]);
  }

  // Handle frontmatter specially
  let fmEnd = 0;
  if (lines[0]?.trim() === '---') {
    for (let j = 1; j < lines.length; j++) {
      if (lines[j].trim() === '---') {
        fmEnd = j + 1;
        break;
      }
    }
  }

  if (fmEnd > 0) {
    const fmNode = sortedNodes.find(
      (n) => n.type === 'frontmatter' || n.type === 'heading',
    );
    const block: Block = {
      lines: lines.slice(0, fmEnd),
    };
    if (fmNode && fmNode.line <= 2) {
      block.md5 = fmNode.key;
      block.nodeType = fmNode.type;
      block.hasTranslation = !!fmNode.translation;
      block.anchorId = `${prefix}-n-${fmNode.key.slice(0, 8)}`;
    }
    blocks.push(block);
  }

  // Process remaining lines
  let i = fmEnd;
  while (i < lines.length) {
    const node = nodeMap.get(i);

    if (node) {
      // Find end of this node: next node start, or scan for empty line boundary
      const nodeIdx = nodeStarts.indexOf(i);
      const nextNodeStart =
        nodeIdx + 1 < nodeStarts.length
          ? nodeStarts[nodeIdx + 1]
          : lines.length;

      // Node spans from i to nextNodeStart (or until content ends)
      const blockLines = lines.slice(i, nextNodeStart);
      const block: Block = {
        lines: blockLines,
        md5: node.key,
        nodeType: node.type,
        hasTranslation: !!node.translation,
        anchorId: `${prefix}-n-${node.key.slice(0, 8)}`,
      };

      // Check for heading in first line
      const h = extractHeading(blockLines[0], blockLines[1]);
      if (h) {
        const hId = `${prefix}-h-${i}`;
        block.headingId = hId;
        block.headingLevel = h.level;
        block.headingText = h.text;
        headings.push({ id: hId, level: h.level, text: h.text });
      }

      blocks.push(block);
      i = nextNodeStart;
    } else {
      // Gap lines (not part of any node)
      const gapStart = i;
      while (i < lines.length && !nodeMap.has(i)) {
        // Still check for headings in gap lines
        const h = extractHeading(lines[i], lines[i + 1]);
        if (h) {
          const hId = `${prefix}-h-${i}`;
          headings.push({ id: hId, level: h.level, text: h.text });
        }
        i++;
      }
      blocks.push({ lines: lines.slice(gapStart, i) });
    }
  }

  return { headings, blocks };
}

function ContentBody({
  blocks,
  bodyRef,
  showGutter,
  highlightMd5,
}: {
  blocks: Block[];
  bodyRef: React.RefObject<HTMLDivElement | null>;
  showGutter?: boolean;
  highlightMd5?: string | null;
}) {
  if (!showGutter) {
    return (
      <pre
        className="preview-body"
        ref={bodyRef as unknown as React.RefObject<HTMLPreElement>}
      >
        {blocks.map((block, bi) => (
          <span key={block.anchorId ?? `b-${bi}`}>
            {block.lines.map((line, li) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static line order
              <span key={`${bi}-${li}`}>
                {block.headingId && li === 0 ? (
                  <span className="hl" id={block.headingId}>
                    {escapeHtml(line)}
                  </span>
                ) : (
                  <span id={li === 0 ? block.anchorId : undefined}>
                    {escapeHtml(line)}
                  </span>
                )}
                {'\n'}
              </span>
            ))}
          </span>
        ))}
      </pre>
    );
  }

  return (
    <div className="preview-body-gutter" ref={bodyRef}>
      {blocks.map((block, bi) => {
        const isHighlighted = block.md5 && block.md5 === highlightMd5;
        return (
          <div
            key={block.anchorId ?? `b-${bi}`}
            className={`gutter-row${isHighlighted ? ' line-highlight' : ''}`}
            id={block.anchorId}
          >
            <span className="gutter-cell">
              {block.md5 && (
                <code
                  className={`gutter-md5 ${block.hasTranslation ? 'done' : 'miss'}`}
                  title={`${block.nodeType} · ${block.md5}`}
                >
                  {block.md5.slice(0, 6)}
                </code>
              )}
            </span>
            <pre className="content-cell">
              {block.lines.map((line, li) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static line order
                <span key={li}>
                  {block.headingId && li === 0 ? (
                    <span className="hl" id={block.headingId}>
                      {escapeHtml(line)}
                    </span>
                  ) : (
                    <span>{escapeHtml(line)}</span>
                  )}
                  {'\n'}
                </span>
              ))}
            </pre>
          </div>
        );
      })}
    </div>
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
    () => parseContent(enData?.content || '', 'en', nodes ?? undefined),
    [enData?.content, nodes],
  );
  const trans = useMemo(
    () => parseContent(transData?.content || '', 'tr', nodes ?? undefined),
    [transData?.content, nodes],
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

  function scrollToNode(md5: string) {
    setHighlightMd5(md5);
    const short = md5.slice(0, 8);
    if (showEnPane) {
      const el = document.getElementById(`en-n-${short}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (showTransPane) {
      const el = document.getElementById(`tr-n-${short}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setTimeout(() => setHighlightMd5(null), 3000);
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
  const showGutter = showNodes && !!nodes;

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
              <ContentBody
                blocks={en.blocks}
                bodyRef={enRef}
                showGutter={showGutter}
                highlightMd5={highlightMd5}
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
            {transData ? (
              <ContentBody
                blocks={trans.blocks}
                bodyRef={transRef}
                showGutter={showGutter}
                highlightMd5={highlightMd5}
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
                      className={`${n.translation ? 'translated' : 'missing'} ${expandedNode === n.key ? 'expanded' : ''} ${highlightMd5 === n.key ? 'highlighted' : ''}`}
                      onClick={() => {
                        setExpandedNode(expandedNode === n.key ? null : n.key);
                        scrollToNode(n.key);
                      }}
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
