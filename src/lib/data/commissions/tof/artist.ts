import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg?avatar';
import Commission3 from './images/3.png?image';
import Commission3Banner from './images/3-banner.png?image';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Tof',
  link: 'https://twitter.com/tofffxx_',
  avatar,

  commissions: [
    {
      slug: 'commission-3',
      title: 'Commission 3',

      images: [Commission3, Commission3Banner],
    },
  ],
} satisfies ArtistData;
