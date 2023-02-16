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
  // Use a dynamic import to load the data from the commissions folder.
  const data = await import.meta.glob<{ default: ArtistData }>('./commissions/*/artist.ts', { eager: true });

  // Convert the map of paths to data to a map of artist names to data.
  return Object.fromEntries(
    Object.entries(data).map(([path, artist]) => {
      // Get the artist's name from the path.
      const name = path.match(ARTIST_NAME_REGEX)?.groups?.name;

      // Return the artist's name and data.
      return [name, artist.default];
    })
  );
};

/**
 * The featured artist data & commission.
 */
import FeaturedArtist from '$lib/data/commissions/siomi/artist';
export const FEATURED_ARTIST = { artist: FeaturedArtist, commission: FeaturedArtist.commissions[0] };
