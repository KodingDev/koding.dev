import type { ArtistData } from '$lib/data/commissions';
import Commission1 from './images/1.jpg?image';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Hiss',

  commissions: [
    {
      slug: 'commission-1',
      title: 'Commission 1',
      description: 'I asked hiss to draw my OC in a different outfit, and I love how it turned out!',
      images: [Commission1],
    },
  ],
} satisfies ArtistData;
