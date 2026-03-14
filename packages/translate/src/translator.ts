import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';
import { NEEDS_TRANSLATION_START } from './assembler';

type ApiType = 'openai' | 'anthropic' | 'pi';

interface TranslateOptions {
  /** Assembled file content with NEEDS_TRANSLATION markers */
  assembledContent: string;
  /** Target language name (e.g., "Simplified Chinese") */
  langName: string;
  /** Translation guidelines */
  guide?: string;
  /** Documentation context */
  docsContext?: string;
  /** API type: 'openai', 'anthropic', or 'pi' */
  apiType?: ApiType;
  /** API base URL (for openai/anthropic) */
  apiBaseUrl?: string;
  /** API key (for openai/anthropic, falls back to env vars) */
  apiKey?: string;
  /** Model name */
  model?: string;
  /** Provider name (for pi mode) */
  provider?: string;
}

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

CRITICAL TAG RULES:
8. All HTML/JSX tags MUST remain balanced. For every opening tag there must be a matching closing tag:
   - <AppOnly> must have </AppOnly>
   - <PagesOnly> must have </PagesOnly>
   - <details> must have </details>
   - <div ...> must have </div>
9. Do NOT add or remove any HTML/JSX tags. Keep the exact same number of opening and closing tags as the input.
10. Before outputting, verify: count every <AppOnly> and </AppOnly>, <PagesOnly> and </PagesOnly>, <details> and </details> — they MUST match.

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
 * Translate via pi CLI in print mode.
 * Uses pi's auth and model registry — no API key management needed.
 */
function translateWithPi(opts: TranslateOptions, systemPrompt: string): string {
  // Write assembled content to temp file for @file reference
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pi-translate-'));
  const contentFile = path.join(tmpDir, 'content.mdx');
  fs.writeFileSync(contentFile, opts.assembledContent, 'utf8');

  try {
    const args = [
      '-p',
      '--no-tools',
      '--no-extensions',
      '--no-skills',
      '--no-prompt-templates',
      '--no-session',
    ];

    if (opts.provider) {
      args.push('--provider', opts.provider);
    }
    if (opts.model) {
      args.push('--model', opts.model);
    }

    args.push('--system-prompt', systemPrompt);
    args.push(`@${contentFile}`);
    args.push(
      'Translate the file above according to the system prompt instructions. Output only the translated file.',
    );

    const result = execFileSync('pi', args, {
      encoding: 'utf8',
      maxBuffer: 10 * 1024 * 1024, // 10MB
      timeout: 15 * 60 * 1000, // 15 min
    });

    return stripThinkingBlock(result);
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
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
    max_tokens: 8192,
  });

  const content = response.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error('Empty response from OpenAI API');
  }

  return stripThinkingBlock(content);
}

/**
 * Translate assembled content.
 * Supports: 'pi' (pi CLI), 'openai' (OpenAI-compatible), 'anthropic' (Anthropic API).
 */
export async function translateAssembled(
  opts: TranslateOptions,
): Promise<string> {
  const systemPrompt = buildPrompt({
    langName: opts.langName,
    guide: opts.guide,
    docsContext: opts.docsContext,
  });

  const apiType = opts.apiType ?? 'pi';

  if (apiType === 'pi') {
    return translateWithPi(opts, systemPrompt);
  }
  if (apiType === 'anthropic') {
    return translateWithAnthropic(opts, systemPrompt);
  }
  return translateWithOpenAI(opts, systemPrompt);
}
