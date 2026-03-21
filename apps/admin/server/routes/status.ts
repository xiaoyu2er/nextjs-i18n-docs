import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { Hono } from 'hono';
import {
  getFileBlocks,
  getFileCoverage,
  getFileDetail,
  getOverview,
  LANGS,
  rescan,
  VERSIONS,
} from '../services/status';

const ROOT = resolve(import.meta.dir, '../../../..');
const app = new Hono();

/** GET /api/status — Overview of all versions and languages */
app.get('/', (c) => {
  const overview = getOverview();
  return c.json({
    versions: VERSIONS.map((v) => v.version),
    langs: ['en', ...LANGS],
    data: overview,
  });
});

/** GET /api/status/:version/:lang — File-level coverage */
app.get('/:version/:lang', (c) => {
  const { version, lang } = c.req.param();

  if (lang === 'en') {
    // EN is always 100% — return all files from source_files
    const anyLang = LANGS[0];
    const coverage = getFileCoverage(version, anyLang);
    return c.json(
      coverage.map((f) => ({
        file: f.file,
        total: f.total,
        translated: f.total,
      })),
    );
  }

  return c.json(getFileCoverage(version, lang));
});

/** GET /api/status/:version/:lang/file?path=... — Node-level detail */
app.get('/:version/:lang/file', (c) => {
  const { version, lang } = c.req.param();
  const filePath = c.req.query('path');
  if (!filePath) return c.json({ error: 'Missing path query param' }, 400);

  if (lang === 'en') {
    const detail = getFileDetail(version, LANGS[0], filePath);
    return c.json(detail.map((d) => ({ ...d, translation: null })));
  }

  return c.json(getFileDetail(version, lang, filePath));
});

/** GET /api/status/:version/:lang/blocks?path=... — Node-structured content */
app.get('/:version/:lang/blocks', (c) => {
  const { version, lang } = c.req.param();
  const filePath = c.req.query('path');
  if (!filePath) return c.json({ error: 'Missing path query param' }, 400);

  const blocks = getFileBlocks(version, lang, filePath);
  if (!blocks) return c.json({ error: 'File not found' }, 404);

  return c.json({ file: filePath, lang, version, blocks });
});

/** GET /api/status/content/:version/:lang/* — Raw file content */
app.get('/content/:version/:lang/*', (c) => {
  const { version, lang } = c.req.param();
  const prefix = `/api/status/content/${version}/${lang}/`;
  const filePath = decodeURIComponent(c.req.path.slice(prefix.length));

  if (!VERSIONS.includes(version as any))
    return c.json({ error: 'Unknown version' }, 404);

  const dir =
    lang === 'en'
      ? join(ROOT, 'content', version)
      : join(ROOT, '.cache/content', version, lang);
  const fullPath = join(dir, filePath);

  if (!existsSync(fullPath)) {
    return c.json({ error: 'File not found' }, 404);
  }

  const content = readFileSync(fullPath, 'utf8');
  return c.json({ file: filePath, lang, version, content });
});

/** POST /api/status/:version/rescan — Force rescan source_files */
app.post('/:version/rescan', (c) => {
  const { version } = c.req.param();
  const count = rescan(version);
  return c.json({ version, files: count });
});

export default app;
