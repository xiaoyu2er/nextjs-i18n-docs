#!/usr/bin/env bun
/**
 * List OpenRouter models suitable for translation.
 *
 * Usage:
 *   bun scripts/list-models.ts                  # All with response_format
 *   bun scripts/list-models.ts --free           # Free only
 *   bun scripts/list-models.ts --max-price 0.5  # Input ≤ $0.50/M
 *   bun scripts/list-models.ts --min-ctx 64     # Context ≥ 64k
 *   bun scripts/list-models.ts --json           # JSON output
 *   bun scripts/list-models.ts --rotate-cmd     # Print --model-rotate command
 *   bun scripts/list-models.ts --free --rotate-cmd  # Free models rotate command
 */

interface RawModel {
  id: string;
  name: string;
  context_length: number;
  pricing: { prompt: string; completion: string };
  architecture: { modality: string; output_modalities: string[] };
  top_provider: { max_completion_tokens: number } | null;
  supported_parameters: string[];
}

const args = process.argv.slice(2);
const hasFlag = (f: string) => args.includes(`--${f}`);
const getOpt = (f: string, def: string) => {
  const i = args.indexOf(`--${f}`);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : def;
};

const freeOnly = hasFlag('free');
const maxPrice = Number.parseFloat(getOpt('max-price', '999999'));
const minCtx = Number.parseInt(getOpt('min-ctx', '0'), 10) * 1000;
const jsonOut = hasFlag('json');
const rotateCmd = hasFlag('rotate-cmd');
const noExclude = hasFlag('no-exclude');

// Models known to be bad for structured translation
const EXCLUDED_MODELS = new Set([
  'openrouter/free', // Meta-router, unreliable
  'google/gemma-3n-e2b-it:free', // 2B, too small
  'google/gemma-3n-e4b-it:free', // 4B, too small
  'google/gemma-3-4b-it:free', // 4B, too small
  'qwen/qwen3-4b:free', // 4B, empty responses
  'arcee-ai/trinity-mini:free', // Returns garbage for multi-key requests
  'arcee-ai/trinity-large-preview:free', // 404 with json_schema
  'cognitivecomputations/dolphin-mistral-24b-venice-edition:free', // 24B, low quality
]);

const res = await fetch('https://openrouter.ai/api/v1/models');
if (!res.ok) {
  console.error(`Failed: ${res.status}`);
  process.exit(1);
}
const { data } = (await res.json()) as { data: RawModel[] };

const models = data
  .filter((m) => {
    if (!m.pricing) return false;
    const pp = Number.parseFloat(m.pricing.prompt);
    const cp = Number.parseFloat(m.pricing.completion);
    if (pp < 0 || cp < 0) return false;
    if (!m.architecture?.modality?.startsWith('text')) return false;
    if (!m.supported_parameters?.includes('response_format')) return false;

    const ppM = pp * 1e6;
    const isFree = pp === 0 && cp === 0;

    if (!noExclude && EXCLUDED_MODELS.has(m.id)) return false;
    if (freeOnly && !isFree) return false;
    if (ppM > maxPrice) return false;
    if (m.context_length < minCtx) return false;

    return true;
  })
  .map((m) => {
    const pp = Number.parseFloat(m.pricing.prompt) * 1e6;
    const cp = Number.parseFloat(m.pricing.completion) * 1e6;
    return {
      id: m.id,
      name: m.name,
      isFree: pp === 0 && cp === 0,
      promptPrice: pp,
      completionPrice: cp,
      contextLength: m.context_length,
      maxOutput: m.top_provider?.max_completion_tokens ?? 0,
    };
  })
  .sort((a, b) => a.promptPrice - b.promptPrice);

if (jsonOut) {
  console.log(JSON.stringify(models, null, 2));
  process.exit(0);
}

if (rotateCmd) {
  const ids = models.map((m) => m.id).join(',');
  console.log(`--model-rotate ${ids}`);
  process.exit(0);
}

// Table output
const ctxFmt = (n: number) =>
  n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : `${(n / 1000).toFixed(0)}k`;
const pFmt = (n: number) => (n === 0 ? 'FREE' : `$${n.toFixed(4)}`);

console.log(
  `${'ID'.padEnd(55)} ${'In/M'.padStart(8)} ${'Out/M'.padStart(8)} ${'Ctx'.padStart(6)} ${'Out'.padStart(6)}`,
);
console.log('-'.repeat(90));
for (const m of models) {
  console.log(
    `${(m.isFree ? '🆓 ' : '  ') + m.id}`.padEnd(55) +
      ` ${pFmt(m.promptPrice).padStart(8)} ${pFmt(m.completionPrice).padStart(8)} ${ctxFmt(m.contextLength).padStart(6)} ${ctxFmt(m.maxOutput).padStart(6)}`,
  );
}
console.log(`\nTotal: ${models.length} models`);
