import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg?w=50;100;200;300&picture';
import Commission1Set1 from './images/1-set1.png?w=256;512;1280;1920&picture';
import Commission1Set2 from './images/1-set2.png?w=256;512;1280;1920&picture';

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
      images: [Commission1Set1, Commission1Set2],
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
} satisfies ArtistData;
