#!/usr/bin/env node

/**
 * Common utilities for GitHub Actions scripts
 * This module contains shared functionality used across multiple scripts
 */

const fs = require('node:fs');
const path = require('node:path');

// Default values
const SCRIPT_DIR = path.dirname(path.dirname(__filename));
const ROOT_DIR = path.resolve(SCRIPT_DIR, '../..');
const LOCALE_CONFIG_FILE = path.join(ROOT_DIR, '.github/locales-config.json');

/**
 * Log messages with timestamp and optional emoji prefix
 */
function log(message, level = 'info') {
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
  let prefix = '';

  switch (level) {
    case 'error':
      prefix = '❌';
      break;
    case 'warn':
      prefix = '⚠️';
      break;
    case 'success':
      prefix = '✅';
      break;
    default:
      prefix = 'ℹ️';
      break;
  }

  console.error(`${prefix} [${timestamp}] ${message}`);
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
 * Validate JSON content
 * @param {string} jsonString
 * @returns {boolean}
 */
function validateJson(jsonString) {
  try {
    JSON.parse(stripJsonComments(jsonString));
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Load and validate locale configuration
 * @returns {Object} Parsed locale configuration
 * @throws {Error} If config file is not found or invalid
 */
function loadLocaleConfig() {
  if (!fs.existsSync(LOCALE_CONFIG_FILE)) {
    throw new Error(`Locale config file not found: ${LOCALE_CONFIG_FILE}`);
  }

  try {
    const content = fs.readFileSync(LOCALE_CONFIG_FILE, 'utf8');

    // Validate JSON before parsing
    if (!validateJson(content)) {
      throw new Error('Invalid JSON in locale config file');
    }

    return JSON.parse(stripJsonComments(content));
  } catch (error) {
    throw new Error(`Failed to read or parse locale config: ${error.message}`);
  }
}

/**
 * Check if locale is enabled in configuration
 * @param {Object} localeConfig - The locale configuration object
 * @param {string} locale - The locale to check
 * @returns {boolean} True if locale is enabled
 */
function isLocaleEnabled(localeConfig, locale) {
  return localeConfig[locale]?.enabled === true;
}

/**
 * Get locale configuration field value
 * @param {Object} localeConfig - The locale configuration object
 * @param {string} locale - The locale to get config for
 * @param {string} field - The field to retrieve
 * @returns {string} The field value or empty string if not found
 */
function getLocaleConfig(localeConfig, locale, field) {
  return localeConfig[locale]?.[field] || '';
}

/**
 * Add locale to matrix with secret project ID and optional orama API key
 * @param {Array} matrix - Current matrix array
 * @param {string} locale - Locale to add
 * @param {string} secretProjectId - Secret project ID
 * @param {string} [oramaPrivateApiKey] - Optional Orama private API key
 * @returns {Array} Updated matrix array
 */
function addLocaleToMatrix(
  matrix,
  locale,
  secretProjectId,
  oramaPrivateApiKey,
) {
  const entry = {
    locale,
    secret_project_id: secretProjectId,
  };

  if (oramaPrivateApiKey) {
    entry.orama_private_api_key = oramaPrivateApiKey;
  }

  return [...matrix, entry];
}

/**
 * Generate files configuration for change detection
 * @param {Object} localeConfig - The locale configuration object
 * @returns {string} YAML configuration string
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
 * Create standardized usage function
 * @param {string} scriptName - Name of the script
 * @param {Array} args - Array of argument definitions
 * @param {Array} examples - Array of example usage strings
 * @returns {Function} Usage function that exits with code 1
 */
function createUsageFunction(scriptName, args, examples) {
  return function usage() {
    console.log(
      `Usage: ${scriptName} ${args.map((arg) => (arg.required ? `<${arg.name}>` : `[${arg.name}]`)).join(' ')}`,
    );
    console.log('');
    console.log('Arguments:');

    for (const arg of args) {
      const padding = ' '.repeat(Math.max(2, 20 - arg.name.length));
      console.log(`  ${arg.name}${padding}${arg.description}`);
    }

    console.log('');
    console.log('Examples:');
    for (const example of examples) {
      console.log(`  ${example}`);
    }

    process.exit(1);
  };
}

/**
 * Process all enabled locales and add them to matrix
 * @param {Object} localeConfig - The locale configuration object
 * @param {Function} fieldMapper - Function to map locale config to matrix fields
 * @param {Function} validator - Function to validate if locale should be added
 * @returns {Object} Object with matrixInclude array and hasChanges boolean
 */
function processAllEnabledLocales(localeConfig, fieldMapper, validator = null) {
  let matrixInclude = [];
  let hasChanges = false;

  for (const locale of Object.keys(localeConfig)) {
    if (isLocaleEnabled(localeConfig, locale)) {
      const fields = fieldMapper(localeConfig, locale);

      // Apply custom validation if provided
      if (validator && !validator(localeConfig, locale, fields)) {
        log(`⚠️ Skipping ${locale} (validation failed)`);
        continue;
      }

      // Check if all required fields are present
      const missingFields = Object.entries(fields).filter(
        ([key, value]) => !value,
      );
      if (missingFields.length > 0) {
        log(
          `⚠️ Skipping ${locale} (missing ${missingFields.map(([key]) => key).join(', ')})`,
        );
        continue;
      }

      matrixInclude = addLocaleToMatrix(matrixInclude, locale, fields);
      hasChanges = true;
      log(`✅ Added ${locale} to deployment matrix`, 'success');
    } else {
      log(`Skipping ${locale} (not enabled)`);
    }
  }

  return { matrixInclude, hasChanges };
}

/**
 * Parse comma-separated locale list
 * @param {string} localesString - Comma-separated locale list
 * @returns {Array} Array of locale strings
 */
function parseLocaleList(localesString) {
  return localesString
    .split(',')
    .map((locale) => locale.trim())
    .filter((locale) => locale.length > 0);
}

/**
 * Output results in GitHub Actions format
 * @param {Object} result - Result object with matrixInclude and hasChanges
 * @param {string} filesYaml - Optional files YAML configuration
 */
function outputGitHubActions(result, filesYaml = null) {
  if (filesYaml) {
    console.log('files_yaml<<EOF');
    console.log(filesYaml);
    console.log('EOF');
  }

  console.log(`matrix={"include":${JSON.stringify(result.matrixInclude)}}`);
  console.log(`has_changes=${result.hasChanges}`);
}

/**
 * Constants
 */
const CONSTANTS = {
  SCRIPT_DIR,
  ROOT_DIR,
  LOCALE_CONFIG_FILE,
};

module.exports = {
  // Core functions
  log,
  loadLocaleConfig,
  isLocaleEnabled,
  getLocaleConfig,
  addLocaleToMatrix,
  generateFilesConfig,

  // Utility functions
  stripJsonComments,
  validateJson,
  createUsageFunction,
  processAllEnabledLocales,
  parseLocaleList,
  outputGitHubActions,

  // Constants
  CONSTANTS,
};
