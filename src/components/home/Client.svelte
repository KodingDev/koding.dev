<script lang="ts">
	import type { ClientItem } from 'src/routes/+page.server';

	export let client: ClientItem;

	const { name, description, website, logo, cover } = client;

	const formatDate = (date: Date) =>
		date.toLocaleDateString('en-US', {
			month: 'long',
			year: 'numeric'
		});

	const start = formatDate(client.dates.start);
	const end = client.dates.end ? formatDate(client.dates.end) : 'Present';
</script>

<a href={website} rel="noopener noreferrer" target="_blank">
	<div
		class="flex flex-col h-full gap-2 border-[1px] rounded-md border-neutral-300 dark:border-neutral-700 transition-all hover:scale-[101%] overflow-clip bg-neutral-100 dark:bg-neutral-800 bg-opacity-70"
	>
		{#if cover}
			<div class="relative">
				<img src={cover} class="w-full h-40 object-cover" alt="Company cover" />

				{#if logo}
					<img
						src={logo}
						class="absolute bottom-2 left-2 w-10 h-10 object-cover rounded-md"
						alt="Company logo"
					/>
				{/if}
			</div>
		{/if}

		<div class="px-4 pb-4 flex flex-col justify-between h-full">
			<div>
				<h2 class="font-medium text-blue-400">{name}</h2>
				<p class="text-body line-clamp-2 text-ellipsis">{description}</p>
			</div>

			<div class="pt-2">
				<p class="text-sm text-neutral-500 dark:text-neutral-400">{start} - {end}</p>
			</div>
		</div>
	</div>
</a>
