import type { Client } from '$lib/data/clients';

import avatar from './avatar.png?avatar';
import banner from './banner.jpg?image';

import OEAvatar from './assets/oe-avatar.png?avatar';
import OEInterpolation from './assets/oe-interpolation.mp4';
import OESettings from './assets/oe-settings.png?image';

export default {
  name: 'Origin Realms',
  description:
    'Working alongside an EXTREMELY talented team on seamless mod integration, enhancing the gameplay experience, while keeping the server magic alive.',
  href: 'https://originrealms.com',

  avatar,
  banner,

  start: 'Dec 2020',
  end: 'Jun 2022',

  projects: [
    {
      name: 'Origins Enhanced',
      description:
        'Origins Enhanced an official modification for Origin Realms, introducing multiple tweaks, fixes and features to enhance your gameplay experience. On their own, each feature may appear insignificant, yet – when combined – create a more immersive and smoother experience. These include armor stand interpolation to make all animations silky smooth to minor rendering fixes with foliage.',

      avatar: OEAvatar,

      links: [
        {
          name: 'CurseForge',
          href: 'https://www.curseforge.com/minecraft/mc-mods/origins-enhanced',
        },
        {
          name: 'Blog Post',
          href: 'https://originrealms.com/blog/origins-enhanced',
        },
      ],

      media: [
        {
          media: OEInterpolation,
          caption: 'Armor stand interpolation',
        },
        {
          media: OESettings,
          caption: 'Settings menu',
        },
      ],
    },
  ],
} satisfies Client;
