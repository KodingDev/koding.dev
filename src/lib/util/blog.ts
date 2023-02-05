/**
 * Returns the slug from a path
 *
 * @param path The path to get the slug from
 * @returns The slug
 */
export const getSlug = (path: string): string | undefined => path.split('/').pop()?.split('.').shift();
