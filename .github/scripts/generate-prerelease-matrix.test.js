#!/usr/bin/env node

/**
 * Simple tests for the prerelease matrix generation script
 * Usage: node test-prerelease-matrix.js
 */

const { test } = require('node:test');
const assert = require('node:assert');
const {
  processPrerelease,
  isLocaleEnabled,
  getLocaleConfig,
} = require('./generate-prerelease-matrix.js');

// Mock locale config for testing
const mockLocaleConfig = {
  en: {
    secret_project_id: 'VERCEL_PROJECT_EN_ID',
    enabled: true,
  },
  'zh-hans': {
    secret_project_id: 'VERCEL_PROJECT_ZH_HANS_ID',
    enabled: true,
  },
  'zh-hant': {
    secret_project_id: 'VERCEL_PROJECT_ZH_HANT_ID',
    enabled: true,
  },
  ja: {
    secret_project_id: 'VERCEL_PROJECT_JA_ID',
    enabled: false,
  },
  es: {
    secret_project_id: 'VERCEL_PROJECT_ES_ID',
    enabled: false,
  },
};

test('isLocaleEnabled should return correct boolean values', () => {
  assert.strictEqual(isLocaleEnabled(mockLocaleConfig, 'en'), true);
  assert.strictEqual(isLocaleEnabled(mockLocaleConfig, 'zh-hans'), true);
  assert.strictEqual(isLocaleEnabled(mockLocaleConfig, 'zh-hant'), true);
  assert.strictEqual(isLocaleEnabled(mockLocaleConfig, 'ja'), false);
  assert.strictEqual(isLocaleEnabled(mockLocaleConfig, 'es'), false);
  assert.strictEqual(isLocaleEnabled(mockLocaleConfig, 'nonexistent'), false);
});

test('getLocaleConfig should return correct configuration values', () => {
  assert.strictEqual(
    getLocaleConfig(mockLocaleConfig, 'en', 'secret_project_id'),
    'VERCEL_PROJECT_EN_ID',
  );
  assert.strictEqual(
    getLocaleConfig(mockLocaleConfig, 'zh-hans', 'secret_project_id'),
    'VERCEL_PROJECT_ZH_HANS_ID',
  );
  assert.strictEqual(
    getLocaleConfig(mockLocaleConfig, 'nonexistent', 'secret_project_id'),
    '',
  );
  assert.strictEqual(
    getLocaleConfig(mockLocaleConfig, 'en', 'nonexistent_field'),
    '',
  );
});

test('processPrerelease should handle general prerelease label (deploy all enabled locales)', () => {
  const result = processPrerelease(mockLocaleConfig, ['prerelease']);

  // Should include all enabled locales
  assert.strictEqual(result.matrixInclude.length, 3);
  assert.strictEqual(result.hasChanges, true);

  const locales = result.matrixInclude.map((item) => item.locale);
  assert.ok(locales.includes('en'));
  assert.ok(locales.includes('zh-hans'));
  assert.ok(locales.includes('zh-hant'));
  assert.ok(!locales.includes('ja')); // ja is disabled
  assert.ok(!locales.includes('es')); // es is disabled
});

test('processPrerelease should handle specific locale prerelease', () => {
  const result = processPrerelease(mockLocaleConfig, [
    'prerelease:en',
    'prerelease:zh-hans',
  ]);

  // Should include only the specified locales
  assert.strictEqual(result.matrixInclude.length, 2);
  assert.strictEqual(result.hasChanges, true);

  const locales = result.matrixInclude.map((item) => item.locale);
  assert.ok(locales.includes('en'));
  assert.ok(locales.includes('zh-hans'));
  assert.ok(!locales.includes('zh-hant'));
});

test('processPrerelease should skip disabled locales', () => {
  const result = processPrerelease(mockLocaleConfig, ['prerelease:ja']);

  // Should not include disabled locale
  assert.strictEqual(result.matrixInclude.length, 0);
  assert.strictEqual(result.hasChanges, false);
});

test('processPrerelease should handle mixed labels (general + specific)', () => {
  const result = processPrerelease(mockLocaleConfig, [
    'prerelease',
    'prerelease:ja',
  ]);

  // General prerelease should take precedence - deploy all enabled locales
  assert.strictEqual(result.matrixInclude.length, 3);
  assert.strictEqual(result.hasChanges, true);

  const locales = result.matrixInclude.map((item) => item.locale);
  assert.ok(locales.includes('en'));
  assert.ok(locales.includes('zh-hans'));
  assert.ok(locales.includes('zh-hant'));
});

test('processPrerelease should handle no prerelease labels', () => {
  const result = processPrerelease(mockLocaleConfig, ['bug', 'feature']);

  // Should include no locales when no prerelease labels
  assert.strictEqual(result.matrixInclude.length, 0);
  assert.strictEqual(result.hasChanges, false);
});

test('processPrerelease should handle empty labels array', () => {
  const result = processPrerelease(mockLocaleConfig, []);

  // Should include no locales when no labels
  assert.strictEqual(result.matrixInclude.length, 0);
  assert.strictEqual(result.hasChanges, false);
});

test('processPrerelease should handle non-existent locale', () => {
  const result = processPrerelease(mockLocaleConfig, ['prerelease:invalid']);

  // Should not include non-existent locale
  assert.strictEqual(result.matrixInclude.length, 0);
  assert.strictEqual(result.hasChanges, false);
});

console.log('All tests passed! ✅');
