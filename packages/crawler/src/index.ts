console.log('Crawler package initialized');

import { main as blog } from './blog';
import { main as learn } from './learn';

await blog();
await learn();
