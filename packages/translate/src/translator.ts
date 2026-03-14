import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';
import { NEEDS_TRANSLATION_START } from './assembler';

type ApiType = 'openai' | 'anthropic';

interface TranslateOptions {
  /** Assembled file content with NEEDS_TRANSLATION markers */
  assembledContent: string;
  /** Target language name (e.g., "Simplified Chinese") */
  langName: string;
  /** Translation guidelines */
  guide?: string;
  /** Documentation context */
  docsContext?: string;
  /** API type: 'openai' or 'anthropic' */
  apiType?: ApiType;
  /** API base URL */
  apiBaseUrl?: string;
  /** API key (falls back to env vars) */
  apiKey?: string;
  /** Model name */
  model?: string;
}

/**
 * Strip <think>...</think> blocks from model output (reasoning models like MiniMax-M2.5).
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
6. For frontmatter (YAML between ---), translate title/description values but keep keys unchanged
7. NEVER start a frontmatter value with backticks, quotes, or special characters

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
 * Translate via Anthropic Messages API (used by MiniMax, Claude, etc.)
 */
async function translateWithAnthropic(
  opts: TranslateOptions,
  systemPrompt: string,
): Promise<string> {
  const apiKey =
    opts.apiKey ?? process.env.ANTHROPIC_API_KEY ?? process.env.MINIMAX_API_KEY;
  if (!apiKey) {
    throw new Error(
      'No API key found. Set apiKey option, ANTHROPIC_API_KEY, or MINIMAX_API_KEY.',
    );
  }

  const client = new Anthropic({
    baseURL: opts.apiBaseUrl ?? 'https://api.minimax.io/anthropic',
    apiKey,
  });

  const model = opts.model ?? 'MiniMax-M2.1';

  const response = await client.messages.create({
    model,
    max_tokens: 16384,
    system: systemPrompt,
    messages: [{ role: 'user', content: opts.assembledContent }],
  });

  const textBlock = response.content.find((b) => b.type === 'text');
  if (!textBlock || textBlock.type !== 'text') {
    throw new Error('Empty response from Anthropic API');
  }

  return stripThinkingBlock(textBlock.text);
}

/**
 * Translate via OpenAI-compatible API (used by DeepSeek, etc.)
 */
async function translateWithOpenAI(
  opts: TranslateOptions,
  systemPrompt: string,
): Promise<string> {
  const apiKey = opts.apiKey ?? process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('No API key found. Set apiKey option or OPENAI_API_KEY.');
  }

  const client = new OpenAI({
    baseURL: opts.apiBaseUrl ?? 'https://api.deepseek.com',
    apiKey,
  });

  const model = opts.model ?? 'deepseek-chat';

  const response = await client.chat.completions.create({
    model,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: opts.assembledContent },
    ],
    max_tokens: 16384,
  });

  const content = response.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error('Empty response from OpenAI API');
  }

  return stripThinkingBlock(content);
}

/**
 * Translate assembled content by calling a translation API.
 * Supports both OpenAI-compatible and Anthropic APIs.
 */
export async function translateAssembled(
  opts: TranslateOptions,
): Promise<string> {
  const systemPrompt = buildPrompt({
    langName: opts.langName,
    guide: opts.guide,
    docsContext: opts.docsContext,
  });

  const apiType = opts.apiType ?? 'anthropic';

  if (apiType === 'anthropic') {
    return translateWithAnthropic(opts, systemPrompt);
  }
  return translateWithOpenAI(opts, systemPrompt);
}
