#!/usr/bin/env node
/**
 * Unified translation pipeline CLI.
 *
 * Usage:
 *   bun run packages/translate/src/batch.pipeline.ts [options]
 *
 * Modes:
 *   --status          Report translation coverage (no API calls)
 *   --lang <code>     Translate to a specific language (e.g., zh-hans)
 *   --lang all        Translate to all configured languages
 *   --dry-run         Assemble only, show what would be translated
 *
 * Options:
 *   --docs-root <dir>   Source English content (default: content/en)
 *   --output-dir <dir>  Output directory (default: content)
 *   --cache-dir <dir>   Cache directory (default: .cache)
 *   --pattern <glob>    File pattern (default: **\/*.mdx)
 *   --max <n>           Max files to process
 *   --concurrency <n>   Parallel API calls (default: 3)
 *   --model <name>      Override model from .env
 *   --api-type <type>   API type: openrouter, openai, anthropic (default: openrouter)
 *   --api-key <key>     API key override
 *   --api-base-url <u>  API base URL override
 *   --max-tokens <n>    Max output tokens (default: 16384)
 *   --config <path>     Translation config file (default: translation.config.example.mjs)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import { annotate } from './annotate';
import {
  assemble,
  extractUncached,
  NEEDS_TRANSLATION_END,
  NEEDS_TRANSLATION_START,
} from './assembler';
import { executeInBatches } from './batch';
import { TranslationCache } from './cache';
import { validateMdx, validateMdxCompile } from './mdx-validator';
import { parseMdx } from './parser';
import {
  rebuildFrontmatter,
  type TranslateOptions,
  translateJson,
} from './translator';
import { FileLogger, formatDuration, TableUI } from './ui';

// Note: translateAssembled (legacy whole-file mode) still exported for backward compatibility

// ── Helpers ──────────────────────────────────────────────────────────

/**
 * Check if a node's source text looks like YAML frontmatter.
 */
function isFrontmatter(text: string): boolean {
  const t = text.trim();
  return (
    (t.includes('title:') || t.includes('description:')) && t.endsWith('---')
  );
}

/**
 * Validate translated frontmatter is parseable YAML.
 * Returns false if YAML is broken (truncated, bad indentation, etc.)
 */
function validateFrontmatter(translation: string): boolean {
  try {
    const t = translation.trim();
    // Strip trailing ---
    const yamlContent = t.endsWith('---') ? t.slice(0, -3).trim() : t;
    if (!yamlContent) return false;

    // Quick checks before full parse
    if (yamlContent.includes('NEEDS_TRANSLATION')) return false;
    if (yamlContent.endsWith('author:')) return false; // truncated author list
    // Reject full-width colons in YAML keys (LLM using Chinese punctuation)
    if (/^[\w-]+：/m.test(yamlContent)) return false;

    // Only validate translated fields (title, description)
    const lines = yamlContent.split('\n');
    for (const line of lines) {
      const match = line.match(/^(title|description):\s*(.+)/);
      if (match) {
        const val = match[2];
        if (val.startsWith('`')) return false;
      }
    }

    // Check multiline YAML values have proper indentation
    // e.g., description: >-\n  line1\n  line2 (all continuation lines must be indented)
    let inMultiline = false;
    let multilineIndent = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.match(/^[\w-]+:\s*[>|]-?\s*$/)) {
        // Start of multiline scalar (>-, |-, etc.)
        inMultiline = true;
        multilineIndent = 0;
      } else if (inMultiline) {
        if (line.trim() === '') continue;
        const indent = line.match(/^(\s*)/)?.[1].length ?? 0;
        if (multilineIndent === 0) {
          multilineIndent = indent;
        }
        if (indent < multilineIndent && indent > 0) {
          return false; // inconsistent indentation
        }
        if (indent === 0 && !line.match(/^[\w-]+:/)) {
          return false; // non-indented continuation line
        }
        if (indent === 0 && line.match(/^[\w-]+:/)) {
          inMultiline = false; // new key starts
        }
      }
    }
    return true;
  } catch {
    return false;
  }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '../../..');

// formatDuration imported from ./ui

// ── CLI Arg Parsing ──────────────────────────────────────────────────

interface CliOptions {
  docsRoot: string;
  outputDir: string;
  cacheDir: string;
  lang: string;
  pattern: string;
  max: number;
  apiType: TranslateOptions['apiType'];
  apiBaseUrl: string;
  apiKey: string;
  model: string;
  modelRotate: string[];
  maxTokens: number;
  concurrency: number;
  dryRun: boolean;
  md5Mode: boolean;
  status: boolean;
  repair: boolean;
  annotateFiles: string;
  lookup: string;
  configPath: string;
  docsContext?: string;
}

interface LangConfig {
  locale: string;
  name: string;
  guide?: string;
}

function parseArgs(argv: string[]): CliOptions {
  const args = argv.slice(2);
  const getOpt = (name: string, def: string) => {
    const idx = args.indexOf(`--${name}`);
    return idx >= 0 && idx + 1 < args.length ? args[idx + 1] : def;
  };
  const hasFlag = (name: string) => args.includes(`--${name}`);

  return {
    docsRoot: path.resolve(PROJECT_ROOT, getOpt('docs-root', 'content/en')),
    outputDir: path.resolve(PROJECT_ROOT, getOpt('output-dir', 'content')),
    cacheDir: path.resolve(PROJECT_ROOT, getOpt('cache-dir', '.cache')),
    lang: getOpt('lang', 'zh-hans'),
    pattern: getOpt('pattern', '**/*.mdx'),
    max: Number.parseInt(getOpt('max', '999999'), 10),
    apiType: getOpt('api-type', 'openrouter') as TranslateOptions['apiType'],
    apiBaseUrl: getOpt('api-base-url', ''),
    apiKey: getOpt('api-key', ''),
    model: getOpt('model', ''),
    modelRotate: getOpt('model-rotate', '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean),
    maxTokens: Number.parseInt(getOpt('max-tokens', '16384'), 10),
    concurrency: Number.parseInt(getOpt('concurrency', '3'), 10),
    dryRun: hasFlag('dry-run'),
    md5Mode: hasFlag('md5'),
    status: hasFlag('status'),
    repair: hasFlag('repair'),
    annotateFiles: getOpt('annotate', ''),
    lookup: getOpt('lookup', ''),
    configPath: getOpt(
      'config',
      'packages/translate/translation.config.example.mjs',
    ),
  };
}

// ── Load language config ─────────────────────────────────────────────

async function loadLangConfigs(
  configPath: string,
): Promise<{ langs: Record<string, LangConfig>; docsContext?: string }> {
  try {
    const fullPath = path.resolve(PROJECT_ROOT, configPath);
    const config = (await import(fullPath)).default;
    return {
      langs: config.langs ?? {},
      docsContext: config.docsContext,
    };
  } catch {
    // Fallback: minimal zh-hans config
    return {
      langs: {
        'zh-hans': { locale: 'zh-hans', name: 'Simplified Chinese' },
      },
    };
  }
}

// ── Status Mode ──────────────────────────────────────────────────────

async function runStatus(opts: CliOptions): Promise<void> {
  const { langs } = await loadLangConfigs(opts.configPath);
  const targetLangs = opts.lang === 'all' ? Object.keys(langs) : [opts.lang];

  // Scan source files
  const files = await glob(opts.pattern, { cwd: opts.docsRoot });
  let totalNodes = 0;
  const allMd5s = new Set<string>();

  for (const relPath of files) {
    const content = fs.readFileSync(path.join(opts.docsRoot, relPath), 'utf8');
    const nodes = parseMdx(content);
    for (const node of nodes) {
      if (node.needsTranslation && node.md5) {
        totalNodes++;
        allMd5s.add(node.md5);
      }
    }
  }

  console.log(`\n📊 Translation Coverage Report`);
  console.log(
    `   Source: ${opts.docsRoot} (${files.length} files, ${totalNodes} translatable nodes, ${allMd5s.size} unique)\n`,
  );
  console.log(
    `${'Language'.padEnd(12)} ${'Cached'.padStart(8)} ${'Missing'.padStart(8)} ${'Coverage'.padStart(10)}`,
  );
  console.log('─'.repeat(42));

  for (const lang of targetLangs) {
    const cache = new TranslationCache(opts.cacheDir);
    try {
      cache.load(lang);
    } catch {
      // No cache for this language
    }

    let cached = 0;
    let missing = 0;
    for (const md5 of allMd5s) {
      if (cache.get(lang, md5)) {
        cached++;
      } else {
        missing++;
      }
    }

    const coverage =
      allMd5s.size > 0
        ? `${((cached / allMd5s.size) * 100).toFixed(1)}%`
        : '0.0%';
    console.log(
      `${lang.padEnd(12)} ${String(cached).padStart(8)} ${String(missing).padStart(8)} ${coverage.padStart(10)}`,
    );
  }
  console.log('');
}

// ── Translate Mode ───────────────────────────────────────────────────

interface TranslateFileResult {
  status: 'cached' | 'translated' | 'skipped' | 'error';
  newTranslations: number;
  diffs: number;
  mdxErrors: string[];
  error?: string;
}

async function translateFile(
  sourcePath: string,
  relPath: string,
  opts: CliOptions,
  langConfig: LangConfig,
  cache: TranslationCache,
  logger?: (message: string) => void,
): Promise<TranslateFileResult> {
  const sourceContent = fs.readFileSync(sourcePath, 'utf8');
  const assembleResult = assemble(sourceContent, opts.lang, cache, relPath);

  if (assembleResult.allCached) {
    const finalPath = path.join(opts.outputDir, opts.lang, relPath);
    fs.mkdirSync(path.dirname(finalPath), { recursive: true });
    fs.writeFileSync(finalPath, assembleResult.content, 'utf8');
    const mdxResult = validateMdx(assembleResult.content);
    return {
      status: 'cached',
      newTranslations: 0,
      diffs: 0,
      mdxErrors: mdxResult.errors.map((e) => e.message),
    };
  }

  if (opts.dryRun) {
    return { status: 'skipped', newTranslations: 0, diffs: 0, mdxErrors: [] };
  }

  // Extract uncached nodes for structured JSON translation
  const { uncached, nodeTypes } = extractUncached(
    sourceContent,
    opts.lang,
    cache,
  );
  if (Object.keys(uncached).length === 0) {
    // All cached after extractUncached (race condition or cache updated)
    const final = assemble(sourceContent, opts.lang, cache, relPath);
    const finalPath = path.join(opts.outputDir, opts.lang, relPath);
    fs.mkdirSync(path.dirname(finalPath), { recursive: true });
    fs.writeFileSync(finalPath, final.content, 'utf8');
    return { status: 'cached', newTranslations: 0, diffs: 0, mdxErrors: [] };
  }

  const log = logger ?? console.log;

  // Translate via structured JSON — send typed nodes, receive {md5: translation}
  const jsonResult = await translateJson({
    assembledContent: assembleResult.content,
    uncached,
    nodeTypes,
    langName: langConfig.name,
    guide: langConfig.guide,
    apiType: opts.apiType,
    apiBaseUrl: opts.apiBaseUrl || undefined,
    apiKey: opts.apiKey || undefined,
    model: opts.model || undefined,
    modelRotate: opts.modelRotate.length > 0 ? opts.modelRotate : undefined,
    maxTokens: opts.maxTokens,
    filePath: relPath,
    logger,
    docsContext:
      opts.docsContext ||
      'Next.js is a React framework for building full-stack web applications.',
  });

  // Update cache with translations (rebuild frontmatter, validate YAML)
  const requested = Object.keys(uncached).length;
  const returned = Object.keys(jsonResult.translations).length;
  const missed = jsonResult.missing.length;
  if (returned < requested) {
    log(
      `📊 LLM returned ${returned}/${requested} keys${missed > 0 ? `, ${missed} missing` : ''}`,
    );
  }
  let newTranslations = 0;
  let _badTranslations = 0;
  for (const [md5, translation] of Object.entries(jsonResult.translations)) {
    const srcText = uncached[md5] ?? '';
    let finalTranslation = translation;

    // For frontmatter: LLM only translated title+description.
    // Rebuild full frontmatter with original author/date/image fields.
    if (isFrontmatter(srcText)) {
      finalTranslation = rebuildFrontmatter(srcText, translation);
      if (!validateFrontmatter(finalTranslation)) {
        _badTranslations++;
        const preview = finalTranslation.substring(0, 80).replace(/\n/g, '↵');
        log(`⚠️ Bad YAML for ${md5.substring(0, 12)}…: ${preview}`);
        continue;
      }
    }

    // Sanity check: skip empty translations
    if (!finalTranslation.trim()) {
      log(`⚠️ Empty translation for ${md5.substring(0, 12)}…, skipping`);
      continue;
    }
    cache.set(opts.lang, md5, finalTranslation);
    newTranslations++;
  }

  // Retry missing keys (if any) with a second smaller request
  if (jsonResult.missing.length > 0 && jsonResult.missing.length <= 10) {
    const retryUncached: Record<string, string> = {};
    const retryTypes: Record<string, string> = {};
    for (const md5 of jsonResult.missing) {
      retryUncached[md5] = uncached[md5];
      retryTypes[md5] = nodeTypes[md5];
    }
    try {
      log(`↳ Retrying ${jsonResult.missing.length} missing nodes...`);
      const retryResult = await translateJson({
        assembledContent: '',
        uncached: retryUncached,
        nodeTypes: retryTypes,
        langName: langConfig.name,
        guide: langConfig.guide,
        apiType: opts.apiType,
        apiBaseUrl: opts.apiBaseUrl || undefined,
        apiKey: opts.apiKey || undefined,
        model: opts.model || undefined,
        modelRotate: opts.modelRotate.length > 0 ? opts.modelRotate : undefined,
        maxTokens: opts.maxTokens,
        filePath: relPath,
        logger,
        docsContext:
          opts.docsContext ||
          'Next.js is a React framework for building full-stack web applications.',
      });
      for (const [md5, translation] of Object.entries(
        retryResult.translations,
      )) {
        const srcText = uncached[md5] ?? '';
        if (isFrontmatter(srcText) && !validateFrontmatter(translation)) {
          log(`⚠️ Bad YAML in retry for ${md5.substring(0, 12)}…, skipping`);
          continue;
        }
        cache.set(opts.lang, md5, translation);
        newTranslations++;
      }
      if (retryResult.missing.length > 0) {
        log(`⚠️ ${retryResult.missing.length} nodes still missing after retry:`);
        for (const md5 of retryResult.missing) {
          const src = uncached[md5] ?? '';
          const preview = src.split('\n')[0].substring(0, 80);
          log(`   ${md5.substring(0, 12)}… ${preview}`);
        }
      }
    } catch (err) {
      log(
        `   ⚠️ Retry failed: ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  } else if (jsonResult.missing.length > 10) {
    log(
      `⚠️ ${jsonResult.missing.length}/${Object.keys(uncached).length} nodes missing (too many to retry):`,
    );
    for (const md5 of jsonResult.missing.slice(0, 5)) {
      const src = uncached[md5] ?? '';
      const preview = src.split('\n')[0].substring(0, 80);
      log(`   ${md5.substring(0, 12)}… ${preview}`);
    }
    if (jsonResult.missing.length > 5) {
      log(`   ... and ${jsonResult.missing.length - 5} more`);
    }
  }

  // Re-assemble from source structure + updated cache
  const reassembled = assemble(sourceContent, opts.lang, cache, relPath);
  const finalContent = reassembled.allCached
    ? reassembled.content
    : reassembled.content
        .replace(new RegExp(`${NEEDS_TRANSLATION_START}\\n?`, 'g'), '')
        .replace(new RegExp(`\\n?${NEEDS_TRANSLATION_END}`, 'g'), '');

  if (!reassembled.allCached) {
    log(
      `⚠️ ${reassembled.uncachedCount}/${reassembled.totalTranslatable} nodes still uncached (English text in output)`,
    );
  }

  const finalPath = path.join(opts.outputDir, opts.lang, relPath);
  fs.mkdirSync(path.dirname(finalPath), { recursive: true });
  fs.writeFileSync(finalPath, finalContent, 'utf8');

  const mdxResult = validateMdx(finalContent);
  const mdxErrors = mdxResult.errors.map((e) => e.message);

  // Deep MDX compile check — catches JSX errors Astro would report
  const compileErrors = await validateMdxCompile(finalContent);
  if (compileErrors && compileErrors.length > 0) {
    for (const e of compileErrors) {
      mdxErrors.push(`MDX: ${e.message}`);
    }
  }

  return {
    status: 'translated',
    newTranslations,
    diffs: jsonResult.missing.length,
    mdxErrors,
  };
}

async function runTranslate(opts: CliOptions): Promise<void> {
  const { langs, docsContext } = await loadLangConfigs(opts.configPath);
  opts.docsContext = docsContext;

  const targetLangs = opts.lang === 'all' ? Object.keys(langs) : [opts.lang];

  for (const lang of targetLangs) {
    const langConfig = langs[lang];
    if (!langConfig) {
      console.error(
        `❌ Language "${lang}" not found in config. Available: ${Object.keys(langs).join(', ')}`,
      );
      continue;
    }

    // Update opts.lang for this iteration
    opts.lang = lang;

    console.log(`\n📦 Translating to ${lang} (${langConfig.name})`);
    console.log(`   Source: ${opts.docsRoot}`);
    console.log(`   Engine: ${opts.apiType}`);
    if (opts.modelRotate.length > 0) {
      console.log(
        `   Model: rotate(${opts.modelRotate.length}): ${opts.modelRotate.join(', ')}`,
      );
    } else {
      console.log(
        `   Model: ${opts.model || process.env.OPENROUTER_MODEL || 'default'}`,
      );
    }

    // Find files
    const files = await glob(opts.pattern, { cwd: opts.docsRoot });
    console.log(`   Files: ${files.length} total\n`);

    // Load cache
    const cache = new TranslationCache(opts.cacheDir);
    try {
      cache.load(lang);
      console.log(`📦 Cache loaded: ${cache.stats(lang).size} entries`);
      cache.clearSources(lang);
    } catch {
      console.log('📦 No existing cache');
    }

    // Clean up orphan translated files (no corresponding EN source)
    const enFiles = new Set(files);
    const langDir = path.join(opts.outputDir, lang);
    if (fs.existsSync(langDir)) {
      const langFiles = await glob(opts.pattern, { cwd: langDir });
      let orphanCount = 0;
      for (const relPath of langFiles) {
        if (!enFiles.has(relPath)) {
          const orphanPath = path.join(langDir, relPath);
          fs.unlinkSync(orphanPath);
          orphanCount++;
        }
      }
      if (orphanCount > 0) {
        console.log(`🧹 Removed ${orphanCount} orphan files (no EN source)`);
      }
    }

    // Scan all files, separate cached vs needs-translation
    const cachedFiles: string[] = [];
    const translateFiles: string[] = [];

    for (const relPath of files) {
      const sourcePath = path.join(opts.docsRoot, relPath);
      const sourceContent = fs.readFileSync(sourcePath, 'utf8');
      const assembleResult = assemble(sourceContent, lang, cache, relPath);

      if (assembleResult.allCached) {
        cachedFiles.push(relPath);
        const finalPath = path.join(opts.outputDir, lang, relPath);
        fs.mkdirSync(path.dirname(finalPath), { recursive: true });
        fs.writeFileSync(finalPath, assembleResult.content, 'utf8');
      } else {
        translateFiles.push(relPath);
        if (translateFiles.length >= opts.max) break;
      }
    }

    console.log(
      `📦 ${cachedFiles.length} fully cached, ${translateFiles.length} need translation${translateFiles.length === opts.max ? ` (max ${opts.max})` : ''}`,
    );

    if (translateFiles.length === 0) {
      console.log(
        `\n✅ All ${cachedFiles.length} files fully cached. Nothing to translate.\n`,
      );
      cache.save(lang);
      continue;
    }

    console.log(`   Concurrency: ${opts.concurrency}\n`);

    // Initialize UI and file logger
    const logDir = path.resolve('.logs');
    const fileLogger = new FileLogger(logDir, lang);
    console.log(`   Logs: ${fileLogger.getLogDir()}\n`);
    const ui = new TableUI({
      lang,
      totalFiles: files.length,
      cachedFiles: cachedFiles.length,
      translateFiles,
    });

    fileLogger.log('_run', `Command: ${process.argv.join(' ')}`);
    fileLogger.log('_run', `Source: ${opts.docsRoot}`);
    fileLogger.log(
      '_run',
      `Model: ${opts.model || process.env.OPENROUTER_MODEL || 'default'}`,
    );
    fileLogger.log(
      '_run',
      `Files: ${files.length} total, ${cachedFiles.length} cached, ${translateFiles.length} to translate`,
    );
    fileLogger.log('_run', `Concurrency: ${opts.concurrency}`);

    // Stats
    let totalTranslated = 0;
    let totalSkipped = 0;
    let totalNewTranslations = 0;
    let totalDiffs = 0;
    let totalErrors = 0;
    let totalMdxErrors = 0;
    const failedFiles: string[] = [];

    // Translate with UI updates
    await executeInBatches(
      translateFiles,
      async (relPath) => {
        const sourcePath = path.join(opts.docsRoot, relPath);
        const fileStart = Date.now();
        const flog = (msg: string) => fileLogger.log(relPath, msg);

        // Get node counts for UI
        const sourceContent = fs.readFileSync(sourcePath, 'utf8');
        const { uncached: uc, total: nodeTotal } = extractUncached(
          sourceContent,
          lang,
          cache,
        );

        ui.update(relPath, {
          status: 'translating',
          cached: nodeTotal - Object.keys(uc).length,
          total: nodeTotal,
        });
        ui.logLine(
          `⏳ ${relPath} (${Object.keys(uc).length}/${nodeTotal} uncached)...`,
        );
        flog(`Start: ${Object.keys(uc).length}/${nodeTotal} uncached nodes`);

        try {
          const result = await translateFile(
            sourcePath,
            relPath,
            opts,
            langConfig,
            cache,
            flog,
          );

          const fileElapsed = Date.now() - fileStart;

          if (result.mdxErrors.length > 0) {
            totalMdxErrors += result.mdxErrors.length;
            for (const e of result.mdxErrors) {
              flog(`MDX Error: ${e}`);
            }
          }

          if (result.status === 'translated') {
            totalTranslated++;
            totalNewTranslations += result.newTranslations;
            totalDiffs += result.diffs;
            ui.update(relPath, {
              status: 'done',
              newTrans: result.newTranslations,
              mdxErrors: result.mdxErrors.length,
              elapsed: fileElapsed,
            });
            ui.logLine(
              `✅ ${relPath} (+${result.newTranslations} cached${result.diffs > 0 ? `, ${result.diffs} diffs` : ''}) [${formatDuration(fileElapsed)}]`,
            );
            flog(
              `Done: +${result.newTranslations} cached, ${result.diffs} diffs, ${result.mdxErrors.length} MDX errors [${formatDuration(fileElapsed)}]`,
            );
            cache.save(lang);
          } else {
            totalSkipped++;
            ui.update(relPath, { status: 'skipped', elapsed: fileElapsed });
            ui.logLine(`⏭️  ${relPath} (skipped)`);
            flog('Skipped');
          }
        } catch (err) {
          totalErrors++;
          const msg = err instanceof Error ? err.message : String(err);
          const fileElapsed = Date.now() - fileStart;
          ui.update(relPath, {
            status: 'error',
            error: msg,
            elapsed: fileElapsed,
          });
          ui.logLine(`❌ ${relPath}: ${msg}`);
          flog(`Error: ${msg}`);
          failedFiles.push(relPath);
        }
      },
      opts.concurrency,
    );

    // Final save
    cache.save(lang);
    fileLogger.close();

    // Summary
    ui.finish({
      totalCached: cachedFiles.length,
      totalTranslated,
      totalSkipped,
      totalNewTranslations,
      totalErrors,
      totalDiffs,
      totalMdxErrors,
      cacheSize: cache.stats(lang).size,
      outputDir: path.join(opts.outputDir, lang),
      failedFiles,
      logDir: fileLogger.getLogDir(),
    });
  }
}

// ── Repair Mode ──────────────────────────────────────────────────────

async function runRepair(opts: CliOptions): Promise<void> {
  const { langs } = await loadLangConfigs(opts.configPath);
  const targetLangs = opts.lang === 'all' ? Object.keys(langs) : [opts.lang];
  const files = await glob(opts.pattern, { cwd: opts.docsRoot });

  for (const lang of targetLangs) {
    const langDir = path.join(opts.outputDir, lang);
    if (!fs.existsSync(langDir)) {
      console.log(`⏭️  ${lang}: no translated files found`);
      continue;
    }

    const cache = new TranslationCache(opts.cacheDir);
    try {
      cache.load(lang);
    } catch {
      console.log(`⏭️  ${lang}: no cache found`);
      continue;
    }

    let repaired = 0;
    let skipped = 0;
    let partial = 0;

    for (const relPath of files) {
      const enPath = path.join(opts.docsRoot, relPath);
      const langPath = path.join(langDir, relPath);
      if (!fs.existsSync(langPath)) continue;

      const enContent = fs.readFileSync(enPath, 'utf8');
      const langContent = fs.readFileSync(langPath, 'utf8');

      const enNodes = parseMdx(enContent).filter((n) => n.needsTranslation);
      const langNodes = parseMdx(langContent).filter((n) => n.needsTranslation);

      // Check alignment
      let aligned = true;
      if (enNodes.length !== langNodes.length) {
        aligned = false;
      } else {
        for (let i = 0; i < enNodes.length; i++) {
          if (enNodes[i].type !== langNodes[i].type) {
            aligned = false;
            break;
          }
        }
      }

      if (aligned) {
        skipped++;
        continue;
      }

      // Try re-assemble from cache
      const reassembled = assemble(enContent, lang, cache, relPath);
      if (reassembled.allCached) {
        fs.writeFileSync(langPath, reassembled.content, 'utf8');
        repaired++;
        console.log(`  ✅ ${relPath} (re-assembled from cache)`);
      } else {
        // Backfill from existing translation, then re-assemble
        const existingNodes = parseMdx(langContent).filter(
          (n) => n.needsTranslation,
        );
        let si = 0;
        let li = 0;
        let backfilled = 0;
        while (si < enNodes.length && li < existingNodes.length) {
          if (enNodes[si].type === existingNodes[li].type) {
            if (
              enNodes[si].md5 &&
              !cache.get(lang, enNodes[si].md5 as string)
            ) {
              cache.set(
                lang,
                enNodes[si].md5 as string,
                existingNodes[li].rawText,
              );
              backfilled++;
            }
            si++;
            li++;
          } else if (existingNodes.length > enNodes.length) {
            li++;
          } else {
            si++;
          }
        }

        const reassembled2 = assemble(enContent, lang, cache, relPath);
        if (reassembled2.allCached) {
          fs.writeFileSync(langPath, reassembled2.content, 'utf8');
          repaired++;
          console.log(
            `  ✅ ${relPath} (backfilled ${backfilled} + re-assembled)`,
          );
        } else {
          partial++;
          console.log(
            `  ⚠️  ${relPath} (${reassembled2.uncachedCount} nodes still uncached)`,
          );
        }
      }
    }

    cache.save(lang);
    console.log(
      `\n📊 ${lang}: ${repaired} repaired, ${skipped} already aligned, ${partial} partial\n`,
    );
  }
}

// ── Lookup Mode ──────────────────────────────────────────────────────

// ── Annotate Mode ────────────────────────────────────────────────────

async function runAnnotate(opts: CliOptions): Promise<void> {
  const target = opts.annotateFiles;

  // Resolve glob or file path
  const stat = fs.existsSync(target) ? fs.statSync(target) : null;
  let files: string[];
  let baseDir: string;

  if (stat?.isFile()) {
    // Single file
    baseDir = path.dirname(target);
    files = [path.basename(target)];
  } else if (stat?.isDirectory()) {
    // Directory — find all .mdx
    baseDir = target;
    files = await glob('**/*.mdx', { cwd: target });
  } else {
    // Treat as glob pattern
    baseDir = '.';
    files = await glob(target);
  }

  // Load all language caches for anchor-based alignment
  const { langs: langConfigs } = await loadLangConfigs(opts.configPath);
  const caches = new Map<string, TranslationCache>();
  for (const lang of Object.keys(langConfigs)) {
    const c = new TranslationCache(opts.cacheDir);
    try {
      c.load(lang);
      caches.set(lang, c);
    } catch {
      // no cache for this language
    }
  }

  console.log(`📝 Annotating ${files.length} file(s)`);
  console.log(`   Caches loaded: ${[...caches.keys()].join(', ') || 'none'}\n`);

  let annotatedCount = 0;
  let skippedCount = 0;
  let noSourceCount = 0;
  for (const relPath of files) {
    const filePath = path.join(baseDir, relPath);
    const content = fs.readFileSync(filePath, 'utf8');

    // Skip if already annotated
    if (content.includes('{/* md5:')) {
      skippedCount++;
      continue;
    }

    // Try to find corresponding English source file
    // Strategy: replace the language code segment in the path with 'en'
    // e.g., content/zh-hans/docs/foo.mdx → content/en/docs/foo.mdx
    //        content-v15/ja/docs/foo.mdx → content-v15/en/docs/foo.mdx
    const fullPath = path.resolve(filePath);
    const langs = ['zh-hans', 'zh-hant', 'ja', 'es', 'de', 'fr', 'ru', 'ar'];
    let enSourcePath = '';
    for (const lang of langs) {
      const langSegment = `/${lang}/`;
      if (fullPath.includes(langSegment)) {
        enSourcePath = fullPath.replace(langSegment, '/en/');
        break;
      }
    }
    // Fallback: try --docs-root + relPath
    if (!enSourcePath) {
      enSourcePath = path.join(opts.docsRoot, relPath);
    }
    let sourceText: string | undefined;
    if (enSourcePath && fs.existsSync(enSourcePath)) {
      sourceText = fs.readFileSync(enSourcePath, 'utf8');
    }

    // Detect language from path for cache lookup
    let detectedLang = '';
    const knownLangs = [
      'zh-hans',
      'zh-hant',
      'ja',
      'es',
      'de',
      'fr',
      'ru',
      'ar',
    ];
    for (const lang of knownLangs) {
      if (fullPath.includes(`/${lang}/`)) {
        detectedLang = lang;
        break;
      }
    }
    const langCache = detectedLang ? caches.get(detectedLang) : undefined;

    const result = annotate(
      content,
      sourceText,
      langCache,
      detectedLang || undefined,
    );
    fs.writeFileSync(filePath, result, 'utf8');
    annotatedCount++;
    if (!sourceText) noSourceCount++;
    console.log(
      `  ✅ ${filePath}${sourceText ? '' : ' (no EN source, using translated MD5)'}`,
    );
  }

  console.log(
    `\n📝 Done: ${annotatedCount} annotated, ${skippedCount} already had annotations${noSourceCount > 0 ? `, ${noSourceCount} without EN source` : ''}.`,
  );
}

// ── Lookup Mode ──────────────────────────────────────────────────────

async function runLookup(opts: CliOptions): Promise<void> {
  const md5 = opts.lookup;
  const files = await glob(opts.pattern, { cwd: opts.docsRoot });

  console.log(`🔍 Looking up MD5: ${md5}`);
  console.log(`   Scanning: ${opts.docsRoot} (${files.length} files)\n`);

  let found = false;
  for (const relPath of files) {
    const content = fs.readFileSync(path.join(opts.docsRoot, relPath), 'utf8');
    const nodes = parseMdx(content);
    for (const node of nodes) {
      if (node.md5 === md5) {
        console.log(`📄 ${relPath}:`);
        console.log(`   Type: ${node.type}`);
        console.log(`   Text:\n${node.rawText}\n`);
        found = true;
      }
    }
  }

  if (!found) {
    console.log('❌ Not found in any source file.');
  }

  // Also show cached translations
  const { langs } = await loadLangConfigs(opts.configPath);
  let hasTranslation = false;
  for (const lang of Object.keys(langs)) {
    const cache = new TranslationCache(opts.cacheDir);
    try {
      cache.load(lang);
    } catch {
      continue;
    }
    const val = cache.get(lang, md5);
    if (val) {
      if (!hasTranslation) {
        console.log('🌐 Cached translations:');
        hasTranslation = true;
      }
      console.log(
        `   ${lang}: ${val.substring(0, 120).replace(/\n/g, '↵')}${val.length > 120 ? '...' : ''}`,
      );
    }
  }
  if (!hasTranslation) {
    console.log('🌐 No cached translations found.');
  }
}

// ── MD5 mode ──────────────────────────────────────────────────────────

function detectVersion(docsRoot: string): string {
  if (docsRoot.includes('content-v13')) return 'v13';
  if (docsRoot.includes('content-v14')) return 'v14';
  if (docsRoot.includes('content-v15')) return 'v15';
  return 'latest';
}

async function runMd5Translate(opts: CliOptions): Promise<void> {
  const { langs, docsContext } = await loadLangConfigs(opts.configPath);
  opts.docsContext = docsContext;

  const lang = opts.lang;
  const langConfig = langs[lang];
  if (!langConfig) {
    console.error(
      `❌ Language "${lang}" not found. Available: ${Object.keys(langs).join(', ')}`,
    );
    return;
  }

  const version = detectVersion(opts.docsRoot);

  console.log(`\n📦 MD5 mode: Translating to ${lang} (${langConfig.name})`);
  console.log(`   Version: ${version}`);
  console.log(`   Engine: ${opts.apiType}`);
  if (opts.modelRotate.length > 0) {
    console.log(
      `   Model: rotate(${opts.modelRotate.length}): ${opts.modelRotate.join(', ')}`,
    );
  } else {
    console.log(
      `   Model: ${opts.model || process.env.OPENROUTER_MODEL || 'default'}`,
    );
  }

  const cache = new TranslationCache(opts.cacheDir);
  cache.load(lang);

  // Get all untranslated keys from DB
  const untranslated = cache.untranslatedKeys(lang, version);
  console.log(
    `\n📦 ${untranslated.length} untranslated keys for ${version}/${lang}`,
  );

  if (untranslated.length === 0) {
    console.log('✅ All keys translated. Nothing to do.');
    return;
  }

  // Pre-chunk by estimated token size
  const maxTokens = opts.maxTokens;
  const targetTokensPerChunk = Math.floor(maxTokens * 0.7);

  type ChunkEntry = { key: string; text: string; type: string };
  const chunks: ChunkEntry[][] = [[]];
  let currentChunkTokens = 0;

  for (const k of untranslated) {
    const entryTokens = Math.ceil((k.text.length * 1.5) / 4 + 40);
    if (
      currentChunkTokens + entryTokens > targetTokensPerChunk &&
      chunks[chunks.length - 1].length > 0
    ) {
      chunks.push([]);
      currentChunkTokens = 0;
    }
    chunks[chunks.length - 1].push(k);
    currentChunkTokens += entryTokens;
  }

  // --max limits API calls (chunks), not keys
  const maxChunks = Math.min(chunks.length, opts.max);
  const totalKeys = chunks
    .slice(0, maxChunks)
    .reduce((s, c) => s + c.length, 0);

  console.log(
    `   ${chunks.length} chunks (~${targetTokensPerChunk} tokens each), ${maxChunks} to process`,
  );
  console.log(`   ${totalKeys} keys in ${maxChunks} API calls`);

  if (opts.dryRun) {
    console.log(`\n⏭️  Dry run — would make ${maxChunks} API calls`);
    for (let i = 0; i < Math.min(maxChunks, 5); i++) {
      const c = chunks[i];
      console.log(
        `   Chunk ${i + 1}: ${c.length} keys, ~${c.reduce((s, k) => s + k.text.length, 0)} chars`,
      );
    }
    if (maxChunks > 5) console.log(`   ... and ${maxChunks - 5} more chunks`);
    return;
  }

  const logDir = path.resolve('.logs');
  const { FileLogger } = await import('./ui');
  const fileLogger = new FileLogger(logDir, lang);
  console.log(`   Logs: ${fileLogger.getLogDir()}\n`);

  const flog = (msg: string) => fileLogger.log('_md5-batch', msg);
  flog(
    `MD5 mode: ${totalKeys} keys in ${maxChunks} chunks, version=${version}`,
  );

  const startTime = Date.now();
  let totalCached = 0;
  let totalSkipped = 0;
  let totalMissing = 0;
  let chunkErrors = 0;
  let chunksCompleted = 0;

  const concurrency = opts.concurrency;
  console.log(`   Concurrency: ${concurrency}\n`);

  async function processChunk(i: number) {
    const chunk = chunks[i];
    const uncached: Record<string, string> = {};
    const nodeTypes: Record<string, string> = {};
    for (const k of chunk) {
      uncached[k.key] = k.text;
      nodeTypes[k.key] = k.type;
    }

    const chunkLabel = `chunk ${i + 1}/${maxChunks} (${chunk.length} keys)`;
    console.log(`⏳ ${chunkLabel}...`);
    flog(`--- ${chunkLabel} ---`);

    try {
      const result = await translateJson({
        assembledContent: '',
        uncached,
        nodeTypes,
        langName: langConfig.name,
        guide: langConfig.guide,
        apiType: opts.apiType,
        apiBaseUrl: opts.apiBaseUrl || undefined,
        apiKey: opts.apiKey || undefined,
        model: opts.model || undefined,
        modelRotate: opts.modelRotate.length > 0 ? opts.modelRotate : undefined,
        maxTokens: opts.maxTokens,
        filePath: `_md5-chunk-${i + 1}`,
        logger: flog,
        docsContext:
          opts.docsContext ||
          'Next.js is a React framework for building full-stack web applications.',
      });

      // Cache results
      let cached = 0;
      let skipped = 0;
      for (const [md5, translation] of Object.entries(result.translations)) {
        if (!translation.trim()) {
          skipped++;
          continue;
        }
        const srcType = nodeTypes[md5];
        if (srcType === 'frontmatter') {
          const rebuilt = rebuildFrontmatter(uncached[md5], translation);
          if (!validateFrontmatter(rebuilt)) {
            flog(`⚠️ Bad YAML for ${md5.substring(0, 12)}…, skipping`);
            skipped++;
            continue;
          }
          cache.set(lang, md5, rebuilt);
        } else {
          cache.set(lang, md5, translation);
        }
        cached++;
      }

      totalCached += cached;
      totalSkipped += skipped;
      totalMissing += result.missing.length;
      chunksCompleted++;
      console.log(
        `✅ ${chunkLabel} — +${cached} cached, ${skipped} skipped, ${result.missing.length} missing [${chunksCompleted}/${maxChunks} done]`,
      );
    } catch (err) {
      chunkErrors++;
      chunksCompleted++;
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`❌ ${chunkLabel} — ${msg.substring(0, 100)}`);
      flog(`ERROR: ${msg}`);
    }
  }

  // Run chunks with concurrency limit
  const pending: Promise<void>[] = [];
  for (let i = 0; i < maxChunks; i++) {
    const p = processChunk(i);
    pending.push(p);
    if (pending.length >= concurrency) {
      await Promise.race(pending);
      // Remove settled promises
      for (let j = pending.length - 1; j >= 0; j--) {
        const status = await Promise.race([
          pending[j].then(() => 'done'),
          Promise.resolve('pending'),
        ]);
        if (status === 'done') pending.splice(j, 1);
      }
    }
  }
  await Promise.all(pending);

  const elapsed = Date.now() - startTime;

  console.log(`\n✅ MD5 batch complete in ${formatDuration(elapsed)}`);
  console.log(
    `   +${totalCached} cached, ${totalSkipped} skipped, ${totalMissing} missing, ${chunkErrors} errors`,
  );
  console.log(
    `   Remaining: ~${untranslated.length - totalCached} untranslated keys`,
  );

  fileLogger.close();
}

// ── Main ─────────────────────────────────────────────────────────────

async function main() {
  const opts = parseArgs(process.argv);

  if (opts.repair) {
    await runRepair(opts);
  } else if (opts.annotateFiles) {
    await runAnnotate(opts);
  } else if (opts.lookup) {
    await runLookup(opts);
  } else if (opts.status) {
    await runStatus(opts);
  } else if (opts.md5Mode) {
    await runMd5Translate(opts);
  } else {
    await runTranslate(opts);
  }
}

main().catch((err) => {
  console.error('❌ Pipeline failed:', err.message);
  process.exit(1);
});
