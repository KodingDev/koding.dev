import type { Client } from '$lib/data/clients';
import CubeGeneratorIsland from './assets/cube-generator-island.png?w=512;1280;1920&picture';
import CubeGeneratorPlace from './assets/cube-generator-place.mp4';
import avatar from './avatar.png?w=100;200;300&picture';
import banner from './banner.png?w=512;1280;1920&picture';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'FadeCloud',
  description: 'Development of the Cube Generator plugin for Skyblock.',
  href: 'https://fadecloud.net',

  avatar,
  banner,

  start: 'Jan 2023',
  // No end date, still working with them

  projects: [
    {
      name: 'Cube Generator',
      description:
        "A 'Cube Generator' is an item that - when placed generates - a bedrock cube with ores inside of it. The ores inside can be mined by players, and will be automatically added to a virtual storage system.",
      media: [
        {
          media: CubeGeneratorPlace,
          caption: 'Placement / breaking of a Cube Generator.',
        },
        {
          media: CubeGeneratorIsland,
          caption: 'An island with a Cube Generator placed on it.',
        },
      ],
    },
  ],
} satisfies Client;
