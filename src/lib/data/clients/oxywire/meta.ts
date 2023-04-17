import type { Client } from '$lib/data/clients';
import StickyMCBanner from './assets/stickymc-banner.png?image';
import avatar from './avatar.png?avatar';

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
