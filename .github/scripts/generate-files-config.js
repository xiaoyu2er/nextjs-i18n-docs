#!/usr/bin/env node

/**
 * Script to generate dynamic files configuration for change detection
 * Usage: node generate-files-config.js
 */

const { log, loadLocaleConfig, generateFilesConfig } = require('./lib/common');

/**
 * Main function to generate files configuration
 */
function main() {
  try {
    log('=== Files Config Generator ===');

    // Load locale configuration
    const localeConfig = loadLocaleConfig();
    log(`Loaded configuration for ${Object.keys(localeConfig).length} locales`);

    // Generate files config
    const filesYaml = generateFilesConfig(localeConfig);

    log('✅ Generated files_yaml configuration');

    // Output the files_yaml configuration
    console.log(filesYaml);
  } catch (error) {
    log(`Error: ${error.message}`, 'error');
    process.exit(1);
  }
}

// Run main function if script is executed directly
if (require.main === module) {
  main();
}

module.exports = { main };
