import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg';
import commission1 from './images/1.png';

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
      images: [commission1],
    },
  ],
} as ArtistData;
