#!/usr/bin/env node

/**
 * Script to generate dynamic files configuration for change detection
 * Usage: node generate-files-config.js
 */

const fs = require('node:fs');
const path = require('node:path');

// Default values
const SCRIPT_DIR = __dirname;
const ROOT_DIR = path.resolve(SCRIPT_DIR, '../..');
const LOCALE_CONFIG_FILE = path.join(ROOT_DIR, '.github/locales-config.json');

/**
 * Log messages with timestamp
 * @param {string} message
 */
function log(message) {
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
  console.error(`[${timestamp}] ${message}`);
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
 * Main function to generate files configuration
 */
function main() {
  try {
    // Check if locale config file exists
    if (!fs.existsSync(LOCALE_CONFIG_FILE)) {
      console.error(
        `Error: Locale config file not found: ${LOCALE_CONFIG_FILE}`,
      );
      process.exit(1);
    }

    // Read locale config
    let localeConfigContent;
    try {
      localeConfigContent = fs.readFileSync(LOCALE_CONFIG_FILE, 'utf8');
    } catch (error) {
      console.error('Error: Failed to read locale config file');
      process.exit(1);
    }

    // Validate locale config JSON
    if (!validateJson(localeConfigContent)) {
      console.error('Error: Invalid JSON in locale config file');
      process.exit(1);
    }

    const localeConfig = JSON.parse(stripJsonComments(localeConfigContent));

    log('=== Files Config Generator ===');
    log(`Locale config file: ${LOCALE_CONFIG_FILE}`);

    // Start with core files config
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

    log('Generated files_yaml configuration');

    // Output the files_yaml configuration
    console.log(filesYaml);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Run main function if script is executed directly
if (require.main === module) {
  main();
}

module.exports = { main };
