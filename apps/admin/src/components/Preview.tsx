import { useQuery } from '@tanstack/react-query';
import { useMemo, useRef, useState } from 'react';
import { api, type FileBlock } from '../lib/api';
import { FLAGS } from '../lib/flags';

interface Heading {
  id: string;
  level: number;
  text: string;
}

function extractHeading(text: string, prefix: string, idx: number) {
  const firstLine = text.split('\n')[0];
  const m = firstLine.match(/^(#{1,6})\s+(.+)/);
  if (!m) return null;
  const clean = m[2]
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[]\(#[^)]*\)/g, '')
    .replace(/[`*[\]]/g, '')
    .trim();
  return { id: `${prefix}-h-${idx}`, level: m[1].length, text: clean };
}

function getHeadings(
  blocks: FileBlock[],
  prefix: string,
  useTranslation = false,
): Heading[] {
  const headings: Heading[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const text =
      useTranslation && blocks[i].translation != null
        ? (blocks[i].translation as string)
        : blocks[i].source;
    const h = extractHeading(text, prefix, i);
    if (h) headings.push(h);
  }
  return headings;
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
  const bodyRef = useRef<HTMLDivElement>(null);
  const isEn = lang === 'en';
  const mode = isEn ? 'en' : viewMode;

  const [highlightMd5, setHighlightMd5] = useState<string | null>(null);

  const { data: blocksData } = useQuery({
    queryKey: ['fileBlocks', version, lang, file],
    queryFn: () => api.fileBlocks(version, lang, file),
  });

  const blocks = blocksData?.blocks ?? [];
  const showEnCol = mode === 'split' || mode === 'en';
  const showTransCol = !isEn && (mode === 'split' || mode === 'lang');

  const enHeadings = useMemo(() => getHeadings(blocks, 'b'), [blocks]);
  const transHeadings = useMemo(() => getHeadings(blocks, 'b', true), [blocks]);
  const headings = showTransCol ? transHeadings : enHeadings;
  const showGutter = showNodes && blocks.length > 0;

  // Stats
  const translatableBlocks = useMemo(
    () => blocks.filter((b) => b.md5),
    [blocks],
  );
  const translatedCount = translatableBlocks.filter(
    (b) => b.translation != null,
  ).length;
  const totalCount = translatableBlocks.length;

  function scrollToHeading(idx: number) {
    const h = headings[idx];
    if (h)
      document
        .getElementById(h.id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function _scrollToBlock(md5: string) {
    setHighlightMd5(md5);
    document
      .getElementById(`block-${md5.slice(0, 8)}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => setHighlightMd5(null), 3000);
  }

  // Build grid columns
  const cols: string[] = [];
  if (showGutter) cols.push('4.5rem');
  if (showEnCol) cols.push('1fr');
  if (showTransCol) cols.push('1fr');
  const gridCols = cols.join(' ');

  return (
    <div className="preview-wrap">
      {/* Header */}
      <div className="preview-hdr">
        <span className="preview-filename">{file}</span>
        {!isEn && totalCount > 0 && (
          <span className="preview-stats">
            {translatedCount}/{totalCount} (
            {Math.round((translatedCount / totalCount) * 100)}%)
          </span>
        )}
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
            <button
              type="button"
              className={showNodes ? 'active' : ''}
              onClick={onToggleNodes}
              title="Toggle MD5"
            >
              #
            </button>
          )}
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
        </div>
      </div>

      {/* Content */}
      <div className="preview-content-area">
        <div className="preview-body-blocks" ref={bodyRef}>
          {/* Column headers */}
          {showGutter && (
            <div
              className="block-header"
              style={{ gridTemplateColumns: gridCols }}
            >
              <span className="col-hdr gutter-hdr">MD5</span>
              {showEnCol && <span className="col-hdr">EN</span>}
              {showTransCol && <span className="col-hdr">{lang}</span>}
            </div>
          )}

          {blocks.length === 0 && (
            <div className="preview-loading">Loading...</div>
          )}

          {blocks.map((block, i) => {
            // Skip gap blocks (whitespace/comments between nodes)
            if (!block.md5 && showGutter) return null;

            const isHighlighted = block.md5 && block.md5 === highlightMd5;
            const h = extractHeading(block.source, 'b', i);
            const blockId = block.md5
              ? `block-${block.md5.slice(0, 8)}`
              : undefined;

            return (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: static block order
                key={i}
                id={blockId}
                className={`block-row${isHighlighted ? ' block-highlight' : ''}`}
                style={{ gridTemplateColumns: gridCols }}
              >
                {showGutter && (
                  <span className="block-gutter">
                    {block.md5 && (
                      <code
                        className={`gutter-md5 ${block.translation != null ? 'done' : 'miss'}`}
                        title={`${block.type} · ${block.md5}`}
                      >
                        {block.md5.slice(0, 6)}
                      </code>
                    )}
                  </span>
                )}
                {showEnCol && (
                  <pre
                    className={`block-cell${h ? ' block-heading' : ''}`}
                    id={h?.id}
                  >
                    {block.source}
                  </pre>
                )}
                {showTransCol && (
                  <pre
                    className={`block-cell${h ? ' block-heading' : ''}${block.md5 && block.translation == null ? ' block-missing' : ''}`}
                  >
                    {block.translation != null
                      ? block.translation
                      : block.source}
                  </pre>
                )}
              </div>
            );
          })}
        </div>

        {/* TOC */}
        {showToc && headings.length > 0 && (
          <div className="preview-toc">
            <div className="preview-toc-title">On this page</div>
            {headings.map((h, idx) => (
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
    </div>
  );
}
