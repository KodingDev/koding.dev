import type { Client } from '$lib/data/clients';
import avatar from './avatar.png?w=100;200;300&picture';
import banner from './banner.png?w=512;1280;1920&picture';
import MasayoshiGamesBanner1 from './assets/masayoshi-games-banner.jpg?w=512;1280;1920&picture';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'MC Party',
  description: 'Leading the development of both a minigame network & the server software behind the Masayoshi Twitch Rivals event.',
  url: 'https://mcparty.live',

  avatar,
  banner,

  start: 'Nov 2021',
  // No end date, still working with them

  testimonials: [
    {
      name: 'Dj Isaac',
      testimonial:
        'Stella is a great developer, and a great person. She is very knowledgeable and has a great understanding of the codebase. She is also very friendly and easy to work with. I would recommend her to anyone looking for a developer.',
      url: 'https://twitter.com/DeJayDev',
      avatar,
    },
  ],

  projects: [
    {
      name: 'Masayoshi Games',
      description:
        'A 64-player Hunger Games event, where players compete to be the last team standing. They are cast into an unfamiliar world, filled with "The Roots", and must defeat the infested monsters, and uncover rare loot to become the true "Root Champions"',

      links: [
        {
          name: 'Broadcast',
          url: 'https://www.twitch.tv/videos/1706498880',
        },
        {
          name: 'Schedule',
          url: 'https://schedule.twitchrivals.com/events/masayoshi-games-ft-minecraft-B04r1',
        },
      ],

      media: [
        {
          media: 'https://www.youtube.com/watch?v=a7k6WsF1nBE',
          caption: 'Masayoshi Games Trailer',
        },
        {
          media: MasayoshiGamesBanner1,
          caption: 'Logo',
        },
      ],
    },
  ],
} as Client;
