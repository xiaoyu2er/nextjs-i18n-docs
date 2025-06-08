#!/usr/bin/env node

/**
 * Unified script for GitHub Actions locale change detection and matrix generation
 * Usage: node check-locale-changes.js <trigger-type> [manual-locales] [github-outputs]
 *
 * This script combines:
 * 1. Files config generation for change detection
 * 2. Change detection logic
 * 3. Deployment matrix generation
 * 4. GitHub Actions output formatting
 */

const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

// Default values
const SCRIPT_DIR = __dirname;
const ROOT_DIR = path.resolve(SCRIPT_DIR, '../..');
const LOCALE_CONFIG_FILE = path.join(ROOT_DIR, '.github/locales-config.json');

/**
 * Log messages with timestamp
 */
function log(message, level = 'info') {
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
  const prefix = level === 'error' ? '❌' : level === 'warn' ? '⚠️' : 'ℹ️';
  console.error(`${prefix} [${timestamp}] ${message}`);
}

/**
 * Print usage information
 */
function usage() {
  console.log(
    `Usage: ${process.argv[1]} <trigger-type> [manual-locales] [github-outputs]`,
  );
  console.log('');
  console.log('Arguments:');
  console.log(
    "  trigger-type     Type of trigger: 'manual', 'auto', or 'docs-pr'",
  );
  console.log(
    '  manual-locales   Comma-separated list of locales (optional, for manual trigger)',
  );
  console.log(
    '  github-outputs   Set to "true" to output GitHub Actions format (optional)',
  );
  console.log('');
  console.log('Examples:');
  console.log(`  ${process.argv[1]} manual`);
  console.log(`  ${process.argv[1]} manual 'en,zh-hans'`);
  console.log(`  ${process.argv[1]} auto true`);
  process.exit(1);
}

/**
 * Load and validate locale configuration
 */
function loadLocaleConfig() {
  if (!fs.existsSync(LOCALE_CONFIG_FILE)) {
    throw new Error(`Locale config file not found: ${LOCALE_CONFIG_FILE}`);
  }

  try {
    const content = fs.readFileSync(LOCALE_CONFIG_FILE, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    throw new Error(`Failed to read or parse locale config: ${error.message}`);
  }
}

/**
 * Generate files configuration for change detection
 */
function generateFilesConfig(localeConfig) {
  let filesYaml = `core:
  - 'apps/docs/**'
  - 'packages/**'
  - '!apps/docs/content/**'
  - '!apps/docs/messages/**'`;

  // Add each locale from config dynamically
  const locales = Object.keys(localeConfig);
  for (const locale of locales) {
    filesYaml += `
${locale}:
  - 'apps/docs/content/${locale}/**'
  - 'apps/docs/messages/${locale}.json'`;
  }

  return filesYaml;
}

/**
 * Get changed files using git (fallback if tj-actions/changed-files is not available)
 */
function getChangedFiles(localeConfig) {
  try {
    // Get the list of changed files from git
    const changedFiles = execSync('git diff --name-only HEAD~1..HEAD', {
      encoding: 'utf8',
      cwd: ROOT_DIR,
    })
      .split('\n')
      .filter((file) => file.trim());

    log(`Found ${changedFiles.length} changed files`);

    // Initialize changes object
    const changes = {
      core_any_changed: false,
    };

    // Initialize locale changes
    for (const locale of Object.keys(localeConfig)) {
      const localeKey = locale.replace('-', '_');
      changes[`${localeKey}_any_changed`] = false;
    }

    // Check each changed file
    for (const file of changedFiles) {
      // Check core changes
      if (
        file.startsWith('apps/docs/') &&
        !file.startsWith('apps/docs/content/') &&
        !file.startsWith('apps/docs/messages/')
      ) {
        changes.core_any_changed = true;
      } else if (file.startsWith('packages/')) {
        changes.core_any_changed = true;
      }

      // Check locale-specific changes
      for (const locale of Object.keys(localeConfig)) {
        const localeKey = locale.replace('-', '_');
        if (
          file.startsWith(`apps/docs/content/${locale}/`) ||
          file === `apps/docs/messages/${locale}.json`
        ) {
          changes[`${localeKey}_any_changed`] = true;
        }
      }
    }

    return changes;
  } catch (error) {
    log(
      `Warning: Could not get changed files from git: ${error.message}`,
      'warn',
    );
    // Return empty changes if git fails
    const changes = { core_any_changed: false };
    for (const locale of Object.keys(localeConfig)) {
      const localeKey = locale.replace('-', '_');
      changes[`${localeKey}_any_changed`] = false;
    }
    return changes;
  }
}

/**
 * Check if locale is enabled
 */
function isLocaleEnabled(localeConfig, locale) {
  return localeConfig[locale]?.enabled === true;
}

/**
 * Get locale configuration field
 */
function getLocaleConfig(localeConfig, locale, field) {
  return localeConfig[locale]?.[field] || '';
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
 * Process automatic/docs-pr trigger
 */
function processAutoTrigger(localeConfig, changes) {
  let matrixInclude = [];
  let hasChanges = false;

  // Check core changes
  const coreChanged = changes.core_any_changed;

  if (coreChanged) {
    log('✅ Core changes detected, will deploy all enabled locales');
  }

  // Check each locale dynamically from config
  for (const locale of Object.keys(localeConfig)) {
    if (isLocaleEnabled(localeConfig, locale)) {
      const localeKey = locale.replace('-', '_');
      const localeChanged = changes[`${localeKey}_any_changed`];

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
          log(`⚠️ Skipping ${locale} (missing configuration)`, 'warn');
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
 * Output results in GitHub Actions format
 */
function outputGitHubActions(result, filesYaml = null) {
  const matrixOutput = JSON.stringify(result.matrixInclude);

  // Write to GITHUB_OUTPUT if the environment variable is set
  const githubOutput = process.env.GITHUB_OUTPUT;
  if (githubOutput) {
    try {
      let output = `matrix-include=${matrixOutput}\n`;
      output += `has-changes=${result.hasChanges}\n`;

      if (filesYaml) {
        // Use heredoc syntax for multiline YAML
        output += `files_yaml<<EOF\n${filesYaml}\nEOF\n`;
      }

      fs.appendFileSync(githubOutput, output);
      log('✅ Results written to GITHUB_OUTPUT');
    } catch (error) {
      log(
        `Warning: Could not write to GITHUB_OUTPUT: ${error.message}`,
        'warn',
      );
    }
  }

  // Also output to stdout for compatibility
  console.log(`matrix-include=${matrixOutput}`);
  console.log(`has-changes=${result.hasChanges}`);

  if (filesYaml) {
    // Output files_yaml for the GitHub Action to capture
    console.log('files_yaml<<EOF');
    console.log(filesYaml);
    console.log('EOF');
  }
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);
  const triggerType = args[0];
  const manualLocales = args[1] || '';
  const useGitHubOutput = args[2] === 'true';

  // Validate arguments
  if (!triggerType) {
    console.error('Error: trigger-type is required');
    usage();
  }

  if (!['manual', 'auto', 'docs-pr'].includes(triggerType)) {
    console.error(
      "Error: Invalid trigger-type. Must be 'manual', 'auto', or 'docs-pr'",
    );
    usage();
  }

  try {
    log('=== Unified Locale Change Detection ===');
    log(`Trigger type: ${triggerType}`);

    // Load locale configuration
    const localeConfig = loadLocaleConfig();
    log(`Loaded configuration for ${Object.keys(localeConfig).length} locales`);

    let result;
    let filesYaml = null;

    if (triggerType === 'manual') {
      result = processManualTrigger(localeConfig, manualLocales);
    } else {
      // For auto and docs-pr triggers, generate files config and detect changes
      filesYaml = generateFilesConfig(localeConfig);
      log('Generated files configuration for change detection');

      const changes = getChangedFiles(localeConfig);
      result = processAutoTrigger(localeConfig, changes);
    }

    // Output results
    if (useGitHubOutput) {
      outputGitHubActions(result, filesYaml);
    } else {
      // Simple output format
      const matrixOutput = JSON.stringify(result.matrixInclude);
      console.log(`matrix-include=${matrixOutput}`);
      console.log(`has-changes=${result.hasChanges}`);

      if (filesYaml) {
        console.log('---FILES-CONFIG---');
        console.log(filesYaml);
      }
    }

    log(`✅ Generated matrix with ${result.matrixInclude.length} locale(s)`);
  } catch (error) {
    log(`Error: ${error.message}`, 'error');
    console.log('matrix-include=[]');
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
  loadLocaleConfig,
  generateFilesConfig,
  getChangedFiles,
  processManualTrigger,
  processAutoTrigger,
  isLocaleEnabled,
  getLocaleConfig,
};
