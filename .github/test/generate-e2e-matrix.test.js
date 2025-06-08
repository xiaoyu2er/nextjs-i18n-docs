#!/usr/bin/env node

/**
 * Tests for the E2E matrix generation script
 * Usage: node generate-e2e-matrix.test.js
 */

const { test } = require('node:test');
const assert = require('node:assert');
const { generateE2EMatrix } = require('../scripts/generate-e2e-matrix.js');

test('generateE2EMatrix should create cross-product of locales and shards', () => {
  const localesJson =
    '[{"locale":"zh-hans","secret_project_id":"VERCEL_PROJECT_ID_ZH_HANS"},{"locale":"zh-hant","secret_project_id":"VERCEL_PROJECT_ID_ZH_HANT"}]';
  const shardTotal = 3;

  const result = generateE2EMatrix(localesJson, shardTotal);

  // Should have 6 jobs total (2 locales × 3 shards)
  assert.strictEqual(result.include.length, 6);

  // Check structure
  assert.ok(
    result.include.every(
      (job) =>
        Object.prototype.hasOwnProperty.call(job, 'locale') &&
        Object.prototype.hasOwnProperty.call(job, 'shard') &&
        Object.prototype.hasOwnProperty.call(job, 'secret_project_id'),
    ),
  );

  // Check shards are 1-indexed
  const shards = result.include.map((job) => job.shard).sort();
  assert.deepStrictEqual(shards, [1, 1, 2, 2, 3, 3]);

  // Check both locales are present
  const locales = [...new Set(result.include.map((job) => job.locale))];
  assert.deepStrictEqual(locales.sort(), ['zh-hans', 'zh-hant']);
});

test('generateE2EMatrix should handle single locale', () => {
  const localesJson =
    '[{"locale":"zh-hans","secret_project_id":"VERCEL_PROJECT_ID_ZH_HANS"}]';
  const shardTotal = 2;

  const result = generateE2EMatrix(localesJson, shardTotal);

  // Should have 2 jobs (1 locale × 2 shards)
  assert.strictEqual(result.include.length, 2);

  // All jobs should be for zh-hans
  assert.ok(result.include.every((job) => job.locale === 'zh-hans'));

  // Should have shards 1 and 2
  const shards = result.include.map((job) => job.shard).sort();
  assert.deepStrictEqual(shards, [1, 2]);
});

test('generateE2EMatrix should handle single shard', () => {
  const localesJson =
    '[{"locale":"zh-hans","secret_project_id":"VERCEL_PROJECT_ID_ZH_HANS"},{"locale":"zh-hant","secret_project_id":"VERCEL_PROJECT_ID_ZH_HANT"}]';
  const shardTotal = 1;

  const result = generateE2EMatrix(localesJson, shardTotal);

  // Should have 2 jobs (2 locales × 1 shard)
  assert.strictEqual(result.include.length, 2);

  // All jobs should have shard 1
  assert.ok(result.include.every((job) => job.shard === 1));

  // Should have both locales
  const locales = result.include.map((job) => job.locale).sort();
  assert.deepStrictEqual(locales, ['zh-hans', 'zh-hant']);
});

test('generateE2EMatrix should preserve additional properties', () => {
  const localesJson =
    '[{"locale":"zh-hans","secret_project_id":"VERCEL_PROJECT_ID_ZH_HANS","extra":"value"}]';
  const shardTotal = 2;

  const result = generateE2EMatrix(localesJson, shardTotal);

  // Should preserve the extra property
  assert.ok(result.include.every((job) => job.extra === 'value'));
  assert.ok(
    result.include.every(
      (job) => job.secret_project_id === 'VERCEL_PROJECT_ID_ZH_HANS',
    ),
  );
});

test('generateE2EMatrix should handle large shard counts', () => {
  const localesJson =
    '[{"locale":"zh-hans","secret_project_id":"VERCEL_PROJECT_ID_ZH_HANS"}]';
  const shardTotal = 10;

  const result = generateE2EMatrix(localesJson, shardTotal);

  // Should have 10 jobs
  assert.strictEqual(result.include.length, 10);

  // Should have shards 1 through 10
  const shards = result.include.map((job) => job.shard).sort((a, b) => a - b);
  assert.deepStrictEqual(shards, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('generateE2EMatrix should handle empty locales array', () => {
  const localesJson = '[]';
  const shardTotal = 3;

  const result = generateE2EMatrix(localesJson, shardTotal);

  // Should have no jobs
  assert.strictEqual(result.include.length, 0);
});

test('generateE2EMatrix should throw on invalid JSON', () => {
  try {
    generateE2EMatrix('invalid json', 3);
    assert.fail('Expected function to throw');
  } catch (error) {
    assert.ok(error.message.includes('Unexpected token'));
  }
});
