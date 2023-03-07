import type { Client } from '$lib/data/clients';
import StickyMCBanner from './assets/stickymc-banner.png?w=512;1280;1920&picture';
import avatar from './avatar.png?w=100;200;300&picture';

export default {
  name: 'OxyWire',
  description: "Developing flexible, scalable, and maintainable Minecraft networks across OxyWire's servers.",
  href: 'https://oxywire.com',

  avatar,

  start: 'Nov 2022',
  // No end date, still working with them

  projects: [
    {
      name: 'StickyMC',
      description: 'StickyMC is a Minecraft Java server that focuses on survival gameplay.',

      links: [
        {
          name: 'Website',
          href: 'https://stickymc.com',
        },
      ],

      media: [
        {
          media: StickyMCBanner,
          caption: 'StickyMC Banner (What else do I put here ?? lol)',
        },
      ],
    },
  ],
} satisfies Client;
