import type { Client } from '$lib/data/clients';
import avatar from './avatar.png?avatar';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Axolotl Studios',
  description: 'Implementation of a points and generator system for Skyblock.',

  avatar,

  start: 'Aug 2023',
  end: 'Sep 2023',

  projects: [
    {
      name: 'Points',
      description:
        'A points system for Skyblock, which allows players to earn points by completing tasks and challenges. The points can be used to purchase items and other rewards. Integrates with other plugins with an API.',
    },
    {
      name: 'Generator',
      description: 'A generator system for Skyblock, which allows players to generate resources over time. Includes a management GUI.',
    },
  ],
} satisfies Client;
