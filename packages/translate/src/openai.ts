import OpenAI from 'openai';
import type { ChatCompletionMessageParam } from 'openai/resources.mjs';
import {
  MAX_OUTPUT_TOKENS,
  estimateTokens,
  needsChunking,
  splitIntoChunks,
} from './chunk';
import { logger } from './logger';

interface LangConfig {
  name: string;
}

interface TranslateDocumentParams {
  content: string;
  langConfig: LangConfig;
  context?: string;
}

// Initialize OpenAI client if API key is available
export const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({
      baseURL: 'https://api.deepseek.com',
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null;

// Check for API key only when translation functions are called
export function checkApiKey() {
  if (!process.env.OPENAI_API_KEY) {
    logger.error('Error: OPENAI_API_KEY is not set.');
    return false;
  }
  return true;
}

export const model = 'deepseek-chat';

export const systemPrompt =
  'You are a professional technical translator specializing in software documentation. You are particularly skilled at translating React, web development, and programming terminology, keeping the translations consistent and readable.';

// Helper function to translate a single chunk
async function translateChunk(
  chunk: string,
  langConfig: LangConfig,
  context: string,
): Promise<string> {
  if (!openai) {
    throw new Error('OPENAI_API_KEY is not set.');
  }

  const textLength = chunk.length;
  const prompt = `
Translate the following documentation from English to ${langConfig.name}.
The document being translated is of MDX file type, which means there are components in the text. Please ensure component closing tags are not missing, for example:
\`<AppOnly> </AppOnly>\` and \`<PagesOnly> </PagesOnly>\`.
Keep all code blocks, markdown formatting, HTML tags, and variables unchanged.
Do not translate text within \`\`\` code blocks or inline \`code\`.
Do not translate URLs or file paths.
Maintain the original paragraph structure and heading levels.
Provide only the translated content without any introduction, prefixes, or meta-explanations about the translation. Output just the translation itself.

${context}

HERE IS THE TEXT TO TRANSLATE:
`;

  logger.debug(
    `Sending chunk translation request, text length: ${textLength} characters, prompt total length: ${
      prompt.length + textLength
    } characters, estimated tokens: ${estimateTokens(prompt + chunk)} tokens`,
  );

  const messages: Array<ChatCompletionMessageParam> = [
    {
      role: 'system',
      content: systemPrompt,
    },
    {
      role: 'user',
      content: prompt,
    },
    {
      role: 'user',
      content: chunk,
    },
  ];

  const response = await openai.chat.completions.create({
    model: model,
    max_completion_tokens: MAX_OUTPUT_TOKENS,
    max_tokens: MAX_OUTPUT_TOKENS,
    messages: messages,
  });

  logger.debug(`response.usage:\n${JSON.stringify(response.usage, null, 2)}`);
  const message = response.choices?.[0]?.message;

  if (!message?.content) {
    throw new Error('Failed to get translation response');
  }
  // Return the translated content and the message to add to history
  return message.content;
}

// New implementation for translating large documents using multi-round chat
export async function $translateDocument({
  content,
  langConfig,
  context = '',
}: TranslateDocumentParams): Promise<string> {
  if (!openai) {
    throw new Error('OPENAI_API_KEY is not set.');
  }

  const textLength = content.length;
  logger.debug(
    `Starting translation of document with length: ${textLength} characters, estimated tokens: ${estimateTokens(content)} tokens`,
  );

  // For small documents, use the direct approach
  if (!needsChunking(content)) {
    return await translateChunk(content, langConfig, context);
  }

  logger.debug(
    'Document is large, splitting into chunks for multi-round translation',
  );
  const chunks = splitIntoChunks(content);
  logger.debug(`Split document into ${chunks.length} chunks`);

  let translatedContent = '';
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    logger.debug(`Translating chunk ${i + 1} of ${chunks.length}`);

    // Translate the chunk
    const translatedChunk = await translateChunk(chunk, langConfig, context);

    // Add to the complete translated content
    if (chunk[0] === '\n' && translatedChunk[0] !== '\n') {
      translatedContent += '\n';
    }
    if (chunk[1] === '\n' && translatedChunk[1] !== '\n') {
      translatedContent += '\n';
    }

    translatedContent += translatedChunk;

    if (
      chunk[chunk.length - 1] === '\n' &&
      translatedChunk[translatedChunk.length - 1] !== '\n'
    ) {
      translatedContent += '\n';
    }
    if (
      chunk[chunk.length - 2] === '\n' &&
      translatedChunk[translatedChunk.length - 2] !== '\n'
    ) {
      translatedContent += '\n';
    }
  }

  logger.debug(`Completed translation of all ${chunks.length} chunks`);
  return translatedContent;
}
