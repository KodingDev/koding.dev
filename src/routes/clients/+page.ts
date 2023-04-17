import type { Client } from '$lib/data/clients';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const clients: Record<string, Client> = await fetch('/api/clients').then((r) => r.json());
  return { clients };
};
