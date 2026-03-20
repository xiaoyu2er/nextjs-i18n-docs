import { Hono } from 'hono';
import {
  getFileCoverage,
  getFileDetail,
  getOverview,
  LANGS,
  VERSIONS,
} from '../services/status';

const app = new Hono();

/** GET /api/status — Overview of all versions and languages */
app.get('/', (c) => {
  const overview = getOverview();
  return c.json({
    versions: VERSIONS.map((v) => v.version),
    langs: [...LANGS],
    data: overview,
  });
});

/** GET /api/status/:version/:lang — File-level coverage */
app.get('/:version/:lang', (c) => {
  const { version, lang } = c.req.param();
  const coverage = getFileCoverage(version, lang);
  return c.json(coverage);
});

/** GET /api/status/:version/:lang/file?path=... — Node-level detail */
app.get('/:version/:lang/file', (c) => {
  const { version, lang } = c.req.param();
  const filePath = c.req.query('path');
  if (!filePath) return c.json({ error: 'Missing path query param' }, 400);
  const detail = getFileDetail(version, lang, filePath);
  return c.json(detail);
});

export default app;
