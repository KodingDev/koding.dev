import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpeg?avatar';
import Commission1 from './images/1.png?image';
import Commission1BG from './images/1-bg.png?image';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Alpha',
  link: 'https://twitter.com/Alphiixy',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Commission 1',
      description: 'The first commission that Alpha has made for me! Look how cute she is,,,',
      images: [Commission1, Commission1BG],
      links: [
        {
          text: 'Finished Tweet',
          href: 'https://twitter.com/Alphiixy/status/1382542828924936193',
        },
      ],
    },
  ],
} satisfies ArtistData;
