import type { ArtistData } from '$lib/data/commissions';
import avatar from './avatar.jpeg';
import commission1 from './images/1.png';

export default {
  name: 'Kinneticto',
  link: 'https://twitter.com/kinneticto',
  avatar,

  commissions: [
    {
      slug: 'commission-1',
      title: 'Commission 1',
      description:
        "I found Kinneticto from their INCREDIBLE art of Genshin Impact characters, and immediately jumped at the chance to commission them. They were very friendly and easy to work with, and I'm very happy with the result!",
      images: [commission1],
    },
  ],
} as ArtistData;
