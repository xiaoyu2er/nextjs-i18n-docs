import { beforeEach, describe, expect, it } from 'vitest';
import { GlobalUsage, type Usage, addUsage } from '../../src/usage';

describe('usage', () => {
  beforeEach(() => {
    // Reset the GlobalUsage object before each test
    for (const key of Object.keys(GlobalUsage)) {
      GlobalUsage[key as keyof Usage] = 0;
    }
  });

  describe('GlobalUsage', () => {
    it('should have the correct properties with zero values initially', () => {
      expect(GlobalUsage).toEqual({
        completion_tokens: 0,
        prompt_tokens: 0,
        total_tokens: 0,
        prompt_cache_hit_tokens: 0,
        prompt_cache_miss_tokens: 0,
      });
    });
  });

  describe('addUsage', () => {
    it('should add usage data to GlobalUsage', () => {
      const usageData: Usage = {
        completion_tokens: 100,
        prompt_tokens: 200,
        total_tokens: 300,
        prompt_cache_hit_tokens: 50,
        prompt_cache_miss_tokens: 150,
      };

      addUsage(usageData);

      expect(GlobalUsage).toEqual(usageData);
    });

    it('should accumulate usage data across multiple calls', () => {
      const usageData1: Usage = {
        completion_tokens: 100,
        prompt_tokens: 200,
        total_tokens: 300,
        prompt_cache_hit_tokens: 50,
        prompt_cache_miss_tokens: 150,
      };

      const usageData2: Usage = {
        completion_tokens: 150,
        prompt_tokens: 250,
        total_tokens: 400,
        prompt_cache_hit_tokens: 75,
        prompt_cache_miss_tokens: 175,
      };

      addUsage(usageData1);
      addUsage(usageData2);

      // Should sum the values
      expect(GlobalUsage).toEqual({
        completion_tokens: 250,
        prompt_tokens: 450,
        total_tokens: 700,
        prompt_cache_hit_tokens: 125,
        prompt_cache_miss_tokens: 325,
      });
    });

    it('should handle undefined usage data gracefully', () => {
      const initialUsage = { ...GlobalUsage };
      addUsage(undefined as unknown as Usage);

      // GlobalUsage should remain unchanged
      expect(GlobalUsage).toEqual(initialUsage);
    });

    it('should handle partial usage data', () => {
      const partialUsage: Partial<Usage> = {
        completion_tokens: 100,
        // Missing other fields
      };

      addUsage(partialUsage as Usage);

      // Only the provided field should be updated
      expect(GlobalUsage.completion_tokens).toBe(100);
      expect(GlobalUsage.prompt_tokens).toBe(0);
      expect(GlobalUsage.total_tokens).toBe(0);
    });

    it('should return the updated GlobalUsage object', () => {
      const usageData: Usage = {
        completion_tokens: 100,
        prompt_tokens: 200,
        total_tokens: 300,
        prompt_cache_hit_tokens: 50,
        prompt_cache_miss_tokens: 150,
      };

      const result = addUsage(usageData);

      // The return value should be the GlobalUsage object
      expect(result).toBe(GlobalUsage);
    });
  });
});
