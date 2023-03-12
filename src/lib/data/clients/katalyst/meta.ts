import type { Client } from '$lib/data/clients';
import avatar from './avatar.jpg?avatar';
import banner from './banner.jpg?image';

import CraftadiaAvatar from './assets/craftadia-avatar.png?avatar';
import CraftadiaBank from './assets/craftadia-bank.png?image';
import CraftadiaTreasureMerchant from './assets/craftadia-treasure-merchant.png?image';
import CraftadiaWheel from './assets/craftadia-wheel.png?image';

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
