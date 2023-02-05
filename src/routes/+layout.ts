import type { LayoutLoad } from './$types';

/*
 * Always provide the pathname to the layout, so that it can
 * be used to determine which page is active
 */
export const load: LayoutLoad = async ({ url: { pathname } }) => {
  return { pathname };
};
