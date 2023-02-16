import type { ArtistData } from '$lib/data/commissions';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const artists: ArtistData[] = await fetch('/api/art').then((r) => r.json());
  return { artists };
};
