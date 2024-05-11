import { getPost } from '$lib/data/blog';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params: { slug } }) => {
  // Get the post
  const post = await getPost(slug);
  if (!post) return error(404, 'Post not found');

  // Return the post
  return post;
};
