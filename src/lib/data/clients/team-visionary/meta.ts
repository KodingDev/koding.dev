import type { Client } from '$lib/data/clients';

import avatar from './avatar.png?avatar';
import banner from './banner.png?image';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Team Visionary',
  description: 'Developing a minigame framework, several minigames, and a networked companion mod for a Twitch Rivals event.',
  href: 'https://teamvisionary.net',

  avatar,
  banner,

  start: 'Oct 2023',
  end: 'Feb 2024',

  projects: [
    {
      name: 'House of Nightmares',
      description: 'A minigame where players must escape a haunted house, solving puzzles and avoiding monsters.',
    },
  ],
} satisfies Client;
