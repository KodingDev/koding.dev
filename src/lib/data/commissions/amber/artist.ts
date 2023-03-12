import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg?w=50;100;200;300&picture';

import Commission1 from './images/1.jpg?w=256;512;1280;1920&picture';
import Commission2 from './images/2.png?w=256;512;1280;1920&picture';
import Commission3 from './images/3.png?w=256;512;1280;1920&picture';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Amber',
  link: 'https://twitter.com/FCLmao',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Commission 1',
      description: 'The first rendition of my character that Amber drew!',
      images: [Commission1],
    },
    {
      slug: 'commission-2',
      title: 'Commission 2',
      description: 'This is my main reference sheet that I use nowadays. They did a great job helping me refine my character & design some of the details.',
      images: [Commission2],
    },
    {
      slug: 'commission-3',
      title: 'Commission 3',
      description: 'BLEH!!! Based on the silly little cat that we all know and love. <3',
      images: [Commission3],
    },
  ],
} satisfies ArtistData;
