import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg?avatar';
import Commission1 from './images/1.png?image';
import Commission1BG from './images/1-bg.png?image';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Hanako',
  link: 'https://twitter.com/hanakosart',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Commission 1',
      description: 'Hanako did such a BEAUTIFUL job with this piece! Stunning shading, composition, everything! Thank you so much!',
      images: [Commission1, Commission1BG],
    },
  ],
} satisfies ArtistData;
