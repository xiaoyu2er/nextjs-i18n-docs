import { describe, expect, it } from 'vitest';
import {
  buildPrompt,
  needsTranslation,
  stripThinkingBlock,
} from '../../src/translator';

describe('translator', () => {
  describe('needsTranslation', () => {
    it('should return true when markers present', () => {
      const content =
        '已翻译\n\n<!-- NEEDS_TRANSLATION -->\nEnglish\n<!-- /NEEDS_TRANSLATION -->';
      expect(needsTranslation(content)).toBe(true);
    });

    it('should return false when no markers', () => {
      const content = '已翻译的内容\n\n另一段翻译';
      expect(needsTranslation(content)).toBe(false);
    });
  });

  describe('buildPrompt', () => {
    it('should include target language', () => {
      const prompt = buildPrompt({ langName: 'Simplified Chinese' });
      expect(prompt).toContain('Simplified Chinese');
    });

    it('should include guide when provided', () => {
      const prompt = buildPrompt({
        langName: 'Japanese',
        guide: 'Use katakana for foreign terms',
      });
      expect(prompt).toContain('Use katakana for foreign terms');
    });

    it('should include docs context when provided', () => {
      const prompt = buildPrompt({
        langName: 'Japanese',
        docsContext: 'Next.js is a React framework',
      });
      expect(prompt).toContain('Next.js is a React framework');
    });

    it('should instruct to remove markers', () => {
      const prompt = buildPrompt({ langName: 'Spanish' });
      expect(prompt).toContain('Remove the <!-- NEEDS_TRANSLATION -->');
    });

    it('should instruct to keep non-marked content unchanged', () => {
      const prompt = buildPrompt({ langName: 'French' });
      expect(prompt).toContain('EXACTLY as-is');
    });
  });

  describe('stripThinkingBlock', () => {
    it('should strip <think>...</think> blocks', () => {
      const text = '<think>reasoning here</think>\n\n## 标题';
      expect(stripThinkingBlock(text)).toBe('## 标题');
    });

    it('should handle text without thinking blocks', () => {
      const text = '## 标题\n\n段落';
      expect(stripThinkingBlock(text)).toBe('## 标题\n\n段落');
    });

    it('should strip multiple thinking blocks', () => {
      const text = '<think>a</think>Hello<think>b</think>World';
      expect(stripThinkingBlock(text)).toBe('HelloWorld');
    });
  });
});
