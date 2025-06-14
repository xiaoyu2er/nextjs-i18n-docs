#!/usr/bin/env node

/**
 * Generate E2E test matrix by creating cross-product of locales and shards
 *
 * Usage:
 *   node generate-e2e-matrix.js '<locale-matrix-json>' <shard-total>
 *
 * Example:
 *   node generate-e2e-matrix.js '[{"locale":"zh-hans","secret_project_id":"VERCEL_PROJECT_ID_ZH_HANS"},{"locale":"zh-hant","secret_project_id":"VERCEL_PROJECT_ID_ZH_HANT"}]' 5
 */

const { log, createUsageFunction } = require('./lib/common');

// Usage information
const usage = createUsageFunction(
  process.argv[1],
  [
    {
      name: 'locale-matrix-json',
      required: true,
      description: 'JSON string containing array of locale objects',
    },
    {
      name: 'shard-total',
      required: true,
      description: 'Total number of test shards (positive integer)',
    },
  ],
  [
    `${process.argv[1]} '[{"locale":"zh-hans"}]' 3`,
    `${process.argv[1]} '[{"locale":"zh-hans","secret_project_id":"VERCEL_PROJECT_ID_ZH_HANS"}]' 5`,
  ],
);

function generateE2EMatrix(localesJson, shardTotal) {
  try {
    log('=== E2E Matrix Generator ===');
    log(`Generating matrix for ${shardTotal} shards`);

    // Parse the locales input
    const locales = JSON.parse(localesJson);
    const shards = Array.from({ length: shardTotal }, (_, i) => i + 1);

    log(`Processing ${locales.length} locale(s) across ${shardTotal} shard(s)`);

    // Generate cross-product of locales and shards
    const matrix = [];

    for (const locale of locales) {
      for (const shard of shards) {
        matrix.push({
          ...locale,
          shard: shard,
        });
      }
    }

    const result = {
      include: matrix,
    };

    log(`✅ Generated matrix with ${matrix.length} test combinations`);
    return result;
  } catch (error) {
    log(`Error generating matrix: ${error.message}`, 'error');
    throw error;
  }
}

// Main execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error('Error: Invalid number of arguments');
    usage();
  }

  const [localesJson, shardTotalStr] = args;
  const shardTotal = Number.parseInt(shardTotalStr, 10);

  if (Number.isNaN(shardTotal) || shardTotal < 1) {
    console.error('Error: shard-total must be a positive integer');
    process.exit(1);
  }

  try {
    const matrix = generateE2EMatrix(localesJson, shardTotal);

    // Output results in GitHub Actions format
    console.log(`test-matrix=${JSON.stringify(matrix)}`);
  } catch (error) {
    log(`Failed to generate matrix: ${error.message}`, 'error');
    process.exit(1);
  }
}

module.exports = { generateE2EMatrix };
