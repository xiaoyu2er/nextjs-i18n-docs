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

export type ViewMode = 'split' | 'en' | 'lang';

interface Props {
  version: string;
  lang: string;
  file: string;
  viewMode: ViewMode;
  onViewMode: (m: ViewMode) => void;
  showToc: boolean;
  onToggleToc: () => void;
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
  onClose,
}: Props) {
  const enRef = useRef<HTMLPreElement>(null);
  const transRef = useRef<HTMLPreElement>(null);
  const syncing = useRef(false);

  const isEn = lang === 'en';
  const mode = isEn ? 'en' : viewMode;

  const [expandedNode, setExpandedNode] = useState<string | null>(null);

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

  return (
    <div className="preview-wrap">
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
        {showToc && (tocHeadings.length > 0 || nodes) && (
          <div className="preview-toc">
            {tocHeadings.length > 0 && (
              <>
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
              </>
            )}
            {nodes && !isEn && (
              <div className="preview-nodes">
                <div className="preview-toc-title">
                  Nodes ({nodes.filter((n) => n.translation).length}/
                  {nodes.length})
                </div>
                {nodes.map((n) => (
                  <div
                    key={n.key}
                    className={`node-item ${n.translation ? 'translated' : 'missing'} ${expandedNode === n.key ? 'expanded' : ''}`}
                    onClick={() =>
                      setExpandedNode(expandedNode === n.key ? null : n.key)
                    }
                    onKeyDown={() => {}}
                  >
                    <div className="node-summary">
                      <span className="node-status">
                        {n.translation ? '✅' : '❌'}
                      </span>
                      <span className="node-type">{n.type}</span>
                      <code className="node-md5">{n.key.slice(0, 8)}</code>
                    </div>
                    {expandedNode === n.key && (
                      <div className="node-detail">
                        <div className="node-source">
                          <span className="node-label">EN:</span>
                          <pre>
                            {n.source.slice(0, 200)}
                            {n.source.length > 200 ? '…' : ''}
                          </pre>
                        </div>
                        {n.translation && (
                          <div className="node-trans">
                            <span className="node-label">{lang}:</span>
                            <pre>
                              {n.translation.slice(0, 200)}
                              {n.translation.length > 200 ? '…' : ''}
                            </pre>
                          </div>
                        )}
                        <div className="node-meta">
                          MD5: <code>{n.key}</code> · L{n.line}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
