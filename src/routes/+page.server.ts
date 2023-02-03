/* eslint-disable @typescript-eslint/no-explicit-any */
import { NOTION_CLIENTS_DB_ID, NOTION_KEY } from '$env/static/private';
import { Client } from '@notionhq/client';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { convertNotionDates, convertRichText } from '$lib/util/notion';
import type { ServerLoadEvent } from '@sveltejs/kit';

const notion = new Client({ auth: NOTION_KEY });

// noinspection JSUnusedGlobalSymbols
export const load = async ({ fetch }: ServerLoadEvent) => {
	const req = await fetch('https://gh-pinned-repos.egoist.dev/?username=KodingDev');
	const pinned: Repository[] = await req.json();

	const pages = await notion.databases
		.query({
			database_id: NOTION_CLIENTS_DB_ID,
			filter: {
				property: 'Public',
				checkbox: {
					equals: true
				}
			}
		})
		.catch((err) => {
			console.error('Failed to fetch clients from Notion', err);
			return { results: [] };
		});

	const clients: ClientItem[] = pages.results
		.map((_page) => {
			const page = _page as PageObjectResponse;
			const properties = page.properties;

			// Type assertion
			if (properties.Name.type !== 'title') throw new Error('Name is not a title');
			if (properties.Description.type !== 'rich_text')
				throw new Error('Description is not rich text');
			if (properties.Website.type !== 'url') throw new Error('Website is not a URL');
			if (properties['Working Since'].type !== 'date')
				throw new Error('Working Since is not a date');

			if (page.icon?.type !== 'file') throw new Error('Logo is not a file');
			if (page.cover?.type !== 'file') throw new Error('Cover is not a file');

			// Convert dates
			const dates = properties['Working Since'].date
				? convertNotionDates(properties['Working Since'].date)
				: { start: new Date(), end: null };

			return {
				dates,
				properties,

				name: convertRichText(properties.Name.title) || '',
				description: convertRichText(properties.Description.rich_text) || 'Very mysterious!',
				website: properties.Website.url || undefined,
				logo: page.icon.file.url,
				cover: page.cover.file.url
			};
		})
		.sort((a, b) => (b.dates.end ?? new Date()).getTime() - (a.dates.end ?? new Date()).getTime());

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

export interface ClientItem {
	name: string;
	description: string;
	website?: string;
	dates: ReturnType<typeof convertNotionDates>;

	logo?: string;
	cover?: string;
}
