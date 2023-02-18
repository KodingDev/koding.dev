import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg';
import commission1 from './images/1.png';

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
      images: [commission1],
    },
  ],
} as ArtistData;
