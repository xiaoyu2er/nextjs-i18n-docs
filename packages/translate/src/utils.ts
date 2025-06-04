import { execSync } from 'node:child_process';
import * as fs$ from 'node:fs/promises';
import path from 'node:path';
import { glob } from 'glob';
import matter from 'gray-matter';
import { needsChunking, splitIntoChunks } from './chunk';
import { logger } from './logger';
import { $translateDocument } from './openai';

interface LangConfig {
  name: string;
  guide?: string;
  terms?: Record<string, string>;
  locale: string;
}

interface CheckFileUpdateParams {
  sourcePath: string;
  targetPath: string;
}

interface BuildTranslationContextParams {
  langConfig: LangConfig;
  docsContext?: string;
}

export async function getTranslatedConfig(
  configPath: string,
): Promise<Record<string, unknown>> {
  let translatedConfig: Record<string, unknown>;
  try {
    translatedConfig = JSON.parse(await fs$.readFile(configPath, 'utf8'));
    logger.debug(`Found existing config ${configPath}`);
  } catch (error) {
    logger.info(`No existing config ${configPath}`);
    translatedConfig = {};
  }
  return translatedConfig;
}

export function getLastModifiedTimeFromGit(filePath: string): Date {
  const result = execSync(`git log -1 --format=%at -- "${filePath}"`, {
    encoding: 'utf8',
  }).trim();

  // console.log('filePath',filePath, result, new Date(parseInt(result, 10) * 1000));
  if (result) {
    return new Date(Number.parseInt(result, 10) * 1000);
  }
  // git log returned no results, file might be new
  logger.error(`File ${filePath} has no git history,`);
  throw new Error(`File ${filePath} has no git history`);
}

/**
 * Check if a document needs updating based on source file last modified date (git log) and target file metadata (source-updated-at)
 * Returns [shouldUpdate, shouldTranslate, reason]
 */
export async function getDocUpdateStatus({
  sourcePath,
  targetPath,
}: CheckFileUpdateParams): Promise<{
  shouldUpdate: boolean;
  chunks: 'N/A' | number;
  reason: string;
}> {
  try {
    await fs$.access(sourcePath);
  } catch (error) {
    logger.error(
      `Source file not found: ${sourcePath}, don't need updating, consider removing it`,
    );
    return { shouldUpdate: false, chunks: 'N/A', reason: 'Source not found' };
  }

  const sourceContent = await fs$.readFile(sourcePath, 'utf8');
  const chunks = needsChunking(sourceContent)
    ? splitIntoChunks(sourceContent).length
    : 1;

  try {
    await fs$.access(targetPath);
  } catch (error) {
    logger.debug(`Target file not found: ${targetPath}, needs updating`);
    return { shouldUpdate: true, reason: 'Target not found.', chunks };
  }
  const sourceLastModifiedDate = getLastModifiedTimeFromGit(sourcePath);
  // Read target file and parse frontmatter
  const targetContent = await fs$.readFile(targetPath, 'utf8');
  const targetParsed = matter(targetContent);

  // First, check for timestamp-based updates
  if (targetParsed.data['translation-updated-at']) {
    const metadataTranslationUpdatedAt = new Date(
      targetParsed.data['translation-updated-at'],
    );

    logger.debug(
      `${sourcePath}: source's lastModifiedDate ${sourceLastModifiedDate.toISOString()}, target.meta[translation-updated-at] ${metadataTranslationUpdatedAt.toISOString()}`,
    );
    // If the source file has been updated since the last translation plus 5 minutes
    // (to account for any potential delays in git log updates), it needs to be updated
    if (
      sourceLastModifiedDate.getTime() >
      metadataTranslationUpdatedAt.getTime() + 5 * 60 * 1000
    ) {
      logger.debug(
        `Source file ${sourcePath} has been updated since last translation, needs updating`,
      );
      return {
        shouldUpdate: true,
        reason: 'Source modified.',
        chunks,
      };
    }
    return {
      shouldUpdate: false,
      reason: 'Source not modified.',
      chunks,
    };
  }

  // If there's no source-updated-at in target, it needs to be updated
  logger.debug(
    `Target file ${targetPath} has no source-updated-at metadata, needs updating`,
  );
  return {
    shouldUpdate: true,
    reason: 'Target has no source-updated-at metadata.',
    chunks,
  };
}

// New helper function to extract context from overview files
export function buildTranslationContext({
  langConfig,
  docsContext = '',
}: BuildTranslationContextParams): string {
  // Build context prompt
  let contextPrompt = '';

  // Add introduction
  if (docsContext) {
    contextPrompt += `CONTEXT FOR DOCUMENTATION:\n${docsContext}\n\n`;
  }

  if (langConfig.guide) {
    contextPrompt += `TRANSLATION GUIDELINES:\n${langConfig.guide}\n\n`;
  }

  // Add common technical term translations
  if (langConfig.terms && Object.keys(langConfig.terms).length > 0) {
    contextPrompt += 'COMMON TERM TRANSLATIONS:\n';
    // Only add terms relevant to current document type

    for (const [english, translated] of Object.entries(langConfig.terms)) {
      contextPrompt += `- "${english}" → "${translated}"\n`;
    }
    contextPrompt += '\n';
  }

  return contextPrompt;
}

interface TranslateDocumentFileParams {
  sourcePath: string;
  targetPath: string;
  langConfig: LangConfig;
  docsContext?: string;
}

export async function translateDoc({
  sourcePath,
  targetPath,
  langConfig,
  docsContext,
}: TranslateDocumentFileParams) {
  // Create directory if it doesn't exist
  logger.debug(`Translating ${sourcePath} to ${targetPath}`);
  await fs$.mkdir(path.dirname(targetPath), { recursive: true });

  // Read source file
  const sourceContent = await fs$.readFile(sourcePath, 'utf8');

  const translationContext = `${await buildTranslationContext({
    langConfig,
    docsContext,
  })}`;

  // Check if source file has frontmatter and extract content
  const translatedContent = await $translateDocument({
    content: sourceContent,
    langConfig,
    context: translationContext,
  });

  // Format as ISO strings (UTC)
  const sourceUpdatedAt = getLastModifiedTimeFromGit(sourcePath).toISOString();
  const translationUpdatedAt = new Date().toISOString();

  const newContent = translatedContent.replace(
    '---',
    `---
source-updated-at: ${sourceUpdatedAt}
translation-updated-at: ${translationUpdatedAt}`,
  );

  logger.debug(`Writing translated content to ${targetPath}`);
  await fs$.writeFile(targetPath, newContent, 'utf8');
  logger.debug(`Completed translation of ${path.basename(sourcePath)}`);
}

/**
 * Finds Markdown files based on glob patterns
 */
export async function findDocFiles(
  docsRoot: string,
  patterns: string[],
): Promise<string[]> {
  const files: string[] = [];

  for (const pattern of patterns) {
    const fullPattern = path.join(docsRoot, pattern);
    // Ensure the pattern has the .md extension
    const filePattern = fullPattern.endsWith('.mdx')
      ? fullPattern
      : `${fullPattern}.mdx`;

    try {
      // Use the glob function with ES modules syntax
      const matches = await glob.glob(filePattern);
      files.push(...matches);
    } catch (error) {
      logger.error(`Error finding files for pattern ${pattern}: ${error}`);
    }
  }

  // Convert absolute paths to paths relative to docsRoot without .md extension
  return files.map((file) => {
    const relativePath = path.relative(docsRoot, file);
    return relativePath.endsWith('.mdx')
      ? relativePath.slice(0, -4)
      : relativePath;
  });
}

/**
 * Normalizes a pattern by removing docsRoot prefix if present
 */
export function normalizePattern(
  pattern: string,
  normalizedDocsRoot: string,
  docsRootName: string,
): string {
  // Check if pattern starts with docsRoot or its basename
  if (pattern.startsWith(`${normalizedDocsRoot}/`)) {
    // Strip full docsRoot path from pattern
    const processed = pattern.substring(normalizedDocsRoot.length + 1);
    logger.debug(`Normalized pattern from ${pattern} to ${processed}`);
    return processed;
  }
  if (pattern.startsWith(`${docsRootName}/`)) {
    // Strip docsRoot basename from pattern
    const processed = pattern.substring(docsRootName.length + 1);
    logger.debug(`Normalized pattern from ${pattern} to ${processed}`);
    return processed;
  }
  return pattern;
}

/**
 * Normalizes comma-separated patterns or array of patterns
 */
export function normalizePatterns(
  patterns: string | string[] | undefined,
  normalizedDocsRoot: string,
  docsRootName: string,
): string[] {
  if (!patterns) {
    return [];
  }

  // If patterns is already an array, process each item
  if (Array.isArray(patterns)) {
    return patterns
      .map((p) => normalizePattern(p.trim(), normalizedDocsRoot, docsRootName))
      .filter((p) => p !== '');
  }

  // Otherwise, treat as a string and split by comma
  return patterns
    .split(',')
    .map((p) => normalizePattern(p.trim(), normalizedDocsRoot, docsRootName))
    .filter((p) => p !== '');
}
