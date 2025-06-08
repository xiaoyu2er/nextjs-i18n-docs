#!/usr/bin/env node

/**
 * Tests for the unified check-locale-changes script
 * Usage: node check-locale-changes.test.js
 */

const { test } = require('node:test');
const assert = require('node:assert');
const {
  generateFilesConfig,
  processManualTrigger,
  processAutoTrigger,
  isLocaleEnabled,
  getLocaleConfig,
} = require('../scripts/check-locale-changes.js');

// Mock locale config for testing
const mockLocaleConfig = {
  en: {
    secret_project_id: 'VERCEL_PROJECT_EN_ID',
    orama_private_api_key: 'ORAMA_PRIVATE_API_KEY_EN',
    enabled: true,
  },
  'zh-hans': {
    secret_project_id: 'VERCEL_PROJECT_ZH_HANS_ID',
    orama_private_api_key: 'ORAMA_PRIVATE_API_KEY_ZH_HANS',
    enabled: true,
  },
  fr: {
    secret_project_id: 'VERCEL_PROJECT_FR_ID',
    orama_private_api_key: 'ORAMA_PRIVATE_API_KEY_FR',
    enabled: false,
  },
};

test('isLocaleEnabled should return correct boolean values', () => {
  assert.strictEqual(isLocaleEnabled(mockLocaleConfig, 'en'), true);
  assert.strictEqual(isLocaleEnabled(mockLocaleConfig, 'zh-hans'), true);
  assert.strictEqual(isLocaleEnabled(mockLocaleConfig, 'fr'), false);
  assert.strictEqual(isLocaleEnabled(mockLocaleConfig, 'nonexistent'), false);
});

test('getLocaleConfig should return correct configuration values', () => {
  assert.strictEqual(
    getLocaleConfig(mockLocaleConfig, 'en', 'secret_project_id'),
    'VERCEL_PROJECT_EN_ID',
  );
  assert.strictEqual(
    getLocaleConfig(mockLocaleConfig, 'en', 'orama_private_api_key'),
    'ORAMA_PRIVATE_API_KEY_EN',
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

test('generateFilesConfig should create proper YAML configuration', () => {
  const filesYaml = generateFilesConfig(mockLocaleConfig);

  // Should contain core files
  assert.ok(filesYaml.includes("core:\n  - 'apps/docs/**'"));
  assert.ok(filesYaml.includes("  - 'packages/**'"));
  assert.ok(filesYaml.includes("  - '!apps/docs/content/**'"));

  // Should contain locale-specific files
  assert.ok(filesYaml.includes("en:\n  - 'apps/docs/content/en/**'"));
  assert.ok(filesYaml.includes("  - 'apps/docs/messages/en.json'"));
  assert.ok(filesYaml.includes("zh-hans:\n  - 'apps/docs/content/zh-hans/**'"));
  assert.ok(filesYaml.includes("fr:\n  - 'apps/docs/content/fr/**'"));
});

test('processManualTrigger should handle empty manual locales', () => {
  const result = processManualTrigger(mockLocaleConfig, '');

  // Should include all enabled locales
  assert.strictEqual(result.matrixInclude.length, 2);
  assert.strictEqual(result.hasChanges, true);

  const locales = result.matrixInclude.map((item) => item.locale);
  assert.ok(locales.includes('en'));
  assert.ok(locales.includes('zh-hans'));
  assert.ok(!locales.includes('fr')); // fr is disabled
});

test('processManualTrigger should handle specific manual locales', () => {
  const result = processManualTrigger(mockLocaleConfig, 'en');

  // Should include only the specified locale
  assert.strictEqual(result.matrixInclude.length, 1);
  assert.strictEqual(result.hasChanges, true);
  assert.strictEqual(result.matrixInclude[0].locale, 'en');
});

test('processManualTrigger should skip disabled locales', () => {
  const result = processManualTrigger(mockLocaleConfig, 'fr');

  // Should not include disabled locale
  assert.strictEqual(result.matrixInclude.length, 0);
  assert.strictEqual(result.hasChanges, false);
});

test('processAutoTrigger should handle core changes', () => {
  const mockChanges = {
    core_any_changed: true,
    en_any_changed: false,
    zh_hans_any_changed: false,
    fr_any_changed: false,
  };

  const result = processAutoTrigger(mockLocaleConfig, mockChanges);

  // Should include all enabled locales when core changes
  assert.strictEqual(result.matrixInclude.length, 2);
  assert.strictEqual(result.hasChanges, true);

  const locales = result.matrixInclude.map((item) => item.locale);
  assert.ok(locales.includes('en'));
  assert.ok(locales.includes('zh-hans'));
});

test('processAutoTrigger should handle specific locale changes', () => {
  const mockChanges = {
    core_any_changed: false,
    en_any_changed: true,
    zh_hans_any_changed: false,
    fr_any_changed: false,
  };

  const result = processAutoTrigger(mockLocaleConfig, mockChanges);

  // Should include only the changed locale
  assert.strictEqual(result.matrixInclude.length, 1);
  assert.strictEqual(result.hasChanges, true);
  assert.strictEqual(result.matrixInclude[0].locale, 'en');
});

test('processAutoTrigger should handle no changes', () => {
  const mockChanges = {
    core_any_changed: false,
    en_any_changed: false,
    zh_hans_any_changed: false,
    fr_any_changed: false,
  };

  const result = processAutoTrigger(mockLocaleConfig, mockChanges);

  // Should include no locales when no changes
  assert.strictEqual(result.matrixInclude.length, 0);
  assert.strictEqual(result.hasChanges, false);
});

test('Matrix items should have correct structure', () => {
  const result = processManualTrigger(mockLocaleConfig, 'en');
  const item = result.matrixInclude[0];

  assert.ok(Object.prototype.hasOwnProperty.call(item, 'locale'));
  assert.ok(Object.prototype.hasOwnProperty.call(item, 'secret_project_id'));
  assert.ok(
    Object.prototype.hasOwnProperty.call(item, 'orama_private_api_key'),
  );
  assert.strictEqual(typeof item.locale, 'string');
  assert.strictEqual(typeof item.secret_project_id, 'string');
  assert.strictEqual(typeof item.orama_private_api_key, 'string');
});

console.log('All tests passed! ✅');
