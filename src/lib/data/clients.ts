import { importData } from '$lib/util/data';
import type { Picture } from 'imagetools-core';
import _ from 'lodash';

type Month = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';
type Year = '2019' | '2020' | '2021' | '2022' | '2023' | '2024' | '2025';
type ClientDate = `${Month} ${Year}`;

export interface Client {
  /**
   * The name of the clients
   */
  name: string;

  /**
   * A brief description of the clients, generally what was majorly contributed
   */
  description: string;

  /**
   * An optional link to the clients, such as a GitHub repository or website
   */
  href?: string;

  /**
   * An optional banner to display for the clients
   */
  banner?: Picture;

  /**
   * An optional avatar to display for the clients
   */
  avatar?: Picture;

  /*
   * Date strings in the format of "Month YYYY"
   */
  start?: ClientDate;
  end?: ClientDate;

  /**
   * Testimonials from the clients
   */
  testimonials?: {
    /**
     * The name of the person who gave the testimonial
     */
    name: string;

    /**
     * The role of the person who gave the testimonial
     */
    role: string;

    /**
     * The testimonial itself
     */
    testimonial: string;

    /**
     * An optional link to the person's profile
     */
    url?: string;

    /**
     * An optional avatar to display for the person
     */
    avatar?: Picture;
  }[];

  /**
   * An array of projects that were worked on for this clients
   */
  projects: {
    /**
     * The name of the project
     */
    name: string;

    /**
     * A brief description of the project
     */
    description: string;

    /**
     * Optional avatar to display for the project
     */
    avatar?: Picture;

    /**
     * A list of links to the project & associated resources
     */
    links?: {
      /**
       * The name of the link
       */
      name: string;

      /**
       * The URL of the link
       */
      href: string;

      /**
       * An optional icon to display for the link
       */
      icon?: string;
    }[];

    /**
     * Media to display for the project
     */
    media?: {
      /**
       * The media to display, either an image as a {@link Picture},
       * or a link to a video as a string (YouTube supported)
       */
      media: Picture | string;

      /**
       * An optional caption to display for the media
       */
      caption?: string;
    }[];
  }[];
}

/**
 * Client name regex
 */
const CLIENT_NAME_REGEX = /.\/clients\/(?<name>[^/]+)\/meta\.ts/;

/**
 * Load the clients from the data directory
 */
export const getClients = async (): Promise<Record<string, Client>> => {
  // Use a dynamic import to load the data from the clients folder.
  const data = await importData<{ default: Client }>(() => import.meta.glob('./clients/*/meta.ts', { eager: true }), {
    regex: CLIENT_NAME_REGEX,
    group: 'name',
  });

  // Convert the map of paths to data to a single array of clients.
  return (
    _.chain(data)
      .mapValues(([, { default: client }]) => client) // Remove 'default' from the import
      .toPairs()
      // Sort the clients by their end date descending (if any), and leave "current" clients at the top.
      .sortBy(([, client]) => (client.end ? -parseDate(client.end).getTime() : -Infinity))
      .fromPairs()
      .value()
  );
};

/**
 * Get a clients by slug
 *
 * @param slug The slug of the clients
 * @returns The clients, or undefined if not found
 */
export const getClient = async (slug: string): Promise<Client | undefined> => (await getClients())[slug];

/**
 * Convert a date string to a date object
 *
 * @param date The date string
 * @returns The date object
 */
export const parseDate = (date: ClientDate): Date => {
  const [month, year] = date.split(' ');
  return new Date(`${year}-${month}-01`);
};
