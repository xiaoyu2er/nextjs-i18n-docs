export interface LangConfig {
  locale: string;
  name: string;
  guide?: string;
  terms?: Record<string, string>;
}

export interface Config {
  source: string;
  target: string;
  targetLanguage: string;
  openaiApiKey?: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
  outputDir?: string;
  exclude?: string[];
  include?: string[];
}

export interface MainConfig {
  langs: Record<string, LangConfig>;
  docsRoot?: string;
  outputRoot?: string;
  docsContext?: string;
  pattern?: string | string[];
  docsPath?: string | string[];
  max?: number;
  listOnly?: boolean;
  targetLanguage?: string;
  concurrency?: number;
  verbose?: boolean;
}

export interface TranslationResult {
  original: string;
  translated: string;
  path: string;
}
