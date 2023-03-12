import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg?w=50;100;200;300&picture';
import Commission2 from './images/2.png?w=256;512;1280;1920&picture';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Amiee',
  link: 'https://twitter.com/solarcello',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Reference Sheet',
      description: 'The first reference sheet I ever got!',
      images: [Commission2],
    },
  ],
} satisfies ArtistData;
