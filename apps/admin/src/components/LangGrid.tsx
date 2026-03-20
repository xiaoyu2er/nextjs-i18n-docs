import type { StatusOverview } from '../lib/api';
import { FLAGS, pctColor } from '../lib/flags';
import { ProgressBar } from './ProgressBar';

interface Props {
  data: StatusOverview;
  version: string;
  selectedLang: string | null;
  onSelect: (lang: string) => void;
}

export function LangGrid({ data, version, selectedLang, onSelect }: Props) {
  const vData = data.data[version];
  if (!vData) return null;

  return (
    <div className="lang-grid">
      {data.langs.map((lang) => {
        if (lang === 'en') {
          return (
            <div
              key="en"
              className={`lang-card is-en${selectedLang === 'en' ? ' selected' : ''}`}
              onClick={() => onSelect('en')}
            >
              <div className="name">{FLAGS.en} en (source)</div>
              <div className="stats">{vData.enFileCount} files</div>
              <ProgressBar value={100} color="var(--green)" />
            </div>
          );
        }

        const ls = vData.langs[lang];
        if (!ls) return null;
        const pct =
          ls.totalNodes > 0 ? (ls.translatedNodes / ls.totalNodes) * 100 : 0;

        return (
          <div
            key={lang}
            className={`lang-card${selectedLang === lang ? ' selected' : ''}`}
            onClick={() => onSelect(lang)}
          >
            <div className="name">
              {FLAGS[lang]} {lang}
            </div>
            <div className="stats">
              {ls.translatedFiles}/{ls.totalFiles} files · {pct.toFixed(1)}%
            </div>
            <ProgressBar value={pct} color={pctColor(pct)} />
          </div>
        );
      })}
    </div>
  );
}
