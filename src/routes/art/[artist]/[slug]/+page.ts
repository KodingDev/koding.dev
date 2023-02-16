import type { getArtists } from '$lib/data/commissions';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params: { artist: artistName, slug } }) => {
  // Fetch the artists
  const artists: Awaited<ReturnType<typeof getArtists>> = await fetch('/api/art').then((res) => res.json());

  // Find the artist
  const artist = Object.entries(artists).find(([artist]) => artist === artistName)?.[1];
  if (!artist) throw error(404, 'Artist not found');

  // Find the commission
  const commission = artist.commissions.find((commission) => commission.slug === slug);
  if (!commission) throw error(404, 'Commission not found');

  return { artist, commission };
};
