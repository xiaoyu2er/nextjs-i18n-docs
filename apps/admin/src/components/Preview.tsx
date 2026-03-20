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

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(/^(#{1,6})\s+(.+)/);
    if (m) {
      const level = m[1].length;
      const text = m[2]
        .replace(/\[.*?\]\(.*?\)/g, '')
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

type ViewMode = 'split' | 'en' | 'lang';

interface Props {
  version: string;
  lang: string;
  file: string;
}

export function Preview({ version, lang, file }: Props) {
  const enRef = useRef<HTMLPreElement>(null);
  const transRef = useRef<HTMLPreElement>(null);
  const syncing = useRef(false);

  const isEn = lang === 'en';
  const [mode, setMode] = useState<ViewMode>('split');

  // Reset to split when switching language
  const prevLangRef = useRef(lang);
  if (prevLangRef.current !== lang) {
    prevLangRef.current = lang;
    setMode(isEn ? 'en' : 'split');
  }

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

  function scrollToBoth(enId: string, idx: number) {
    if (showEn) {
      const enEl = document.getElementById(enId);
      if (enEl) enEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (showTrans && trans.headings[idx]) {
      const trEl = document.getElementById(trans.headings[idx].id);
      if (trEl) trEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Use EN headings for TOC (always available), fall back to trans for lang-only
  const tocHeadings = showEn ? en.headings : trans.headings;

  return (
    <div className="preview-wrap">
      {/* Header */}
      <div className="preview-hdr">
        <span className="preview-filename">{file}</span>
        {!isEn && (
          <div className="preview-toggle">
            <button
              type="button"
              className={mode === 'split' ? 'active' : ''}
              onClick={() => setMode('split')}
              title="Side by side"
            >
              ◫
            </button>
            <button
              type="button"
              className={mode === 'en' ? 'active' : ''}
              onClick={() => setMode('en')}
              title="EN only"
            >
              {FLAGS.en}
            </button>
            <button
              type="button"
              className={mode === 'lang' ? 'active' : ''}
              onClick={() => setMode('lang')}
              title={`${lang} only`}
            >
              {FLAGS[lang]}
            </button>
          </div>
        )}
      </div>

      {/* TOC */}
      {tocHeadings.length > 0 && (
        <div className="preview-toc">
          {tocHeadings.map((h, idx) => (
            <a
              key={h.id}
              href={`#${h.id}`}
              className={`h${h.level}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToBoth(h.id, idx);
              }}
            >
              {'#'.repeat(h.level)} {h.text}
            </a>
          ))}
        </div>
      )}

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
  );
}
