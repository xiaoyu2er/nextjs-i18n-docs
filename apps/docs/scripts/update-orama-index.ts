import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { ORAMA_CONFIGS_MAP } from '@/lib/orama/config';
import { sync } from '@/lib/orama/orama-cloud';
import { CloudManager } from '@oramacloud/client';
import type { OramaDocument } from 'fumadocs-core/search/orama-cloud';
import type { Locale } from 'next-intl';

export async function updateSearchIndexes(): Promise<void> {
  if (!process.env.ORAMA_PRIVATE_API_KEY) {
    console.warn(
      'ORAMA_PRIVATE_API_KEY is not set. Skipping Orama index update.',
    );
    return;
  }
  const config = ORAMA_CONFIGS_MAP[process.env.LOCALE as Locale];
  if (!config) {
    console.warn(
      `No Orama config found for locale: ${process.env.LOCALE}. Skipping index update.`,
    );
    return;
  }
  const { locale, index } = config;

  const manager = new CloudManager({
    api_key: process.env.ORAMA_PRIVATE_API_KEY || '',
  });
  // Get all .body files in the static directory
  const staticDir = path.join('.next/server/app/search-index');
  let allRecords: OramaDocument[] = [];

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

  console.log('---------------------');
  console.log(
    `Syncing locale:${locale} Orama index with`,
    allRecords.length,
    'files',
  );

  await sync(manager, {
    index,
    documents: allRecords,
    chunkSize: 2000,
  });
}
