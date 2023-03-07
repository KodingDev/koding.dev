import type { Client } from '$lib/data/clients';
import avatar from './avatar.jpg?w=100;200;300&picture';
import banner from './banner.jpg?w=512;1280;1920&picture';
import CivilizationIgn from './assets/civilization-ign.png?w=512;1280;1920&picture';
import CivilizationUpcomingTest from './assets/civilization-upcoming-test.png?w=512;1280;1920&picture';

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
