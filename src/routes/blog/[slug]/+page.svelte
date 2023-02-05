<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mb-12 w-full overflow-clip rounded-xl bg-neutral-800">
	<div class="flex flex-col gap-6">
		<div class="flex flex-col gap-2 bg-neutral-900 p-6">
			<h2 class="text-4xl font-bold">{data.metadata.title}</h2>

			<div class="flex flex-row gap-2">
				<span class="text-neutral-300"
					>{new Date(data.metadata.date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}</span
				>

				{#if data.metadata.tags}
					{#each data.metadata.tags as tag}
						<span class="text-neutral-400">#{tag}</span>
					{/each}
				{/if}
			</div>
		</div>

		<div class="prose mx-auto w-full py-6 dark:prose-invert">
			<svelte:component this={data.post} />
		</div>
	</div>
</div>
