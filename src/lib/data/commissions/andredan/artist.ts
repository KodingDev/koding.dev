import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg';
import commission1 from './images/1.png';
import commission1paper from './images/1-paper.jpg';

export default {
  name: 'Andredan',
  link: 'https://twitter.com/andredan_art',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Commission 1',
      description: 'I initially had this drawn on paper, but I decided to get it digitally colored instead. I love how it turned out!',
      images: [commission1, commission1paper],
      links: [
        {
          text: 'Finished Tweet',
          href: 'https://twitter.com/andredan_art/status/1497230139029086208',
        },
      ],
    },
  ],
} as ArtistData;
