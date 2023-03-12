import type { ArtistData } from '$lib/data/commissions';
import Commission2 from './images/2.png?w=256;512;1280;1920&picture';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Ally',

  commissions: [
    {
      slug: 'commission-2',
      title: 'Commission 2',
      description: 'A small little goober.',
      images: [Commission2],
    },
  ],
} satisfies ArtistData;
