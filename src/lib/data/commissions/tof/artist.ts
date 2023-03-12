import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg?w=50;100;200;300&picture';
import Commission3 from './images/3.png?w=256;512;1280;1920&picture';
import Commission3Banner from './images/3-banner.png?w=256;512;1280;1920&picture';

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
