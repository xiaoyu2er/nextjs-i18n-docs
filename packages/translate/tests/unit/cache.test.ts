import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { TranslationCache } from '../../src/cache';

describe('TranslationCache', () => {
  let tmpDir: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cache-test-'));
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it('should return undefined for missing key', () => {
    const cache = new TranslationCache(tmpDir);
    expect(cache.get('zh-hans', 'nonexistent')).toBeUndefined();
    cache.close();
  });

  it('should set and get a translation', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'abc123', '这是翻译');
    expect(cache.get('zh-hans', 'abc123')).toBe('这是翻译');
    cache.close();
  });

  it('should persist to disk and reload', () => {
    const cache1 = new TranslationCache(tmpDir);
    cache1.set('zh-hans', 'abc123', '翻译内容');
    cache1.close();

    // Verify DB file exists
    expect(fs.existsSync(path.join(tmpDir, 'translations.db'))).toBe(true);

    // Reopen and verify data persists
    const cache2 = new TranslationCache(tmpDir);
    expect(cache2.get('zh-hans', 'abc123')).toBe('翻译内容');
    cache2.close();
  });

  it('should handle multiple languages independently', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'hash1', '中文');
    cache.set('ja', 'hash1', '日本語');
    expect(cache.get('zh-hans', 'hash1')).toBe('中文');
    expect(cache.get('ja', 'hash1')).toBe('日本語');
    cache.close();
  });

  it('should report cache stats', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'h1', 't1');
    cache.set('zh-hans', 'h2', 't2');
    const stats = cache.stats('zh-hans');
    expect(stats.size).toBe(2);
    cache.close();
  });

  it('should overwrite existing translation', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'h1', 'old');
    cache.set('zh-hans', 'h1', 'new');
    expect(cache.get('zh-hans', 'h1')).toBe('new');
    cache.close();
  });

  it('should create directory if not exists', () => {
    const nested = path.join(tmpDir, 'deep', 'nested');
    const cache = new TranslationCache(nested);
    cache.set('zh-hans', 'h1', 'val');
    expect(fs.existsSync(path.join(nested, 'translations.db'))).toBe(true);
    cache.close();
  });

  it('should delete entries', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'h1', 'val');
    expect(cache.delete('zh-hans', 'h1')).toBe(true);
    expect(cache.get('zh-hans', 'h1')).toBeUndefined();
    cache.close();
  });

  it('should iterate entries', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'h1', 'v1');
    cache.set('zh-hans', 'h2', 'v2');
    const entries = [...cache.entries('zh-hans')];
    expect(entries).toHaveLength(2);
    cache.close();
  });

  it('should prune unused entries', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'used1', 'v1');
    cache.set('zh-hans', 'used2', 'v2');
    cache.set('zh-hans', 'stale1', 'v3');
    cache.set('zh-hans', 'stale2', 'v4');

    const removed = cache.prune('zh-hans', new Set(['used1', 'used2']));
    expect(removed).toBe(2);
    expect(cache.stats('zh-hans').size).toBe(2);
    expect(cache.get('zh-hans', 'used1')).toBe('v1');
    expect(cache.get('zh-hans', 'stale1')).toBeUndefined();
    cache.close();
  });

  it('should get all keys for a language', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'h1', 'v1');
    cache.set('zh-hans', 'h2', 'v2');
    cache.set('ja', 'h3', 'v3');
    const keys = cache.keys('zh-hans');
    expect(keys.size).toBe(2);
    expect(keys.has('h1')).toBe(true);
    expect(keys.has('h2')).toBe(true);
    expect(keys.has('h3')).toBe(false);
    cache.close();
  });

  // ── Source tracking ──

  it('should track source file locations', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'h1', 'v1');
    cache.setSource('h1', '## System Requirements', 'heading');
    cache.updateSource('zh-hans', 'h1', 'docs/installation.mdx', 12);
    cache.updateSource('zh-hans', 'h1', 'docs/14/installation.mdx', 12);

    const source = cache.getSource('h1');
    expect(source).toBeDefined();
    expect(source?.text).toBe('## System Requirements');
    expect(source?.type).toBe('heading');
    cache.close();
  });

  it('should not duplicate source file entries', () => {
    const cache = new TranslationCache(tmpDir);
    cache.setSource('h1', 'test', 'paragraph');
    cache.updateSource('zh-hans', 'h1', 'docs/foo.mdx', 5);
    cache.updateSource('zh-hans', 'h1', 'docs/foo.mdx', 5);
    // No error thrown — INSERT OR IGNORE handles duplicates
    cache.close();
  });

  it('should clear source files for a version', () => {
    const cache = new TranslationCache(tmpDir);
    cache.setSource('h1', 'test', 'paragraph');
    cache.updateSource('zh-hans', 'h1', 'docs/foo.mdx', 5, 'latest');
    cache.clearSources('zh-hans', 'latest');

    // Source text still exists, but file mappings are cleared
    const source = cache.getSource('h1');
    expect(source?.text).toBe('test');
    cache.close();
  });

  // ── setWithSource ──

  it('should set translation with source text in one call', () => {
    const cache = new TranslationCache(tmpDir);
    cache.setWithSource(
      'zh-hans',
      'h1',
      '这是翻译',
      '## English heading',
      'heading',
    );

    expect(cache.get('zh-hans', 'h1')).toBe('这是翻译');
    const source = cache.getSource('h1');
    expect(source?.text).toBe('## English heading');
    expect(source?.type).toBe('heading');
    cache.close();
  });

  // ── Dashboard queries ──

  it('should return all lang stats', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'h1', 'v1');
    cache.set('zh-hans', 'h2', 'v2');
    cache.set('ja', 'h1', 'v3');

    const stats = cache.allLangStats();
    expect(stats).toHaveLength(2);
    const zhStats = stats.find((s) => s.lang === 'zh-hans');
    expect(zhStats?.count).toBe(2);
    cache.close();
  });

  it('should compute file coverage', () => {
    const cache = new TranslationCache(tmpDir);

    // Set up source nodes
    cache.setSource('h1', 'heading 1', 'heading');
    cache.setSource('h2', 'paragraph 1', 'paragraph');
    cache.setSource('h3', 'paragraph 2', 'paragraph');

    // Map to files
    cache.updateSource('', 'h1', 'docs/intro.mdx', 1, 'latest');
    cache.updateSource('', 'h2', 'docs/intro.mdx', 5, 'latest');
    cache.updateSource('', 'h3', 'docs/guide.mdx', 1, 'latest');

    // Translate some
    cache.set('zh-hans', 'h1', '标题1');
    cache.set('zh-hans', 'h2', '段落1');
    // h3 not translated

    const coverage = cache.fileCoverage('latest', 'zh-hans');
    expect(coverage).toHaveLength(2);

    const intro = coverage.find((c) => c.file === 'docs/intro.mdx');
    expect(intro?.total).toBe(2);
    expect(intro?.translated).toBe(2);

    const guide = coverage.find((c) => c.file === 'docs/guide.mdx');
    expect(guide?.total).toBe(1);
    expect(guide?.translated).toBe(0);

    cache.close();
  });

  it('should return file detail with EN source and translation', () => {
    const cache = new TranslationCache(tmpDir);

    cache.setSource('h1', '## Getting Started', 'heading');
    cache.setSource('h2', 'Install Next.js', 'paragraph');
    cache.updateSource('', 'h1', 'docs/intro.mdx', 1, 'latest');
    cache.updateSource('', 'h2', 'docs/intro.mdx', 3, 'latest');
    cache.set('zh-hans', 'h1', '## 入门指南');
    // h2 not translated

    const detail = cache.fileDetail('latest', 'zh-hans', 'docs/intro.mdx');
    expect(detail).toHaveLength(2);
    expect(detail[0].source).toBe('## Getting Started');
    expect(detail[0].translation).toBe('## 入门指南');
    expect(detail[0].line).toBe(1);
    expect(detail[1].source).toBe('Install Next.js');
    expect(detail[1].translation).toBeNull();
    cache.close();
  });

  it('should compute section stats', () => {
    const cache = new TranslationCache(tmpDir);

    cache.setSource('d1', 'doc node 1', 'paragraph');
    cache.setSource('d2', 'doc node 2', 'paragraph');
    cache.setSource('b1', 'blog node 1', 'paragraph');
    cache.updateSource('', 'd1', 'docs/a.mdx', 1, 'latest');
    cache.updateSource('', 'd2', 'docs/b.mdx', 1, 'latest');
    cache.updateSource('', 'b1', 'blog/c.mdx', 1, 'latest');

    cache.set('zh-hans', 'd1', '文档1');
    // d2, b1 not translated

    const stats = cache.sectionStats('latest', 'zh-hans');
    const docs = stats.find((s) => s.section === 'docs');
    expect(docs?.totalFiles).toBe(2);
    expect(docs?.translatedFiles).toBe(1);
    expect(docs?.totalNodes).toBe(2);
    expect(docs?.translatedNodes).toBe(1);

    const blog = stats.find((s) => s.section === 'blog');
    expect(blog?.totalFiles).toBe(1);
    expect(blog?.translatedFiles).toBe(0);
    cache.close();
  });

  // ── JSONL import/export ──

  it('should import from JSONL format', () => {
    // Create a JSONL file
    const jsonlPath = path.join(tmpDir, 'zh-hans.jsonl');
    fs.writeFileSync(
      jsonlPath,
      [
        '{"k":"hash1","v":"翻译1"}',
        '{"k":"hash2","v":"翻译2","src":["docs/foo.mdx:10"]}',
      ].join('\n'),
    );

    const cache = new TranslationCache(tmpDir);
    const count = cache.importJsonl('zh-hans', jsonlPath);
    expect(count).toBe(2);
    expect(cache.get('zh-hans', 'hash1')).toBe('翻译1');
    expect(cache.get('zh-hans', 'hash2')).toBe('翻译2');
    cache.close();
  });

  it('should export to JSONL format', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'h1', '翻译1');
    cache.set('zh-hans', 'h2', '翻译2');

    const outputPath = path.join(tmpDir, 'export.jsonl');
    const count = cache.exportJsonl('zh-hans', outputPath);
    expect(count).toBe(2);

    const content = fs.readFileSync(outputPath, 'utf8');
    expect(content).toContain('"k":"h1"');
    expect(content).toContain('"v":"翻译1"');
    cache.close();
  });

  it('should round-trip through JSONL export/import', () => {
    const cache1 = new TranslationCache(tmpDir);
    cache1.set('zh-hans', 'h1', '翻译内容');
    cache1.setSource('h1', '## English', 'heading');
    cache1.updateSource('zh-hans', 'h1', 'docs/foo.mdx', 10, 'latest');

    const jsonlPath = path.join(tmpDir, 'roundtrip.jsonl');
    cache1.exportJsonl('zh-hans', jsonlPath);
    cache1.close();

    // Import into a fresh cache
    const tmpDir2 = fs.mkdtempSync(path.join(os.tmpdir(), 'cache-test2-'));
    const cache2 = new TranslationCache(tmpDir2);
    cache2.importJsonl('zh-hans', jsonlPath);

    expect(cache2.get('zh-hans', 'h1')).toBe('翻译内容');
    cache2.close();
    fs.rmSync(tmpDir2, { recursive: true, force: true });
  });

  // ── Backward compatibility ──

  it('load() and save() are no-ops and do not throw', () => {
    const cache = new TranslationCache(tmpDir);
    expect(() => cache.load('zh-hans')).not.toThrow();
    cache.set('zh-hans', 'h1', 'v1');
    expect(() => cache.save('zh-hans')).not.toThrow();
    cache.close();
  });

  it('should handle concurrent reads from separate instances', () => {
    const cache1 = new TranslationCache(tmpDir);
    cache1.set('zh-hans', 'h1', '写入');

    // Open a second read-only connection
    const cache2 = new TranslationCache(tmpDir);
    expect(cache2.get('zh-hans', 'h1')).toBe('写入');

    cache1.close();
    cache2.close();
  });
});
