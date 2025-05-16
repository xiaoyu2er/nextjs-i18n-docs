import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { ORAMA_CONFIGS } from '@/lib/orama/config';
import { CloudManager } from '@oramacloud/client';
import type { OramaDocument } from 'fumadocs-core/search/orama-cloud';
import { sync } from '../src/lib/orama/orama-cloud';

export async function updateSearchIndexes(): Promise<void> {
  for (const item of ORAMA_CONFIGS) {
    const { locale, privateKey, index } = item;
    const manager = new CloudManager({ api_key: privateKey });

    // Get all .body files in the static directory
    const staticDir = path.join(`.next/server/app/${locale}/static`);
    let allRecords: OramaDocument[] = [];

    try {
      // Check if the directory exists
      await fs.access(staticDir);

      // Get all files in the static directory
      const files = await fs.readdir(staticDir);
      const bodyFiles = files.filter((file) => file.endsWith('.body'));

      // Read and parse each .body file
      for (const file of bodyFiles) {
        const filePath = path.join(staticDir, file);
        const content = await fs.readFile(filePath);
        const records = JSON.parse(
          content.toString(),
        ) as unknown as OramaDocument[];

        allRecords = [...allRecords, ...records];
      }
    } catch (error) {
      console.error(`Error reading files in ${staticDir}:`, error);
      continue; // Skip to the next locale if there's an error
    }

    console.log('---------------------');
    console.log(
      `Syncing locale:${locale} Orama index with`,
      allRecords.length,
      'files',
    );

    await sync(manager, {
      index,
      documents: allRecords,
    });
  }
}
