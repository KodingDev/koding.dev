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
		class="flex h-full flex-col gap-2 overflow-clip rounded-md border-[1px] border-neutral-300 bg-neutral-100 bg-opacity-70 transition-all hover:scale-[101%] dark:border-neutral-700 dark:bg-neutral-800"
	>
		{#if cover}
			<div class="relative">
				<img src={cover} class="h-40 w-full object-cover" alt="Company cover" />

				{#if logo}
					<img
						src={logo}
						class="absolute bottom-2 left-2 h-10 w-10 rounded-md border-[1px] border-neutral-300 bg-neutral-400 object-cover dark:border-neutral-700"
						alt="Company logo"
					/>
				{/if}
			</div>
		{/if}

		<div class="flex h-full flex-col justify-between px-4 pb-4">
			<div>
				<h2 class="font-medium text-blue-400">{name}</h2>
				<p class="text-body text-ellipsis line-clamp-2">{description}</p>
			</div>

			<div class="pt-2">
				<p class="text-sm text-neutral-500 dark:text-neutral-400">{start} - {end}</p>
			</div>
		</div>
	</div>
</a>
