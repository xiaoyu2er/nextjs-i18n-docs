import { parseDocument } from 'yaml';
import { FRONTMATTER_TRANSLATABLE_FIELDS } from './parser';

/**
 * Extract translatable fields from frontmatter YAML.
 * Returns a map of field name → value (only string fields).
 */
export function extractTranslatableFields(
  frontmatterText: string,
): Record<string, string> {
  // Strip surrounding ---
  const yaml = frontmatterText.replace(/^---\n/, '').replace(/\n---$/, '');

  const doc = parseDocument(yaml);
  const fields: Record<string, string> = {};

  for (const field of FRONTMATTER_TRANSLATABLE_FIELDS) {
    const value = doc.get(field);
    if (typeof value === 'string' && value.trim()) {
      fields[field] = value;
    }
  }

  return fields;
}

/**
 * Reconstruct frontmatter with translated fields.
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
    if (doc.has(field)) {
      doc.set(field, value);
    }
  }

  return `---\n${doc.toString().trimEnd()}\n---`;
}
