import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg?avatar';
import Commission1 from './images/1.png?image';
import Commission1Paper from './images/1-paper.jpg?image';

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
