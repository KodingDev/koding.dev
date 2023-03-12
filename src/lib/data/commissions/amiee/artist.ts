import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg?avatar';
import Commission2 from './images/2.png?image';

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
