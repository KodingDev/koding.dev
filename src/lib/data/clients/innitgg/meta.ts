import type { Client } from '$lib/data/clients';
import MapCasino from './assets/map-casino.png?image';
import MapCult from './assets/map-cult.png?image';
import MapLobby from './assets/map-lobby.png?image';
import MapRoyale from './assets/map-royale.png?image';
import avatar from './avatar.jpg?avatar';
import banner from './banner.jpg?image';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Innit.gg',
  description: 'Developing a scalable, highly-available, and performant Minecraft server network, scaled through a custom Kubernetes deployment system.',
  href: 'https://innit.gg',

  avatar,
  banner,

  start: 'Mar 2022',
  end: 'Oct 2022',

  projects: [
    {
      name: 'Innit.gg',
      description:
        'A (now-defunct 😔) Minecraft server network, with a focus on providing a high-quality minigames. The network was built on a custom Kubernetes deployment system, which allowed for a highly-available, and performant experience, with minimal downtime.',

      avatar,

      media: [
        {
          media: MapLobby,
          caption: 'W.I.P. Maps - Lobby',
        },
        {
          media: MapRoyale,
          caption: 'W.I.P. Maps - Royale (BR)',
        },
        {
          media: MapCult,
          caption: 'W.I.P. Maps - Cult (SW)',
        },
        {
          media: MapCasino,
          caption: 'W.I.P. Maps - Casino (SW)',
        },
      ],
    },
  ],
} satisfies Client;
