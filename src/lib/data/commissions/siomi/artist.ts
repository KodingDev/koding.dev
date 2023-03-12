import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg?w=50;100;200;300&picture';
import Commission1 from './images/1.png?w=256;512;1280;1920&picture';
import Commission1NoWings from './images/1-no-wings.png?w=256;512;1280;1920&picture';
import Commission2 from './images/2.png?w=256;512;1280;1920&picture';

export default {
  name: 'Siomi',
  link: 'https://twitter.com/Siomi995',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Commission 1',
      description: 'This time, I asked Siomi to draw my character with wings & devil horns.',
      images: [Commission1, Commission1NoWings],
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
      images: [Commission2],
      links: [
        {
          text: 'Finished Tweet',
          href: 'https://twitter.com/Siomi995/status/1444960165158014979',
        },
      ],
    },
  ],
} satisfies ArtistData;
