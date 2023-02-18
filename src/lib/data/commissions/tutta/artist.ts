import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg';
import commission1 from './images/1.png';

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
      images: [commission1],
    },
  ],
} as ArtistData;
