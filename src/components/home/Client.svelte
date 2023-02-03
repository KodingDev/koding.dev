<script lang="ts">
	import type {
		DateProperty,
		NotionPage,
		RichTextProperty,
		TitleProperty,
		UrlProperty
	} from '$lib/notion';
	import NotionRichText from '$lib/notion/blocks/NotionRichText.svelte';

	export let client: NotionPage;

	// Extract the properties from the client object
	// TODO: Type these properties
	const title = client.properties.Name as TitleProperty;
	const description = client.properties.Description as RichTextProperty;
	const website = client.properties.Website as UrlProperty;
	const date = client.properties['Working Since'] as DateProperty;

	// Date formatting
	const formatDate = (date: Date) =>
		date.toLocaleDateString('en-US', {
			month: 'long',
			year: 'numeric'
		});

	const start = formatDate(new Date(date.date.start));
	const end = date.date.end ? formatDate(new Date(date.date.end)) : 'Present';
</script>

<a href={website.url} rel="noopener noreferrer" target="_blank">
	<div
		class="flex h-full flex-col gap-2 overflow-clip rounded-md border-[1px] border-neutral-300 bg-neutral-100 bg-opacity-70 transition-all hover:scale-[101%] dark:border-neutral-700 dark:bg-neutral-800"
	>
		{#if client.cover}
			<div class="relative">
				<img
					src={client.cover[client.cover.type].url}
					class="h-40 w-full object-cover"
					alt="Company cover"
				/>

				{#if client.icon}
					<img
						src={client.icon[client.icon.type].url}
						class="absolute bottom-2 left-2 h-10 w-10 rounded-md border-[1px] border-neutral-300 bg-neutral-400 object-cover dark:border-neutral-700"
						alt="Company logo"
					/>
				{/if}
			</div>
		{/if}

		<div class="flex h-full flex-col justify-between px-4 pb-4">
			<div>
				<h2 class="font-medium text-blue-400">
					<NotionRichText text={title.title} />
				</h2>
				<p class="text-body text-ellipsis line-clamp-2">
					<NotionRichText text={description.rich_text} />
				</p>
			</div>

			<div class="pt-2">
				<p class="text-sm text-neutral-500 dark:text-neutral-400">{start} - {end}</p>
			</div>
		</div>
	</div>
</a>
