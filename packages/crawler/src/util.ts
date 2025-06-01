import fs$ from 'node:fs/promises';
import path from 'node:path';
import { CONTENT_DIR } from './const';
import type { Writeable } from './type';

export function removeTrailingSlash(url: string): string {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

export function removeLeadingSlash(url: string): string {
  return url.startsWith('/') ? url.slice(1) : url;
}

export async function writeFiles(learns: Writeable[]) {
  for (const learn of learns) {
    const fileName = path.resolve(
      CONTENT_DIR,
      removeLeadingSlash(learn.filename),
    );
    const dirname = fileName.split(path.sep).slice(0, -1).join(path.sep);

    try {
      await fs$.mkdir(dirname, { recursive: true });
      await fs$.writeFile(fileName, learn.content);
      console.log(`Write file to ${fileName}`);
    } catch (error) {
      console.error(`Failed to write file ${learn.filename}:`, error);
    }
  }
}

export function mkdir(dir: string) {
  return fs$.mkdir(dir, { recursive: true });
}

export function removeEmptyValues(
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  obj: Record<string, any>,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
): Record<string, any> {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_, value]) => value !== undefined && value !== null && value !== '',
    ),
  );
}
