# GitHub Actions Locale Workflow System

This document provides comprehensive documentation for the locale-based GitHub Actions workflow system, including the scripts, actions, and the enhancement process that led to the current implementation.

## 🎯 Overview

This system provides automated, locale-aware deployment workflows for internationalized documentation. It intelligently determines which locales need to be deployed based on file changes and supports multiple trigger types for different deployment scenarios.

## 📁 System Components

### Core Files

- **`/.github/locales-config.json`** - Central configuration for all locales
- **`/.github/actions/check-locale-changes/action.yml`** - Reusable GitHub Action
- **`/.github/scripts/`** - Executable bash scripts for locale logic

### Workflow Integration

- **`/.github/workflows/release.yml`** - Production deployment workflow
- **`/.github/workflows/update-docs-ci.yml`** - Documentation update workflow

## 🔧 Scripts Reference

### 1. `generate-files-config.sh`

Generates dynamic file configuration for the `changed-files` action based on locales defined in the configuration.

**Usage:**
```bash
./generate-files-config.sh
```

**Output:** 
YAML configuration for file pattern matching, with separate patterns for core files and each locale's content/messages.

**Example Output:**
```yaml
core:
  - 'apps/docs/**'
  - 'packages/**'
  - '!apps/docs/content/**'
  - '!apps/docs/messages/**'
en:
  - 'apps/docs/content/en/**'
  - 'apps/docs/messages/en.json'
zh-hans:
  - 'apps/docs/content/zh-hans/**'
  - 'apps/docs/messages/zh-hans.json'
```

### 2. `generate-locale-matrix.sh`

Generates deployment matrix for GitHub Actions based on locale changes and trigger type.

**Usage:**
```bash
# Manual trigger (all enabled locales)
./generate-locale-matrix.sh manual

# Manual trigger (specific locales)
./generate-locale-matrix.sh manual "en,zh-hans"

# Auto/docs-pr trigger (with changes JSON file)
echo '{"core_any_changed": "true", "en_any_changed": "false"}' > changes.json
./generate-locale-matrix.sh auto "" "changes.json"
./generate-locale-matrix.sh docs-pr "" "changes.json"
```

**Output:**
- `include=<JSON array>` - Matrix of locales with their configuration
- `has-changes=<boolean>` - Whether any changes were detected

**Example Output:**
```
include=[{"locale":"en","secret_project_id":"VERCEL_PROJECT_EN_ID","orama_private_api_key":"ORAMA_PRIVATE_API_KEY_EN"}]
has-changes=true
```

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
- Provides detailed test reports (10 test scenarios)

## ⚙️ Configuration

### Locale Configuration (`/.github/locales-config.json`)

All scripts read from this centralized configuration file:

```json
{
  "en": {
    "enabled": true,
    "secret_project_id": "VERCEL_PROJECT_EN_ID",
    "orama_private_api_key": "ORAMA_PRIVATE_API_KEY_EN"
  },
  "zh-hans": {
    "enabled": true,
    "secret_project_id": "VERCEL_PROJECT_ZH_HANS_ID",
    "orama_private_api_key": "ORAMA_PRIVATE_API_KEY_ZH_HANS"
  }
}
```

**Fields:**
- `enabled` - Whether the locale is active for deployment
- `secret_project_id` - GitHub secret name for the Vercel project ID
- `orama_private_api_key` - GitHub secret name for the Orama search API key

## 🔄 GitHub Action Integration

The reusable action `/.github/actions/check-locale-changes/action.yml` orchestrates the entire process:

### Inputs

```yaml
inputs:
  trigger-type:
    description: 'Type of trigger: manual, auto, or docs-pr'
    required: true
  manual-locales:
    description: 'Comma-separated list of locales for manual trigger'
    required: false
```

### Outputs

```yaml
outputs:
  matrix:
    description: 'JSON matrix of locales to deploy'
  has-changes:
    description: 'Whether any changes were detected'
```

### Workflow Process

1. **Generate Files Config** - Creates dynamic file patterns for change detection
2. **Detect Changes** - Uses `changed-files` action with generated patterns
3. **Generate Matrix** - Determines which locales to deploy based on changes and trigger type
4. **Return Results** - Provides matrix configuration for downstream jobs

## 🚀 Usage Examples

### In GitHub Workflows

```yaml
jobs:
  check-changes:
    runs-on: ubuntu-latest
    outputs:
      matrix: ${{ steps.changes.outputs.matrix }}
      has-changes: ${{ steps.changes.outputs.has-changes }}
    steps:
      - uses: actions/checkout@v4
      
      - name: Check locale changes
        id: changes
        uses: ./.github/actions/check-locale-changes
        with:
          trigger-type: 'auto'
  
  deploy:
    needs: check-changes
    if: needs.check-changes.outputs.has-changes == 'true'
    strategy:
      matrix:
        include: ${{ fromJSON(needs.check-changes.outputs.matrix) }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy ${{ matrix.locale }}
        run: echo "Deploying locale: ${{ matrix.locale }}"
```

### Local Testing

```bash
# Make scripts executable
chmod +x .github/scripts/*.sh

# Test files config generation
./.github/scripts/generate-files-config.sh

# Test manual deployment matrix
./.github/scripts/generate-locale-matrix.sh manual "en,zh-hans"

# Test auto deployment with changes
echo '{"core_any_changed": "true"}' > /tmp/changes.json
./.github/scripts/generate-locale-matrix.sh auto "" /tmp/changes.json

# Run comprehensive test suite
./.github/scripts/test-locale-scripts.sh
```

## 🛠️ Technical Improvements & Enhancement History

### What We Started With
- GitHub Actions workflows with significant code duplication
- Inline bash logic that was difficult to test locally
- Hardcoded locale matrices and configurations
- Manual workflow trigger issues
- "Argument list too long" errors with large file lists

### What We Accomplished

#### ✅ 1. Fixed "Argument list too long" Error
- **Problem**: Large JSON strings with extensive file lists exceeded system ARG_MAX limit
- **Solution**: Implemented file-based approach using temporary files to pass JSON data

#### ✅ 2. Created Reusable Components
- **Extracted** 150+ lines of inline bash into modular, testable scripts
- **Created** reusable GitHub Action with clean inputs/outputs
- **Centralized** configuration in single JSON file

#### ✅ 3. Enhanced Testability
- **Local testing** - All logic can be tested without GitHub Actions
- **Comprehensive test suite** - 10 test scenarios covering all cases
- **Error handling** - Robust validation and error reporting

#### ✅ 4. Improved Maintainability
- **Modular design** - Separate concerns into focused scripts
- **Documentation** - Comprehensive inline and external documentation
- **Logging optimization** - Reduced unnecessary logs while maintaining debugging capability

### Before vs After

#### Before:
```yaml
# Massive inline bash block
run: |
  locale_config=$(cat .github/locales-config.json)
  matrix_include="[]"
  # ... 150+ lines of complex logic with ARG_MAX issues
```

#### After:
```yaml
# Clean, file-based approach
run: |
  if [ "$trigger_type" == "manual" ]; then
    output=$(.github/scripts/generate-locale-matrix.sh "$trigger_type" "$manual_locales")
  else
    changes_json='${{ toJSON(steps.changes.outputs) }}'
    temp_file=$(mktemp)
    echo "$changes_json" > "$temp_file"
    output=$(.github/scripts/generate-locale-matrix.sh "$trigger_type" "" "$temp_file")
    rm -f "$temp_file"
  fi
```

## 📋 Dependencies

- **`jq`** - JSON processing and validation
- **Standard Unix utilities** - `sed`, `tr`, `mktemp`, `cat`, `echo`
- **GitHub Actions** - `changed-files` action for file change detection

## 🧪 Testing

The test suite validates:
- Files config generation
- Matrix generation for all trigger types
- JSON output validity and formatting
- Error handling and edge cases
- File-based argument passing
- Boundary conditions and invalid inputs

**Run tests:**
```bash
./.github/scripts/test-locale-scripts.sh
```

**Expected output:**
```
✅ All tests pass (10/10)
✅ Scripts work correctly for all trigger types
✅ JSON output is properly formatted and valid
✅ Error handling works as expected
```

## 🎯 Benefits

1. **Scalability** - Handles arbitrarily large file lists without system limitations
2. **Maintainability** - Centralized, modular components
3. **Testability** - Complete local testing capability
4. **Reliability** - Comprehensive error handling and validation
5. **Reusability** - Scripts can be used in other workflows
6. **Performance** - Optimized logging and efficient processing
7. **Debugging** - Clear error messages and optional verbose logging

## 📝 Files Created/Modified

**Created:**
- `/.github/actions/check-locale-changes/action.yml` - Reusable action
- `/.github/scripts/generate-files-config.sh` - Files config generator
- `/.github/scripts/generate-locale-matrix.sh` - Matrix generator  
- `/.github/scripts/test-locale-scripts.sh` - Test suite
- `/.github/README.md` - This documentation

**Modified:**
- `/.github/workflows/release.yml` - Uses reusable action
- `/.github/workflows/update-docs-ci.yml` - Uses reusable action
- `/.github/locales-config.json` - Added orama_private_api_key fields

## 🚀 Status

✅ **System is production-ready**
- All components tested and validated
- No more "Argument list too long" errors
- Clean, maintainable codebase
- Comprehensive documentation
- Full test coverage

The locale workflow system is now robust, scalable, and ready for production use! 🎉
