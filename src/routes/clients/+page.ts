import { getClients } from '$lib/data/clients';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => ({ clients: await getClients() });
