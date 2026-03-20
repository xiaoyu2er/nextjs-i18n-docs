export const FLAGS: Record<string, string> = {
  en: '🇺🇸',
  'zh-hans': '🇨🇳',
  'zh-hant': '🇭🇰',
  ja: '🇯🇵',
  ar: '🇸🇦',
  de: '🇩🇪',
  es: '🇪🇸',
  fr: '🇫🇷',
  ru: '🇷🇺',
};

export function pctColor(pct: number) {
  if (pct >= 95) return 'var(--green)';
  if (pct > 50) return 'var(--yellow)';
  return 'var(--red)';
}

export function statusIcon(pct: number) {
  if (pct >= 100) return '🟢';
  if (pct > 0) return '🟡';
  return '🔴';
}

export function getSection(file: string) {
  if (file.startsWith('docs/')) return 'docs';
  if (file.startsWith('blog/')) return 'blog';
  if (file.startsWith('learn/')) return 'learn';
  return 'other';
}
