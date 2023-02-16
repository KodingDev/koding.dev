import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg';
import commission1 from './images/1.png';
import commission1_banner from './images/1-banner.png';

export default {
  name: 'Peachy',
  link: 'https://twitter.com/peachy3334',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Commission 1',
      description: 'A more atmospheric piece focusing less on the character and more on the environment.',
      images: [commission1, commission1_banner],
    },
  ],
} as ArtistData;
