#!/bin/bash

# Script to generate locale deployment matrix based on trigger type and changes
# Usage: ./generate-locale-matrix.sh <trigger-type> [manual-locales] [changes-json-file]
#
# trigger-type: "manual", "auto", or "docs-pr"
# manual-locales: comma-separated list of locales (for manual trigger)
# changes-json-file: File path containing JSON output from changed-files action (for auto/docs-pr triggers)

set -e

# Global result variables for function communication
RESULT_MATRIX_INCLUDE=""
RESULT_HAS_CHANGES=""

# Default values
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
LOCALE_CONFIG_FILE="$ROOT_DIR/.github/locales-config.json"

# Function to print usage
usage() {
    echo "Usage: $0 <trigger-type> [manual-locales] [changes-json-file]"
    echo ""
    echo "Arguments:"
    echo "  trigger-type       Type of trigger: 'manual', 'auto', or 'docs-pr'"
    echo "  manual-locales     Comma-separated list of locales (optional, for manual trigger)"
    echo "  changes-json-file  File path containing JSON output from changed-files action (for auto/docs-pr triggers)"
    echo ""
    echo "Examples:"
    echo "  $0 manual"
    echo "  $0 manual 'en,zh-hans'"
    echo "  $0 docs-pr '/tmp/changes.json'"
    exit 1
}

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

# Function to add locale to matrix
add_locale_to_matrix() {
    local matrix="$1"
    local locale="$2"
    local secret_project_id="$3"
    local orama_private_api_key="$4"
    
    echo "$matrix" | jq --arg locale "$locale" \
                        --arg secret_id "$secret_project_id" \
                        --arg orama_key "$orama_private_api_key" \
                        '. + [{"locale": $locale, "secret_project_id": $secret_id, "orama_private_api_key": $orama_key}]'
}

# Function to check if locale is enabled
is_locale_enabled() {
    local locale_config="$1"
    local locale="$2"
    
    local enabled=$(echo "$locale_config" | jq -r ".[\"$locale\"].enabled // \"false\"")
    [ "$enabled" == "true" ]
}

# Function to get locale configuration
get_locale_config() {
    local locale_config="$1"
    local locale="$2"
    local field="$3"
    
    echo "$locale_config" | jq -r ".[\"$locale\"].$field // \"\""
}

# Function to process manual trigger
process_manual_trigger() {
    local locale_config="$1"
    local manual_locales="$2"
    local matrix_include="[]"
    local has_changes="false"
    
    if [ -z "$manual_locales" ]; then
        log "No specific locales provided, deploying all enabled locales"
        
        # Deploy all enabled locales
        for locale in $(echo "$locale_config" | jq -r 'keys[]'); do
            if is_locale_enabled "$locale_config" "$locale"; then
                local secret_project_id=$(get_locale_config "$locale_config" "$locale" "secret_project_id")
                local orama_private_api_key=$(get_locale_config "$locale_config" "$locale" "orama_private_api_key")
                
                matrix_include=$(add_locale_to_matrix "$matrix_include" "$locale" "$secret_project_id" "$orama_private_api_key")
                has_changes="true"
            fi
        done
    else
        log "Manual locales specified: $manual_locales"
        
        # Use a temporary file to handle comma-separated parsing safely
        local temp_file=$(mktemp)
        echo "$manual_locales" | tr ',' '\n' > "$temp_file"
        
        while IFS= read -r locale; do
            # Trim whitespace
            locale=$(echo "$locale" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
            
            # Skip empty entries
            if [ -z "$locale" ]; then
                continue
            fi
            
            if is_locale_enabled "$locale_config" "$locale"; then
                local secret_project_id=$(get_locale_config "$locale_config" "$locale" "secret_project_id")
                local orama_private_api_key=$(get_locale_config "$locale_config" "$locale" "orama_private_api_key")
                
                if [ -n "$secret_project_id" ]; then
                    matrix_include=$(add_locale_to_matrix "$matrix_include" "$locale" "$secret_project_id" "$orama_private_api_key")
                    has_changes="true"
                else
                    log "Skipping $locale (no secret_project_id configured)"
                fi
            else
                log "Skipping $locale (not enabled or not found in config)"
            fi
        done < "$temp_file"
        
        rm -f "$temp_file"
    fi
    
    # Set global variables instead of echo
    RESULT_MATRIX_INCLUDE="$matrix_include"
    RESULT_HAS_CHANGES="$has_changes"
}

# Function to process automatic/docs-pr trigger
process_auto_trigger() {
    local locale_config="$1"
    local changes_json="$2"
    local matrix_include="[]"
    local has_changes="false"
    
    # Check core changes
    local core_changed=$(echo "$changes_json" | jq -r '.core_any_changed // "false"')
    
    # Check each locale dynamically from config
    for locale in $(echo "$locale_config" | jq -r 'keys[]'); do
        if is_locale_enabled "$locale_config" "$locale"; then
            local secret_project_id=$(get_locale_config "$locale_config" "$locale" "secret_project_id")
            local orama_private_api_key=$(get_locale_config "$locale_config" "$locale" "orama_private_api_key")
            
            # Get locale change status dynamically from the changes JSON
            local locale_changed=$(echo "$changes_json" | jq -r ".[\"${locale}_any_changed\"] // \"false\"")
            
            # Add to matrix if enabled and (core changed or locale changed)
            if [ "$core_changed" == "true" ] || [ "$locale_changed" == "true" ]; then
                matrix_include=$(add_locale_to_matrix "$matrix_include" "$locale" "$secret_project_id" "$orama_private_api_key")
                has_changes="true"
            fi
        else
            log "Skipping $locale (not enabled)"
        fi
    done
    
    # Set global variables instead of echo
    RESULT_MATRIX_INCLUDE="$matrix_include"
    RESULT_HAS_CHANGES="$has_changes"
}

# Main function
main() {
    local trigger_type="$1"
    local manual_locales="$2"
    local changes_json_file="$3"
    
    # Validate arguments
    if [ -z "$trigger_type" ]; then
        echo "Error: trigger-type is required" >&2
        usage
    fi
    
    if [ "$trigger_type" != "manual" ] && [ "$trigger_type" != "auto" ] && [ "$trigger_type" != "docs-pr" ]; then
        echo "Error: Invalid trigger-type. Must be 'manual', 'auto', or 'docs-pr'" >&2
        usage
    fi
    
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
    
    log "=== Locale Matrix Generator ==="
    log "Trigger type: $trigger_type"
    
    # Initialize global result variables
    RESULT_MATRIX_INCLUDE=""
    RESULT_HAS_CHANGES=""
    
    if [ "$trigger_type" == "manual" ]; then
        process_manual_trigger "$locale_config" "$manual_locales"
        matrix_include="$RESULT_MATRIX_INCLUDE"
        has_changes="$RESULT_HAS_CHANGES"
    else
        # For auto and docs-pr triggers, changes_json_file is required
        if [ -z "$changes_json_file" ]; then
            echo "Error: changes-json-file is required for auto/docs-pr triggers" >&2
            usage
        fi
        
        # Check if changes JSON file exists
        if [ ! -f "$changes_json_file" ]; then
            echo "Error: Changes JSON file not found: $changes_json_file" >&2
            exit 1
        fi
        
        # Read changes JSON from file
        local changes_json
        if ! changes_json=$(cat "$changes_json_file"); then
            echo "Error: Failed to read changes JSON file: $changes_json_file" >&2
            exit 1
        fi
        
        # Validate changes JSON
        if ! validate_json "$changes_json"; then
            echo "Error: Invalid changes JSON in file: $changes_json_file" >&2
            exit 1
        fi
        
        process_auto_trigger "$locale_config" "$changes_json"
        matrix_include="$RESULT_MATRIX_INCLUDE"
        has_changes="$RESULT_HAS_CHANGES"
    fi
    
    # Ensure the matrix is properly formatted as a single line
    local matrix_output
    if ! matrix_output=$(echo "$matrix_include" | jq -c '.'); then
        echo "Error: Failed to format matrix as compact JSON" >&2
        exit 1
    fi
    
    # Validate final JSON
    if validate_json "$matrix_output"; then
        echo "include=$matrix_output"
        echo "has-changes=$has_changes"
    else
        log "Invalid JSON generated, outputting empty array"
        echo "include=[]"
        echo "has-changes=false"
    fi
}

# Run main function if script is executed directly
if [ "${BASH_SOURCE[0]}" == "${0}" ]; then
    main "$@"
fi
