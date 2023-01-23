<script lang="ts">
	import NotionBlock from '$lib/notion/blocks/NotionBlock.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="rounded bg-neutral-800 p-8">
	<h1 class="pb-4 text-3xl font-bold">NOT ion</h1>

	{#each data.blocks as block}
		<NotionBlock {block} />
	{/each}
</div>
