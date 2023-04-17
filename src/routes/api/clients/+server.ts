import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getClients } from '$lib/data/clients';

// noinspection JSUnusedGlobalSymbols
export const GET: RequestHandler = async () => json(await getClients());
