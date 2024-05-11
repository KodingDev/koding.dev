import { getArtists } from '$lib/data/commissions';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params: { artist: artistName, slug } }) => {
  // Fetch the artists
  const artists = await getArtists();

  // Find the artist
  const artist = Object.entries(artists).find(([artist]) => artist.toLowerCase() === artistName.toLowerCase())?.[1];
  if (!artist) return error(404, 'Artist not found');

  // Find the commission
  const commission = artist.commissions.find((commission) => commission.slug === slug);
  if (!commission) return error(404, 'Commission not found');

  return { artist, commission };
};
