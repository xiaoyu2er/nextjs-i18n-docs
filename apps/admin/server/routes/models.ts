import { Hono } from 'hono';

const app = new Hono();

interface OpenRouterModel {
  id: string;
  name: string;
  pricing: {
    prompt: string;
    completion: string;
  };
  context_length: number;
  architecture: {
    modality: string;
    output_modalities: string[];
    tokenizer: string;
  };
  top_provider: {
    context_length: number;
    max_completion_tokens: number;
    is_moderated: boolean;
  };
  supported_parameters: string[];
}

let cachedModels: OpenRouterModel[] | null = null;
let cacheTime = 0;
const CACHE_TTL = 5 * 60 * 1000;

/** GET /api/models — List OpenRouter models */
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
    .filter((m) => {
      if (!m.pricing) return false;
      const pp = Number.parseFloat(m.pricing.prompt);
      const cp = Number.parseFloat(m.pricing.completion);
      if (pp < 0 || cp < 0) return false;
      // Only text→text models
      if (!m.architecture?.modality?.startsWith('text')) return false;
      if (!m.architecture.output_modalities?.includes('text')) return false;
      return true;
    })
    .map((m) => {
      const pp = Number.parseFloat(m.pricing.prompt) * 1_000_000;
      const cp = Number.parseFloat(m.pricing.completion) * 1_000_000;
      return {
        id: m.id,
        name: m.name,
        promptPrice: pp,
        completionPrice: cp,
        contextLength: m.context_length,
        maxOutput: m.top_provider?.max_completion_tokens ?? 0,
        isFree: pp === 0 && cp === 0,
        supportsJson: m.supported_parameters?.includes('response_format'),
        supportsTools: m.supported_parameters?.includes('tools'),
        provider: m.id.split('/')[0],
      };
    })
    .sort((a, b) => a.promptPrice - b.promptPrice);
}

export default app;
