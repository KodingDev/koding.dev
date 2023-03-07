import type { Client } from '$lib/data/clients';
import avatar from './avatar.jpg?w=100;200;300&picture';
import banner from './banner.jpg?w=512;1280;1920&picture';

import CraftadiaAvatar from './assets/craftadia-avatar.png?w=100;200;300&picture';
import CraftadiaBank from './assets/craftadia-bank.png?w=512;1280;1920&picture';
import CraftadiaTreasureMerchant from './assets/craftadia-treasure-merchant.png?w=512;1280;1920&picture';
import CraftadiaWheel from './assets/craftadia-wheel.png?w=512;1280;1920&picture';

export default {
  name: 'Katalyst Media',
  description: 'Development for Craftadia and other Katalyst-owned Minecraft servers, updating legacy code and building new features.',
  href: 'https://katalyst.media',

  avatar,
  banner,

  start: 'Sep 2019',
  end: 'Nov 2021',

  projects: [
    {
      name: 'Craftadia',
      description:
        "Minecraft survival, built for the community. Incorporating a town system to encourage player interaction, a rich set of events to keep players engaged, and a custom plugin suite to enhance the gameplay experience. I've worked on a lot with Craftadia, many of it isn't listed here, due to the lack of screenshots.",

      avatar: CraftadiaAvatar,

      links: [
        {
          name: 'Website',
          href: 'https://craftadia.com',
        },
      ],

      media: [
        {
          media: CraftadiaBank,
          caption: 'Custom bank system, with interest rates, withdraw logs, and more.',
        },
        {
          media: CraftadiaTreasureMerchant,
          caption: 'Buy and sell loot',
        },
        {
          media: CraftadiaWheel,
          caption: 'Spins every x votes, granting the server a random reward',
        },
      ],
    },
  ],
} satisfies Client;
