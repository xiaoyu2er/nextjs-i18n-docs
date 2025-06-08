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
const {
  log,
  loadLocaleConfig,
  isLocaleEnabled,
  getLocaleConfig,
  addLocaleToMatrix,
  parseLocaleList,
  outputGitHubActions,
  createUsageFunction,
} = require('./lib/common');

// Usage information
const usage = createUsageFunction(
  process.argv[1],
  [
    {
      name: 'trigger-type',
      required: true,
      description: "Type of trigger: 'manual' or 'auto'",
    },
    {
      name: 'manual-locales',
      required: false,
      description:
        'Comma-separated list of locales (optional, for manual trigger)',
    },
    {
      name: 'changes-json-file',
      required: false,
      description:
        'File path containing JSON output from changed-files action (for auto triggers)',
    },
  ],
  [
    `${process.argv[1]} manual`,
    `${process.argv[1]} manual 'en,zh-hans'`,
    `${process.argv[1]} auto '/tmp/changes.json'`,
  ],
);

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
          log(`⚠️ Skipping ${locale} (missing configuration)`, 'warn');
        }
      } else {
        log(`Skipping ${locale} (not enabled)`);
      }
    }
  } else {
    log(`Manual locales specified: ${manualLocales}`);
    const locales = parseLocaleList(manualLocales);

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
          log(`⚠️ Skipping ${locale} (missing configuration)`, 'warn');
        }
      } else {
        log(
          `⚠️ Skipping ${locale} (not enabled or not found in config)`,
          'warn',
        );
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
      // For changes JSON, use the locale name as-is (no conversion needed)
      const localeKey = locale; // Keep original locale name for changes JSON key
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
    log('=== Locale Matrix Generator ===');
    log(`Trigger type: ${triggerType}`);

    // Load locale configuration
    const localeConfig = loadLocaleConfig();
    log(`Loaded configuration for ${Object.keys(localeConfig).length} locales`);

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

    // Format and output the matrix
    const matrixOutput = JSON.stringify(result.matrixInclude);
    console.log(`include=${matrixOutput}`);
    console.log(`has-changes=${result.hasChanges}`);

    log(`✅ Generated matrix with ${result.matrixInclude.length} locale(s)`);
  } catch (error) {
    log(`Error: ${error.message}`, 'error');
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
};
