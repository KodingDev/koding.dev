/* eslint-disable @typescript-eslint/no-explicit-any */
import { NOTION_CLIENTS_DB_ID } from '$env/static/private';
import type { DateProperty } from '$lib/notion';
import { queryDatabase } from '$lib/notion/notion.server';
import type { ServerLoadEvent } from '@sveltejs/kit';

// noinspection JSUnusedGlobalSymbols
export const load = async ({ fetch }: ServerLoadEvent) => {
  // Fetch pinned repositories
  const req = await fetch('https://gh-pinned-repos.egoist.dev/?username=KodingDev');
  const pinned: Repository[] = await req.json();

  // Fetch clients
  const pages = await queryDatabase(NOTION_CLIENTS_DB_ID, {
    property: 'Public',
    checkbox: {
      equals: true,
    },
  }).catch((err) => {
    console.error('Failed to fetch clients from Notion', err);
    return [];
  });

  // Type the clients
  const clients = pages
    .map((page) => {
      // Dates
      const prop = page.properties['Working Since'] as DateProperty;

      // Convert date
      const date = prop.date.end ? new Date(prop.date.end) : new Date();

      return {
        page,
        date,
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .map((item) => item.page);

  return { pinned, clients };
};

export interface Repository {
  repo: string;
  link: string;
  description: string;
  language: string;
  languageColor: string;
  stars: string;
}

export interface Skill {
  name: string;
  color: string;
  link?: string;
}
