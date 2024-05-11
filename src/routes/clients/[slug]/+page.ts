import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getClient } from '$lib/data/clients';

export const load: PageLoad = async ({ params: { slug } }) => {
  // Get the clients
  const client = await getClient(slug);
  if (!client) return error(404, 'Client not found');

  // Return the clients
  return { client, slug };
};
