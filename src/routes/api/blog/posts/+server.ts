import { getPosts } from '$lib/data/blog';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// noinspection JSUnusedGlobalSymbols
export const GET: RequestHandler = async ({ url }) => {
  let posts = await getPosts();

  // Handle limit
  const limit = url.searchParams.get('limit');
  if (limit) {
    posts = posts.slice(0, Number(limit));
  }

  // We need to omit the component from the response
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return json(posts.map(({ component, ...post }) => post));
};
