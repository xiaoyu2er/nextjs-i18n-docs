#!/usr/bin/env node

/**
 * Script to generate locale deployment matrix for prerelease workflow
 * Usage: node generate-prerelease-matrix.js <labels-json>
 *
 * labels-json: JSON string containing array of PR labels
 */

const {
  log,
  loadLocaleConfig,
  isLocaleEnabled,
  getLocaleConfig,
  createUsageFunction,
} = require('./lib/common');

// Usage information
const usage = createUsageFunction(
  process.argv[1],
  [
    {
      name: 'labels-json',
      required: true,
      description: 'JSON string containing array of PR labels',
    },
  ],
  [
    `${process.argv[1]} '["prerelease"]'`,
    `${process.argv[1]} '["prerelease:en", "prerelease:zh-hans"]'`,
  ],
);

/**
 * Add locale to prerelease matrix (simplified version without orama_private_api_key)
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
          log(`⚠️ Skipping ${locale} (missing secret_project_id)`, 'warn');
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
            log(`⚠️ Skipping ${locale} (missing secret_project_id)`, 'warn');
          }
        } else {
          log(`❌ Skipping ${locale} (not enabled or not found)`, 'warn');
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

    log('=== Prerelease Matrix Generator ===');

    // Load locale configuration
    const localeConfig = loadLocaleConfig();
    log(`Loaded configuration for ${Object.keys(localeConfig).length} locales`);

    // Process prerelease labels
    const result = processPrerelease(localeConfig, labels);

    // Output results in GitHub Actions format
    console.log(`matrix={"include":${JSON.stringify(result.matrixInclude)}}`);

    // Validate that we have at least one locale to deploy
    if (result.matrixInclude.length === 0) {
      log('❌ No enabled locales found to deploy', 'error');
      process.exit(1);
    }

    log(`✅ Generated matrix with ${result.matrixInclude.length} locale(s)`);
  } catch (error) {
    log(`Error: ${error.message}`, 'error');
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
};
