import { getPosts } from '$lib/data/blog';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// noinspection JSUnusedGlobalSymbols
export const GET: RequestHandler = async ({ params: { slug } }) => {
  const posts = await getPosts();

  // Find the post
  const post = posts.find((post) => post.slug === slug);
  if (!post) throw error(404, 'Post not found');

  // We need to omit the component from the response
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { component, ...postWithoutComponent } = post;
  return json(postWithoutComponent);
};
