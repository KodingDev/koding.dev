import { getArtists } from '$lib/data/commissions';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => ({
  artists: await getArtists(),
});
