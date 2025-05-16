import type { CloudManager } from '@oramacloud/client';

import type {
  OramaDocument,
  OramaIndex,
  SyncOptions,
} from 'fumadocs-core/search/orama-cloud';

export async function sync(
  cloudManager: CloudManager,
  options: SyncOptions & { chunkSize?: number },
): Promise<void> {
  const { autoDeploy = true, chunkSize = 1000 } = options;
  const index = cloudManager.index(options.index);

  const records = options.documents.flatMap(toIndex);

  // Insert documents
  console.log(
    `Inserting ${records.length} records in chunks of ${chunkSize}...`,
  );
  console.log('Emptying index...');
  await index.empty();

  // Insert in chunks based on the chunkSize parameter
  for (let i = 0; i < records.length; i += chunkSize) {
    // await waitForOperationsToComplete(index);
    const chunk = records.slice(i, i + chunkSize);
    console.log(
      `Inserting chunk ${Math.floor(i / chunkSize) + 1}/${Math.ceil(records.length / chunkSize)} (${chunk.length} records)...`,
    );
    await index.insert(chunk);
  }
  if (autoDeploy) await index.deploy();
  console.log('All operations completed');
}

export function toIndex(page: OramaDocument): OramaIndex[] {
  let id = 0;
  const indexes: OramaIndex[] = [];
  const scannedHeadings = new Set<string>();

  function createIndex(
    section: string | undefined,
    sectionId: string | undefined,
    content: string,
  ): OramaIndex {
    return {
      id: `${page.id}-${(id++).toString()}`,
      title: page.title,
      url: page.url,
      page_id: page.id,
      tag: page.tag,
      section,
      section_id: sectionId,
      content,
      ...page.extra_data,
    };
  }

  if (page.description)
    indexes.push(createIndex(undefined, undefined, page.description));

  // biome-ignore lint/complexity/noForEach: <explanation>
  page.structured?.contents.forEach((p) => {
    const heading = p.heading
      ? page.structured.headings.find((h) => p.heading === h.id)
      : null;

    const index = createIndex(heading?.content, heading?.id, p.content);

    if (heading && !scannedHeadings.has(heading.id)) {
      scannedHeadings.add(heading.id);

      indexes.push(createIndex(heading.content, heading.id, heading.content));
    }

    indexes.push(index);
  });

  return indexes;
}
