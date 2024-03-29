import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg?avatar';
import Commission1 from './images/1.png?image';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Charwiewie',
  link: 'https://twitter.com/charwiewie',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Commission 1',
      description:
        'A BEAUTIFUL rendition of my character, Stella! Charwiewie has such a fantastic style, and I love how she captured the personality in this piece.',
      images: [Commission1],
    },
  ],
} satisfies ArtistData;
