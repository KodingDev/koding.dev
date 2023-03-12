import type { Client } from '$lib/data/clients';
import avatar from './avatar.jpg?avatar';
import banner from './banner.jpg?image';

export default {
  name: 'UTILITI',
  description: 'Designing a scalable, Kubernetes-based, and performant Minecraft network, and integrating in-house "Play to Earn" features.',
  href: 'https://utiliti.ai',

  avatar,
  banner,

  start: 'Mar 2022',
  end: 'Oct 2022',

  projects: [
    {
      name: 'Hero Galaxy - Minecraft',
      description:
        "A Minecraft server network, built with containerized 'minigame' instances, and integrated \"Play to Earn\" rewards upon completion of minigames. This was back in the NFT Worlds days, wasn't that fun!",
    },
  ],
} satisfies Client;
