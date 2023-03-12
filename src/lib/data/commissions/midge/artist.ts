import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg?avatar';
import Commission1 from './images/1.png?image';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Midge',
  link: 'https://twitter.com/midgitea',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Commission 1',
      description: "I commissioned Midge to design my new OC, and they did a fantastic job! I'm super happy with her design!",
      images: [Commission1],
    },
  ],
} satisfies ArtistData;
