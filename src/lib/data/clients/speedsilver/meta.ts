import type { Client } from '$lib/data/clients';
import avatar from './avatar.jpg?avatar';
import banner from './banner.jpg?image';
import CivilizationIgn from './assets/civilization-ign.png?image';
import CivilizationUpcomingTest from './assets/civilization-upcoming-test.png?image';

export default {
  name: 'SpeedSilver',
  description: 'Development of several Discord Bots to ease video production & event management.',
  href: 'https://mcparty.live',

  avatar,
  banner,

  start: 'Mar 2022',
  end: 'Dec 2022',

  projects: [
    {
      name: 'Civilization Bot',
      description: 'Automated: Civilization event tests, IGN collection, tester messaging, and more.',

      links: [
        {
          name: 'Discord',
          href: 'https://discord.gg/2Z8Y4Y4',
          icon: 'icon-[mdi--discord]',
        },
      ],

      media: [
        {
          media: CivilizationUpcomingTest,
          caption: 'Upcoming Test',
        },
        {
          media: CivilizationIgn,
          caption: 'IGN Collection',
        },
      ],
    },
  ],
} satisfies Client;
