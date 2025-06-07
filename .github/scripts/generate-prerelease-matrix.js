#!/usr/bin/env node

/**
 * Script to generate locale deployment matrix for prerelease workflow
 * Usage: node generate-prerelease-matrix.js <labels-json>
 *
 * labels-json: JSON string containing array of PR labels
 */

const fs = require('node:fs');
const path = require('node:path');

// Default values
const SCRIPT_DIR = __dirname;
const ROOT_DIR = path.resolve(SCRIPT_DIR, '../..');
const LOCALE_CONFIG_FILE = path.join(ROOT_DIR, '.github/locales-config.json');

/**
 * Print usage information
 */
function usage() {
  console.log(`Usage: ${process.argv[1]} <labels-json>`);
  console.log('');
  console.log('Arguments:');
  console.log('  labels-json     JSON string containing array of PR labels');
  console.log('');
  console.log('Examples:');
  console.log(`  ${process.argv[1]} '["prerelease"]'`);
  console.log(`  ${process.argv[1]} '["prerelease:en", "prerelease:zh-hans"]'`);
  process.exit(1);
}

/**
 * Log messages with timestamp and emoji
 */
function log(message) {
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
  console.error(`🔧 [${timestamp}] ${message}`);
}

/**
 * Check if locale is enabled in config
 */
function isLocaleEnabled(localeConfig, locale) {
  return localeConfig[locale]?.enabled === true;
}

/**
 * Get locale configuration value
 */
function getLocaleConfig(localeConfig, locale, field) {
  return localeConfig[locale]?.[field] || '';
}

/**
 * Add locale to matrix
 */
function addLocaleToMatrix(matrix, locale, secretProjectId) {
  return [
    ...matrix,
    {
      locale,
      secret_project_id: secretProjectId,
    },
  ];
}

/**
 * Process prerelease labels and generate matrix
 */
function processPrerelease(localeConfig, labels) {
  let matrixInclude = [];

  log(`Processing labels: ${JSON.stringify(labels)}`);

  // Check if we should deploy all locales (general prerelease)
  const shouldDeployAll = labels.includes('prerelease');

  if (shouldDeployAll) {
    log('📦 General prerelease label found - deploying all enabled locales');

    // Deploy all enabled locales
    for (const locale of Object.keys(localeConfig)) {
      if (isLocaleEnabled(localeConfig, locale)) {
        const secretProjectId = getLocaleConfig(
          localeConfig,
          locale,
          'secret_project_id',
        );

        if (secretProjectId) {
          matrixInclude = addLocaleToMatrix(
            matrixInclude,
            locale,
            secretProjectId,
          );
          log(`✅ Added ${locale} to deployment matrix`);
        } else {
          log(`⚠️ Skipping ${locale} (missing secret_project_id)`);
        }
      } else {
        log(`⏭️ Skipping ${locale} (not enabled)`);
      }
    }
  } else {
    // Check for specific locale labels (prerelease:locale)
    const localeLabels = labels.filter((label) =>
      label.startsWith('prerelease:'),
    );

    if (localeLabels.length > 0) {
      log(`🎯 Specific locale labels found: ${localeLabels.join(', ')}`);

      for (const label of localeLabels) {
        const locale = label.replace('prerelease:', '');

        if (isLocaleEnabled(localeConfig, locale)) {
          const secretProjectId = getLocaleConfig(
            localeConfig,
            locale,
            'secret_project_id',
          );

          if (secretProjectId) {
            matrixInclude = addLocaleToMatrix(
              matrixInclude,
              locale,
              secretProjectId,
            );
            log(`✅ Added ${locale} to deployment matrix`);
          } else {
            log(`⚠️ Skipping ${locale} (missing secret_project_id)`);
          }
        } else {
          log(`❌ Skipping ${locale} (not enabled or not found)`);
        }
      }
    } else {
      log('🚫 No prerelease labels found');
    }
  }

  const hasChanges = matrixInclude.length > 0;

  log(`📊 Generated matrix with ${matrixInclude.length} locales`);

  return {
    matrixInclude,
    hasChanges,
  };
}

/**
 * Main function
 */
function main() {
  try {
    // Parse command line arguments
    const args = process.argv.slice(2);

    if (args.length !== 1) {
      console.error('Error: Invalid number of arguments');
      usage();
    }

    const labelsJson = args[0];

    // Validate and parse labels JSON
    let labels;
    try {
      labels = JSON.parse(labelsJson);
      if (!Array.isArray(labels)) {
        throw new Error('Labels must be an array');
      }
    } catch (error) {
      console.error(`Error: Invalid labels JSON: ${error.message}`);
      process.exit(1);
    }

    // Read locale configuration
    let localeConfig;
    try {
      if (!fs.existsSync(LOCALE_CONFIG_FILE)) {
        throw new Error(`Locale config file not found: ${LOCALE_CONFIG_FILE}`);
      }

      const configContent = fs.readFileSync(LOCALE_CONFIG_FILE, 'utf8');
      localeConfig = JSON.parse(configContent);
    } catch (error) {
      console.error(`Error reading locale config: ${error.message}`);
      process.exit(1);
    } // Process prerelease labels
    const result = processPrerelease(localeConfig, labels);

    // Output results in GitHub Actions format
    console.log(`matrix={"include":${JSON.stringify(result.matrixInclude)}}`);

    // Validate that we have at least one locale to deploy
    if (result.matrixInclude.length === 0) {
      log('❌ No enabled locales found to deploy');
      process.exit(1);
    }
  } catch (error) {
    console.error(`💥 Error: ${error.message}`);
    process.exit(1);
  }
}

// Run main function if script is executed directly
if (require.main === module) {
  main();
}

module.exports = {
  main,
  processPrerelease,
  isLocaleEnabled,
  getLocaleConfig,
};
