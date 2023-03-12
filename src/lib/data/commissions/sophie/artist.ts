import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg?avatar';
import Commission1 from './images/1.png?image';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Sophie',
  link: 'https://twitter.com/groggiie',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Commission 1',
      description: "My OC with a lil' cat friend :3",
      images: [Commission1],
    },
  ],
} satisfies ArtistData;
