import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg?w=50;100;200;300&picture';
import Commission1 from './images/1.png?w=256;512;1280;1920&picture';

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
