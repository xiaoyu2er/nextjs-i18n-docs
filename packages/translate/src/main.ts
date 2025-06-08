import * as fs$ from 'node:fs/promises';
import * as path from 'node:path';
import micromatch from 'micromatch';
import { executeInBatches } from './batch';
import { logger } from './logger';
import type { MainConfig } from './types';
import { GlobalUsage } from './usage';
import {
  findDocFiles,
  getDocUpdateStatus,
  normalizePatterns,
  translateDoc,
} from './utils';

export async function main({
  langs,
  docsRoot = 'content/en',
  docsContext,
  pattern,
  outputRoot = 'content',
  docsPath = ['**/*.mdx'],
  listOnly,
  max = Number.POSITIVE_INFINITY,
  targetLanguage,
  concurrency = 10,
  verbose,
  model = 'deepseek-chat',
}: MainConfig): Promise<void> {
  // Filter languages based on targetLanguage if specified
  const filteredLangs = targetLanguage
    ? Object.fromEntries(
        Object.entries(langs).filter(
          ([key]) => key.toLowerCase() === targetLanguage.toLowerCase(),
        ),
      )
    : langs;

  // Early return if targetLanguage was specified but not found
  if (targetLanguage && Object.keys(filteredLangs).length === 0) {
    logger.warn(
      `Target language "${targetLanguage}" not found in configuration. Available languages: ${Object.keys(
        langs,
      ).join(', ')}`,
    );
    return;
  }

  const LANGUAGES = Object.keys(filteredLangs);

  logger.divider();
  logger.info(
    `Translation for ${docsRoot} in languages: ${LANGUAGES.join(', ')} started!`,
  );

  // Normalize paths and prepare patterns
  const normalizedDocsRoot = docsRoot.endsWith('/')
    ? docsRoot.slice(0, -1)
    : docsRoot;
  const docsRootName = path.basename(normalizedDocsRoot);

  // Process all patterns
  const processedPatterns = normalizePatterns(
    pattern,
    normalizedDocsRoot,
    docsRootName,
  );

  const processedDocsPathPatterns = normalizePatterns(
    docsPath,
    normalizedDocsRoot,
    docsRootName,
  );

  // Log patterns if provided
  if (processedDocsPathPatterns.length > 0) {
    logger.info(
      `Using docs-path patterns: ${processedDocsPathPatterns.join(', ')}`,
    );
  }
  if (processedPatterns.length > 0) {
    logger.info(`Using patterns: ${processedPatterns.join(', ')}`);
  }

  if (max !== Number.POSITIVE_INFINITY) {
    logger.info(`Limiting to ${max} files per language to process`);
  }

  // Process each language
  for (const [lang, langConfig] of Object.entries(filteredLangs)) {
    logger.divider();
    logger.info(`language: ${lang} (${langConfig.name})`);

    // Setup target paths
    const translatedRoot = path.join(outputRoot, lang.toLowerCase());

    logger.debug(`Target root: ${translatedRoot}`);

    // Ensure target directory exists
    await fs$.mkdir(translatedRoot, { recursive: true });

    // Get document paths from filesystem or use empty array if no patterns
    let docPaths: string[] = [];
    if (processedDocsPathPatterns.length > 0) {
      // Find all matching files from filesystem
      const filesFromFilesystem = await findDocFiles(
        docsRoot,
        processedDocsPathPatterns,
      );

      // Filter out language-specific paths
      const langPatterns = Object.keys(langs).map(
        (lang) => `${lang.toLowerCase()}/`,
      );
      docPaths = filesFromFilesystem.filter((filePath) => {
        const relativePath = path.relative(
          docsRoot,
          path.join(docsRoot, filePath),
        );
        return !langPatterns.some((langPattern) =>
          relativePath.startsWith(langPattern),
        );
      });
    } else {
      logger.warn(
        'No docsPath specified. No files will be processed. Please provide a docsPath pattern like --docs-path "**/*.mdx"',
      );
    }

    // Create normalized patterns for filtering
    const normalizedIncludePatterns = processedPatterns.map((p) =>
      p.endsWith('.mdx') ? p.slice(0, -4) : p,
    );

    // Apply filtering based on patterns
    let filteredPaths = docPaths;

    // Apply include pattern if specified
    if (normalizedIncludePatterns.length > 0) {
      filteredPaths = micromatch(filteredPaths, normalizedIncludePatterns);
    }

    logger.info(
      `Found ${docPaths.length} files from filesystem, ${filteredPaths.length} files to process`,
    );

    // Build tasks list and document status table
    let tasks = [];
    const tableData = [];

    for (const docPath of filteredPaths) {
      // Regular document handling
      const sourcePath = path.join(docsRoot, `${docPath}.mdx`);
      const targetPath = path.join(translatedRoot, `${docPath}.mdx`);

      // Check if this path should be copied without translation

      const { shouldUpdate, reason, chunks } = await getDocUpdateStatus({
        sourcePath,
        targetPath,
      });

      if (verbose) {
        tableData.push({
          Source: sourcePath,
          ...(verbose ? { Target: targetPath } : {}),
          'Should update?': shouldUpdate ? '✅ Yes' : '❌ No',
          Chunks: chunks,
          Reason: reason,
        });
      } else if (shouldUpdate) {
        tableData.push({
          Source: sourcePath,
          ...(verbose ? { Target: targetPath } : {}),
          'Should update?': '✅ Yes',
          Reason: reason,
        });
      }

      if (shouldUpdate) {
        tasks.push({
          docPath,
          sourcePath,
          targetPath,
          isConfig: false, // Mark as regular file
        });
      }
    }

    // Display document status table
    console.log('\n📋 Document Status:\n');
    console.table(tableData);
    logger.info(
      `Found ${tasks.length}/${filteredPaths.length} documents to update`,
    );
    if (tasks.length > max) {
      logger.warn(
        `Limiting to ${max} files to process. You can increase this limit with the --max option.`,
      );
      tasks = tasks.slice(0, max);
    }

    // Process tasks if not in list-only mode
    if (!listOnly) {
      let completedRefDocs = 0;

      await executeInBatches(
        tasks,
        async (task) => {
          // Handle document translation
          await translateDoc({
            sourcePath: task.sourcePath,
            targetPath: task.targetPath,
            langConfig,
            docsContext,
            model,
          });

          completedRefDocs++;
          logger.progress(
            completedRefDocs,
            tasks.length,
            'Updating documents',
            `${task.targetPath} translated`,
          );
        },
        concurrency,
      );
    }

    logger.success(`Completed processing for language: ${lang}`);
  }

  logger.divider();
  logger.info(
    `Usage statistics for the completion request:\n${JSON.stringify(GlobalUsage, null, 2)}`,
  );
}
