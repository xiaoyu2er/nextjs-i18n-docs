/**
 * Usage statistics for the completion request.
 */
export const GlobalUsage = {
  completion_tokens: 0, // Number of tokens in the generated completion.
  prompt_tokens: 0, // Number of tokens in the prompt. It equals prompt_cache_hit_tokens + prompt_cache_miss_tokens.
  total_tokens: 0, // Total number of tokens used in the request (prompt + completion).
  prompt_cache_hit_tokens: 0, // Number of tokens in the prompt that hits the context cache.
  prompt_cache_miss_tokens: 0, // Number of tokens in the prompt that misses the context cache.
};

export type Usage = typeof GlobalUsage;

export function addUsage(usage: Usage): Usage {
  if (!usage) {
    return GlobalUsage;
  }
  if (usage.prompt_tokens) {
    GlobalUsage.prompt_tokens += usage.prompt_tokens;
  }
  if (usage.completion_tokens) {
    GlobalUsage.completion_tokens += usage.completion_tokens;
  }
  if (usage.total_tokens) {
    GlobalUsage.total_tokens += usage.total_tokens;
  }
  if (usage.prompt_cache_hit_tokens) {
    GlobalUsage.prompt_cache_hit_tokens += usage.prompt_cache_hit_tokens;
  }
  if (usage.prompt_cache_miss_tokens) {
    GlobalUsage.prompt_cache_miss_tokens += usage.prompt_cache_miss_tokens;
  }

  return GlobalUsage;
}
