import { commissions } from '$lib/data/commissions';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	// Pass the commission data if we can find it
	const data = commissions.find((commission) => commission.slug === params.slug);
	if (data) return data;

	// Otherwise, return a 404
	throw error(404, 'Not found');
};
