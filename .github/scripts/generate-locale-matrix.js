#!/usr/bin/env node

/**
 * Script to generate locale deployment matrix based on trigger type and changes
 * Usage: node generate-locale-matrix.js <trigger-type> [manual-locales] [changes-json-file]
 *
 * trigger-type: "manual" or "auto"
 * manual-locales: comma-separated list of locales (for manual trigger)
 * changes-json-file: File path containing JSON output from changed-files action (for auto triggers)
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
  console.log(
    `Usage: ${process.argv[1]} <trigger-type> [manual-locales] [changes-json-file]`,
  );
  console.log('');
  console.log('Arguments:');
  console.log("  trigger-type       Type of trigger: 'manual' or 'auto'");
  console.log(
    '  manual-locales     Comma-separated list of locales (optional, for manual trigger)',
  );
  console.log(
    '  changes-json-file  File path containing JSON output from changed-files action (for auto triggers)',
  );
  console.log('');
  console.log('Examples:');
  console.log(`  ${process.argv[1]} manual`);
  console.log(`  ${process.argv[1]} manual 'en,zh-hans'`);
  console.log(`  ${process.argv[1]} auto '/tmp/changes.json'`);
  console.log(`  ${process.argv[1]} auto '/tmp/changes.json'`);
  process.exit(1);
}

/**
 * Log messages with timestamp
 */
function log(message) {
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
  console.error(`[${timestamp}] ${message}`);
}

/**
 * Validate JSON
 */
function validateJson(jsonString) {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Remove comments from JSON string
 * @param {string} jsonString
 * @returns {string}
 */
function stripJsonComments(jsonString) {
  // Remove single line comments starting with //
  return jsonString.replace(/^\s*\/\/.*$/gm, '');
}

/**
 * Add locale to matrix
 */
function addLocaleToMatrix(
  matrix,
  locale,
  secretProjectId,
  oramaPrivateApiKey,
) {
  return [
    ...matrix,
    {
      locale,
      secret_project_id: secretProjectId,
      orama_private_api_key: oramaPrivateApiKey,
    },
  ];
}

/**
 * Check if locale is enabled
 */
function isLocaleEnabled(localeConfig, locale) {
  return localeConfig[locale]?.enabled === true;
}

/**
 * Get locale configuration
 */
function getLocaleConfig(localeConfig, locale, field) {
  return localeConfig[locale]?.[field] || '';
}

/**
 * Process manual trigger
 */
function processManualTrigger(localeConfig, manualLocales) {
  let matrixInclude = [];
  let hasChanges = false;

  if (!manualLocales) {
    log('No specific locales provided, deploying all enabled locales');

    // Deploy all enabled locales
    for (const locale of Object.keys(localeConfig)) {
      if (isLocaleEnabled(localeConfig, locale)) {
        const secretProjectId = getLocaleConfig(
          localeConfig,
          locale,
          'secret_project_id',
        );
        const oramaPrivateApiKey = getLocaleConfig(
          localeConfig,
          locale,
          'orama_private_api_key',
        );

        if (secretProjectId && oramaPrivateApiKey) {
          matrixInclude = addLocaleToMatrix(
            matrixInclude,
            locale,
            secretProjectId,
            oramaPrivateApiKey,
          );
          hasChanges = true;
          log(`✅ Added ${locale} to deployment matrix`);
        } else {
          log(`⚠️ Skipping ${locale} (missing configuration)`);
        }
      } else {
        log(`Skipping ${locale} (not enabled)`);
      }
    }
  } else {
    log(`Manual locales specified: ${manualLocales}`);

    // Parse comma-separated locales
    const locales = manualLocales
      .split(',')
      .map((locale) => locale.trim())
      .filter((locale) => locale);

    for (const locale of locales) {
      if (isLocaleEnabled(localeConfig, locale)) {
        const secretProjectId = getLocaleConfig(
          localeConfig,
          locale,
          'secret_project_id',
        );
        const oramaPrivateApiKey = getLocaleConfig(
          localeConfig,
          locale,
          'orama_private_api_key',
        );

        if (secretProjectId && oramaPrivateApiKey) {
          matrixInclude = addLocaleToMatrix(
            matrixInclude,
            locale,
            secretProjectId,
            oramaPrivateApiKey,
          );
          hasChanges = true;
          log(`✅ Added ${locale} to deployment matrix`);
        } else {
          log(`⚠️ Skipping ${locale} (missing configuration)`);
        }
      } else {
        log(`⚠️ Skipping ${locale} (not enabled or not found in config)`);
      }
    }
  }

  return { matrixInclude, hasChanges };
}

/**
 * Process automatic trigger
 */
function processAutoTrigger(localeConfig, changesJson) {
  let matrixInclude = [];
  let hasChanges = false;

  // Check core changes
  const coreChanged = changesJson.core_any_changed === 'true';

  if (coreChanged) {
    log('✅ Core changes detected, will deploy all enabled locales');
  }

  // Check each locale dynamically from config
  for (const locale of Object.keys(localeConfig)) {
    if (isLocaleEnabled(localeConfig, locale)) {
      const localeKey = locale.replace('-', '_'); // Convert locale key for changes JSON
      const localeChanged = changesJson[`${localeKey}_any_changed`] === 'true';

      if (coreChanged || localeChanged) {
        const secretProjectId = getLocaleConfig(
          localeConfig,
          locale,
          'secret_project_id',
        );
        const oramaPrivateApiKey = getLocaleConfig(
          localeConfig,
          locale,
          'orama_private_api_key',
        );

        if (secretProjectId && oramaPrivateApiKey) {
          matrixInclude = addLocaleToMatrix(
            matrixInclude,
            locale,
            secretProjectId,
            oramaPrivateApiKey,
          );
          hasChanges = true;

          if (coreChanged && localeChanged) {
            log(
              `✅ Added ${locale} to deployment matrix (core + locale changes)`,
            );
          } else if (coreChanged) {
            log(`✅ Added ${locale} to deployment matrix (core changes)`);
          } else {
            log(`✅ Added ${locale} to deployment matrix (locale changes)`);
          }
        } else {
          log(`⚠️ Skipping ${locale} (missing configuration)`);
        }
      } else {
        log(`Skipping ${locale} (no changes detected)`);
      }
    } else {
      log(`Skipping ${locale} (not enabled)`);
    }
  }

  return { matrixInclude, hasChanges };
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);
  const triggerType = args[0];
  const manualLocales = args[1] || '';
  const changesJsonFile = args[2];

  // Validate arguments
  if (!triggerType) {
    console.error('Error: trigger-type is required');
    usage();
  }

  if (!['manual', 'auto'].includes(triggerType)) {
    console.error("Error: Invalid trigger-type. Must be 'manual' or 'auto'");
    usage();
  }

  try {
    // Check if locale config file exists
    if (!fs.existsSync(LOCALE_CONFIG_FILE)) {
      console.error(
        `Error: Locale config file not found: ${LOCALE_CONFIG_FILE}`,
      );
      process.exit(1);
    }

    // Read locale config
    let localeConfig;
    try {
      const localeConfigContent = fs.readFileSync(LOCALE_CONFIG_FILE, 'utf8');
      localeConfig = JSON.parse(stripJsonComments(localeConfigContent));
    } catch (error) {
      console.error('Error: Failed to read or parse locale config file');
      process.exit(1);
    }

    log('=== Locale Matrix Generator ===');
    log(`Trigger type: ${triggerType}`);

    let result;

    if (triggerType === 'manual') {
      result = processManualTrigger(localeConfig, manualLocales);
    } else {
      // For auto triggers, changes_json_file is required
      if (!changesJsonFile) {
        usage();
      }

      // Check if changes JSON file exists
      if (!fs.existsSync(changesJsonFile)) {
        console.error(`Error: Changes JSON file not found: ${changesJsonFile}`);
        process.exit(1);
      }

      // Read changes JSON from file
      let changesJson;
      try {
        const changesContent = fs.readFileSync(changesJsonFile, 'utf8');
        changesJson = JSON.parse(changesContent);
      } catch (error) {
        console.error('Error: Failed to read or parse changes JSON file');
        process.exit(1);
      }

      result = processAutoTrigger(localeConfig, changesJson);
    }

    // Format and validate the matrix output
    const matrixOutput = JSON.stringify(result.matrixInclude);

    if (validateJson(matrixOutput)) {
      console.log(`include=${matrixOutput}`);
      console.log(`has-changes=${result.hasChanges}`);
    } else {
      console.error('Error: Generated invalid JSON matrix');
      console.log('include=[]');
      console.log('has-changes=false');
      process.exit(1);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.log('include=[]');
    console.log('has-changes=false');
    process.exit(1);
  }
}

// Run main function if script is executed directly
if (require.main === module) {
  main();
}

module.exports = {
  main,
  processManualTrigger,
  processAutoTrigger,
  isLocaleEnabled,
  getLocaleConfig,
};
