# @next-i18n/translate

Incremental AST-based translation pipeline for Next.js documentation. Translates MDX files into 8 languages using OpenRouter (or OpenAI/Anthropic) APIs with structured JSON output, caching, and validation.

## Architecture

```
EN source MDX → parse (remark AST) → extract nodes → MD5 hash
  → check cache (SQLite) → uncached nodes → chunk by tokens
  → translate via LLM (JSON mode) → validate → cache → assemble output
```

- **Cache**: SQLite (`.cache/translations.db`) with WAL mode for concurrent access
- **Translation format**: Structured JSON — `{md5: translation}` per chunk
- **Validation**: YAML frontmatter, MDX syntax, empty/truncated checks

## Quick Start

```bash
# Translate latest docs to zh-hans (uses model from .env)
bun packages/translate/src/batch.pipeline.ts \
  --lang zh-hans

# Translate versioned docs
bun packages/translate/src/batch.pipeline.ts \
  --lang zh-hans \
  --docs-root content-v14/en \
  --output-dir content-v14

# Dry run (show what would be translated)
bun packages/translate/src/batch.pipeline.ts \
  --lang zh-hans --dry-run
```

## CLI Options

```
Translation:
  --lang <code>           Target language (default: zh-hans)
  --docs-root <path>      EN source directory (default: content/en)
  --output-dir <path>     Output root directory (default: content)
  --pattern <glob>        File pattern (default: **/*.mdx)
  --max <n>               Max files to process
  --concurrency <n>       Parallel API calls (default: 3)

Model:
  --model <name>          Override model from .env
  --model-rotate <list>   Comma-separated models to rotate through
  --api-type <type>       API type: openrouter, openai, anthropic (default: openrouter)
  --api-key <key>         API key override
  --max-tokens <n>        Max output tokens (default: 16384)

Utilities:
  --dry-run               Show plan without translating
  --status                Show translation status
  --repair                Repair broken cache entries
  --annotate <path>       Annotate a file with translation markers
  --lookup <md5>          Look up a cache entry by MD5
```

## Model Selection

### Using a specific model

```bash
bun packages/translate/src/batch.pipeline.ts \
  --lang zh-hans \
  --model "qwen/qwen3.5-flash-02-23"
```

### Free model rotation

Rotate through multiple free models to distribute rate limits:

```bash
# List available free models
bun scripts/list-models.ts --free

# List free models with context ≥ 32k
bun scripts/list-models.ts --free --min-ctx 32

# Generate --model-rotate flag automatically
bun scripts/list-models.ts --free --min-ctx 32 --rotate-cmd

# One-liner: translate with all free models rotating
bun packages/translate/src/batch.pipeline.ts \
  --lang zh-hans \
  --docs-root content-v14/en \
  --output-dir content-v14 \
  $(bun scripts/list-models.ts --free --min-ctx 32 --rotate-cmd) \
  --max 20 \
  --concurrency 3
```

Each translation chunk uses the next model in the list (round-robin), distributing requests across models to avoid per-model rate limits.

### Browse models

```bash
# All models supporting structured JSON output
bun scripts/list-models.ts

# Filter by price (input ≤ $0.50/M tokens)
bun scripts/list-models.ts --max-price 0.5

# Filter by context length (≥ 128k)
bun scripts/list-models.ts --min-ctx 128

# JSON output for scripting
bun scripts/list-models.ts --free --json
```

## Environment Variables

```bash
# Required
OPENROUTER_API_KEY=sk-or-v1-...

# Optional
OPENROUTER_MODEL=qwen/qwen3.5-flash-02-23  # Default model
```

## Rate Limits (OpenRouter)

- **Free models**: ~20 requests/min, daily limit depends on credits purchased
- **Paid models**: Effectively unlimited (credit-based)
- **Rate limit handling**: Auto-retry with exponential backoff (2s → 4s → 8s, max 3 attempts)
- **Mitigation**: Use `--model-rotate` with multiple free models to multiply throughput

## Logs

Detailed per-file logs are written to `.logs/` with timestamps. Each log includes:
- Full system prompt and user message
- Full response body (raw JSON from model)
- Token usage (prompt/completion/total)
- Response time and finish reason
- Retry attempts and errors

## Admin Dashboard

Local web UI for managing translations:

```bash
bun run dev:admin
# → http://localhost:3456
```

Features:
- Translation progress per version/language/file
- Side-by-side EN + translation preview with synced scrolling
- Start translation jobs with model selection
- Live job monitoring with log viewer

## Translation Status

```bash
# Quick status overview
bun scripts/translation-status.ts

# Per-language detail
bun scripts/translation-status.ts --lang zh-hans

# Show untranslated files
bun scripts/translation-status.ts --untranslated

# Force rescan source files
bun scripts/translation-status.ts --scan
```

## Cache Management

```bash
# Migrate JSONL → SQLite
bun scripts/migrate-cache.ts

# Verify migration
bun scripts/migrate-cache.ts --verify

# Export SQLite → JSONL (for git tracking)
bun scripts/migrate-cache.ts --export
```
