import OpenAI from 'openai';
import { NEEDS_TRANSLATION_START } from './assembler';

type ApiType = 'openrouter' | 'openai' | 'anthropic';

export interface TranslateOptions {
  /** Assembled file content with NEEDS_TRANSLATION markers */
  assembledContent: string;
  /** Target language name (e.g., "Simplified Chinese") */
  langName: string;
  /** Translation guidelines */
  guide?: string;
  /** Documentation context */
  docsContext?: string;
  /** API type: 'openrouter', 'openai', 'anthropic' */
  apiType?: ApiType;
  /** API base URL override */
  apiBaseUrl?: string;
  /** API key override (falls back to env vars) */
  apiKey?: string;
  /** Model name override */
  model?: string;
  /** List of models to rotate through (overrides model) */
  modelRotate?: string[];
  /** Per-model max output tokens (model id → tokens) */
  modelMaxTokens?: Map<string, number>;
  /** Max output tokens (default: 16384) */
  maxTokens?: number;
  /** File path for logging */
  filePath?: string;
  /** Logger callback for detailed per-file logging */
  logger?: (message: string) => void;
}

/** Default max output tokens */
const DEFAULT_MAX_TOKENS = 16384;

/** Retry config */
const MAX_RETRIES = 3;
const INITIAL_BACKOFF_MS = 2000;

/**
 * Strip <think>...</think> blocks from model output (reasoning models).
 */
export function stripThinkingBlock(text: string): string {
  return text.replace(/<think>[\s\S]*?<\/think>\s*/g, '').trim();
}

/**
 * Check if the assembled content has any NEEDS_TRANSLATION markers.
 */
export function needsTranslation(content: string): boolean {
  return content.includes(NEEDS_TRANSLATION_START);
}

/**
 * Build the translation prompt for the assembled content.
 */
export function buildPrompt(opts: {
  langName: string;
  guide?: string;
  docsContext?: string;
}): string {
  let prompt = `You are a professional technical translator specializing in software documentation.

TASK: Translate only the sections wrapped in <!-- NEEDS_TRANSLATION --> markers to ${opts.langName}.

RULES:
1. Translate ONLY the content between <!-- NEEDS_TRANSLATION --> and <!-- /NEEDS_TRANSLATION --> markers
2. Remove the <!-- NEEDS_TRANSLATION --> and <!-- /NEEDS_TRANSLATION --> markers from the output
3. Keep ALL other content (already translated text, code blocks, HTML tags) EXACTLY as-is — do not modify a single character
4. Preserve all Markdown formatting, heading levels, links, inline code
5. Keep code blocks, file paths, URLs, variable names unchanged
6. For frontmatter (YAML between ---):
   - Translate ONLY the values, keep all keys unchanged
   - Keep the exact same keys in the exact same order
   - Do NOT add or remove any frontmatter fields
   - Do NOT wrap values in quotes unless the original had quotes
   - Keep the --- delimiters exactly as-is
7. NEVER start a frontmatter value with backticks, quotes, or special characters

CRITICAL STRUCTURE RULES:
8. PRESERVE BLANK LINES EXACTLY. Every blank line in the input MUST appear in the output at the same position. Blank lines separate paragraphs, code blocks, headings, and lists — removing them merges content and BREAKS the document structure.
9. NEVER remove a blank line between a paragraph and a code block (triple backticks).
10. NEVER remove a blank line between a heading (## ...) and the next paragraph.
11. NEVER merge two paragraphs into one by removing the blank line between them.
12. Count paragraphs: the number of text paragraphs in your output MUST equal the number in the input.

CRITICAL TAG RULES:
13. All HTML/JSX tags MUST remain balanced. For every opening tag there must be a matching closing tag:
   - <AppOnly> must have </AppOnly>
   - <PagesOnly> must have </PagesOnly>
   - <details> must have </details>
   - <div ...> must have </div>
14. Do NOT add or remove any HTML/JSX tags. Keep the exact same number of opening and closing tags as the input.
15. Before outputting, verify: count every <AppOnly> and </AppOnly>, <PagesOnly> and </PagesOnly>, <details> and </details> — they MUST match.

OUTPUT: Return the complete file with translations applied and markers removed. Nothing else.`;

  if (opts.docsContext) {
    prompt += `\n\nDOCUMENTATION CONTEXT:\n${opts.docsContext}`;
  }

  if (opts.guide) {
    prompt += `\n\nTRANSLATION GUIDELINES:\n${opts.guide}`;
  }

  return prompt;
}

/**
 * Sleep for a given number of milliseconds.
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Extract JSON object from LLM response.
 * Strips: <think> blocks, markdown fences, any text before { or after }.
 */
function extractJson(response: string): string {
  // Strip thinking blocks
  let raw = stripThinkingBlock(response);
  // Strip markdown code fences
  raw = raw.replace(/^```(?:json)?\s*\n?/m, '').replace(/\n?```\s*$/m, '');
  // Extract from first { to last }
  const start = raw.indexOf('{');
  const end = raw.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) {
    return raw.trim(); // fallback — let JSON.parse give a clear error
  }
  return raw.substring(start, end + 1);
}

/**
 * Attempt to repair broken JSON from LLM output.
 * Common issues: unescaped newlines inside string values,
 * trailing commas, missing closing brace.
 */
function repairJson(raw: string): string {
  // Strategy: walk through the string character by character,
  // track whether we're inside a JSON string value,
  // and escape any literal newlines found inside strings.
  let result = '';
  let inString = false;
  let escaped = false;

  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i];

    if (escaped) {
      result += ch;
      escaped = false;
      continue;
    }

    if (ch === '\\') {
      result += ch;
      escaped = true;
      continue;
    }

    if (ch === '"') {
      inString = !inString;
      result += ch;
      continue;
    }

    if (inString && ch === '\n') {
      result += '\\n';
      continue;
    }

    if (inString && ch === '\r') {
      continue; // skip CR
    }

    if (inString && ch === '\t') {
      result += '\\t';
      continue;
    }

    result += ch;
  }

  // Fix trailing comma before closing brace
  result = result.replace(/,\s*}/g, '}');

  // Ensure closing brace
  const trimmed = result.trim();
  if (trimmed.startsWith('{') && !trimmed.endsWith('}')) {
    // Find last complete key-value pair and close
    const lastQuote = result.lastIndexOf('"');
    if (lastQuote > 0) {
      result = `${result.substring(0, lastQuote + 1)}}`;
    }
  }

  return result;
}

/** Models that returned 400/404 — skip them for the rest of the run */
const deadModels = new Set<string>();

/** Models that hit 429 — temporarily deprioritized */
const rateLimitedModels = new Set<string>();

/**
 * Pick the best available model from the rotation list.
 * Priority: first alive non-rate-limited model (list order = quality order).
 * Falls back to rate-limited models if all good ones are exhausted.
 */
function pickModel(opts: TranslateOptions): string | undefined {
  if (opts.modelRotate && opts.modelRotate.length > 0) {
    const alive = opts.modelRotate.filter((m) => !deadModels.has(m));
    if (alive.length === 0) {
      deadModels.clear();
      return opts.modelRotate[0];
    }
    // Prefer non-rate-limited models (list order = best first)
    const preferred = alive.filter((m) => !rateLimitedModels.has(m));
    if (preferred.length > 0) return preferred[0];
    // All alive models are rate-limited — clear and retry the best
    rateLimitedModels.clear();
    return alive[0];
  }
  return opts.model;
}

/**
 * Check if an error is a model-level failure (bad model, not rate limit).
 */
function isModelError(msg: string): boolean {
  return (
    (msg.includes('400') && msg.includes('not a valid')) ||
    msg.includes('404') ||
    msg.includes('No endpoints found') ||
    msg.includes('Empty response from API') ||
    msg.includes('guardrail restrictions')
  );
}

/**
 * Resolve API configuration for the given API type.
 * Returns { baseURL, apiKey, model } with defaults applied.
 */
function resolveApiConfig(opts: TranslateOptions): {
  baseURL: string;
  apiKey: string;
  model: string;
} {
  const apiType = opts.apiType ?? 'openrouter';

  if (apiType === 'openrouter') {
    const apiKey = opts.apiKey ?? process.env.OPENROUTER_API_KEY ?? '';
    if (!apiKey) {
      throw new Error(
        'No API key found. Set OPENROUTER_API_KEY in .env or pass --api-key.',
      );
    }
    return {
      baseURL: opts.apiBaseUrl ?? 'https://openrouter.ai/api/v1',
      apiKey,
      model:
        pickModel(opts) ??
        process.env.OPENROUTER_MODEL ??
        'deepseek/deepseek-chat-v3-0324:free',
    };
  }

  if (apiType === 'openai') {
    const apiKey = opts.apiKey ?? process.env.OPENAI_API_KEY ?? '';
    if (!apiKey) {
      throw new Error(
        'No API key found. Set OPENAI_API_KEY or pass --api-key.',
      );
    }
    return {
      baseURL: opts.apiBaseUrl ?? 'https://api.deepseek.com',
      apiKey,
      model: pickModel(opts) ?? 'deepseek-chat',
    };
  }

  // anthropic — use OpenAI-compatible endpoint
  const apiKey = opts.apiKey ?? process.env.ANTHROPIC_API_KEY ?? '';
  if (!apiKey) {
    throw new Error(
      'No API key found. Set ANTHROPIC_API_KEY or pass --api-key.',
    );
  }
  return {
    baseURL: opts.apiBaseUrl ?? 'https://api.anthropic.com/v1',
    apiKey,
    model: pickModel(opts) ?? 'claude-sonnet-4-20250514',
  };
}

/**
 * Translate via OpenAI-compatible API with retry and truncation detection.
 * Works with OpenRouter, DeepSeek, and any OpenAI-compatible endpoint.
 */
async function translateWithRetry(
  opts: TranslateOptions,
  systemPrompt: string,
): Promise<string> {
  const { baseURL, apiKey, model } = resolveApiConfig(opts);
  const maxTokens = opts.maxTokens ?? DEFAULT_MAX_TOKENS;

  const client = new OpenAI({ baseURL, apiKey });

  let lastError: Error | undefined;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await client.chat.completions.create({
        model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: opts.assembledContent },
        ],
        max_tokens: maxTokens,
        // @ts-expect-error OpenRouter extra params
        provider: { require_parameters: true },
        reasoning: { exclude: true },
      });

      const choice = response.choices?.[0];
      if (!choice?.message?.content) {
        throw new Error('Empty response from API');
      }

      // Check for truncated output
      if (choice.finish_reason === 'length') {
        throw new Error(
          `Output truncated (finish_reason=length). Model hit max_tokens=${maxTokens}. Try increasing --max-tokens or using a model with higher output limits.`,
        );
      }

      return stripThinkingBlock(choice.message.content);
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      const isRetryable =
        lastError.message.includes('429') ||
        lastError.message.includes('503') ||
        lastError.message.includes('405') ||
        lastError.message.includes('timeout') ||
        lastError.message.includes('ECONNRESET') ||
        lastError.message.includes('truncated');

      if (!isRetryable || attempt === MAX_RETRIES) {
        throw lastError;
      }

      const backoff = INITIAL_BACKOFF_MS * 2 ** (attempt - 1);
      console.warn(
        `⚠️ Attempt ${attempt}/${MAX_RETRIES} failed: ${lastError.message}. Retrying in ${backoff / 1000}s...`,
      );
      await sleep(backoff);
    }
  }

  throw lastError ?? new Error('Translation failed after retries');
}

/**
 * Translate assembled content (legacy whole-file mode).
 * Supports: 'openrouter' (default), 'openai' (OpenAI-compatible), 'anthropic'.
 * Includes retry with exponential backoff and truncation detection.
 */
export async function translateAssembled(
  opts: TranslateOptions,
): Promise<string> {
  const systemPrompt = buildPrompt({
    langName: opts.langName,
    guide: opts.guide,
    docsContext: opts.docsContext,
  });

  return translateWithRetry(opts, systemPrompt);
}

// ── Structured JSON translation ──────────────────────────────────────

interface TranslationNode {
  key: string;
  type: string;
  text: string;
}

/**
 * Build prompt for structured JSON translation.
 * Input: JSON with typed nodes. Output: JSON {key: translation}.
 */
export function buildJsonPrompt(opts: {
  langName: string;
  guide?: string;
  docsContext?: string;
}): string {
  let prompt = `You are a professional technical translator specializing in software documentation.

TASK: Translate the provided nodes to ${opts.langName} and return as JSON.

INPUT: A JSON object with a "nodes" array. Each node has:
- "key": unique identifier (use as key in your response)
- "type": one of frontmatter, heading, paragraph, list, blockquote, html
- "text": the content to translate

OUTPUT: A single valid JSON object mapping each key to its translation. No other text.

RULES:
1. Return ONLY valid JSON. No markdown fences, no explanation.
2. Escape newlines as \\n in JSON strings. Output must be parseable JSON.
3. Translate EVERY node. Do not skip any key.
4. Preserve Markdown: heading levels (##), links [text](url), inline \`code\`, **bold**, *italic*.
5. Keep code blocks, file paths, URLs, variable names, component names unchanged.
6. Keep HTML/JSX tags balanced: <AppOnly></AppOnly>, <PagesOnly></PagesOnly>.
7. CRITICAL: Inline code wrapped in backticks (\`...\`) MUST keep the backticks. Example: \`<Link>\` must stay as \`<Link>\`, NOT become bare <Link>. Bare HTML tags will BREAK the document.

TYPE-SPECIFIC RULES:
- "frontmatter": YAML metadata. Translate values ONLY. Keys like "title:", "description:" MUST stay in English.
  NEVER translate YAML keys. Output: "title: 翻译后的标题" NOT "标题: ..."
  CRITICAL: Never start a value with \` ' " or use : in values. Must be valid YAML.
- "heading": Keep ## or ### prefix exactly as original.
- "list": Keep - or 1. markers and indentation.
- "blockquote": Keep > prefix.
- "html": Translate human text only. Keep all tags/attributes unchanged.

EXAMPLE:
Input: {"nodes":[{"key":"a1","type":"frontmatter","text":"title: Getting Started\\ndescription: Learn Next.js\\n---"},{"key":"b2","type":"heading","text":"## Installation"},{"key":"c3","type":"paragraph","text":"Run the following command:"}]}
Output: {"a1":"title: 入门指南\\ndescription: 学习 Next.js\\n---","b2":"## 安装","c3":"运行以下命令："}`;

  if (opts.docsContext) {
    prompt += `\n\nCONTEXT:\n${opts.docsContext}`;
  }

  if (opts.guide) {
    prompt += `\n\nGUIDELINES:\n${opts.guide}`;
  }

  return prompt;
}

/**
 * Build structured JSON user message from uncached nodes.
 * Each node gets a type based on its AST classification.
 */
/**
 * Extract only translatable fields from frontmatter YAML.
 * Only title and description need translation.
 * Other fields (author, date, image, etc.) are kept as-is.
 */
function extractTranslatableFrontmatter(text: string): {
  translatable: string;
  template: string;
} {
  const lines = text.split('\n');
  const titleLine = lines.find((l) => l.startsWith('title:'));
  const descLines: string[] = [];
  let inDesc = false;
  for (const line of lines) {
    if (line.startsWith('description:')) {
      inDesc = true;
      descLines.push(line);
    } else if (inDesc && (line.startsWith('  ') || line.startsWith('\t'))) {
      descLines.push(line);
    } else {
      inDesc = false;
    }
  }
  const translatable =
    (titleLine || '') + (descLines.length ? `\n${descLines.join('\n')}` : '');
  return { translatable, template: text };
}

/**
 * Rebuild full frontmatter by replacing title/description with translations.
 */
export function rebuildFrontmatter(
  original: string,
  translated: string,
): string {
  const lines = original.split('\n');
  const transLines = translated.split('\n');

  // Extract translated title and description
  // LLM might translate YAML keys (e.g., "标题:" instead of "title:").
  // Try English keys first, then fall back to detecting translated keys.
  let transTitle = transLines.find((l) => l.startsWith('title:'));
  if (!transTitle) {
    // Find first non-empty line that looks like a key:value (translated key)
    const firstKV = transLines.find(
      (l) => l.match(/^[^\s:]+[:：]\s*.+/) && !l.startsWith('description'),
    );
    if (firstKV) {
      // Extract value and reconstruct with English key
      const val = firstKV.replace(/^[^\s:：]+[:：]\s*/, '');
      transTitle = `title: ${val}`;
    }
  }

  const transDescLines: string[] = [];
  let inDesc = false;
  for (const line of transLines) {
    if (
      line.startsWith('description:') ||
      (line.match(/^[^\s:-]+[:：]\s*>-?\s*$/) && !line.startsWith('---'))
    ) {
      inDesc = true;
      // Normalize key to English
      if (!line.startsWith('description:')) {
        transDescLines.push(line.replace(/^[^\s:：]+[:：]/, 'description:'));
      } else {
        transDescLines.push(line);
      }
    } else if (inDesc && (line.startsWith('  ') || line.startsWith('\t'))) {
      transDescLines.push(line);
    } else {
      inDesc = false;
    }
  }

  // Replace in original
  const result: string[] = [];
  let skipDesc = false;
  for (const line of lines) {
    if (line.startsWith('title:') && transTitle) {
      result.push(transTitle);
    } else if (line.startsWith('description:')) {
      skipDesc = true;
      result.push(...transDescLines);
    } else if (skipDesc && (line.startsWith('  ') || line.startsWith('\t'))) {
      // skip continuation of original description
    } else {
      skipDesc = false;
      result.push(line);
    }
  }
  return result.join('\n');
}

export function buildJsonUserMessage(
  uncached: Record<string, string>,
  nodeTypes: Record<string, string>,
): string {
  const nodes: TranslationNode[] = [];
  for (const [md5, text] of Object.entries(uncached)) {
    const type = nodeTypes[md5] ?? 'paragraph';
    let simpleType = type;
    let nodeText = text;

    if (text.includes('title:') && text.includes('---')) {
      simpleType = 'frontmatter';
      // Only send translatable fields (title + description)
      const { translatable } = extractTranslatableFrontmatter(text);
      nodeText = translatable;
    }
    nodes.push({ key: md5, type: simpleType, text: nodeText });
  }
  return JSON.stringify({ nodes });
}

export interface JsonTranslateResult {
  /** Translations keyed by MD5 */
  translations: Record<string, string>;
  /** MD5s that were requested but not returned */
  missing: string[];
  /** MD5s returned that were not requested */
  extra: string[];
}

/**
 * Translate using structured JSON mode.
 * Input: typed nodes as JSON. Output: {md5: translation} JSON.
 * Zero structure mismatch — we control both input and output format.
 */
export async function translateJson(
  opts: TranslateOptions & {
    uncached: Record<string, string>;
    nodeTypes: Record<string, string>;
  },
): Promise<JsonTranslateResult> {
  const entries = Object.entries(opts.uncached);
  const maxTokens = opts.maxTokens ?? DEFAULT_MAX_TOKENS;

  // Estimate total context tokens per chunk.
  // Total context = system prompt + user message (source texts) + json_schema + output
  // Each entry contributes to:
  //   - input: source text + JSON key (user message) + schema property/required
  //   - output: translated text + JSON key
  // Per entry ≈ text_chars * 2.5 / 4 (input text + output) + 80 (JSON/schema overhead per key)
  // System prompt ≈ 2500 chars / 4 ≈ 625 tokens (fixed overhead)
  const SYSTEM_PROMPT_TOKENS = 700;

  function estimateChunkTokens(chunkEntries: [string, string][]) {
    const textTokens = chunkEntries.reduce(
      (sum, [, text]) => sum + Math.ceil((text.length * 2.5) / 4),
      0,
    );
    // JSON schema: each key appears in properties + required (~80 tokens per key)
    const schemaTokens = chunkEntries.length * 80;
    return SYSTEM_PROMPT_TOKENS + textTokens + schemaTokens;
  }

  const totalEstimated = estimateChunkTokens(entries);

  // If everything fits in context, send in one shot
  if (totalEstimated <= maxTokens * 0.85) {
    return translateJsonChunk(opts);
  }

  // Split into chunks that fit within context limit
  const allTranslations: Record<string, string> = {};
  const allMissing: string[] = [];
  const allExtra: string[] = [];

  // Target: 60% of max context to leave room for output
  const targetTokensPerChunk = Math.floor(maxTokens * 0.6);
  const chunks: [string, string][][] = [[]];
  let currentChunkTokens = SYSTEM_PROMPT_TOKENS;

  for (const entry of entries) {
    const entryTokens = Math.ceil((entry[1].length * 2.5) / 4 + 80);
    if (
      currentChunkTokens + entryTokens > targetTokensPerChunk &&
      chunks[chunks.length - 1].length > 0
    ) {
      chunks.push([]);
      currentChunkTokens = SYSTEM_PROMPT_TOKENS;
    }
    chunks[chunks.length - 1].push(entry);
    currentChunkTokens += entryTokens;
  }

  const log = opts.logger ?? console.log;
  log(
    `📦 Splitting ${entries.length} nodes into ${chunks.length} chunks (~${targetTokensPerChunk} tokens each)`,
  );

  for (let i = 0; i < chunks.length; i++) {
    const chunk = Object.fromEntries(chunks[i]);
    const chunkNodeTypes: Record<string, string> = {};
    for (const md5 of Object.keys(chunk)) {
      chunkNodeTypes[md5] = opts.nodeTypes[md5] ?? 'paragraph';
    }

    const result = await translateJsonChunk({
      ...opts,
      uncached: chunk,
      nodeTypes: chunkNodeTypes,
    });

    Object.assign(allTranslations, result.translations);
    allMissing.push(...result.missing);
    allExtra.push(...result.extra);
  }

  return {
    translations: allTranslations,
    missing: allMissing,
    extra: allExtra,
  };
}

/**
 * Translate a single chunk of nodes via JSON mode.
 */
async function translateJsonChunk(
  opts: TranslateOptions & {
    uncached: Record<string, string>;
    nodeTypes: Record<string, string>;
  },
): Promise<JsonTranslateResult> {
  const systemPrompt = buildJsonPrompt({
    langName: opts.langName,
    guide: opts.guide,
    docsContext: opts.docsContext,
  });

  const userMessage = buildJsonUserMessage(opts.uncached, opts.nodeTypes);

  const maxTokens = opts.maxTokens ?? DEFAULT_MAX_TOKENS;
  const log = opts.logger ?? console.warn;

  let lastError: Error | undefined;
  const requestedMd5s = Object.keys(opts.uncached);

  log(
    `📤 SYSTEM PROMPT (${systemPrompt.length} chars):\n${systemPrompt}\n--- END SYSTEM PROMPT ---`,
  );
  log(
    `📤 USER MESSAGE (${userMessage.length} chars):\n${userMessage}\n--- END USER MESSAGE ---`,
  );

  // Extra attempts when rotating models (bad models get skipped)
  const maxAttempts =
    opts.modelRotate && opts.modelRotate.length > 0
      ? MAX_RETRIES + opts.modelRotate.length
      : MAX_RETRIES;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    // Resolve model per attempt (rotation picks next model each time)
    const { baseURL, apiKey, model } = resolveApiConfig(opts);
    const client = new OpenAI({ baseURL, apiKey });

    // Per-model max_tokens (from model-rotate info), fallback to global
    const effectiveMaxTokens = opts.modelMaxTokens?.get(model) ?? maxTokens;

    log(
      `🔧 attempt=${attempt}/${maxAttempts} model=${model} keys=${requestedMd5s.length} max_tokens=${effectiveMaxTokens}`,
    );

    try {
      const t0 = Date.now();
      const response = await client.chat.completions.create({
        model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage },
        ],
        max_tokens: effectiveMaxTokens,
        response_format: {
          type: 'json_schema',
          json_schema: {
            name: 'translation_result',
            strict: false,
            schema: {
              type: 'object',
              properties: Object.fromEntries(
                requestedMd5s.map((k) => [k, { type: 'string' }]),
              ),
              required: requestedMd5s,
              additionalProperties: false,
            },
          },
        },
        // @ts-expect-error OpenRouter extra params
        provider: { require_parameters: true },
        reasoning: { exclude: true },
      });

      const elapsed = Date.now() - t0;
      const choice = response.choices?.[0];
      const usage = response.usage;

      // Log response details
      log(
        `📥 response in ${(elapsed / 1000).toFixed(1)}s` +
          ` | finish=${choice?.finish_reason}` +
          ` | content=${choice?.message?.content?.length ?? 0} chars` +
          (usage
            ? ` | tokens: in=${usage.prompt_tokens} out=${usage.completion_tokens} total=${usage.total_tokens}`
            : ''),
      );
      if (choice?.message?.content) {
        log(
          `📥 RESPONSE BODY:\n${choice.message.content}\n--- END RESPONSE BODY ---`,
        );
      }

      if (!choice?.message?.content) {
        throw new Error('Empty response from API');
      }

      if (choice.finish_reason === 'length') {
        throw new Error(
          `Output truncated (finish_reason=length). Model hit max_tokens=${maxTokens}.`,
        );
      }

      // Parse JSON from response
      const raw = extractJson(choice.message.content);

      let parsed: Record<string, string>;
      try {
        parsed = JSON.parse(raw);
      } catch {
        try {
          parsed = JSON.parse(repairJson(raw));
        } catch {
          throw new Error(`Failed to parse JSON: ${raw.substring(0, 200)}...`);
        }
      }

      // Validate: check for missing and extra keys
      const returnedMd5s = new Set(Object.keys(parsed));
      const missing = requestedMd5s.filter((md5) => !returnedMd5s.has(md5));
      const extra = [...returnedMd5s].filter(
        (md5) => !requestedMd5s.includes(md5),
      );

      if (missing.length > 0) {
        log(`⚠️ JSON missing ${missing.length}/${requestedMd5s.length} keys`);
      }
      if (extra.length > 0) {
        log(`⚠️ JSON has ${extra.length} extra keys`);
        if (missing.length > requestedMd5s.length * 0.5) {
          log('   Extra key samples:');
          for (const k of extra.slice(0, 3)) {
            log(
              `     ${k.substring(0, 16)}… = ${String(parsed[k]).substring(0, 60).replace(/\n/g, '↵')}`,
            );
          }
          log('   Expected key samples:');
          for (const k of requestedMd5s.slice(0, 3)) {
            log(`     ${k.substring(0, 16)}…`);
          }
        }
      }

      // Try to recover extra keys → missing keys (LLM may have corrupted a key)
      if (extra.length > 0 && missing.length > 0) {
        for (const extraKey of extra) {
          let bestMatch: string | null = null;
          let bestDist = Number.POSITIVE_INFINITY;
          for (const missKey of missing) {
            let diff = Math.abs(extraKey.length - missKey.length);
            const minLen = Math.min(extraKey.length, missKey.length);
            for (let i = 0; i < minLen; i++) {
              if (extraKey[i] !== missKey[i]) diff++;
            }
            if (diff < bestDist) {
              bestDist = diff;
              bestMatch = missKey;
            }
          }
          if (bestMatch && bestDist <= 3) {
            log(
              `🔧 Recovered key: ${extraKey} → ${bestMatch} (${bestDist} char diff)`,
            );
            parsed[bestMatch] = parsed[extraKey];
            missing.splice(missing.indexOf(bestMatch), 1);
          }
        }
      }

      // Detect garbage: if most values are identical, model is broken
      const values = Object.values(parsed);
      if (values.length > 3) {
        const freq = new Map<string, number>();
        for (const v of values) freq.set(v, (freq.get(v) ?? 0) + 1);
        const maxFreq = Math.max(...freq.values());
        if (maxFreq > values.length * 0.5) {
          const dupVal = [...freq.entries()].find(
            ([, c]) => c === maxFreq,
          )?.[0];
          const msg = `Model returned identical value for ${maxFreq}/${values.length} keys: "${dupVal?.substring(0, 60)}..."`;
          log(`🗑️ ${msg}`);

          // Mark model as dead if rotating
          if (opts.modelRotate?.length) {
            deadModels.add(model);
            log(`💀 Model ${model} produces garbage, skipping`);
            continue;
          }
          throw new Error(msg);
        }
      }

      // Filter to only requested keys
      const translations: Record<string, string> = {};
      for (const md5 of requestedMd5s) {
        if (parsed[md5]) {
          translations[md5] = parsed[md5];
        }
      }

      return { translations, missing, extra };
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      const msg = lastError.message;

      // Model-level error (400/404): mark model as dead, try next immediately
      if (isModelError(msg) && opts.modelRotate?.length) {
        deadModels.add(model);
        log(`💀 Model ${model} is dead (${msg.substring(0, 80)}), skipping`);
        continue;
      }

      // Rate limited (429): deprioritize model, try next immediately
      if (msg.includes('429') && opts.modelRotate?.length) {
        rateLimitedModels.add(model);
        log(`⏳ Model ${model} rate-limited, trying next model`);
        continue;
      }

      const isRetryable =
        msg.includes('429') ||
        msg.includes('503') ||
        msg.includes('405') ||
        msg.includes('timeout') ||
        msg.includes('ECONNRESET') ||
        msg.includes('truncated') ||
        msg.includes('Empty response') ||
        msg.includes('Failed to parse JSON');

      if (!isRetryable || attempt === maxAttempts) {
        throw lastError;
      }

      const backoff = INITIAL_BACKOFF_MS * 2 ** (attempt - 1);
      log(
        `⚠️ Attempt ${attempt}/${maxAttempts} failed: ${msg}. Retrying in ${backoff / 1000}s...`,
      );
      await sleep(backoff);
    }
  }

  throw lastError ?? new Error('Translation failed after retries');
}
