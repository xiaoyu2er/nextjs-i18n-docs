import OpenAI from 'openai';
import { NEEDS_TRANSLATION_START } from './assembler';

interface TranslateOptions {
  /** Assembled file content with NEEDS_TRANSLATION markers */
  assembledContent: string;
  /** Target language name (e.g., "Simplified Chinese") */
  langName: string;
  /** Translation guidelines */
  guide?: string;
  /** Documentation context */
  docsContext?: string;
  /** OpenAI-compatible API base URL */
  apiBaseUrl?: string;
  /** Model name */
  model?: string;
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
 * Translate assembled content by calling an OpenAI-compatible API.
 * Only translates sections wrapped in NEEDS_TRANSLATION markers.
 */
export async function translateAssembled(
  opts: TranslateOptions,
): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error(
      'OPENAI_API_KEY is not set. Set it to use the translation API.',
    );
  }

  const client = new OpenAI({
    baseURL: opts.apiBaseUrl ?? 'https://api.deepseek.com',
    apiKey,
  });

  const systemPrompt = buildPrompt({
    langName: opts.langName,
    guide: opts.guide,
    docsContext: opts.docsContext,
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
    throw new Error('Empty response from translation API');
  }

  return content;
}
