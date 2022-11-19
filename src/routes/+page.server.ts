/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client } from '@notionhq/client';
import type { PageServerLoad } from './$types';
import { NOTION_KEY, NOTION_CLIENTS_DB_ID } from '$env/static/private';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({ auth: NOTION_KEY });

export const load: PageServerLoad = async ({ fetch }) => {
	const req = await fetch('https://gh-pinned-repos.egoist.dev/?username=KodingDev');
	const pinned: Repository[] = await req.json();

	const pages = await notion.databases.query({
		database_id: NOTION_CLIENTS_DB_ID,
		filter: {
			property: 'Public',
			checkbox: {
				equals: true
			}
		}
	});

	const clients: ClientItem[] = pages.results.map((_page) => {
		const page = _page as PageObjectResponse;
		const properties = page.properties;

		return {
			name: (properties.Name as any).title[0].plain_text,
			description: (properties.Description as any).rich_text[0].plain_text,
			website: (properties.Website as any).url,
			
			logo: (page.icon as any).file.url,
			cover: (page.cover as any).file.url,
		}
	});

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

export interface PageData {
	pinned: Repository[];
	clients: ClientItem[];
}

export interface SkillCategories {
	[name: string]: Skill[];
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

	logo?: string;
	cover?: string;
}
