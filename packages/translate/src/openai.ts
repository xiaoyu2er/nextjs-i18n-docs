import OpenAI from 'openai';
import type { ChatCompletionMessageParam } from 'openai/resources.mjs';
import {
  MAX_OUTPUT_TOKENS,
  estimateTokens,
  needsChunking,
  splitIntoChunks,
} from './chunk';
import { logger } from './logger';
import { type Usage, addUsage } from './usage';

interface LangConfig {
  name: string;
  locale: string;
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

// Helper function to translate a single chunk
async function translateChunk(
  chunk: string,
  langConfig: LangConfig,
  context: string,
  needsFrontmatterRules = true,
): Promise<string> {
  if (!openai) {
    throw new Error('OPENAI_API_KEY is not set.');
  }

  const textLength = chunk.length;
  const systemPrompt = `You are a professional technical translator from English to ${langConfig.name} specializing in software documentation. You are particularly skilled at translating React, web development, and programming terminology, keeping the translations consistent and readable.`;

  // Generate language-specific examples
  const getLanguageSpecificExamples = (
    locale: string,
  ): { correct: string[]; incorrect: string[] } => {
    const examples: Record<string, { correct: string[]; incorrect: string[] }> =
      {
        'zh-hans': {
          correct: [
            'title: 静态资源（\\`public\\` 目录）',
            'description: API \\`getStaticProps\\` 参考文档。了解如何使用 \\`getStaticProps\\`。',
            'description: 关于 \\`<Link>\\` 组件的 API 参考文档。',
            'description: React \\`useState\\` 钩子的使用示例',
            "description: 缓存功能 'use cache' 的 API 设计和优势",
            'description: 组件 "Button" 的使用指南',
            'title: Next.js 安全性思考原则',
            'title: Next.js 中的安全最佳实践',
          ],
          incorrect: [
            'title: \\`public\\` 目录中的静态资源',
            'description: \\`getStaticProps\\` API 参考文档。了解如何使用 \\`getStaticProps\\`。',
            'description: \\`<Link>\\` 组件的 API 参考文档。',
            'description: \\`useState\\` 钩子的使用示例',
            "description: 'use cache' 的 API 设计和优势",
            'description: "Button" 组件的使用指南',
            'title: Next.js 安全性：核心概念',
            'title: 如何思考 Next.js：安全指南',
          ],
        },
        'zh-hant': {
          correct: [
            'title: 靜態資源（\\`public\\` 目錄）',
            'description: API \\`getStaticProps\\` 參考文檔。了解如何使用 \\`getStaticProps\\`。',
            'description: 關於 \\`<Link>\\` 組件的 API 參考文檔。',
            'description: React \\`useState\\` 鉤子的使用示例',
            "description: 快取功能 'use cache' 的 API 設計和優勢",
            'description: 組件 "Button" 的使用指南',
          ],
          incorrect: [
            'title: \\`public\\` 目錄中的靜態資源',
            'description: \\`getStaticProps\\` API 參考文檔。了解如何使用 \\`getStaticProps\\`。',
            'description: \\`<Link>\\` 組件的 API 參考文檔。',
            'description: \\`useState\\` 鉤子的使用示例',
            "description: 'use cache' 的 API 設計和優勢",
            'description: "Button" 組件的使用指南',
          ],
        },
        ja: {
          correct: [
            'title: 静的アセット（\\`public\\` ディレクトリ）',
            'description: API \\`getStaticProps\\` のリファレンス。\\`getStaticProps\\` の使用方法を学びます。',
            'description: React \\`<Link>\\` コンポーネントについての API リファレンス。',
            'description: React \\`useState\\` フックの使用例',
            "description: キャッシュ機能 'use cache' の API 設計と利点について学びます",
            'description: コンポーネント "Button" の使用方法について説明します',
          ],
          incorrect: [
            'title: \\`public\\` ディレクトリの静的アセット',
            'description: \\`getStaticProps\\` API のリファレンス。\\`getStaticProps\\` の使用方法を学びます。',
            'description: \\`<Link>\\` コンポーネントの API リファレンス。',
            'description: \\`useState\\` フックの使用例',
            "description: 'use cache' の API 設計と利点について学びます",
            'description: "Button" コンポーネントの使用方法について説明します',
          ],
        },
        ru: {
          correct: [
            'description: Справочник API \\`getStaticProps\\`. Узнайте, как использовать \\`getStaticProps\\`.',
            'description: Справочник API для компонента \\`<Link>\\`.',
            'title: Статические ресурсы (директория \\`public\\`)',
            'description: Примеры использования хука \\`useState\\` в React',
            "description: Функциональность кэша 'use cache' и её преимущества API",
            'description: Руководство по использованию компонента "Button"',
            'title: Принципы безопасности в Next.js',
            'title: Безопасность Next.js и лучшие практики',
          ],
          incorrect: [
            'title: \\`public\\` директория статических ресурсов',
            'description: \\`getStaticProps\\` справочник API. Узнайте, как использовать \\`getStaticProps\\`.',
            'description: \\`<Link>\\` справочник API компонента.',
            'description: \\`useState\\` примеры использования хука',
            "description: 'use cache' функциональность и преимущества API",
            'description: "Button" руководство по использованию компонента',
            'title: Безопасность в Next.js: основные принципы',
            'title: Next.js: руководство по безопасности',
          ],
        },
        de: {
          correct: [
            'title: Statische Assets (\\`public\\`-Verzeichnis)',
            'description: API-Referenz für \\`getStaticProps\\`. Erfahren Sie, wie Sie \\`getStaticProps\\` verwenden.',
            'description: API-Referenz für die \\`<Link>\\`-Komponente.',
            'description: React \\`useState\\`-Hook Verwendungsbeispiele',
            "description: Cache-Funktionalität 'use cache' und ihre API-Vorteile",
            'description: Verwendungsanleitung für die "Button"-Komponente',
          ],
          incorrect: [
            'title: \\`public\\`-Verzeichnis statische Assets',
            'description: \\`getStaticProps\\` API-Referenz. Erfahren Sie, wie Sie \\`getStaticProps\\` verwenden.',
            'description: \\`<Link>\\`-Komponente API-Referenz.',
            'description: \\`useState\\`-Hook Verwendungsbeispiele',
            "description: 'use cache' Cache-Funktionalität und API-Vorteile",
            'description: "Button"-Komponente Verwendungsanleitung',
          ],
        },
        fr: {
          correct: [
            'title: Ressources statiques (répertoire \\`public\\`)',
            'description: Référence API pour \\`getStaticProps\\`. Apprenez à utiliser \\`getStaticProps\\`.',
            'description: Référence API pour le composant \\`<Link>\\`.',
            "description: Exemples d'utilisation du hook \\`useState\\` de React",
            "description: Fonctionnalité de cache 'use cache' et ses avantages API",
            'description: Guide d\'utilisation du composant "Button"',
          ],
          incorrect: [
            'title: \\`public\\` répertoire des ressources statiques',
            'description: \\`getStaticProps\\` référence API. Apprenez à utiliser \\`getStaticProps\\`.',
            'description: \\`<Link>\\` référence API du composant.',
            "description: \\`useState\\` exemples d'utilisation du hook",
            "description: 'use cache' fonctionnalité et avantages API",
            'description: "Button" guide d\'utilisation du composant',
          ],
        },
        es: {
          correct: [
            'title: Recursos estáticos (directorio \\`public\\`)',
            'description: Referencia de API para \\`getStaticProps\\`. Aprende a usar \\`getStaticProps\\`.',
            'description: Referencia de API para el componente \\`<Link>\\`.',
            'description: Ejemplos de uso del hook \\`useState\\` de React',
            "description: Funcionalidad de caché 'use cache' y sus ventajas de API",
            'description: Guía de uso del componente "Button"',
          ],
          incorrect: [
            'title: \\`public\\` directorio de recursos estáticos',
            'description: \\`getStaticProps\\` referencia de API. Aprende a usar \\`getStaticProps\\`.',
            'description: \\`<Link>\\` referencia de API del componente.',
            'description: \\`useState\\` ejemplos de uso del hook',
            "description: 'use cache' funcionalidad y ventajas de API",
            'description: "Button" guía de uso del componente',
          ],
        },
        ar: {
          correct: [
            'title: الموارد الثابتة (دليل \\`public\\`)',
            'description: مرجع API لـ \\`getStaticProps\\`. تعلم كيفية استخدام \\`getStaticProps\\`.',
            'description: مرجع API لمكون \\`<Link>\\`.',
            'description: أمثلة استخدام خطاف \\`useState\\` في React',
            "description: وظيفة التخزين المؤقت 'use cache' ومزايا API الخاصة بها",
            'description: دليل استخدام مكون "Button"',
          ],
          incorrect: [
            'title: \\`public\\` دليل الموارد الثابتة',
            'description: \\`getStaticProps\\` مرجع API. تعلم كيفية استخدام \\`getStaticProps\\`.',
            'description: \\`<Link>\\` مرجع API للمكون.',
            'description: \\`useState\\` أمثلة استخدام الخطاف',
            "description: 'use cache' وظيفة التخزين المؤقت ومزايا API",
            'description: "Button" دليل استخدام المكون',
          ],
        },
      };

    return examples[locale] || examples['zh-hans'];
  };

  const langExamples = getLanguageSpecificExamples(langConfig.locale);

  const frontmatterRules = `⚠️ CRITICAL MDX FRONT MATTER RULES ⚠️
• NEVER start a frontmatter value with inline code (text between \`backticks\`)
• NEVER start a frontmatter value with single quotes ('text')
• NEVER start a frontmatter value with double quotes ("text")
• NEVER use colon (:) character in frontmatter values as it conflicts with YAML syntax (e.g., \`headline: Fondations React : À propos de React et Next.js\` is NOT allowed)
• NEVER wrap frontmatter values in single quotes ('') - values should be written directly without quotes (e.g., use \`headline: Fondations React\` instead of \`headline: 'Fondations React'\`)
• This applies to ALL inline code including \`<Component>\` tags, \`functions\`, variables, etc.
• This applies to ALL quoted text including 'use cache', "API design", 'components', etc.
• In frontmatter (sections between --- marks), ALWAYS rearrange sentences so inline code and quoted text appears AFTER some text
• If a frontmatter value would start with inline code or quotes after translation, ALWAYS rewrite the sentence so that some descriptive text comes before the inline code or quotes. For example, instead of ${langExamples.incorrect[0]}, use ${langExamples.correct[0]}.
• If a translation would include a colon (:), ALWAYS rephrase to avoid it (e.g., "Security in Next.js: principles" becomes "Security principles in Next.js" or "Next.js security principles")
• This rule applies to ALL frontmatter keys (title, description, etc.), not just description.
• ALWAYS preserve both the opening and closing frontmatter delimiters (---) - never omit the closing delimiter
• Maintain the exact structure of frontmatter - beginning with ---, followed by key-value pairs, and ending with ---
• ENSURE VALID FRONT MATTER FORMAT: Use proper Front Matter syntax with key: value pairs, proper indentation with spaces (not tabs), and escape special characters when needed
• These rules are ABSOLUTELY REQUIRED for proper rendering of the documentation

Examples of MDX Frontmatter Translation:

# Example 1: Never start frontmatter values with inline code or quotes
  INCORRECT Translation (Never do this):
${langExamples.incorrect.map((ex) => `    ${ex}`).join('\n')}
  CORRECT Translation (Always do this):
${langExamples.correct.map((ex) => `    ${ex}`).join('\n')}

# Example 2: Frontmatter Structure - always include closing delimiter
  INCORRECT Translation (Never do this):
    ---
    ${langExamples.correct[0]}
    (missing closing delimiter)

  CORRECT Translation (Always do this):
    ---
    ${langExamples.correct[0]}
    ---

These rules apply ONLY to frontmatter (between --- marks) and are CRITICAL for proper document rendering.
REMEMBER: You must NEVER start with inline code in frontmatter values, NEVER use colons (:) in frontmatter values, and ALWAYS include both opening and closing --- delimiters.`;

  const prompt = `
${context}

Please read the following rules carefully:

General rules:
• The document is MDX format - ensure all component tags are properly closed (e.g., \`<AppOnly> </AppOnly>\` \`<PagesOnly> </PagesOnly>\` )
• Keep unchanged:
  - All code blocks
  - Markdown formatting
  - HTML tags
  - Variables
  - Text within \`\`\` code blocks or inline \`code\`
  - URLs and file paths
• Maintain the original paragraph structure and heading levels

${needsFrontmatterRules ? frontmatterRules : ''}

Output format:
• Provide only the translated content
• No introduction, prefixes, or meta-explanations
• Just the translation itself

⚠️ IMPORTANT: The next message contains the COMPLETE original text that needs to be translated. Please translate the ENTIRE content without omitting any parts, sections, or formatting elements. Preserve all whitespace, line breaks, and structural formatting exactly as they appear in the original, PLEASE TRANSLATE IT TO ${langConfig.name}:
`;

  logger.debug(
    `Sending chunk translation request, text length: ${textLength} characters, prompt total length: ${
      prompt.length + textLength
    } characters, estimated tokens: ${estimateTokens(prompt + chunk)} tokens`,
  );

  const messages: Array<ChatCompletionMessageParam> = [
    {
      role: 'system',
      content: systemPrompt + prompt,
    },
    {
      role: 'user',
      content: chunk,
    },
  ];

  console.log(systemPrompt + prompt);
  // console.log(chunk);

  const response = await openai.chat.completions.create({
    model: model,
    max_completion_tokens: MAX_OUTPUT_TOKENS,
    max_tokens: MAX_OUTPUT_TOKENS,
    messages: messages,
  });

  logger.debug(`response.usage:\n${JSON.stringify(response.usage, null, 2)}`);
  addUsage(response.usage as Usage);
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
    return await translateChunk(content, langConfig, context, true);
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
    const translatedChunk = await translateChunk(
      chunk,
      langConfig,
      context,
      i === 0,
    );

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
