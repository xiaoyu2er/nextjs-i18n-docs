#!/usr/bin/env node

const { execSync, spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

/**
 * Execute a shell command and return the output
 */
function execCommand(command, options = {}) {
  try {
    return execSync(command, {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
      ...options,
    }).trim();
  } catch (error) {
    if (options.allowEmpty && error.status === 1) {
      return '';
    }
    throw error;
  }
}

/**
 * Get the current timestamp in ISO format
 */
function getCurrentTimestamp() {
  return new Date().toISOString();
}

/**
 * Find all available translation locales
 */
function findAvailableLocales() {
  const contentDir = path.join(process.cwd(), 'apps/docs/content');

  if (!fs.existsSync(contentDir)) {
    console.log('Content directory not found:', contentDir);
    return [];
  }

  const locales = fs
    .readdirSync(contentDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && dirent.name !== 'en')
    .map((dirent) => dirent.name);

  console.log('Available translation locales:', locales.join(' '));
  return locales;
}

/**
 * Get renamed files from git status
 */
function getRenamedFiles() {
  try {
    const gitStatus = execCommand('git status --porcelain', {
      allowEmpty: true,
    });
    const renames = gitStatus
      .split('\n')
      .filter((line) => line.match(/^R\s+apps\/docs\/content\/en/))
      .map((line) => line.replace(/^R\s+/, ''));

    console.log('Renamed files detected:', renames.length);
    return renames;
  } catch (error) {
    console.log('No renamed files detected or git error:', error.message);
    return [];
  }
}

/**
 * Get deleted files from git status
 */
function getDeletedFiles() {
  try {
    const gitStatus = execCommand('git status --porcelain', {
      allowEmpty: true,
    });
    const deletes = gitStatus
      .split('\n')
      .filter((line) => line.match(/^D\s+apps\/docs\/content\/en/))
      .map((line) => line.replace(/^D\s+/, ''));

    console.log('Deleted files detected:', deletes.length);
    return deletes;
  } catch (error) {
    console.log('No deleted files detected or git error:', error.message);
    return [];
  }
}

/**
 * Check if a rename involves content changes
 */
function hasContentChanges(sourcePath, destPath) {
  try {
    const diffOutput = execCommand(
      `git diff --cached -M -- "${sourcePath}" "${destPath}"`,
      { allowEmpty: true },
    );

    // Count lines that start with +/- (changes) but ignore the rename header lines
    const changeLines = diffOutput
      .split('\n')
      .filter((line) => !line.startsWith('renamed:') && !line.startsWith('─'))
      .filter((line) => line.match(/^[\+\-]/));

    const changeCount = changeLines.length;
    console.log(
      `Git diff for '${sourcePath}' → '${destPath}': ${changeCount} lines changed`,
    );

    return changeCount > 0;
  } catch (error) {
    console.log('Error checking content changes:', error.message);
    return false;
  }
}

/**
 * Update timestamps in a translation file
 */
function updateTimestamps(filePath, timestamp) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Update source-updated-at and translation-updated-at
    content = content.replace(
      /source-updated-at: .*/,
      `source-updated-at: ${timestamp}`,
    );
    content = content.replace(
      /translation-updated-at: .*/,
      `translation-updated-at: ${timestamp}`,
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated timestamps in ${filePath}`);
  } catch (error) {
    console.log(`Error updating timestamps in ${filePath}:`, error.message);
  }
}

/**
 * Process file renames for all locales
 */
function processRenames(renames, locales) {
  if (renames.length === 0) {
    console.log('No file renames detected in English docs.');
    return;
  }

  console.log(
    'File renames detected in English docs. Processing for other languages...',
  );
  const currentTimestamp = getCurrentTimestamp();
  console.log('Current timestamp:', currentTimestamp);

  for (const locale of locales) {
    console.log(`Processing renames for locale: ${locale}`);

    for (const rename of renames) {
      // Parse the rename line: "oldname -> newname"
      const parts = rename.split(' -> ');
      if (parts.length !== 2) {
        console.log(`Invalid rename format: ${rename}`);
        continue;
      }

      const [source, dest] = parts;

      // Check for content changes
      const contentChanged = hasContentChanges(source, dest);
      const contentUnchanged = !contentChanged;

      if (contentUnchanged) {
        console.log('Pure rename detected (no content changes)');
      } else {
        console.log('Content changes detected along with rename');
      }

      // Replace 'en' with current locale in paths
      const sourceLocale = source.replace('content/en', `content/${locale}`);
      const destLocale = dest.replace('content/en', `content/${locale}`);

      // Check if source file exists in this locale
      if (fs.existsSync(sourceLocale)) {
        console.log(`Renaming ${sourceLocale} to ${destLocale}`);

        // Create directory if it doesn't exist
        const destDir = path.dirname(destLocale);
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }

        // Move the file
        fs.renameSync(sourceLocale, destLocale);

        // If content is unchanged, update timestamps
        if (contentUnchanged) {
          console.log(
            `Content unchanged, updating timestamps in ${destLocale}`,
          );
          updateTimestamps(destLocale, currentTimestamp);
        } else {
          console.log(
            'Content changed, keeping original timestamps for translation to detect changes',
          );
        }
      }
    }
  }
}

/**
 * Process file deletions for all locales
 */
function processDeletions(deletions, locales) {
  if (deletions.length === 0) {
    console.log('No file deletions detected in English docs.');
    return;
  }

  console.log(
    'File deletions detected in English docs. Processing for other languages...',
  );

  for (const locale of locales) {
    console.log(`Processing deletions for locale: ${locale}`);

    for (const deletedFile of deletions) {
      // Replace 'en' with current locale in path
      const fileLocale = deletedFile.replace('content/en', `content/${locale}`);

      // Check if file exists in this locale
      if (fs.existsSync(fileLocale)) {
        console.log(`Deleting ${fileLocale}`);
        fs.unlinkSync(fileLocale);

        // Check if parent directory is empty and remove it if it is
        const dir = path.dirname(fileLocale);
        try {
          if (fs.existsSync(dir)) {
            const dirContents = fs.readdirSync(dir);
            if (dirContents.length === 0) {
              console.log(`Removing empty directory: ${dir}`);
              fs.rmdirSync(dir);
            }
          }
        } catch (error) {
          // Directory might not be empty or other error, that's ok
          console.log(`Could not remove directory ${dir}:`, error.message);
        }
      }
    }
  }
}

/**
 * Main function
 */
function main() {
  console.log('Processing file renames and deletions...');

  try {
    // Find available locales
    const locales = findAvailableLocales();

    if (locales.length === 0) {
      console.log('No translation locales found, skipping processing.');
      return;
    }

    // Get renamed and deleted files
    const renames = getRenamedFiles();
    const deletions = getDeletedFiles();

    // Process renames
    processRenames(renames, locales);

    // Process deletions
    processDeletions(deletions, locales);

    console.log('File processing completed successfully.');
  } catch (error) {
    console.error('Error processing file changes:', error.message);
    process.exit(1);
  }
}

// Run the script if called directly
if (require.main === module) {
  main();
}

module.exports = {
  main,
  findAvailableLocales,
  getRenamedFiles,
  getDeletedFiles,
  processRenames,
  processDeletions,
};
