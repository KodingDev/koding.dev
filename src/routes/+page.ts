import type { Post } from '$lib/data/blog';
import type { PageLoad } from './$types';
import type { Client } from '$lib/data/clients';

export const load: PageLoad = async ({ fetch }) => {
  const posts: Post[] = await fetch('/api/blog/posts?limit=3').then((r) => r.json());
  const clients: Record<string, Client> = await fetch('/api/clients').then((r) => r.json());
  return { posts, clients: Object.values(clients) };
};
