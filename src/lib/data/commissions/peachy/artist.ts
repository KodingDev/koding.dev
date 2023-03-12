import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg?w=50;100;200;300&picture';
import Commission1 from './images/1.png?w=256;512;1280;1920&picture';
import Commission1Banner from './images/1-banner.png?w=256;512;1280;1920&picture';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Peachy',
  link: 'https://twitter.com/peachy3334',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Commission 1',
      description: 'A more atmospheric piece focusing less on the character and more on the environment.',
      images: [Commission1, Commission1Banner],
    },
  ],
} satisfies ArtistData;
