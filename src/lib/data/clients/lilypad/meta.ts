import type { Client } from '$lib/data/clients';
import avatar from './avatar.png?avatar';
import banner from './banner.png?image';

import Website from './assets/website.png?image';

export default {
  name: 'Lilypad.gg',
  description: 'Development of the Lilypad.gg website, billing panel & dashboard. Built with NextJS, Prisma, NextAuth, and TailwindCSS.',
  href: 'https://lilypad.gg',

  avatar,
  banner,

  start: 'Jul 2024',
  // No end date, still working with them

  projects: [
    {
      name: 'Lilypad.gg',
      description: 'Development of the Lilypad.gg website, billing panel & dashboard. Built with NextJS, Prisma, NextAuth, and TailwindCSS.',

      links: [
        {
          name: 'Website',
          href: 'https://lilypad.gg',
        },
      ],

      media: [
        {
          media: Website,
          caption: 'The Lilypad.gg website',
        },
      ],
    },
  ],
} satisfies Client;
