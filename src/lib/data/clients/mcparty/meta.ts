import type { Client } from '$lib/data/clients';

import avatar from './avatar.png?avatar';
import banner from './banner.png?image';

import MasayoshiAvatar from './assets/masayoshi-avatar.png?avatar';
import MasayoshiGamesBanner1 from './assets/masayoshi-games-banner.jpg?image';

import McPartyBlizzard from './assets/mcparty-blizzard.png?image';
import McPartyLobby from './assets/mcparty-lobby.png?image';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'MC Party',
  description: 'Leading the development of both a minigame network & the server software behind the Masayoshi Twitch Rivals event.',
  href: 'https://mcparty.live',

  avatar,
  banner,

  start: 'Nov 2021',
  // No end date, still working with them

  testimonials: [
    {
      name: 'Dj Isaac',
      role: 'CEO, MC Party',
      testimonial:
        'Stella is a *great developer*, and a great person. She is very knowledgeable and has a great understanding of the codebase. She is also very friendly and easy to work with. I would recommend her to anyone looking for a developer.',

      url: 'https://twitter.com/DeJayDev',
      avatar,
    },
  ],

  projects: [
    {
      name: 'Masayoshi Games',
      description:
        'A 64-player Hunger Games event, where players compete to be the last team standing. They are cast into an unfamiliar world, filled with "The Roots", and must defeat the infested monsters, and uncover rare loot to become the true "Root Champions"',

      avatar: MasayoshiAvatar,

      links: [
        {
          name: 'Broadcast',
          href: 'https://www.twitch.tv/videos/1706498880',
          icon: 'icon-[mdi--twitch]',
        },
        {
          name: 'Schedule',
          href: 'https://schedule.twitchrivals.com/events/masayoshi-games-ft-minecraft-B04r1',
        },
      ],

      media: [
        {
          media: 'https://www.youtube.com/watch?v=a7k6WsF1nBE',
          caption: 'Masayoshi Games Trailer',
        },
        {
          media: MasayoshiGamesBanner1,
          caption: 'Masayoshi Games Banner',
        },
      ],
    },

    {
      name: 'MC Party',
      description: 'A minigame network, built with a "Mario Party"-esc twist. Focused on fast-paced, fun, and competitive gameplay.',

      avatar,

      links: [
        {
          name: 'Website',
          href: 'https://mcparty.live',
        },
      ],

      media: [
        {
          media: McPartyLobby,
          caption: 'MC Party - Lobby',
        },
        {
          media: McPartyBlizzard,
          caption: 'MC Party - Blizzard Minigame',
        },
      ],
    },
  ],
} satisfies Client;
