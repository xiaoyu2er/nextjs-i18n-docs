import { cosmiconfig } from 'cosmiconfig';
import { logger } from './logger';
import type { MainConfig } from './types';

interface Options {
  config?: string;
  targetLanguage?: string;
}

export async function getConfig(
  options: Options,
): Promise<MainConfig | MainConfig[]> {
  // Load config file if specified, otherwise search for one
  let config = {} as MainConfig;

  try {
    const explorer = cosmiconfig('translation', {
      searchPlaces: [
        'package.json',
        '.translationrc',
        '.translationrc.json',
        '.translationrc.yaml',
        '.translationrc.yml',
        '.translationrc.js',
        'translation.config.js',
        '.translationrc.mjs',
        'translation.config.mjs',
      ],
    });

    // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
    let result;

    if (options.config) {
      // Load specific config file
      result = await explorer.load(options.config);
      if (result) {
        logger.debug(`Loaded configuration from ${options.config}`);
      }
    } else {
      // Search for config in standard locations
      result = await explorer.search();
      if (result) {
        logger.debug(`Loaded configuration from ${result.filepath}`);
      } else {
        logger.warn(
          'No configuration file found, using command line options only',
        );
      }
    }

    if (result) {
      config = result.config;
    }
    return config;
  } catch (error) {
    logger.error(
      `Error loading config file: ${error instanceof Error ? error.message : String(error)}`,
    );
    if (options.config) {
      // Only exit if a specific config file was requested but couldn't be loaded
      process.exit(1);
    }
    return config;
  }
}
