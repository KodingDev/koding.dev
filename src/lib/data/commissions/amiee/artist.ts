import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpg';
import commission2 from './images/2.png';

export default {
  name: 'Amiee',
  link: 'https://twitter.com/solarcello',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Reference Sheet',
      description: 'The first reference sheet I ever got!',
      images: [commission2],
    },
  ],
} as ArtistData;
