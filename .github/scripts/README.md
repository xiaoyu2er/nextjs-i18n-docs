# GitHub Locale Scripts

This directory contains reusable bash scripts for handling locale-based workflows in GitHub Actions.

## Scripts

### 1. `generate-files-config.sh`

Generates dynamic file configuration for the `changed-files` action based on the locales defined in `/.github/locales-config.json`.

**Usage:**
```bash
./generate-files-config.sh
```

**Output:** 
YAML configuration for file pattern matching, with separate patterns for core files and each locale's content/messages.

---

### 2. `generate-locale-matrix.sh`

Generates deployment matrix for GitHub Actions based on locale changes and trigger type.

**Usage:**
```bash
# Manual trigger (all enabled locales)
./generate-locale-matrix.sh manual

# Manual trigger (specific locales)
./generate-locale-matrix.sh manual "en,zh-hans"

# Auto/docs-pr trigger (with changes JSON)
./generate-locale-matrix.sh auto "" '{"core_any_changed": "true", "en_any_changed": "false"}'
./generate-locale-matrix.sh docs-pr "" '{"core_any_changed": "true", "en_any_changed": "false"}'
```

**Output:**
- `include=<JSON array>` - Matrix of locales with their configuration
- `has-changes=<boolean>` - Whether any changes were detected

---

### 3. `test-locale-scripts.sh`

Comprehensive test suite for validating all locale scripts functionality.

**Usage:**
```bash
./test-locale-scripts.sh
```

**Features:**
- Tests all trigger types and scenarios
- Validates JSON output format
- Tests error handling and edge cases
- Provides detailed test reports

## Dependencies

- `jq` - JSON processing
- Standard Unix utilities (`sed`, `tr`, `mktemp`)

## Configuration

Scripts read from `/.github/locales-config.json` which should contain:

```json
{
  "locale": {
    "enabled": true,
    "secret_project_id": "VERCEL_PROJECT_LOCALE_ID",
    "orama_private_api_key": "ORAMA_PRIVATE_API_KEY_LOCALE"
  }
}
```

## Integration with GitHub Actions

These scripts are used by the reusable action `/.github/actions/check-locale-changes/action.yml` which:

1. Uses `generate-files-config.sh` to create dynamic file patterns
2. Runs `changed-files` action with the generated patterns
3. Uses `generate-locale-matrix.sh` to determine which locales to deploy
4. Returns matrix configuration for downstream jobs

## Testing

Run the test suite regularly to ensure script functionality:

```bash
# Make scripts executable
chmod +x .github/scripts/*.sh

# Run comprehensive tests
./.github/scripts/test-locale-scripts.sh
```

The test suite validates:
- Files config generation
- Matrix generation for all trigger types
- JSON output validity
- Error handling
- Edge cases and boundary conditions
