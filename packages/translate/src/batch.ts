import { logger } from './logger';

// Batch processing execution function, controlling concurrency
export async function executeInBatches<T, R>(
  items: T[],
  fn: (item: T) => Promise<R>,
  concurrency: number,
): Promise<R[]> {
  // Copy array to avoid modifying original
  const queue = [...items];
  const inProgress = new Set<T>();
  const results: R[] = [];

  logger.debug(
    `Starting batch processing of ${items.length} items with concurrency ${concurrency}`,
  );

  // Process next item in queue
  async function processNext(): Promise<void> {
    if (queue.length === 0) return;

    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    const item = queue.shift()!;
    inProgress.add(item);

    try {
      const result = await fn(item);
      results.push(result);
    } catch (error) {
      console.error(error);
      logger.error(
        `Error processing batch item: ${error instanceof Error ? error.message : String(error)}`,
      );
    } finally {
      inProgress.delete(item);

      // Continue processing next item
      await processNext();
    }
  }

  // Start initial batch
  const initialBatch = Math.min(concurrency, queue.length);
  const initialPromises: Promise<void>[] = [];

  for (let i = 0; i < initialBatch; i++) {
    initialPromises.push(processNext());
  }

  // Wait for all tasks to complete
  await Promise.all(initialPromises);

  // Wait for all in-progress tasks to complete
  while (inProgress.size > 0) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  logger.debug(`Batch processing completed, processed ${results.length} items`);
  return results;
}
