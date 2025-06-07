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

function generateE2EMatrix(localesJson, shardTotal) {
  try {
    // Parse the locales input
    const locales = JSON.parse(localesJson);
    const shards = Array.from({ length: shardTotal }, (_, i) => i + 1);

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

    return result;
  } catch (error) {
    console.error('Error generating matrix:', error.message);
    throw error;
  }
}

// Main execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error(
      'Usage: node generate-e2e-matrix.js <locale-matrix-json> <shard-total>',
    );
    console.error(
      'Example: node generate-e2e-matrix.js \'[{"locale":"zh-hans"}]\' 3',
    );
    process.exit(1);
  }

  const [localesJson, shardTotalStr] = args;
  const shardTotal = Number.parseInt(shardTotalStr, 10);

  if (Number.isNaN(shardTotal) || shardTotal < 1) {
    console.error('Error: shard-total must be a positive integer');
    process.exit(1);
  }

  try {
    const matrix = generateE2EMatrix(localesJson, shardTotal);

    // Output results in GitHub Actions format (same as prerelease matrix script)
    console.log(`test-matrix=${JSON.stringify(matrix)}`);
  } catch (error) {
    console.error('Failed to generate matrix:', error.message);
    process.exit(1);
  }
}

module.exports = { generateE2EMatrix };
