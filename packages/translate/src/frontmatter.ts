import { parseDocument } from 'yaml';
import { FRONTMATTER_TRANSLATABLE_FIELDS } from './parser';

/** Get a nested value from a YAML document using dot notation */
function getNestedValue(
  doc: ReturnType<typeof parseDocument>,
  path: string,
): unknown {
  const parts = path.split('.');
  let current: unknown = doc;
  for (const part of parts) {
    if (current == null) return undefined;
    if (typeof (current as { get?: unknown }).get === 'function') {
      current = (current as ReturnType<typeof parseDocument>).get(part);
    } else if (typeof current === 'object') {
      current = (current as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return current;
}

/** Set a nested value in a YAML document using dot notation */
function setNestedValue(
  doc: ReturnType<typeof parseDocument>,
  path: string,
  value: string,
): void {
  const parts = path.split('.');
  if (parts.length === 1) {
    if (doc.has(parts[0])) doc.set(parts[0], value);
    return;
  }
  // Navigate to parent, then set the last key
  let current: unknown = doc;
  for (let i = 0; i < parts.length - 1; i++) {
    if (typeof (current as { get?: unknown }).get === 'function') {
      current = (current as ReturnType<typeof parseDocument>).get(parts[i]);
    } else {
      return;
    }
  }
  const lastKey = parts[parts.length - 1];
  if (typeof (current as { set?: unknown }).set === 'function') {
    (current as ReturnType<typeof parseDocument>).set(lastKey, value);
  }
}

/**
 * Extract translatable fields from frontmatter YAML.
 * Supports dot notation for nested fields (e.g. "related.title").
 * Returns a map of field path → value (only string fields).
 */
export function extractTranslatableFields(
  frontmatterText: string,
): Record<string, string> {
  // Strip surrounding ---
  const yaml = frontmatterText.replace(/^---\n/, '').replace(/\n---$/, '');

  const doc = parseDocument(yaml);
  const fields: Record<string, string> = {};

  for (const field of FRONTMATTER_TRANSLATABLE_FIELDS) {
    const value = getNestedValue(doc, field);
    if (typeof value === 'string' && value.trim()) {
      fields[field] = value;
    }
  }

  return fields;
}

/**
 * Reconstruct frontmatter with translated fields.
 * Supports dot notation for nested fields.
 * Preserves all non-translated fields and YAML formatting.
 */
export function reconstructFrontmatter(
  frontmatterText: string,
  translatedFields: Record<string, string>,
): string {
  // Strip surrounding ---
  const yaml = frontmatterText.replace(/^---\n/, '').replace(/\n---$/, '');

  const doc = parseDocument(yaml);

  for (const [field, value] of Object.entries(translatedFields)) {
    setNestedValue(doc, field, value);
  }

  return `---\n${doc.toString().trimEnd()}\n---`;
}
