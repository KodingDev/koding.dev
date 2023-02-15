import { getPosts } from '$lib/data/blog';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const posts = await getPosts();

  // We need to omit the component from the response
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return json(posts.map(({ component, ...post }) => post));
};
