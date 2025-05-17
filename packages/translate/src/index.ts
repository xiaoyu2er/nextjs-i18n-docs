#!/usr/bin/env node

import { Command } from 'commander';
import { getConfig } from './config';
import { logger } from './logger';
import { main } from './main';
import type { MainConfig } from './types';

export type Config = MainConfig | MainConfig[];

// This string will be replaced during build
const version = '__VERSION__';

const program = new Command();

program
  .name('nextjs-translation')
  .description('Translate tanstack docs')
  .version(version, '-v, --version', 'Show version number')
  .option('-c, --config <path>', 'Path to configuration file')
  .option('--verbose', 'Enable verbose logging')
  .option(
    '-p, --pattern <pattern>',
    'File pattern to match for updating (e.g., "*.mdx" or "docs/**/*.mdx"). The .md extension is optional.',
  )

  .option(
    '-d, --docs-path <pattern>',
    'File pattern for docs to translate, useful when not relying on docsConfig (e.g., "**/*.mdx"). The .md extension is optional.',
  )
  .option('-l, --list-only', 'Only list file status without updating docs')
  .option(
    '-t, --target-language <language>',
    'Specify the target language code for translation (e.g., "zh-CN", "fr", "es")',
  )
  .option(
    '--max <number>',
    'Maximum number of files to process in one batch (per language) (default: unlimited)',
  )
  .action(
    async (options: {
      config?: string;
      verbose?: boolean;
      pattern?: string;
      docsPath?: string;
      listOnly?: boolean;
      targetLanguage?: string;
      max?: number;
    }) => {
      if (options.verbose) {
        logger.setVerbose(true);
      }

      const config = await getConfig(options);
      const configs: MainConfig[] = Array.isArray(config) ? config : [config];

      for (const config of configs) {
        await main({
          ...config,
          ...(options.pattern ? { pattern: options.pattern } : {}),
          ...(options.docsPath ? { docsPath: options.docsPath } : {}),
          ...(options.max ? { max: options.max } : {}),
          listOnly: options.listOnly,
          targetLanguage: options.targetLanguage,
        });
      }
      logger.success('Process completed successfully');
    },
  );

program.parse();
