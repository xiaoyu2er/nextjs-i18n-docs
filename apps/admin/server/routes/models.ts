import { Hono } from 'hono';

const app = new Hono();

interface OpenRouterModel {
  id: string;
  name: string;
  pricing: { prompt: string; completion: string };
  context_length: number;
}

let cachedModels: OpenRouterModel[] | null = null;
let cacheTime = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 min

/** GET /api/models — List OpenRouter models, sorted by price */
app.get('/', async (c) => {
  const now = Date.now();
  if (cachedModels && now - cacheTime < CACHE_TTL) {
    return c.json(formatModels(cachedModels));
  }

  try {
    const res = await fetch('https://openrouter.ai/api/v1/models');
    if (!res.ok) {
      return c.json({ error: `OpenRouter API error: ${res.status}` }, 502);
    }
    const { data } = (await res.json()) as { data: OpenRouterModel[] };
    cachedModels = data;
    cacheTime = now;
    return c.json(formatModels(data));
  } catch (err) {
    return c.json(
      { error: err instanceof Error ? err.message : 'Failed to fetch models' },
      500,
    );
  }
});

function formatModels(models: OpenRouterModel[]) {
  return models
    .filter(
      (m) =>
        m.pricing &&
        Number.parseFloat(m.pricing.prompt) >= 0 &&
        Number.parseFloat(m.pricing.completion) >= 0 &&
        !m.id.includes('vision') &&
        !m.id.includes('image'),
    )
    .map((m) => ({
      id: m.id,
      name: m.name,
      promptPrice: Number.parseFloat(m.pricing.prompt) * 1_000_000,
      completionPrice: Number.parseFloat(m.pricing.completion) * 1_000_000,
      contextLength: m.context_length,
      isFree:
        Number.parseFloat(m.pricing.prompt) === 0 &&
        Number.parseFloat(m.pricing.completion) === 0,
    }))
    .sort((a, b) => a.promptPrice - b.promptPrice);
}

export default app;
