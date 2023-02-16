import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg';
import commission1 from './images/1.png';
import commission1bg from './images/1-bg.png';

export default {
  name: 'Alpha',
  link: 'https://twitter.com/Alphiixy',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Commission 1',
      description: 'The first commission that Alpha has made for me! Look how cute she is,,,',
      images: [commission1, commission1bg],
      links: [
        {
          text: 'Finished Tweet',
          href: 'https://twitter.com/Alphiixy/status/1382542828924936193',
        },
      ],
    },
  ],
} as ArtistData;
