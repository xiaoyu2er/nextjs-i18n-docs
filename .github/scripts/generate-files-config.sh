#!/bin/bash

# Script to generate dynamic files configuration for change detection
# Usage: ./generate-files-config.sh

set -e

# Default values
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
LOCALE_CONFIG_FILE="$ROOT_DIR/.github/locales-config.json"

# Function to log messages
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >&2
}

# Function to validate JSON
validate_json() {
    local json="$1"
    if echo "$json" | jq . >/dev/null 2>&1; then
        return 0
    else
        return 1
    fi
}

# Main function
main() {
    # Check if locale config file exists
    if [ ! -f "$LOCALE_CONFIG_FILE" ]; then
        echo "Error: Locale config file not found: $LOCALE_CONFIG_FILE" >&2
        exit 1
    fi
    
    # Read locale config
    local locale_config
    if ! locale_config=$(cat "$LOCALE_CONFIG_FILE"); then
        echo "Error: Failed to read locale config file" >&2
        exit 1
    fi
    
    # Validate locale config JSON
    if ! validate_json "$locale_config"; then
        echo "Error: Invalid JSON in locale config file" >&2
        exit 1
    fi
    
    log "=== Files Config Generator ==="
    log "Locale config file: $LOCALE_CONFIG_FILE"
    
    # Start with core files config
    local files_yaml="core:
  - 'apps/docs/**'
  - 'packages/**'
  - '!apps/docs/content/**'
  - '!apps/docs/messages/**'"
    
    # Add each locale from config dynamically
    for locale in $(echo "$locale_config" | jq -r 'keys[]'); do
        files_yaml="$files_yaml
$locale:
  - 'apps/docs/content/$locale/**'
  - 'apps/docs/messages/$locale.json'"
    done
    
    log "Generated files_yaml configuration"
    
    # Output the files_yaml configuration
    echo "$files_yaml"
}

# Run main function if script is executed directly
if [ "${BASH_SOURCE[0]}" == "${0}" ]; then
    main "$@"
fi
