import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg';
import commission3 from './images/3.png';
import commission3_banner from './images/3-banner.png';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Tof',
  link: 'https://twitter.com/tofffxx_',
  avatar,

  commissions: [
    {
      slug: 'commission-3',
      title: 'Commission 3',

      images: [commission3, commission3_banner],
    },
  ],
} as ArtistData;
