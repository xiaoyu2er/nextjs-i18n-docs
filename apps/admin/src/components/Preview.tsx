import { useQuery } from '@tanstack/react-query';
import { useMemo, useRef, useState } from 'react';
import { api } from '../lib/api';
import { FLAGS } from '../lib/flags';

interface Heading {
  id: string;
  level: number;
  text: string;
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function parseContent(content: string) {
  const lines = content.split('\n');
  const headings: Heading[] = [];
  const rendered: Array<{ html: string; isHeading: boolean; id?: string }> = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(/^(#{1,6})\s+(.+)/);
    if (m) {
      const level = m[1].length;
      const text = m[2]
        .replace(/\[.*?\]\(.*?\)/g, '')
        .replace(/[`*[\]]/g, '')
        .trim();
      const id = `h-${i}`;
      headings.push({ id, level, text });
      rendered.push({ html: escapeHtml(line), isHeading: true, id });
    } else {
      rendered.push({ html: escapeHtml(line), isHeading: false });
    }
  }

  return { headings, rendered };
}

interface Props {
  version: string;
  lang: string;
  file: string;
}

export function Preview({ version, lang, file }: Props) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const tabs = lang === 'en' ? (['en'] as const) : (['en', lang] as const);
  const [viewLang, setViewLang] = useState(lang === 'en' ? 'en' : lang);

  // Reset tab when lang changes
  const prevLangRef = useRef(lang);
  if (prevLangRef.current !== lang) {
    prevLangRef.current = lang;
    setViewLang(lang === 'en' ? 'en' : lang);
  }

  const { data, isLoading } = useQuery({
    queryKey: ['content', version, viewLang, file],
    queryFn: () => api.fileContent(version, viewLang, file),
  });

  const { headings, rendered } = useMemo(
    () => parseContent(data?.content || ''),
    [data?.content],
  );

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="preview-wrap">
      <div className="preview-hdr">
        <span
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {file}
        </span>
        <span className="spacer" />
        <div className="preview-tabs">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              className={`preview-tab${t === viewLang ? ' active' : ''}`}
              onClick={() => setViewLang(t)}
            >
              {FLAGS[t]} {t}
            </button>
          ))}
        </div>
      </div>

      {headings.length > 0 && (
        <div className="preview-toc">
          {headings.map((h) => (
            <a
              key={h.id}
              href={`#${h.id}`}
              className={`h${h.level}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(h.id);
              }}
            >
              {'#'.repeat(h.level)} {h.text}
            </a>
          ))}
        </div>
      )}

      <div className="preview-body" ref={bodyRef}>
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          rendered.map((line, i) => (
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
          ))
        )}
      </div>
    </div>
  );
}
