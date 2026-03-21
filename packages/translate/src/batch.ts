/**
 * Batch processing with concurrency control.
 */
export async function executeInBatches<T, R>(
  items: T[],
  fn: (item: T) => Promise<R>,
  concurrency: number,
): Promise<R[]> {
  const queue = [...items];
  const inProgress = new Set<T>();
  const results: R[] = [];

  async function processNext(): Promise<void> {
    if (queue.length === 0) return;

    // biome-ignore lint/style/noNonNullAssertion: queue checked above
    const item = queue.shift()!;
    inProgress.add(item);

    try {
      const result = await fn(item);
      results.push(result);
    } catch (error) {
      console.error(
        `Batch item error: ${error instanceof Error ? error.message : String(error)}`,
      );
    } finally {
      inProgress.delete(item);
      await processNext();
    }
  }

  const initialBatch = Math.min(concurrency, queue.length);
  const initialPromises: Promise<void>[] = [];

  for (let i = 0; i < initialBatch; i++) {
    initialPromises.push(processNext());
  }

  await Promise.all(initialPromises);

  while (inProgress.size > 0) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  return results;
}
