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
  });

  it('should set and get a translation', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'abc123', '这是翻译');
    expect(cache.get('zh-hans', 'abc123')).toBe('这是翻译');
  });

  it('should persist to disk as JSONL and reload', () => {
    const cache1 = new TranslationCache(tmpDir);
    cache1.set('zh-hans', 'abc123', '翻译内容');
    cache1.save('zh-hans');

    // Verify file is JSONL format
    const content = fs.readFileSync(path.join(tmpDir, 'zh-hans.jsonl'), 'utf8');
    expect(content).toContain('"k":"abc123"');
    expect(content).toContain('"v":"翻译内容"');

    const cache2 = new TranslationCache(tmpDir);
    cache2.load('zh-hans');
    expect(cache2.get('zh-hans', 'abc123')).toBe('翻译内容');
  });

  it('should handle multiple languages independently', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'hash1', '中文');
    cache.set('ja', 'hash1', '日本語');
    expect(cache.get('zh-hans', 'hash1')).toBe('中文');
    expect(cache.get('ja', 'hash1')).toBe('日本語');
  });

  it('should report cache stats', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'h1', 't1');
    cache.set('zh-hans', 'h2', 't2');
    const stats = cache.stats('zh-hans');
    expect(stats.size).toBe(2);
  });

  it('should overwrite existing translation', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'h1', 'old');
    cache.set('zh-hans', 'h1', 'new');
    expect(cache.get('zh-hans', 'h1')).toBe('new');
  });

  it('should create directory if not exists on save', () => {
    const nested = path.join(tmpDir, 'deep', 'nested');
    const cache = new TranslationCache(nested);
    cache.set('zh-hans', 'h1', 'val');
    cache.save('zh-hans');
    expect(fs.existsSync(path.join(nested, 'zh-hans.jsonl'))).toBe(true);
  });

  it('should migrate from old JSON format', () => {
    // Create old-format JSON file
    fs.writeFileSync(
      path.join(tmpDir, 'zh-hans.json'),
      JSON.stringify({ hash1: '翻译1', hash2: '翻译2' }),
    );

    const cache = new TranslationCache(tmpDir);
    cache.load('zh-hans');
    expect(cache.get('zh-hans', 'hash1')).toBe('翻译1');
    expect(cache.get('zh-hans', 'hash2')).toBe('翻译2');
  });

  it('should delete entries', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'h1', 'val');
    expect(cache.delete('zh-hans', 'h1')).toBe(true);
    expect(cache.get('zh-hans', 'h1')).toBeUndefined();
  });

  it('should iterate entries', () => {
    const cache = new TranslationCache(tmpDir);
    cache.set('zh-hans', 'h1', 'v1');
    cache.set('zh-hans', 'h2', 'v2');
    const entries = [...cache.entries('zh-hans')];
    expect(entries).toHaveLength(2);
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
  });
});
