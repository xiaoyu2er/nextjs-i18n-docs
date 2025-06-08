#!/usr/bin/env node

/**
 * Tests for the process-file-changes script
 *
 * This test suite creates temporary git repositories and directory structures
 * to test the file rename and deletion processing functionality.
 *
 * Usage:
 *   node process-file-changes.test.js
 *   node --test process-file-changes.test.js
 *
 * Requirements:
 *   - Git must be installed and available in PATH
 *   - Node.js v18+ (for built-in test runner)
 */

const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');
const os = require('node:os');

const {
  findAvailableLocales,
  getRenamedFiles,
  getDeletedFiles,
  processRenames,
  processDeletions,
} = require('./process-file-changes.js');

// Mock test directory setup
let testDir;
let originalCwd;

function setupTestDirectory() {
  testDir = fs.mkdtempSync(
    path.join(os.tmpdir(), 'process-file-changes-test-'),
  );
  originalCwd = process.cwd();
  process.chdir(testDir);

  // Initialize git repo
  execSync('git init', { stdio: 'ignore' });
  execSync('git config user.email "test@example.com"', { stdio: 'ignore' });
  execSync('git config user.name "Test User"', { stdio: 'ignore' });

  // Create directory structure
  const contentDir = path.join(testDir, 'apps/docs/content');
  fs.mkdirSync(contentDir, { recursive: true });

  // Create locale directories
  const locales = ['en', 'zh-hans', 'zh-hant', 'ja'];
  for (const locale of locales) {
    const localeDir = path.join(contentDir, locale, 'docs');
    fs.mkdirSync(localeDir, { recursive: true });
  }

  return { testDir, contentDir };
}

function cleanupTestDirectory() {
  process.chdir(originalCwd);
  if (testDir && fs.existsSync(testDir)) {
    fs.rmSync(testDir, { recursive: true, force: true });
  }
}

function createTestFile(filePath, content = '') {
  const fullPath = path.join(testDir, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
  return fullPath;
}

test('findAvailableLocales should return translation locales excluding en', () => {
  const { contentDir } = setupTestDirectory();

  try {
    const locales = findAvailableLocales();

    assert.ok(Array.isArray(locales));
    assert.ok(locales.includes('zh-hans'));
    assert.ok(locales.includes('zh-hant'));
    assert.ok(locales.includes('ja'));
    assert.ok(!locales.includes('en'));
    assert.strictEqual(locales.length, 3);
  } finally {
    cleanupTestDirectory();
  }
});

test('findAvailableLocales should return empty array when content directory does not exist', () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'no-content-'));
  const originalCwd = process.cwd();

  try {
    process.chdir(tempDir);
    const locales = findAvailableLocales();

    assert.deepStrictEqual(locales, []);
  } finally {
    process.chdir(originalCwd);
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
});

test('getRenamedFiles should detect renamed files in git status', () => {
  setupTestDirectory();

  try {
    // Create and commit initial file
    const originalFile = 'apps/docs/content/en/docs/original.md';
    createTestFile(originalFile, '# Original Content');
    execSync('git add .', { stdio: 'ignore' });
    execSync('git commit -m "Initial commit"', { stdio: 'ignore' });

    // Rename file and stage changes
    const newFile = 'apps/docs/content/en/docs/renamed.md';
    const originalPath = path.join(testDir, originalFile);
    const newPath = path.join(testDir, newFile);
    fs.renameSync(originalPath, newPath);
    execSync('git add .', { stdio: 'ignore' });

    const renames = getRenamedFiles();

    assert.ok(Array.isArray(renames));
    assert.ok(
      renames.some((rename) =>
        rename.includes('original.md -> apps/docs/content/en/docs/renamed.md'),
      ),
    );
  } finally {
    cleanupTestDirectory();
  }
});

test('getDeletedFiles should detect deleted files in git status', () => {
  setupTestDirectory();

  try {
    // Create and commit initial file
    const testFile = 'apps/docs/content/en/docs/to-delete.md';
    createTestFile(testFile, '# Content to Delete');
    execSync('git add .', { stdio: 'ignore' });
    execSync('git commit -m "Initial commit"', { stdio: 'ignore' });

    // Delete file and stage changes
    const filePath = path.join(testDir, testFile);
    fs.unlinkSync(filePath);
    execSync('git add .', { stdio: 'ignore' });

    const deletions = getDeletedFiles();

    assert.ok(Array.isArray(deletions));
    assert.ok(deletions.includes('apps/docs/content/en/docs/to-delete.md'));
  } finally {
    cleanupTestDirectory();
  }
});

test('processRenames should handle file renames across locales', () => {
  setupTestDirectory();

  try {
    const locales = ['zh-hans', 'zh-hant'];

    // Create translation files
    const originalContent = `---
title: Test
source-updated-at: 2024-01-01T00:00:00.000Z
translation-updated-at: 2024-01-01T00:00:00.000Z
---

# Test Content`;

    for (const locale of locales) {
      createTestFile(
        `apps/docs/content/${locale}/docs/original.md`,
        originalContent,
      );
    }

    // Simulate rename with content unchanged (pure rename)
    const renames = [
      'apps/docs/content/en/docs/original.md -> apps/docs/content/en/docs/renamed.md',
    ];

    processRenames(renames, locales);

    // Check that files were renamed
    for (const locale of locales) {
      const originalPath = path.join(
        testDir,
        `apps/docs/content/${locale}/docs/original.md`,
      );
      const newPath = path.join(
        testDir,
        `apps/docs/content/${locale}/docs/renamed.md`,
      );

      assert.ok(
        !fs.existsSync(originalPath),
        `Original file should not exist: ${originalPath}`,
      );
      assert.ok(
        fs.existsSync(newPath),
        `Renamed file should exist: ${newPath}`,
      );

      // Check that timestamps were updated (for pure renames)
      const content = fs.readFileSync(newPath, 'utf8');
      const currentYear = new Date().getFullYear();
      assert.ok(
        content.includes(`source-updated-at: ${currentYear}-`),
        'Should contain updated timestamp',
      );
    }
  } finally {
    cleanupTestDirectory();
  }
});

test('processRenames should handle empty renames array', () => {
  setupTestDirectory();

  try {
    const locales = ['zh-hans', 'zh-hant'];
    const renames = [];

    // Should not throw error
    assert.doesNotThrow(() => {
      processRenames(renames, locales);
    });
  } finally {
    cleanupTestDirectory();
  }
});

test('processRenames should handle invalid rename format', () => {
  setupTestDirectory();

  try {
    const locales = ['zh-hans'];
    const renames = ['invalid-format-without-arrow'];

    // Should not throw error and should handle gracefully
    assert.doesNotThrow(() => {
      processRenames(renames, locales);
    });
  } finally {
    cleanupTestDirectory();
  }
});

test('processDeletions should delete files across locales', () => {
  setupTestDirectory();

  try {
    const locales = ['zh-hans', 'zh-hant'];

    // Create translation files
    for (const locale of locales) {
      createTestFile(
        `apps/docs/content/${locale}/docs/to-delete.md`,
        '# Content to Delete',
      );
    }

    const deletions = ['apps/docs/content/en/docs/to-delete.md'];

    processDeletions(deletions, locales);

    // Check that files were deleted
    for (const locale of locales) {
      const filePath = path.join(
        testDir,
        `apps/docs/content/${locale}/docs/to-delete.md`,
      );
      assert.ok(
        !fs.existsSync(filePath),
        `File should be deleted: ${filePath}`,
      );
    }
  } finally {
    cleanupTestDirectory();
  }
});

test('processDeletions should remove empty directories', () => {
  setupTestDirectory();

  try {
    const locales = ['zh-hans'];

    // Create file in nested directory
    createTestFile(
      'apps/docs/content/zh-hans/docs/nested/deep/file.md',
      '# Content',
    );

    const deletions = ['apps/docs/content/en/docs/nested/deep/file.md'];

    processDeletions(deletions, locales);

    // Check that file was deleted
    const filePath = path.join(
      testDir,
      'apps/docs/content/zh-hans/docs/nested/deep/file.md',
    );
    assert.ok(!fs.existsSync(filePath), 'File should be deleted');

    // Check that empty directory was removed
    const dirPath = path.join(
      testDir,
      'apps/docs/content/zh-hans/docs/nested/deep',
    );
    assert.ok(!fs.existsSync(dirPath), 'Empty directory should be removed');
  } finally {
    cleanupTestDirectory();
  }
});

test('processDeletions should handle empty deletions array', () => {
  setupTestDirectory();

  try {
    const locales = ['zh-hans', 'zh-hant'];
    const deletions = [];

    // Should not throw error
    assert.doesNotThrow(() => {
      processDeletions(deletions, locales);
    });
  } finally {
    cleanupTestDirectory();
  }
});

test('processDeletions should handle non-existent files gracefully', () => {
  setupTestDirectory();

  try {
    const locales = ['zh-hans'];
    const deletions = ['apps/docs/content/en/docs/non-existent.md'];

    // Should not throw error when file doesn't exist
    assert.doesNotThrow(() => {
      processDeletions(deletions, locales);
    });
  } finally {
    cleanupTestDirectory();
  }
});

test('processRenames should preserve file content during rename', () => {
  setupTestDirectory();

  try {
    const locales = ['zh-hans'];
    const originalContent = `---
title: Test Document
source-updated-at: 2024-01-01T00:00:00.000Z
translation-updated-at: 2024-01-01T00:00:00.000Z
---

# Test Document

This is test content that should be preserved.`;

    createTestFile(
      'apps/docs/content/zh-hans/docs/original.md',
      originalContent,
    );

    const renames = [
      'apps/docs/content/en/docs/original.md -> apps/docs/content/en/docs/renamed.md',
    ];

    processRenames(renames, locales);

    const newPath = path.join(
      testDir,
      'apps/docs/content/zh-hans/docs/renamed.md',
    );
    const newContent = fs.readFileSync(newPath, 'utf8');

    // Should preserve main content but update timestamps
    assert.ok(newContent.includes('# Test Document'), 'Should preserve title');
    assert.ok(
      newContent.includes('This is test content'),
      'Should preserve body content',
    );
    assert.ok(
      newContent.includes('title: Test Document'),
      'Should preserve frontmatter',
    );
  } finally {
    cleanupTestDirectory();
  }
});
