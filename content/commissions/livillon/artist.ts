import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg?avatar';
import Commission1Set1 from './images/1-set1.png?image';
import Commission1Set2 from './images/1-set2.png?image';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Livillon',
  link: 'https://twitter.com/Livillon',
  avatar,

  commissions: [
    {
      slug: 'emotes',
      title: 'Emotes',
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
