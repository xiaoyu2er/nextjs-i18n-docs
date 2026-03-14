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

  it('should persist to disk and reload', () => {
    const cache1 = new TranslationCache(tmpDir);
    cache1.set('zh-hans', 'abc123', '翻译内容');
    cache1.save('zh-hans');

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
    expect(fs.existsSync(path.join(nested, 'zh-hans.json'))).toBe(true);
  });
});
