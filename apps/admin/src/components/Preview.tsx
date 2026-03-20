import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo, useRef } from 'react';
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
  // Add frontmatter lines as-is
  for (let i = 0; i < start; i++) {
    rendered.push({ html: escapeHtml(lines[i]), isHeading: false });
  }

  for (let i = start; i < lines.length; i++) {
    const line = lines[i];
    const nextLine = lines[i + 1];

    // ATX heading: ## Text or ## Text[](#anchor)
    const m = line.match(/^(#{1,6})\s+(.+)/);
    // Setext heading: text followed by === or ---
    const setext =
      !m && nextLine && /^[=-]{2,}\s*$/.test(nextLine) && line.trim().length > 0
        ? line
        : null;

    if (m || setext) {
      const level = m ? m[1].length : nextLine.startsWith('=') ? 1 : 2;
      const raw = m ? m[2] : setext!;
      const text = raw
        .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // [text](url) → text
        .replace(/\[]\(#[^)]*\)/g, '') // [](#anchor) → ''
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
  onClose?: () => void;
}

export function Preview({
  version,
  lang,
  file,
  viewMode,
  onViewMode,
  onClose,
}: Props) {
  const enRef = useRef<HTMLPreElement>(null);
  const transRef = useRef<HTMLPreElement>(null);
  const syncing = useRef(false);

  const isEn = lang === 'en';
  const mode = isEn ? 'en' : viewMode;

  const { data: enData } = useQuery({
    queryKey: ['content', version, 'en', file],
    queryFn: () => api.fileContent(version, 'en', file),
  });

  const { data: transData } = useQuery({
    queryKey: ['content', version, lang, file],
    queryFn: () => api.fileContent(version, lang, file),
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

  // Synced scrolling (only in split mode)
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

  const showEn = mode === 'split' || mode === 'en';
  const showTrans = !isEn && (mode === 'split' || mode === 'lang');
  const isSingle = !showEn || !showTrans;

  function scrollToHeading(idx: number) {
    if (showEn && en.headings[idx]) {
      const el = document.getElementById(en.headings[idx].id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (showTrans && trans.headings[idx]) {
      const el = document.getElementById(trans.headings[idx].id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Show headings from visible content; fallback to the other if empty
  const primaryHeadings = showTrans ? trans.headings : en.headings;
  const fallbackHeadings = showTrans ? en.headings : trans.headings;
  const tocHeadings =
    primaryHeadings.length > 0 ? primaryHeadings : fallbackHeadings;

  return (
    <div className="preview-outer">
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
          {!isEn && (
            <div className="preview-toggle">
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
            </div>
          )}
        </div>

        {/* Content panels */}
        <div className={`preview-split${isSingle ? ' single' : ''}`}>
          {showEn && (
            <div className="preview-pane">
              <div className="preview-pane-hdr">{FLAGS.en} EN (source)</div>
              {enData ? (
                <ContentBody rendered={en.rendered} bodyRef={enRef} />
              ) : (
                <div className="preview-body loading">Loading...</div>
              )}
            </div>
          )}
          {showTrans && (
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
        </div>
      </div>

      {/* TOC — absolute right */}
      {tocHeadings.length > 0 && (
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
  );
}
