import { Hono } from 'hono';
import { cors } from 'hono/cors';
import jobRoutes from './routes/jobs';
import statusRoutes from './routes/status';

const app = new Hono();

// CORS for dev
app.use('/api/*', cors());

// API routes
app.route('/api/status', statusRoutes);
app.route('/api/jobs', jobRoutes);

// Health check
app.get('/api/health', (c) => c.json({ ok: true }));

// Serve embedded UI
app.get('/', (c) => {
  return c.html(dashboardHtml);
});

// ── Embedded Dashboard HTML ──
// Single-file SPA — no build step, no React, just vanilla JS
const dashboardHtml = /* html */ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Translation Admin</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg: #0a0a0a; --fg: #ededed; --fg-muted: #888;
      --card-bg: #141414; --card-border: #282828; --card-hover: #1c1c1c;
      --accent: #0070f3; --green: #00c853; --yellow: #ffd600; --red: #ff1744;
      --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
    body { font-family: var(--font); background: var(--bg); color: var(--fg); min-height: 100vh; }

    /* Nav */
    nav { display: flex; align-items: center; gap: 1rem; padding: 1rem 2rem; border-bottom: 1px solid var(--card-border); }
    nav h1 { font-size: 1.1rem; font-weight: 700; }
    nav .spacer { flex: 1; }
    nav button { background: var(--accent); color: #fff; border: none; padding: 0.5rem 1rem; border-radius: 0.375rem; cursor: pointer; font-size: 0.85rem; font-weight: 600; }
    nav button:hover { opacity: 0.9; }

    /* Layout */
    .container { max-width: 1200px; margin: 0 auto; padding: 1.5rem; }

    /* Version tabs */
    .tabs { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; }
    .tab { padding: 0.5rem 1rem; border-radius: 0.375rem; border: 1px solid var(--card-border); background: transparent; color: var(--fg-muted); cursor: pointer; font-size: 0.85rem; }
    .tab.active { background: var(--accent); color: #fff; border-color: var(--accent); }

    /* Lang cards grid */
    .lang-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.75rem; margin-bottom: 1.5rem; }
    .lang-card { padding: 1rem; border: 1px solid var(--card-border); border-radius: 0.5rem; background: var(--card-bg); cursor: pointer; transition: border-color 0.15s; }
    .lang-card:hover { border-color: var(--accent); }
    .lang-card.selected { border-color: var(--accent); background: #0070f310; }
    .lang-card .name { font-weight: 600; margin-bottom: 0.5rem; }
    .lang-card .stats { font-size: 0.8rem; color: var(--fg-muted); }
    .lang-card .bar-bg { height: 4px; background: var(--card-border); border-radius: 2px; margin-top: 0.5rem; }
    .lang-card .bar-fill { height: 100%; border-radius: 2px; transition: width 0.3s; }

    /* Section table */
    .section-table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.85rem; }
    .section-table th, .section-table td { padding: 0.5rem 1rem; text-align: left; border-bottom: 1px solid var(--card-border); }
    .section-table th { color: var(--fg-muted); font-weight: 500; }
    .section-table td.num { text-align: right; font-variant-numeric: tabular-nums; }

    /* Jobs panel */
    .jobs-panel { border: 1px solid var(--card-border); border-radius: 0.5rem; padding: 1rem; margin-bottom: 1.5rem; background: var(--card-bg); }
    .jobs-panel h3 { margin-bottom: 0.75rem; font-size: 0.95rem; }
    .job-item { padding: 0.75rem; border: 1px solid var(--card-border); border-radius: 0.375rem; margin-bottom: 0.5rem; font-size: 0.85rem; }
    .job-item .header { display: flex; align-items: center; gap: 0.5rem; }
    .job-item .status { padding: 0.125rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 600; }
    .job-item .status.running { background: #0070f320; color: var(--accent); }
    .job-item .status.completed { background: #00c85320; color: var(--green); }
    .job-item .status.failed { background: #ff174420; color: var(--red); }
    .job-item .status.cancelled { background: #ffd60020; color: var(--yellow); }
    .job-item .meta { color: var(--fg-muted); margin-top: 0.25rem; }
    .job-item .progress-bar { height: 3px; background: var(--card-border); border-radius: 2px; margin-top: 0.5rem; }
    .job-item .progress-fill { height: 100%; background: var(--accent); border-radius: 2px; transition: width 0.3s; }
    .job-item button { background: transparent; border: 1px solid var(--card-border); color: var(--fg-muted); padding: 0.25rem 0.5rem; border-radius: 0.25rem; cursor: pointer; font-size: 0.75rem; margin-left: auto; }
    .job-item button:hover { border-color: var(--red); color: var(--red); }

    /* Log viewer */
    .log-viewer { background: #000; border-radius: 0.375rem; padding: 0.75rem; max-height: 300px; overflow-y: auto; font-family: 'SF Mono', 'Fira Code', monospace; font-size: 0.75rem; line-height: 1.5; color: #aaa; margin-top: 0.5rem; }
    .log-viewer .line { white-space: pre-wrap; word-break: break-all; }
    .log-viewer .line.err { color: var(--red); }

    /* File list */
    .file-list { border: 1px solid var(--card-border); border-radius: 0.5rem; overflow: hidden; margin-bottom: 1.5rem; }
    .file-list .header { display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1rem; background: var(--card-bg); border-bottom: 1px solid var(--card-border); }
    .file-list .filters { display: flex; gap: 0.5rem; }
    .file-list .filters select { background: var(--bg); color: var(--fg); border: 1px solid var(--card-border); padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.8rem; }
    .file-row { display: flex; align-items: center; padding: 0.375rem 1rem; border-bottom: 1px solid var(--card-border); font-size: 0.8rem; font-variant-numeric: tabular-nums; }
    .file-row:last-child { border-bottom: none; }
    .file-row .icon { width: 1.5rem; }
    .file-row .path { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .file-row .pct { width: 4rem; text-align: right; }
    .file-row .missing { width: 8rem; text-align: right; color: var(--fg-muted); }
    .file-row .mini-bar { width: 60px; height: 3px; background: var(--card-border); border-radius: 2px; margin-left: 0.5rem; }
    .file-row .mini-fill { height: 100%; border-radius: 2px; }

    /* Dialog */
    .dialog-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 100; }
    .dialog { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 0.75rem; padding: 1.5rem; width: 400px; max-width: 90vw; }
    .dialog h3 { margin-bottom: 1rem; }
    .dialog label { display: block; font-size: 0.85rem; color: var(--fg-muted); margin-bottom: 0.25rem; margin-top: 0.75rem; }
    .dialog input, .dialog select { width: 100%; background: var(--bg); color: var(--fg); border: 1px solid var(--card-border); padding: 0.5rem; border-radius: 0.375rem; font-size: 0.85rem; }
    .dialog .actions { display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1.5rem; }
    .dialog .actions button { padding: 0.5rem 1rem; border-radius: 0.375rem; border: 1px solid var(--card-border); cursor: pointer; font-size: 0.85rem; }
    .dialog .actions .primary { background: var(--accent); color: #fff; border-color: var(--accent); }
    .dialog .actions .cancel { background: transparent; color: var(--fg-muted); }

    .hidden { display: none !important; }
    .loading { text-align: center; padding: 2rem; color: var(--fg-muted); }
  </style>
</head>
<body>
  <nav>
    <h1>🌐 Translation Admin</h1>
    <span class="spacer"></span>
    <button onclick="showNewJobDialog()">+ New Job</button>
  </nav>

  <div class="container">
    <div class="tabs" id="version-tabs"></div>
    <div class="lang-grid" id="lang-grid"></div>
    <div class="jobs-panel" id="jobs-panel">
      <h3>Jobs</h3>
      <div id="jobs-list"><span class="loading">Loading...</span></div>
    </div>
    <div id="file-section" class="hidden">
      <div class="file-list">
        <div class="header">
          <strong id="file-title">Files</strong>
          <span class="spacer" style="flex:1"></span>
          <div class="filters">
            <select id="filter-status" onchange="renderFiles()">
              <option value="all">All</option>
              <option value="complete">✅ Complete</option>
              <option value="partial">🟡 Partial</option>
              <option value="missing">🔴 Missing</option>
            </select>
            <select id="filter-section" onchange="renderFiles()">
              <option value="all">All sections</option>
              <option value="docs">docs</option>
              <option value="blog">blog</option>
              <option value="learn">learn</option>
            </select>
          </div>
        </div>
        <div id="file-rows"></div>
      </div>
    </div>
  </div>

  <div id="dialog-overlay" class="dialog-overlay hidden" onclick="if(event.target===this)closeDialog()"></div>

<script>
  // ── State ──
  let state = { version: 'latest', lang: null, data: null, files: null, jobs: [] };

  // ── API ──
  function escapeHtml(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  const api = (path) => fetch('/api' + path).then(r => r.json());
  const apiPost = (path, body) => fetch('/api' + path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).then(r => r.json());
  const apiDelete = (path) => fetch('/api' + path, { method: 'DELETE' }).then(r => r.json());

  // ── Init ──
  async function init() {
    state.data = await api('/status');
    state.jobs = await api('/jobs');
    renderTabs();
    renderLangs();
    renderJobs();
    // Refresh jobs every 3s
    setInterval(refreshJobs, 3000);
  }

  // ── Render ──
  function renderTabs() {
    const el = document.getElementById('version-tabs');
    el.innerHTML = state.data.versions.map(v =>
      '<button class="tab' + (v === state.version ? ' active' : '') + '" onclick="setVersion(\\'' + v + '\\')">' + v + '</button>'
    ).join('');
  }

  function setVersion(v) {
    state.version = v;
    state.lang = null;
    state.files = null;
    renderTabs();
    renderLangs();
    document.getElementById('file-section').classList.add('hidden');
  }

  const FLAGS = { 'zh-hans': '🇨🇳', 'zh-hant': '🇭🇰', ja: '🇯🇵', ar: '🇸🇦', de: '🇩🇪', es: '🇪🇸', fr: '🇫🇷', ru: '🇷🇺' };

  function renderLangs() {
    const vData = state.data.data[state.version];
    if (!vData) { document.getElementById('lang-grid').innerHTML = '<div class="loading">No data</div>'; return; }

    const el = document.getElementById('lang-grid');
    el.innerHTML = state.data.langs.map(lang => {
      const ls = vData.langs[lang];
      if (!ls) return '';
      const pct = ls.totalNodes > 0 ? (ls.translatedNodes / ls.totalNodes * 100) : 0;
      const color = pct > 95 ? 'var(--green)' : pct > 50 ? 'var(--yellow)' : 'var(--red)';
      const sel = lang === state.lang ? ' selected' : '';
      return '<div class="lang-card' + sel + '" onclick="selectLang(\\'' + lang + '\\')">' +
        '<div class="name">' + (FLAGS[lang] || '') + ' ' + lang + '</div>' +
        '<div class="stats">' + ls.translatedFiles + '/' + ls.totalFiles + ' files · ' + pct.toFixed(1) + '%</div>' +
        '<div class="bar-bg"><div class="bar-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '</div>';
    }).join('');
  }

  async function selectLang(lang) {
    state.lang = lang;
    renderLangs();
    document.getElementById('file-section').classList.remove('hidden');
    document.getElementById('file-title').textContent = lang + ' / ' + state.version;
    document.getElementById('file-rows').innerHTML = '<div class="loading">Loading...</div>';
    state.files = await api('/status/' + state.version + '/' + lang);
    renderFiles();
  }

  function renderFiles() {
    if (!state.files) return;
    const statusFilter = document.getElementById('filter-status').value;
    const sectionFilter = document.getElementById('filter-section').value;

    let files = state.files.map(f => {
      const pct = f.total > 0 ? (f.translated / f.total * 100) : 100;
      const status = pct >= 100 ? 'complete' : pct > 0 ? 'partial' : 'missing';
      const section = f.file.startsWith('docs/') ? 'docs' : f.file.startsWith('blog/') ? 'blog' : f.file.startsWith('learn/') ? 'learn' : 'other';
      return { ...f, pct, status, section };
    });

    if (statusFilter !== 'all') files = files.filter(f => f.status === statusFilter);
    if (sectionFilter !== 'all') files = files.filter(f => f.section === sectionFilter);

    const el = document.getElementById('file-rows');
    if (files.length === 0) { el.innerHTML = '<div class="loading">No files match filter</div>'; return; }

    el.innerHTML = files.map(f => {
      const icon = f.status === 'complete' ? '🟢' : f.status === 'partial' ? '🟡' : '🔴';
      const color = f.status === 'complete' ? 'var(--green)' : f.status === 'partial' ? 'var(--yellow)' : 'var(--red)';
      const missing = f.total - f.translated;
      return '<div class="file-row">' +
        '<span class="icon">' + icon + '</span>' +
        '<span class="path" title="' + f.file + '">' + f.file + '</span>' +
        '<span class="pct">' + f.pct.toFixed(0) + '%</span>' +
        '<span class="missing">' + (missing > 0 ? missing + ' missing' : '') + '</span>' +
        '<div class="mini-bar"><div class="mini-fill" style="width:' + f.pct + '%;background:' + color + '"></div></div>' +
      '</div>';
    }).join('');
  }

  // ── Jobs ──
  async function refreshJobs() {
    state.jobs = await api('/jobs');
    renderJobs();
  }

  function renderJobs() {
    const el = document.getElementById('jobs-list');
    if (state.jobs.length === 0) { el.innerHTML = '<span style="color:var(--fg-muted);font-size:0.85rem">No jobs yet</span>'; return; }

    el.innerHTML = state.jobs.map(j => {
      const pct = j.toTranslate > 0 ? (j.translatedFiles / j.toTranslate * 100) : (j.status === 'completed' ? 100 : 0);
      const canCancel = j.status === 'running';
      const canDelete = j.status !== 'running';

      // Progress: "3/22 files translated (563 total)"
      let progressText = '';
      if (j.toTranslate > 0) {
        progressText = j.translatedFiles + '/' + j.toTranslate + ' files translated';
        if (j.totalFiles > 0) progressText += ' (' + j.totalFiles + ' total)';
      } else if (j.totalFiles > 0) {
        progressText = 'scanning ' + j.totalFiles + ' files...';
      }
      if (j.errorFiles > 0) progressText += ' · ' + j.errorFiles + ' errors';

      return '<div class="job-item">' +
        '<div class="header">' +
          '<span class="status ' + j.status + '">' + j.status + '</span>' +
          '<strong>' + j.lang + '/' + j.version + '</strong>' +
          (j.currentFile ? '<span style="color:var(--fg-muted)"> · ' + j.currentFile + '</span>' : '') +
          '<span style="flex:1"></span>' +
          (canCancel ? '<button onclick="cancelJob(\\'' + j.id + '\\')">⏹ Stop</button>' : '') +
          (canDelete ? '<button onclick="deleteJob(\\'' + j.id + '\\')" style="margin-left:0.25rem">🗑 Remove</button>' : '') +
        '</div>' +
        '<div class="progress-bar"><div class="progress-fill" style="width:' + pct + '%"></div></div>' +
        '<div class="meta">' + progressText +
          ' · started ' + new Date(j.startedAt).toLocaleTimeString() +
          (j.finishedAt ? ' · finished ' + new Date(j.finishedAt).toLocaleTimeString() : '') +
          (j.exitCode != null && j.exitCode !== 0 ? ' · exit code: ' + j.exitCode : '') +
        '</div>' +
        (j.logLines && j.logLines.length > 0 ? '<div class="log-viewer">' + j.logLines.map(l => '<div class="line' + (l.includes('[stderr]') || l.includes('error') || l.includes('Error') ? ' err' : '') + '">' + escapeHtml(l) + '</div>').join('') + '</div>' : '') +
      '</div>';
    }).join('');
  }

  async function cancelJob(id) {
    await apiDelete('/jobs/' + id);
    refreshJobs();
  }

  // ── New Job Dialog ──
  function showNewJobDialog() {
    const overlay = document.getElementById('dialog-overlay');
    overlay.classList.remove('hidden');
    overlay.innerHTML = '<div class="dialog">' +
      '<h3>Start Translation Job</h3>' +
      '<label>Language</label>' +
      '<select id="job-lang">' + state.data.langs.map(l => '<option value="' + l + '">' + (FLAGS[l]||'') + ' ' + l + '</option>').join('') + '</select>' +
      '<label>Version</label>' +
      '<select id="job-version">' + state.data.versions.map(v => '<option value="' + v + '"' + (v===state.version?' selected':'') + '>' + v + '</option>').join('') + '</select>' +
      '<label>Max files</label><input id="job-max" type="number" value="50">' +
      '<label>Concurrency</label><input id="job-concurrency" type="number" value="3">' +
      '<div class="actions">' +
        '<button class="cancel" onclick="closeDialog()">Cancel</button>' +
        '<button class="primary" onclick="startJob()">Start Job →</button>' +
      '</div>' +
    '</div>';
    if (state.lang) document.getElementById('job-lang').value = state.lang;
  }

  function closeDialog() { document.getElementById('dialog-overlay').classList.add('hidden'); }

  async function startJob() {
    const body = {
      lang: document.getElementById('job-lang').value,
      version: document.getElementById('job-version').value,
      max: parseInt(document.getElementById('job-max').value) || 50,
      concurrency: parseInt(document.getElementById('job-concurrency').value) || 3,
    };
    closeDialog();
    try {
      const res = await fetch('/api/jobs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const data = await res.json();
      if (!res.ok) {
        alert('Failed to start job: ' + (data.error || 'Unknown error'));
        return;
      }
    } catch (err) {
      alert('Failed to start job: ' + err.message);
      return;
    }
    refreshJobs();
  }

  async function deleteJob(id) {
    await apiDelete('/jobs/' + id);
    refreshJobs();
  }

  init();
</script>
</body>
</html>
`;

const port = Number(process.env.PORT) || 3456;

export default {
  port,
  fetch: app.fetch,
};

console.log(`🌐 Translation Admin → http://localhost:${port}`);
