import _ from 'lodash';
/**
 * The featured artist data & commission.
 */
import FeaturedArtist from '$lib/data/commissions/siomi/artist';
import { importData } from '$lib/util/data';

/**
 * Designed to have a single file per artist, which is significantly easier to
 * organize imports for.
 */
export interface ArtistData {
  name: string;
  avatar: string;
  link?: string;

  commissions: CommissionData[];
}

/**
 * A single commission, which can have multiple images.
 */
export interface CommissionData {
  slug: string;
  title: string;
  description?: string;

  /**
   * The images for the commission. The first image is the main image, and
   * the rest are additional images.
   */
  images: string[];

  /**
   * Optional links to other places, such as the artist's progress Tweets
   * or the original commission post.
   */
  links?: {
    text: string;
    href: string;
  }[];
}

/**
 * Artist name regex
 */
const ARTIST_NAME_REGEX = /.\/commissions\/(?<name>[^/]+)\/artist\.ts/;

/**
 * Loads the artist data from the commissions folder.
 *
 * @returns A map of artist names to their data.
 */
export const getArtists = async (): Promise<Record<string, ArtistData>> => {
  // Load the data
  const data = await importData<{ default: ArtistData }>(() => import.meta.glob('./commissions/*/artist.ts', { eager: true }), {
    regex: ARTIST_NAME_REGEX,
    group: 'name',
  });

  // Convert the map of paths to data to a map of artist names to data.
  return _.chain(data)
    .values()
    .map(([name, artist]) => [name, artist.default]) // Convert the map to an array of [name, artist] pairs.
    .fromPairs() // Convert the array back to a map.
    .value();
};

export const FEATURED_ARTIST = { artist: FeaturedArtist, commission: FeaturedArtist.commissions[0] };
