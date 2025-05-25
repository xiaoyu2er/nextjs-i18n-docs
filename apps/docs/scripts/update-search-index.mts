import env from '@next/env';
env.loadEnvConfig(process.cwd());

console.log(process.env);

import { updateSearchIndexes } from './update-orama-index.mjs';

async function main() {
  console.log('Running post build script...');
  await Promise.all([updateSearchIndexes()]);
}

await main().catch((e) => {
  console.error('Failed to run post build script', e);
});
