import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg';
import commission1_set1 from './images/1-set1.png';
import commission1_set2 from './images/1-set2.png';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Livillon',
  link: 'https://twitter.com/Livillon',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Commission 1',
      description: 'My set of emotes that I commissioned Livillon for.',
      images: [commission1_set1, commission1_set2],
      links: [
        {
          text: 'Set 1',
          href: 'https://twitter.com/Livillon/status/1534973612695900174',
        },
        {
          text: 'Set 2',
          href: 'https://twitter.com/Livillon/status/1550148606790868992',
        },
      ],
    },
  ],
} as ArtistData;
