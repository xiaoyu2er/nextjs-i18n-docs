/**
 * Landing page HTML for the root URL.
 * Styled to match Next.js docs aesthetic with dark/light mode support.
 */
export function getLandingPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Next.js i18n Docs — Multilingual Next.js Documentation</title>
  <meta name="description" content="Next.js documentation translated into 9 languages. Read the docs in your native language." />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📚</text></svg>" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #000;
      --fg: #fff;
      --fg-muted: #888;
      --accent: #0070f3;
      --accent-light: #3291ff;
      --card-bg: #111;
      --card-border: #222;
      --card-hover: #1a1a1a;
    }

    @media (prefers-color-scheme: light) {
      :root {
        --bg: #fafafa;
        --fg: #111;
        --fg-muted: #666;
        --accent: #0070f3;
        --accent-light: #0761d1;
        --card-bg: #fff;
        --card-border: #eaeaea;
        --card-hover: #f5f5f5;
      }
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      background: var(--bg);
      color: var(--fg);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Nav */
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      border-bottom: 1px solid var(--card-border);
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }
    .nav-logo {
      font-size: 1.25rem;
      font-weight: 700;
      text-decoration: none;
      color: var(--fg);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .nav-links { display: flex; gap: 1.5rem; align-items: center; }
    .nav-links a {
      text-decoration: none;
      color: var(--fg-muted);
      font-size: 0.9rem;
      transition: color 0.15s;
    }
    .nav-links a:hover { color: var(--fg); }

    /* Hero */
    .hero {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 4rem 2rem;
      max-width: 900px;
      margin: 0 auto;
    }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.375rem 1rem;
      border-radius: 2rem;
      border: 1px solid var(--card-border);
      background: var(--card-bg);
      font-size: 0.85rem;
      color: var(--fg-muted);
      margin-bottom: 2rem;
    }
    .hero-badge strong { color: var(--fg); }
    h1 {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.03em;
      margin-bottom: 1.5rem;
    }
    h1 .gradient {
      background: linear-gradient(135deg, var(--accent) 0%, #7928ca 50%, #ff0080 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero p {
      font-size: 1.25rem;
      color: var(--fg-muted);
      line-height: 1.6;
      max-width: 600px;
      margin-bottom: 2.5rem;
    }
    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.15s;
    }
    .btn-primary {
      background: var(--fg);
      color: var(--bg);
    }
    .btn-primary:hover { opacity: 0.85; }
    .btn-secondary {
      border: 1px solid var(--card-border);
      color: var(--fg);
      background: var(--card-bg);
    }
    .btn-secondary:hover { border-color: var(--fg-muted); background: var(--card-hover); }
    .btn svg { width: 18px; height: 18px; }

    /* Cards */
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
      gap: 1rem;
      padding: 0 2rem 4rem;
      max-width: 1000px;
      margin: 0 auto;
      width: 100%;
    }
    .card {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1.5rem;
      border: 1px solid var(--card-border);
      border-radius: 0.75rem;
      background: var(--card-bg);
      text-decoration: none;
      color: var(--fg);
      transition: border-color 0.15s, background 0.15s;
    }
    .card:hover { border-color: var(--accent); background: var(--card-hover); }
    .card h3 { font-size: 1.1rem; font-weight: 600; }
    .card p { font-size: 0.9rem; color: var(--fg-muted); line-height: 1.5; }
    .card .arrow { color: var(--accent); font-size: 1.25rem; margin-top: auto; }

    /* Languages */
    .languages {
      text-align: center;
      padding: 2rem 2rem 4rem;
      max-width: 700px;
      margin: 0 auto;
    }
    .languages h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }
    .lang-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
    }
    .lang-tag {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: 1px solid var(--card-border);
      background: var(--card-bg);
      text-decoration: none;
      color: var(--fg);
      font-size: 0.9rem;
      transition: border-color 0.15s;
    }
    .lang-tag:hover { border-color: var(--accent); }

    /* Footer */
    footer {
      text-align: center;
      padding: 2rem;
      border-top: 1px solid var(--card-border);
      color: var(--fg-muted);
      font-size: 0.85rem;
    }
    footer a { color: var(--accent); text-decoration: none; }
    footer a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <nav>
    <a href="/" class="nav-logo">
      <svg width="20" height="20" viewBox="0 0 180 180" fill="none"><mask id="a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"><circle cx="90" cy="90" r="90" fill="black"/></mask><g mask="url(#a)"><circle cx="90" cy="90" r="90" fill="black"/><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#b)"/><rect x="115" y="54" width="12" height="72" fill="url(#c)"/></g><defs><linearGradient id="b" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="c" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>
      Next.js i18n Docs
    </a>
    <div class="nav-links">
      <a href="/docs/app/getting-started/installation/">Docs</a>
      <a href="/learn/">Learn</a>
      <a href="/blog/">Blog</a>
      <a href="https://github.com/nicepkg/nextjs-i18n-docs">GitHub</a>
    </div>
  </nav>

  <main class="hero">
    <div class="hero-badge">
      🌐 <strong>9 Languages</strong> — Community translated
    </div>
    <h1>
      Next.js Docs,<br/>
      <span class="gradient">in Your Language</span>
    </h1>
    <p>
      The complete Next.js documentation translated into 9 languages.
      Read about App Router, Pages Router, and more — in the language you think in.
    </p>
    <div class="hero-actions">
      <a href="/docs/app/getting-started/installation/" class="btn btn-primary">
        Get Started
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="/learn/" class="btn btn-secondary">
        Learn Next.js
      </a>
    </div>
  </main>

  <section class="cards">
    <a href="/docs/app/getting-started/" class="card">
      <h3>📖 Documentation</h3>
      <p>Complete API reference and guides for App Router and Pages Router, with version history back to v13.</p>
      <span class="arrow">→</span>
    </a>
    <a href="/learn/" class="card">
      <h3>🎓 Learn</h3>
      <p>Interactive courses covering React Foundations, building a dashboard app, SEO, and more.</p>
      <span class="arrow">→</span>
    </a>
    <a href="/blog/" class="card">
      <h3>📝 Blog</h3>
      <p>Latest updates, release notes, and announcements from the Next.js team.</p>
      <span class="arrow">→</span>
    </a>
  </section>

  <section class="languages">
    <h2>Available Languages</h2>
    <div class="lang-grid">
      <a href="/docs/app/getting-started/installation/" class="lang-tag">🇺🇸 English</a>
      <a href="/zh-hans/docs/app/getting-started/installation/" class="lang-tag">🇨🇳 简体中文</a>
      <a href="/zh-hant/docs/app/getting-started/installation/" class="lang-tag">🇹🇼 繁體中文</a>
      <a href="/ja/docs/app/getting-started/installation/" class="lang-tag">🇯🇵 日本語</a>
      <a href="/ar/docs/app/getting-started/installation/" class="lang-tag">🇸🇦 العربية</a>
      <a href="/de/docs/app/getting-started/installation/" class="lang-tag">🇩🇪 Deutsch</a>
      <a href="/es/docs/app/getting-started/installation/" class="lang-tag">🇪🇸 Español</a>
      <a href="/fr/docs/app/getting-started/installation/" class="lang-tag">🇫🇷 Français</a>
      <a href="/ru/docs/app/getting-started/installation/" class="lang-tag">🇷🇺 Русский</a>
    </div>
  </section>

  <footer>
    <p>
      Open source community project — 
      <a href="https://github.com/nicepkg/nextjs-i18n-docs">Contribute on GitHub</a>
    </p>
  </footer>
</body>
</html>`;
}
