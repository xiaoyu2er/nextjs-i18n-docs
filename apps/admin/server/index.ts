import { Hono } from 'hono';
import { cors } from 'hono/cors';
import jobRoutes from './routes/jobs';
import statusRoutes from './routes/status';

const app = new Hono();

app.use('/api/*', cors());
app.route('/api/status', statusRoutes);
app.route('/api/jobs', jobRoutes);
app.get('/api/health', (c) => c.json({ ok: true }));

app.get('/', (c) => c.html(HTML));

const HTML = /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Translation Admin</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#0a0a0a;--fg:#ededed;--fg2:#888;--card:#141414;--border:#282828;--hover:#1c1c1c;--accent:#0070f3;--green:#00c853;--yellow:#ffd600;--red:#ff1744;--font:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
body{font-family:var(--font);background:var(--bg);color:var(--fg);min-height:100vh}
nav{display:flex;align-items:center;gap:1rem;padding:1rem 2rem;border-bottom:1px solid var(--border)}
nav h1{font-size:1.1rem;font-weight:700}
.spacer{flex:1}
.btn{background:var(--accent);color:#fff;border:none;padding:.5rem 1rem;border-radius:.375rem;cursor:pointer;font-size:.85rem;font-weight:600}
.btn:hover{opacity:.9}
.btn:disabled{opacity:.4;cursor:not-allowed}
.btn-sm{padding:.25rem .75rem;font-size:.8rem}
.btn-outline{background:transparent;border:1px solid var(--border);color:var(--fg2)}
.btn-outline:hover{border-color:var(--accent);color:var(--accent)}
.container{max-width:1400px;margin:0 auto;padding:1.5rem}
.tabs{display:flex;gap:.5rem;margin-bottom:1.5rem}
.tab{padding:.5rem 1rem;border-radius:.375rem;border:1px solid var(--border);background:transparent;color:var(--fg2);cursor:pointer;font-size:.85rem}
.tab.active{background:var(--accent);color:#fff;border-color:var(--accent)}
.lang-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:.75rem;margin-bottom:1.5rem}
.lang-card{padding:1rem;border:1px solid var(--border);border-radius:.5rem;background:var(--card);cursor:pointer;transition:border-color .15s}
.lang-card:hover{border-color:var(--accent)}
.lang-card.selected{border-color:var(--accent);background:#0070f310}
.lang-card.is-en{border-style:dashed}
.lang-card .name{font-weight:600;margin-bottom:.5rem;font-size:.9rem}
.lang-card .stats{font-size:.8rem;color:var(--fg2)}
.lang-card .bar-bg{height:4px;background:var(--border);border-radius:2px;margin-top:.5rem}
.lang-card .bar-fill{height:100%;border-radius:2px;transition:width .3s}
.jobs-panel{border:1px solid var(--border);border-radius:.5rem;padding:1rem;margin-bottom:1.5rem;background:var(--card)}
.jobs-panel h3{margin-bottom:.75rem;font-size:.95rem}
.job-item{padding:.75rem;border:1px solid var(--border);border-radius:.375rem;margin-bottom:.5rem;font-size:.85rem}
.job-item .hdr{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap}
.status-badge{padding:.125rem .5rem;border-radius:.25rem;font-size:.75rem;font-weight:600}
.status-badge.running{background:#0070f320;color:var(--accent)}
.status-badge.completed{background:#00c85320;color:var(--green)}
.status-badge.failed{background:#ff174420;color:var(--red)}
.status-badge.cancelled{background:#ffd60020;color:var(--yellow)}
.job-item .meta{color:var(--fg2);margin-top:.25rem;font-size:.8rem}
.progress-bar{height:3px;background:var(--border);border-radius:2px;margin-top:.5rem}
.progress-fill{height:100%;background:var(--accent);border-radius:2px;transition:width .3s}
.log-viewer{background:#000;border-radius:.375rem;padding:.75rem;max-height:200px;overflow-y:auto;font-family:'SF Mono','Fira Code',monospace;font-size:.7rem;line-height:1.5;color:#aaa;margin-top:.5rem}
.log-viewer .err{color:var(--red)}
.file-panel{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem}
.file-panel.no-preview{grid-template-columns:1fr}
.file-list-wrap{border:1px solid var(--border);border-radius:.5rem;overflow:hidden;max-height:70vh;display:flex;flex-direction:column}
.file-list-hdr{display:flex;align-items:center;gap:.5rem;padding:.75rem 1rem;background:var(--card);border-bottom:1px solid var(--border);flex-wrap:wrap}
.file-list-hdr select{background:var(--bg);color:var(--fg);border:1px solid var(--border);padding:.25rem .5rem;border-radius:.25rem;font-size:.8rem}
.file-list-body{overflow-y:auto;flex:1}
.file-row{display:flex;align-items:center;padding:.375rem .75rem;border-bottom:1px solid var(--border);font-size:.8rem;cursor:pointer;transition:background .1s}
.file-row:hover{background:var(--hover)}
.file-row.active{background:#0070f315}
.file-row input[type=checkbox]{margin-right:.5rem;cursor:pointer}
.file-row .icon{width:1.25rem;flex-shrink:0}
.file-row .path{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.file-row .pct{width:3.5rem;text-align:right;font-variant-numeric:tabular-nums}
.file-row .miss{width:5rem;text-align:right;color:var(--fg2);font-size:.75rem}
.file-row .mini-bar{width:50px;height:3px;background:var(--border);border-radius:2px;margin-left:.5rem;flex-shrink:0}
.file-row .mini-fill{height:100%;border-radius:2px}
.preview-wrap{border:1px solid var(--border);border-radius:.5rem;overflow:hidden;max-height:70vh;display:flex;flex-direction:column}
.preview-hdr{padding:.75rem 1rem;background:var(--card);border-bottom:1px solid var(--border);font-weight:600;font-size:.85rem;display:flex;align-items:center;gap:.5rem}
.preview-body{overflow-y:auto;flex:1;padding:1rem;font-family:'SF Mono','Fira Code',monospace;font-size:.75rem;line-height:1.6;white-space:pre-wrap;word-break:break-word;color:#ccc}
.preview-tabs{display:flex;gap:.25rem}
.preview-tab{padding:.25rem .75rem;border-radius:.25rem;border:1px solid var(--border);background:transparent;color:var(--fg2);cursor:pointer;font-size:.75rem}
.preview-tab.active{background:var(--accent);color:#fff;border-color:var(--accent)}
.sel-bar{display:flex;align-items:center;gap:.75rem;padding:.5rem 1rem;background:#0070f310;border-bottom:1px solid var(--border);font-size:.85rem}
.dialog-overlay{position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;z-index:100}
.dialog{background:var(--card);border:1px solid var(--border);border-radius:.75rem;padding:1.5rem;width:420px;max-width:90vw}
.dialog h3{margin-bottom:1rem}
.dialog label{display:block;font-size:.85rem;color:var(--fg2);margin:.75rem 0 .25rem}
.dialog input,.dialog select{width:100%;background:var(--bg);color:var(--fg);border:1px solid var(--border);padding:.5rem;border-radius:.375rem;font-size:.85rem}
.dialog .actions{display:flex;justify-content:flex-end;gap:.5rem;margin-top:1.5rem}
.hidden{display:none!important}
.loading{text-align:center;padding:2rem;color:var(--fg2)}
@media(max-width:900px){.file-panel{grid-template-columns:1fr}}
</style>
</head>
<body>
<nav>
  <h1>🌐 Translation Admin</h1>
  <span class="spacer"></span>
  <button class="btn" onclick="showNewJobDialog()">+ New Job</button>
</nav>
<div class="container">
  <div class="tabs" id="vtabs"></div>
  <div class="lang-grid" id="lgrid"></div>
  <div class="jobs-panel"><h3>Jobs</h3><div id="jlist"><span class="loading">Loading...</span></div></div>
  <div id="fsec" class="hidden">
    <div class="file-panel no-preview" id="fpanel">
      <div class="file-list-wrap">
        <div id="sel-bar" class="sel-bar hidden">
          <span id="sel-count">0 selected</span>
          <button class="btn btn-sm" onclick="translateSelected()">Translate Selected</button>
          <button class="btn btn-sm btn-outline" onclick="clearSelection()">Clear</button>
        </div>
        <div class="file-list-hdr">
          <input type="checkbox" id="select-all" onchange="toggleSelectAll()" title="Select all visible">
          <strong id="ftitle">Files</strong>
          <span class="spacer"></span>
          <select id="fstatus" onchange="renderFiles()">
            <option value="all">All</option>
            <option value="complete">✅ Complete</option>
            <option value="partial">🟡 Partial</option>
            <option value="missing">🔴 Missing</option>
          </select>
          <select id="fsection" onchange="renderFiles()">
            <option value="all">All sections</option>
            <option value="docs">docs</option>
            <option value="blog">blog</option>
            <option value="learn">learn</option>
          </select>
        </div>
        <div class="file-list-body" id="frows"></div>
      </div>
      <div class="preview-wrap hidden" id="preview">
        <div class="preview-hdr">
          <span id="preview-title">Preview</span>
          <span class="spacer"></span>
          <div class="preview-tabs" id="preview-tabs"></div>
        </div>
        <div class="preview-body" id="preview-body"></div>
      </div>
    </div>
  </div>
</div>
<div id="doverlay" class="dialog-overlay hidden" onclick="if(event.target===this)closeDialog()"></div>

<script>
const FLAGS={en:'🇺🇸','zh-hans':'🇨🇳','zh-hant':'🇭🇰',ja:'🇯🇵',ar:'🇸🇦',de:'🇩🇪',es:'🇪🇸',fr:'🇫🇷',ru:'🇷🇺'};
let S={ver:'latest',lang:null,data:null,files:null,jobs:[],selected:new Set(),previewFile:null,previewLang:'en'};
const api=p=>fetch('/api'+p).then(r=>r.json());
const escHtml=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

async function init(){
  S.data=await api('/status');
  S.jobs=await api('/jobs');
  renderTabs();renderLangs();renderJobs();
  setInterval(refreshJobs,3000);
}

function renderTabs(){
  document.getElementById('vtabs').innerHTML=S.data.versions.map(v=>
    '<button class="tab'+(v===S.ver?' active':'')+'" onclick="setVer(\\''+v+'\\')">'+v+'</button>'
  ).join('');
}
function setVer(v){S.ver=v;S.lang=null;S.files=null;S.selected.clear();renderTabs();renderLangs();hideFiles();}

function renderLangs(){
  const vd=S.data.data[S.ver];
  if(!vd){document.getElementById('lgrid').innerHTML='';return;}
  document.getElementById('lgrid').innerHTML=S.data.langs.map(lang=>{
    if(lang==='en'){
      return '<div class="lang-card is-en'+(lang===S.lang?' selected':'')+'" onclick="selectLang(\\'en\\')">'+
        '<div class="name">'+FLAGS.en+' en (source)</div>'+
        '<div class="stats">'+vd.enFileCount+' files</div>'+
        '<div class="bar-bg"><div class="bar-fill" style="width:100%;background:var(--green)"></div></div></div>';
    }
    const ls=vd.langs[lang];
    if(!ls)return'';
    const pct=ls.totalNodes>0?(ls.translatedNodes/ls.totalNodes*100):0;
    const color=pct>95?'var(--green)':pct>50?'var(--yellow)':'var(--red)';
    return '<div class="lang-card'+(lang===S.lang?' selected':'')+'" onclick="selectLang(\\''+lang+'\\')">'+
      '<div class="name">'+FLAGS[lang]+' '+lang+'</div>'+
      '<div class="stats">'+ls.translatedFiles+'/'+ls.totalFiles+' files · '+pct.toFixed(1)+'%</div>'+
      '<div class="bar-bg"><div class="bar-fill" style="width:'+pct+'%;background:'+color+'"></div></div></div>';
  }).join('');
}

async function selectLang(lang){
  S.lang=lang;S.selected.clear();S.previewFile=null;
  renderLangs();showFiles();
  document.getElementById('ftitle').textContent=lang+' / '+S.ver;
  document.getElementById('frows').innerHTML='<div class="loading">Loading...</div>';
  S.files=await api('/status/'+S.ver+'/'+lang);
  renderFiles();
}

function showFiles(){
  document.getElementById('fsec').classList.remove('hidden');
  document.getElementById('preview').classList.add('hidden');
  document.getElementById('fpanel').classList.add('no-preview');
}
function hideFiles(){document.getElementById('fsec').classList.add('hidden');}

function renderFiles(){
  if(!S.files)return;
  const sf=document.getElementById('fstatus').value;
  const sec=document.getElementById('fsection').value;
  let files=S.files.map(f=>{
    const pct=f.total>0?(f.translated/f.total*100):100;
    const status=pct>=100?'complete':pct>0?'partial':'missing';
    const section=f.file.startsWith('docs/')?'docs':f.file.startsWith('blog/')?'blog':f.file.startsWith('learn/')?'learn':'other';
    return{...f,pct,status,section};
  });
  if(sf!=='all')files=files.filter(f=>f.status===sf);
  if(sec!=='all')files=files.filter(f=>f.section===sec);

  const isEn=S.lang==='en';
  const el=document.getElementById('frows');
  if(!files.length){el.innerHTML='<div class="loading">No files</div>';updateSelBar();return;}

  el.innerHTML=files.map(f=>{
    const icon=f.status==='complete'?'🟢':f.status==='partial'?'🟡':'🔴';
    const color=f.status==='complete'?'var(--green)':f.status==='partial'?'var(--yellow)':'var(--red)';
    const miss=f.total-f.translated;
    const checked=S.selected.has(f.file)?'checked':'';
    const active=S.previewFile===f.file?' active':'';
    return '<div class="file-row'+active+'" onclick="previewFile(\\''+escAttr(f.file)+'\\',event)">'+
      (!isEn?'<input type="checkbox" '+checked+' onclick="toggleFile(\\''+escAttr(f.file)+'\\',event)" data-file="'+escAttr(f.file)+'">':'')+
      '<span class="icon">'+icon+'</span>'+
      '<span class="path" title="'+escAttr(f.file)+'">'+escHtml(f.file)+'</span>'+
      '<span class="pct">'+f.pct.toFixed(0)+'%</span>'+
      (miss>0?'<span class="miss">'+miss+' miss</span>':'')+
      '<div class="mini-bar"><div class="mini-fill" style="width:'+f.pct+'%;background:'+color+'"></div></div>'+
    '</div>';
  }).join('');
  updateSelBar();
}

function escAttr(s){return s.replace(/'/g,"\\\\'").replace(/"/g,'&quot;');}

// ── Selection ──
function toggleFile(file,e){
  e.stopPropagation();
  if(S.selected.has(file))S.selected.delete(file);else S.selected.add(file);
  updateSelBar();
}
function toggleSelectAll(){
  const cb=document.getElementById('select-all');
  document.querySelectorAll('.file-row input[type=checkbox]').forEach(c=>{
    const f=c.dataset.file;
    if(cb.checked)S.selected.add(f);else S.selected.delete(f);
    c.checked=cb.checked;
  });
  updateSelBar();
}
function clearSelection(){S.selected.clear();renderFiles();}
function updateSelBar(){
  const bar=document.getElementById('sel-bar');
  if(S.selected.size>0&&S.lang!=='en'){
    bar.classList.remove('hidden');
    document.getElementById('sel-count').textContent=S.selected.size+' selected';
  }else{bar.classList.add('hidden');}
}

function translateSelected(){
  if(!S.selected.size||S.lang==='en')return;
  const files=[...S.selected];
  showNewJobDialog({lang:S.lang,version:S.ver,files});
}

// ── Preview ──
async function previewFile(file,e){
  if(e&&e.target.type==='checkbox')return;
  S.previewFile=file;S.previewLang=S.lang==='en'?'en':S.lang;
  document.getElementById('fpanel').classList.remove('no-preview');
  document.getElementById('preview').classList.remove('hidden');
  renderFiles(); // highlight active row
  await loadPreview(file,S.previewLang);
}
async function loadPreview(file,lang){
  const tabs=S.lang==='en'?['en']:['en',S.lang];
  document.getElementById('preview-tabs').innerHTML=tabs.map(t=>
    '<button class="preview-tab'+(t===lang?' active':'')+'" onclick="switchPreviewTab(\\''+t+'\\')">'+FLAGS[t]+' '+t+'</button>'
  ).join('');
  document.getElementById('preview-title').textContent=file;
  document.getElementById('preview-body').textContent='Loading...';
  try{
    const d=await api('/status/content/'+S.ver+'/'+lang+'/'+file);
    document.getElementById('preview-body').textContent=d.content||'(empty)';
  }catch{document.getElementById('preview-body').textContent='Failed to load';}
}
async function switchPreviewTab(lang){
  S.previewLang=lang;
  if(S.previewFile)await loadPreview(S.previewFile,lang);
}

// ── Jobs ──
async function refreshJobs(){S.jobs=await api('/jobs');renderJobs();}
function renderJobs(){
  const el=document.getElementById('jlist');
  if(!S.jobs.length){el.innerHTML='<span style="color:var(--fg2);font-size:.85rem">No jobs</span>';return;}
  el.innerHTML=S.jobs.map(j=>{
    const pct=j.toTranslate>0?(j.translatedFiles/j.toTranslate*100):(j.status==='completed'?100:0);
    const running=j.status==='running';
    let prog='';
    if(j.toTranslate>0){prog=j.translatedFiles+'/'+j.toTranslate+' translated';if(j.totalFiles)prog+=' ('+j.totalFiles+' total)';}
    else if(j.totalFiles>0)prog='scanning '+j.totalFiles+' files...';
    if(j.errorFiles>0)prog+=' · '+j.errorFiles+' errors';
    return '<div class="job-item">'+
      '<div class="hdr">'+
        '<span class="status-badge '+j.status+'">'+j.status+'</span>'+
        '<strong>'+j.lang+'/'+j.version+'</strong>'+
        (j.currentFile?'<span style="color:var(--fg2)">'+j.currentFile+'</span>':'')+
        '<span class="spacer"></span>'+
        (running?'<button class="btn btn-sm btn-outline" onclick="cancelJob(\\''+j.id+'\\')">⏹</button>':'')+
        (!running?'<button class="btn btn-sm btn-outline" onclick="deleteJob(\\''+j.id+'\\')">🗑</button>':'')+
      '</div>'+
      '<div class="progress-bar"><div class="progress-fill" style="width:'+pct+'%"></div></div>'+
      '<div class="meta">'+prog+' · '+new Date(j.startedAt).toLocaleTimeString()+
        (j.finishedAt?' · done '+new Date(j.finishedAt).toLocaleTimeString():'')+
        (j.exitCode!=null&&j.exitCode!==0?' · exit '+j.exitCode:'')+
      '</div>'+
      (j.logLines&&j.logLines.length?'<div class="log-viewer">'+j.logLines.map(l=>'<div class="'+(l.includes('stderr')||l.includes('rror')?'err':'')+'">'+escHtml(l)+'</div>').join('')+'</div>':'')+
    '</div>';
  }).join('');
}
async function cancelJob(id){await fetch('/api/jobs/'+id,{method:'DELETE'});refreshJobs();}
async function deleteJob(id){await fetch('/api/jobs/'+id,{method:'DELETE'});refreshJobs();}

// ── New Job Dialog ──
function showNewJobDialog(opts){
  opts=opts||{};
  const ov=document.getElementById('doverlay');
  ov.classList.remove('hidden');
  const fileInfo=opts.files?'<div style="margin-top:.75rem;padding:.75rem;background:var(--bg);border-radius:.375rem;font-size:.8rem;max-height:150px;overflow-y:auto"><strong>'+opts.files.length+' files selected:</strong><br>'+opts.files.map(f=>'<div style="color:var(--fg2)">'+escHtml(f)+'</div>').join('')+'</div>':'';
  ov.innerHTML='<div class="dialog">'+
    '<h3>Start Translation Job</h3>'+
    '<label>Language</label>'+
    '<select id="jlang">'+S.data.langs.filter(l=>l!=='en').map(l=>'<option value="'+l+'"'+(l===(opts.lang||S.lang)?' selected':'')+'>'+FLAGS[l]+' '+l+'</option>').join('')+'</select>'+
    '<label>Version</label>'+
    '<select id="jver">'+S.data.versions.map(v=>'<option value="'+v+'"'+(v===(opts.version||S.ver)?' selected':'')+'>'+v+'</option>').join('')+'</select>'+
    '<label>Max files</label><input id="jmax" type="number" value="'+(opts.files?opts.files.length:50)+'">'+
    '<label>Concurrency</label><input id="jcon" type="number" value="3">'+
    fileInfo+
    '<input type="hidden" id="jfiles" value="'+(opts.files?escAttr(JSON.stringify(opts.files)):'')+'">'+
    '<div class="actions">'+
      '<button class="btn btn-outline" onclick="closeDialog()">Cancel</button>'+
      '<button class="btn" onclick="startJob()">Start Job →</button>'+
    '</div></div>';
}
function closeDialog(){document.getElementById('doverlay').classList.add('hidden');}
async function startJob(){
  const filesRaw=document.getElementById('jfiles').value;
  const body={
    lang:document.getElementById('jlang').value,
    version:document.getElementById('jver').value,
    max:parseInt(document.getElementById('jmax').value)||50,
    concurrency:parseInt(document.getElementById('jcon').value)||3,
  };
  if(filesRaw)try{body.files=JSON.parse(filesRaw);}catch{}
  closeDialog();
  try{
    const res=await fetch('/api/jobs',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
    const d=await res.json();
    if(!res.ok){alert('Failed: '+(d.error||'Unknown'));return;}
    S.selected.clear();renderFiles();
  }catch(e){alert('Failed: '+e.message);return;}
  refreshJobs();
}

init();
</script>
</body>
</html>`;

const port = Number(process.env.PORT) || 3456;
export default { port, fetch: app.fetch };
console.log(`🌐 Translation Admin → http://localhost:${port}`);
