import { Hono } from 'hono';
import { cors } from 'hono/cors';
import jobRoutes from './routes/jobs';
import statusRoutes from './routes/status';

const app = new Hono();

app.use('/api/*', cors());
app.route('/api/status', statusRoutes);
app.route('/api/jobs', jobRoutes);
app.get('/api/health', (c) => c.json({ ok: true }));

// Redirect to Vite dev server
app.get('/', (c) => c.redirect('http://localhost:3457'));

const port = Number(process.env.PORT) || 3456;
export default { port, fetch: app.fetch };
console.log(`🌐 Translation Admin API → http://localhost:${port}`);
console.log(`   Open UI → http://localhost:3457`);
