import type { PageLoad } from './$types';
import { getClients } from '$lib/data/clients';

export const load: PageLoad = async () => ({
  posts: [], // TODO: Re-implement posts
  clients: Object.values(await getClients()),
});
