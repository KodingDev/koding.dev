import type { Client } from '$lib/data/clients';
import avatar from './avatar.png?avatar';
import banner from './banner.png?image';

export default {
  name: 'CastiaMC',
  description: "Developing flexible, scalable, and maintainable Minecraft networks across OxyWire's servers.",
  href: 'https://castiamc.com',

  avatar,
  banner,

  start: 'Nov 2022',
  end: 'Jan 2023',

  projects: [
    {
      name: 'CastiaMC',
      description:
        'CastiaMC is a Minecraft Java server that focuses on an enhanced, polished survival experience. I primarily worked on updating existing features, creating a shared core framework, and improving the overall codebase.',

      links: [
        {
          name: 'Website',
          href: 'https://castiamc.com',
        },
      ],
      media: [],
    },
  ],
} satisfies Client;
