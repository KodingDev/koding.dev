import type { Client } from '$lib/data/clients';

import avatar from './avatar.jpg?avatar';
import banner from './banner.jpg?image';

import HyperiumAvatar from './assets/hyperium-avatar.png?avatar';
import HyperiumMenu from './assets/hyperium-menu.jpg?image';
import HyperiumSettings from './assets/hyperium-settings.jpeg?image';

export default {
  name: 'Sk1er LLC',
  description: 'Contributions to the Hyperium Minecraft Client.',
  href: 'https://sk1er.club',

  avatar,
  banner,

  start: 'Apr 2019',
  end: 'Dec 2019',

  projects: [
    {
      name: 'Hyperium',
      description:
        'A free, open-source Minecraft client that aims to improve the vanilla experience. I contributed to the client by adding a few features, fixing bugs, and improving the codebase. Honestly, I attribute the start of my programming career to this client, it was a fun start to the journey!',

      avatar: HyperiumAvatar,

      links: [
        {
          name: 'Homepage',
          href: 'https://hyperium.cc',
        },
        {
          name: 'GitHub',
          href: 'https://github.com/HyperiumClient/Hyperium',
          icon: 'icon-[mdi--github]',
        },
      ],

      media: [
        {
          media: HyperiumMenu,
          caption: 'The main menu (about the 300th iteration of it)',
        },
        {
          media: HyperiumSettings,
          caption: 'The settings menu (also about the 300th iteration of it)',
        },
      ],
    },
  ],
} satisfies Client;
