import OpenAI from 'openai';
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

// Improved $translateDocument function with language-specific prompts
export async function $translateDocument({
  content,
  langConfig,
  context = '',
}: TranslateDocumentParams): Promise<string> {
  if (!openai) {
    throw new Error('OPENAI_API_KEY is not set.');
  }

  const textLength = content.length;
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
    `Sending translation request, text length: ${textLength} characters, prompt totoal length: ${
      prompt.length + textLength
    } characters`,
  );

  // logger.debug(`Prompt:\n${prompt}`);

  const response = await openai.chat.completions.create({
    model: model,
    max_completion_tokens: 8 * 1024,
    max_tokens: 8 * 1024,
    messages: [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: prompt + content,
      },
    ],
  });

  const translatedContent = response.choices?.[0]?.message?.content;
  if (!translatedContent) {
    throw new Error('Failed to get translation response');
  }
  logger.debug(`Response:\n${response}`);
  return translatedContent.trim();
}
