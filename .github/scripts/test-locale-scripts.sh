#!/bin/bash

# Test script for locale matrix generation
# Usage: ./test-locale-scripts.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# ANSI color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_header() {
    echo -e "${BLUE}=== $1 ===${NC}"
}

# Function to run test
run_test() {
    local test_name="$1"
    local test_command="$2"
    local expected_pattern="$3"
    
    print_info "Running test: $test_name"
    
    if output=$(eval "$test_command" 2>&1); then
        if [[ -z "$expected_pattern" ]] || echo "$output" | grep -q "$expected_pattern"; then
            print_success "$test_name"
            echo "$output" | sed 's/^/  /'
            return 0
        else
            print_error "$test_name - Expected pattern '$expected_pattern' not found"
            echo "$output" | sed 's/^/  /'
            return 1
        fi
    else
        print_error "$test_name - Command failed"
        echo "$output" | sed 's/^/  /'
        return 1
    fi
}

# Main test function
main() {
    print_header "Testing Locale Scripts"
    
    local test_count=0
    local passed_count=0
    
    # Make scripts executable
    chmod +x "$SCRIPT_DIR/generate-locale-matrix.sh"
    chmod +x "$SCRIPT_DIR/generate-files-config.sh"
    
    print_header "Test 1: Files Config Generation"
    if run_test "Generate files config" \
               "$SCRIPT_DIR/generate-files-config.sh" \
               "core:"; then
        ((passed_count++))
    fi
    ((test_count++))
    
    print_header "Test 2: Manual Trigger - All Locales"
    if run_test "Manual trigger (all locales)" \
               "$SCRIPT_DIR/generate-locale-matrix.sh manual" \
               "include="; then
        ((passed_count++))
    fi
    ((test_count++))
    
    print_header "Test 3: Manual Trigger - Specific Locales"
    if run_test "Manual trigger (en,zh-hans)" \
               "$SCRIPT_DIR/generate-locale-matrix.sh manual 'en,zh-hans'" \
               "include="; then
        ((passed_count++))
    fi
    ((test_count++))
    
    print_header "Test 4: Auto Trigger - No Changes"
    local no_changes_json='{"core_any_changed": "false", "en_any_changed": "false", "zh-hans_any_changed": "false"}'
    if run_test "Auto trigger (no changes)" \
               "$SCRIPT_DIR/generate-locale-matrix.sh auto '' '$no_changes_json'" \
               "has-changes=false"; then
        ((passed_count++))
    fi
    ((test_count++))
    
    print_header "Test 5: Auto Trigger - Core Changes"
    local core_changes_json='{"core_any_changed": "true", "en_any_changed": "false", "zh-hans_any_changed": "false"}'
    if run_test "Auto trigger (core changes)" \
               "$SCRIPT_DIR/generate-locale-matrix.sh auto '' '$core_changes_json'" \
               "has-changes=true"; then
        ((passed_count++))
    fi
    ((test_count++))
    
    print_header "Test 6: Auto Trigger - Locale Changes"
    local locale_changes_json='{"core_any_changed": "false", "en_any_changed": "true", "zh-hans_any_changed": "false"}'
    if run_test "Auto trigger (locale changes)" \
               "$SCRIPT_DIR/generate-locale-matrix.sh auto '' '$locale_changes_json'" \
               "has-changes=true"; then
        ((passed_count++))
    fi
    ((test_count++))
    
    print_header "Test 7: Docs PR Trigger"
    if run_test "Docs PR trigger" \
               "$SCRIPT_DIR/generate-locale-matrix.sh docs-pr '' '$core_changes_json'" \
               "has-changes=true"; then
        ((passed_count++))
    fi
    ((test_count++))
    
    print_header "Test 8: Error Handling - Invalid Trigger Type"
    if ! run_test "Invalid trigger type (should fail)" \
                  "$SCRIPT_DIR/generate-locale-matrix.sh invalid" \
                  "Error:"; then
        print_success "Invalid trigger type correctly rejected"
        ((passed_count++))
    else
        print_error "Invalid trigger type should have failed"
    fi
    ((test_count++))
    
    print_header "Test 9: Error Handling - Missing Changes JSON"
    if ! run_test "Missing changes JSON (should fail)" \
                  "$SCRIPT_DIR/generate-locale-matrix.sh auto" \
                  "Error:"; then
        print_success "Missing changes JSON correctly rejected"
        ((passed_count++))
    else
        print_error "Missing changes JSON should have failed"
    fi
    ((test_count++))
    
    print_header "Test 10: JSON Validation"
    # Test with valid JSON structure
    local test_output
    test_output=$("$SCRIPT_DIR/generate-locale-matrix.sh" manual 'en' 2>/dev/null)
    if echo "$test_output" | grep "include=" | cut -d= -f2 | jq . >/dev/null 2>&1; then
        print_success "Generated JSON is valid"
        ((passed_count++))
    else
        print_error "Generated JSON is invalid"
    fi
    ((test_count++))
    
    # Print summary
    print_header "Test Summary"
    echo "Passed: $passed_count/$test_count tests"
    
    if [ "$passed_count" -eq "$test_count" ]; then
        print_success "All tests passed!"
        exit 0
    else
        print_error "Some tests failed!"
        exit 1
    fi
}

# Run main function if script is executed directly
if [ "${BASH_SOURCE[0]}" == "${0}" ]; then
    main "$@"
fi
