import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg?w=50;100;200;300&picture';
import Commission1 from './images/1.png?w=256;512;1280;1920&picture';
import Commission1Paper from './images/1-paper.jpg?w=256;512;1280;1920&picture';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'Andredan',
  link: 'https://twitter.com/andredan_art',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Commission 1',
      description: 'I initially had this drawn on paper, but I decided to get it digitally colored instead. I love how it turned out!',
      images: [Commission1, Commission1Paper],
      links: [
        {
          text: 'Finished Tweet',
          href: 'https://twitter.com/andredan_art/status/1497230139029086208',
        },
      ],
    },
  ],
} satisfies ArtistData;
