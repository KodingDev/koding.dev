import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg';
import commission1 from './images/1.png';
import commission1_no_wings from './images/1-no-wings.png';
import commission2 from './images/2.png';

export default {
  name: 'Siomi',
  link: 'https://twitter.com/Siomi995',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Commission 1',
      description: 'This time, I asked Siomi to draw my character with wings & devil horns.',
      images: [commission1, commission1_no_wings],
      links: [
        {
          text: 'Finished Tweet',
          href: 'https://twitter.com/Siomi995/status/1413732087144673284',
        },
      ],
    },
    {
      slug: 'commission-2',
      title: 'Commission 2',
      description: 'Goober.',
      images: [commission2],
      links: [
        {
          text: 'Finished Tweet',
          href: 'https://twitter.com/Siomi995/status/1444960165158014979',
        },
      ],
    },
  ],
} as ArtistData;
