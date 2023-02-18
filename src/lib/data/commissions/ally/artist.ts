import type { ArtistData } from '$lib/data/commissions';
import commission2 from './images/2.png';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Ally',

  commissions: [
    {
      slug: 'commission-2',
      title: 'Commission 2',
      description: 'A small little goober.',
      images: [commission2],
    },
  ],
} as ArtistData;
