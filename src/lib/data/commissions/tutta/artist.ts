import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg?avatar';
import Commission1 from './images/1.png?image';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Tutta',
  link: 'https://twitter.com/MrsTDraw',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Commission 1',
      description: 'A pixel-art of my character, Stella!',
      images: [Commission1],
    },
  ],
} satisfies ArtistData;
