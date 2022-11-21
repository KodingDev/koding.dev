import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export type DateResponse = {
	start: string;
	end: string | null;
};

export const convertNotionDates = (date: DateResponse) => {
	const start = new Date(date.start);
	const end = date.end ? new Date(date.end) : null;
	return { start, end };
};

export const convertRichText = (text: Array<RichTextItemResponse> | undefined) => {
	if (!text) return null;
	return text.map((item) => item.plain_text).join('');
};
