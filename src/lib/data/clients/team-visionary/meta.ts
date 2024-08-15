import type { Client } from '$lib/data/clients';

import avatar from './avatar.png?avatar';
import banner from './banner.png?image';

import TwitchRivalsPoster from './assets/twitch-rivals-poster.jpeg?image';
import TwitchRivalsTrailer from './assets/twitch-rivals-trailer.mp4';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Team Visionary',
  description: 'Developed a modular minigame framework, and networked companion mod, for the House of Nightmares Twitch Rivals event.',
  href: 'https://teamvisionary.net',

  avatar,
  banner,

  start: 'Oct 2023',
  end: 'Feb 2024',

  projects: [
    {
      name: 'House of Nightmares',
      description:
        'A multi-day Twitch Rivals event, where players must escape a haunted house, solving puzzles and avoiding monsters. Each day held two minigames, each of which would eliminate players from the event, with the winner receiving a share of $100,000 USD.',
      media: [
        {
          media: TwitchRivalsPoster,
          caption: 'Twitch Rivals Poster',
        },
        {
          media: TwitchRivalsTrailer,
          caption: 'Twitch Rivals Trailer',
        },
      ],
      links: [
        {
          name: 'Twitch Rivals Schedule',
          href: 'https://schedule.twitchrivals.com/events/house-of-nightmares-ft-hannahxxrose-sylveey-on-twitch-rivals-7w3d8',
        },
      ],
    },
  ],
} satisfies Client;
