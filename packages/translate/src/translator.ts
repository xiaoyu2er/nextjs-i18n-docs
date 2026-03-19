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
  /** Max output tokens (default: 16384) */
  maxTokens?: number;
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
        opts.model ??
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
      model: opts.model ?? 'deepseek-chat',
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
    model: opts.model ?? 'claude-sonnet-4-20250514',
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

TYPE-SPECIFIC RULES:
- "frontmatter": YAML metadata. Translate values only, keep keys unchanged.
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
export function buildJsonUserMessage(
  uncached: Record<string, string>,
  nodeTypes: Record<string, string>,
): string {
  const nodes: TranslationNode[] = [];
  for (const [md5, text] of Object.entries(uncached)) {
    const type = nodeTypes[md5] ?? 'paragraph';
    // Map parser types to simpler categories
    let simpleType = type;
    if (text.includes('title:') && text.includes('---')) {
      simpleType = 'frontmatter';
    }
    nodes.push({ key: md5, type: simpleType, text });
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
  const systemPrompt = buildJsonPrompt({
    langName: opts.langName,
    guide: opts.guide,
    docsContext: opts.docsContext,
  });

  const userMessage = buildJsonUserMessage(opts.uncached, opts.nodeTypes);

  const { baseURL, apiKey, model } = resolveApiConfig(opts);
  const maxTokens = opts.maxTokens ?? DEFAULT_MAX_TOKENS;
  const client = new OpenAI({ baseURL, apiKey });

  let lastError: Error | undefined;
  const requestedMd5s = Object.keys(opts.uncached);

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await client.chat.completions.create({
        model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage },
        ],
        max_tokens: maxTokens,
      });

      const choice = response.choices?.[0];
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
        console.warn(
          `⚠️ JSON translation missing ${missing.length}/${requestedMd5s.length} keys`,
        );
      }
      if (extra.length > 0) {
        console.warn(
          `⚠️ JSON translation has ${extra.length} extra keys (ignored)`,
        );
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
      const isRetryable =
        lastError.message.includes('429') ||
        lastError.message.includes('503') ||
        lastError.message.includes('405') ||
        lastError.message.includes('timeout') ||
        lastError.message.includes('ECONNRESET') ||
        lastError.message.includes('truncated') ||
        lastError.message.includes('Failed to parse JSON');

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
